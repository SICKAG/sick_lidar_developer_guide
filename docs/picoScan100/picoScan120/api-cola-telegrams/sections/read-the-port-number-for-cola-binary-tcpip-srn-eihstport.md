# Read the Port Number for CoLa Binary TCP/IP [sRN EIHstPort]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#read-the-port-number-for-cola-binary-tcpip-srn-eihstport

Returns the port number for CoLa Binary TCP/IP (e.g. LMDscandata).

**Telegram structure: sRN EIHstPort**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read request | String | 3 | | `sRN` | `73 52 4E` |
| Variable name | EIHstPort | String | 9 | | `EIHstPort` | `45 49 48 73 74 50 6F 72 74` |

**Example: sRN EIHstPort**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EIHstPort<ETX>
```

```text
<STX>sRN EIHstPort<ETX>
```

```text
sRN EIHstPort
```

```text
02 73 52 4E 20 45 49 48 73 74 50 6F 72 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0D 73 52 4E 20 45 49 48 73 74 50 6F 72 74 35
```

```text
73 52 4E 20 45 49 48 73 74 50 6F 72 74
```

**Telegram structure: sRA EIHstPort**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read answer | String | 3 | | `sRA` | `73 52 41` |
| Variable name | EIHstPort | String | 9 | | `EIHstPort` | `45 49 48 73 74 50 6F 72 74` |
| Value | TCP port for CoLa Binary communication | UInt_16 | 2 | | `+2112` | `08 40` |

**Example: sRA EIHstPort**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EIHstPort{SPC}840<ETX>
```

```text
02 73 52 41 20 45 49 48 73 74 50 6F 72 74 20 38 34 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 52 41 20 45 49 48 73 74 50 6F 72 74 20 08 40 52
```
