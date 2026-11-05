# Log In [sMN SetAccessMode]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › General

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#log-in-smn-setaccessmode

The password hashes of the default passwords are documented in the operating instructions (PDF) of your device. Do not pass them on, and change the passwords during commissioning.

A log in to the device is necessary to change parameters. In most cases, the user level 'Authorized client' is needed. On delivery, only the Service user level is enabled; until a Service user enables Maintenance or Authorized client, the device answers a log in with these levels with `sAN SetAccessMode 0` (see [User Levels](https://sickag.github.io/sick_lidar_developer_guide/shared-features/user-levels/)). Changed parameters will be reset to the previous state via a reboot unless they are saved. To save parameter changes the command "sMN mEEwriteall" must be sent before log out.

**Telegram structure: sMN SetAccessMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | User level | String | 13 | | `SetAccessMode` | `53 65 74 41 63 63 65 73 73 4D 6F 64 65` |
| User level | Select user level | Int_8 | 1 | Maintenance:<br>Authorized client:<br>Service: | `2<br>3<br>4` | `02<br>03<br>04` |
| Password | Hash value for the selected user level | Uint_32 | 4 | Maintenance:<br>Authorized client:<br>Service: | `<password hash>` | `<password hash>` |

**Example: sMN SetAccessMode - Log in as “Authorized client”**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}SetAccessMode{SPC}3{SPC}<password hash><ETX>
```

```text
sMN SetAccessMode 3 <password hash>
```

**Telegram structure: sAN SetAccessMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | User level | String | 13 | | `SetAccessMode` | `53 65 74 41 63 63 65 73 73 4D 6F 64 65` |
| Change user level | Changed level | Bool_1 | 1 | Error:<br>Success: | `0<br>1` | `00<br>01` |

**Example: sAN SetAccessMode**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}SetAccessMode{SPC}1<ETX>
```

```text
02 73 41 4E 20 53 65 74 41 63 63 65 73 73 4D 6F 64 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 41 4E 20 53 65 74 41 63 63 65 73 73 4D 6F 64 65 20 01 38
```
