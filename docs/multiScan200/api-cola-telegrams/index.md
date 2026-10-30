# multiScan200 API | CoLa Telegrams (CoLa A and CoLa B)

> multiScan200 CoLa telegram reference with sRN, sWN, sMN, and sEN commands, parameter structures, and CoLa A and CoLa B examples.

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/

# API | CoLa Telegrams

This reference lists the CoLa telegrams supported by the multiScan200. Use the command details to build or troubleshoot PLC and other low-level integrations without guessing the telegram structure.

Examples are grouped by protocol, with each telegram representation in a separate code block and its own copy button.

Categories follow the [multiScan200 REST API reference](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/)
where corresponding CoLa telegrams are available. Select a telegram to expand
its structure and examples. A direct link to a telegram opens it automatically.
The categories organize the reference; availability still depends on the
device variant, firmware, and installed software packages.

<section class="cola-category" markdown="1">

## General

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Log In [sMN SetAccessMode]

</summary>

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

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Enable or Disable CoLa User Levels [sMN EnableLegacyUserLevel]

</summary>

This command enables and disables a specific CoLa user level (Maintenance, Authorized Client).

**Telegram structure: sMN EnableLegacyUserLevel**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Enable/ disable CoLa user level | String | 21 | | `EnableLegacyUserLevel` | `45 6E 61 62 6C 65 4C 65 67 61 63 79 55 73 65 72 4C 65 76 65 6C` |
| User level | - | Uint_8 | 1 | Maintenance:<br>Authorized Client: | `2<br>3` | `02<br>03` |
| Status | Enable/ disable | Bool_1 | 1 | Disable:<br>Enable: | `0<br>1` | `00<br>01` |

**Example: sMN EnableLegacyUserLevel - Enable Authorized client**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}EnableLegacyUserLevel{SPC}3{SPC}1<ETX>
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

**Example: sAN EnableLegacyUserLevel**

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

Required user level: Authorized client.

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

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Load Application Defaults [sMN mSCloadappdef]

</summary>

The Application-Reset (Load application defaults) deletes only the user parametrization of the Fields, Evaluation cases (EVC) and parameters under the header “Application”. Other parameters like Interface settings, Echo Filter, etc. remain unaffected.

Required user level: Authorized client.

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

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Change Password [sMN SetPassword]

</summary>

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

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Save Parameters Permanently [sMN mEEwriteall]

</summary>

Save all parameter changes of the device. Must be sent before logging off and/ or a hardware reboot of the device, else all changes will be lost.

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

Restart the device.

Required user level: Authorized client.

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

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Soft Reset the Device [sMN mSCsoftreset]

</summary>

Performs a soft reset of the device without power cycle. Applies pending configuration changes.

Required user level: Authorized client.

**Telegram structure: sMN mSCsoftreset**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method invocation | String | 3 | | `sMN` | `73 4D 4E` |
| Method name | Method executes a software reset on the device | String | 12 | | `mSCsoftreset` | `6D 53 43 73 6F 66 74 72 65 73 65 74` |
| ProcessorNbr | | Uint_16 | 2 | | `0` | `00 00` |

**Example: sMN mSCsoftreset**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}mSCsoftreset{SPC}0<ETX>
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
| Command type | Method answer | String | 3 | | `sAN` | `73 41 4E` |
| Method name | Echo of method name | String | 12 | | `mSCsoftreset` | `6D 53 43 73 6F 66 74 72 65 73 65 74` |

</details>

</section>

<section class="cola-category" markdown="1">

## Status

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Device State [sRN DevSta]

</summary>

Read the device state: startup, service mode, normal operation, suspended operation (conditions prevent adequate measurement), service recommended, service required, recoverable error, or fatal error (the device must be replaced).

**Telegram structure: sRN DevSta**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read the current device state | String | 6 | | `DevSta` | `44 65 76 53 74 61` |

**Example: sRN DevSta**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}DevSta<ETX>
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
| Command | Read the current device state | String | 6 | | `DevSta` | `44 65 76 53 74 61` |
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

### Read Device Ready State [sRN SCdevicestate]

</summary>

Read whether the device is busy, ready, or in error.

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

</section>

<section class="cola-category" markdown="1">

## Device Information

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Device Identification [sRN DeviceIdent]

</summary>

Read the device family and the firmware version.

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
| Device name length | Number of characters of device name | Uint_16 | 2 | 0 … 34 | `C` | `00 0C` |
| Device name | Device family | String | Length | Maximum 34 characters | `multiScan200` | `6D 75 6C 74 69 53 63 61 6E 32 30 30` |
| Firmware version length | Number of characters of firmware version | Uint_16 | 2 | 0 … 34 | `8` | `00 08` |
| Firmware version | Firmware version | String | Length | Maximum 34 characters | `1.1.0.0R` | `31 2E 31 2E 30 2E 30 52` |

**Example: sRA DeviceIdent**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}DeviceIdent{SPC}C{SPC}multiScan200{SPC}8{SPC}1.1.0.0R<ETX>
```

```text
02 73 52 41 20 44 65 76 69 63 65 49 64 65 6E 74 20 43 20 6D 75 6C 74 69 53 63 61 6E 32 30 30 20 38 20 31 2E 31 2E 30 2E 30 52 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 28 73 52 41 20 44 65 76 69 63 65 49 64 65 6E 74 20 00 0C 6D 75 6C 74 69 53 63 61 6E 32 30 30 00 08 31 2E 31 2E 30 2E 30 52 16
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Firmware Version [sRN FirmwareVersion]

</summary>

Read the version of the application software.

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
| Version length | Number of characters of version | Uint_16 | 2 | 0 … 40 | `5` | `00 05` |
| Version | Version of the application software | String | Length | Maximum 40 characters | `1.1.0` | `31 2E 31 2E 30` |

**Example: sRA FirmwareVersion**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}FirmwareVersion{SPC}5{SPC}1.1.0<ETX>
```

```text
02 73 52 41 20 46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E 20 35 20 31 2E 31 2E 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 52 41 20 46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E 20 00 05 31 2E 31 2E 30 3E
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Device Name [sWN LocationName]

</summary>

Give the device a descriptive name, such as its location.

Required user level: Maintenance.

**Telegram structure: sWN LocationName**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set device name | String | 12 | | `LocationName` | `4C 6F 63 61 74 69 6F 6E 4E 61 6D 65` |
| Device name length | Number of characters of device name | Uint_16 | 2 | 0 … 32 | `9` | `00 09` |
| Device name | Device name, for example its location | String | Length | Maximum 32 characters | `LongRange` | `4C 6F 6E 67 52 61 6E 67 65` |

**Example: sWN LocationName - Device name is "LongRange"**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LocationName{SPC}+9{SPC}LongRange<ETX>
```

```text
sWN LocationName +9 LongRange
```

```text
02 73 57 4E 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 20 2B 39 20 4C 6F 6E 67 52 61 6E 67 65 03
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

### Identify Device [sMN FindMe]

</summary>

Let the LEDs of the device blink for the given time, to find the device.

Required user level: Authorized client.

**Telegram structure: sMN FindMe**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Initiate an acoustic or visual signal | String | 6 | | `FindMe` | `46 69 6E 64 4D 65` |
| Period of time | Duration in seconds | Uint_16 | 2 | | `0d … 65535d(0h .. FF FF)` | `00 ... FF FF` |

**Example: sMN FindMe - Blink for 3 s**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}FindMe{SPC}3<ETX>
```

```text
sMN FindMe 3
```

```text
02 73 4D 4E 20 46 69 6E 64 4D 65 20 33 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0D 73 4D 4E 20 46 69 6E 64 4D 65 20 00 03 7E
```

```text
73 4D 4E 20 46 69 6E 64 4D 65 20 00 03
```


**Telegram structure: sAN FindMe**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Initiate an acoustic or visual signal | String | 6 | | `FindMe` | `46 69 6E 64 4D 65` |

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

### Read Scan Frequency and Angular Resolution [sRN LMPscancfg]

</summary>

Read the scanning frequency, the angular resolution, and the angular range of the active scan configuration. The values apply before any filter.

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
| Scan frequency | In 1/100 Hz | Uint_32 | 4 | 20 Hz: | `7D0` | `00 00 07 D0` |
| Reserved | - | Int_16 | 2 | Always: | `1` | `00 01` |
| Theta angular resolution | Horizontal angular resolution in 1/10000° | Uint_32 | 4 | 0.4662°: | `1236` | `00 00 12 36` |
| Theta start angle | In 1/10000° | Int_32 | 4 | −138°: | `FFEAF160` | `FF EA F1 60` |
| Theta stop angle | In 1/10000° | Int_32 | 4 | +138°: | `150EA0` | `00 15 0E A0` |
| Phi angular resolution | Vertical angular resolution in 1/10000° | Uint_32 | 4 | 0.4688°: | `1250` | `00 00 12 50` |
| Phi start angle | In 1/10000° | Int_32 | 4 | −22.5°: | `FFFC9118` | `FF FC 91 18` |
| Phi stop angle | In 1/10000° | Int_32 | 4 | +22.5°: | `36EE8` | `00 03 6E E8` |

**Example: sRA LMPscancfg**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LMPscancfg{SPC}7D0{SPC}1{SPC}1236{SPC}FFEAF160{SPC}150EA0{SPC}928{SPC}FFFC9118{SPC}36EE8<ETX>
```

```text
02 73 52 41 20 4C 4D 50 73 63 61 6E 63 66 67 20 37 44 30 20 31 20 31 32 33 36 20 46 46 45 41 46 31 36 30 20 31 35 30 45 41 30 20 39 32 38 20 46 46 46 43 39 31 31 38 20 33 36 45 45 38 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2D 73 52 41 20 4C 4D 50 73 63 61 6E 63 66 67 20 00 00 07 D0 00 01 00 00 12 36 FF EA F1 60 00 15 0E A0 00 00 09 28 FF FC 91 18 00 03 6E E8 AF
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Activate Standby Mode [sMN LMCstandby]

</summary>

Set the device to standby mode.

Required user level: Authorized client.

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
| Status code | Accepted when value is 0 | Enum_8 | 1 | Success: | `0` | `00` |

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

Start the laser and, unless the device is in standby, the motor.

Required user level: Authorized client.

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

Switch off the laser. The motor keeps running at the configured frequency.

Required user level: Authorized client.

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

Define whether the device starts measuring directly at power-up or stays idle. Save the parameters permanently (`sMN mEEwriteall`); the setting takes effect at the next power-up.

Required user level: Authorized client.

**Telegram structure: sWN LMPautostartmeas**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Autostart measurement | String | 16 | | `LMPautostartmeas` | `4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73` |
| Status code | Activate / Deactivate Autostart | Bool_1 | 1 | Autostart off:<br>Autostart on: | `0<br>1` | `00<br>01` |

**Example: sWN LMPautostartmeas**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LMPautostartmeas{SPC}1<ETX>
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


**Telegram structure: sWA LMPautostartmeas**

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

Set the sensitivity of the measurement: maximum robustness, standard (recommended), or maximum detectivity.

Required user level: Authorized client.

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

Select the scan configuration (performance profile) by its number. The supported scan configurations are listed in the parameter table below. Read the active scan configuration with `sRN PerformanceProfileNumber`. In CoLa A, a number without a sign is hexadecimal: send scan configuration 11 as `+11` or `B`.

Required user level: Authorized client.

**Telegram structure: sWN PerformanceProfileNumber**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Write the number of the performance profile | String | 24 | | `PerformanceProfileNumber` | `50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72` |
| Scan configuration | Number of the scan configuration | Enum_8 | 1 | 276°, 0.47° × 0.47°, 20 Hz:<br>276°, 0.47° × 0.94°, 20 Hz:<br>276°, 0.47° × 0.23°, 20 Hz:<br>360°, 0.47° × 0.47°, 10 Hz:<br>276°, 0.23° × 0.47°, 20 Hz, 2× interlaced:<br>276°, 0.23° × 0.23°, 20 Hz, 2× interlaced:<br>276°, 0.12° × 0.23°, 20 Hz, 4× interlaced:<br>190°, 0.47° × 0.47°, 20 Hz:<br>120°, 0.47° × 0.47°, 20 Hz: | `1<br>2<br>3<br>4<br>+10d (A)<br>+11d (B)<br>+12d (C)<br>+20d (14)<br>+21d (15)` | `01<br>02<br>03<br>04<br>0A<br>0B<br>0C<br>14<br>15` |

**Example: sWN PerformanceProfileNumber - Scan configuration 11**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}PerformanceProfileNumber{SPC}+11<ETX>
```

```text
sWN PerformanceProfileNumber +11
```

```text
02 73 57 4E 20 50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72 20 2B 31 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1E 73 57 4E 20 50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72 20 0B 51
```

```text
73 57 4E 20 50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72 20 0B
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

### Set Horizontal Field of View Center Angle [sWN horizontalFieldOfViewCenterAngle]

</summary>

Rotate the horizontal field of view by setting its center angle in 1/10000°: center angle = (stop angle − start angle) / 2.

Required user level: Authorized client.

**Telegram structure: sWN horizontalFieldOfViewCenterAngle**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | Set the orientation of the horizontal field of view, defined by its center angle: horizontalFieldOfViewCenterAngle = (stopAngle - startAngle)/2. | String | 32 | | `horizontalFieldOfViewCenterAngle` | `68 6F 72 69 7A 6F 6E 74 61 6C 46 69 65 6C 64 4F 66 56 69 65 77 43 65 6E 74 65 72 41 6E 67 6C 65` |
| Value | Set the orientation of the horizontal field of view, defined by its center angle: horizontalFieldOfViewCenterAngle = (stopAngle - startAngle)/2. | Int_32 | 4 | | `0` | `00 00 00 00` |

**Example: sWN horizontalFieldOfViewCenterAngle**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}horizontalFieldOfViewCenterAngle{SPC}0<ETX>
```

```text
sWN horizontalFieldOfViewCenterAngle 0
```

```text
02 73 57 4E 20 68 6F 72 69 7A 6F 6E 74 61 6C 46 69 65 6C 64 4F 66 56 69 65 77 43 65 6E 74 65 72 41 6E 67 6C 65 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 29 73 57 4E 20 68 6F 72 69 7A 6F 6E 74 61 6C 46 69 65 6C 64 4F 66 56 69 65 77 43 65 6E 74 65 72 41 6E 67 6C 65 20 00 00 00 00 58
```

```text
73 57 4E 20 68 6F 72 69 7A 6F 6E 74 61 6C 46 69 65 6C 64 4F 66 56 69 65 77 43 65 6E 74 65 72 41 6E 67 6C 65 20 00 00 00 00
```


**Telegram structure: sWA horizontalFieldOfViewCenterAngle**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 32 | | `horizontalFieldOfViewCenterAngle` | `68 6F 72 69 7A 6F 6E 74 61 6C 46 69 65 6C 64 4F 66 56 69 65 77 43 65 6E 74 65 72 41 6E 67 6C 65` |

**Example: sWA horizontalFieldOfViewCenterAngle**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}horizontalFieldOfViewCenterAngle<ETX>
```

```text
02 73 57 41 20 68 6F 72 69 7A 6F 6E 74 61 6C 46 69 65 6C 64 4F 66 56 69 65 77 43 65 6E 74 65 72 41 6E 67 6C 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 25 73 57 41 20 68 6F 72 69 7A 6F 6E 74 61 6C 46 69 65 6C 64 4F 66 56 69 65 77 43 65 6E 74 65 72 41 6E 67 6C 65 20 57
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Enable High Precision Mode [sWN enableHighPrecisionMode]

</summary>

Enable or disable the high precision mode (the multiScan200 mean filter). See [Filter Details](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/#moving-average-filter).

Required user level: Authorized client.

**Telegram structure: sWN enableHighPrecisionMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | Enable high-precision mode | String | 23 | | `enableHighPrecisionMode` | `65 6E 61 62 6C 65 48 69 67 68 50 72 65 63 69 73 69 6F 6E 4D 6F 64 65` |
| Value | Enable high-precision mode | Bool_1 | 1 | Disable:<br>Enable: | `0<br>1` | `00<br>01` |

**Example: sWN enableHighPrecisionMode - Disable**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}enableHighPrecisionMode{SPC}0<ETX>
```

```text
sWN enableHighPrecisionMode 0
```

```text
02 73 57 4E 20 65 6E 61 62 6C 65 48 69 67 68 50 72 65 63 69 73 69 6F 6E 4D 6F 64 65 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1D 73 57 4E 20 65 6E 61 62 6C 65 48 69 67 68 50 72 65 63 69 73 69 6F 6E 4D 6F 64 65 20 00 30
```

```text
73 57 4E 20 65 6E 61 62 6C 65 48 69 67 68 50 72 65 63 69 73 69 6F 6E 4D 6F 64 65 20 00
```


**Telegram structure: sWA enableHighPrecisionMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 23 | | `enableHighPrecisionMode` | `65 6E 61 62 6C 65 48 69 67 68 50 72 65 63 69 73 69 6F 6E 4D 6F 64 65` |

**Example: sWA enableHighPrecisionMode**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}enableHighPrecisionMode<ETX>
```

```text
02 73 57 41 20 65 6E 61 62 6C 65 48 69 67 68 50 72 65 63 69 73 69 6F 6E 4D 6F 64 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 57 41 20 65 6E 61 62 6C 65 48 69 67 68 50 72 65 63 69 73 69 6F 6E 4D 6F 64 65 20 3F
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Scan Configuration [sMN mCLsetscancfglist]

</summary>

Select the scan configuration (field of view, scanning frequency, and angular resolution) by its number. Scan configurations 10 to 12 use interlace mode: they achieve a higher angular resolution by combining scans that are shifted to each other. The supported scan configurations are listed in the parameter table below. Read the active scan configuration with `sRN PerformanceProfileNumber`. To set it, use [`sWN PerformanceProfileNumber`](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#set-performance-profile-swn-performanceprofilenumber).

In CoLa A, a number without a sign is hexadecimal: send scan configuration 10 as `+10` or `A`, not as `10`.

**Telegram structure: sMN mCLsetscancfglist**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Set scan configuration | String | 17 | | `mCLsetscancfglist` | `6D 43 4C 73 65 74 73 63 61 6E 63 66 67 6C 69 73 74` |
| Scan configuration | Number of the scan configuration | Enum_8 | 1 | 276°, 0.47° × 0.47°, 20 Hz:<br>276°, 0.47° × 0.94°, 20 Hz:<br>276°, 0.47° × 0.23°, 20 Hz:<br>360°, 0.47° × 0.47°, 10 Hz:<br>276°, 0.23° × 0.47°, 20 Hz, 2× interlaced:<br>276°, 0.23° × 0.23°, 20 Hz, 2× interlaced:<br>276°, 0.12° × 0.23°, 20 Hz, 4× interlaced:<br>190°, 0.47° × 0.47°, 20 Hz:<br>120°, 0.47° × 0.47°, 20 Hz: | `1<br>2<br>3<br>4<br>+10d (A)<br>+11d (B)<br>+12d (C)<br>+20d (14)<br>+21d (15)` | `01<br>02<br>03<br>04<br>0A<br>0B<br>0C<br>14<br>15` |

**Example: sMN mCLsetscancfglist 1 - Select scan configuration 1**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}mCLsetscancfglist{SPC}1<ETX>
```

```text
sMN mCLsetscancfglist 1
```

```text
02 73 4D 4E 20 6D 43 4C 73 65 74 73 63 61 6E 63 66 67 6C 69 73 74 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 4D 4E 20 6D 43 4C 73 65 74 73 63 61 6E 63 66 67 6C 69 73 74 20 01 0E
```

```text
73 4D 4E 20 6D 43 4C 73 65 74 73 63 61 6E 63 66 67 6C 69 73 74 20 01
```


**Telegram structure: sAN mCLsetscancfglist**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Set scan configuration | String | 17 | | `mCLsetscancfglist` | `6D 43 4C 73 65 74 73 63 61 6E 63 66 67 6C 69 73 74` |
| Status code | Wrong setting | Enum_8 | 1 | Ok:<br>Error frequency:<br>Error resolution:<br>Error resolution and frequency:<br>Error scan field:<br>Error:<br>Error no license: | `0<br>1<br>2<br>3<br>4<br>5<br>6` | `00<br>01<br>02<br>03<br>04<br>05<br>06` |

**Example: sAN mCLsetscancfglist Ok**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}mCLsetscancfglist{SPC}0<ETX>
```

```text
02 73 41 4E 20 6D 43 4C 73 65 74 73 63 61 6E 63 66 67 6C 69 73 74 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 41 4E 20 6D 43 4C 73 65 74 73 63 61 6E 63 66 67 6C 69 73 74 20 00 03
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Enable or Disable LEDs [sWN LEDEnable]

</summary>

Switch the LEDs of the device on or off. Diagnostics over Ethernet and the digital outputs are not affected.

Required user level: Authorized client.

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
| Number of LEDs | Number of the following LED records | Uint_16 | 2 | | `4` | `00 04` |
| LED color | Repeats with the next two rows for every LED | Enum_8 | 1 | Green:<br>Yellow:<br>Red: | `0<br>1<br>2` | `00<br>01<br>02` |
| LED behavior | - | Enum_8 | 1 | On:<br>Off:<br>Blinking:<br>Blinking fast:<br>Blinking delayed:<br>Find me active: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05` |
| LED ID | Name of the LED, padded with NUL bytes to 8 characters | String | 8 | | `LED1` | `4C 45 44 31 00 00 00 00` |

**Example: sRA LEDState**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LEDState{SPC}4{SPC}1{SPC}0{SPC}LED3{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}LED2{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}0{SPC}LED1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}LED4{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 4C 45 44 53 74 61 74 65 20 34 20 31 20 30 20 4C 45 44 33 00 00 00 00 20 30 20 30 20 4C 45 44 32 00 00 00 00 20 31 20 30 20 4C 45 44 31 00 00 00 00 20 30 20 30 20 4C 45 44 34 00 00 00 00 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 37 73 52 41 20 4C 45 44 53 74 61 74 65 20 00 04 01 00 4C 45 44 33 00 00 00 00 00 00 4C 45 44 32 00 00 00 00 01 00 4C 45 44 31 00 00 00 00 00 00 4C 45 44 34 00 00 00 00 7A
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Vertical Ambient Light Resolution [sWN ambientPixelCountVertical]

</summary>

Set the vertical resolution of the ambient light image: **Full** (all ambient light rows) or **Matching** (one ambient light pixel per beam, matching the point cloud).

Required user level: Authorized client.

**Telegram structure: sWN ambientPixelCountVertical**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | Vertical resolution of the ambient light image. | String | 25 | | `ambientPixelCountVertical` | `61 6D 62 69 65 6E 74 50 69 78 65 6C 43 6F 75 6E 74 56 65 72 74 69 63 61 6C` |
| Value | Vertical resolution of the ambient light image. | Enum_8 | 1 | Full:<br>Matching: | `0<br>1` | `00<br>01` |

**Example: sWN ambientPixelCountVertical**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}ambientPixelCountVertical{SPC}1<ETX>
```

```text
sWN ambientPixelCountVertical 1
```

```text
02 73 57 4E 20 61 6D 62 69 65 6E 74 50 69 78 65 6C 43 6F 75 6E 74 56 65 72 74 69 63 61 6C 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 57 4E 20 61 6D 62 69 65 6E 74 50 69 78 65 6C 43 6F 75 6E 74 56 65 72 74 69 63 61 6C 20 01 2A
```

```text
73 57 4E 20 61 6D 62 69 65 6E 74 50 69 78 65 6C 43 6F 75 6E 74 56 65 72 74 69 63 61 6C 20 01
```


**Telegram structure: sWA ambientPixelCountVertical**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 25 | | `ambientPixelCountVertical` | `61 6D 62 69 65 6E 74 50 69 78 65 6C 43 6F 75 6E 74 56 65 72 74 69 63 61 6C` |

**Example: sWA ambientPixelCountVertical**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}ambientPixelCountVertical<ETX>
```

```text
02 73 57 41 20 61 6D 62 69 65 6E 74 50 69 78 65 6C 43 6F 75 6E 74 56 65 72 74 69 63 61 6C 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1E 73 57 41 20 61 6D 62 69 65 6E 74 50 69 78 65 6C 43 6F 75 6E 74 56 65 72 74 69 63 61 6C 20 24
```

</details>

</section>

<section class="cola-category" markdown="1">

## Date and System Time

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Time Synchronization [sWN TSCRole]

</summary>

Select the time synchronization: off, NTP, or PTP.

Required user level: Authorized client.

**Telegram structure: sWN TSCRole**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set timestamp role | String | 7 | | `TSCRole` | `54 53 43 52 6F 6C 65` |
| Status | Timestamp role | Uint_8 | 1 | Off:<br>NTP:<br>PTP: | `0<br>1<br>3` | `00<br>01<br>03` |

**Example: sWN TSCRole - NTP**

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

### Set Device Time [sMN LSPsetdatetime]

</summary>

Set the device time: year, month, day, hour, minute, second, and microsecond. In CoLa A, write decimal values with a leading `+`; values without a sign are hexadecimal.

The device has no real-time clock. After a power cycle, the time must be set again, or use NTP or PTP.

Required user level: Authorized client.

**Telegram structure: sMN LSPsetdatetime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Set time stamp | String | 14 | | `LSPsetdatetime` | `4C 53 50 73 65 74 64 61 74 65 74 69 6D 65` |
| Year | | Uint_16 | 2 | | `+1970d …+2099d (07B2h… 0833h)` | `07 B2 … 08 33` |
| Month | | Uint_8 | 1 | | `+1d … +12d(01h … 0Ch)` | `01 … 0C` |
| Day | | Uint_8 | 1 | | `+1d … +31d(01h … 1Fh)` | `00 … 1F` |
| Hour | | Uint_8 | 1 | | `+0d … +23d(00h … 17h)` | `00 … 17` |
| Minute | | Uint_8 | 1 | | `+0d … +59d(00h … 3Bh)` | `00 … 3B` |
| Second | | Uint_8 | 1 | | `+0d … +59d(00h … 3Bh)` | `00 … 3B` |
| Microsecond | | Uint_32 | 4 | | `+0d …+999999d(00000000h …000F423Fh)` | `00 00 00 00 … 00 0F 42 3F` |

**Example: sMN LSPsetdatetime**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}LSPsetdatetime{SPC}+2026{SPC}+10{SPC}+1{SPC}+16{SPC}+52{SPC}+1{SPC}0<ETX>
```

```text
sMN LSPsetdatetime +2026 +10 +1 +16 +52 +1 0
```

```text
02 73 4D 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 2B 32 30 32 36 20 2B 31 30 20 2B 31 20 2B 31 36 20 2B 35 32 20 2B 31 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1E 73 4D 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 07 EA 0A 01 10 34 01 00 00 00 00 9F
```

```text
73 4D 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 07 EA 0A 01 10 34 01 00 00 00 00
```


**Telegram structure: sAN LSPsetdatetime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Set time stamp | String | 14 | | `LSPsetdatetime` | `4C 53 50 73 65 74 64 61 74 65 74 69 6D 65` |
| Status code | Code number | Enum_8 | 1 | Success: | `0` | `00` |

**Example: sAN LSPsetdatetime**

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

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Device Time [sRN LSPdatetime]

</summary>

Read the device time.

Required user level: Read-only.

**Telegram structure: sRN LSPdatetime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read request | String | 3 | | `sRN` | `73 52 4E` |
| Variable name | The device time | String | 11 | | `LSPdatetime` | `4C 53 50 64 61 74 65 74 69 6D 65` |

**Example: sRN LSPdatetime**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LSPdatetime<ETX>
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
| Command type | Read answer | String | 3 | | `sRA` | `73 52 41` |
| Variable name | The device time | String | 11 | | `LSPdatetime` | `4C 53 50 64 61 74 65 74 69 6D 65` |
| Year | | Uint_16 | 2 | Max: 2105 | `0` | `00 00` |
| Month | | Uint_8 | 1 | | `+1` | `01` |
| Day | | Uint_8 | 1 | | `+1` | `01` |
| Hours | Value for [h] in current time | Uint_8 | 1 | | `0` | `00` |
| Minutes | Value for [min] in current time | Uint_8 | 1 | | `0` | `00` |
| Seconds | Value for [s] in current time | Uint_8 | 1 | | `0` | `00` |
| Microseconds | Value for [µs] in current time | Uint_32 | 4 | | `0` | `00 00 00 00` |

**Example: sRA LSPdatetime**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LSPdatetime{SPC}7B2{SPC}1{SPC}1{SPC}9{SPC}14{SPC}3A{SPC}45D30<ETX>
```

```text
02 73 52 41 20 4C 53 50 64 61 74 65 74 69 6D 65 20 37 42 32 20 31 20 31 20 39 20 31 34 20 33 41 20 34 35 44 33 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 52 41 20 4C 53 50 64 61 74 65 74 69 6D 65 20 07 B2 01 01 09 14 3A 00 04 5D 30 D5
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Device Time in UTC [sMN setDateTimeUTC]

</summary>

Set the device time in UTC. This works only if neither NTP nor PTP is active.

Required user level: Authorized client.

**Telegram structure: sMN setDateTimeUTC**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method invocation | String | 3 | | `sMN` | `73 4D 4E` |
| Method name | Sets datetime of device in UTC. Does only work if NTP-Client and PTP is not active | String | 14 | | `setDateTimeUTC` | `73 65 74 44 61 74 65 54 69 6D 65 55 54 43` |
| uiYear | UTC year. Range: 0 ... 2105d | Uint_16 | 2 | | `0` | `00 00` |
| usiMonth | UTC month | Uint_8 | 1 | | `1` | `01` |
| usiDay | UTC day | Uint_8 | 1 | | `1` | `01` |
| usiHour | UTC hour | Uint_8 | 1 | | `0` | `00` |
| usiMinute | UTC minute | Uint_8 | 1 | | `0` | `00` |
| usiSec | UTC second | Uint_8 | 1 | | `0` | `00` |
| udiUSec | UTC microseconds; range | Uint_32 | 4 | | `0` | `00 00 00 00` |

**Example: sMN setDateTimeUTC**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}setDateTimeUTC{SPC}+2026{SPC}+10{SPC}+1{SPC}+16{SPC}+52{SPC}+1{SPC}0<ETX>
```

```text
sMN setDateTimeUTC +2026 +10 +1 +16 +52 +1 0
```

```text
02 73 4D 4E 20 73 65 74 44 61 74 65 54 69 6D 65 55 54 43 20 2B 32 30 32 36 20 2B 31 30 20 2B 31 20 2B 31 36 20 2B 35 32 20 2B 31 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1E 73 4D 4E 20 73 65 74 44 61 74 65 54 69 6D 65 55 54 43 20 07 EA 0A 01 10 34 01 00 00 00 00 92
```

```text
73 4D 4E 20 73 65 74 44 61 74 65 54 69 6D 65 55 54 43 20 07 EA 0A 01 10 34 01 00 00 00 00
```


**Telegram structure: sAN setDateTimeUTC**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method answer | String | 3 | | `sAN` | `73 41 4E` |
| Method name | Echo of method name | String | 14 | | `setDateTimeUTC` | `73 65 74 44 61 74 65 54 69 6D 65 55 54 43` |
| ErrorCode | Result of setting the UTC time | Enum_8 | 1 | Successful:<br>No permission: | `0<br>1` | `00<br>01` |

**Example: sAN setDateTimeUTC**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}setDateTimeUTC{SPC}0<ETX>
```

```text
02 73 41 4E 20 73 65 74 44 61 74 65 54 69 6D 65 55 54 43 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 41 4E 20 73 65 74 44 61 74 65 54 69 6D 65 55 54 43 20 00 5D
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Time Server IP Address [sWN TSCTCSrvAddr]

</summary>

Define the IP address from which the device will receive the time synchronization.

Required user level: Authorized client.

**Telegram structure: sWN TSCTCSrvAddr**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set time server IP address | String | 12 | | `TSCTCSrvAddr` | `54 53 43 54 43 53 72 76 41 64 64 72` |
| IP address data | Set values | Uint_8 | 1 | First part of IP address | `0 …+255d (00…FF)` | `00 … FF` |
| IP address data | Set values | Uint_8 | 1 | Second part of IP address | `0 …+255d (00…FF)` | `00 … FF` |
| IP address data | Set values | Uint_8 | 1 | Third part of IP address | `0 …+255d (00…FF)` | `00 … FF` |
| IP address data | Set values | Uint_8 | 1 | Fourth part of IP address | `0 …+255d (00…FF)` | `00 … FF` |

**Example: sWN TSCTCSrvAddr - 192.168.0.11**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}TSCTCSrvAddr{SPC}C0{SPC}A8{SPC}0{SPC}B<ETX>
```

```text
sWN TSCTCSrvAddr C0 A8 0 B
```

```text
02 73 57 4E 20 54 53 43 54 43 53 72 76 41 64 64 72 20 43 30 20 41 38 20 30 20 42 03
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

Required user level: Authorized client.

**Telegram structure: sWN TSCTCtimezone**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set time zone | String | 13 | | `TSCTCtimezone` | `54 53 43 54 43 74 69 6D 65 7A 6F 6E 65` |
| Time zone data | Select the time zone of the client | Enum_8 | 1 | List of time zones see table 228, page 127 | `+0d … +104d(00h … 68h)` | `00 … 68` |

**Time zones**

| Value | Time zone | Value | Time zone | Value | Time zone |
| --- | --- | --- | --- | --- | --- |
| +0d (0h) | DATE LINE STANDARD | +35d (23h) | MONROVIA REYKJAVIK | +70d (46h) | MUMBAI NEUDELHI |
| +1d (1h) | COORDWORLDTIME 11 | +36d (24h) | AMSTERDAM BERLIN ROM | +71d (47h) | SRI JAYAWARDENEPURA |
| +2d (2h) | HAWAII | +37d (25h) | BELGRAD BUDAPEST PRAG | +72d (48h) | KATMANDU |
| +3d (3h) | ALASKA | +38d (26h) | BRUESSEL MADRID PARIS | +73d (49h) | ASTANA |
| +4d (4h) | CALIFORNIA | +39d (27h) | SARAJEVO WARSCHAU | +74d (4Ah) | DAKKA |
| +5d (5h) | USA CANADA | +40d (28h) | WEST CENTRAL AFRICA | +75d (4Bh) | NOWOSIBIRSK |
| +6d (6h) | ARIZONA | +41d (29h) | WINDHUK | +76d (4Ch) | YANGON |
| +7d (7h) | LA PAZ | +42d (2Ah) | AMMAN | +77d (4Dh) | BANGKOK HANOI JAKARTA |
| +8d (8h) | MOUNTAIN TIME USA | +43d (2Bh) | ATHEN BUKAREST | +78d (4Eh) | KRASNOJARSK |
| +9d (9h) | CENTRAL TIME USA | +44d (2Ch) | BEIRUT | +79d (4Fh) | IRKUTSK |
| +10d (Ah) | MEXICO CITY | +45d (2Dh) | DAMASCUS | +80d (50h) | KUALA LUMPUR SINGAPUR |
| +11d (Bh) | MIDDLE AMERICA | +46d (2Eh) | HARARE PRETORIA | +81d (51h) | PEKING HONGKONG |
| +12d (Ch) | SASKATCHEWAN | +47d (2Fh) | HELSINKI KIEW RIGA | +82d (52h) | PERTH |
| +13d (Dh) | BOGOTA LIMA | +48d (30h) | ISTANBUL | +83d (53h) | TAIPEH |
| +14d (Eh) | EASTERN TIME USA | +49d (31h) | JERUSALEM | +84d (54h) | ULAN BATOR |
| +15d (Fh) | INDIANA | +50d (32h) | KAIRO | +85d (55h) | JAKUTSK |
| +16d (10h) | CARACAS | +51d (33h) | KALININGRAD | +86d (56h) | OSAKA TOKIO |
| +17d (11h) | ASUNCION | +52d (34h) | EASTERN EUROPE | +87d (57h) | SEOUL |
| +18d (12h) | ATLANTIC KANADA | +53d (35h) | TRIPOLIS | +88d (58h) | ADELAIDE |
| +19d (13h) | CUIABA | +54d (36h) | BAGDAD | +89d (59h) | DARWIN |
| +20d (14h) | LA PAZ SAN JUAN | +55d (37h) | KUWAIT RIAD | +90d (5Ah) | BRISBANE |
| +21d (15h) | SANTIAGO | +56d (38h) | MINSK | +91d (5Bh) | CANBERRA SYDNEY |
| +22d (16h) | NEUFUNDLAND | +57d (39h) | MOSKAU PETERSBURG | +92d (5Ch) | GUAM PORT MORESBY |
| +23d (17h) | BRASILIA | +58d (3Ah) | NAIROBI | +93d (5Dh) | HOBART |
| +24d (18h) | BUENOS AIRES | +59d (3Bh) | TEHERAN | +94d (5Eh) | MAGADAN |
| +25d (19h) | CAYENNE FORTALEZA | +60d (3Ch) | ABU DHABI | +95d (5Fh) | WLADIWOSTOK |
| +26d (1Ah) | GROENLAND | +61d (3Dh) | BAKU | +96d (60h) | SALOMONEN KALEDONIEN |
| +27d (1Bh) | MONTEVIDEO | +62d (3Eh) | ERIWAN | +97d (61h) | TSCHOKURDACH |
| +28d (1Ch) | SALVADOR | +63d (3Fh) | ISCHEWSK SAMARA | +98d (62h) | ANADYR |
| +29d (1Dh) | COORDWORLDTIME 02 | +64d (40h) | PORT LOUIS | +99d (63h) | AUCKLAND WELLINGTON |
| +30d (1Eh) | AZOREN | +65d (41h) | TIFLIS | +100d (64h) | FIDSCHI |
| +31d (1Fh) | KAPVERDE | +66d (42h) | KABUL | +101d (65h) | COORDWORLDTIME 12 |
| +32d (20h) | CASABLANCA | +67d (43h) | ASCHGABAT TASCHKENT | +102d (66h) | NAKUALOFA |
| +33d (21h) | DUBLIN LISSABON LONDON | +68d (44h) | ISLAMABAD KARATSCHI | +103d (67h) | SAMOA |
| +34d (22h) | COORDWORLDTIME | +69d (45h) | JEKATERINBURG | +104d (68h) | KIRITIMATI |

**Example: sWN TSCTCtimezone - Amsterdam, Berlin, Rome**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}TSCTCtimezone{SPC}+36<ETX>
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

Required user level: Authorized client.

**Telegram structure: sWN TSCTCupdatetime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set update time of synchronization | String | 15 | | `TSCTCupdatetime` | `54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65` |
| Update time of synchronization | Set values in seconds | Uint_32 | 4 | | `+1d … +3600d(01h … 0E10h)` | `00 00 00 00 … 00 00 0E 10` |

**Example: sWN TSCTCupdatetime - 600 s**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}TSCTCupdatetime{SPC}+600<ETX>
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

### Set Particle Filter [sWN particleFilter]

</summary>

Configure the particle filter. A point is a particle if fewer than the minimum number of neighbors in its 8-connected neighborhood, over all echoes, are within the distance threshold. See [Filter Details](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/#particle-filter).

Required user level: Authorized client.

**Telegram structure: sWN particleFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | Particle filter | String | 14 | | `particleFilter` | `70 61 72 74 69 63 6C 65 46 69 6C 74 65 72` |
| enable | If true a detected particle is filtered out (aka distance set to zero) and subsequent echoes are moved up. Otherwise, the point is flagged in the properties channel. | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| minNumberOfNeighbors | If a measurement has less points in its 8-connected neighborhood over all echoes within the distance threshold, this measurement is considered as particle. | Uint_16 | 2 | Max: 8 | `+1` | `00 01` |
| distanceThreshold | Distance threshold value. For a given measurement all points in the 8-connected neighborhood over all three echoes are with a distance less than the distanceThreshold are counted. If the result is below the minNumberOfNeighbors, this measurement is considered as particle | Uint_16 | 2 | Max: 2000 | `+500` | `01 F4` |

**Example: sWN particleFilter - Disable the particle filter**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}particleFilter{SPC}0{SPC}+1{SPC}+500<ETX>
```

```text
sWN particleFilter 0 +1 +500
```

```text
02 73 57 4E 20 70 61 72 74 69 63 6C 65 46 69 6C 74 65 72 20 30 20 2B 31 20 2B 35 30 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 18 73 57 4E 20 70 61 72 74 69 63 6C 65 46 69 6C 74 65 72 20 00 00 01 01 F4 AA
```

```text
73 57 4E 20 70 61 72 74 69 63 6C 65 46 69 6C 74 65 72 20 00 00 01 01 F4
```


**Telegram structure: sWA particleFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 14 | | `particleFilter` | `70 61 72 74 69 63 6C 65 46 69 6C 74 65 72` |

**Example: sWA particleFilter**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}particleFilter<ETX>
```

```text
02 73 57 41 20 70 61 72 74 69 63 6C 65 46 69 6C 74 65 72 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 41 20 70 61 72 74 69 63 6C 65 46 69 6C 74 65 72 20 51
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Echo Filter [sWN FREchoFilter]

</summary>

Select which echoes are output when one beam returns several distance values.

Required user level: Authorized client.

**Telegram structure: sWN FREchoFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set echo filter | String | 12 | | `FREchoFilter` | `46 52 45 63 68 6F 46 69 6C 74 65 72` |
| Status code | Code number | Enum_8 | 1 | First echo:<br>All echos:<br>Last echo: | `0<br>1<br>2` | `00<br>01<br>02` |

**Example: sWN FREchoFilter - All echoes**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}FREchoFilter{SPC}1<ETX>
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

**Example: sWA FREchoFilter**

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

### Set Blooming Filter [sWN bloomingFilter]

</summary>

Configure the blooming filter. See [Filter Details](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/#blooming-filter).

Required user level: Authorized client.

**Telegram structure: sWN bloomingFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | Blooming Filter | String | 14 | | `bloomingFilter` | `62 6C 6F 6F 6D 69 6E 67 46 69 6C 74 65 72` |
| strength | | Enum_8 | 1 | Low:<br>Medium:<br>Strong: | `0<br>1<br>2` | `00<br>01<br>02` |
| enable | Enable/ disable Blooming Filter | Bool_1 | 1 | Disable:<br>Enable: | `0<br>1` | `00<br>01` |

**Example: sWN bloomingFilter - Medium strength, disabled**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}bloomingFilter{SPC}1{SPC}0<ETX>
```

```text
sWN bloomingFilter 1 0
```

```text
02 73 57 4E 20 62 6C 6F 6F 6D 69 6E 67 46 69 6C 74 65 72 20 31 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 57 4E 20 62 6C 6F 6F 6D 69 6E 67 46 69 6C 74 65 72 20 01 00 48
```

```text
73 57 4E 20 62 6C 6F 6F 6D 69 6E 67 46 69 6C 74 65 72 20 01 00
```


**Telegram structure: sWA bloomingFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 14 | | `bloomingFilter` | `62 6C 6F 6F 6D 69 6E 67 46 69 6C 74 65 72` |

**Example: sWA bloomingFilter**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}bloomingFilter<ETX>
```

```text
02 73 57 41 20 62 6C 6F 6F 6D 69 6E 67 46 69 6C 74 65 72 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 41 20 62 6C 6F 6F 6D 69 6E 67 46 69 6C 74 65 72 20 46
```

</details>

</section>

<section class="cola-category" markdown="1">

## Mounting Position

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Sensor Position [sWN SensorPosition]

</summary>

Required user level: Authorized client.

**Telegram structure: sWN SensorPosition**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | | String | 14 | | `SensorPosition` | `53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E` |
| x | in mm | Int_32 | 4 | Max: 100000 | `0` | `00 00 00 00` |
| y | in mm | Int_32 | 4 | Max: 100000 | `0` | `00 00 00 00` |
| z | in mm | Int_32 | 4 | Max: 100000 | `0` | `00 00 00 00` |
| yaw | in 1/10000 deg | Int_32 | 4 | Max: 3600000 | `0` | `00 00 00 00` |
| pitch | in 1/10000 deg | Int_32 | 4 | Max: 3600000 | `0` | `00 00 00 00` |
| roll | in 1/10000 deg | Int_32 | 4 | Max: 3600000 | `0` | `00 00 00 00` |

**Example: sWN SensorPosition**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}SensorPosition{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
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
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 14 | | `SensorPosition` | `53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E` |

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

## Contamination Indication

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Contamination Indication Settings [sWN ContaminationConfig]

</summary>

Define how and when the device signals a potential contamination of the optics cover, so that it can be cleaned in time. See [Contamination Indication](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/contamination-indication/).

Required user level: Authorized client.

**Telegram structure: sWN ContaminationConfig**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | | String | 19 | | `ContaminationConfig` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67` |
| Strategy | Strategy code | Enum_8 | 1 | Inactive:<br>High available:<br>Sensitive: | `0<br>1<br>2` | `00<br>01<br>02` |
| Response time | How fast (in seconds) the sensor reacts after a contamination | Uint_16 | 2 | 3 … 60, default 3 | `+3d … +60d (3 … 3Ch)` | `00 03 … 00 3C` |
| Threshold warning | Sensitivity | Enum_8 | 1 | Low:<br>Medium:<br>High: | `0<br>1<br>2` | `00<br>01<br>02` |
| Cover | No cover, weather protection hood, or custom sectors | Enum_8 | 1 | No cover:<br>Weather protection hood:<br>Custom sectors: | `0<br>6<br>+255d (FFh)` | `00<br>06<br>FF` |
| Number of sectors | Number of the following sector values | Uint_16 | 2 | Always 12 | `C` | `00 0C` |
| Custom sector | Sector 1 … 12 is evaluated, one value per sector | Bool_1 | 1 | Inactive:<br>Active (default): | `0<br>1` | `00<br>01` |
| Enable warning | Warning monitoring | Bool_1 | 1 | Off:<br>On: | `0<br>1` | `00<br>01` |
| Enable error | Error monitoring | Bool_1 | 1 | Off:<br>On: | `0<br>1` | `00<br>01` |

**Example: sWN ContaminationConfig**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}ContaminationConfig{SPC}0{SPC}3{SPC}0{SPC}0{SPC}C{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1<ETX>
```

```text
sWN ContaminationConfig 0 3 0 0 C 1 1 1 1 1 1 1 1 1 1 1 1 1 1
```

```text
02 73 57 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 20 30 20 33 20 30 20 30 20 43 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2D 73 57 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 20 00 00 03 00 00 00 0C 01 01 01 01 01 01 01 01 01 01 01 01 01 01 0F
```

```text
73 57 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 20 00 00 03 00 00 00 0C 01 01 01 01 01 01 01 01 01 01 01 01 01 01
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
| Strategy | Strategy code | Enum_8 | 1 | Inactive:<br>High available:<br>Sensitive: | `0<br>1<br>2` | `00<br>01<br>02` |
| Response time | How fast (in seconds) the sensor reacts after a contamination | Uint_16 | 2 | 3 … 60, default 3 | `+3d … +60d (3 … 3Ch)` | `00 03 … 00 3C` |
| Threshold warning | Sensitivity | Enum_8 | 1 | Low:<br>Medium:<br>High: | `0<br>1<br>2` | `00<br>01<br>02` |
| Cover | No cover, weather protection hood, or custom sectors | Enum_8 | 1 | No cover:<br>Weather protection hood:<br>Custom sectors: | `0<br>6<br>+255d (FFh)` | `00<br>06<br>FF` |
| Number of sectors | Number of the following sector values | Uint_16 | 2 | Always 12 | `C` | `00 0C` |
| Custom sector | Sector 1 … 12 is evaluated, one value per sector | Bool_1 | 1 | Inactive:<br>Active (default): | `0<br>1` | `00<br>01` |
| Enable warning | Warning monitoring | Bool_1 | 1 | Off:<br>On: | `0<br>1` | `00<br>01` |
| Enable error | Error monitoring | Bool_1 | 1 | Off:<br>On: | `0<br>1` | `00<br>01` |

**Example: sRA ContaminationConfig**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ContaminationConfig{SPC}0{SPC}3{SPC}0{SPC}0{SPC}C{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1<ETX>
```

```text
02 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 20 30 20 33 20 30 20 30 20 43 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2D 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 20 00 00 03 00 00 00 0C 01 01 01 01 01 01 01 01 01 01 01 01 01 01 05
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
| Number of sectors | Number of the following sector values | Uint_16 | 2 | Always 12 | `C` | `00 0C` |
| Contamination data | Status of contamination of sector 1 … 12, one value per sector | Enum_8 | 1 | Deactivated:<br>Clean:<br>Warning:<br>Error: | `0<br>1<br>2<br>3` | `00<br>01<br>02<br>03` |

**Example: sRA ContaminationData**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ContaminationData{SPC}C{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}2{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1<ETX>
```

```text
02 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 20 43 20 31 20 31 20 31 20 31 20 31 20 32 20 31 20 31 20 31 20 31 20 31 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 24 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 20 00 0C 01 01 01 01 01 02 01 01 01 01 01 01 1F
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Contamination Indication Result [sRN ContaminationResult]

</summary>

Read the contamination result: one value for the warning and one for the error. Depending on the strategy, the state changes when one or all sectors reach warning or error.

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
| Warning | Contamination warning | Bool_1 | 1 | Inactive:<br>Active: | `0<br>1` | `00<br>01` |
| Error | Contamination error | Bool_1 | 1 | Inactive:<br>Active: | `0<br>1` | `00<br>01` |

**Example: sRA ContaminationResult**

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

### Set Treat Blocked Sectors as Error Sectors [sWN treatBlockedSectorsAsErrorSectors]

</summary>

If enabled, blocked sectors get interpreted as error sectors for contamination strategy evaluation.

Required user level: Authorized client.

**Telegram structure: sWN treatBlockedSectorsAsErrorSectors**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | treatBlockedSectorsAsErrorSectors | String | 33 | | `treatBlockedSectorsAsErrorSectors` | `74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73` |
| Value | Enable/ disable Treat Blocked Sectors As Error Sectors | Bool_1 | 1 | Disable:<br>Enable: | `0<br>1` | `00<br>01` |

**Example: sWN treatBlockedSectorsAsErrorSectors - Enable**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}treatBlockedSectorsAsErrorSectors{SPC}1<ETX>
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
02 02 02 02 00 00 00 26 73 57 41 20 74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73 20 31
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
<STX>sRA{SPC}treatBlockedSectorsAsErrorSectors{SPC}0<ETX>
```

```text
02 73 52 41 20 74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 27 73 52 41 20 74 72 65 61 74 42 6C 6F 63 6B 65 64 53 65 63 74 6F 72 73 41 73 45 72 72 6F 72 53 65 63 74 6F 72 73 20 00 34
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Send Contamination Indication Data Permanently [sEN ContaminationData]

</summary>

Subscribe to the contamination data. After `sEA ContaminationData 1`, the device sends `sSN ContaminationData` with the state of all sectors every time the contamination state of a sector changes. Send `sEN ContaminationData 0` to stop.

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


**Example: sEA ContaminationData**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}ContaminationData{SPC}1<ETX>
```

```text
02 73 45 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 45 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 20 01 06
```


**Telegram structure: sSN ContaminationData**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sSN` | `73 53 4E` |
| Command | Get the contamination indication data continuously | String | 17 | | `ContaminationData` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61` |
| Number of sectors | Number of the following sector values | Uint_16 | 2 | Always 12 | `C` | `00 0C` |
| Contamination data | Status of contamination of sector 1 … 12, one value per sector | Enum_8 | 1 | Deactivated:<br>Clean:<br>Warning:<br>Error: | `0<br>1<br>2<br>3` | `00<br>01<br>02<br>03` |

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Send Contamination Indication Result Permanently [sEN ContaminationResult]

</summary>

Subscribe to the contamination result. After `sEA ContaminationResult 1`, the device sends `sSN ContaminationResult` every time the warning or error state changes. Send `sEN ContaminationResult 0` to stop.

**Telegram structure: sEN ContaminationResult**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | | String | 19 | | `ContaminationResult` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74` |
| Data | Start/ Stop | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN ContaminationResult**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}ContaminationResult{SPC}1<ETX>
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


**Example: sEA ContaminationResult**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}ContaminationResult{SPC}1<ETX>
```

```text
02 73 45 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 19 73 45 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 01 1F
```


**Telegram structure: sSN ContaminationResult**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sSN` | `73 53 4E` |
| Warning | Contamination warning | Bool_1 | 1 | Inactive:<br>Active: | `0<br>1` | `00<br>01` |
| Error | Contamination error | Bool_1 | 1 | Inactive:<br>Active: | `0<br>1` | `00<br>01` |

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Contamination Active Sectors [sRN ContaminationActiveSectors]

</summary>

Read which sectors are included in the computation of the contamination result.

**Telegram structure: sRN ContaminationActiveSectors**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read request | String | 3 | | `sRN` | `73 52 4E` |
| Variable name | Element i is true, if the sector result i is included in the computation of the contamination results and false otherwise. | String | 26 | | `ContaminationActiveSectors` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 41 63 74 69 76 65 53 65 63 74 6F 72 73` |

**Example: sRN ContaminationActiveSectors**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ContaminationActiveSectors<ETX>
```

```text
sRN ContaminationActiveSectors
```

```text
02 73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 41 63 74 69 76 65 53 65 63 74 6F 72 73 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1E 73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 41 63 74 69 76 65 53 65 63 74 6F 72 73 6C
```

```text
73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 41 63 74 69 76 65 53 65 63 74 6F 72 73
```


**Telegram structure: sRA ContaminationActiveSectors**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read answer | String | 3 | | `sRA` | `73 52 41` |
| Variable name | Element i is true, if the sector result i is included in the computation of the contamination results and false otherwise. | String | 26 | | `ContaminationActiveSectors` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 41 63 74 69 76 65 53 65 63 74 6F 72 73` |
| Number of sectors | Number of the following sector values | Uint_16 | 2 | Always 12 | `C` | `00 0C` |
| Active sector | Sector 1 … 12 is included in the contamination result, one value per sector | Bool_1 | 1 | Not included:<br>Included: | `0<br>1` | `00<br>01` |

**Example: sRA ContaminationActiveSectors**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ContaminationActiveSectors{SPC}C{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1<ETX>
```

```text
02 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 41 63 74 69 76 65 53 65 63 74 6F 72 73 20 43 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2D 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 41 63 74 69 76 65 53 65 63 74 6F 72 73 20 00 0C 01 01 01 01 01 01 01 01 01 01 01 01 4F
```

</details>

</section>

<section class="cola-category" markdown="1">

## Ethernet

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set IP Address [sWN EIIpAddr]

</summary>

Save permanently to set values. Changes will be active after rebooting the device. Settings must correspond with the network in which the scanner is used, else the device cannot be found anymore.

**Telegram structure: sWN EIIpAddr**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set IP address | String | 8 | | `EIIpAddr` | `45 49 49 70 41 64 64 72` |
| IP address | Set values | Uint_8 | 1 | First part of IP address | `0 …+255d (00 … FF)` | `00 … FF` |
| IP address | Set values | Uint_8 | 1 | Second part of IP address | `0 …+255d (00 … FF)` | `00 … FF` |
| IP address | Set values | Uint_8 | 1 | Third part of IP address | `0 …+255d (00 … FF)` | `00 … FF` |
| IP address | Set values | Uint_8 | 1 | Fourth part of IP address | `0 …+255d (00 … FF)` | `00 … FF` |

**Example: sWN EIIpAddr 192.168.0.2**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EIIpAddr{SPC}C0{SPC}A8{SPC}0{SPC}2<ETX>
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
| Command | Set IP address | String | 8 | | `EIIpAddr` | `45 49 49 70 41 64 64 72` |

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
| Command | Read IP address | String | 8 | | `EIIpAddr` | `45 49 49 70 41 64 64 72` |

**Example: sRN EIIpAddr**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EIIpAddr<ETX>
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
| Command | Read IP address | String | 8 | | `EIIpAddr` | `45 49 49 70 41 64 64 72` |
| IP address | Default: 192.168.0.1 | Uint_8 | 1 | First part of IP address | `0 …+255d (00 …FF)` | `00 … FF` |
| IP address | Default: 192.168.0.1 | Uint_8 | 1 | Second part of IP address | `0 …+255d (00 …FF)` | `00 … FF` |
| IP address | Default: 192.168.0.1 | Uint_8 | 1 | Third part of IP address | `0 …+255d (00 …FF)` | `00 … FF` |
| IP address | Default: 192.168.0.1 | Uint_8 | 1 | Fourth part of IP address | `0 …+255d (00 …FF)` | `00 … FF` |

**Example: sRA EIIpAddr**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EIIpAddr{SPC}C0{SPC}A8{SPC}0{SPC}1<ETX>
```

```text
02 73 52 41 20 45 49 49 70 41 64 64 72 20 43 30 20 41 38 20 30 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 52 41 20 45 49 49 70 41 64 64 72 20 C0 A8 00 01 0F
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read IP Address Assigned by DHCP [sRN EIIpAddrDHCP]

</summary>

Read the IP address assigned by DHCP. The address assignment mode must be DHCP.

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
| IP address | Default: 192.168.0.1 | Uint_8 | 1 | First part of IP address | `0 …+255d (00 …FF)` | `00 … FF` |
| IP address | Default: 192.168.0.1 | Uint_8 | 1 | Second part of IP address | `0 …+255d (00 …FF)` | `00 … FF` |
| IP address | Default: 192.168.0.1 | Uint_8 | 1 | Third part of IP address | `0 …+255d (00 …FF)` | `00 … FF` |
| IP address | Default: 192.168.0.1 | Uint_8 | 1 | Fourth part of IP address | `0 …+255d (00 …FF)` | `00 … FF` |

**Example: sRA EIIpAddrDHCP**

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

Select a static IP address or DHCP.

Required user level: Authorized client.

**Telegram structure: sWN EIAddrMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set mode for ethernet address assignment | String | 10 | | `EIAddrMode` | `45 49 41 64 64 72 4D 6F 64 65` |
| Ethernet address assignment | Static IP address /DHCP | Enum_8 | 1 | Static:<br>DHCP: | `0<br>1` | `00<br>01` |

**Example: sWN EIAddrMode**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EIAddrMode{SPC}0<ETX>
```

```text
sWN EIAddrMode 0
```

```text
02 73 57 4E 20 45 49 41 64 64 72 4D 6F 64 65 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 57 4E 20 45 49 41 64 64 72 4D 6F 64 65 20 00 76
```

```text
73 57 4E 20 45 49 41 64 64 72 4D 6F 64 65 20 00
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

Select what the device does if DHCP fails: use the static IP address or retry DHCP.

Required user level: Authorized client.

**Telegram structure: sWN EIDHCPFallback**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set fallback for DHCP | String | 14 | | `EIDHCPFallback` | `45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B` |
| Fallback ethernet address assignment | Use Static IP address /Retry DHCP | Enum_8 | 1 | Static IP address:<br>DHCP retry: | `0<br>1` | `00<br>01` |

**Example: sWN EIDHCPFallback - Retry DHCP**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EIDHCPFallback{SPC}1<ETX>
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

Set the Ethernet gateway. Save the parameters permanently; the change takes effect after a reboot. The setting must match the network, otherwise the device cannot be reached.

Required user level: Authorized client.

**Telegram structure: sWN EIgate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set gateway address | String | 6 | | `EIgate` | `45 49 67 61 74 65` |
| Gateway address | Set values | Uint_8 | 1 | First part of gateway address | `0 …+255d (00…FF)` | `00 …FF` |
| Gateway address | Set values | Uint_8 | 1 | Second part of gateway address | `0 …+255d (00…FF)` | `00 …FF` |
| Gateway address | Set values | Uint_8 | 1 | Third part of gateway address | `0 …+255d (00…FF)` | `00 …FF` |
| Gateway address | Set values | Uint_8 | 1 | Fourth part of gateway address | `0 …+255d (00…FF)` | `00 …FF` |

**Example: sWN EIgate**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EIgate{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
sWN EIgate 0 0 0 0
```

```text
02 73 57 4E 20 45 49 67 61 74 65 20 30 20 30 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 57 4E 20 45 49 67 61 74 65 20 00 00 00 00 71
```

```text
73 57 4E 20 45 49 67 61 74 65 20 00 00 00 00
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

Read the Ethernet gateway (TCP/ IP).

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
| Gateway address | Default: 0.0.0.0 | Uint_8 | 1 | First part of gateway address | `0 …+255d (00 … FF)` | `00 … FF` |
| Gateway address | Default: 0.0.0.0 | Uint_8 | 1 | Second part of gateway address | `0 …+255d (00 … FF)` | `00 … FF` |
| Gateway address | Default: 0.0.0.0 | Uint_8 | 1 | Third part of gateway address | `0 …+255d (00 … FF)` | `00 … FF` |
| Gateway address | Default: 0.0.0.0 | Uint_8 | 1 | Fourth part of gateway address | `0 …+255d (00 … FF)` | `00 … FF` |

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

### Read Ethernet Gateway Assigned by DHCP [sRN EIgateDHCP]

</summary>

Read the Ethernet gateway assigned by DHCP. The address assignment mode must be DHCP.

**Telegram structure: sRN EIgateDHCP**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read ethernet gateway IP address assigned by DHCP | String | 10 | | `EIgateDHCP` | `45 49 67 61 74 65 44 48 43 50` |

**Example: sRN EIgateDHCP**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EIgateDHCP<ETX>
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
| Command | Read ethernet gateway IP address assigned by DHCP | String | 10 | | `EIgateDHCP` | `45 49 67 61 74 65 44 48 43 50` |
| Gateway IP address | Default: 0.0.0.0 | Uint_8 | 1 | First part of gateway IP address | `0 …+255d (00…FF)` | `00 … FF` |
| Gateway IP address | Default: 0.0.0.0 | Uint_8 | 1 | Second part of gateway IP address | `0 …+255d (00…FF)` | `00 … FF` |
| Gateway IP address | Default: 0.0.0.0 | Uint_8 | 1 | Third part of gateway IP address | `0 …+255d (00…FF)` | `00 … FF` |
| Gateway IP address | Default: 0.0.0.0 | Uint_8 | 1 | Fourth part of gateway IP address | `0 …+255d (00…FF)` | `00 … FF` |

**Example: sRA EIgateDHCP**

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

Set the subnet mask. Save the parameters permanently; the change takes effect after a reboot. The setting must match the network, otherwise the device cannot be reached.

Required user level: Authorized client.

**Telegram structure: sWN EImask**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set IP mask | String | 6 | | `EImask` | `45 49 6D 61 73 6B` |
| IP mask | Set values | Uint_8 | 1 | First part of IP mask | `0 …+255d (00…FF)` | `00 …FF` |
| IP mask | Set values | Uint_8 | 1 | Second part of IP mask | `0 …+255d (00…FF)` | `00 …FF` |
| IP mask | Set values | Uint_8 | 1 | Third part of IP mask | `0 …+255d (00…FF)` | `00 …FF` |
| IP mask | Set values | Uint_8 | 1 | Fourth part of IP mask | `0 …+255d (00…FF)` | `00 …FF` |

**Example: sWN EImask**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EImask{SPC}FF{SPC}FF{SPC}FF{SPC}0<ETX>
```

```text
sWN EImask FF FF FF 0
```

```text
02 73 57 4E 20 45 49 6D 61 73 6B 20 46 46 20 46 46 20 46 46 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 57 4E 20 45 49 6D 61 73 6B 20 FF FF FF 00 8D
```

```text
73 57 4E 20 45 49 6D 61 73 6B 20 FF FF FF 00
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

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read IP mask | String | 6 | | `EImask` | `45 49 6D 61 73 6B` |
| IP mask | Default: 255.255.255.0 | Uint_8 | 1 | First part of IP mask | `0 …+255d (00 … FF)` | `00 … FF` |
| IP mask | Default: 255.255.255.0 | Uint_8 | 1 | Second part of IP mask | `0 …+255d (00 … FF)` | `00 … FF` |
| IP mask | Default: 255.255.255.0 | Uint_8 | 1 | Third part of IP mask | `0 …+255d (00 … FF)` | `00 … FF` |
| IP mask | Default: 255.255.255.0 | Uint_8 | 1 | Fourth part of IP mask | `0 …+255d (00 … FF)` | `00 … FF` |

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

Read the subnet mask assigned by DHCP. The address assignment mode must be DHCP.

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

**Example: sRA EImaskDHCP**

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

</section>

<section class="cola-category" markdown="1">

## Inputs and Outputs

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read State of the Ports [sRN LIDportstate]

</summary>

Read the state and the change counter of all ports. The answer contains 8 internal (physical) ports and 8 external (virtual) ports. A tri-state port is neither input nor output; it is set inactive in the configuration.

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
| Version | Version number | Uint_16 | 2 | | `0 … FFFF` | `00 00 … FF FF` |
| System counter | Time in µs since power-up; restarts at 0 after about 71 min | Uint_32 | 4 | | `0 … FFFFFFFF` | `00 00 00 00 … FF FF FF FF` |
| Internal port state | Port 1 … 8, one state and one counter per port | Enum_8 | 1 | Output voltage low (relay open):<br>Output voltage high (relay closed):<br>Tri-state (port inactive):<br>Input voltage high (level) or low to high (edge):<br>Input voltage low (level) or high to low (edge): | `0<br>1<br>2<br>3<br>4` | `00<br>01<br>02<br>03<br>04` |
| Internal port counter | Number of state changes of the port | Uint_32 | 4 | | `0 … FFFFFFFF` | `00 00 00 00 … FF FF FF FF` |
| External port state | Virtual port 1 … 8, one state and one counter per port | Enum_8 | 1 | Output voltage low (relay open):<br>Output voltage high (relay closed):<br>Tri-state (port inactive):<br>Input voltage high (level) or low to high (edge):<br>Input voltage low (level) or high to low (edge): | `0<br>1<br>2<br>3<br>4` | `00<br>01<br>02<br>03<br>04` |
| External port counter | Number of state changes of the port | Uint_32 | 4 | | `0 … FFFFFFFF` | `00 00 00 00 … FF FF FF FF` |
| Time | Time data present | Uint_16 | 2 | No time data:<br>Time data: | `0<br>1` | `00 00<br>00 01` |
| Year | Time of the last change | Uint_16 | 2 | | `7B2 … 833` | `07 B2 … 08 33` |
| Month | | Uint_8 | 1 | | `1 … C` | `01 … 0C` |
| Day | | Uint_8 | 1 | | `1 … 1F` | `01 … 1F` |
| Hour | | Uint_8 | 1 | | `0 … 17` | `00 … 17` |
| Minute | | Uint_8 | 1 | | `0 … 3B` | `00 … 3B` |
| Second | | Uint_8 | 1 | | `0 … 3B` | `00 … 3B` |
| Microsecond | | Uint_32 | 4 | | `0 … F423F` | `00 00 00 00 … 00 0F 42 3F` |

**Example: sRA LIDportstate**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LIDportstate{SPC}0{SPC}9DBED0{SPC}0{SPC}1{SPC}1{SPC}1{SPC}4{SPC}0{SPC}4{SPC}0{SPC}4{SPC}0{SPC}4{SPC}0{SPC}1{SPC}1{SPC}1{SPC}1{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}1{SPC}7B2{SPC}1{SPC}1{SPC}0{SPC}0{SPC}A{SPC}52850<ETX>
```

```text
02 73 52 41 20 4C 49 44 70 6F 72 74 73 74 61 74 65 20 30 20 39 44 42 45 44 30 20 30 20 31 20 31 20 31 20 34 20 30 20 34 20 30 20 34 20 30 20 34 20 30 20 31 20 31 20 31 20 31 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 31 20 37 42 32 20 31 20 31 20 30 20 30 20 41 20 35 32 38 35 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 74 73 52 41 20 4C 49 44 70 6F 72 74 73 74 61 74 65 20 00 00 00 9D BE D0 00 00 00 00 01 01 00 00 00 01 04 00 00 00 00 04 00 00 00 00 04 00 00 00 00 04 00 00 00 00 01 00 00 00 01 01 00 00 00 01 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 00 01 07 B2 01 01 00 00 0A 00 05 28 50 7E
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Port Configuration [sRN PortConfiguration]

</summary>

Read the configuration of the 8 digital inputs and outputs. The answer contains one record per port.

**Telegram structure: sRN PortConfiguration**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Ask for port configuration | String | 17 | | `PortConfiguration` | `50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |

**Example: sRN PortConfiguration**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}PortConfiguration<ETX>
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
| Command | Configuration of all I/Os | String | 17 | | `PortConfiguration` | `50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |
| Port type | Port 1 … 8, the following rows repeat for every port | Enum_8 | 1 | Input:<br>Output: | `0<br>1` | `00<br>01` |
| Port name length | Number of characters of the port name | Uint_16 | 2 | | `0 … 20` | `00 00 … 00 20` |
| Port name | Name of the port | String | Length | | `InOut1` | `49 6E 4F 75 74 31` |
| Input logic | Logic of the input | Bool_1 | 1 | Active high:<br>Active low: | `0<br>1` | `00<br>01` |
| Debouncing | Debouncing time in ms | Uint_16 | 2 | Maximum 10,000 ms | `0 … 2710` | `00 00 … 27 10` |
| Reserved | - | Enum_8 | 1 | | `1` | `01` |
| Reserved | - | Uint_16 | 2 | | `0` | `00 00` |
| Reserved | - | Uint_16 | 2 | | `0` | `00 00` |
| Output logic | Logic of the output | Bool_1 | 1 | Active high:<br>Active low: | `0<br>1` | `00<br>01` |
| Output mode | PNP, NPN, or push-pull | Enum_8 | 1 | PNP:<br>NPN:<br>Push-pull: | `0<br>1<br>2` | `00<br>01<br>02` |
| Restart type | Restart behavior of the output after an event | Enum_8 | 1 | Immediately:<br>Time:<br>Input: | `0<br>1<br>2` | `00<br>01<br>02` |
| Restart time | Only with restart type Time, in ms | Uint_32 | 4 | 20 … 600,000 ms | `14 … 927C0` | `00 00 00 14 … 00 09 27 C0` |
| Restart input | Only with restart type Input, input used for the restart | Uint_16 | 2 | | `1 … 8` | `00 01 … 00 08` |
| Combination | Logic for combining several sources | Enum_8 | 1 | AND:<br>OR:<br>XOR: | `0<br>1<br>2` | `00<br>01<br>02` |
| Reserved | - | Uint_16 | 2 | | `0` | `00 00` |
| Reserved | - | Uint_16 | 2 | | `0` | `00 00` |
| Number of sources | Number of combined sources; 0 for inputs | Uint_16 | 2 | | `0 … FFFF` | `00 00 … FF FF` |
| Source name | Repeats with the next two rows for every source | String | 4 | Device not ready:<br>Field evaluation xx:<br>SOPAS command xx:<br>Input xx: | `DRDY<br>FExx<br>SCxx<br>INxx` | `44 52 44 59<br>46 45 x x<br>53 43 x x<br>49 4E x x` |
| Source inverted | Invert the source signal | Bool_1 | 1 | Not inverted:<br>Inverted: | `0<br>1` | `00<br>01` |
| Reserved | - | Uint_8 | 1 | | `0` | `00` |
| Reserved | - | Uint_8 | 1 | | `0` | `00` |
| Reserved | - | Uint_16 | 2 | | `0` | `00 00` |
| Reserved | - | Uint_16 | 2 | | `0` | `00 00` |
| Reserved | - | Uint_16 | 2 | | `0` | `00 00` |
| Reserved | - | Uint_16 | 2 | | `0` | `00 00` |

**Example: sRA PortConfiguration**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}PortConfiguration{SPC}1{SPC}6{SPC}InOut1{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}1{SPC}FE01{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}6{SPC}InOut2{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}1{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut3{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut4{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut5{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut6{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}6{SPC}InOut7{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}1{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}6{SPC}InOut8{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}1{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 31 20 36 20 49 6E 4F 75 74 31 20 30 20 41 20 31 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 31 20 46 45 30 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 31 20 36 20 49 6E 4F 75 74 32 20 30 20 41 20 31 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 31 20 44 52 44 59 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 36 20 49 6E 4F 75 74 33 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 36 20 49 6E 4F 75 74 34 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 36 20 49 6E 4F 75 74 35 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 36 20 49 6E 4F 75 74 36 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 31 20 36 20 49 6E 4F 75 74 37 20 30 20 41 20 31 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 31 20 44 52 44 59 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 31 20 36 20 49 6E 4F 75 74 38 20 30 20 41 20 31 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 31 20 44 52 44 59 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 01 7A 73 52 41 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 01 00 06 49 6E 4F 75 74 31 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 46 45 30 31 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 32 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 33 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 34 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 35 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 36 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 37 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 38 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 08
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Port Configuration [sWN PortConfiguration]

</summary>

Write the configuration of the digital inputs and outputs, with one record per port. The record has the same structure as in the answer of `sRN PortConfiguration`; read the current configuration first and change only the values you need.

**Telegram structure: sWN PortConfiguration**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Configuration of the given ports | String | 17 | | `PortConfiguration` | `50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |
| Port type | Port 1 … 8, the following rows repeat for every port | Enum_8 | 1 | Input:<br>Output: | `0<br>1` | `00<br>01` |
| Port name length | Number of characters of the port name | Uint_16 | 2 | | `0 … 20` | `00 00 … 00 20` |
| Port name | Name of the port | String | Length | | `InOut1` | `49 6E 4F 75 74 31` |
| Input logic | Logic of the input | Bool_1 | 1 | Active high:<br>Active low: | `0<br>1` | `00<br>01` |
| Debouncing | Debouncing time in ms | Uint_16 | 2 | Maximum 10,000 ms | `0 … 2710` | `00 00 … 27 10` |
| Reserved | - | Enum_8 | 1 | | `1` | `01` |
| Reserved | - | Uint_16 | 2 | | `0` | `00 00` |
| Reserved | - | Uint_16 | 2 | | `0` | `00 00` |
| Output logic | Logic of the output | Bool_1 | 1 | Active high:<br>Active low: | `0<br>1` | `00<br>01` |
| Output mode | PNP, NPN, or push-pull | Enum_8 | 1 | PNP:<br>NPN:<br>Push-pull: | `0<br>1<br>2` | `00<br>01<br>02` |
| Restart type | Restart behavior of the output after an event | Enum_8 | 1 | Immediately:<br>Time:<br>Input: | `0<br>1<br>2` | `00<br>01<br>02` |
| Restart time | Only with restart type Time, in ms | Uint_32 | 4 | 20 … 600,000 ms | `14 … 927C0` | `00 00 00 14 … 00 09 27 C0` |
| Restart input | Only with restart type Input, input used for the restart | Uint_16 | 2 | | `1 … 8` | `00 01 … 00 08` |
| Combination | Logic for combining several sources | Enum_8 | 1 | AND:<br>OR:<br>XOR: | `0<br>1<br>2` | `00<br>01<br>02` |
| Reserved | - | Uint_16 | 2 | | `0` | `00 00` |
| Reserved | - | Uint_16 | 2 | | `0` | `00 00` |
| Number of sources | Number of combined sources; 0 for inputs | Uint_16 | 2 | | `0 … FFFF` | `00 00 … FF FF` |
| Source name | Repeats with the next two rows for every source | String | 4 | Device not ready:<br>Field evaluation xx:<br>SOPAS command xx:<br>Input xx: | `DRDY<br>FExx<br>SCxx<br>INxx` | `44 52 44 59<br>46 45 x x<br>53 43 x x<br>49 4E x x` |
| Source inverted | Invert the source signal | Bool_1 | 1 | Not inverted:<br>Inverted: | `0<br>1` | `00<br>01` |
| Reserved | - | Uint_8 | 1 | | `0` | `00` |
| Reserved | - | Uint_8 | 1 | | `0` | `00` |
| Reserved | - | Uint_16 | 2 | | `0` | `00 00` |
| Reserved | - | Uint_16 | 2 | | `0` | `00 00` |
| Reserved | - | Uint_16 | 2 | | `0` | `00 00` |
| Reserved | - | Uint_16 | 2 | | `0` | `00 00` |

**Example: sWN PortConfiguration**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}PortConfiguration{SPC}1{SPC}6{SPC}InOut1{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}1{SPC}FE01{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}6{SPC}InOut2{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}1{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut3{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut4{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut5{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut6{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}6{SPC}InOut7{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}1{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}6{SPC}InOut8{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}1{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
sWN PortConfiguration 1 6 InOut1 0 A 1 0 0 1 0 0 C8 1 1 0 0 1 FE01 0 0 0 0 0 0 0 1 6 InOut2 0 A 1 0 0 1 0 0 C8 1 1 0 0 1 DRDY 0 0 0 0 0 0 0 0 6 InOut3 0 A 1 0 0 0 0 0 C8 1 1 0 0 0 0 0 0 0 0 6 InOut4 0 A 1 0 0 0 0 0 C8 1 1 0 0 0 0 0 0 0 0 6 InOut5 0 A 1 0 0 0 0 0 C8 1 1 0 0 0 0 0 0 0 0 6 InOut6 0 A 1 0 0 0 0 0 C8 1 1 0 0 0 0 0 0 0 1 6 InOut7 0 A 1 0 0 1 0 0 C8 1 1 0 0 1 DRDY 0 0 0 0 0 0 0 1 6 InOut8 0 A 1 0 0 1 0 0 C8 1 1 0 0 1 DRDY 0 0 0 0 0 0 0
```

```text
02 73 57 4E 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 31 20 36 20 49 6E 4F 75 74 31 20 30 20 41 20 31 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 31 20 46 45 30 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 31 20 36 20 49 6E 4F 75 74 32 20 30 20 41 20 31 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 31 20 44 52 44 59 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 36 20 49 6E 4F 75 74 33 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 36 20 49 6E 4F 75 74 34 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 36 20 49 6E 4F 75 74 35 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 36 20 49 6E 4F 75 74 36 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 31 20 36 20 49 6E 4F 75 74 37 20 30 20 41 20 31 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 31 20 44 52 44 59 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 31 20 36 20 49 6E 4F 75 74 38 20 30 20 41 20 31 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 31 20 44 52 44 59 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 01 7A 73 57 4E 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 01 00 06 49 6E 4F 75 74 31 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 46 45 30 31 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 32 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 33 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 34 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 35 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 36 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 37 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 38 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 02
```

```text
73 57 4E 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 01 00 06 49 6E 4F 75 74 31 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 46 45 30 31 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 32 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 33 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 34 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 35 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 36 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 37 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 38 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00
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

Read the state of the inputs.

**Telegram structure: sRN LIDinputstate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Input state | String | 13 | | `LIDinputstate` | `4C 49 44 69 6E 70 75 74 73 74 61 74 65` |

**Example: sRN LIDinputstate**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LIDinputstate<ETX>
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
| Command | Output state | String | 13 | | `LIDinputstate` | `4C 49 44 69 6E 70 75 74 73 74 61 74 65` |
| Version | Version number | Uint_16 | 2 | | `0 … FFFF` | `00 00 … FF FF` |
| System counter | Time in µs since power-up; restarts at 0 after about 71 min | Uint_32 | 4 | | `0 … FFFFFFFF` | `00 00 00 00 … FF FF FF FF` |
| Input state | Port 1 … 8, one value per port | Enum_8 | 1 | Not active:<br>Active:<br>Not used as input: | `0<br>1<br>2` | `00<br>01<br>02` |
| Time | Time data present | Uint_16 | 2 | No time data:<br>Time data: | `0<br>1` | `00 00<br>00 01` |
| Year | Time of the last change | Uint_16 | 2 | | `7B2 … 833` | `07 B2 … 08 33` |
| Month | | Uint_8 | 1 | | `1 … C` | `01 … 0C` |
| Day | | Uint_8 | 1 | | `1 … 1F` | `01 … 1F` |
| Hour | | Uint_8 | 1 | | `0 … 17` | `00 … 17` |
| Minute | | Uint_8 | 1 | | `0 … 3B` | `00 … 3B` |
| Second | | Uint_8 | 1 | | `0 … 3B` | `00 … 3B` |
| Microsecond | | Uint_32 | 4 | | `0 … F423F` | `00 00 00 00 … 00 0F 42 3F` |

**Example: sRA LIDinputstate**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LIDinputstate{SPC}1{SPC}920AB8{SPC}2{SPC}2{SPC}0{SPC}0{SPC}0{SPC}0{SPC}2{SPC}2{SPC}1{SPC}7B2{SPC}1{SPC}1{SPC}0{SPC}0{SPC}9{SPC}8B678<ETX>
```

```text
02 73 52 41 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 31 20 39 32 30 41 42 38 20 32 20 32 20 30 20 30 20 30 20 30 20 32 20 32 20 31 20 37 42 32 20 31 20 31 20 30 20 30 20 39 20 38 42 36 37 38 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2D 73 52 41 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 00 01 00 92 0A B8 02 02 00 00 00 00 02 02 00 01 07 B2 01 01 00 00 09 00 08 B6 78 7A
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read State of the Outputs [sRN LIDoutputstate]

</summary>

Read the state of the outputs and how often each output was active.

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
| Version | Version number | Uint_16 | 2 | | `0 … FFFF` | `00 00 … FF FF` |
| System counter | Time in µs since power-up; restarts at 0 after about 71 min | Uint_32 | 4 | | `0 … FFFFFFFF` | `00 00 00 00 … FF FF FF FF` |
| Output state | Port 1 … 8, one state and one counter per port | Enum_8 | 1 | Not active:<br>Active:<br>Not used as output: | `0<br>1<br>2` | `00<br>01<br>02` |
| Output counter | Number of times the output was active | Uint_32 | 4 | | `0 … FFFFFFFF` | `00 00 00 00 … FF FF FF FF` |
| Time | Time data present | Uint_16 | 2 | No time data:<br>Time data: | `0<br>1` | `00 00<br>00 01` |
| Year | Time of the last change | Uint_16 | 2 | | `7B2 … 833` | `07 B2 … 08 33` |
| Month | | Uint_8 | 1 | | `1 … C` | `01 … 0C` |
| Day | | Uint_8 | 1 | | `1 … 1F` | `01 … 1F` |
| Hour | | Uint_8 | 1 | | `0 … 17` | `00 … 17` |
| Minute | | Uint_8 | 1 | | `0 … 3B` | `00 … 3B` |
| Second | | Uint_8 | 1 | | `0 … 3B` | `00 … 3B` |
| Microsecond | | Uint_32 | 4 | | `0 … F423F` | `00 00 00 00 … 00 0F 42 3F` |

**Example: sRA LIDoutputstate**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LIDoutputstate{SPC}1{SPC}9DBAE8{SPC}0{SPC}1{SPC}1{SPC}1{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}7B2{SPC}1{SPC}1{SPC}0{SPC}0{SPC}A{SPC}52850<ETX>
```

```text
02 73 52 41 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 31 20 39 44 42 41 45 38 20 30 20 31 20 31 20 31 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 31 20 31 20 31 20 31 20 31 20 37 42 32 20 31 20 31 20 30 20 30 20 41 20 35 32 38 35 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4E 73 52 41 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 00 01 00 9D BA E8 00 00 00 00 01 01 00 00 00 01 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 01 00 00 00 01 01 00 00 00 01 00 01 07 B2 01 01 00 00 0A 00 05 28 50 45
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Receive Output State by Event [sEN LIDoutputstate]

</summary>

Subscribe to the output state. After `sEA LIDoutputstate 1`, the device sends `sSN LIDoutputstate` every time an output state changes, with the structure of `sRA LIDoutputstate`. Send `sEN LIDoutputstate 0` to stop.

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


**Example: sEA LIDoutputstate**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}LIDoutputstate{SPC}1<ETX>
```

```text
02 73 45 41 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 45 41 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 01 5F
```


**Telegram structure: sRA/sSN LIDoutputstate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA / sSN` | `73 52 41 / 73 53 4E` |
| Command | Output state | String | 14 | | `LIDoutputstate` | `4C 49 44 6F 75 74 70 75 74 73 74 61 74 65` |
| Version | Version number | Uint_16 | 2 | | `0 … FFFF` | `00 00 … FF FF` |
| System counter | Time in µs since power-up; restarts at 0 after about 71 min | Uint_32 | 4 | | `0 … FFFFFFFF` | `00 00 00 00 … FF FF FF FF` |
| Output state | Port 1 … 8, one state and one counter per port | Enum_8 | 1 | Not active:<br>Active:<br>Not used as output: | `0<br>1<br>2` | `00<br>01<br>02` |
| Output counter | Number of times the output was active | Uint_32 | 4 | | `0 … FFFFFFFF` | `00 00 00 00 … FF FF FF FF` |
| Time | Time data present | Uint_16 | 2 | No time data:<br>Time data: | `0<br>1` | `00 00<br>00 01` |
| Year | Time of the last change | Uint_16 | 2 | | `7B2 … 833` | `07 B2 … 08 33` |
| Month | | Uint_8 | 1 | | `1 … C` | `01 … 0C` |
| Day | | Uint_8 | 1 | | `1 … 1F` | `01 … 1F` |
| Hour | | Uint_8 | 1 | | `0 … 17` | `00 … 17` |
| Minute | | Uint_8 | 1 | | `0 … 3B` | `00 … 3B` |
| Second | | Uint_8 | 1 | | `0 … 3B` | `00 … 3B` |
| Microsecond | | Uint_32 | 4 | | `0 … F423F` | `00 00 00 00 … 00 0F 42 3F` |

**Example: sSN LIDoutputstate**

**CoLa A (ASCII)**

```text
<STX>sSN{SPC}LIDoutputstate{SPC}1{SPC}E1764E77{SPC}1{SPC}1{SPC}0{SPC}3{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}0{SPC}3{SPC}0{SPC}3{SPC}1{SPC}7EA{SPC}A{SPC}1{SPC}10{SPC}36{SPC}24{SPC}E57E0<ETX>
```

```text
02 73 53 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 31 20 45 31 37 36 34 45 37 37 20 31 20 31 20 30 20 33 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 30 20 33 20 30 20 33 20 31 20 37 45 41 20 41 20 31 20 31 30 20 33 36 20 32 34 20 45 35 37 45 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4E 73 53 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 00 01 E1 76 4E 77 01 00 00 00 01 00 00 00 00 03 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 00 00 00 00 03 00 00 00 00 03 00 01 07 EA 0A 01 10 36 24 00 0E 57 E0 B7
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Output State [sMN mDOSetOutput]

</summary>

Set an output to active or not active. The port must be configured as output, with the source **SOPAS command**. Otherwise, the device answers with status `0`.

**Telegram structure: sMN mDOSetOutput**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Set output state | String | 12 | | `mDOSetOutput` | `6D 44 4F 53 65 74 4F 75 74 70 75 74` |
| Output number | | Uint_8 | 1 | | `1 … 3` | `01 … 03` |
| Output state | | Enum_8 | 1 | Not active:<br>Active: | `0<br>1` | `00<br>01` |

**Example: sMN mDOSetOutput - Set output 1 to not active**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}mDOSetOutput{SPC}1{SPC}0<ETX>
```

```text
sMN mDOSetOutput 1 0
```

```text
02 73 4D 4E 20 6D 44 4F 53 65 74 4F 75 74 70 75 74 20 31 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 4D 4E 20 6D 44 4F 53 65 74 4F 75 74 70 75 74 20 01 00 6A
```

```text
73 4D 4E 20 6D 44 4F 53 65 74 4F 75 74 70 75 74 20 01 00
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

Required user level: Authorized client.

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

### Read Device Temperature Alarm Status [sRN temperatureAlarmStatus]

</summary>

Read whether the device temperature alarm is active. The thresholds are set with `sWN temperatureAlarmConfiguration`.

Required user level: Authorized client.

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

**Example: sRA temperatureAlarmStatus**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}temperatureAlarmStatus{SPC}1<ETX>
```

```text
02 73 52 41 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 53 74 61 74 75 73 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 52 41 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 53 74 61 74 75 73 20 01 6A
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Device Temperature Alarm Configuration [sWN temperatureAlarmConfiguration]

</summary>

Sets the upper and lower threshold for the temperature alarm status.

Required user level: Authorized client.

**Telegram structure: sWN temperatureAlarmConfiguration**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Device temperature alarm configuration | String | 29 | | `temperatureAlarmConfiguration` | `74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |
| Data 1 | Upper threshold [°C] | Int_8 | 1 | Default: 55 | `-128d ... +127d(80h ... 7Fh)` | `80 ... 7F` |
| Data 2 | Lower threshold [°C] | Int_8 | 1 | Default: 50 | `-128d ... +127d(80h ... 7Fh)` | `80 ... 7F` |

**Example: sWN temperatureAlarmConfiguration**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}temperatureAlarmConfiguration{SPC}37{SPC}32<ETX>
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

Required user level: Authorized client.

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
| Data 1 | Upper threshold [°C] | Int_8 | 1 | Default: 55 | `-128d ... +127d(80h ... 7Fh)` | `80 ... 7F` |
| Data 2 | Lower threshold [°C] | Int_8 | 1 | Default: 50 | `-128d ... +127d(80h ... 7Fh)` | `80 ... 7F` |

**Example: sRA temperatureAlarmConfiguration**

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

## Measurement Data Output

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read IMU Data [sRN InertialMeasurementUnit]

</summary>

Read the latest IMU data. To receive the IMU data continuously as `sSN InertialMeasurementUnit` events, send `sEN InertialMeasurementUnit 1`; send `sEN InertialMeasurementUnit 0` to stop. For continuous IMU data at 100 Hz, prefer the Compact IMU output (telegram type 7).

Required user level: Authorized client.

**Telegram structure: sRN InertialMeasurementUnit**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read IMU data | String | 23 | | `InertialMeasurementUnit` | `49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74` |

**Example: sRN InertialMeasurementUnit**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}InertialMeasurementUnit<ETX>
```

```text
sRN InertialMeasurementUnit
```

```text
02 73 52 4E 20 49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 52 4E 20 49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74 03
```

```text
73 52 4E 20 49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74
```


**Telegram structure: sRA InertialMeasurementUnit**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read IMU data | String | 23 | | `InertialMeasurementUnit` | `49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74` |
| Acceleration X | Acceleration along the X axis, including gravity | Float_32 | 4 | m/s² | `IEEE 754 float, hex` | `4 bytes` |
| Acceleration Y | Acceleration along the Y axis, including gravity | Float_32 | 4 | m/s² | `IEEE 754 float, hex` | `4 bytes` |
| Acceleration Z | Acceleration along the Z axis, including gravity | Float_32 | 4 | m/s² | `IEEE 754 float, hex` | `4 bytes` |
| Angular velocity X | Rotation rate around the X axis | Float_32 | 4 | rad/s | `IEEE 754 float, hex` | `4 bytes` |
| Angular velocity Y | Rotation rate around the Y axis | Float_32 | 4 | rad/s | `IEEE 754 float, hex` | `4 bytes` |
| Angular velocity Z | Rotation rate around the Z axis | Float_32 | 4 | rad/s | `IEEE 754 float, hex` | `4 bytes` |
| Orientation W | Orientation as quaternion | Float_32 | 4 | | `IEEE 754 float, hex` | `4 bytes` |
| Orientation X | Orientation as quaternion | Float_32 | 4 | | `IEEE 754 float, hex` | `4 bytes` |
| Orientation Y | Orientation as quaternion | Float_32 | 4 | | `IEEE 754 float, hex` | `4 bytes` |
| Orientation Z | Orientation as quaternion | Float_32 | 4 | | `IEEE 754 float, hex` | `4 bytes` |
| Time stamp | Time of the measurement in µs since power-up | Uint_64 | 8 | µs | `0 … FFFFFFFFFFFFFFFF` | `8 bytes` |

**Example: sRA InertialMeasurementUnit**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}InertialMeasurementUnit{SPC}3DCDF229{SPC}BDA6B7D8{SPC}411C2520{SPC}00000000{SPC}00000000{SPC}BA8BA16F{SPC}3F596000{SPC}B9000000{SPC}BC010000{SPC}3F072C00{SPC}7D6323159<ETX>
```

```text
02 73 52 41 20 49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74 20 33 44 43 44 46 32 32 39 20 42 44 41 36 42 37 44 38 20 34 31 31 43 32 35 32 30 20 30 30 30 30 30 30 30 30 20 30 30 30 30 30 30 30 30 20 42 41 38 42 41 31 36 46 20 33 46 35 39 36 30 30 30 20 42 39 30 30 30 30 30 30 20 42 43 30 31 30 30 30 30 20 33 46 30 37 32 43 30 30 20 37 44 36 33 32 33 31 35 39 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4C 73 52 41 20 49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74 20 3D CD F2 29 BD A6 B7 D8 41 1C 25 20 00 00 00 00 00 00 00 00 BA 8B A1 6F 3F 59 60 00 B9 00 00 00 BC 01 00 00 3F 07 2C 00 00 00 00 07 D6 32 31 59 49
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Data Output Mode [sWN dataOutputMode]

</summary>

Select the measurement data output. Firmware V1.1.0 supports Compact over TCP and Native ROS 2.

Required user level: Authorized client.

**Telegram structure: sWN dataOutputMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | Data output mode | String | 14 | | `dataOutputMode` | `64 61 74 61 4F 75 74 70 75 74 4D 6F 64 65` |
| Value | Data output mode | Enum_8 | 1 | Disable:<br>TCP Compact:<br>Native ROS 2: | `0<br>1<br>3` | `00<br>01<br>03` |

**Example: sWN dataOutputMode**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}dataOutputMode{SPC}1<ETX>
```

```text
sWN dataOutputMode 1
```

```text
02 73 57 4E 20 64 61 74 61 4F 75 74 70 75 74 4D 6F 64 65 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 57 4E 20 64 61 74 61 4F 75 74 70 75 74 4D 6F 64 65 20 01 67
```

```text
73 57 4E 20 64 61 74 61 4F 75 74 70 75 74 4D 6F 64 65 20 01
```


**Telegram structure: sWA dataOutputMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 14 | | `dataOutputMode` | `64 61 74 61 4F 75 74 70 75 74 4D 6F 64 65` |

**Example: sWA dataOutputMode**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}dataOutputMode<ETX>
```

```text
02 73 57 41 20 64 61 74 61 4F 75 74 70 75 74 4D 6F 64 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 41 20 64 61 74 61 4F 75 74 70 75 74 4D 6F 64 65 20 69
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Compact Telegram Type 6 Content [sWN compactTelegramType6Content]

</summary>

Define which data channels are serialized in Compact telegram type 6. See [Compact Format](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/#type-6-scan-data-multiscan200).

Required user level: Authorized client.

**Telegram structure: sWN compactTelegramType6Content**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | Defines which data channels are serialized in the compact output of the telegram type 6 (multiScan270 specific compact format). | String | 27 | | `compactTelegramType6Content` | `63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 36 43 6F 6E 74 65 6E 74` |
| includeRssi | If true, RSSIs are serialized | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| includeProperties | If true, properties are serialized | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| includeAmbientLight | If true, ambient light is serialized | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| reserved | | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |

**Example: sWN compactTelegramType6Content**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}compactTelegramType6Content{SPC}1{SPC}0{SPC}1{SPC}0<ETX>
```

```text
sWN compactTelegramType6Content 1 0 1 0
```

```text
02 73 57 4E 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 36 43 6F 6E 74 65 6E 74 20 31 20 30 20 31 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 24 73 57 4E 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 36 43 6F 6E 74 65 6E 74 20 01 00 01 00 6B
```

```text
73 57 4E 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 36 43 6F 6E 74 65 6E 74 20 01 00 01 00
```


**Telegram structure: sWA compactTelegramType6Content**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 27 | | `compactTelegramType6Content` | `63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 36 43 6F 6E 74 65 6E 74` |

**Example: sWA compactTelegramType6Content**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}compactTelegramType6Content<ETX>
```

```text
02 73 57 41 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 36 43 6F 6E 74 65 6E 74 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 20 73 57 41 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 36 43 6F 6E 74 65 6E 74 20 64
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Write ROS Parent Frame ID [sWN rosParentFrameId]

</summary>

Set the parent frame ID of the published Native ROS 2 topics.

Required user level: Authorized client.

**Telegram structure: sWN rosParentFrameId**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set parent frame ID of the published topics | String | 16 | | `rosParentFrameId` | `72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64` |
| Parent frame ID length | Number of characters of parent frame id | Uint_16 | 2 | 0 … 64 | `5` | `00 05` |
| Parent frame ID | Parent frame ID of the published topics | String | Length | Maximum 64 characters | `world` | `77 6F 72 6C 64` |

**Example: sWN rosParentFrameId**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}rosParentFrameId{SPC}5{SPC}world<ETX>
```

```text
sWN rosParentFrameId 5 world
```

```text
02 73 57 4E 20 72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64 20 35 20 77 6F 72 6C 64 03
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

Read the parent frame ID of the published Native ROS 2 topics.

Required user level: Authorized client.

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
| Parent frame ID length | Number of characters of parent frame id | Uint_16 | 2 | 0 … 64 | `5` | `00 05` |
| Parent frame ID | Parent frame ID of the published topics | String | Length | Maximum 64 characters | `world` | `77 6F 72 6C 64` |

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

Set the frame ID of the published Native ROS 2 topics.

Required user level: Authorized client.

**Telegram structure: sWN rosFrameId**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | ROS reference frame to use for data output | String | 10 | | `rosFrameId` | `72 6F 73 46 72 61 6D 65 49 64` |
| Frame ID length | Number of characters of frame id | Uint_16 | 2 | 0 … 64 | `B` | `00 0B` |
| Frame ID | Frame ID of the published topics | String | Length | Maximum 64 characters | `front_lidar` | `66 72 6F 6E 74 5F 6C 69 64 61 72` |

**Example: sWN rosFrameId - Frame ID is "front_lidar"**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}rosFrameId{SPC}B{SPC}front_lidar<ETX>
```

```text
sWN rosFrameId B front_lidar
```

```text
02 73 57 4E 20 72 6F 73 46 72 61 6D 65 49 64 20 42 20 66 72 6F 6E 74 5F 6C 69 64 61 72 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 57 4E 20 72 6F 73 46 72 61 6D 65 49 64 20 00 0B 66 72 6F 6E 74 5F 6C 69 64 61 72 33
```

```text
73 57 4E 20 72 6F 73 46 72 61 6D 65 49 64 20 00 0B 66 72 6F 6E 74 5F 6C 69 64 61 72
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

Read the frame ID of the published Native ROS 2 topics.

Required user level: Authorized client.

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
| Command | ROS reference frame to use for data output | String | 14 | | `sWN rosFrameId` | `73 57 4E 20 72 6F 73 46 72 61 6D 65 49 64` |
| Frame ID length | Number of characters of frame id | Uint_16 | 2 | 0 … 64 | `B` | `00 0B` |
| Frame ID | Frame ID of the published topics | String | Length | Maximum 64 characters | `front_lidar` | `66 72 6F 6E 74 5F 6C 69 64 61 72` |

**Example: sRA rosFrameId**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}rosFrameId{SPC}15{SPC}multiScan2xx_26110162<ETX>
```

```text
02 73 52 41 20 72 6F 73 46 72 61 6D 65 49 64 20 31 35 20 6D 75 6C 74 69 53 63 61 6E 32 78 78 5F 32 36 31 31 30 31 36 32 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 26 73 52 41 20 72 6F 73 46 72 61 6D 65 49 64 20 00 15 6D 75 6C 74 69 53 63 61 6E 32 78 78 5F 32 36 31 31 30 31 36 32 51
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Write ROS Namespace [sWN rosNamespace]

</summary>

Set the namespace that is prepended to all Native ROS 2 topics. Send length `0` for no namespace.

Required user level: Authorized client.

**Telegram structure: sWN rosNamespace**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Sets the namespace of the published topics | String | 12 | | `rosNamespace` | `72 6F 73 4E 61 6D 65 73 70 61 63 65` |
| Namespace length | Number of characters of namespace | Uint_16 | 2 | 0 … 64 | `A` | `00 0A` |
| Namespace | Namespace prepended to all topics; empty for no namespace | String | Length | Maximum 64 characters | `rear_lidar` | `72 65 61 72 5F 6C 69 64 61 72` |

**Example: sWN rosNamespace - Namespace is "rear_lidar"**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}rosNamespace{SPC}A{SPC}rear_lidar<ETX>
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

Read the namespace that is prepended to all Native ROS 2 topics.

Required user level: Authorized client.

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
| Namespace length | Number of characters of namespace | Uint_16 | 2 | 0 … 64 | `A` | `00 0A` |
| Namespace | Namespace prepended to all topics; empty for no namespace | String | Length | Maximum 64 characters | `rear_lidar` | `72 65 61 72 5F 6C 69 64 61 72` |

**Example: sRA rosNamespace**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}rosNamespace{SPC}0<ETX>
```

```text
02 73 52 41 20 72 6F 73 4E 61 6D 65 73 70 61 63 65 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 41 20 72 6F 73 4E 61 6D 65 73 70 61 63 65 20 00 00 4D
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Write ROS Domain ID [sWN rosDomainId]

</summary>

Set the ROS domain ID of Native ROS 2. Set the same `ROS_DOMAIN_ID` on the host.

Required user level: Authorized client.

**Telegram structure: sWN rosDomainId**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | rosDomainId | String | 11 | | `rosDomainId` | `72 6F 73 44 6F 6D 61 69 6E 49 64` |
| Value | ROS domain ID | Uint_8 | 1 | | `0` | `00` |

**Example: sWN rosDomainId**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}rosDomainId{SPC}0<ETX>
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

### Read ROS Domain ID [sRN rosDomainId]

</summary>

Read the ROS domain ID of Native ROS 2.

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
| Value | ROS domain ID | Uint_8 | 1 | Max: 232 | `0` | `00` |

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

### Set Optional Channels of PointCloud2 Topics [sWN rosPointCloud2Content]

</summary>

Select the optional channels of the Native ROS 2 PointCloud2 topics (`rt/cloud`).

Required user level: Authorized client.

**Telegram structure: sWN rosPointCloud2Content**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | Set the optional channels of PointCloud2 topics (rt/cloud) | String | 21 | | `rosPointCloud2Content` | `72 6F 73 50 6F 69 6E 74 43 6C 6F 75 64 32 43 6F 6E 74 65 6E 74` |
| includeRssi | If true the RSSI data is included in the rt/cloud topics | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| includeProperties | If true the properties data is included in the rt/cloud topics | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| includeTimeOffset | If true the time offset data is included in the rt/cloud topics | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| includeRing | If true the ring (layer index) data is included in the rt/cloud topics | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |

**Example: sWN rosPointCloud2Content - No optional channels**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}rosPointCloud2Content{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
sWN rosPointCloud2Content 0 0 0 0
```

```text
02 73 57 4E 20 72 6F 73 50 6F 69 6E 74 43 6C 6F 75 64 32 43 6F 6E 74 65 6E 74 20 30 20 30 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1E 73 57 4E 20 72 6F 73 50 6F 69 6E 74 43 6C 6F 75 64 32 43 6F 6E 74 65 6E 74 20 00 00 00 00 62
```

```text
73 57 4E 20 72 6F 73 50 6F 69 6E 74 43 6C 6F 75 64 32 43 6F 6E 74 65 6E 74 20 00 00 00 00
```


**Telegram structure: sWA rosPointCloud2Content**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 21 | | `rosPointCloud2Content` | `72 6F 73 50 6F 69 6E 74 43 6C 6F 75 64 32 43 6F 6E 74 65 6E 74` |

**Example: sWA rosPointCloud2Content**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}rosPointCloud2Content<ETX>
```

```text
02 73 57 41 20 72 6F 73 50 6F 69 6E 74 43 6C 6F 75 64 32 43 6F 6E 74 65 6E 74 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1A 73 57 41 20 72 6F 73 50 6F 69 6E 74 43 6C 6F 75 64 32 43 6F 6E 74 65 6E 74 20 6D
```

</details>

</section>

<section class="cola-category" markdown="1">

## Data Reduction

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Interval Filter [sWN LFPintervalFilter]

</summary>

Enable and configure the interval filter, which outputs only every n-th scan.

Required user level: Authorized client.

**Telegram structure: sWN LFPintervalFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Reduce the scan output rate by a given factor | String | 17 | | `LFPintervalFilter` | `4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72` |
| Variable data 1 | Enables/Disables the filter. | Bool | 1 | Off:<br>On: | `0d (00h)<br>+1d (01h)` | `00<br>01` |
| Variable Data 2 | Only every nth scan is output where n is given by the value of uiReductionFactor. | Uint_32 | 4 | | `1d…+50d(00 00 00 01h …00 00 00 32h)` | `00 00 00 01 … 00 00 00 32` |

**Example: sWN LFPintervalFilter - Output every third scan**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LFPintervalFilter{SPC}1{SPC}3<ETX>
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

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Angle Range Focus Filter [sWN angleRangeFocusFilter]

</summary>

Restricts streaming data output to a specified 3D field of view. The theta parameters define the azimuth range and the phi parameters define the elevation range. Beams outside these ranges are not transmitted. Within the selected range, subsampling can be applied to reduce data bandwidth. Additionally, a focus region can be defined where full resolution is preserved (no subsampling). This filter only affects raw data streaming and has no effect on object detection.

Required user level: Authorized client.

**Telegram structure: sWN angleRangeFocusFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | Restricts streaming data output to a specified 3D field of view. The theta parameters define the azimuth range and the phi parameters define the elevation range. Beams outside these ranges are not transmitted. Within the selected range, subsampling can be applied to reduce data bandwidth. Additionally, a focus region can be defined where full resolution is preserved (no subsampling). This filter only affects raw data streaming and has no effect on object detection. | String | 21 | | `angleRangeFocusFilter` | `61 6E 67 6C 65 52 61 6E 67 65 46 6F 63 75 73 46 69 6C 74 65 72` |
| enable | Enables/Disables the filter. | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| thetaStart | Lower boundary of the azimuth range. Columns outside this range are not transmitted. | Int_32 | 4 | | `-900000` | `FF F2 44 60` |
| thetaStop | Upper boundary of the azimuth range. Columns outside this range are not transmitted. | Int_32 | 4 | | `+900000` | `00 0D BB A0` |
| phiStart | Lower boundary of the elevation range. Layers outside this range are not transmitted. | Int_32 | 4 | | `-250000` | `FF FC 2F 70` |
| phiStop | Upper boundary of the elevation range. Layers outside this range are not transmitted. | Int_32 | 4 | | `+250000` | `00 03 D0 90` |
| thetaIndexIncrement | The 'thetaIndexIncrement' is used to sub-sample the slots within the selected theta angle range. With a 'thetaIndexIncrement' of n only every n'th slot from the selected angle range is serialized, i.e. the angle resolution is reduced by factor n. | Uint_16 | 2 | | `+1` | `00 01` |
| phiIndexIncrement | The 'phiIndexIncrement' is used to sub-sample the layers within the selected phi angle range. With a 'phiIndex-Increment' of n only every n'th layer from the selected angle range is serialized, i.e. the angle resolution is reduced by factor n. | Uint_16 | 2 | | `+1` | `00 01` |
| enable | Enables/Disables the focus region. In this region, the sub-sampling is not applied. | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| direction | Focus direction: selects whether the focus region spans the vertical or horizontal axis. | Enum_8 | 1 | | `0` | `00` |
| thetaStart | Lower boundary of the azimuth focus range | Int_32 | 4 | | `-450000` | `FF F9 22 30` |
| thetaStop | Upper boundary of the azimuth focus range | Int_32 | 4 | | `+450000` | `00 06 DD D0` |
| phiStart | Lower boundary of the elevation focus range | Int_32 | 4 | | `-100000` | `FF FE 79 60` |
| phiStop | Upper boundary of the elevation focus range | Int_32 | 4 | | `+100000` | `00 01 86 A0` |

**Example: sWN angleRangeFocusFilter - −90° … +90° × −25° … +25°, focus −45° … +45° × −10° … +10°**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}angleRangeFocusFilter{SPC}0{SPC}-900000{SPC}+900000{SPC}-250000{SPC}+250000{SPC}+1{SPC}+1{SPC}0{SPC}0{SPC}-450000{SPC}+450000{SPC}-100000{SPC}+100000<ETX>
```

```text
sWN angleRangeFocusFilter 0 -900000 +900000 -250000 +250000 +1 +1 0 0 -450000 +450000 -100000 +100000
```

```text
02 73 57 4E 20 61 6E 67 6C 65 52 61 6E 67 65 46 6F 63 75 73 46 69 6C 74 65 72 20 30 20 2D 39 30 30 30 30 30 20 2B 39 30 30 30 30 30 20 2D 32 35 30 30 30 30 20 2B 32 35 30 30 30 30 20 2B 31 20 2B 31 20 30 20 30 20 2D 34 35 30 30 30 30 20 2B 34 35 30 30 30 30 20 2D 31 30 30 30 30 30 20 2B 31 30 30 30 30 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 41 73 57 4E 20 61 6E 67 6C 65 52 61 6E 67 65 46 6F 63 75 73 46 69 6C 74 65 72 20 00 FF F2 44 60 00 0D BB A0 FF FC 2F 70 00 03 D0 90 00 01 00 01 00 00 FF F9 22 30 00 06 DD D0 FF FE 79 60 00 01 86 A0 38
```

```text
73 57 4E 20 61 6E 67 6C 65 52 61 6E 67 65 46 6F 63 75 73 46 69 6C 74 65 72 20 00 FF F2 44 60 00 0D BB A0 FF FC 2F 70 00 03 D0 90 00 01 00 01 00 00 FF F9 22 30 00 06 DD D0 FF FE 79 60 00 01 86 A0
```


**Telegram structure: sWA angleRangeFocusFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 21 | | `angleRangeFocusFilter` | `61 6E 67 6C 65 52 61 6E 67 65 46 6F 63 75 73 46 69 6C 74 65 72` |

**Example: sWA angleRangeFocusFilter**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}angleRangeFocusFilter<ETX>
```

```text
02 73 57 41 20 61 6E 67 6C 65 52 61 6E 67 65 46 6F 63 75 73 46 69 6C 74 65 72 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1A 73 57 41 20 61 6E 67 6C 65 52 61 6E 67 65 46 6F 63 75 73 46 69 6C 74 65 72 20 37
```

</details>

</section>

<section class="cola-category" markdown="1">

## Operating Data

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Temperature [sRN OPcurtmpdev]

</summary>

Read the internal temperature of the device. It does not indicate the ambient temperature.

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
| Temperature data | [°C] | Float_32 | 4 | (-50°C … +100°C) | `C2480000h …42C80000h` | `C2 48 00 00 … 42 C8 00 00` |

**Example: sRA OPcurtmpdev**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}OPcurtmpdev{SPC}4265970A<ETX>
```

```text
02 73 52 41 20 4F 50 63 75 72 74 6D 70 64 65 76 20 34 32 36 35 39 37 30 41 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 41 20 4F 50 63 75 72 74 6D 70 64 65 76 20 42 65 97 0A BF
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
| Date length | Number of characters of date | Uint_16 | 2 | 0 … 10 | `A` | `00 0A` |
| Date | Date of the last permanent save, DD.MM.YYYY | String | Length | Maximum 10 characters | `29.09.2026` | `32 39 2E 30 39 2E 32 30 32 36` |

**Example: sRA DIpara**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}DIpara{SPC}A{SPC}29.09.2026<ETX>
```

```text
02 73 52 41 20 44 49 70 61 72 61 20 41 20 32 39 2E 30 39 2E 32 30 32 36 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 52 41 20 44 49 70 61 72 61 20 00 0A 32 39 2E 30 39 2E 32 30 32 36 61
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
| Time length | Number of characters of time | Uint_16 | 2 | 0 … 5 | `5` | `00 05` |
| Time | Time of the last permanent save, HH:MM | String | Length | Maximum 5 characters | `13:55` | `31 33 3A 35 35` |

**Example: sRA DIparatm**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}DIparatm{SPC}5{SPC}13:55<ETX>
```

```text
02 73 52 41 20 44 49 70 61 72 61 74 6D 20 35 20 31 33 3A 35 35 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 41 20 44 49 70 61 72 61 74 6D 20 00 05 31 33 3A 35 35 4B
```

</details>

</section>

<section class="cola-category" markdown="1">

## Cybersecurity

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Device Search Mode [sWN EtherCoLaScanMode]

</summary>

Configure the device search by SICK engineering tools and whether the IP address can be changed through it. Restricting it reduces the number of open ports.

Required user level: Authorized client.

**Telegram structure: sWN EtherCoLaScanMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set CoLa Scan / AutoIP search settings | String | 17 | | `EtherCoLaScanMode` | `45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65` |
| CoLa Scan /AutoIP search settings | Choose setting | Uint_8 | 1 | IP address can be found/changed without login:<br>IP address can be found/changed with login:<br>Disable the Auto IP search/ IP change:<br>IP address can be found/changed for 1 min: | `0<br>1<br>2<br>3` | `00<br>01<br>02<br>03` |

**Example: sWN EtherCoLaScanMode - Device search without IP address change**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EtherCoLaScanMode{SPC}2<ETX>
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

Read the device search mode.

Required user level: Authorized client.

**Telegram structure: sRN EtherCoLaScanMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read CoLa Scan /AutoIP search settings | String | 17 | | `EtherCoLaScanMode` | `45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65` |

**Example: sRN EtherCoLaScanMode**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EtherCoLaScanMode<ETX>
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
| Command | Read CoLa Scan /AutoIP search settings | String | 17 | | `EtherCoLaScanMode` | `45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65` |
| CoLa Scan /AutoIP search settings | Poll setting | Uint_8 | 1 | IP address can be found/changed without login:<br>IP address can be found/changed with login:<br>Auto IP search/ IP change is disabled:<br>IP address can be found/changed for 1 min: | `0<br>1<br>2<br>3` | `00<br>01<br>02<br>03` |

**Example: sRA EtherCoLaScanMode**

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

### Enable or Disable CoLa1 Interface [sWN EIAuxEnable]

</summary>

Enable or disable the CoLa1 interface (CoLa A on port 2111 and CoLa B on port 2112). It is disabled by default. Disabling it over CoLa1 ends the connection.

Required user level: Authorized client.

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

Enable or disable the web server. When disabled, port 80 is not opened after a reboot.

Required user level: Authorized client.

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

Read whether the web server is enabled.

Required user level: Authorized client.

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

## Field Evaluation

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Activation of Evaluation Group [sMN ActivateEvaluationGroup]

</summary>

The telegram is intended to activate or deactivate groups via telegram. The group activation needs to be changed from "always" to "telegram" in advance.

**Telegram structure: sMN ActivateEvaluationGroup**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Activate / deactivate evaluation group | String | 23 | | `ActivateEvaluationGroup` | `41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70` |
| Amount of evaluation groups to activate/ deactivate | Each array element contains two parameters: evaluation group number, and deactivation/ activation of evaluation group | Uint_16 | 2 | | `1d … 48d (1 … 30h)` | `00 01 … 00 30` |
| Evaluation group number | Evaluation group 1 | UInt_16 | 2 | | `1` | `00 01` |
| Deactivation/ activation of evaluation group | Activate / deactivate evaluation group 1 | Bool_1 | 1 | Deactivate:<br>Activate: | `0<br>1` | `00<br>01` |
| Evaluation group number | Evaluation group 2 | UInt_16 | 2 | | `2` | `00 02` |
| Deactivation/ activation of evaluation group | Activate / deactivate evaluation group 2 | Bool_1 | 1 | Deactivate:<br>Activate: | `0<br>1` | `00<br>01` |
| ... | ... | ... | ... | | | |
| Evaluation group number | Evaluation group 48 | UInt_16 | 2 | | `48d (30h)` | `00 30` |
| Deactivation/ activation of evaluation group | Activate / deactivate evaluation group 48 | Bool_1 | 1 | Deactivate:<br>Activate: | `0<br>1` | `00<br>01` |

**Example 1: sMN ActivateEvaluationGroup - Deactivate evaluation group 1**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}ActivateEvaluationGroup{SPC}1{SPC}1{SPC}0<ETX>
```

```text
sMN ActivateEvaluationGroup 1 1 0
```

```text
02 73 4D 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 31 20 31 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 21 73 4D 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 00 01 00 01 00 20
```

```text
73 4D 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 00 01 00 01 00
```


**Example 2: sMN ActivateEvaluationGroup - Deactivate evaluation group 1, activate evaluation group 2 and 3**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}ActivateEvaluationGroup{SPC}3{SPC}1{SPC}0{SPC}2{SPC}1{SPC}3{SPC}1<ETX>
```

```text
sMN ActivateEvaluationGroup 3 1 0 2 1 3 1
```

```text
02 73 4D 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 33 20 31 20 30 20 32 20 31 20 33 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 27 73 4D 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 00 03 00 01 00 00 02 01 00 03 01 23
```

```text
73 4D 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 00 03 00 01 00 00 02 01 00 03 01
```


**Telegram structure: sAN ActivateEvaluationGroup**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Activate / deactivate evaluation group | String | 23 | | `ActivateEvaluationGroup` | `41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70` |
| Amount of activated/ deactivated evaluation groups | - | UInt_16 | 2 | | `1h ... 30h` | `00 01 … 00 30` |
| State of activation / deactivation | One value per requested evaluation group, in request order | Bool_1 | 1 | Activation/ Deactivation failed:<br>Successfully activated/ deactivated: | `0<br>1` | `00<br>01` |

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
| Command | EvaluationGroupType | String | 19 | | `EvaluationGroupType` | `45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65` |

**Example: sRN EvaluationGroupType**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EvaluationGroupType<ETX>
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
| Command | EvaluationGroupType | String | 19 | | `EvaluationGroupType` | `45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65` |
| Data group | Type of evaluation | Array Uint_8 | 48 | Field evaluation:<br>Perpendicular distance: | `0d (00h)<br>+1d (01h)` | `00<br>01` |

**Example: sRA EvaluationGroupType - 3rd group is set as perpendicular distance**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EvaluationGroupType{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0…(48 total)<ETX>
```

```text
02 73 52 41 20 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65 20 30 20 30 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 48 73 52 41 20 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65 20 00 00 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 30
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Field Evaluation Group State [sRN FieldEvaluationGroupState]

</summary>

Read the activation state of all 48 evaluation groups: not configured, active, or inactive.

**Telegram structure: sRN FieldEvaluationGroupState**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read request | String | 3 | | `sRN` | `73 52 4E` |
| Variable name | Contains the current activation state of all available groups (not configured, active or inactive) | String | 25 | | `FieldEvaluationGroupState` | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65` |

**Example: sRN FieldEvaluationGroupState**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}FieldEvaluationGroupState<ETX>
```

```text
sRN FieldEvaluationGroupState
```

```text
02 73 52 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1D 73 52 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65 33
```

```text
73 52 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65
```


**Telegram structure: sRA FieldEvaluationGroupState**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read answer | String | 3 | | `sRA` | `73 52 41` |
| Variable name | Contains the current activation state of all available groups (not configured, active or inactive) | String | 25 | | `FieldEvaluationGroupState` | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65` |
| Value | Array of 48 × Enum8 elements | Array | 48 | Not configured = 0 Active = 1 Inactive = 2 | `0 0 0 0 0 0 0 00 0 0 0 0 0 0 00 0 0 0 0 0 0 00 0 0 0 0 0 0 00 0 0 0 0 0 0 00 0 0 0 0 0 0 0` | `00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00` |

**Example: sRA FieldEvaluationGroupState**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}FieldEvaluationGroupState{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4E 73 52 41 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65 20 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 1D
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Field Evaluation Contour [sMN SetFieldEvaluationContour]

</summary>

This telegram describes how to change the polygon coordinates. A predefined polygon is required, setting up a polygon from scratch is not possible.

**Telegram structure: sMN SetFieldEvaluationContour**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Set the region of interest of an object detection evaluation | String | 25 | | `SetFieldEvaluationContour` | `53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |
| Evaluation ID | Specific ID of the evaluation that is to be changed | UInt_16 | 2 | | `+1d ... +48d (1h ... 30h)` | `00 01 … 00 30` |
| Amount of polygon vertices | E. g. triangle = 3, square = 4 | Uint_16 | 2 | | `+3d ... +100d (3h ... 64h)` | `00 03 ... 00 64` |
| Polygon vertex | Coordinates of first polygon vertex in mm | Dint_32 | 4 | X coordinate: | `-100,000d ... +100,000d (FFFE7960h … 186A0h)` | `FF FE 79 60 … 00 01 86 A0` |
| Polygon vertex | Coordinates of first polygon vertex in mm | Dint_32 | 4 | Y coordinate: | `-100,000d ... +100,000d (FFFE7960h … 186A0h)` | `FF FE 79 60 … 00 01 86 A0` |
| Polygon vertex | Coordinates of second polygon vertex in mm | Dint_32 | 4 | X coordinate: | `-100,000d ... +100,000d (FFFE7960h … 186A0h)` | `FF FE 79 60 … 00 01 86 A0` |
| Polygon vertex | Coordinates of second polygon vertex in mm | Dint_32 | 4 | Y coordinate: | `-100,000d ... +100,000d (FFFE7960h … 186A0h)` | `FF FE 79 60 … 00 01 86 A0` |
| ... | ... | ... | ... | | | |
| Polygon vertex | Coordinates of last polygon vertex in mm | Dint_32 | 4 | X coordinate: | `-100,000d ... +100,000d (FFFE7960h … 186A0h)` | `FF FE 79 60 … 00 01 86 A0` |
| Polygon vertex | Coordinates of last polygon vertex in mm | Dint_32 | 4 | Y coordinate: | `-100,000d ... +100,000d (FFFE7960h … 186A0h)` | `FF FE 79 60 … 00 01 86 A0` |
| Lower Z limit | Lower bound of extrusion in Z direction | Dint_32 | 4 | | `-100,000d ... +100,000d (FFFE7960h … 186A0h)` | `FF FE 79 60 … 00 01 86 A0` |
| Upper Z limit | Upper bound of extrusion in Z direction | Dint_32 | 4 | | `-100,000d ... +100,000d (FFFE7960h … 186A0h)` | `FF FE 79 60 … 00 01 86 A0` |

**Example: sMN SetFieldEvaluationContour – Conversion of an evaluation into a 1 m³ cube**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}SetFieldEvaluationContour{SPC}1{SPC}4{SPC}+1000{SPC}+1000{SPC}-1000{SPC}+1000{SPC}-1000{SPC}-1000{SPC}+1000{SPC}-1000{SPC}-500{SPC}+500<ETX>
```

```text
sMN SetFieldEvaluationContour 1 4 +1000 +1000 -1000 +1000 -1000 -1000 +1000 -1000 -500 +500
```

```text
02 73 4D 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 31 20 34 20 2B 31 30 30 30 20 2B 31 30 30 30 20 2D 31 30 30 30 20 2B 31 30 30 30 20 2D 31 30 30 30 20 2D 31 30 30 30 20 2B 31 30 30 30 20 2D 31 30 30 30 20 2D 35 30 30 20 2B 35 30 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4A 73 4D 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 00 04 00 00 03 E8 00 00 03 E8 FF FF FC 18 00 00 03 E8 FF FF FC 18 FF FF FC 18 00 00 03 E8 FF FF FC 18 FF FF FE 0C 00 00 01 F4 1A
```

```text
73 4D 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 00 04 00 00 03 E8 00 00 03 E8 FF FF FC 18 00 00 03 E8 FF FF FC 18 FF FF FC 18 00 00 03 E8 FF FF FC 18 FF FF FE 0C 00 00 01 F4
```


**Telegram structure: sAN SetFieldEvaluationContour**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Set the region of interest of an object detection evaluation | String | 25 | | `SetFieldEvaluationContour` | `53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |
| State of evaluation conversion | - | Enum_8 | 1 | Conversion successful:<br>Invalid Evaluation:<br>Invalid Polygon:<br>Invalid Z limit: | `0<br>1<br>2<br>3` | `00<br>01<br>02<br>03` |

**Example: sAN SetFieldEvaluationContour – Evaluation conversion successful**

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

Read the polygon and the Z limits of a field evaluation.

Required user level: Authorized client.

**Telegram structure: sMN GetFieldEvaluationContour**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Get the region of interest of an object detection evaluation | String | 25 | | `GetFieldEvaluationContour` | `47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |
| Evaluation ID | Specific ID of the evaluation that is to be changed | Uint_16 | 2 | | `1` | `00 01` |

**Example: sMN GetFieldEvaluationContour - Evaluation 1**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}GetFieldEvaluationContour{SPC}1<ETX>
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
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Get the region of interest of an object detection evaluation | String | 25 | | `GetFieldEvaluationContour` | `47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |
| Contour count | Number of returned contours | Uint_16 | 2 | A value of 0 means no contour is configured for the requested ID. | `1` | `00 01` |
| Evaluation ID | Specific ID of the evaluation that is to be changed | Uint_16 | 2 | Range: 1 ... 48 | `1` | `00 01` |
| Amount of polygon vertices | E. g. triangle = 3, square = 4 | Uint_16 | 2 | Range: 0 ... 100 | `4` | `00 04` |
| Polygon vertex | Coordinates of first polygon vertex in mm | Dint_32 | 4 | X coordinate: | `58FCh` | `00 00 58 FC` |
| | | Dint_32 | 4 | Y coordinate: | `1D6h` | `00 00 01 D6` |
| Polygon vertex | Coordinates of second polygon vertex in mm | Dint_32 | 4 | X coordinate: | `3E62h` | `00 00 3E 62` |
| | | Dint_32 | 4 | Y coordinate: | `FFFFDBC0h` | `FF FF DB C0` |
| Polygon vertex | Coordinates of last polygon vertex in mm | Dint_32 | 4 | X coordinate: | `7094h` | `00 00 70 94` |
| | | Dint_32 | 4 | Y coordinate: | `FFFFEE12h` | `FF FF EE 12` |
| Lower Z limit | Lower bound of extrusion in Z direction | Dint_32 | 4 | | `0h` | `00 00 00 00` |
| Upper Z limit | Upper bound of extrusion in Z direction | Dint_32 | 4 | | `11D0h` | `00 00 11 D0` |

**Example: sAN GetFieldEvaluationContour**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}GetFieldEvaluationContour{SPC}1{SPC}1{SPC}4{SPC}32A{SPC}112{SPC}FFFFF95C{SPC}FE{SPC}FFFFF92A{SPC}69E{SPC}2B2{SPC}6A8{SPC}0{SPC}3D0<ETX>
```

```text
02 73 41 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 31 20 31 20 34 20 33 32 41 20 31 31 32 20 46 46 46 46 46 39 35 43 20 46 45 20 46 46 46 46 46 39 32 41 20 36 39 45 20 32 42 32 20 36 41 38 20 30 20 33 44 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4C 73 41 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 00 01 00 04 00 00 03 2A 00 00 01 12 FF FF F9 5C 00 00 00 FE FF FF F9 2A 00 00 06 9E 00 00 02 B2 00 00 06 A8 00 00 00 00 00 00 03 D0 E3
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Field Evaluation Configuration [sMN SetFieldEvaluationConfiguration]

</summary>

Write the configuration of a field evaluation. Read the current configuration with `sMN GetFieldEvaluationConfiguration` first and change only the values you need.

Required user level: Authorized client.

**Telegram structure: sMN SetFieldEvaluationConfiguration**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method invocation | String | 3 | | `sMN` | `73 4D 4E` |
| Method name | Set the configuration of an object detection evaluation | String | 31 | | `SetFieldEvaluationConfiguration` | `53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |
| EvaluationId | ID of the evaluation | Uint_16 | 2 | Range: 1 ... 48 | `1` | `00 01` |
| Name length | Length of Name | Uint_16 | 2 | Maximum: 20 | `C` | `00 0C` |
| Name | Name of the evaluation | String | 12 | UTF-8/ASCII bytes following Name length | `Evaluation 1` | `45 76 61 6C 75 61 74 69 6F 6E 20 31` |
| Version | Evaluation structure version | Uint_16 | 2 | | `2` | `00 02` |
| Source | Evaluation source | Enum_8 | 1 | Standard: | `0` | `00` |
| Legacy name length | Length of legacy evaluation name | Uint_16 | 2 | | `C` | `00 0C` |
| Legacy name | Legacy evaluation name | String | 12 | | `Evaluation 1` | `45 76 61 6C 75 61 74 69 6F 6E 20 31` |
| Legacy ID | Legacy Evaluation ID | Uint_16 | 2 | | `1` | `00 01` |
| Maskbased parameter count | Number of mask-based parameter records | Uint_16 | 2 | | `1` | `00 01` |
| InfringementThresholdFactor | Required infringed pixels [%] | Uint_32 | 4 | Range: 1 ... 100 | `50` | `00 00 00 50` |
| Segmentation parameter count | Number of segmentation parameter records | Uint_16 | 2 | | `1` | `00 01` |
| SampleParam1 | Segmentation parameter | Uint_32 | 4 | | `0` | `00 00 00 00` |
| Common parameter count | Number of common parameter records | Uint_16 | 2 | | `1` | `00 01` |
| MinimumObjectSizeHorizontal | Minimum horizontal object size [mm] | Uint_32 | 4 | Range: 0 ... 5000 | `C8` | `00 00 00 C8` |
| MinimumObjectSizeVertical | Minimum vertical object size [mm] | Uint_32 | 4 | Range: 0 ... 5000 | `C8` | `00 00 00 C8` |
| OcclusionHandling | Treat occluded volume as infringed | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| TreatMissingDataAsInfringed | Treat missing data as infringed | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| TimeForInfringedState | Time before reporting infringed [ms] | Uint_32 | 4 | Range: 1 ... 10000 | `32` | `00 00 00 32` |
| TimeForFreeState | Time before reporting free [ms] | Uint_32 | 4 | Range: 1 ... 10000 | `32` | `00 00 00 32` |
| Reserved3 | Reserved | Uint_32 | 4 | | `0` | `00 00 00 00` |
| Reserved4 | Reserved | Uint_32 | 4 | | `0` | `00 00 00 00` |
| Exit-size parameter count | Number of exit-size parameter records | Uint_16 | 2 | | `1` | `00 01` |
| disableExitSize | Disable exit-size processing | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| exitSizeVertical | Vertical exit-size percentage [%] | Uint_16 | 2 | Range: 0 ... 100 | `46` | `00 46` |
| exitSizeHorizontal | Horizontal exit-size percentage [%] | Uint_16 | 2 | Range: 1 ... 10000 | `64` | `00 64` |
| Volume count | Number of referenced volumes | Uint_16 | 2 | | `1` | `00 01` |
| Volume ID | Referenced volume ID | Uint_16 | 2 | Range: 1 ... 48 | `1` | `00 01` |

**Example: sMN SetFieldEvaluationConfiguration**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}SetFieldEvaluationConfiguration{SPC}1{SPC}C{SPC}Evaluation{SPC}1{SPC}2{SPC}0{SPC}C{SPC}Evaluation{SPC}1{SPC}1{SPC}1{SPC}50{SPC}1{SPC}0{SPC}1{SPC}14{SPC}14{SPC}0{SPC}0{SPC}1E{SPC}32{SPC}0{SPC}0{SPC}1{SPC}0{SPC}46{SPC}64{SPC}1{SPC}1<ETX>
```

```text
sMN SetFieldEvaluationConfiguration 1 C Evaluation 1 2 0 C Evaluation 1 1 1 50 1 0 1 14 14 0 0 1E 32 0 0 1 0 46 64 1 1
```

```text
02 73 4D 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 31 20 43 20 45 76 61 6C 75 61 74 69 6F 6E 20 31 20 32 20 30 20 43 20 45 76 61 6C 75 61 74 69 6F 6E 20 31 20 31 20 31 20 35 30 20 31 20 30 20 31 20 31 34 20 31 34 20 30 20 30 20 31 45 20 33 32 20 30 20 30 20 31 20 30 20 34 36 20 36 34 20 31 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 7A 73 4D 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 00 01 00 0C 45 76 61 6C 75 61 74 69 6F 6E 20 31 00 02 00 00 0C 45 76 61 6C 75 61 74 69 6F 6E 20 31 00 01 00 01 00 00 00 50 00 01 00 00 00 00 00 01 00 00 00 14 00 00 00 14 00 00 00 00 00 1E 00 00 00 32 00 00 00 00 00 00 00 00 00 01 00 00 46 00 64 00 01 00 01 4A
```

```text
73 4D 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 00 01 00 0C 45 76 61 6C 75 61 74 69 6F 6E 20 31 00 02 00 00 0C 45 76 61 6C 75 61 74 69 6F 6E 20 31 00 01 00 01 00 00 00 50 00 01 00 00 00 00 00 01 00 00 00 14 00 00 00 14 00 00 00 00 00 1E 00 00 00 32 00 00 00 00 00 00 00 00 00 01 00 00 46 00 64 00 01 00 01
```


**Telegram structure: sAN SetFieldEvaluationConfiguration**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method answer | String | 3 | | `sAN` | `73 41 4E` |
| Method name | Echo of method name | String | 31 | | `SetFieldEvaluationConfiguration` | `53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |
| ErrorCode | Result of setting the field evaluation configuration | Enum_8 | 1 | | `0` | `00` |

**Example: sAN SetFieldEvaluationConfiguration**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}SetFieldEvaluationConfiguration{SPC}0<ETX>
```

```text
02 73 41 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 25 73 41 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 00 1A
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Get Field Evaluation Configuration [sMN GetFieldEvaluationConfiguration]

</summary>

Read the configuration of a field evaluation.

Required user level: Authorized client.

**Telegram structure: sMN GetFieldEvaluationConfiguration**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method invocation | String | 3 | | `sMN` | `73 4D 4E` |
| Method name | Get the configuration of an object detection evaluation | String | 31 | | `GetFieldEvaluationConfiguration` | `47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |
| EvaluationId | ID of the evaluation | Uint_16 | 2 | Range: 1 ... 48 | `1` | `00 01` |

**Example: sMN GetFieldEvaluationConfiguration - Evaluation 1**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}GetFieldEvaluationConfiguration{SPC}1<ETX>
```

```text
sMN GetFieldEvaluationConfiguration 1
```

```text
02 73 4D 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 26 73 4D 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 00 01 03
```

```text
73 4D 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 00 01
```


**Telegram structure: sAN GetFieldEvaluationConfiguration**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method answer | String | 3 | | `sAN` | `73 41 4E` |
| Method name | Echo of method name | String | 31 | | `GetFieldEvaluationConfiguration` | `47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |
| Configuration count | Number of returned configurations | Uint_16 | 2 | A value of 0 means no configuration is present for the requested ID. | `1` | `00 01` |
| EvaluationId | ID of the returned evaluation | Uint_16 | 2 | Repeated once for each configuration | `1` | `00 01` |
| Name length | Length of `Name` | Uint_16 | 2 | String-length prefix in bytes | `C` | `00 0C` |
| Name | Evaluation name | String | 12 | UTF-8/ASCII bytes following Name length | `Evaluation 1` | `45 76 61 6C 75 61 74 69 6F 6E 20 31` |
| Version | Evaluation structure version | Uint_16 | 2 | | `2` | `00 02` |
| Source | Evaluation source | Enum_8 | 1 | Standard: | `0` | `00` |
| Deprecated name length | Length of deprecated `Evaluation t.Name` | Uint_16 | 2 | | `C` | `00 0C` |
| Deprecated name | Deprecated `Evaluation t.Name` | String | 12 | | `Evaluation 1` | `45 76 61 6C 75 61 74 69 6F 6E 20 31` |
| Deprecated ID | Deprecated `Evaluation t.ID` | Uint_16 | 2 | | `1` | `00 01` |
| Maskbased parameter count | Number of mask-based parameter records | Uint_16 | 2 | | `1` | `00 01` |
| InfringementThresholdFactor | Required infringed pixels [%] | Uint_32 | 4 | | `50` | `00 00 00 50` |
| Segmentation parameter count | Number of segmentation parameter records | Uint_16 | 2 | | `1` | `00 01` |
| SampleParam1 | Segmentation parameter | Uint_32 | 4 | | `0` | `00 00 00 00` |
| Common parameter count | Number of common parameter records | Uint_16 | 2 | | `1` | `00 01` |
| MinimumObjectSizeHorizontal | Minimum horizontal object size [mm] | Uint_32 | 4 | | `C8` | `00 00 00 C8` |
| MinimumObjectSizeVertical | Minimum vertical object size [mm] | Uint_32 | 4 | | `C8` | `00 00 00 C8` |
| OcclusionHandling | Treat occluded volume as infringed | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| TreatMissingDataAsInfringed | Treat missing data as infringed | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| TimeForInfringedState | Time before reporting infringed [ms] | Uint_32 | 4 | | `32` | `00 00 00 32` |
| TimeForFreeState | Time before reporting free [ms] | Uint_32 | 4 | | `32` | `00 00 00 32` |
| Reserved3 | Reserved | Uint_32 | 4 | | `0` | `00 00 00 00` |
| Reserved4 | Reserved | Uint_32 | 4 | | `0` | `00 00 00 00` |
| Exit-size parameter count | Number of exit-size parameter records | Uint_16 | 2 | | `1` | `00 01` |
| disableExitSize | Disable exit-size processing | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| exitSizeVertical | Vertical exit-size percentage | Uint_16 | 2 | | `46` | `00 46` |
| exitSizeHorizontal | Horizontal exit-size percentage | Uint_16 | 2 | | `64` | `00 64` |
| Volume count | Number of referenced volumes | Uint_16 | 2 | | `1` | `00 01` |
| Volume ID | Referenced volume ID | Uint_16 | 2 | | `1` | `00 01` |

**Example: sAN GetFieldEvaluationConfiguration**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}GetFieldEvaluationConfiguration{SPC}1{SPC}1{SPC}C{SPC}Evaluation{SPC}1{SPC}2{SPC}0{SPC}C{SPC}Evaluation{SPC}1{SPC}1{SPC}1{SPC}50{SPC}1{SPC}0{SPC}1{SPC}14{SPC}14{SPC}0{SPC}0{SPC}1E{SPC}32{SPC}0{SPC}0{SPC}1{SPC}0{SPC}46{SPC}64{SPC}1{SPC}1<ETX>
```

```text
02 73 41 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 31 20 31 20 43 20 45 76 61 6C 75 61 74 69 6F 6E 20 31 20 32 20 30 20 43 20 45 76 61 6C 75 61 74 69 6F 6E 20 31 20 31 20 31 20 35 30 20 31 20 30 20 31 20 31 34 20 31 34 20 30 20 30 20 31 45 20 33 32 20 30 20 30 20 31 20 30 20 34 36 20 36 34 20 31 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 7C 73 41 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 00 01 00 01 00 0C 45 76 61 6C 75 61 74 69 6F 6E 20 31 00 02 00 00 0C 45 76 61 6C 75 61 74 69 6F 6E 20 31 00 01 00 01 00 00 00 50 00 01 00 00 00 00 00 01 00 00 00 14 00 00 00 14 00 00 00 00 00 1E 00 00 00 32 00 00 00 00 00 00 00 00 00 01 00 00 46 00 64 00 01 00 01 53
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Evaluation Configuration State [sRN EvaluationConfigState]

</summary>

The telegram is intended to read the current configuration state of the field evaluation. Depending on the device, computational limits can be reached. If so, the telegram returns an error or warning if the number of beams, the number of beams per evaluation, or the number of evaluations reaches the maximum defined threshold.

**Telegram structure: sRN EvaluationConfigState**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Info on current configuration state | String | 21 | | `EvaluationConfigState` | `45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65` |

**Example: sRN EvaluationConfigState**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EvaluationConfigState<ETX>
```

```text
sRN EvaluationConfigState
```

```text
02 73 52 4E 20 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 19 73 52 4E 20 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65 04
```

```text
73 52 4E 20 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65
```


**Telegram structure: sRA EvaluationConfigState**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Info on current configuration state | String | 21 | | `EvaluationConfigState` | `45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65` |
| Active beams limit | - | Enum_8 | 1 | OK:<br>Warning:<br>Error: | `0<br>1<br>2` | `00<br>01<br>02` |
| Active evaluations limit | - | Enum_8 | 1 | OK:<br>Warning:<br>Error: | `0<br>1<br>2` | `00<br>01<br>02` |
| Active beams per evaluation limit | - | Enum_8 | 1 | OK:<br>Warning:<br>Error: | `0<br>1<br>2` | `00<br>01<br>02` |
| Number of intersecting beams | One value per evaluation, evaluation 1 to 48 | Array Uint_32 | 192 | | `0 ... FFFFFFFFh` | `00 00 00 00 ... FF FF FF FF` |
| Input is output error list | Number of list entries. Normally 0 (empty list). | Uint_16 | 2 | | `0 ... +48d (0 ... 30h)` | `00 00 ... 00 30` |

**Example: sRA EvaluationConfigState - one evaluation active, intersected by 172 beams, status of all limits is OK**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EvaluationConfigState{SPC}0{SPC}0{SPC}0{SPC}AC{SPC}0{SPC}0…(48 beam counts){SPC}0<ETX>
```

```text
02 73 52 41 20 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65 20 30 20 30 20 30 20 41 43 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 DF 73 52 41 20 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65 20 00 00 00 00 00 00 AC 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 87
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Field Evaluation Application State [sRN FieldEvaluationApplicationState]

</summary>

Read the state of the field evaluation application: deactivated (no evaluation set up), active, or configuring (for example, while the field geometries are recalculated).

**Telegram structure: sRN FieldEvaluationApplicationState**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Info on current field evaluation application state | String | 31 | | `FieldEvaluationApplicationState` | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65` |

**Example: sRN FieldEvaluationApplicationState**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}FieldEvaluationApplicationState<ETX>
```

```text
sRN FieldEvaluationApplicationState
```

```text
02 73 52 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 23 73 52 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65 36
```

```text
73 52 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65
```


**Telegram structure: sRA FieldEvaluationApplicationState**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Info on current field evaluation application state | String | 31 | | `FieldEvaluationApplicationState` | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65` |
| Field evaluation application state | - | Enum_8 | 1 | Deactivated:<br>Active:<br>Configuring:<br>Error: | `0<br>1<br>2<br>3` | `00<br>01<br>02<br>03` |

**Example: sRA FieldEvaluationApplicationState**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}FieldEvaluationApplicationState{SPC}1<ETX>
```

```text
02 73 52 41 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 25 73 52 41 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65 20 01 18
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Field Evaluation Result [sRN FieldEvaluationResult]

</summary>

This telegram returns the status information of all evaluations. Possible status codes:

- **Not configured** - This evaluation has not been configured.
- **Inactive** - This evaluation has been configured but is currently not evaluated.
- **Free** - The field is not infringed.
- **Infringed** - The field is infringed.
- **Detecting infringed** - An infringement has been detected in the field but the response time has not been reached yet.
- **Detecting free** - The field is no longer infringed but the time for the free state has not been reached yet.

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
| Timestamp | Time of the last change of an evaluation result. Time base is the sensor system time in microseconds since January 1, 1970, 00:00 (UTC). If a time server is being used, the configured system time is used; without time synchronization, the system time starts at January 1, 1970, 00:00 on power-up. | ULInt_64 | 8 | | `0 ... FFFFFFFFFFFFFFFFh` | `00 00 00 00 00 00 00 00 ... FF FF FF FF FF FF FF FF` |
| Evaluation Result | Evaluation state of the first field. | Enum_8 | 1 | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05` |
| Evaluation Result | Evaluation state of the second field. | Enum_8 | 1 | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05` |
| ... | ... | ... | ... | | | |
| Evaluation Result | Evaluation state of the last field (maximum amount of evaluations = 48). | Enum_8 | 1 | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05` |

**Example: sRA FieldEvaluationResult**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}FieldEvaluationResult{SPC}1{SPC}0{SPC}0…(48 results)<ETX>
```

```text
02 73 52 41 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 54 73 52 41 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 00 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 3C
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Receive Field Evaluation Result by Event [sEN FieldEvaluationResult]

</summary>

This telegram returns the status information of all evaluations by subscribing to an event, using the same possible status codes as above. The device confirms the subscription with `sEA FieldEvaluationResult`. After that, it sends an `sSN FieldEvaluationResult` telegram each time an evaluation result changes, not cyclically. Send `sEN FieldEvaluationResult 0` to stop the event.

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


**Telegram structure: sEA FieldEvaluationResult**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sEA` | `73 45 41` |
| Command | Info on field evaluation result | String | 21 | | `FieldEvaluationResult` | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74` |
| Reporting | Start/ stop | Enum_8 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEA FieldEvaluationResult**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}FieldEvaluationResult{SPC}1<ETX>
```

```text
02 73 45 41 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 45 41 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 01 2B
```


**Telegram structure: sSN FieldEvaluationResult**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sSN` | `73 53 4E` |
| Command | Info on field evaluation result | String | 21 | | `FieldEvaluationResult` | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74` |
| Version | Version number | Uint_16 | 2 | | `0 ... FFFFh` | `00 ... FF FF` |
| Timestamp | Time of the last change of an evaluation result. Time base is the sensor system time in microseconds since January 1, 1970, 00:00 (UTC). If a time server is being used, the configured system time is used; without time synchronization, the system time starts at January 1, 1970, 00:00 on power-up. | ULInt_64 | 8 | | `0 ... FFFFFFFFFFFFFFFFh` | `00 00 00 00 00 00 00 00 ... FF FF FF FF FF FF FF FF` |
| Evaluation Result | Evaluation state of the first field. | Enum_8 | 1 | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05` |
| Evaluation Result | Evaluation state of the second field. | Enum_8 | 1 | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05` |
| ... | ... | ... | ... | | | |
| Evaluation Result | Evaluation state of the last field (maximum amount of evaluations = 48). | Enum_8 | 1 | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05` |

**Example: sSN FieldEvaluationResult**

**CoLa A (ASCII)**

```text
<STX>sSN{SPC}FieldEvaluationResult{SPC}1{SPC}0{SPC}0…(48 results)<ETX>
```

```text
02 73 53 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 54 73 53 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 00 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 32
```

</details>

</section>

## Error Codes [sFA]

If the device cannot execute a telegram, it answers with `sFA` and an error code, for example `sFA 3` (CoLa A) or `73 46 41 00 03` (CoLa B payload) for an unknown variable name.

| Error code | Description | Dec. | Hex. |
| --- | --- | --- | --- |
| `Sopas_Ok` | No error | 0 | 0 |
| `Sopas_Error_METHODIN_ACCESSDENIED` | Wrong userlevel, access to method not allowed | 1 | 1 |
| `Sopas_Error_METHODIN_UNKNOWNINDEX` | Trying to access a method with an unknown Sopas index | 2 | 2 |
| `Sopas_Error_VARIABLE_UNKNOWNINDEX` | Trying to access a variable with an unknown Sopas index | 3 | 3 |
| `Sopas_Error_LOCALCONDITIONFAILED` | Local condition violated, e.g. giving a value that exceeds the minimum or maximum allowed value for this variable | 4 | 4 |
| `Sopas_Error_INVALID_DATA` | Invalid data given for variable, this errorcode is deprecated (is not used anymore). | 5 | 5 |
| `Sopas_Error_UNKNOWN_ERROR` | An error with unknown reason occurred, this errorcode is deprecated. | 6 | 6 |
| `Sopas_Error_BUFFER_OVERFLOW` | The communication buffer was too small for the amount of data that should be serialised. | 7 | 7 |
| `Sopas_Error_BUFFER_UNDERFLOW` | More data was expected, the allocated buffer could not be filled. | 8 | 8 |
| `Sopas_Error_ERROR_UNKNOWN_TYPE` | The variable that shall be serialised has an unknown type. This can only happen when there are variables in the firmware of the device that do not exist in the released description of the device. This should never happen. | 9 | 9 |
| `Sopas_Error_VARIABLE_WRITE_ACCESSDENIED` | It is not allowed to write values to this variable. Probably the variable is defined as read-only. | 10 | A |
| `Sopas_Error_UNKNOWN_CMD_FOR_NAMESERVER` | When using names instead of indices, a command was issued that the nameserver does not understand. | 11 | B |
| `Sopas_Error_UNKNOWN_COLA_COMMAND` | The CoLa protocol specification does not define the given command, command is unknown. | 12 | C |
| `Sopas_Error_METHODIN_SERVER_BUSY` | It is not possible to issue more than one command at a time to an SRT device. | 13 | D |
| `Sopas_Error_FLEX_OUTOF_BOUNDS` | An array was accessed over its maximum length. | 14 | E |
| `Sopas_Error_EVENTREG_UNKNOWNINDEX` | The event you wanted to register for does not exist, the index is unknown. | 15 | F |
| `Sopas_Error_COLA_A_VALUE_OVERFLOW` | The value does not fit into the value field, it is too large. | 16 | 10 |
| `Sopas_Error_COLA_A_INVALIDCHARACTER` | Character is unknown, probably not alphanumeric. | 17 | 11 |
| `Sopas_Error_OSAI_NO_MESSAGE` | Only when using SRTOS in the firmware and distributed variables this error can occur. It is an indication that no operating system message could be created. This happens when trying to GET a variable. | 18 | 12 |
| `Sopas_Error_OSAI_NO_ANSWER_MESSAGE` | This is the same as `Sopas_Error_OSAI_NO_MESSAGE` with the difference that it is thrown when trying to PUT a variable. | 19 | 13 |
| `Sopas_Error_INTERNAL` | Internal error in the firmware, probably a pointer to a parameter was null. | 20 | 14 |
| `Sopas_Error_HubAddressCorrupted` | The Sopas Hubaddress is either too short or too long. | 21 | 15 |
| `Sopas_Error_HubAddressDecoding` | The Sopas Hubaddress is invalid, it can not be decoded (Syntax). | 22 | 16 |
| `Sopas_Error_HubAddressAddressExceeded` | Too many hubs in the address | 23 | 17 |
| `Sopas_Error_HubAddressBlankExpected` | When parsing a HubAddress an expected blank was not found. The HubAddress is not valid. | 24 | 18 |
| - | An asynchronous method call was made although the device was built with “AsyncMethodsSuppressed”. This is an internal error that should never happen in a released device. | 25 | 19 |
| - | Device was built with „ComplexArraysSuppressed“ because the compiler does not allow recursions. But now a complex array was found. This is an internal error that should never happen in a released device. | 26 | 1A |

## Related Articles

- [CoLa Interface](https://sickag.github.io/sick_lidar_developer_guide/configuration/cola-interface/)
