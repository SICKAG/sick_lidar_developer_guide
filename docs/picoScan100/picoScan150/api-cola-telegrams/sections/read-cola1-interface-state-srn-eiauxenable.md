# Read CoLa1 Interface State [sRN EIAuxEnable]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Cybersecurity

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-cola1-interface-state-srn-eiauxenable

Returns whether the legacy interface CoLa A/B is enabled. If enabled CoLa A uses port 2111 and CoLa B uses 2112.

**Telegram structure: sRN EIAuxEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read CoLa1 Interface State | String | 11 | | `EIAuxEnable` | `45 49 41 75 78 45 6E 61 62 6C 65` |

**Example: sRN EIAuxEnable**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EIAuxEnable<ETX>
```

```text
<STX>sRN EIAuxEnable<ETX>
```

```text
sRN EIAuxEnable
```

```text
02 73 52 4E 20 45 49 41 75 78 45 6E 61 62 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 4E 20 45 49 41 75 78 45 6E 61 62 6C 65 2E
```

```text
73 52 4E 20 45 49 41 75 78 45 6E 61 62 6C 65
```

**Telegram structure: sRA EIAuxEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read CoLa1 Interface State | String | 11 | | `EIAuxEnable` | `45 49 41 75 78 45 6E 61 62 6C 65` |
| EtherAuxEnabled | Enables Cola1 Interface. Cola-A on port 2111 and Cola-B on port 2112 | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |

**Example: sRA EIAuxEnable**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EIAuxEnable{SPC}1<ETX>
```

```text
02 73 52 41 20 45 49 41 75 78 45 6E 61 62 6C 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 52 41 20 45 49 41 75 78 45 6E 61 62 6C 65 20 01 00
```
