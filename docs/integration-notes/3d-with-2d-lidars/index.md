# Create 3D Point Clouds with a 2D LiDAR and an Encoder

> Build 3D point clouds with an LRS4000 or picoScan100 on a moving axis: host-side transform with encoder data, or the on-device scan merger.

Source: https://sickag.github.io/sick_lidar_developer_guide/integration-notes/3d-with-2d-lidars/

# 3D with 2D LiDARs

Compatible with: LRS4000 picoScan100

The LRS4000 and the picoScan100 measure distance and intensity in a single plane. Mounting the sensor on a motorized axis (tilt, rotation, or a linear stage) sweeps that plane through 3D space. If an incremental encoder is attached to the axis, the rotation angle at the moment of each scan is known precisely. This means every 2D point can be rotated into a common 3D frame, and a full sweep becomes a dense 3D point cloud.

Both approaches work on both devices. The ports below are examples; use the
ports configured on your sensor. The LRS4000 sends Compact over TCP instead of
UDP; see [Compact Format: Transport](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/#transport).

Two approaches exist. Choose based on where you want the geometry code to run.

<p class="table-caption" markdown>**3D with 2D LiDARs:** comparison criterion, Approach A (host-side), and Approach B (on-device).</p>

|              | Approach A (host-side)                                      | Approach B (on-device)                             |
| ------------ | ----------------------------------------------------------- | -------------------------------------------------- |
| Angle source | Encoder wired to the sensor                                 | Encoder wired to the sensor, or the built-in IMU   |
| Processing   | Host receives the scan frames and applies the 3D transform  | Device accumulates and saves a PCD file internally |
| Result       | One host-generated `.pcd` per sweep                         | Single `.pcd` file stored on the device            |
| Best for     | Custom transforms, real-time streaming, maximum flexibility | Simple integration, no host-side geometry code     |

For every scan frame, the sensor sends an encoder telegram (Compact type 4) with the same `frame_number` and the encoder tick count. This gives frame-accurate synchronization without timing jitter between the scan and position streams. Encoder input is available on the LRS4000 and the picoScan150.

## Hardware and Ports

A typical example is a sensor on a motorized tilt axis with a SICK DFS60-series incremental encoder wired to the sensor's encoder input. The same idea applies to rotation or linear stages: what matters is that an encoder on the moving axis feeds the sensor so each scan frame carries a position value.

<p class="table-caption" markdown>**Hardware and Ports:** stream, protocol, port, and content.</p>

| Stream       | Protocol    | Port | Content                                                       |
| ------------ | ----------- | ---- | ------------------------------------------------------------- |
| Scan data    | Compact UDP | 2115 | 2D distance + intensity per segment, with `frame_number`      |
| Encoder data | Compact UDP | 7504 | `tick_count`, reference ticks, speed, `frame_number`          |

Enable encoder data output (`EncoderDataEnable`, destination in `EncoderDataEthSettings`, default port 7504) and reset the encoder counter at the reference position before you collect data. The [Configuration backup & restore](https://sickag.github.io/sick_lidar_developer_guide/configuration/configuration-backup-and-restore/) flow is a convenient way to apply a validated encoder configuration.

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

Process the two UDP streams and transform each scan frame. The `udp_listen`,
`run_until_interrupted`, and `save_pcd` calls are placeholders for your UDP
receiver, Compact parser, and PCD writer:

```python
import math

TICKS_PER_REV = 10000     # set to your encoder's ticks per revolution
encoder_map = {}          # frame_number -> tick
last_tick = 0
cloud_pts = []

def on_encoder_packet(pkt):
    global last_tick
    encoder_map[pkt.frame_number] = pkt.tick_count
    last_tick = pkt.tick_count

def on_scan_frame(frame, points_2d):
    tick = encoder_map.pop(frame.frame_number, last_tick)
    theta = (tick / TICKS_PER_REV) * 2 * math.pi
    for x, y, intensity in points_2d:
        cloud_pts.append({
            "x": x * math.cos(theta),
            "y": y,
            "z": x * math.sin(theta),
            "intensity": intensity,
        })

udp_listen(port=2115, callback=on_scan_frame)       # placeholder
udp_listen(port=7504, callback=on_encoder_packet)   # placeholder
run_until_interrupted()                             # placeholder
save_pcd(cloud_pts, "cloud.pcd")                    # placeholder
```

Example code: [MIT License](https://opensource.org/license/mit), © 2026 SICK AG. Provided as is, without warranty. Test it before you use it with a machine or in production.

The [sick_perception_sdk](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/coding-tools-and-examples/) (C++17) is a good starting point for a host-side implementation.

## Approach B: On-Device Scan Merger

The device combines the 2D scans with the IMU or encoder angle itself and stores
one `.pcd` file. See [3D Scan Recording](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/3d-scan-recording/)
for the configuration and workflow.
