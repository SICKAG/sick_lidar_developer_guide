# Save Parameters Permanently [sMN mEEwriteall]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › General

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#save-parameters-permanently-smn-meewriteall

Save all parameter changes of the device. Must be sent before logging off and/ or hardware rebooting of the device. Else all changes will be lost.

**Telegram structure: sMN mEEwriteall**

| Telegram part | Description                  | Variable | Length | Additional details | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |
| ------------- | ---------------------------- | -------- | ------ | ------------------ | ------------------------------------------ | --------------------------------------------------------------- |
| Command type  | Method                       | String   | 3      |                    | `sMN`         | `73 4D 4E`                         |
| Command       | Store parameters permanently | String   | 11     |                    | `mEEwriteall` | `6D 45 45 77 72 69 74 65 61 6C 6C` |

**Example: sMN mEEwriteall**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}mEEwriteall<ETX>
```

```text
<STX>sMN mEEwriteall<ETX>
```

```text
sMN mEEwriteall
```

```text
02 73 4D 4E 20 6D 45 45 77 72 69 74 65 61 6C 6C 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 4D 4E 20 6D 45 45 77 72 69 74 65 61 6C 6C 21
```

```text
73 4D 4E 20 6D 45 45 77 72 69 74 65 61 6C 6C
```

**Telegram structure: sAN mEEwriteall**

| Telegram part | Description                  | Variable | Length | Additional details | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |
| ------------- | ---------------------------- | -------- | ------ | ------------------ | ------------------------------------------ | --------------------------------------------------------------- |
| Command type  | Answer                       | String   | 3      |                    | `sAN`         | `73 41 4E`                         |
| Command       | Store parameters permanently | String   | 11     |                    | `mEEwriteall` | `6D 45 45 77 72 69 74 65 61 6C 6C` |
| Status code   | Accepted when value is 1     | Bool_1   | 1      | Error:<br>Success: | `0<br>1`      | `00<br>01`                         |

**Example: sAN mEEwriteall**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}mEEwriteall{SPC}1<ETX>
```

```text
02 73 41 4E 20 6D 45 45 77 72 69 74 65 61 6C 6C 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 41 4E 20 6D 45 45 77 72 69 74 65 61 6C 6C 20 01 0C
```
