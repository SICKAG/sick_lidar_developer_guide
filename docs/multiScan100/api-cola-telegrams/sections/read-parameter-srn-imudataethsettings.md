# Read Parameter [sRN ImuDataEthSettings]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › IMU Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-parameter-srn-imudataethsettings

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN ImuDataEthSettings**

| Telegram part | Description        | Variable | Length | Additional details | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                                               |
| ------------- | ------------------ | -------- | ------ | ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Command type  | Read               | String   | 3      |                    | `sRN`                | `73 52 4E`                                              |
| Command       | ImuDataEthSettings | String   | 18     |                    | `ImuDataEthSettings` | `49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |

**Example: sRN ImuDataEthSettings**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ImuDataEthSettings<ETX>
```

```text
<STX>sRN ImuDataEthSettings<ETX>
```

```text
sRN ImuDataEthSettings
```

```text
02 73 52 4E 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 52 4E 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 52
```

```text
73 52 4E 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73
```

**Example: sRA ImuDataEthSettings**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ImuDataEthSettings{SPC}1{SPC}C0{SPC}A8{SPC}0{SPC}64{SPC}1D4F<ETX>
```

```text
02 73 52 41 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 31 20 43 30 20 41 38 20 30 20 36 34 20 31 44 34 46 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1E 73 52 41 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 01 C0 A8 00 64 1D 4F 22
```
