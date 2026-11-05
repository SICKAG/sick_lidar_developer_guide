# Read State of LEDs [sRN LEDState]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#read-state-of-leds-srn-ledstate

Read the current state of the LEDs.

**Telegram structure: sRN LEDState**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read state of LEDs | String | 8 | | `LEDState` | `4C 45 44 53 74 61 74 65` |

**Example: sRN LEDState**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LEDState<ETX>
```

```text
<STX>sRN LEDState<ETX>
```

```text
sRN LEDState
```

```text
02 73 52 4E 20 4C 45 44 53 74 61 74 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0C 73 52 4E 20 4C 45 44 53 74 61 74 65 55
```

```text
73 52 4E 20 4C 45 44 53 74 61 74 65
```

**Telegram structure: sRA LEDState**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | State of LEDs | String | 8 | | `LEDState` | `4C 45 44 53 74 61 74 65` |
| LED Color | - | Enum_8 | 1 | Green:<br>Yellow:<br>Red: | `0<br>1<br>2` | `00<br>01<br>02` |
| LED behavior | - | Enum_8 | 1 | On:<br>Off:<br>Blinking:<br>Blinking fast:<br>Blinking delayed:<br>Find me active: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05` |
| LED ID | Name of the LED | String | 8 | | `LED1<br>LED2` | `4C 45 44 31<br>4C 45 44 32` |

**Example: sRA LEDState**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LEDState{SPC}2{SPC}0{SPC}0{SPC}LED2{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}0{SPC}LED1{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 4C 45 44 53 74 61 74 65 20 32 20 30 20 30 20 4C 45 44 32 00 00 00 00 20 31 20 30 20 4C 45 44 31 00 00 00 00 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 23 73 52 41 20 4C 45 44 53 74 61 74 65 20 00 02 00 00 4C 45 44 32 00 00 00 00 01 00 4C 45 44 31 00 00 00 00 7A
```
