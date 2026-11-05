# Read Encoder Setting [sRN LICencset]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Encoder Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-encoder-setting-srn-licencset

Returns the encoder mode (e.g. phase mode).

**Telegram structure: sRN LICencset**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Encoder Setting | String | 9 | | `LICencset` | `4C 49 43 65 6E 63 73 65 74` |

**Example: sRN LICencset**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LICencset<ETX>
```

```text
<STX>sRN LICencset<ETX>
```

```text
sRN LICencset
```

```text
02 73 52 4E 20 4C 49 43 65 6E 63 73 65 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0D 73 52 4E 20 4C 49 43 65 6E 63 73 65 74 03
```

```text
73 52 4E 20 4C 49 43 65 6E 63 73 65 74
```

**Telegram structure: sRA LICencset**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Encoder Setting | String | 9 | | `LICencset` | `4C 49 43 65 6E 63 73 65 74` |
| EncSetting | Setting of the encoder | Enum_8 | 1 | TX_OFF:<br>TX_INCREMENT1:<br>TX_DIR_PHASE12:<br>TX_DIR_LEVEL12:<br>TX_FIX_VELOCITY: | `0<br>1<br>2<br>3<br>4` | `00<br>01<br>02<br>03<br>04` |

**Example: sRA LICencset**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LICencset{SPC}0<ETX>
```

```text
02 73 52 41 20 4C 49 43 65 6E 63 73 65 74 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 41 20 4C 49 43 65 6E 63 73 65 74 20 00 2C
```
