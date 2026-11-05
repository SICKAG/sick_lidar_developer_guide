# Set Encoder Resolution [sWN LICencres]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Encoder

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#set-encoder-resolution-swn-licencres

Determine the encoder resolution in mm/increment.

**Telegram structure: sWN LICencres**

| Telegram part      | Description                                              | Variable | Length | Additional details | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                                                     |
| ------------------ | -------------------------------------------------------- | -------- | ------ | ------------------ | ----------------------------------------------- | -------------------------------------------------------------------------- |
| Command type       | Write                                                    | String   | 3      |                    | `sWN`              | `73 57 4E`                                    |
| Command            | Set encoder resolution                                   | String   | 9      |                    | `LICencres`        | `4C 49 43 65 6E 63 72 65 73`                  |
| Encoder resolution | Resolution value in mm/Inc as float according to IEEE754 | Real     | 4      |                    | `+0.001d … +2000d` | `3A 83 12 6F … 44 FA 00 00<br>(see IEEE 754)` |

**Example: sWN LICencres**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LICencres{SPC}+1000<ETX>
```

```text
<STX>sWN LICencres +1000<ETX>
```

```text
sWN LICencres +1000
```

```text
02 73 57 4E 20 4C 49 43 65 6E 63 72 65 73 20 2B 31 30 30 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 57 4E 20 4C 49 43 65 6E 63 72 65 73 20 44 7A 00 00 1E
```

```text
73 57 4E 20 4C 49 43 65 6E 63 72 65 73 20 44 7A 00 00
```

**Telegram structure: sWA LICencres**

| Telegram part | Description            | Variable | Length | Additional details | Values CoLa A (ASCII)                    | Values CoLa B (Binary)                                    |
| ------------- | ---------------------- | -------- | ------ | ------------------ | ---------------------------------------- | --------------------------------------------------------- |
| Command type  | Answer                 | String   | 3      |                    | `sWA`       | `73 57 41`                   |
| Command       | Set encoder resolution | String   | 9      |                    | `LICencres` | `4C 49 43 65 6E 63 72 65 73` |

**Example: sWA LICencres**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LICencres<ETX>
```

```text
02 73 57 41 20 4C 49 43 65 6E 63 72 65 73 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 57 41 20 4C 49 43 65 6E 63 72 65 73 20 2F
```
