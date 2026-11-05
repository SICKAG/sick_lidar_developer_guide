# Enable or Disable LEDs [sWN LEDEnable]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#enable-or-disable-leds-swn-ledenable

Switch the LEDs of the device on or off. Diagnostics over Ethernet and the digital outputs are not affected.

Required user level: Authorized client.

**Telegram structure: sWN LEDEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set LEDs | String | 9 | | `LEDEnable` | `4C 45 44 45 6E 61 62 6C 65` |
| Status | Enable/ disable | Bool_1 | 1 | Off:<br>On: | `0<br>1` | `00<br>01` |

**Example: sWN LEDEnable**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LEDEnable{SPC}1<ETX>
```

```text
sWN LEDEnable 1
```

```text
02 73 57 4E 20 4C 45 44 45 6E 61 62 6C 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 57 4E 20 4C 45 44 45 6E 61 62 6C 65 20 01 07
```

```text
73 57 4E 20 4C 45 44 45 6E 61 62 6C 65 20 01
```

**Telegram structure: sWA LEDEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set LEDs | String | 9 | | `LEDEnable` | `4C 45 44 45 6E 61 62 6C 65` |

**Example: sWA LEDEnable**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LEDEnable<ETX>
```

```text
02 73 57 41 20 4C 45 44 45 6E 61 62 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 57 41 20 4C 45 44 45 6E 61 62 6C 65 20 09
```
