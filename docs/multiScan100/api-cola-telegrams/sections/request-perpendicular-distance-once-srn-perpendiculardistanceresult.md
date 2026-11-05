# Request Perpendicular Distance Once [sRN perpendicularDistanceResult]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Perpendicular Distance

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#request-perpendicular-distance-once-srn-perpendiculardistanceresult

This telegram can be used to request the perpendicular distance. The shortest and furthest measuring point in a range to a reference plane will be transmitted. A field and a reference plane must be defined in the user interface under Application > Perpendicular distance measurement.

**Telegram structure: sRN perpendicularDistanceResult**

| Telegram part | Description                   | Variable | Length | Additional details | Values CoLa A (ASCII)                                      | Values CoLa B (Binary)                                                                                          |
| ------------- | ----------------------------- | -------- | ------ | ------------------ | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Command type  | Read                          | String   | 3      |                    | `sRN`                         | `73 52 4E`                                                                         |
| Command       | Perpendicular distance values | String   | 27     |                    | `perpendicularDistanceResult` | `70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74` |

**Example: sRN perpendicularDistanceResult**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}perpendicularDistanceResult<ETX>
```

```text
<STX>sRN perpendicularDistanceResult<ETX>
```

```text
sRN perpendicularDistanceResult
```

```text
02 73 52 4E 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 52 4E 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 3D
```

```text
73 52 4E 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74
```

**Telegram structure: sRA perpendicularDistanceResult**

| Telegram part      | Description                                                                                                                                                                                                            | Variable | Length | Additional details | Values CoLa A (ASCII)                                                  | Values CoLa B (Binary)                                                                                          |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------ | ------------------ | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Command type       | Answer                                                                                                                                                                                                                 | String   | 3      |                    | `sRA`                                     | `73 52 41`                                                                         |
| Command            | Perpendicular distance values                                                                                                                                                                                          | String   | 27     |                    | `perpendicularDistanceResult`             | `70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74` |
| Timestamp          | Time of the latest object detection in the defined fields. Time base is the sensor system time in milliseconds since January 1, 1970, 00:00 (UTC). If a time server is being used, the configured system time is used. | Uint_64  | 8      |                    | `0 ... FFFFFFFFFFFFFFFF`                  | `00 00 00 00 00 00 00 00... FF FF FF FF FF FF FF FF`                               |
| Amount of channels | Amount of perpendicular distance evaluation channels/fields                                                                                                                                                            | Uint_16  | 2      |                    | `0 ... +20`                               | `00 00 ... 00 14`                                                                  |
| Evaluation ID X    | ID of perpendicular distance field                                                                                                                                                                                     | Uint_16  | 2      |                    | `1 ... 20d (1 ... 14h)`                   | `00 01 ... 00 14`                                                                  |
| Evaluation ID X    | Minimum distance [mm]                                                                                                                                                                                                  | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |
| Evaluation ID X    | Maximum distance [mm]                                                                                                                                                                                                  | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |
| Evaluation ID X    | X minimum distance [mm]                                                                                                                                                                                                | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |
| Evaluation ID X    | Y minimum distance [mm]                                                                                                                                                                                                | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |
| Evaluation ID X    | Reserved                                                                                                                                                                                                               | Int_32   | 4      | Always:            | `0`                                       | `00 00 00 00`                                                                      |
| Evaluation ID X    | X maximum distance [mm]                                                                                                                                                                                                | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |
| Evaluation ID X    | Y maximum distance [mm]                                                                                                                                                                                                | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |
| Evaluation ID X    | Reserved                                                                                                                                                                                                               | Int_32   | 4      | Always:            | `0`                                       | `00 00 00 00`                                                                      |
| Evaluation ID ..   | ..                                                                                                                                                                                                                     | ..       | ..     | ..                 | `..`                                      | `..`                                                                               |

**Example: sRA perpendicularDistanceResult**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}perpendicularDistanceResult{SPC}A065478{SPC}0<ETX>
```

```text
02 73 52 41 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 20 41 30 36 35 34 37 38 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2A 73 52 41 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 20 00 00 00 00 0A 06 54 78 00 00 32
```
