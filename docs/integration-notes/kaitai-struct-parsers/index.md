# SICK LiDAR: Generate Parsers with Kaitai Struct

> Generate Compact data parsers for SICK LiDAR sensors using Kaitai Struct, with a browser-based workflow or the command-line compiler.

Source: https://sickag.github.io/sick_lidar_developer_guide/integration-notes/kaitai-struct-parsers/

# Kaitai Struct Parsers

Compatible with: LRS4000 multiScan100 multiScan200 picoScan100

<div class="tool-intro" markdown>

![Kaitai Struct](https://sickag.github.io/sick_lidar_developer_guide/assets/integration-notes/kaitai-struct-logo.png)
[Kaitai Struct](https://kaitai.io/) generates parsing code from a binary-format description. Use SICK's [KaitaiStructDescriptions](https://github.com/SICKAG/KaitaiStructDescriptions) to build a [Compact](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/) parser in Python, C++, C#, Java, Go, or another supported language instead of implementing the byte layout yourself.

</div>

## What Is Kaitai Struct?

A `.ksy` file describes a binary format in YAML: field names, data types, byte order, repeated structures, and conditions. The compiler turns that description into parser classes for your chosen language. The same description can therefore serve applications written in different languages without maintaining separate byte-offset logic.

The Web IDE combines a hex view with a parsed field tree. Load a captured telegram to explore the structure before adding the generated code to your application.

## Compact Frame and Payloads

The definitions are in the repository's `formats` directory. Start with `compact_frame.ksy`: it reads the outer frame and selects the payload definition using `telegram_type`. Keep the other `.ksy` files alongside it because the frame imports them. The definitions cover scan, IMU, ambient-light, and encoder telegrams; availability depends on the sensor.

All telegrams have the following outer frame. Multi-byte numbers are little-endian.

<p class="table-caption" markdown>**Compact Frame:** fields in transmission order, size, and purpose.</p>

| Field            | Size     | Purpose                                                 |
| ---------------- | -------- | ------------------------------------------------------- |
| `start_of_frame` | 4 bytes  | Start marker: `02 02 02 02`                             |
| `telegram_type`  | 4 bytes  | Selects the payload definition                          |
| `payload`        | Variable | Scan, IMU, ambient-light, or encoder data               |
| `checksum`       | 4 bytes  | CRC32 over the start marker, telegram type, and payload |

The [frame definition](https://github.com/SICKAG/KaitaiStructDescriptions/blob/public/formats/compact_frame.ksy) imports these payload definitions:

<p class="table-caption" markdown>**Payload Definitions:** telegram type, content, and supported devices.</p>

| Type | Definition                                                                                                                                               | Devices                            |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| 1    | [Scan data, spherical coordinates](https://github.com/SICKAG/KaitaiStructDescriptions/blob/public/formats/type_1_primary_data_spherical_coordinates.ksy) | LRS4000, multiScan100, picoScan100 |
| 2    | [IMU](https://github.com/SICKAG/KaitaiStructDescriptions/blob/public/formats/type_2_imu.ksy)                                                             | multiScan100, picoScan100          |
| 3    | [Ambient light](https://github.com/SICKAG/KaitaiStructDescriptions/blob/public/formats/type_3_ambient_light.ksy)                                         | multiScan200                       |
| 4    | [Encoder](https://github.com/SICKAG/KaitaiStructDescriptions/blob/public/formats/type_4_encoder.ksy)                                                     | picoScan150                        |
| 6    | [multiScan200 scan data](https://github.com/SICKAG/KaitaiStructDescriptions/blob/public/formats/type_6_primary_data_multiscan200.ksy)                    | multiScan200                       |
| 7    | [IMU with standard header](https://github.com/SICKAG/KaitaiStructDescriptions/blob/public/formats/type_7_imu_standard_header.ksy)                        | multiScan200                       |

Types 3, 4, 6, and 7 use the shared [standard header](https://github.com/SICKAG/KaitaiStructDescriptions/blob/public/formats/compact_header.ksy). Types 1 and 2 have their own layouts. Use the linked definitions for the complete field layout and the operating instructions for device-specific output settings.

## Generate in the Web IDE

1. Download the repository using **Code > Download ZIP** and extract it.
2. Open the [Kaitai Web IDE](https://ide.kaitai.io/).
3. Import the `.ksy` files from `formats`, including `compact_frame.ksy` and its dependencies.
4. Right-click `compact_frame.ksy` in the file tree, select **Generate Parser**, and choose your target language.
5. Save the generated modules and add them to your application together with the matching [Kaitai Struct runtime library](https://kaitai.io/#download).

To inspect a capture, load a `.bin` file containing one complete Compact telegram into the hex view. Use only the application payload, including the Compact start marker and checksum, not a complete Ethernet packet or a PCAP file.

## Generate from the Command Line

Install the [Kaitai Struct compiler](https://kaitai.io/#download), including its Java prerequisite, and add `kaitai-struct-compiler` to your `PATH`. Clone the definitions and generate a Python parser:

```powershell
git clone https://github.com/SICKAG/KaitaiStructDescriptions.git
Set-Location KaitaiStructDescriptions
kaitai-struct-compiler -t python --outdir generated formats\compact_frame.ksy
```

The compiler writes `compact_frame.py` and the imported payload modules to `generated`. Keep those modules together. For another language, change the `-t` value; run `kaitai-struct-compiler --help` to list the supported targets.

For example, generate C# or C++/STL code with:

```powershell
kaitai-struct-compiler -t csharp --outdir generated-csharp formats\compact_frame.ksy
kaitai-struct-compiler -t cpp_stl --outdir generated-cpp formats\compact_frame.ksy
```

For Python, install the runtime in your application's environment:

```powershell
python -m pip install kaitaistruct
```

The runtime reads the binary data; the compiler is needed only when generating or updating the parser. Other target languages need their corresponding runtime library.

Warnings suggesting `num_*` names for count fields are style warnings, not parsing errors.

## Use the Generated Parser

Pass one complete Compact telegram to the generated `CompactFrame` parser. Read `telegram_type` first, then access the corresponding `payload` fields. See [Compact Format](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/) for the telegram types, field conventions, and conversion to Cartesian coordinates.

### Scan Data

For type 1, `payload.header` contains the telegram version and counter. `payload.module` holds the modules; each module has metadata and beam data. The metadata describes the number of beams, layers, and echoes, the acquisition times, and the elevation and azimuth angles.

This Python example reads one complete Compact telegram from `telegram.bin`,
for example a UDP payload saved with **File > Export Packet Bytes** in Wireshark,
and prints every echo:

```python
import sys

sys.path.insert(0, "generated")  # folder written by kaitai-struct-compiler
from compact_frame import CompactFrame

with open("telegram.bin", "rb") as file:  # one complete Compact telegram
    frame = CompactFrame.from_bytes(file.read())

if frame.telegram_type == 1:
    for module in frame.payload.module:
        meta = module.metadata
        print("frame", meta.frame_number, "beams", meta.number_of_beams_per_scan)
        for beam in module.beams:
            for line in beam.lines:
                for echo in line.echos:
                    distance = echo.distance if meta.data_content_echos.distance else None
                    rssi = echo.rssi if meta.data_content_echos.rssi else None
                    print(distance, rssi)
```

Example code: [MIT License](https://opensource.org/license/mit), © 2026 SICK AG. Provided as is, without warranty. Test it before you use it with a machine or in production.

The generated `distance` property applies the version-4 scaling factor and returns millimeters. `distance_raw` is the unscaled value. Check the content flags before accessing optional fields. Combine distance with the layer elevation and beam azimuth for point-cloud reconstruction; see [Type 1: Scan Data](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/#type-1-scan-data).

### IMU Data

Type 2 has a fixed-size payload without repeated scan modules. Its fields are available directly under `frame.payload`. Which measurements are usable depends on the sensor.

<p class="table-caption" markdown>**IMU Fields:** generated payload fields and their meaning.</p>

| Field                             | Meaning                          |
| --------------------------------- | -------------------------------- |
| `acceleration.x`, `.y`, `.z`      | Acceleration in m/s²             |
| `angular_velocity.x`, `.y`, `.z`  | Angular velocity in rad/s        |
| `orientation.w`, `.x`, `.y`, `.z` | Orientation quaternion           |
| `timestamp`                       | Sensor timestamp in microseconds |

For multiScan200, select type 7 instead. It has the standard header before the IMU measurements.

### Encoder Data

Type 4 links an external encoder reading to the scan through `frame_number`. The common header is under `frame.payload.header`; encoder values are directly under `frame.payload`.

<p class="table-caption" markdown>**Encoder Fields:** generated payload fields and their meaning.</p>

| Field                                                                  | Meaning                                                      |
| ---------------------------------------------------------------------- | ------------------------------------------------------------ |
| `frame_number`                                                         | Identifies the corresponding scan frame                      |
| `tick_count`                                                           | Current encoder count                                        |
| `tick_count_at_reference_signal_1`, `tick_count_at_reference_signal_2` | Counts captured at reference signals                         |
| `speed`                                                                | Speed in units/s according to the configured conversion rate |
| `tick_count_timestamp`                                                 | Time of the last count change                                |
| `timestamp_of_reference_signal_1`, `timestamp_of_reference_signal_2`   | Times of the reference-signal events                         |

For an application example, see [3D With 2D LiDARs](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/3d-with-2d-lidars/).

*picoScan100 example: Receive Compact data in C# with Kaitai Struct after reviewing the generated parser. Your application still needs the reception and validation handling described below.*

## Reception and Validation

The parser does not receive data from the sensor. Your application must handle the connection and telegram boundaries:

* For UDP, receive the complete datagram payload. IP fragments must be reassembled before parsing.
* For TCP, collect bytes until a complete Compact telegram is available. A single socket read can contain part of a telegram or several telegrams.
* Validate the CRC32 separately. The frame definition reads the checksum but does not verify it.
* Handle truncated or unsupported telegrams explicitly. Check the sensor's operating instructions and firmware compatibility before using decoded values.

To compare your decoded values with a capture, use the [Compact Wireshark dissector](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/#wireshark-dissector). If you prefer a library that also handles reception, see [Coding Tools & Examples](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/coding-tools-and-examples/).
