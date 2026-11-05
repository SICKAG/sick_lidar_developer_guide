# Start Teach-In [sMN StartTeachIn]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Field Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#start-teach-in-smn-startteachin

Starts the teach-in process. This telegram requires at least user level: Authorized Client.

**Telegram structure: sMN StartTeachIn**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Start Teach-In | String | 12 | | `StartTeachIn` | `53 74 61 72 74 54 65 61 63 68 49 6E` |

**Example: sMN StartTeachIn**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}StartTeachIn<ETX>
```

```text
<STX>sMN StartTeachIn<ETX>
```

```text
sMN StartTeachIn
```

```text
02 73 4D 4E 20 53 74 61 72 74 54 65 61 63 68 49 6E 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 4D 4E 20 53 74 61 72 74 54 65 61 63 68 49 6E 6C
```

```text
73 4D 4E 20 53 74 61 72 74 54 65 61 63 68 49 6E
```

**Telegram structure: sAN StartTeachIn**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Start Teach-In | String | 12 | | `StartTeachIn` | `53 74 61 72 74 54 65 61 63 68 49 6E` |

**Example: sAN StartTeachIn**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}StartTeachIn<ETX>
```

```text
02 73 41 4E 20 53 74 61 72 74 54 65 61 63 68 49 6E 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 41 4E 20 53 74 61 72 74 54 65 61 63 68 49 6E 20 40
```
