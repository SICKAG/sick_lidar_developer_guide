# Read Treat Blocked Sectors as Error Sectors [sRN treatBlockedSectorsAsErrorSectors]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Contamination Indication

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-treat-blocked-sectors-as-error-sectors-srn-treatblockedsectorsaserrorsectors

Returns the state if blocked sectors are treated as error sectors for contamination strategy evaluation.

**Telegram structure: sRN treatBlockedSectorsAsErrorSectors**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read request | String | 3 | | `sRN` | `73 52 4E` |
| Variable name | treatBlockedSectorsAsErrorSectors | String | 33 | | `treatBlockedSectorsAsErrorSectors` | `74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73` |

**Example: sRN treatBlockedSectorsAsErrorSectors**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}treatBlockedSectorsAsErrorSectors<ETX>
```

```text
<STX>sRN treatBlockedSectorsAsErrorSectors<ETX>
```

```text
sRN treatBlockedSectorsAsErrorSectors
```

```text
02 73 52 4E 20 74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 25 73 52 4E 20 74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73 1B
```

```text
73 52 4E 20 74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73
```

**Telegram structure: sRA treatBlockedSectorsAsErrorSectors**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read answer | String | 3 | | `sRA` | `73 52 41` |
| Variable name | treatBlockedSectorsAsErrorSectors | String | 33 | | `treatBlockedSectorsAsErrorSectors` | `74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73` |
| Value | State of Treat Blocked Sectors As Error Sectors (disabled/ enabled) | Bool_1 | 1 | Disabled:<br>Enabled: | `0<br>1` | `00<br>01` |

**Example: sRA treatBlockedSectorsAsErrorSectors**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}treatBlockedSectorsAsErrorSectors{SPC}1<ETX>
```

```text
02 73 52 41 20 74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 27 73 52 41 20 74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73 20 01 35
```
