# Change Password [sMN SetPassword]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › General

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#change-password-smn-setpassword

Change the log in password of a user level. If you are logged in with a higher user level, you can also set the password of lower user levels.

The password is sent as a hash value. To calculate it, log in to SOPASair as Service and open **Diagnosis > Cybersecurity > Hash calculator**. For example, the hash value of the password `testtest` is `1920E4C9`.

**Telegram structure: sMN SetPassword**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Set password request | String | 11 | | `SetPassword` | `53 65 74 50 61 73 73 77 6F 72 64` |
| User level | User level that the password will be applied to | Int_8 | 1 | Maintenance:<br>Authorized client:<br>Service: | `2<br>3<br>4` | `02<br>03<br>04` |
| Password | Hash value of the new password | Uint_32 | 4 | | `<Hash value>` | |

**Example: sMN SetPassword - Set the Authorized client password to "testtest"**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}SetPassword{SPC}3{SPC}1920E4C9<ETX>
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
| Command | Set password requested | String | 11 | | `SetPassword` | `53 65 74 50 61 73 73 77 6F 72 64` |
| Success | Confirmation | Int_8 | 1 | Failed:<br>Success: | `0<br>1` | `00<br>01` |

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
