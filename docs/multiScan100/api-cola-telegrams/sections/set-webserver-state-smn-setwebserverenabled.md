# Set Webserver State [sMN SetWebserverEnabled]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Webserver Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#set-webserver-state-smn-setwebserverenabled

This command enables/ disables the Webserver. Port 80 will not be opened after a reboot.

**Telegram structure: sMN SetWebserverEnabled**

| Telegram part | Description         | Variable | Length | Additional details  | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |
| ------------- | ------------------- | -------- | ------ | ------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Command type  | Method              | String   | 3      |                     | `sMN`                 | `73 4D 4E`                                                 |
| Command       | Set Webserver state | String   | 19     |                     | `SetWebserverEnabled` | `53 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64` |
| State         | Enable/ disable     | Bool_1   | 1      | Disable:<br>Enable: | `0<br>1`              | `00<br>01`                                                 |

**Example: sMN SetWebserverEnabled**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}SetWebserverEnabled{SPC}1<ETX>
```

```text
sMN SetWebserverEnabled 1
```

```text
02 73 4D 4E 20 53 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 19 73 4D 4E 20 53 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64 20 01 23
```

```text
73 4D 4E 20 53 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64 20 01
```

**Telegram structure: sAN SetWebserverEnabled**

| Telegram part | Description         | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |
| ------------- | ------------------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Command type  | Answer              | String   | 3      |                    | `sAN`                 | `73 41 4E`                                                 |
| Command       | Set Webserver state | String   | 19     |                    | `SetWebserverEnabled` | `53 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64` |

**Example: sAN SetWebserverEnabled**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}SetWebserverEnabled<ETX>
```

```text
02 73 41 4E 20 53 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 18 73 41 4E 20 53 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64 20 2E
```
