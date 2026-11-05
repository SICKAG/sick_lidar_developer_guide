# Set Time Synchronization [sWN TSCRole]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Date and System Time

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#set-time-synchronization-swn-tscrole

Set the device synchronization mode.

**Telegram structure: sWN TSCRole**

| Telegram part | Description        | Variable | Length | Additional details   | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                              |
| ------------- | ------------------ | -------- | ------ | -------------------- | ------------------------------------------ | --------------------------------------------------- |
| Command type  | Write              | String   | 3      |                      | `sWN`         | `73 57 4E`             |
| Command       | Set timestamp role | String   | 7      |                      | `TSCRole`     | `54 53 43 52 6F 6C 65` |
| Status        | Timestamp role     | Uint_8   | 1      | Off:<br>NTP:<br>PTP: | `0<br>1<br>3` | `00<br>01<br>03`       |

**Example: sWN TSCRole**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}TSCRole{SPC}1<ETX>
```

```text
sWN TSCRole 1
```

```text
02 73 57 4E 20 54 53 43 52 6F 6C 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0D 73 57 4E 20 54 53 43 52 6F 6C 65 20 01 1B
```

```text
73 57 4E 20 54 53 43 52 6F 6C 65 20 01
```

**Telegram structure: sWA TSCRole**

| Telegram part | Description        | Variable | Length | Additional details | Values CoLa A (ASCII)                  | Values CoLa B (Binary)                              |
| ------------- | ------------------ | -------- | ------ | ------------------ | -------------------------------------- | --------------------------------------------------- |
| Command type  | Answer             | String   | 3      |                    | `sWA`     | `73 57 41`             |
| Command       | Set timestamp role | String   | 7      |                    | `TSCRole` | `54 53 43 52 6F 6C 65` |

**Example: sWA TSCRole**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}TSCRole<ETX>
```

```text
02 73 57 41 20 54 53 43 52 6F 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0C 73 57 41 20 54 53 43 52 6F 6C 65 20 15
```
