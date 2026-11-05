# Set Encoder Settings [sWN LICencset]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Encoder

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#set-encoder-settings-swn-licencset

Define if and which type of encoder is connected to the device so that input signals are processed correctly.

**Telegram structure: sWN LICencset**

| Telegram part   | Description      | Variable | Length | Additional details                                                                                                 | Values CoLa A (ASCII)                                | Values CoLa B (Binary)                                    |
| --------------- | ---------------- | -------- | ------ | ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- | --------------------------------------------------------- |
| Command type    | Write            | String   | 3      |                                                                                                                    | `sWN`                   | `73 57 4E`                   |
| Command         | Encoder settings | String   | 9      |                                                                                                                    | `LICencset`             | `4C 49 43 65 6E 63 73 65 74` |
| Encoder setting |                  | Enum_8   | 1      | Off:<br>Single increment/INC1:<br>Direction recognition (phase):<br>Direction recognition (level):<br>Fixed speed: | `0<br>1<br>2<br>3<br>4` | `00<br>01<br>02<br>03<br>04` |

**Example: sWN LICencset**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LICencset{SPC}0<ETX>
```

```text
<STX>sWN LICencset 0<ETX>
```

```text
sWN LICencset 0
```

```text
02 73 57 4E 20 4C 49 43 65 6E 63 73 65 74 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 57 4E 20 4C 49 43 65 6E 63 73 65 74 20 00 26
```

```text
73 57 4E 20 4C 49 43 65 6E 63 73 65 74 20 00
```

**Telegram structure: sWA LICencset**

| Telegram part | Description      | Variable | Length | Additional details | Values CoLa A (ASCII)                    | Values CoLa B (Binary)                                    |
| ------------- | ---------------- | -------- | ------ | ------------------ | ---------------------------------------- | --------------------------------------------------------- |
| Command type  | Answer           | String   | 3      |                    | `sWA`       | `73 57 41`                   |
| Command       | Encoder settings | String   | 9      |                    | `LICencset` | `4C 49 43 65 6E 63 73 65 74` |

**Example: sWA LICencset**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LICencset<ETX>
```

```text
02 73 57 41 20 4C 49 43 65 6E 63 73 65 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 57 41 20 4C 49 43 65 6E 63 73 65 74 20 29
```
