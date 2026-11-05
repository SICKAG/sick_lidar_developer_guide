# Start Teach-In [sMN StartTeachIn]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Field Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#start-teach-in-smn-startteachin

Start teach-in of the environment.

**Telegram structure: sMN StartTeachIn**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method invocation | String | 3 | | `sMN` | `73 4D 4E` |
| Method name | StartTeachIn | String | 12 | | `StartTeachIn` | `53 74 61 72 74 54 65 61 63 68 49 6E` |

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
| Command type | Method answer | String | 3 | | `sAN` | `73 41 4E` |
| Method name | Echo of method name | String | 12 | | `StartTeachIn` | `53 74 61 72 74 54 65 61 63 68 49 6E` |

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
