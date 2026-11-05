# Receive Input State by Event [sEN LIDinputstate]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Inputs and Outputs

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#receive-input-state-by-event-sen-lidinputstate

Receive an event when an input state changes. Use `0` to disable the subscription.

**Telegram structure: sEN LIDinputstate**

| Telegram part | Description        | Variable | Length | Additional details  | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |
| ------------- | ------------------ | -------- | ------ | ------------------- | -------------------------------------------- | --------------------------------------------------------------------- |
| Command type  | Event subscription | String   | 3      |                     | `sEN`           | `73 45 4E`                               |
| Command       | Input state        | String   | 13     |                     | `LIDinputstate` | `4C 49 44 69 6E 70 75 74 73 74 61 74 65` |
| State         | Subscription state | Bool_1   | 1      | Disable:<br>Enable: | `0<br>1`        | `00<br>01`                               |

**Example: sEN LIDinputstate**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}LIDinputstate{SPC}1<ETX>
```

```text
sEN LIDinputstate 1
```

```text
02 73 45 4E 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 45 4E 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 01 39
```

```text
73 45 4E 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 01
```

**Example: sEA LIDinputstate**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}LIDinputstate{SPC}1<ETX>
```

```text
02 73 45 41 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 45 41 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 01 36
```
