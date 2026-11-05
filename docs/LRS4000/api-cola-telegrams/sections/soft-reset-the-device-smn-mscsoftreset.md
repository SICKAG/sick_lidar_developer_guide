# Soft Reset the Device [sMN mSCsoftreset]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › General

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#soft-reset-the-device-smn-mscsoftreset

Reboots the device. All non-saved parameters are lost. This telegram requires at least user level: Authorized Client.

**Telegram structure: sMN mSCsoftreset**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Soft Reset the Device | String | 12 | | `mSCsoftreset` | `6D 53 43 73 6F 66 74 72 65 73 65 74` |
| ProcessorNbr | ProcessorNbr | Uint_16 | 2 | 0 ... 65535 | `0 ... FFFF` | `00 00 ... FF FF` |

**Example: sMN mSCsoftreset**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}mSCsoftreset{SPC}0<ETX>
```

```text
<STX>sMN mSCsoftreset 0<ETX>
```

```text
sMN mSCsoftreset 0
```

```text
02 73 4D 4E 20 6D 53 43 73 6F 66 74 72 65 73 65 74 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 4D 4E 20 6D 53 43 73 6F 66 74 72 65 73 65 74 20 00 00 76
```

```text
73 4D 4E 20 6D 53 43 73 6F 66 74 72 65 73 65 74 20 00 00
```

**Telegram structure: sAN mSCsoftreset**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Soft Reset the Device | String | 12 | | `mSCsoftreset` | `6D 53 43 73 6F 66 74 72 65 73 65 74` |

**Example: sAN mSCsoftreset**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}mSCsoftreset<ETX>
```

```text
02 73 41 4E 20 6D 53 43 73 6F 66 74 72 65 73 65 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 41 4E 20 6D 53 43 73 6F 66 74 72 65 73 65 74 20 7A
```
