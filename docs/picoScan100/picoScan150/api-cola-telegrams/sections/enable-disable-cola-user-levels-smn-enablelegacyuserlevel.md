# Enable/ Disable CoLa User Levels [sMN EnableLegacyUserLevel]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › General

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#enable-disable-cola-user-levels-smn-enablelegacyuserlevel

This command enables and disables a specific CoLa user level (Maintenance, Authorized Client).

**Telegram structure: sMN EnableLegacyUserLevel**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Enable/ disable CoLa user level | String | 21 | | `EnableLegacyUserLevel` | `45 6E 61 62 6C 65 4C 65 67 61 63 79 55 73 65 72 4C 65 76 65 6C` |
| User level | - | Uint_8 | 1 | Maintenance:<br>Authorized Client: | `2<br>3` | `02<br>03` |
| Status | Enable/ disable | Bool_1 | 1 | Disable:<br>Enable: | `0<br>1` | `00<br>01` |

**Example: sMN EnableLegacyUserLevel - Enable User Level Authorized Client**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}EnableLegacyUserLevel{SPC}3{SPC}1<ETX>
```

```text
<STX>sMN EnableLegacyUserLevel 3 1<ETX>
```

```text
sMN EnableLegacyUserLevel 3 1
```

```text
02 73 4D 4E 20 45 6E 61 62 6C 65 4C 65 67 61 63 79 55 73 65 72 4C 65 76 65 6C 20 33 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 4D 4E 20 45 6E 61 62 6C 65 4C 65 67 61 63 79 55 73 65 72 4C 65 76 65 6C 20 03 01 01
```

```text
73 4D 4E 20 45 6E 61 62 6C 65 4C 65 67 61 63 79 55 73 65 72 4C 65 76 65 6C 20 03 01
```

**Telegram structure: sAN EnableLegacyUserLevel**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Enable/ disable CoLa user level | String | 21 | | `EnableLegacyUserLevel` | `45 6E 61 62 6C 65 4C 65 67 61 63 79 55 73 65 72 4C 65 76 65 6C` |
| Status code | Confirmation | Bool_1 | 1 | unsuccessful:<br>successful: | `0<br>1` | `00<br>01` |

**Example: sAN EnableLegacyUserLevel - Enabling/ disabling of the CoLa User Level was successful**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}EnableLegacyUserLevel{SPC}1<ETX>
```

```text
02 73 41 4E 20 45 6E 61 62 6C 65 4C 65 67 61 63 79 55 73 65 72 4C 65 76 65 6C 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 41 4E 20 45 6E 61 62 6C 65 4C 65 67 61 63 79 55 73 65 72 4C 65 76 65 6C 20 01 0E
```
