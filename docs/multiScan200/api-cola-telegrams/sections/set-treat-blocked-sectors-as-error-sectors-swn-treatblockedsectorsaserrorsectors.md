# Set Treat Blocked Sectors as Error Sectors [sWN treatBlockedSectorsAsErrorSectors]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Contamination Indication

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#set-treat-blocked-sectors-as-error-sectors-swn-treatblockedsectorsaserrorsectors

If enabled, blocked sectors get interpreted as error sectors for contamination strategy evaluation.

Required user level: Authorized client.

**Telegram structure: sWN treatBlockedSectorsAsErrorSectors**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | treatBlockedSectorsAsErrorSectors | String | 33 | | `treatBlockedSectorsAsErrorSectors` | `74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73` |
| Value | Enable/ disable Treat Blocked Sectors As Error Sectors | Bool_1 | 1 | Disable:<br>Enable: | `0<br>1` | `00<br>01` |

**Example: sWN treatBlockedSectorsAsErrorSectors - Enable**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}treatBlockedSectorsAsErrorSectors{SPC}1<ETX>
```

```text
sWN treatBlockedSectorsAsErrorSectors 1
```

```text
02 73 57 4E 20 74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 27 73 57 4E 20 74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73 20 01 3F
```

```text
73 57 4E 20 74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73 20 01
```

**Telegram structure: sWA treatBlockedSectorsAsErrorSectors**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 33 | | `treatBlockedSectorsAsErrorSectors` | `74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73` |

**Example: sWA treatBlockedSectorsAsErrorSectors**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}treatBlockedSectorsAsErrorSectors<ETX>
```

```text
02 73 57 41 20 74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 26 73 57 41 20 74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73 20 31
```
