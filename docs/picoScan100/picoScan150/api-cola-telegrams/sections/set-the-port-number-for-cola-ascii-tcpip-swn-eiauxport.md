# Set the Port Number for CoLa ASCII TCP/IP [sWN EIAuxPort]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#set-the-port-number-for-cola-ascii-tcpip-swn-eiauxport

Set the port number for CoLa ASCII TCP/IP (e.g. LMDscandata).

**Telegram structure: sWN EIAuxPort**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | EIAuxPort | String | 9 | | `EIAuxPort` | `45 49 41 75 78 50 6F 72 74` |
| Value | TCP port for CoLa ASCII communication | UInt_16 | 2 | | `+2111` | `08 3F` |

**Example: sWN EIAuxPort**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EIAuxPort{SPC}+2111<ETX>
```

```text
<STX>sWN EIAuxPort +2111<ETX>
```

```text
sWN EIAuxPort +2111
```

```text
02 73 57 4E 20 45 49 41 75 78 50 6F 72 74 20 2B 32 31 31 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 57 4E 20 45 49 41 75 78 50 6F 72 74 20 08 3F 24
```

```text
73 57 4E 20 45 49 41 75 78 50 6F 72 74 20 08 3F
```

**Telegram structure: sWA EIAuxPort**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 9 | | `EIAuxPort` | `45 49 41 75 78 50 6F 72 74` |

**Example: sWA EIAuxPort**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}EIAuxPort<ETX>
```

```text
02 73 57 41 20 45 49 41 75 78 50 6F 72 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 57 41 20 45 49 41 75 78 50 6F 72 74 20 1C
```
