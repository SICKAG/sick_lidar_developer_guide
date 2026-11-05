# Read LED Enable [sRN LEDEnable]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#read-led-enable-srn-ledenable

Returns the LED mode (on/off).

**Telegram structure: sRN LEDEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read LED Enable | String | 9 | | `LEDEnable` | `4C 45 44 45 6E 61 62 6C 65` |

**Example: sRN LEDEnable**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LEDEnable<ETX>
```

```text
<STX>sRN LEDEnable<ETX>
```

```text
sRN LEDEnable
```

```text
02 73 52 4E 20 4C 45 44 45 6E 61 62 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0D 73 52 4E 20 4C 45 44 45 6E 61 62 6C 65 23
```

```text
73 52 4E 20 4C 45 44 45 6E 61 62 6C 65
```

**Telegram structure: sRA LEDEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read LED Enable | String | 9 | | `LEDEnable` | `4C 45 44 45 6E 61 62 6C 65` |
| LEDEnable | Enable or disable LEDs | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |

**Example: sRA LEDEnable**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LEDEnable{SPC}1<ETX>
```

```text
02 73 52 41 20 4C 45 44 45 6E 61 62 6C 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 41 20 4C 45 44 45 6E 61 62 6C 65 20 01 0D
```
