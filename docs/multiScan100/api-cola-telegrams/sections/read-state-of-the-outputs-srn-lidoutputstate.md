# Read State of the Outputs [sRN LIDoutputstate]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Inputs and Outputs

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-state-of-the-outputs-srn-lidoutputstate

Status of all outputs

**Telegram structure: sRN LIDoutputstate**

| Telegram part | Description  | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------- | ------------ | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Read         | String   | 3      |                    | `sRN`            | `73 52 4E`                                  |
| Command       | Output state | String   | 14     |                    | `LIDoutputstate` | `4C 49 44 6F 75 74 70 75 74 73 74 61 74 65` |

**Example: sRN LIDoutputstate**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LIDoutputstate<ETX>
```

```text
<STX>sRN LIDoutputstate<ETX>
```

```text
sRN LIDoutputstate
```

```text
02 73 52 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 66
```

```text
73 52 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65
```

**Telegram structure: sRA LIDoutputstate**

| Telegram part                               | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| ------------------------------------------- | ----------- | -------- | ------ | ------------------ | --------------------- | ---------------------- |
| Complete telegram structure of the answer . |             |          |        |                    |                       |                        |

**Example: sRA LIDoutputstate**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LIDoutputstate{SPC}1{SPC}A56D1F0{SPC}1{SPC}0{SPC}1{SPC}1{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}7B2{SPC}1{SPC}1{SPC}0{SPC}2{SPC}35{SPC}70CB0<ETX>
```

```text
02 73 52 41 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 31 20 41 35 36 44 31 46 30 20 31 20 30 20 31 20 31 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 31 20 31 20 31 20 31 20 31 20 37 42 32 20 31 20 31 20 30 20 32 20 33 35 20 37 30 43 42 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4E 73 52 41 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 00 01 0A 56 D1 F0 01 00 00 00 00 01 00 00 00 01 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 01 00 00 00 01 01 00 00 00 01 00 01 07 B2 01 01 00 02 35 00 07 0C B0 0C
```
