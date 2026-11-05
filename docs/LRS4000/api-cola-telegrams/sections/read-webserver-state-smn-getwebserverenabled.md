# Read Webserver State [sMN GetWebserverEnabled]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Webserver Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-webserver-state-smn-getwebserverenabled

Returns state if Webserver is enabled.

**Telegram structure: sMN GetWebserverEnabled**

| Telegram part | Description     | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |
| ------------- | --------------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Command type  | Method          | String   | 3      |                    | `sMN`                 | `73 4D 4E`                                                 |
| Command       | Webserver state | String   | 19     |                    | `GetWebserverEnabled` | `47 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64` |

**Example: sMN GetWebserverEnabled**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}GetWebserverEnabled<ETX>
```

```text
<STX>sMN GetWebserverEnabled<ETX>
```

```text
sMN GetWebserverEnabled
```

```text
02 73 4D 4E 20 47 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 4D 4E 20 47 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64 16
```

```text
73 4D 4E 20 47 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64
```

**Telegram structure: sAN GetWebserverEnabled**

| Telegram part | Description             | Variable | Length | Additional details    | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |
| ------------- | ----------------------- | -------- | ------ | --------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Command type  | Answer                  | String   | 3      |                       | `sAN`                 | `73 41 4E`                                                 |
| Command       | Webserver state         | String   | 19     |                       | `GetWebserverEnabled` | `47 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64` |
| State         | Status of the webserver | Bool_1   | 1      | Disabled:<br>Enabled: | `0<br>1`              | `00<br>01`                                                 |

**Example: sAN GetWebserverEnabled**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}GetWebserverEnabled{SPC}1<ETX>
```

```text
02 73 41 4E 20 47 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 19 73 41 4E 20 47 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64 20 01 3B
```
