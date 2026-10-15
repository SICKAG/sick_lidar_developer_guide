# MSGPACK Format

MSGPACK encodes the measurement data with the [MessagePack](https://msgpack.org/) standard. Unlike [Compact](./compact-format.md), it is self-describing: every field has a keyword, so any standard MessagePack library can parse it without knowing the exact layout. The price is more bandwidth than Compact.

Like Compact, each data package carries one scan segment. Each segment can be processed on its own for low latency; collect all segments with the same `FrameNumber` to get a complete scan. See [multiScan100 segments](./compact-format.md#segments-multiscan100) and [picoScan100 segments](./compact-format.md#segments-picoscan100) for device-specific behavior.

SICK's Python [ScanSegmentAPI](https://github.com/SICKAG/ScanSegmentAPI) (`scansegmentapi/msgpack.py`) is the reference implementation of this format.

## Framing

Each MSGPACK buffer is wrapped in a frame. Size and checksum are little-endian `uint32` values.

<p class="table-caption" markdown>**Framing:** offset, size, and content.</p>

| Offset | Size | Content |
| --- | --- | --- |
| 0 | 4 bytes | `02 02 02 02` (4 × `<STX>`) |
| 4 | 4 bytes | Size n of the MSGPACK buffer in bytes (without the checksum) |
| 8 | n bytes | MSGPACK buffer |
| 8 + n | 4 bytes | CRC32 over the MSGPACK buffer only, without the STX bytes and the size |

## MSGPACK Keywords

To save bandwidth, keywords are encoded as `uint8` codes instead of strings. Map the codes back to names with the table below. After removing the framing, parse the buffer with a standard MessagePack parser. Some parsers must be told to accept integer map keys; in Python:

```python
unpacked = msgpack.unpackb(msgpack_buffer, strict_map_key=False)
```

### Used MSGPACK Keywords and Associated uint8 Codes

Names follow the SICK reference implementation. Some examples use different
capitalization, such as `TimeStampStart` or `PropertyValues`; on the wire only
the code is sent.

<p class="table-caption" markdown>**Used MSGPACK Keywords and Associated uint8 Codes:** keyword name, code, and description.</p>

| Keyword name | Code | Description |
| --- | --- | --- |
| `class` | `0x10` | Class name of the map: `Scan` or `ScanSegment` ([ScanSegment](#serialization-of-the-scansegment-class), [Scan](#serialization-of-the-scan-class)) |
| `data` | `0x11` | Data part of a ScanSegment, Scan, or array ([arrays](#serialization-of-arrays)) |
| `numOfElems` | `0x12` | Number of elements in an array |
| `elemSz` | `0x13` | Size of one array element in bytes |
| `endian` | `0x14` | Endianness of the array elements |
| `elemTypes` | `0x15` | Type of the array elements |
| `little` | `0x30` | Value: little-endian |
| `float32` | `0x31` | Value: data type float32 |
| `uint32` | `0x32` | Value: data type uint32 |
| `uint8` | `0x33` | Value: data type uint8 |
| `uint16` | `0x34` | Value: data type uint16 |
| `int16` | `0x35` | Value: data type int16 |
| `ChannelTheta` | `0x50` | Channel with azimuth angles |
| `ChannelPhi` | `0x51` | Channel with elevation angles |
| `DistValues` | `0x52` | Channel with distance values |
| `RssiValues` | `0x53` | Channel with RSSI values |
| `PropertiesValues` | `0x54` | Channel with beam properties, for example reflector |
| `Scan` | `0x70` | Class name `Scan` |
| `TimestampStart` | `0x71` | Time stamp of the first beam of a scan |
| `TimestampStop` | `0x72` | Time stamp of the last beam of a scan |
| `ThetaStart` | `0x73` | Azimuth angle of the first beam of a scan |
| `ThetaStop` | `0x74` | Azimuth angle of the last beam of a scan |
| `ScanNumber` | `0x75` | Scan number |
| `ModuleID` | `0x76` | ID of the measuring module |
| `BeamCount` | `0x77` | Number of beams in a scan |
| `EchoCount` | `0x78` | Number of echoes in a scan |
| `ScanSegment` | `0x90` | Class name `ScanSegment` |
| `SegmentCounter` | `0x91` | Segment number |
| `FrameNumber` | `0x92` | Frame number |
| `Availability` | `0x93` | Availability of a segment |
| `SenderId` | `0x94` | Sender ID (device serial number) |
| `SegmentSize` | `0x95` | Segment size |
| `SegmentData` | `0x96` | Array with the measurement data per layer |
| `LayerId` | `0xA0` | Array with layer IDs |
| `TelegramCounter` | `0xB0` | Telegram counter |
| `TimestampTransmit` | `0xB1` | Transmit time stamp |

## Serialization of a Segment

Each data package carries one ScanSegment. Its `SegmentData` array holds one [Scan](#serialization-of-the-scan-class) per layer of the sensor:

```text
ScanSegment
├── TelegramCounter
├── TimestampTransmit
├── SegmentCounter
├── FrameNumber
├── Availability
├── SenderId
├── LayerId
└── SegmentData
    ├── Scan 1
    ├── Scan 2
    ├── ...
    └── Scan N
```

Metadata fields are plain MessagePack values. Measurement arrays (distances, RSSI, angles, properties) are an exception: they are stored as binary blobs, see [Serialization Of Arrays](#serialization-of-arrays).

### Notation Used

The following notes on the notation used relate to the description of the structures encoded in MSGPACK:

- `msgpack_map_header` denotes the header of a MessagePack map, see the [MessagePack specification](https://github.com/msgpack/msgpack/blob/master/spec.md#map-format-family).
- Names correspond to the [keyword table](#used-msgpack-keywords-and-associated-uint8-codes); on the wire, each name is its `uint8` code.
- Angle brackets mark placeholders, for example `<numOfElems>` for the number of array elements.
- The structures are written in a JSON-like notation, but the data is encoded according to the [MessagePack specification](https://github.com/msgpack/msgpack/blob/master/spec.md).

### Serialization of the ScanSegment Class

The ScanSegment class is represented as a nesting of MSGPACK maps as follows:

```msgpack-schema
msgpack_map_header {
  "class": ScanSegment,
  "data": msgpack_map_header {
    "TelegramCounter": <telegramCounter>,
    "TimestampTransmit": <timestampTransmit>,
    "SegmentCounter": <segmentCounter>,
    "FrameNumber": <frameNumber>,
    "Availability": <availability>,
    "SenderId": <senderId>,
    "LayerId": <layerIdVector>,
    "SegmentData": <segmentData>
  }
}
```

The meaning of the individual fields is shown in the following table.

<p class="table-caption" markdown>**Serialization of the ScanSegment Class:** name, type, and description.</p>

| Name | Type | Description |
| ------ | ------ | ------------- |
| TelegramCounter | MSGPACK int | Counts all telegrams with measurement data sent in MSGPACK format since switching on the device. The counter starts at 1. |
| TimestampTransmit | MSGPACK int | Sensor system time in µs since 1.1.1970 00:00 in UTC. |
| SegmentCounter | MSGPACK int | Index of the segment within the frame. |
| FrameNumber | MSGPACK int | Counts the number of full revolutions since the device was started. |
| Availability | MSGPACK int | Reserved |
| SenderId | MSGPACK int | Device serial number. It can be used to detect on the recipient which sensor the data was sent from. |
| LayerId | MSGPACK array of int | Array of layer indices. The layer indices start at 1 and increase with decreasing elevation angle. |
| SegmentData | MSGPACK array of scans | Array of elements of the Scan class (see [Serialization Of The Scan Class](#serialization-of-the-scan-class)) that contain the actual measurement data. The following applies: The scan at position i has the layer number LayerId[i]. |

The arrays LayerId and SegmentData are MSGPACK arrays as per the MSGPACK specification and are not represented like arrays containing measurement data (see "[Serialization of arrays](#serialization-of-arrays)").

### Serialization of the Scan Class

The Scan class is represented as a nesting of MSGPACK maps as follows:

```msgpack-schema
msgpack_map_header {
  "class": Scan,
  "data": msgpack_map_header {
    "TimestampStart": <timestampStart>,
    "TimestampStop": <timestampStop>,
    "ThetaStart": <thetaStart>,
    "ThetaStop": <thetaStop>,
    "ScanNumber": <scanNumber>,
    "ModuleID": <moduleId>,
    "ChannelTheta": <channelTheta>,
    "ChannelPhi": <channelPhi>,
    "DistValues": <distValues>,
    "RssiValues": <rssiValues>,
    "PropertiesValues": <propertiesValues>,
    "BeamCount": <beamCount>,
    "EchoCount": <echoCount>
  }
}
```

The meaning of the individual fields is shown in the following table:

<p class="table-caption" markdown>**Serialization of the Scan Class:** name, type, and description.</p>

| Name | Type | Description |
| ------ | ------ | ------------- |
| TimestampStart | MSGPACK int | Acquisition time of the first beam of the scan in µs. The device's internal time base is used or, if the sensor offers the feature, the time set externally. |
| TimestampStop | MSGPACK int | Acquisition time of the last beam of the scan in µs. The device's internal time base is used or, if the sensor offers the feature, the time set externally. |
| ThetaStart | MSGPACK int | Azimuth angle of the first beam of the scan in radians. |
| ThetaStop | MSGPACK int | Azimuth angle of the last beam of the scan in radians. |
| ScanNumber | MSGPACK int | Not used. |
| ModuleID | MSGPACK int | Number of the physical module that generated the data. In the case of the multiScan100, for example, this is one of the two measuring modules. |
| ChannelTheta | array of float32 | Array of azimuth angles of a specific beam in radians. The encoding of the data in this array is described in "[Serialization of arrays](#serialization-of-arrays)". The user can configure whether the array is present in the data structure. |
| ChannelPhi | array of float32 | Array with the elevation angle of the scan in radians. Each Scan covers one layer, so this array contains one element. The encoding of the data in this array is described in "[Serialization of arrays](#serialization-of-arrays)". The user can configure whether the array is present in the data structure. |
| DistValues | array of (array of float32) | Array containing an array of distance values for each echo of the scan. The number of sub-arrays corresponds to the number of echoes in the scan, see also the EchoCount field below. The distance values are specified in mm. The encoding of the data in this array is described in "[Serialization of arrays](#serialization-of-arrays)". The user can configure whether the array is present in the data structure. |
| RssiValues | array of (array of uint16) | Array containing an array of RSSI values for each echo of the scan. The number of sub-arrays corresponds to the number of echoes in the scan, see also the EchoCount field below. For the representation of RSSI values, see [RSSI scaling](./compact-format.md#type-1-scan-data). The encoding of the data in this array is described in "[Serialization of arrays](#serialization-of-arrays)". The user can configure whether the array is present in the data structure. |
| PropertiesValues | array of uint8 | Array with additional properties, for example "reflector", for each beam of a scan. The encoding of the data in this array is described in "[Serialization of arrays](#serialization-of-arrays)". This array is optional. |
| BeamCount | MSGPACK int | Number of beams in the current scan. |
| EchoCount | MSGPACK int | Number of echoes in the current scan. |

For more details about the MSGPACK int format family, see the [official msgpack specification](https://github.com/msgpack/msgpack/blob/master/spec.md#int-format-family).

![DistValues and RssiValues array structure](../assets/data-streaming/distvalues-rssivalues-structure.png)
*DistValues and RssiValues array structure.*

The diagram illustrates the nested array structure with 3 echoes and 15 beams, showing how each beam contains values for all echoes in both DistValues and RssiValues arrays.

### Serialization of Arrays

Arrays of measurement data (ChannelTheta, ChannelPhi, DistValues, RssiValues, and PropertiesValues) are encoded as follows:

```msgpack-schema
msgpack_map_header {
  "numOfElems": <number of array elements>,
  "elemSz": <size of one array element in bytes>,
  "endian": little,
  "elemTypes": <typesArray>,
  "data": <binaryData>
}
```

The meaning of the individual fields of the Array class are shown in the following table.

<p class="table-caption" markdown>**Serialization of Arrays:** name and description.</p>

| Name | Description |
| ------ | ------------- |
| numOfElems | Number of array elements |
| elemSz | Size of an array element in bytes, e.g., 4 for float32 or 1 for uint8. |
| endian | The value is always little |
| elemTypes | Array of element types. Only arrays with one element are supported here. Example: {float32} for an array of float32 values. An array of tuples would need multiple element types; such arrays are not used. |
| data | Actual payload. The data is encoded as a byte array in the MSGPACK format and can be copied directly into a structure/array after parsing the MSGPACK structure, taking into account the endianness and the data type. |
