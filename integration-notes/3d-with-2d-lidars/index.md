# 3D with 2D LiDARs

The picoScan100 measures distance and intensity in a single plane. Mounting it on a motorized axis (tilt, rotation, or a linear stage) sweeps that plane through 3D space. If an incremental encoder is attached to the axis, the rotation angle at the moment of each scan is known precisely. This means every 2D point can be rotated into a common 3D frame, and a full sweep becomes a dense 3D point cloud.

Two approaches exist. Choose based on where you want the geometry code to run.

<p class="table-caption" markdown>**3D with 2D LiDARs:** comparison criterion, Approach A (host-side), and Approach B (on-device).</p>

|              | Approach A (host-side)                                      | Approach B (on-device)                             |
| ------------ | ----------------------------------------------------------- | -------------------------------------------------- |
| Angle source | Encoder wired to the sensor                                 | Encoder wired to the sensor, or the built-in IMU   |
| Processing   | Host receives raw UDP frames and applies the 3D transform   | Device accumulates and saves a PCD file internally |
| Result       | One host-generated `.pcd` per sweep                         | Single `.pcd` from `GET /cloud.pcd`                |
| Best for     | Custom transforms, real-time streaming, maximum flexibility | Simple integration, no host-side geometry code     |

For every scan frame, the sensor sends an encoder telegram (Compact type 4) with the same `frame_number` and the encoder tick count. This gives frame-accurate synchronization without timing jitter between the scan and position streams. Encoder input is available on the picoScan150.

## Hardware and Ports

A typical example is a sensor on a motorized tilt axis with a SICK DFS60-series incremental encoder wired to the sensor's encoder input. The same idea applies to rotation or linear stages: what matters is that an encoder on the moving axis feeds the sensor so each scan frame carries a position value.

<p class="table-caption" markdown>**Hardware and Ports:** stream, protocol, port, and content.</p>

| Stream       | Protocol    | Port | Content                                                       |
| ------------ | ----------- | ---- | ------------------------------------------------------------- |
| Scan data    | Compact UDP | 2115 | 2D distance + intensity per segment, with `frame_number`      |
| Encoder data | Compact UDP | 7504 | `tick_count`, reference ticks, speed, `frame_number`          |

Enable encoder data output (`EncoderDataEnable`, destination in `EncoderDataEthSettings`, default port 7504) and reset the encoder counter at the reference position before you collect data. The [Configuration backup & restore](../configuration/configuration-backup-and-restore.md) flow is a convenient way to apply a validated encoder configuration.

## Approach A: Host-Side Transform

### Synchronize by Frame Number

Both UDP streams carry a `frame_number`. Build a lookup table from that number to the encoder tick, so you can retrieve the exact axis angle for any scan frame even when the two streams arrive slightly out of order:

```txt
on encoder packet:  encoder_map[packet.frame_number] = packet.tick_count
on scan frame:      tick = encoder_map.lookup(frame.frame_number)  # or most-recent tick
```

Keep the table bounded in size to avoid unbounded memory growth over long acquisitions.

### Coordinate Transform

Convert each encoder tick to an angle, then rotate the 2D scan point around the axis. For a tilt axis along the world Y-axis with the scan plane horizontal at the reference:

```txt
theta   = (tick / ticks_per_revolution) * 2 * PI      # radians
x_world = x_scan * cos(theta)
y_world = y_scan                                       # lateral axis unchanged
z_world = x_scan * sin(theta)
```

Set ticks-per-revolution correctly. This value is specific to your encoder model. A mismatch produces a distorted point cloud. Reset the encoder counter at the reference position so tick 0 is your angular origin, and adapt the transform for a different axis orientation or a linear stage.

### End-to-End Pseudocode

Reset the encoder counter to establish tick 0:

```http
POST /api/mResetEncoderIncrement
```

Process the two UDP streams and transform each scan frame:

```python
encoder_map = {}          # frame_number -> tick
cloud_pts   = []

def on_encoder_packet(pkt):
    encoder_map[pkt.frame_number] = pkt.tick_count

def on_scan_frame(frame, points_2d):
    tick  = encoder_map.get(frame.frame_number, last_known_tick)
    theta = (tick / TICKS_PER_REV) * 2 * PI
    for (x, y, intensity) in points_2d:
        cloud_pts.append({ x: x*cos(theta), y: y, z: x*sin(theta), intensity })

udp_listen(port=2115, callback=on_scan_frame)
udp_listen(port=7504, callback=on_encoder_packet)
run_until_interrupted()
save_pcd(cloud_pts, "cloud.pcd")
```

The [sick_perception_sdk](programming-tools-and-examples.md) (C++17) is a good starting point for a host-side implementation.

## Approach B: On-Device Scan Merger

The on-device scan merger runs entirely on the device. While the sensor rotates, it combines consecutive 2D profiles into a 3D point cloud and saves a `.pcd` file in device storage. The host only needs to trigger, poll, and download the result with one HTTP GET; no UDP parsing or transform code is required. The angle source is configurable (encoder, or the built-in IMU when no encoder is available).

![3D scan recording interface](../assets/picoScan100/img/application_pointcloud_20260826_153132.png)
*Live capture of the 3D scan recording interface on a picoScan100.*

### Configuration Parameters

<p class="table-caption" markdown>**Configuration Parameters:** parameter, endpoint, values, and description.</p>

| Parameter           | Endpoint                      | Values                    | Description                          |
| ------------------- | ----------------------------- | ------------------------- | ------------------------------------ |
| `ScanMergerEnabled` | `POST /api/ScanMergerEnabled` | `true` / `false`          | Enable the scan merger               |
| `ScanMergerSource`  | `POST /api/ScanMergerSource`  | `0` (IMU) / `1` (ENCODER) | Rotation reference                   |
| `ScanMergeTrigger`  | `POST /api/ScanMergeTrigger`  | `0` (METHOD)              | Start/stop via method calls          |
| `RotationOffset`    | `POST /api/RotationOffset`    | `{x, y, z}` in mm         | Sensor offset from the rotation axis |

Setting parameters and calling merger methods requires [challenge-response authentication](../configuration/rest-interface.md#challenge-response-authentication).

### Workflow

1. Configure the merger parameters and persist them with `WriteEeprom`.
2. `POST /api/ResetScanMergeView`: clear any previous recording.
3. `POST /api/StartScanMerge`: start recording while the axis moves.
4. `POST /api/StopScanMerge`: stop recording after the sweep.
5. Poll `GET /api/MergeSaving` until it changes from `true` (saving) back to `false`. The point cloud is then ready.
6. `GET /cloud.pcd` (port 80, outside `/api/`): download the point cloud, for example `curl http://192.168.0.1/cloud.pcd -o cloud.pcd`.

Only the most recent point cloud is available. The scan merger is a one-shot recorder: it accumulates on the device and stores one PCD file. There is no continuous 3D output. For continuous 3D, use Approach A or the [Compact stream](../data-streaming/compact-format.md) with your own accumulation.
