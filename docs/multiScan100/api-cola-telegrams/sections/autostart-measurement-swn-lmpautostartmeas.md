# Autostart Measurement [sWN LMPautostartmeas]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#autostart-measurement-swn-lmpautostartmeas

This parameter defines whether the scanner will start to rotate directly and measure when powering up or remain in idle mode. Save the changed setting with `sMN mEEwriteall`; it takes effect at the next power-up cycle.

In case autostart is deactivated, the sensor will remain in idle mode with the laser switched off.

**Telegram structure: sWN LMPautostartmeas**

| Telegram part | Description                     | Variable | Length | Additional details              | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                                                         |
| ------------- | ------------------------------- | -------- | ------ | ------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------ |
| Command type  | Write                           | String   | 3      |                                 | `sWN`              | `73 57 4E`                                        |
| Command       | Autostart measurement           | String   | 16     |                                 | `LMPautostartmeas` | `4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73` |
| Status code   | Activate / Deactivate Autostart | Bool_1   | 1      | Autostart off:<br>Autostart on: | `0<br>1`           | `00<br>01`                                        |

**Example: sWN LMPautostartmeas**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LMPautostartmeas{SPC}1<ETX>
```

```text
sWN LMPautostartmeas 1
```

```text
02 73 57 4E 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 57 4E 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 20 01 4F
```

```text
73 57 4E 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 20 01
```

**Telegram structure: sWA LMDautostartmeas**

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                                                         |
| ------------- | --------------------- | -------- | ------ | ------------------ | ----------------------------------------------- | ------------------------------------------------------------------------------ |
| Command type  | Answer                | String   | 3      |                    | `sWA`              | `73 57 41`                                        |
| Command       | Autostart measurement | String   | 16     |                    | `LMPautostartmeas` | `4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73` |

**Telegram structure: sWA LMPautostartmeas**

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                                                         |
| ------------- | --------------------- | -------- | ------ | ------------------ | ----------------------------------------------- | ------------------------------------------------------------------------------ |
| Command type  | Answer                | String   | 3      |                    | `sWA`              | `73 57 41`                                        |
| Command       | Autostart measurement | String   | 16     |                    | `LMPautostartmeas` | `4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73` |

**Example: sWA LMPautostartmeas**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LMPautostartmeas<ETX>
```

```text
02 73 57 41 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 57 41 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 20 41
```
