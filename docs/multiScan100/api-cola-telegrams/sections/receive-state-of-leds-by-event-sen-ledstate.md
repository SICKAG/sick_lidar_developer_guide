# Receive State of LEDs by Event [sEN LEDState]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#receive-state-of-leds-by-event-sen-ledstate

Returns the LED status. After registration, the device sends the current value as an `sSN` telegram whenever it changes. Send the telegram with the value 0 to stop the event.

**Telegram structure: sEN LEDState**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Receive State of LEDs by Event | String | 8 | | `LEDState` | `4C 45 44 53 74 61 74 65` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN LEDState**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}LEDState{SPC}1<ETX>
```

```text
<STX>sEN LEDState 1<ETX>
```

```text
sEN LEDState 1
```

```text
02 73 45 4E 20 4C 45 44 53 74 61 74 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 45 4E 20 4C 45 44 53 74 61 74 65 20 01 63
```

```text
73 45 4E 20 4C 45 44 53 74 61 74 65 20 01
```

**Telegram structure: sEA LEDState**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sEA` | `73 45 41` |
| Command | Receive State of LEDs by Event | String | 8 | | `LEDState` | `4C 45 44 53 74 61 74 65` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEA LEDState**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}LEDState{SPC}1<ETX>
```

```text
02 73 45 41 20 4C 45 44 53 74 61 74 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 45 41 20 4C 45 44 53 74 61 74 65 20 01 6C
```
