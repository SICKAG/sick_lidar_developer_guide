# Read HTTPS Status [sRN httpsStatus]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Cybersecurity

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-https-status-srn-httpsstatus

Returns the status of the HTTPS interface.

**Telegram structure: sRN httpsStatus**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read HTTPS Status | String | 11 | | `httpsStatus` | `68 74 74 70 73 53 74 61 74 75 73` |

**Example: sRN httpsStatus**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}httpsStatus<ETX>
```

```text
<STX>sRN httpsStatus<ETX>
```

```text
sRN httpsStatus
```

```text
02 73 52 4E 20 68 74 74 70 73 53 74 61 74 75 73 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 4E 20 68 74 74 70 73 53 74 61 74 75 73 10
```

```text
73 52 4E 20 68 74 74 70 73 53 74 61 74 75 73
```

**Telegram structure: sRA httpsStatus**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read HTTPS Status | String | 11 | | `httpsStatus` | `68 74 74 70 73 53 74 61 74 75 73` |
| enabled | Returns true if everything is up and running. | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| error length | Length of error (max. 100) | Uint_16 | 2 | | `0 ... 64` | `00 00 ... 00 64` |
| error | Returns the cause of error in case of an error. | String | n | | `<text>` | `<bytes>` |

**Example: sRA httpsStatus**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}httpsStatus{SPC}0{SPC}D{SPC}HTTPS_SUCCESS<ETX>
```

```text
02 73 52 41 20 68 74 74 70 73 53 74 61 74 75 73 20 30 20 44 20 48 54 54 50 53 5F 53 55 43 43 45 53 53 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 20 73 52 41 20 68 74 74 70 73 53 74 61 74 75 73 20 00 00 0D 48 54 54 50 53 5F 53 55 43 43 45 53 53 65
```
