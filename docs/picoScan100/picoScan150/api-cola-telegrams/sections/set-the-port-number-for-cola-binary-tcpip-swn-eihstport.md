# Set the Port Number for CoLa Binary TCP/IP [sWN EIHstPort]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#set-the-port-number-for-cola-binary-tcpip-swn-eihstport

Set the port number for CoLa Binary TCP/IP (e.g. LMDscandata).

**Telegram structure: sWN EIHstPort**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | EIHstPort | String | 9 | | `EIHstPort` | `45 49 48 73 74 50 6F 72 74` |
| Value | TCP port for CoLa Binary communication | UInt_16 | 2 | | `+2112` | `08 40` |

**Example: sWN EIHstPort**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EIHstPort{SPC}+2112<ETX>
```

```text
<STX>sWN EIHstPort +2112<ETX>
```

```text
sWN EIHstPort +2112
```

```text
02 73 57 4E 20 45 49 48 73 74 50 6F 72 74 20 2B 32 31 31 32 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 57 4E 20 45 49 48 73 74 50 6F 72 74 20 08 40 58
```

```text
73 57 4E 20 45 49 48 73 74 50 6F 72 74 20 08 40
```

**Telegram structure: sWA EIHstPort**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 9 | | `EIHstPort` | `45 49 48 73 74 50 6F 72 74` |

**Example: sWA EIHstPort**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}EIHstPort<ETX>
```

```text
02 73 57 41 20 45 49 48 73 74 50 6F 72 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 57 41 20 45 49 48 73 74 50 6F 72 74 20 1F
```
