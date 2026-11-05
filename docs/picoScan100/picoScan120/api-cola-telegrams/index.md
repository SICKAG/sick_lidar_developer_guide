# picoScan120 API | CoLa Telegrams (CoLa A and CoLa B)

> Complete picoScan120 CoLa telegram reference with sRN, sWN, sMN, and sEN commands, parameter structures, and CoLa A and CoLa B examples.

Sections: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/sections.md (one small file per endpoint, schema, or telegram)

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/

# API | CoLa Telegrams {#api-cola-telegrams}

This reference lists the CoLa telegrams supported by the picoScan120. Use the command details to build or troubleshoot PLC and other low-level integrations without guessing the telegram structure. For connection setup, framing, log in, and `sFA` error codes, see [CoLa Interface](https://sickag.github.io/sick_lidar_developer_guide/configuration/cola-interface/).

The telegrams apply to the latest published firmware, listed in the
[picoScan100 release notes](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/release-notes/). Older firmware may not support
every telegram or parameter.

Examples are grouped by protocol, with each telegram representation in a separate code block and its own copy button.

Categories follow the [picoScan120 REST API reference](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/)
where corresponding CoLa telegrams are available. Select a telegram to expand
its structure and examples. A direct link to a telegram opens it automatically.

Using a picoScan150? It supports a different set of telegrams; see the
[picoScan150 CoLa telegram reference](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/).

<section class="cola-category" markdown="1">

## General {#general}

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Log In [sMN SetAccessMode] {#log-in-smn-setaccessmode}

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

### Change Password [sMN SetPassword] {#change-password-smn-setpassword}

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

### Check Password [sMN CheckPassword] {#check-password-smn-checkpassword}

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

### Save Parameters Permanently [sMN mEEwriteall] {#save-parameters-permanently-smn-meewriteall}

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

### Set to Run [sMN Run] {#set-to-run-smn-run}

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

### Soft Reset the Device [sMN mSCsoftreset] {#soft-reset-the-device-smn-mscsoftreset}

</summary>

Reboots the device. All non-saved parameters are lost. This telegram requires at least user level: Authorized Client.

**Telegram structure: sMN mSCsoftreset**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Soft Reset the Device | String | 12 | | `mSCsoftreset` | `6D 53 43 73 6F 66 74 72 65 73 65 74` |
| ProcessorNbr | ProcessorNbr | Uint_16 | 2 | 0 ... 65535 | `0 ... FFFF` | `00 00 ... FF FF` |

**Example: sMN mSCsoftreset**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}mSCsoftreset{SPC}0<ETX>
```

```text
<STX>sMN mSCsoftreset 0<ETX>
```

```text
sMN mSCsoftreset 0
```

```text
02 73 4D 4E 20 6D 53 43 73 6F 66 74 72 65 73 65 74 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 4D 4E 20 6D 53 43 73 6F 66 74 72 65 73 65 74 20 00 00 76
```

```text
73 4D 4E 20 6D 53 43 73 6F 66 74 72 65 73 65 74 20 00 00
```

**Telegram structure: sAN mSCsoftreset**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Soft Reset the Device | String | 12 | | `mSCsoftreset` | `6D 53 43 73 6F 66 74 72 65 73 65 74` |

**Example: sAN mSCsoftreset**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}mSCsoftreset<ETX>
```

```text
02 73 41 4E 20 6D 53 43 73 6F 66 74 72 65 73 65 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 41 4E 20 6D 53 43 73 6F 66 74 72 65 73 65 74 20 7A
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Reboot Device [sMN mSCreboot] {#reboot-device-smn-mscreboot}

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

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Load Factory Defaults [sMN mSCloadfacdef] {#load-factory-defaults-smn-mscloadfacdef}

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

### Load Application Defaults [sMN mSCloadappdef] {#load-application-defaults-smn-mscloadappdef}

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

### Enable/ Disable CoLa User Levels [sMN EnableLegacyUserLevel] {#enable-disable-cola-user-levels-smn-enablelegacyuserlevel}

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

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Laser Type [sRN laserType] {#read-laser-type-srn-lasertype}

</summary>

Returns the type of the sending unit.

**Telegram structure: sRN laserType**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Laser Type | String | 9 | | `laserType` | `6C 61 73 65 72 54 79 70 65` |

**Example: sRN laserType**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}laserType<ETX>
```

```text
<STX>sRN laserType<ETX>
```

```text
sRN laserType
```

```text
02 73 52 4E 20 6C 61 73 65 72 54 79 70 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0D 73 52 4E 20 6C 61 73 65 72 54 79 70 65 1E
```

```text
73 52 4E 20 6C 61 73 65 72 54 79 70 65
```

**Telegram structure: sRA laserType**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Laser Type | String | 9 | | `laserType` | `6C 61 73 65 72 54 79 70 65` |
| laserType | Laser type of the device frontend | Uint_8 | 1 | 0 ... 255 | `0 ... FF` | `00 ... FF` |

**Example: sRA laserType**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}laserType{SPC}2<ETX>
```

```text
02 73 52 41 20 6C 61 73 65 72 54 79 70 65 20 32 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 41 20 6C 61 73 65 72 54 79 70 65 20 02 33
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read SiPM Type [sRN sipmType] {#read-sipm-type-srn-sipmtype}

</summary>

Returns the type of the receiving unit.

**Telegram structure: sRN sipmType**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read SiPM Type | String | 8 | | `sipmType` | `73 69 70 6D 54 79 70 65` |

**Example: sRN sipmType**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}sipmType<ETX>
```

```text
<STX>sRN sipmType<ETX>
```

```text
sRN sipmType
```

```text
02 73 52 4E 20 73 69 70 6D 54 79 70 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0C 73 52 4E 20 73 69 70 6D 54 79 70 65 70
```

```text
73 52 4E 20 73 69 70 6D 54 79 70 65
```

**Telegram structure: sRA sipmType**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read SiPM Type | String | 8 | | `sipmType` | `73 69 70 6D 54 79 70 65` |
| sipmType | SiPM type of the device frontend | Uint_8 | 1 | 0 ... 255 | `0 ... FF` | `00 ... FF` |

**Example: sRA sipmType**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}sipmType{SPC}2<ETX>
```

```text
02 73 52 41 20 73 69 70 6D 54 79 70 65 20 32 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 52 41 20 73 69 70 6D 54 79 70 65 20 02 5D
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Checksum [sRN LFTchecksum] {#read-checksum-srn-lftchecksum}

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

</section>

<section class="cola-category" markdown="1">

## Status {#status}

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read the Device State [sRN DevSta] {#read-the-device-state-srn-devsta}

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

### Receive the Device State by Event [sEN DevSta] {#receive-the-device-state-by-event-sen-devsta}

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

### Read the Device State [sRN SCdevicestate] {#read-the-device-state-srn-scdevicestate}

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

### Receive the Device State by Event [sEN SCdevicestate] {#receive-the-device-state-by-event-sen-scdevicestate}

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

## Device Information {#device-information}

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Firmware Version [sRN DeviceIdent] {#read-firmware-version-srn-deviceident}

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

### Read Device Name [sRN LocationName] {#read-device-name-srn-locationname}

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

### Set Device Name [sWN LocationName] {#set-device-name-swn-locationname}

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

### Read Serial Number [sRN SerialNumber] {#read-serial-number-srn-serialnumber}

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

### Read Version of the Application Software [sRN FirmwareVersion] {#read-version-of-the-application-software-srn-firmwareversion}

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

### Read Device Order Number [sRN OrdNum] {#read-device-order-number-srn-ordnum}

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

Example: sRA OrdNum 1141751 (order number of a picoScan120)

**Example for a picoScan120: sRA OrdNum**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}OrdNum{SPC}7{SPC}1141751<ETX>
```

```text
02 73 52 41 20 4F 72 64 4E 75 6D 20 37 20 31 31 34 31 37 35 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 41 20 4F 72 64 4E 75 6D 20 00 07 31 31 34 31 37 35 31 5E
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Device Type [sRN DItype] {#read-device-type-srn-ditype}

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

**Example: sRA DItype (picoScan120)**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}DItype{SPC}B{SPC}picoScan120<ETX>
```

```text
02 73 52 41 20 44 49 74 79 70 65 20 42 20 70 69 63 6F 53 63 61 6E 31 32 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 18 73 52 41 20 44 49 74 79 70 65 20 00 0B 70 69 63 6F 53 63 61 6E 31 32 30 67
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Initiate an Acoustic or Visual Signal for a Defined Period of Time [sMN FindMe] {#initiate-an-acoustic-or-visual-signal-for-a-defined-period-of-time-smn-findme}

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

## Basic Settings {#basic-settings}

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read State of LEDs [sRN LEDState] {#read-state-of-leds-srn-ledstate}

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

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Receive State of LEDs by Event [sEN LEDState] {#receive-state-of-leds-by-event-sen-ledstate}

</summary>

Returns the LED status. After registration, the device sends the current value as an `sSN` telegram whenever it changes. Send the telegram with the value 0 to stop the event.

**Telegram structure: sEN LEDState**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Receive State of LEDs by Event | String | 8 | | `LEDState` | `4C 45 44 53 74 61 74 65` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN LEDState**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}LEDState{SPC}1<ETX>
```

```text
<STX>sEN LEDState 1<ETX>
```

```text
sEN LEDState 1
```

```text
02 73 45 4E 20 4C 45 44 53 74 61 74 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 45 4E 20 4C 45 44 53 74 61 74 65 20 01 63
```

```text
73 45 4E 20 4C 45 44 53 74 61 74 65 20 01
```

**Telegram structure: sEA LEDState**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sEA` | `73 45 41` |
| Command | Receive State of LEDs by Event | String | 8 | | `LEDState` | `4C 45 44 53 74 61 74 65` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEA LEDState**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}LEDState{SPC}1<ETX>
```

```text
02 73 45 41 20 4C 45 44 53 74 61 74 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 45 41 20 4C 45 44 53 74 61 74 65 20 01 6C
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read LED Enable [sRN LEDEnable] {#read-led-enable-srn-ledenable}

</summary>

Returns the LED mode (on/off).

**Telegram structure: sRN LEDEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read LED Enable | String | 9 | | `LEDEnable` | `4C 45 44 45 6E 61 62 6C 65` |

**Example: sRN LEDEnable**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LEDEnable<ETX>
```

```text
<STX>sRN LEDEnable<ETX>
```

```text
sRN LEDEnable
```

```text
02 73 52 4E 20 4C 45 44 45 6E 61 62 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0D 73 52 4E 20 4C 45 44 45 6E 61 62 6C 65 23
```

```text
73 52 4E 20 4C 45 44 45 6E 61 62 6C 65
```

**Telegram structure: sRA LEDEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read LED Enable | String | 9 | | `LEDEnable` | `4C 45 44 45 6E 61 62 6C 65` |
| LEDEnable | Enable or disable LEDs | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |

**Example: sRA LEDEnable**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LEDEnable{SPC}1<ETX>
```

```text
02 73 52 41 20 4C 45 44 45 6E 61 62 6C 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 41 20 4C 45 44 45 6E 61 62 6C 65 20 01 0D
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Enable/ Disable LEDs [sWN LEDEnable] {#enable-disable-leds-swn-ledenable}

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

### Start Measurement [sMN LMCstartmeas] {#start-measurement-smn-lmcstartmeas}

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

### Activate Standby Mode [sMN LMCstandby] {#activate-standby-mode-smn-lmcstandby}

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

### Stop Measurement [sMN LMCstopmeas] {#stop-measurement-smn-lmcstopmeas}

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

### Read Autostart Measurement [sRN LMPautostartmeas] {#read-autostart-measurement-srn-lmpautostartmeas}

</summary>

Returns the mode for automatic start of measurement after boot-up.

**Telegram structure: sRN LMPautostartmeas**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Autostart Measurement | String | 16 | | `LMPautostartmeas` | `4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73` |

**Example: sRN LMPautostartmeas**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LMPautostartmeas<ETX>
```

```text
<STX>sRN LMPautostartmeas<ETX>
```

```text
sRN LMPautostartmeas
```

```text
02 73 52 4E 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 4E 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 6B
```

```text
73 52 4E 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73
```

**Telegram structure: sRA LMPautostartmeas**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Autostart Measurement | String | 16 | | `LMPautostartmeas` | `4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73` |
| AutoStartMeasure | Start measurement after boot-up automatically | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |

**Example: sRA LMPautostartmeas**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LMPautostartmeas{SPC}1<ETX>
```

```text
02 73 52 41 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 52 41 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 20 01 45
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Autostart Measurement [sWN LMPautostartmeas] {#autostart-measurement-swn-lmpautostartmeas}

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

### Read for Frequency and Angular Resolution [sRN LMPscancfg] {#read-for-frequency-and-angular-resolution-srn-lmpscancfg}

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

### Read Operating Mode [sRN operatingMode] {#read-operating-mode-srn-operatingmode}

</summary>

Returns the operating mode of the receiver unit.

**Telegram structure: sRN operatingMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Operating Mode | String | 13 | | `operatingMode` | `6F 70 65 72 61 74 69 6E 67 4D 6F 64 65` |

**Example: sRN operatingMode**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}operatingMode<ETX>
```

```text
<STX>sRN operatingMode<ETX>
```

```text
sRN operatingMode
```

```text
02 73 52 4E 20 6F 70 65 72 61 74 69 6E 67 4D 6F 64 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 52 4E 20 6F 70 65 72 61 74 69 6E 67 4D 6F 64 65 11
```

```text
73 52 4E 20 6F 70 65 72 61 74 69 6E 67 4D 6F 64 65
```


**Telegram structure: sRA operatingMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Operating Mode | String | 13 | | `operatingMode` | `6F 70 65 72 61 74 69 6E 67 4D 6F 64 65` |
| operatingMode | Operating mode of the receiver unit | Enum_8 | 1 | Standard:<br>Reflector optimization: | `0<br>1` | `00<br>01` |

**Example: sRA operatingMode**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}operatingMode{SPC}0<ETX>
```

```text
02 73 52 41 20 6F 70 65 72 61 74 69 6E 67 4D 6F 64 65 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 41 20 6F 70 65 72 61 74 69 6E 67 4D 6F 64 65 20 00 3E
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Operating Mode [sWN operatingMode] {#set-operating-mode-swn-operatingmode}

</summary>

Sets the operating mode of the receiver unit. This telegram requires at least user level: Authorized Client.

**Telegram structure: sWN operatingMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set Operating Mode | String | 13 | | `operatingMode` | `6F 70 65 72 61 74 69 6E 67 4D 6F 64 65` |
| operatingMode | Operating mode of the receiver unit | Enum_8 | 1 | Standard:<br>Reflector optimization: | `0<br>1` | `00<br>01` |

**Example: sWN operatingMode**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}operatingMode{SPC}0<ETX>
```

```text
<STX>sWN operatingMode 0<ETX>
```

```text
sWN operatingMode 0
```

```text
02 73 57 4E 20 6F 70 65 72 61 74 69 6E 67 4D 6F 64 65 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 4E 20 6F 70 65 72 61 74 69 6E 67 4D 6F 64 65 20 00 34
```

```text
73 57 4E 20 6F 70 65 72 61 74 69 6E 67 4D 6F 64 65 20 00
```


**Telegram structure: sWA operatingMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set Operating Mode | String | 13 | | `operatingMode` | `6F 70 65 72 61 74 69 6E 67 4D 6F 64 65` |

**Example: sWA operatingMode**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}operatingMode<ETX>
```

```text
02 73 57 41 20 6F 70 65 72 61 74 69 6E 67 4D 6F 64 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 57 41 20 6F 70 65 72 61 74 69 6E 67 4D 6F 64 65 20 3B
```

</details>

</section>

<section class="cola-category" markdown="1">

## Date and System Time {#date-and-system-time}

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Time Synchronization [sRN TSCRole] {#read-time-synchronization-srn-tscrole}

</summary>

Returns the time synchronization role (none, NTP or PTP).

**Telegram structure: sRN TSCRole**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Time Synchronization | String | 7 | | `TSCRole` | `54 53 43 52 6F 6C 65` |

**Example: sRN TSCRole**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}TSCRole<ETX>
```

```text
<STX>sRN TSCRole<ETX>
```

```text
sRN TSCRole
```

```text
02 73 52 4E 20 54 53 43 52 6F 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0B 73 52 4E 20 54 53 43 52 6F 6C 65 3F
```

```text
73 52 4E 20 54 53 43 52 6F 6C 65
```

**Telegram structure: sRA TSCRole**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Time Synchronization | String | 7 | | `TSCRole` | `54 53 43 52 6F 6C 65` |
| TSCRole | Select the role (none or client) | Enum_8 | 1 | TX_NONE:<br>TX_CLIENT:<br>TX_PTP_SLAVE: | `0<br>1<br>3` | `00<br>01<br>03` |

**Example: sRA TSCRole**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}TSCRole{SPC}0<ETX>
```

```text
02 73 52 41 20 54 53 43 52 6F 6C 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0D 73 52 41 20 54 53 43 52 6F 6C 65 20 00 10
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Time Synchronization [sWN TSCRole] {#set-time-synchronization-swn-tscrole}

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

### Read Time Server IP Address [sRN TSCTCSrvAddr] {#read-time-server-ip-address-srn-tsctcsrvaddr}

</summary>

Returns the IP address of the time server.

**Telegram structure: sRN TSCTCSrvAddr**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Time Server IP Address | String | 12 | | `TSCTCSrvAddr` | `54 53 43 54 43 53 72 76 41 64 64 72` |

**Example: sRN TSCTCSrvAddr**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}TSCTCSrvAddr<ETX>
```

```text
<STX>sRN TSCTCSrvAddr<ETX>
```

```text
sRN TSCTCSrvAddr
```

```text
02 73 52 4E 20 54 53 43 54 43 53 72 76 41 64 64 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 52 4E 20 54 53 43 54 43 53 72 76 41 64 64 72 78
```

```text
73 52 4E 20 54 53 43 54 43 53 72 76 41 64 64 72
```

**Telegram structure: sRA TSCTCSrvAddr**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Time Server IP Address | String | 12 | | `TSCTCSrvAddr` | `54 53 43 54 43 53 72 76 41 64 64 72` |
| TSCTCSrvAddr[] | Value (repeated 4 times) | Uint_8 | 1 | 0 ... 255 | `0 ... FF` | `00 ... FF` |

**Example: sRA TSCTCSrvAddr**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}TSCTCSrvAddr{SPC}C0{SPC}A8{SPC}0{SPC}B<ETX>
```

```text
02 73 52 41 20 54 53 43 54 43 53 72 76 41 64 64 72 20 43 30 20 41 38 20 30 20 42 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 52 41 20 54 53 43 54 43 53 72 76 41 64 64 72 20 C0 A8 00 0B 34
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Time Server IP Address [sWN TSCTCSrvAddr] {#set-time-server-ip-address-swn-tsctcsrvaddr}

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

### Read Time Zone [sRN TSCTCtimezone] {#read-time-zone-srn-tsctctimezone}

</summary>

Returns the time zone of the client.

**Telegram structure: sRN TSCTCtimezone**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Time Zone | String | 13 | | `TSCTCtimezone` | `54 53 43 54 43 74 69 6D 65 7A 6F 6E 65` |

**Example: sRN TSCTCtimezone**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}TSCTCtimezone<ETX>
```

```text
<STX>sRN TSCTCtimezone<ETX>
```

```text
sRN TSCTCtimezone
```

```text
02 73 52 4E 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 52 4E 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 17
```

```text
73 52 4E 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65
```

**Telegram structure: sRA TSCTCtimezone**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Time Zone | String | 13 | | `TSCTCtimezone` | `54 53 43 54 43 74 69 6D 65 7A 6F 6E 65` |
| TSCTCtimezone | Select the time zone of the client | Enum_8 | 1 | DATE_LINE_STANDARD:<br>COORD_WORLD_TIME_11:<br>HAWAII:<br>ALASKA:<br>CALIFORNIA:<br>USA_CANADA:<br>ARIZONA:<br>LA_PAZ:<br>MOUNTAIN_TIME_USA:<br>CENTRAL_TIME_USA:<br>MEXICO_CITY:<br>MIDDLE_AMERICA:<br>SASKATCHEWAN:<br>BOGOTA_LIMA:<br>EASTERN_TIME_USA:<br>INDIANA:<br>CARACAS:<br>ASUNCION:<br>ATLANTIC_KANADA:<br>CUIABA:<br>LAPAZ_SANJUAN:<br>SANTIAGO:<br>NEUFUNDLAND:<br>BRASILIA:<br>BUENOS_AIRES:<br>CAYENNE_FORTALEZA:<br>GROENLAND:<br>MONTEVIDEO:<br>SALVADOR:<br>COORD_WORLD_TIME_02:<br>AZOREN:<br>KAP_VERDE:<br>CASABLANCA:<br>DUBLIN_LISSABON_LONDON:<br>COORD_WORLD_TIME:<br>MONROVIA_REYKJAVIK:<br>AMSTERDAM_BERLIN_ROM:<br>BELGRAD_BUDAPEST_PRAG:<br>BRUESSEL_MADRID_PARIS:<br>SARAJEVO_WARSCHAU:<br>WEST_CENTRAL_AFRICA:<br>WINDHUK:<br>JOHANNESBURG:<br>AMMAN:<br>ATHEN_BUKAREST:<br>BEIRUT:<br>DAMASCUS:<br>HARARE_PRETORIA:<br>HELSINKI_KIEW_RIGA:<br>ISTANBUL:<br>JERUSALEM:<br>KAIRO:<br>KALININGRAD:<br>TRIPOLIS:<br>BAGDAD:<br>KUWAIT_RIAD:<br>MINSK:<br>MOSKAU_PETERSBURG:<br>NAIROBI:<br>TEHERAN:<br>ABU_DHABI:<br>BAKU:<br>ERIWAN:<br>ISCHEWSK_SAMARA:<br>PORT_LOUIS:<br>TIFLIS:<br>KABUL:<br>ASCHGABET_TASCHKENT:<br>ISLAMABAD_KARATSCHI:<br>JEKATERINBURG:<br>MUMBAI_NEUDELHI:<br>SRI_JAYAWARDENEPURA:<br>KATMANDU:<br>ASTANA:<br>DAKKA:<br>NOWOSIBIRSK:<br>YANGON:<br>BANGKOK_HANOI_JAKARTA:<br>KRASNOJARSK:<br>IRKUTSK:<br>KUALA_LUMPUR_SINGAPUR:<br>PEKING_HONGKONG:<br>PERTH:<br>TAIPEH:<br>ULAN_BATOR:<br>JAKUTSK:<br>OSAKA_TOKIO:<br>SEOUL:<br>ADELAIDE:<br>DARWIN:<br>BRISBANE:<br>CANBERRA_SYDNEY:<br>GUAM_PORT_MORESBY:<br>HOBART:<br>MAGADAN:<br>WLADIWOSTOK:<br>SALOMONEN_KALEDONIEN:<br>TSCHOKURDACH:<br>ANADYR:<br>AUCKLAND_WELLINGTON:<br>FIDSCHI:<br>COORD_WORLD_TIME_12:<br>NAKUALOFA:<br>SAMOA:<br>KIRITIMATI: | `0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>A<br>B<br>C<br>D<br>E<br>F<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>1A<br>1B<br>1C<br>1D<br>1E<br>1F<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>2A<br>2B<br>2C<br>2D<br>2E<br>2F<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>3A<br>3B<br>3C<br>3D<br>3E<br>3F<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>4A<br>4B<br>4C<br>4D<br>4E<br>4F<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59<br>5A<br>5B<br>5C<br>5D<br>5E<br>5F<br>60<br>61<br>62<br>63<br>64<br>65<br>66<br>67<br>68` | `00<br>01<br>02<br>03<br>04<br>05<br>06<br>07<br>08<br>09<br>0A<br>0B<br>0C<br>0D<br>0E<br>0F<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>1A<br>1B<br>1C<br>1D<br>1E<br>1F<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>2A<br>2B<br>2C<br>2D<br>2E<br>2F<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>3A<br>3B<br>3C<br>3D<br>3E<br>3F<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>4A<br>4B<br>4C<br>4D<br>4E<br>4F<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59<br>5A<br>5B<br>5C<br>5D<br>5E<br>5F<br>60<br>61<br>62<br>63<br>64<br>65<br>66<br>67<br>68` |

**Example: sRA TSCTCtimezone**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}TSCTCtimezone{SPC}24<ETX>
```

```text
02 73 52 41 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 20 32 34 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 41 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 20 24 1C
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Time Zone [sWN TSCTCtimezone] {#set-time-zone-swn-tsctctimezone}

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

### Read Update Time [sRN TSCTCupdatetime] {#read-update-time-srn-tsctcupdatetime}

</summary>

Returns the update time of the client.

**Telegram structure: sRN TSCTCupdatetime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Update Time | String | 15 | | `TSCTCupdatetime` | `54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65` |

**Example: sRN TSCTCupdatetime**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}TSCTCupdatetime<ETX>
```

```text
<STX>sRN TSCTCupdatetime<ETX>
```

```text
sRN TSCTCupdatetime
```

```text
02 73 52 4E 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 4E 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 18
```

```text
73 52 4E 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65
```

**Telegram structure: sRA TSCTCupdatetime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Update Time | String | 15 | | `TSCTCupdatetime` | `54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65` |
| TSCTCupdatetime | Update time for the time client | Uint_32 | 4 | 1 ... 3600 s | `1 ... E10` | `00 00 00 01 ... 00 00 0E 10` |

**Example: sRA TSCTCupdatetime**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}TSCTCupdatetime{SPC}258<ETX>
```

```text
02 73 52 41 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 20 32 35 38 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 18 73 52 41 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 20 00 00 02 58 6D
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Update Time [sWN TSCTCupdatetime] {#set-update-time-swn-tsctcupdatetime}

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

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Device Time [sRN LSPdatetime] {#read-device-time-srn-lspdatetime}

</summary>

Returns the current time of the device (years, months, days, hours, minutes, seconds, microseconds).

**Telegram structure: sRN LSPdatetime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Device Time | String | 11 | | `LSPdatetime` | `4C 53 50 64 61 74 65 74 69 6D 65` |

**Example: sRN LSPdatetime**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LSPdatetime<ETX>
```

```text
<STX>sRN LSPdatetime<ETX>
```

```text
sRN LSPdatetime
```

```text
02 73 52 4E 20 4C 53 50 64 61 74 65 74 69 6D 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 4E 20 4C 53 50 64 61 74 65 74 69 6D 65 01
```

```text
73 52 4E 20 4C 53 50 64 61 74 65 74 69 6D 65
```

**Telegram structure: sRA LSPdatetime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Device Time | String | 11 | | `LSPdatetime` | `4C 53 50 64 61 74 65 74 69 6D 65` |
| uiYear | uiYear | Uint_16 | 2 | 0 ... 2105 | `0 ... 839` | `00 00 ... 08 39` |
| usiMonth | usiMonth | Uint_8 | 1 | 0 ... 12 | `0 ... C` | `00 ... 0C` |
| usiDay | usiDay | Uint_8 | 1 | 0 ... 31 | `0 ... 1F` | `00 ... 1F` |
| usiHour | Value for [h] in current time | Uint_8 | 1 | 0 ... 23 | `0 ... 17` | `00 ... 17` |
| usiMinute | Value for [min] in current time | Uint_8 | 1 | 0 ... 59 | `0 ... 3B` | `00 ... 3B` |
| usiSec | Value for [s] in current time | Uint_8 | 1 | 0 ... 59 | `0 ... 3B` | `00 ... 3B` |
| udiUSec | Value for [µs] in current time | Uint_32 | 4 | 0 ... 999999 | `0 ... F423F` | `00 00 00 00 ... 00 0F 42 3F` |

**Example: sRA LSPdatetime**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LSPdatetime{SPC}7B2{SPC}1{SPC}1{SPC}1{SPC}11{SPC}10{SPC}29040<ETX>
```

```text
02 73 52 41 20 4C 53 50 64 61 74 65 74 69 6D 65 20 37 42 32 20 31 20 31 20 31 20 31 31 20 31 30 20 32 39 30 34 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 52 41 20 4C 53 50 64 61 74 65 74 69 6D 65 20 07 B2 01 01 01 11 10 00 02 90 40 49
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Receive Device Time by Event [sEN LSPdatetime] {#receive-device-time-by-event-sen-lspdatetime}

</summary>

Returns the current time of the device (years, months, days, hours, minutes, seconds, microseconds). After registration, the device sends the current value as an `sSN` telegram whenever it changes. Send the telegram with the value 0 to stop the event.

**Telegram structure: sEN LSPdatetime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Receive Device Time by Event | String | 11 | | `LSPdatetime` | `4C 53 50 64 61 74 65 74 69 6D 65` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN LSPdatetime**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}LSPdatetime{SPC}1<ETX>
```

```text
<STX>sEN LSPdatetime 1<ETX>
```

```text
sEN LSPdatetime 1
```

```text
02 73 45 4E 20 4C 53 50 64 61 74 65 74 69 6D 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 45 4E 20 4C 53 50 64 61 74 65 74 69 6D 65 20 01 37
```

```text
73 45 4E 20 4C 53 50 64 61 74 65 74 69 6D 65 20 01
```

**Telegram structure: sEA LSPdatetime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sEA` | `73 45 41` |
| Command | Receive Device Time by Event | String | 11 | | `LSPdatetime` | `4C 53 50 64 61 74 65 74 69 6D 65` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEA LSPdatetime**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}LSPdatetime{SPC}1<ETX>
```

```text
02 73 45 41 20 4C 53 50 64 61 74 65 74 69 6D 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 45 41 20 4C 53 50 64 61 74 65 74 69 6D 65 20 01 38
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Time Stamp [sMN LSPsetdatetime] {#set-time-stamp-smn-lspsetdatetime}

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

</section>

<section class="cola-category" markdown="1">

## Filter {#filter}

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Particle Filter [sRN LFPparticle] {#read-particle-filter-srn-lfpparticle}

</summary>

Returns the particle filter settings. Filters out disturbances in the measurement data caused by particles such as dust, snowflakes, or similar. Configure the minimal threshold of the required distance step (mm) between the echo to be filtered and the echoes of surrounding beam angles.

**Telegram structure: sRN LFPparticle**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Particle Filter | String | 11 | | `LFPparticle` | `4C 46 50 70 61 72 74 69 63 6C 65` |

**Example: sRN LFPparticle**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LFPparticle<ETX>
```

```text
<STX>sRN LFPparticle<ETX>
```

```text
sRN LFPparticle
```

```text
02 73 52 4E 20 4C 46 50 70 61 72 74 69 63 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 4E 20 4C 46 50 70 61 72 74 69 63 6C 65 01
```

```text
73 52 4E 20 4C 46 50 70 61 72 74 69 63 6C 65
```

**Telegram structure: sRA LFPparticle**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Particle Filter | String | 11 | | `LFPparticle` | `4C 46 50 70 61 72 74 69 63 6C 65` |
| bEnable | Particle filter is enabled | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| uiThreshold | Threshold value to decide which scan point should be replaced | Uint_16 | 2 | 20 ... 5000 mm | `14 ... 1388` | `00 14 ... 13 88` |

**Example: sRA LFPparticle**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LFPparticle{SPC}0{SPC}1F4<ETX>
```

```text
02 73 52 41 20 4C 46 50 70 61 72 74 69 63 6C 65 20 30 20 31 46 34 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 41 20 4C 46 50 70 61 72 74 69 63 6C 65 20 00 01 F4 DB
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Particle Filter [sWN LFPparticle] {#set-particle-filter-swn-lfpparticle}

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

</section>

<section class="cola-category" markdown="1">

## Ethernet {#ethernet}

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read IP Address [sRN EIIpAddr] {#read-ip-address-srn-eiipaddr}

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

### Set IP Address [sWN EIIpAddr] {#set-ip-address-swn-eiipaddr}

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

### Read Ethernet Gateway [sRN EIgate] {#read-ethernet-gateway-srn-eigate}

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

### Set Ethernet Gateway [sWN EIgate] {#set-ethernet-gateway-swn-eigate}

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

### Read IP Mask [sRN EImask] {#read-ip-mask-srn-eimask}

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

### Set IP Mask [sWN EImask] {#set-ip-mask-swn-eimask}

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

### Read Mode for Ethernet Address Assignment [sRN EIAddrMode] {#read-mode-for-ethernet-address-assignment-srn-eiaddrmode}

</summary>

Returns the mode for the IP address assignment (static or DHCP).

**Telegram structure: sRN EIAddrMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Mode for Ethernet Address Assignment | String | 10 | | `EIAddrMode` | `45 49 41 64 64 72 4D 6F 64 65` |

**Example: sRN EIAddrMode**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EIAddrMode<ETX>
```

```text
<STX>sRN EIAddrMode<ETX>
```

```text
sRN EIAddrMode
```

```text
02 73 52 4E 20 45 49 41 64 64 72 4D 6F 64 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 52 4E 20 45 49 41 64 64 72 4D 6F 64 65 53
```

```text
73 52 4E 20 45 49 41 64 64 72 4D 6F 64 65
```

**Telegram structure: sRA EIAddrMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Mode for Ethernet Address Assignment | String | 10 | | `EIAddrMode` | `45 49 41 64 64 72 4D 6F 64 65` |
| EtherAddressingMode | Which mode to use for Ethernet address assignment | Enum_8 | 1 | TX_IP_STATIC:<br>TX_IP_DHCP: | `0<br>1` | `00<br>01` |

**Example: sRA EIAddrMode**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EIAddrMode{SPC}0<ETX>
```

```text
02 73 52 41 20 45 49 41 64 64 72 4D 6F 64 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 52 41 20 45 49 41 64 64 72 4D 6F 64 65 20 00 7C
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Mode for Ethernet Address Assignment [sWN EIAddrMode] {#set-mode-for-ethernet-address-assignment-swn-eiaddrmode}

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

### Read Fallback for DHCP [sRN EIDHCPFallback] {#read-fallback-for-dhcp-srn-eidhcpfallback}

</summary>

Returns the mode for the DHCP fallback (retry or static).

**Telegram structure: sRN EIDHCPFallback**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Fallback for DHCP | String | 14 | | `EIDHCPFallback` | `45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B` |

**Example: sRN EIDHCPFallback**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EIDHCPFallback<ETX>
```

```text
<STX>sRN EIDHCPFallback<ETX>
```

```text
sRN EIDHCPFallback
```

```text
02 73 52 4E 20 45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 4E 20 45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B 70
```

```text
73 52 4E 20 45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B
```

**Telegram structure: sRA EIDHCPFallback**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Fallback for DHCP | String | 14 | | `EIDHCPFallback` | `45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B` |
| EtherDHCPFallback | Fallback if DHCP not successful | Enum_8 | 1 | TX_USE_STATIC_IP:<br>TX_RETRY_DHCP: | `0<br>1` | `00<br>01` |

**Example: sRA EIDHCPFallback**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EIDHCPFallback{SPC}0<ETX>
```

```text
02 73 52 41 20 45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 41 20 45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B 20 00 5F
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Fallback for DHCP [sWN EIDHCPFallback] {#set-fallback-for-dhcp-swn-eidhcpfallback}

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

### Apply Configured Ethernet Settings [sMN mEthUpdt] {#apply-configured-ethernet-settings-smn-methupdt}

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

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read IP Address Assigned by DHCP [sRN EIIpAddrDHCP] {#read-ip-address-assigned-by-dhcp-srn-eiipaddrdhcp}

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

### Read Ethernet Gateway IP Address Assigned by DHCP [sRN EIgateDHCP] {#read-ethernet-gateway-ip-address-assigned-by-dhcp-srn-eigatedhcp}

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

### Read IP Mask Assigned by DHCP [sRN EImaskDHCP] {#read-ip-mask-assigned-by-dhcp-srn-eimaskdhcp}

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

### Read MAC Address [sRN EIMacAdr] {#read-mac-address-srn-eimacadr}

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

</section>

<section class="cola-category" markdown="1">

## Inputs and Outputs {#inputs-and-outputs}

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read State of the Outputs [sRN LIDoutputstate] {#read-state-of-the-outputs-srn-lidoutputstate}

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

### Receive Outputstate by Event [sEN LIDoutputstate] {#receive-outputstate-by-event-sen-lidoutputstate}

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

### Read State of the Ports [sRN LIDportstate] {#read-state-of-the-ports-srn-lidportstate}

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

### Receive State of the Ports by Event [sEN LIDportstate] {#receive-state-of-the-ports-by-event-sen-lidportstate}

</summary>

Returns the state of the ports. "PortState" is preferred over "OutputState". After registration, the device sends the current value as an `sSN` telegram whenever it changes. Send the telegram with the value 0 to stop the event.

**Telegram structure: sEN LIDportstate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Receive State of the Ports by Event | String | 12 | | `LIDportstate` | `4C 49 44 70 6F 72 74 73 74 61 74 65` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN LIDportstate**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}LIDportstate{SPC}1<ETX>
```

```text
<STX>sEN LIDportstate 1<ETX>
```

```text
sEN LIDportstate 1
```

```text
02 73 45 4E 20 4C 49 44 70 6F 72 74 73 74 61 74 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 45 4E 20 4C 49 44 70 6F 72 74 73 74 61 74 65 20 01 56
```

```text
73 45 4E 20 4C 49 44 70 6F 72 74 73 74 61 74 65 20 01
```

**Telegram structure: sEA LIDportstate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sEA` | `73 45 41` |
| Command | Receive State of the Ports by Event | String | 12 | | `LIDportstate` | `4C 49 44 70 6F 72 74 73 74 61 74 65` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEA LIDportstate**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}LIDportstate{SPC}1<ETX>
```

```text
02 73 45 41 20 4C 49 44 70 6F 72 74 73 74 61 74 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 45 41 20 4C 49 44 70 6F 72 74 73 74 61 74 65 20 01 59
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Reset Output Counter [sMN LIDrstoutpcnt] {#reset-output-counter-smn-lidrstoutpcnt}

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

### Read Port Configuration of All I/Os [sRN PortConfiguration] {#read-port-configuration-of-all-ios-srn-portconfiguration}

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

### Set Port Configuration [sWN PortConfiguration] {#set-port-configuration-swn-portconfiguration}

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

### Set Output State [sMN mDOSetOutput] {#set-output-state-smn-mdosetoutput}

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

</section>

<section class="cola-category" markdown="1">

## Measurement Data Output {#measurement-data-output}

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read the Port Number for CoLa Binary TCP/IP [sRN EIHstPort] {#read-the-port-number-for-cola-binary-tcpip-srn-eihstport}

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

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set the Port Number for CoLa Binary TCP/IP [sWN EIHstPort] {#set-the-port-number-for-cola-binary-tcpip-swn-eihstport}

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
02 02 02 02 00 00 00 0E 73 57 41 20 45 49 48 73 74 50 6F 72 74 20 1F
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read the Port Number for CoLa ASCII TCP/IP [sRN EIAuxPort] {#read-the-port-number-for-cola-ascii-tcpip-srn-eiauxport}

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

### Set the Port Number for CoLa ASCII TCP/IP [sWN EIAuxPort] {#set-the-port-number-for-cola-ascii-tcpip-swn-eiauxport}

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
02 02 02 02 00 00 00 0E 73 57 41 20 45 49 41 75 78 50 6F 72 74 20 1C
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read the Session Timeout for TCP/IP Communication [sRN EtherSessionTimeout] {#read-the-session-timeout-for-tcpip-communication-srn-ethersessiontimeout}

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

### Set the Session Timeout for TCP/IP Communication [sWN EtherSessionTimeout] {#set-the-session-timeout-for-tcpip-communication-swn-ethersessiontimeout}

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
02 02 02 02 00 00 00 18 73 57 41 20 45 74 68 65 72 53 65 73 73 69 6F 6E 54 69 6D 65 6F 75 74 20 2E
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Streaming Ethernet Settings [sRN ScanDataEthSettings] {#read-streaming-ethernet-settings-srn-scandataethsettings}

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

### Set Streaming Ethernet Settings [sWN ScanDataEthSettings] {#set-streaming-ethernet-settings-swn-scandataethsettings}

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

### Read Scan Data Enable [sRN ScanDataEnable] {#read-scan-data-enable-srn-scandataenable}

</summary>

Returns whether the measurement data streaming is enabled. The measurement data itself is sent via a UDP-based SICK-specific format. A Python example can be found at <https://github.com/SICKAG/ScanSegmentAPI>.

**Telegram structure: sRN ScanDataEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Scan Data Enable | String | 14 | | `ScanDataEnable` | `53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65` |

**Example: sRN ScanDataEnable**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ScanDataEnable<ETX>
```

```text
<STX>sRN ScanDataEnable<ETX>
```

```text
sRN ScanDataEnable
```

```text
02 73 52 4E 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 4E 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65 61
```

```text
73 52 4E 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65
```

**Telegram structure: sRA ScanDataEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Scan Data Enable | String | 14 | | `ScanDataEnable` | `53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65` |
| ScanDataEnable | Enables/ Disables streaming data output. | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |

**Example: sRA ScanDataEnable**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ScanDataEnable{SPC}0<ETX>
```

```text
02 73 52 41 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 41 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65 20 00 4E
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Scan Data Enable [sWN ScanDataEnable] {#set-scan-data-enable-swn-scandataenable}

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

### Read Scan Data Format [sRN ScanDataFormat] {#read-scan-data-format-srn-scandataformat}

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

### Set Scan Data Format [sWN ScanDataFormat] {#set-scan-data-format-swn-scandataformat}

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

### Read ROS Frame ID [sRN rosFrameId] {#read-ros-frame-id-srn-rosframeid}

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

### Write ROS Frame ID [sWN rosFrameId] {#write-ros-frame-id-swn-rosframeid}

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

### Read ROS Parent Frame ID [sRN rosParentFrameId] {#read-ros-parent-frame-id-srn-rosparentframeid}

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

### Write ROS Parent Frame ID [sWN rosParentFrameId] {#write-ros-parent-frame-id-swn-rosparentframeid}

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

### Read ROS Namespace [sRN rosNamespace] {#read-ros-namespace-srn-rosnamespace}

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

### Write ROS Namespace [sWN rosNamespace] {#write-ros-namespace-swn-rosnamespace}

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

### Read the Data Content for the Scan [sRN LMDscandatacfg] {#read-the-data-content-for-the-scan-srn-lmdscandatacfg}

</summary>

Returns the configuration of LMDscandata such as the content of the scan data (e.g. whether to include the RSSI values).

**Telegram structure: sRN LMDscandatacfg**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read the Data Content for the Scan | String | 14 | | `LMDscandatacfg` | `4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67` |

**Example: sRN LMDscandatacfg**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LMDscandatacfg<ETX>
```

```text
<STX>sRN LMDscandatacfg<ETX>
```

```text
sRN LMDscandatacfg
```

```text
02 73 52 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67 67
```

```text
73 52 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67
```

**Telegram structure: sRA LMDscandatacfg**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read the Data Content for the Scan | String | 14 | | `LMDscandatacfg` | `4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67` |
| Reserved | Always 0 | Uint_8 | 1 | 0 ... 255 | `0 ... FF` | `00 ... FF` |
| Reserved | Always 0 | Uint_8 | 1 | 0 ... 255 | `0 ... FF` | `00 ... FF` |
| RSSI | Output of RSSI values | Uint_8 | 1 | Disabled:<br>Enabled: | `0<br>1` | `00<br>01` |
| Reserved | Always 0 | Enum_8 | 1 | 0 ... 255 | `0 ... FF` | `00 ... FF` |
| Reserved | Always 0 | Enum_8 | 1 | 0 ... 255 | `0 ... FF` | `00 ... FF` |
| Encoder | Encoder data | Uint_8 | 1 | No encoder:<br>Channel 1: | `0<br>1` | `00<br>01` |
| Reserved | Always 0 | Uint_8 | 1 | 0 ... 255 | `0 ... FF` | `00 ... FF` |
| Reserved | Always 0 | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| Device name | Sends the device name | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| Reserved | Always 0 | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| Time | Sends time stamp information | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| Reserved | Always 1 | Uint_16 | 2 | 0 ... 65535 | `0 ... FFFF` | `00 00 ... FF FF` |

**Example: sRA LMDscandatacfg**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LMDscandatacfg{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1<ETX>
```

```text
02 73 52 41 20 4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67 20 30 20 30 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 20 73 52 41 20 4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67 20 00 00 01 00 00 00 00 00 00 00 00 00 01 48
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Configure the Data Content for the Scan [sWN LMDscandatacfg] {#configure-the-data-content-for-the-scan-swn-lmdscandatacfg}

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

### Poll One Telegram [sRN LMDscandata] {#poll-one-telegram-srn-lmdscandata}

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

### Send Data Permanently [sEN LMDscandata] {#send-data-permanently-sen-lmdscandata}

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

### Read the Configured ROS Domain ID Set for Native ROS 2 [sRN rosDomainId] {#read-the-configured-ros-domain-id-set-for-native-ros-2-srn-rosdomainid}

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

### Configure the ROS Domain ID for Native ROS 2 [sWN rosDomainId] {#configure-the-ros-domain-id-for-native-ros-2-swn-rosdomainid}

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
02 02 02 02 00 00 00 10 73 57 41 20 72 6F 73 44 6F 6D 61 69 6E 49 64 20 06
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read compactTelegramType1Content [sRN compactTelegramType1Content] {#read-compacttelegramtype1content-srn-compacttelegramtype1content}

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

### Set the Content of the Compact Format Telegram Type 1 [sWN compactTelegramType1Content] {#set-the-content-of-the-compact-format-telegram-type-1-swn-compacttelegramtype1content}

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
02 02 02 02 00 00 00 20 73 57 41 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 31 43 6F 6E 74 65 6E 74 20 63
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Sensor Position [sRN SensorPosition] {#read-sensor-position-srn-sensorposition}

</summary>

Returns the mounting position in 1/10000 deg. This only affects the PointCloud2 format output by native ROS2.

**Telegram structure: sRN SensorPosition**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Sensor Position | String | 14 | | `SensorPosition` | `53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E` |

**Example: sRN SensorPosition**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}SensorPosition<ETX>
```

```text
<STX>sRN SensorPosition<ETX>
```

```text
sRN SensorPosition
```

```text
02 73 52 4E 20 53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 4E 20 53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E 40
```

```text
73 52 4E 20 53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E
```

**Telegram structure: sRA SensorPosition**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Sensor Position | String | 14 | | `SensorPosition` | `53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E` |
| x | in mm | Int_32 | 4 | -100000 ... 100000 | `-100000 ... +100000` | `FF FE 79 60 ... 00 01 86 A0` |
| y | in mm | Int_32 | 4 | -100000 ... 100000 | `-100000 ... +100000` | `FF FE 79 60 ... 00 01 86 A0` |
| z | in mm | Int_32 | 4 | -100000 ... 100000 | `-100000 ... +100000` | `FF FE 79 60 ... 00 01 86 A0` |
| yaw | in 1/10000 deg | Int_32 | 4 | -3600000 ... 3600000 | `-3600000 ... +3600000` | `FF C9 11 80 ... 00 36 EE 80` |
| pitch | in 1/10000 deg | Int_32 | 4 | -3600000 ... 3600000 | `-3600000 ... +3600000` | `FF C9 11 80 ... 00 36 EE 80` |
| roll | in 1/10000 deg | Int_32 | 4 | -3600000 ... 3600000 | `-3600000 ... +3600000` | `FF C9 11 80 ... 00 36 EE 80` |

**Example: sRA SensorPosition**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}SensorPosition{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E 20 30 20 30 20 30 20 30 20 30 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2B 73 52 41 20 53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E 20 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 6F
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Sensor Position [sWN SensorPosition] {#set-sensor-position-swn-sensorposition}

</summary>

Sets the mounting position in 1/10000 deg. This only affects the PointCloud2 format output by native ROS2. This telegram requires at least user level: Authorized Client.

**Telegram structure: sWN SensorPosition**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set Sensor Position | String | 14 | | `SensorPosition` | `53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E` |
| x | in mm | Int_32 | 4 | -100000 ... 100000 | `-100000 ... +100000` | `FF FE 79 60 ... 00 01 86 A0` |
| y | in mm | Int_32 | 4 | -100000 ... 100000 | `-100000 ... +100000` | `FF FE 79 60 ... 00 01 86 A0` |
| z | in mm | Int_32 | 4 | -100000 ... 100000 | `-100000 ... +100000` | `FF FE 79 60 ... 00 01 86 A0` |
| yaw | in 1/10000 deg | Int_32 | 4 | -3600000 ... 3600000 | `-3600000 ... +3600000` | `FF C9 11 80 ... 00 36 EE 80` |
| pitch | in 1/10000 deg | Int_32 | 4 | -3600000 ... 3600000 | `-3600000 ... +3600000` | `FF C9 11 80 ... 00 36 EE 80` |
| roll | in 1/10000 deg | Int_32 | 4 | -3600000 ... 3600000 | `-3600000 ... +3600000` | `FF C9 11 80 ... 00 36 EE 80` |

**Example: sWN SensorPosition**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}SensorPosition{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
<STX>sWN SensorPosition 0 0 0 0 0 0<ETX>
```

```text
sWN SensorPosition 0 0 0 0 0 0
```

```text
02 73 57 4E 20 53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E 20 30 20 30 20 30 20 30 20 30 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2B 73 57 4E 20 53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E 20 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 65
```

```text
73 57 4E 20 53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E 20 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
```

**Telegram structure: sWA SensorPosition**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set Sensor Position | String | 14 | | `SensorPosition` | `53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E` |

**Example: sWA SensorPosition**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}SensorPosition<ETX>
```

```text
02 73 57 41 20 53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 41 20 53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E 20 6A
```

</details>

</section>

<section class="cola-category" markdown="1">

## Operating Data {#operating-data}

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Date of Last Permanent Save [sRN DIpara] {#read-date-of-last-permanent-save-srn-dipara}

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

### Read Time of Last Permanent Save [sRN DIparatm] {#read-time-of-last-permanent-save-srn-diparatm}

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

### Read Power on Counter [sRN ODpwrc] {#read-power-on-counter-srn-odpwrc}

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

### Read Operating Hours Since Last Power On [sRN ODopdaily] {#read-operating-hours-since-last-power-on-srn-odopdaily}

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

### Receive Operating Hours Since Last Power on by Event [sEN ODopdaily] {#receive-operating-hours-since-last-power-on-by-event-sen-odopdaily}

</summary>

Returns the runtime duration since the last power on (non-persistent). After registration, the device sends the current value as an `sSN` telegram whenever it changes. Send the telegram with the value 0 to stop the event.

**Telegram structure: sEN ODopdaily**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Receive Operating Hours Since Last Power On by Event | String | 9 | | `ODopdaily` | `4F 44 6F 70 64 61 69 6C 79` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN ODopdaily**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}ODopdaily{SPC}1<ETX>
```

```text
<STX>sEN ODopdaily 1<ETX>
```

```text
sEN ODopdaily 1
```

```text
02 73 45 4E 20 4F 44 6F 70 64 61 69 6C 79 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 45 4E 20 4F 44 6F 70 64 61 69 6C 79 20 01 14
```

```text
73 45 4E 20 4F 44 6F 70 64 61 69 6C 79 20 01
```

**Telegram structure: sEA ODopdaily**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sEA` | `73 45 41` |
| Command | Receive Operating Hours Since Last Power On by Event | String | 9 | | `ODopdaily` | `4F 44 6F 70 64 61 69 6C 79` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEA ODopdaily**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}ODopdaily{SPC}1<ETX>
```

```text
02 73 45 41 20 4F 44 6F 70 64 61 69 6C 79 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 45 41 20 4F 44 6F 70 64 61 69 6C 79 20 01 1B
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Operating Hours [sRN ODoprh] {#read-operating-hours-srn-odoprh}

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

### Receive Operating Hours by Event [sEN ODoprh] {#receive-operating-hours-by-event-sen-odoprh}

</summary>

Returns the total number of operating hours during the lifetime of the device. The resolution is 1/10 hour. After registration, the device sends the current value as an `sSN` telegram whenever it changes. Send the telegram with the value 0 to stop the event.

**Telegram structure: sEN ODoprh**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Receive Operating Hours by Event | String | 6 | | `ODoprh` | `4F 44 6F 70 72 68` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN ODoprh**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}ODoprh{SPC}1<ETX>
```

```text
<STX>sEN ODoprh 1<ETX>
```

```text
sEN ODoprh 1
```

```text
02 73 45 4E 20 4F 44 6F 70 72 68 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0C 73 45 4E 20 4F 44 6F 70 72 68 20 01 77
```

```text
73 45 4E 20 4F 44 6F 70 72 68 20 01
```

**Telegram structure: sEA ODoprh**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sEA` | `73 45 41` |
| Command | Receive Operating Hours by Event | String | 6 | | `ODoprh` | `4F 44 6F 70 72 68` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEA ODoprh**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}ODoprh{SPC}1<ETX>
```

```text
02 73 45 41 20 4F 44 6F 70 72 68 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0C 73 45 41 20 4F 44 6F 70 72 68 20 01 78
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Temperature [sRN OPcurtmpdev] {#read-temperature-srn-opcurtmpdev}

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

### Receive Temperature by Event [sEN OPcurtmpdev] {#receive-temperature-by-event-sen-opcurtmpdev}

</summary>

Returns the current device temperature. After registration, the device sends the current value as an `sSN` telegram whenever it changes. Send the telegram with the value 0 to stop the event.

**Telegram structure: sEN OPcurtmpdev**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Receive Temperature by Event | String | 11 | | `OPcurtmpdev` | `4F 50 63 75 72 74 6D 70 64 65 76` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN OPcurtmpdev**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}OPcurtmpdev{SPC}1<ETX>
```

```text
<STX>sEN OPcurtmpdev 1<ETX>
```

```text
sEN OPcurtmpdev 1
```

```text
02 73 45 4E 20 4F 50 63 75 72 74 6D 70 64 65 76 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 45 4E 20 4F 50 63 75 72 74 6D 70 64 65 76 20 01 1C
```

```text
73 45 4E 20 4F 50 63 75 72 74 6D 70 64 65 76 20 01
```

**Telegram structure: sEA OPcurtmpdev**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sEA` | `73 45 41` |
| Command | Receive Temperature by Event | String | 11 | | `OPcurtmpdev` | `4F 50 63 75 72 74 6D 70 64 65 76` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEA OPcurtmpdev**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}OPcurtmpdev{SPC}1<ETX>
```

```text
02 73 45 41 20 4F 50 63 75 72 74 6D 70 64 65 76 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 45 41 20 4F 50 63 75 72 74 6D 70 64 65 76 20 01 13
```

</details>

</section>

<section class="cola-category" markdown="1">

## Cybersecurity {#cybersecurity}

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read CoLa1 Interface State [sRN EIAuxEnable] {#read-cola1-interface-state-srn-eiauxenable}

</summary>

Returns whether the legacy interface CoLa A/B is enabled. If enabled CoLa A uses port 2111 and CoLa B uses 2112.

**Telegram structure: sRN EIAuxEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read CoLa1 Interface State | String | 11 | | `EIAuxEnable` | `45 49 41 75 78 45 6E 61 62 6C 65` |

**Example: sRN EIAuxEnable**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EIAuxEnable<ETX>
```

```text
<STX>sRN EIAuxEnable<ETX>
```

```text
sRN EIAuxEnable
```

```text
02 73 52 4E 20 45 49 41 75 78 45 6E 61 62 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 4E 20 45 49 41 75 78 45 6E 61 62 6C 65 2E
```

```text
73 52 4E 20 45 49 41 75 78 45 6E 61 62 6C 65
```

**Telegram structure: sRA EIAuxEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read CoLa1 Interface State | String | 11 | | `EIAuxEnable` | `45 49 41 75 78 45 6E 61 62 6C 65` |
| EtherAuxEnabled | Enables Cola1 Interface. Cola-A on port 2111 and Cola-B on port 2112 | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |

**Example: sRA EIAuxEnable**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EIAuxEnable{SPC}1<ETX>
```

```text
02 73 52 41 20 45 49 41 75 78 45 6E 61 62 6C 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 52 41 20 45 49 41 75 78 45 6E 61 62 6C 65 20 01 00
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Enable/ Disable CoLa1 Interface [sWN EIAuxEnable] {#enable-disable-cola1-interface-swn-eiauxenable}

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

### Read Device Search Mode [sRN EtherCoLaScanMode] {#read-device-search-mode-srn-ethercolascanmode}

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

### Set Device Search Mode [sWN EtherCoLaScanMode] {#set-device-search-mode-swn-ethercolascanmode}

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

### Read HTTPS Status [sRN httpsStatus] {#read-https-status-srn-httpsstatus}

</summary>

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

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Certificate Bundle Information [sRN certificateBundleInfo] {#read-certificate-bundle-information-srn-certificatebundleinfo}

</summary>

Returns information about the uploaded certificate bundle.

**Telegram structure: sRN certificateBundleInfo**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Certificate Bundle Information | String | 21 | | `certificateBundleInfo` | `63 65 72 74 69 66 69 63 61 74 65 42 75 6E 64 6C 65 49 6E 66 6F` |

**Example: sRN certificateBundleInfo**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}certificateBundleInfo<ETX>
```

```text
<STX>sRN certificateBundleInfo<ETX>
```

```text
sRN certificateBundleInfo
```

```text
02 73 52 4E 20 63 65 72 74 69 66 69 63 61 74 65 42 75 6E 64 6C 65 49 6E 66 6F 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 19 73 52 4E 20 63 65 72 74 69 66 69 63 61 74 65 42 75 6E 64 6C 65 49 6E 66 6F 20
```

```text
73 52 4E 20 63 65 72 74 69 66 69 63 61 74 65 42 75 6E 64 6C 65 49 6E 66 6F
```

**Telegram structure: sRA certificateBundleInfo**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Certificate Bundle Information | String | 21 | | `certificateBundleInfo` | `63 65 72 74 69 66 69 63 61 74 65 42 75 6E 64 6C 65 49 6E 66 6F` |
| uuidBundle length | Length of uuidBundle (max. 100) | Uint_16 | 2 | | `0 ... 64` | `00 00 ... 00 64` |
| uuidBundle | The unique ID of the certificate bundle. | String | n | | `<text>` | `<bytes>` |
| certificates length | Number of certificates elements (max. 4) | Uint_16 | 2 | | `0 ... 4` | `00 00 ... 00 04` |
| certificates[].names length | Number of names elements (max. 20) (repeated once per element) | Uint_16 | 2 | | `0 ... 14` | `00 00 ... 00 14` |
| certificates[].names[].entry length | Length of entry (max. 1000) (repeated once per element) | Uint_16 | 2 | | `0 ... 3E8` | `00 00 ... 03 E8` |
| certificates[].names[].entry | The common name or the subject alternative name. | String | n | | `<text>` | `<bytes>` |
| certificates[].issuer length | Length of issuer (max. 1000) | Uint_16 | 2 | | `0 ... 3E8` | `00 00 ... 03 E8` |
| certificates[].issuer | Return the issuer information stated in the certificate. It is coded as RFC 2253 string. | String | n | | `<text>` | `<bytes>` |
| certificates[].subject length | Length of subject (max. 1000) | Uint_16 | 2 | | `0 ... 3E8` | `00 00 ... 03 E8` |
| certificates[].subject | Return the subject information stated in the certificate. It is coded as RFC 2253 string. | String | n | | `<text>` | `<bytes>` |
| certificates[].serialNumber length | Length of serialNumber (max. 119) | Uint_16 | 2 | | `0 ... 77` | `00 00 ... 00 77` |
| certificates[].serialNumber | The serial number MUST be a positive value assigned by the CA to each certificate. It MUST be unique for each certificate issued by a given CA (i.e., the issuer name and serial number identify a unique certificate). It is coded as hex string. | String | n | | `<text>` | `<bytes>` |
| certificates[].fingerprint length | Length of fingerprint (max. 119) | Uint_16 | 2 | | `0 ... 77` | `00 00 ... 00 77` |
| certificates[].fingerprint | The SHA-256 fingerprint of the certificate. | String | n | | `<text>` | `<bytes>` |
| certificates[].validNotBefore | Naming acc. RFC 5280. Point in time when the certificate becomes valid. | String | 24 | | `<text>` | `<bytes>` |
| certificates[].validNotAfter | Naming acc. RFC 5280. Point in time when the certificate expires. | String | 24 | | `<text>` | `<bytes>` |
| error length | Length of error (max. 100) | Uint_16 | 2 | | `0 ... 64` | `00 00 ... 00 64` |
| error | Returns the cause of error in case of an error. | String | n | | `<text>` | `<bytes>` |

**Example: sRA certificateBundleInfo**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}certificateBundleInfo{SPC}1{SPC}0{SPC}0{SPC}26{SPC}NO_ACTIVE_CERTIFICATE_BUNDLE_AVAILABLE<ETX>
```

```text
02 73 52 41 20 63 65 72 74 69 66 69 63 61 74 65 42 75 6E 64 6C 65 49 6E 66 6F 20 31 20 30 20 30 20 32 36 20 4E 4F 5F 41 43 54 49 56 45 5F 43 45 52 54 49 46 49 43 41 54 45 5F 42 55 4E 44 4C 45 5F 41 56 41 49 4C 41 42 4C 45 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 47 73 52 41 20 63 65 72 74 69 66 69 63 61 74 65 42 75 6E 64 6C 65 49 6E 66 6F 20 00 01 30 00 00 00 26 4E 4F 5F 41 43 54 49 56 45 5F 43 45 52 54 49 46 49 43 41 54 45 5F 42 55 4E 44 4C 45 5F 41 56 41 49 4C 41 42 4C 45 0D
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Webserver State [sMN SetWebserverEnabled] {#set-webserver-state-smn-setwebserverenabled}

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

### Read Webserver State [sMN GetWebserverEnabled] {#read-webserver-state-smn-getwebserverenabled}

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
