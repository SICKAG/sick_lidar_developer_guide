# Stop Teach-In [sMN StopTeachIn]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Field Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#stop-teach-in-smn-stopteachin

Stops the teach-in process. This telegram requires at least user level: Authorized Client.

**Telegram structure: sMN StopTeachIn**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Stop Teach-In | String | 11 | | `StopTeachIn` | `53 74 6F 70 54 65 61 63 68 49 6E` |

**Example: sMN StopTeachIn**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}StopTeachIn<ETX>
```

```text
<STX>sMN StopTeachIn<ETX>
```

```text
sMN StopTeachIn
```

```text
02 73 4D 4E 20 53 74 6F 70 54 65 61 63 68 49 6E 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 4D 4E 20 53 74 6F 70 54 65 61 63 68 49 6E 14
```

```text
73 4D 4E 20 53 74 6F 70 54 65 61 63 68 49 6E
```

**Telegram structure: sAN StopTeachIn**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Stop Teach-In | String | 11 | | `StopTeachIn` | `53 74 6F 70 54 65 61 63 68 49 6E` |

**Example: sAN StopTeachIn**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}StopTeachIn<ETX>
```

```text
02 73 41 4E 20 53 74 6F 70 54 65 61 63 68 49 6E 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 41 4E 20 53 74 6F 70 54 65 61 63 68 49 6E 20 38
```
