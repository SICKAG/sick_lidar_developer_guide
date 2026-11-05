# Read the Port Number for CoLa ASCII TCP/IP [sRN EIAuxPort]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#read-the-port-number-for-cola-ascii-tcpip-srn-eiauxport

Returns the port number for CoLa ASCII TCP/IP (e.g. LMDscandata).

**Telegram structure: sRN EIAuxPort**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read request | String | 3 | | `sRN` | `73 52 4E` |
| Variable name | EIAuxPort | String | 9 | | `EIAuxPort` | `45 49 41 75 78 50 6F 72 74` |

**Example: sRN EIAuxPort**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EIAuxPort<ETX>
```

```text
<STX>sRN EIAuxPort<ETX>
```

```text
sRN EIAuxPort
```

```text
02 73 52 4E 20 45 49 41 75 78 50 6F 72 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0D 73 52 4E 20 45 49 41 75 78 50 6F 72 74 36
```

```text
73 52 4E 20 45 49 41 75 78 50 6F 72 74
```

**Telegram structure: sRA EIAuxPort**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read answer | String | 3 | | `sRA` | `73 52 41` |
| Variable name | EIAuxPort | String | 9 | | `EIAuxPort` | `45 49 41 75 78 50 6F 72 74` |
| Value | TCP port for CoLa ASCII communication | UInt_16 | 2 | | `+2111` | `08 3F` |

**Example: sRA EIAuxPort**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EIAuxPort{SPC}83F<ETX>
```

```text
02 73 52 41 20 45 49 41 75 78 50 6F 72 74 20 38 33 46 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 52 41 20 45 49 41 75 78 50 6F 72 74 20 08 3F 2E
```
