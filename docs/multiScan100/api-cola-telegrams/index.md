# multiScan100 API | CoLa Telegrams (CoLa A and CoLa B)

> multiScan100 CoLa telegram reference with sRN, sWN, sMN, and sEN commands, parameter structures, and CoLa A and CoLa B examples.

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/

# API | CoLa Telegrams

This reference lists the CoLa telegrams supported by the multiScan100. Use the
command details to build or troubleshoot PLC and other low-level
integrations without guessing the telegram structure. For connection
setup, framing, and log in, see
[CoLa Interface](https://sickag.github.io/sick_lidar_developer_guide/configuration/cola-interface/).

Each telegram lists its request and response structure, examples, variable types, lengths, and CoLa A and CoLa B byte values.

Every entry uses the same layout, as in the first entry, [Log In](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#log-in-smn-setaccessmode): a telegram structure table with the variable type, length, and the values in CoLa A and CoLa B, followed by examples that you can copy.

Examples are grouped by protocol, with each telegram representation in a separate code block and its own copy button.

Categories follow the [multiScan100 REST API reference](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/)
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

A log in to the device is necessary to change parameters. In most cases, the user level 'Authorized client' is needed. Changed parameters will be reset to the previous state via a reboot unless the are saved. To save parameter changes the command "sMN mEEwriteall" must be send before log out.

**Telegram structure: sMN SetAccessMode**

| Telegram part | Description                            | Variable | Length | Additional details                             | Values CoLa A (ASCII)                                | Values CoLa B (Binary)                                                |
| ------------- | -------------------------------------- | -------- | ------ | ---------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------- |
| Command type  | Method                                 | String   | 3      |                                                | `sMN`                   | `73 4D 4E`                               |
| Command       | User level                             | String   | 13     |                                                | `SetAccessMode`         | `53 65 74 41 63 63 65 73 73 4D 6F 64 65` |
| User level    | Select user level                      | Int_8    | 1      | Maintenance:<br>Authorized client:<br>Service: | `2<br>3<br>4`           | `02<br>03<br>04`                         |
| Password      | Hash value for the selected user level | Uint_32  | 4      | Maintenance:<br>Authorized client:<br>Service: | `<password hash>` | `<password hash>`                  |

**Example: sMN SetAccessMode**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}SetAccessMode{SPC}4{SPC}<password hash><ETX>
```

```text
sMN SetAccessMode 4 <password hash>
```


**Telegram structure: sAN SetAccessMode**

| Telegram part     | Description   | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |
| ----------------- | ------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- |
| Command type      | Answer        | String   | 3      |                    | `sAN`           | `73 41 4E`                               |
| Command           | User level    | String   | 13     |                    | `SetAccessMode` | `53 65 74 41 63 63 65 73 73 4D 6F 64 65` |
| Change user level | Changed level | Bool_1   | 1      | Error:<br>Success: | `0<br>1`        | `00<br>01`                               |

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

| Telegram part | Description                     | Variable | Length | Additional details                 | Values CoLa A (ASCII)                                | Values CoLa B (Binary)                                                                        |
| ------------- | ------------------------------- | -------- | ------ | ---------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Command type  | Method                          | String   | 3      |                                    | `sMN`                   | `73 4D 4E`                                                       |
| Command       | Enable/ disable CoLa user level | String   | 21     |                                    | `EnableLegacyUserLevel` | `45 6E 61 62 6C 65 4C 65 67 61 63 79 55 73 65 72 4C 65 76 65 6C` |
| User level    | -                               | Uint_8   | 1      | Maintenance:<br>Authorized Client: | `2<br>3`                | `02<br>03`                                                       |
| Status        | Enable/ disable                 | Bool_1   | 1      | Disable:<br>Enable:                | `0<br>1`                | `00<br>01`                                                       |

**Example: sMN EnableLegacyUserLevel**

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
02 02 02 02 00 00 00 1D 73 4D 4E 20 45 6E 61 62 6C 65 4C 65 67 61 63 79 55 73 65 72 4C 65 76 65 6C 20 03 20 01 21
```

```text
73 4D 4E 20 45 6E 61 62 6C 65 4C 65 67 61 63 79 55 73 65 72 4C 65 76 65 6C 20 03 20 01
```


**Telegram structure: sAN EnableLegacyUserLevel**

| Telegram part | Description                     | Variable | Length | Additional details           | Values CoLa A (ASCII)                                | Values CoLa B (Binary)                                                                        |
| ------------- | ------------------------------- | -------- | ------ | ---------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Command type  | Answer                          | String   | 3      |                              | `sAN`                   | `73 41 4E`                                                       |
| Command       | Enable/ disable CoLa user level | String   | 21     |                              | `EnableLegacyUserLevel` | `45 6E 61 62 6C 65 4C 65 67 61 63 79 55 73 65 72 4C 65 76 65 6C` |
| Status code   | Confirmation                    | Bool_1   | 1      | unsuccessful:<br>successful: | `0<br>1`                | `00<br>01`                                                       |

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

**Telegram structure: sMN mSCloadfacdef**

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |
| ------------- | --------------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- |
| Command type  | Method                | String   | 3      |                    | `sMN`           | `73 4D 4E`                               |
| Command       | Load factory defaults | String   | 13     |                    | `mSCloadfacdef` | `6D 53 43 6C 6F 61 64 66 61 63 64 65 66` |

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

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |
| ------------- | --------------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- |
| Command type  | Answer                | String   | 3      |                    | `sAN`           | `73 41 4E`                               |
| Command       | Load factory defaults | String   | 13     |                    | `mSCloadfacdef` | `6D 53 43 6C 6F 61 64 66 61 63 64 65 66` |

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

| Telegram part | Description               | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |
| ------------- | ------------------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- |
| Command type  | Method                    | String   | 3      |                    | `sMN`           | `73 4D 4E`                               |
| Command       | Load application defaults | String   | 13     |                    | `mSCloadappdef` | `6D 53 43 6C 6F 61 64 61 70 70 64 65 66` |

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

| Telegram part | Description               | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |
| ------------- | ------------------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- |
| Command type  | Answer                    | String   | 3      |                    | `sAN`           | `73 41 4E`                               |
| Command       | Load application defaults | String   | 13     |                    | `mSCloadappdef` | `6D 53 43 6C 6F 61 64 61 70 70 64 65 66` |

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

### Change Password [sMN SetPassword]

</summary>

Changing the log in password for a specific user level.

If logged in with a higher user level you may set the password for lower user levels as well.

**Telegram structure: sMN SetPassword**

| Telegram part | Description                                     | Variable | Length | Additional details                             | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                          |
| ------------- | ----------------------------------------------- | -------- | ------ | ---------------------------------------------- | ------------------------------------------------- | --------------------------------------------------------------- |
| Command type  | Method                                          | String   | 3      |                                                | `sMN`                | `73 4D 4E`                         |
| Command       | Set password request                            | String   | 11     |                                                | `SetPassword`        | `53 65 74 50 61 73 73 77 6F 72 64` |
| User level    | User level that the password will be applied to | Int_8    | 1      | Maintenance:<br>Authorized client:<br>Service: | `2<br>3<br>4`        | `02<br>03<br>04`                   |
| Password      | Hash value of the new password                  | Uint_32  | 4      |                                                | `<Hash value>` |                                                                 |

Set password for 'Authorized client' to “testtest” (hash value = 1920E4C9).

**Example: sMN SetPassword**

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

| Telegram part | Description            | Variable | Length | Additional details  | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |
| ------------- | ---------------------- | -------- | ------ | ------------------- | ------------------------------------------ | --------------------------------------------------------------- |
| Command type  | Answer                 | String   | 3      |                     | `sAN`         | `73 41 4E`                         |
| Command       | Set password requested | String   | 11     |                     | `SetPassword` | `53 65 74 50 61 73 73 77 6F 72 64` |
| Success       | Confirmation           | Int_8    | 1      | Failed:<br>Success: | `0<br>1`      | `00<br>01`                         |

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

| Telegram part | Description                              | Variable | Length | Additional details                             | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                                |
| ------------- | ---------------------------------------- | -------- | ------ | ---------------------------------------------- | ------------------------------------------------- | --------------------------------------------------------------------- |
| Command type  | Method                                   | String   | 3      |                                                | `sMN`                | `73 4D 4E`                               |
| Command       | Check password request                   | String   | 13     |                                                | `CheckPassword`      | `43 68 65 63 6B 50 61 73 73 77 6F 72 64` |
| User level    | User level to check the password for     | Int_8    | 1      | Maintenance:<br>Authorized client:<br>Service: | `2<br>3<br>4`        | `02<br>03<br>04`                         |
| Password      | Hash value of the password to be checked | Uint_32  | 4      |                                                | `<Hash value>` |                                                                       |

Check password “testtest” for 'Authorized client'.

**Example: sMN CheckPassword**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}CheckPassword{SPC}3{SPC}1920E4C9<ETX>
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

| Telegram part | Description            | Variable | Length | Additional details  | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |
| ------------- | ---------------------- | -------- | ------ | ------------------- | -------------------------------------------- | --------------------------------------------------------------------- |
| Command type  | Answer                 | String   | 3      |                     | `sAN`           | `73 41 4E`                               |
| Command       | Check password request | String   | 13     |                     | `CheckPassword` | `43 68 65 63 6B 50 61 73 73 77 6F 72 64` |
| Success       | Confirmation           | Int_8    | 1      | Failed:<br>Success: | `0<br>1`        | `00<br>01`                               |

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

| Telegram part | Description                  | Variable | Length | Additional details | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |
| ------------- | ---------------------------- | -------- | ------ | ------------------ | ------------------------------------------ | --------------------------------------------------------------- |
| Command type  | Method                       | String   | 3      |                    | `sMN`         | `73 4D 4E`                         |
| Command       | Store parameters permanently | String   | 11     |                    | `mEEwriteall` | `6D 45 45 77 72 69 74 65 61 6C 6C` |

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

| Telegram part | Description                  | Variable | Length | Additional details | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |
| ------------- | ---------------------------- | -------- | ------ | ------------------ | ------------------------------------------ | --------------------------------------------------------------- |
| Command type  | Answer                       | String   | 3      |                    | `sAN`         | `73 41 4E`                         |
| Command       | Store parameters permanently | String   | 11     |                    | `mEEwriteall` | `6D 45 45 77 72 69 74 65 61 6C 6C` |
| Status code   | Accepted when value is 1     | Bool_1   | 1      | Error:<br>Success: | `0<br>1`      | `00<br>01`                         |

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

| Telegram part | Description      | Variable | Length | Additional details | Values CoLa A (ASCII)              | Values CoLa B (Binary)                  |
| ------------- | ---------------- | -------- | ------ | ------------------ | ---------------------------------- | --------------------------------------- |
| Command type  | Method           | String   | 3      |                    | `sMN` | `73 4D 4E` |
| Command       | Start the device | String   | 3      |                    | `Run` | `52 75 6E` |

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

| Telegram part | Description              | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                  |
| ------------- | ------------------------ | -------- | ------ | ------------------ | ------------------------------------- | --------------------------------------- |
| Command type  | Answer                   | String   | 3      |                    | `sAN`    | `73 41 4E` |
| Command       | Start the device         | String   | 3      |                    | `Run`    | `52 75 6E` |
| Status code   | Accepted when value is 1 | Bool_1   | 1      | Error:<br>Success: | `0<br>1` | `00<br>01` |

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

| Telegram part | Description   | Variable | Length | Additional details | Values CoLa A (ASCII)                    | Values CoLa B (Binary)                                    |
| ------------- | ------------- | -------- | ------ | ------------------ | ---------------------------------------- | --------------------------------------------------------- |
| Command type  | Method        | String   | 3      |                    | `sMN`       | `73 4D 4E`                   |
| Command       | Reboot device | String   | 9      |                    | `mSCreboot` | `6D 53 43 72 65 62 6F 6F 74` |

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

| Telegram part | Description   | Variable | Length | Additional details | Values CoLa A (ASCII)                    | Values CoLa B (Binary)                                    |
| ------------- | ------------- | -------- | ------ | ------------------ | ---------------------------------------- | --------------------------------------------------------- |
| Command type  | Answer        | String   | 3      |                    | `sAN`       | `73 41 4E`                   |
| Command       | Reboot device | String   | 9      |                    | `mSCreboot` | `6D 53 43 72 65 62 6F 6F 74` |

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

| Telegram part | Description                   | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |
| ------------- | ----------------------------- | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ |
| Command type  | Read                          | String   | 3      |                    | `sRN`    | `73 52 4E`          |
| Command       | Read the current device state | String   | 6      |                    | `DevSta` | `44 65 76 53 74 61` |

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

| Telegram part | Description                   | Variable | Length | Additional details                                                                                                                                                     | Values CoLa A (ASCII)                                                    | Values CoLa B (Binary)                                                            |
| ------------- | ----------------------------- | -------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| Command type  | Answer                        | String   | 3      |                                                                                                                                                                        | `sRA`                                       | `73 52 41`                                           |
| Command       | Read the current device state | String   | 6      |                                                                                                                                                                        | `DevSta`                                    | `44 65 76 53 74 61`                                  |
| Status code   | Code number                   | Enum_8   | 1      | Reserved:<br>Startup:<br>Service mode:<br>Normal operation:<br>Suspended operation:<br>Service recommended:<br>Service required:<br>Recoverable error:<br>Fatal error: | `0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8` | `00<br>01<br>02<br>03<br>04<br>05<br>06<br>07<br>08` |

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

### Read the Device State [sRN SCdevicestate]

</summary>

This telegram reads the general device state.

**Telegram structure: sRN SCdevicestate**

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |
| ------------- | --------------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- |
| Command type  | Read                  | String   | 3      |                    | `sRN`           | `73 52 4E`                               |
| Command       | Read the device state | String   | 13     |                    | `SCdevicestate` | `53 43 64 65 76 69 63 65 73 74 61 74 65` |

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

| Telegram part | Description           | Variable | Length | Additional details                    | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |
| ------------- | --------------------- | -------- | ------ | ------------------------------------- | -------------------------------------------- | --------------------------------------------------------------------- |
| Command type  | Answer                | String   | 3      |                                       | `sRA`           | `73 52 41`                               |
| Command       | Read the device state | String   | 13     |                                       | `SCdevicestate` | `53 43 64 65 76 69 63 65 73 74 61 74 65` |
| Status code   | Code number           | Enum_8   | 1      | Busy / logged-in:<br>Ready:<br>Error: | `0<br>1<br>2`   | `00<br>01<br>02`                         |

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

### Read the Current Device Temperature Alarm Status [sRN temperatureAlarmStatus]

</summary>

Current device temperature alarm status. If true, the configured temperature alarm is active.

**Telegram structure: sRN temperatureAlarmStatus**

| Telegram part | Description                     | Variable | Length | Additional details | Values CoLa A (ASCII)                                 | Values CoLa B (Binary)                                                                           |
| ------------- | ------------------------------- | -------- | ------ | ------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Command type  | Read                            | String   | 3      |                    | `sRN`                    | `73 52 4E`                                                          |
| Command       | Device temperature alarm status | String   | 22     |                    | `temperatureAlarmStatus` | `74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 53 74 61 74 75 73` |

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

| Telegram part | Description                     | Variable | Length | Additional details    | Values CoLa A (ASCII)                                 | Values CoLa B (Binary)                                                                           |
| ------------- | ------------------------------- | -------- | ------ | --------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Command type  | Answer                          | String   | 3      |                       | `sRA`                    | `73 52 41`                                                          |
| Command       | Device temperature alarm status | String   | 22     |                       | `temperatureAlarmStatus` | `74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 53 74 61 74 75 73` |
| Data          | Alarm state                     | Bool_1   | 1      | Disabled:<br>Enabled: | `0d (00h)<br>+1d (01h)`  | `00 ... 01`                                                         |

**Example: sRA temperatureAlarmStatus**

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

| Telegram part | Description                            | Variable | Length | Additional details | Values CoLa A (ASCII)                                        | Values CoLa B (Binary)                                                                                                |
| ------------- | -------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Command type  | Write                                  | String   | 3      |                    | `sWN`                           | `73 57 4E`                                                                               |
| Command       | Device temperature alarm configuration | String   | 29     |                    | `temperatureAlarmConfiguration` | `74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |
| Data 1        | Upper threshold [°C]                   | Int_8    | 1      | Default: 55        | `-128d ... +127d (80h ... 7Fh)` | `80 ... 7F`                                                                              |
| Data 2        | Lower threshold [°C]                   | Int_8    | 1      | Default: 50        | `-128d ... +127d (80h ... 7Fh)` | `80 ... 7F`                                                                              |

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

| Telegram part | Description                            | Variable | Length | Additional details | Values CoLa A (ASCII)                                        | Values CoLa B (Binary)                                                                                                |
| ------------- | -------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Command type  | Answer                                 | String   | 3      |                    | `sWA`                           | `73 57 41`                                                                               |
| Command       | Device temperature alarm configuration | String   | 29     |                    | `temperatureAlarmConfiguration` | `74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |

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

| Telegram part | Description                            | Variable | Length | Additional details | Values CoLa A (ASCII)                                        | Values CoLa B (Binary)                                                                                                |
| ------------- | -------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Command type  | Read                                   | String   | 3      |                    | `sRN`                           | `73 52 4E`                                                                               |
| Command       | Device temperature alarm configuration | String   | 29     |                    | `temperatureAlarmConfiguration` | `74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |

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

| Telegram part | Description                            | Variable | Length | Additional details | Values CoLa A (ASCII)                                        | Values CoLa B (Binary)                                                                                                |
| ------------- | -------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Command type  | Answer                                 | String   | 3      |                    | `sRA`                           | `73 52 41`                                                                               |
| Command       | Device temperature alarm configuration | String   | 29     |                    | `temperatureAlarmConfiguration` | `74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |
| Data 1        | Upper threshold [°C]                   | Int_8    | 1      | Default: 55        | `-128d ... +127d (80h ... 7Fh)` | `80 ... 7F`                                                                              |
| Data 2        | Lower threshold [°C]                   | Int_8    | 1      | Default: 50        | `-128d ... +127d (80h ... 7Fh)` | `80 ... 7F`                                                                              |

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

## Device

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Firmware Version [sRN DeviceIdent]

</summary>

**Telegram structure: sRN DeviceIdent**

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |
| ------------- | --------------------- | -------- | ------ | ------------------ | ------------------------------------------ | --------------------------------------------------------------- |
| Command type  | Read                  | String   | 3      |                    | `sRN`         | `73 52 4E`                         |
| Command       | Read firmware version | String   | 11     |                    | `DeviceIdent` | `44 65 76 69 63 65 49 64 65 6E 74` |

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

| Telegram part | Description                            | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                          |
| ------------- | -------------------------------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------- |
| Command type  | Answer                                 | String   | 3      |                    | `sRA`           | `73 52 41`                         |
| Command       |                                        | String   | 11     |                    | `DeviceIdent`   | `44 65 76 69 63 65 49 64 65 6E 74` |
| Value         | Length of firmware designation         | Enum_16  | 2      |                    | `0 ... 22h`     | `0 ... 22h`                        |
| Value         | Firmware designation for device family | String   |        |                    | `(See example)` | `(See example)`                    |
| Value         | Length of firmware version             | Enum_16  | 2      |                    | `0 ... 22h`     | `0 ... 22h`                        |
| Value         | Firmware version                       | String   |        |                    | `(See example)` | `(See example)`                    |

**Example: sRA DeviceIdent**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}DeviceIdent{SPC}9{SPC}multiScan{SPC}8{SPC}2.4.4.0R<ETX>
```

```text
02 73 52 41 20 44 65 76 69 63 65 49 64 65 6E 74 20 39 20 6D 75 6C 74 69 53 63 61 6E 20 38 20 32 2E 34 2E 34 2E 30 52 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 25 73 52 41 20 44 65 76 69 63 65 49 64 65 6E 74 20 00 09 6D 75 6C 74 69 53 63 61 6E 00 08 32 2E 34 2E 34 2E 30 52 23
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Version of the Application Software [sRN FirmwareVersion]

</summary>

**Telegram structure: sRN FirmwareVersion**

| Telegram part | Description                              | Variable | Length | Additional details | Values CoLa A (ASCII)                          | Values CoLa B (Binary)                                                      |
| ------------- | ---------------------------------------- | -------- | ------ | ------------------ | ---------------------------------------------- | --------------------------------------------------------------------------- |
| Command type  | Read                                     | String   | 3      |                    | `sRN`             | `73 52 4E`                                     |
| Command       | Read version of the application software | String   | 15     |                    | `FirmwareVersion` | `46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E` |

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

| Telegram part | Description                              | Variable | Length   | Additional details                       | Values CoLa A (ASCII)                          | Values CoLa B (Binary)                                                      |
| ------------- | ---------------------------------------- | -------- | -------- | ---------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------------- |
| Command type  | Answer                                   | String   | 3        |                                          | `sRA`             | `73 52 41`                                     |
| Command       | Read version of the application software | String   | 15       |                                          | `FirmwareVersion` | `46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E` |
| Value         | Length of version                        | Uint_16  | 2        |                                          | `0 ... 28h`       | `0 ... 28h`                                    |
| Value         | Version                                  | String   | variable | Length is given by the preceding Uint_16 | `(See example)`   | `(See example)`                                |

**Example: sRA FirmwareVersion**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}FirmwareVersion{SPC}5{SPC}2.4.4<ETX>
```

```text
02 73 52 41 20 46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E 20 35 20 32 2E 34 2E 34 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 52 41 20 46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E 20 00 05 32 2E 34 2E 34 3C
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Device Order Number [sRN OrdNum]

</summary>

This telegram reads the device order number which corresponds to the SICK part number of the device.

**Telegram structure: sRN OrdNum**

| Telegram part | Description              | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |
| ------------- | ------------------------ | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ |
| Command type  | Read                     | String   | 3      |                    | `sRN`    | `73 52 4E`          |
| Command       | Read device order number | String   | 6      |                    | `OrdNum` | `4F 72 64 4E 75 6D` |

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

| Telegram part | Description                                        | Variable | Length | Additional details | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                     |
| ------------- | -------------------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------ | -------------------------------------------------------------------------- |
| Command type  | Answer                                             | String   | 3      |                    | `sRA`               | `73 52 41`                                    |
| Command       | Read device order number                           | String   | 6      |                    | `OrdNum`            | `4F 72 64 4E 75 6D`                           |
| Length        | Number of characters of the following order number | Uint_16  | 2      |                    | `0h ... 20h`        | `00 00 ... 00 20`                             |
| Order number  | Order number in 7 digits                           | String   | 7      |                    | `0000000 … 9999999` | `00 00 00 00 00 00 00 … FF FF FF FF FF FF FF` |

**Example: sRA OrdNum**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}OrdNum{SPC}7{SPC}1137723<ETX>
```

```text
02 73 52 41 20 4F 72 64 4E 75 6D 20 37 20 31 31 33 37 37 32 33 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 41 20 4F 72 64 4E 75 6D 20 00 07 31 31 33 37 37 32 33 5A
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Serial Number [sRN SerialNumber]

</summary>

Read the serial number of the device.

**Telegram structure: sRN SerialNumber**

| Telegram part | Description                      | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |
| ------------- | -------------------------------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ |
| Command type  | Read                             | String   | 3      |                    | `sRN`          | `73 52 4E`                            |
| Command       | Read serial number of the device | String   | 12     |                    | `SerialNumber` | `53 65 72 69 61 6C 4E 75 6D 62 65 72` |

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

| Telegram part           | Description                                               | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                             |
| ----------------------- | --------------------------------------------------------- | -------- | ------ | ------------------ | -------------------------------------------- | ------------------------------------------------------------------ |
| Command type            | Answer                                                    | String   | 3      |                    | `sRA`           | `73 52 41`                            |
| Command                 | Read serial number of the device                          | String   | 12     |                    | `SerialNumber`  | `53 65 72 69 61 6C 4E 75 6D 62 65 72` |
| Length of serial number | Number of characters of the serial number                 | Uint_16  | 2      |                    | `0 ... 8h`      | `00 00 ... 00 08h`                    |
| Serial number           | Production period (year, calendar week, number): YYWWxxxx | String   | 8      |                    | `(See example)` | `(See example)`                       |

**Example: sRA SerialNumber**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}SerialNumber{SPC}8{SPC}24480041<ETX>
```

```text
02 73 52 41 20 53 65 72 69 61 6C 4E 75 6D 62 65 72 20 38 20 32 34 34 38 30 30 34 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 52 41 20 53 65 72 69 61 6C 4E 75 6D 62 65 72 20 00 08 32 34 34 38 30 30 34 31 64
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Device Type [sRN DItype]

</summary>

This telegram asks for the device type of the product family.

**Telegram structure: sRN DItype**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |
| ------------- | ----------- | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ |
| Command type  | Read        | String   | 3      |                    | `sRN`    | `73 52 4E`          |
| Command       | Ask state   | String   | 6      |                    | `DItype` | `44 49 74 79 70 65` |

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

| Telegram part      | Description                                        | Variable | Length | Additional details     | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                           |
| ------------------ | -------------------------------------------------- | -------- | ------ | ---------------------- | -------------------------------------------- | ------------------------------------------------ |
| Command type       | Answer                                             | String   | 3      |                        | `sRA`           | `73 52 41`          |
| Command            | Ask state                                          | String   | 6      |                        | `DItype`        | `44 49 74 79 70 65` |
| Length of type key | Number of digits of the following type code length | Uint_16  | 2      | String length in bytes | `0 ... FFFF`    | `00 00 ... FF FF`   |
| Device type        | Type code of the device                            | String   | (var.) |                        | `(Device type)` | `(Device type)`     |

**Example: sRA DItype**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}DItype{SPC}C{SPC}multiScan165<ETX>
```

```text
02 73 52 41 20 44 49 74 79 70 65 20 43 20 6D 75 6C 74 69 53 63 61 6E 31 36 35 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 19 73 52 41 20 44 49 74 79 70 65 20 00 0C 6D 75 6C 74 69 53 63 61 6E 31 36 35 1D
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Device Name [sWN LocationName]

</summary>

Give the device a specific description name such as its location.

**Telegram structure: sWN LocationName**

| Telegram part | Description                                       | Variable | Length | Additional details | Values CoLa A (ASCII)                                | Values CoLa B (Binary)                                             |
| ------------- | ------------------------------------------------- | -------- | ------ | ------------------ | ---------------------------------------------------- | ------------------------------------------------------------------ |
| Command type  | Write                                             | String   | 3      |                    | `sWN`                   | `73 57 4E`                            |
| Command       | Set device name                                   | String   | 12     |                    | `LocationName`          | `4C 6F 63 61 74 69 6F 6E 4E 61 6D 65` |
| Value         | Number of characters of the following device name | Uint_16  | 2      |                    | `0d … +16d (0h … 10h )` | `00 00 … 00 10`                       |
| Value         | Device name                                       | String   | 32     |                    | `[Device name]`         | `[Device name]`                       |

**Example: sWN LocationName**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LocationName{SPC}9{SPC}BenchTest<ETX>
```

```text
sWN LocationName 9 BenchTest
```

```text
02 73 57 4E 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 20 39 20 42 65 6E 63 68 54 65 73 74 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 57 4E 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 20 00 09 42 65 6E 63 68 54 65 73 74 0D
```

```text
73 57 4E 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 20 00 09 42 65 6E 63 68 54 65 73 74
```


**Telegram structure: sWA LocationName**

| Telegram part | Description     | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |
| ------------- | --------------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ |
| Command type  | Answer          | String   | 3      |                    | `sWA`          | `73 57 41`                            |
| Command       | Set device name | String   | 12     |                    | `LocationName` | `4C 6F 63 61 74 69 6F 6E 4E 61 6D 65` |

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

| Telegram part | Description      | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |
| ------------- | ---------------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ |
| Command type  | Read             | String   | 3      |                    | `sRN`          | `73 52 4E`                            |
| Command       | Read device name | String   | 12     |                    | `LocationName` | `4C 6F 63 61 74 69 6F 6E 4E 61 6D 65` |

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

| Telegram part                                     | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| ------------------------------------------------- | ----------- | -------- | ------ | ------------------ | --------------------- | ---------------------- |
| Find complete telegram structure of the answer in |             |          |        |                    |                       |                        |

**Example: sRA LocationName**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LocationName{SPC}15{SPC}multiScan165{SPC}24480041<ETX>
```

```text
02 73 52 41 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 20 31 35 20 6D 75 6C 74 69 53 63 61 6E 31 36 35 20 32 34 34 38 30 30 34 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 28 73 52 41 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 20 00 15 6D 75 6C 74 69 53 63 61 6E 31 36 35 20 32 34 34 38 30 30 34 31 24
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Initiate an Acoustic or Visual Signal for a Defined Period of Time [sMN FindMe]

</summary>

This command can be used to make the device easier to find.

**Telegram structure: sMN FindMe**

| Telegram part  | Description                           | Variable | Length | Additional details | Values CoLa A (ASCII)                                    | Values CoLa B (Binary)                           |
| -------------- | ------------------------------------- | -------- | ------ | ------------------ | -------------------------------------------------------- | ------------------------------------------------ |
| Command type   | Method                                | String   | 3      |                    | `sMN`                       | `73 4D 4E`          |
| Command        | Initiate an acoustic or visual signal | String   | 6      |                    | `FindMe`                    | `46 69 6E 64 4D 65` |
| Period of time | Duration in seconds                   | Uint_16  | 2      |                    | `0d … 65535d (0h .. FF FF)` | `00 ... FF FF`      |

**Example: sMN FindMe**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}FindMe{SPC}1<ETX>
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

| Telegram part | Description                           | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |
| ------------- | ------------------------------------- | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ |
| Command type  | Answer                                | String   | 3      |                    | `sAN`    | `73 41 4E`          |
| Command       | Initiate an acoustic or visual signal | String   | 6      |                    | `FindMe` | `46 69 6E 64 4D 65` |

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

| Telegram part | Description                                   | Variable | Length | Additional details | Values CoLa A (ASCII)                     | Values CoLa B (Binary)                                       |
| ------------- | --------------------------------------------- | -------- | ------ | ------------------ | ----------------------------------------- | ------------------------------------------------------------ |
| Command type  | Read                                          | String   | 3      |                    | `sRN`        | `73 52 4E`                      |
| Command       | Info of scan frequency and angular resolution | String   | 10     |                    | `LMPscancfg` | `4C 4D 50 73 63 61 6E 63 66 67` |

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

| Telegram part      | Description                                   | Variable | Length | Additional details                                   | Values CoLa A (ASCII)                                | Values CoLa B (Binary)                                                   |
| ------------------ | --------------------------------------------- | -------- | ------ | ---------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------ |
| Command type       | Answer                                        | String   | 3      |                                                      | `sRA`                   | `73 52 41`                                  |
| Command            | Info of scan frequency and angular resolution | String   | 10     |                                                      | `LMPscancfg`            | `4C 4D 50 73 63 61 6E 63 66 67`             |
| Scan frequency     | [1/100 Hz]                                    | Uint_32  | 4      | 20 Hz:                                               | `7D0h`                  | `00 00 07 D0`                               |
| Reserved           | -                                             | Int_16   | 2      | Always:                                              | `1`                     | `00 01`                                     |
| Angular resolution | [1/10000°]                                    | Uint_32  | 4      | 0.5°:<br>0.25° (interlaced):<br>0.125° (interlaced): | `1388h<br>9C4h<br>4E2h` | `00 00 13 88<br>00 00 09 C4<br>00 00 04 E2` |
| Start angle        | [1/10000°]                                    | Int_32   | 4      | Variant-dependent; example: -180 to +180 degrees     | `FFE488C0 ... 1B7740`   | `FF E4 88 C0 ... 00 1B 77 40`               |
| Stop angle         | [1/10000°]                                    | Int_32   | 4      | Variant-dependent; example: -180 to +180 degrees     | `FFE488C0 ... 1B7740`   | `FF E4 88 C0 ... 00 1B 77 40`               |

**Example: sRA LMPscancfg**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LMPscancfg{SPC}7D0{SPC}1{SPC}1388{SPC}FFE488C0{SPC}1B7740<ETX>
```

```text
02 73 52 41 20 4C 4D 50 73 63 61 6E 63 66 67 20 37 44 30 20 31 20 31 33 38 38 20 46 46 45 34 38 38 43 30 20 31 42 37 37 34 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 21 73 52 41 20 4C 4D 50 73 63 61 6E 63 66 67 20 00 00 07 D0 00 01 00 00 13 88 FF E4 88 C0 00 1B 77 40 7E
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Start Measurement [sMN LMCstartmeas]

</summary>

Start the laser and (unless in Standby mode) the motor of the device

**Telegram structure: sMN LMCstartmeas**

| Telegram part | Description       | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |
| ------------- | ----------------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ |
| Command type  | Method            | String   | 3      |                    | `sMN`          | `73 4D 4E`                            |
| Command       | Start measurement | String   | 12     |                    | `LMCstartmeas` | `4C 4D 43 73 74 61 72 74 6D 65 61 73` |

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

| Telegram part | Description              | Variable | Length | Additional details       | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |
| ------------- | ------------------------ | -------- | ------ | ------------------------ | ------------------------------------------- | ------------------------------------------------------------------ |
| Command type  | Answer                   | String   | 3      |                          | `sAN`          | `73 41 4E`                            |
| Command       | Start measurement        | String   | 12     |                          | `LMCstartmeas` | `4C 4D 43 73 74 61 72 74 6D 65 61 73` |
| Status code   | Accepted when value is 0 | Enum_8   | 1      | Success:<br>Not allowed: | `0<br>1`       | `00<br>01`                            |

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

| Telegram part | Description      | Variable | Length | Additional details | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |
| ------------- | ---------------- | -------- | ------ | ------------------ | ------------------------------------------ | --------------------------------------------------------------- |
| Command type  | Method           | String   | 3      |                    | `sMN`         | `73 4D 4E`                         |
| Command       | Stop measurement | String   | 11     |                    | `LMCstopmeas` | `4C 4D 43 73 74 6F 70 6D 65 61 73` |

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

| Telegram part | Description              | Variable | Length | Additional details        | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |
| ------------- | ------------------------ | -------- | ------ | ------------------------- | ------------------------------------------ | --------------------------------------------------------------- |
| Command type  | Answer                   | String   | 3      |                           | `sAN`         | `73 41 4E`                         |
| Command       | Stop measurement         | String   | 11     |                           | `LMCstopmeas` | `4C 4D 43 73 74 6F 70 6D 65 61 73` |
| Status code   | Accepted when value is 0 | Enum_8   | 1      | No error:<br>Not allowed: | `0<br>1`      | `00<br>01`                         |

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

This parameter defines whether the scanner will start to rotate directly and measure when powering up or remain in idle mode. Save the changed setting with `sMN mEEwriteall`; it takes effect at the next power-up cycle.

In case autostart is deactivated, the sensor will remain in idle mode with the laser switched off.

**Telegram structure: sWN LMPautostartmeas**

| Telegram part | Description                     | Variable | Length | Additional details              | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                                                         |
| ------------- | ------------------------------- | -------- | ------ | ------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------ |
| Command type  | Write                           | String   | 3      |                                 | `sWN`              | `73 57 4E`                                        |
| Command       | Autostart measurement           | String   | 16     |                                 | `LMPautostartmeas` | `4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73` |
| Status code   | Activate / Deactivate Autostart | Bool_1   | 1      | Autostart off:<br>Autostart on: | `0<br>1`           | `00<br>01`                                        |

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


**Telegram structure: sWA LMDautostartmeas**

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                                                         |
| ------------- | --------------------- | -------- | ------ | ------------------ | ----------------------------------------------- | ------------------------------------------------------------------------------ |
| Command type  | Answer                | String   | 3      |                    | `sWA`              | `73 57 41`                                        |
| Command       | Autostart measurement | String   | 16     |                    | `LMPautostartmeas` | `4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73` |

**Telegram structure: sWA LMPautostartmeas**

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                                                         |
| ------------- | --------------------- | -------- | ------ | ------------------ | ----------------------------------------------- | ------------------------------------------------------------------------------ |
| Command type  | Answer                | String   | 3      |                    | `sWA`              | `73 57 41`                                        |
| Command       | Autostart measurement | String   | 16     |                    | `LMPautostartmeas` | `4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73` |

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

### Read Parameter [sRN LMPautostartmeas]

</summary>

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN LMPautostartmeas**

| Telegram part | Description      | Variable | Length | Additional details | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                                                         |
| ------------- | ---------------- | -------- | ------ | ------------------ | ----------------------------------------------- | ------------------------------------------------------------------------------ |
| Command type  | Read             | String   | 3      |                    | `sRN`              | `73 52 4E`                                        |
| Command       | LMPautostartmeas | String   | 16     |                    | `LMPautostartmeas` | `4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73` |

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

### Set Scan Configuration [sMN mCLsetscancfglist]

</summary>

Enable or disable interlacing. Four shifted scans can be combined to obtain finer angular sampling. See manual pages 108-109. Requires Authorized client.

**Telegram structure: sMN mCLsetscancfglist**

| Telegram part | Description       | Variable | Length | Additional details | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                            |
| ------------- | ----------------- | -------- | ------ | ------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------- |
| Command type  | Method            | String   | 3      |                    | `sMN`               | `73 4D 4E`                                           |
| Command       | mCLsetscancfglist | String   | 17     |                    | `mCLsetscancfglist` | `6D 43 4C 73 65 74 73 63 61 6E 63 66 67 6C 69 73 74` |
| Mode          | Interlacing       | Enum_8   | 1      | Off / on           | `0 / 1`             | `00 / 01`                                            |

**Example: sMN mCLsetscancfglist**

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

| Telegram part | Description               | Variable | Length | Additional details                                                                 | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                            |
| ------------- | ------------------------- | -------- | ------ | ---------------------------------------------------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------- |
| Command type  | Answer                    | String   | 3      |                                                                                    | `sAN`               | `73 41 4E`                                           |
| Command       | mCLsetscancfglist         | String   | 17     |                                                                                    | `mCLsetscancfglist` | `6D 43 4C 73 65 74 73 63 61 6E 63 66 67 6C 69 73 74` |
| Status        | Scan configuration result | Enum_8   | 1      | 0 OK; 1 frequency; 2 resolution; 3 frequency and resolution; 4 scan field; 5 error | `0 ... 5`           | `00 ... 05`                                          |

**Example: sAN mCLsetscancfglist**

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

### Read Parameter [sRN LEDEnable]

</summary>

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN LEDEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                    | Values CoLa B (Binary)                                    |
| ------------- | ----------- | -------- | ------ | ------------------ | ---------------------------------------- | --------------------------------------------------------- |
| Command type  | Read        | String   | 3      |                    | `sRN`       | `73 52 4E`                   |
| Command       | LEDEnable   | String   | 9      |                    | `LEDEnable` | `4C 45 44 45 6E 61 62 6C 65` |

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

### Enable/ Disable LEDs [sWN LEDEnable]

</summary>

This command enables/ disables the LEDs of the device.

**Telegram structure: sWN LEDEnable**

| Telegram part | Description     | Variable | Length | Additional details | Values CoLa A (ASCII)                    | Values CoLa B (Binary)                                    |
| ------------- | --------------- | -------- | ------ | ------------------ | ---------------------------------------- | --------------------------------------------------------- |
| Command type  | Method          | String   | 3      |                    | `sWN`       | `73 57 4E`                   |
| Command       | Set LEDs        | String   | 9      |                    | `LEDEnable` | `4C 45 44 45 6E 61 62 6C 65` |
| Status        | Enable/ disable | Bool_1   | 1      | Off:<br>On:        | `0<br>1`    | `00<br>01`                   |

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

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                    | Values CoLa B (Binary)                                    |
| ------------- | ----------- | -------- | ------ | ------------------ | ---------------------------------------- | --------------------------------------------------------- |
| Command type  | Answer      | String   | 3      |                    | `sWA`       | `73 57 41`                   |
| Command       | Set LEDs    | String   | 9      |                    | `LEDEnable` | `4C 45 44 45 6E 61 62 6C 65` |

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

| Telegram part | Description        | Variable | Length | Additional details | Values CoLa A (ASCII)                   | Values CoLa B (Binary)                                 |
| ------------- | ------------------ | -------- | ------ | ------------------ | --------------------------------------- | ------------------------------------------------------ |
| Command type  | Method             | String   | 3      |                    | `sRN`      | `73 52 4E`                |
| Command       | Read state of LEDs | String   | 8      |                    | `LEDState` | `4C 45 44 53 74 61 74 65` |

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

| Telegram part | Description     | Variable | Length | Additional details                                                                 | Values CoLa A (ASCII)                                     | Values CoLa B (Binary)                                          |
| ------------- | --------------- | -------- | ------ | ---------------------------------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------------- |
| Command type  | Answer          | String   | 3      |                                                                                    | `sRA`                        | `73 52 41`                         |
| Command       | State of LEDs   | String   | 8      |                                                                                    | `LEDState`                   | `4C 45 44 53 74 61 74 65`          |
| LED Color     | -               | Enum_8   | 1      | Green:<br>Yellow:<br>Red:                                                          | `0<br>1<br>2`                | `00<br>01<br>02`                   |
| LED behavior  | -               | Enum_8   | 1      | On:<br>Off:<br>Blinking:<br>Blinking fast:<br>Blinking delayed:<br>Find me active: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05` |
| LED ID        | Name of the LED | String   | 8      |                                                                                    | `LED1<br>LED2`               | `4C 45 44 31<br>4C 45 44 32`       |

**Example: sRA LEDState**

**CoLa A (ASCII)**

```text
02 73 52 41 20 4C 45 44 53 74 61 74 65 20 34 20 30 20 30 20 4C 45 44 34 00 00 00 00 20 30 20 30 20 4C 45 44 32 00 00 00 00 20 31 20 30 20 4C 45 44 31 00 00 00 00 20 31 20 30 20 4C 45 44 33 00 00 00 00 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 37 73 52 41 20 4C 45 44 53 74 61 74 65 20 00 04 00 00 4C 45 44 34 00 00 00 00 00 00 4C 45 44 32 00 00 00 00 01 00 4C 45 44 31 00 00 00 00 01 00 4C 45 44 33 00 00 00 00 7A
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

| Telegram part | Description    | Variable | Length | Additional details | Values CoLa A (ASCII)                                                | Values CoLa B (Binary)                                                   |
| ------------- | -------------- | -------- | ------ | ------------------ | -------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Method         | String   | 3      |                    | `sMN`                                   | `73 4D 4E`                                  |
| Command       | Set time stamp | String   | 14     |                    | `LSPsetdatetime`                        | `4C 53 50 73 65 74 64 61 74 65 74 69 6D 65` |
| Year          |                | Uint_16  | 2      |                    | `+1970d … +2099d (07B2h … 0833h)`       | `07 B2 … 08 33`                             |
| Month         |                | Uint_8   | 1      |                    | `+1d … +12d(01h … 0Ch)`                 | `01 … 0C`                                   |
| Day           |                | Uint_8   | 1      |                    | `+1d … +31d(01h … 1Fh)`                 | `00 … 1F`                                   |
| Hour          |                | Uint_8   | 1      |                    | `+0d … +23d(00h … 17h)`                 | `00 … 17`                                   |
| Minute        |                | Uint_8   | 1      |                    | `+0d … +59d(00h … 3Bh)`                 | `00 … 3B`                                   |
| Second        |                | Uint_8   | 1      |                    | `+0d … +59d(00h … 3Bh)`                 | `00 … 3B`                                   |
| Microsecond   |                | Uint_32  | 4      |                    | `+0d … +999999d(00000000h … 000F423Fh)` | `00 00 00 00 … 00 0F 42 3F`                 |

**Example: sMN LSPsetdatetime**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}LSPsetdatetime{SPC}+2026{SPC}+10{SPC}+6{SPC}+9{SPC}+25{SPC}+28{SPC}+0<ETX>
```

```text
sMN LSPsetdatetime +2026 +10 +6 +9 +25 +28 +0
```

```text
02 73 4D 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 2B 32 30 32 36 20 2B 31 30 20 2B 36 20 2B 39 20 2B 32 35 20 2B 32 38 20 2B 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1E 73 4D 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 07 EA 0A 06 09 19 1C 00 00 00 00 B1
```

```text
73 4D 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 07 EA 0A 06 09 19 1C 00 00 00 00
```


**Telegram structure: sAN LSPsetdatetime**

| Telegram part | Description    | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------- | -------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Answer         | String   | 3      |                    | `sAN`            | `73 41 4E`                                  |
| Command       | Set time stamp | String   | 14     |                    | `LSPsetdatetime` | `4C 53 50 73 65 74 64 61 74 65 74 69 6D 65` |
| Status code   | Code number    | Enum_8   | 1      | Success:           | `0`              | `00`                                        |

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

### Read Device Time [sRN DeviceTime]

</summary>

Read sensor system time in milliseconds. Firmware 2.4.4.0R returns an 8-byte value. Values are time-dependent.

**Telegram structure: sRN DeviceTime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                     | Values CoLa B (Binary)                                       |
| ------------- | ----------- | -------- | ------ | ------------------ | ----------------------------------------- | ------------------------------------------------------------ |
| Command type  | Read        | String   | 3      |                    | `sRN`        | `73 52 4E`                      |
| Command       | DeviceTime  | String   | 10     |                    | `DeviceTime` | `44 65 76 69 63 65 54 69 6D 65` |

**Example: sRN DeviceTime**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}DeviceTime<ETX>
```

```text
<STX>sRN DeviceTime<ETX>
```

```text
sRN DeviceTime
```

```text
02 73 52 4E 20 44 65 76 69 63 65 54 69 6D 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 52 4E 20 44 65 76 69 63 65 54 69 6D 65 42
```

```text
73 52 4E 20 44 65 76 69 63 65 54 69 6D 65
```


**Telegram structure: sRA DeviceTime**

| Telegram part | Description                        | Variable | Length | Additional details | Values CoLa A (ASCII)                                 | Values CoLa B (Binary)                                                             |
| ------------- | ---------------------------------- | -------- | ------ | ------------------ | ----------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Command type  | Answer                             | String   | 3      |                    | `sRA`                    | `73 52 41`                                            |
| Command       | DeviceTime                         | String   | 10     |                    | `DeviceTime`             | `44 65 76 69 63 65 54 69 6D 65`                       |
| Device time   | Sensor system time in milliseconds | Uint_64  | 8      | Firmware 2.4.4.0R  | `0 ... FFFFFFFFFFFFFFFF` | `00 00 00 00 00 00 00 00 ... FF FF FF FF FF FF FF FF` |

**Example: sRA DeviceTime**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}DeviceTime{SPC}77F7B<ETX>
```

```text
02 73 52 41 20 44 65 76 69 63 65 54 69 6D 65 20 37 37 46 37 42 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 52 41 20 44 65 76 69 63 65 54 69 6D 65 20 00 00 00 00 00 07 7F 7B 6E
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Time Server IP Address [sWN TSCTCSrvAddr]

</summary>

Define the IP address from which the device will receive the time synchronization.

**Telegram structure: sWN TSCTCSrvAddr**

| Telegram part   | Description                | Variable | Length | Additional details        | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                                             |
| --------------- | -------------------------- | -------- | ------ | ------------------------- | ----------------------------------------------- | ------------------------------------------------------------------ |
| Command type    | Write                      | String   | 3      |                           | `sWN`              | `73 57 4E`                            |
| Command         | Set time server IP address | String   | 12     |                           | `TSCTCSrvAddr`     | `54 53 43 54 43 53 72 76 41 64 64 72` |
| IP address data | Set values                 | Uint_8   | 1      | First part of IP address  | `0 …+255d (00…FF)` | `00 … FF`                             |
| IP address data | Set values                 | Uint_8   | 1      | Second part of IP address | `0 …+255d (00…FF)` | `00 … FF`                             |
| IP address data | Set values                 | Uint_8   | 1      | Third part of IP address  | `0 …+255d (00…FF)` | `00 … FF`                             |
| IP address data | Set values                 | Uint_8   | 1      | Fourth part of IP address | `0 …+255d (00…FF)` | `00 … FF`                             |

**Example: sWN TSCTCSrvAddr**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}TSCTCSrvAddr{SPC}C0{SPC}A8{SPC}00{SPC}0B<ETX>
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

| Telegram part | Description                | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |
| ------------- | -------------------------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ |
| Command type  | Answer                     | String   | 3      |                    | `sWA`          | `73 57 41`                            |
| Command       | Set time server IP address | String   | 12     |                    | `TSCTCSrvAddr` | `54 53 43 54 43 53 72 76 41 64 64 72` |

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

| Telegram part  | Description                        | Variable | Length | Additional details | Values CoLa A (ASCII)                                  | Values CoLa B (Binary)                                                |
| -------------- | ---------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------------ | --------------------------------------------------------------------- |
| Command type   | Write                              | String   | 3      |                    | `sWN`                     | `73 57 4E`                               |
| Command        | Set time zone                      | String   | 13     |                    | `TSCTCtimezone`           | `54 53 43 54 43 74 69 6D 65 7A 6F 6E 65` |
| Time zone data | Select the time zone of the client | Enum_8   | 1      | List of time zones | `+0d … +104d (00h … 68h)` | `00 … 68`                                |

**Time zone data Values CoLa (ASCII)**

| Value | Time zone              | Value | Time zone             | Value | Time zone             |
| ----- | ---------------------- | ----- | --------------------- | ----- | --------------------- |
| 0     | DATE_LINE_STANDARD     | 35    | MONROVIA_REYKJAVIK    | 70    | MUMBAI_NEUDELHI       |
| 1     | COORD_WORLD_TIME_11    | 36    | AMSTERDAM_BERLIN_ROM  | 71    | SRI_JAYAWARDENEPURA   |
| 2     | HAWAII                 | 37    | BELGRAD_BUDAPEST_PRAG | 72    | KATMANDU              |
| 3     | ALASKA                 | 38    | BRUESSEL_MADRID_PARIS | 73    | ASTANA                |
| 4     | CALIFORNIA             | 39    | SARAJEVO_WARSCHAU     | 74    | DAKKA                 |
| 5     | USA_CANADA             | 40    | WEST_CENTRAL_AFRICA   | 75    | NOWOSIBIRSK           |
| 6     | ARIZONA                | 41    | WINDHUK               | 76    | YANGON                |
| 7     | LA_PAZ                 | 42    | AMMAN                 | 77    | BANGKOK_HANOI_JAKARTA |
| 8     | MOUNTAIN_TIME_USA      | 43    | ATHEN_BUKAREST        | 78    | KRASNOJARSK           |
| 9     | CENTRAL_TIME_USA       | 44    | BEIRUT                | 79    | IRKUTSK               |
| 10    | MEXICO_CITY            | 45    | DAMASCUS              | 80    | KUALA_LUMPUR_SINGAPUR |
| 11    | MIDDLE_AMERICA         | 46    | HARARE_PRETORIA       | 81    | PEKING_HONGKONG       |
| 12    | SASKATCHEWAN           | 47    | HELSINKI_KIEW_RIGA    | 82    | PERTH                 |
| 13    | BOGOTA_LIMA            | 48    | ISTANBUL              | 83    | TAIPEH                |
| 14    | EASTERN_TIME_USA       | 49    | JERUSALEM             | 84    | ULAN_BATOR            |
| 15    | INDIANA                | 50    | KAIRO                 | 85    | JAKUTSK               |
| 16    | CARACAS                | 51    | KALININGRAD           | 86    | OSAKA_TOKIO           |
| 17    | ASUNCION               | 52    | EASTERN_EUROPE        | 87    | SEOUL                 |
| 18    | ATLANTIC_KANADA        | 53    | TRIPOLIS              | 88    | ADELAIDE              |
| 19    | CUIABA                 | 54    | BAGDAD                | 89    | DARWIN                |
| 20    | LAPAZ_SANJUAN          | 55    | KUWAIT_RIAD           | 90    | BRISBANE              |
| 21    | SANTIAGO               | 56    | MINSK                 | 91    | CANBERRA_SYDNEY       |
| 22    | NEUFUNDLAND            | 57    | MOSKAU_PETERSBURG     | 92    | GUAM_PORT_MORESBY     |
| 23    | BRASILIA               | 58    | NAIROBI               | 93    | HOBART                |
| 24    | BUENOS_AIRES           | 59    | TEHERAN               | 94    | MAGADAN               |
| 25    | CAYENNE_FORTALEZA      | 60    | ABU_DHABI             | 95    | WLADIWOSTOK           |
| 26    | GROENLAND              | 61    | BAKU                  | 96    | SALOMONEN_KALEDONIEN  |
| 27    | MONTEVIDEO             | 62    | ERIWAN                | 97    | TSCHOKURDACH          |
| 28    | SALVADOR               | 63    | ISCHEWSK_SAMARA       | 98    | ANADYR                |
| 29    | COORD_WORLD_TIME_02    | 64    | PORT_LOUIS            | 99    | AUCKLAND_WELLINGTON   |
| 30    | AZOREN                 | 65    | TIFLIS                | 100   | FIDSCHI               |
| 31    | KAP_VERDE              | 66    | KABUL                 | 101   | COORD_WORLD_TIME_12   |
| 32    | CASABLANCA             | 67    | ASCHGABET_TASCHKENT   | 102   | NAKUALOFA             |
| 33    | DUBLIN_LISSABON_LONDON | 68    | ISLAMABAD_KARATSCHI   | 103   | SAMOA                 |
| 34    | COORD_WORLD_TIME       | 69    | JEKATERINBURG         | 104   | KIRITIMATI            |

**Example: sWN TSCTCtimezone**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}TSCTCtimezone{SPC}24<ETX>
```

```text
sWN TSCTCtimezone 24
```

```text
02 73 57 4E 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 20 32 34 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 4E 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 20 24 16
```

```text
73 57 4E 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 20 24
```


**Telegram structure: sWA TSCTCtimezone**

| Telegram part | Description   | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |
| ------------- | ------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- |
| Command type  | Answer        | String   | 3      |                    | `sWA`           | `73 57 41`                               |
| Command       | Set time zone | String   | 13     |                    | `TSCTCtimezone` | `54 53 43 54 43 74 69 6D 65 7A 6F 6E 65` |

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

| Telegram part                  | Description                        | Variable | Length | Additional details | Values CoLa A (ASCII)                                    | Values CoLa B (Binary)                                                      |
| ------------------------------ | ---------------------------------- | -------- | ------ | ------------------ | -------------------------------------------------------- | --------------------------------------------------------------------------- |
| Command type                   | Write                              | String   | 3      |                    | `sWN`                       | `73 57 4E`                                     |
| Command                        | Set update time of synchronization | String   | 15     |                    | `TSCTCupdatetime`           | `54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65` |
| Update time of synchronization | Set values in seconds              | Uint_32  | 4      |                    | `+1d … +3600d(01h … 0E10h)` | `00 00 00 00 … 00 00 0E 10`                    |

**Example: sWN TSCTCupdatetime**

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

| Telegram part | Description                        | Variable | Length | Additional details | Values CoLa A (ASCII)                          | Values CoLa B (Binary)                                                      |
| ------------- | ---------------------------------- | -------- | ------ | ------------------ | ---------------------------------------------- | --------------------------------------------------------------------------- |
| Command type  | Answer                             | String   | 3      |                    | `sWA`             | `73 57 41`                                     |
| Command       | Set update time of synchronization | String   | 15     |                    | `TSCTCupdatetime` | `54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65` |

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

### Read Parameter [sRN TSCRole]

</summary>

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN TSCRole**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                  | Values CoLa B (Binary)                              |
| ------------- | ----------- | -------- | ------ | ------------------ | -------------------------------------- | --------------------------------------------------- |
| Command type  | Read        | String   | 3      |                    | `sRN`     | `73 52 4E`             |
| Command       | TSCRole     | String   | 7      |                    | `TSCRole` | `54 53 43 52 6F 6C 65` |

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

### Read Parameter [sRN TSCTCSrvAddr]

</summary>

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN TSCTCSrvAddr**

| Telegram part | Description  | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |
| ------------- | ------------ | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ |
| Command type  | Read         | String   | 3      |                    | `sRN`          | `73 52 4E`                            |
| Command       | TSCTCSrvAddr | String   | 12     |                    | `TSCTCSrvAddr` | `54 53 43 54 43 53 72 76 41 64 64 72` |

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

### Read Parameter [sRN TSCTCtimezone]

</summary>

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN TSCTCtimezone**

| Telegram part | Description   | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |
| ------------- | ------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- |
| Command type  | Read          | String   | 3      |                    | `sRN`           | `73 52 4E`                               |
| Command       | TSCTCtimezone | String   | 13     |                    | `TSCTCtimezone` | `54 53 43 54 43 74 69 6D 65 7A 6F 6E 65` |

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

### Read Parameter [sRN TSCTCupdatetime]

</summary>

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN TSCTCupdatetime**

| Telegram part | Description     | Variable | Length | Additional details | Values CoLa A (ASCII)                          | Values CoLa B (Binary)                                                      |
| ------------- | --------------- | -------- | ------ | ------------------ | ---------------------------------------------- | --------------------------------------------------------------------------- |
| Command type  | Read            | String   | 3      |                    | `sRN`             | `73 52 4E`                                     |
| Command       | TSCTCupdatetime | String   | 15     |                    | `TSCTCupdatetime` | `54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65` |

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

</section>

<section class="cola-category" markdown="1">

## Filter

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Parameter [sRN MCSenseLevel]

</summary>

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN MCSenseLevel**

| Telegram part | Description  | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |
| ------------- | ------------ | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ |
| Command type  | Read         | String   | 3      |                    | `sRN`          | `73 52 4E`                            |
| Command       | MCSenseLevel | String   | 12     |                    | `MCSenseLevel` | `4D 43 53 65 6E 73 65 4C 65 76 65 6C` |

**Example: sRN MCSenseLevel**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}MCSenseLevel<ETX>
```

```text
<STX>sRN MCSenseLevel<ETX>
```

```text
sRN MCSenseLevel
```

```text
02 73 52 4E 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 52 4E 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 59
```

```text
73 52 4E 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C
```


**Example: sRA MCSenseLevel**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}MCSenseLevel{SPC}0<ETX>
```

```text
02 73 52 41 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 41 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 20 00 76
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Particle Filter [sWN LFPparticle]

</summary>

Filter out disturbances in the meausurement data caused by particles such as dust, snow flakes or similar .

**Telegram structure: sWN LFPparticle**

| Telegram part | Description              | Variable | Length | Additional details   | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                          |
| ------------- | ------------------------ | -------- | ------ | -------------------- | ------------------------------------------- | --------------------------------------------------------------- |
| Command type  | Write                    | String   | 3      |                      | `sWN`          | `73 57 4E`                         |
| Command       | Set particle filter      | String   | 11     |                      | `LFPparticle`  | `4C 46 50 70 61 72 74 69 63 6C 65` |
| Status code   | Code number              | Bool_1   | 1      | Inactive:<br>Active: | `0<br>1`       | `00<br>01`                         |
| Threshold1)   | Particle threshold in mm | Uint_16  | 2      | (must be taken)      | `+500d (1F4h)` | `01 F4`                            |

Never change the threshold here, it is taken by the device to handle the particles.

**Example: sWN LFPparticle**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LFPparticle{SPC}1{SPC}+500<ETX>
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

| Telegram part | Description         | Variable | Length | Sensor | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |
| ------------- | ------------------- | -------- | ------ | ------ | ------------------------------------------ | --------------------------------------------------------------- |
| Command type  | Answer              | String   | 3      |        | `sWA`         | `73 57 41`                         |
| Command       | Set particle filter | String   | 11     |        | `LFPparticle` | `4C 46 50 70 61 72 74 69 63 6C 65` |

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

Select which measurement value(s) shall be send via LMDscanata, if the meausrement of one angular position returns several distance values

**Telegram structure: sWN FREchoFilter**

| Telegram part | Description     | Variable | Length | Additional details                      | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |
| ------------- | --------------- | -------- | ------ | --------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------ |
| Command type  | Write           | String   | 3      |                                         | `sWN`          | `73 57 4E`                            |
| Command       | Set echo filter | String   | 12     |                                         | `FREchoFilter` | `46 52 45 63 68 6F 46 69 6C 74 65 72` |
| Status code   | Code number     | Enum_8   | 1      | First echo:<br>All echos:<br>Last echo: | `0<br>1<br>2`  | `00<br>01<br>02`                      |

**Example: sWN FREchoFilter**

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

| Telegram part | Description     | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |
| ------------- | --------------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ |
| Command type  | Answer          | String   | 3      |                    | `sWA`          | `73 57 41`                            |
| Command       | Set echo filter | String   | 12     |                    | `FREchoFilter` | `46 52 45 63 68 6F 46 69 6C 74 65 72` |

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

### Set Sensitivity Fog Filter [sWN MCSenseLevel]

</summary>

Filter out disturbances in the meausurement data caused by fog or steam.

**Telegram structure: sWN MCSenseLevel**

| Telegram part     | Description                                  | Variable | Length | Additional details              | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |
| ----------------- | -------------------------------------------- | -------- | ------ | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------ |
| Command type      | Write                                        | String   | 3      |                                 | `sWN`          | `73 57 4E`                            |
| Command           | Sense level                                  | String   | 12     |                                 | `MCSenseLevel` | `4D 43 53 65 6E 73 65 4C 65 76 65 6C` |
| Sensitivity level | Enable or disable fog filter and Sense Level | Uint_8   | 1      | Fog Filter off<br>Fog Filter on | `0<br>1`       | `00<br>01`                            |

**Example: sWN MCSenseLevel**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}MCSenseLevel{SPC}0<ETX>
```

```text
sWN MCSenseLevel 0
```

```text
02 73 57 4E 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 57 4E 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 20 00 7C
```

```text
73 57 4E 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 20 00
```


**Telegram structure: sWA MCSenseLevel**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |
| ------------- | ----------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ |
| Command type  | Answer      | String   | 3      |                    | `sWA`          | `73 57 41`                            |
| Command       | Sense level | String   | 12     |                    | `MCSenseLevel` | `4D 43 53 65 6E 73 65 4C 65 76 65 6C` |

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

| Telegram part   | Description                 | Variable | Length | Additional details   | Values CoLa A (ASCII)                                   | Values CoLa B (Binary)                                                                                 |
| --------------- | --------------------------- | -------- | ------ | -------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Command type    | Write                       | String   | 3      |                      | `sWN`                      | `73 57 4E`                                                                |
| Command         | String                      | String   | 24     |                      | `LFPmovingAveragingFilter` | `4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72` |
| Variable Data 1 | Moving averaging is enabled | Bool     | 1      | Off:<br>On:          | `0d (00h)<br>+1d (01h)`    | `00<br>01`                                                                |
| Variable Data 2 | averaging depth             | UInt     | 2      | Minimum:<br>Maximum: | `+2d (02h)<br>+4d (0Ah)`   | `00 02<br>00 04`                                                          |

Disable the moving average filter and set averaging depth to 3

**Example: sWN LFPmovingAveragingFilter**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LFPmovingAveragingFilter{SPC}0{SPC}3<ETX>
```

```text
sWN LFPmovingAveragingFilter 0 3
```

```text
02 73 57 4E 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 20 30 20 33 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 20 73 57 4E 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 20 00 00 03 41
```

```text
73 57 4E 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 20 00 00 03
```


**Telegram structure: sWA LFPmovingAveragingFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                                   | Values CoLa B (Binary)                                                                                 |
| ------------- | ----------- | -------- | ------ | ------------------ | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Command type  | Answer      | String   | 3      |                    | `sWA`                      | `73 57 41`                                                                |
| Command       | String      | String   | 24     |                    | `LFPmovingAveragingFilter` | `4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72` |

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

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Ground Filter [sWN groundFilterEnable]

</summary>

Enable ground-point exclusion for field evaluation and perpendicular-distance measurement (manual pages 149-151).

Requires Authorized client.

**Telegram structure: sWN groundFilterEnable**

| Telegram part | Description        | Variable | Length | Additional details | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                                               |
| ------------- | ------------------ | -------- | ------ | ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Command type  | Write              | String   | 3      |                    | `sWN`                | `73 57 4E`                                              |
| Command       | groundFilterEnable | String   | 18     |                    | `groundFilterEnable` | `67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65` |
| State         | Filter enabled     | Bool_1   | 1      | Disabled / enabled | `0 / 1`              | `00 / 01`                                               |

**Example: sWN groundFilterEnable**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}groundFilterEnable{SPC}1<ETX>
```

```text
sWN groundFilterEnable 1
```

```text
02 73 57 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 18 73 57 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65 20 01 6F
```

```text
73 57 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65 20 01
```


**Telegram structure: sWA groundFilterEnable**

| Telegram part | Description        | Variable | Length | Additional details | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                                               |
| ------------- | ------------------ | -------- | ------ | ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Command type  | Answer             | String   | 3      |                    | `sWA`                | `73 57 41`                                              |
| Command       | groundFilterEnable | String   | 18     |                    | `groundFilterEnable` | `67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65` |

**Example: sWA groundFilterEnable**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}groundFilterEnable<ETX>
```

```text
02 73 57 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 57 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65 20 61
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Ground Filter State [sRN groundFilterEnable]

</summary>

Read whether the ground filter is enabled.

**Telegram structure: sRN groundFilterEnable**

| Telegram part | Description        | Variable | Length | Additional details | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                                               |
| ------------- | ------------------ | -------- | ------ | ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Command type  | Read               | String   | 3      |                    | `sRN`                | `73 52 4E`                                              |
| Command       | groundFilterEnable | String   | 18     |                    | `groundFilterEnable` | `67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65` |

**Example: sRN groundFilterEnable**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}groundFilterEnable<ETX>
```

```text
<STX>sRN groundFilterEnable<ETX>
```

```text
sRN groundFilterEnable
```

```text
02 73 52 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 52 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65 4B
```

```text
73 52 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65
```


**Telegram structure: sRA groundFilterEnable**

| Telegram part | Description        | Variable | Length | Additional details | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                                               |
| ------------- | ------------------ | -------- | ------ | ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Command type  | Answer             | String   | 3      |                    | `sRA`                | `73 52 41`                                              |
| Command       | groundFilterEnable | String   | 18     |                    | `groundFilterEnable` | `67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65` |
| State         | Filter enabled     | Bool_1   | 1      | Disabled / enabled | `0 / 1`              | `00 / 01`                                               |

**Example: sRA groundFilterEnable**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}groundFilterEnable{SPC}0<ETX>
```

```text
02 73 52 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 18 73 52 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65 20 00 64
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Ground Filter Type [sRN groundFilterType]

</summary>

Read the ground-plane source (manual pages 151-152).

**Telegram structure: sRN groundFilterType**

| Telegram part | Description      | Variable | Length | Additional details | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                                                         |
| ------------- | ---------------- | -------- | ------ | ------------------ | ----------------------------------------------- | ------------------------------------------------------------------------------ |
| Command type  | Read             | String   | 3      |                    | `sRN`              | `73 52 4E`                                        |
| Command       | groundFilterType | String   | 16     |                    | `groundFilterType` | `67 72 6F 75 6E 64 46 69 6C 74 65 72 54 79 70 65` |

**Example: sRN groundFilterType**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}groundFilterType<ETX>
```

```text
<STX>sRN groundFilterType<ETX>
```

```text
sRN groundFilterType
```

```text
02 73 52 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 79 70 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 79 70 65 52
```

```text
73 52 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 79 70 65
```


**Telegram structure: sRA groundFilterType**

| Telegram part | Description         | Variable | Length | Additional details | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                                                         |
| ------------- | ------------------- | -------- | ------ | ------------------ | ----------------------------------------------- | ------------------------------------------------------------------------------ |
| Command type  | Answer              | String   | 3      |                    | `sRA`              | `73 52 41`                                        |
| Command       | groundFilterType    | String   | 16     |                    | `groundFilterType` | `67 72 6F 75 6E 64 46 69 6C 74 65 72 54 79 70 65` |
| Type          | Ground-plane source | Enum_8   | 1      | P3D / IMU          | `0 / 1`            | `00 / 01`                                         |

**Example: sRA groundFilterType**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}groundFilterType{SPC}0<ETX>
```

```text
02 73 52 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 79 70 65 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 52 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 79 70 65 20 00 7D
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Ground Filter Thresholds [sWN groundFilterThresholds]

</summary>

Set the minimum and maximum signed ground-plane distances in mm (manual pages 152-154). Both values are two-byte signed integers; the manual's Int_8 label is inconsistent with its length and bytes.

Requires Authorized client.

**Telegram structure: sWN groundFilterThresholds**

| Telegram part    | Description                             | Variable | Length | Additional details           | Values CoLa A (ASCII)                                 | Values CoLa B (Binary)                                                                           |
| ---------------- | --------------------------------------- | -------- | ------ | ---------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Command type     | Write                                   | String   | 3      |                              | `sWN`                    | `73 57 4E`                                                          |
| Command          | groundFilterThresholds                  | String   | 22     |                              | `groundFilterThresholds` | `67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73` |
| Minimum distance | Signed distance from ground plane in mm | Int_16   | 2      | -1000 to +1000; default -100 | `-100`                   | `FF 9C`                                                             |
| Maximum distance | Signed distance from ground plane in mm | Int_16   | 2      | -1000 to +1000; default +100 | `+100`                   | `00 64`                                                             |

**Example: sWN groundFilterThresholds**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}groundFilterThresholds{SPC}-50{SPC}+50<ETX>
```

```text
sWN groundFilterThresholds -50 +50
```

```text
02 73 57 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73 20 2D 35 30 20 2B 35 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 57 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73 20 FF CE 00 32 68
```

```text
73 57 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73 20 FF CE 00 32
```


**Telegram structure: sWA groundFilterThresholds**

| Telegram part | Description            | Variable | Length | Additional details | Values CoLa A (ASCII)                                 | Values CoLa B (Binary)                                                                           |
| ------------- | ---------------------- | -------- | ------ | ------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Command type  | Answer                 | String   | 3      |                    | `sWA`                    | `73 57 41`                                                          |
| Command       | groundFilterThresholds | String   | 22     |                    | `groundFilterThresholds` | `67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73` |

**Example: sWA groundFilterThresholds**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}groundFilterThresholds<ETX>
```

```text
02 73 57 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 57 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73 20 64
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Ground Filter Thresholds [sRN groundFilterThresholds]

</summary>

Read the signed ground-point distance limits in mm (manual pages 154-155).

**Telegram structure: sRN groundFilterThresholds**

| Telegram part | Description            | Variable | Length | Additional details | Values CoLa A (ASCII)                                 | Values CoLa B (Binary)                                                                           |
| ------------- | ---------------------- | -------- | ------ | ------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Command type  | Read                   | String   | 3      |                    | `sRN`                    | `73 52 4E`                                                          |
| Command       | groundFilterThresholds | String   | 22     |                    | `groundFilterThresholds` | `67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73` |

**Example: sRN groundFilterThresholds**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}groundFilterThresholds<ETX>
```

```text
<STX>sRN groundFilterThresholds<ETX>
```

```text
sRN groundFilterThresholds
```

```text
02 73 52 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1A 73 52 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73 4E
```

```text
73 52 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73
```


**Telegram structure: sRA groundFilterThresholds**

| Telegram part    | Description                             | Variable | Length | Additional details           | Values CoLa A (ASCII)                                 | Values CoLa B (Binary)                                                                           |
| ---------------- | --------------------------------------- | -------- | ------ | ---------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Command type     | Answer                                  | String   | 3      |                              | `sRA`                    | `73 52 41`                                                          |
| Command          | groundFilterThresholds                  | String   | 22     |                              | `groundFilterThresholds` | `67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73` |
| Minimum distance | Signed distance from ground plane in mm | Int_16   | 2      | -1000 to +1000; default -100 | `-100`                   | `FF 9C`                                                             |
| Maximum distance | Signed distance from ground plane in mm | Int_16   | 2      | -1000 to +1000; default +100 | `+100`                   | `00 64`                                                             |

**Example: sRA groundFilterThresholds**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}groundFilterThresholds{SPC}FF9C{SPC}64<ETX>
```

```text
02 73 52 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73 20 46 46 39 43 20 36 34 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 52 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73 20 FF 9C 00 64 66
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Parameter [sRN FREchoFilter]

</summary>

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN FREchoFilter**

| Telegram part | Description  | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |
| ------------- | ------------ | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ |
| Command type  | Read         | String   | 3      |                    | `sRN`          | `73 52 4E`                            |
| Command       | FREchoFilter | String   | 12     |                    | `FREchoFilter` | `46 52 45 63 68 6F 46 69 6C 74 65 72` |

**Example: sRN FREchoFilter**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}FREchoFilter<ETX>
```

```text
<STX>sRN FREchoFilter<ETX>
```

```text
sRN FREchoFilter
```

```text
02 73 52 4E 20 46 52 45 63 68 6F 46 69 6C 74 65 72 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 52 4E 20 46 52 45 63 68 6F 46 69 6C 74 65 72 5A
```

```text
73 52 4E 20 46 52 45 63 68 6F 46 69 6C 74 65 72
```


**Example: sRA FREchoFilter**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}FREchoFilter{SPC}1<ETX>
```

```text
02 73 52 41 20 46 52 45 63 68 6F 46 69 6C 74 65 72 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 41 20 46 52 45 63 68 6F 46 69 6C 74 65 72 20 01 74
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Parameter [sRN LFPmovingAveragingFilter]

</summary>

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN LFPmovingAveragingFilter**

| Telegram part | Description              | Variable | Length | Additional details | Values CoLa A (ASCII)                                   | Values CoLa B (Binary)                                                                                 |
| ------------- | ------------------------ | -------- | ------ | ------------------ | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Command type  | Read                     | String   | 3      |                    | `sRN`                      | `73 52 4E`                                                                |
| Command       | LFPmovingAveragingFilter | String   | 24     |                    | `LFPmovingAveragingFilter` | `4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72` |

**Example: sRN LFPmovingAveragingFilter**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LFPmovingAveragingFilter<ETX>
```

```text
<STX>sRN LFPmovingAveragingFilter<ETX>
```

```text
sRN LFPmovingAveragingFilter
```

```text
02 73 52 4E 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 52 4E 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 67
```

```text
73 52 4E 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72
```


**Example: sRA LFPmovingAveragingFilter**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LFPmovingAveragingFilter{SPC}0{SPC}3<ETX>
```

```text
02 73 52 41 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 20 30 20 33 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 20 73 52 41 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 20 00 00 03 4B
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Parameter [sRN LFPparticle]

</summary>

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN LFPparticle**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |
| ------------- | ----------- | -------- | ------ | ------------------ | ------------------------------------------ | --------------------------------------------------------------- |
| Command type  | Read        | String   | 3      |                    | `sRN`         | `73 52 4E`                         |
| Command       | LFPparticle | String   | 11     |                    | `LFPparticle` | `4C 46 50 70 61 72 74 69 63 6C 65` |

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

</section>

<section class="cola-category" markdown="1">

## Contamination Indication

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Contamination Indication Settings [sWN ContaminationConfig]

</summary>

Define how and under which conditions the device shall indicate a potential contamination of the optics cover to enable preventive cleaning.

**Telegram structure: sWN ContaminationConfig**

| Telegram part       | Description                                                                                | Variable | Length | Additional details                                                  | Values CoLa A (ASCII)                                                                                    | Values CoLa B (Binary)                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------ | -------- | ------ | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Command type        | Write                                                                                      | String   | 3      |                                                                     | `sWN`                                                                       | `73 57 4E`                                                                                |
| Command             |                                                                                            | String   | 19     |                                                                     | `ContaminationConfig`                                                       | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67`                                |
| Strategy            | Strategy code                                                                              | Enum_8   | 1      | No output:<br>All sectors contaminated:<br>One sector contaminated: | `0<br>1<br>2`                                                               | `00<br>01<br>02`                                                                          |
| Response time       | How fast (in seconds) the sensor reacts after a contamination                              | Uint_16  | 2      | Value range 3 ... 60<br>Default: 3                                  | `+3d … +60d (03h … 3Ch)`                                                    | `00 03 … 00 3C`                                                                           |
| Threshold warning   | Sensitivity                                                                                | Enum_8   | 1      | High:<br>Medium:<br>Low:                                            | `0<br>1<br>2`                                                               | `00<br>01<br>02`                                                                          |
| Sector preselection | Selection of either custom sectors or used weather protection hood                         | Enum_8   | 1      | All sectors:<br>Weather protection hood:<br>Custom sectors:         | `0<br>6<br>255d (FFh)`                                                      | `00<br>06<br>FF`                                                                          |
| Length              |                                                                                            | UInt_16  | 2      | Always:                                                             | `7`                                                                         | `07`                                                                                      |
| Custom sectors      | Enable/ disable individual sectors when custom sectors got selected in Sector preselection | Array    | 7      | Active: 1<br>Inactive: 0<br>Default value of all sectors is active  | `0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1` | `00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01` |
| Enable Warning      | Warning monitoring                                                                         | Bool_1   | 1      | Off (False):<br>On (True):                                          | `0<br>1`                                                                    | `00<br>01`                                                                                |
| Enable Error        | Error monitoring                                                                           | Bool_1   | 1      | Off (False):<br>On (True):                                          | `0<br>1`                                                                    | `00<br>01`                                                                                |

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

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |
| ------------- | ----------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Command type  | Answer      | String   | 3      |                    | `sWA`                 | `73 57 41`                                                 |
| Command       |             | String   | 19     |                    | `ContaminationConfig` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67` |

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

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |
| ------------- | ----------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Command type  | Read        | String   | 3      |                    | `sRN`                 | `73 52 4E`                                                 |
| Command       |             | String   | 19     |                    | `ContaminationConfig` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67` |

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

| Telegram part       | Description                                                                                | Variable | Length | Additional details                                                  | Values CoLa A (ASCII)                                                                                    | Values CoLa B (Binary)                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------ | -------- | ------ | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Command type        | Answer                                                                                     | String   | 3      |                                                                     | `sRA`                                                                       | `73 52 41`                                                                                |
| Command             |                                                                                            | String   | 19     |                                                                     | `ContaminationConfig`                                                       | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67`                                |
| Strategy            | Strategy code                                                                              | Enum_8   | 1      | No output:<br>All sectors contaminated:<br>One sector contaminated: | `0<br>1<br>2`                                                               | `00<br>01<br>02`                                                                          |
| Response time       | How fast (in seconds) the sensor reacts after a contamination                              | Uint_16  | 2      | Value range 3 ... 60<br>Default: 3                                  | `03h … 3Ch`                                                                 | `00 03 … 00 3C`                                                                           |
| Threshold warning   | Sensitivity                                                                                | Enum_8   | 1      | High:<br>Medium:<br>Low:                                            | `0<br>1<br>2`                                                               | `00<br>01<br>02`                                                                          |
| Sector preselection | Selection of either custom sectors or used weather protection hood                         | Enum_8   | 1      | All sectors:<br>Weather protection hood:<br>Custom sectors:         | `0<br>6<br>FF`                                                              | `00<br>06<br>FF`                                                                          |
| Length              |                                                                                            | Enum_8   | 1      | Always:                                                             | `7`                                                                         | `07`                                                                                      |
| Custom sectors      | Enable/ disable individual sectors when custom sectors got selected in Sector preselection | Array    | 7      | Active: 1<br>Inactive: 0<br>Default value of all sectors is active  | `0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1` | `00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01` |
| Enable Warning      | Warning monitoring                                                                         | Bool_1   | 1      | Off (False):<br>On (True):                                          | `0<br>1`                                                                    | `00<br>01`                                                                                |
| Enable Error        | Error monitoring                                                                           | Bool_1   | 1      | Off (False):<br>On (True):                                          | `0<br>1`                                                                    | `00<br>01`                                                                                |

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

### Send Contamination Indication Data Permanently [sEN ContaminationData]

</summary>

Provides continuous contamination indication data for the individual sectors of the optical cover. When a change in contamination is detected in any sector, the current contamination status of all sectors will be transmitted

**Telegram structure: sEN ContaminationData**

| Telegram part | Description                                        | Variable | Length | Additional details | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                            |
| ------------- | -------------------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------- |
| Command type  | Read                                               | String   | 3      |                    | `sEN`               | `73 45 4E`                                           |
| Command       | Get the contamination indication data continuously | String   | 17     |                    | `ContaminationData` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61` |
| Data          | Start/ Stop                                        | Bool_1   | 1      | Stop:<br>Start:    | `0<br>1`            | `00<br>01`                                           |

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

| Telegram part                   | Description                                        | Variable        | Length | Additional details                       | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                            |
| ------------------------------- | -------------------------------------------------- | --------------- | ------ | ---------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------- |
| Command type                    | Answer                                             | String          | 3      |                                          | `sSN`               | `73 53 4E`                                           |
| Command                         | Get the contamination indication data continuously | String          | 17     |                                          | `ContaminationData` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61` |
| Number of contamination sectors |                                                    | Uint_16         | 2      | Always:                                  | `7`                 | `00 07`                                              |
| Contamination data              | Status of contamination of each sector             | Array of Enum_8 | 7      | Blocked:<br>Clean:<br>Warning:<br>Error: | `0<br>1<br>2<br>3`  | `00<br>01<br>02<br>03`                               |

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Contamination Indication Result [sRN ContaminationResult]

</summary>

This telegram is intended to read the contamination result. The telegram returns two Boolean. One for warning and one for error. Depending on the strategy of the contamination indication the state changes if one or all sectors are in the specific status (warning or error).

**Telegram structure: sRN ContaminationResult**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |
| ------------- | ----------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Command type  | Read        | String   | 3      |                    | `sRN`                 | `73 52 4E`                                                 |
| Command       |             | String   | 19     |                    | `ContaminationResult` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74` |

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

| Telegram part        | Description | Variable | Length | Additional details     | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |
| -------------------- | ----------- | -------- | ------ | ---------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Command type         | Answer      | String   | 3      |                        | `sRA`                 | `73 52 41`                                                 |
| Command              |             | String   | 19     |                        | `ContaminationResult` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74` |
| Contamination Result | Warning     | Bool_1   | 1      | Not active:<br>Active: | `0<br>1`              | `00<br>01`                                                 |
| Contamination Result | Error       | Bool_1   | 1      | Not active:<br>Active: | `0<br>1`              | `00<br>01`                                                 |

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

### Send Contamination Indication Result Permanently [sEN ContaminationResult]

</summary>

This telegram is intended to activate the event for read the contamination result permanently. The telegram returns two Boolean. One for warning and one for error. Depending on the strategy of the contamination indication the state changes if one or all sectors are in the specific status (warning or error).

**Telegram structure: sEN ContaminationResult**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |
| ------------- | ----------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Command type  | Read        | String   | 3      |                    | `sEN`                 | `73 45 4E`                                                 |
| Command       |             | String   | 19     |                    | `ContaminationResult` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74` |
| Data          | Start/ Stop | Bool_1   | 1      | Stop:<br>Start:    | `0<br>1`              | `00<br>01`                                                 |

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

| Telegram part        | Description | Variable | Length | Additional details     | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                  |
| -------------------- | ----------- | -------- | ------ | ---------------------- | ------------------------------------- | --------------------------------------- |
| Command type         | Answer      | String   | 3      |                        | `sSN`    | `73 53 4E` |
| Contamination Result | Warning     | Bool_1   | 1      | Not active:<br>Active: | `0<br>1` | `00<br>01` |
| Contamination Result | Error       | Bool_1   | 1      | Not active:<br>Active: | `0<br>1` | `00<br>01` |

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

</section>

<section class="cola-category" markdown="1">

## Ethernet

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Parameter [sRN EIAddrMode]

</summary>

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN EIAddrMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                     | Values CoLa B (Binary)                                       |
| ------------- | ----------- | -------- | ------ | ------------------ | ----------------------------------------- | ------------------------------------------------------------ |
| Command type  | Read        | String   | 3      |                    | `sRN`        | `73 52 4E`                      |
| Command       | EIAddrMode  | String   | 10     |                    | `EIAddrMode` | `45 49 41 64 64 72 4D 6F 64 65` |

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

### Read Parameter [sRN EIDHCPFallback]

</summary>

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN EIDHCPFallback**

| Telegram part | Description    | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------- | -------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Read           | String   | 3      |                    | `sRN`            | `73 52 4E`                                  |
| Command       | EIDHCPFallback | String   | 14     |                    | `EIDHCPFallback` | `45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B` |

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

### Set IP Address [sWN EIIpAddr]

</summary>

Save permanently to set values. Changes will be active after rebooting the device. Settings must correspond with network in which scanner is used. Else device cannot be found any more.

**Telegram structure: sWN EIIpAddr**

| Telegram part | Description    | Variable | Length | Additional details        | Values CoLa A (ASCII)                               | Values CoLa B (Binary)                                 |
| ------------- | -------------- | -------- | ------ | ------------------------- | --------------------------------------------------- | ------------------------------------------------------ |
| Command type  | Write          | String   | 3      |                           | `sWN`                  | `73 57 4E`                |
| Command       | Set IP address | String   | 8      |                           | `EIIpAddr`             | `45 49 49 70 41 64 64 72` |
| IP address    | Set values     | Uint_8   | 1      | First part of IP address  | `0 …+255d (00 ... FF)` | `00 … FF`                 |
| IP address    | Set values     | Uint_8   | 1      | Second part of IP address | `0 …+255d (00 ... FF)` | `00 … FF`                 |
| IP address    | Set values     | Uint_8   | 1      | Third part of IP address  | `0 …+255d (00 ... FF)` | `00 … FF`                 |
| IP address    | Set values     | Uint_8   | 1      | Fourth part of IP address | `0 …+255d (00 ... FF)` | `00 … FF`                 |

**Example: sWN EIIpAddr**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EIIpAddr{SPC}C0{SPC}A8{SPC}0{SPC}1<ETX>
```

```text
sWN EIIpAddr C0 A8 0 1
```

```text
02 73 57 4E 20 45 49 49 70 41 64 64 72 20 43 30 20 41 38 20 30 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 57 4E 20 45 49 49 70 41 64 64 72 20 C0 A8 00 01 05
```

```text
73 57 4E 20 45 49 49 70 41 64 64 72 20 C0 A8 00 01
```


**Telegram structure: sWA EIIpAddr**

| Telegram part | Description    | Variable | Length | Additional details | Values CoLa A (ASCII)                   | Values CoLa B (Binary)                                 |
| ------------- | -------------- | -------- | ------ | ------------------ | --------------------------------------- | ------------------------------------------------------ |
| Command type  | Answer         | String   | 3      |                    | `sWA`      | `73 57 41`                |
| Command       | Set IP address | String   | 8      |                    | `EIIpAddr` | `45 49 49 70 41 64 64 72` |

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

| Telegram part | Description     | Variable | Length | Additional details | Values CoLa A (ASCII)                   | Values CoLa B (Binary)                                 |
| ------------- | --------------- | -------- | ------ | ------------------ | --------------------------------------- | ------------------------------------------------------ |
| Command type  | Read            | String   | 3      |                    | `sRN`      | `73 52 4E`                |
| Command       | Read IP address | String   | 8      |                    | `EIIpAddr` | `45 49 49 70 41 64 64 72` |

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

| Telegram part | Description          | Variable | Length | Additional details        | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                 |
| ------------- | -------------------- | -------- | ------ | ------------------------- | ------------------------------------------------- | ------------------------------------------------------ |
| Command type  | Answer               | String   | 3      |                           | `sRA`                | `73 52 41`                |
| Command       | Read IP address      | String   | 8      |                           | `EIIpAddr`           | `45 49 49 70 41 64 64 72` |
| IP address    | Default: 192.168.0.1 | Uint_8   | 1      | First part of IP address  | `0 …+255d (00 … FF)` | `00 … FF`                 |
| IP address    | Default: 192.168.0.1 | Uint_8   | 1      | Second part of IP address | `0 …+255d (00 … FF)` | `00 … FF`                 |
| IP address    | Default: 192.168.0.1 | Uint_8   | 1      | Third part of IP address  | `0 …+255d (00 … FF)` | `00 … FF`                 |
| IP address    | Default: 192.168.0.1 | Uint_8   | 1      | Fourth part of IP address | `0 …+255d (00 … FF)` | `00 … FF`                 |

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

DHCP needs to be set as mode for ethernet assignment.

**Telegram structure: sRN EIIpAddrDHCP**

| Telegram part | Description                      | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |
| ------------- | -------------------------------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ |
| Command type  | Read                             | String   | 3      |                    | `sRN`          | `73 52 4E`                            |
| Command       | Read IP address assigned by DHCP | String   | 12     |                    | `EIIpAddrDHCP` | `45 49 49 70 41 64 64 72 44 48 43 50` |

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

| Telegram part | Description                      | Variable | Length | Additional details        | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                             |
| ------------- | -------------------------------- | -------- | ------ | ------------------------- | ------------------------------------------------- | ------------------------------------------------------------------ |
| Command type  | Answer                           | String   | 3      |                           | `sRA`                | `73 52 41`                            |
| Command       | Read IP address assigned by DHCP | String   | 12     |                           | `EIIpAddrDHCP`       | `45 49 49 70 41 64 64 72 44 48 43 50` |
| IP address    | Default: 192.168.0.1             | Uint_8   | 1      | First part of IP address  | `0 …+255d (00 … FF)` | `00 … FF`                             |
| IP address    | Default: 192.168.0.1             | Uint_8   | 1      | Second part of IP address | `0 …+255d (00 … FF)` | `00 … FF`                             |
| IP address    | Default: 192.168.0.1             | Uint_8   | 1      | Third part of IP address  | `0 …+255d (00 … FF)` | `00 … FF`                             |
| IP address    | Default: 192.168.0.1             | Uint_8   | 1      | Fourth part of IP address | `0 …+255d (00 … FF)` | `00 … FF`                             |

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

This Command determines the mode for the ethernet address assignment.

**Telegram structure: sWN EIAddrMode**

| Telegram part               | Description                              | Variable | Length | Additional details | Values CoLa A (ASCII)                     | Values CoLa B (Binary)                                       |
| --------------------------- | ---------------------------------------- | -------- | ------ | ------------------ | ----------------------------------------- | ------------------------------------------------------------ |
| Command type                | Write                                    | String   | 3      |                    | `sWN`        | `73 57 4E`                      |
| Command                     | Set mode for ethernet address assignment | String   | 10     |                    | `EIAddrMode` | `45 49 41 64 64 72 4D 6F 64 65` |
| Ethernet address assignment | Static IP address / DHCP                 | Enum_8   | 1      | Static:<br>DHCP:   | `0<br>1`     | `00<br>01`                      |

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

| Telegram part | Description                              | Variable | Length | Additional details | Values CoLa A (ASCII)                     | Values CoLa B (Binary)                                       |
| ------------- | ---------------------------------------- | -------- | ------ | ------------------ | ----------------------------------------- | ------------------------------------------------------------ |
| Command type  | Answer                                   | String   | 3      |                    | `sWA`        | `73 57 41`                      |
| Command       | Set mode for ethernet address assignment | String   | 10     |                    | `EIAddrMode` | `45 49 41 64 64 72 4D 6F 64 65` |

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

| Telegram part                        | Description                        | Variable | Length | Additional details                | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------------------------------ | ---------------------------------- | -------- | ------ | --------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type                         | Write                              | String   | 3      |                                   | `sWN`            | `73 57 4E`                                  |
| Command                              | Set fallback for DHCP              | String   | 14     |                                   | `EIDHCPFallback` | `45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B` |
| Fallback ethernet address assignment | Use Static IP address / Retry DHCP | Enum_8   | 1      | Static IP address:<br>DHCP retry: | `0<br>1`         | `00<br>01`                                  |

**Example: sWN EIDHCPFallback**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EIDHCPFallback{SPC}0<ETX>
```

```text
sWN EIDHCPFallback 0
```

```text
02 73 57 4E 20 45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 57 4E 20 45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B 20 00 55
```

```text
73 57 4E 20 45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B 20 00
```


**Telegram structure: sWA EIDHCPFallback**

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------- | --------------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Answer                | String   | 3      |                    | `sWA`            | `73 57 41`                                  |
| Command       | Set fallback for DHCP | String   | 14     |                    | `EIDHCPFallback` | `45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B` |

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

| Telegram part   | Description         | Variable | Length | Additional details             | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                           |
| --------------- | ------------------- | -------- | ------ | ------------------------------ | ----------------------------------------------- | ------------------------------------------------ |
| Command type    | Write               | String   | 3      |                                | `sWN`              | `73 57 4E`          |
| Command         | Set gateway address | String   | 6      |                                | `EIgate`           | `45 49 67 61 74 65` |
| Gateway address | Set values          | Uint_8   | 1      | First part of gateway address  | `0 …+255d (00…FF)` | `00 …FF`            |
| Gateway address | Set values          | Uint_8   | 1      | Second part of gateway address | `0 …+255d (00…FF)` | `00 …FF`            |
| Gateway address | Set values          | Uint_8   | 1      | Third part of gateway address  | `0 …+255d (00…FF)` | `00 …FF`            |
| Gateway address | Set values          | Uint_8   | 1      | Fourth part of gateway address | `0 …+255d (00…FF)` | `00 …FF`            |

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

| Telegram part | Description         | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |
| ------------- | ------------------- | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ |
| Command type  | Answer              | String   | 3      |                    | `sWA`    | `73 57 41`          |
| Command       | Set gateway address | String   | 6      |                    | `EIgate` | `45 49 67 61 74 65` |

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

| Telegram part | Description          | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |
| ------------- | -------------------- | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ |
| Command type  | Read                 | String   | 3      |                    | `sRN`    | `73 52 4E`          |
| Command       | Read gateway address | String   | 6      |                    | `EIgate` | `45 49 67 61 74 65` |

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

| Telegram part   | Description          | Variable | Length | Additional details             | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                           |
| --------------- | -------------------- | -------- | ------ | ------------------------------ | ----------------------------------------------- | ------------------------------------------------ |
| Command type    | Answer               | String   | 3      |                                | `sRA`              | `73 52 41`          |
| Command         | Read gateway address | String   | 6      |                                | `EIgate`           | `45 49 67 61 74 65` |
| Gateway address | Default: 0.0.0.0     | Uint_8   | 1      | First part of gateway address  | `0 …+255d (00…FF)` | `00 … FF`           |
| Gateway address | Default: 0.0.0.0     | Uint_8   | 1      | Second part of gateway address | `0 …+255d (00…FF)` | `00 … FF`           |
| Gateway address | Default: 0.0.0.0     | Uint_8   | 1      | Third part of gateway address  | `0 …+255d (00…FF)` | `00 … FF`           |
| Gateway address | Default: 0.0.0.0     | Uint_8   | 1      | Fourth part of gateway address | `0 …+255d (00…FF)` | `00 … FF`           |

**Example: sRA EIgate**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EIgate{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 45 49 67 61 74 65 20 30 20 30 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 41 20 45 49 67 61 74 65 20 00 00 00 00 7B
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Ethernet Gateway IP Address Assigned by DHCP [sRN EIgateDHCP]

</summary>

DHCP needs to be set as mode for ethernet assignment.

Read for the ethernet gateway IP address which was assigned by DHCP.

**Telegram structure: sRN EIgateDHCP**

| Telegram part | Description                                       | Variable | Length | Additional details | Values CoLa A (ASCII)                     | Values CoLa B (Binary)                                       |
| ------------- | ------------------------------------------------- | -------- | ------ | ------------------ | ----------------------------------------- | ------------------------------------------------------------ |
| Command type  | Read                                              | String   | 3      |                    | `sRN`        | `73 52 4E`                      |
| Command       | Read ethernet gateway IP address assigned by DHCP | String   | 10     |                    | `EIgateDHCP` | `45 49 67 61 74 65 44 48 43 50` |

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

| Telegram part      | Description                                       | Variable | Length | Additional details                | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                                       |
| ------------------ | ------------------------------------------------- | -------- | ------ | --------------------------------- | ----------------------------------------------- | ------------------------------------------------------------ |
| Command type       | Answer                                            | String   | 3      |                                   | `sRA`              | `73 52 41`                      |
| Command            | Read ethernet gateway IP address assigned by DHCP | String   | 10     |                                   | `EIgateDHCP`       | `45 49 67 61 74 65 44 48 43 50` |
| Gateway IP address | Default: 0.0.0.0                                  | Uint_8   | 1      | First part of gateway IP address  | `0 …+255d (00…FF)` | `00 … FF`                       |
| Gateway IP address | Default: 0.0.0.0                                  | Uint_8   | 1      | Second part of gateway IP address | `0 …+255d (00…FF)` | `00 … FF`                       |
| Gateway IP address | Default: 0.0.0.0                                  | Uint_8   | 1      | Third part of gateway IP address  | `0 …+255d (00…FF)` | `00 … FF`                       |
| Gateway IP address | Default: 0.0.0.0                                  | Uint_8   | 1      | Fourth part of gateway IP address | `0 …+255d (00…FF)` | `00 … FF`                       |

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

Define the subnet mask of the device.

Save permanently to set values. Changes will be active after rebooting the device. Settings must correspond with network in which scanner is used. Else device cannot be found any more.

**Telegram structure: sWN EImask**

| Telegram part | Description | Variable | Length | Additional details     | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                           |
| ------------- | ----------- | -------- | ------ | ---------------------- | ----------------------------------------------- | ------------------------------------------------ |
| Command type  | Write       | String   | 3      |                        | `sWN`              | `73 57 4E`          |
| Command       | Set IP mask | String   | 6      |                        | `EImask`           | `45 49 6D 61 73 6B` |
| IP mask       | Set values  | Uint_8   | 1      | First part of IP mask  | `0 …+255d (00…FF)` | `00 …FF`            |
| IP mask       | Set values  | Uint_8   | 1      | Second part of IP mask | `0 …+255d (00…FF)` | `00 …FF`            |
| IP mask       | Set values  | Uint_8   | 1      | Third part of IP mask  | `0 …+255d (00…FF)` | `00 …FF`            |
| IP mask       | Set values  | Uint_8   | 1      | Fourth part of IP mask | `0 …+255d (00…FF)` | `00 …FF`            |

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

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |
| ------------- | ----------- | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ |
| Command type  | Answer      | String   | 3      |                    | `sWA`    | `73 57 41`          |
| Command       | Set IP mask | String   | 6      |                    | `EImask` | `45 49 6D 61 73 6B` |

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

| Telegram part | Description  | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |
| ------------- | ------------ | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ |
| Command type  | Read         | String   | 3      |                    | `sRN`    | `73 52 4E`          |
| Command       | Read IP mask | String   | 6      |                    | `EImask` | `45 49 6D 61 73 6B` |

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

| Telegram part | Description            | Variable | Length | Sensor                 | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                           |
| ------------- | ---------------------- | -------- | ------ | ---------------------- | ----------------------------------------------- | ------------------------------------------------ |
| Command type  | Answer                 | String   | 3      |                        | `sRA`              | `73 52 41`          |
| Command       | Read IP mask           | String   | 6      |                        | `EImask`           | `45 49 6D 61 73 6B` |
| IP mask       | Default: 255.255.255.0 | Uint_8   | 1      | First part of IP mask  | `0 …+255d (00…FF)` | `00 … FF`           |
| IP mask       | Default: 255.255.255.0 | Uint_8   | 1      | Second part of IP mask | `0 …+255d (00…FF)` | `00 … FF`           |
| IP mask       | Default: 255.255.255.0 | Uint_8   | 1      | Third part of IP mask  | `0 …+255d (00…FF)` | `00 … FF`           |
| IP mask       | Default: 255.255.255.0 | Uint_8   | 1      | Fourth part of IP mask | `0 …+255d (00…FF)` | `00 … FF`           |

**Example: sRA EImask**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EImask{SPC}FF{SPC}FF{SPC}FF{SPC}0<ETX>
```

```text
02 73 52 41 20 45 49 6D 61 73 6B 20 46 46 20 46 46 20 46 46 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 41 20 45 49 6D 61 73 6B 20 FF FF FF 00 87
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read IP Mask Assigned by DHCP [sRN EImaskDHCP]

</summary>

DHCP needs to be set as mode for ethernet assignment.

Read for the IP mask which was assigned by DHCP.

**Telegram structure: sRN EImaskDHCP**

| Telegram part | Description                   | Variable | Length | Additional details | Values CoLa A (ASCII)                     | Values CoLa B (Binary)                                       |
| ------------- | ----------------------------- | -------- | ------ | ------------------ | ----------------------------------------- | ------------------------------------------------------------ |
| Command type  | Read                          | String   | 3      |                    | `sRN`        | `73 52 4E`                      |
| Command       | Read IP mask assigned by DHCP | String   | 10     |                    | `EImaskDHCP` | `45 49 6D 61 73 6B 44 48 43 50` |

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

| Telegram part | Description                   | Variable | Length | Additional details     | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                                       |
| ------------- | ----------------------------- | -------- | ------ | ---------------------- | ----------------------------------------------- | ------------------------------------------------------------ |
| Command type  | Answer                        | String   | 3      |                        | `sRA`              | `73 52 41`                      |
| Command       | Read IP mask assigned by DHCP | String   | 10     |                        | `EImaskDHCP`       | `45 49 6D 61 73 6B 44 48 43 50` |
| IP mask       | Default: 255.255.255.0        | Uint_8   | 1      | First part of IP mask  | `0 …+255d (00…FF)` | `00 … FF`                       |
| IP mask       | Default: 255.255.255.0        | Uint_8   | 1      | Second part of IP mask | `0 …+255d (00…FF)` | `00 … FF`                       |
| IP mask       | Default: 255.255.255.0        | Uint_8   | 1      | Third part of IP mask  | `0 …+255d (00…FF)` | `00 … FF`                       |
| IP mask       | Default: 255.255.255.0        | Uint_8   | 1      | Fourth part of IP mask | `0 …+255d (00…FF)` | `00 … FF`                       |

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

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read MAC Address [sRN EIMacAdr]

</summary>

Read the MAC address of the device.

**Telegram structure: sRN EIMacAdr**

| Telegram part | Description                    | Variable | Length | Additional details | Values CoLa A (ASCII)                   | Values CoLa B (Binary)                                 |
| ------------- | ------------------------------ | -------- | ------ | ------------------ | --------------------------------------- | ------------------------------------------------------ |
| Command type  | Read                           | String   | 3      |                    | `sRN`      | `73 52 4E`                |
| Command       | Read MAC address of the device | String   | 8      |                    | `EIMacAdr` | `45 49 4D 61 63 41 64 72` |

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

| Telegram part | Description                    | Variable | Length | Additional details         | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                                 |
| ------------- | ------------------------------ | -------- | ------ | -------------------------- | ----------------------------------------------- | ------------------------------------------------------ |
| Command type  | Answer                         | String   | 3      |                            | `sRA`              | `73 52 41`                |
| Command       | Read MAC address of the device | String   | 8      |                            | `EIMacAdr`         | `45 49 4D 61 63 41 64 72` |
| MAC address   | Values                         | Uint_8   | 1      | First part of MAC address  | `0 …+255d (00…FF)` | `00 … FF`                 |
| MAC address   | Values                         | Uint_8   | 1      | Second part of MAC address | `0 …+255d (00…FF)` | `00 … FF`                 |
| MAC address   | Values                         | Uint_8   | 1      | Third part of MAC address  | `0 …+255d (00…FF)` | `00 … FF`                 |
| MAC address   | Values                         | Uint_8   | 1      | Fourth part of MAC address | `0 …+255d (00…FF)` | `00 … FF`                 |
| MAC address   | Values                         | Uint_8   | 1      | Fifth part of MAC address  | `0 …+255d (00…FF)` | `00 … FF`                 |
| MAC address   | Values                         | Uint_8   | 1      | Sixth part of MAC address  | `0 …+255d (00…FF)` | `00 … FF`                 |

**Example: sRA EIMacAdr**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EIMacAdr{SPC}0{SPC}6{SPC}77{SPC}5A{SPC}CF{SPC}E2<ETX>
```

```text
02 73 52 41 20 45 49 4D 61 63 41 64 72 20 30 20 36 20 37 37 20 35 41 20 43 46 20 45 32 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 41 20 45 49 4D 61 63 41 64 72 20 00 06 77 5A CF E2 72
```

</details>

</section>

<section class="cola-category" markdown="1">

## Legacy Protocols

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Parameter [sRN EIAuxEnable]

</summary>

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN EIAuxEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |
| ------------- | ----------- | -------- | ------ | ------------------ | ------------------------------------------ | --------------------------------------------------------------- |
| Command type  | Read        | String   | 3      |                    | `sRN`         | `73 52 4E`                         |
| Command       | EIAuxEnable | String   | 11     |                    | `EIAuxEnable` | `45 49 41 75 78 45 6E 61 62 6C 65` |

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

### Set Device Search Mode [sWN EtherCoLaScanMode]

</summary>

This command configures the Auto IP functionalities (Device search by SICK Enginnering Tools) and the changeability of the IP address. The functionality can reduces the number of open ports to a minimum.

**Telegram structure: sWN EtherCoLaScanMode**

| Telegram part                      | Description                            | Variable | Length | Additional details                                                                                                                                                                     | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                            |
| ---------------------------------- | -------------------------------------- | -------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------- |
| Command type                       | Write                                  | String   | 3      |                                                                                                                                                                                        | `sWN`               | `73 57 4E`                                           |
| Command                            | Set CoLa Scan / AutoIP search settings | String   | 17     |                                                                                                                                                                                        | `EtherCoLaScanMode` | `45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65` |
| CoLa Scan / AutoIP search settings | Choose setting                         | Uint_8   | 1      | IP address can be found/changed without login:<br>IP address can be found/ changed with login:<br>Disable the Auto IP search/ IP change:<br>IP address can be found/changed for 1 min: | `0<br>1<br>2<br>3`  | `00<br>01<br>02<br>03`                               |

**Example: sWN EtherCoLaScanMode**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EtherCoLaScanMode{SPC}3<ETX>
```

```text
sWN EtherCoLaScanMode 3
```

```text
02 73 57 4E 20 45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65 20 33 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 57 4E 20 45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65 20 03 3A
```

```text
73 57 4E 20 45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65 20 03
```


**Telegram structure: sWA EtherCoLaScanMode**

| Telegram part | Description                            | Variable | Length | Additional details | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                            |
| ------------- | -------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------- |
| Command type  | Answer                                 | String   | 3      |                    | `sWA`               | `73 57 41`                                           |
| Command       | Set CoLa Scan / AutoIP search settings | String   | 17     |                    | `EtherCoLaScanMode` | `45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65` |

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

| Telegram part | Description                             | Variable | Length | Additional details | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                            |
| ------------- | --------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------- |
| Command type  | Write                                   | String   | 3      |                    | `sRN`               | `73 52 4E`                                           |
| Command       | Read CoLa Scan / AutoIP search settings | String   | 17     |                    | `EtherCoLaScanMode` | `45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65` |

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

| Telegram part                      | Description                             | Variable | Length | Additional details                                                                                                                                                                     | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                            |
| ---------------------------------- | --------------------------------------- | -------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------- |
| Command type                       | Answer                                  | String   | 3      |                                                                                                                                                                                        | `sRA`               | `73 52 41`                                           |
| Command                            | Read CoLa Scan / AutoIP search settings | String   | 17     |                                                                                                                                                                                        | `EtherCoLaScanMode` | `45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65` |
| CoLa Scan / AutoIP search settings | Poll setting                            | Uint_8   | 1      | IP address can be found/changed without login:<br>IP address can be found/ changed with login:<br>Auto IP search/ IP change is disabled:<br>IP address can be found/changed for 1 min: | `0<br>1<br>2<br>3`  | `00<br>01<br>02<br>03`                               |

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

### Enable/ Disable CoLa1 Interface [sWN EIAuxEnable]

</summary>

After enabling the CoLa1 interface, use port 2111 for CoLa A and port 2112 for CoLa B.

**Telegram structure: sWN EIAuxEnable**

| Telegram part   | Description         | Variable | Length | Additional details  | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |
| --------------- | ------------------- | -------- | ------ | ------------------- | ------------------------------------------ | --------------------------------------------------------------- |
| Command type    | Write               | String   | 3      |                     | `sWN`         | `73 57 4E`                         |
| Command         | Set CoLa1 interface | String   | 11     |                     | `EIAuxEnable` | `45 49 41 75 78 45 6E 61 62 6C 65` |
| CoLa1 interface | Enable/ disable     | Bool_1   | 1      | Disable:<br>Enable: | `0<br>1`      | `00<br>01`                         |

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

| Telegram part | Description         | Variable | Length | Additional details | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |
| ------------- | ------------------- | -------- | ------ | ------------------ | ------------------------------------------ | --------------------------------------------------------------- |
| Command type  | Answer              | String   | 3      |                    | `sWA`         | `73 57 41`                         |
| Command       | Set CoLa1 interface | String   | 11     |                    | `EIAuxEnable` | `45 49 41 75 78 45 6E 61 62 6C 65` |

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

</section>

<section class="cola-category" markdown="1">

## Webserver Settings

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Webserver State [sMN SetWebserverEnabled]

</summary>

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

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Webserver State [sMN GetWebserverEnabled]

</summary>

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

| Telegram part | Description                | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |
| ------------- | -------------------------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ |
| Command type  | Read                       | String   | 3      |                    | `sRN`          | `73 52 4E`                            |
| Command       | Ask for port configuration | String   | 12     |                    | `LIDportstate` | `4C 49 44 70 6F 72 74 73 74 61 74 65` |

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

| Telegram part                                                            | Description                                                                      | Variable | Length | Additional details                                                                                                                                                                                                      | Values CoLa A (ASCII)                                          | Values CoLa B (Binary)                                             |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | -------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------ |
| Command type                                                             | Answer                                                                           | String   | 3      |                                                                                                                                                                                                                         | `sRA`                             | `73 52 41`                            |
| Command                                                                  | Port state                                                                       | String   | 12     |                                                                                                                                                                                                                         | `LIDportstate`                    | `4C 49 44 70 6F 72 74 73 74 61 74 65` |
| Status code                                                              | Version number                                                                   | Uint_16  | 2      | Current version:                                                                                                                                                                                                        | `0 … FFFFh<br>0`                  | `00 01 … FF FF`                       |
| Status code                                                              | System counter (time in µs since power up max. 71min then starting from 0 again) | Uint_32  | 4      |                                                                                                                                                                                                                         | `0 … FFFFFFFFh`                   | `00 00 00 00 … FF FF FF FF`           |
| ARRAY which defines the number of internal ports*                        | 0...n                                                                            | Uint_16  | 2      | Hex:<br>Not available:<br>Number of ports:                                                                                                                                                                              | `0000 - FFFF<br>00<br>01 ... n`   | `00 00 - FF FF`                       |
| State of the ports and count value in hex                                | Internal port state                                                              | Enum_8   | 1      | Output voltage low:(Relays open)<br>Output voltage high:(Relays closed)<br>Tri-state:<br>Input voltage high (level):Input voltage from low to high (edge)<br>Input voltage low (level):Input voltage high to low (edge) | `00<br>01<br>02<br>03<br>04`      | `00<br>01<br>02<br>03<br>04`          |
| State of the ports and count value in hex                                | Internal port counter                                                            | Uint_32  | 4      |                                                                                                                                                                                                                         | `0 … FFFFFFFFh`                   | `00 00 00 00 … FF FF FF FF`           |
|                                                                          | ….                                                                               |          |        |                                                                                                                                                                                                                         |                                                                |                                                                    |
| ARRAY which defines the number of external or virtual ports*             | 0...n                                                                            | Uint_16  | 1      | Hex:<br>Not available:<br>Number of ports:                                                                                                                                                                              | `00 00 - FF FF<br>00<br>01 ... n` | `00 00 - FF FF`                       |
| State of the ports and count value in hex                                | External port state                                                              | Enum_8   | 1      | Output voltage low:(Relays open)<br>Output voltage high:(Relays closed)<br>Tri-state:<br>Input voltage high (level):Input voltage from low to high (edge)<br>Input voltage low (level):Input voltage high to low (edge) | `00<br>01<br>02<br>03<br>04`      | `00<br>01<br>02<br>03<br>04`          |
| State of the ports and count value in hex                                | External port counter                                                            | Uint_32  | 4      |                                                                                                                                                                                                                         | `0 … FFFFFFFFh`                   | `00 00 00 00 … FF FF FF FF`           |
| Time                                                                     | States code                                                                      | Enum_16  | 1      | No time data:<br>Time data:                                                                                                                                                                                             | `00 00<br>00 01`                  | `00 00<br>00 01`                      |
| Time Block (sensor time from the last change of min. one of the outputs) | Year                                                                             | Array    | 2      | E.g.                                                                                                                                                                                                                    | `1970`                            | `07 B2`                               |
| Time Block (sensor time from the last change of min. one of the outputs) | Month                                                                            | Array    | 1      |                                                                                                                                                                                                                         | `1 … 12`                          | `01 … 0C`                             |
| Time Block (sensor time from the last change of min. one of the outputs) | Day                                                                              | Array    | 1      |                                                                                                                                                                                                                         | `1 … 31`                          | `01 … 1F`                             |
| Time Block (sensor time from the last change of min. one of the outputs) | Hour                                                                             | Array    | 1      |                                                                                                                                                                                                                         | `0 … 23`                          | `00 … 17`                             |
| Time Block (sensor time from the last change of min. one of the outputs) | Minute                                                                           | Array    | 1      |                                                                                                                                                                                                                         | `0 … 59`                          | `00 … 3B`                             |
| Time Block (sensor time from the last change of min. one of the outputs) | Second                                                                           | Array    | 1      |                                                                                                                                                                                                                         | `0 … 59`                          | `00 … 3B`                             |
| Time Block (sensor time from the last change of min. one of the outputs) | Microsecond                                                                      | Array    | 4      |                                                                                                                                                                                                                         | `0 … 999999`                      | `00 00 00 00 … 00 0F 42 3F`           |

Inputs/outputs: If the device has separate inputs and outputs (instead of general purpose ports) the ARRAY shall start with inputs followed by the outputs.

Virtual ports are ports that can be used to expand the number of ports but are not physically available. They just show up in the corresponding ethernet telegrams (like LIDportstate).

Tri-State: Port is neither input nor output; the port is set inactive in SOPAS

**Example: sRA LIDportstate**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LIDportstate{SPC}0{SPC}A56D1F0{SPC}1{SPC}0{SPC}1{SPC}1{SPC}4{SPC}0{SPC}4{SPC}0{SPC}3{SPC}0{SPC}4{SPC}0{SPC}1{SPC}1{SPC}1{SPC}1{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}1{SPC}7B2{SPC}1{SPC}1{SPC}0{SPC}2{SPC}35{SPC}70CB0<ETX>
```

```text
02 73 52 41 20 4C 49 44 70 6F 72 74 73 74 61 74 65 20 30 20 41 35 36 44 31 46 30 20 31 20 30 20 31 20 31 20 34 20 30 20 34 20 30 20 33 20 30 20 34 20 30 20 31 20 31 20 31 20 31 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 31 20 37 42 32 20 31 20 31 20 30 20 32 20 33 35 20 37 30 43 42 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 74 73 52 41 20 4C 49 44 70 6F 72 74 73 74 61 74 65 20 00 00 0A 56 D1 F0 01 00 00 00 00 01 00 00 00 01 04 00 00 00 00 04 00 00 00 00 03 00 00 00 00 04 00 00 00 00 01 00 00 00 01 01 00 00 00 01 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 00 01 07 B2 01 01 00 02 35 00 07 0C B0 0C
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Port Configuration of All I/Os [sRN PortConfiguration]

</summary>

Read the configuration of the digital inputs and outputs.

**Telegram structure: sRN PortConfiguration**

| Telegram part | Description                | Variable | Length | Additional details | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                            |
| ------------- | -------------------------- | -------- | ------ | ------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------- |
| Command type  | Read                       | String   | 3      |                    | `sRN`               | `73 52 4E`                                           |
| Command       | Ask for port configuration | String   | 17     |                    | `PortConfiguration` | `50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |

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

| Telegram part                                                                                         | Description                                                                | Variable | Length                             | Additional details                                                                                                                                | Values CoLa A (ASCII)                                                           | Values CoLa B (Binary)                                                            |
| ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Command type                                                                                          | Answer                                                                     | String   | 3                                  |                                                                                                                                                   | `sRA`                                              | `73 52 41`                                           |
| Command                                                                                               | Configuration of all I/Os                                                  | String   | 17                                 |                                                                                                                                                   | `PortConfiguration`                                | `50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |
| Start of loop, number of loops = amount of all current and future Inputs and Outputs of device family |                                                                            |          |                                    |                                                                                                                                                   |                                                                                 |                                                                                   |
| Port Type                                                                                             | Input or Output                                                            | Enum_8   | 1                                  | Input:<br>Output:                                                                                                                                 | `0<br>1`                                           | `00<br>01`                                           |
| Port Name                                                                                             | Amount of characters of the following port name                            | Uint_16  | 2                                  |                                                                                                                                                   | `0h … 20h`                                         | `00 00 … 00 20`                                      |
| Port Name                                                                                             | Port name                                                                  | String   | 16<br>(depending on string length) |                                                                                                                                                   | `[Port name]`                                      | `[Port name]`                                        |
| Input Settings                                                                                        |                                                                            |          |                                    |                                                                                                                                                   |                                                                                 |                                                                                   |
| Logic                                                                                                 | Logic of the input                                                         | Bool_1   | 1                                  | Active high:<br>Active low:                                                                                                                       | `0<br>1`                                           | `00<br>01`                                           |
| Debouncing                                                                                            | Select debouncing time in ms                                               | Uint_16  | 2                                  | (max. 10,000ms)                                                                                                                                   | `0h … 2710h`                                       | `00 00 … 27 10`                                      |
| Reserved                                                                                              | -                                                                          | Enum_8   | 1                                  | Always:                                                                                                                                           | `0`                                                | `00`                                                 |
| Reserved                                                                                              | Reserved value 1                                                           | Uint_16  | 2                                  |                                                                                                                                                   | `0`                                                | `00 00`                                              |
| Reserved                                                                                              | Reserved value 2                                                           | Uint_16  | 2                                  |                                                                                                                                                   | `0`                                                | `00 00`                                              |
| Output Settings                                                                                       |                                                                            |          |                                    |                                                                                                                                                   |                                                                                 |                                                                                   |
| Logic                                                                                                 | Logic of the input                                                         | Bool_1   | 1                                  | Active high:<br>Active low:                                                                                                                       | `0<br>1`                                           | `00<br>01`                                           |
| Output Mode                                                                                           | PNP, NPN or Push-Pull                                                      | Enum_8   | 1                                  | PNP:<br>NPN:<br>Push-Pull:                                                                                                                        | `0<br>1<br>2`                                      | `00<br>01<br>02`                                     |
| Restart type                                                                                          | Restart behavior of output after event: immediately or after specific time | Enum_8   | 1                                  | Immediately:<br>Time:<br>Input:                                                                                                                   | `0<br>1<br>2`                                      | `00<br>01<br>02`                                     |
| Restart time                                                                                          | [Only with restart type = Time], time in ms                                | Uint_32  | 4                                  | (20 ms … 600,000 ms)                                                                                                                              | `14h … 927C0h`                                     | `00 00 00 14 … 00 09 27 C0`                          |
| Restart input                                                                                         | [Only with restart type = Input], input for restart                        | Uint_16  | 2                                  |                                                                                                                                                   | `1 ... 8`                                          | `00 01 ... 00 08`                                    |
| Combination                                                                                           | Combining multiple Events and/or Inputs                                    | Enum_8   | 1                                  | AND:<br>OR:<br>XOR:                                                                                                                               | `0<br>1<br>2`                                      | `00<br>01<br>02`                                     |
| Reserved                                                                                              | Reserved value 3                                                           | Uint_16  | 2                                  |                                                                                                                                                   | `0`                                                | `00 00`                                              |
| Reserved                                                                                              | Reserved value 4                                                           | Uint_16  | 2                                  |                                                                                                                                                   | `0`                                                | `00 00`                                              |
| Sources                                                                                               | Amount (n) of combined sources                                             | Uint_16  | 2                                  |                                                                                                                                                   | `0h ... FFFFh`                                     | `00 00 ... FF FF`                                    |
| Sources                                                                                               | Start of source loop, number of loops = amount of combined sources         |          |                                    |                                                                                                                                                   |                                                                                 |                                                                                   |
| Sources                                                                                               | Source name                                                                | String   | 4                                  | Device Ready:<br>Sopas Command:(xx = Number of output port)<br>Indexsignal:<br>SyncOutByClock:<br>Input = Port Name:(INxx = Number of input port) | `[Source]<br>DRDY<br>SCxx<br>SROT<br>SCLK<br>INxx` | `[Source]`                                           |
| Sources                                                                                               | Source Inverted or not                                                     | Bool_1   | 1                                  | Not inverted:<br>Inverted:                                                                                                                        | `0<br>1`                                           | `00<br>01`                                           |
| Sources                                                                                               | Reserved value 5                                                           | Uint_8   | 1                                  |                                                                                                                                                   | `0`                                                | `00`                                                 |
| Sources                                                                                               | Reserved value 6                                                           | Uint_8   | 1                                  |                                                                                                                                                   | `0`                                                | `00`                                                 |
| Sources                                                                                               | Stop of source loop                                                        |          |                                    |                                                                                                                                                   |                                                                                 |                                                                                   |
| Reserved                                                                                              | Reserved value 7                                                           | Uint_16  | 2                                  |                                                                                                                                                   | `0`                                                | `00 00`                                              |
| Reserved                                                                                              | Reserved value 8                                                           | Uint_16  | 2                                  |                                                                                                                                                   | `0`                                                | `00 00`                                              |
| Reserved                                                                                              | Reserved value 9                                                           | Uint_16  | 2                                  |                                                                                                                                                   | `0`                                                | `00 00`                                              |
| Reserved                                                                                              | Reserved value 10                                                          | Uint_16  | 2                                  |                                                                                                                                                   | `0`                                                | `00 00`                                              |
| Stop of loop                                                                                          |                                                                            |          |                                    |                                                                                                                                                   |                                                                                 |                                                                                   |

**Example: sRA PortConfiguration**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}PortConfiguration{SPC}1{SPC}6{SPC}InOut1{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}2{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}FE01{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}6{SPC}InOut2{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}1{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut3{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut4{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut5{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut6{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}6{SPC}InOut7{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}1{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}6{SPC}InOut8{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}1{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 31 20 36 20 49 6E 4F 75 74 31 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 32 20 44 52 44 59 20 30 20 30 20 30 20 46 45 30 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 31 20 36 20 49 6E 4F 75 74 32 20 30 20 41 20 31 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 31 20 44 52 44 59 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 36 20 49 6E 4F 75 74 33 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 36 20 49 6E 4F 75 74 34 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 36 20 49 6E 4F 75 74 35 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 36 20 49 6E 4F 75 74 36 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 31 20 36 20 49 6E 4F 75 74 37 20 30 20 41 20 31 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 31 20 44 52 44 59 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 31 20 36 20 49 6E 4F 75 74 38 20 30 20 41 20 31 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 31 20 44 52 44 59 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 01 81 73 52 41 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 01 00 06 49 6E 4F 75 74 31 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 02 44 52 44 59 00 00 00 46 45 30 31 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 32 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 33 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 34 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 35 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 36 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 37 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 38 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 01
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Port Configuration [sWN PortConfiguration]

</summary>

Configuration of the given ports. Telegram structure represents the configuration of 1 port.

If the device has multiple ports, use the same structure.

**Telegram structure: sWN PortConfiguration**

| Telegram part   | Description                                                          | Variable   | Length       | Additional details                                     | Values CoLa A (ASCII)                                           | Values CoLa B (Binary)                                                                  |
| --------------- | -------------------------------------------------------------------- | ---------- | ------------ | ------------------------------------------------------ | --------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Command type    | Write                                                                | String     | 3            |                                                        | `sWN`                              | `73 57 4E`                                                 |
| Command         | Configuration of the given ports                                     | String     | 17           |                                                        | `PortConfiguration`                | `50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E`       |
| Port Type       | Input or Output                                                      | Enum_8     | 1            | Input:<br>Output:                                      | `+0d (0h)<br>+1d (1h)`             | `00<br>01`                                                 |
| Name            | Name of the port                                                     | FlexString | 9<br>(0..32) | Default:                                               | `InOut1`                           | `00 06 49 6E 4F 75 74 31 00`                               |
| Input Settings  |                                                                      |            |              |                                                        |                                                                 |                                                                                         |
| Logic           | Logic of the input                                                   | Enum_8     | 1            | Active high:<br>Active low:                            | `+0d (0h)<br>+1d (1h)`             | `00<br>01`                                                 |
| Debounce        | Select debouncing time in ms                                         | Uint_16    | 2            | 0 to 10000 ms                                          | `0 ... 2710`                       | `00 00 ... 27 10`                                          |
| Sensitivity     | Input sensitivity                                                    | Enum_8     | 1            |                                                        | `1`                                | `01`                                                       |
| Reserved1       |                                                                      | Uint_16    | 2            |                                                        | `+0d (0h)`                         | `00 00`                                                    |
| Reserved2       |                                                                      | Uint_16    | 2            |                                                        | `+0d (0h)`                         | `00 00`                                                    |
| Output Settings |                                                                      |            |              |                                                        |                                                                 |                                                                                         |
| Logic           | Definition of the output logic                                       | Enum_8     | 1            | Active high:<br>Active low:                            | `+0d (0h)<br>+1d (1h)`             | `00<br>01`                                                 |
| Output Mode     | Set kind of mode for output pin                                      | Enum_8     | 1            | PNP:<br>NPN:<br>Push-Pull:                             | `0<br>1<br>2`                      | `00<br>01<br>02`                                           |
| Restart Type    | Defines type of restart to be used                                   | Enum_8     | 1            | Immediately:<br>Time:                                  | `+0d (0h)<br>+1d (1h)`             | `00<br>01`                                                 |
| Restart Time    | [Only with restart type = Time], time in ms                          | Uint_32    | 4            | (20 ms … 600,000 ms)                                   | `+20d … +600000d (C8h ... 927C0h)` | `00 00 00 00 … 00 09 27 C0`                                |
| Restart Input   | [Only with restart type = Input], input for restart                  | Uint_16    | 2            |                                                        | `+1d ... +8d (1h ... 8h)`          | `00 00 … 00 08`                                            |
| Combination     | Combining multiple Events and/or Inputs                              | Enum_8     | 1            | AND:<br>OR:<br>XOR:                                    | `+0d (0h)<br>+1d (1h)<br>+2d (2h)` |                                                                                         |
| Reserved        | Reserved value 3                                                     | Uint_16    | 2            |                                                        | `+0d (0h)`                         | `00 00`                                                    |
| Reserved        | Reserved value 4                                                     | Uint_16    | 2            |                                                        | `+0d (0h)`                         | `00 00`                                                    |
|                 | Source                                                               |            |              |                                                        |                                                                 |                                                                                         |
| Source          | The source parameter are only existing if the port is set to OUTPUT! |            | 2            |                                                        | `+1d (1h)`                         | `00 01`                                                    |
| Source Name     | Name of the source option                                            | String     | 4            | DeviceNotReady:<br>Input1:<br>Input2:<br>SopasCommand: | `DRDY<br>IN01<br>IN02<br>SC01`     | `44 52 44 59<br>49 4E 30 31<br>49 4E 30 32<br>53 43 30 31` |
| Invert          | Invert the source signal                                             | Bool_1     | 1            | Not inverted:<br>Inverted:                             | `+0d (0h)<br>+1d (1h)`             | `00<br>01`                                                 |
| Reserved        | Reserved value 5                                                     | Uint_8     | 1            |                                                        | `+0d (0h)`                         | `00`                                                       |
| Reserved        | Reserved value 6                                                     | Uint_8     | 1            |                                                        | `+0d (0h)`                         | `00`                                                       |
| Reserved        |                                                                      |            |              |                                                        |                                                                 |                                                                                         |
| Reserved        | Reserved value 7                                                     | Uint_16    | 2            |                                                        | `+0d (0h)`                         | `00 00`                                                    |
| Reserved        | Reserved value 8                                                     | Uint_16    | 2            |                                                        | `+0d (0h)`                         | `00 00`                                                    |
| Reserved        | Reserved value 9                                                     | Uint_16    | 2            |                                                        | `+0d (0h)`                         | `00 00`                                                    |
| Reserved        | Reserved value 10                                                    | Uint_16    | 2            |                                                        | `+0d (0h)`                         | `00 00`                                                    |

**Example: sWN PortConfiguration**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}PortConfiguration{SPC}1{SPC}6{SPC}InOut1{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}2{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}FE01{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}6{SPC}InOut2{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}1{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut3{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut4{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut5{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut6{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}6{SPC}InOut7{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}1{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}6{SPC}InOut8{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}1{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
sWN PortConfiguration 1 6 InOut1 0 A 1 0 0 0 0 0 C8 1 1 0 0 2 DRDY 0 0 0 FE01 0 0 0 0 0 0 0 1 6 InOut2 0 A 1 0 0 1 0 0 C8 1 1 0 0 1 DRDY 0 0 0 0 0 0 0 0 6 InOut3 0 A 1 0 0 0 0 0 C8 1 1 0 0 0 0 0 0 0 0 6 InOut4 0 A 1 0 0 0 0 0 C8 1 1 0 0 0 0 0 0 0 0 6 InOut5 0 A 1 0 0 0 0 0 C8 1 1 0 0 0 0 0 0 0 0 6 InOut6 0 A 1 0 0 0 0 0 C8 1 1 0 0 0 0 0 0 0 1 6 InOut7 0 A 1 0 0 1 0 0 C8 1 1 0 0 1 DRDY 0 0 0 0 0 0 0 1 6 InOut8 0 A 1 0 0 1 0 0 C8 1 1 0 0 1 DRDY 0 0 0 0 0 0 0
```

```text
02 73 57 4E 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 31 20 36 20 49 6E 4F 75 74 31 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 32 20 44 52 44 59 20 30 20 30 20 30 20 46 45 30 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 31 20 36 20 49 6E 4F 75 74 32 20 30 20 41 20 31 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 31 20 44 52 44 59 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 36 20 49 6E 4F 75 74 33 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 36 20 49 6E 4F 75 74 34 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 36 20 49 6E 4F 75 74 35 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 36 20 49 6E 4F 75 74 36 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 31 20 36 20 49 6E 4F 75 74 37 20 30 20 41 20 31 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 31 20 44 52 44 59 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 31 20 36 20 49 6E 4F 75 74 38 20 30 20 41 20 31 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 31 20 44 52 44 59 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 01 81 73 57 4E 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 01 00 06 49 6E 4F 75 74 31 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 02 44 52 44 59 00 00 00 46 45 30 31 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 32 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 33 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 34 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 35 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 36 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 37 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 38 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 0B
```

```text
73 57 4E 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 01 00 06 49 6E 4F 75 74 31 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 02 44 52 44 59 00 00 00 46 45 30 31 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 32 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 33 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 34 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 35 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 36 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 37 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 38 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00
```


**Telegram structure: sWA PortConfiguration**

| Telegram part | Description                      | Variable | Length | Additional details | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                            |
| ------------- | -------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------- |
| Command type  | Answer                           | String   | 3      |                    | `sWA`               | `73 57 41`                                           |
| Command       | Configuration of the given ports | String   | 17     |                    | `PortConfiguration` | `50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |

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

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |
| ------------- | ----------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- |
| Command type  | Read        | String   | 3      |                    | `sRN`           | `73 52 4E`                               |
| Command       | Input state | String   | 13     |                    | `LIDinputstate` | `4C 49 44 69 6E 70 75 74 73 74 61 74 65` |

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

| Telegram part                                                               | Description                                                                         | Variable | Length | Additional details                        | Values CoLa A (ASCII)                          | Values CoLa B (Binary)                                                |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------- | ------ | ----------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------- |
| Command type                                                                | Answer                                                                              | String   | 3      |                                           | `sRA`             | `73 52 41`                               |
| Command                                                                     | Output state                                                                        | String   | 13     |                                           | `LIDinputstate`   | `4C 49 44 69 6E 70 75 74 73 74 61 74 65` |
| Status code                                                                 | Version number                                                                      | Uint_16  | 2      |                                           | `0h … FFFFh`      | `00 00 … FF FF`                          |
| Status code                                                                 | System counter<br>(time in µs since power up max. 71min then starting from 0 again) | Uint_32  | 4      |                                           | `0 h … FFFFFFFFh` | `00 00 00 00 … FF FF FF FF`              |
| State of the inputs 1 … n                                                   | Amount of inputs (n) depending of device family                                     | Enum_8   | 1      | Not active:<br>Active:<br>Input not used: | `0<br>1<br>2`     | `00<br>01<br>02`                         |
| Time                                                                        | States code                                                                         | Uint_16  | 2      | No time data:<br>Time data:               | `0<br>1`          | `00 00<br>00 01`                         |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Year                                                                                | Array    | 2      | E. g.                                     | `1970`            | `07 B2`                                  |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Month                                                                               | Array    | 1      |                                           | `1 … 12`          | `01 … 0C`                                |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Day                                                                                 | Array    | 1      |                                           | `1 … 31`          | `01 … 1F`                                |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Hour                                                                                | Array    | 1      |                                           | `0 … 23`          | `00 … 17`                                |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Minute                                                                              | Array    | 1      |                                           | `0 … 59`          | `00 … 3B`                                |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Second                                                                              | Array    | 1      |                                           | `0 … 59`          | `00 … 3B`                                |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Microsecond                                                                         | Array    | 4      |                                           | `0 … 999999`      | `00 00 00 00 … 00 0F 42 3F`              |

**Example: sRA LIDinputstate**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LIDinputstate{SPC}1{SPC}A56CE08{SPC}2{SPC}2{SPC}0{SPC}0{SPC}1{SPC}0{SPC}2{SPC}2{SPC}1{SPC}7B2{SPC}1{SPC}1{SPC}0{SPC}2{SPC}35{SPC}708C8<ETX>
```

```text
02 73 52 41 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 31 20 41 35 36 43 45 30 38 20 32 20 32 20 30 20 30 20 31 20 30 20 32 20 32 20 31 20 37 42 32 20 31 20 31 20 30 20 32 20 33 35 20 37 30 38 43 38 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2D 73 52 41 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 00 01 0A 56 CE 08 02 02 00 00 01 00 02 02 00 01 07 B2 01 01 00 02 35 00 07 08 C8 FE
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Receive Input State by Event [sEN LIDinputstate]

</summary>

Receive an event when an input state changes. Use `0` to disable the subscription.

**Telegram structure: sEN LIDinputstate**

| Telegram part | Description        | Variable | Length | Additional details  | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |
| ------------- | ------------------ | -------- | ------ | ------------------- | -------------------------------------------- | --------------------------------------------------------------------- |
| Command type  | Event subscription | String   | 3      |                     | `sEN`           | `73 45 4E`                               |
| Command       | Input state        | String   | 13     |                     | `LIDinputstate` | `4C 49 44 69 6E 70 75 74 73 74 61 74 65` |
| State         | Subscription state | Bool_1   | 1      | Disable:<br>Enable: | `0<br>1`        | `00<br>01`                               |

**Example: sEN LIDinputstate**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}LIDinputstate{SPC}1<ETX>
```

```text
sEN LIDinputstate 1
```

```text
02 73 45 4E 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 45 4E 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 01 39
```

```text
73 45 4E 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 01
```


**Example: sEA LIDinputstate**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}LIDinputstate{SPC}1<ETX>
```

```text
02 73 45 41 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 45 41 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 01 36
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read State of the Outputs [sRN LIDoutputstate]

</summary>

Status of all outputs

**Telegram structure: sRN LIDoutputstate**

| Telegram part | Description  | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------- | ------------ | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Read         | String   | 3      |                    | `sRN`            | `73 52 4E`                                  |
| Command       | Output state | String   | 14     |                    | `LIDoutputstate` | `4C 49 44 6F 75 74 70 75 74 73 74 61 74 65` |

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

| Telegram part                               | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| ------------------------------------------- | ----------- | -------- | ------ | ------------------ | --------------------- | ---------------------- |
| Complete telegram structure of the answer . |             |          |        |                    |                       |                        |

**Example: sRA LIDoutputstate**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LIDoutputstate{SPC}1{SPC}A56D1F0{SPC}1{SPC}0{SPC}1{SPC}1{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}7B2{SPC}1{SPC}1{SPC}0{SPC}2{SPC}35{SPC}70CB0<ETX>
```

```text
02 73 52 41 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 31 20 41 35 36 44 31 46 30 20 31 20 30 20 31 20 31 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 31 20 31 20 31 20 31 20 31 20 37 42 32 20 31 20 31 20 30 20 32 20 33 35 20 37 30 43 42 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4E 73 52 41 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 00 01 0A 56 D1 F0 01 00 00 00 00 01 00 00 00 01 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 01 00 00 00 01 01 00 00 00 01 00 01 07 B2 01 01 00 02 35 00 07 0C B0 0C
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Receive Outputstate by Event [sEN LIDoutputstate]

</summary>

Output telegram is sent every time an output state changes.

**Telegram structure: sEN LIDoutputstate**

| Telegram part | Description  | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------- | ------------ | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Event        | String   | 3      |                    | `sEN`            | `73 45 4E`                                  |
| Command       | Output state | String   | 14     |                    | `LIDoutputstate` | `4C 49 44 6F 75 74 70 75 74 73 74 61 74 65` |
|               | Start/stop   | Enum_8   | 1      | Start:<br>Stop:    | `1<br>0`         | `01<br>00`                                  |

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

| Telegram part                                                                                                                   | Description                                                                         | Variable | Length | Additional details                         | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------- | ------ | ------------------------------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type                                                                                                                    | Answer                                                                              | String   | 3      |                                            | `sRA / sSN`      | `73 52 41 / 73 53 4E`                       |
| Command                                                                                                                         | Output state                                                                        | String   | 14     |                                            | `LIDoutputstate` | `4C 49 44 6F 75 74 70 75 74 73 74 61 74 65` |
| Status code                                                                                                                     | Version number                                                                      | Uint_16  | 2      |                                            | `0h … FFFFh`     | `00 00 … FF FF`                             |
| Status code                                                                                                                     | System counter<br>(time in µs since power up max. 71min then starting from 0 again) | Uint_32  | 4      |                                            | `0h … FFFFFFFFh` | `00 00 00 00 … FF FF FF FF`                 |
| State of the outputs 1 ... n and count value in hex. (values of an example)<br>Amount of outputs (n) depending of device family | Output 1 ... n state                                                                | Enum_8   | 1      | Not active:<br>Active:<br>Output not used: | `0<br>1<br>2`    | `00<br>01<br>02`                            |
| State of the outputs 1 ... n and count value in hex. (values of an example)<br>Amount of outputs (n) depending of device family | Output 1 ... n count                                                                | Uint_32  | 4      |                                            | `0h … FFFFFFFFh` | `00 00 00 00 … FF FF FF FF`                 |
| Time                                                                                                                            | States code                                                                         | Uint_16  | 2      | No time data:<br>Time data:                | `0<br>1`         | `00 00<br>00 01`                            |
| Time Block<br>(sensor-time from the last change of min. one of the outputs)                                                     | Year                                                                                | Array    | 2      | E. g.                                      | `1970`           | `07 B2`                                     |
| Time Block<br>(sensor-time from the last change of min. one of the outputs)                                                     | Month                                                                               | Array    | 1      |                                            | `1 … 12`         | `01 … 0C`                                   |
| Time Block<br>(sensor-time from the last change of min. one of the outputs)                                                     | Day                                                                                 | Array    | 1      |                                            | `1 … 31`         | `01 … 1F`                                   |
| Time Block<br>(sensor-time from the last change of min. one of the outputs)                                                     | Hour                                                                                | Array    | 1      |                                            | `0 … 23`         | `00 … 17`                                   |
| Time Block<br>(sensor-time from the last change of min. one of the outputs)                                                     | Minute                                                                              | Array    | 1      |                                            | `0 … 59`         | `00 … 3B`                                   |
| Time Block<br>(sensor-time from the last change of min. one of the outputs)                                                     | Second                                                                              | Array    | 1      |                                            | `0 … 59`         | `00 … 3B`                                   |
| Time Block<br>(sensor-time from the last change of min. one of the outputs)                                                     | Microsecond                                                                         | Array    | 4      |                                            | `0 … 999999`     | `00 00 00 00 … 00 0F 42 3F`                 |

**Example: sSN LIDoutputstate**

**CoLa A (ASCII)**

```text
<STX>sSN{SPC}LIDoutputstate{SPC}1{SPC}70D6F68{SPC}0{SPC}1{SPC}1{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}1{SPC}0{SPC}1{SPC}0{SPC}1{SPC}7EA{SPC}A{SPC}6{SPC}9{SPC}1A{SPC}2{SPC}1CCF0<ETX>
```

```text
02 73 53 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 31 20 37 30 44 36 46 36 38 20 30 20 31 20 31 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 31 20 30 20 31 20 30 20 31 20 37 45 41 20 41 20 36 20 39 20 31 41 20 32 20 31 43 43 46 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4E 73 53 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 00 01 07 14 F5 30 00 00 00 00 02 01 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 01 00 00 00 00 01 00 00 00 00 00 01 07 EA 0A 06 09 1A 02 00 09 52 B8 81
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Output State [sMN mDOSetOutput]

</summary>

Set a specific output to high or low via software command.

Output source needs to be set to "SOPAS command" and the port configured as Output (in case of I/O).

**Telegram structure: sMN mDOSetOutput**

| Telegram part | Description      | Variable | Length | Additional details      | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                             |
| ------------- | ---------------- | -------- | ------ | ----------------------- | --------------------------------------------- | ------------------------------------------------------------------ |
| Command type  | Method           | String   | 3      |                         | `sMN`            | `73 4D 4E`                            |
| Command       | Set output state | String   | 12     |                         | `mDOSetOutput`   | `6D 44 4F 53 65 74 4F 75 74 70 75 74` |
| Output number |                  | Uint_8   | 1      | Depends on system plug: | `1 … 3<br>1 … 6` | `01 … 03<br>01 … 06`                  |
| Output state  |                  | Enum_8   | 1      | Not active:<br>Active:  | `0<br>1`         | `00<br>01`                            |

**Example: sMN mDOSetOutput**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}mDOSetOutput{SPC}1{SPC}1<ETX>
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

| Telegram part | Description      | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |
| ------------- | ---------------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ |
| Command type  | Answer           | String   | 3      |                    | `sAN`          | `73 41 4E`                            |
| Command       | Set output state | String   | 12     |                    | `mDOSetOutput` | `6D 44 4F 53 65 74 4F 75 74 70 75 74` |
| Status Code   | Status code      | Bool_1   | 1      | Error:<br>Success: | `0<br>1`       | `00<br>01`                            |

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

| Telegram part | Description          | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |
| ------------- | -------------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- |
| Command type  | Method               | String   | 3      |                    | `sMN`           | `73 4D 4E`                               |
| Command       | Reset output counter | String   | 13     |                    | `LIDrstoutpcnt` | `4C 49 44 72 73 74 6F 75 74 70 63 6E 74` |

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

| Telegram part | Description          | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |
| ------------- | -------------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- |
| Command type  | Answer               | String   | 3      |                    | `sAN`           | `73 41 4E`                               |
| Command       | Reset output counter | String   | 13     |                    | `LIDrstoutpcnt` | `4C 49 44 72 73 74 6F 75 74 70 63 6E 74` |
| Status code   | Code number          | Bool_1   | 1      | Success:<br>Error: | `0<br>1`        | `00<br>01`                               |

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

</section>

<section class="cola-category" markdown="1">

## Measurement Data Output

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Configure Scan Output Angles [sWN LMPoutputRange]

</summary>

Select the scan output start and stop angles (manual pages 124-126). Angular resolution is taken from the scan configuration. This example uses 0.5 degree and -90 to +90 degrees.

Requires Authorized client.

**Telegram structure: sWN LMPoutputRange**

| Telegram part      | Description             | Variable | Length | Additional details                             | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                   |
| ------------------ | ----------------------- | -------- | ------ | ---------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------ |
| Command type       | Write                   | String   | 3      |                                                | `sWN`                 | `73 57 4E`                                  |
| Command            | LMPoutputRange          | String   | 14     |                                                | `LMPoutputRange`      | `4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65` |
| Reserved           | Single output range     | Int_16   | 2      | Always 1                                       | `1`                   | `00 01`                                     |
| Angular resolution | Units of 1/10000 degree | Uint_32  | 4      | Read from scan configuration; not changed here | `1388 (0.5 degree)`   | `00 00 13 88`                               |
| Start angle        | Units of 1/10000 degree | Int_32   | 4      | -180 to +180 degrees                           | `FFE488C0 ... 1B7740` | `FF E4 88 C0 ... 00 1B 77 40`               |
| Stop angle         | Units of 1/10000 degree | Int_32   | 4      | -180 to +180 degrees                           | `FFE488C0 ... 1B7740` | `FF E4 88 C0 ... 00 1B 77 40`               |

**Example: sWN LMPoutputRange**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LMPoutputRange{SPC}1{SPC}1388{SPC}FFF24460{SPC}DBBA0<ETX>
```

```text
sWN LMPoutputRange 1 1388 FFF24460 DBBA0
```

```text
02 73 57 4E 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 20 31 20 31 33 38 38 20 46 46 46 32 34 34 36 30 20 44 42 42 41 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 21 73 57 4E 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 20 00 01 00 00 13 88 FF F2 44 60 00 0D BB A0 DE
```

```text
73 57 4E 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 20 00 01 00 00 13 88 FF F2 44 60 00 0D BB A0
```


**Telegram structure: sWA LMPoutputRange**

| Telegram part | Description    | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------- | -------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Answer         | String   | 3      |                    | `sWA`            | `73 57 41`                                  |
| Command       | LMPoutputRange | String   | 14     |                    | `LMPoutputRange` | `4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65` |

**Example: sWA LMPoutputRange**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LMPoutputRange<ETX>
```

```text
02 73 57 41 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 41 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 20 74
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Scan Output Angles [sRN LMPoutputRange]

</summary>

Read the active output range. The example shows 0.5 degree angular resolution and an output range of -180 to +180 degrees.

**Telegram structure: sRN LMPoutputRange**

| Telegram part | Description    | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------- | -------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Read           | String   | 3      |                    | `sRN`            | `73 52 4E`                                  |
| Command       | LMPoutputRange | String   | 14     |                    | `LMPoutputRange` | `4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65` |

**Example: sRN LMPoutputRange**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LMPoutputRange<ETX>
```

```text
<STX>sRN LMPoutputRange<ETX>
```

```text
sRN LMPoutputRange
```

```text
02 73 52 4E 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 4E 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 5E
```

```text
73 52 4E 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65
```


**Telegram structure: sRA LMPoutputRange**

| Telegram part      | Description             | Variable | Length | Additional details                             | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                   |
| ------------------ | ----------------------- | -------- | ------ | ---------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------ |
| Command type       | Answer                  | String   | 3      |                                                | `sRA`                 | `73 52 41`                                  |
| Command            | LMPoutputRange          | String   | 14     |                                                | `LMPoutputRange`      | `4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65` |
| Reserved           | Single output range     | Int_16   | 2      | Always 1                                       | `1`                   | `00 01`                                     |
| Angular resolution | Units of 1/10000 degree | Uint_32  | 4      | Read from scan configuration; not changed here | `1388 (0.5 degree)`   | `00 00 13 88`                               |
| Start angle        | Units of 1/10000 degree | Int_32   | 4      | -180 to +180 degrees                           | `FFE488C0 ... 1B7740` | `FF E4 88 C0 ... 00 1B 77 40`               |
| Stop angle         | Units of 1/10000 degree | Int_32   | 4      | -180 to +180 degrees                           | `FFE488C0 ... 1B7740` | `FF E4 88 C0 ... 00 1B 77 40`               |

**Example: sRA LMPoutputRange**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LMPoutputRange{SPC}1{SPC}1388{SPC}FFE488C0{SPC}1B7740<ETX>
```

```text
02 73 52 41 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 20 31 20 31 33 38 38 20 46 46 45 34 38 38 43 30 20 31 42 37 37 34 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 21 73 52 41 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 20 00 01 00 00 13 88 FF E4 88 C0 00 1B 77 40 94
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Scan Data Enable [sWN ScanDataEnable]

</summary>

Enables/ Disables streaming data output

**Telegram structure: sWN ScanDataEnable**

| Telegram part | Description                              | Variable | Length | Additional details | Values CoLa A (ASCII)                                | Values CoLa B (Binary)                                                   |
| ------------- | ---------------------------------------- | -------- | ------ | ------------------ | ---------------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Write                                    | String   | 3      |                    | `sWN`                   | `73 57 4E`                                  |
| Command       | Enables/ Disables streaming data output. | String   | 14     |                    | `ScanDataEnable`        | `53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65` |
| Data          |                                          | Bool     | 1      | Off:<br>On:        | `0d (00h)<br>+1d (01h)` | `00 ... 01`                                 |

**Example: sWN ScanDataEnable**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}ScanDataEnable{SPC}0<ETX>
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

| Telegram part | Description                              | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------- | ---------------------------------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Answer                                   | String   | 3      |                    | `sWA`            | `73 57 41`                                  |
| Command       | Enables/ Disables streaming data output. | String   | 14     |                    | `ScanDataEnable` | `53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65` |

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

| Telegram part | Description                                     | Variable | Length | Additional details | Values CoLa A (ASCII)                                                                                        | Values CoLa B (Binary)                                                                  |
| ------------- | ----------------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| Command type  | Write                                           | String   | 3      |                    | `sWN`                                                                           | `73 57 4E`                                                 |
| Command       | String                                          | String   | 19     |                    | `ScanDataEthSettings`                                                           | `53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |
| Protocol      | Transport protocol for streaming data           | Enum_8   | 1      | UDP (fix):         | `+1d (01h)`                                                                     | `01`                                                       |
| IPAddress     | IP address of the destination for data receiver | Array    | 4      |                    | `0 …+255d (00…FF)<br>0 …+255d (00..FF)<br>0 …+255d (00…FF)<br>0 …+255d (00…FF)` | `00 … FF<br>00 … FF<br>00 … FF<br>00 … FF`                 |
| Port          | Port destination of the data reseiver           | Uint_16  | 2      |                    | `0 .. +65535d(00 00…FF FF)`                                                     | `00 00 … FF FF`                                            |

Example: sWN ScanDataEthSettings +1 +192 +168 +0 +100 +2115

Protocol is set to UDP (1), IPAddress (192.168.0.100), Port (2115)

**Example: sWN ScanDataEthSettings**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}ScanDataEthSettings{SPC}1{SPC}C0{SPC}A8{SPC}0{SPC}64{SPC}843<ETX>
```

```text
sWN ScanDataEthSettings 1 C0 A8 0 64 843
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

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |
| ------------- | ----------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Command type  | Answer      | String   | 3      |                    | `sWA`                 | `73 57 41`                                                 |
| Command       | String      | String   | 19     |                    | `ScanDataEthSettings` | `53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |

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

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |
| ------------- | ----------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Command type  | Read        | String   | 3      |                    | `sRN`                 | `73 52 4E`                                                 |
| Command       | String      | String   | 19     |                    | `ScanDataEthSettings` | `53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |

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

| Telegram part | Description                                     | Variable | Length | Additional details | Values CoLa A (ASCII)                                                                                        | Values CoLa B (Binary)                                                                  |
| ------------- | ----------------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| Command type  | Answer                                          | String   | 3      |                    | `sRA`                                                                           | `73 52 41`                                                 |
| Command       | String                                          | String   | 19     |                    | `ScanDataEthSettings`                                                           | `53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |
| Protocol      | Transport protocol for streaming data           | Enum_8   | 1      | UDP:<br>TCP:       | `+1d (01h)<br>+2d (02h)`                                                        | `01<br>02`                                                 |
| IPAddress     | IP address of the destination for data receiver | Array    | 4      |                    | `0 …+255d (00…FF)<br>0 …+255d (00..FF)<br>0 …+255d (00…FF)<br>0 …+255d (00…FF)` | `00 … FF<br>00 … FF<br>00 … FF<br>00 … FF`                 |
| Port          | Port destination of the data receiver           | Uint_16  | 2      |                    | `0 .. +65535d(00 00…FF FF)`                                                     | `00 00 … FF FF`                                            |

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

| Telegram part | Description               | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------- | ------------------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Read                      | String   | 3      |                    | `sRN`            | `73 52 4E`                                  |
| Command       | Data serialization format | String   | 14     |                    | `ScanDataFormat` | `53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74` |

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

| Telegram part | Description               | Variable | Length | Additional details                                                                                                   | Values CoLa A (ASCII)                               | Values CoLa B (Binary)                                                   |
| ------------- | ------------------------- | -------- | ------ | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Answer                    | String   | 3      |                                                                                                                      | `sRA`                  | `73 52 41`                                  |
| Command       | Data serialization format | String   | 14     |                                                                                                                      | `ScanDataFormat`       | `53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74` |
| Data          |                           | Enum_8   | 1      | MSGPACK:<br>Compact:<br>LMDscandata (not supported on multiScan100):<br>Native ROS2 (not supported on multiScan100): | `1h<br>2h<br>3h<br>4h` | `01<br>02<br>03<br>04`                      |

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

| Telegram part | Description               | Variable | Length | Additional details                                                                                                                 | Values CoLa A (ASCII)                                                       | Values CoLa B (Binary)                                                   |
| ------------- | ------------------------- | -------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Write                     | String   | 3      |                                                                                                                                    | `sWN`                                          | `73 57 4E`                                  |
| Command       | Data serialization format | String   | 14     |                                                                                                                                    | `ScanDataFormat`                               | `53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74` |
| Variable Data | Data                      | Enum_8   | 1      | MSGPACK:<br>Compact (recommended):<br>LMDscandata (not supported on multiScan100):<br>Native ROS2 (not supported on multiScan100): | `+1d (1h)<br>+2d (2h)<br>+3d (3h)<br>+4d (4h)` | `01<br>02<br>03<br>04`                      |

Example: sWN ScanDataFormat

Scan data format set to Compact format

**Example: sWN ScanDataFormat**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}ScanDataFormat{SPC}2<ETX>
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

| Telegram part | Description               | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------- | ------------------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Answer                    | String   | 3      |                    | `sWA`            | `73 57 41`                                  |
| Command       | Data serialization format | String   | 14     |                    | `ScanDataFormat` | `53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74` |

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

### Read Parameter [sRN ScanDataEnable]

</summary>

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN ScanDataEnable**

| Telegram part | Description    | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------- | -------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Read           | String   | 3      |                    | `sRN`            | `73 52 4E`                                  |
| Command       | ScanDataEnable | String   | 14     |                    | `ScanDataEnable` | `53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65` |

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

</section>

<section class="cola-category" markdown="1">

## IMU Data Output

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Parameter [sRN ImuDataEnable]

</summary>

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN ImuDataEnable**

| Telegram part | Description   | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |
| ------------- | ------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- |
| Command type  | Read          | String   | 3      |                    | `sRN`           | `73 52 4E`                               |
| Command       | ImuDataEnable | String   | 13     |                    | `ImuDataEnable` | `49 6D 75 44 61 74 61 45 6E 61 62 6C 65` |

**Example: sRN ImuDataEnable**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ImuDataEnable<ETX>
```

```text
<STX>sRN ImuDataEnable<ETX>
```

```text
sRN ImuDataEnable
```

```text
02 73 52 4E 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 52 4E 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 0F
```

```text
73 52 4E 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65
```


**Example: sRA ImuDataEnable**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ImuDataEnable{SPC}0<ETX>
```

```text
02 73 52 41 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 41 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 20 00 20
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set IMU Data Enable [sWN ImuDataEnable]

</summary>

Enables/ Disables streaming IMU data output.

**Telegram structure: sWN ImuDataEnable**

| Telegram part   | Description                    | Variable | Length | Additional details  | Values CoLa A (ASCII)                                | Values CoLa B (Binary)                                                |
| --------------- | ------------------------------ | -------- | ------ | ------------------- | ---------------------------------------------------- | --------------------------------------------------------------------- |
| Command type    | Write                          | String   | 3      |                     | `sWN`                   | `73 57 4E`                               |
| Command         | Set streaming IMU data output. | String   | 13     |                     | `ImuDataEnable`         | `49 6D 75 44 61 74 61 45 6E 61 62 6C 65` |
| IMU data stream | Enable/ disable                | Bool     | 1      | Disable:<br>Enable: | `0d (00h)<br>+1d (01h)` | `00 ... 01`                              |

**Example: sWN ImuDataEnable**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}ImuDataEnable{SPC}0<ETX>
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

| Telegram part | Description                    | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |
| ------------- | ------------------------------ | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- |
| Command type  | Answer                         | String   | 3      |                    | `sWA`           | `73 57 41`                               |
| Command       | Set streaming IMU data output. | String   | 13     |                    | `ImuDataEnable` | `49 6D 75 44 61 74 61 45 6E 61 62 6C 65` |

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

| Telegram part | Description                                         | Variable | Length | Additional details | Values CoLa A (ASCII)                                                                                        | Values CoLa B (Binary)                                                               |
| ------------- | --------------------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| Command type  | Write                                               | String   | 3      |                    | `sWN`                                                                           | `73 57 4E`                                              |
| Command       | Set IMU data streaming ethernet settings            | String   | 18     |                    | `ImuDataEthSettings`                                                            | `49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |
| Protocol      | Transport protocol for streaming IMU data           | Enum_8   | 1      | UDP:               | `+1d (01h)`                                                                     | `01`                                                    |
| IP address    | IP address of the destination for IMU data receiver | Array    | 4      |                    | `0 …+255d (00…FF)<br>0 …+255d (00..FF)<br>0 …+255d (00…FF)<br>0 …+255d (00…FF)` | `00 … FF<br>00 … FF<br>00 … FF<br>00 … FF`              |
| Port          | Port destination of the IMU data reseiver           | Uint_16  | 2      |                    | `0 .. +65535d(00 00…FF FF)`                                                     | `00 00 … FF FF`                                         |

Example: sWN ImuDataEthSettings +1 +192 +168 +0 +100 +7503

Protocol is set to UDP (1), IPAddress (192.168.0.100), Port (7503)

**Example: sWN ImuDataEthSettings**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}ImuDataEthSettings{SPC}1{SPC}C0{SPC}A8{SPC}0{SPC}64{SPC}1D4F<ETX>
```

```text
sWN ImuDataEthSettings 1 C0 A8 0 64 1D4F
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

| Telegram part | Description                              | Variable | Length | Additional details | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                                               |
| ------------- | ---------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Command type  | Answer                                   | String   | 3      |                    | `sWA`                | `73 57 41`                                              |
| Command       | Set IMU data streaming ethernet settings | String   | 18     |                    | `ImuDataEthSettings` | `49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |

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

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Parameter [sRN ImuDataEthSettings]

</summary>

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN ImuDataEthSettings**

| Telegram part | Description        | Variable | Length | Additional details | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                                               |
| ------------- | ------------------ | -------- | ------ | ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Command type  | Read               | String   | 3      |                    | `sRN`                | `73 52 4E`                                              |
| Command       | ImuDataEthSettings | String   | 18     |                    | `ImuDataEthSettings` | `49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |

**Example: sRN ImuDataEthSettings**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ImuDataEthSettings<ETX>
```

```text
<STX>sRN ImuDataEthSettings<ETX>
```

```text
sRN ImuDataEthSettings
```

```text
02 73 52 4E 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 52 4E 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 52
```

```text
73 52 4E 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73
```


**Example: sRA ImuDataEthSettings**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ImuDataEthSettings{SPC}1{SPC}C0{SPC}A8{SPC}0{SPC}64{SPC}1D4F<ETX>
```

```text
02 73 52 41 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 31 20 43 30 20 41 38 20 30 20 36 34 20 31 44 34 46 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1E 73 52 41 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 01 C0 A8 00 64 1D 4F 22
```

</details>

</section>

<section class="cola-category" markdown="1">

## Data Reduction

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Angle Range Filter [sWN LFPangleRangeFilter]

</summary>

The angle range Horizontal (theta) and vertical (phi) limits in units of 1/10000 degree.

BeamIncrement = the 'beamIncrement' which is used to subsample the beams within the selected angle range. With a 'beamIncrement' of n only every nth beam from the selected angle range is copied to the output scan, i.e. the angle resolution is reduced by factor n. If the beamIncrement is zero it is set to one.

**Telegram structure: sWN LFPangleRangeFilter**

| Telegram part   | Description                                                             | Variable | Length | Additional details                                               | Values CoLa A (ASCII)                                                               | Values CoLa B (Binary)                                                                  |
| --------------- | ----------------------------------------------------------------------- | -------- | ------ | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Command type    | Write                                                                   | String   | 3      |                                                                  | `sWN`                                                  | `73 57 4E`                                                 |
| Command         | Horizontal (theta) and vertical (phi) limits in units of 1/10000 degree | String   | 19     |                                                                  | `LFPangleRangeFilter`                                  | `4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72` |
| Variable Data 1 | Enables/Disables the filter                                             | Bool_1   | 1      | Off:<br>On:                                                      | `+0d<br>+1d`                                           | `00<br>01`                                                 |
| Variable Data 2 | ThetaStart                                                              | Int_32   | 4      | No impact on sensor setting but needs to be filled (see example) | `-1,800,000d ... +1,800,000d (FFE488C0 ... 001B7740h)` | `FF E4 88 C0 … 00 1B 77 40`                                |
| Variable Data 3 | ThetaStop                                                               | Int_32   | 4      | No impact on sensor setting but needs to be filled (see example) | `-1,800,000d ... +1,800,000d (FFE488C0 ... 001B7740h)` | `FF E4 88 C0 … 00 1B 77 40`                                |
| Variable Data 4 | PhiStart                                                                | Int_32   | 4      | No impact on sensor setting but needs to be filled (see example) | `-900,000d ... +900,000d (FFF24460 ... 000DBBA0h)`     | `FF F2 44 60 … 00 0D BB A0`                                |
| Variable Data 5 | PhiStop                                                                 | Int_32   | 4      | No impact on sensor setting but needs to be filled (see example) | `-900,000d ... +900,000d (FFF24460 ... 000DBBA0h)`     | `FF F2 44 60 … 00 0D BB A0`                                |
| Variable Data 6 | BeamIncrement                                                           | UInt_16  | 2      | No impact on sensor setting but needs to be filled (see example) | `1d…+20d`                                              | `00 01 … 00 14`                                            |

Explanation: Enable the angle range filter and set up theta (horizontal) start -90°, theta stop +90°, phi (vertical) start -90°, phi stop +90°, beam increment 1

**Example: sWN LFPangleRangeFilter**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LFPangleRangeFilter{SPC}0{SPC}FFF24460{SPC}DBBA0{SPC}FFF24460{SPC}DBBA0{SPC}1<ETX>
```

```text
sWN LFPangleRangeFilter 0 FFF24460 DBBA0 FFF24460 DBBA0 1
```

```text
02 73 57 4E 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 20 30 20 46 46 46 32 34 34 36 30 20 44 42 42 41 30 20 46 46 46 32 34 34 36 30 20 44 42 42 41 30 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2B 73 57 4E 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 20 00 FF F2 44 60 00 0D BB A0 FF F2 44 60 00 0D BB A0 00 01 2F
```

```text
73 57 4E 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 20 00 FF F2 44 60 00 0D BB A0 FF F2 44 60 00 0D BB A0 00 01
```


**Telegram structure: sWA LFP AngleRangeFilter**

| Telegram part | Description                                                             | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |
| ------------- | ----------------------------------------------------------------------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Command type  | Answer                                                                  | String   | 3      |                    | `sWA`                 | `73 57 41`                                                 |
| Command       | Horizontal (theta) and vertical (phi) limits in units of 1/10000 degree | String   | 19     |                    | `LFPangleRangeFilter` | `4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72` |

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


**Telegram structure: sWA LFPangleRangeFilter**

| Telegram part | Description        | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |
| ------------- | ------------------ | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Command type  | Answer             | String   | 3      |                    | `sWA`                 | `73 57 41`                                                 |
| Command       | Angle range filter | String   | 19     |                    | `LFPangleRangeFilter` | `4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72` |

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

The angle range Horizontal (theta) and vertical (phi) limits in units of 1/10000 degree.

BeamIncrement = the 'beamIncrement' which is used to subsample the beams within the selected angle range. With a 'beamIncrement' of n only every nth beam from the selected angle range is copied to the output scan, i.e. the angle resolution is reduced by factor n. If the beamIncrement is zero it is set to one.

**Telegram structure: sRN LFPangleRangeFilter**

| Telegram part | Description                                                             | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |
| ------------- | ----------------------------------------------------------------------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Command type  | Read                                                                    | String   | 3      |                    | `sRN`                 | `73 52 4E`                                                 |
| Command       | Horizontal (theta) and vertical (phi) limits in units of 1/10000 degree | String   | 19     |                    | `LFPangleRangeFilter` | `4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72` |

**Example: sRN LFPangleRangeFilter**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LFPangleRangeFilter<ETX>
```

```text
<STX>sRN LFPangleRangeFilter<ETX>
```

```text
sRN LFPangleRangeFilter
```

```text
02 73 52 4E 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 52 4E 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 0B
```

```text
73 52 4E 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72
```


**Telegram structure: sRA LFPangleRangeFilter**

| Telegram part   | Description                                                             | Variable | Length | Additional details          | Values CoLa A (ASCII)                                                               | Values CoLa B (Binary)                                                                  |
| --------------- | ----------------------------------------------------------------------- | -------- | ------ | --------------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Command type    | Answer                                                                  | String   | 3      |                             | `sRA`                                                  | `73 52 41`                                                 |
| Command         | Horizontal (theta) and vertical (phi) limits in units of 1/10000 degree | String   | 19     |                             | `LFPangleRangeFilter`                                  | `4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72` |
| Variable Data 1 | Enables/Disables the filter                                             | Bool_1   | 1      | Off:<br>On:                 | `+0d<br>+1d`                                           | `00<br>01`                                                 |
| Variable Data 2 | ThetaStart                                                              | Int_32   | 4      | No impact on sensor setting | `-1,800,000d ... +1,800,000d (FFE488C0 ... 001B7740h)` | `FF E4 88 C0 … 00 1B 77 40`                                |
| Variable Data 3 | ThetaStop                                                               | Int_32   | 4      | No impact on sensor setting | `-1,800,000d ... +1,800,000d (FFE488C0 ... 001B7740h)` | `FF E4 88 C0 … 00 1B 77 40`                                |
| Variable Data 4 | PhiStart                                                                | Int_32   | 4      | No impact on sensor setting | `-900,000d ... +900,000d (FFF24460 ... 000DBBA0h)`     | `FF F2 44 60 … 00 0D BB A0`                                |
| Variable Data 5 | PhiStop                                                                 | Int_32   | 4      | No impact on sensor setting | `-900,000d ... +900,000d (FFF24460 ... 000DBBA0h)`     | `FF F2 44 60 … 00 0D BB A0`                                |
| Variable Data 6 | BeamIncrement                                                           | UInt_16  | 2      | No impact on sensor setting | `1d…+20d`                                              | `00 01 … 00 14`                                            |

The example response has the filter disabled, theta and phi limits of -90° to +90°, and beam increment 1.

**Example: sRA LFPangleRangeFilter**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LFPangleRangeFilter{SPC}0{SPC}FFF24460{SPC}DBBA0{SPC}FFF24460{SPC}DBBA0{SPC}1<ETX>
```

```text
02 73 52 41 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 20 30 20 46 46 46 32 34 34 36 30 20 44 42 42 41 30 20 46 46 46 32 34 34 36 30 20 44 42 42 41 30 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2B 73 52 41 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 20 00 FF F2 44 60 00 0D BB A0 FF F2 44 60 00 0D BB A0 00 01 25
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Interval Filter [sWN LFPintervalFilter]

</summary>

Enables and set up the interval filter. The interval filter reduce the scan output rate by a given factor.

**Telegram structure: sWN LFPintervalFilter**

| Telegram part   | Description                                                                          | Variable | Length | Additional details | Values CoLa A (ASCII)                                                   | Values CoLa B (Binary)                                                            |
| --------------- | ------------------------------------------------------------------------------------ | -------- | ------ | ------------------ | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Command type    | Write                                                                                | String   | 3      |                    | `sWN`                                      | `73 57 4E`                                           |
| Command         | Reduce the scan output rate by a given factor                                        | String   | 17     |                    | `LFPintervalFilter`                        | `4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72` |
| Variable data 1 | Enables/Disables the filter.                                                         | Bool     | 1      | Off:<br>On:        | `0d (00h)<br>+1d (01h)`                    | `00<br>01`                                           |
| Variable Data 2 | Only every nth scan is output where n is given by<br>the value of uiReductionFactor. | Uint_32  | 4      |                    | `1d…+50d<br>(00 00 00 01h … 00 00 00 32h)` | `00 00 00 01 … 00 00 00 32`                          |

Enables the interval filter an set up to the 3rd scan

**Example: sWN LFPintervalFilter**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LFPintervalFilter{SPC}0{SPC}2<ETX>
```

```text
sWN LFPintervalFilter 0 2
```

```text
02 73 57 4E 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 20 30 20 32 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 57 4E 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 20 00 00 00 00 02 0D
```

```text
73 57 4E 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 20 00 00 00 00 02
```


**Telegram structure: sWA LFPintervalFilter**

| Telegram part | Description                                   | Variable | Length | Additional details | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                            |
| ------------- | --------------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------- |
| Command type  | Answer                                        | String   | 3      |                    | `sWA`               | `73 57 41`                                           |
| Command       | Reduce the scan output rate by a given factor | String   | 17     |                    | `LFPintervalFilter` | `4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72` |

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

### Set Layer Filter [sWN LFPlayerFilter]

</summary>

Select which of the sixteen layers are included in scan output (manual pages 146-147). This example disables filtering and enables all layers.

Requires Authorized client.

**Telegram structure: sWN LFPlayerFilter**

| Telegram part | Description                               | Variable        | Length | Additional details         | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                                   |
| ------------- | ----------------------------------------- | --------------- | ------ | -------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Write                                     | String          | 3      |                            | `sWN`                | `73 57 4E`                                  |
| Command       | LFPlayerFilter                            | String          | 14     |                            | `LFPlayerFilter`     | `4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72` |
| State         | Filter enabled                            | Bool_1          | 1      | Disabled / enabled         | `0 / 1`              | `00 / 01`                                   |
| Layers        | One enable flag per layer, in layer order | Array of Bool_1 | 16     | Sixteen flags: 0 off, 1 on | `0 / 1 (each layer)` | `00 / 01 (each layer)`                      |

**Example: sWN LFPlayerFilter**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LFPlayerFilter{SPC}0{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1<ETX>
```

```text
sWN LFPlayerFilter 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
```

```text
02 73 57 4E 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72 20 30 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 24 73 57 4E 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72 20 00 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 73
```

```text
73 57 4E 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72 20 00 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01
```


**Telegram structure: sWA LFPlayerFilter**

| Telegram part | Description    | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------- | -------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Answer         | String   | 3      |                    | `sWA`            | `73 57 41`                                  |
| Command       | LFPlayerFilter | String   | 14     |                    | `LFPlayerFilter` | `4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72` |

**Example: sWA LFPlayerFilter**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LFPlayerFilter<ETX>
```

```text
02 73 57 41 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 41 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72 20 7C
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Parameter [sRN LFPintervalFilter]

</summary>

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN LFPintervalFilter**

| Telegram part | Description       | Variable | Length | Additional details | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                            |
| ------------- | ----------------- | -------- | ------ | ------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------- |
| Command type  | Read              | String   | 3      |                    | `sRN`               | `73 52 4E`                                           |
| Command       | LFPintervalFilter | String   | 17     |                    | `LFPintervalFilter` | `4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72` |

**Example: sRN LFPintervalFilter**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LFPintervalFilter<ETX>
```

```text
<STX>sRN LFPintervalFilter<ETX>
```

```text
sRN LFPintervalFilter
```

```text
02 73 52 4E 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 52 4E 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 2A
```

```text
73 52 4E 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72
```


**Example: sRA LFPintervalFilter**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LFPintervalFilter{SPC}0{SPC}2<ETX>
```

```text
02 73 52 41 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 20 30 20 32 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 52 41 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 20 00 00 00 00 02 07
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Parameter [sRN LFPlayerFilter]

</summary>

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN LFPlayerFilter**

| Telegram part | Description    | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------- | -------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Read           | String   | 3      |                    | `sRN`            | `73 52 4E`                                  |
| Command       | LFPlayerFilter | String   | 14     |                    | `LFPlayerFilter` | `4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72` |

**Example: sRN LFPlayerFilter**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LFPlayerFilter<ETX>
```

```text
<STX>sRN LFPlayerFilter<ETX>
```

```text
sRN LFPlayerFilter
```

```text
02 73 52 4E 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 4E 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72 56
```

```text
73 52 4E 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72
```


**Example: sRA LFPlayerFilter**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LFPlayerFilter{SPC}0{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1<ETX>
```

```text
02 73 52 41 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72 20 30 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 24 73 52 41 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72 20 00 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 79
```

</details>

</section>

<section class="cola-category" markdown="1">

## Region of Interest

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Rectangular Filter [sWN LFPcubicareafilter]

</summary>

**Telegram structure: sWN LFPcubicareafilter**

| Telegram part   | Description                                                | Variable | Length | Additional details                  | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                                               |
| --------------- | ---------------------------------------------------------- | -------- | ------ | ----------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Command type    | Write                                                      | String   | 3      |                                     | `sWN`                | `73 57 4E`                                              |
| Command         | CubicAreaFilter limits a polar scan to a axisparallel cube | String   | 18     |                                     | `LFPcubicareafilter` | `4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72` |
| Variable data 1 | Enables/Disables the filter.                               | Bool     | 1      | Off:<br>On:                         | `0d<br>1d`           | `00<br>01`                                              |
| Variable Data 2 | X min<br>1/10 mm                                           | Int_32   | 4      |                                     | `-200000d…+200000d`  | `FF FF B1 E0 … 00 00 4E 20`                             |
| Variable Data 3 | X max<br>1/10 mm                                           | Int_32   | 4      |                                     | `-200000d…+200000d`  | `FF FF B1 E0 … 00 00 4E 20`                             |
| Variable Data 4 | Y min<br>1/10 mm                                           | Int_32   | 4      |                                     | `-200000d…+200000d`  | `FF FF B1 E0 … 00 00 4E 20`                             |
| Variable Data 5 | Y max<br>1/10 mm                                           | Int_32   | 4      |                                     | `-200000d…+200000d`  | `FF FF B1 E0 … 00 00 4E 20`                             |
| Variable Data 6 | Z min<br>1/10 mm                                           | Int_32   | 4      | Other values than 0 will be ignored | `0`                  | `00 00 00 00`                                           |
| Variable Data 7 | Z max<br>1/10 mm                                           | Int_32   | 4      | Other values than 0 will be ignored | `0`                  | `00 00 00 00`                                           |

**Example: sWN LFPcubicareafilter**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LFPcubicareafilter{SPC}0{SPC}FFFFB1E0{SPC}4E20{SPC}FFFFB1E0{SPC}4E20{SPC}FFFFB1E0{SPC}4E20<ETX>
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

| Telegram part | Description                                                | Variable | Length | Additional details | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                                               |
| ------------- | ---------------------------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Command type  | Answer                                                     | String   | 3      |                    | `sWA`                | `73 57 41`                                              |
| Command       | CubicAreaFilter limits a polar scan to a axisparallel cube | String   | 18     |                    | `LFPcubicareafilter` | `4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72` |

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

| Telegram part   | Description                                               | Variable | Length | Additional details   | Values CoLa A (ASCII)                                        | Values CoLa B (Binary)                                                                                             |
| --------------- | --------------------------------------------------------- | -------- | ------ | -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| Command type    | Write                                                     | String   | 3      |                      | `sWN`                           | `73 57 4E`                                                                            |
| Command         | Restriction of the scan(s) to a specified distance range. | String   | 28     |                      | `LFPradialDistanceRangeFilter`  | `4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72` |
| Variable Data 1 | Enables/Disables the filter.                              | Bool_1   | 1      | Off:<br>On:          | `0d (0h)<br>1d (1h)`            | `00<br>01`                                                                            |
| DistMin         | Lower boundary of the distance range.                     | Int_32   | 4      | Minimum:<br>Maximum: | `+0d (0h)<br>+200000d (30D40h)` | `00 00 00 00<br>00 03 0D 40`                                                          |
| DistMax         | Upper boundary of the distance range.                     | Int_32   | 4      | Minimum:<br>Maximum: | `+0d (0h)<br>+200000d (30D40h)` | `00 00 00 00<br>00 03 0D 40`                                                          |

Disable the radial distance range filter and set up the boundaries to min 0mm and max 200000mm.

**Example: sWN LFPradialDistanceRangeFilter**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LFPradialDistanceRangeFilter{SPC}0{SPC}0{SPC}4E20<ETX>
```

```text
sWN LFPradialDistanceRangeFilter 0 0 4E20
```

```text
02 73 57 4E 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 20 30 20 30 20 34 45 32 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2A 73 57 4E 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 20 00 00 00 00 00 00 00 4E 20 11
```

```text
73 57 4E 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 20 00 00 00 00 00 00 00 4E 20
```


**Telegram structure: sWA LFPradialDistanceRangeFilter**

| Telegram part | Description                                               | Variable | Length | Additional details | Values CoLa A (ASCII)                                       | Values CoLa B (Binary)                                                                                             |
| ------------- | --------------------------------------------------------- | -------- | ------ | ------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Command type  | Answer                                                    | String   | 3      |                    | `sWA`                          | `73 57 41`                                                                            |
| Command       | Restriction of the scan(s) to a specified distance range. | String   | 28     |                    | `LFPradialDistanceRangeFilter` | `4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72` |

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

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Parameter [sRN LFPcubicareafilter]

</summary>

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN LFPcubicareafilter**

| Telegram part | Description        | Variable | Length | Additional details | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                                               |
| ------------- | ------------------ | -------- | ------ | ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Command type  | Read               | String   | 3      |                    | `sRN`                | `73 52 4E`                                              |
| Command       | LFPcubicareafilter | String   | 18     |                    | `LFPcubicareafilter` | `4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72` |

**Example: sRN LFPcubicareafilter**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LFPcubicareafilter<ETX>
```

```text
<STX>sRN LFPcubicareafilter<ETX>
```

```text
sRN LFPcubicareafilter
```

```text
02 73 52 4E 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 52 4E 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72 7C
```

```text
73 52 4E 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72
```


**Example: sRA LFPcubicareafilter**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LFPcubicareafilter{SPC}0{SPC}FFFFB1E0{SPC}4E20{SPC}FFFFB1E0{SPC}4E20{SPC}FFFFB1E0{SPC}4E20<ETX>
```

```text
02 73 52 41 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72 20 30 20 46 46 46 46 42 31 45 30 20 34 45 32 30 20 46 46 46 46 42 31 45 30 20 34 45 32 30 20 46 46 46 46 42 31 45 30 20 34 45 32 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 30 73 52 41 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72 20 00 FF FF B1 E0 00 00 4E 20 FF FF B1 E0 00 00 4E 20 FF FF B1 E0 00 00 4E 20 6C
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Parameter [sRN LFPradialDistanceRangeFilter]

</summary>

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN LFPradialDistanceRangeFilter**

| Telegram part | Description                  | Variable | Length | Additional details | Values CoLa A (ASCII)                                       | Values CoLa B (Binary)                                                                                             |
| ------------- | ---------------------------- | -------- | ------ | ------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Command type  | Read                         | String   | 3      |                    | `sRN`                          | `73 52 4E`                                                                            |
| Command       | LFPradialDistanceRangeFilter | String   | 28     |                    | `LFPradialDistanceRangeFilter` | `4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72` |

**Example: sRN LFPradialDistanceRangeFilter**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LFPradialDistanceRangeFilter<ETX>
```

```text
<STX>sRN LFPradialDistanceRangeFilter<ETX>
```

```text
sRN LFPradialDistanceRangeFilter
```

```text
02 73 52 4E 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 20 73 52 4E 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 5A
```

```text
73 52 4E 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72
```


**Example: sRA LFPradialDistanceRangeFilter**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LFPradialDistanceRangeFilter{SPC}0{SPC}0{SPC}4E20<ETX>
```

```text
02 73 52 41 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 20 30 20 30 20 34 45 32 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2A 73 52 41 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 20 00 00 00 00 00 00 00 4E 20 1B
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

| Telegram part                                       | Description                               | Variable | Length | Additional details                                                                                              | Values CoLa A (ASCII)                                  | Values CoLa B (Binary)                                                                              |
| --------------------------------------------------- | ----------------------------------------- | -------- | ------ | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| Command type                                        | Method                                    | String   | 3      |                                                                                                                 | `sMN`                     | `73 4D 4E`                                                             |
| Command                                             | Activate / deactivate evaluation group    | String   | 23     |                                                                                                                 | `ActivateEvaluationGroup` | `41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70` |
| Amount of evaluation groups to activate/ deactivate | Array                                     | Uint_16  | 2      | Each array element contains two parameters:Evaluation group numberDeactivation / activation of evaluation group | `1d ... 48d (1 ... 30h)`  | `00 01 … 00 30`                                                        |
| Evaluation group number                             | Evaluation group 1                        | UInt_16  | 2      |                                                                                                                 | `1`                       | `00 01`                                                                |
| Deactivation / activation of evaluation group       | Activate / deactivate evaluation group 1  | Bool_1   | 1      | Deactivate:<br>Activate:                                                                                        | `0<br>1`                  | `00<br>01`                                                             |
| Evaluation group number                             | Evaluation group 2                        | UInt_16  | 2      |                                                                                                                 | `2`                       | `00 02`                                                                |
| Activate/ deactivate evaluation group               | Activate / deactivate evaluation group 2  | Bool_1   | 1      | Deactivate:<br>Activate:                                                                                        | `0<br>1`                  | `00<br>01`                                                             |
| ..                                                  |                                           |          |        |                                                                                                                 |                                                        |                                                                                                     |
| Evaluation group number                             | Evaluation group 48                       | UInt_16  | 2      |                                                                                                                 | `48d (30h)`               | `00 30`                                                                |
| Activate/ deactivate evaluation group               | Activate / deactivate evaluation group 48 | Bool_1   | 1      | Deactivate:<br>Activate:                                                                                        | `0<br>1`                  | `00<br>01`                                                             |

**Example: sMN ActivateEvaluationGroup**

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


**Telegram structure: sAN ActivateEvaluationGroup**

| Telegram part                                     | Description                            | Variable | Length | Additional details                                                     | Values CoLa A (ASCII)                                  | Values CoLa B (Binary)                                                                              |
| ------------------------------------------------- | -------------------------------------- | -------- | ------ | ---------------------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| Command type                                      | Answer                                 | String   | 3      |                                                                        | `sAN`                     | `73 41 4E`                                                             |
| Command                                           | Activate / deactivate evaluation group | String   | 23     |                                                                        | `ActivateEvaluationGroup` | `41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70` |
| Amount of activated/deactivated evaluation groups | -                                      | UInt_16  | 2      |                                                                        | `1h... 30h`               | `00 01 … 00 30`                                                        |
| State of activation / deactivation                | -                                      | Bool_1   | 1      | Activation/Deactivation failed:<br>Successfully activated/deactivated: | `0<br>1`                  | `00<br>01`                                                             |

**Example: sAN ActivateEvaluationGroup**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}ActivateEvaluationGroup{SPC}1{SPC}0<ETX>
```

```text
02 73 41 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 31 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 41 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 00 01 00 2D
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Evaluation Group Type [sRN EvaluationGroupType]

</summary>

Array with the type of each group: field evaluation, perpendicular distance, or object evaluation (firmware 2.5.0 and later).

**Telegram structure: sRN EvaluationGroupType**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |
| ------------- | ----------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Command type  | Read        | String   | 3      |                    | `sRN`                 | `73 52 4E`                                                 |
| Command       |             | String   | 19     |                    | `EvaluationGroupType` | `45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65` |

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

| Telegram part | Description              | Variable | Length | Additional details                                                 | Values CoLa A (ASCII)                                             | Values CoLa B (Binary)                                                                  |     |
| ------------- | ------------------------ | -------- | ------ | ------------------------------------------------------------------ | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type  | Answer                   | String   | 3      |                                                                    | `sRA`                                | `73 52 41`                                                 |     |
| Command       |                          | String   | 19     |                                                                    | `EvaluationGroupType`                | `45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65` |     |
| Data          | Type of evaluation group | Array    | 48     | Field evaluation:<br>Perpendicular distance:<br>Object evaluation: | `0d (00h)<br>+1d (01h)<br>+2d (02h)` | `00<br>01<br>02`                                           |     |

**Example: sRA EvaluationGroupType**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EvaluationGroupType{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 48 73 52 41 20 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65 20 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 31
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Field Evaluation Contour [sMN SetFieldEvaluationContour]

</summary>

This telegram can be used to change or reshape the contour/ polygon of an already defined field. It´s possible to add additional points.

**Telegram structure: sMN SetFieldEvaluationContour**

| Telegram part              | Description                                                  | Variable | Length | Additional details                        | Values CoLa A (ASCII)                                                       | Values CoLa B (Binary)                                                                                    |
| -------------------------- | ------------------------------------------------------------ | -------- | ------ | ----------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Command type               | Method                                                       | String   | 3      |                                           | `sMN`                                          | `73 4D 4E`                                                                   |
| Command                    | Set the region of interest of an object detection evaluation | String   | 25     |                                           | `SetFieldEvaluationContour`                    | `53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |
| Evaluation ID              | Specific ID of the evaluation that is to be changed          | UInt_16  | 2      |                                           | `+1d ... +48d (1h ... 30h)`                    | `00 01 … 00 30`                                                              |
| Amount of polygon vertices | E. g. triangle = 3, square = 4                               | Uint_16  | 2      |                                           | `+3d ... +800d (3h ... 320h)`                  | `00 03... 03 20`                                                             |
| Polygon vertex             | Coordinates of first polygon vertex in mm                    | Dint_32  | 4      | X coordinate:                             | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0`                                                  |
| Polygon vertex             | Coordinates of first polygon vertex in mm                    | Dint_32  | 4      | Y coordinate:                             | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0`                                                  |
| Polygon vertex             | Coordinates of second polygon vertex in mm                   | Dint_32  | 4      | X coordinate:                             | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0`                                                  |
| Polygon vertex             | Coordinates of second polygon vertex in mm                   | Dint_32  | 4      | Y coordinate:                             | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0`                                                  |
| ..                         |                                                              |          |        |                                           |                                                                             |                                                                                                           |
| Polygon vertex             | Coordinates of last polygon vertex in mm                     | Dint_32  | 4      | X coordinate:                             | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0`                                                  |
| Polygon vertex             | Coordinates of last polygon vertex in mm                     | Dint_32  | 4      | Y coordinate:                             | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0`                                                  |
| Lower Z limit              | Lower bound of extrusion in Z direction                      | Dint_32  | 4      | Lower limit must be less than upper limit | `-100000 ... +100000`                          | `FF FE 79 60 ... 00 01 86 A0`                                                |
| Upper Z limit              | Upper bound of extrusion in Z direction                      | Dint_32  | 4      | Lower limit must be less than upper limit | `-100000 ... +100000`                          | `FF FE 79 60 ... 00 01 86 A0`                                                |

**Example: sMN SetFieldEvaluationContour**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}SetFieldEvaluationContour{SPC}1{SPC}4{SPC}+2000{SPC}+1000{SPC}+0{SPC}+1000{SPC}+0{SPC}+0{SPC}+2000{SPC}+0{SPC}+0{SPC}+1000<ETX>
```

```text
sMN SetFieldEvaluationContour 1 4 +2000 +1000 +0 +1000 +0 +0 +2000 +0 +0 +1000
```

```text
02 73 4D 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 31 20 34 20 2B 32 30 30 30 20 2B 31 30 30 30 20 2B 30 20 2B 31 30 30 30 20 2B 30 20 2B 30 20 2B 32 30 30 30 20 2B 30 20 2B 30 20 2B 31 30 30 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4A 73 4D 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 00 04 00 00 07 D0 00 00 03 E8 00 00 00 00 00 00 03 E8 00 00 00 00 00 00 00 00 00 00 07 D0 00 00 00 00 00 00 00 00 00 00 03 E8 F6
```

```text
73 4D 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 00 04 00 00 07 D0 00 00 03 E8 00 00 00 00 00 00 03 E8 00 00 00 00 00 00 00 00 00 00 07 D0 00 00 00 00 00 00 00 00 00 00 03 E8
```


**Telegram structure: sAN SetFieldEvaluationContour**

| Telegram part                  | Description                                                  | Variable | Length | Additional details                                                                    | Values CoLa A (ASCII)                                    | Values CoLa B (Binary)                                                                                    |
| ------------------------------ | ------------------------------------------------------------ | -------- | ------ | ------------------------------------------------------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Command type                   | Answer                                                       | String   | 3      |                                                                                       | `sAN`                       | `73 41 4E`                                                                   |
| Command                        | Set the region of interest of an object detection evaluation | String   | 25     |                                                                                       | `SetFieldEvaluationContour` | `53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |
| State of evaluation conversion | -                                                            | Enum_8   | 1      | Conversion successful:<br>Invalid Evaluation:<br>Invalid Polygon:<br>Invalid Z limit: | `0<br>1<br>2<br>3`          | `00<br>01<br>02<br>03`                                                       |

**Example: sAN SetFieldEvaluationContour**

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

### Read Evaluation Configuration State [sRN EvaluationConfigState]

</summary>

Read beam-limit and evaluation-limit status. On firmware 2.4.4.0R, the response contains two status bytes followed by 49 two-byte words. Retain the final word when parsing the response; its meaning is unspecified.

**Telegram structure: sRN EvaluationConfigState**

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                                | Values CoLa B (Binary)                                                                        |
| ------------- | --------------------- | -------- | ------ | ------------------ | ---------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Command type  | Read                  | String   | 3      |                    | `sRN`                   | `73 52 4E`                                                       |
| Command       | EvaluationConfigState | String   | 21     |                    | `EvaluationConfigState` | `45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65` |

**Example: sRN EvaluationConfigState**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EvaluationConfigState<ETX>
```

```text
<STX>sRN EvaluationConfigState<ETX>
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

| Telegram part            | Description                   | Variable         | Length                 | Additional details            | Values CoLa A (ASCII)                                 | Values CoLa B (Binary)                                                                        |
| ------------------------ | ----------------------------- | ---------------- | ---------------------- | ----------------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Command type             | Answer                        | String           | 3                      |                               | `sRA`                    | `73 52 41`                                                       |
| Command                  | EvaluationConfigState         | String           | 21                     |                               | `EvaluationConfigState`  | `45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65` |
| Active beams limit       | Limit status                  | Enum_8           | 1                      | OK / warning / error          | `0 / 1 / 2`              | `00 / 01 / 02`                                                   |
| Active evaluations limit | Limit status                  | Enum_8           | 1                      | OK / warning / error          | `0 / 1 / 2`              | `00 / 01 / 02`                                                   |
| Beam counts              | Raw returned beam-count words | Array of Uint_16 | 98 (firmware 2.4.4.0R) | 49 words on firmware 2.4.4.0R | `0 ... FFFF (each word)` | `00 00 ... FF FF (each word)`                                    |

**Example: sRA EvaluationConfigState**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EvaluationConfigState{SPC}0{SPC}0{SPC}F1F{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65 20 30 20 30 20 46 31 46 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 7E 73 52 41 20 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65 20 00 00 0F 1F 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 3B
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Field Evaluation Result [sRN FieldEvaluationResult]

</summary>

This telegram returns the status information of all evaluations.

**Telegram structure: sRN FieldEvaluationResult**

| Telegram part | Description                     | Variable | Length | Additional details | Values CoLa A (ASCII)                                | Values CoLa B (Binary)                                                                        |
| ------------- | ------------------------------- | -------- | ------ | ------------------ | ---------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Command type  | Read                            | String   | 3      |                    | `sRN`                   | `73 52 4E`                                                       |
| Command       | Info on field evaluation result | String   | 21     |                    | `FieldEvaluationResult` | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74` |

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

| Telegram part     | Description                                                                                                                                                                                      | Variable | Length | Additional details                                                                             | Values CoLa A (ASCII)                                     | Values CoLa B (Binary)                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------ | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Command type      | Answer                                                                                                                                                                                           | String   | 3      |                                                                                                | `sRA`                        | `73 52 41`                                                       |
| Command           | Info on field evaluation result                                                                                                                                                                  | String   | 21     |                                                                                                | `FieldEvaluationResult`      | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74` |
| Version           | Version number                                                                                                                                                                                   | Uint_16  | 2      |                                                                                                | `0 ... FFFFh`                | `00 ... FF FF`                                                   |
| Timestamp         | Time of the last field infringement. Time base is the sensor system time in microseconds since January 1, 1970, 00:00 (UTC). If a time server is being used, the configured system time is used. | ULInt_64 | 8      |                                                                                                | `0 ... FFFFFFFFFFFFFFFFh`    | `00 00 00 00 00 00 00 00 ... FF FF FF FF FF FF FF FF`            |
| Evaluation Result | Evaluation state of the first field.                                                                                                                                                             | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                               |
| Evaluation Result | Evaluation state of the second field.                                                                                                                                                            | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                               |

| ..                |                                                                                                                                                                                                  |          |        |                                                                                                |                                                           |                                                                                               |     |
| Evaluation Result | Evaluation state of the last field. (maximum amount of evaluations = 48)                                                                                                                         | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                               |     |

On firmware 2.4.4.0R, the parameter block is a 2-byte version,
an 8-byte timestamp, and 48 one-byte result codes (58 bytes total).
Each result occupies one byte, with no additional reserved byte.

The timestamp unit is microseconds for both read replies (`sRA`) and events
(`sSN`), not milliseconds. For example, the event timestamp `65D2897B50D60`
is 1,791,278,785,564,000 microseconds, corresponding to
October 6, 2026, 09:26:25.564 UTC. Interpreting it as milliseconds would put
the date more than 56,000 years after 1970.

**Example: sRA FieldEvaluationResult**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}FieldEvaluationResult{SPC}1{SPC}A07E2E8{SPC}4{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 20 41 30 37 45 32 45 38 20 34 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 54 73 52 41 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 00 01 00 00 00 00 0A 07 E2 E8 04 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 3F
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Receive Field Evaluation Result by Event [sEN FieldEvaluationResult]

</summary>

This telegram returns the status information of all evaluations.

**Telegram structure: sEN FieldEvaluationResult**

| Telegram part | Description                     | Variable | Length | Additional details | Values CoLa A (ASCII)                                | Values CoLa B (Binary)                                                                        |
| ------------- | ------------------------------- | -------- | ------ | ------------------ | ---------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Command type  | Event                           | String   | 3      |                    | `sEN`                   | `73 45 4E`                                                       |
| Command       | Info on field evaluation result | String   | 21     |                    | `FieldEvaluationResult` | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74` |
| Reporting     | Start/ stop                     | Enum_8   | 1      | Stop:<br>Start:    | `0<br>1`                | `00<br>01`                                                       |

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

| Telegram part     | Description                                                                                                                                                                                        | Variable | Length | Additional details                                                                             | Values CoLa A (ASCII)                                     | Values CoLa B (Binary)                                                                        |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------ | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Command type      | Answer                                                                                                                                                                                             | String   | 3      |                                                                                                | `sSN`                        | `73 53 4E`                                                       |
| Command           | Info on field evaluation result                                                                                                                                                                    | String   | 21     |                                                                                                | `FieldEvaluationResult`      | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74` |
| Version           | Version number                                                                                                                                                                                     | Uint_16  | 2      |                                                                                                | `0 ... FFFFh`                | `00 ... FF FF`                                                   |
| Timestamp         | Time of the latest field infringement. Time base is the sensor system time in microseconds since January 1, 1970, 00:00 (UTC). If a time server is being used, the configured system time is used. | ULInt_64 | 8      |                                                                                                | `0 ... FFFFFFFFFFFFFFFFh`    | `00 00 00 00 00 00 00 00 ... FF FF FF FF FF FF FF FF`            |
| Evaluation Result | Evaluation state of the first field.                                                                                                                                                               | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                               |
| Evaluation Result | Evaluation state of the second field.                                                                                                                                                              | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                               |
| ..                |                                                                                                                                                                                                    |          |        |                                                                                                |                                                           |                                                                                               |
| Evaluation Result | Evaluation state of the last field.<br>(maximum amount of evaluations = 48)                                                                                                                        | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                               |

**Example: sSN FieldEvaluationResult**

**CoLa A (ASCII)**

```text
<STX>sSN{SPC}FieldEvaluationResult{SPC}1{SPC}65D2897B50D60{SPC}4{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 53 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 20 36 35 44 32 38 39 37 42 35 30 44 36 30 20 34 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 54 73 53 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 00 01 00 06 5D 28 97 CE F6 30 04 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 DA
```

</details>

</section>

<section class="cola-category" markdown="1">

## Object Evaluation

These telegrams read and configure [Object Evaluation](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/object-evaluation/). Object Evaluation is available from firmware 2.5.0 and requires the **3D Object Detection Advanced** package. Create the evaluations in SOPASair; the telegrams then read their state and change their contour, criteria, and group activation.

The `Get...` and `Set...` methods require the Authorized Client user level; without a log in, the device answers with `sFA 1`. The other telegrams need no log in. Changes are applied immediately but are lost on restart unless you save them with [sMN mEEwriteall](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#save-parameters-permanently-smn-meewriteall).

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Object Evaluation Application State [sRN ObjectEvaluationApplicationState]

</summary>

This telegram returns the state of the Object Evaluation application.

**Telegram structure: sRN ObjectEvaluationApplicationState**

| Telegram part | Description                         | Variable | Length | Additional details | Values CoLa A (ASCII)                                           | Values CoLa B (Binary)                                                                                                         |
| ------------- | ----------------------------------- | -------- | ------ | ------------------ | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Command type  | Read                                | String   | 3      |                    | `sRN`                              | `73 52 4E`                                                                                        |
| Command       | Object evaluation application state | String   | 32     |                    | `ObjectEvaluationApplicationState` | `4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65` |

**Example: sRN ObjectEvaluationApplicationState**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ObjectEvaluationApplicationState<ETX>
```

```text
sRN ObjectEvaluationApplicationState
```

```text
02 73 52 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 24 73 52 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65 41
```

```text
73 52 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65
```


**Telegram structure: sRA ObjectEvaluationApplicationState**

| Telegram part     | Description                         | Variable | Length | Additional details                                | Values CoLa A (ASCII)                                           | Values CoLa B (Binary)                                                                                                         |
| ----------------- | ----------------------------------- | -------- | ------ | ------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Command type      | Answer                              | String   | 3      |                                                   | `sRA`                              | `73 52 41`                                                                                        |
| Command           | Object evaluation application state | String   | 32     |                                                   | `ObjectEvaluationApplicationState` | `4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65` |
| Application state | State of the application            | Enum_8   | 1      | Deactivated:<br>Active:<br>Configuring:<br>Error: | `0<br>1<br>2<br>3`                 | `00<br>01<br>02<br>03`                                                                            |

**Example: sRA ObjectEvaluationApplicationState**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ObjectEvaluationApplicationState{SPC}1<ETX>
```

```text
02 73 52 41 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 26 73 52 41 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65 20 01 6F
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Object Evaluation Group State [sRN ObjectEvaluationGroupState]

</summary>

This telegram returns the activation state of all 48 object evaluation groups.

**Telegram structure: sRN ObjectEvaluationGroupState**

| Telegram part | Description                   | Variable | Length | Additional details | Values CoLa A (ASCII)                                     | Values CoLa B (Binary)                                                                                       |
| ------------- | ----------------------------- | -------- | ------ | ------------------ | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Command type  | Read                          | String   | 3      |                    | `sRN`                        | `73 52 4E`                                                                      |
| Command       | Object evaluation group state | String   | 26     |                    | `ObjectEvaluationGroupState` | `4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65` |

**Example: sRN ObjectEvaluationGroupState**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ObjectEvaluationGroupState<ETX>
```

```text
sRN ObjectEvaluationGroupState
```

```text
02 73 52 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1E 73 52 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65 44
```

```text
73 52 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65
```


**Telegram structure: sRA ObjectEvaluationGroupState**

| Telegram part | Description                                         | Variable | Length | Additional details                      | Values CoLa A (ASCII)                                     | Values CoLa B (Binary)                                                                                       |
| ------------- | --------------------------------------------------- | -------- | ------ | --------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Command type  | Answer                                              | String   | 3      |                                         | `sRA`                        | `73 52 41`                                                                      |
| Command       | Object evaluation group state                       | String   | 26     |                                         | `ObjectEvaluationGroupState` | `4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65` |
| Group state   | State of group 1                                    | Enum_8   | 1      | Not configured:<br>Active:<br>Inactive: | `0<br>1<br>2`                | `00<br>01<br>02`                                                                |
| Group state   | State of group 2                                    | Enum_8   | 1      | Not configured:<br>Active:<br>Inactive: | `0<br>1<br>2`                | `00<br>01<br>02`                                                                |
| ..            |                                                     |          |        |                                         |                                                           |                                                                                                              |
| Group state   | State of group 48. The array always has 48 entries. | Enum_8   | 1      | Not configured:<br>Active:<br>Inactive: | `0<br>1<br>2`                | `00<br>01<br>02`                                                                |

**Example: sRA ObjectEvaluationGroupState**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ObjectEvaluationGroupState{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4F 73 52 41 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65 20 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 6A
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Object Evaluation Result [sRN ObjectEvaluationResult]

</summary>

This telegram returns the state of all 48 object evaluations. The timestamp changes only when an evaluation state changes.

**Telegram structure: sRN ObjectEvaluationResult**

| Telegram part | Description              | Variable | Length | Additional details | Values CoLa A (ASCII)                                 | Values CoLa B (Binary)                                                                           |
| ------------- | ------------------------ | -------- | ------ | ------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Command type  | Read                     | String   | 3      |                    | `sRN`                    | `73 52 4E`                                                          |
| Command       | Object evaluation result | String   | 22     |                    | `ObjectEvaluationResult` | `4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74` |

**Example: sRN ObjectEvaluationResult**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ObjectEvaluationResult<ETX>
```

```text
sRN ObjectEvaluationResult
```

```text
02 73 52 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1A 73 52 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 65
```

```text
73 52 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74
```


**Telegram structure: sRA ObjectEvaluationResult**

| Telegram part     | Description                                                                                                        | Variable | Length | Additional details                                                                             | Values CoLa A (ASCII)                                     | Values CoLa B (Binary)                                                                           |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ | -------- | ------ | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Command type      | Answer                                                                                                             | String   | 3      |                                                                                                | `sRA`                        | `73 52 41`                                                          |
| Command           | Object evaluation result                                                                                           | String   | 22     |                                                                                                | `ObjectEvaluationResult`     | `4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74` |
| Version           | Version number                                                                                                     | Uint_16  | 2      |                                                                                                | `1`                          | `00 01`                                                             |
| Timestamp         | Time of the last state change, in microseconds since January 1, 1970, 00:00 (UTC), based on the sensor system time | ULInt_64 | 8      |                                                                                                | `0 ... FFFFFFFFFFFFFFFFh`    | `00 00 00 00 00 00 00 00 ... FF FF FF FF FF FF FF FF`               |
| Evaluation result | State of evaluation 1                                                                                              | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                                  |
| Evaluation result | State of evaluation 2                                                                                              | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                                  |
| ..                |                                                                                                                    |          |        |                                                                                                |                                                           |                                                                                                  |
| Evaluation result | State of evaluation 48. The array always has 48 entries.                                                           | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                                  |

**Example: sRA ObjectEvaluationResult**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ObjectEvaluationResult{SPC}1{SPC}2AF4D38{SPC}2{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 20 32 41 46 34 44 33 38 20 32 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 55 73 52 41 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 00 01 00 00 00 00 02 AF 4D 38 02 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 91
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Receive Object Evaluation Result by Event [sEN ObjectEvaluationResult]

</summary>

This telegram starts or stops the `sSN ObjectEvaluationResult` event. The device sends the event when the state of an evaluation changes, not cyclically.

**Telegram structure: sEN ObjectEvaluationResult**

| Telegram part | Description              | Variable | Length | Additional details | Values CoLa A (ASCII)                                 | Values CoLa B (Binary)                                                                           |
| ------------- | ------------------------ | -------- | ------ | ------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Command type  | Event                    | String   | 3      |                    | `sEN`                    | `73 45 4E`                                                          |
| Command       | Object evaluation result | String   | 22     |                    | `ObjectEvaluationResult` | `4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74` |
| Reporting     | Start/ stop              | Enum_8   | 1      | Stop:<br>Start:    | `0<br>1`                 | `00<br>01`                                                          |

**Example: sEN ObjectEvaluationResult**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}ObjectEvaluationResult{SPC}1<ETX>
```

```text
sEN ObjectEvaluationResult 1
```

```text
02 73 45 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 45 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 01 53
```

```text
73 45 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 01
```


**Telegram structure: sEA ObjectEvaluationResult**

| Telegram part | Description              | Variable | Length | Additional details   | Values CoLa A (ASCII)                                 | Values CoLa B (Binary)                                                                           |
| ------------- | ------------------------ | -------- | ------ | -------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Command type  | Answer                   | String   | 3      |                      | `sEA`                    | `73 45 41`                                                          |
| Command       | Object evaluation result | String   | 22     |                      | `ObjectEvaluationResult` | `4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74` |
| Reporting     | Start/ stop              | Enum_8   | 1      | Stopped:<br>Started: | `0<br>1`                 | `00<br>01`                                                          |

**Example: sEA ObjectEvaluationResult**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}ObjectEvaluationResult{SPC}1<ETX>
```

```text
02 73 45 41 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 45 41 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 01 5C
```


The `sSN` event has the same parameters as the `sRA ObjectEvaluationResult` answer. The example shows evaluation 1 after its group was deactivated: state 1 (Inactive).

**Telegram structure: sSN ObjectEvaluationResult**

| Telegram part     | Description                                                                                                        | Variable | Length | Additional details                                                                             | Values CoLa A (ASCII)                                     | Values CoLa B (Binary)                                                                           |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ | -------- | ------ | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Command type      | Event                                                                                                              | String   | 3      |                                                                                                | `sSN`                        | `73 53 4E`                                                          |
| Command           | Object evaluation result                                                                                           | String   | 22     |                                                                                                | `ObjectEvaluationResult`     | `4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74` |
| Version           | Version number                                                                                                     | Uint_16  | 2      |                                                                                                | `1`                          | `00 01`                                                             |
| Timestamp         | Time of the last state change, in microseconds since January 1, 1970, 00:00 (UTC), based on the sensor system time | ULInt_64 | 8      |                                                                                                | `0 ... FFFFFFFFFFFFFFFFh`    | `00 00 00 00 00 00 00 00 ... FF FF FF FF FF FF FF FF`               |
| Evaluation result | State of evaluation 1                                                                                              | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                                  |
| Evaluation result | State of evaluation 2                                                                                              | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                                  |
| ..                |                                                                                                                    |          |        |                                                                                                |                                                           |                                                                                                  |
| Evaluation result | State of evaluation 48. The array always has 48 entries.                                                           | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                                  |

**Example: sSN ObjectEvaluationResult**

**CoLa A (ASCII)**

```text
<STX>sSN{SPC}ObjectEvaluationResult{SPC}1{SPC}22434938{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 53 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 20 32 32 34 33 34 39 33 38 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 55 73 53 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 00 01 00 00 00 00 22 43 49 38 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 54
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Object Evaluation Configuration State [sRN ObjectEvaluationConfigState]

</summary>

This telegram reports whether the configured evaluations stay within the resources of the device.

**Telegram structure: sRN ObjectEvaluationConfigState**

| Telegram part | Description                           | Variable | Length | Additional details | Values CoLa A (ASCII)                                      | Values CoLa B (Binary)                                                                                          |
| ------------- | ------------------------------------- | -------- | ------ | ------------------ | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Command type  | Read                                  | String   | 3      |                    | `sRN`                         | `73 52 4E`                                                                         |
| Command       | Object evaluation configuration state | String   | 27     |                    | `ObjectEvaluationConfigState` | `4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65` |

**Example: sRN ObjectEvaluationConfigState**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ObjectEvaluationConfigState<ETX>
```

```text
sRN ObjectEvaluationConfigState
```

```text
02 73 52 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 52 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65 31
```

```text
73 52 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65
```


**Telegram structure: sRA ObjectEvaluationConfigState**

| Telegram part            | Description                                                                    | Variable | Length | Additional details           | Values CoLa A (ASCII)                                      | Values CoLa B (Binary)                                                                                          |
| ------------------------ | ------------------------------------------------------------------------------ | -------- | ------ | ---------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Command type             | Answer                                                                         | String   | 3      |                              | `sRA`                         | `73 52 41`                                                                         |
| Command                  | Object evaluation configuration state                                          | String   | 27     |                              | `ObjectEvaluationConfigState` | `4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65` |
| Active beams limit       | Load from the beams that intersect the evaluations                             | Enum_8   | 1      | OK:<br>Warning:<br>Exceeded: | `0<br>1<br>2`                 | `00<br>01<br>02`                                                                   |
| Active evaluations limit | Load from the number of active evaluations                                     | Enum_8   | 1      | OK:<br>Warning:<br>Exceeded: | `0<br>1<br>2`                 | `00<br>01<br>02`                                                                   |
| Intersecting beams       | Number of beams that intersect evaluation 1                                    | Uint_16  | 2      |                              | `0 ... FFFFh`                 | `00 00 ... FF FF`                                                                  |
| ..                       |                                                                                |          |        |                              |                                                            |                                                                                                                 |
| Intersecting beams       | Number of beams that intersect evaluation 48. The array always has 48 entries. | Uint_16  | 2      |                              | `0 ... FFFFh`                 | `00 00 ... FF FF`                                                                  |
| Error list length        | Number of entries in the input/output error list (`InputIsOutputErrorList`)    | Uint_16  | 2      |                              | `0 ... 30h`                   | `00 00 ... 00 30`                                                                  |
| Error list entry         | Entry of the input/output error list                                           | Uint_16  | 2      |                              | `0 ... FFFFh`                 | `00 00 ... FF FF`                                                                  |

**Example: sRA ObjectEvaluationConfigState**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ObjectEvaluationConfigState{SPC}0{SPC}0{SPC}451{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65 20 30 20 30 20 34 35 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 84 73 52 41 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65 20 00 00 04 51 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 4B
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Activation of Object Evaluation Group [sMN ActivateObjectEvaluationGroup]

</summary>

This telegram activates or deactivates object evaluation groups. It switches only groups whose activation type is Telegram. For a group with the activation type Always, the device confirms the telegram, but the group stays active. Check the result with [sRN ObjectEvaluationGroupState](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-object-evaluation-group-state-srn-objectevaluationgroupstate).

**Telegram structure: sMN ActivateObjectEvaluationGroup**

| Telegram part    | Description                                   | Variable | Length | Additional details       | Values CoLa A (ASCII)                                        | Values CoLa B (Binary)                                                                                                |
| ---------------- | --------------------------------------------- | -------- | ------ | ------------------------ | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Command type     | Method                                        | String   | 3      |                          | `sMN`                           | `73 4D 4E`                                                                               |
| Command          | Activate / deactivate object evaluation group | String   | 29     |                          | `ActivateObjectEvaluationGroup` | `41 63 74 69 76 61 74 65 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70` |
| Number of groups | Number of following group entries             | Uint_16  | 2      |                          | `1 ... +48`                     | `00 01 ... 00 30`                                                                        |
| Group number     | Group 1                                       | Uint_16  | 2      |                          | `1 ... +48`                     | `00 01 ... 00 30`                                                                        |
| Activation       | Activate / deactivate the group               | Bool_1   | 1      | Deactivate:<br>Activate: | `0<br>1`                        | `00<br>01`                                                                               |
| ..               |                                               |          |        |                          |                                                              |                                                                                                                       |
| Group number     | Last group                                    | Uint_16  | 2      |                          | `1 ... +48`                     | `00 01 ... 00 30`                                                                        |
| Activation       | Activate / deactivate the group               | Bool_1   | 1      | Deactivate:<br>Activate: | `0<br>1`                        | `00<br>01`                                                                               |

**Example: sMN ActivateObjectEvaluationGroup**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}ActivateObjectEvaluationGroup{SPC}1{SPC}1{SPC}0<ETX>
```

```text
sMN ActivateObjectEvaluationGroup 1 1 0
```

```text
02 73 4D 4E 20 41 63 74 69 76 61 74 65 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 31 20 31 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 27 73 4D 4E 20 41 63 74 69 76 61 74 65 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 00 01 00 01 00 15
```

```text
73 4D 4E 20 41 63 74 69 76 61 74 65 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 00 01 00 01 00
```


**Telegram structure: sAN ActivateObjectEvaluationGroup**

| Telegram part     | Description                                   | Variable | Length | Additional details  | Values CoLa A (ASCII)                                        | Values CoLa B (Binary)                                                                                                |
| ----------------- | --------------------------------------------- | -------- | ------ | ------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Command type      | Answer                                        | String   | 3      |                     | `sAN`                           | `73 41 4E`                                                                               |
| Command           | Activate / deactivate object evaluation group | String   | 29     |                     | `ActivateObjectEvaluationGroup` | `41 63 74 69 76 61 74 65 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70` |
| Number of results | One result per group in the request           | Uint_16  | 2      |                     | `1 ... +48`                     | `00 01 ... 00 30`                                                                        |
| Result            | Result for the group                          | Bool_1   | 1      | Failed:<br>Success: | `0<br>1`                        | `00<br>01`                                                                               |

**Example: sAN ActivateObjectEvaluationGroup**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}ActivateObjectEvaluationGroup{SPC}1{SPC}1<ETX>
```

```text
02 73 41 4E 20 41 63 74 69 76 61 74 65 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 31 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 25 73 41 4E 20 41 63 74 69 76 61 74 65 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 00 01 01 19
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Object Evaluation Contour [sMN GetObjectEvaluationContour]

</summary>

This telegram returns the polygon and the Z limits of the region of an object evaluation. Coordinates are in the sensor coordinate system.

**Telegram structure: sMN GetObjectEvaluationContour**

| Telegram part | Description                             | Variable | Length | Additional details | Values CoLa A (ASCII)                                     | Values CoLa B (Binary)                                                                                       |
| ------------- | --------------------------------------- | -------- | ------ | ------------------ | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Command type  | Method                                  | String   | 3      |                    | `sMN`                        | `73 4D 4E`                                                                      |
| Command       | Read the region of an object evaluation | String   | 26     |                    | `GetObjectEvaluationContour` | `47 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |
| Evaluation ID | ID of the evaluation                    | Uint_16  | 2      |                    | `1 ... +48`                  | `00 01 ... 00 30`                                                               |

**Example: sMN GetObjectEvaluationContour**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}GetObjectEvaluationContour{SPC}1<ETX>
```

```text
sMN GetObjectEvaluationContour 1
```

```text
02 73 4D 4E 20 47 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 21 73 4D 4E 20 47 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 7A
```

```text
73 4D 4E 20 47 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01
```


**Telegram structure: sAN GetObjectEvaluationContour**

| Telegram part              | Description                                    | Variable | Length | Additional details                     | Values CoLa A (ASCII)                                     | Values CoLa B (Binary)                                                                                       |
| -------------------------- | ---------------------------------------------- | -------- | ------ | -------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Command type               | Answer                                         | String   | 3      |                                        | `sAN`                        | `73 41 4E`                                                                      |
| Command                    | Read the region of an object evaluation        | String   | 26     |                                        | `GetObjectEvaluationContour` | `47 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |
| Number of contours         | 0 if the evaluation does not exist             | Uint_16  | 2      |                                        | `0<br>1`                     | `00 00<br>00 01`                                                                |
| Evaluation ID              | ID of the evaluation                           | Uint_16  | 2      |                                        | `1 ... +48`                  | `00 01 ... 00 30`                                                               |
| Number of polygon vertices | At least 3, at most 100                        | Uint_16  | 2      |                                        | `3 ... +100`                 | `00 03 ... 00 64`                                                               |
| Polygon vertex             | X coordinate of the first vertex in mm         | Int_32   | 4      |                                        | `-100000 ... +100000`        | `FF FE 79 60 ... 00 01 86 A0`                                                   |
| Polygon vertex             | Y coordinate of the first vertex in mm         | Int_32   | 4      |                                        | `-100000 ... +100000`        | `FF FE 79 60 ... 00 01 86 A0`                                                   |
| ..                         |                                                |          |        |                                        |                                                           |                                                                                                              |
| Polygon vertex             | X coordinate of the last vertex in mm          | Int_32   | 4      |                                        | `-100000 ... +100000`        | `FF FE 79 60 ... 00 01 86 A0`                                                   |
| Polygon vertex             | Y coordinate of the last vertex in mm          | Int_32   | 4      |                                        | `-100000 ... +100000`        | `FF FE 79 60 ... 00 01 86 A0`                                                   |
| Lower Z limit              | Lower bound of the region in Z direction in mm | Int_32   | 4      | Must be less than the upper Z limit    | `-100000 ... +100000`        | `FF FE 79 60 ... 00 01 86 A0`                                                   |
| Upper Z limit              | Upper bound of the region in Z direction in mm | Int_32   | 4      | Must be greater than the lower Z limit | `-100000 ... +100000`        | `FF FE 79 60 ... 00 01 86 A0`                                                   |

**Example: sAN GetObjectEvaluationContour**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}GetObjectEvaluationContour{SPC}1{SPC}1{SPC}4{SPC}FFFFFF38{SPC}0{SPC}FFFFFCE0{SPC}64{SPC}FFFFFCE0{SPC}FFFFFE0C{SPC}FFFFFF38{SPC}FFFFFE0C{SPC}C8{SPC}7D0<ETX>
```

```text
02 73 41 4E 20 47 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 31 20 31 20 34 20 46 46 46 46 46 46 33 38 20 30 20 46 46 46 46 46 43 45 30 20 36 34 20 46 46 46 46 46 43 45 30 20 46 46 46 46 46 45 30 43 20 46 46 46 46 46 46 33 38 20 46 46 46 46 46 45 30 43 20 43 38 20 37 44 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4D 73 41 4E 20 47 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 00 01 00 04 FF FF FF 38 00 00 00 00 FF FF FC E0 00 00 00 64 FF FF FC E0 FF FF FE 0C FF FF FF 38 FF FF FE 0C 00 00 00 C8 00 00 07 D0 08
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Object Evaluation Contour [sMN SetObjectEvaluationContour]

</summary>

This telegram changes the polygon and the Z limits of the region of an existing object evaluation. The example sets a rectangle from -200 mm to -800 mm in X and from 100 mm to -500 mm in Y, between 200 mm and 2000 mm in Z.

**Telegram structure: sMN SetObjectEvaluationContour**

| Telegram part              | Description                                    | Variable | Length | Additional details                     | Values CoLa A (ASCII)                                     | Values CoLa B (Binary)                                                                                       |
| -------------------------- | ---------------------------------------------- | -------- | ------ | -------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Command type               | Method                                         | String   | 3      |                                        | `sMN`                        | `73 4D 4E`                                                                      |
| Command                    | Set the region of an object evaluation         | String   | 26     |                                        | `SetObjectEvaluationContour` | `53 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |
| Evaluation ID              | ID of the evaluation                           | Uint_16  | 2      |                                        | `1 ... +48`                  | `00 01 ... 00 30`                                                               |
| Number of polygon vertices | At least 3, at most 100                        | Uint_16  | 2      |                                        | `3 ... +100`                 | `00 03 ... 00 64`                                                               |
| Polygon vertex             | X coordinate of the first vertex in mm         | Int_32   | 4      |                                        | `-100000 ... +100000`        | `FF FE 79 60 ... 00 01 86 A0`                                                   |
| Polygon vertex             | Y coordinate of the first vertex in mm         | Int_32   | 4      |                                        | `-100000 ... +100000`        | `FF FE 79 60 ... 00 01 86 A0`                                                   |
| ..                         |                                                |          |        |                                        |                                                           |                                                                                                              |
| Polygon vertex             | X coordinate of the last vertex in mm          | Int_32   | 4      |                                        | `-100000 ... +100000`        | `FF FE 79 60 ... 00 01 86 A0`                                                   |
| Polygon vertex             | Y coordinate of the last vertex in mm          | Int_32   | 4      |                                        | `-100000 ... +100000`        | `FF FE 79 60 ... 00 01 86 A0`                                                   |
| Lower Z limit              | Lower bound of the region in Z direction in mm | Int_32   | 4      | Must be less than the upper Z limit    | `-100000 ... +100000`        | `FF FE 79 60 ... 00 01 86 A0`                                                   |
| Upper Z limit              | Upper bound of the region in Z direction in mm | Int_32   | 4      | Must be greater than the lower Z limit | `-100000 ... +100000`        | `FF FE 79 60 ... 00 01 86 A0`                                                   |

**Example: sMN SetObjectEvaluationContour**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}SetObjectEvaluationContour{SPC}1{SPC}4{SPC}-200{SPC}+0{SPC}-800{SPC}+100{SPC}-800{SPC}-500{SPC}-200{SPC}-500{SPC}+200{SPC}+2000<ETX>
```

```text
sMN SetObjectEvaluationContour 1 4 -200 +0 -800 +100 -800 -500 -200 -500 +200 +2000
```

```text
02 73 4D 4E 20 53 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 31 20 34 20 2D 32 30 30 20 2B 30 20 2D 38 30 30 20 2B 31 30 30 20 2D 38 30 30 20 2D 35 30 30 20 2D 32 30 30 20 2D 35 30 30 20 2B 32 30 30 20 2B 32 30 30 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4B 73 4D 4E 20 53 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 00 04 FF FF FF 38 00 00 00 00 FF FF FC E0 00 00 00 64 FF FF FC E0 FF FF FE 0C FF FF FF 38 FF FF FE 0C 00 00 00 C8 00 00 07 D0 11
```

```text
73 4D 4E 20 53 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 00 04 FF FF FF 38 00 00 00 00 FF FF FC E0 00 00 00 64 FF FF FC E0 FF FF FE 0C FF FF FF 38 FF FF FE 0C 00 00 00 C8 00 00 07 D0
```


**Telegram structure: sAN SetObjectEvaluationContour**

| Telegram part | Description                            | Variable | Length | Additional details                                                           | Values CoLa A (ASCII)                                     | Values CoLa B (Binary)                                                                                       |
| ------------- | -------------------------------------- | -------- | ------ | ---------------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Command type  | Answer                                 | String   | 3      |                                                                              | `sAN`                        | `73 41 4E`                                                                      |
| Command       | Set the region of an object evaluation | String   | 26     |                                                                              | `SetObjectEvaluationContour` | `53 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |
| Error code    | Result of the change                   | Enum_8   | 1      | No error:<br>Invalid evaluation ID:<br>Invalid polygon:<br>Invalid Z limits: | `0<br>1<br>2<br>3`           | `00<br>01<br>02<br>03`                                                          |

**Example: sAN SetObjectEvaluationContour**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}SetObjectEvaluationContour{SPC}0<ETX>
```

```text
02 73 41 4E 20 53 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 20 73 41 4E 20 53 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 63
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Object Evaluation Configuration [sMN GetObjectEvaluationConfiguration]

</summary>

This telegram returns the name and the criteria of an object evaluation.

**Telegram structure: sMN GetObjectEvaluationConfiguration**

| Telegram part | Description                               | Variable | Length | Additional details | Values CoLa A (ASCII)                                           | Values CoLa B (Binary)                                                                                                         |
| ------------- | ----------------------------------------- | -------- | ------ | ------------------ | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Command type  | Method                                    | String   | 3      |                    | `sMN`                              | `73 4D 4E`                                                                                        |
| Command       | Read the criteria of an object evaluation | String   | 32     |                    | `GetObjectEvaluationConfiguration` | `47 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |
| Evaluation ID | ID of the evaluation                      | Uint_16  | 2      |                    | `1 ... +48`                        | `00 01 ... 00 30`                                                                                 |

**Example: sMN GetObjectEvaluationConfiguration**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}GetObjectEvaluationConfiguration{SPC}1<ETX>
```

```text
sMN GetObjectEvaluationConfiguration 1
```

```text
02 73 4D 4E 20 47 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 27 73 4D 4E 20 47 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 00 01 74
```

```text
73 4D 4E 20 47 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 00 01
```


**Telegram structure: sAN GetObjectEvaluationConfiguration**

| Telegram part            | Description                                                          | Variable | Length   | Additional details             | Values CoLa A (ASCII)                                           | Values CoLa B (Binary)                                                                                                         |
| ------------------------ | -------------------------------------------------------------------- | -------- | -------- | ------------------------------ | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Command type             | Answer                                                               | String   | 3        |                                | `sAN`                              | `73 41 4E`                                                                                        |
| Command                  | Read the criteria of an object evaluation                            | String   | 32       |                                | `GetObjectEvaluationConfiguration` | `47 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |
| Number of configurations | 0 if the evaluation does not exist                                   | Uint_16  | 2        |                                | `0<br>1`                           | `00 00<br>00 01`                                                                                  |
| Evaluation ID            | ID of the evaluation                                                 | Uint_16  | 2        |                                | `1 ... +48`                        | `00 01 ... 00 30`                                                                                 |
| Name length              | Number of characters of the name                                     | Uint_16  | 2        |                                | `0 ... +20`                        | `00 00 ... 00 14`                                                                                 |
| Name                     | Name of the evaluation                                               | String   | 0 ... 20 |                                | `Evaluation 1`                     | `45 76 61 6C ...`                                                                                 |
| Version                  | Version of the parameter structure                                   | Uint_16  | 2        |                                | `1`                                | `00 01`                                                                                           |
| Number of parameter sets | Always 1                                                             | Uint_16  | 2        |                                | `1`                                | `00 01`                                                                                           |
| Maximum hidden time      | Maximum time in ms that a tracked object can be hidden in the region | Uint_16  | 2        |                                | `0 ... +1000`                      | `00 00 ... 03 E8`                                                                                 |
| Minimum object age       | Minimum time in ms that an object must be tracked                    | Uint_16  | 2        |                                | `0 ... FFFFh`                      | `00 00 ... FF FF`                                                                                 |
| Time for infringed state | Time in ms that a qualifying object must be in the region            | Uint_32  | 4        |                                | `1 ... FFFFFFFFh`                  | `00 00 00 01 ...`                                                                                 |
| Minimum object width     | Minimum horizontal size in mm                                        | Uint_32  | 4        |                                | `0 ... +200000`                    | `00 00 00 00 ... 00 03 0D 40`                                                                     |
| Minimum object height    | Minimum vertical size in mm                                          | Uint_32  | 4        |                                | `0 ... +200000`                    | `00 00 00 00 ... 00 03 0D 40`                                                                     |
| Maximum size filter      | Rejects objects larger than the maximum size                         | Bool_1   | 1        | Off:<br>On:                    | `0<br>1`                           | `00<br>01`                                                                                        |
| Maximum object width     | Maximum horizontal size in mm                                        | Uint_32  | 4        |                                | `0 ... +200000`                    | `00 00 00 00 ... 00 03 0D 40`                                                                     |
| Maximum object height    | Maximum vertical size in mm                                          | Uint_32  | 4        |                                | `0 ... +200000`                    | `00 00 00 00 ... 00 03 0D 40`                                                                     |
| Motion state             | Tracks that are evaluated                                            | Enum_8   | 1        | All:<br>Moving:<br>Stationary: | `0<br>1<br>2`                      | `00<br>01<br>02`                                                                                  |
| Speed filter             | Evaluates only tracks within the speed range                         | Bool_1   | 1        | Off:<br>On:                    | `0<br>1`                           | `00<br>01`                                                                                        |
| Minimum speed            | Minimum speed in mm/s                                                | Uint_32  | 4        |                                | `0 ... +65000`                     | `00 00 00 00 ... 00 00 FD E8`                                                                     |
| Maximum speed            | Maximum speed in mm/s                                                | Uint_32  | 4        |                                | `0 ... +65000`                     | `00 00 00 00 ... 00 00 FD E8`                                                                     |
| Direction filter         | Evaluates only tracks that move in the configured direction          | Bool_1   | 1        | Off:<br>On:                    | `0<br>1`                           | `00<br>01`                                                                                        |
| Direction                | Direction of movement in degrees                                     | Int_16   | 2        |                                | `-180 ... +180`                    | `FF 4C ... 00 B4`                                                                                 |
| Direction uncertainty    | Accepted deviation from the direction in degrees                     | Uint_16  | 2        |                                | `0 ... +180`                       | `00 00 ... 00 B4`                                                                                 |
| Reserved                 | Reserved1 ... Reserved6, 6 values. Send 0; the device returns 0.     | Int_32   | 4        |                                | `0`                                | `00 00 00 00`                                                                                     |
| Reserved parameters 1    | Number of entries, always 0                                          | Uint_16  | 2        |                                | `0`                                | `00 00`                                                                                           |
| Reserved parameters 2    | Number of entries, always 0                                          | Uint_16  | 2        |                                | `0`                                | `00 00`                                                                                           |

**Example: sAN GetObjectEvaluationConfiguration**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}GetObjectEvaluationConfiguration{SPC}1{SPC}1{SPC}C{SPC}Evaluation{SPC}1{SPC}1{SPC}1{SPC}1F4{SPC}0{SPC}1F4{SPC}C8{SPC}0{SPC}0{SPC}7D0{SPC}7D0{SPC}1{SPC}1{SPC}12C{SPC}3A98{SPC}0{SPC}B4{SPC}5A{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 41 4E 20 47 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 31 20 31 20 43 20 45 76 61 6C 75 61 74 69 6F 6E 20 31 20 31 20 31 20 31 46 34 20 30 20 31 46 34 20 43 38 20 30 20 30 20 37 44 30 20 37 44 30 20 31 20 31 20 31 32 43 20 33 41 39 38 20 30 20 42 34 20 35 41 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 7F 73 41 4E 20 47 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 00 01 00 01 00 0C 45 76 61 6C 75 61 74 69 6F 6E 20 31 00 01 00 01 01 F4 00 00 00 00 01 F4 00 00 00 C8 00 00 00 00 00 00 00 07 D0 00 00 07 D0 01 01 00 00 01 2C 00 00 3A 98 00 00 B4 00 5A 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 FB
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Set Object Evaluation Configuration [sMN SetObjectEvaluationConfiguration]

</summary>

This telegram changes the name and the criteria of an existing object evaluation. Write all parameters; read the current configuration first and change only the values you need. The example sets evaluation 1 to moving objects of at least 200 mm width with a speed between 300 mm/s and 15000 mm/s.

Values outside the allowed range are rejected with `sFA 30`, and a name longer than 20 characters with `sFA 7`. A minimum that is greater than its maximum, for example for the size or speed, returns error code 2.

**Telegram structure: sMN SetObjectEvaluationConfiguration**

| Telegram part            | Description                                                          | Variable | Length   | Additional details             | Values CoLa A (ASCII)                                           | Values CoLa B (Binary)                                                                                                         |
| ------------------------ | -------------------------------------------------------------------- | -------- | -------- | ------------------------------ | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Command type             | Method                                                               | String   | 3        |                                | `sMN`                              | `73 4D 4E`                                                                                        |
| Command                  | Set the criteria of an object evaluation                             | String   | 32       |                                | `SetObjectEvaluationConfiguration` | `53 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |
| Evaluation ID            | ID of the evaluation                                                 | Uint_16  | 2        |                                | `1 ... +48`                        | `00 01 ... 00 30`                                                                                 |
| Name length              | Number of characters of the name                                     | Uint_16  | 2        |                                | `0 ... +20`                        | `00 00 ... 00 14`                                                                                 |
| Name                     | Name of the evaluation                                               | String   | 0 ... 20 |                                | `Evaluation 1`                     | `45 76 61 6C ...`                                                                                 |
| Version                  | Version of the parameter structure                                   | Uint_16  | 2        |                                | `1`                                | `00 01`                                                                                           |
| Number of parameter sets | Always 1                                                             | Uint_16  | 2        |                                | `1`                                | `00 01`                                                                                           |
| Maximum hidden time      | Maximum time in ms that a tracked object can be hidden in the region | Uint_16  | 2        |                                | `0 ... +1000`                      | `00 00 ... 03 E8`                                                                                 |
| Minimum object age       | Minimum time in ms that an object must be tracked                    | Uint_16  | 2        |                                | `0 ... FFFFh`                      | `00 00 ... FF FF`                                                                                 |
| Time for infringed state | Time in ms that a qualifying object must be in the region            | Uint_32  | 4        |                                | `1 ... FFFFFFFFh`                  | `00 00 00 01 ...`                                                                                 |
| Minimum object width     | Minimum horizontal size in mm                                        | Uint_32  | 4        |                                | `0 ... +200000`                    | `00 00 00 00 ... 00 03 0D 40`                                                                     |
| Minimum object height    | Minimum vertical size in mm                                          | Uint_32  | 4        |                                | `0 ... +200000`                    | `00 00 00 00 ... 00 03 0D 40`                                                                     |
| Maximum size filter      | Rejects objects larger than the maximum size                         | Bool_1   | 1        | Off:<br>On:                    | `0<br>1`                           | `00<br>01`                                                                                        |
| Maximum object width     | Maximum horizontal size in mm                                        | Uint_32  | 4        |                                | `0 ... +200000`                    | `00 00 00 00 ... 00 03 0D 40`                                                                     |
| Maximum object height    | Maximum vertical size in mm                                          | Uint_32  | 4        |                                | `0 ... +200000`                    | `00 00 00 00 ... 00 03 0D 40`                                                                     |
| Motion state             | Tracks that are evaluated                                            | Enum_8   | 1        | All:<br>Moving:<br>Stationary: | `0<br>1<br>2`                      | `00<br>01<br>02`                                                                                  |
| Speed filter             | Evaluates only tracks within the speed range                         | Bool_1   | 1        | Off:<br>On:                    | `0<br>1`                           | `00<br>01`                                                                                        |
| Minimum speed            | Minimum speed in mm/s                                                | Uint_32  | 4        |                                | `0 ... +65000`                     | `00 00 00 00 ... 00 00 FD E8`                                                                     |
| Maximum speed            | Maximum speed in mm/s                                                | Uint_32  | 4        |                                | `0 ... +65000`                     | `00 00 00 00 ... 00 00 FD E8`                                                                     |
| Direction filter         | Evaluates only tracks that move in the configured direction          | Bool_1   | 1        | Off:<br>On:                    | `0<br>1`                           | `00<br>01`                                                                                        |
| Direction                | Direction of movement in degrees                                     | Int_16   | 2        |                                | `-180 ... +180`                    | `FF 4C ... 00 B4`                                                                                 |
| Direction uncertainty    | Accepted deviation from the direction in degrees                     | Uint_16  | 2        |                                | `0 ... +180`                       | `00 00 ... 00 B4`                                                                                 |
| Reserved                 | Reserved1 ... Reserved6, 6 values. Send 0; the device returns 0.     | Int_32   | 4        |                                | `0`                                | `00 00 00 00`                                                                                     |
| Reserved parameters 1    | Number of entries, always 0                                          | Uint_16  | 2        |                                | `0`                                | `00 00`                                                                                           |
| Reserved parameters 2    | Number of entries, always 0                                          | Uint_16  | 2        |                                | `0`                                | `00 00`                                                                                           |

**Example: sMN SetObjectEvaluationConfiguration**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}SetObjectEvaluationConfiguration{SPC}1{SPC}+12{SPC}Evaluation{SPC}1{SPC}1{SPC}1{SPC}+500{SPC}+0{SPC}+500{SPC}+200{SPC}+0{SPC}0{SPC}+2000{SPC}+2000{SPC}1{SPC}1{SPC}+300{SPC}+15000{SPC}0{SPC}+180{SPC}+90{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
sMN SetObjectEvaluationConfiguration 1 +12 Evaluation 1 1 1 +500 +0 +500 +200 +0 0 +2000 +2000 1 1 +300 +15000 0 +180 +90 0 0 0 0 0 0 0 0
```

```text
02 73 4D 4E 20 53 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 31 20 2B 31 32 20 45 76 61 6C 75 61 74 69 6F 6E 20 31 20 31 20 31 20 2B 35 30 30 20 2B 30 20 2B 35 30 30 20 2B 32 30 30 20 2B 30 20 30 20 2B 32 30 30 30 20 2B 32 30 30 30 20 31 20 31 20 2B 33 30 30 20 2B 31 35 30 30 30 20 30 20 2B 31 38 30 20 2B 39 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 7D 73 4D 4E 20 53 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 00 01 00 0C 45 76 61 6C 75 61 74 69 6F 6E 20 31 00 01 00 01 01 F4 00 00 00 00 01 F4 00 00 00 C8 00 00 00 00 00 00 00 07 D0 00 00 07 D0 01 01 00 00 01 2C 00 00 3A 98 00 00 B4 00 5A 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 E2
```

```text
73 4D 4E 20 53 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 00 01 00 0C 45 76 61 6C 75 61 74 69 6F 6E 20 31 00 01 00 01 01 F4 00 00 00 00 01 F4 00 00 00 C8 00 00 00 00 00 00 00 07 D0 00 00 07 D0 01 01 00 00 01 2C 00 00 3A 98 00 00 B4 00 5A 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
```


**Telegram structure: sAN SetObjectEvaluationConfiguration**

| Telegram part | Description                              | Variable | Length | Additional details                                            | Values CoLa A (ASCII)                                           | Values CoLa B (Binary)                                                                                                         |
| ------------- | ---------------------------------------- | -------- | ------ | ------------------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Command type  | Answer                                   | String   | 3      |                                                               | `sAN`                              | `73 41 4E`                                                                                        |
| Command       | Set the criteria of an object evaluation | String   | 32     |                                                               | `SetObjectEvaluationConfiguration` | `53 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |
| Error code    | Result of the change                     | Enum_8   | 1      | No error:<br>Invalid evaluation ID:<br>Invalid configuration: | `0<br>1<br>2`                      | `00<br>01<br>02`                                                                                  |

**Example: sAN SetObjectEvaluationConfiguration**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}SetObjectEvaluationConfiguration{SPC}0<ETX>
```

```text
02 73 41 4E 20 53 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 26 73 41 4E 20 53 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 00 6D
```

**Additional Parameter Read Commands**

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

| Telegram part | Description                   | Variable | Length | Additional details | Values CoLa A (ASCII)                                      | Values CoLa B (Binary)                                                                                          |
| ------------- | ----------------------------- | -------- | ------ | ------------------ | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Command type  | Read                          | String   | 3      |                    | `sRN`                         | `73 52 4E`                                                                         |
| Command       | Perpendicular distance values | String   | 27     |                    | `perpendicularDistanceResult` | `70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74` |

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

| Telegram part      | Description                                                                                                                                                                                                            | Variable | Length | Additional details | Values CoLa A (ASCII)                                                  | Values CoLa B (Binary)                                                                                          |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------ | ------------------ | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Command type       | Answer                                                                                                                                                                                                                 | String   | 3      |                    | `sRA`                                     | `73 52 41`                                                                         |
| Command            | Perpendicular distance values                                                                                                                                                                                          | String   | 27     |                    | `perpendicularDistanceResult`             | `70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74` |
| Timestamp          | Time of the latest object detection in the defined fields. Time base is the sensor system time in milliseconds since January 1, 1970, 00:00 (UTC). If a time server is being used, the configured system time is used. | Uint_64  | 8      |                    | `0 ... FFFFFFFFFFFFFFFF`                  | `00 00 00 00 00 00 00 00... FF FF FF FF FF FF FF FF`                               |
| Amount of channels | Amount of perpendicular distance evaluation channels/fields                                                                                                                                                            | Uint_16  | 2      |                    | `0 ... +20`                               | `00 00 ... 00 14`                                                                  |
| Evaluation ID X    | ID of perpendicular distance field                                                                                                                                                                                     | Uint_16  | 2      |                    | `1 ... 20d (1 ... 14h)`                   | `00 01 ... 00 14`                                                                  |
| Evaluation ID X    | Minimum distance [mm]                                                                                                                                                                                                  | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |
| Evaluation ID X    | Maximum distance [mm]                                                                                                                                                                                                  | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |
| Evaluation ID X    | X minimum distance [mm]                                                                                                                                                                                                | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |
| Evaluation ID X    | Y minimum distance [mm]                                                                                                                                                                                                | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |
| Evaluation ID X    | Reserved                                                                                                                                                                                                               | Int_32   | 4      | Always:            | `0`                                       | `00 00 00 00`                                                                      |
| Evaluation ID X    | X maximum distance [mm]                                                                                                                                                                                                | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |
| Evaluation ID X    | Y maximum distance [mm]                                                                                                                                                                                                | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |
| Evaluation ID X    | Reserved                                                                                                                                                                                                               | Int_32   | 4      | Always:            | `0`                                       | `00 00 00 00`                                                                      |
| Evaluation ID ..   | ..                                                                                                                                                                                                                     | ..       | ..     | ..                 | `..`                                      | `..`                                                                               |

**Example: sRA perpendicularDistanceResult**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}perpendicularDistanceResult{SPC}A065478{SPC}0<ETX>
```

```text
02 73 52 41 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 20 41 30 36 35 34 37 38 20 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2A 73 52 41 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 20 00 00 00 00 0A 06 54 78 00 00 32
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Request Perpendicular Distance Continuously on Event [sEN perpendicularDistanceResult]

</summary>

This telegram can be used to request the perpendicular distance continuously on event. The shortest and furthest measuring point in a range to a reference plane will be transmitted. A field and a reference plane must be defined in the user interface under Application > Perpendicular distance measurement.

**Telegram structure: sEN perpendicularDistanceResult**

| Telegram part | Description                   | Variable | Length | Additional details | Values CoLa A (ASCII)                                      | Values CoLa B (Binary)                                                                                          |
| ------------- | ----------------------------- | -------- | ------ | ------------------ | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Command type  | Event                         | String   | 3      |                    | `sEN`                         | `73 45 4E`                                                                         |
| Command       | Perpendicular distance values | String   | 27     |                    | `perpendicularDistanceResult` | `70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74` |
| Start/ Stop   | -                             | Enum_8   | 1      | Stop:<br>Start:    | `0<br>1`                      | `00<br>01`                                                                         |

**Example: sEN perpendicularDistanceResult**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}perpendicularDistanceResult{SPC}1<ETX>
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


**Example: sEA perpendicularDistanceResult**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}perpendicularDistanceResult{SPC}1<ETX>
```

```text
02 73 45 41 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 20 31 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 21 73 45 41 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 20 01 04
```


**Telegram structure: sSN perpendicularDistanceResult**

| Telegram part      | Description                                                                                                                                                                                                            | Variable | Length | Additional details | Values CoLa A (ASCII)                                                  | Values CoLa B (Binary)                                                                                          |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------ | ------------------ | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Command type       | Answer                                                                                                                                                                                                                 | String   | 3      |                    | `sSN`                                     | `73 53 4E`                                                                         |
| Command            | Perpendicular distance values                                                                                                                                                                                          | String   | 27     |                    | `perpendicularDistanceResult`             | `70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74` |
| Timestamp          | Time of the latest object detection in the defined fields. Time base is the sensor system time in milliseconds since January 1, 1970, 00:00 (UTC). If a time server is being used, the configured system time is used. | Uint_64  | 8      |                    | `0 ... FFFFFFFFFFFFFFFF`                  | `00 00 00 00 00 00 00 00... FF FF FF FF FF FF FF FF`                               |
| Amount of channels | Amount of perpendicular distance evaluation channels/fields                                                                                                                                                            | Uint_16  | 2      |                    | `0 ... +20`                               | `00 00 ... 00 14`                                                                  |
| Evaluation ID X    | ID of perpendicular distance field                                                                                                                                                                                     | Uint_16  | 2      |                    | `1 ... 20d (1 ... 14h)`                   | `00 01 ... 00 14`                                                                  |
| Evaluation ID X    | Minimum distance [mm]                                                                                                                                                                                                  | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |
| Evaluation ID X    | Maximum distance [mm]                                                                                                                                                                                                  | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |
| Evaluation ID X    | X minimum distance [mm]                                                                                                                                                                                                | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |
| Evaluation ID X    | Y minimum distance [mm]                                                                                                                                                                                                | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |
| Evaluation ID X    | Reserved                                                                                                                                                                                                               | Int_32   | 4      | Always:            | `0`                                       | `00 00 00 00`                                                                      |
| Evaluation ID X    | X maximum distance [mm]                                                                                                                                                                                                | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |
| Evaluation ID X    | Y maximum distance [mm]                                                                                                                                                                                                | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |
| Evaluation ID X    | Reserved                                                                                                                                                                                                               | Int_32   | 4      | Always:            | `0`                                       | `00 00 00 00`                                                                      |
| Evaluation ID ..   | ..                                                                                                                                                                                                                     | ..       | ..     | ..                 | `..`                                      | `..`                                                                               |

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

| Telegram part | Description          | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |
| ------------- | -------------------- | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ |
| Command type  | Read                 | String   | 3      |                    | `sRN`    | `73 52 4E`          |
| Command       | Read operating hours | String   | 6      |                    | `ODoprh` | `4F 44 6F 70 72 68` |

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

| Telegram part | Description               | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                  |
| ------------- | ------------------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------- |
| Command type  | Answer                    | String   | 3      |                    | `sRA`            | `73 52 41`                 |
| Command       | Read operating hours      | String   | 6      |                    | `ODoprh`         | `4F 44 6F 70 72 68`        |
| Value         | Operating hours in 1/10 h | Uint_32  | 4      |                    | `0h … FFFFFFFFh` | `00 00 00 00 …FF FF FF FF` |

Calculation of the value: 1B50B (hex) 111883 (dez) × 1/10 h = 11188.3 h

**Example: sRA ODoprh**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ODoprh{SPC}413<ETX>
```

```text
02 73 52 41 20 4F 44 6F 70 72 68 20 34 31 33 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 41 20 4F 44 6F 70 72 68 20 00 00 04 13 79
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Operating Hours Since Last Power On [sRN ODopdaily]

</summary>

Shows the runtime duration since the last power on of the device.

**Telegram structure: sRN ODopdaily**

| Telegram part | Description          | Variable | Length | Additional details | Values CoLa A (ASCII)                    | Values CoLa B (Binary)                                    |
| ------------- | -------------------- | -------- | ------ | ------------------ | ---------------------------------------- | --------------------------------------------------------- |
| Command type  | Read                 | String   | 3      |                    | `sRN`       | `73 52 4E`                   |
| Command       | Read operating hours | String   | 9      |                    | `ODopdaily` | `4F 44 6F 70 64 61 69 6C 79` |

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

| Telegram part | Description                              | Variable                           | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                    |
| ------------- | ---------------------------------------- | ---------------------------------- | ------ | ------------------ | --------------------------------------------- | --------------------------------------------------------- |
| Command type  | Answer                                   | String                             | 3      |                    | `sRA`            | `73 52 41`                   |
| Command       | Read operating hours since last power on | String                             | 9      |                    | `ODopdaily`      | `4F 44 6F 70 64 61 69 6C 79` |
| Value         | Operating hours in 1/10 h                | Real as float according to IEEE754 | 4      |                    | `0h … FFFFFFFFh` | `00 00 00 00 …FF FF FF FF`   |

**Example: sRA ODopdaily**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ODopdaily{SPC}3E088B3B<ETX>
```

```text
02 73 52 41 20 4F 44 6F 70 64 61 69 6C 79 20 33 45 30 38 38 42 33 42 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 41 20 4F 44 6F 70 64 61 69 6C 79 20 3E 08 8B 3B 8B
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Power on Counter [sRN ODpwrc]

</summary>

Shows the number of power on cycles.

**Telegram structure: sRN ODpwrc**

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |
| ------------- | --------------------- | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ |
| Command type  | Read                  | String   | 3      |                    | `sRN`    | `73 52 4E`          |
| Command       | Read power on counter | String   | 6      |                    | `ODpwrc` | `4F 44 70 77 72 63` |

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

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                  |
| ------------- | --------------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------- |
| Command type  | Answer                | String   | 3      |                    | `sRA`            | `73 52 41`                 |
| Command       | Read power on counter | String   | 6      |                    | `ODpwrc`         | `4F 44 70 77 72 63`        |
| Value         | Power on counter      | Uint_32  | 4      |                    | `0h … FFFFFFFFh` | `00 00 00 00 …FF FF FF FF` |

**Example: sRA ODpwrc**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ODpwrc{SPC}6E<ETX>
```

```text
02 73 52 41 20 4F 44 70 77 72 63 20 36 45 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 41 20 4F 44 70 77 72 63 20 00 00 00 6E 13
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Temperature [sRN OPcurtmpdev]

</summary>

With this command the internal temperature of the device can be identified. Please note that it does not give an indication of the current ambient temperature.

**Telegram structure: sRN OPcurtmpdev**

| Telegram part | Description                    | Variable | Length | Additional details | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |
| ------------- | ------------------------------ | -------- | ------ | ------------------ | ------------------------------------------ | --------------------------------------------------------------- |
| Command type  | Read                           | String   | 3      |                    | `sRN`         | `73 52 4E`                         |
| Command       | Read temperature of the device | String   | 11     |                    | `OPcurtmpdev` | `4F 50 63 75 72 74 6D 70 64 65 76` |

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

| Telegram part    | Description                    | Variable                           | Length | Additional details | Values CoLa A (ASCII)                                | Values CoLa B (Binary)                                          |
| ---------------- | ------------------------------ | ---------------------------------- | ------ | ------------------ | ---------------------------------------------------- | --------------------------------------------------------------- |
| Command type     | Answer                         | String                             | 3      |                    | `sRA`                   | `73 52 41`                         |
| Command          | Read temperature of the device | String                             | 11     |                    | `OPcurtmpdev`           | `4F 50 63 75 72 74 6D 70 64 65 76` |
| Temperature data | [°C]                           | Real as float according to IEEE754 | 4      | (-50°C … +100°C)   | `C2480000h … 42C80000h` | `C2 48 00 00 … 42 C8 00 00`        |

**Example: sRA OPcurtmpdev**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}OPcurtmpdev{SPC}422BDE83<ETX>
```

```text
02 73 52 41 20 4F 50 63 75 72 74 6D 70 64 65 76 20 34 32 32 42 44 45 38 33 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 41 20 4F 50 63 75 72 74 6D 70 64 65 76 20 42 2B DE 83 31
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Date of Last Permanent Save [sRN DIpara]

</summary>

This command reads the date at which the last permanent save was executed.

**Telegram structure: sRN DIpara**

| Telegram part | Description                      | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |
| ------------- | -------------------------------- | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ |
| Command type  | Read                             | String   | 3      |                    | `sRN`    | `73 52 4E`          |
| Command       | Read date of last permanent save | String   | 6      |                    | `DIpara` | `44 49 70 61 72 61` |

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

| Telegram part               | Description                                       | Variable   | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                           |
| --------------------------- | ------------------------------------------------- | ---------- | ------ | ------------------ | -------------------------------------------- | ------------------------------------------------ |
| Command type                | Answer                                            | String     | 3      |                    | `sRA`           | `73 52 41`          |
| Command                     | Read date of last permanent save                  | String     | 6      |                    | `DIpara`        | `44 49 70 61 72 61` |
| String length               | Number of bytes in the following date/time string | Uint_16    | 2      | Always:            | `Ah`            | `00 0A`             |
| Date of last permanent save | DD.MM.YYYY                                        | FlexString | 10     |                    | `(see example)` | `(see example)`     |

**Example: sRA DIpara**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}DIpara{SPC}A{SPC}06.10.2026<ETX>
```

```text
02 73 52 41 20 44 49 70 61 72 61 20 41 20 30 36 2E 31 30 2E 32 30 32 36 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 52 41 20 44 49 70 61 72 61 20 00 0A 30 36 2E 31 30 2E 32 30 32 36 64
```

</details>

<details class="cola-telegram" markdown="1">
<summary markdown="block">

### Read Time of Last Permanent Save [sRN DIparatm]

</summary>

This command reads the time at which the last permanent save was executed.

**Telegram structure: sRN DIparatm**

| Telegram part | Description                      | Variable | Length | Additional details | Values CoLa A (ASCII)                   | Values CoLa B (Binary)                                 |
| ------------- | -------------------------------- | -------- | ------ | ------------------ | --------------------------------------- | ------------------------------------------------------ |
| Command type  | Read                             | String   | 3      |                    | `sRN`      | `73 52 4E`                |
| Command       | Read time of last permanent save | String   | 8      |                    | `DIparatm` | `44 49 70 61 72 61 74 6D` |

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

| Telegram part               | Description                                       | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                 |
| --------------------------- | ------------------------------------------------- | -------- | ------ | ------------------ | -------------------------------------------- | ------------------------------------------------------ |
| Command type                | Answer                                            | String   | 3      |                    | `sRA`           | `73 52 41`                |
| Command                     | Read time of last permanent save                  | String   | 8      |                    | `DIparatm`      | `44 49 70 61 72 61 74 6D` |
| String length               | Number of bytes in the following date/time string | Uint_16  | 2      | Always:            | `5h`            | `00 05`                   |
| Time of last permanent save | HH:MM                                             | String   | 5      |                    | `(see example)` | `(see example)`           |

**Example: sRA DIparatm**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}DIparatm{SPC}5{SPC}10:30<ETX>
```

```text
02 73 52 41 20 44 49 70 61 72 61 74 6D 20 35 20 31 30 3A 33 30 03
```


**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 41 20 44 49 70 61 72 61 74 6D 20 00 05 31 30 3A 33 30 4B
```

</details>

</section>
