# Read Parameter [sRN EIAddrMode]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Ethernet

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-parameter-srn-eiaddrmode

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN EIAddrMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                     | Values CoLa B (Binary)                                       |
| ------------- | ----------- | -------- | ------ | ------------------ | ----------------------------------------- | ------------------------------------------------------------ |
| Command type  | Read        | String   | 3      |                    | `sRN`        | `73 52 4E`                      |
| Command       | EIAddrMode  | String   | 10     |                    | `EIAddrMode` | `45 49 41 64 64 72 4D 6F 64 65` |

**Example: sRN EIAddrMode**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EIAddrMode<ETX>
```

```text
<STX>sRN EIAddrMode<ETX>
```

```text
sRN EIAddrMode
```

```text
02 73 52 4E 20 45 49 41 64 64 72 4D 6F 64 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 52 4E 20 45 49 41 64 64 72 4D 6F 64 65 53
```

```text
73 52 4E 20 45 49 41 64 64 72 4D 6F 64 65
```

**Example: sRA EIAddrMode**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EIAddrMode{SPC}0<ETX>
```

```text
02 73 52 41 20 45 49 41 64 64 72 4D 6F 64 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 52 41 20 45 49 41 64 64 72 4D 6F 64 65 20 00 7C
```
