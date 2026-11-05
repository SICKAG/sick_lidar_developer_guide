# Change Password [sMN SetPassword]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › General

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#change-password-smn-setpassword

Sets the password of a CoLa user level. The password is passed as the 32-bit hash value of the new password.

**Telegram structure: sMN SetPassword**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Change Password | String | 11 | | `SetPassword` | `53 65 74 50 61 73 73 77 6F 72 64` |
| siUserLevel | siUserLevel | Int_8 | 1 | -128 ... 127 | `-128 ... +127` | `80 ... 7F` |
| udiNewPassword | udiNewPassword | Uint_32 | 4 | 0 ... 4294967295 | `0 ... FFFFFFFF` | `00 00 00 00 ... FF FF FF FF` |

**Example: sMN SetPassword**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}SetPassword{SPC}3{SPC}1920E4C9<ETX>
```

```text
<STX>sMN SetPassword 3 1920E4C9<ETX>
```

```text
sMN SetPassword 3 1920E4C9
```

```text
02 73 4D 4E 20 53 65 74 50 61 73 73 77 6F 72 64 20 33 20 31 39 32 30 45 34 43 39 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 4D 4E 20 53 65 74 50 61 73 73 77 6F 72 64 20 03 19 20 E4 C9 1A
```

```text
73 4D 4E 20 53 65 74 50 61 73 73 77 6F 72 64 20 03 19 20 E4 C9
```

**Telegram structure: sAN SetPassword**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Change Password | String | 11 | | `SetPassword` | `53 65 74 50 61 73 73 77 6F 72 64` |
| bSuccess | bSuccess | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |

**Example: sAN SetPassword**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}SetPassword{SPC}1<ETX>
```

```text
02 73 41 4E 20 53 65 74 50 61 73 73 77 6F 72 64 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 41 4E 20 53 65 74 50 61 73 73 77 6F 72 64 20 01 00
```
