# picoScan100 API | CoLa Telegrams (CoLa A and CoLa B)

> Complete picoScan100 CoLa telegram reference with sRN, sWN, sMN, and sEN commands, parameter structures, and CoLa A and CoLa B examples.

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/api-cola-telegrams/

# API | CoLa Telegrams

This reference lists the CoLa telegrams supported by the picoScan100. Use the command details to build or troubleshoot PLC and other low-level integrations without guessing the telegram structure.

Examples are grouped by protocol, with each telegram representation in a separate code block and its own copy button.

Categories follow the [picoScan150 REST API reference](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/api-rest-openapi/#picoscan150-rest-api)
where corresponding CoLa telegrams are available. Select a telegram to expand
its structure and examples. A direct link to a telegram opens it automatically.
The categories organize the reference; they do not imply that every telegram
is supported by every picoScan variant.

<section class="cola-category" markdown="1">

## General

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Log In [sMN SetAccessMode]

</summary>

The password hashes of the default passwords are documented in the operating instructions (PDF) of your device. Do not pass them on, and change the passwords during commissioning.

A log in to the device is necessary to change parameters. In most cases, the user level 'Authorized client' is needed. Changed parameters will be reset to the previous state via a reboot unless they are saved. To save parameter changes the command "sMN mEEwriteall" must be sent before log out.

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
<STX>sMN SetAccessMode 3 <password hash><ETX>
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

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Enable/ Disable CoLa User Levels [sMN EnableLegacyUserLevel]

</summary>

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
02 02 02 02 00 00 00 1D 73 4D 4E 20 45 6E 61 62 6C 65 4C 65 67 61 63 79 55 73 65 72 4C 65 76 65 6C 20 03 20 01 21
```

```text
73 4D 4E 20 45 6E 61 62 6C 65 4C 65 67 61 63 79 55 73 65 72 4C 65 76 65 6C 20 03 20 01
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

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Load Factory Defaults [sMN mSCloadfacdef]

</summary>

The Factory-Reset (Load factory defaults) deletes the entire parametrization of the device. All parameters, settings and system applications will be set to default.

**Telegram structure: sMN mSCloadfacdef**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Load factory defaults | String | 13 | | `mSCloadfacdef` | `6D 53 43 6C 6F 61 64 66 61 63 64 65 66` |

**Example: sMN mSCloadfacdef**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}mSCloadfacdef<ETX>
```

```text
<STX>sMN mSCloadfacdef<ETX>
```

```text
sMN mSCloadfacdef
```

```text
02 73 4D 4E 20 6D 53 43 6C 6F 61 64 66 61 63 64 65 66 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 4D 4E 20 6D 53 43 6C 6F 61 64 66 61 63 64 65 66 28
```

```text
73 4D 4E 20 6D 53 43 6C 6F 61 64 66 61 63 64 65 66
```


**Telegram structure: sAN mSCloadfacdef**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Load factory defaults | String | 13 | | `mSCloadfacdef` | `6D 53 43 6C 6F 61 64 66 61 63 64 65 66` |

**Example: sAN mSCloadfacdef**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}mSCloadfacdef<ETX>
```

```text
02 73 41 4E 20 6D 53 43 6C 6F 61 64 66 61 63 64 65 66 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 41 4E 20 6D 53 43 6C 6F 61 64 66 61 63 64 65 66 20 04
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Load Application Defaults [sMN mSCloadappdef]

</summary>

The Application-Reset (Load application defaults) deletes only the user parametrization of the Fields, Evaluation cases (EVC) and parameters under the header “Application”. Other parameters like Interface settings, Echo Filter, etc. remain unaffected.

**Telegram structure: sMN mSCloadappdef**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Load application defaults | String | 13 | | `mSCloadappdef` | `6D 53 43 6C 6F 61 64 61 70 70 64 65 66` |

**Example: sMN mSCloadappdef**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}mSCloadappdef<ETX>
```

```text
<STX>sMN mSCloadappdef<ETX>
```

```text
sMN mSCloadappdef
```

```text
02 73 4D 4E 20 6D 53 43 6C 6F 61 64 61 70 70 64 65 66 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 4D 4E 20 6D 53 43 6C 6F 61 64 61 70 70 64 65 66 2D
```

```text
73 4D 4E 20 6D 53 43 6C 6F 61 64 61 70 70 64 65 66
```


**Telegram structure: sAN mSCloadappdef**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Load application defaults | String | 13 | | `mSCloadappdef` | `6D 53 43 6C 6F 61 64 61 70 70 64 65 66` |

**Example: sAN mSCloadappdef**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}mSCloadappdef<ETX>
```

```text
02 73 41 4E 20 6D 53 43 6C 6F 61 64 61 70 70 64 65 66 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 41 4E 20 6D 53 43 6C 6F 61 64 61 70 70 64 65 66 20 01
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Checksum [sRN LFTchecksum]

</summary>

This command includes the MD5 checksum of multiple software parts to verify their integrity. The checksums help to ensure files have not been corrupted or altered. They are also important for cybersecurity because they detect unauthorized modifications.

**Telegram structure: sRN LFTchecksum**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | MD5 checksum | String | 11 | | `LFTchecksum` | `4C 46 54 63 68 65 63 6B 73 75 6D` |

**Example: sRN LFTchecksum**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LFTchecksum<ETX>
```

```text
<STX>sRN LFTchecksum<ETX>
```

```text
sRN LFTchecksum
```

```text
02 73 52 4E 20 4C 46 54 63 68 65 63 6B 73 75 6D 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 4E 20 4C 46 54 63 68 65 63 6B 73 75 6D 1C
```

```text
73 52 4E 20 4C 46 54 63 68 65 63 6B 73 75 6D
```


**Telegram structure: sRA LFTchecksum**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | MD5 checksum | String | 11 | | `LFTchecksum` | `4C 46 54 63 68 65 63 6B 73 75 6D` |
| Variable Data 1 | Checksum validity | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| Variable Data 2 | Length | Uint_16 | 2 | | `20` | `32 20` |
| Variable Data 2 | Checksum Linux part | FlexString | | | `<hash>` | `<hash>` |
| Variable Data 3 | Length | Uint_16 | 2 | | `20` | `32 20` |
| Variable Data 3 | Checksum app part | FlexString | | | `<hash>` | `<hash>` |
| Variable Data 4 | Length | Uint_16 | 2 | | `20` | `32 20` |
| Variable Data 4 | Checksum calibration part | FlexString | | | `<hash>` | `<hash>` |
| Variable Data 5 | Length | Uint_16 | 2 | | `20` | `32 20` |
| Variable Data 5 | Checksum parameters part | FlexString | | | `<hash>` | `<hash>` |

**Example: sRA LFTchecksum**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LFTchecksum{SPC}1{SPC}20{SPC}92b7b9720c40e8b99268229283617dd5{SPC}20{SPC}e002a1c8022b30589ce0e357c87f5a1c{SPC}20{SPC}901736df3fbc807121c46f9eaed8ff28{SPC}20{SPC}588e8386c7cd011d1a8369c4377e2a4c<ETX>
```

```text
02 73 52 41 20 4C 46 54 63 68 65 63 6B 73 75 6D 20 31 20 32 30 20 39 32 62 37 62 39 37 32 30 63 34 30 65 38 62 39 39 32 36 38 32 32 39 32 38 33 36 31 37 64 64 35 20 32 30 20 65 30 30 32 61 31 63 38 30 32 32 62 33 30 35 38 39 63 65 30 65 33 35 37 63 38 37 66 35 61 31 63 20 32 30 20 39 30 31 37 33 36 64 66 33 66 62 63 38 30 37 31 32 31 63 34 36 66 39 65 61 65 64 38 66 66 32 38 20 32 30 20 35 38 38 65 38 33 38 36 63 37 63 64 30 31 31 64 31 61 38 33 36 39 63 34 33 37 37 65 32 61 34 63 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 99 73 52 41 20 4C 46 54 63 68 65 63 6B 73 75 6D 20 01 00 20 39 32 62 37 62 39 37 32 30 63 34 30 65 38 62 39 39 32 36 38 32 32 39 32 38 33 36 31 37 64 64 35 00 20 65 30 30 32 61 31 63 38 30 32 32 62 33 30 35 38 39 63 65 30 65 33 35 37 63 38 37 66 35 61 31 63 00 20 39 30 31 37 33 36 64 66 33 66 62 63 38 30 37 31 32 31 63 34 36 66 39 65 61 65 64 38 66 66 32 38 00 20 35 38 38 65 38 33 38 36 63 37 63 64 30 31 31 64 31 61 38 33 36 39 63 34 33 37 37 65 32 61 34 63 6F
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Change Password [sMN SetPassword]

</summary>

Changing the log in password for a specific user level.

If logged in with a higher user level you may set the password for lower user levels as well.

**Telegram structure: sMN SetPassword**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Set password request | String | 13 | | `SetPassword` | `53 65 74 50 61 73 73 77 6F 72 64` |
| User level | User level that the password will be applied to | Int_8 | 1 | Maintenance:<br>Authorized client:<br>Service: | `2<br>3<br>4` | `02<br>03<br>04` |
| Password | Hash value of the new password | Uint_32 | 4 | | `<Hash value>` | |

Set password for 'Authorized client' to “testtest” (hash value = 1920E4C9).

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


Calculating the hash value of the password

**Telegram structure: sAN SetPassword**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Set password requested | String | 13 | | `SetPassword` | `53 65 74 50 61 73 73 77 6F 72 64` |
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

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Check Password [sMN CheckPassword]

</summary>

Check the password for a specific user level, e.g. to verify if it has been changed correctly.

**Telegram structure: sMN CheckPassword**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Check password request | String | 13 | | `CheckPassword` | `43 68 65 63 6B 50 61 73 73 77 6F 72 64` |
| User level | User level to check the password for | Int_8 | 1 | Maintenance:<br>Authorized client:<br>Service: | `2<br>3<br>4` | `02<br>03<br>04` |
| Password | Hash value of the password to be checked | Uint_32 | 4 | | `<Hash value>` | |

Check password “testtest” for 'Authorized client'.

**Example: sMN CheckPassword**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}CheckPassword{SPC}3{SPC}1920E4C9<ETX>
```

```text
<STX>sMN CheckPassword 3 1920E4C9<ETX>
```

```text
sMN CheckPassword 3 1920E4C9
```

```text
02 73 4D 4E 20 43 68 65 63 6B 50 61 73 73 77 6F 72 64 20 33 20 31 39 32 30 45 34 43 39 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 4D 4E 20 43 68 65 63 6B 50 61 73 73 77 6F 72 64 20 03 19 20 E4 C9 1E
```

```text
73 4D 4E 20 43 68 65 63 6B 50 61 73 73 77 6F 72 64 20 03 19 20 E4 C9
```


**Telegram structure: sAN CheckPassword**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Check password request | String | 13 | | `CheckPassword` | `43 68 65 63 6B 50 61 73 73 77 6F 72 64` |
| Success | Confirmation | Int_8 | 1 | Failed:<br>Success: | `0<br>1` | `00<br>01` |

**Example: sAN CheckPassword**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}CheckPassword{SPC}1<ETX>
```

```text
02 73 41 4E 20 43 68 65 63 6B 50 61 73 73 77 6F 72 64 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 41 4E 20 43 68 65 63 6B 50 61 73 73 77 6F 72 64 20 01 04
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Save Parameters Permanently [sMN mEEwriteall]

</summary>

Save all parameter changes of the device. Must be sent before logging off and/ or hardware rebooting of the device. Else all changes will be lost.

**Telegram structure: sMN mEEwriteall**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Store parameters permanently | String | 11 | | `mEEwriteall` | `6D 45 45 77 72 69 74 65 61 6C 6C` |

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

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Store parameters permanently | String | 11 | | `mEEwriteall` | `6D 45 45 77 72 69 74 65 61 6C 6C` |
| Status code | Accepted when value is 1 | Bool_1 | 1 | Error:<br>Success: | `0<br>1` | `00<br>01` |

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

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set to Run [sMN Run]

</summary>

Log out from device and activate all parameter changes.

**Telegram structure: sMN Run**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Start the device | String | 3 | | `Run` | `52 75 6E` |

**Example: sMN Run**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}Run<ETX>
```

```text
<STX>sMN Run<ETX>
```

```text
sMN Run
```

```text
02 73 4D 4E 20 52 75 6E 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 07 73 4D 4E 20 52 75 6E 19
```

```text
73 4D 4E 20 52 75 6E
```


**Telegram structure: sAN Run**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Start the device | String | 3 | | `Run` | `52 75 6E` |
| Status code | Accepted when value is 1 | Bool_1 | 1 | Error:<br>Success: | `0<br>1` | `00<br>01` |

**Example: sAN Run**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}Run{SPC}1<ETX>
```

```text
02 73 41 4E 20 52 75 6E 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 09 73 41 4E 20 52 75 6E 20 01 34
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Reboot Device [sMN mSCreboot]

</summary>

This command includes saving all parameters.

**Telegram structure: sMN mSCreboot**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Reboot device | String | 9 | | `mSCreboot` | `6D 53 43 72 65 62 6F 6F 74` |

**Example: sMN mSCreboot**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}mSCreboot<ETX>
```

```text
<STX>sMN mSCreboot<ETX>
```

```text
sMN mSCreboot
```

```text
02 73 4D 4E 20 6D 53 43 72 65 62 6F 6F 74 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0D 73 4D 4E 20 6D 53 43 72 65 62 6F 6F 74 2C
```

```text
73 4D 4E 20 6D 53 43 72 65 62 6F 6F 74
```


**Telegram structure: sAN mSCreboot**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Reboot device | String | 9 | | `mSCreboot` | `6D 53 43 72 65 62 6F 6F 74` |

**Example: sAN mSCreboot**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}mSCreboot<ETX>
```

```text
02 73 41 4E 20 6D 53 43 72 65 62 6F 6F 74 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 41 4E 20 6D 53 43 72 65 62 6F 6F 74 20 00
```

</details>

</section>

<section class="cola-category" markdown="1">

## Status

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read the Device State [sRN DevSta]

</summary>

This telegram reads the device state.

**Telegram structure: sRN DevSta**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read the current device state | String | 13 | | `DevSta` | `44 65 76 53 74 61` |

**Example: sRN DevSta**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}DevSta<ETX>
```

```text
<STX>sRN DevSta<ETX>
```

```text
sRN DevSta
```

```text
02 73 52 4E 20 44 65 76 53 74 61 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0A 73 52 4E 20 44 65 76 53 74 61 5E
```

```text
73 52 4E 20 44 65 76 53 74 61
```


**Telegram structure: sRA DevSta**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read the current device state | String | 13 | | `DevSta` | `44 65 76 53 74 61` |
| Status code | Code number | Enum_8 | 1 | Reserved:<br>Startup:<br>Service mode:<br>Normal operation:<br>Suspended operation:<br>Service recommended:<br>Service required:<br>Recoverable error:<br>Fatal error: | `0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8` | `00<br>01<br>02<br>03<br>04<br>05<br>06<br>07<br>08` |

**Example: sRA DevSta**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}DevSta{SPC}3<ETX>
```

```text
02 73 52 41 20 44 65 76 53 74 61 20 33 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0C 73 52 41 20 44 65 76 53 74 61 20 03 72
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Receive the Device State by Event [sEN DevSta]

</summary>

This telegram reads the device state.

**Telegram structure: sEN DevSta**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Read the current device state | String | 13 | | `DevSta` | `44 65 76 53 74 61` |
| Data | Start/ Stop | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN DevSta**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}DevSta{SPC}1<ETX>
```

```text
<STX>sEN DevSta 1<ETX>
```

```text
sEN DevSta 1
```

```text
02 73 45 4E 20 44 65 76 53 74 61 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0C 73 45 4E 20 44 65 76 53 74 61 20 01 68
```

```text
73 45 4E 20 44 65 76 53 74 61 20 01
```


**Telegram structure: sSN DevSta**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sSN` | `73 53 4E` |
| Command | Read the current device state | String | 13 | | `DevSta` | `44 65 76 53 74 61` |
| Status code | Code number | Enum_8 | 1 | Reserved:<br>Startup:<br>Service mode:<br>Normal operation:<br>Suspended operation:<br>Service recommended:<br>Service required:<br>Recoverable error:<br>Fatal error: | `0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8` | `00<br>01<br>02<br>03<br>04<br>05<br>06<br>07<br>08` |

**Example: sSN DevSta**

**CoLa A (ASCII)**

```text
<STX>sSN{SPC}DevSta{SPC}3<ETX>
```

```text
02 73 53 4E 20 44 65 76 53 74 61 20 33 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0C 73 53 4E 20 44 65 76 53 74 61 20 03 7C
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read the Device State [sRN SCdevicestate]

</summary>

This telegram reads the general device state.

**Telegram structure: sRN SCdevicestate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read the device state | String | 13 | | `SCdevicestate` | `53 43 64 65 76 69 63 65 73 74 61 74 65` |

**Example: sRN SCdevicestate**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}SCdevicestate<ETX>
```

```text
<STX>sRN SCdevicestate<ETX>
```

```text
sRN SCdevicestate
```

```text
02 73 52 4E 20 53 43 64 65 76 69 63 65 73 74 61 74 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 52 4E 20 53 43 64 65 76 69 63 65 73 74 61 74 65 30
```

```text
73 52 4E 20 53 43 64 65 76 69 63 65 73 74 61 74 65
```


**Telegram structure: sRA SCdevicestate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read the device state | String | 13 | | `SCdevicestate` | `53 43 64 65 76 69 63 65 73 74 61 74 65` |
| Status code | Code number | Enum_8 | 1 | Busy / logged-in:<br>Ready:<br>Error: | `0<br>1<br>2` | `00<br>01<br>02` |

**Example: sRA SCdevicestate**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}SCdevicestate{SPC}1<ETX>
```

```text
02 73 52 41 20 53 43 64 65 76 69 63 65 73 74 61 74 65 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 41 20 53 43 64 65 76 69 63 65 73 74 61 74 65 20 01 1E
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Receive the Device State by Event [sEN SCdevicestate]

</summary>

This telegram reads the general device state continuously.

**Telegram structure: sEN SCdevicestate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Read the device state | String | 13 | | `SCdevicestate` | `53 43 64 65 76 69 63 65 73 74 61 74 65` |
| Data | Start/ Stop | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN SCdevicestate**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}SCdevicestate{SPC}1<ETX>
```

```text
<STX>sEN SCdevicestate 1<ETX>
```

```text
sEN SCdevicestate 1
```

```text
02 73 45 4E 20 53 43 64 65 76 69 63 65 73 74 61 74 65 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 45 4E 20 53 43 64 65 76 69 63 65 73 74 61 74 65 20 01 06
```

```text
73 45 4E 20 53 43 64 65 76 69 63 65 73 74 61 74 65 20 01
```


**Telegram structure: sRA SCdevicestate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sSN` | `73 53 4E` |
| Command | Read the device state | String | 13 | | `SCdevicestate` | `53 43 64 65 76 69 63 65 73 74 61 74 65` |
| Status code | Code number | Enum_8 | 1 | Busy / logged-in:<br>Ready:<br>Error: | `0<br>1<br>2` | `00<br>01<br>02` |

**Example: sSN SCdevicestate**

**CoLa A (ASCII)**

```text
<STX>sSN{SPC}SCdevicestate{SPC}1<ETX>
```

```text
02 73 53 4E 20 53 43 64 65 76 69 63 65 73 74 61 74 65 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 53 4E 20 53 43 64 65 76 69 63 65 73 74 61 74 65 20 01 10
```

</details>

</section>

<section class="cola-category" markdown="1">

## Device Information

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Firmware Version [sRN DeviceIdent]

</summary>

**Telegram structure: sRN DeviceIdent**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read firmware version | String | 11 | | `DeviceIdent` | `44 65 76 69 63 65 49 64 65 6E 74` |

**Example: sRN DeviceIdent**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}DeviceIdent<ETX>
```

```text
<STX>sRN DeviceIdent<ETX>
```

```text
sRN DeviceIdent
```

```text
02 73 52 4E 20 44 65 76 69 63 65 49 64 65 6E 74 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 4E 20 44 65 76 69 63 65 49 64 65 6E 74 25
```

```text
73 52 4E 20 44 65 76 69 63 65 49 64 65 6E 74
```


**Telegram structure: sRA DeviceIdent**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | | String | 11 | | `DeviceIdent` | `44 65 76 69 63 65 49 64 65 6E 74` |
| Value | Length of firmware designation | Enum_16 | 2 | | `0 ... 22h` | `0 ... 22h` |
| Value | Firmware designation for device family | String | | | `(See example)` | `(See example)` |
| Value | Length of firmware version | Enum_16 | 2 | | `0 ... 22h` | `0 ... 22h` |
| Value | Firmware version | String | | | `(See example)` | `(See example)` |

**Example: sRA DeviceIdent**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}DeviceIdent{SPC}8{SPC}picoScan{SPC}8{SPC}1.2.0.0B<ETX>
```

```text
02 73 52 41 20 44 65 76 69 63 65 49 64 65 6E 74 20 38 20 70 69 63 6F 53 63 61 6E 20 38 20 31 2E 32 2E 30 2E 30 42 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 24 73 52 41 20 44 65 76 69 63 65 49 64 65 6E 74 20 00 08 70 69 63 6F 53 63 61 6E 00 08 31 2E 32 2E 30 2E 30 42 4F
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Version of the Application Software [sRN FirmwareVersion]

</summary>

**Telegram structure: sRN FirmwareVersion**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read version of the application software | String | 15 | | `FirmwareVersion` | `46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E` |

**Example: sRN FirmwareVersion**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}FirmwareVersion<ETX>
```

```text
<STX>sRN FirmwareVersion<ETX>
```

```text
sRN FirmwareVersion
```

```text
02 73 52 4E 20 46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 4E 20 46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E 24
```

```text
73 52 4E 20 46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E
```


**Telegram structure: sRA FirmwareVersion**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read version of the application software | String | 15 | | `FirmwareVersion` | `46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E` |
| Value | Length of version | Uint_16 | 2 | | `0 ... 28h` | `0 ... 28h` |
| Value | Version | String | 16 | | `(See example)` | `(See example)` |

**Example: sRA FirmwareVersion**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}FirmwareVersion{SPC}14{SPC}1.2.0-b.0+1225.523ef<ETX>
```

```text
02 73 52 41 20 46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E 20 31 34 20 31 2E 32 2E 30 2D 62 2E 30 2B 31 32 32 35 2E 35 32 33 65 66 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2A 73 52 41 20 46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E 20 00 14 31 2E 32 2E 30 2D 62 2E 30 2B 31 32 32 35 2E 35 32 33 65 66 4B
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Device Order Number [sRN OrdNum]

</summary>

This telegram reads the device order number which corresponds to the SICK part number of the device.

**Telegram structure: sRN OrdNum**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read device order number | String | 6 | | `OrdNum` | `4F 72 64 4E 75 6D` |

**Example: sRN OrdNum**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}OrdNum<ETX>
```

```text
<STX>sRN OrdNum<ETX>
```

```text
sRN OrdNum
```

```text
02 73 52 4E 20 4F 72 64 4E 75 6D 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0A 73 52 4E 20 4F 72 64 4E 75 6D 40
```

```text
73 52 4E 20 4F 72 64 4E 75 6D
```


**Telegram structure: sRA OrdNum**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read device order number | String | 6 | | `OrdNum` | `4F 72 64 4E 75 6D` |
| Length | Number of characters of the following order number | Uint_16 | 2 | | `0h ... 20h` | `00 00 ... 00 20` |
| Order number | Order number in 7 digits | String | 7 | | `0000000 … 9999999` | `00 00 00 00 00 00 00 … FF FF FF FF FF FF FF` |

Example: sRA OrdNum 1134610 (Order Number for picoScan150 Pro-1)

**Example for picoScan150 Pro-1: sRA OrdNum**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}OrdNum{SPC}7{SPC}1134610<ETX>
```

```text
02 73 52 41 20 4F 72 64 4E 75 6D 20 37 20 31 31 33 34 36 31 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 41 20 4F 72 64 4E 75 6D 20 00 07 31 31 33 34 36 31 30 58
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Serial Number [sRN SerialNumber]

</summary>

Read the serial number of the device.

**Telegram structure: sRN SerialNumber**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read serial number of the device | String | 12 | | `SerialNumber` | `53 65 72 69 61 6C 4E 75 6D 62 65 72` |

**Example: sRN SerialNumber**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}SerialNumber<ETX>
```

```text
<STX>sRN SerialNumber<ETX>
```

```text
sRN SerialNumber
```

```text
02 73 52 4E 20 53 65 72 69 61 6C 4E 75 6D 62 65 72 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 52 4E 20 53 65 72 69 61 6C 4E 75 6D 62 65 72 4C
```

```text
73 52 4E 20 53 65 72 69 61 6C 4E 75 6D 62 65 72
```


**Telegram structure: sRA SerialNumber**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read serial number of the device | String | 12 | | `SerialNumber` | `53 65 72 69 61 6C 4E 75 6D 62 65 72` |
| Length of serial number | Number of characters of the serial number | Uint_16 | 2 | | `0 ... 8h` | `00 00 ... 00 08h` |
| Serial number | Production period (year, calendar week, number): YYWWxxxx | String | 8 | | `(See example)` | `(See example)` |

**Example: sRA SerialNumber**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}SerialNumber{SPC}8{SPC}23360024<ETX>
```

```text
02 73 52 41 20 53 65 72 69 61 6C 4E 75 6D 62 65 72 20 38 20 32 33 33 36 30 30 32 34 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 52 41 20 53 65 72 69 61 6C 4E 75 6D 62 65 72 20 00 08 32 33 33 36 30 30 32 34 69
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Device Type [sRN DItype]

</summary>

This telegram asks for the device type of the product family.

**Telegram structure: sRN DItype**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Ask state | String | 6 | | `DItype` | `44 49 74 79 70 65` |

**Example: sRN DItype**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}DItype<ETX>
```

```text
<STX>sRN DItype<ETX>
```

```text
sRN DItype
```

```text
02 73 52 4E 20 44 49 74 79 70 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0A 73 52 4E 20 44 49 74 79 70 65 5A
```

```text
73 52 4E 20 44 49 74 79 70 65
```


**Telegram structure: sRA DItype**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Ask state | String | 6 | | `DItype` | `44 49 74 79 70 65` |
| Length of type key | Number of characters of the following type code | Uint_16 | 2 | | `0d … 65535d (0h … FFFFh)` | `00 00 … FF FF` |
| Device type | Type code of the device | String | (var.) | | `(Device type)` | `(Device type)` |

**Example: sRA DItype (picoScan150)**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}DItype{SPC}B{SPC}picoScan150<ETX>
```

```text
02 73 52 41 20 44 49 74 79 70 65 20 42 20 70 69 63 6F 53 63 61 6E 31 35 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 18 73 52 41 20 44 49 74 79 70 65 20 00 0B 70 69 63 6F 53 63 61 6E 31 35 30 60
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Device Name [sWN LocationName]

</summary>

Give the device a specific description name such as its location.

**Telegram structure: sWN LocationName**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set device name | String | 12 | | `LocationName` | `4C 6F 63 61 74 69 6F 6E 4E 61 6D 65` |
| Value | Number of characters of the following device name | Uint_16 | 2 | | `0d … +16d (0h … 10h )` | `00 00 … 00 10` |
| Value | Device name | String | 32 | | `[Device name]` | `[Device name]` |

**Example: sWN LocationName +9 LongRange**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LocationName{SPC}+9{SPC}LongRange<ETX>
```

```text
<STX>sWN LocationName +9 LongRange<ETX>
```

```text
sWN LocationName +9 LongRange
```

```text
02 73 57 4E 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 20 39 20 4C 6F 6E 67 52 61 6E 67 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 57 4E 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 20 00 09 4C 6F 6E 67 52 61 6E 67 65 0C
```

```text
73 57 4E 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 20 00 09 4C 6F 6E 67 52 61 6E 67 65
```


**Telegram structure: sWA LocationName**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set device name | String | 12 | | `LocationName` | `4C 6F 63 61 74 69 6F 6E 4E 61 6D 65` |

**Example: sWA LocationName**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LocationName<ETX>
```

```text
02 73 57 41 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 57 41 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 20 7F
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Device Name [sRN LocationName]

</summary>

Read the given name of the device (Default is the serial number of the device).

**Telegram structure: sRN LocationName**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read device name | String | 12 | | `LocationName` | `4C 6F 63 61 74 69 6F 6E 4E 61 6D 65` |

**Example: sRN LocationName**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LocationName<ETX>
```

```text
<STX>sRN LocationName<ETX>
```

```text
sRN LocationName
```

```text
02 73 52 4E 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 52 4E 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 55
```

```text
73 52 4E 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65
```


**Telegram structure: sRA LocationName**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Find complete telegram structure of the answer in | | | | | | |

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Initiate an Acoustic or Visual Signal for a Defined Period of Time [sMN FindMe]

</summary>

This command can be used to make the device easier to find.

**Telegram structure: sMN FindMe**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Initiate an acoustic or visual signal | String | 11 | | `FindMe` | `46 69 6E 64 4D 65` |
| Period of time | Duration in seconds | Uint_16 | 2 | | `0d … 65535d (0h .. FF FF)` | `00 ... FF FF` |

**Example: sMN FindMe**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}FindMe{SPC}1<ETX>
```

```text
<STX>sMN FindMe 1<ETX>
```

```text
sMN FindMe 1
```

```text
02 73 4D 4E 20 46 69 6E 64 4D 65 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0D 73 4D 4E 20 46 69 6E 64 4D 65 20 00 01 7C
```

```text
73 4D 4E 20 46 69 6E 64 4D 65 20 00 01
```


**Telegram structure: sAN FindMe**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Initiate an acoustic or visual signal | String | 11 | | `FindMe` | `46 69 6E 64 4D 65` |

**Example: sAN FindMe**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}FindMe<ETX>
```

```text
02 73 41 4E 20 46 69 6E 64 4D 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0B 73 41 4E 20 46 69 6E 64 4D 65 20 71
```

</details>

</section>

<section class="cola-category" markdown="1">

## Basic Settings

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read for Frequency and Angular Resolution [sRN LMPscancfg]

</summary>

Read the scanning frequency, angular resolution and aperture angle of the device. Values show the information of the values before any filters are applied. Therefore aperture angle is always showing the maximum, scanning frequency and angular resolution may also be static depending on device family.

**Telegram structure: sRN LMPscancfg**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Info of scan frequency and angular resolution | String | 10 | | `LMPscancfg` | `4C 4D 50 73 63 61 6E 63 66 67` |

**Example: sRN LMPscancfg**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LMPscancfg<ETX>
```

```text
<STX>sRN LMPscancfg<ETX>
```

```text
sRN LMPscancfg
```

```text
02 73 52 4E 20 4C 4D 50 73 63 61 6E 63 66 67 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 52 4E 20 4C 4D 50 73 63 61 6E 63 66 67 63
```

```text
73 52 4E 20 4C 4D 50 73 63 61 6E 63 66 67
```


**Telegram structure: sRA LMPscancfg**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Info of scan frequency and angular resolution | String | 10 | | `LMPscancfg` | `4C 4D 50 73 63 61 6E 63 66 67` |
| Scan frequency | [1/100 Hz] | Uint_32 | 4 | 15 Hz ... 50 Hz:<br>(depends on Dynamic Sensing Profile ) | `5DCh ... 1388h` | `05 DC ... 13 88` |
| Reserved | - | Int_16 | 2 | Always: | `1` | `00 01` |
| Angular resolution | [1/10000°] | Uint_32 | 4 | 0.1° ... 1°:<br>(depends on Dynamic Sensing Profile ) | `3E8h … 2710h` | `03 E8 ... 27 10` |
| Start angle | [1/10000°] | Int_32 | 4 | -48° ... 228° | `FFF8AD00h … 22CA40h` | `FF F8 AD 00h … 00 22 CA 40h` |
| Stop angle | [1/10000°] | Int_32 | 4 | -48° ... 228° | `FFF8AD00h … 22CA40h` | `FF F8 AD 00h … 00 22 CA 40h` |

**Example: sRA LMPscancfg - 30 Hz scan frequency, 0.1° angular resolution, -138° start angle, +138° stop angle**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LMPscancfg{SPC}BB8{SPC}1{SPC}3E8{SPC}FFEAF160{SPC}150EA0<ETX>
```

```text
02 73 52 41 20 4C 4D 50 73 63 61 6E 63 66 67 20 42 42 38 20 31 20 33 45 38 20 46 46 45 41 46 31 36 30 20 31 35 30 45 41 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 21 73 52 41 20 4C 4D 50 73 63 61 6E 63 66 67 20 00 00 0B B8 00 01 00 00 03 E8 FF EA F1 60 00 15 0E A0 2A
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Activate Standby Mode [sMN LMCstandby]

</summary>

Shut off the laser in order to extend the lifetime of laser diode and reduce motor speed to 25 Hz.

**Telegram structure: sMN LMCstandby**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Set device to standby | String | 10 | | `LMCstandby` | `4C 4D 43 73 74 61 6E 64 62 79` |

**Example: sMN LMCstandby**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}LMCstandby<ETX>
```

```text
<STX>sMN LMCstandby<ETX>
```

```text
sMN LMCstandby
```

```text
02 73 4D 4E 20 4C 4D 43 73 74 61 6E 64 62 79 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 4D 4E 20 4C 4D 43 73 74 61 6E 64 62 79 65
```

```text
73 4D 4E 20 4C 4D 43 73 74 61 6E 64 62 79
```


**Telegram structure: sAN LMCstandby**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Set device to standby | String | 10 | | `LMCstandby` | `4C 4D 43 73 74 61 6E 64 62 79` |
| Status code | Accepted when value is 0 | Enum_8 | 1 | Success:<br>Not allowed: | `0<br>1` | `00<br>01` |

**Example: sAN LMCstandby**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}LMCstandby{SPC}0<ETX>
```

```text
02 73 41 4E 20 4C 4D 43 73 74 61 6E 64 62 79 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 41 4E 20 4C 4D 43 73 74 61 6E 64 62 79 20 00 49
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Start Measurement [sMN LMCstartmeas]

</summary>

Start the laser and (unless in Standby mode) the motor of the device

**Telegram structure: sMN LMCstartmeas**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Start measurement | String | 12 | | `LMCstartmeas` | `4C 4D 43 73 74 61 72 74 6D 65 61 73` |

**Example: sMN LMCstartmeas**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}LMCstartmeas<ETX>
```

```text
<STX>sMN LMCstartmeas<ETX>
```

```text
sMN LMCstartmeas
```

```text
02 73 4D 4E 20 4C 4D 43 73 74 61 72 74 6D 65 61 73 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 4D 4E 20 4C 4D 43 73 74 61 72 74 6D 65 61 73 68
```

```text
73 4D 4E 20 4C 4D 43 73 74 61 72 74 6D 65 61 73
```


**Telegram structure: sAN LMCstartmeas**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Start measurement | String | 12 | | `LMCstartmeas` | `4C 4D 43 73 74 61 72 74 6D 65 61 73` |
| Status code | Accepted when value is 0 | Enum_8 | 1 | Success:<br>Not allowed: | `0<br>1` | `00<br>01` |

**Example: sAN LMCstartmeas**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}LMCstartmeas{SPC}0<ETX>
```

```text
02 73 41 4E 20 4C 4D 43 73 74 61 72 74 6D 65 61 73 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 41 4E 20 4C 4D 43 73 74 61 72 74 6D 65 61 73 20 00 44
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Stop Measurement [sMN LMCstopmeas]

</summary>

Shut off the laser and the motor is running at the set up frequency.

**Telegram structure: sMN LMCstopmeas**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Stop measurement | String | 11 | | `LMCstopmeas` | `4C 4D 43 73 74 6F 70 6D 65 61 73` |

**Example: sMN LMCstopmeas**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}LMCstopmeas<ETX>
```

```text
<STX>sMN LMCstopmeas<ETX>
```

```text
sMN LMCstopmeas
```

```text
02 73 4D 4E 20 4C 4D 43 73 74 6F 70 6D 65 61 73 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 4D 4E 20 4C 4D 43 73 74 6F 70 6D 65 61 73 10
```

```text
73 4D 4E 20 4C 4D 43 73 74 6F 70 6D 65 61 73
```


**Telegram structure: sAN LMCstopmeas**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Stop measurement | String | 11 | | `LMCstopmeas` | `4C 4D 43 73 74 6F 70 6D 65 61 73` |
| Status code | Accepted when value is 0 | Enum_8 | 1 | No error:<br>Not allowed: | `0<br>1` | `00<br>01` |

**Example: sAN LMCstopmeas**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}LMCstopmeas{SPC}0<ETX>
```

```text
02 73 41 4E 20 4C 4D 43 73 74 6F 70 6D 65 61 73 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 41 4E 20 4C 4D 43 73 74 6F 70 6D 65 61 73 20 00 3C
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Autostart Measurement [sWN LMPautostartmeas]

</summary>

This parameter defines whether the scanner will start to rotate directly and measure when powering up or remain in idle mode. The changed setting (saved with the command sMN mEEWriteall, ) will be then be active with the next power-up cycle.

In case autostart is deactivated, the sensor will remain in idle mode with the laser switched off and a motor speed depending on the Dynamic Sensing Profile .

**Telegram structure: sWN LMPautostartmeas**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Autostart measurement | String | 16 | | `LMPautostartmeas` | `4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73` |
| Status code | Activate / Deactivate Autostart | Bool_1 | 1 | Autostart off:<br>Autostart on: | `0<br>1` | `00<br>01` |

**Example: sWN LMPautostartmeas 1**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LMPautostartmeas{SPC}1<ETX>
```

```text
<STX>sWN LMPautostartmeas 1<ETX>
```

```text
sWN LMPautostartmeas 1
```

```text
02 73 57 4E 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 57 4E 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 20 01 4F
```

```text
73 57 4E 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 20 01
```


**Telegram structure: sWA LMDautostartmeas**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Autostart measurement | String | 16 | | `LMPautostartmeas` | `4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73` |

**Example: sWA LMPautostartmeas**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LMPautostartmeas<ETX>
```

```text
02 73 57 41 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 57 41 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 20 41
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Sensitivity Mode [sWN SensitivityMode]

</summary>

Define a sensitivity mode for the detection of reflectors .

**Telegram structure: sWN SensitivityMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Sensitivity Mode | String | 15 | | `SensitivityMode` | `53 65 6E 73 69 74 69 76 69 74 79 4D 6F 64 65` |
| Sensitivity | Choose Sensitivity Mode | Enum_8 | 1 | Maximum robustness:<br>Standard (recommended):<br>Maximum detectivity: | `0<br>1<br>2` | `00<br>01<br>02` |

**Example: sWN SensitivityMode**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}SensitivityMode{SPC}1<ETX>
```

```text
<STX>sWN SensitivityMode 1<ETX>
```

```text
sWN SensitivityMode 1
```

```text
02 73 57 4E 20 53 65 6E 73 69 74 69 76 69 74 79 4D 6F 64 65 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 57 4E 20 53 65 6E 73 69 74 69 76 69 74 79 4D 6F 64 65 20 01 05
```

```text
73 57 4E 20 53 65 6E 73 69 74 69 76 69 74 79 4D 6F 64 65 20 01
```


**Telegram structure: sWA SensitivityMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Sensitivity Mode | String | 15 | | `SensitivityMode` | `53 65 6E 73 69 74 69 76 69 74 79 4D 6F 64 65` |

**Example: sWA SensitivityMode**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}SensitivityMode<ETX>
```

```text
02 73 57 41 20 53 65 6E 73 69 74 69 76 69 74 79 4D 6F 64 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 57 41 20 53 65 6E 73 69 74 69 76 69 74 79 4D 6F 64 65 20 0B
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Performance Profile [sWN PerformanceProfileNumber]

</summary>

Define which Dynamic Sensing Profile shall be used, .

**Telegram structure: sWN PerformanceProfileNumber**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set Dynamic Sensing Profile | String | 24 | | `PerformanceProfileNumber` | `50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72` |
| Performance Profile | Selection of Dynamic Sensing Profile | Enum_8 | 1 | Profile 1:<br>Profile 2:<br>Profile 3:<br>Profile 4:<br>Profile 5:<br>Profile 6:<br>Profile 7:<br>Profile 8:<br>Profile 9:<br>Profile 10:<br>Profile 11: | `1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11` | `01<br>02<br>03<br>04<br>05<br>06<br>07<br>08<br>09<br>0A<br>0B` |

**Example: sWN PerformanceProfileNumber**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}PerformanceProfileNumber{SPC}2<ETX>
```

```text
<STX>sWN PerformanceProfileNumber 2<ETX>
```

```text
sWN PerformanceProfileNumber 2
```

```text
02 73 57 4E 20 50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72 20 32 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1E 73 57 4E 20 50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72 20 02 58
```

```text
73 57 4E 20 50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72 20 02
```


**Telegram structure: sWA PerformanceProfileNumber**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set Performance Profile | String | 24 | | `PerformanceProfileNumber` | `50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72` |

**Example: sWA PerformanceProfileNumber**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}PerformanceProfileNumber<ETX>
```

```text
02 73 57 41 20 50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1D 73 57 41 20 50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72 20 55
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Activate Extended Range Mode [sWN EnableLongRangeMode]

</summary>

Extends the maximum scanning distance .

**Telegram structure: sWN EnableLongRangeMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Enable extended range mode | String | 19 | | `EnableLongRangeMode` | `45 6E 61 62 6C 65 4C 6F 6E 67 52 61 6E 67 65 4D 6F 64 65` |
| Status code | Activate / deactivate extended range mode | Bool_1 | 1 | Inactive:<br>Active: | `0<br>1` | `00<br>01` |

**Example: sWN EnableLongRangeMode 1**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EnableLongRangeMode{SPC}1<ETX>
```

```text
<STX>sWN EnableLongRangeMode 1<ETX>
```

```text
sWN EnableLongRangeMode 1
```

```text
02 73 57 4E 20 45 6E 61 62 6C 65 4C 6F 6E 67 52 61 6E 67 65 4D 6F 64 65 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 19 73 57 4E 20 45 6E 61 62 6C 65 4C 6F 6E 67 52 61 6E 67 65 4D 6F 64 65 20 01 1C
```

```text
73 57 4E 20 45 6E 61 62 6C 65 4C 6F 6E 67 52 61 6E 67 65 4D 6F 64 65 20 01
```


**Telegram structure: sWA EnableLongeRangeModer**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Enable extended range mode | String | 19 | | `EnableLongRangeMode` | `45 6E 61 62 6C 65 4C 6F 6E 67 52 61 6E 67 65 4D 6F 64 65` |

**Example: sWA EnableLongeRangeMode**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}EnableLongRangeMode<ETX>
```

```text
02 73 57 41 20 45 6E 61 62 6C 65 4C 6F 6E 67 52 61 6E 67 65 4D 6F 64 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 18 73 57 41 20 45 6E 61 62 6C 65 4C 6F 6E 67 52 61 6E 67 65 4D 6F 64 65 20 12
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Status of Extended Range Mode [sRN EnableLongRangeMode]

</summary>

Read if the extended range mode is currently active.

**Telegram structure: sRN EnableLongRangeMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read status of extended range mode | String | 19 | | `EnableLongRangeMode` | `45 6E 61 62 6C 65 4C 6F 6E 67 52 61 6E 67 65 4D 6F 64 65` |

**Example: sRN EnableLongRangeMode**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EnableLongRangeMode<ETX>
```

```text
<STX>sRN EnableLongRangeMode<ETX>
```

```text
sRN EnableLongRangeMode
```

```text
02 73 52 4E 20 45 6E 61 62 6C 65 4C 6F 6E 67 52 61 6E 67 65 4D 6F 64 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 52 4E 20 45 6E 61 62 6C 65 4C 6F 6E 67 52 61 6E 67 65 4D 6F 64 65 38
```

```text
73 52 4E 20 45 6E 61 62 6C 65 4C 6F 6E 67 52 61 6E 67 65 4D 6F 64 65
```


**Telegram structure: sRA EnableLongRangeMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read status of extended range mode | String | 19 | | `EnableLongRangeMode` | `45 6E 61 62 6C 65 4C 6F 6E 67 52 61 6E 67 65 4D 6F 64 65` |
| Status code | Status of extended range mode | Bool_1 | 1 | Inactive:<br>Active: | `0<br>1` | `00<br>01` |

**Example: sRA EnableLongRangeMode**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EnableLongRangeMode{SPC}1<ETX>
```

```text
02 73 52 41 20 45 6E 61 62 6C 65 4C 6F 6E 67 52 61 6E 67 65 4D 6F 64 65 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 19 73 52 41 20 45 6E 61 62 6C 65 4C 6F 6E 67 52 61 6E 67 65 4D 6F 64 65 20 01 16
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Enable/ Disable LEDs [sWN LEDEnable]

</summary>

This command enables/ disables the LEDs of the device.

**Telegram structure: sWN LEDEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set LEDs | String | 9 | | `LEDEnable` | `4C 45 44 45 6E 61 62 6C 65` |
| Status | Enable/ disable | Bool_1 | 1 | Off:<br>On: | `0<br>1` | `00<br>01` |

**Example: sWN LEDEnable**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LEDEnable{SPC}1<ETX>
```

```text
<STX>sWN LEDEnable 1<ETX>
```

```text
sWN LEDEnable 1
```

```text
02 73 57 4E 20 4C 45 44 45 6E 61 62 6C 65 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 57 4E 20 4C 45 44 45 6E 61 62 6C 65 20 01 07
```

```text
73 57 4E 20 4C 45 44 45 6E 61 62 6C 65 20 01
```


**Telegram structure: sWA LEDEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set LEDs | String | 9 | | `LEDEnable` | `4C 45 44 45 6E 61 62 6C 65` |

**Example: sWA LEDEnable**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LEDEnable<ETX>
```

```text
02 73 57 41 20 4C 45 44 45 6E 61 62 6C 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 57 41 20 4C 45 44 45 6E 61 62 6C 65 20 09
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read State of LEDs [sRN LEDState]

</summary>

Read the current state of the LEDs.

**Telegram structure: sRN LEDState**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read state of LEDs | String | 8 | | `LEDState` | `4C 45 44 53 74 61 74 65` |

**Example: sRN LEDState**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LEDState<ETX>
```

```text
<STX>sRN LEDState<ETX>
```

```text
sRN LEDState
```

```text
02 73 52 4E 20 4C 45 44 53 74 61 74 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0C 73 52 4E 20 4C 45 44 53 74 61 74 65 55
```

```text
73 52 4E 20 4C 45 44 53 74 61 74 65
```


**Telegram structure: sRA LEDState**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | State of LEDs | String | 8 | | `LEDState` | `4C 45 44 53 74 61 74 65` |
| LED Color | - | Enum_8 | 1 | Green:<br>Yellow:<br>Red: | `0<br>1<br>2` | `00<br>01<br>02` |
| LED behavior | - | Enum_8 | 1 | On:<br>Off:<br>Blinking:<br>Blinking fast:<br>Blinking delayed:<br>Find me active: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05` |
| LED ID | Name of the LED | String | 8 | | `LED1<br>LED2` | `4C 45 44 31<br>4C 45 44 32` |

**Example: sRA LEDState**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LEDState{SPC}2{SPC}0{SPC}0{SPC}LED2{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}0{SPC}LED1{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 4C 45 44 53 74 61 74 65 20 32 20 30 20 30 20 4C 45 44 32 00 00 00 00 20 31 20 30 20 4C 45 44 31 00 00 00 00 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 23 73 52 41 20 4C 45 44 53 74 61 74 65 20 00 02 00 00 4C 45 44 32 00 00 00 00 01 00 4C 45 44 31 00 00 00 00 7A
```

</details>

</section>

<section class="cola-category" markdown="1">

## Date and System Time

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Time Synchronization [sWN TSCRole]

</summary>

Set the device synchronization mode.

**Telegram structure: sWN TSCRole**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set timestamp role | String | 7 | | `TSCRole` | `54 53 43 52 6F 6C 65` |
| Status | Timestamp role | Uint_8 | 1 | Off:<br>NTP:<br>PTP: | `0<br>1<br>3` | `00<br>01<br>03` |

**Example: sWN TSCRole**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}TSCRole{SPC}1<ETX>
```

```text
<STX>sWN TSCRole 1<ETX>
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

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set timestamp role | String | 7 | | `TSCRole` | `54 53 43 52 6F 6C 65` |

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

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Time Stamp [sMN LSPsetdatetime]

</summary>

The data format in the telegram is: +2009{SPC}+7{SPC}+22{SPC}+12{SPC}+0{SPC}+0{SPC}+0.The numbers represent year, month, day, hour, minute, second, microsecond.

If plus is used up-front the data it is interpreted as an integer decimal number, without the plus it's the scanner reads the data as hex format.

The answer is always in ASCII format.

Does only work if NTP- respectively PTP-Client is not active.

There is no real time clock inside the device. When the scanner is switched off and after a reboot, the time has to be set again. Therefore, it is recommended to use a NTP or a PTP setting.

**Telegram structure: sMN LSPsetdatetime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Set time stamp | String | 14 | | `LSPsetdatetime` | `4C 53 50 73 65 74 64 61 74 65 74 69 6D 65` |
| Year | | Uint_16 | 2 | | `+1970d … +2099d (07B2h … 0833h)` | `07 B2 … 08 33` |
| Month | | Uint_8 | 1 | | `+1d … +12d(01h … 0Ch)` | `01 … 0C` |
| Day | | Uint_8 | 1 | | `+1d … +31d(01h … 1Fh)` | `00 … 1F` |
| Hour | | Uint_8 | 1 | | `+0d … +23d(00h … 17h)` | `00 … 17` |
| Minute | | Uint_8 | 1 | | `+0d … +59d(00h … 3Bh)` | `00 … 3B` |
| Second | | Uint_8 | 1 | | `+0d … +59d(00h … 3Bh)` | `00 … 3B` |
| Microsecond | | Uint_32 | 4 | | `+0d … +999999d(00000000h … 000F423Fh)` | `00 00 00 00 … 00 0F 42 3F` |

**Example 1: sMN LSPsetdatetime Date: 17.02.2009; Time: 16:34**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}LSPsetdatetime{SPC}7D9{SPC}2{SPC}11{SPC}10{SPC}22{SPC}0{SPC}0<ETX>
```

```text
<STX>sMN LSPsetdatetime 7D9 2 11 10 22 0 0<ETX>
```

```text
sMN LSPsetdatetime 7D9 2 11 10 22 0 0
```

```text
02 73 4D 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 37 44 39 20 32 20 31 31 20 31 30 20 32 32 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1E 73 4D 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 07 D9 02 11 10 22 00 00 00 00 00 A3
```

```text
73 4D 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 07 D9 02 11 10 22 00 00 00 00 00
```


**Example 2: sMN LSPsetdatetime Date: 26.01.2010; Time: 10:35**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}LSPsetdatetime{SPC}+2010{SPC}+01{SPC}+26{SPC}+10{SPC}+35{SPC}0{SPC}0<ETX>
```

```text
<STX>sMN LSPsetdatetime +2010 +01 +26 +10 +35 0 0<ETX>
```

```text
sMN LSPsetdatetime +2010 +01 +26 +10 +35 0 0
```

```text
02 73 4D 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 2B 32 30 31 30 20 2B 30 31 20 2B 32 36 20 2B 31 30 20 2B 33 35 20 2B 30 30 20 2B 30 30 30 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1E 73 4D 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 07 DA 01 1A 0A 23 00 00 00 00 00 B3
```

```text
73 4D 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 07 DA 01 1A 0A 23 00 00 00 00 00
```


**Telegram structure: sAN LSPsetdatetime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Set time stamp | String | 14 | | `LSPsetdatetime` | `4C 53 50 73 65 74 64 61 74 65 74 69 6D 65` |
| Status code | Code number | Enum_8 | 1 | Success: | `0` | `00` |

**Example 1, 2: sAN LSPsetdatetime**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}LSPsetdatetime{SPC}0<ETX>
```

```text
02 73 41 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 41 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 00 50
```


Activate time stamp in the output string format or on SOPAS page “data processing”.

**Set NTP (Network Time Protocol) Parameters**

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Time Server IP Address [sWN TSCTCSrvAddr]

</summary>

Define the IP address from which the device will receive the time synchronization.

**Telegram structure: sWN TSCTCSrvAddr**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set time server IP address | String | 12 | | `TSCTCSrvAddr` | `54 53 43 54 43 53 72 76 41 64 64 72` |
| IP address data | Set values | Uint_8 | 1 | First part of IP address | `0 …+255d (00…FF)` | `00 … FF` |
| IP address data | Set values | Uint_8 | 1 | Second part of IP address | `0 …+255d (00…FF)` | `00 … FF` |
| IP address data | Set values | Uint_8 | 1 | Third part of IP address | `0 …+255d (00…FF)` | `00 … FF` |
| IP address data | Set values | Uint_8 | 1 | Fourth part of IP address | `0 …+255d (00…FF)` | `00 … FF` |

**Example: sWN TSCTCSrvAddr 192.168.0.11**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}TSCTCSrvAddr{SPC}C0{SPC}A8{SPC}00{SPC}0B<ETX>
```

```text
<STX>sWN TSCTCSrvAddr C0 A8 00 0B<ETX>
```

```text
sWN TSCTCSrvAddr C0 A8 00 0B
```

```text
02 73 57 4E 20 54 53 43 54 43 53 72 76 41 64 64 72 20 43 30 20 41 38 20 30 30 20 30 42 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 57 4E 20 54 53 43 54 43 53 72 76 41 64 64 72 20 C0 A8 00 0B 3E
```

```text
73 57 4E 20 54 53 43 54 43 53 72 76 41 64 64 72 20 C0 A8 00 0B
```


**Telegram structure: sWA TSCTCSrvAddr**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set time server IP address | String | 12 | | `TSCTCSrvAddr` | `54 53 43 54 43 53 72 76 41 64 64 72` |

**Example: sWA TSCTCSrvAddr**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}TSCTCSrvAddr<ETX>
```

```text
02 73 57 41 20 54 53 43 54 43 53 72 76 41 64 64 72 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 57 41 20 54 53 43 54 43 53 72 76 41 64 64 72 20 52
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Time Zone [sWN TSCTCtimezone]

</summary>

**Telegram structure: sWN TSCTCtimezone**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set time zone | String | 13 | | `TSCTCtimezone` | `54 53 43 54 43 74 69 6D 65 7A 6F 6E 65` |
| Time zone data | Select the time zone of the client | Enum_8 | 1 | List of time zones | `+0d … +104d (00h … 68h)` | `00 … 68` |

**Time zone data Values CoLa (ASCII)**

| Value | Time zone | Value | Time zone | Value | Time zone |
| --- | --- | --- | --- | --- | --- |
| 0 | DATE_LINE_STANDARD | 35 | MONROVIA_REYKJAVIK | 70 | MUMBAI_NEUDELHI |
| 1 | COORD_WORLD_TIME_11 | 36 | AMSTERDAM_BERLIN_ROM | 71 | SRI_JAYAWARDENEPURA |
| 2 | HAWAII | 37 | BELGRAD_BUDAPEST_PRAG | 72 | KATMANDU |
| 3 | ALASKA | 38 | BRUESSEL_MADRID_PARIS | 73 | ASTANA |
| 4 | CALIFORNIA | 39 | SARAJEVO_WARSCHAU | 74 | DAKKA |
| 5 | USA_CANADA | 40 | WEST_CENTRAL_AFRICA | 75 | NOWOSIBIRSK |
| 6 | ARIZONA | 41 | WINDHUK | 76 | YANGON |
| 7 | LA_PAZ | 42 | AMMAN | 77 | BANGKOK_HANOI_JAKARTA |
| 8 | MOUNTAIN_TIME_USA | 43 | ATHEN_BUKAREST | 78 | KRASNOJARSK |
| 9 | CENTRAL_TIME_USA | 44 | BEIRUT | 79 | IRKUTSK |
| 10 | MEXICO_CITY | 45 | DAMASCUS | 80 | KUALA_LUMPUR_SINGAPUR |
| 11 | MIDDLE_AMERICA | 46 | HARARE_PRETORIA | 81 | PEKING_HONGKONG |
| 12 | SASKATCHEWAN | 47 | HELSINKI_KIEW_RIGA | 82 | PERTH |
| 13 | BOGOTA_LIMA | 48 | ISTANBUL | 83 | TAIPEH |
| 14 | EASTERN_TIME_USA | 49 | JERUSALEM | 84 | ULAN_BATOR |
| 15 | INDIANA | 50 | KAIRO | 85 | JAKUTSK |
| 16 | CARACAS | 51 | KALININGRAD | 86 | OSAKA_TOKIO |
| 17 | ASUNCION | 52 | EASTERN_EUROPE | 87 | SEOUL |
| 18 | ATLANTIC_KANADA | 53 | TRIPOLIS | 88 | ADELAIDE |
| 19 | CUIABA | 54 | BAGDAD | 89 | DARWIN |
| 20 | LAPAZ_SANJUAN | 55 | KUWAIT_RIAD | 90 | BRISBANE |
| 21 | SANTIAGO | 56 | MINSK | 91 | CANBERRA_SYDNEY |
| 22 | NEUFUNDLAND | 57 | MOSKAU_PETERSBURG | 92 | GUAM_PORT_MORESBY |
| 23 | BRASILIA | 58 | NAIROBI | 93 | HOBART |
| 24 | BUENOS_AIRES | 59 | TEHERAN | 94 | MAGADAN |
| 25 | CAYENNE_FORTALEZA | 60 | ABU_DHABI | 95 | WLADIWOSTOK |
| 26 | GROENLAND | 61 | BAKU | 96 | SALOMONEN_KALEDONIEN |
| 27 | MONTEVIDEO | 62 | ERIWAN | 97 | TSCHOKURDACH |
| 28 | SALVADOR | 63 | ISCHEWSK_SAMARA | 98 | ANADYR |
| 29 | COORD_WORLD_TIME_02 | 64 | PORT_LOUIS | 99 | AUCKLAND_WELLINGTON |
| 30 | AZOREN | 65 | TIFLIS | 100 | FIDSCHI |
| 31 | KAP_VERDE | 66 | KABUL | 101 | COORD_WORLD_TIME_12 |
| 32 | CASABLANCA | 67 | ASCHGABET_TASCHKENT | 102 | NAKUALOFA |
| 33 | DUBLIN_LISSABON_LONDON | 68 | ISLAMABAD_KARATSCHI | 103 | SAMOA |
| 34 | COORD_WORLD_TIME | 69 | JEKATERINBURG | 104 | KIRITIMATI |

**Example: sWN TSCTCtimezone Amsterdam, Berlin, Rom**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}TSCTCtimezone{SPC}+36<ETX>
```

```text
<STX>sWN TSCTCtimezone +36<ETX>
```

```text
sWN TSCTCtimezone +36
```

```text
02 73 57 4E 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 20 2B 33 36 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 4E 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 20 24 16
```

```text
73 57 4E 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 20 24
```


**Telegram structure: sWA TSCTCtimezone**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set time zone | String | 13 | | `TSCTCtimezone` | `54 53 43 54 43 74 69 6D 65 7A 6F 6E 65` |

**Example: sWA TSCTCtimezone**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}TSCTCtimezone<ETX>
```

```text
02 73 57 41 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 57 41 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 20 3D
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Update Time [sWN TSCTCupdatetime]

</summary>

Define the time period after which the sensor will attempt to get the current system time for the TSC server.

**Telegram structure: sWN TSCTCupdatetime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set update time of synchronization | String | 15 | | `TSCTCupdatetime` | `54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65` |
| Update time of synchronization | Set values in seconds | Uint_32 | 4 | | `+1d … +3600d(01h … 0E10h)` | `00 00 00 00 … 00 00 0E 10` |

**Example: sWN TSCTCupdatetime 600 s**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}TSCTCupdatetime{SPC}+600<ETX>
```

```text
<STX>sWN TSCTCupdatetime +600<ETX>
```

```text
sWN TSCTCupdatetime +600
```

```text
02 73 57 4E 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 20 2B 36 30 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 18 73 57 4E 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 20 00 00 02 58 67
```

```text
73 57 4E 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 20 00 00 02 58
```


**Telegram structure: sWA TSCTCupdatetime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set update time of synchronization | String | 15 | | `TSCTCupdatetime` | `54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65` |

**Example: sWA TSCTCupdatetime**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}TSCTCupdatetime<ETX>
```

```text
02 73 57 41 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 57 41 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 20 32
```

</details>

</section>

<section class="cola-category" markdown="1">

## Filter

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Particle Filter [sWN LFPparticle]

</summary>

Filter out disturbances in the meausurement data caused by particles such as dust, snow flakes or similar .

**Telegram structure: sWN LFPparticle**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set particle filter | String | 11 | | `LFPparticle` | `4C 46 50 70 61 72 74 69 63 6C 65` |
| Status code | Code number | Bool_1 | 1 | Inactive:<br>Active: | `0<br>1` | `00<br>01` |
| Threshold1) | Particle threshold in mm | Uint_16 | 2 | (must be taken) | `+500d (1F4h)` | `01 F4` |

Never change the threshold here, it is taken by the device to handle the particles.

**Example: sWN LFPparticle**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LFPparticle{SPC}1{SPC}+500<ETX>
```

```text
<STX>sWN LFPparticle 1 +500<ETX>
```

```text
sWN LFPparticle 1 +500
```

```text
02 73 57 4E 20 4C 46 50 70 61 72 74 69 63 6C 65 20 31 20 2B 35 30 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 4E 20 4C 46 50 70 61 72 74 69 63 6C 65 20 01 01 F4 D0
```

```text
73 57 4E 20 4C 46 50 70 61 72 74 69 63 6C 65 20 01 01 F4
```


**Telegram structure: sWA LFPparticle**

| Telegram part | Description | Variable | Length | Sensor | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set particle filter | String | 11 | | `LFPparticle` | `4C 46 50 70 61 72 74 69 63 6C 65` |

**Example: sWA LFPparticle**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LFPparticle<ETX>
```

```text
02 73 57 41 20 4C 46 50 70 61 72 74 69 63 6C 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 57 41 20 4C 46 50 70 61 72 74 69 63 6C 65 20 2B
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Echo Filter [sWN FREchoFilter]

</summary>

Only available with firmware versions > V1.10.

Select which measurement value(s) shall be sent via LMDscandata if the measurement of one angular position returns several distance values

**Telegram structure: sWN FREchoFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set echo filter | String | 12 | | `FREchoFilter` | `46 52 45 63 68 6F 46 69 6C 74 65 72` |
| Status code | Code number | Enum_8 | 1 | First echo:<br>All echos:<br>Last echo: | `0<br>1<br>2` | `00<br>01<br>02` |

**Example: sWN FREchoFilter**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}FREchoFilter{SPC}1<ETX>
```

```text
<STX>sWN FREchoFilter 1<ETX>
```

```text
sWN FREchoFilter 1
```

```text
02 73 57 4E 20 46 52 45 63 68 6F 46 69 6C 74 65 72 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 57 4E 20 46 52 45 63 68 6F 46 69 6C 74 65 72 20 01 7E
```

```text
73 57 4E 20 46 52 45 63 68 6F 46 69 6C 74 65 72 20 01
```


**Telegram structure: sWA FREchoFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set echo filter | String | 12 | | `FREchoFilter` | `46 52 45 63 68 6F 46 69 6C 74 65 72` |

**Example: sWa FREchoFilter**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}FREchoFilter<ETX>
```

```text
02 73 57 41 20 46 52 45 63 68 6F 46 69 6C 74 65 72 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 57 41 20 46 52 45 63 68 6F 46 69 6C 74 65 72 20 70
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Sensitivity Fog Filter [sWN MCSenseLevel]

</summary>

Filter out disturbances in the meausurement data caused by fog or steam.

**Telegram structure: sWN MCSenseLevel**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Sense level | String | 12 | | `MCSenseLevel` | `4D 43 53 65 6E 73 65 4C 65 76 65 6C` |
| Sensitivity level | Enable or disable fog filter and Sense Level | Uint_8 | 1 | Fog Filter off<br>Fog Filter on | `0<br>1` | `00<br>01` |

**Example: sWN MCSenseLevel**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}MCSenseLevel{SPC}1<ETX>
```

```text
<STX>sWN MCSenseLevel 1<ETX>
```

```text
sWN MCSenseLevel 1
```

```text
02 73 57 4E 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 57 4E 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 20 01 7D
```

```text
73 57 4E 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 20 01
```


**Telegram structure: sWA MCSenseLevel**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Sense level | String | 12 | | `MCSenseLevel` | `4D 43 53 65 6E 73 65 4C 65 76 65 6C` |

**Example: sWA MCSenseLevel**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}MCSenseLevel<ETX>
```

```text
02 73 57 41 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 57 41 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 20 73
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Moving Averaging Filter [sWN LFPmovingAveragingFilter]

</summary>

Enables the moving average filter

**Telegram structure: sWN LFPmovingAveragingFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | String | String | 24 | | `LFPmovingAveragingFilter` | `4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72` |
| Variable Data 1 | Moving averaging is enabled | Bool | 1 | Off:<br>On: | `0d (00h)<br>+1d (01h)` | `00<br>01` |
| Variable Data 2 | averaging depth | UInt | 2 | Minimum:<br>Maximum: | `+2d (02h)<br>+4d (0Ah)` | `00 02<br>00 04` |

Disable the moving average filter and set averaging depth to 3

**Example: sWN LFPmovingAveragingFilter +0 +3**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LFPmovingAveragingFilter{SPC}+0{SPC}+3<ETX>
```

```text
<STX>sWN LFPmovingAveragingFilter +0 +3<ETX>
```

```text
sWN LFPmovingAveragingFilter +0 +3
```

```text
02 73 57 4E 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 20 2B 30 20 2B 33 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 20 73 57 4E 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 20 00 00 03 41
```

```text
73 57 4E 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 20 00 00 03
```


**Telegram structure: sWA LFPmovingAveragingFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | String | String | 24 | | `LFPmovingAveragingFilter` | `4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72` |

**Example: sWA LFPmovingAveragingFilter**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LFPmovingAveragingFilter<ETX>
```

```text
02 73 57 41 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1D 73 57 41 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 20 4D
```

</details>

</section>

<section class="cola-category" markdown="1">

## Contamination Indication

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Contamination Indication Settings [sWN ContaminationConfig]

</summary>

Define how and under which conditions the device shall indicate a potential contamination of the optics cover to enable preventive cleaning.

**Telegram structure: sWN ContaminationConfig**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | | String | 19 | | `ContaminationConfig` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67` |
| Strategy | Strategy code | Enum_8 | 1 | No output:<br>All sectors contaminated:<br>One sector contaminated: | `0<br>1<br>2` | `00<br>01<br>02` |
| Response time | How fast (in seconds) the sensor reacts after a contamination | Uint_16 | 2 | Value range 3 ... 60<br>Default: 3 | `+3d … +60d (03h … 3Ch)` | `00 03 … 00 3C` |
| Threshold warning | Sensitivity | Enum_8 | 1 | High:<br>Medium:<br>Low: | `0<br>1<br>2` | `00<br>01<br>02` |
| Sector preselection | Selection of either custom sectors or used weather protection hood | Enum_8 | 1 | All sectors:<br>Weather protection hood:<br>Custom sectors: | `0<br>6<br>255d (FFh)` | `00<br>06<br>FF` |
| Length | | UInt_16 | 2 | Always: | `7` | `00 07` |
| Custom sectors | Enable/ disable individual sectors when custom sectors got selected in Sector preselection | Array | 7 | Active: 1<br>Inactive: 0<br>Default value of all sectors is active | `0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1` | `00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01` |
| Enable Warning | Warning monitoring | Bool_1 | 1 | Off (False):<br>On (True): | `0<br>1` | `00<br>01` |
| Enable Error | Error monitoring | Bool_1 | 1 | Off (False):<br>On (True): | `0<br>1` | `00<br>01` |

**Example: sWN ContaminationConfig One sector contaminated, response time 60 seconds, sensitivity low, weather protection hood, enable warning, enable error**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}ContaminationConfig{SPC}2{SPC}3C{SPC}2{SPC}6{SPC}7{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1<ETX>
```

```text
<STX>sWN ContaminationConfig 2 3C 2 6 7 1 1 1 1 1 1 1 1 1<ETX>
```

```text
sWN ContaminationConfig 2 3C 2 6 7 1 1 1 1 1 1 1 1 1
```

```text
02 73 57 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 20 32 20 33 43 20 32 20 36 20 37 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 28 73 57 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 20 02 00 3C 02 06 00 07 01 01 01 01 01 01 01 01 01 3C
```

```text
73 57 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 20 02 00 3C 02 06 00 07 01 01 01 01 01 01 01 01 01
```


**Telegram structure: sWA ContaminationConfig**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | | String | 19 | | `ContaminationConfig` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67` |

**Example: sWA ContaminationConfig**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}ContaminationConfig<ETX>
```

```text
02 73 57 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 18 73 57 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 20 0F
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Contamination Indication Settings [sRN ContaminationConfig]

</summary>

Reads the current contamination settings that define how and under which conditions the device indicates a potential contamination of the optics cover to enable preventive cleaning.

**Telegram structure: sRN ContaminationConfig**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | | String | 19 | | `ContaminationConfig` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67` |

**Example: sRN ContaminationConfig**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ContaminationConfig<ETX>
```

```text
<STX>sRN ContaminationConfig<ETX>
```

```text
sRN ContaminationConfig
```

```text
02 73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 25
```

```text
73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67
```


**Telegram structure: sRA ContaminationConfig**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | | String | 19 | | `ContaminationConfig` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67` |
| Strategy | Strategy code | Enum_8 | 1 | No output:<br>All sectors contaminated:<br>One sector contaminated: | `0<br>1<br>2` | `00<br>01<br>02` |
| Response time | How fast (in seconds) the sensor reacts after a contamination | Uint_16 | 2 | Value range 3 ... 60<br>Default: 3 | `03h … 3Ch` | `00 03 … 00 3C` |
| Threshold warning | Sensitivity | Enum_8 | 1 | High:<br>Medium:<br>Low: | `0<br>1<br>2` | `00<br>01<br>02` |
| Sector preselection | Selection of either custom sectors or used weather protection hood | Enum_8 | 1 | All sectors:<br>Weather protection hood:<br>Custom sectors: | `0<br>6<br>FF` | `00<br>06<br>FF` |
| Length | | UInt_16 | 2 | Always: | `7` | `00 07` |
| Custom sectors | Enable/ disable individual sectors when custom sectors got selected in Sector preselection | Array | 7 | Active: 1<br>Inactive: 0<br>Default value of all sectors is active | `0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1` | `00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01` |
| Enable Warning | Warning monitoring | Bool_1 | 1 | Off (False):<br>On (True): | `0<br>1` | `00<br>01` |
| Enable Error | Error monitoring | Bool_1 | 1 | Off (False):<br>On (True): | `0<br>1` | `00<br>01` |

**Example: sRA ContaminationConfig No output, response time 3 sec, All sectors active, warning enabled, error enabled**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ContaminationConfig{SPC}0{SPC}3{SPC}0{SPC}0{SPC}7{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1<ETX>
```

```text
02 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 20 30 20 33 20 30 20 30 20 37 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 28 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 20 00 00 03 00 00 00 07 01 01 01 01 01 01 01 01 01 0F
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Contamination Indication Data [sRN ContaminationData]

</summary>

Get the current contamination indication data.

**Telegram structure: sRN ContaminationData**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Reading status of all contamination sectors | String | 17 | | `ContaminationData` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61` |

**Example: sRN ContaminationData**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ContaminationData<ETX>
```

```text
<STX>sRN ContaminationData<ETX>
```

```text
sRN ContaminationData
```

```text
02 73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 3F
```

```text
73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61
```


**Telegram structure: sRA ContaminationData**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Reading status of all contamination sectors | String | 17 | | `ContaminationData` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61` |
| Number of contamination sectors | | Uint_16 | 2 | Always: | `7` | `00 07` |
| Contamination data | Status of contamination of each sector | Array of Enum_8 | 7 | Blocked:<br>Clean:<br>Warning:<br>Error: | `0<br>1<br>2<br>3` | `00<br>01<br>02<br>03` |

**Example: sRA ContaminationData**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ContaminationData{SPC}7{SPC}2{SPC}1{SPC}2{SPC}3{SPC}2{SPC}1{SPC}2<ETX>
```

```text
02 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 20 37 20 32 20 31 20 32 20 33 20 32 20 31 20 32 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 20 00 07 02 01 02 03 02 01 02 14
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Send Contamination Indication Data Permanently [sEN ContaminationData]

</summary>

Provides continuous contamination indication data for the individual sectors of the optical cover. When a change in contamination is detected in any sector, the current contamination status of all sectors will be transmitted

**Telegram structure: sEN ContaminationData**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sEN` | `73 45 4E` |
| Command | Get the contamination indication data continuously | String | 17 | | `ContaminationData` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61` |
| Data | Start/ Stop | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN ContaminationData**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}ContaminationData{SPC}1<ETX>
```

```text
<STX>sEN ContaminationData 1<ETX>
```

```text
sEN ContaminationData 1
```

```text
02 73 45 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 45 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 20 01 09
```

```text
73 45 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 20 01
```


**Telegram structure: sSN ContaminationData**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sSN` | `73 53 4E` |
| Command | Get the contamination indication data continuously | String | 17 | | `ContaminationData` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61` |
| Number of contamination sectors | | Uint_16 | 2 | Always: | `7` | `00 07` |
| Contamination data | Status of contamination of each sector | Array of Enum_8 | 7 | Blocked:<br>Clean:<br>Warning:<br>Error: | `0<br>1<br>2<br>3` | `00<br>01<br>02<br>03` |

**Example: sSN ContaminationData**

**CoLa A (ASCII)**

```text
<STX>sSN{SPC}ContaminationData{SPC}7{SPC}0{SPC}0{SPC}0{SPC}2{SPC}2{SPC}1{SPC}1<ETX>
```

```text
02 73 53 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 20 37 20 30 20 30 20 30 20 32 20 32 20 31 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 53 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 20 00 07 00 00 00 02 02 01 01 19
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Contamination Indication Result [sRN ContaminationResult]

</summary>

This telegram is intended to read the contamination result. The telegram returns two Boolean. One for warning and one for error. Depending on the strategy of the contamination indication the state changes if one or all sectors are in the specific status (warning or error).

**Telegram structure: sRN ContaminationResult**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | | String | 19 | | `ContaminationResult` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74` |

**Example: sRN ContaminationResult**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ContaminationResult<ETX>
```

```text
<STX>sRN ContaminationResult<ETX>
```

```text
sRN ContaminationResult
```

```text
02 73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 26
```

```text
73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74
```


**Telegram structure: sRA ContaminationResult**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | | String | 19 | | `ContaminationResult` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74` |
| Contamination Result | Warning | Bool_1 | 1 | Not active:<br>Active: | `0<br>1` | `00<br>01` |
| Contamination Result | Error | Bool_1 | 1 | Not active:<br>Active: | `0<br>1` | `00<br>01` |

**Example: sRA ContaminationResult warning inactive error inactive**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ContaminationResult{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1A 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 00 00 09
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Send Contamination Indication Result Permanently [sEN ContaminationResult]

</summary>

This telegram is intended to activate the event for read the contamination result permanently. The telegram returns two Boolean. One for warning and one for error. Depending on the strategy of the contamination indication the state changes if one or all sectors are in the specific status (warning or error).

**Telegram structure: sEN ContaminationResult**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sEN` | `73 52 4E` |
| Command | | String | 19 | | `ContaminationResult` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74` |
| Data | Start/ Stop | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN ContaminationResult**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}ContaminationResult{SPC}1<ETX>
```

```text
<STX>sEN ContaminationResult 1<ETX>
```

```text
sEN ContaminationResult 1
```

```text
02 73 45 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 19 73 45 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 01 10
```

```text
73 45 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 01
```


**Telegram structure: sSN ContaminationResult**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sSN` | `73 53 4E` |
| Contamination Result | Warning | Bool_1 | 1 | Not active:<br>Active: | `0<br>1` | `00<br>01` |
| Contamination Result | Error | Bool_1 | 1 | Not active:<br>Active: | `0<br>1` | `00<br>01` |

**Example: sSN ContaminationResult warning active error inactive**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ContaminationResult{SPC}1{SPC}0<ETX>
```

```text
02 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1A 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 01 00 08
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Treat Blocked Sectors as Error Sectors [sWN treatBlockedSectorsAsErrorSectors]

</summary>

If enabled, blocked sectors get interpreted as error sectors for contamination strategy evaluation.

**Telegram structure: sWN treatBlockedSectorsAsErrorSectors**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | treatBlockedSectorsAsErrorSectors | String | 33 | | `treatBlockedSectorsAsErrorSectors` | `74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73` |
| Value | Enable/ disable Treat Blocked Sectors As Error Sectors | Bool_1 | 1 | Disable:<br>Enable: | `0<br>1` | `00<br>01` |

**Example: sWN treatBlockedSectorsAsErrorSectors**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}treatBlockedSectorsAsErrorSectors{SPC}1<ETX>
```

```text
<STX>sWN treatBlockedSectorsAsErrorSectors 1<ETX>
```

```text
sWN treatBlockedSectorsAsErrorSectors 1
```

```text
02 73 57 4E 20 74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 27 73 57 4E 20 74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73 20 01 3F
```

```text
73 57 4E 20 74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73 20 01
```


**Telegram structure: sWA treatBlockedSectorsAsErrorSectors**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 33 | | `treatBlockedSectorsAsErrorSectors` | `74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73` |

**Example: sWA treatBlockedSectorsAsErrorSectors**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}treatBlockedSectorsAsErrorSectors<ETX>
```

```text
02 73 57 41 20 74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 25 73 57 41 20 74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73 11
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Treat Blocked Sectors as Error Sectors [sRN treatBlockedSectorsAsErrorSectors]

</summary>

Returns the state if blocked sectors are treated as error sectors for contamination strategy evaluation.

**Telegram structure: sRN treatBlockedSectorsAsErrorSectors**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read request | String | 3 | | `sRN` | `73 52 4E` |
| Variable name | treatBlockedSectorsAsErrorSectors | String | 33 | | `treatBlockedSectorsAsErrorSectors` | `74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73` |

**Example: sRN treatBlockedSectorsAsErrorSectors**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}treatBlockedSectorsAsErrorSectors<ETX>
```

```text
<STX>sRN treatBlockedSectorsAsErrorSectors<ETX>
```

```text
sRN treatBlockedSectorsAsErrorSectors
```

```text
02 73 52 4E 20 74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 25 73 52 4E 20 74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73 1B
```

```text
73 52 4E 20 74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73
```


**Telegram structure: sRA treatBlockedSectorsAsErrorSectors**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read answer | String | 3 | | `sRA` | `73 52 41` |
| Variable name | treatBlockedSectorsAsErrorSectors | String | 33 | | `treatBlockedSectorsAsErrorSectors` | `74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73` |
| Value | State of Treat Blocked Sectors As Error Sectors (disabled/ enabled) | Bool_1 | 1 | Disabled:<br>Enabled: | `0<br>1` | `00<br>01` |

**Example: sRA treatBlockedSectorsAsErrorSectors**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}treatBlockedSectorsAsErrorSectors{SPC}1<ETX>
```

```text
02 73 52 41 20 74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 27 73 52 41 20 74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73 20 01 35
```

</details>

</section>

<section class="cola-category" markdown="1">

## Ethernet

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set IP Address [sWN EIIpAddr]

</summary>

Save permanently to set values. Changes will be active after rebooting the device. Settings must correspond with network in which scanner is used. Else device cannot be found any more.

**Telegram structure: sWN EIIpAddr**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set IP address | String | 8 | | `EIIpAddr` | `45 49 49 50 41 64 64 72` |
| IP address | Set values | Uint_8 | 1 | First part of IP address | `0 …+255d (00 ... FF)` | `00 … FF` |
| IP address | Set values | Uint_8 | 1 | Second part of IP address | `0 …+255d (00 ... FF)` | `00 … FF` |
| IP address | Set values | Uint_8 | 1 | Third part of IP address | `0 …+255d (00 ... FF)` | `00 … FF` |
| IP address | Set values | Uint_8 | 1 | Fourth part of IP address | `0 …+255d (00 ... FF)` | `00 … FF` |

**Example: sWN EIIpAddr 192.168.0.2**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EIIpAddr{SPC}C0{SPC}A8{SPC}0{SPC}2<ETX>
```

```text
<STX>sWN EIIpAddr C0 A8 0 2<ETX>
```

```text
sWN EIIpAddr C0 A8 0 2
```

```text
02 73 57 4E 20 45 49 49 70 41 64 64 72 20 43 30 20 41 38 20 30 20 32 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 57 4E 20 45 49 49 70 41 64 64 72 20 C0 A8 00 02 06
```

```text
73 57 4E 20 45 49 49 70 41 64 64 72 20 C0 A8 00 02
```


**Telegram structure: sWA EIIpAddr**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set IP address | String | 8 | | `EIIpAddr` | `45 49 49 50 41 64 64 72` |

**Example: sWA EIIpAddr**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}EIIpAddr<ETX>
```

```text
02 73 57 41 20 45 49 49 70 41 64 64 72 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0D 73 57 41 20 45 49 49 70 41 64 64 72 20 63
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read IP Address [sRN EIIpAddr]

</summary>

Read the IP address of the device.

**Telegram structure: sRN EIIpAddr**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read IP address | String | 8 | | `EIIpAddr` | `45 49 49 50 41 64 64 72` |

**Example: sRN EIIpAddr**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EIIpAddr<ETX>
```

```text
<STX>sRN EIIpAddr<ETX>
```

```text
sRN EIIpAddr
```

```text
02 73 52 4E 20 45 49 49 70 41 64 64 72 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0C 73 52 4E 20 45 49 49 70 41 64 64 72 49
```

```text
73 52 4E 20 45 49 49 70 41 64 64 72
```


**Telegram structure: sRA EIIpAddr**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read IP address | String | 8 | | `EIIpAddr` | `45 49 49 50 41 64 64 72` |
| IP address | Default: 192.168.0.1 | Uint_8 | 1 | First part of IP address | `0 …+255d (00 … FF)` | `00 … FF` |
| IP address | Default: 192.168.0.1 | Uint_8 | 1 | Second part of IP address | `0 …+255d (00 … FF)` | `00 … FF` |
| IP address | Default: 192.168.0.1 | Uint_8 | 1 | Third part of IP address | `0 …+255d (00 … FF)` | `00 … FF` |
| IP address | Default: 192.168.0.1 | Uint_8 | 1 | Fourth part of IP address | `0 …+255d (00 … FF)` | `00 … FF` |

**Example: sRA EIIpAddr 192.168.0.2**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EIIpAddr{SPC}C0{SPC}A8{SPC}00{SPC}02<ETX>
```

```text
02 73 52 41 20 45 49 49 70 41 64 64 72 20 43 30 20 41 38 20 30 30 20 30 32 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 52 41 20 45 49 49 70 41 64 64 72 20 C0 A8 00 02 0C
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read IP Address Assigned by DHCP [sRN EIIpAddrDHCP]

</summary>

DHCP needs to be set as mode for ethernet assignment.

**Telegram structure: sRN EIIpAddrDHCP**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read IP address assigned by DHCP | String | 12 | | `EIIpAddrDHCP` | `45 49 49 70 41 64 64 72 44 48 43 50` |

**Example: sRN EIIpAddrDHCP**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EIIpAddrDHCP<ETX>
```

```text
<STX>sRN EIIpAddrDHCP<ETX>
```

```text
sRN EIIpAddrDHCP
```

```text
02 73 52 4E 20 45 49 49 70 41 64 64 72 44 48 43 50 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 52 4E 20 45 49 49 70 41 64 64 72 44 48 43 50 56
```

```text
73 52 4E 20 45 49 49 70 41 64 64 72 44 48 43 50
```


**Telegram structure: sRA EIIpAddrDHCP**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read IP address assigned by DHCP | String | 12 | | `EIIpAddrDHCP` | `45 49 49 70 41 64 64 72 44 48 43 50` |
| IP address | Default: 192.168.0.1 | Uint_8 | 1 | First part of IP address | `0 …+255d (00 … FF)` | `00 … FF` |
| IP address | Default: 192.168.0.1 | Uint_8 | 1 | Second part of IP address | `0 …+255d (00 … FF)` | `00 … FF` |
| IP address | Default: 192.168.0.1 | Uint_8 | 1 | Third part of IP address | `0 …+255d (00 … FF)` | `00 … FF` |
| IP address | Default: 192.168.0.1 | Uint_8 | 1 | Fourth part of IP address | `0 …+255d (00 … FF)` | `00 … FF` |

**Example: sRA EIIpAddrDHCP 192.168.0.1**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EIIpAddrDHCP{SPC}C0{SPC}A8{SPC}0{SPC}1<ETX>
```

```text
02 73 52 41 20 45 49 49 70 41 64 64 72 44 48 43 50 20 43 30 20 41 38 20 30 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 52 41 20 45 49 49 70 41 64 64 72 44 48 43 50 20 C0 A8 00 01 10
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Mode for Ethernet Address Assignment [sWN EIAddrMode]

</summary>

This Command determines the mode for the ethernet address assignment.

**Telegram structure: sWN EIAddrMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set mode for ethernet address assignment | String | 10 | | `EIAddrMode` | `45 49 41 64 64 72 4D 6F 64 65` |
| Ethernet address assignment | Static IP address / DHCP | Enum_8 | 1 | Static:<br>DHCP: | `0<br>1` | `00<br>01` |

**Example: sWN EIAddrMode**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EIAddrMode{SPC}1<ETX>
```

```text
<STX>sWN EIAddrMode 1<ETX>
```

```text
sWN EIAddrMode 1
```

```text
02 73 57 4E 20 45 49 41 64 64 72 4D 6F 64 65 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 57 4E 20 45 49 41 64 64 72 4D 6F 64 65 20 01 77
```

```text
73 57 4E 20 45 49 41 64 64 72 4D 6F 64 65 20 01
```


**Telegram structure: sWA EIAddrMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set mode for ethernet address assignment | String | 10 | | `EIAddrMode` | `45 49 41 64 64 72 4D 6F 64 65` |

**Example: sWA EIAddrMode**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}EIAddrMode<ETX>
```

```text
02 73 57 41 20 45 49 41 64 64 72 4D 6F 64 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 57 41 20 45 49 41 64 64 72 4D 6F 64 65 20 79
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Fallback for DHCP [sWN EIDHCPFallback]

</summary>

This Command determines the fallback when DHCP is not successful.

**Telegram structure: sWN EIDHCPFallback**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set fallback for DHCP | String | 14 | | `EIDHCPFallback` | `45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B` |
| Fallback ethernet address assignment | Use Static IP address / Retry DHCP | Enum_8 | 1 | Static IP address:<br>DHCP retry: | `0<br>1` | `00<br>01` |

**Example: sWN EIDHCPFallback**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EIDHCPFallback{SPC}1<ETX>
```

```text
<STX>sWN EIDHCPFallback 1<ETX>
```

```text
sWN EIDHCPFallback 1
```

```text
02 73 57 4E 20 45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 57 4E 20 45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B 20 01 54
```

```text
73 57 4E 20 45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B 20 01
```


**Telegram structure: sWA EIDHCPFallback**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set fallback for DHCP | String | 14 | | `EIDHCPFallback` | `45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B` |

**Example: sWA EIDHCPFallback**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}EIDHCPFallback<ETX>
```

```text
02 73 57 41 20 45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 41 20 45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B 20 5A
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Ethernet Gateway [sWN EIgate]

</summary>

Change Ethernet gateway IP address (TCP/IP)

Save permanently to set values. Changes will be active after rebooting the device. Settings must correspond with network in which scanner is used. Else device cannot be found any more.

**Telegram structure: sWN EIgate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set gateway address | String | 6 | | `EIgate` | `45 49 67 61 74 65` |
| Gateway address | Set values | Uint_8 | 1 | First part of gateway address | `0 …+255d (00…FF)` | `00 …FF` |
| Gateway address | Set values | Uint_8 | 1 | Second part of gateway address | `0 …+255d (00…FF)` | `00 …FF` |
| Gateway address | Set values | Uint_8 | 1 | Third part of gateway address | `0 …+255d (00…FF)` | `00 …FF` |
| Gateway address | Set values | Uint_8 | 1 | Fourth part of gateway address | `0 …+255d (00…FF)` | `00 …FF` |

**Example: sWN EIgate 192.168.0.1**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EIgate{SPC}C0{SPC}A8{SPC}00{SPC}01<ETX>
```

```text
<STX>sWN EIgate C0 A8 00 01<ETX>
```

```text
sWN EIgate C0 A8 00 01
```

```text
02 73 57 4E 20 45 49 67 61 74 65 20 43 30 20 41 38 20 30 30 20 30 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 57 4E 20 45 49 67 61 74 65 20 C0 A8 00 01 18
```

```text
73 57 4E 20 45 49 67 61 74 65 20 C0 A8 00 01
```


**Telegram structure: sWA EIgate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set gateway address | String | 6 | | `EIgate` | `45 49 67 61 74 65` |

**Example: sWA EIgate**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}EIgate<ETX>
```

```text
02 73 57 41 20 45 49 67 61 74 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0B 73 57 41 20 45 49 67 61 74 65 20 7E
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Ethernet Gateway [sRN EIgate]

</summary>

Read for the Ethernet gateway (TCP/IP)

**Telegram structure: sRN EIgate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read gateway address | String | 6 | | `EIgate` | `45 49 67 61 74 65` |

**Example: sRN EIgate**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EIgate<ETX>
```

```text
<STX>sRN EIgate<ETX>
```

```text
sRN EIgate
```

```text
02 73 52 4E 20 45 49 67 61 74 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0A 73 52 4E 20 45 49 67 61 74 65 54
```

```text
73 52 4E 20 45 49 67 61 74 65
```


**Telegram structure: sRA EIgate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read gateway address | String | 6 | | `EIgate` | `45 49 67 61 74 65` |
| Gateway address | Default: 0.0.0.0 | Uint_8 | 1 | First part of gateway address | `0 …+255d (00…FF)` | `00 … FF` |
| Gateway address | Default: 0.0.0.0 | Uint_8 | 1 | Second part of gateway address | `0 …+255d (00…FF)` | `00 … FF` |
| Gateway address | Default: 0.0.0.0 | Uint_8 | 1 | Third part of gateway address | `0 …+255d (00…FF)` | `00 … FF` |
| Gateway address | Default: 0.0.0.0 | Uint_8 | 1 | Fourth part of gateway address | `0 …+255d (00…FF)` | `00 … FF` |

**Example: sRA EIgate 192.168.0.1**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EIgate{SPC}C0{SPC}A8{SPC}00{SPC}01<ETX>
```

```text
02 73 52 41 20 45 49 67 61 74 65 20 43 30 20 41 38 20 30 30 20 30 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 41 20 45 49 67 61 74 65 20 C0 A8 00 01 12
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Ethernet Gateway IP Address Assigned by DHCP [sRN EIgateDHCP]

</summary>

DHCP needs to be set as mode for ethernet assignment.

Read for the ethernet gateway IP address which was assigned by DHCP.

**Telegram structure: sRN EIgateDHCP**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read ethernet gateway IP address assigned by DHCP | String | 6 | | `EIgateDHCP` | `45 49 67 61 74 65 44 48 43 50` |

**Example: sRN EIgateDHCP**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EIgateDHCP<ETX>
```

```text
<STX>sRN EIgateDHCP<ETX>
```

```text
sRN EIgateDHCP
```

```text
02 73 52 4E 20 45 49 67 61 74 65 44 48 43 50 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 52 4E 20 45 49 67 61 74 65 44 48 43 50 4B
```

```text
73 52 4E 20 45 49 67 61 74 65 44 48 43 50
```


**Telegram structure: sRA EIgateDHCP**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read ethernet gateway IP address assigned by DHCP | String | 6 | | `EIgateDHCP` | `45 49 67 61 74 65 44 48 43 50` |
| Gateway IP address | Default: 0.0.0.0 | Uint_8 | 1 | First part of gateway IP address | `0 …+255d (00…FF)` | `00 … FF` |
| Gateway IP address | Default: 0.0.0.0 | Uint_8 | 1 | Second part of gateway IP address | `0 …+255d (00…FF)` | `00 … FF` |
| Gateway IP address | Default: 0.0.0.0 | Uint_8 | 1 | Third part of gateway IP address | `0 …+255d (00…FF)` | `00 … FF` |
| Gateway IP address | Default: 0.0.0.0 | Uint_8 | 1 | Fourth part of gateway IP address | `0 …+255d (00…FF)` | `00 … FF` |

**Example: sRA EIgateDHCP 0.0.0.0**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EIgateDHCP{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 45 49 67 61 74 65 44 48 43 50 20 30 20 30 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 41 20 45 49 67 61 74 65 44 48 43 50 20 00 00 00 00 64
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set IP Mask [sWN EImask]

</summary>

Define the subnet mask of the device.

Save permanently to set values. Changes will be active after rebooting the device. Settings must correspond with network in which scanner is used. Else device cannot be found any more.

**Telegram structure: sWN EImask**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set IP mask | String | 6 | | `EImask` | `45 49 6D 61 73 6B` |
| IP mask | Set values | Uint_8 | 1 | First part of IP mask | `0 …+255d (00…FF)` | `00 …FF` |
| IP mask | Set values | Uint_8 | 1 | Second part of IP mask | `0 …+255d (00…FF)` | `00 …FF` |
| IP mask | Set values | Uint_8 | 1 | Third part of IP mask | `0 …+255d (00…FF)` | `00 …FF` |
| IP mask | Set values | Uint_8 | 1 | Fourth part of IP mask | `0 …+255d (00…FF)` | `00 …FF` |

**Example: sWN EImask 255.255.254.0**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EImask{SPC}FF{SPC}FF{SPC}FE{SPC}00<ETX>
```

```text
<STX>sWN EImask FF FF FE 00<ETX>
```

```text
sWN EImask FF FF FE 00
```

```text
02 73 57 4E 20 45 49 6D 61 73 6B 20 46 46 20 46 46 20 46 45 20 30 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 57 4E 20 45 49 6D 61 73 6B 20 FF FF FE 00 8C
```

```text
73 57 4E 20 45 49 6D 61 73 6B 20 FF FF FE 00
```


**Telegram structure: sWA EImask**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set IP mask | String | 6 | | `EImask` | `45 49 6D 61 73 6B` |

**Example: sWA EImask**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}EImask<ETX>
```

```text
02 73 57 41 20 45 49 6D 61 73 6B 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0B 73 57 41 20 45 49 6D 61 73 6B 20 7D
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read IP Mask [sRN EImask]

</summary>

Read the subnet mask of the device.

**Telegram structure: sRN EImask**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read IP mask | String | 6 | | `EImask` | `45 49 6D 61 73 6B` |

**Example: sRN EImask**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EImask<ETX>
```

```text
<STX>sRN EImask<ETX>
```

```text
sRN EImask
```

```text
02 73 52 4E 20 45 49 6D 61 73 6B 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0A 73 52 4E 20 45 49 6D 61 73 6B 57
```

```text
73 52 4E 20 45 49 6D 61 73 6B
```


**Telegram structure: sRA EImask**

| Telegram part | Description | Variable | Length | Sensor | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read IP mask | String | 6 | | `EImask` | `45 49 6D 61 73 6B` |
| IP mask | Default: 255.255.255.0 | Uint_8 | 1 | First part of IP mask | `0 …+255d (00…FF)` | `00 … FF` |
| IP mask | Default: 255.255.255.0 | Uint_8 | 1 | Second part of IP mask | `0 …+255d (00…FF)` | `00 … FF` |
| IP mask | Default: 255.255.255.0 | Uint_8 | 1 | Third part of IP mask | `0 …+255d (00…FF)` | `00 … FF` |
| IP mask | Default: 255.255.255.0 | Uint_8 | 1 | Fourth part of IP mask | `0 …+255d (00…FF)` | `00 … FF` |

**Example: sRA EImask 255.255.254.0**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EImask{SPC}FF{SPC}FF{SPC}FE{SPC}00<ETX>
```

```text
02 73 52 41 20 45 49 6D 61 73 6B 20 46 46 20 46 46 20 46 45 20 30 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 41 20 45 49 6D 61 73 6B 20 FF FF FE 00 86
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read IP Mask Assigned by DHCP [sRN EImaskDHCP]

</summary>

DHCP needs to be set as mode for ethernet assignment.

Read for the IP mask which was assigned by DHCP.

**Telegram structure: sRN EImaskDHCP**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read IP mask assigned by DHCP | String | 10 | | `EImaskDHCP` | `45 49 6D 61 73 6B 44 48 43 50` |

**Example: sRN EImaskDHCP**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EImaskDHCP<ETX>
```

```text
<STX>sRN EImaskDHCP<ETX>
```

```text
sRN EImaskDHCP
```

```text
02 73 52 4E 20 45 49 6D 61 73 6B 44 48 43 50 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 52 4E 20 45 49 6D 61 73 6B 44 48 43 50 48
```

```text
73 52 4E 20 45 49 6D 61 73 6B 44 48 43 50
```


**Telegram structure: sRA EImaskDHCP**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read IP mask assigned by DHCP | String | 10 | | `EImaskDHCP` | `45 49 6D 61 73 6B 44 48 43 50` |
| IP mask | Default: 255.255.255.0 | Uint_8 | 1 | First part of IP mask | `0 …+255d (00…FF)` | `00 … FF` |
| IP mask | Default: 255.255.255.0 | Uint_8 | 1 | Second part of IP mask | `0 …+255d (00…FF)` | `00 … FF` |
| IP mask | Default: 255.255.255.0 | Uint_8 | 1 | Third part of IP mask | `0 …+255d (00…FF)` | `00 … FF` |
| IP mask | Default: 255.255.255.0 | Uint_8 | 1 | Fourth part of IP mask | `0 …+255d (00…FF)` | `00 … FF` |

**Example: sRA EImaskDHCP 255.255.255.0**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EImaskDHCP{SPC}FF{SPC}FF{SPC}FF{SPC}0<ETX>
```

```text
02 73 52 41 20 45 49 6D 61 73 6B 44 48 43 50 20 46 46 20 46 46 20 46 46 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 41 20 45 49 6D 61 73 6B 44 48 43 50 20 FF FF FF 00 98
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read MAC Address [sRN EIMacAdr]

</summary>

Read the MAC address of the device.

**Telegram structure: sRN EIMacAdr**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read MAC address of the device | String | 8 | | `EIMacAdr` | `45 49 4D 61 63 41 64 72` |

**Example: sRN EIMacAdr**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EIMacAdr<ETX>
```

```text
<STX>sRN EIMacAdr<ETX>
```

```text
sRN EIMacAdr
```

```text
02 73 52 4E 20 45 49 4D 61 63 41 64 72 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0C 73 52 4E 20 45 49 4D 61 63 41 64 72 5B
```

```text
73 52 4E 20 45 49 4D 61 63 41 64 72
```


**Telegram structure: sRA EIMacAdr**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read MAC address of the device | String | 8 | | `EIMacAdr` | `45 49 4D 61 63 41 64 72` |
| MAC address | Values | Uint_8 | 1 | First part of MAC address | `0 …+255d (00…FF)` | `00 … FF` |
| MAC address | Values | Uint_8 | 1 | Second part of MAC address | `0 …+255d (00…FF)` | `00 … FF` |
| MAC address | Values | Uint_8 | 1 | Third part of MAC address | `0 …+255d (00…FF)` | `00 … FF` |
| MAC address | Values | Uint_8 | 1 | Fourth part of MAC address | `0 …+255d (00…FF)` | `00 … FF` |
| MAC address | Values | Uint_8 | 1 | Fifth part of MAC address | `0 …+255d (00…FF)` | `00 … FF` |
| MAC address | Values | Uint_8 | 1 | Sixth part of MAC address | `0 …+255d (00…FF)` | `00 … FF` |

**Example: sRA EIMacAdr 00:06:77:22:40:EA**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EIMacAdr{SPC}0{SPC}6{SPC}77{SPC}22{SPC}40{SPC}EA<ETX>
```

```text
02 73 52 41 20 45 49 4D 61 63 41 64 72 20 30 20 36 20 37 37 20 32 32 20 34 30 20 45 41 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 41 20 45 49 4D 61 63 41 64 72 20 00 06 77 22 40 EA 8D
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Apply Configured Ethernet Settings [sMN mEthUpdt]

</summary>

Apply the configured ethernet settings.

**Telegram structure: sMN mEthUpdt**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Apply ethernet settings | String | 8 | | `mEthUpdt` | `6D 45 74 68 55 70 64 74` |

**Example: sMN mEthUpdt**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}mEthUpdt<ETX>
```

```text
<STX>sMN mEthUpdt<ETX>
```

```text
sMN mEthUpdt
```

```text
02 73 4D 4E 20 6D 45 74 68 55 70 64 74 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0C 73 4D 4E 20 6D 45 74 68 55 70 64 74 51
```

```text
73 4D 4E 20 6D 45 74 68 55 70 64 74
```


**Telegram structure: sAN mEthUpdt**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Apply ethernet settings | String | 8 | | `mEthUpdt` | `6D 45 74 68 55 70 64 74` |

**Example: sAN mEthUpdt**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}mEthUpdt<ETX>
```

```text
02 73 41 4E 20 6D 45 74 68 55 70 64 74 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0D 73 41 4E 20 6D 45 74 68 55 70 64 74 20 7D
```

</details>

</section>

<section class="cola-category" markdown="1">

## Inputs and Outputs

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read State of the Ports [sRN LIDportstate]

</summary>

LIDportstate has to be available additionally or as successor of the LIDoutputstate telegram.

Valid for all sensors with Ethernet and ports (inputs / outputs).

**Telegram structure: sRN LIDportstate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Ask for port configuration | String | 12 | | `LIDportstate` | `4C 49 44 70 6F 72 74 73 74 61 74 65` |

**Example: sRN LIDportstate**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LIDportstate<ETX>
```

```text
<STX>sRN LIDportstate<ETX>
```

```text
sRN LIDportstate
```

```text
02 73 52 4E 20 4C 49 44 70 6F 72 74 73 74 61 74 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 52 4E 20 4C 49 44 70 6F 72 74 73 74 61 74 65 60
```

```text
73 52 4E 20 4C 49 44 70 6F 72 74 73 74 61 74 65
```


**Telegram structure: sRA LIDportstate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Port state | String | 12 | | `LIDportstate` | `4C 49 44 70 6F 72 74 73 74 61 74 65` |
| Status code | Version number | Uint_16 | 2 | Current version: | `0 … FFFFh<br>0` | `00 01 … FF FF` |
| Status code | System counter (time in µs since power up max. 71min then starting from 0 again) | Uint_32 | 4 | | `0 … FFFFFFFFh` | `00 00 00 00 … FF FF FF FF` |
| ARRAY which defines the number of internal ports* | 0...n | Uint_16 | 2 | Hex:<br>Not available:<br>Number of ports: | `0000 - FFFF<br>00<br>01 ... n` | `00 00 - FF FF` |
| State of the ports and count value in hex | Internal port state | Enum_8 | 1 | Output voltage low:(Relays open)<br>Output voltage high:(Relays closed)<br>Tri-state:<br>Input voltage high (level):Input voltage from low to high (edge)<br>Input voltage low (level):Input voltage high to low (edge) | `00<br>01<br>02<br>03<br>04` | `00<br>01<br>02<br>03<br>04` |
| State of the ports and count value in hex | Internal port counter | Uint_32 | 4 | | `0 … FFFFFFFFh` | `00 00 00 00 … FF FF FF FF` |
| | ….. | | | | | |
| ARRAY which defines the number of external or virtual ports* | 0...n | Uint_16 | 1 | Hex:<br>Not available:<br>Number of ports: | `00 00 - FF FF<br>00<br>01 ... n` | `00 00 - FF FF` |
| State of the ports and count value in hex | External port state | Enum_8 | 1 | Output voltage low:(Relays open)<br>Output voltage high:(Relays closed)<br>Tri-state:<br>Input voltage high (level):Input voltage from low to high (edge)<br>Input voltage low (level):Input voltage high to low (edge) | `00<br>01<br>02<br>03<br>04` | `00<br>01<br>02<br>03<br>04` |
| State of the ports and count value in hex | External port counter | Uint_32 | 4 | | `0 … FFFFFFFFh` | `00 00 00 00 … FF FF FF FF` |
| Time | States code | Enum_16 | 1 | No time data:<br>Time data: | `00 00<br>00 01` | `00 00<br>00 01` |
| Time Block (sensor time from the last change of min. one of the outputs) | Year | Array | 2 | E.g. | `1970` | `07 B2` |
| Time Block (sensor time from the last change of min. one of the outputs) | Month | Array | 1 | | `1 … 12` | `01 … 0C` |
| Time Block (sensor time from the last change of min. one of the outputs) | Day | Array | 1 | | `1 … 31` | `01 … 1F` |
| Time Block (sensor time from the last change of min. one of the outputs) | Hour | Array | 1 | | `0 … 23` | `00 … 17` |
| Time Block (sensor time from the last change of min. one of the outputs) | Minute | Array | 1 | | `0 … 59` | `00 … 3B` |
| Time Block (sensor time from the last change of min. one of the outputs) | Second | Array | 1 | | `0 … 59` | `00 … 3B` |
| Time Block (sensor time from the last change of min. one of the outputs) | Microsecond | Array | 4 | | `0 … 999999` | `00 00 00 00 … 00 0F 42 3F` |

Inputs/outputs: If the device has separate inputs and outputs (instead of general purpose ports) the ARRAY shall start with inputs followed by the outputs.

Virtual ports are ports that can be used to expand the number of ports but are not physically available. They just show up in the corresponding ethernet telegrams (like LIDportstate).

Tri-State: Port is neither input nor output; the port is set inactive in SOPAS

**Example: sRA LIDportstate**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LIDportstate{SPC}0{SPC}3340BBDA{SPC}1{SPC}0{SPC}1{SPC}0{SPC}4{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}1{SPC}7B2{SPC}1{SPC}1{SPC}2{SPC}25{SPC}1D{SPC}C6F98<ETX>
```

```text
02 73 52 41 20 4C 49 44 70 6F 72 74 73 74 61 74 65 20 30 20 33 33 34 30 42 42 44 41 20 31 20 30 20 31 20 30 20 34 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 31 20 37 42 32 20 31 20 31 20 32 20 32 35 20 31 44 20 43 36 46 39 38 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 74 73 52 41 20 4C 49 44 70 6F 72 74 73 74 61 74 65 20 00 00 33 40 BB DA 01 00 00 00 00 01 00 00 00 00 04 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 00 01 07 B2 01 01 02 25 1D 00 0C 6F 98 2E
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Port Configuration of All I/Os [sRN PortConfiguration]

</summary>

Read the configuration of the digital inputs and outputs.

**Telegram structure: sRN PortConfiguration**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Ask for port configuration | String | 12 | | `PortConfiguration` | `50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |

**Example: sRN PortConfiguration**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}PortConfiguration<ETX>
```

```text
<STX>sRN PortConfiguration<ETX>
```

```text
sRN PortConfiguration
```

```text
02 73 52 4E 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 52 4E 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 26
```

```text
73 52 4E 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E
```


**Telegram structure: sRA PortConfiguration**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Configuration of all I/Os | String | 12 | | `PortConfiguration` | `50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |
| Start of loop, number of loops = amount of all current and future Inputs and Outputs of device family | | | | | | |
| Port Type | Input or Output | Enum_8 | 1 | Input:<br>Output: | `0<br>1` | `00<br>01` |
| Port Name | Amount of characters of the following port name | Uint_16 | 2 | | `0h … 20h` | `00 00 … 00 20` |
| Port Name | Port name | String | 16<br>(depending on string length) | | `[Port name]` | `[Port name]` |
| Input Settings | | | | | | |
| Logic | Logic of the input | Bool_1 | 1 | Active high:<br>Active low: | `0<br>1` | `00<br>01` |
| Debouncing | Select debouncing time in ms | Uint_16 | 2 | (max. 10,000ms) | `0h … 2710h` | `00 00 … 27 10` |
| Reserved | - | Enum_8 | 1 | Always: | `0` | `00` |
| Reserved | Reserved value 1 | Uint_16 | 2 | | `0` | `00 00` |
| Reserved | Reserved value 2 | Uint_16 | 2 | | `0` | `00 00` |
| Output Settings | | | | | | |
| Logic | Logic of the input | Bool_1 | 1 | Active high:<br>Active low: | `0<br>1` | `00<br>01` |
| Output Mode | PNP, NPN or Push-Pull | Enum_8 | 1 | PNP:<br>NPN:<br>Push-Pull: | `0<br>1<br>2` | `00<br>01<br>02` |
| Restart type | Restart behavior of output after event: immediately or after specific time | Enum_8 | 1 | Immediately:<br>Time:<br>Input: | `0<br>1<br>2` | `00<br>01<br>02` |
| Restart time | [Only with restart type = Time], time in ms | Uint_32 | 4 | (20 ms … 600,000 ms) | `14h … 927C0h` | `00 00 00 14 … 00 09 27 C0` |
| Restart input | [Only with restart type = Input], input for restart | Uint_16 | 2 | | `1 ... 8` | `00 01 ... 00 08` |
| Combination | Combining multiple Events and/or Inputs | Enum_8 | 1 | AND:<br>OR:<br>XOR: | `0<br>1<br>2` | `00<br>01<br>02` |
| Reserved | Reserved value 3 | Uint_16 | 2 | | `0` | `00 00` |
| Reserved | Reserved value 4 | Uint_16 | 2 | | `0` | `00 00` |
| Sources | Amount (n) of combined sources | Uint_16 | 2 | | `0h ... FFFFh` | `00 00 ... FF FF` |
| Sources | Start of source loop, number of loops = amount of combined sources | | | | | |
| Sources | Source name | String | 4 | Device Ready:<br>Sopas Command:(xx = Number of output port)<br>Indexsignal:<br>SyncOutByClock:<br>Input = Port Name:(INxx = Number of input port) | `[Source]<br>DRDY<br>SCxx<br>SROT<br>SCLK<br>INxx` | `[Source]` |
| Sources | Source Inverted or not | Bool_1 | 1 | Not inverted:<br>Inverted: | `0<br>1` | `00<br>01` |
| Sources | Reserved value 5 | Uint_8 | 1 | | `0` | `00` |
| Sources | Reserved value 6 | Uint_8 | 1 | | `0` | `00` |
| Sources | Stop of source loop | | | | | |
| Reserved | Reserved value 7 | Uint_16 | 2 | | `0` | `00 00` |
| Reserved | Reserved value 8 | Uint_16 | 2 | | `0` | `00 00` |
| Reserved | Reserved value 9 | Uint_16 | 2 | | `0` | `00 00` |
| Reserved | Reserved value 10 | Uint_16 | 2 | | `0` | `00 00` |
| Stop of loop | | | | | | |

**Example: sRA PortConfiguration**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}PortConfiguration{SPC}1{SPC}6{SPC}InOut1{SPC}0{SPC}A{SPC}0{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}1{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}6{SPC}InOut2{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}1{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut3{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut4{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut5{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut6{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}6{SPC}InOut7{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}1{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}6{SPC}InOut8{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}1{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
<STX>sRA PortConfiguration 1 6 InOut1 0 A 0 0 0 1 0 0 C8 1 1 0 0 1 DRDY 0 0 0 0 0 0 0 1 6 InOut2 0 A 1 0 0 1 0 0 C8 1 1 0 0 1 DRDY 0 0 0 0 0 0 0 0 6 InOut3 0 A 1 0 0 0 0 0 C8 1 1 0 0 0 0 0 0 0 0 6 InOut4 0 A 1 0 0 0 0 0 C8 1 1 0 0 0 0 0 0 0 0 6 InOut5 0 A 1 0 0 0 0 0 C8 1 1 0 0 0 0 0 0 0 0 6 InOut6 0 A 1 0 0 0 0 0 C8 1 1 0 0 0 0 0 0 0 1 6 InOut7 0 A 1 0 0 1 0 0 C8 1 1 0 0 1 DRDY 0 0 0 0 0 0 0 1 6 InOut8 0 A 1 0 0 1 0 0 C8 1 1 0 0 1 DRDY 0 0 0 0 0 0 0<ETX>
```

```text
sRA PortConfiguration 1 6 InOut1 0 A 0 0 0 1 0 0 C8 1 1 0 0 1 DRDY 0 0 0 0 0 0 0 1 6 InOut2 0 A 1 0 0 1 0 0 C8 1 1 0 0 1 DRDY 0 0 0 0 0 0 0 0 6 InOut3 0 A 1 0 0 0 0 0 C8 1 1 0 0 0 0 0 0 0 0 6 InOut4 0 A 1 0 0 0 0 0 C8 1 1 0 0 0 0 0 0 0 0 6 InOut5 0 A 1 0 0 0 0 0 C8 1 1 0 0 0 0 0 0 0 0 6 InOut6 0 A 1 0 0 0 0 0 C8 1 1 0 0 0 0 0 0 0 1 6 InOut7 0 A 1 0 0 1 0 0 C8 1 1 0 0 1 DRDY 0 0 0 0 0 0 0 1 6 InOut8 0 A 1 0 0 1 0 0 C8 1 1 0 0 1 DRDY 0 0 0 0 0 0 0
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 01 7A 73 52 41 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 01 00 06 49 6E 4F 75 74 31 00 00 0A 00 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 32 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 33 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 34 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 35 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 36 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 37 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 38 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 00
```

```text
73 52 41 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 01 00 06 49 6E 4F 75 74 31 00 00 0A 00 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 32 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 33 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 34 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 35 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 36 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 37 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 38 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Port Configuration [sWN PortConfiguration]

</summary>

Configuration of the given ports. Telegram structure represents the configuration of 1 port.

If the device has multiple ports, use the same structure.

**Telegram structure: sWN PortConfiguration**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Configuration of the given ports | String | 17 | | `PortConfiguration` | `50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |
| Port Type | Input or Output | Enum_8 | 1 | Input:<br>Output: | `+0d (0h)<br>+1d (1h)` | `00<br>01` |
| Name | Name of the port | FlexString | 9<br>(0..32) | Default: | `InOut1` | `00 06 49 6E 4F 75 74 31 00` |
| Input Settings | | | | | | |
| Logic | Logic of the input | Enum_8 | 1 | Active high:<br>Active low: | `+0d (0h)<br>+1d (1h)` | `00<br>01` |
| Debounce | Select debouncing time in ms | Uint_8 | 1 | | `+0d ... +255d (0h … FFh)` | `00 … FF` |
| Reserved | - | Enum_8 | 1 | Always: | `+0d (0h)` | `00` |
| Reserved1 | | Uint_16 | 2 | | `+0d (0h)` | `00 00` |
| Reserved2 | | Uint_16 | 2 | | `+0d (0h)` | `00 00` |
| Output Settings | | | | | | |
| Logic | Definition of the output logic | Enum_8 | 1 | Active high:<br>Active low: | `+0d (0h)<br>+1d (1h)` | `00<br>01` |
| Output Mode | Set kind of mode for output pin | Enum_8 | 1 | PNP:<br>NPN:<br>Push-Pull: | `0<br>1<br>2` | `00<br>01<br>02` |
| Restart Type | Defines type of restart to be used | Enum_8 | 1 | Immediately:<br>Time: | `+0d (0h)<br>+1d (1h)` | `00<br>01` |
| Restart Time | [Only with restart type = Time], time in ms | Uint_32 | 4 | (20 ms … 600,000 ms) | `+20d … +600000d (C8h ... 927C0h)` | `00 00 00 00 … 00 09 27 C0` |
| Restart Input | [Only with restart type = Input], input for restart | Uint_16 | 2 | | `+1d ... +8d (1h ... 8h)` | `00 00 … 00 08` |
| Combination | Combining multiple Events and/or Inputs | Enum_8 | 1 | AND:<br>OR:<br>XOR: | `+0d (0h)<br>+1d (1h)<br>+2d (2h)` | |
| Reserved | Reserved value 3 | Uint_16 | 2 | | `+0d (0h)` | `00 00` |
| Reserved | Reserved value 4 | Uint_16 | 2 | | `+0d (0h)` | `00 00` |
| | Source | | | | | |
| Source | The source parameter are only existing if the port is set to OUTPUT! | | 2 | | `+1d (1h)` | `00 01` |
| Source Name | Name of the source option | String | 4 | DeviceNotReady:<br>Input1:<br>Input2:<br>SopasCommand: | `DRDY<br>IN01<br>IN02<br>SC01` | `44 52 44 59<br>49 4E 30 31<br>49 4E 30 32<br>53 43 30 31` |
| Invert | Invert the source signal | Bool_1 | 1 | Not inverted:<br>Inverted: | `+0d (0h)<br>+1d (1h)` | `00<br>01` |
| Reserved | Reserved value 5 | Uint_8 | 1 | | `+0d (0h)` | `00` |
| Reserved | Reserved value 6 | Uint_8 | 1 | | `+0d (0h)` | `00` |
| Reserved | | | | | | |
| Reserved | Reserved value 7 | Uint_16 | 2 | | `+0d (0h)` | `00 00` |
| Reserved | Reserved value 8 | Uint_16 | 2 | | `+0d (0h)` | `00 00` |
| Reserved | Reserved value 9 | Uint_16 | 2 | | `+0d (0h)` | `00 00` |
| Reserved | Reserved value 10 | Uint_16 | 2 | | `+0d (0h)` | `00 00` |

**Example: sWN PortConfiguration**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}PortConfiguration{SPC}1{SPC}6{SPC}InOut1{SPC}0{SPC}A{SPC}0{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}1{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}6{SPC}InOut2{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}1{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut3{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut4{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut5{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut6{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}6{SPC}InOut7{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}1{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}6{SPC}InOut8{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}1{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
<STX>sWN PortConfiguration 1 6 InOut1 0 A 0 0 0 1 0 0 C8 1 1 0 0 1 DRDY 0 0 0 0 0 0 0 1 6 InOut2 0 A 1 0 0 1 0 0 C8 1 1 0 0 1 DRDY 0 0 0 0 0 0 0 0 6 InOut3 0 A 1 0 0 0 0 0 C8 1 1 0 0 0 0 0 0 0 0 6 InOut4 0 A 1 0 0 0 0 0 C8 1 1 0 0 0 0 0 0 0 0 6 InOut5 0 A 1 0 0 0 0 0 C8 1 1 0 0 0 0 0 0 0 0 6 InOut6 0 A 1 0 0 0 0 0 C8 1 1 0 0 0 0 0 0 0 1 6 InOut7 0 A 1 0 0 1 0 0 C8 1 1 0 0 1 DRDY 0 0 0 0 0 0 0 1 6 InOut8 0 A 1 0 0 1 0 0 C8 1 1 0 0 1 DRDY 0 0 0 0 0 0 0<ETX>
```

```text
sWN PortConfiguration 1 6 InOut1 0 A 0 0 0 1 0 0 C8 1 1 0 0 1 DRDY 0 0 0 0 0 0 0 1 6 InOut2 0 A 1 0 0 1 0 0 C8 1 1 0 0 1 DRDY 0 0 0 0 0 0 0 0 6 InOut3 0 A 1 0 0 0 0 0 C8 1 1 0 0 0 0 0 0 0 0 6 InOut4 0 A 1 0 0 0 0 0 C8 1 1 0 0 0 0 0 0 0 0 6 InOut5 0 A 1 0 0 0 0 0 C8 1 1 0 0 0 0 0 0 0 0 6 InOut6 0 A 1 0 0 0 0 0 C8 1 1 0 0 0 0 0 0 0 1 6 InOut7 0 A 1 0 0 1 0 0 C8 1 1 0 0 1 DRDY 0 0 0 0 0 0 0 1 6 InOut8 0 A 1 0 0 1 0 0 C8 1 1 0 0 1 DRDY 0 0 0 0 0 0 0
```

```text
02 73 57 4E 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 31 20 36 20 49 6E 4F 75 74 31 20 30 20 41 20 30 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 31 20 44 52 44 59 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 31 20 36 20 49 6E 4F 75 74 32 20 30 20 41 20 31 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 31 20 44 52 44 59 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 36 20 49 6E 4F 75 74 33 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 36 20 49 6E 4F 75 74 34 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 36 20 49 6E 4F 75 74 35 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 36 20 49 6E 4F 75 74 36 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 31 20 36 20 49 6E 4F 75 74 37 20 30 20 41 20 31 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 31 20 44 52 44 59 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 31 20 36 20 49 6E 4F 75 74 38 20 30 20 41 20 31 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 31 20 44 52 44 59 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 01 7A 73 57 4E 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 01 00 06 49 6E 4F 75 74 31 00 00 0A 00 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 32 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 33 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 34 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 35 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 36 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 37 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 38 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 0A
```

```text
73 57 4E 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 01 00 06 49 6E 4F 75 74 31 00 00 0A 00 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 32 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 33 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 34 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 35 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 36 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 37 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 38 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00
```


**Telegram structure: sWA PortConfiguration**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Configuration of the given ports | String | 17 | | `PortConfiguration` | `50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |

**Example: sWA PortConfiguration**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}PortConfiguration<ETX>
```

```text
02 73 57 41 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 57 41 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 0C
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read State of the Inputs [sRN LIDinputstate]

</summary>

Use sEN LIDinputstate 1 to receive a telegram each time an input signal (e.g. by trigger) changes.

**Telegram structure: sRN LIDinputstate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Input state | String | 14 | | `LIDinputstate` | `4C 49 44 69 6E 70 75 74 73 74 61 74 65` |

**Example: sRN LIDinputstate**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LIDinputstate<ETX>
```

```text
<STX>sRN LIDinputstate<ETX>
```

```text
sRN LIDinputstate
```

```text
02 73 52 4E 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 52 4E 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 0F
```

```text
73 52 4E 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65
```


**Telegram structure: sRA LIDinputstate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Output state | String | 14 | | `LIDinputstate` | `4C 49 44 69 6E 70 75 74 73 74 61 74 65` |
| Status code | Version number | Uint_16 | 2 | | `0h … FFFFh` | `00 00 … FF FF` |
| Status code | System counter<br>(time in µs since power up max. 71min then starting from 0 again) | Uint_32 | 4 | | `0 h … FFFFFFFFh` | `00 00 00 00 … FF FF FF FF` |
| State of the inputs 1 … n | Amount of inputs (n) depending of device family | Enum_8 | 1 | Not active:<br>Active:<br>Input not used: | `0<br>1<br>2` | `00<br>01<br>02` |
| Time | States code | Uint_16 | 2 | No time data:<br>Time data: | `0<br>1` | `00 00<br>00 01` |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Year | Array | 2 | E. g. | `1970` | `07 B2` |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Month | Array | 1 | | `1 … 12` | `01 … 0C` |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Day | Array | 1 | | `1 … 31` | `01 … 1F` |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Hour | Array | 1 | | `0 … 23` | `00 … 17` |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Minute | Array | 1 | | `0 … 59` | `00 … 3B` |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Second | Array | 1 | | `0 … 59` | `00 … 3B` |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Microsecond | Array | 4 | | `0 … 999999` | `00 00 00 00 … 00 0F 42 3F` |

**Example: sRA LIDinputstate In1 not used, In2 inactive, In3 inactive, In4 not used, In5 not used, In6 not used, In7 not used, In8 not used, time: 1970-01-01 0:13 58.443 sec**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LIDinputstate{SPC}1{SPC}31F99C10{SPC}2{SPC}0{SPC}0{SPC}2{SPC}2{SPC}2{SPC}2{SPC}2{SPC}1{SPC}7B2{SPC}1{SPC}1{SPC}0{SPC}D{SPC}3A{SPC}6C278<ETX>
```

```text
02 73 52 41 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 31 20 33 31 46 39 39 43 31 30 20 32 20 30 20 30 20 32 20 32 20 32 20 32 20 32 20 31 20 37 42 32 20 31 20 31 20 30 20 44 20 33 41 20 36 43 32 37 38 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2D 73 52 41 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 00 01 31 F9 9C 10 02 00 00 02 02 02 02 02 00 01 07 B2 01 01 00 0D 3A 00 06 C2 78 5A
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read State of the Outputs [sRN LIDoutputstate]

</summary>

Status of all outputs

**Telegram structure: sRN LIDoutputstate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Output state | String | 14 | | `LIDoutputstate` | `4C 49 44 6F 75 74 70 75 74 73 74 61 74 65` |

**Example: sRN LIDoutputstate**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LIDoutputstate<ETX>
```

```text
<STX>sRN LIDoutputstate<ETX>
```

```text
sRN LIDoutputstate
```

```text
02 73 52 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 66
```

```text
73 52 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65
```


**Telegram structure: sRA LIDoutputstate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Complete telegram structure of the answer . | | | | | | |

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Receive Outputstate by Event [sEN LIDoutputstate]

</summary>

Output telegram is sent every time an output state changes.

**Telegram structure: sEN LIDoutputstate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Output state | String | 14 | | `LIDoutputstate` | `4C 49 44 6F 75 74 70 75 74 73 74 61 74 65` |
| | Start/stop | Enum_8 | 1 | Start:<br>Stop: | `1<br>0` | `01<br>00` |

**Example: sEN LIDoutputstate**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}LIDoutputstate{SPC}1<ETX>
```

```text
<STX>sEN LIDoutputstate 1<ETX>
```

```text
sEN LIDoutputstate 1
```

```text
02 73 45 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 45 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 01 50
```

```text
73 45 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 01
```


**Telegram structure: sRA/sSN LIDoutputstate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA / sSN` | `73 52 41 / 73 53 4E` |
| Command | Output state | String | 14 | | `LIDoutputstate` | `4C 49 44 6F 75 74 70 75 74 73 74 61 74 65` |
| Status code | Version number | Uint_16 | 2 | | `0h … FFFFh` | `00 00 … FF FF` |
| Status code | System counter<br>(time in µs since power up max. 71min then starting from 0 again) | Uint_32 | 4 | | `0h … FFFFFFFFh` | `00 00 00 00 … FF FF FF FF` |
| State of the outputs 1 ... n and count value in hex. (values of an example)<br>Amount of outputs (n) depending of device family | Output 1 ... n state | Enum_8 | 1 | Not active:<br>Active:<br>Output not used: | `0<br>1<br>2` | `00<br>01<br>02` |
| State of the outputs 1 ... n and count value in hex. (values of an example)<br>Amount of outputs (n) depending of device family | Output 1 ... n count | Uint_32 | 4 | | `0h … FFFFFFFFh` | `00 00 00 00 … FF FF FF FF` |
| Time | States code | Uint_16 | 2 | No time data:<br>Time data: | `0<br>1` | `00 00<br>00 01` |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Year | Array | 2 | E. g. | `1970` | `07 B2` |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Month | Array | 1 | | `1 … 12` | `01 … 0C` |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Day | Array | 1 | | `1 … 31` | `01 … 1F` |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Hour | Array | 1 | | `0 … 23` | `00 … 17` |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Minute | Array | 1 | | `0 … 59` | `00 … 3B` |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Second | Array | 1 | | `0 … 59` | `00 … 3B` |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Microsecond | Array | 4 | | `0 … 999999` | `00 00 00 00 … 00 0F 42 3F` |

**Example: sRA LIDoutputstate Out1 active Count 0, Out2 active Count 0, all other Outputs not used, time: 1970-01-01 0:31 38.191 sec**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LIDoutputstate{SPC}1{SPC}712414B0{SPC}1{SPC}0{SPC}1{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}1{SPC}7B2{SPC}1{SPC}1{SPC}0{SPC}1F{SPC}26{SPC}2EA18<ETX>
```

```text
02 73 52 41 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 31 20 37 31 32 34 31 34 42 30 20 31 20 30 20 31 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 31 20 37 42 32 20 31 20 31 20 30 20 31 46 20 32 36 20 32 45 41 31 38 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4E 73 52 41 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 00 01 71 24 14 B0 01 00 00 00 00 01 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 00 01 07 B2 01 01 00 1F 26 00 02 EA 18 C4
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Output State [sMN mDOSetOutput]

</summary>

Set a specific output to high or low via software command.

Output source needs to be set to "SOPAS command" and the port configured as Output (in case of I/O).

**Telegram structure: sMN mDOSetOutput**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Set output state | String | 12 | | `mDOSetOutput` | `6D 44 4F 53 65 74 4F 75 74 70 75 74` |
| Output number | | Uint_8 | 1 | Depends on system plug: | `1 … 3<br>1 … 6` | `01 … 03<br>01 … 06` |
| Output state | | Enum_8 | 1 | Not active:<br>Active: | `0<br>1` | `00<br>01` |

**Example: sMN mDOSetOutput**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}mDOSetOutput{SPC}1{SPC}1<ETX>
```

```text
<STX>sMN mDOSetOutput 1 1<ETX>
```

```text
sMN mDOSetOutput 1 1
```

```text
02 73 4D 4E 20 6D 44 4F 53 65 74 4F 75 74 70 75 74 20 31 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 4D 4E 20 6D 44 4F 53 65 74 4F 75 74 70 75 74 20 01 01 6B
```

```text
73 4D 4E 20 6D 44 4F 53 65 74 4F 75 74 70 75 74 20 01 01
```


**Telegram structure: sAN mDOSetOutput**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Set output state | String | 12 | | `mDOSetOutput` | `6D 44 4F 53 65 74 4F 75 74 70 75 74` |
| Status Code | Status code | Bool_1 | 1 | Error:<br>Success: | `0<br>1` | `00<br>01` |

**Example: sAN mDOSetOutput**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}mDOSetOutput{SPC}1<ETX>
```

```text
02 73 41 4E 20 6D 44 4F 53 65 74 4F 75 74 70 75 74 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 41 4E 20 6D 44 4F 53 65 74 4F 75 74 70 75 74 20 01 66
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Reset Output Counter [sMN LIDrstoutpcnt]

</summary>

Reset the counter which keeps track of how often an digital output has been active (and not active). Information from the counter is included in LIDoutputstate.

**Telegram structure: sMN LIDrstoutpcnt**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Reset output counter | String | 13 | | `LIDrstoutpcnt` | `4C 49 44 72 73 74 6F 75 74 70 63 6E 74` |

**Example: sMN LIDrstoutpcnt**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}LIDrstoutpcnt<ETX>
```

```text
<STX>sMN LIDrstoutpcnt<ETX>
```

```text
sMN LIDrstoutpcnt
```

```text
02 73 4D 4E 20 4C 49 44 72 73 74 6F 75 74 70 63 6E 74 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 4D 4E 20 4C 49 44 72 73 74 6F 75 74 70 63 6E 74 03
```

```text
73 4D 4E 20 4C 49 44 72 73 74 6F 75 74 70 63 6E 74
```


**Telegram structure: sAN LIDrstoutpcnt**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Reset output counter | String | 13 | | `LIDrstoutpcnt` | `4C 49 44 72 73 74 6F 75 74 70 63 6E 74` |
| Status code | Code number | Bool_1 | 1 | Success:<br>Error: | `0<br>1` | `00<br>01` |

**Example: sAN LIDrstoutpcnt**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}LIDrstoutpcnt{SPC}0<ETX>
```

```text
02 73 41 4E 20 4C 49 44 72 73 74 6F 75 74 70 63 6E 74 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 41 4E 20 4C 49 44 72 73 74 6F 75 74 70 63 6E 74 20 00 2F
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Enable Cloning Plug Functionality [sWN enableCloningPlug]

</summary>

Enables or disables the cloning plug functionality.

**Telegram structure: sWN enableCloningPlug**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | enableCloningPlug | String | 17 | | `enableCloningPlug` | `65 6E 61 62 6C 65 43 6C 6F 6E 69 6E 67 50 6C 75 67` |
| Value | Enable/ disable cloning plug functionality | Bool_1 | 1 | Disable:<br>Enable: | `0<br>1` | `00<br>01` |

**Example: sWN enableCloningPlug**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}enableCloningPlug{SPC}1<ETX>
```

```text
<STX>sWN enableCloningPlug 1<ETX>
```

```text
sWN enableCloningPlug 1
```

```text
02 73 57 4E 20 65 6E 61 62 6C 65 43 6C 6F 6E 69 6E 67 50 6C 75 67 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 57 4E 20 65 6E 61 62 6C 65 43 6C 6F 6E 69 6E 67 50 6C 75 67 20 01 0A
```

```text
73 57 4E 20 65 6E 61 62 6C 65 43 6C 6F 6E 69 6E 67 50 6C 75 67 20 01
```


**Telegram structure: sWA enableCloningPlug**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 17 | | `enableCloningPlug` | `65 6E 61 62 6C 65 43 6C 6F 6E 69 6E 67 50 6C 75 67` |

**Example: sWA enableCloningPlug**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}enableCloningPlug<ETX>
```

```text
02 73 57 41 20 65 6E 61 62 6C 65 43 6C 6F 6E 69 6E 67 50 6C 75 67 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 57 41 20 65 6E 61 62 6C 65 43 6C 6F 6E 69 6E 67 50 6C 75 67 24
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Cloning Plug Functionality [sRN enableCloningPlug]

</summary>

Check if the cloning plug functionality is enabled.

**Telegram structure: sRN enableCloningPlug**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read request | String | 3 | | `sRN` | `73 52 4E` |
| Variable name | enableCloningPlug | String | 17 | | `enableCloningPlug` | `65 6E 61 62 6C 65 43 6C 6F 6E 69 6E 67 50 6C 75 67` |

**Example: sRN enableCloningPlug**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}enableCloningPlug<ETX>
```

```text
<STX>sRN enableCloningPlug<ETX>
```

```text
sRN enableCloningPlug
```

```text
02 73 52 4E 20 65 6E 61 62 6C 65 43 6C 6F 6E 69 6E 67 50 6C 75 67 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 52 4E 20 65 6E 61 62 6C 65 43 6C 6F 6E 69 6E 67 50 6C 75 67 2E
```

```text
73 52 4E 20 65 6E 61 62 6C 65 43 6C 6F 6E 69 6E 67 50 6C 75 67
```


**Telegram structure: sRA enableCloningPlug**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read answer | String | 3 | | `sRA` | `73 52 41` |
| Variable name | enableCloningPlug | String | 17 | | `enableCloningPlug` | `65 6E 61 62 6C 65 43 6C 6F 6E 69 6E 67 50 6C 75 67` |
| Value | Cloning plug functionality disabled / enabled | Bool_1 | 1 | Disabled:<br>Enabled: | `0<br>1` | `00<br>01` |

**Example: sRA enableCloningPlug**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}enableCloningPlug{SPC}1<ETX>
```

```text
02 73 52 41 20 65 6E 61 62 6C 65 43 6C 6F 6E 69 6E 67 50 6C 75 67 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 52 41 20 65 6E 61 62 6C 65 43 6C 6F 6E 69 6E 67 50 6C 75 67 20 01 00
```

</details>

</section>

<section class="cola-category" markdown="1">

## Measurement Data Output

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Configure the Data Content for the Scan [sWN LMDscandatacfg]

</summary>

Configuration of the channels (e.g. distance) and information that will be send by the device as measurement data (output data format).

**Telegram structure: sWN LMDscandatacfg**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Configure scandata | String | 14 | | `LMDscandatacfg` | `4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67` |
| Reserved | - | Uint_8 | 2 | Always: | `0 0` | `00 00` |
| RSSI | Enable or disable the output of RSSI values | Uint_8 | 1 | RSSI disabled:<br>RSSI enabled: | `0<br>1` | `00<br>01` |
| Reserved | - | Enum_8 | 1 | Always: | `0` | `00` |
| Reserved | - | Enum_8 | 1 | Always: | `0` | `00` |
| Encoder | Encoder data | Uint_8 | 2 | No encoder:<br>Channel 1: | `0 0<br>1 0` | `00 00<br>01 00` |
| Reserved | - | Bool_1 | 1 | Always: | `0` | `00` |
| Device name | Sends the device name | Bool_1 | 1 | No:<br>Yes: | `0<br>1` | `00<br>01` |
| Reserved | - | Bool_1 | 1 | Always: | `0` | `00` |
| Time | Sends time stamp information | Bool_1 | 1 | No:<br>Yes: | `0<br>1` | `00<br>01` |
| Reserved | - | Uint_16 | 2 | Always: | `+1d (1h)` | `00 01` |

Example: RSSI enabled

**Example: sWN LMDscandatacfg**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LMDscandatacfg{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}+1<ETX>
```

```text
<STX>sWN LMDscandatacfg 0 0 1 0 0 0 0 0 0 0 0 +1<ETX>
```

```text
sWN LMDscandatacfg 0 0 1 0 0 0 0 0 0 0 0 +1
```

```text
02 73 57 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67 20 30 20 30 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 2B 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 20 73 57 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67 20 00 00 01 00 00 00 00 00 00 00 00 00 01 42
```

```text
73 57 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67 20 00 00 01 00 00 00 00 00 00 00 00 00 01
```


**Telegram structure: sWA LMDscandatacfg**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Configure scandata | String | 14 | | `LMDscandatacfg` | `4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67` |

**Example: sWA LMDscandatacfg**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LMDscandatacfg<ETX>
```

```text
02 73 57 41 20 4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 41 20 4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67 20 4D
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Poll One Telegram [sRN LMDscandata]

</summary>

Asking the device for the measurement values of the last valid scan. The device will respond, even if currently no measurement data is created (e.g. due to standby or log in).

Data is transmitted only via LMDscandata when LMDscandata is selected as data output format.

During the boot-up phase of the device, there will be no data telegram or answer from the device.

**Telegram structure: sRN LMDscandata**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Only one telegram | String | 11 | | `LMDscandata` | `4C 4D 44 73 63 61 6E 64 61 74 61` |

**Example: sRN LMDscandata**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LMDscandata<ETX>
```

```text
<STX>sRN LMDscandata<ETX>
```

```text
sRN LMDscandata
```

```text
02 73 52 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 05
```

```text
73 52 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61
```


**Telegram structure: sRA LMDscandata**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Find complete telegram structure of the answer in . | | | | | | |

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Send Data Permanently [sEN LMDscandata]

</summary>

Start/ stop continuous retrievement of measurement data from device. Data will be transmitted as configured as soon as measurement data is generated by the device. No data is generated when there is an active log in, the laser is shut off (e.g. in Standby mode), the motor is stopped or in case of certain error modes (e.g. Device not ready).

Data is transmitted only via LMDscandata when LMDscandata is selected as data output format.

During the boot-up phase of the device, there will be no data telegram or answer from the device.

**Telegram structure: sEN LMDscandata**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Data telegram | String | 11 | | `LMDscandata` | `4C 4D 44 73 63 61 6E 64 61 74 61` |
| Measurement | Start/stop | Enum_8 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN LMDscandata**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}LMDscandata{SPC}1<ETX>
```

```text
<STX>sEN LMDscandata 1<ETX>
```

```text
sEN LMDscandata 1
```

```text
02 73 45 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 45 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 20 01 33
```

```text
73 45 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 20 01
```


**Telegram structure: sEA LMDscandata**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sEA` | `73 45 41` |
| Command | Data telegram | String | 11 | | `LMDscandata` | `4C 4D 44 73 63 61 6E 64 61 74 61` |
| Measurement | Start/stop | Enum_8 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: Confirmation of sEA LMDscandata**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}LMDscandata{SPC}1<ETX>
```

```text
02 73 45 41 20 4C 4D 44 73 63 61 6E 64 61 74 61 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 45 41 20 4C 4D 44 73 63 61 6E 64 61 74 61 20 01 3C
```


The answer to the telegram will be followed by the scandata:

**Telegram structure: Datastream of sRA LMDscandata/sSN LMDscandata**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | Answer to sRN LMDscandata:<br>Answer to sEN LMDscandata: | `sRA<br>sSN` | `73 52 41<br>73 53 4E` |
| Command | Data telegram | String | 11 | | `LMDscandata` | `4C 4D 44 73 63 61 6E 64 61 74 61` |
| Version number | For detecting format changes by the version. | Uint_16 | 2 | | `1h … FFFFh` | `00 01 … FF FF` |
| Device | | | | | | |
| Device number | Defined with SOPAS | Uint_16 | 2 | | `0h … FFFFh` | `00 00 … FF FF` |
| Serial number | Production period (year, calendar week, number): YYWWxxxx | Uint_32 | 4 | | `0h … FFFFFFFFh` | `00 00 00 00 … FF FF FF FF` |
| Device status | (See values column) | Uint_8 | 2 x 1 | Ok:<br>Error: | `0 0<br>1 0` | `00 00<br>01 00` |
| Status info | | | | | | |
| Telegram counter | Number of measurement telegrams finished in the scanner and given to the interface. Does not count how many telegrams were really given out; is relevant if not all scans are delivered from the scan core. | Uint_16 | 2 | | `0h … FFFFh` | `00 00 … FF FF` |
| Scan counter | Number of scans which were created in the device; counts how many scans were really done. | Uint_16 | 2 | | `0h … FFFFh` | `00 00 … FF FF` |
| Time since start up in µs | In the output telegram this is the time at the zero index before the measurement itself starts. Time base is the boot-up time in µs since power up, max. 71 min then starting from 0 again. | Uint_32 | 4 | | `0h … FFFFFFFFh` | `00 00 00 00 … FF FF FF FF` |
| Time of transmission in µs | In the output telegram this is the time when the complete scan is transmitted to the buffer for data output. Time base is the boot-up time in µs since power up, max. 71 min then starting from 0 again. | Uint_32 | 4 | | `0h … FFFFFFFFh` | `00 00 00 00 … FF FF FF FF` |
| Status of digital inputs | Low byte represents input 1. | Uint_8 | 2 x 1 | All inputs low:<br>Input 1 high:<br>Input 2 high:<br>Input 1+2 high:<br>All inputs high:<br>(Depends on system plug and port configuration) | `0 0<br>1 0<br>2 0<br>3 0<br>3 F` | `00 00<br>01 00<br>02 00<br>03 00<br>03 0F` |
| Status of digital outputs | Low byte represents output 1. | Uint_8 | 2 x 1 | All outputs low:<br>All outputs high: | `0 0<br>3 F` | `00 00<br>03 0F` |
| Reserved | - | Uint_16 | 2 | Always: | `0` | `00 00 00 00` |
| Frequencies | | | | | | |
| Scan frequency | [1/100 Hz] | Uint_32 | 4 | 15 Hz ... 50 Hz:<br>(depends on Dynamic Sensing Profile ) | `5DCh ... 1388h` | `05 DC ... 13 88` |
| Reserved | - | Uint_32 | 4 | Always: | `0` | `00 00 00 00` |
| Encoder | | | | | | |
| Amount of encoder | If 0, then next two telegram parts are missing. | Enum_16 | 2 | External encoder | `0<br>1` | `00 00<br>00 01` |
| Encoder position | Info in ticks | Uint_32 | 4 | Only filled if parameter is activated | `0h … FFFFFFFFh` | `00 00 00 00 ... FF FF FF FF` |
| Encoder speed | mm/sec<br>or<br>milligrad/sec | Uint_16 | 2 | Only filled if parameter is activated | `0h ... FFFFh` | `00 00 ... FF FF` |
| 16 bit output channel (Distance) | | | | | | |
| Amount of 16 bit channels | Number of 16 bit channels that provide measured data | Enum_16 | 2 | Output channels | `1 or 3` | `01 or 03` |
| Content | Defines the content of the output channel | String | 5 | Distance values:<br>Distance values:<br>Distance values: | `DIST1<br>DIST2<br>DIST3` | `44 49 53 54 31<br>44 49 53 54 32<br>44 49 53 54 33` |
| Scale factor | Scale factor or factor of the measurement values | Real as float according to IEEE754 | 4 | Factor x 1:<br>Factor x 2:<br>Factor x 1 (REFL1) (alternative): | `3F800000h<br>40000000h` | `3F 80 00 00<br>40 00 00 00` |
| Reserved | - | Real as float according to IEEE754 | 4 | Always: | `00000000` | `00 00 00 00` |
| Start angle | [1/10000°] | Int_32 | 4 | -48° ... 228°<br>(depends on Dynamic Sensing Profile ) | `FFF8AD00h … 22CA40h` | `FF F8 AD 00h … 00 22 CA 40h` |
| Size of single angular step | Output format in degree: 1/10000° | Uint_16 | 2 | 0.1° ... 1°:<br>(depends on angular resolution of Dynamic Sensing Profile ) | `3E8h ... 2710h` | `03 E8 ... 27 10` |
| Amount of data | Number of transmitted measurement points | Uint_16 | 2 | | `0h … FFFFh` | `00 00 … FF FF` |
| Data_1<br>Data_n | Data stream starting Data_1 to Data_n | Uint_16 | 2 | | `0h … 61A8h` | `00 00 00 00 … 00 00 61 A8` |
| 8 bit output channel (RSSI) | | | | | | |
| Amount of 8 bit channels | Number of 8 bit channels that provide measured data | Enum_16 | 2 | Output channels: | `1 or 3` | `01 or 03` |
| Content | Defines the content of the output channel (RSSI) | String | 5 | | `RSSI1<br>RSSI2<br>RSSI3` | `52 53 53 49 31<br>52 53 53 49 32<br>52 53 53 49 33` |
| Scale factor | Scale factor of the RSSI values | Real as float according to IEEE754 | 4 | Factor x 1:<br>Factor x 2: | `3F800000h<br>40000000h` | `3F 80 00 00<br>40 00 00 00` |
| Reserved | - | Real as float according to IEEE754 | 4 | Always: | `00000000h` | `00 00 00 00` |
| Start angle | Output format: [1/10000°] | Uint_32 | 4 | -48° ... 228°<br>(depends on Dynamic Sensing Profile ) | `FFF8AD00h … 22CA40h` | `FF F8 AD 00h … 00 22 CA 40h` |
| Size of single angular step | Output format: 1/10000° | Uint_16 | 2 | 0.1° ... 1°:<br>(depends on Dynamic Sensing Profile ) | `3E8h ... 2710h` | `03 E8 ... 27 10` |
| Amount of data | Number of transmitted measurement points | Uint_16 | 2 | | `0h … FFFFh` | `00 00 … FF FF` |
| Data_1<br>Data_n | Data stream starting Data_1 to Data_n | Uint_8 | 1 | | `00h ... FFh` | `00 ... FF` |
| Reserved | | | | | | |
| Reserved | - | Enum_16 | 2 | Always: | `0` | `00 00` |
| Reserved | | | | | | |
| Reserved | - | Enum_16 | 2 | Always: | `0` | `00 00` |
| Reserved | | | | | | |
| Reserved | - | Enum_16 | 2 | Always: | `0` | `00 00` |
| Reserved | | | | | | |
| Reserved | - | Enum_16 | 2 | Always: | `0` | `00 00` |
| Reserved | | | | | | |
| Reserved | - | Uint_16 | 2 | Always: | `0` | `00 00` |

LMDscandata - reserved values

Valid distance measurement values are values starting from 16d upwards; everything below has the following meaning:

| DIST | RSSI | Description |
| --- | --- | --- |
| 0d | 0d | Invalid measurement value; caused by very low remission (extremely dark object), object distance not within measurement range (too close or too far away) or selected filter settings at device |
| 1d - 15d | 0d | Reserved, currently not in use |
| ≥16d | >0h | Valid measurement values |
| ≥16d | 254d | Reflector detected |
| ≥16d | 255d | Reserved |

Higher measurement values will be given out with a zero, that means no measurement value detected.

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Scan Data Enable [sWN ScanDataEnable]

</summary>

Enables/ Disables streaming data output

**Telegram structure: sWN ScanDataEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 E4` |
| Command | Enables/ Disables streaming data output. | String | 14 | | `ScanDataEnable` | `53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65` |
| Data | | Bool | 1 | Off:<br>On: | `0d (00h)<br>+1d (01h)` | `00 ... 01` |

**Example: sWN ScanDataEnable 0 - Disable the streaming data output**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}ScanDataEnable{SPC}0<ETX>
```

```text
<STX>sWN ScanDataEnable 0<ETX>
```

```text
sWN ScanDataEnable 0
```

```text
02 73 57 4E 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 57 4E 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65 20 00 44
```

```text
73 57 4E 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65 20 00
```


**Telegram structure: sWA ScanDataEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Enables/ Disables streaming data output. | String | 14 | | `ScanDataEnable` | `53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65` |

**Example: sWA ScanDataEnable**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}ScanDataEnable<ETX>
```

```text
02 73 57 41 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 41 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65 20 4B
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Streaming Ethernet Settings [sWN ScanDataEthSettings]

</summary>

Ethernet settings for the scan data streaming functionality of the device

**Telegram structure: sWN ScanDataEthSettings**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | String | String | 19 | | `ScanDataEthSettings` | `53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |
| Protocol | Transport protocol for streaming data | Enum_8 | 1 | UDP (fix): | `+1d (01h)` | `01` |
| IPAddress | IP address of the destination for data receiver | Array | 4 | | `0 …+255d (00…FF)<br>0 …+255d (00..FF)<br>0 …+255d (00…FF)<br>0 …+255d (00…FF)` | `00 … FF<br>00 … FF<br>00 … FF<br>00 … FF` |
| Port | Port destination of the data reseiver | Uint_16 | 2 | | `0 .. +65535d(00 00…FF FF)` | `00 00 … FF FF` |

Example: sWN ScanDataEthSettings +1 +192 +168 +0 +100 +2115

Protocol is set to UDP (1), IPAddress (192.168.0.100), Port (2115)

**Example: sWN ScanDataEthSettings**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}ScanDataEthSettings{SPC}+1{SPC}+192{SPC}+168{SPC}+0{SPC}+100{SPC}+2115<ETX>
```

```text
<STX>sWN ScanDataEthSettings +1 +192 +168 +0 +100 +2115<ETX>
```

```text
sWN ScanDataEthSettings +1 +192 +168 +0 +100 +2115
```

```text
02 73 57 4E 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 31 20 43 30 20 41 38 20 30 20 36 34 20 38 34 33 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 57 4E 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 01 C0 A8 00 64 08 43 5F
```

```text
73 57 4E 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 01 C0 A8 00 64 08 43
```


**Telegram structure: sWA ScanDataEthSettings**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | String | String | 19 | | `ScanDataEthSettings` | `53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |

**Example: sWA ScanDataEthSettings**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}ScanDataEthSettings<ETX>
```

```text
02 73 57 41 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 18 73 57 41 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 16
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Streaming Ethernet Settings [sRN ScanDataEthSettings]

</summary>

Read ethernet settings for the scan data streaming functionality of the device.

**Telegram structure: sRN ScanDataEthSettings**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | String | String | 19 | | `ScanDataEthSettings` | `53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |

**Example: sRN ScanDataEthSettings**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ScanDataEthSettings<ETX>
```

```text
<STX>sRN ScanDataEthSettings<ETX>
```

```text
sRN ScanDataEthSettings
```

```text
02 73 52 4E 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 52 4E 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 3C
```

```text
73 52 4E 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73
```


**Telegram structure: sRA ScanDataEthSettings**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | String | String | 19 | | `ScanDataEthSettings` | `53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |
| Protocol | Transport protocol for streaming data | Enum_8 | 1 | UDP:<br>TCP: | `+1d (01h)<br>+2d (02h)` | `01<br>02` |
| IPAddress | IP address of the destination for data receiver | Array | 4 | | `0 …+255d (00…FF)<br>0 …+255d (00..FF)<br>0 …+255d (00…FF)<br>0 …+255d (00…FF)` | `00 … FF<br>00 … FF<br>00 … FF<br>00 … FF` |
| Port | Port destination of the data receiver | Uint_16 | 2 | | `0 .. +65535d(00 00…FF FF)` | `00 00 … FF FF` |

Example: sRA ScanDataEthSettings +1 +192 +168 +0 +100 +2115

Protocol is set to UDP (1), IPAddress (192.168.0.100), Port (2115)

**Example: sRA ScanDataEthSettings**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ScanDataEthSettings{SPC}1{SPC}C0{SPC}A8{SPC}0{SPC}64{SPC}843<ETX>
```

```text
02 73 52 41 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 31 20 43 30 20 41 38 20 30 20 36 34 20 38 34 33 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 52 41 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 01 C0 A8 00 64 08 43 55
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Scan Data Format [sRN ScanDataFormat]

</summary>

Return of the scan data format

**Telegram structure: sRN ScanDataFormat**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Data serialization format | String | 14 | | `ScanDataFormat` | `53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74` |

Example: sRN ScanDataFormat

Read of the data serialization format

**Example: sRN ScanDataFormat**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ScanDataFormat<ETX>
```

```text
<STX>sRN ScanDataFormat<ETX>
```

```text
sRN ScanDataFormat
```

```text
02 73 52 4E 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 4E 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 63
```

```text
73 52 4E 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74
```


**Telegram structure: sRA ScanDataFormat**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Data serialization format | String | 14 | | `ScanDataFormat` | `53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74` |
| Data | | Enum_8 | 1 | MSGPACK:<br>Compact:<br>LMDscandata:<br>Native ROS2: | `1h<br>2h<br>3h<br>4h` | `01<br>02<br>03<br>04` |

Example: sRA ScanDataFormat

Scan data format is set to Compact = 2

**Example: sRA ScanDataFormat**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ScanDataFormat{SPC}2<ETX>
```

```text
02 73 52 41 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 20 32 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 41 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 20 02 4E
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Scan Data Format [sWN ScanDataFormat]

</summary>

Set the data serialization format

**Telegram structure: sWN ScanDataFormat**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Data serialization format | String | 14 | | `ScanDataFormat` | `53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74` |
| Variable Data | Data | Enum_8 | 1 | MSGPACK:<br>Compact (recommended):<br>LMDscandata:<br>Native ROS2: | `+1d (1h)<br>+2d (2h)<br>+3d (3h)<br>+4d (4h)` | `01<br>02<br>03<br>04` |

Example: sWN ScanDataFormat

Scan data format set to Compact format

**Example: sWN ScanDataFormat**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}ScanDataFormat{SPC}2<ETX>
```

```text
<STX>sWN ScanDataFormat 2<ETX>
```

```text
sWN ScanDataFormat 2
```

```text
02 73 57 4E 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 20 32 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 57 4E 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 20 02 44
```

```text
73 57 4E 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 20 02
```


**Telegram structure: sWA ScanDataFormat**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Data serialization format | String | 14 | | `ScanDataFormat` | `53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74` |

**Example: sWA ScanDataFormat**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}ScanDataFormat<ETX>
```

```text
02 73 57 41 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 41 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 20 49
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set the Session Timeout for TCP/IP Communication [sWN EtherSessionTimeout]

</summary>

Set the session timeout for TCP/IP communication (e.g. LMDscandata communication). Be careful with low values as they might cause unexpected disconnections. Write access requires user level: Service.

**Telegram structure: sWN EtherSessionTimeout**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | EtherSessionTimeout | String | 19 | | `EtherSessionTimeout` | `45 74 68 65 72 53 65 73 73 69 6F 6E 54 69 6D 65 6F 75 74` |
| Value | Session timeout in ms | UInt_32 | 4 | | `+15000` | `00 00 3A 98` |

**Example: sWN EtherSessionTimeout**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EtherSessionTimeout{SPC}+15000<ETX>
```

```text
<STX>sWN EtherSessionTimeout +15000<ETX>
```

```text
sWN EtherSessionTimeout +15000
```

```text
02 73 57 4E 20 45 74 68 65 72 53 65 73 73 69 6F 6E 54 69 6D 65 6F 75 74 20 2B 31 35 30 30 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 57 4E 20 45 74 68 65 72 53 65 73 73 69 6F 6E 54 69 6D 65 6F 75 74 20 00 00 3A 98 83
```

```text
73 57 4E 20 45 74 68 65 72 53 65 73 73 69 6F 6E 54 69 6D 65 6F 75 74 20 00 00 3A 98
```


**Telegram structure: sWA EtherSessionTimeout**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 19 | | `EtherSessionTimeout` | `45 74 68 65 72 53 65 73 73 69 6F 6E 54 69 6D 65 6F 75 74` |

**Example: sWA EtherSessionTimeout**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}EtherSessionTimeout<ETX>
```

```text
02 73 57 41 20 45 74 68 65 72 53 65 73 73 69 6F 6E 54 69 6D 65 6F 75 74 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 57 41 20 45 74 68 65 72 53 65 73 73 69 6F 6E 54 69 6D 65 6F 75 74 0E
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read the Session Timeout for TCP/IP Communication [sRN EtherSessionTimeout]

</summary>

Returns the session timeout for TCP/IP communication (e.g. LMDscandata communication). Be careful with low values as they might cause unexpected disconnections.

**Telegram structure: sRN EtherSessionTimeout**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read request | String | 3 | | `sRN` | `73 52 4E` |
| Variable name | EtherSessionTimeout | String | 19 | | `EtherSessionTimeout` | `45 74 68 65 72 53 65 73 73 69 6F 6E 54 69 6D 65 6F 75 74` |

**Example: sRN EtherSessionTimeout**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EtherSessionTimeout<ETX>
```

```text
<STX>sRN EtherSessionTimeout<ETX>
```

```text
sRN EtherSessionTimeout
```

```text
02 73 52 4E 20 45 74 68 65 72 53 65 73 73 69 6F 6E 54 69 6D 65 6F 75 74 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 52 4E 20 45 74 68 65 72 53 65 73 73 69 6F 6E 54 69 6D 65 6F 75 74 04
```

```text
73 52 4E 20 45 74 68 65 72 53 65 73 73 69 6F 6E 54 69 6D 65 6F 75 74
```


**Telegram structure: sRA EtherSessionTimeout**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read answer | String | 3 | | `sRA` | `73 52 41` |
| Variable name | EtherSessionTimeout | String | 19 | | `EtherSessionTimeout` | `45 74 68 65 72 53 65 73 73 69 6F 6E 54 69 6D 65 6F 75 74` |
| Value | Session timeout in ms | UInt_32 | 4 | | `+15000` | `00 00 3A 98` |

**Example: sRA EtherSessionTimeout**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EtherSessionTimeout{SPC}3A98<ETX>
```

```text
02 73 52 41 20 45 74 68 65 72 53 65 73 73 69 6F 6E 54 69 6D 65 6F 75 74 20 33 41 39 38 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 52 41 20 45 74 68 65 72 53 65 73 73 69 6F 6E 54 69 6D 65 6F 75 74 20 00 00 3A 98 89
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set the Content of the Compact Format Telegram Type 1 [sWN compactTelegramType1Content]

</summary>

Sets the content of the Compact format telegram type 1 (e.g. whether to include the RSSI values).

**Telegram structure: sWN compactTelegramType1Content**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | compactTelegramType1Content | String | 27 | | `compactTelegramType1Content` | `63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 31 43 6F 6E 74 65 6E 74` |
| includeRssi | If true, RSSIs are serialized | Bool_1 | 1 | Disable:<br>Enable: | `0<br>1` | `00<br>01` |
| includeProperties | If true, properties are serialized | Bool_1 | 1 | Disable:<br>Enable: | `0<br>1` | `00<br>01` |

**Example: sWN compactTelegramType1Content**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}compactTelegramType1Content{SPC}1{SPC}1<ETX>
```

```text
<STX>sWN compactTelegramType1Content 1 1<ETX>
```

```text
sWN compactTelegramType1Content 1 1
```

```text
02 73 57 4E 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 31 43 6F 6E 74 65 6E 74 20 31 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 22 73 57 4E 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 31 43 6F 6E 74 65 6E 74 20 01 01 6C
```

```text
73 57 4E 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 31 43 6F 6E 74 65 6E 74 20 01 01
```


**Telegram structure: sWA compactTelegramType1Content**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 27 | | `compactTelegramType1Content` | `63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 31 43 6F 6E 74 65 6E 74` |

**Example: sWA compactTelegramType1Content**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}compactTelegramType1Content<ETX>
```

```text
02 73 57 41 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 31 43 6F 6E 74 65 6E 74 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 57 41 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 31 43 6F 6E 74 65 6E 74 43
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read compactTelegramType1Content [sRN compactTelegramType1Content]

</summary>

Returns the content of the Compact format telegram type 1 (e.g. whether to include the RSSI values).

**Telegram structure: sRN compactTelegramType1Content**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read request | String | 3 | | `sRN` | `73 52 4E` |
| Variable name | compactTelegramType1Content | String | 27 | | `compactTelegramType1Content` | `63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 31 43 6F 6E 74 65 6E 74` |

**Example: sRN compactTelegramType1Content**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}compactTelegramType1Content<ETX>
```

```text
<STX>sRN compactTelegramType1Content<ETX>
```

```text
sRN compactTelegramType1Content
```

```text
02 73 52 4E 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 31 43 6F 6E 74 65 6E 74 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 52 4E 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 31 43 6F 6E 74 65 6E 74 49
```

```text
73 52 4E 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 31 43 6F 6E 74 65 6E 74
```


**Telegram structure: sRA compactTelegramType1Content**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read answer | String | 3 | | `sRA` | `73 52 41` |
| Variable name | compactTelegramType1Content | String | 27 | | `compactTelegramType1Content` | `63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 31 43 6F 6E 74 65 6E 74` |
| includeRssi | If true, RSSIs are serialized | Bool_1 | 1 | Disabled:<br>Enabled: | `0<br>1` | `00<br>01` |
| includeProperties | If true, properties are serialized | Bool_1 | 1 | Disabled:<br>Enabled: | `0<br>1` | `00<br>01` |

**Example: sRA compactTelegramType1Content**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}compactTelegramType1Content{SPC}1{SPC}1<ETX>
```

```text
02 73 52 41 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 31 43 6F 6E 74 65 6E 74 20 31 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 22 73 52 41 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 31 43 6F 6E 74 65 6E 74 20 01 01 66
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Write ROS Parent Frame ID [sWN rosParentFrameId]

</summary>

Set the parent frame ID of the published topics.

**Telegram structure: sWN rosParentFrameId**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set parent frame ID of the published topics | String | 16 | | `rosParentFrameId` | `72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64` |
| Value | Number of characters of the parent frame id | Uint_16 | 1 | | `0d ... +16d (0h ... 10h` | `00 00 ... 00 10` |
| Value | Configured parent frame ID | FlexString | 64 | | `[Parent frame ID]` | `[Parent frame ID]` |

**Example: sWN rosParentFrameId**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}rosParentFrameId{SPC}5{SPC}world<ETX>
```

```text
<STX>sWN rosParentFrameId 5 world<ETX>
```

```text
sWN rosParentFrameId 5 world
```

```text
02 73 57 4E 20 72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64 20 2B 35 20 77 6F 72 6C 64 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 57 4E 20 72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64 20 00 05 77 6F 72 6C 64 2F
```

```text
73 57 4E 20 72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64 20 00 05 77 6F 72 6C 64
```


**Telegram structure: sWA rosParentFrameId**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set parent frame ID of the published topics | String | 16 | | `rosParentFrameId` | `72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64` |

**Example: sWA rosParentFrameId**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}rosParentFrameId<ETX>
```

```text
02 73 57 41 20 72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 57 41 20 72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64 20 47
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read ROS Parent Frame ID [sRN rosParentFrameId]

</summary>

Returns the parent frame ID of the published topics.

**Telegram structure: sRN rosParentFrameId**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read parent frame ID of the published topics | String | 16 | | `rosParentFrameId` | `72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64` |

**Example: sRN rosParentFrameId**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}rosParentFrameId<ETX>
```

```text
<STX>sRN rosParentFrameId<ETX>
```

```text
sRN rosParentFrameId
```

```text
02 73 52 4E 20 72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 4E 20 72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64 6D
```

```text
73 52 4E 20 72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64
```


**Telegram structure: sRA rosParentFrameId**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read parent frame ID of the published topics | String | 16 | | `rosParentFrameId` | `72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64` |
| Value | Number of characters of the parent frame id | Uint_16 | 2 | | `0d ... +16d (0h ... 10h` | `00 00 ... 00 10` |
| Value | Configured parent frame ID | FlexString | 64 | | `[Parent frame ID]` | `[Parent frame ID]` |

**Example: sRA rosParentFrameId**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}rosParentFrameId{SPC}5{SPC}world<ETX>
```

```text
02 73 52 41 20 72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64 20 35 20 77 6F 72 6C 64 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 52 41 20 72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64 20 00 05 77 6F 72 6C 64 25
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Write ROS Frame ID [sWN rosFrameId]

</summary>

Set the frame ID of the published topics.

**Telegram structure: sWN rosFrameId**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | ROS reference frame to use for data output | String | 10 | | `rosFrameId` | `72 6F 73 46 72 61 6D 65 49 64` |
| Value | Number of characters of the frame id | Uint_16 | 1 | | `0d ... +16d (0h ... 10h` | `00 00 ... 00 10` |
| Value | Configured Frame ID of the device | FlexString | 64 | | `[Frame ID]` | `[Frame ID]` |

**Example: sWN rosFrameId**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}rosFrameId{SPC}4{SPC}test<ETX>
```

```text
<STX>sWN rosFrameId 4 test<ETX>
```

```text
sWN rosFrameId 4 test
```

```text
02 73 57 4E 20 72 6F 73 46 72 61 6D 65 49 64 20 34 20 74 65 73 74 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 57 4E 20 72 6F 73 46 72 61 6D 65 49 64 20 00 04 74 65 73 74 66
```

```text
73 57 4E 20 72 6F 73 46 72 61 6D 65 49 64 20 00 04 74 65 73 74
```


**Telegram structure: sWA rosFrameId**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | ROS reference frame to use for data output | String | 10 | | `rosFrameId` | `72 6F 73 46 72 61 6D 65 49 64` |

**Example: sWA rosFrameId**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}rosFrameId<ETX>
```

```text
02 73 57 41 20 72 6F 73 46 72 61 6D 65 49 64 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 57 41 20 72 6F 73 46 72 61 6D 65 49 64 20 7B
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read ROS Frame ID [sRN rosFrameId]

</summary>

Returns the frame ID of the published topics.

**Telegram structure: sRN rosFrameId**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | ROS reference frame to use for data output | String | 10 | | `rosFrameId` | `72 6F 73 46 72 61 6D 65 49 64` |

**Example: sRN rosFrameId**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}rosFrameId<ETX>
```

```text
<STX>sRN rosFrameId<ETX>
```

```text
sRN rosFrameId
```

```text
02 73 52 4E 20 72 6F 73 46 72 61 6D 65 49 64 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 52 4E 20 72 6F 73 46 72 61 6D 65 49 64 51
```

```text
73 52 4E 20 72 6F 73 46 72 61 6D 65 49 64
```


**Telegram structure: sRA rosFrameId**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | ROS reference frame to use for data output | String | 10 | | `rosFrameId` | `73 57 4E 20 72 6F 73 46 72 61 6D 65 49 64` |
| Value | Number of characters of the frame id | Uint_16 | 1 | | `0d ... +16d (0h ... 10h` | `00 00 ... 00 10` |
| Value | Configured Frame ID of the device | FlexString | 64 | | `[Frame ID]` | `[Frame ID]` |

**Example: sRA rosFrameId - Frame ID is "picoScan_"**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}rosFrameId{SPC}9{SPC}picoScan_<ETX>
```

```text
02 73 52 41 20 72 6F 73 46 72 61 6D 65 49 64 20 39 20 70 69 63 6F 53 63 61 6E 5F 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1A 73 52 41 20 72 6F 73 46 72 61 6D 65 49 64 20 00 09 70 69 63 6F 53 63 61 6E 5F 02
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Write ROS Namespace [sWN rosNamespace]

</summary>

Adds a prefix to all ROS entities (topics, services, parameters).

**Telegram structure: sWN rosNamespace**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Sets the namespace of the published topics | String | 12 | | `rosNamespace` | `72 6F 73 4E 61 6D 65 73 70 61 63 65` |
| Value | Number of characters of the frame id | Uint_16 | 2 | | `0d ... +16d (0h ... 10h)` | `00 00 ... 00 10` |
| Value | Name | FlexString | 64 | | `[Namespace]` | `[Namespace]` |

**Example: sWN rosNamespace - Namespace is "rear_lidar"**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}rosNamespace{SPC}A{SPC}rear_lidar<ETX>
```

```text
<STX>sWN rosNamespace A rear_lidar<ETX>
```

```text
sWN rosNamespace A rear_lidar
```

```text
02 73 57 4E 20 72 6F 73 4E 61 6D 65 73 70 61 63 65 20 41 20 72 65 61 72 5F 6C 69 64 61 72 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1D 73 57 4E 20 72 6F 73 4E 61 6D 65 73 70 61 63 65 20 00 0A 72 65 61 72 5F 6C 69 64 61 72 64
```

```text
73 57 4E 20 72 6F 73 4E 61 6D 65 73 70 61 63 65 20 00 0A 72 65 61 72 5F 6C 69 64 61 72
```


**Telegram structure: sWA rosNamespace**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Sets the namespace of the published topics | String | 12 | | `rosNamespace` | `72 6F 73 4E 61 6D 65 73 70 61 63 65` |

**Example: sWA rosNamespace**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}rosNamespace<ETX>
```

```text
02 73 57 41 20 72 6F 73 4E 61 6D 65 73 70 61 63 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 57 41 20 72 6F 73 4E 61 6D 65 73 70 61 63 65 20 48
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read ROS Namespace [sRN rosNamespace]

</summary>

Returns the namespace of the published topics.

**Telegram structure: sRN rosNamespace**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Reads the namespace of the published topics | String | 12 | | `rosNamespace` | `72 6F 73 4E 61 6D 65 73 70 61 63 65` |

**Example: sRN rosNamespace**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}rosNamespace<ETX>
```

```text
<STX>sRN rosNamespace<ETX>
```

```text
sRN rosNamespace
```

```text
02 73 52 4E 20 72 6F 73 4E 61 6D 65 73 70 61 63 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 52 4E 20 72 6F 73 4E 61 6D 65 73 70 61 63 65 62
```

```text
73 52 4E 20 72 6F 73 4E 61 6D 65 73 70 61 63 65
```


**Telegram structure: sRA rosNamespace**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Reads the namespace of the published topics | String | 12 | | `rosNamespace` | `72 6F 73 4E 61 6D 65 73 70 61 63 65` |
| Value | Number of characters of the frame id | Uint_16 | 2 | | `0d ... +16d (0h ... 10h)` | `00 00 ... 00 10` |
| Value | Name | FlexString | 64 | | `[Namespace]` | `[Namespace]` |

**Example: sRA rosNamespace - Namespace is "rear_lidar"**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}rosNamespace{SPC}A{SPC}rear_lidar<ETX>
```

```text
02 73 52 41 20 72 6F 73 4E 61 6D 65 73 70 61 63 65 20 41 20 72 65 61 72 5F 6C 69 64 61 72 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1D 73 52 41 20 72 6F 73 4E 61 6D 65 73 70 61 63 65 20 00 0A 72 65 61 72 5F 6C 69 64 61 72 6E
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Configure the ROS Domain ID for Native ROS 2 [sWN rosDomainId]

</summary>

Configure the ROS domain ID for Native ROS 2.

**Telegram structure: sWN rosDomainId**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | rosDomainId | String | 11 | | `rosDomainId` | `72 6F 73 44 6F 6D 61 69 6E 49 64` |
| Value | ROS domain ID | UInt_8 | 1 | | `0` | `00` |

**Example: sWN rosDomainId**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}rosDomainId{SPC}0<ETX>
```

```text
<STX>sWN rosDomainId 0<ETX>
```

```text
sWN rosDomainId 0
```

```text
02 73 57 4E 20 72 6F 73 44 6F 6D 61 69 6E 49 64 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 57 4E 20 72 6F 73 44 6F 6D 61 69 6E 49 64 20 00 09
```

```text
73 57 4E 20 72 6F 73 44 6F 6D 61 69 6E 49 64 20 00
```


**Telegram structure: sWA rosDomainId**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 11 | | `rosDomainId` | `72 6F 73 44 6F 6D 61 69 6E 49 64` |

**Example: sWA rosDomainId**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}rosDomainId<ETX>
```

```text
02 73 57 41 20 72 6F 73 44 6F 6D 61 69 6E 49 64 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 57 41 20 72 6F 73 44 6F 6D 61 69 6E 49 64 26
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read the Configured ROS Domain ID Set for Native ROS 2 [sRN rosDomainId]

</summary>

Returns the configured ROS domain ID set for Native ROS 2.

**Telegram structure: sRN rosDomainId**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read request | String | 3 | | `sRN` | `73 52 4E` |
| Variable name | rosDomainId | String | 11 | | `rosDomainId` | `72 6F 73 44 6F 6D 61 69 6E 49 64` |

**Example: sRN rosDomainId**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}rosDomainId<ETX>
```

```text
<STX>sRN rosDomainId<ETX>
```

```text
sRN rosDomainId
```

```text
02 73 52 4E 20 72 6F 73 44 6F 6D 61 69 6E 49 64 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 4E 20 72 6F 73 44 6F 6D 61 69 6E 49 64 2C
```

```text
73 52 4E 20 72 6F 73 44 6F 6D 61 69 6E 49 64
```


**Telegram structure: sRA rosDomainId**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read answer | String | 3 | | `sRA` | `73 52 41` |
| Variable name | rosDomainId | String | 11 | | `rosDomainId` | `72 6F 73 44 6F 6D 61 69 6E 49 64` |
| Value | ROS domain ID | UInt_8 | 1 | | `0` | `00` |

**Example: sRA rosDomainId**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}rosDomainId{SPC}0<ETX>
```

```text
02 73 52 41 20 72 6F 73 44 6F 6D 61 69 6E 49 64 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 52 41 20 72 6F 73 44 6F 6D 61 69 6E 49 64 20 00 03
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set the Port Number for CoLa ASCII TCP/IP [sWN EIAuxPort]

</summary>

Set the port number for CoLa ASCII TCP/IP (e.g. LMDscandata).

**Telegram structure: sWN EIAuxPort**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | EIAuxPort | String | 9 | | `EIAuxPort` | `45 49 41 75 78 50 6F 72 74` |
| Value | TCP port for CoLa ASCII communication | UInt_16 | 2 | | `+2111` | `08 3F` |

**Example: sWN EIAuxPort**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EIAuxPort{SPC}+2111<ETX>
```

```text
<STX>sWN EIAuxPort +2111<ETX>
```

```text
sWN EIAuxPort +2111
```

```text
02 73 57 4E 20 45 49 41 75 78 50 6F 72 74 20 2B 32 31 31 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 57 4E 20 45 49 41 75 78 50 6F 72 74 20 08 3F 24
```

```text
73 57 4E 20 45 49 41 75 78 50 6F 72 74 20 08 3F
```


**Telegram structure: sWA EIAuxPort**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 9 | | `EIAuxPort` | `45 49 41 75 78 50 6F 72 74` |

**Example: sWA EIAuxPort**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}EIAuxPort<ETX>
```

```text
02 73 57 41 20 45 49 41 75 78 50 6F 72 74 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0D 73 57 41 20 45 49 41 75 78 50 6F 72 74 3C
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read the Port Number for CoLa ASCII TCP/IP [sRN EIAuxPort]

</summary>

Returns the port number for CoLa ASCII TCP/IP (e.g. LMDscandata).

**Telegram structure: sRN EIAuxPort**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read request | String | 3 | | `sRN` | `73 52 4E` |
| Variable name | EIAuxPort | String | 9 | | `EIAuxPort` | `45 49 41 75 78 50 6F 72 74` |

**Example: sRN EIAuxPort**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EIAuxPort<ETX>
```

```text
<STX>sRN EIAuxPort<ETX>
```

```text
sRN EIAuxPort
```

```text
02 73 52 4E 20 45 49 41 75 78 50 6F 72 74 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0D 73 52 4E 20 45 49 41 75 78 50 6F 72 74 36
```

```text
73 52 4E 20 45 49 41 75 78 50 6F 72 74
```


**Telegram structure: sRA EIAuxPort**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read answer | String | 3 | | `sRA` | `73 52 41` |
| Variable name | EIAuxPort | String | 9 | | `EIAuxPort` | `45 49 41 75 78 50 6F 72 74` |
| Value | TCP port for CoLa ASCII communication | UInt_16 | 2 | | `+2111` | `08 3F` |

**Example: sRA EIAuxPort**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EIAuxPort{SPC}83F<ETX>
```

```text
02 73 52 41 20 45 49 41 75 78 50 6F 72 74 20 38 33 46 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 52 41 20 45 49 41 75 78 50 6F 72 74 20 08 3F 2E
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set the Port Number for CoLa Binary TCP/IP [sWN EIHstPort]

</summary>

Set the port number for CoLa Binary TCP/IP (e.g. LMDscandata).

**Telegram structure: sWN EIHstPort**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | EIHstPort | String | 9 | | `EIHstPort` | `45 49 48 73 74 50 6F 72 74` |
| Value | TCP port for CoLa Binary communication | UInt_16 | 2 | | `+2112` | `08 40` |

**Example: sWN EIHstPort**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EIHstPort{SPC}+2112<ETX>
```

```text
<STX>sWN EIHstPort +2112<ETX>
```

```text
sWN EIHstPort +2112
```

```text
02 73 57 4E 20 45 49 48 73 74 50 6F 72 74 20 2B 32 31 31 32 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 57 4E 20 45 49 48 73 74 50 6F 72 74 20 08 40 58
```

```text
73 57 4E 20 45 49 48 73 74 50 6F 72 74 20 08 40
```


**Telegram structure: sWA EIHstPort**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 9 | | `EIHstPort` | `45 49 48 73 74 50 6F 72 74` |

**Example: sWA EIHstPort**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}EIHstPort<ETX>
```

```text
02 73 57 41 20 45 49 48 73 74 50 6F 72 74 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0D 73 57 41 20 45 49 48 73 74 50 6F 72 74 3F
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read the Port Number for CoLa Binary TCP/IP [sRN EIHstPort]

</summary>

Returns the port number for CoLa Binary TCP/IP (e.g. LMDscandata).

**Telegram structure: sRN EIHstPort**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read request | String | 3 | | `sRN` | `73 52 4E` |
| Variable name | EIHstPort | String | 9 | | `EIHstPort` | `45 49 48 73 74 50 6F 72 74` |

**Example: sRN EIHstPort**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EIHstPort<ETX>
```

```text
<STX>sRN EIHstPort<ETX>
```

```text
sRN EIHstPort
```

```text
02 73 52 4E 20 45 49 48 73 74 50 6F 72 74 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0D 73 52 4E 20 45 49 48 73 74 50 6F 72 74 35
```

```text
73 52 4E 20 45 49 48 73 74 50 6F 72 74
```


**Telegram structure: sRA EIHstPort**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read answer | String | 3 | | `sRA` | `73 52 41` |
| Variable name | EIHstPort | String | 9 | | `EIHstPort` | `45 49 48 73 74 50 6F 72 74` |
| Value | TCP port for CoLa Binary communication | UInt_16 | 2 | | `+2112` | `08 40` |

**Example: sRA EIHstPort**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EIHstPort{SPC}840<ETX>
```

```text
02 73 52 41 20 45 49 48 73 74 50 6F 72 74 20 38 34 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 52 41 20 45 49 48 73 74 50 6F 72 74 20 08 40 52
```

</details>

</section>

<section class="cola-category" markdown="1">

## IMU Data Output

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set IMU Data Enable [sWN ImuDataEnable]

</summary>

Enables/ Disables streaming IMU data output.

**Telegram structure: sWN ImuDataEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set streaming IMU data output. | String | 13 | | `ImuDataEnable` | `49 6D 75 44 61 74 61 45 6E 61 62 6C 65` |
| IMU data stream | Enable/ disable | Bool | 1 | Disable:<br>Enable: | `0d (00h)<br>+1d (01h)` | `00 ... 01` |

**Example: sWN ImuDataEnable 0 - Disable the streaming IMU data output**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}ImuDataEnable{SPC}0<ETX>
```

```text
<STX>sWN ImuDataEnable 0<ETX>
```

```text
sWN ImuDataEnable 0
```

```text
02 73 57 4E 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 4E 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 20 00 2A
```

```text
73 57 4E 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 20 00
```


**Telegram structure: sWA ImuDataEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set streaming IMU data output. | String | 13 | | `ImuDataEnable` | `49 6D 75 44 61 74 61 45 6E 61 62 6C 65` |

**Example: sWA ImuDataEnable**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}ImuDataEnable<ETX>
```

```text
02 73 57 41 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 57 41 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 20 25
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set IMU Data Streaming Ethernet Settings [sWN ImuDataEthSettings]

</summary>

Ethernet settings for the IMU data streaming functionality of the device

**Telegram structure: sWN ImuDataEthSettings**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set IMU data streaming ethernet settings | String | 18 | | `ImuDataEthSettings` | `49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |
| Protocol | Transport protocol for streaming IMU data | Enum_8 | 1 | UDP: | `+1d (01h)` | `01` |
| IP address | IP address of the destination for IMU data receiver | Array | 4 | | `0 …+255d (00…FF)<br>0 …+255d (00..FF)<br>0 …+255d (00…FF)<br>0 …+255d (00…FF)` | `00 … FF<br>00 … FF<br>00 … FF<br>00 … FF` |
| Port | Port destination of the IMU data reseiver | Uint_16 | 2 | | `0 .. +65535d(00 00…FF FF)` | `00 00 … FF FF` |

Example: sWN ImuDataEthSettings +1 +192 +168 +0 +100 +7503

Protocol is set to UDP (1), IPAddress (192.168.0.100), Port (7503)

**Example: sWN ImuDataEthSettings**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}ImuDataEthSettings{SPC}+1{SPC}+192{SPC}+168{SPC}+0{SPC}+100{SPC}+7503<ETX>
```

```text
<STX>sWN ImuDataEthSettings +1 +192 +168 +0 +100 +7503<ETX>
```

```text
sWN ImuDataEthSettings +1 +192 +168 +0 +100 +7503
```

```text
02 73 57 4E 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 31 20 43 30 20 41 38 20 30 20 36 34 20 31 44 34 46 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1E 73 57 4E 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 01 C0 A8 00 64 1D 4F 28
```

```text
73 57 4E 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 01 C0 A8 00 64 1D 4F
```


**Telegram structure: sWA ImuDataEthSettings**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set IMU data streaming ethernet settings | String | 18 | | `ImuDataEthSettings` | `49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |

**Example: sWA ImuDataEthSettings**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}ImuDataEthSettings<ETX>
```

```text
02 73 57 41 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 57 41 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 78
```

</details>

</section>

<section class="cola-category" markdown="1">

## Encoder Data Output

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Encoder Data Enable [sWN EncoderDataEnable]

</summary>

Enables/ Disables streaming Encoder data output.

**Telegram structure: sWN EncoderDataEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set streaming Encoder data output. | String | 17 | | `EncoderDataEnable` | `45 6E 63 6F 64 65 72 44 61 74 61 45 6E 61 62 6C 65` |
| Encoder data stream | Enable/ disable | Bool | 1 | Disable:<br>Enable: | `0d (00h)<br>+1d (01h)` | `00 ... 01` |

**Example: sWN EncoderDataEnable 0 - Disable the streaming Encoder data output**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EncoderDataEnable{SPC}0<ETX>
```

```text
<STX>sWN EncoderDataEnable 0<ETX>
```

```text
sWN EncoderDataEnable 0
```

```text
02 73 57 4E 20 45 6E 63 6F 64 65 72 44 61 74 61 45 6E 61 62 6C 65 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 57 4E 20 45 6E 63 6F 64 65 72 44 61 74 61 45 6E 61 62 6C 65 20 00 2F
```

```text
73 57 4E 20 45 6E 63 6F 64 65 72 44 61 74 61 45 6E 61 62 6C 65 20 00
```


**Telegram structure: sWA EncoderDataEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set streaming Encoder data output. | String | 17 | | `EncoderDataEnable` | `45 6E 63 6F 64 65 72 44 61 74 61 45 6E 61 62 6C 65` |

**Example: sWA EncoderDataEnable**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}EncoderDataEnable<ETX>
```

```text
02 73 57 41 20 45 6E 63 6F 64 65 72 44 61 74 61 45 6E 61 62 6C 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 57 41 20 45 6E 63 6F 64 65 72 44 61 74 61 45 6E 61 62 6C 65 20 20
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Encoder Data Streaming Ethernet Settings [sWN EncoderDataEthSettings]

</summary>

Ethernet settings for the encoder data streaming functionality of the device

**Telegram structure: sWN EncoderDataEthSettings**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set Encoder data streaming ethernet settings | String | 22 | | `EncoderDataEthSettings` | `45 6E 63 6F 64 65 72 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |
| Protocol | Transport protocol for streaming IMU data | Enum_8 | 1 | UDP: | `+1d (01h)` | `01` |
| IP address | IP address of the destination for IMU data receiver | Array | 4 | | `0 …+255d (00…FF)<br>0 …+255d (00..FF)<br>0 …+255d (00…FF)<br>0 …+255d (00…FF)` | `00 … FF<br>00 … FF<br>00 … FF<br>00 … FF` |
| Port | Port destination of the Encoder data reseiver | Uint_16 | 2 | | `0 .. +65535d(00 00…FF FF)` | `00 00 … FF FF` |

Example: sWN EncoderDataEthSettings +1 +192 +168 +0 +100 +7503

Protocol is set to UDP (1), IPAddress (192.168.0.100), Port (7503)

**Example: sWN EncoderDataEthSettings**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EncoderDataEthSettings{SPC}+1{SPC}+192{SPC}+168{SPC}+0{SPC}+100{SPC}+7503<ETX>
```

```text
<STX>sWN EncoderDataEthSettings +1 +192 +168 +0 +100 +7503<ETX>
```

```text
sWN EncoderDataEthSettings +1 +192 +168 +0 +100 +7503
```

```text
02 73 57 4E 20 45 6E 63 6F 64 65 72 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 31 20 43 30 20 41 38 20 30 20 36 34 20 31 44 34 46 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 22 73 57 4E 20 45 6E 63 6F 64 65 72 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 01 C0 A8 00 64 1D 4F 2D
```

```text
73 57 4E 20 45 6E 63 6F 64 65 72 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 01 C0 A8 00 64 1D 4F
```


**Telegram structure: sWA EncoderDataEthSettings**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set Encoder data streaming ethernet settings | String | 22 | | `EncoderDataEthSettings` | `45 6E 63 6F 64 65 72 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |

**Example: sWA EncoderDataEthSettings**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}EncoderDataEthSettings<ETX>
```

```text
02 73 57 41 20 45 6E 63 6F 64 65 72 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 57 41 20 45 6E 63 6F 64 65 72 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 7D
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Encoder Settings [sWN LICencset]

</summary>

Define if and which type of encoder is connected to the device so that input signals are processed correctly.

**Telegram structure: sWN LICencset**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Encoder settings | String | 9 | | `LICencset` | `4C 49 43 65 6E 63 73 65 74` |
| Encoder setting | | Enum_8 | 1 | Off:<br>Single increment/INC1:<br>Direction recognition (phase):<br>Direction recognition (level):<br>Fixed speed: | `0<br>1<br>2<br>3<br>4` | `00<br>01<br>02<br>03<br>04` |

**Example: sWN LICencset**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LICencset{SPC}0<ETX>
```

```text
<STX>sWN LICencset 0<ETX>
```

```text
sWN LICencset 0
```

```text
02 73 57 4E 20 4C 49 43 65 6E 63 73 65 74 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 57 4E 20 4C 49 43 65 6E 63 73 65 74 20 00 26
```

```text
73 57 4E 20 4C 49 43 65 6E 63 73 65 74 20 00
```


**Telegram structure: sWA LICencset**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Encoder settings | String | 9 | | `LICencset` | `4C 49 43 65 6E 63 73 65 74` |

**Example: sWA LICencset**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LICencset<ETX>
```

```text
02 73 57 41 20 4C 49 43 65 6E 63 73 65 74 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 57 41 20 4C 49 43 65 6E 63 73 65 74 20 29
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Encoder Resolution [sWN LICencres]

</summary>

Determine the encoder resolution in mm/increment.

**Telegram structure: sWN LICencres**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set encoder resolution | String | 9 | | `LICencres` | `4C 49 43 65 6E 63 72 65 73` |
| Encoder resolution | Resolution value in mm/Inc as float according to IEEE754 | Real | 4 | | `+0.001d … +2000d` | `3A 83 12 6F … 44 FA 00 00<br>(see IEEE 754)` |

**Example: sWN LICencres**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LICencres{SPC}+1000<ETX>
```

```text
<STX>sWN LICencres +1000<ETX>
```

```text
sWN LICencres +1000
```

```text
02 73 57 4E 20 4C 49 43 65 6E 63 72 65 73 20 2B 31 30 30 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 57 4E 20 4C 49 43 65 6E 63 72 65 73 20 44 7A 00 00 1E
```

```text
73 57 4E 20 4C 49 43 65 6E 63 72 65 73 20 44 7A 00 00
```


**Telegram structure: sWA LICencres**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set encoder resolution | String | 9 | | `LICencres` | `4C 49 43 65 6E 63 72 65 73` |

**Example: sWA LICencres**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LICencres<ETX>
```

```text
02 73 57 41 20 4C 49 43 65 6E 63 72 65 73 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 57 41 20 4C 49 43 65 6E 63 72 65 73 20 2F
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Reset Encoder Values [sMN LIDrstencoderinc]

</summary>

Reset current encoder tick value to 0.

**Telegram structure: sMN LIDrstencoderinc**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Reset Encoder values | String | 16 | | `LIDrstencoderinc` | `4C 49 44 72 73 74 65 6E 63 6F 64 65 72 69 6E 63` |

**Example: sMN LIDrstencoderinc**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}LIDrstencoderinc<ETX>
```

```text
<STX>sMN LIDrstencoderinc<ETX>
```

```text
sMN LIDrstencoderinc
```

```text
02 73 4D 4E 20 4C 49 44 72 73 74 65 6E 63 6F 64 65 72 69 6E 63 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 4D 4E 20 4C 49 44 72 73 74 65 6E 63 6F 64 65 72 69 6E 63 74
```

```text
73 4D 4E 20 4C 49 44 72 73 74 65 6E 63 6F 64 65 72 69 6E 63
```


**Telegram structure: sAN LIDrstencoderinc**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Reset Encoder values | String | 16 | | `LIDrstencoderinc` | `4C 49 44 72 73 74 65 6E 63 6F 64 65 72 69 6E 63` |
| Reset status | | Bool_1 | 1 | Successful<br>Failure/ Insufficient user level | `0<br>1` | `00<br>01` |

**Example: sAN LIDrstencoderinc**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}LIDrstencoderinc{SPC}0<ETX>
```

```text
02 73 41 4E 20 4C 49 44 72 73 74 65 6E 63 6F 64 65 72 69 6E 63 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 41 4E 20 4C 49 44 72 73 74 65 6E 63 6F 64 65 72 69 6E 63 20 00 58
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Enable Encoder Reference Input 1 Signal [sWN LICpos1enable]

</summary>

This command enables the encoder reference input signal.

**Telegram structure: sWN LICpos1enable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Enable encoder reference input signal | String | 13 | | `LICpos1enable` | `4C 49 43 70 6F 73 31 65 6E 61 62 6C 65` |
| Variable Data | Disable/ enable | Bool_1 | 1 | Disable:<br>Enable: | `0d (00h)<br>+1d (01h)` | `00<br>01` |

**Example: sWN LICpos1enable - Enable reference input signal**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LICpos1enable{SPC}1<ETX>
```

```text
<STX>sWN LICpos1enable 1<ETX>
```

```text
sWN LICpos1enable 1
```

```text
02 73 57 4E 20 4C 49 43 70 6F 73 31 65 6E 61 62 6C 65 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 4E 20 4C 49 43 70 6F 73 31 65 6E 61 62 6C 65 20 01 71
```

```text
73 57 4E 20 4C 49 43 70 6F 73 31 65 6E 61 62 6C 65 20 01
```


**Telegram structure: sWA LICpos1enable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Enable encoder reference input signal | String | 13 | | `LICpos1enable` | `4C 49 43 70 6F 73 31 65 6E 61 62 6C 65` |

**Example: sWA LICpos1enable**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LICpos1enable<ETX>
```

```text
02 73 57 41 20 4C 49 43 70 6F 73 31 65 6E 61 62 6C 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 57 41 20 4C 49 43 70 6F 73 31 65 6E 61 62 6C 65 20 7F
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Encoder Reference Input 1 Signal [sRN LICpos1enable]

</summary>

This command reads the state (enabled/ disabled) of the encoder reference input signal.

**Telegram structure: sRN LICpos1enable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Enable encoder reference input signal | String | 13 | | `LICpos1enable` | `4C 49 43 70 6F 73 31 65 6E 61 62 6C 65` |

**Example: sRN LICpos1enable**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LICpos1enable<ETX>
```

```text
<STX>sRN LICpos1enable<ETX>
```

```text
sRN LICpos1enable
```

```text
02 73 52 4E 20 4C 49 43 70 6F 73 31 65 6E 61 62 6C 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 52 4E 20 4C 49 43 70 6F 73 31 65 6E 61 62 6C 65 55
```

```text
73 52 4E 20 4C 49 43 70 6F 73 31 65 6E 61 62 6C 65
```


**Telegram structure: sRA LICpos1enable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Enable encoder reference input signal | String | 13 | | `LICpos1enable` | `4C 49 43 70 6F 73 31 65 6E 61 62 6C 65` |
| Variable Data | Disabled/ enabled | Bool_1 | 1 | Disabled:<br>Enabled: | `0d (00h)<br>+1d (01h)` | `00<br>01` |

**Example: sRA LICpos1enable - Encoder reference input signal is enabled**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LICpos1enable{SPC}1<ETX>
```

```text
02 73 52 41 20 4C 49 43 70 6F 73 31 65 6E 61 62 6C 65 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 41 20 4C 49 43 70 6F 73 31 65 6E 61 62 6C 65 20 01 7B
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Enable Encoder Reference Input 2 Signal [sWN LICpos2enable]

</summary>

This command enables the encoder reference input signal.

**Telegram structure: sWN LICpos2enable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Enable encoder reference input signal | String | 13 | | `LICpos2enable` | `4C 49 43 70 6F 73 32 65 6E 61 62 6C 65` |
| Variable Data | Disable/ enable | Bool_1 | 1 | Disable:<br>Enable: | `0d (00h)<br>+1d (01h)` | `00<br>01` |

**Example: sWN LICpos2enable - Enable reference input signal**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LICpos2enable{SPC}1<ETX>
```

```text
<STX>sWN LICpos2enable 1<ETX>
```

```text
sWN LICpos2enable 1
```

```text
02 73 57 4E 20 4C 49 43 70 6F 73 32 65 6E 61 62 6C 65 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 4E 20 4C 49 43 70 6F 73 32 65 6E 61 62 6C 65 20 01 72
```

```text
73 57 4E 20 4C 49 43 70 6F 73 32 65 6E 61 62 6C 65 20 01
```


**Telegram structure: sWA LICpos2enable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Enable encoder reference input signal | String | 13 | | `LICpos2enable` | `4C 49 43 70 6F 73 32 65 6E 61 62 6C 65` |

**Example: sWA LICpos2enable**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LICpos2enable<ETX>
```

```text
02 73 57 41 20 4C 49 43 70 6F 73 32 65 6E 61 62 6C 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 57 41 20 4C 49 43 70 6F 73 32 65 6E 61 62 6C 65 20 7C
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Encoder Reference Input 2 Signal [sRN LICpos2enable]

</summary>

This command reads the state (enabled/ disabled) of the encoder reference input signal.

**Telegram structure: sRN LICpos2enable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Enable encoder reference input signal | String | 13 | | `LICpos2enable` | `4C 49 43 70 6F 73 32 65 6E 61 62 6C 65` |

**Example: sRN LICpos2enable**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LICpos2enable<ETX>
```

```text
<STX>sRN LICpos2enable<ETX>
```

```text
sRN LICpos2enable
```

```text
02 73 52 4E 20 4C 49 43 70 6F 73 32 65 6E 61 62 6C 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 52 4E 20 4C 49 43 70 6F 73 32 65 6E 61 62 6C 65 56
```

```text
73 52 4E 20 4C 49 43 70 6F 73 32 65 6E 61 62 6C 65
```


**Telegram structure: sRA LICpos2enable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Enable encoder reference input signal | String | 13 | | `LICpos2enable` | `4C 49 43 70 6F 73 32 65 6E 61 62 6C 65` |
| Variable Data | Disabled/ enabled | Bool_1 | 1 | Disabled:<br>Enabled: | `0d (00h)<br>+1d (01h)` | `00<br>01` |

**Example: sRA LICpos2enable - Encoder reference input signal is enabled**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LICpos2enable{SPC}1<ETX>
```

```text
02 73 52 41 20 4C 49 43 70 6F 73 32 65 6E 61 62 6C 65 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 41 20 4C 49 43 70 6F 73 32 65 6E 61 62 6C 65 20 01 78
```

</details>

</section>

<section class="cola-category" markdown="1">

## Data Reduction

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Angle Range Filter [sWN LFPangleRangeFilter]

</summary>

The angle range filter set up the horizontal (theta) and vertical (phi) start- and stop angle in rad.

BeamIncrement = the 'beamIncrement' which is used to subsample the beams within the selected angle range. With a 'beamIncrement' of n only every nth beam from the selected angle range is copied to the output scan, i.e. the angle resolution is reduced by factor n. If the beamIncrement is zero it is set to one.

**Telegram structure: sWN LFPangleRangeFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | filter set up the horizontal (theta) and vertical (phi) start- and stop angle in rad | String | 19 | | `LFPangleRangeFilter` | `4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72` |
| Variable Data 1 | Enables/Disables the filter | Bool_1 | 1 | Off:<br>On: | `+0d<br>+1d` | `00<br>01` |
| Variable Data 2 | ThetaStart | Real | 4 | No impact on sensor setting but needs to be filled (see example) | `-1,800,000d ... +1,800,000d (FFE488C0 ... 001B7740h)` | `FF E4 88 C0 … 00 1B 77 40` |
| Variable Data 3 | ThetaStop | Real | 4 | No impact on sensor setting but needs to be filled (see example) | `-1,800,000d ... +1,800,000d (FFE488C0 ... 001B7740h)` | `FF E4 88 C0 … 00 1B 77 40` |
| Variable Data 4 | PhiStart | Real | 4 | No impact on sensor setting but needs to be filled (see example) | `-900,000d ... +900,000d (FFF24460 ... 000DBBA0h)` | `FF F2 44 60 … 00 0D BB A0` |
| Variable Data 5 | PhiStop | Real | 4 | No impact on sensor setting but needs to be filled (see example) | `-900,000d ... +900,000d (FFF24460 ... 000DBBA0h)` | `FF F2 44 60 … 00 0D BB A0` |
| Variable Data 6 | BeamIncrement | UInt_16 | 2 | No impact on sensor setting but needs to be filled (see example) | `1d…+20d` | `00 01 … 00 14` |

Explanation: Enable the angle range filter and set up theta (horizontal) start -90°, theta stop +90°, phi (vertical) start -90°, phi stop +90°, beam increment 1

**Example: sWN LFPangleRangeFilter**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LFPangleRangeFilter{SPC}1{SPC}-900000{SPC}+900000{SPC}-900000{SPC}+900000{SPC}1<ETX>
```

```text
<STX>sWN LFPangleRangeFilter 1 -900000 +900000 -900000 +900000 1<ETX>
```

```text
sWN LFPangleRangeFilter 1 -900000 +900000 -900000 +900000 1
```

```text
02 73 57 4E 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 20 31 20 2D 39 30 30 30 30 30 20 2B 39 30 30 30 30 30 20 2D 39 30 30 30 30 30 20 2B 39 30 30 30 30 30 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2B 73 57 4E 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 20 01 FF F2 44 60 00 0D BB A0 FF F2 44 60 00 0D BB A0 00 01 2E
```

```text
73 57 4E 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 20 01 FF F2 44 60 00 0D BB A0 FF F2 44 60 00 0D BB A0 00 01
```


**Telegram structure: sWA LFP AngleRangeFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | filter set up the horizontal (theta) and vertical (phi) start- and stop angle in rad | String | 19 | | `LFPangleRangeFilter` | `4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72` |

**Example: sWA LFPangleRangeFilter**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LFPangleRangeFilter<ETX>
```

```text
02 73 57 41 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 18 73 57 41 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 20 21
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Angle Range Filter [sRN LFPangleRangeFilter]

</summary>

The angle range filter set up the horizontal (theta) and vertical (phi) start- and stop angle in rad.

BeamIncrement = the 'beamIncrement' which is used to subsample the beams within the selected angle range. With a 'beamIncrement' of n only every nth beam from the selected angle range is copied to the output scan, i.e. the angle resolution is reduced by factor n. If the beamIncrement is zero it is set to one.

**Telegram structure: sRN LFPangleRangeFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | filter set up the horizontal (theta) and vertical (phi) start- and stop angle in rad | String | 19 | | `LFPangleRangeFilter` | `4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72` |

**Example: sRN LFPangleRangeFilter**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LFPangleRangeFilter<ETX>
```

```text
02 73 52 4E 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 52 4E 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 0B
```


**Telegram structure: sRA LFP AngleRangeFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | filter set up the horizontal (theta) and vertical (phi) start- and stop angle in rad | String | 19 | | `LFPangleRangeFilter` | `4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72` |
| Variable Data 1 | Enables/Disables the filter | Bool_1 | 1 | Off:<br>On: | `+0d<br>+1d` | `00<br>01` |
| Variable Data 2 | ThetaStart | Real | 4 | No impact on sensor setting | `-1,800,000d ... +1,800,000d (FFE488C0 ... 001B7740h)` | `FF E4 88 C0 … 00 1B 77 40` |
| Variable Data 3 | ThetaStop | Real | 4 | No impact on sensor setting | `-1,800,000d ... +1,800,000d (FFE488C0 ... 001B7740h)` | `FF E4 88 C0 … 00 1B 77 40` |
| Variable Data 4 | PhiStart | Real | 4 | No impact on sensor setting | `-900,000d ... +900,000d (FFF24460 ... 000DBBA0h)` | `FF F2 44 60 … 00 0D BB A0` |
| Variable Data 5 | PhiStop | Real | 4 | No impact on sensor setting | `-900,000d ... +900,000d (FFF24460 ... 000DBBA0h)` | `FF F2 44 60 … 00 0D BB A0` |
| Variable Data 6 | BeamIncrement | UInt_16 | 2 | No impact on sensor setting | `1d…+20d` | `00 01 … 00 14` |

Explanation: Angle range filter enabled and set up theta (horizontal) start -90°, theta stop +90°, phi (vertical) start -90°, phi stop +90°, beam increment 1

**Example: sRA LFPangleRangeFilter**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LFPangleRangeFilter{SPC}1{SPC}FFF24460{SPC}DBBA0{SPC}FFF24460{SPC}DBBA0{SPC}1<ETX>
```

```text
<STX>sRA LFPangleRangeFilter 1 FFF24460 DBBA0 FFF24460 DBBA0 1<ETX>
```

```text
sRA LFPangleRangeFilter 1 FFF24460 DBBA0 FFF24460 DBBA0 1
```

```text
02 73 52 41 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 20 31 20 46 46 46 32 34 34 36 30 20 44 42 42 41 30 20 46 46 46 32 34 34 36 30 20 44 42 42 41 30 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2B 73 52 41 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 20 01 FF F2 44 60 00 0D BB A0 FF F2 44 60 00 0D BB A0 00 01 24
```

```text
73 52 41 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 20 01 FF F2 44 60 00 0D BB A0 FF F2 44 60 00 0D BB A0 00 01
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Interval Filter [sWN LFPintervalFilter]

</summary>

Enables and set up the interval filter. The interval filter reduce the scan output rate by a given factor.

**Telegram structure: sWN LFPintervalFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Reduce the scan output rate by a given factor | String | 17 | | `LFPintervalFilter` | `4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72` |
| Variable data 1 | Enables/Disables the filter. | Bool | 1 | Off:<br>On: | `0d (00h)<br>+1d (01h)` | `00<br>01` |
| Variable Data 2 | Only every nth scan is output where n is given by<br>the value of uiReductionFactor. | Uint_32 | 4 | | `1d…+50d<br>(00 00 00 01h … 00 00 00 32h)` | `00 00 00 01 … 00 00 00 32` |

Enables the interval filter an set up to the 3rd scan

**Example: sWN LFPintervalFilter**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LFPintervalFilter{SPC}1{SPC}3<ETX>
```

```text
<STX>sWN LFPintervalFilter 1 3<ETX>
```

```text
sWN LFPintervalFilter 1 3
```

```text
02 73 57 4E 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 20 31 20 33 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 57 4E 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 20 01 00 00 00 03 0D
```

```text
73 57 4E 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 20 01 00 00 00 03
```


**Telegram structure: sWA LFPintervalFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Reduce the scan output rate by a given factor | String | 17 | | `LFPintervalFilter` | `4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72` |

**Example: sWA LFPintervalFilter**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LFPintervalFilter<ETX>
```

```text
02 73 57 41 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 57 41 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 20 00
```

</details>

</section>

<section class="cola-category" markdown="1">

## Range Filter

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Rectangular Filter [sWN LFPcubicareafilter]

</summary>

**Telegram structure: sWN LFPcubicareafilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | CubicAreaFilter limits a polar scan to a axisparallel cube | String | 18 | | `LFPcubicareafilter` | `4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72` |
| Variable data 1 | Enables/Disables the filter. | Bool | 1 | Off:<br>On: | `0d<br>1d` | `00<br>01` |
| Variable Data 2 | X min<br>1/10 mm | Int_32 | 4 | | `-200000d…+200000d` | `FF FF B1 E0 … 00 00 4E 20` |
| Variable Data 3 | X max<br>1/10 mm | Int_32 | 4 | | `-200000d…+200000d` | `FF FF B1 E0 … 00 00 4E 20` |
| Variable Data 4 | Y min<br>1/10 mm | Int_32 | 4 | | `-200000d…+200000d` | `FF FF B1 E0 … 00 00 4E 20` |
| Variable Data 5 | Y max<br>1/10 mm | Int_32 | 4 | | `-200000d…+200000d` | `FF FF B1 E0 … 00 00 4E 20` |
| Variable Data 6 | Z min<br>1/10 mm | Int_32 | 4 | Other values than 0 will be ignored | `0` | `00 00 00 00` |
| Variable Data 7 | Z max<br>1/10 mm | Int_32 | 4 | Other values than 0 will be ignored | `0` | `00 00 00 00` |

**Example: sWN LFPcubicAreafilter**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LFPcubicareafilter{SPC}0{SPC}FFFFB1E0{SPC}4E20{SPC}FFFFB1E0{SPC}4E20{SPC}FFFFB1E0{SPC}4E20<ETX>
```

```text
<STX>sWN LFPcubicareafilter 0 FFFFB1E0 4E20 FFFFB1E0 4E20 FFFFB1E0 4E20<ETX>
```

```text
sWN LFPcubicareafilter 0 FFFFB1E0 4E20 FFFFB1E0 4E20 FFFFB1E0 4E20
```

```text
02 73 57 4E 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72 20 30 20 46 46 46 46 42 31 45 30 20 34 45 32 30 20 46 46 46 46 42 31 45 30 20 34 45 32 30 20 46 46 46 46 42 31 45 30 20 34 45 32 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 30 73 57 4E 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72 20 00 FF FF B1 E0 00 00 4E 20 FF FF B1 E0 00 00 4E 20 FF FF B1 E0 00 00 4E 20 66
```

```text
73 57 4E 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72 20 00 FF FF B1 E0 00 00 4E 20 FF FF B1 E0 00 00 4E 20 FF FF B1 E0 00 00 4E 20
```


**Telegram structure: sWA LFPcubicareafilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | CubicAreaFilter limits a polar scan to a axisparallel cube | String | 18 | | `LFPcubicareafilter` | `4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72` |

**Example: sWA LFPcubicareafilter**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LFPcubicareafilter<ETX>
```

```text
02 73 57 41 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 57 41 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72 20 56
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Radial Distance Range Filter [sWN LFPradialDistanceRangeFilter]

</summary>

Restriction of the scan(s) to a specified distance range.

**Telegram structure: sWN LFPradialDistanceRangeFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Restriction of the scan(s) to a specified distance range. | String | 28 | | `LFPradialDistanceRangeFilter` | `4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72` |
| Variable Data 1 | Enables/Disables the filter. | Bool_1 | 1 | Off:<br>On: | `0d (0h)<br>1d (1h)` | `00<br>01` |
| DistMin | Lower boundary of the distance range. | Int_32 | 4 | Minimum:<br>Maximum: | `+0d (0h)<br>+200000d (30D40h)` | `00 00 00 00<br>00 03 0D 40` |
| DistMax | Upper boundary of the distance range. | Int_32 | 4 | Minimum:<br>Maximum: | `+0d (0h)<br>+200000d (30D40h)` | `00 00 00 00<br>00 03 0D 40` |

Disable the radial distance range filter and set up the boundaries to min 0mm and max 200000mm.

**Example: sWN LFPradialDistanceRangeFilter**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LFPradialDistanceRangeFilter{SPC}0{SPC}0{SPC}30D40<ETX>
```

```text
<STX>sWN LFPradialDistanceRangeFilter 0 0 30D40<ETX>
```

```text
sWN LFPradialDistanceRangeFilter 0 0 30D40
```

```text
02 73 57 4E 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 20 30 20 30 20 33 30 44 34 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2A 73 57 4E 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 20 00 00 00 00 00 00 03 0D 40 31
```

```text
73 57 4E 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 20 00 00 00 00 00 00 03 0D 40
```


**Telegram structure: sWA LFPradialDistanceRangeFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Restriction of the scan(s) to a specified distance range. | String | 28 | | `LFPradialDistanceRangeFilter` | `4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72` |

**Example: sWA LFPradialDistanceRangeFilter**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LFPradialDistanceRangeFilter<ETX>
```

```text
02 73 57 41 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 21 73 57 41 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 20 70
```

</details>

</section>

<section class="cola-category" markdown="1">

## Field Evaluation

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Activation of Evaluation Group [sMN ActivateEvaluationGroup]

</summary>

The telegram is intended to activate or deactivate groups via telegram. The group activation needs to be changed from always to telegram in advance.

**Telegram structure: sMN ActivateEvaluationGroup**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Activate / deactivate evaluation group | String | 23 | | `ActivateEvaluationGroup` | `41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70` |
| Amount of evaluation groups to activate/ deactivate | Array | Uint_16 | 2 | Each array element contains two parameters:Evaluation group numberDeactivation / activation of evaluation group | `1d ... 48d (1 ... 30h)` | `00 01 … 00 30` |
| Evaluation group number | Evaluation group 1 | UInt_16 | 2 | | `1` | `00 01` |
| Deactivation / activation of evaluation group | Activate / deactivate evaluation group 1 | Bool_1 | 1 | Deactivate:<br>Activate: | `0<br>1` | `00<br>01` |
| Evaluation group number | Evaluation group 2 | UInt_16 | 2 | | `2` | `00 02` |
| Activate/ deactivate evaluation group | Activate / deactivate evaluation group 2 | Bool_1 | 1 | Deactivate:<br>Activate: | `0<br>1` | `00<br>01` |
| ... | | | | | | |
| Evaluation group number | Evaluation group 48 | UInt_16 | 2 | | `48d (30h)` | `00 30` |
| Activate/ deactivate evaluation group | Activate / deactivate evaluation group 48 | Bool_1 | 1 | Deactivate:<br>Activate: | `0<br>1` | `00<br>01` |

**Example1: sMN ActivateEvaluationGroup - Deactivate evaluation group 1 and 10**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}ActivateEvaluationGroup{SPC}2{SPC}1{SPC}0{SPC}+10{SPC}0<ETX>
```

```text
<STX>sMN ActivateEvaluationGroup 2 1 0 +10 0<ETX>
```

```text
sMN ActivateEvaluationGroup 2 1 0 +10 0
```

```text
02 73 4D 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 32 20 31 20 30 20 2B 31 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 24 73 4D 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 00 02 00 01 00 00 0A 00 29
```

```text
73 4D 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 00 02 00 01 00 00 0A 00
```


**Example2: sMN ActivateEvaluationGroup - Deactivate evaluation group 1 and 10, activate evaluation group 2 and 3**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}ActivateEvaluationGroup{SPC}4{SPC}1{SPC}0{SPC}+10{SPC}0{SPC}2{SPC}1{SPC}3{SPC}1<ETX>
```

```text
<STX>sMN ActivateEvaluationGroup 4 1 0 +10 0 2 1 3 1<ETX>
```

```text
sMN ActivateEvaluationGroup 4 1 0 +10 0 2 1 3 1
```

```text
02 73 4D 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 34 20 31 20 30 20 2B 31 30 20 30 20 32 20 31 20 33 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2A 73 4D 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 00 04 00 01 00 00 0A 00 00 02 01 00 03 01 2E
```

```text
73 4D 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 00 04 00 01 00 00 0A 00 00 02 01 00 03 01
```


**Telegram structure: sAN ActivateEvaluationGroup**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 52 41` |
| Command | Activate / deactivate evaluation group | String | 23 | | `ActivateEvaluationGroup` | `41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70` |
| Amount of activated/deactivated evaluation groups | - | UInt_16 | 2 | | `1h... 30h` | `00 01 … 00 30` |
| State of activation / deactivation | - | Bool_1 | 1 | Activation/Deactivation failed:<br>Successfully activated/deactivated: | `0<br>1` | `00<br>01` |

**Example 1: sAN ActivateEvaluationGroup - Successfully deactivated evaluation group 1**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}ActivateEvaluationGroup{SPC}1{SPC}1<ETX>
```

```text
02 73 41 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 31 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 41 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 00 01 01 2C
```


**Example 2: sAN ActivateEvaluationGroup - Successfully deactivated evaluation group 1, successfully activated evaluation group 2, failed activation of evaluation group 3**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}ActivateEvaluationGroup{SPC}3{SPC}1{SPC}1{SPC}0<ETX>
```

```text
02 73 41 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 33 20 31 20 31 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 21 73 41 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 00 03 01 01 00 2F
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Evaluation Group Type [sRN EvaluationGroupType]

</summary>

Array with the type of each group, either perpendicular distance or field evaluation.

**Telegram structure: sRN EvaluationGroupType**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | | String | 19 | | `EvaluationGroupType` | `45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65` |

**Example: sRN EvaluationGroupType**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EvaluationGroupType<ETX>
```

```text
<STX>sRN EvaluationGroupType<ETX>
```

```text
sRN EvaluationGroupType
```

```text
02 73 52 4E 20 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 52 4E 20 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65 1E
```

```text
73 52 4E 20 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65
```


**Telegram structure: sRA EvaluationGroupType**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | | String | 19 | | `EvaluationGroupType` | `45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65` |
| Data | Type of evaluation group | Array | 48 | Field evaluation:<br>Perpendicular distance: | `0d (00h)<br>+1d (01h)` | `00<br>01` |

**Example: sRA EvaluationGroupType - 3rd group is set as perpendicular distance**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EvaluationGroupType{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65 20 30 20 30 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 48 73 52 41 20 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65 20 00 00 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 30
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Field Evaluation Contour [sMN SetFieldEvaluationContour]

</summary>

This telegram can be used to change or reshape the contour/ polygon of an already defined field. It´s possible to add additional points.

**Telegram structure: sMN SetFieldEvaluationContour**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Set the region of interest of an object detection evaluation | String | 25 | | `SetFieldEvaluationContour` | `53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |
| Evaluation ID | Specific ID of the evaluation that is to be changed | UInt_16 | 2 | | `+1d ... +48d (1h ... 30h)` | `00 01 … 00 30` |
| Amount of polygon vertices | E. g. triangle = 3, square = 4 | Array | 3 ... 100 | | `+3d ... +800d (3h ... 320h)` | `00 03... 03 20` |
| Polygon vertex | Coordinates of first polygon vertex in mm | Dint_32 | 4 | X coordinate: | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0` |
| Polygon vertex | Coordinates of first polygon vertex in mm | Dint_32 | 4 | Y coordinate: | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0` |
| Polygon vertex | Coordinates of second polygon vertex in mm | Dint_32 | 4 | X coordinate: | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0` |
| Polygon vertex | Coordinates of second polygon vertex in mm | Dint_32 | 4 | Y coordinate: | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0` |
| ... | | | | | | |
| Polygon vertex | Coordinates of last polygon vertex in mm | Dint_32 | 4 | X coordinate: | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0` |
| Polygon vertex | Coordinates of last polygon vertex in mm | Dint_32 | 4 | Y coordinate: | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0` |
| Lower Z limit | Lower bound of extrusion in Z direction | Dint_32 | 4 | Must be:<br>(Other values than 0 will lead to an error) | `0` | `00 00 00 00` |
| Upper Z limit | Upper bound of extrusion in Z direction | Dint_32 | 4 | Must be:<br>(Other values than 0 will lead to an error) | `0` | `00 00 00 00` |

**Example: sMN SetFieldEvaluationContour**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}SetFieldEvaluationContour{SPC}1{SPC}4{SPC}+2000{SPC}+1000{SPC}+0{SPC}+1000{SPC}+0{SPC}+0{SPC}+2000{SPC}+0{SPC}+0{SPC}+0<ETX>
```

```text
<STX>sMN SetFieldEvaluationContour 1 4 +2000 +1000 +0 +1000 +0 +0 +2000 +0 +0 +0<ETX>
```

```text
sMN SetFieldEvaluationContour 1 4 +2000 +1000 +0 +1000 +0 +0 +2000 +0 +0 +0
```

```text
02 73 4D 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 31 20 34 20 2B 32 30 30 30 20 2B 31 30 30 30 20 2B 30 20 2B 31 30 30 30 20 2B 30 20 2B 30 20 2B 32 30 30 30 20 2B 30 20 2B 30 20 2B 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4A 73 4D 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 00 04 00 00 07 D0 00 00 03 E8 00 00 00 00 00 00 03 E8 00 00 00 00 00 00 00 00 00 00 07 D0 00 00 00 00 00 00 00 00 00 00 00 00 1D
```

```text
73 4D 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 00 04 00 00 07 D0 00 00 03 E8 00 00 00 00 00 00 03 E8 00 00 00 00 00 00 00 00 00 00 07 D0 00 00 00 00 00 00 00 00 00 00 00 00
```


**Telegram structure: sAN SetFieldEvaluationContour**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 52 41` |
| Command | Set the region of interest of an object detection evaluation | String | 25 | | `SetFieldEvaluationContour` | `53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |
| State of evaluation conversion | - | Enum_8 | 1 | Conversion successful:<br>Invalid Evaluation:<br>Invalid Polygon:<br>Invalid Z limit: | `0<br>1<br>2<br>3` | `00<br>01<br>02<br>03` |

**Example: sAN SetFieldEvaluationContour - Evaluation conversion successful**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}SetFieldEvaluationContour{SPC}0<ETX>
```

```text
02 73 41 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 41 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 14
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Get Field Evaluation Contour [sMN GetFieldEvaluationContour]

</summary>

This telegram can be used to read the contour/ polygon of an already defined field.

**Telegram structure: sMN GetFieldEvaluationContour**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Get the region of interest of an object detection evaluation | String | 25 | | `GetFieldEvaluationContour` | `47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |
| Evaluation ID | Specific ID of the evaluation that is to be changed | UInt_16 | 2 | | `+1d ... +48d (1h ... 30h)` | `00 01 … 00 30` |

**Example: sMN GetFieldEvaluationContour**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}GetFieldEvaluationContour{SPC}1<ETX>
```

```text
<STX>sMN GetFieldEvaluationContour 1<ETX>
```

```text
sMN GetFieldEvaluationContour 1
```

```text
02 73 4D 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 20 73 4D 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 0D
```

```text
73 4D 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01
```


**Telegram structure: sAN GetFieldEvaluationContour**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 52 41` |
| Command | Get the region of interest of an object detection evaluation | String | 25 | | `GetFieldEvaluationContour` | `47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |
| Length of array | | Uint_8 | 1 | Always: | `1` | `00 01` |
| Evaluation ID | Specific ID of the evaluation that is to be changed | UInt_16 | 2 | | `1h ... 30h` | `00 01 … 00 30` |
| Amount of polygon vertices | E. g. triangle = 3, square = 4 | Array | 3 ... 100 | | `3h ... 320h` | `00 03... 03 20` |
| Polygon vertex | Coordinates of first polygon vertex in mm | Dint_32 | 4 | X coordinate: | `FFFE2B40h ... 1D4C0h` | `FF FE 2B 40 … 00 01 D4 C0` |
| Polygon vertex | Coordinates of first polygon vertex in mm | Dint_32 | 4 | Y coordinate: | `FFFE2B40h ... 1D4C0h` | `FF FE 2B 40 … 00 01 D4 C0` |
| Polygon vertex | Coordinates of second polygon vertex in mm | Dint_32 | 4 | X coordinate: | `FFFE2B40h ... 1D4C0h` | `FF FE 2B 40 … 00 01 D4 C0` |
| Polygon vertex | Coordinates of second polygon vertex in mm | Dint_32 | 4 | Y coordinate: | `FFFE2B40h ... 1D4C0h` | `FF FE 2B 40 … 00 01 D4 C0` |
| ... | | | | | | |
| Polygon vertex | Coordinates of last polygon vertex in mm | Dint_32 | 4 | X coordinate: | `FFFE2B40h ... 1D4C0h` | `FF FE 2B 40 … 00 01 D4 C0` |
| Polygon vertex | Coordinates of last polygon vertex in mm | Dint_32 | 4 | Y coordinate: | `FFFE2B40h ... 1D4C0h` | `FF FE 2B 40 … 00 01 D4 C0` |
| Lower Z limit | Lower bound of extrusion in Z direction | Dint_32 | 4 | Always: | `0` | `00 00 00 00` |
| Upper Z limit | Upper bound of extrusion in Z direction | Dint_32 | 4 | Always: | `0` | `00 00 00 00` |

**Example: sAN GetFieldEvaluationContour**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}GetFieldEvaluationContour{SPC}1{SPC}1{SPC}4{SPC}7D0{SPC}3E8{SPC}0{SPC}3E8{SPC}0{SPC}0{SPC}7D0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 41 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 31 20 31 20 34 20 37 44 30 20 33 45 38 20 30 20 33 45 38 20 30 20 30 20 37 44 30 20 30 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4C 73 41 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 00 01 00 04 00 00 07 D0 00 00 03 E8 00 00 00 00 00 00 03 E8 00 00 00 00 00 00 00 00 00 00 07 D0 00 00 00 00 00 00 00 00 00 00 00 00 04
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Field Evaluation Result [sRN FieldEvaluationResult]

</summary>

This telegram returns the status information of all evaluations.

**Telegram structure: sRN FieldEvaluationResult**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Info on field evaluation result | String | 21 | | `FieldEvaluationResult` | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74` |

**Example: sRN FieldEvaluationResult**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}FieldEvaluationResult<ETX>
```

```text
<STX>sRN FieldEvaluationResult<ETX>
```

```text
sRN FieldEvaluationResult
```

```text
02 73 52 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 19 73 52 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 12
```

```text
73 52 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74
```


**Telegram structure: sRA FieldEvaluationResult**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Info on field evaluation result | String | 21 | | `FieldEvaluationResult` | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74` |
| Version | Version number | Uint_16 | 2 | | `0 ... FFFFh` | `00 ... FF FF` |
| Timestamp | Time of the last field infringement. Time base is the sensor system time in milliseconds since January 1, 1970, 00:00 (UTC). If a time server is being used, the configured system time is used. | ULInt_64 | 8 | | `0 ... FFFFFFFFFFFFFFFFh` | `00 00 00 00 00 00 00 00 ... FF FF FF FF FF FF FF FF` |
| Evaluation Result | Evaluation state of the first field. | Enum_8 | 1 | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05` |
| Reserved | - | Enum_8 | 1 | Always: | `0` | `00` |
| Evaluation Result | Evaluation state of the second field. | Enum_8 | 1 | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05` |
| Reserved | - | Enum_8 | 1 | Always: | `0` | `00` |
| ... | | | | | | |
| Evaluation Result | Evaluation state of the last field. (maximum amount of evaluations = 48) | Enum_8 | 1 | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05` |
| Reserved | - | Enum_8 | 1 | Always: | `0` | `00` |

**Example: sRA FieldEvaluationResult - field 1 is infringed, field 2 is free**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}FieldEvaluationResult{SPC}1{SPC}1D869664{SPC}4{SPC}0{SPC}2{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 20 31 44 38 36 39 36 36 34 20 34 20 30 20 32 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 B4 73 52 41 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 00 01 00 00 00 00 1D 86 96 64 04 00 00 02 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 53
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Receive Field Evaluation Result by Event [sEN FieldEvaluationResult]

</summary>

This telegram returns the status information of all evaluations.

**Telegram structure: sEN FieldEvaluationResult**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Info on field evaluation result | String | 21 | | `FieldEvaluationResult` | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74` |
| Reporting | Start/ stop | Enum_8 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN FieldEvaluationResult**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}FieldEvaluationResult{SPC}1<ETX>
```

```text
<STX>sEN FieldEvaluationResult 1<ETX>
```

```text
sEN FieldEvaluationResult 1
```

```text
02 73 45 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 45 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 01 24
```

```text
73 45 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 01
```


**Telegram structure: sSN FieldEvaluationResult**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sSN` | `73 53 4E` |
| Command | Info on field evaluation result | String | 21 | | `FieldEvaluationResult` | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74` |
| Version | Version number | Uint_16 | 2 | | `0 ... FFFFh` | `00 ... FF FF` |
| Timestamp | Time of the latest field infringement. Time base is the sensor system time in milliseconds since January 1, 1970, 00:00 (UTC). If a time server is being used, the configured system time is used. | ULInt_64 | 8 | | `0 ... FFFFFFFFFFFFFFFFh` | `00 00 00 00 00 00 00 00 ... FF FF FF FF FF FF FF FF` |
| Evaluation Result | Evaluation state of the first field. | Enum_8 | 1 | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05` |
| Reserved | - | Enum_8 | 1 | Always: | `0` | `00` |
| Evaluation Result | Evaluation state of the second field. | Enum_8 | 1 | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05` |
| Reserved | - | Enum_8 | 1 | Always: | `0` | `00` |
| ... | | | | | | |
| Evaluation Result | Evaluation state of the last field.<br>(maximum amount of evaluations = 48) | Enum_8 | 1 | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05` |
| Reserved | - | Enum_8 | 1 | Always: | `0` | `00` |

**Example: sSN FieldEvaluationResult - field 1 is infringed, field 2 is free**

**CoLa A (ASCII)**

```text
<STX>sSN{SPC}FieldEvaluationResult{SPC}1{SPC}1D869664{SPC}4{SPC}0{SPC}2{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 53 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 20 31 44 38 36 39 36 36 34 20 34 20 30 20 32 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 B4 73 53 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 00 01 00 00 00 00 1D 86 96 64 04 00 00 02 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 5D
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Start Teach-In [sMN StartTeachIn]

</summary>

Start teach-in of the environment.

**Telegram structure: sMN StartTeachIn**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method invocation | String | 3 | | `sMN` | `73 4D 4E` |
| Method name | StartTeachIn | String | 12 | | `StartTeachIn` | `53 74 61 72 74 54 65 61 63 68 49 6E` |

**Example: sMN StartTeachIn**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}StartTeachIn<ETX>
```

```text
<STX>sMN StartTeachIn<ETX>
```

```text
sMN StartTeachIn
```

```text
02 73 4D 4E 20 53 74 61 72 74 54 65 61 63 68 49 6E 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 4D 4E 20 53 74 61 72 74 54 65 61 63 68 49 6E 6C
```

```text
73 4D 4E 20 53 74 61 72 74 54 65 61 63 68 49 6E
```


**Telegram structure: sAN StartTeachIn**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method answer | String | 3 | | `sAN` | `73 41 4E` |
| Method name | Echo of method name | String | 12 | | `StartTeachIn` | `53 74 61 72 74 54 65 61 63 68 49 6E` |

**Example: sAN StartTeachIn**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}StartTeachIn<ETX>
```

```text
02 73 41 4E 20 53 74 61 72 74 54 65 61 63 68 49 6E 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 41 4E 20 53 74 61 72 74 54 65 61 63 68 49 6E 20 40
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Stop Teach-In [sMN StopTeachIn]

</summary>

Stop teach-in of the environment.

**Telegram structure: sMN StopTeachIn**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method invocation | String | 3 | | `sMN` | `73 4D 4E` |
| Method name | StopTeachIn | String | 11 | | `StopTeachIn` | `53 74 6F 70 54 65 61 63 68 49 6E` |

**Example: sMN StopTeachIn**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}StopTeachIn<ETX>
```

```text
<STX>sMN StopTeachIn<ETX>
```

```text
sMN StopTeachIn
```

```text
02 73 4D 4E 20 53 74 6F 70 54 65 61 63 68 49 6E 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 4D 4E 20 53 74 6F 70 54 65 61 63 68 49 6E 14
```

```text
73 4D 4E 20 53 74 6F 70 54 65 61 63 68 49 6E
```


**Telegram structure: sAN StopTeachIn**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method answer | String | 3 | | `sAN` | `73 41 4E` |
| Method name | Echo of method name | String | 11 | | `StopTeachIn` | `53 74 6F 70 54 65 61 63 68 49 6E` |

**Example: sAN StopTeachIn**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}StopTeachIn<ETX>
```

```text
02 73 41 4E 20 53 74 6F 70 54 65 61 63 68 49 6E 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 41 4E 20 53 74 6F 70 54 65 61 63 68 49 6E 20 38
```

</details>

</section>

<section class="cola-category" markdown="1">

## Perpendicular Distance

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Request Perpendicular Distance Once [sRN perpendicularDistanceResult]

</summary>

This telegram can be used to request the perpendicular distance. The shortest and furthest measuring point in a range to a reference plane will be transmitted. A field and a reference plane must be defined in the user interface under Application > Perpendicular distance measurement.

**Telegram structure: sRN perpendicularDistanceResult**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Perpendicular distance values | String | 27 | | `perpendicularDistanceResult` | `70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74` |

**Example: sRN perpendicularDistanceResult**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}perpendicularDistanceResult<ETX>
```

```text
<STX>sRN perpendicularDistanceResult<ETX>
```

```text
sRN perpendicularDistanceResult
```

```text
02 73 52 4E 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 52 4E 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 3D
```

```text
73 52 4E 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74
```


**Telegram structure: sRA perpendicularDistanceResult**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Perpendicular distance values | String | 27 | | `perpendicularDistanceResult` | `70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74` |
| Timestamp | Time of the latest object detection in the defined fields. Time base is the sensor system time in milliseconds since January 1, 1970, 00:00 (UTC). If a time server is being used, the configured system time is used. | Uint_32 | 8 | | `0 ... FFFFFFFFh` | `00 00 00 00 00 00 00 00... FF FF FF FF FF FF FF FF` |
| Amount of channels | Amount of perpendicular distance evaluation channels/fields | Enum_8 | 2 | | `1 ... 20d (1 ... 14h)` | `00 01 ... 00 14` |
| Evaluation ID X | ID of perpendicular distance field | Enum_8 | 2 | | `1 ... 20d (1 ... 14h)` | `00 01 ... 00 14` |
| Evaluation ID X | Minimum distance [mm] | Int_32 | 4 | | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0` |
| Evaluation ID X | Maximum distance [mm] | Int_32 | 4 | | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0` |
| Evaluation ID X | X minimum distance [mm] | Int_32 | 4 | | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0` |
| Evaluation ID X | Y minimum distance [mm] | Int_32 | 4 | | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0` |
| Evaluation ID X | Reserved | Int_32 | 4 | Always: | `0` | `00 00 00 00` |
| Evaluation ID X | X maximum distance [mm] | Int_32 | 4 | | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0` |
| Evaluation ID X | Y maximum distance [mm] | Int_32 | 4 | | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0` |
| Evaluation ID X | Reserved | Int_32 | 4 | Always: | `0` | `00 00 00 00` |
| Evaluation ID ... | ... | ... | ... | ... | `...` | `...` |

**Example: sRA perpendicularDistanceResult - 1 configured field**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}perpendicularDistanceResult{SPC}138D305E8{SPC}1{SPC}1{SPC}9D{SPC}7EA{SPC}9D{SPC}FFFFFC67{SPC}0{SPC}7EA{SPC}FFFFFD70{SPC}0<ETX>
```

```text
02 73 52 41 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 20 31 33 38 44 33 30 35 45 38 20 31 20 31 20 39 44 20 37 45 41 20 39 44 20 46 46 46 46 46 43 36 37 20 30 20 37 45 41 20 46 46 46 46 46 44 37 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4C 73 52 41 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 20 00 00 00 01 31 80 92 88 00 01 00 01 00 00 00 9F 00 00 07 EB 00 00 00 9F FF FF FC 8C 00 00 00 00 00 00 07 EB FF FF FD 70 00 00 00 00 45
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Request Perpendicular Distance Continuously on Event [sEN perpendicularDistanceResult]

</summary>

This telegram can be used to request the perpendicular distance continuously on event. The shortest and furthest measuring point in a range to a reference plane will be transmitted. A field and a reference plane must be defined in the user interface under Application > Perpendicular distance measurement.

**Telegram structure: sEN perpendicularDistanceResult**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Perpendicular distance values | String | 27 | | `perpendicularDistanceResult` | `70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74` |
| Start/ Stop | - | Enum_8 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN perpendicularDistanceResult**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}perpendicularDistanceResult{SPC}1<ETX>
```

```text
<STX>sEN perpendicularDistanceResult 1<ETX>
```

```text
sEN perpendicularDistanceResult 1
```

```text
02 73 45 4E 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 21 73 45 4E 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 20 01 0B
```

```text
73 45 4E 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 20 01
```


**Telegram structure: sSN perpendicularDistanceResult**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sSN` | `73 53 4E` |
| Command | Perpendicular distance values | String | 27 | | `perpendicularDistanceResult` | `70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74` |
| Timestamp | Time of the latest object detection in the defined fields. Time base is the sensor system time in milliseconds since January 1, 1970, 00:00 (UTC). If a time server is being used, the configured system time is used. | Uint_32 | 8 | | `0 ... FFFFFFFFh` | `00 00 00 00 00 00 00 00... FF FF FF FF FF FF FF FF` |
| Amount of channels | Amount of perpendicular distance evaluation channels/fields | Enum_8 | 2 | | `1 ... 20d (1 ... 14h)` | `00 01 ... 00 14` |
| Evaluation ID X | ID of perpendicular distance field | Enum_8 | 2 | | `1 ... 20d (1 ... 14h)` | `00 01 ... 00 14` |
| Evaluation ID X | Minimum distance [mm] | Int_32 | 4 | | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0` |
| Evaluation ID X | Maximum distance [mm] | Int_32 | 4 | | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0` |
| Evaluation ID X | X minimum distance [mm] | Int_32 | 4 | | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0` |
| Evaluation ID X | Y minimum distance [mm] | Int_32 | 4 | | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0` |
| Evaluation ID X | Reserved | Int_32 | 4 | Always: | `0` | `00 00 00 00` |
| Evaluation ID X | X maximum distance [mm] | Int_32 | 4 | | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0` |
| Evaluation ID X | Y maximum distance [mm] | Int_32 | 4 | | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0` |
| Evaluation ID X | Reserved | Int_32 | 4 | Always: | `0` | `00 00 00 00` |
| Evaluation ID ... | ... | ... | ... | ... | `...` | `...` |

**Example: sSN perpendicularDistanceResult - 1 configured field**

**CoLa A (ASCII)**

```text
<STX>sSN{SPC}perpendicularDistanceResult{SPC}D5BD2DA8{SPC}1{SPC}1{SPC}174{SPC}7CE{SPC}174{SPC}FFFFFFFC{SPC}0{SPC}7CE{SPC}FFFFFD13{SPC}0<ETX>
```

```text
02 73 53 4E 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 20 44 35 42 44 32 44 41 38 20 31 20 31 20 31 37 34 20 37 43 45 20 31 37 34 20 46 46 46 46 46 46 46 43 20 30 20 37 43 45 20 46 46 46 46 46 44 31 33 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4C 73 53 4E 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 20 00 00 00 00 F9 B6 D5 88 00 01 00 01 00 00 00 9D 00 00 07 D0 00 00 00 9D FF FF FC D0 00 00 00 00 00 00 07 D0 FF FF FD 1F 00 00 00 00 C0
```

</details>

</section>

<section class="cola-category" markdown="1">

## Operating Data

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Operating Hours [sRN ODoprh]

</summary>

Views the total number of operating hours during the lifetime of the device.

**Telegram structure: sRN ODoprh**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read operating hours | String | 6 | | `ODoprh` | `4F 44 6F 70 72 68` |

**Example: sRN ODoprh**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ODoprh<ETX>
```

```text
<STX>sRN ODoprh<ETX>
```

```text
sRN ODoprh
```

```text
02 73 52 4E 20 4F 44 6F 70 72 68 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0A 73 52 4E 20 4F 44 6F 70 72 68 41
```

```text
73 52 4E 20 4F 44 6F 70 72 68
```


**Telegram structure: sRA ODoprh**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read operating hours | String | 6 | | `ODoprh` | `4F 44 6F 70 72 68` |
| Value | Operating hours in 1/10 h | Uint_32 | 4 | | `0h … FFFFFFFFh` | `00 00 00 00 …FF FF FF FF` |

**Example: sRA ODoprh**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ODoprh{SPC}1B50B<ETX>
```

```text
02 73 52 41 20 4F 44 6F 70 72 68 20 31 42 35 30 42 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 41 20 4F 44 6F 70 72 68 20 00 01 B5 0B D1
```


Calculation of the value: 1B50B (hex) 111883 (dez) × 1/10 h = 11188.3 h

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Operating Hours Since Last Power On [sRN ODopdaily]

</summary>

Shows the runtime duration since the last power on of the device.

**Telegram structure: sRN ODopdaily**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read operating hours | String | 9 | | `ODopdaily` | `4F 44 6F 70 64 61 69 6C 79` |

**Example: sRN ODopdaily**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ODopdaily<ETX>
```

```text
<STX>sRN ODopdaily<ETX>
```

```text
sRN ODopdaily
```

```text
02 73 52 4E 20 4F 44 6F 70 64 61 69 6C 79 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0D 73 52 4E 20 4F 44 6F 70 64 61 69 6C 79 22
```

```text
73 52 4E 20 4F 44 6F 70 64 61 69 6C 79
```


**Telegram structure: sRA ODopdaily**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read operating hours since last power on | String | 9 | | `ODopdaily` | `4F 44 6F 70 64 61 69 6C 79` |
| Value | Operating hours in 1/10 h | Real as float according to IEEE754 | 4 | | `0h … FFFFFFFFh` | `00 00 00 00 …FF FF FF FF` |

**Example: sRA ODopdaily**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ODopdaily{SPC}424772B8<ETX>
```

```text
02 73 52 41 20 4F 44 6F 70 64 61 69 6C 79 20 34 32 34 37 37 32 42 38 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 41 20 4F 44 6F 70 64 61 69 6C 79 20 42 47 72 B8 C2
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Power on Counter [sRN ODpwrc]

</summary>

Shows the number of power on cycles.

**Telegram structure: sRN ODpwrc**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read power on counter | String | 6 | | `ODpwrc` | `4F 44 70 77 72 63` |

**Example: sRN ODpwrc**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ODpwrc<ETX>
```

```text
<STX>sRN ODpwrc<ETX>
```

```text
sRN ODpwrc
```

```text
02 73 52 4E 20 4F 44 70 77 72 63 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0A 73 52 4E 20 4F 44 70 77 72 63 52
```

```text
73 52 4E 20 4F 44 70 77 72 63
```


**Telegram structure: sRA ODpwrc**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read power on counter | String | 6 | | `ODpwrc` | `4F 44 70 77 72 63` |
| Value | Power on counter | Uint_32 | 4 | | `0h … FFFFFFFFh` | `00 00 00 00 …FF FF FF FF` |

**Example: sRA ODpwrc**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ODpwrc{SPC}9A<ETX>
```

```text
02 73 52 41 20 4F 44 70 77 72 63 20 39 41 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 41 20 4F 44 70 77 72 63 20 00 00 00 9A E7
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Temperature [sRN OPcurtmpdev]

</summary>

With this command the internal temperature of the device can be identified. Please note that it does not give an indication of the current ambient temperature.

**Telegram structure: sRN OPcurtmpdev**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read temperature of the device | String | 11 | | `OPcurtmpdev` | `4F 50 63 75 72 74 6D 70 64 65 76` |

**Example: sRN OPcurtmpdev**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}OPcurtmpdev<ETX>
```

```text
<STX>sRN OPcurtmpdev<ETX>
```

```text
sRN OPcurtmpdev
```

```text
02 73 52 4E 20 4F 50 63 75 72 74 6D 70 64 65 76 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 4E 20 4F 50 63 75 72 74 6D 70 64 65 76 2A
```

```text
73 52 4E 20 4F 50 63 75 72 74 6D 70 64 65 76
```


**Telegram structure: sRA OPcurtmpdev**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read temperature of the device | String | 11 | | `OPcurtmpdev` | `4F 50 63 75 72 74 6D 70 64 65 76` |
| Temperature data | [°C] | Real as float according to IEEE754 | 4 | (-50°C … +100°C) | `C2480000h … 42C80000h` | `C2 48 00 00 … 42 C8 00 00` |

Example: sRA OPcurtmpdev (35°C)

**Example: sRA OPcurtmpdev**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}OPcurtmpdev{SPC}420C0000<ETX>
```

```text
02 73 52 41 20 4F 50 63 75 72 74 6D 70 64 65 76 20 34 32 30 43 30 30 30 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 41 20 4F 50 63 75 72 74 6D 70 64 65 76 20 42 0C 00 00 4B
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Date of Last Permanent Save [sRN DIpara]

</summary>

This command reads the date at which the last permanent save was executed.

**Telegram structure: sRN DIpara**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read date of last permanent save | String | 6 | | `DIpara` | `44 49 70 61 72 61` |

**Example: sRN DIpara**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}DIpara<ETX>
```

```text
<STX>sRN DIpara<ETX>
```

```text
sRN DIpara
```

```text
02 73 52 4E 20 44 49 70 61 72 61 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0A 73 52 4E 20 44 49 70 61 72 61 40
```

```text
73 52 4E 20 44 49 70 61 72 61
```


**Telegram structure: sRA DIpara**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read date of last permanent save | String | 6 | | `DIpara` | `44 49 70 61 72 61` |
| Reserved | - | Uint_8 | 1 | Always: | `Ah` | `0A` |
| Date of last permanent save | DD.MM.YYYY | FlexString | 10 | | `(see example)` | `(see example)` |

**Example: sRA DIpara**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}DIpara{SPC}A{SPC}09.01.2024<ETX>
```

```text
02 73 52 41 20 44 49 70 61 72 61 20 41 20 30 39 2E 30 31 2E 32 30 32 34 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 52 41 20 44 49 70 61 72 61 20 00 0A 30 39 2E 30 31 2E 32 30 32 34 69
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Time of Last Permanent Save [sRN DIparatm]

</summary>

This command reads the time at which the last permanent save was executed.

**Telegram structure: sRN DIparatm**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read time of last permanent save | String | 8 | | `DIparatm` | `44 49 70 61 72 61 74 6D` |

**Example: sRN DIparatm**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}DIparatm<ETX>
```

```text
<STX>sRN DIparatm<ETX>
```

```text
sRN DIparatm
```

```text
02 73 52 4E 20 44 49 70 61 72 61 74 6D 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0C 73 52 4E 20 44 49 70 61 72 61 74 6D 59
```

```text
73 52 4E 20 44 49 70 61 72 61 74 6D
```


**Telegram structure: sRA DIparatm**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read time of last permanent save | String | 8 | | `DIparatm` | `44 49 70 61 72 61 74 6D` |
| Reserved | - | Uint_16 | 2 | Always: | `5h` | `00 05` |
| Time of last permanent save | HH:MM | String | 5 | | `(see example)` | `(see example)` |

**Example: sRA DIparatm**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}DIparatm{SPC}5{SPC}12:28<ETX>
```

```text
02 73 52 41 20 44 49 70 61 72 61 74 6D 20 35 20 31 32 3A 32 38 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 41 20 44 49 70 61 72 61 74 6D 20 00 05 31 32 3A 32 38 40
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read the Current Device Temperature Alarm Status [sRN temperatureAlarmStatus]

</summary>

Current device temperature alarm status. If true, the configured temperature alarm is active.

**Telegram structure: sRN temperatureAlarmStatus**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Device temperature alarm status | String | 22 | | `temperatureAlarmStatus` | `74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 53 74 61 74 75 73` |

**Example: sRN temperatureAlarmStatus**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}temperatureAlarmStatus<ETX>
```

```text
<STX>sRN temperatureAlarmStatus<ETX>
```

```text
sRN temperatureAlarmStatus
```

```text
02 73 52 4E 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 53 74 61 74 75 73 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1A 73 52 4E 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 53 74 61 74 75 73 44
```

```text
73 52 4E 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 53 74 61 74 75 73
```


**Telegram structure: sRA temperatureAlarmStatus**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Device temperature alarm status | String | 22 | | `temperatureAlarmStatus` | `74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 53 74 61 74 75 73` |
| Data | Alarm state | Bool_1 | 1 | Disabled:<br>Enabled: | `0d (00h)<br>+1d (01h)` | `00 ... 01` |

**Example: sRA temperatureAlarmStatus - Temperature alarm status is off. The device runs in the defined temperature range**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}temperatureAlarmStatus{SPC}0<ETX>
```

```text
02 73 52 41 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 53 74 61 74 75 73 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 52 41 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 53 74 61 74 75 73 20 00 6B
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Device Temperature Alarm Configuration [sWN temperatureAlarmConfiguration]

</summary>

Sets the upper and lower threshold for the temperature alarm status.

**Telegram structure: sWN temperatureAlarmConfiguration**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Device temperature alarm configuration | String | 29 | | `temperatureAlarmConfiguration` | `74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |
| Data 1 | Upper threshold [°C] | Int_8 | 1 | Default: 55 | `-128d ... +127d (80h ... 7Fh)` | `80 ... 7F` |
| Data 2 | Lower threshold [°C] | Int_8 | 1 | Default: 50 | `-128d ... +127d (80h ... 7Fh)` | `80 ... 7F` |

**Example: sWN temperatureAlarmConfiguration - Set the upper threshold to 55 °C and the lower threshold to 50 °C**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}temperatureAlarmConfiguration{SPC}37{SPC}32<ETX>
```

```text
<STX>sWN temperatureAlarmConfiguration 37 32<ETX>
```

```text
sWN temperatureAlarmConfiguration 37 32
```

```text
02 73 57 4E 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 33 37 20 33 32 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 24 73 57 4E 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 37 32 00
```

```text
73 57 4E 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 37 32
```


**Telegram structure: sWA temperatureAlarmConfiguration**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Device temperature alarm configuration | String | 29 | | `temperatureAlarmConfiguration` | `74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |

**Example: sWA temperatureAlarmConfiguration**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}temperatureAlarmConfiguration<ETX>
```

```text
02 73 57 41 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 22 73 57 41 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 0A
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Device Temperature Alarm Configuration [sRN temperatureAlarmConfiguration]

</summary>

Returns the upper and lower threshold for the temperature alarm status.

**Telegram structure: sRN temperatureAlarmConfiguration**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Device temperature alarm configuration | String | 29 | | `temperatureAlarmConfiguration` | `74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |

**Example: sRN temperatureAlarmConfiguration**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}temperatureAlarmConfiguration<ETX>
```

```text
<STX>sRN temperatureAlarmConfiguration<ETX>
```

```text
sRN temperatureAlarmConfiguration
```

```text
02 73 52 4E 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 21 73 52 4E 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20
```

```text
73 52 4E 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E
```


**Telegram structure: sRA temperatureAlarmConfiguration**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Device temperature alarm configuration | String | 29 | | `temperatureAlarmConfiguration` | `74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |
| Data 1 | Upper threshold [°C] | Int_8 | 1 | Default: 55 | `-128d ... +127d (80h ... 7Fh)` | `80 ... 7F` |
| Data 2 | Lower threshold [°C] | Int_8 | 1 | Default: 50 | `-128d ... +127d (80h ... 7Fh)` | `80 ... 7F` |

**Example: sRA temperatureAlarmConfiguration - 55 °C upper threshold and 50 °C lower threshold**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}temperatureAlarmConfiguration{SPC}37{SPC}32<ETX>
```

```text
02 73 52 41 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 33 37 20 33 32 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 24 73 52 41 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 37 32 0A
```

</details>

</section>

<section class="cola-category" markdown="1">

## Cybersecurity

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Device Search Mode [sWN EtherCoLaScanMode]

</summary>

This command configures the Auto IP functionalities (Device search by SICK Enginnering Tools) and the changeability of the IP address. The functionality can reduces the number of open ports to a minimum.

**Telegram structure: sWN EtherCoLaScanMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set CoLa Scan / AutoIP search settings | String | 17 | | `EtherCoLaScanMode` | `45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65` |
| CoLa Scan / AutoIP search settings | Choose setting | Uint_8 | 1 | IP address can be found/changed without login:<br>IP address can be found/ changed with login:<br>Disable the Auto IP search/ IP change:<br>IP address can be found/changed for 1 min: | `0<br>1<br>2<br>3` | `00<br>01<br>02<br>03` |

**Example: sWN EtherCoLaScanMode 2 - Disable the Auto IP search/ IP change**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EtherCoLaScanMode{SPC}2<ETX>
```

```text
<STX>sWN EtherCoLaScanMode 2<ETX>
```

```text
sWN EtherCoLaScanMode 2
```

```text
02 73 57 4E 20 45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65 20 32 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 57 4E 20 45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65 20 02 3B
```

```text
73 57 4E 20 45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65 20 02
```


**Telegram structure: sWA EtherCoLaScanMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set CoLa Scan / AutoIP search settings | String | 17 | | `EtherCoLaScanMode` | `45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65` |

**Example: sWA EtherCoLaScanMode**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}EtherCoLaScanMode<ETX>
```

```text
02 73 57 41 20 45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 57 41 20 45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65 20 36
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Device Search Mode [sRN EtherCoLaScanMode]

</summary>

This command polls the Auto IP functionalities (Device search by SICK Enginnering Tools) and the IP address changeability settings.

**Telegram structure: sRN EtherCoLaScanMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read CoLa Scan / AutoIP search settings | String | 17 | | `EtherCoLaScanMode` | `45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65` |

**Example: sRN EtherCoLaScanMode**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EtherCoLaScanMode<ETX>
```

```text
<STX>sRN EtherCoLaScanMode<ETX>
```

```text
sRN EtherCoLaScanMode
```

```text
02 73 52 4E 20 45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 52 4E 20 45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65 1C
```

```text
73 52 4E 20 45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65
```


**Telegram structure: sRA EtherCoLaScanMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read CoLa Scan / AutoIP search settings | String | 17 | | `EtherCoLaScanMode` | `45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65` |
| CoLa Scan / AutoIP search settings | Poll setting | Uint_8 | 1 | IP address can be found/changed without login:<br>IP address can be found/ changed with login:<br>Auto IP search/ IP change is disabled:<br>IP address can be found/changed for 1 min: | `0<br>1<br>2<br>3` | `00<br>01<br>02<br>03` |

**Example: sRA EtherCoLaScanMode 3 - IP address can be found/changed for 1 min**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EtherCoLaScanMode{SPC}3<ETX>
```

```text
02 73 52 41 20 45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65 20 33 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 52 41 20 45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65 20 03 30
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Enable/ Disable CoLa1 Interface [sWN EIAuxEnable]

</summary>

After enabling the CoLa1 interface, use port 2111 for CoLa A and port 2112 for CoLa B.

**Telegram structure: sWN EIAuxEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set CoLa1 interface | String | 11 | | `EIAuxEnable` | `45 49 41 75 78 45 6E 61 62 6C 65` |
| CoLa1 interface | Enable/ disable | Bool_1 | 1 | Disable:<br>Enable: | `0<br>1` | `00<br>01` |

**Example: sWN EIAuxEnable**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EIAuxEnable{SPC}1<ETX>
```

```text
<STX>sWN EIAuxEnable 1<ETX>
```

```text
sWN EIAuxEnable 1
```

```text
02 73 57 4E 20 45 49 41 75 78 45 6E 61 62 6C 65 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 57 4E 20 45 49 41 75 78 45 6E 61 62 6C 65 20 01 0A
```

```text
73 57 4E 20 45 49 41 75 78 45 6E 61 62 6C 65 20 01
```


**Telegram structure: sWA EIAuxEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set CoLa1 interface | String | 11 | | `EIAuxEnable` | `45 49 41 75 78 45 6E 61 62 6C 65` |

**Example: sWA EIAuxEnable**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}EIAuxEnable<ETX>
```

```text
02 73 57 41 20 45 49 41 75 78 45 6E 61 62 6C 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 57 41 20 45 49 41 75 78 45 6E 61 62 6C 65 20 04
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Webserver State [sMN SetWebserverEnabled]

</summary>

This command enables/ disables the Webserver. Port 80 will not be opened after a reboot.

**Telegram structure: sMN SetWebserverEnabled**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Set Webserver state | String | 19 | | `SetWebserverEnabled` | `53 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64` |
| State | Enable/ disable | Bool_1 | 1 | Disable:<br>Enable: | `0<br>1` | `00<br>01` |

**Example: sMN SetWebserverEnabled**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}SetWebserverEnabled{SPC}1<ETX>
```

```text
<STX>sMN SetWebserverEnabled 1<ETX>
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

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Set Webserver state | String | 19 | | `SetWebserverEnabled` | `53 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64` |

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

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Webserver State [sMN GetWebserverEnabled]

</summary>

Returns state if Webserver is enabled.

**Telegram structure: sMN GetWebserverEnabled**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Webserver state | String | 19 | | `GetWebserverEnabled` | `47 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64` |

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

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Webserver state | String | 19 | | `GetWebserverEnabled` | `47 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64` |
| State | Status of the webserver | Bool_1 | 1 | Disabled:<br>Enabled: | `0<br>1` | `00<br>01` |

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

</details>

</section>

<section class="cola-category" markdown="1">

## Detection History

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Enable Detection History Logging [sWN EnableDetectionHistory]

</summary>

Enables or disables the detection history logging.

**Telegram structure: sWN EnableDetectionHistory**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | | String | 3 | | `sWN` | `73 57 4E` |
| Command | EnableDetectionHistory | String | 22 | | `EnableDetectionHistory` | `45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79` |
| Detection history logging | Enable/ Disable | Bool_1 | 1 | Disable:<br>Enable: | `0<br>1` | `00<br>01` |

**Example: sWN EnableDetectionHistory**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EnableDetectionHistory{SPC}1<ETX>
```

```text
<STX>sWN EnableDetectionHistory 1<ETX>
```

```text
sWN EnableDetectionHistory 1
```

```text
02 73 57 4E 20 45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 57 4E 20 45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79 20 01 47
```

```text
73 57 4E 20 45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79 20 01
```


**Telegram structure: sWA EnableDetectionHistory**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | EnableDetectionHistory | String | 22 | | `EnableDetectionHistory` | `45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79` |

**Example: sWA EnableDetectionHistory**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}EnableDetectionHistory<ETX>
```

```text
02 73 57 41 20 45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 57 41 20 45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79 20 49
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Detection History Logging State [sRN EnableDetectionHistory]

</summary>

Reads whether the detection history logging is enabled or disabled.

**Telegram structure: sRN EnableDetectionHistory**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | | String | 3 | | `sRN` | `73 52 4E` |
| Command | EnableDetectionHistory | String | 22 | | `EnableDetectionHistory` | `45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79` |

**Example: sRN EnableDetectionHistory**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EnableDetectionHistory<ETX>
```

```text
<STX>sRN EnableDetectionHistory<ETX>
```

```text
sRN EnableDetectionHistory
```

```text
02 73 52 4E 20 45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1A 73 52 4E 20 45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79 63
```

```text
73 52 4E 20 45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79
```


**Telegram structure: sRA EnableDetectionHistory**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | EnableDetectionHistory | String | 22 | | `EnableDetectionHistory` | `45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79` |
| Detection history logging | Enabled/ Disabled | Bool_1 | 1 | Disabled:<br>Enabled: | `0<br>1` | `00<br>01` |

**Example: sRA EnableDetectionHistory**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EnableDetectionHistory{SPC}1<ETX>
```

```text
02 73 52 41 20 45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 52 41 20 45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79 20 01 4D
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Reset Detection History Logging [sMN ResetDetectionHistory]

</summary>

Deletes all entries in the field evaluation logging list.

**Telegram structure: sMN ResetDetectionHistory**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method invocation | String | 3 | | `sMN` | `73 4D 4E` |
| Method name | ResetDetectionHistory | String | 21 | | `ResetDetectionHistory` | `52 65 73 65 74 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79` |

**Example: sMN ResetDetectionHistory**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}ResetDetectionHistory<ETX>
```

```text
<STX>sMN ResetDetectionHistory<ETX>
```

```text
sMN ResetDetectionHistory
```

```text
02 73 4D 4E 20 52 65 73 65 74 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 19 73 4D 4E 20 52 65 73 65 74 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79 08
```

```text
73 4D 4E 20 52 65 73 65 74 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79
```


**Telegram structure: sAN ResetDetectionHistory**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method answer | String | 3 | | `sAN` | `73 41 4E` |
| Method name | Echo of method name | String | 21 | | `ResetDetectionHistory` | `52 65 73 65 74 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79` |

**Example: sAN ResetDetectionHistory**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}ResetDetectionHistory<ETX>
```

```text
02 73 41 4E 20 52 65 73 65 74 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 19 73 41 4E 20 52 65 73 65 74 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79 04
```

</details>

</section>
