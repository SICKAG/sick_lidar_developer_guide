# LRS4000 CoLa Telegram Listing (CoLa A and CoLa B)

> LRS4000 CoLa telegram reference with sRN, sWN, sMN, and sEN commands, parameter structures, and CoLa A and CoLa B examples.

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/cola-telegram-listing/

# CoLa Telegram Listing

This reference lists the CoLa telegrams supported by the LRS4000. Use the
command details to build or troubleshoot PLC and other low-level
integrations without guessing the telegram structure. For connection
setup, framing, and log in, see
[CoLa Interface](https://sickag.github.io/sick_lidar_developer_guide/configuration/cola-interface/).

Entries follow the telegram order in the LRS4000 operating instructions. Detailed entries list request and response structures, examples, variable types, lengths, and CoLa A and CoLa B values where applicable.

**Telegram structure: "Command type" "Command"**

| Telegram part                              | Description                                 | Variable                          | Length                      | Additional details                                                             | Values CoLa A (ASCII)                                     | Values CoLa B (Binary)                                     |     |
| ------------------------------------------ | ------------------------------------------- | --------------------------------- | --------------------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------- | ---------------------------------------------------------- | --- |
| Lists the different parts of the telegram. | Describes the corresponding telegram parts. | Defines the type of the variable. | Defines the length in byte. | Gives further information regarding the values in CoLa A/ CoLa B if necessary. | Defines the value of the telegram part in CoLa A (ASCII). | Defines the value of the telegram part in CoLa B (Binary). |     |

Commands are colored blue, parameters orange for further differentiation.

**Example: "Command type" "Command"**

| Protocol | Example                                                                                                                                                                                                      |     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<"Start of text">"Command type value (ASCII)""space""Command value (ASCII)""space""Parameter value (ASCII)""space""Parameter value (ASCII)"<"End of text">`        |     |
| CoLa A   | Copy example with framing (ASCII)                                                                                                                                                                            |     |
| CoLa A   | Copy example without framing (ASCII)                                                                                                                                                                         |     |
| CoLa A   | Copy example with framing (Hex)                                                                                                                                                                              |     |
| CoLa B   | `"Start of text and given length" "Command type value (Binary)""space""Command value (Binary)""space""Parameter value (Binary)""Parameter value (Binary)""Calculated checksum"` |     |
| CoLa B   | Copy example without framing (Binary)                                                                                                                                                                        |     |

**Telegram structure: "Command type" "Command" (Answer)**

| Telegram part                              | Description                                 | Variable                          | Length                      | Additional details                                                             | Values CoLa A (ASCII)                                     | Values CoLa B (Binary)                                     |     |
| ------------------------------------------ | ------------------------------------------- | --------------------------------- | --------------------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------- | ---------------------------------------------------------- | --- |
| Lists the different parts of the telegram. | Describes the corresponding telegram parts. | Defines the type of the variable. | Defines the length in byte. | Gives further information regarding the values in CoLa A/ CoLa B if necessary. | Defines the value of the telegram part in CoLa A (ASCII). | Defines the value of the telegram part in CoLa B (Binary). |     |

## General

### Log In [sMN SetAccessMode]

A log in to the device is necessary to change parameters. In most cases, the user level 'Authorized client' is needed. Changed parameters are reset to the previous state via a reboot unless they are saved. To save parameter changes, send "sMN mEEwriteall" before logging out.

**Telegram structure: sMN SetAccessMode**

| Telegram part | Description                            | Variable | Length | Additional details                             | Values CoLa A (ASCII)                                           | Values CoLa B (Binary)                                                   |     |
| ------------- | -------------------------------------- | -------- | ------ | ---------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------ | --- |
| Command type  | Method                                 | String   | 3      |                                                | `sMN`                              | `73 4D 4E`                                  |     |
| Command       | User level                             | String   | 13     |                                                | `SetAccessMode`                    | `53 65 74 41 63 63 65 73 73 4D 6F 64 65`    |     |
| User level    | Select user level                      | Int_8    | 1      | Maintenance:<br>Authorized client:<br>Service: | `2<br>3<br>4`                      | `02<br>03<br>04`                            |     |
| Password      | Hash value for the selected user level | Uint_32  | 4      | Maintenance:<br>Authorized client:<br>Service: | `B21ACE26<br>F4724744<br>81BE23AA` | `B2 1A CE 26<br>F4 72 47 44<br>81 BE 23 AA` |     |

**Example: sMN SetAccessMode - Log in as “Authorized client” with password “F4724744”**

| Protocol | Example                                                                                                                        |     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sMN{SPC}SetAccessMode{SPC}3{SPC}F4724744<ETX>`                                  |     |
| CoLa A   | `<STX>sMN SetAccessMode 3 F4724744<ETX>`                                              |     |
| CoLa A   | `sMN SetAccessMode 3 F4724744`                                                                    |     |
| CoLa A   | `02 73 4D 4E 20 53 65 74 41 63 63 65 73 73 4D 6F 64 65 20 30 33 20 46 34 37 32 34 37 34 34 03`    |     |
| CoLa B   | `02 02 02 02 00 00 00 17 73 4D 4E 20 53 65 74 41 63 63 65 73 73 4D 6F 64 65 20 03 F4 72 47 44 B3` |     |
| CoLa B   | `73 4D 4E 20 53 65 74 41 63 63 65 73 73 4D 6F 64 65 20 03 F4 72 47 44`                            |     |

**Telegram structure: sAN SetAccessMode**

| Telegram part     | Description   | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |     |
| ----------------- | ------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- | --- |
| Command type      | Answer        | String   | 3      |                    | `sAN`           | `73 41 4E`                               |     |
| Command           | User level    | String   | 13     |                    | `SetAccessMode` | `53 65 74 41 63 63 65 73 73 4D 6F 64 65` |     |
| Change user level | Changed level | Bool_1   | 1      | Error:<br>Success: | `0<br>1`        | `00<br>01`                               |     |

**Example: sAN SetAccessMode**

| Protocol | Example                                                                                                            |     |
| -------- | ------------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sAN{SPC}SetAccessMode{SPC}1<ETX>`                                   |     |
| CoLa A   | `02 73 41 4E 20 53 65 74 41 63 63 65 73 73 4D 6F 64 65 20 31 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 13 73 41 4E 20 53 65 74 41 63 63 65 73 73 4D 6F 64 65 20 01 38` |     |

### Read for Frequency and Angular Resolution [sRN LMPscancfg]

Read the scanning frequency, angular resolution and aperture angle of the device. Values show the information of the values before any filters are applied. Therefore aperture angle is always showing the maximum, scanning frequency and angular resolution may also be static depending on device family.

**Telegram structure: sRN LMPscancfg**

| Telegram part | Description                                   | Variable | Length | Additional details | Values CoLa A (ASCII)                     | Values CoLa B (Binary)                                       |     |
| ------------- | --------------------------------------------- | -------- | ------ | ------------------ | ----------------------------------------- | ------------------------------------------------------------ | --- |
| Command type  | Read                                          | String   | 3      |                    | `sRN`        | `73 52 4E`                      |     |
| Command       | Info of scan frequency and angular resolution | String   | 10     |                    | `LMPscancfg` | `4C 4D 50 73 63 61 6E 63 66 67` |     |

**Example: sRN LMPscancfg**

| Protocol | Example                                                                                             |     |
| -------- | --------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sRN{SPC}LMPscancfg<ETX>`                             |     |
| CoLa A   | `<STX>sRN LMPscancfg<ETX>`                                 |     |
| CoLa A   | `sRN LMPscancfg`                                                       |     |
| CoLa A   | `02 73 52 4E 20 4C 4D 50 73 63 61 6E 63 66 67 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 0E 73 52 4E 20 4C 4D 50 73 63 61 6E 63 66 67 63` |     |
| CoLa B   | `73 52 4E 20 4C 4D 50 73 63 61 6E 63 66 67`                            |     |

**Telegram structure: sRA LMPscancfg**

| Telegram part      | Description                                   | Variable | Length | Additional details                                        | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                       |     |
| ------------------ | --------------------------------------------- | -------- | ------ | --------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------ | --- |
| Command type       | Answer                                        | String   | 3      |                                                           | `sRA`                 | `73 52 41`                      |     |
| Command            | Info of scan frequency and angular resolution | String   | 10     |                                                           | `LMPscancfg`          | `4C 4D 50 73 63 61 6E 63 66 67` |     |
| Scan frequency     | [1/100 Hz]                                    | Uint_32  | 4      | 15 Hz ... 50 Hz:<br>(depends on Dynamic Sensing Profile ) | `5DCh ... 1388h`      | `05 DC ... 13 88`               |     |
| Reserved           | -                                             | Int_16   | 2      | Always:                                                   | `1`                   | `00 01`                         |     |
| Angular resolution | [1/10000°]                                    | Uint_32  | 4      | 0.1° ... 1°:<br>(depends on Dynamic Sensing Profile )     | `3E8h … 2710h`        | `03 E8 ... 27 10`               |     |
| Start angle        | [1/10000°]                                    | Int_32   | 4      | -48° ... 228°                                             | `FFF8AD00h … 22CA40h` | `FF F8 AD 00h … 00 22 CA 40h`   |     |
| Stop angle         | [1/10000°]                                    | Int_32   | 4      | -48° ... 228°                                             | `FFF8AD00h … 22CA40h` | `FF F8 AD 00h … 00 22 CA 40h`   |     |

**Example: sRA LMPscancfg - 30 Hz scan frequency, 0.1° angular resolution, -48° start angle, +138° stop angle**

| Protocol | Example                                                                                                                                                      |     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sRA{SPC}LMPscancfg{SPC}BB8{SPC}1{SPC}3E8{SPC}FFEAF160{SPC}150EA0<ETX>`                                        |     |
| CoLa A   | `02 73 52 41 20 4C 4D 50 73 63 61 6E 63 66 67 20 42 42 38 20 31 20 33 45 38 20 46 46 45 41 46 31 36 30 20 31 35 30 45 41 30 03` |     |
| CoLa B   | `02 02 02 02 00 00 00 21 73 52 41 20 4C 4D 50 73 63 61 6E 63 66 67 20 00 00 0B B8 00 01 00 00 03 E8 FF EA F1 60 00 15 0E A0 2A` |     |

### Activate Standby Mode [sMN LMCstandby]

Shut off the laser in order to extend the lifetime of laser diode and reduce motor speed to 25 Hz.

**Telegram structure: sMN LMCstandby**

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                     | Values CoLa B (Binary)                                       |     |
| ------------- | --------------------- | -------- | ------ | ------------------ | ----------------------------------------- | ------------------------------------------------------------ | --- |
| Command type  | Method                | String   | 3      |                    | `sMN`        | `73 4D 4E`                      |     |
| Command       | Set device to standby | String   | 10     |                    | `LMCstandby` | `4C 4D 43 73 74 61 6E 64 62 79` |     |

**Example: sMN LMCstandby**

| Protocol | Example                                                                                             |     |
| -------- | --------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sMN{SPC}LMCstandby<ETX>`                             |     |
| CoLa A   | `<STX>sMN LMCstandby<ETX>`                                 |     |
| CoLa A   | `sMN LMCstandby`                                                       |     |
| CoLa A   | `02 73 4D 4E 20 4C 4D 43 73 74 61 6E 64 62 79 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 0E 73 4D 4E 20 4C 4D 43 73 74 61 6E 64 62 79 65` |     |
| CoLa B   | `73 4D 4E 20 4C 4D 43 73 74 61 6E 64 62 79`                            |     |

**Telegram structure: sAN LMCstandby**

| Telegram part | Description              | Variable | Length | Additional details       | Values CoLa A (ASCII)                     | Values CoLa B (Binary)                                       |     |
| ------------- | ------------------------ | -------- | ------ | ------------------------ | ----------------------------------------- | ------------------------------------------------------------ | --- |
| Command type  | Answer                   | String   | 3      |                          | `sAN`        | `73 41 4E`                      |     |
| Command       | Set device to standby    | String   | 10     |                          | `LMCstandby` | `4C 4D 43 73 74 61 6E 64 62 79` |     |
| Status code   | Accepted when value is 0 | Enum_8   | 1      | Success:<br>Not allowed: | `0<br>1`     | `00<br>01`                      |     |

**Example: sAN LMCstandby**

| Protocol | Example                                                                                                   |     |
| -------- | --------------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sAN{SPC}LMCstandby{SPC}0<ETX>`                             |     |
| CoLa A   | `02 73 41 4E 20 4C 4D 43 73 74 61 6E 64 62 79 20 30 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 10 73 41 4E 20 4C 4D 43 73 74 61 6E 64 62 79 20 00 49` |     |

### Start Measurement [sMN LMCstartmeas]

Start the laser and (unless in Standby mode) the motor of the device

**Telegram structure: sMN LMCstartmeas**

| Telegram part | Description       | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |     |
| ------------- | ----------------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ | --- |
| Command type  | Method            | String   | 3      |                    | `sMN`          | `73 4D 4E`                            |     |
| Command       | Start measurement | String   | 12     |                    | `LMCstartmeas` | `4C 4D 43 73 74 61 72 74 6D 65 61 73` |     |

**Example: sMN LMCstartmeas**

| Protocol | Example                                                                                                   |     |
| -------- | --------------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sMN{SPC}LMCstartmeas<ETX>`                                 |     |
| CoLa A   | `<STX>sMN LMCstartmeas<ETX>`                                     |     |
| CoLa A   | `sMN LMCstartmeas`                                                           |     |
| CoLa A   | `02 73 4D 4E 20 4C 4D 43 73 74 61 72 74 6D 65 61 73 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 10 73 4D 4E 20 4C 4D 43 73 74 61 72 74 6D 65 61 73 68` |     |
| CoLa B   | `73 4D 4E 20 4C 4D 43 73 74 61 72 74 6D 65 61 73`                            |     |

**Telegram structure: sAN LMCstartmeas**

| Telegram part | Description              | Variable | Length | Additional details       | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |     |
| ------------- | ------------------------ | -------- | ------ | ------------------------ | ------------------------------------------- | ------------------------------------------------------------------ | --- |
| Command type  | Answer                   | String   | 3      |                          | `sAN`          | `73 41 4E`                            |     |
| Command       | Start measurement        | String   | 12     |                          | `LMCstartmeas` | `4C 4D 43 73 74 61 72 74 6D 65 61 73` |     |
| Status code   | Accepted when value is 0 | Enum_8   | 1      | Success:<br>Not allowed: | `0<br>1`       | `00<br>01`                            |     |

**Example: sAN LMCstartmeas**

| Protocol | Example                                                                                                         |     |
| -------- | --------------------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sAN{SPC}LMCstartmeas{SPC}0<ETX>`                                 |     |
| CoLa A   | `02 73 41 4E 20 4C 4D 43 73 74 61 72 74 6D 65 61 73 20 30 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 12 73 41 4E 20 4C 4D 43 73 74 61 72 74 6D 65 61 73 20 00 44` |     |

### Load Factory Defaults [sMN mSCloadfacdef]

The Factory-Reset (Load factory defaults) deletes the entire parametrization of the device. All parameters, settings and system applications will be set to default.

**Telegram structure: sMN mSCloadfacdef**

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |     |
| ------------- | --------------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- | --- |
| Command type  | Method                | String   | 3      |                    | `sMN`           | `73 4D 4E`                               |     |
| Command       | Load factory defaults | String   | 13     |                    | `mSCloadfacdef` | `6D 53 43 6C 6F 61 64 66 61 63 64 65 66` |     |

**Example: sMN mSCloadfacdef**

| Protocol | Example                                                                                                      |     |
| -------- | ------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sMN{SPC}mSCloadfacdef<ETX>`                                   |     |
| CoLa A   | `<STX>sMN mSCloadfacdef<ETX>`                                       |     |
| CoLa A   | `sMN mSCloadfacdef`                                                             |     |
| CoLa A   | `02 73 4D 4E 20 6D 53 43 6C 6F 61 64 66 61 63 64 65 66 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 11 73 4D 4E 20 6D 53 43 6C 6F 61 64 66 61 63 64 65 66 28` |     |
| CoLa B   | `73 4D 4E 20 6D 53 43 6C 6F 61 64 66 61 63 64 65 66`                            |     |

**Telegram structure: sAN mSCloadfacdef**

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |     |
| ------------- | --------------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- | --- |
| Command type  | Answer                | String   | 3      |                    | `sAN`           | `73 41 4E`                               |     |
| Command       | Load factory defaults | String   | 13     |                    | `mSCloadfacdef` | `6D 53 43 6C 6F 61 64 66 61 63 64 65 66` |     |

### Load Application Defaults [sMN mSCloadappdef]

The Application-Reset (Load application defaults) deletes only the user parametrization of the Fields, Evaluation cases (EVC) and parameters under the header “Application”. Other parameters like Interface settings, Echo Filter, etc. remain unaffected.

**Telegram structure: sMN mSCloadappdef**

| Telegram part | Description               | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |     |
| ------------- | ------------------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- | --- |
| Command type  | Method                    | String   | 3      |                    | `sMN`           | `73 4D 4E`                               |     |
| Command       | Load application defaults | String   | 13     |                    | `mSCloadappdef` | `6D 53 43 6C 6F 61 64 61 70 70 64 65 66` |     |

**Example: sMN mSCloadappdef**

| Protocol | Example                                                                                                      |     |
| -------- | ------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sMN{SPC}mSCloadappdef<ETX>`                                   |     |
| CoLa A   | `<STX>sMN mSCloadappdef<ETX>`                                       |     |
| CoLa A   | `sMN mSCloadappdef`                                                             |     |
| CoLa A   | `02 73 4D 4E 20 6D 53 43 6C 6F 61 64 61 70 70 64 65 66 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 11 73 4D 4E 20 6D 53 43 6C 6F 61 64 61 70 70 64 65 66 2D` |     |
| CoLa B   | `73 4D 4E 20 6D 53 43 6C 6F 61 64 61 70 70 64 65 66`                            |     |

**Telegram structure: sAN mSCloadappdef**

| Telegram part | Description               | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |     |
| ------------- | ------------------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- | --- |
| Command type  | Answer                    | String   | 3      |                    | `sAN`           | `73 41 4E`                               |     |
| Command       | Load application defaults | String   | 13     |                    | `mSCloadappdef` | `6D 53 43 6C 6F 61 64 61 70 70 64 65 66` |     |

**Example: sAN mSCloadappdef**

| Protocol | Example                                                                                                         |     |
| -------- | --------------------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sAN{SPC}mSCloadappdef<ETX>`                                      |     |
| CoLa A   | `02 73 41 4E 20 6D 53 43 6C 6F 61 64 61 70 70 64 65 66 03`                         |     |
| CoLa B   | `02 02 02 02 00 00 00 12 73 41 4E 20 6D 53 43 6C 6F 61 64 61 70 70 64 65 66 20 01` |     |

### Check Password [sMN CheckPassword]

Check the password for a specific user level, e.g. to verify if it has been changed correctly.

**Telegram structure: sMN CheckPassword**

| Telegram part | Description                              | Variable | Length | Additional details                             | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                                |     |
| ------------- | ---------------------------------------- | -------- | ------ | ---------------------------------------------- | ------------------------------------------------- | --------------------------------------------------------------------- | --- |
| Command type  | Method                                   | String   | 3      |                                                | `sMN`                | `73 4D 4E`                               |     |
| Command       | Check password request                   | String   | 13     |                                                | `CheckPassword`      | `43 68 65 63 6B 50 61 73 73 77 6F 72 64` |     |
| User level    | User level to check the password for     | Int_8    | 1      | Maintenance:<br>Authorized client:<br>Service: | `2<br>3<br>4`        | `02<br>03<br>04`                         |     |
| Password      | Hash value of the password to be checked | Uint_32  | 4      |                                                | `<Hash value>` |                                                                       |     |

Check password “testtest” for 'Authorized client'.

**Example: sMN CheckPassword**

| Protocol | Example                                                                                                                        |     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sMN{SPC}CheckPassword{SPC}3{SPC}1920E4C9<ETX>`                                  |     |
| CoLa A   | `<STX>sMN CheckPassword 3 1920E4C9<ETX>`                                              |     |
| CoLa A   | `sMN CheckPassword 3 1920E4C9`                                                                    |     |
| CoLa A   | `02 73 4D 4E 20 43 68 65 63 6B 50 61 73 73 77 6F 72 64 20 33 20 31 39 32 30 45 34 43 39 03`       |     |
| CoLa B   | `02 02 02 02 00 00 00 17 73 4D 4E 20 43 68 65 63 6B 50 61 73 73 77 6F 72 64 20 03 19 20 E4 C9 1E` |     |
| CoLa B   | `73 4D 4E 20 43 68 65 63 6B 50 61 73 73 77 6F 72 64 20 03 19 20 E4 C9`                            |     |

**Telegram structure: sAN CheckPassword**

| Telegram part | Description            | Variable | Length | Additional details  | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |     |
| ------------- | ---------------------- | -------- | ------ | ------------------- | -------------------------------------------- | --------------------------------------------------------------------- | --- |
| Command type  | Answer                 | String   | 3      |                     | `sAN`           | `73 41 4E`                               |     |
| Command       | Check password request | String   | 13     |                     | `CheckPassword` | `43 68 65 63 6B 50 61 73 73 77 6F 72 64` |     |
| Success       | Confirmation           | Int_8    | 1      | Failed:<br>Success: | `0<br>1`        | `00<br>01`                               |     |

**Example: sAN CheckPassword**

| Protocol | Example                                                                                                            |     |
| -------- | ------------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sAN{SPC}CheckPassword{SPC}1<ETX>`                                   |     |
| CoLa A   | `02 73 41 4E 20 43 68 65 63 6B 50 61 73 73 77 6F 72 64 20 31 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 13 73 41 4E 20 43 68 65 63 6B 50 61 73 73 77 6F 72 64 20 01 04` |     |

### Set Sensitivity Mode [sWN SensitivityMode]

Define a sensitivity mode for the detection of reflectors .

**Telegram structure: sWN SensitivityMode**

| Telegram part | Description             | Variable | Length | Additional details                                                     | Values CoLa A (ASCII)                          | Values CoLa B (Binary)                                                      |     |
| ------------- | ----------------------- | -------- | ------ | ---------------------------------------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------------- | --- |
| Command type  | Write                   | String   | 3      |                                                                        | `sWN`             | `73 57 4E`                                     |     |
| Command       | Sensitivity Mode        | String   | 15     |                                                                        | `SensitivityMode` | `53 65 6E 73 69 74 69 76 69 74 79 4D 6F 64 65` |     |
| Sensitivity   | Choose Sensitivity Mode | Enum_8   | 1      | Maximum robustness:<br>Standard (recommended):<br>Maximum detectivity: | `0<br>1<br>2`     | `00<br>01<br>02`                               |     |

**Example: sWN SensitivityMode**

| Protocol | Example                                                                                                                  |     |
| -------- | ------------------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sWN{SPC}SensitivityMode{SPC}1<ETX>`                                       |     |
| CoLa A   | `<STX>sWN SensitivityMode 1<ETX>`                                               |     |
| CoLa A   | `sWN SensitivityMode 1`                                                                     |     |
| CoLa A   | `02 73 57 4E 20 53 65 6E 73 69 74 69 76 69 74 79 4D 6F 64 65 20 31 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 15 73 57 4E 20 53 65 6E 73 69 74 69 76 69 74 79 4D 6F 64 65 20 01 05` |     |
| CoLa B   | `73 57 4E 20 53 65 6E 73 69 74 69 76 69 74 79 4D 6F 64 65 20 01`                            |     |

**Telegram structure: sWA SensitivityMode**

| Telegram part | Description      | Variable | Length | Additional details | Values CoLa A (ASCII)                          | Values CoLa B (Binary)                                                      |     |
| ------------- | ---------------- | -------- | ------ | ------------------ | ---------------------------------------------- | --------------------------------------------------------------------------- | --- |
| Command type  | Answer           | String   | 3      |                    | `sWA`             | `73 57 41`                                     |     |
| Command       | Sensitivity Mode | String   | 15     |                    | `SensitivityMode` | `53 65 6E 73 69 74 69 76 69 74 79 4D 6F 64 65` |     |

**Example: sWA SensitivityMode**

| Protocol | Example                                                                                                               |     |
| -------- | --------------------------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sWA{SPC}SensitivityMode<ETX>`                                          |     |
| CoLa A   | `02 73 57 41 20 53 65 6E 73 69 74 69 76 69 74 79 4D 6F 64 65 03`                         |     |
| CoLa B   | `02 02 02 02 00 00 00 14 73 57 41 20 53 65 6E 73 69 74 69 76 69 74 79 4D 6F 64 65 20 0B` |     |

### Set Contamination Indication Settings [sWN ContaminationConfig]

Define how and under which conditions the device shall indicate a potential contamination of the optics cover to enable preventive cleaning.

**Telegram structure: sWN ContaminationConfig**

| Telegram part       | Description                                                                                | Variable | Length | Additional details                                                  | Values CoLa A (ASCII)                                                                                    | Values CoLa B (Binary)                                                                                                 |     |
| ------------------- | ------------------------------------------------------------------------------------------ | -------- | ------ | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --- |
| Command type        | Write                                                                                      | String   | 3      |                                                                     | `sWN`                                                                       | `73 57 4E`                                                                                |     |
| Command             |                                                                                            | String   | 19     |                                                                     | `ContaminationConfig`                                                       | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67`                                |     |
| Strategy            | Strategy code                                                                              | Enum_8   | 1      | No output:<br>All sectors contaminated:<br>One sector contaminated: | `0<br>1<br>2`                                                               | `00<br>01<br>02`                                                                          |     |
| Response time       | How fast (in seconds) the sensor reacts after a contamination                              | Uint_16  | 2      | Value range 3 ... 60<br>Default: 3                                  | `+3d … +60d (03h … 3Ch)`                                                    | `00 03 … 00 3C`                                                                           |     |
| Threshold warning   | Sensitivity                                                                                | Enum_8   | 1      | High:<br>Medium:<br>Low:                                            | `0<br>1<br>2`                                                               | `00<br>01<br>02`                                                                          |     |
| Sector preselection | Selection of either custom sectors or used weather protection hood                         | Enum_8   | 1      | All sectors:<br>Weather protection hood:<br>Custom sectors:         | `0<br>6<br>255d (FFh)`                                                      | `00<br>06<br>FF`                                                                          |     |
| Length              |                                                                                            | UInt_16  | 2      | Always:                                                             | `7`                                                                         | `07`                                                                                      |     |
| Custom sectors      | Enable/ disable individual sectors when custom sectors got selected in Sector preselection | Array    | 7      | Active: 1<br>Inactive: 0<br>Default value of all sectors is active  | `0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1` | `00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01` |     |
| Enable Warning      | Warning monitoring                                                                         | Bool_1   | 1      | Off (False):<br>On (True):                                          | `0<br>1`                                                                    | `00<br>01`                                                                                |     |
| Enable Error        | Error monitoring                                                                           | Bool_1   | 1      | Off (False):<br>On (True):                                          | `0<br>1`                                                                    | `00<br>01`                                                                                |     |

**Telegram structure: sWA ContaminationConfig**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |     |
| ------------- | ----------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type  | Answer      | String   | 3      |                    | `sWA`                 | `73 57 41`                                                 |     |
| Command       |             | String   | 19     |                    | `ContaminationConfig` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67` |     |

### Read Contamination Indication Settings [sRN ContaminationConfig]

Reads the current contamination settings that define how and under which conditions the device indicates a potential contamination of the optics cover to enable preventive cleaning.

**Telegram structure: sRN ContaminationConfig**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |     |
| ------------- | ----------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type  | Read        | String   | 3      |                    | `sRN`                 | `73 52 4E`                                                 |     |
| Command       |             | String   | 19     |                    | `ContaminationConfig` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67` |     |

**Telegram structure: sRA ContaminationConfig**

| Telegram part       | Description                                                                                | Variable | Length | Additional details                                                  | Values CoLa A (ASCII)                                                                                    | Values CoLa B (Binary)                                                                                                 |     |
| ------------------- | ------------------------------------------------------------------------------------------ | -------- | ------ | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --- |
| Command type        | Answer                                                                                     | String   | 3      |                                                                     | `sRA`                                                                       | `73 52 41`                                                                                |     |
| Command             |                                                                                            | String   | 19     |                                                                     | `ContaminationConfig`                                                       | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67`                                |     |
| Strategy            | Strategy code                                                                              | Enum_8   | 1      | No output:<br>All sectors contaminated:<br>One sector contaminated: | `0<br>1<br>2`                                                               | `00<br>01<br>02`                                                                          |     |
| Response time       | How fast (in seconds) the sensor reacts after a contamination                              | Uint_16  | 2      | Value range 3 ... 60<br>Default: 3                                  | `03h … 3Ch`                                                                 | `00 03 … 00 3C`                                                                           |     |
| Threshold warning   | Sensitivity                                                                                | Enum_8   | 1      | High:<br>Medium:<br>Low:                                            | `0<br>1<br>2`                                                               | `00<br>01<br>02`                                                                          |     |
| Sector preselection | Selection of either custom sectors or used weather protection hood                         | Enum_8   | 1      | All sectors:<br>Weather protection hood:<br>Custom sectors:         | `0<br>6<br>FF`                                                              | `00<br>06<br>FF`                                                                          |     |
| Length              |                                                                                            | Enum_8   | 1      | Always:                                                             | `7`                                                                         | `07`                                                                                      |     |
| Custom sectors      | Enable/ disable individual sectors when custom sectors got selected in Sector preselection | Array    | 7      | Active: 1<br>Inactive: 0<br>Default value of all sectors is active  | `0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1` | `00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01` |     |
| Enable Warning      | Warning monitoring                                                                         | Bool_1   | 1      | Off (False):<br>On (True):                                          | `0<br>1`                                                                    | `00<br>01`                                                                                |     |
| Enable Error        | Error monitoring                                                                           | Bool_1   | 1      | Off (False):<br>On (True):                                          | `0<br>1`                                                                    | `00<br>01`                                                                                |     |

**Example: sRA ContaminationConfig No output, response time 3 sec, All sectors active, warning enabled, error enabled**

| Protocol | Example                                                                                                                                                                                       |     |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sRA{SPC}ContaminationConfig{SPC}0{SPC}3{SPC}0{SPC}0{SPC}7{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1<ETX>`                          |     |
| CoLa A   | `02 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 20 30 20 33 20 30 20 30 20 37 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 03` |     |
| CoLa B   | `02 02 02 02 00 00 00 28 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 20 00 00 03 00 00 00 07 01 01 01 01 01 01 01 01 01 0F`             |     |

### Read Contamination Indication Data [sRN ContaminationData]

Get the current contamination indication data.

**Telegram structure: sRN ContaminationData**

| Telegram part | Description                                 | Variable | Length | Additional details | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                            |     |
| ------------- | ------------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------- | --- |
| Command type  | Read                                        | String   | 3      |                    | `sRN`               | `73 52 4E`                                           |     |
| Command       | Reading status of all contamination sectors | String   | 17     |                    | `ContaminationData` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61` |     |

**Example: sRN ContaminationData**

| Protocol | Example                                                                                                                  |     |
| -------- | ------------------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sRN{SPC}ContaminationData<ETX>`                                           |     |
| CoLa A   | `<STX>sRN ContaminationData<ETX>`                                               |     |
| CoLa A   | `sRN ContaminationData`                                                                     |     |
| CoLa A   | `02 73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 15 73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 3F` |     |
| CoLa B   | `73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61`                            |     |

**Telegram structure: sRA ContaminationData**

| Telegram part                   | Description                                 | Variable        | Length | Additional details                       | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                            |     |
| ------------------------------- | ------------------------------------------- | --------------- | ------ | ---------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------- | --- |
| Command type                    | Answer                                      | String          | 3      |                                          | `sRA`               | `73 52 41`                                           |     |
| Command                         | Reading status of all contamination sectors | String          | 17     |                                          | `ContaminationData` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61` |     |
| Number of contamination sectors |                                             | Uint_16         | 2      | Always:                                  | `7`                 | `00 07`                                              |     |
| Contamination data              | Status of contamination of each sector      | Array of Enum_8 | 7      | Blocked:<br>Clean:<br>Warning:<br>Error: | `0<br>1<br>2<br>3`  | `00<br>01<br>02<br>03`                               |     |

### Read Contamination Indication Result [sRN ContaminationResult]

This telegram is intended to read the contamination result. The telegram returns two Boolean. One for warning and one for error. Depending on the strategy of the contamination indication the state changes if one or all sectors are in the specific status (warning or error).

**Telegram structure: sRN ContaminationResult**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |     |
| ------------- | ----------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type  | Read        | String   | 3      |                    | `sRN`                 | `73 52 4E`                                                 |     |
| Command       |             | String   | 19     |                    | `ContaminationResult` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74` |     |

**Example: sRN ContaminationResult**

| Protocol | Example                                                                                                                        |     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sRN{SPC}ContaminationResult<ETX>`                                               |     |
| CoLa A   | `<STX>sRN ContaminationResult<ETX>`                                                   |     |
| CoLa A   | `sRN ContaminationResult`                                                                         |     |
| CoLa A   | `02 73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 17 73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 26` |     |
| CoLa B   | `73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74`                            |     |

**Telegram structure: sRA ContaminationResult**

| Telegram part        | Description | Variable | Length | Additional details     | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |     |
| -------------------- | ----------- | -------- | ------ | ---------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type         | Answer      | String   | 3      |                        | `sRA`                 | `73 52 41`                                                 |     |
| Command              |             | String   | 19     |                        | `ContaminationResult` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74` |     |
| Contamination Result | Warning     | Bool_1   | 1      | Not active:<br>Active: | `0<br>1`              | `00<br>01`                                                 |     |
| Contamination Result | Error       | Bool_1   | 1      | Not active:<br>Active: | `0<br>1`              | `00<br>01`                                                 |     |

**Example: sRA ContaminationResult warning inactive error inactive**

| Protocol | Example                                                                                                                                 |     |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sRA{SPC}ContaminationResult{SPC}0{SPC}0<ETX>`                                            |     |
| CoLa A   | `02 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 30 20 30 03`                   |     |
| CoLa B   | `02 02 02 02 00 00 00 1A 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 00 00 09` |     |

### Send Contamination Indication Result Permanently [sEN ContaminationResult]

This telegram is intended to activate the event for read the contamination result permanently. The telegram returns two Boolean. One for warning and one for error. Depending on the strategy of the contamination indication the state changes if one or all sectors are in the specific status (warning or error).

**Telegram structure: sEN ContaminationResult**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |     |
| ------------- | ----------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type  | Read        | String   | 3      |                    | `sEN`                 | `73 52 4E`                                                 |     |
| Command       |             | String   | 19     |                    | `ContaminationResult` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74` |     |
| Data          | Start/ Stop | Bool_1   | 1      | Stop:<br>Start:    | `0<br>1`              | `00<br>01`                                                 |     |

**Example: sEN ContaminationResult**

| Protocol | Example                                                                                                                              |     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sEN{SPC}ContaminationResult{SPC}1<ETX>`                                               |     |
| CoLa A   | `<STX>sEN ContaminationResult 1<ETX>`                                                       |     |
| CoLa A   | `sEN ContaminationResult 1`                                                                             |     |
| CoLa A   | `02 73 45 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 19 73 45 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 01 10` |     |
| CoLa B   | `73 45 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 01`                            |     |

**Telegram structure: sSN ContaminationResult**

| Telegram part        | Description | Variable | Length | Additional details     | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                  |     |
| -------------------- | ----------- | -------- | ------ | ---------------------- | ------------------------------------- | --------------------------------------- | --- |
| Command type         | Answer      | String   | 3      |                        | `sSN`    | `73 53 4E` |     |
| Contamination Result | Warning     | Bool_1   | 1      | Not active:<br>Active: | `0<br>1` | `00<br>01` |     |
| Contamination Result | Error       | Bool_1   | 1      | Not active:<br>Active: | `0<br>1` | `00<br>01` |     |

**Example: sSN ContaminationResult warning active error inactive**

| Protocol | Example                                                                                                                                 |     |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sRA{SPC}ContaminationResult{SPC}1{SPC}0<ETX>`                                            |     |
| CoLa A   | `02 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 20 30 03`                   |     |
| CoLa B   | `02 02 02 02 00 00 00 1A 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 01 00 08` |     |

### Save Parameters Permanently [sMN mEEwriteall]

Save all parameter changes of the device. Must be sent before logging off and/ or hardware rebooting of the device. Else all changes will be lost.

**Telegram structure: sMN mEEwriteall**

| Telegram part | Description                  | Variable | Length | Additional details | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |     |
| ------------- | ---------------------------- | -------- | ------ | ------------------ | ------------------------------------------ | --------------------------------------------------------------- | --- |
| Command type  | Method                       | String   | 3      |                    | `sMN`         | `73 4D 4E`                         |     |
| Command       | Store parameters permanently | String   | 11     |                    | `mEEwriteall` | `6D 45 45 77 72 69 74 65 61 6C 6C` |     |

**Example: sMN mEEwriteall**

| Protocol | Example                                                                                                |     |
| -------- | ------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sMN{SPC}mEEwriteall<ETX>`                               |     |
| CoLa A   | `<STX>sMN mEEwriteall<ETX>`                                   |     |
| CoLa A   | `sMN mEEwriteall`                                                         |     |
| CoLa A   | `02 73 4D 4E 20 6D 45 45 77 72 69 74 65 61 6C 6C 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 0F 73 4D 4E 20 6D 45 45 77 72 69 74 65 61 6C 6C 21` |     |
| CoLa B   | `73 4D 4E 20 6D 45 45 77 72 69 74 65 61 6C 6C`                            |     |

**Telegram structure: sAN mEEwriteall**

| Telegram part | Description                  | Variable | Length | Additional details | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |     |
| ------------- | ---------------------------- | -------- | ------ | ------------------ | ------------------------------------------ | --------------------------------------------------------------- | --- |
| Command type  | Answer                       | String   | 3      |                    | `sAN`         | `73 41 4E`                         |     |
| Command       | Store parameters permanently | String   | 11     |                    | `mEEwriteall` | `6D 45 45 77 72 69 74 65 61 6C 6C` |     |
| Status code   | Accepted when value is 1     | Bool_1   | 1      | Error:<br>Success: | `0<br>1`      | `00<br>01`                         |     |

**Example: sAN mEEwriteall**

| Protocol | Example                                                                                                      |     |
| -------- | ------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sAN{SPC}mEEwriteall{SPC}1<ETX>`                               |     |
| CoLa A   | `02 73 41 4E 20 6D 45 45 77 72 69 74 65 61 6C 6C 20 31 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 11 73 41 4E 20 6D 45 45 77 72 69 74 65 61 6C 6C 20 01 0C` |     |

### Set to Run [sMN Run]

Log out from device and activate all parameter changes.

**Telegram structure: sMN Run**

| Telegram part | Description      | Variable | Length | Additional details | Values CoLa A (ASCII)              | Values CoLa B (Binary)                  |     |
| ------------- | ---------------- | -------- | ------ | ------------------ | ---------------------------------- | --------------------------------------- | --- |
| Command type  | Method           | String   | 3      |                    | `sMN` | `73 4D 4E` |     |
| Command       | Start the device | String   | 3      |                    | `Run` | `52 75 6E` |     |

**Example: sMN Run**

| Protocol | Example                                                                        |     |
| -------- | ------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sMN{SPC}Run<ETX>`               |     |
| CoLa A   | `<STX>sMN Run<ETX>`                   |     |
| CoLa A   | `sMN Run`                                         |     |
| CoLa A   | `02 73 4D 4E 20 52 75 6E 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 07 73 4D 4E 20 52 75 6E 19` |     |
| CoLa B   | `73 4D 4E 20 52 75 6E`                            |     |

**Telegram structure: sAN Run**

| Telegram part | Description              | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                  |     |
| ------------- | ------------------------ | -------- | ------ | ------------------ | ------------------------------------- | --------------------------------------- | --- |
| Command type  | Answer                   | String   | 3      |                    | `sAN`    | `73 41 4E` |     |
| Command       | Start the device         | String   | 3      |                    | `Run`    | `52 75 6E` |     |
| Status code   | Accepted when value is 1 | Bool_1   | 1      | Error:<br>Success: | `0<br>1` | `00<br>01` |     |

**Example: sAN Run**

| Protocol | Example                                                                              |     |
| -------- | ------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sAN{SPC}Run{SPC}1<ETX>`               |     |
| CoLa A   | `02 73 41 4E 20 52 75 6E 20 31 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 09 73 41 4E 20 52 75 6E 20 01 34` |     |

### Reboot Device [sMN mSCreboot]

This command includes saving all parameters.

**Telegram structure: sMN mSCreboot**

| Telegram part | Description   | Variable | Length | Additional details | Values CoLa A (ASCII)                    | Values CoLa B (Binary)                                    |     |
| ------------- | ------------- | -------- | ------ | ------------------ | ---------------------------------------- | --------------------------------------------------------- | --- |
| Command type  | Method        | String   | 3      |                    | `sMN`       | `73 4D 4E`                   |     |
| Command       | Reboot device | String   | 9      |                    | `mSCreboot` | `6D 53 43 72 65 62 6F 6F 74` |     |

**Example: sMN mSCreboot**

| Protocol | Example                                                                                          |     |
| -------- | ------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sMN{SPC}mSCreboot<ETX>`                           |     |
| CoLa A   | `<STX>sMN mSCreboot<ETX>`                               |     |
| CoLa A   | `sMN mSCreboot`                                                     |     |
| CoLa A   | `02 73 4D 4E 20 6D 53 43 72 65 62 6F 6F 74 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 0D 73 4D 4E 20 6D 53 43 72 65 62 6F 6F 74 2C` |     |
| CoLa B   | `73 4D 4E 20 6D 53 43 72 65 62 6F 6F 74`                            |     |

**Telegram structure: sAN mSCreboot**

| Telegram part | Description   | Variable | Length | Additional details | Values CoLa A (ASCII)                    | Values CoLa B (Binary)                                    |     |
| ------------- | ------------- | -------- | ------ | ------------------ | ---------------------------------------- | --------------------------------------------------------- | --- |
| Command type  | Answer        | String   | 3      |                    | `sAN`       | `73 41 4E`                   |     |
| Command       | Reboot device | String   | 9      |                    | `mSCreboot` | `6D 53 43 72 65 62 6F 6F 74` |     |

**Example: sAN mSCreboot**

| Protocol | Example                                                                                             |     |
| -------- | --------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sAN{SPC}mSCreboot<ETX>`                              |     |
| CoLa A   | `02 73 41 4E 20 6D 53 43 72 65 62 6F 6F 74 03`                         |     |
| CoLa B   | `02 02 02 02 00 00 00 0E 73 41 4E 20 6D 53 43 72 65 62 6F 6F 74 20 00` |     |

### Set Scan Merger Source [sWN ScanMergerSource]

Set Scan Merger source.

**Access:** No additional user-level requirement is specified in this telegram table.

**Request: `sWN ScanMergerSource`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Write | String | 3 | CoLa A: sWN |
| Set Source for Scan Merger | String | 16 | CoLa A: ScanMergerSource |
| Source | Enum_8 | 1 | IMU:: 0<br>Encoder:: 1 |

**Response: `sWA ScanMergerSource`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sWA |
| Set Source for Scan Merger | String | 16 | CoLa A: ScanMergerSource |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWN ScanMergerSource 1<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 16 73 57 4E 20 53 63 61 6E 4D 65 72 67 65 72 53 6F 75 72 63 65 20 01 43` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWA ScanMergerSource<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 14 73 57 41 20 53 63 61 6E 4D 65 72 67 65 72 53 6F 75 72 63 65 6D` |

### Stop Scan Merger Recording [sMN StopScanMerge]

Stop Scan Merger recording.

**Access:** Authorized client user level is required.

**Request: `sMN StopScanMerge`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Method | String | 3 | CoLa A: sMN |
| Stop Scan Merger recording | String | 13 | CoLa A: StopScanMerge |

**Response: `sAN StopScanMerge`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sAN |
| Stop Scan Merger recording | String | 13 | CoLa A: StopScanMerge |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sMN StopScanMerge<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 11 73 4D 4E 20 53 74 6F 70 53 63 61 6E 4D 65 72 67 65 0F` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sAN StopScanMerge<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 11 73 41 4E 20 53 74 6F 70 53 63 61 6E 4D 65 72 67 65 03` |

### Read for Scan Merger Saving Status [sRN MergeSaving]

Read for Scan Merger saving status.

**Access:** Authorized client user level is required.

**Request: `sRN MergeSaving`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Read | String | 3 | CoLa A: sRN |
| Read for Scan Merger saving status | String | 11 | CoLa A: MergeSaving |

**Response: `sRA MergeSaving`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sRA |
| Read for Scan Merger saving status | String | 11 | CoLa A: MergeSaving |
| Saving status | Bool_1 | 1 | Saving not active:: 0<br>Saving in process:: 1 |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sRN MergeSaving<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 0F 73 52 4E 20 4D 65 72 67 65 53 61 76 69 6E 67 33` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sRA MergeSaving 0<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 11 73 52 41 20 4D 65 72 67 65 53 61 76 69 6E 67 20 00 1C` |

### Ask for Device Measurement State [sRN LMCmeasstate]

Ask for Device Measurement State.

**Access:** No additional user-level requirement is specified in this telegram table.

**Request: `sRN LMCmeasstate`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Read | String | 3 | CoLa A: sRN |
| Ask for measurement state | String | 12 | CoLa A: LMCmeasstate |

**Response: `sRA LMCmeasstate`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sRA |
| Ask for measurement state | String | 12 | CoLa A: LMCmeasstate |
| Current measurement state | Enum_16 | 2 | Idle: Ready 2D: Measure 2D: Other state codes may show up during booting, firmware update or transition between states.<br>CoLa A: 3 6 7 |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sRN LMCmeasstate<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 10 73 52 4E 20 4C 4D 43 6D 65 61 73 73 74 61 74 65 60` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sRA LMCmeasstate 7<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 13 73 52 41 20 4C 4D 43 6D 65 61 73 73 74 61 74 65 20 00 07 48` |

### Read Device Order Number [sRN DIornr]

Read device order number.

**Access:** No additional user-level requirement is specified in this telegram table.

**Request: `sRN DIornr`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Read | String | 3 | CoLa A: sRN |
| Read device order number | String | 6 | CoLa A: DIornr |

**Response: `sRA DIornr`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sRA |
| Read device order number | String | 6 | CoLa A: DIornr |
| Number of characters of the following order number | Int_8 | 1 | Fix:<br>CoLa A: 7h |
| Order number in 7 digits | String | 7 | CoLa A: 0000000 … 9999999 |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sRN DIornr<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 0A 73 52 4E 20 44 49 6F 72 6E 72 43` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sRA DIornr 7 1098855<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 13 73 52 41 20 44 49 6F 72 6E 72 20 07 31 30 39 38 38 35 35 53` |

### Read Temperature [sRN OPcurtmpdev]

Read temperature.

**Access:** No additional user-level requirement is specified in this telegram table.

**Request: `sRN OPcurtmpdev`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Read | String | 3 | CoLa A: sRN |
| Read temperature of the device | String | 11 | CoLa A: OPcurtmpdev |

**Response: `sRA OPcurtmpdev`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sRA |
| Read temperature of the device | String | 11 | CoLa A: OPcurtmpdev |
| [°C] | Real as float according to IEEE754 | 4 | (-50°C … +100°C)<br>CoLa A: C2480000h … 42C80000h |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sRN OPcurtmpdev<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 0F 73 52 4E 20 4F 50 63 75 72 74 6D 70 64 65 76 2A` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sRA OPcurtmpdev 420C0000<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 14 73 52 41 20 4F 50 63 75 72 74 6D 70 64 65 76 20 42 0C 00 00 4B` |

## Measurement Output Telegram

### Configure the Data Content for the Scan [sWN LMDscandatacfg]

Configuration of the channels (e.g. distance) and information that will be send by the device as measurement data (output data format).

**Telegram structure: sWN LMDscandatacfg**

| Telegram part | Description                                 | Variable | Length | Additional details              | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |     |
| ------------- | ------------------------------------------- | -------- | ------ | ------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------ | --- |
| Command type  | Write                                       | String   | 3      |                                 | `sWN`            | `73 57 4E`                                  |     |
| Command       | Configure scandata                          | String   | 14     |                                 | `LMDscandatacfg` | `4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67` |     |
| Reserved      | -                                           | Uint_8   | 2      | Always:                         | `0 0`            | `00 00`                                     |     |
| RSSI          | Enable or disable the output of RSSI values | Uint_8   | 1      | RSSI disabled:<br>RSSI enabled: | `0<br>1`         | `00<br>01`                                  |     |
| Reserved      | -                                           | Enum_8   | 1      | Always:                         | `0`              | `00`                                        |     |
| Reserved      | -                                           | Enum_8   | 1      | Always:                         | `0`              | `00`                                        |     |
| Encoder       | Encoder data                                | Uint_8   | 2      | No encoder:<br>Channel 1:       | `0 0<br>1 0`     | `00 00<br>01 00`                            |     |
| Reserved      | -                                           | Bool_1   | 1      | Always:                         | `0`              | `00`                                        |     |
| Device name   | Sends the device name                       | Bool_1   | 1      | No:<br>Yes:                     | `0<br>1`         | `00<br>01`                                  |     |
| Reserved      | -                                           | Bool_1   | 1      | Always:                         | `0`              | `00`                                        |     |
| Time          | Sends time stamp information                | Bool_1   | 1      | No:<br>Yes:                     | `0<br>1`         | `00<br>01`                                  |     |
| Reserved      | -                                           | Uint_16  | 2      | Always:                         | `+1d (1h)`       | `00 01`                                     |     |

Example: RSSI enabled

**Example: sWN LMDscandatacfg**

| Protocol | Example                                                                                                                                                               |     |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sWN{SPC}LMDscandatacfg{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}+1<ETX>`                  |     |
| CoLa A   | `<STX>sWN LMDscandatacfg 0 0 1 0 0 0 0 0 0 0 0 +1<ETX>`                                                                      |     |
| CoLa A   | `sWN LMDscandatacfg 0 0 1 0 0 0 0 0 0 0 0 +1`                                                                                            |     |
| CoLa A   | `02 73 57 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67 20 30 20 30 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 2B 31 03` |     |
| CoLa B   | `02 02 02 02 00 00 00 20 73 57 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67 20 00 00 01 00 00 00 00 00 00 00 00 00 01 42`             |     |
| CoLa B   | `73 57 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67 20 00 00 01 00 00 00 00 00 00 00 00 00 01`                                        |     |

**Telegram structure: sWA LMDscandatacfg**

| Telegram part | Description        | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |     |
| ------------- | ------------------ | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ | --- |
| Command type  | Answer             | String   | 3      |                    | `sWA`            | `73 57 41`                                  |     |
| Command       | Configure scandata | String   | 14     |                    | `LMDscandatacfg` | `4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67` |     |

**Example: sWA LMDscandatacfg**

| Protocol | Example                                                                                                            |     |
| -------- | ------------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sWA{SPC}LMDscandatacfg<ETX>`                                        |     |
| CoLa A   | `02 73 57 41 20 4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67 03`                         |     |
| CoLa B   | `02 02 02 02 00 00 00 13 73 57 41 20 4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67 20 4D` |     |

### Configure Aperture Angle of the Scandata for Output [sWN LMPoutputRange]

Configure aperture angle of the scandata for output.

**Access:** Authorized client user level is required.

**Request: `sWN LMPoutputRange`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Write | String | 3 | CoLa A: sWN |
| Change output angle range | String | 14 | CoLa A: LMPoutputRange |
| - | Int_16 | 2 | Always:<br>CoLa A: 1 |
| [1/10000°] | Uint_32 | 4 | Normal mode @ 12.5 Hz: 0.0200°: 0.0400°: 0.0600°: 0.1000°: 0.1200°: Normal mode @ 25 Hz: 0.0400°: 0.0800°: 0.1200°: 0.2000°: 0.2400°: Extended range mode @ 12.5 Hz: 0.240°: 0.120°: 0.080°: 0.040°: Extended range mode @ 25 Hz: 0.480°: 0.240°: 0.160°: 0.080°:<br>CoLa A: +200d (C8h) +400d (190h) +600d (258h) +1000d (3E8h) +1200d (4B0h) +400d (190h) +800d (320h) +1200d (4B0h) +2000d (7D0h) +2400d (960h) +2400d (960h) +1200d (4B0h) +800d (320h) +400d (190h) +4800d (12C0h) +2400d (960h) +1600d (640h) +800d (320h) |
| [1/10000°] | Int_32 | 4 | -180° ... +180°:<br>CoLa A: -1800000d (FFE488C0h) … +1800000d (1B7740h) |
| [1/10000°] | Int_32 | 4 | -180° ... +180°<br>CoLa A: -1800000d (FFE488C0h) … +1800000d (1B7740h) |

**Response: `sWA LMPoutputRange`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sWA |
| Change output angle range | String | 14 | CoLa A: LMPoutputRange |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWN LMPoutputRange 1 +400 0 +900000<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 21 73 57 4E 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 20 00 01 00 00 01 90 00 00 00 00 00 0D BB A0 FD` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWA LMPoutputRange<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 12 73 57 41 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 54` |

### Read for Actual Output Range [sRN LMPoutputRange]

Read for actual output range.

**Access:** No additional user-level requirement is specified in this telegram table.

**Request: `sRN LMPoutputRange`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Read | String | 3 | CoLa A: sRN |
| Output range | String | 14 | CoLa A: LMPoutputRange |

**Response: `sRA LMPoutputRange`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sRA |
| Output range | String | 14 | CoLa A: LMPoutputRange |
| Parameter | Int_16 | 2 | Always:<br>CoLa A: 1h |
| [1/10000°] | Uint_32 | 4 | Normal mode @ 12.5 Hz 0.0200°: 0.0400°: 0.0600°: 0.1000°: 0.1200°: Normal mode @ 25 Hz: 0.0400°: 0.0800°: 0.1200°: 0.2000°: 0.2400°: Extended range mode @ 12.5 Hz: 0.240°: 0.120°: 0.080°: 0.040°: Extended range mode @ 25 Hz: 0.480°: 0.240°: 0.160°: 0.080°:<br>CoLa A: C8h 190h 258h 3E8h 4B0h 190h 320h 4B0h 7D0h 960h 960h 4B0h 320h 190h 12C0h 960h 640h 320h |
| [1/10000°] | Int_32 | 4 | -180° ... +180°<br>CoLa A: FFE488C0h … 1B7740h |
| [1/10000°] | Int_32 | 4 | -180° ... +180°<br>CoLa A: FFE488C0h … 1B7740h |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sRN LMPoutputRange<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 12 73 52 4E 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 5E` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sRA LMPoutputRange 1 190 0 DBBA0<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 21 73 52 41 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 20 00 01 00 00 01 90 00 00 00 00 00 0D BB A0 F7` |

### Configure the Distance Scaling of the Scandata for the Output [sWN LMDscandatascalefactor]

Configure the distance scaling of the scandata for the output.

**Access:** Authorized client user level is required.

**Request: `sWN LMDscandatascalefactor`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Write | String | 3 | CoLa A: sWN |
| Change distance scale factor | String | 14 | CoLa A: LMDscandatascalefactor |
| [mm/digit] | Real as float according to IEEE754 | 4 | Factor × 1: Factor × 2 (values have to be scaled by factor two): MinValue="0.1" MaxValue="16.0" Default “2.0” PhysicalUnit="mm/digit"<br>CoLa A: 3F800000h 40000000h (Default) |

**Response: `sWA LMDscandatascalefactor`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sWA |
| Change distance scale factor | String | 14 | CoLa A: LMDscandatascalefactor |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWN LMDscandatascalefactor 3F800000<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 1F 73 57 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 73 63 61 6C 65 66 61 63 74 6F 72 20 3F 80 00 00 EA` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWA LMDscandatascalefactor<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 1A 73 57 41 20 4C 4D 44 73 63 61 6E 64 61 74 61 73 63 61 6C 65 66 61 63 74 6F 72 7A` |

### Read the Distance Scaling for the Distance Values of the Scandata [sRN LMDscandatascalefactor]

Read the distance scaling for the distance values of the scandata.

**Access:** No additional user-level requirement is specified in this telegram table.

**Request: `sRN LMDscandatascalefactor`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Read | String | 3 | CoLa A: sRN |
| Change distance scale factor | String | 14 | CoLa A: LMDscandatascalefactor |

**Response: `sRA LMDscandatascalefactor`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sRA |
| Change distance scale factor | String | 14 | CoLa A: LMDscandatascalefactor |
| [mm/digit] | Real as float according to IEEE754 | 4 | Factor × 1: Factor × 2 (values have to be scaled by factor two): MinValue="0.1" MaxValue="16.0" Default “1.0” PhysicalUnit="mm/digit"<br>CoLa A: 3F800000h 40000000h (Default) |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sRN LMDscandatascalefactor<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 1A 73 52 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 73 63 61 6C 65 66 61 63 74 6F 72 70` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sRA LMDscandatascalefactor 3F800000<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 1F 73 52 41 20 4C 4D 44 73 63 61 6E 64 61 74 61 73 63 61 6C 65 66 61 63 74 6F 72 20 3F 80 00 00 E0` |

### Poll One Telegram [sRN LMDscandata]

Asking the device for the measurement values of the last valid scan. The device will respond, even if currently no measurement data is created (e.g. due to standby or log in).

Data is transmitted only via LMDscandata when LMDscandata is selected as data output format.

During the boot up phase of the device, there will be no data telegram or answer from the device.

> **Important:** The `sRN LMDscandata` and `sEN LMDscandata` telegrams must not be sent via CoLa A. Use CoLa B for these data telegrams; sending them over CoLa A can result in data loss.

**Telegram structure: sRN LMDscandata**

| Telegram part | Description       | Variable | Length | Additional details | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |     |
| ------------- | ----------------- | -------- | ------ | ------------------ | ------------------------------------------ | --------------------------------------------------------------- | --- |
| Command type  | Read              | String   | 3      |                    | `sRN`         | `73 52 4E`                         |     |
| Command       | Only one telegram | String   | 11     |                    | `LMDscandata` | `4C 4D 44 73 63 61 6E 64 61 74 61` |     |

**Example: sRN LMDscandata**

| Protocol | Example                                                                                                |     |
| -------- | ------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sRN{SPC}LMDscandata<ETX>`                               |     |
| CoLa A   | `<STX>sRN LMDscandata<ETX>`                                   |     |
| CoLa A   | `sRN LMDscandata`                                                         |     |
| CoLa A   | `02 73 52 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 0F 73 52 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 05` |     |
| CoLa B   | `73 52 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61`                            |     |

**Telegram structure: sRA LMDscandata**

The response uses the scan-data structure documented for `sRA/sSN LMDscandata` below. The `sEA LMDscandata` telegram is the subscription acknowledgement, not the scan-data payload.

### Send Data Permanently [sEN LMDscandata]

Start or stop continuous transmission of measurement data. Data is transmitted as configured as soon as measurement data is generated by the device. No data is generated when there is an active log in, the laser is shut off (e.g. in Standby mode), the motor is stopped, the data format is Compact, or the device is in certain error modes (e.g. Device not ready).

Data is transmitted only via LMDscandata when LMDscandata is selected as data output format.

During the boot up phase of the device, there will be no data telegram or answer from the device.

**Telegram structure: sEN LMDscandata**

| Telegram part | Description   | Variable | Length | Additional details | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |     |
| ------------- | ------------- | -------- | ------ | ------------------ | ------------------------------------------ | --------------------------------------------------------------- | --- |
| Command type  | Event         | String   | 3      |                    | `sEN`         | `73 45 4E`                         |     |
| Command       | Data telegram | String   | 11     |                    | `LMDscandata` | `4C 4D 44 73 63 61 6E 64 61 74 61` |     |
| Measurement   | Start/stop    | Enum_8   | 1      | Stop:<br>Start:    | `0<br>1`      | `00<br>01`                         |     |

**Example: sEN LMDscandata**

| Protocol | Example                                                                                                      |     |
| -------- | ------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sEN{SPC}LMDscandata{SPC}1<ETX>`                               |     |
| CoLa A   | `<STX>sEN LMDscandata 1<ETX>`                                       |     |
| CoLa A   | `sEN LMDscandata 1`                                                             |     |
| CoLa A   | `02 73 45 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 20 31 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 11 73 45 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 20 01 33` |     |
| CoLa B   | `73 45 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 20 01`                            |     |

**Telegram structure: sEA LMDscandata**

| Telegram part | Description   | Variable | Length | Additional details | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |     |
| ------------- | ------------- | -------- | ------ | ------------------ | ------------------------------------------ | --------------------------------------------------------------- | --- |
| Command type  | Answer        | String   | 3      |                    | `sEA`         | `73 45 41`                         |     |
| Command       | Data telegram | String   | 11     |                    | `LMDscandata` | `4C 4D 44 73 63 61 6E 64 61 74 61` |     |
| Measurement   | Start/stop    | Enum_8   | 1      | Stop:<br>Start:    | `0<br>1`      | `00<br>01`                         |     |

**Example: Confirmation of sEA LMDscandata**

| Protocol | Example                                                                                                      |     |
| -------- | ------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sEA{SPC}LMDscandata{SPC}1<ETX>`                               |     |
| CoLa A   | `02 73 45 41 20 4C 4D 44 73 63 61 6E 64 61 74 61 20 31 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 11 73 45 41 20 4C 4D 44 73 63 61 6E 64 61 74 61 20 01 3C` |     |

The answer to the telegram will be followed by the scandata:

**Telegram structure: Datastream of sRA LMDscandata/sSN LMDscandata**

| Telegram part                    | Description                                                                                                                                                                                                 | Variable                           | Length | Additional details                                                                                                                          | Values CoLa A (ASCII)                                          | Values CoLa B (Binary)                                                            |     |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------- | --- |
| Command type                     | Read                                                                                                                                                                                                        | String                             | 3      | Answer to sRN LMDscandata:<br>Answer to sEN LMDscandata:                                                                                    | `sRA<br>sSN`                      | `73 52 41<br>73 53 4E`                               |     |
| Command                          | Data telegram                                                                                                                                                                                               | String                             | 11     |                                                                                                                                             | `LMDscandata`                     | `4C 4D 44 73 63 61 6E 64 61 74 61`                   |     |
| Version number                   | For detecting format changes by the version.                                                                                                                                                                | Uint_16                            | 2      |                                                                                                                                             | `1h … FFFFh`                      | `00 01 … FF FF`                                      |     |
| Device                           |                                                                                                                                                                                                             |                                    |        |                                                                                                                                             |                                                                |                                                                                   |     |
| Device number                    | Defined with SOPAS                                                                                                                                                                                          | Uint_16                            | 2      |                                                                                                                                             | `0h … FFFFh`                      | `00 00 … FF FF`                                      |     |
| Serial number                    | Production period (year, calendar week, number): YYWWxxxx                                                                                                                                                   | Uint_32                            | 4      |                                                                                                                                             | `0h … FFFFFFFFh`                  | `00 00 00 00 … FF FF FF FF`                          |     |
| Device status                    | (See values column)                                                                                                                                                                                         | Uint_8                             | 2 x 1  | Ok:<br>Error:                                                                                                                               | `0 0<br>1 0`                      | `00 00<br>01 00`                                     |     |
| Status info                      |                                                                                                                                                                                                             |                                    |        |                                                                                                                                             |                                                                |                                                                                   |     |
| Telegram counter                 | Number of measurement telegrams finished in the scanner and given to the interface. Does not count how many telegrams were really given out; is relevant if not all scans are delivered from the scan core. | Uint_16                            | 2      |                                                                                                                                             | `0h … FFFFh`                      | `00 00 … FF FF`                                      |     |
| Scan counter                     | Number of scans which were created in the device; counts how many scans were really done.                                                                                                                   | Uint_16                            | 2      |                                                                                                                                             | `0h … FFFFh`                      | `00 00 … FF FF`                                      |     |
| Time since start up in µs        | In the output telegram this is the time at the zero index before the measurement itself starts. Time base is the boot up time in µs since power up, max. 71 min then starting from 0 again.                 | Uint_32                            | 4      |                                                                                                                                             | `0h … FFFFFFFFh`                  | `00 00 00 00 … FF FF FF FF`                          |     |
| Time of transmission in µs       | In the output telegram this is the time when the complete scan is transmitted to the buffer for data output. Time base is the boot up time in µs since power up, max. 71 min then starting from 0 again.    | Uint_32                            | 4      |                                                                                                                                             | `0h … FFFFFFFFh`                  | `00 00 00 00 … FF FF FF FF`                          |     |
| Status of digital inputs         | Low byte represents input 1.                                                                                                                                                                                | Uint_8                             | 2 x 1  | All inputs low:<br>Input 1 high:<br>Input 2 high:<br>Input 1+2 high:<br>All inputs high:<br>(Depends on system plug and port configuration) | `0 0<br>1 0<br>2 0<br>3 0<br>3 F` | `00 00<br>01 00<br>02 00<br>03 00<br>03 0F`          |     |
| Status of digital outputs        | Low byte represents output 1.                                                                                                                                                                               | Uint_8                             | 2 x 1  | All outputs low:<br>All outputs high:                                                                                                       | `0 0<br>3 F`                      | `00 00<br>03 0F`                                     |     |
| Reserved                         | -                                                                                                                                                                                                           | Uint_16                            | 2      | Always:                                                                                                                                     | `0`                               | `00 00 00 00`                                        |     |
| Frequencies                      |                                                                                                                                                                                                             |                                    |        |                                                                                                                                             |                                                                |                                                                                   |     |
| Scan frequency                   | [1/100 Hz]                                                                                                                                                                                                  | Uint_32                            | 4      | 15 Hz ... 50 Hz:<br>(depends on Dynamic Sensing Profile )                                                                                   | `5DCh ... 1388h`                  | `05 DC ... 13 88`                                    |     |
| Reserved                         | -                                                                                                                                                                                                           | Uint_32                            | 4      | Always:                                                                                                                                     | `0`                               | `00 00 00 00`                                        |     |
| Encoder                          |                                                                                                                                                                                                             |                                    |        |                                                                                                                                             |                                                                |                                                                                   |     |
| Amount of encoder                | If 0, then next two telegram parts are missing.                                                                                                                                                             | Enum_16                            | 2      | External encoder                                                                                                                            | `0<br>1`                          | `00 00<br>00 01`                                     |     |
| Encoder position                 | Info in ticks                                                                                                                                                                                               | Uint_32                            | 4      | Only filled if parameter is activated                                                                                                       | `0h … FFFFFFFFh`                  | `00 00 00 00 ... FF FF FF FF`                        |     |
| Encoder speed                    | mm/sec<br>or<br>milligrad/sec                                                                                                                                                                               | Uint_16                            | 2      | Only filled if parameter is activated                                                                                                       | `0h ... FFFFh`                    | `00 00 ... FF FF`                                    |     |
| 16 bit output channel (Distance) |                                                                                                                                                                                                             |                                    |        |                                                                                                                                             |                                                                |                                                                                   |     |
| Amount of 16 bit channels        | Number of 16 bit channels that provide measured data                                                                                                                                                        | Enum_16                            | 2      | Output channels                                                                                                                             | `1 or 3`                          | `01 or 03`                                           |     |
| Content                          | Defines the content of the output channel                                                                                                                                                                   | String                             | 5      | Distance values:<br>Distance values:<br>Distance values:                                                                                    | `DIST1<br>DIST2<br>DIST3`         | `44 49 53 54 31<br>44 49 53 54 32<br>44 49 53 54 33` |     |
| Scale factor                     | Scale factor or factor of the measurement values                                                                                                                                                            | Real as float according to IEEE754 | 4      | Factor x 1:<br>Factor x 2:<br>Factor x 1 (REFL1) (alternative):                                                                             | `3F800000h<br>40000000h`          | `3F 80 00 00<br>40 00 00 00`                         |     |
| Reserved                         | -                                                                                                                                                                                                           | Real as float according to IEEE754 | 4      | Always:                                                                                                                                     | `00000000`                        | `00 00 00 00`                                        |     |
| Start angle                      | [1/10000°]                                                                                                                                                                                                  | Int_32                             | 4      | -48° ... 228°<br>(depends on Dynamic Sensing Profile )                                                                                      | `FFF8AD00h … 22CA40h`             | `FF F8 AD 00h … 00 22 CA 40h`                        |     |
| Size of single angular step      | Output format in degree: 1/10000°                                                                                                                                                                           | Uint_16                            | 2      | 0.1° ... 1°:<br>(depends on angular resolution of Dynamic Sensing Profile )                                                                 | `3E8h ... 2710h`                  | `03 E8 ... 27 10`                                    |     |
| Amount of data                   | Number of transmitted measurement points                                                                                                                                                                    | Uint_16                            | 2      |                                                                                                                                             | `0h … FFFFh`                      | `00 00 … FF FF`                                      |     |
| Data_1<br>Data_n                 | Data stream starting Data_1 to Data_n                                                                                                                                                                       | Uint_16                            | 2      |                                                                                                                                             | `0h … 61A8h`                      | `00 00 00 00 … 00 00 61 A8`                          |     |
| 8 bit output channel (RSSI)      |                                                                                                                                                                                                             |                                    |        |                                                                                                                                             |                                                                |                                                                                   |     |
| Amount of 8 bit channels         | Number of 8 bit channels that provide measured data                                                                                                                                                         | Enum_16                            | 2      | Output channels:                                                                                                                            | `1 or 3`                          | `01 or 03`                                           |     |
| Content                          | Defines the content of the output channel (RSSI)                                                                                                                                                            | String                             | 5      |                                                                                                                                             | `RSSI1<br>RSSI2<br>RSSI3`         | `52 53 53 49 31<br>52 53 53 49 32<br>52 53 53 49 33` |     |
| Scale factor                     | Scale factor of the RSSI values                                                                                                                                                                             | Real as float according to IEEE754 | 4      | Factor x 1:<br>Factor x 2:                                                                                                                  | `3F800000h<br>40000000h`          | `3F 80 00 00<br>40 00 00 00`                         |     |
| Reserved                         | -                                                                                                                                                                                                           | Real as float according to IEEE754 | 4      | Always:                                                                                                                                     | `00000000h`                       | `00 00 00 00`                                        |     |
| Start angle                      | Output format: [1/10000°]                                                                                                                                                                                   | Uint_32                            | 4      | -48° ... 228°<br>(depends on Dynamic Sensing Profile )                                                                                      | `FFF8AD00h … 22CA40h`             | `FF F8 AD 00h … 00 22 CA 40h`                        |     |
| Size of single angular step      | Output format: 1/10000°                                                                                                                                                                                     | Uint_16                            | 2      | 0.1° ... 1°:<br>(depends on Dynamic Sensing Profile )                                                                                       | `3E8h ... 2710h`                  | `03 E8 ... 27 10`                                    |     |
| Amount of data                   | Number of transmitted measurement points                                                                                                                                                                    | Uint_16                            | 2      |                                                                                                                                             | `0h … FFFFh`                      | `00 00 … FF FF`                                      |     |
| Data_1<br>Data_n                 | Data stream starting Data_1 to Data_n                                                                                                                                                                       | Uint_8                             | 1      |                                                                                                                                             | `00h ... FFh`                     | `00 ... FF`                                          |     |
| Reserved                         |                                                                                                                                                                                                             |                                    |        |                                                                                                                                             |                                                                |                                                                                   |     |
| Reserved                         | -                                                                                                                                                                                                           | Enum_16                            | 2      | Always:                                                                                                                                     | `0`                               | `00 00`                                              |     |
| Reserved                         |                                                                                                                                                                                                             |                                    |        |                                                                                                                                             |                                                                |                                                                                   |     |
| Reserved                         | -                                                                                                                                                                                                           | Enum_16                            | 2      | Always:                                                                                                                                     | `0`                               | `00 00`                                              |     |
| Reserved                         |                                                                                                                                                                                                             |                                    |        |                                                                                                                                             |                                                                |                                                                                   |     |
| Reserved                         | -                                                                                                                                                                                                           | Enum_16                            | 2      | Always:                                                                                                                                     | `0`                               | `00 00`                                              |     |
| Reserved                         |                                                                                                                                                                                                             |                                    |        |                                                                                                                                             |                                                                |                                                                                   |     |
| Reserved                         | -                                                                                                                                                                                                           | Enum_16                            | 2      | Always:                                                                                                                                     | `0`                               | `00 00`                                              |     |
| Reserved                         |                                                                                                                                                                                                             |                                    |        |                                                                                                                                             |                                                                |                                                                                   |     |
| Reserved                         | -                                                                                                                                                                                                           | Uint_16                            | 2      | Always:                                                                                                                                     | `0`                               | `00 00`                                              |     |

LMDscandata - reserved values

Valid distance measurement values are values starting from 16d upwards; everything below has the following meaning:

| DIST     | RSSI   | Description                                                                                                                                                                                     |     |
| -------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| 0d       | 0d     | Invalid measurement value; caused by very low remission (extremely dark object), object distance not within measurement range (too close or too far away) or selected filter settings at device |     |
| 1d - 15d | 0d     | Reserved, currently not in use                                                                                                                                                                  |     |
| ≥16d     | >0h | Valid measurement values                                                                                                                                                                        |     |
| ≥16d     | 254d   | Reflector detected                                                                                                                                                                              |     |
| ≥16d     | 255d   | Reserved                                                                                                                                                                                        |     |

Higher measurement values will be given out with a zero, that means no measurement value detected.

### Set IMU Data Enable [sWN EnableInertialMeasurementUnit]

Set IMU data enable.

**Access:** Authorized client user level is required.

**Request: `sWN EnableInertialMeasurementUnit`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Write | String | 3 | CoLa A: sWN |
| Set IMU data output. | String | 28 | CoLa A: EnableInertialMeasurementUnit |
| Enable/ disable | Bool | 1 | Disable: 0<br>Enable: 1 |

**Response: `sWA EnableInertialMeasurementUnit`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sWA |
| Set IMU data output. | String | 28 | CoLa A: EnableInertialMeasurementUnit |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWN EnableInertialMeasurementUnit 0<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 23 73 57 4E 20 45 6E 61 62 6C 65 49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74 20 00 07` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWA EnableInertialMeasurementUnit<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 21 73 57 41 20 45 6E 61 62 6C 65 49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74 28` |

### Read IMU Data [sRN InertialMeasurementUnit]

Read IMU data.

**Access:** Authorized client user level is required.

**Request: `sRN InertialMeasurementUnit`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Write | String | 3 | CoLa A: sRN |
| Read IMU data | String | 23 | CoLa A: InertialMeasurementUnit |

**Response: `sRA InertialMeasurementUnit`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sRA |
| Read IMU data | String | 23 | CoLa A: InertialMeasurementUnit |
| Vector with acceleration (including gravity) along the X axes. | Real as float according to IEEE754 | 4 | Real in m/s^2<br>CoLa A: 00000000h ... FFFFFFFFh |
| Vector with acceleration (including gravity) along the Y axes. | Real as float according to IEEE754 | 4 | Real in m/s^2<br>CoLa A: 00000000h ... FFFFFFFFh |
| Vector with acceleration (including gravity) along the Z axes. | Real as float according to IEEE754 | 4 | Real in m/s^2<br>CoLa A: 00000000h ... FFFFFFFFh |
| Vector with rotation rates along the X coordinate axes. | Real as float according to IEEE754 | 4 | Real in rad/s<br>CoLa A: 00000000h ... FFFFFFFFh |
| Vector with rotation rates along the Y coordinate axes. | Real as float according to IEEE754 | 4 | Real in rad/s<br>CoLa A: 00000000h ... FFFFFFFFh |
| Vector with rotation rates along the Z coordinate axes. | Real as float according to IEEE754 | 4 | Real in rad/s<br>CoLa A: 00000000h ... FFFFFFFFh |
| Vector with magnetic field strength along the X coordinate axes. | Real as float according to IEEE754 | 4 | Real in T<br>CoLa A: 00000000h ... FFFFFFFFh |
| Vector with magnetic field strength along the Y coordinate axes. | Real as float according to IEEE754 | 4 | Real in T<br>CoLa A: 00000000h ... FFFFFFFFh |
| Vector with magnetic field strength along the Z coordinate axes. | Real as float according to IEEE754 | 4 | Real in T<br>CoLa A: 00000000h ... FFFFFFFFh |
| Orientation in the specified coordinate system given as quaternion | Real as float according to IEEE754 | 4 | CoLa A: 00000000h ... FFFFFFFFh |
| Orientation in the specified coordinate system given as quaternion | Real as float according to IEEE754 | 4 | CoLa A: 00000000h ... FFFFFFFFh |
| Orientation in the specified coordinate system given as quaternion | Real as float according to IEEE754 | 4 | CoLa A: 00000000h ... FFFFFFFFh |
| Orientation in the specified coordinate system given as quaternion | Real as float according to IEEE754 | 4 | CoLa A: 00000000h ... FFFFFFFFh |
| Point in time when the IMU data was captured. Time base is the boot-up time in µs since power up, max. 71 min then starting from 0 again. | Uint_32 | 4 | µs<br>CoLa A: 0h ... FFFFFFFFh |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sRN InertialMeasurementUnit<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 1B 73 52 4E 20 49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74 03` |

### Set Scan Data Format [sWN ScanDataFormat]

Set the data serialization format

**Telegram structure: sWN ScanDataFormat**

| Telegram part | Description               | Variable | Length | Additional details                                                 | Values CoLa A (ASCII)                                                       | Values CoLa B (Binary)                                                   |     |
| ------------- | ------------------------- | -------- | ------ | ------------------------------------------------------------------ | --------------------------------------------------------------------------- | ------------------------------------------------------------------------ | --- |
| Command type  | Write                     | String   | 3      |                                                                    | `sWN`                                          | `73 57 4E`                                  |     |
| Command       | Data serialization format | String   | 14     |                                                                    | `ScanDataFormat`                               | `53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74` |     |
| Variable Data | Data                      | Enum_8   | 1      | MSGPACK:<br>Compact (recommended):<br>LMDscandata:<br>Native ROS2: | `+1d (1h)<br>+2d (2h)<br>+3d (3h)<br>+4d (4h)` | `01<br>02<br>03<br>04`                      |     |

Example: sWN ScanDataFormat

Scan data format set to Compact format

**Telegram structure: sWA ScanDataFormat**

| Telegram part | Description               | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |     |
| ------------- | ------------------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ | --- |
| Command type  | Answer                    | String   | 3      |                    | `sWA`            | `73 57 41`                                  |     |
| Command       | Data serialization format | String   | 14     |                    | `ScanDataFormat` | `53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74` |     |

**Example: sWA ScanDataFormat**

| Protocol | Example                                                                                                            |     |
| -------- | ------------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sWA{SPC}ScanDataFormat<ETX>`                                        |     |
| CoLa A   | `02 73 57 41 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 03`                         |     |
| CoLa B   | `02 02 02 02 00 00 00 13 73 57 41 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 20 49` |     |

## Time Stamp

### Set Scan Configuration [sMN mCLsetscancfglist]

Set scan configuration.

**Access:** Authorized client user level is required.

**Request: `sMN mCLsetscancfglist`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Method | String | 3 | CoLa A: sMN |
| Set scan configuration | String | 17 | CoLa A: mCLsetscancfglist |
| Scan configuration (see table below) | Enum_8 | 1 | Normal mode: 12.5Hz & 0.020°: 12.5Hz & 0.040°: 12.5Hz & 0.060°: 12.5Hz & 0.100°: 12.5Hz & 0.120°: 25Hz & 0.040°: 25Hz & 0.080°: 25Hz & 0.120°: 25Hz & 0.200°: 25Hz & 0.240°: Extended range mode: 12,5Hz & 0.240° 12,5Hz & 0.120° 12,5Hz & 0.080° 12,5Hz & 0.040° 25Hz & 0.480° 25Hz & 0.240° 25Hz & 0.160° 25Hz & 0.080°<br>CoLa A: 11d (0Bh) 1d (1h) 2d (2h) 4d (4h) 5d (5h) 71d (47h) 61d (3Dh) 62d (3Eh) 64d (40h) 65d (41h) 31d (1Fh) 32d (20h) 33d (21h) 35d (23h) 91d (5Bh) 92d (5Ch) 93d (5Dh) 95d (5Fh) |

**Response: `sAN mCLsetscancfglist`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sAN |
| Set scan configuration | String | 17 | CoLa A: mCLsetscancfglist |
| Wrong setting | Enum_8 | 1 | Ok:: 0<br>Error frequency:: 1<br>Error resolution:: 2<br>Error resolution and frequency:: 3<br>Error Range error:: 4<br>General Error:: 5 |

The selected scan configuration changes scan frequency, angular resolution, field of view, and interlace mode. The sensor may need up to 30 seconds to apply a changed configuration.

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sMN mCLsetscancfglist 1<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 17 73 4D 4E 20 6D 43 4C 73 65 74 73 63 61 6E 63 66 67 6C 69 73 74 20 01 0E` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sAN mCLsetscancfglist 0<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 17 73 41 4E 20 6D 43 4C 73 65 74 73 63 61 6E 63 66 67 6C 69 73 74 20 00 03` |

### Start Scan Merger Recording [sMN StartScanMerge]

Start Scan Merger recording.

**Access:** Authorized client user level is required.

**Request: `sMN StartScanMerge`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Method | String | 3 | CoLa A: sMN |
| Start Scan Merger recording | String | 14 | CoLa A: StartScanMerge |

**Response: `sAN StartScanMerge`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sAN |
| Start Scan Merger recording | String | 14 | CoLa A: StartScanMerge |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sMN StartScanMerge<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 12 73 4D 4E 20 53 74 61 72 74 53 63 61 6E 4D 65 72 67 65 77` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sAN StartScanMerge<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 12 73 41 4E 20 53 74 61 72 74 53 63 61 6E 4D 65 72 67 65 7B` |

### Set Time Synchronization [sWN TSCRole]

Set the device synchronization mode.

**Telegram structure: sWN TSCRole**

| Telegram part | Description        | Variable | Length | Additional details   | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                              |     |
| ------------- | ------------------ | -------- | ------ | -------------------- | ------------------------------------------ | --------------------------------------------------- | --- |
| Command type  | Write              | String   | 3      |                      | `sWN`         | `73 57 4E`             |     |
| Command       | Set timestamp role | String   | 7      |                      | `TSCRole`     | `54 53 43 52 6F 6C 65` |     |
| Status        | Timestamp role     | Uint_8   | 1      | Off:<br>NTP:<br>PTP: | `0<br>1<br>3` | `00<br>01<br>03`       |     |

**Example: sWN TSCRole**

| Protocol | Example                                                                                          |     |
| -------- | ------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sWN{SPC}TSCRole{SPC}1<ETX>`                       |     |
| CoLa A   | `<STX>sWN TSCRole 1<ETX>`                               |     |
| CoLa A   | `sWN TSCRole 1`                                                     |     |
| CoLa A   | `02 73 57 4E 20 54 53 43 52 6F 6C 65 20 31 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 0D 73 57 4E 20 54 53 43 52 6F 6C 65 20 01 1B` |     |
| CoLa B   | `73 57 4E 20 54 53 43 52 6F 6C 65 20 01`                            |     |

**Telegram structure: sWA TSCRole**

| Telegram part | Description        | Variable | Length | Additional details | Values CoLa A (ASCII)                  | Values CoLa B (Binary)                              |     |
| ------------- | ------------------ | -------- | ------ | ------------------ | -------------------------------------- | --------------------------------------------------- | --- |
| Command type  | Answer             | String   | 3      |                    | `sWA`     | `73 57 41`             |     |
| Command       | Set timestamp role | String   | 7      |                    | `TSCRole` | `54 53 43 52 6F 6C 65` |     |

**Example: sWA TSCRole**

| Protocol | Example                                                                                       |     |
| -------- | --------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sWA{SPC}TSCRole<ETX>`                          |     |
| CoLa A   | `02 73 57 41 20 54 53 43 52 6F 6C 65 03`                         |     |
| CoLa B   | `02 02 02 02 00 00 00 0C 73 57 41 20 54 53 43 52 6F 6C 65 20 15` |     |

### Set Time Stamp [sMN LSPsetdatetime]

The data format in the telegram is: +2009{SPC}+7{SPC}+22{SPC}+12{SPC}+0{SPC}+0{SPC}+0.The numbers represent year, month, day, hour, minute, second, microsecond.

If plus is used up-front the data it is interpreted as an integer decimal number, without the plus it's the scanner reads the data as hex format.

The answer is always in ASCII format.

Does only work if NTP- respectively PTP-Client is not active.

There is no real time clock inside the device. When the scanner is switched off and after a reboot, the time has to be set again. Therefore, it is recommended to use a NTP or a PTP setting.

**Telegram structure: sMN LSPsetdatetime**

| Telegram part | Description    | Variable | Length | Additional details | Values CoLa A (ASCII)                                                | Values CoLa B (Binary)                                                   |     |
| ------------- | -------------- | -------- | ------ | ------------------ | -------------------------------------------------------------------- | ------------------------------------------------------------------------ | --- |
| Command type  | Method         | String   | 3      |                    | `sMN`                                   | `73 4D 4E`                                  |     |
| Command       | Set time stamp | String   | 14     |                    | `LSPsetdatetime`                        | `4C 53 50 73 65 74 64 61 74 65 74 69 6D 65` |     |
| Year          |                | Uint_16  | 2      |                    | `+1970d … +2099d (07B2h … 0833h)`       | `07 B2 … 08 33`                             |     |
| Month         |                | Uint_8   | 1      |                    | `+1d … +12d(01h … 0Ch)`                 | `01 … 0C`                                   |     |
| Day           |                | Uint_8   | 1      |                    | `+1d … +31d(01h … 1Fh)`                 | `00 … 1F`                                   |     |
| Hour          |                | Uint_8   | 1      |                    | `+0d … +23d(00h … 17h)`                 | `00 … 17`                                   |     |
| Minute        |                | Uint_8   | 1      |                    | `+0d … +59d(00h … 3Bh)`                 | `00 … 3B`                                   |     |
| Second        |                | Uint_8   | 1      |                    | `+0d … +59d(00h … 3Bh)`                 | `00 … 3B`                                   |     |
| Microsecond   |                | Uint_32  | 4      |                    | `+0d … +999999d(00000000h … 000F423Fh)` | `00 00 00 00 … 00 0F 42 3F`                 |     |

**Example 2: sMN LSPsetdatetime Date: 26.01.2010; Time: 10:35**

| Protocol | Example                                                                                                                                                                                    |     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sMN{SPC}LSPsetdatetime{SPC}+2010{SPC}+01{SPC}+26{SPC}+10{SPC}+35{SPC}0{SPC}0<ETX>`                                                          |     |
| CoLa A   | `<STX>sMN LSPsetdatetime +2010 +01 +26 +10 +35 0 0<ETX>`                                                                                          |     |
| CoLa A   | `sMN LSPsetdatetime +2010 +01 +26 +10 +35 0 0`                                                                                                                |     |
| CoLa A   | `02 73 4D 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 2B 32 30 31 30 20 2B 30 31 20 2B 32 36 20 2B 31 30 20 2B 33 35 20 2B 30 30 20 2B 30 30 30 30 03` |     |
| CoLa B   | `02 02 02 02 00 00 00 1E 73 4D 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 07 DA 01 1A 0A 23 00 00 00 00 00 B3`                                        |     |
| CoLa B   | `73 4D 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 07 DA 01 1A 0A 23 00 00 00 00 00`                                                                   |     |

**Telegram structure: sAN LSPsetdatetime**

| Telegram part | Description    | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |     |
| ------------- | -------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ | --- |
| Command type  | Answer         | String   | 3      |                    | `sAN`            | `73 41 4E`                                  |     |
| Command       | Set time stamp | String   | 14     |                    | `LSPsetdatetime` | `4C 53 50 73 65 74 64 61 74 65 74 69 6D 65` |     |
| Status code   | Code number    | Enum_8   | 1      | Success:           | `0`              | `00`                                        |     |

**Example 1, 2: sAN LSPsetdatetime**

| Protocol | Example                                                                                                               |     |
| -------- | --------------------------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sAN{SPC}LSPsetdatetime{SPC}0<ETX>`                                     |     |
| CoLa A   | `02 73 41 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 30 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 14 73 41 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 00 50` |     |

Activate time stamp in the output string format or on SOPAS page “data processing”.

### Read Device Time [sRN DeviceTime]

Read device time.

**Access:** No additional user-level requirement is specified in this telegram table.

**Request: `sRN DeviceTime`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Read | String | 3 | CoLa A: sRN |
| Parameter | String | 10 | CoLa A: DeviceTime |

**Response: `sRA DeviceTime`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sRA |
| Parameter | String | 10 | CoLa A: DeviceTime |
| The sensor system time in milliseconds since January 1, 1970, 00:00 (UTC). If a time server is being used, the configured system time is used. | Uint_32 | 4 | CoLa A: 0d … +9999d (0h … 270Fh) |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sRN DeviceTime<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 0E 73 52 4E 20 44 65 76 69 63 65 54 69 6D 65 42` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sRA DeviceTime 0<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 13 73 52 41 20 44 65 76 69 63 65 54 69 6D 65 20 00 00 00 00 6D` |

### Set Time Server IP Address [sWN TSCTCSrvAddr]

Define the IP address from which the device will receive the time synchronization.

**Telegram structure: sWN TSCTCSrvAddr**

| Telegram part   | Description                | Variable | Length | Additional details        | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                                             |     |
| --------------- | -------------------------- | -------- | ------ | ------------------------- | ----------------------------------------------- | ------------------------------------------------------------------ | --- |
| Command type    | Write                      | String   | 3      |                           | `sWN`              | `73 57 4E`                            |     |
| Command         | Set time server IP address | String   | 12     |                           | `TSCTCSrvAddr`     | `54 53 43 54 43 53 72 76 41 64 64 72` |     |
| IP address data | Set values                 | Uint_8   | 1      | First part of IP address  | `0 …+255d (00…FF)` | `00 … FF`                             |     |
| IP address data | Set values                 | Uint_8   | 1      | Second part of IP address | `0 …+255d (00…FF)` | `00 … FF`                             |     |
| IP address data | Set values                 | Uint_8   | 1      | Third part of IP address  | `0 …+255d (00…FF)` | `00 … FF`                             |     |
| IP address data | Set values                 | Uint_8   | 1      | Fourth part of IP address | `0 …+255d (00…FF)` | `00 … FF`                             |     |

**Example: sWN TSCTCSrvAddr 192.168.0.11**

| Protocol | Example                                                                                                                  |     |
| -------- | ------------------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sWN{SPC}TSCTCSrvAddr{SPC}C0{SPC}A8{SPC}00{SPC}0B<ETX>`                    |     |
| CoLa A   | `<STX>sWN TSCTCSrvAddr C0 A8 00 0B<ETX>`                                        |     |
| CoLa A   | `sWN TSCTCSrvAddr C0 A8 00 0B`                                                              |     |
| CoLa A   | `02 73 57 4E 20 54 53 43 54 43 53 72 76 41 64 64 72 20 43 30 20 41 38 20 30 30 20 30 42 03` |     |
| CoLa B   | `02 02 02 02 00 00 00 15 73 57 4E 20 54 53 43 54 43 53 72 76 41 64 64 72 20 C0 A8 00 0B 3E` |     |
| CoLa B   | `73 57 4E 20 54 53 43 54 43 53 72 76 41 64 64 72 20 C0 A8 00 0B`                            |     |

**Telegram structure: sWA TSCTCSrvAddr**

| Telegram part | Description                | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |     |
| ------------- | -------------------------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ | --- |
| Command type  | Answer                     | String   | 3      |                    | `sWA`          | `73 57 41`                            |     |
| Command       | Set time server IP address | String   | 12     |                    | `TSCTCSrvAddr` | `54 53 43 54 43 53 72 76 41 64 64 72` |     |

**Example: sWA TSCTCSrvAddr**

| Protocol | Example                                                                                                      |     |
| -------- | ------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sWA{SPC}TSCTCSrvAddr<ETX>`                                    |     |
| CoLa A   | `02 73 57 41 20 54 53 43 54 43 53 72 76 41 64 64 72 03`                         |     |
| CoLa B   | `02 02 02 02 00 00 00 11 73 57 41 20 54 53 43 54 43 53 72 76 41 64 64 72 20 52` |     |

### Set Time Zone [sWN TSCTCtimezone]

**Telegram structure: sWN TSCTCtimezone**

| Telegram part  | Description                        | Variable | Length | Additional details | Values CoLa A (ASCII)                                  | Values CoLa B (Binary)                                                |     |
| -------------- | ---------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------------ | --------------------------------------------------------------------- | --- |
| Command type   | Write                              | String   | 3      |                    | `sWN`                     | `73 57 4E`                               |     |
| Command        | Set time zone                      | String   | 13     |                    | `TSCTCtimezone`           | `54 53 43 54 43 74 69 6D 65 7A 6F 6E 65` |     |
| Time zone data | Select the time zone of the client | Enum_8   | 1      | List of time zones | `+0d … +104d (00h … 68h)` | `00 … 68`                                |     |

**Time zone data Values CoLa (ASCII)**

| Value | Time zone              | Value | Time zone             | Value | Time zone             |     |
| ----- | ---------------------- | ----- | --------------------- | ----- | --------------------- | --- |
| 0     | DATE_LINE_STANDARD     | 35    | MONROVIA_REYKJAVIK    | 70    | MUMBAI_NEUDELHI       |     |
| 1     | COORD_WORLD_TIME_11    | 36    | AMSTERDAM_BERLIN_ROM  | 71    | SRI_JAYAWARDENEPURA   |     |
| 2     | HAWAII                 | 37    | BELGRAD_BUDAPEST_PRAG | 72    | KATMANDU              |     |
| 3     | ALASKA                 | 38    | BRUESSEL_MADRID_PARIS | 73    | ASTANA                |     |
| 4     | CALIFORNIA             | 39    | SARAJEVO_WARSCHAU     | 74    | DAKKA                 |     |
| 5     | USA_CANADA             | 40    | WEST_CENTRAL_AFRICA   | 75    | NOWOSIBIRSK           |     |
| 6     | ARIZONA                | 41    | WINDHUK               | 76    | YANGON                |     |
| 7     | LA_PAZ                 | 42    | AMMAN                 | 77    | BANGKOK_HANOI_JAKARTA |     |
| 8     | MOUNTAIN_TIME_USA      | 43    | ATHEN_BUKAREST        | 78    | KRASNOJARSK           |     |
| 9     | CENTRAL_TIME_USA       | 44    | BEIRUT                | 79    | IRKUTSK               |     |
| 10    | MEXICO_CITY            | 45    | DAMASCUS              | 80    | KUALA_LUMPUR_SINGAPUR |     |
| 11    | MIDDLE_AMERICA         | 46    | HARARE_PRETORIA       | 81    | PEKING_HONGKONG       |     |
| 12    | SASKATCHEWAN           | 47    | HELSINKI_KIEW_RIGA    | 82    | PERTH                 |     |
| 13    | BOGOTA_LIMA            | 48    | ISTANBUL              | 83    | TAIPEH                |     |
| 14    | EASTERN_TIME_USA       | 49    | JERUSALEM             | 84    | ULAN_BATOR            |     |
| 15    | INDIANA                | 50    | KAIRO                 | 85    | JAKUTSK               |     |
| 16    | CARACAS                | 51    | KALININGRAD           | 86    | OSAKA_TOKIO           |     |
| 17    | ASUNCION               | 52    | EASTERN_EUROPE        | 87    | SEOUL                 |     |
| 18    | ATLANTIC_KANADA        | 53    | TRIPOLIS              | 88    | ADELAIDE              |     |
| 19    | CUIABA                 | 54    | BAGDAD                | 89    | DARWIN                |     |
| 20    | LAPAZ_SANJUAN          | 55    | KUWAIT_RIAD           | 90    | BRISBANE              |     |
| 21    | SANTIAGO               | 56    | MINSK                 | 91    | CANBERRA_SYDNEY       |     |
| 22    | NEUFUNDLAND            | 57    | MOSKAU_PETERSBURG     | 92    | GUAM_PORT_MORESBY     |     |
| 23    | BRASILIA               | 58    | NAIROBI               | 93    | HOBART                |     |
| 24    | BUENOS_AIRES           | 59    | TEHERAN               | 94    | MAGADAN               |     |
| 25    | CAYENNE_FORTALEZA      | 60    | ABU_DHABI             | 95    | WLADIWOSTOK           |     |
| 26    | GROENLAND              | 61    | BAKU                  | 96    | SALOMONEN_KALEDONIEN  |     |
| 27    | MONTEVIDEO             | 62    | ERIWAN                | 97    | TSCHOKURDACH          |     |
| 28    | SALVADOR               | 63    | ISCHEWSK_SAMARA       | 98    | ANADYR                |     |
| 29    | COORD_WORLD_TIME_02    | 64    | PORT_LOUIS            | 99    | AUCKLAND_WELLINGTON   |     |
| 30    | AZOREN                 | 65    | TIFLIS                | 100   | FIDSCHI               |     |
| 31    | KAP_VERDE              | 66    | KABUL                 | 101   | COORD_WORLD_TIME_12   |     |
| 32    | CASABLANCA             | 67    | ASCHGABET_TASCHKENT   | 102   | NAKUALOFA             |     |
| 33    | DUBLIN_LISSABON_LONDON | 68    | ISLAMABAD_KARATSCHI   | 103   | SAMOA                 |     |
| 34    | COORD_WORLD_TIME       | 69    | JEKATERINBURG         | 104   | KIRITIMATI            |     |

**Telegram structure: sWA TSCTCtimezone**

| Telegram part | Description   | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |     |
| ------------- | ------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- | --- |
| Command type  | Answer        | String   | 3      |                    | `sWA`           | `73 57 41`                               |     |
| Command       | Set time zone | String   | 13     |                    | `TSCTCtimezone` | `54 53 43 54 43 74 69 6D 65 7A 6F 6E 65` |     |

**Example: sWA TSCTCtimezone**

| Protocol | Example                                                                                                         |     |
| -------- | --------------------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sWA{SPC}TSCTCtimezone<ETX>`                                      |     |
| CoLa A   | `02 73 57 41 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 03`                         |     |
| CoLa B   | `02 02 02 02 00 00 00 12 73 57 41 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 20 3D` |     |

### Set Update Time [sWN TSCTCupdatetime]

Define the time period after which the sensor will attempt to get the current system time for the TSC server.

**Telegram structure: sWN TSCTCupdatetime**

| Telegram part                  | Description                        | Variable | Length | Additional details | Values CoLa A (ASCII)                                    | Values CoLa B (Binary)                                                      |     |
| ------------------------------ | ---------------------------------- | -------- | ------ | ------------------ | -------------------------------------------------------- | --------------------------------------------------------------------------- | --- |
| Command type                   | Write                              | String   | 3      |                    | `sWN`                       | `73 57 4E`                                     |     |
| Command                        | Set update time of synchronization | String   | 15     |                    | `TSCTCupdatetime`           | `54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65` |     |
| Update time of synchronization | Set values in seconds              | Uint_32  | 4      |                    | `+1d … +3600d(01h … 0E10h)` | `00 00 00 00 … 00 00 0E 10`                    |     |

**Example: sWN TSCTCupdatetime 600 s**

| Protocol | Example                                                                                                                           |     |
| -------- | --------------------------------------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sWN{SPC}TSCTCupdatetime{SPC}+600<ETX>`                                             |     |
| CoLa A   | `<STX>sWN TSCTCupdatetime +600<ETX>`                                                     |     |
| CoLa A   | `sWN TSCTCupdatetime +600`                                                                           |     |
| CoLa A   | `02 73 57 4E 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 20 2B 36 30 30 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 18 73 57 4E 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 20 00 00 02 58 67` |     |
| CoLa B   | `73 57 4E 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 20 00 00 02 58`                            |     |

**Telegram structure: sWA TSCTCupdatetime**

| Telegram part | Description                        | Variable | Length | Additional details | Values CoLa A (ASCII)                          | Values CoLa B (Binary)                                                      |     |
| ------------- | ---------------------------------- | -------- | ------ | ------------------ | ---------------------------------------------- | --------------------------------------------------------------------------- | --- |
| Command type  | Answer                             | String   | 3      |                    | `sWA`             | `73 57 41`                                     |     |
| Command       | Set update time of synchronization | String   | 15     |                    | `TSCTCupdatetime` | `54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65` |     |

**Example: sWA TSCTCupdatetime**

| Protocol | Example                                                                                                               |     |
| -------- | --------------------------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sWA{SPC}TSCTCupdatetime<ETX>`                                          |     |
| CoLa A   | `02 73 57 41 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 03`                         |     |
| CoLa B   | `02 02 02 02 00 00 00 14 73 57 41 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 20 32` |     |

## Filters

### Set Particle Filter [sWN LFPparticle]

Filter out disturbances in the meausurement data caused by particles such as dust, snow flakes or similar .

**Telegram structure: sWN LFPparticle**

| Telegram part | Description              | Variable | Length | Additional details   | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                          |     |
| ------------- | ------------------------ | -------- | ------ | -------------------- | ------------------------------------------- | --------------------------------------------------------------- | --- |
| Command type  | Write                    | String   | 3      |                      | `sWN`          | `73 57 4E`                         |     |
| Command       | Set particle filter      | String   | 11     |                      | `LFPparticle`  | `4C 46 50 70 61 72 74 69 63 6C 65` |     |
| Status code   | Code number              | Bool_1   | 1      | Inactive:<br>Active: | `0<br>1`       | `00<br>01`                         |     |
| Threshold1)   | Particle threshold in mm | Uint_16  | 2      | (must be taken)      | `+500d (1F4h)` | `01 F4`                            |     |

Never change the threshold here, it is taken by the device to handle the particles.

**Example: sWN LFPparticle**

| Protocol | Example                                                                                                            |     |
| -------- | ------------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sWN{SPC}LFPparticle{SPC}1{SPC}+500<ETX>`                            |     |
| CoLa A   | `<STX>sWN LFPparticle 1 +500<ETX>`                                        |     |
| CoLa A   | `sWN LFPparticle 1 +500`                                                              |     |
| CoLa A   | `02 73 57 4E 20 4C 46 50 70 61 72 74 69 63 6C 65 20 31 20 2B 35 30 30 03`             |     |
| CoLa B   | `02 02 02 02 00 00 00 13 73 57 4E 20 4C 46 50 70 61 72 74 69 63 6C 65 20 01 01 F4 D0` |     |
| CoLa B   | `73 57 4E 20 4C 46 50 70 61 72 74 69 63 6C 65 20 01 01 F4`                            |     |

**Telegram structure: sWA LFPparticle**

| Telegram part | Description         | Variable | Length | Sensor | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |     |
| ------------- | ------------------- | -------- | ------ | ------ | ------------------------------------------ | --------------------------------------------------------------- | --- |
| Command type  | Answer              | String   | 3      |        | `sWA`         | `73 57 41`                         |     |
| Command       | Set particle filter | String   | 11     |        | `LFPparticle` | `4C 46 50 70 61 72 74 69 63 6C 65` |     |

**Example: sWA LFPparticle**

| Protocol | Example                                                                                                   |     |
| -------- | --------------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sWA{SPC}LFPparticle<ETX>`                                  |     |
| CoLa A   | `02 73 57 41 20 4C 46 50 70 61 72 74 69 63 6C 65 03`                         |     |
| CoLa B   | `02 02 02 02 00 00 00 10 73 57 41 20 4C 46 50 70 61 72 74 69 63 6C 65 20 2B` |     |

### Set Average Filter [sWN LFPmeanfilter]

Set average filter.

**Access:** Authorized client user level is required.

**Request: `sWN LFPmeanfilter`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Write | String | 3 | CoLa A: sWN |
| Set average filter | String | 13 | CoLa A: LFPmeanfilter |
| Code number | Bool_1 | 1 | Inactive:: 0<br>Active:: 1 |
| Number | Uint_16 | 2 | CoLa A: +2d … +100d (00 02h … 00 64h) |
| - | Enum_8 | 1 | Always:<br>CoLa A: 0 |

**Response: `sWA LFPmeanfilter`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sWA |
| Set average filter | String | 13 | CoLa A: LFPmeanfilter |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWN LFPmeanfilter 1 +10 0<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 16 73 57 4E 20 4C 46 50 6D 65 61 6E 66 69 6C 74 65 72 20 01 00 0A 00 3C` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWA LFPmeanfilter<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 11 73 57 41 20 4C 46 50 6D 65 61 6E 66 69 6C 74 65 72 18` |

### Set Echo Filter [sWN FREchoFilter]

Only available with firmware versions > V1.10.

Select which measurement value(s) shall be send via LMDscanata, if the meausrement of one angular position returns several distance values

**Telegram structure: sWN FREchoFilter**

| Telegram part | Description     | Variable | Length | Additional details                      | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |     |
| ------------- | --------------- | -------- | ------ | --------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------ | --- |
| Command type  | Write           | String   | 3      |                                         | `sWN`          | `73 57 4E`                            |     |
| Command       | Set echo filter | String   | 12     |                                         | `FREchoFilter` | `46 52 45 63 68 6F 46 69 6C 74 65 72` |     |
| Status code   | Code number     | Enum_8   | 1      | First echo:<br>All echos:<br>Last echo: | `0<br>1<br>2`  | `00<br>01<br>02`                      |     |

**Example: sWN FREchoFilter**

| Protocol | Example                                                                                                         |     |
| -------- | --------------------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sWN{SPC}FREchoFilter{SPC}1<ETX>`                                 |     |
| CoLa A   | `<STX>sWN FREchoFilter 1<ETX>`                                         |     |
| CoLa A   | `sWN FREchoFilter 1`                                                               |     |
| CoLa A   | `02 73 57 4E 20 46 52 45 63 68 6F 46 69 6C 74 65 72 20 31 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 12 73 57 4E 20 46 52 45 63 68 6F 46 69 6C 74 65 72 20 01 7E` |     |
| CoLa B   | `73 57 4E 20 46 52 45 63 68 6F 46 69 6C 74 65 72 20 01`                            |     |

**Telegram structure: sWA FREchoFilter**

| Telegram part | Description     | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |     |
| ------------- | --------------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ | --- |
| Command type  | Answer          | String   | 3      |                    | `sWA`          | `73 57 41`                            |     |
| Command       | Set echo filter | String   | 12     |                    | `FREchoFilter` | `46 52 45 63 68 6F 46 69 6C 74 65 72` |     |

**Example: sWa FREchoFilter**

| Protocol | Example                                                                                                      |     |
| -------- | ------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sWA{SPC}FREchoFilter<ETX>`                                    |     |
| CoLa A   | `02 73 57 41 20 46 52 45 63 68 6F 46 69 6C 74 65 72 03`                         |     |
| CoLa B   | `02 02 02 02 00 00 00 11 73 57 41 20 46 52 45 63 68 6F 46 69 6C 74 65 72 20 70` |     |

### Activate Median Filter [sWN LFPmedianfilter]

Activate Median filter.

**Access:** Authorized client user level is required.

**Request: `sWN LFPmedianfilter`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Write | String | 3 | CoLa A: sWN |
| Sector function | String | 15 | CoLa A: LFPmedianfilter |
| Enable or disable Median filter | Bool_1 | 1 | Disable:: 0<br>Enable:: 1 |
| Number of considered measurement points and number of scans | Uint_16 | 2 | Always:<br>CoLa A: 3 |

**Response: `sWA LFPmedianfilter`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sWA |
| Sector function | String | 15 | CoLa A: LFPmedianfilter |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWN LFPmedianfilter 1 3<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 17 73 57 4E 20 4C 46 50 6D 65 64 69 61 6E 66 69 6C 74 65 72 20 01 00 03 38` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWA LFPmedianfilter<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 13 73 57 41 20 4C 46 50 6D 65 64 69 61 6E 66 69 6C 74 65 72 15` |

### Set Radial Distance Range Filter [sWN LFPradialDistanceRangeFilter]

Restriction of the scan(s) to a specified distance range.

**Telegram structure: sWN LFPradialDistanceRangeFilter**

| Telegram part   | Description                                               | Variable | Length | Additional details   | Values CoLa A (ASCII)                                        | Values CoLa B (Binary)                                                                                             |     |
| --------------- | --------------------------------------------------------- | -------- | ------ | -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | --- |
| Command type    | Write                                                     | String   | 3      |                      | `sWN`                           | `73 57 4E`                                                                            |     |
| Command         | Restriction of the scan(s) to a specified distance range. | String   | 28     |                      | `LFPradialDistanceRangeFilter`  | `4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72` |     |
| Variable Data 1 | Enables/Disables the filter.                              | Bool_1   | 1      | Off:<br>On:          | `0d (0h)<br>1d (1h)`            | `00<br>01`                                                                            |     |
| DistMin         | Lower boundary of the distance range.                     | Int_32   | 4      | Minimum:<br>Maximum: | `+0d (0h)<br>+200000d (30D40h)` | `00 00 00 00<br>00 03 0D 40`                                                          |     |
| DistMax         | Upper boundary of the distance range.                     | Int_32   | 4      | Minimum:<br>Maximum: | `+0d (0h)<br>+200000d (30D40h)` | `00 00 00 00<br>00 03 0D 40`                                                          |     |

Disable the radial distance range filter and set up the boundaries to min 0mm and max 200000mm.

**Telegram structure: sWA LFPradialDistanceRangeFilter**

| Telegram part | Description                                               | Variable | Length | Additional details | Values CoLa A (ASCII)                                       | Values CoLa B (Binary)                                                                                             |     |
| ------------- | --------------------------------------------------------- | -------- | ------ | ------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | --- |
| Command type  | Answer                                                    | String   | 3      |                    | `sWA`                          | `73 57 41`                                                                            |     |
| Command       | Restriction of the scan(s) to a specified distance range. | String   | 28     |                    | `LFPradialDistanceRangeFilter` | `4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72` |     |

**Example: sWA LFPradialDistanceRangeFilter**

| Protocol | Example                                                                                                                                                      |     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sWA{SPC}LFPradialDistanceRangeFilter<ETX>`                                                                    |     |
| CoLa A   | `02 73 57 41 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 03`                         |     |
| CoLa B   | `02 02 02 02 00 00 00 21 73 57 41 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 20 70` |     |

## Encoder

### Set Encoder Transformation Type [sWN EncoderTransformationType]

Set Encoder transformation type.

**Access:** Authorized client user level is required.

**Request: `sWN EncoderTransformationType`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Write | String | 3 | CoLa A: sWN |
| Set encoder transformation type | String | 25 | CoLa A: EncoderTransformationType |
| Transformation type | Enum_8 | 1 | Rotation:: 0<br>Translation:: 1 |

**Response: `sWA EncoderTransformationType`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sWA |
| Set encoder transformation type | String | 25 | CoLa A: EncoderTransformationType |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWN EncoderTransformationType 0<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 1F 73 57 4E 20 45 6E 63 6F 64 65 72 54 72 61 6E 73 66 6F 72 6D 61 74 69 6F 6E 54 79 70 65 20 00 37` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWA EncoderTransformationType<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 1D 73 57 41 20 45 6E 63 6F 64 65 72 54 72 61 6E 73 66 6F 72 6D 61 74 69 6F 6E 54 79 70 65 18` |

### Set Start Orientation for Encoder Transformation Type Rotation [sWN EncoderRotation]

Set start orientation for encoder transformation type rotation.

**Access:** Authorized client user level is required.

**Request: `sWN EncoderRotation`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Write | String | 3 | CoLa A: sWN |
| Set encoder rotation | String | 15 | CoLa A: EncoderRotation |
| Yaw in 1/10000° | Int_32 | 4 | Default: Min: Max:<br>CoLa A: +0 d (0h) -3600000 d (FFC91180h) +3600000 d (36EE80h) |
| Pitch in 1/10000° | Int_32 | 4 | Default: Min: Max:<br>CoLa A: +0 d (0h) -3600000d (FFC91180h) +3600000 d (36EE80h) |
| Roll in 1/10000° | Int_32 | 4 | Default: Min: Max:<br>CoLa A: +0 d (0h) -3600000d (FFC91180h) +3600000 d (36EE80h) |

**Response: `sWA EncoderRotation`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sWA |
| Set encoder rotation | String | 15 | CoLa A: EncoderRotation |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWN EncoderRotation FFF24460 0 DBBA0<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 20 73 57 4E 20 45 6E 63 6F 64 65 72 52 6F 74 61 74 69 6F 6E 20 FF F2 44 60 00 00 00 00 00 0D BB A0 35` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWA EncoderRotation<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 13 73 57 41 20 45 6E 63 6F 64 65 72 52 6F 74 61 74 69 6F 6E 25` |

### Set Start Orientation for Encoder Transformation Type Translation [sWN EncoderTranslation]

Set start orientation for encoder transformation type translation.

**Access:** Authorized client user level is required.

**Request: `sWN EncoderTranslation`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Write | String | 3 | CoLa A: sWN |
| Set encoder translation | String | 18 | CoLa A: EncoderTranslation |
| Offset for X in mm | Int_32 | 4 | Default: Min: Max:<br>CoLa A: +0 d (0h) -100000 d (FFFE7960h) +100000 d (186A0h) |
| Offset for Y in mm | Int_32 | 4 | Default: Min: Max:<br>CoLa A: +0 d (0h) -100000 d (FFFE7960h) +100000 d (186A0h) |
| Offset for Z in mm | Int_32 | 4 | Default: Min: Max:<br>CoLa A: +0 d (0h) -100000 d (FFFE7960h) +100000 d (186A0h) |

**Response: `sWA EncoderTranslation`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sWA |
| Set encoder translation | String | 18 | CoLa A: EncoderTranslation |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWN EncoderTranslation FFFE7960 0 186A0<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 23 73 57 4E 20 45 6E 63 6F 64 65 72 54 72 61 6E 73 6C 61 74 69 6F 6E 20 FF FE 79 60 00 00 00 00 00 01 86 A0 4A` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWA EncoderTranslation<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 16 73 57 41 20 45 6E 63 6F 64 65 72 54 72 61 6E 73 6C 61 74 69 6F 6E 5A` |

### Set Rotation Offset [sWN RotationOffset]

Set rotation offset.

**Access:** Authorized client user level is required.

**Request: `sWN RotationOffset`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Write | String | 3 | CoLa A: sWN |
| Set a rotation offset | String | 14 | CoLa A: RotationOffset |
| Offset for X in mm | Int_32 | 4 | Default: Min: Max:<br>CoLa A: +0 d (0h) -100000 d (FFFE7960h) +100000 d (186A0h) |
| Offset for Y in mm | Int_32 | 4 | Default: Min: Max:<br>CoLa A: +0 d (0h) -100000 d (FFFE7960h) +100000 d (186A0h) |
| Offset for Z in mm | Int_32 | 4 | Default: Min: Max:<br>CoLa A: +0 d (0h) -100000 d (FFFE7960h) +100000 d (186A0h) |

**Response: `sWA RotationOffset`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sWA |
| Set rotation offset | String | 14 | CoLa A: RotationOffset |
| Answer | String | 3 | CoLa A: sRA |
| Read rotation offset | String | 14 | CoLa A: RotationOffset |
| Offset for X in mm | Int_32 | 4 | Default: Min: Max:<br>CoLa A: +0 d (0h) -100000 d (FFFE7960h) +100000 d (186A0h) |
| Offset for Y in mm | Int_32 | 4 | Default: Min: Max:<br>CoLa A: +0 d (0h) -100000 d (FFFE7960h) +100000 d (186A0h) |
| Offset for Z in mm | Int_32 | 4 | Default: Min: Max:<br>CoLa A: +0 d (0h) -100000 d (FFFE7960h) +100000 d (186A0h) |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWN RotationOffset FFFE7960 0 186A0<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 1F 73 57 4E 20 52 6F 74 61 74 69 6F 6E 4F 66 66 73 65 74 20 FF FE 79 60 00 00 00 00 00 01 86 A0 4C` |

### Read for Rotation Offset [sRN RotationOffset]

Read for rotation offset.

**Access:** Authorized client user level is required.

**Request: `sRN RotationOffset`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Read | String | 3 | CoLa A: sRN |
| Read rotation offset | String | 14 | CoLa A: RotationOffset |

**Response: `sRA RotationOffset`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sRA |
| Read rotation offset | String | 14 | CoLa A: RotationOffset |
| Offset for X in mm | Int_32 | 4 | Default: Min: Max:<br>CoLa A: +0 d (0h) -100000 d (FFFE7960h) +100000 d (186A0h) |
| Offset for Y in mm | Int_32 | 4 | Default: Min: Max:<br>CoLa A: +0 d (0h) -100000 d (FFFE7960h) +100000 d (186A0h) |
| Offset for Z in mm | Int_32 | 4 | Default: Min: Max:<br>CoLa A: +0 d (0h) -100000 d (FFFE7960h) +100000 d (186A0h) |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sRN RotationOffset<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 12 73 52 4E 20 52 6F 74 61 74 69 6F 6E 4F 66 66 73 65 74 56` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sRA RotationOffset FFFE7960 0 186A0<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 1F 73 52 41 20 52 6F 74 61 74 69 6F 6E 4F 66 66 73 65 74 20 FF FE 79 60 00 00 00 00 00 01 86 A0 46` |

### Set Scan Merger Trigger [sWN ScanMergeTrigger]

Set Scan Merger trigger.

**Access:** Authorized client user level is required.

**Request: `sWN ScanMergeTrigger`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Write | String | 3 | CoLa A: sWN |
| Select Trigger for Scan Merger | String | 16 | CoLa A: ScanMergeTrigger |
| Trigger source | Enum_8 | 1 | Command:: 0<br>Digital input:: 1 |

**Response: `sWA ScanMergeTrigger`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sWA |
| Select Trigger for Scan Merger | String | 16 | CoLa A: ScanMergeTrigger |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWN ScanMergeTrigger 1<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 16 73 57 4E 20 53 63 61 6E 4D 65 72 67 65 54 72 69 67 67 65 72 20 01 54` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWA ScanMergeTrigger<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 14 73 57 41 20 53 63 61 6E 4D 65 72 67 65 54 72 69 67 67 65 72 7A` |

### Set Increment Source [sWN LICsrc]

Set increment source.

**Access:** Authorized client user level is required.

**Request: `sWN LICsrc`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Write | String | 3 | CoLa A: sWN |
| Set increment source | String | 6 | CoLa A: LICsrc |
| Parameter | Enum_8 | 1 | Encoder:<br>CoLa A: 1 |

**Response: `sWA LICsrc`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sWA |
| Set increment source | String | 6 | CoLa A: LICsrc |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWN LICsrc 1<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 0C 73 57 4E 20 4C 49 43 73 72 63 20 01 4F` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWA LICsrc<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 0A 73 57 41 20 4C 49 43 73 72 63 61` |

### Set Encoder Settings [sWN LICencset]

Define if and which type of encoder is connected to the device so that input signals are processed correctly.

**Telegram structure: sWN LICencset**

| Telegram part   | Description      | Variable | Length | Additional details                                                                                                 | Values CoLa A (ASCII)                                | Values CoLa B (Binary)                                    |     |
| --------------- | ---------------- | -------- | ------ | ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- | --------------------------------------------------------- | --- |
| Command type    | Write            | String   | 3      |                                                                                                                    | `sWN`                   | `73 57 4E`                   |     |
| Command         | Encoder settings | String   | 9      |                                                                                                                    | `LICencset`             | `4C 49 43 65 6E 63 73 65 74` |     |
| Encoder setting |                  | Enum_8   | 1      | Off:<br>Single increment/INC1:<br>Direction recognition (phase):<br>Direction recognition (level):<br>Fixed speed: | `0<br>1<br>2<br>3<br>4` | `00<br>01<br>02<br>03<br>04` |     |

**Example: sWN LICencset**

| Protocol | Example                                                                                                |     |
| -------- | ------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sWN{SPC}LICencset{SPC}0<ETX>`                           |     |
| CoLa A   | `<STX>sWN LICencset 0<ETX>`                                   |     |
| CoLa A   | `sWN LICencset 0`                                                         |     |
| CoLa A   | `02 73 57 4E 20 4C 49 43 65 6E 63 73 65 74 20 30 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 0F 73 57 4E 20 4C 49 43 65 6E 63 73 65 74 20 00 26` |     |
| CoLa B   | `73 57 4E 20 4C 49 43 65 6E 63 73 65 74 20 00`                            |     |

**Telegram structure: sWA LICencset**

| Telegram part | Description      | Variable | Length | Additional details | Values CoLa A (ASCII)                    | Values CoLa B (Binary)                                    |     |
| ------------- | ---------------- | -------- | ------ | ------------------ | ---------------------------------------- | --------------------------------------------------------- | --- |
| Command type  | Answer           | String   | 3      |                    | `sWA`       | `73 57 41`                   |     |
| Command       | Encoder settings | String   | 9      |                    | `LICencset` | `4C 49 43 65 6E 63 73 65 74` |     |

**Example: sWA LICencset**

| Protocol | Example                                                                                             |     |
| -------- | --------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sWA{SPC}LICencset<ETX>`                              |     |
| CoLa A   | `02 73 57 41 20 4C 49 43 65 6E 63 73 65 74 03`                         |     |
| CoLa B   | `02 02 02 02 00 00 00 0E 73 57 41 20 4C 49 43 65 6E 63 73 65 74 20 29` |     |

### Set Encoder Resolution [sWN LICencres]

Determine the encoder resolution in mm/increment.

**Telegram structure: sWN LICencres**

| Telegram part      | Description                                              | Variable | Length | Additional details | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                                                     |     |
| ------------------ | -------------------------------------------------------- | -------- | ------ | ------------------ | ----------------------------------------------- | -------------------------------------------------------------------------- | --- |
| Command type       | Write                                                    | String   | 3      |                    | `sWN`              | `73 57 4E`                                    |     |
| Command            | Set encoder resolution                                   | String   | 9      |                    | `LICencres`        | `4C 49 43 65 6E 63 72 65 73`                  |     |
| Encoder resolution | Resolution value in mm/Inc as float according to IEEE754 | Real     | 4      |                    | `+0.001d … +2000d` | `3A 83 12 6F … 44 FA 00 00<br>(see IEEE 754)` |     |

**Example: sWN LICencres**

| Protocol | Example                                                                                                         |     |
| -------- | --------------------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sWN{SPC}LICencres{SPC}+1000<ETX>`                                |     |
| CoLa A   | `<STX>sWN LICencres +1000<ETX>`                                        |     |
| CoLa A   | `sWN LICencres +1000`                                                              |     |
| CoLa A   | `02 73 57 4E 20 4C 49 43 65 6E 63 72 65 73 20 2B 31 30 30 30 03`                   |     |
| CoLa B   | `02 02 02 02 00 00 00 12 73 57 4E 20 4C 49 43 65 6E 63 72 65 73 20 44 7A 00 00 1E` |     |
| CoLa B   | `73 57 4E 20 4C 49 43 65 6E 63 72 65 73 20 44 7A 00 00`                            |     |

**Telegram structure: sWA LICencres**

| Telegram part | Description            | Variable | Length | Additional details | Values CoLa A (ASCII)                    | Values CoLa B (Binary)                                    |     |
| ------------- | ---------------------- | -------- | ------ | ------------------ | ---------------------------------------- | --------------------------------------------------------- | --- |
| Command type  | Answer                 | String   | 3      |                    | `sWA`       | `73 57 41`                   |     |
| Command       | Set encoder resolution | String   | 9      |                    | `LICencres` | `4C 49 43 65 6E 63 72 65 73` |     |

**Example: sWA LICencres**

| Protocol | Example                                                                                             |     |
| -------- | --------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sWA{SPC}LICencres<ETX>`                              |     |
| CoLa A   | `02 73 57 41 20 4C 49 43 65 6E 63 72 65 73 03`                         |     |
| CoLa B   | `02 02 02 02 00 00 00 0E 73 57 41 20 4C 49 43 65 6E 63 72 65 73 20 2F` |     |

### Read Encoder Speed [sRN LICencsp]

Read encoder speed.

**Access:** No additional user-level requirement is specified in this telegram table.

**Request: `sRN LICencsp`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Read | String | 3 | CoLa A: sRN |
| Read encoder speed | String | 8 | CoLa A: LICencsp |

**Response: `sRA LICencsp`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sRA |
| Read encoder speed | String | 8 | CoLa A: LICencsp |
| [Speed in m/s as float according to IEEE754] | Real | 4 | CoLa A: 0h … FFFFFFFFh |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sRN LICencsp<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 0C 73 52 4E 20 4C 49 43 65 6E 63 73 70 62` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sRA LICencsp 0<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 11 73 52 41 20 4C 49 43 65 6E 63 73 70 20 00 00 00 00 4D` |

### Set Synchronization Mode [sWN SYMode]

Set synchronization mode.

**Access:** Authorized client user level is required.

**Request: `sWN SYMode`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Write | String | 3 | CoLa A: sWN |
| Set sync mode | String | 6 | CoLa A: SYMode |
| Synchronization mode data | Bool_1 | 1 | No sync:: 0<br>Sync by wire:: 1<br>Sync by PTP:: 3 |

**Response: `sWA SYMode`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sWA |
| Set sync mode | String | 6 | CoLa A: SYMode |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWN SYMode 1<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 0C 73 57 4E 20 53 59 4D 6F 64 65 20 01 42` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWA SYMode<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 0A 73 57 41 20 53 59 4D 6F 64 65 6C` |

### Set Synchronization Phase [sWN SYPhase]

Set synchronization phase.

**Access:** Authorized client user level is required.

**Request: `sWN SYPhase`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Write | String | 3 | CoLa A: sWN |
| Set sync phase | String | 7 | CoLa A: SYPhase |
| Synchronization phase data | Int_16 | 2 | Default:<br>CoLa A: +180d (B4h) -180d … +180d (FF4Ch … B4h) |

**Response: `sWA SYPhase`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sWA |
| Set sync phase | String | 7 | CoLa A: SYPhase |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWN SYPhase +90<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 0E 73 57 4E 20 53 59 50 68 61 73 65 20 00 5A 75` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWA SYPhase<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 0B 73 57 41 20 53 59 50 68 61 73 65 00` |

## Inputs and Outputs

### Set Scan Merger [sWN ScanMergerEnabled]

Set Scan Merger.

**Access:** Authorized client user level is required.

**Request: `sWN ScanMergerEnabled`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Write | String | 3 | CoLa A: sWN |
| Set Scan Merger | String | 17 | CoLa A: ScanMergerEnabled |
| Enable/ Disable | Bool_1 | 1 | Disable:: 0<br>Enable:: 1 |

**Response: `sWA ScanMergerEnabled`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sWA |
| Set Scan Merger | String | 17 | CoLa A: ScanMergerEnabled |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWN ScanMergerEnabled 1<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 17 73 57 4E 20 53 63 61 6E 4D 65 72 67 65 72 45 6E 61 62 6C 65 64 20 01 3B` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWA ScanMergerEnabled<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 15 73 57 41 20 53 63 61 6E 4D 65 72 67 65 72 45 6E 61 62 6C 65 64 15` |

### Read Port Configuration of All I/Os [sRN PortConfiguration]

Read the configuration of the digital inputs and outputs.

**Telegram structure: sRN PortConfiguration**

| Telegram part | Description                | Variable | Length | Additional details | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                            |     |
| ------------- | -------------------------- | -------- | ------ | ------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------- | --- |
| Command type  | Read                       | String   | 3      |                    | `sRN`               | `73 52 4E`                                           |     |
| Command       | Ask for port configuration | String   | 12     |                    | `PortConfiguration` | `50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |     |

**Example: sRN PortConfiguration**

| Protocol | Example                                                                                                                  |     |
| -------- | ------------------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sRN{SPC}PortConfiguration<ETX>`                                           |     |
| CoLa A   | `<STX>sRN PortConfiguration<ETX>`                                               |     |
| CoLa A   | `sRN PortConfiguration`                                                                     |     |
| CoLa A   | `02 73 52 4E 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 15 73 52 4E 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 26` |     |
| CoLa B   | `73 52 4E 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E`                            |     |

**Telegram structure: sRA PortConfiguration**

| Telegram part                                                                                         | Description                                                                | Variable | Length                             | Additional details                                                                                                                                | Values CoLa A (ASCII)                                                           | Values CoLa B (Binary)                                                            |     |
| ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --- |
| Command type                                                                                          | Answer                                                                     | String   | 3                                  |                                                                                                                                                   | `sRA`                                              | `73 52 41`                                           |     |
| Command                                                                                               | Configuration of all I/Os                                                  | String   | 12                                 |                                                                                                                                                   | `PortConfiguration`                                | `50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |     |
| Start of loop, number of loops = amount of all current and future Inputs and Outputs of device family |                                                                            |          |                                    |                                                                                                                                                   |                                                                                 |                                                                                   |     |
| Port Type                                                                                             | Input or Output                                                            | Enum_8   | 1                                  | Input:<br>Output:                                                                                                                                 | `0<br>1`                                           | `00<br>01`                                           |     |
| Port Name                                                                                             | Amount of characters of the following port name                            | Uint_16  | 2                                  |                                                                                                                                                   | `0h … 20h`                                         | `00 00 … 00 20`                                      |     |
| Port Name                                                                                             | Port name                                                                  | String   | 16<br>(depending on string length) |                                                                                                                                                   | `[Port name]`                                      | `[Port name]`                                        |     |
| Input Settings                                                                                        |                                                                            |          |                                    |                                                                                                                                                   |                                                                                 |                                                                                   |     |
| Logic                                                                                                 | Logic of the input                                                         | Bool_1   | 1                                  | Active high:<br>Active low:                                                                                                                       | `0<br>1`                                           | `00<br>01`                                           |     |
| Debouncing                                                                                            | Select debouncing time in ms                                               | Uint_16  | 2                                  | (max. 10,000ms)                                                                                                                                   | `0h … 2710h`                                       | `00 00 … 27 10`                                      |     |
| Reserved                                                                                              | -                                                                          | Enum_8   | 1                                  | Always:                                                                                                                                           | `0`                                                | `00`                                                 |     |
| Reserved                                                                                              | Reserved value 1                                                           | Uint_16  | 2                                  |                                                                                                                                                   | `0`                                                | `00 00`                                              |     |
| Reserved                                                                                              | Reserved value 2                                                           | Uint_16  | 2                                  |                                                                                                                                                   | `0`                                                | `00 00`                                              |     |
| Output Settings                                                                                       |                                                                            |          |                                    |                                                                                                                                                   |                                                                                 |                                                                                   |     |
| Logic                                                                                                 | Logic of the input                                                         | Bool_1   | 1                                  | Active high:<br>Active low:                                                                                                                       | `0<br>1`                                           | `00<br>01`                                           |     |
| Output Mode                                                                                           | PNP, NPN or Push-Pull                                                      | Enum_8   | 1                                  | PNP:<br>NPN:<br>Push-Pull:                                                                                                                        | `0<br>1<br>2`                                      | `00<br>01<br>02`                                     |     |
| Restart type                                                                                          | Restart behavior of output after event: immediately or after specific time | Enum_8   | 1                                  | Immediately:<br>Time:<br>Input:                                                                                                                   | `0<br>1<br>2`                                      | `00<br>01<br>02`                                     |     |
| Restart time                                                                                          | [Only with restart type = Time], time in ms                                | Uint_32  | 4                                  | (20 ms … 600,000 ms)                                                                                                                              | `14h … 927C0h`                                     | `00 00 00 14 … 00 09 27 C0`                          |     |
| Restart input                                                                                         | [Only with restart type = Input], input for restart                        | Uint_16  | 2                                  |                                                                                                                                                   | `1 ... 8`                                          | `00 01 ... 00 08`                                    |     |
| Combination                                                                                           | Combining multiple Events and/or Inputs                                    | Enum_8   | 1                                  | AND:<br>OR:<br>XOR:                                                                                                                               | `0<br>1<br>2`                                      | `00<br>01<br>02`                                     |     |
| Reserved                                                                                              | Reserved value 3                                                           | Uint_16  | 2                                  |                                                                                                                                                   | `0`                                                | `00 00`                                              |     |
| Reserved                                                                                              | Reserved value 4                                                           | Uint_16  | 2                                  |                                                                                                                                                   | `0`                                                | `00 00`                                              |     |
| Sources                                                                                               | Amount (n) of combined sources                                             | Uint_16  | 2                                  |                                                                                                                                                   | `0h ... FFFFh`                                     | `00 00 ... FF FF`                                    |     |
| Sources                                                                                               | Start of source loop, number of loops = amount of combined sources         |          |                                    |                                                                                                                                                   |                                                                                 |                                                                                   |     |
| Sources                                                                                               | Source name                                                                | String   | 4                                  | Device Ready:<br>Sopas Command:(xx = Number of output port)<br>Indexsignal:<br>SyncOutByClock:<br>Input = Port Name:(INxx = Number of input port) | `[Source]<br>DRDY<br>SCxx<br>SROT<br>SCLK<br>INxx` | `[Source]`                                           |     |
| Sources                                                                                               | Source Inverted or not                                                     | Bool_1   | 1                                  | Not inverted:<br>Inverted:                                                                                                                        | `0<br>1`                                           | `00<br>01`                                           |     |
| Sources                                                                                               | Reserved value 5                                                           | Uint_8   | 1                                  |                                                                                                                                                   | `0`                                                | `00`                                                 |     |
| Sources                                                                                               | Reserved value 6                                                           | Uint_8   | 1                                  |                                                                                                                                                   | `0`                                                | `00`                                                 |     |
| Sources                                                                                               | Stop of source loop                                                        |          |                                    |                                                                                                                                                   |                                                                                 |                                                                                   |     |
| Reserved                                                                                              | Reserved value 7                                                           | Uint_16  | 2                                  |                                                                                                                                                   | `0`                                                | `00 00`                                              |     |
| Reserved                                                                                              | Reserved value 8                                                           | Uint_16  | 2                                  |                                                                                                                                                   | `0`                                                | `00 00`                                              |     |
| Reserved                                                                                              | Reserved value 9                                                           | Uint_16  | 2                                  |                                                                                                                                                   | `0`                                                | `00 00`                                              |     |
| Reserved                                                                                              | Reserved value 10                                                          | Uint_16  | 2                                  |                                                                                                                                                   | `0`                                                | `00 00`                                              |     |
| Stop of loop                                                                                          |                                                                            |          |                                    |                                                                                                                                                   |                                                                                 |                                                                                   |     |

### Read State of the Inputs [sRN LIDinputstate]

Use sEN LIDinputstate 1 to receive a telegram each time an input signal (e.g. by trigger) changes.

**Telegram structure: sRN LIDinputstate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |     |
| ------------- | ----------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- | --- |
| Command type  | Read        | String   | 3      |                    | `sRN`           | `73 52 4E`                               |     |
| Command       | Input state | String   | 14     |                    | `LIDinputstate` | `4C 49 44 69 6E 70 75 74 73 74 61 74 65` |     |

**Example: sRN LIDinputstate**

| Protocol | Example                                                                                                      |     |
| -------- | ------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sRN{SPC}LIDinputstate<ETX>`                                   |     |
| CoLa A   | `<STX>sRN LIDinputstate<ETX>`                                       |     |
| CoLa A   | `sRN LIDinputstate`                                                             |     |
| CoLa A   | `02 73 52 4E 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 11 73 52 4E 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 0F` |     |
| CoLa B   | `73 52 4E 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65`                            |     |

**Telegram structure: sRA LIDinputstate**

| Telegram part                                                               | Description                                                                         | Variable | Length | Additional details                        | Values CoLa A (ASCII)                          | Values CoLa B (Binary)                                                |     |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------- | ------ | ----------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------- | --- |
| Command type                                                                | Answer                                                                              | String   | 3      |                                           | `sRA`             | `73 52 41`                               |     |
| Command                                                                     | Output state                                                                        | String   | 14     |                                           | `LIDinputstate`   | `4C 49 44 69 6E 70 75 74 73 74 61 74 65` |     |
| Status code                                                                 | Version number                                                                      | Uint_16  | 2      |                                           | `0h … FFFFh`      | `00 00 … FF FF`                          |     |
| Status code                                                                 | System counter<br>(time in µs since power up max. 71min then starting from 0 again) | Uint_32  | 4      |                                           | `0 h … FFFFFFFFh` | `00 00 00 00 … FF FF FF FF`              |     |
| State of the inputs 1 … n                                                   | Amount of inputs (n) depending of device family                                     | Enum_8   | 1      | Not active:<br>Active:<br>Input not used: | `0<br>1<br>2`     | `00<br>01<br>02`                         |     |
| Time                                                                        | States code                                                                         | Uint_16  | 2      | No time data:<br>Time data:               | `0<br>1`          | `00 00<br>00 01`                         |     |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Year                                                                                | Array    | 2      | E. g.                                     | `1970`            | `07 B2`                                  |     |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Month                                                                               | Array    | 1      |                                           | `1 … 12`          | `01 … 0C`                                |     |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Day                                                                                 | Array    | 1      |                                           | `1 … 31`          | `01 … 1F`                                |     |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Hour                                                                                | Array    | 1      |                                           | `0 … 23`          | `00 … 17`                                |     |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Minute                                                                              | Array    | 1      |                                           | `0 … 59`          | `00 … 3B`                                |     |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Second                                                                              | Array    | 1      |                                           | `0 … 59`          | `00 … 3B`                                |     |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Microsecond                                                                         | Array    | 4      |                                           | `0 … 999999`      | `00 00 00 00 … 00 0F 42 3F`              |     |

### Read State of the Outputs [sRN LIDoutputstate]

Status of all outputs

**Telegram structure: sRN LIDoutputstate**

| Telegram part | Description  | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |     |
| ------------- | ------------ | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ | --- |
| Command type  | Read         | String   | 3      |                    | `sRN`            | `73 52 4E`                                  |     |
| Command       | Output state | String   | 14     |                    | `LIDoutputstate` | `4C 49 44 6F 75 74 70 75 74 73 74 61 74 65` |     |

**Example: sRN LIDoutputstate**

| Protocol | Example                                                                                                         |     |
| -------- | --------------------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sRN{SPC}LIDoutputstate<ETX>`                                     |     |
| CoLa A   | `<STX>sRN LIDoutputstate<ETX>`                                         |     |
| CoLa A   | `sRN LIDoutputstate`                                                               |     |
| CoLa A   | `02 73 52 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 12 73 52 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 66` |     |
| CoLa B   | `73 52 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65`                            |     |

**Telegram structure: sRA LIDoutputstate**

The response uses the structure documented for `sRA/sSN LIDoutputstate` under the event telegram below.

### Receive Outputstate by Event [sEN LIDoutputstate]

Output telegram is sent every time an output state changes.

**Telegram structure: sEN LIDoutputstate**

| Telegram part | Description  | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |     |
| ------------- | ------------ | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ | --- |
| Command type  | Event        | String   | 3      |                    | `sEN`            | `73 45 4E`                                  |     |
| Command       | Output state | String   | 14     |                    | `LIDoutputstate` | `4C 49 44 6F 75 74 70 75 74 73 74 61 74 65` |     |
|               | Start/stop   | Enum_8   | 1      | Start:<br>Stop:    | `1<br>0`         | `01<br>00`                                  |     |

**Example: sEN LIDoutputstate**

| Protocol | Example                                                                                                               |     |
| -------- | --------------------------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sEN{SPC}LIDoutputstate{SPC}1<ETX>`                                     |     |
| CoLa A   | `<STX>sEN LIDoutputstate 1<ETX>`                                             |     |
| CoLa A   | `sEN LIDoutputstate 1`                                                                   |     |
| CoLa A   | `02 73 45 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 31 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 14 73 45 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 01 50` |     |
| CoLa B   | `73 45 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 01`                            |     |

**Telegram structure: sRA/sSN LIDoutputstate**

| Telegram part                                                                                                                   | Description                                                                         | Variable | Length | Additional details                         | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |     |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------- | ------ | ------------------------------------------ | --------------------------------------------- | ------------------------------------------------------------------------ | --- |
| Command type                                                                                                                    | Answer                                                                              | String   | 3      |                                            | `sRA / sSN`      | `73 52 41 / 73 53 4E`                       |     |
| Command                                                                                                                         | Output state                                                                        | String   | 14     |                                            | `LIDoutputstate` | `4C 49 44 6F 75 74 70 75 74 73 74 61 74 65` |     |
| Status code                                                                                                                     | Version number                                                                      | Uint_16  | 2      |                                            | `0h … FFFFh`     | `00 00 … FF FF`                             |     |
| Status code                                                                                                                     | System counter<br>(time in µs since power up max. 71min then starting from 0 again) | Uint_32  | 4      |                                            | `0h … FFFFFFFFh` | `00 00 00 00 … FF FF FF FF`                 |     |
| State of the outputs 1 ... n and count value in hex. (values of an example)<br>Amount of outputs (n) depending of device family | Output 1 ... n state                                                                | Enum_8   | 1      | Not active:<br>Active:<br>Output not used: | `0<br>1<br>2`    | `00<br>01<br>02`                            |     |
| State of the outputs 1 ... n and count value in hex. (values of an example)<br>Amount of outputs (n) depending of device family | Output 1 ... n count                                                                | Uint_32  | 4      |                                            | `0h … FFFFFFFFh` | `00 00 00 00 … FF FF FF FF`                 |     |
| Time                                                                                                                            | States code                                                                         | Uint_16  | 2      | No time data:<br>Time data:                | `0<br>1`         | `00 00<br>00 01`                            |     |
| Time Block<br>(sensor-time from the last change of min. one of the outputs)                                                     | Year                                                                                | Array    | 2      | E. g.                                      | `1970`           | `07 B2`                                     |     |
| Time Block<br>(sensor-time from the last change of min. one of the outputs)                                                     | Month                                                                               | Array    | 1      |                                            | `1 … 12`         | `01 … 0C`                                   |     |
| Time Block<br>(sensor-time from the last change of min. one of the outputs)                                                     | Day                                                                                 | Array    | 1      |                                            | `1 … 31`         | `01 … 1F`                                   |     |
| Time Block<br>(sensor-time from the last change of min. one of the outputs)                                                     | Hour                                                                                | Array    | 1      |                                            | `0 … 23`         | `00 … 17`                                   |     |
| Time Block<br>(sensor-time from the last change of min. one of the outputs)                                                     | Minute                                                                              | Array    | 1      |                                            | `0 … 59`         | `00 … 3B`                                   |     |
| Time Block<br>(sensor-time from the last change of min. one of the outputs)                                                     | Second                                                                              | Array    | 1      |                                            | `0 … 59`         | `00 … 3B`                                   |     |
| Time Block<br>(sensor-time from the last change of min. one of the outputs)                                                     | Microsecond                                                                         | Array    | 4      |                                            | `0 … 999999`     | `00 00 00 00 … 00 0F 42 3F`                 |     |

### Set Output State [sMN mDOSetOutput]

Set a specific output to high or low via software command.

Output source needs to be set to "SOPAS command" and the port configured as Output (in case of I/O).

**Telegram structure: sMN mDOSetOutput**

| Telegram part | Description      | Variable | Length | Additional details      | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                             |     |
| ------------- | ---------------- | -------- | ------ | ----------------------- | --------------------------------------------- | ------------------------------------------------------------------ | --- |
| Command type  | Method           | String   | 3      |                         | `sMN`            | `73 4D 4E`                            |     |
| Command       | Set output state | String   | 12     |                         | `mDOSetOutput`   | `6D 44 4F 53 65 74 4F 75 74 70 75 74` |     |
| Output number |                  | Uint_8   | 1      | Depends on system plug: | `1 … 3<br>1 … 6` | `01 … 03<br>01 … 06`                  |     |
| Output state  |                  | Enum_8   | 1      | Not active:<br>Active:  | `0<br>1`         | `00<br>01`                            |     |

**Example: sMN mDOSetOutput**

| Protocol | Example                                                                                                            |     |
| -------- | ------------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sMN{SPC}mDOSetOutput{SPC}1{SPC}1<ETX>`                              |     |
| CoLa A   | `<STX>sMN mDOSetOutput 1 1<ETX>`                                          |     |
| CoLa A   | `sMN mDOSetOutput 1 1`                                                                |     |
| CoLa A   | `02 73 4D 4E 20 6D 44 4F 53 65 74 4F 75 74 70 75 74 20 31 20 31 03`                   |     |
| CoLa B   | `02 02 02 02 00 00 00 13 73 4D 4E 20 6D 44 4F 53 65 74 4F 75 74 70 75 74 20 01 01 6B` |     |
| CoLa B   | `73 4D 4E 20 6D 44 4F 53 65 74 4F 75 74 70 75 74 20 01 01`                            |     |

**Telegram structure: sAN mDOSetOutput**

| Telegram part | Description      | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |     |
| ------------- | ---------------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ | --- |
| Command type  | Answer           | String   | 3      |                    | `sAN`          | `73 41 4E`                            |     |
| Command       | Set output state | String   | 12     |                    | `mDOSetOutput` | `6D 44 4F 53 65 74 4F 75 74 70 75 74` |     |
| Status Code   | Status code      | Bool_1   | 1      | Error:<br>Success: | `0<br>1`       | `00<br>01`                            |     |

**Example: sAN mDOSetOutput**

| Protocol | Example                                                                                                         |     |
| -------- | --------------------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sAN{SPC}mDOSetOutput{SPC}1<ETX>`                                 |     |
| CoLa A   | `02 73 41 4E 20 6D 44 4F 53 65 74 4F 75 74 70 75 74 20 31 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 12 73 41 4E 20 6D 44 4F 53 65 74 4F 75 74 70 75 74 20 01 66` |     |

## Status

### Reset Output Counter [sMN LIDrstoutpcnt]

Reset the counter which keeps track of how often an digital output has been active (and not active). Information from the counter is included in LIDoutputstate.

**Telegram structure: sMN LIDrstoutpcnt**

| Telegram part | Description          | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |     |
| ------------- | -------------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- | --- |
| Command type  | Method               | String   | 3      |                    | `sMN`           | `73 4D 4E`                               |     |
| Command       | Reset output counter | String   | 13     |                    | `LIDrstoutpcnt` | `4C 49 44 72 73 74 6F 75 74 70 63 6E 74` |     |

**Example: sMN LIDrstoutpcnt**

| Protocol | Example                                                                                                      |     |
| -------- | ------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sMN{SPC}LIDrstoutpcnt<ETX>`                                   |     |
| CoLa A   | `<STX>sMN LIDrstoutpcnt<ETX>`                                       |     |
| CoLa A   | `sMN LIDrstoutpcnt`                                                             |     |
| CoLa A   | `02 73 4D 4E 20 4C 49 44 72 73 74 6F 75 74 70 63 6E 74 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 11 73 4D 4E 20 4C 49 44 72 73 74 6F 75 74 70 63 6E 74 03` |     |
| CoLa B   | `73 4D 4E 20 4C 49 44 72 73 74 6F 75 74 70 63 6E 74`                            |     |

**Telegram structure: sAN LIDrstoutpcnt**

| Telegram part | Description          | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |     |
| ------------- | -------------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- | --- |
| Command type  | Answer               | String   | 3      |                    | `sAN`           | `73 41 4E`                               |     |
| Command       | Reset output counter | String   | 13     |                    | `LIDrstoutpcnt` | `4C 49 44 72 73 74 6F 75 74 70 63 6E 74` |     |
| Status code   | Code number          | Bool_1   | 1      | Success:<br>Error: | `0<br>1`        | `00<br>01`                               |     |

**Example: sAN LIDrstoutpcnt**

| Protocol | Example                                                                                                            |     |
| -------- | ------------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sAN{SPC}LIDrstoutpcnt{SPC}0<ETX>`                                   |     |
| CoLa A   | `02 73 41 4E 20 4C 49 44 72 73 74 6F 75 74 70 63 6E 74 20 30 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 13 73 41 4E 20 4C 49 44 72 73 74 6F 75 74 70 63 6E 74 20 00 2F` |     |

### Read Firmware Version [sRN DeviceIdent]

**Telegram structure: sRN DeviceIdent**

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |     |
| ------------- | --------------------- | -------- | ------ | ------------------ | ------------------------------------------ | --------------------------------------------------------------- | --- |
| Command type  | Read                  | String   | 3      |                    | `sRN`         | `73 52 4E`                         |     |
| Command       | Read firmware version | String   | 11     |                    | `DeviceIdent` | `44 65 76 69 63 65 49 64 65 6E 74` |     |

**Example: sRN DeviceIdent**

| Protocol | Example                                                                                                |     |
| -------- | ------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sRN{SPC}DeviceIdent<ETX>`                               |     |
| CoLa A   | `<STX>sRN DeviceIdent<ETX>`                                   |     |
| CoLa A   | `sRN DeviceIdent`                                                         |     |
| CoLa A   | `02 73 52 4E 20 44 65 76 69 63 65 49 64 65 6E 74 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 0F 73 52 4E 20 44 65 76 69 63 65 49 64 65 6E 74 25` |     |
| CoLa B   | `73 52 4E 20 44 65 76 69 63 65 49 64 65 6E 74`                            |     |

**Telegram structure: sRA DeviceIdent**

| Telegram part | Description                            | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                          |     |
| ------------- | -------------------------------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------- | --- |
| Command type  | Answer                                 | String   | 3      |                    | `sRA`           | `73 52 41`                         |     |
| Command       |                                        | String   | 11     |                    | `DeviceIdent`   | `44 65 76 69 63 65 49 64 65 6E 74` |     |
| Value         | Length of firmware designation         | Enum_16  | 2      |                    | `0 ... 22h`     | `0 ... 22h`                        |     |
| Value         | Firmware designation for device family | String   |        |                    | `(See example)` | `(See example)`                    |     |
| Value         | Length of firmware version             | Enum_16  | 2      |                    | `0 ... 22h`     | `0 ... 22h`                        |     |
| Value         | Firmware version                       | String   |        |                    | `(See example)` | `(See example)`                    |     |

### Read the Device State [sRN SCdevicestate]

This telegram reads the general device state.

**Telegram structure: sRN SCdevicestate**

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |     |
| ------------- | --------------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- | --- |
| Command type  | Read                  | String   | 3      |                    | `sRN`           | `73 52 4E`                               |     |
| Command       | Read the device state | String   | 13     |                    | `SCdevicestate` | `53 43 64 65 76 69 63 65 73 74 61 74 65` |     |

**Example: sRN SCdevicestate**

| Protocol | Example                                                                                                      |     |
| -------- | ------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sRN{SPC}SCdevicestate<ETX>`                                   |     |
| CoLa A   | `<STX>sRN SCdevicestate<ETX>`                                       |     |
| CoLa A   | `sRN SCdevicestate`                                                             |     |
| CoLa A   | `02 73 52 4E 20 53 43 64 65 76 69 63 65 73 74 61 74 65 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 11 73 52 4E 20 53 43 64 65 76 69 63 65 73 74 61 74 65 30` |     |
| CoLa B   | `73 52 4E 20 53 43 64 65 76 69 63 65 73 74 61 74 65`                            |     |

**Telegram structure: sRA SCdevicestate**

| Telegram part | Description           | Variable | Length | Additional details                    | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |     |
| ------------- | --------------------- | -------- | ------ | ------------------------------------- | -------------------------------------------- | --------------------------------------------------------------------- | --- |
| Command type  | Answer                | String   | 3      |                                       | `sRA`           | `73 52 41`                               |     |
| Command       | Read the device state | String   | 13     |                                       | `SCdevicestate` | `53 43 64 65 76 69 63 65 73 74 61 74 65` |     |
| Status code   | Code number           | Enum_8   | 1      | Busy / logged-in:<br>Ready:<br>Error: | `0<br>1<br>2`   | `00<br>01<br>02`                         |     |

**Example: sRA SCdevicestate**

| Protocol | Example                                                                                                            |     |
| -------- | ------------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sRA{SPC}SCdevicestate{SPC}1<ETX>`                                   |     |
| CoLa A   | `02 73 52 41 20 53 43 64 65 76 69 63 65 73 74 61 74 65 20 31 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 13 73 52 41 20 53 43 64 65 76 69 63 65 73 74 61 74 65 20 01 1E` |     |

### Read Serial Number [sRN SerialNumber]

Read the serial number of the device.

**Telegram structure: sRN SerialNumber**

| Telegram part | Description                      | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |     |
| ------------- | -------------------------------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ | --- |
| Command type  | Read                             | String   | 3      |                    | `sRN`          | `73 52 4E`                            |     |
| Command       | Read serial number of the device | String   | 12     |                    | `SerialNumber` | `53 65 72 69 61 6C 4E 75 6D 62 65 72` |     |

**Example: sRN SerialNumber**

| Protocol | Example                                                                                                   |     |
| -------- | --------------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sRN{SPC}SerialNumber<ETX>`                                 |     |
| CoLa A   | `<STX>sRN SerialNumber<ETX>`                                     |     |
| CoLa A   | `sRN SerialNumber`                                                           |     |
| CoLa A   | `02 73 52 4E 20 53 65 72 69 61 6C 4E 75 6D 62 65 72 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 10 73 52 4E 20 53 65 72 69 61 6C 4E 75 6D 62 65 72 4C` |     |
| CoLa B   | `73 52 4E 20 53 65 72 69 61 6C 4E 75 6D 62 65 72`                            |     |

**Telegram structure: sRA SerialNumber**

| Telegram part           | Description                                               | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                             |     |
| ----------------------- | --------------------------------------------------------- | -------- | ------ | ------------------ | -------------------------------------------- | ------------------------------------------------------------------ | --- |
| Command type            | Answer                                                    | String   | 3      |                    | `sRA`           | `73 52 41`                            |     |
| Command                 | Read serial number of the device                          | String   | 12     |                    | `SerialNumber`  | `53 65 72 69 61 6C 4E 75 6D 62 65 72` |     |
| Length of serial number | Number of characters of the serial number                 | Uint_16  | 2      |                    | `0 ... 8h`      | `00 00 ... 00 08h`                    |     |
| Serial number           | Production period (year, calendar week, number): YYWWxxxx | String   | 8      |                    | `(See example)` | `(See example)`                       |     |

**Example: sRA SerialNumber**

| Protocol | Example                                                                                                                                    |     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sRA{SPC}SerialNumber{SPC}8{SPC}23360024<ETX>`                                               |     |
| CoLa A   | `02 73 52 41 20 53 65 72 69 61 6C 4E 75 6D 62 65 72 20 38 20 32 33 33 36 30 30 32 34 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 1B 73 52 41 20 53 65 72 69 61 6C 4E 75 6D 62 65 72 20 00 08 32 33 33 36 30 30 32 34 69` |     |

### Read Device Type [sRN DItype]

This telegram asks for the device type of the product family.

**Telegram structure: sRN DItype**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |     |
| ------------- | ----------- | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ | --- |
| Command type  | Read        | String   | 3      |                    | `sRN`    | `73 52 4E`          |     |
| Command       | Ask state   | String   | 6      |                    | `DItype` | `44 49 74 79 70 65` |     |

**Example: sRN DItype**

| Protocol | Example                                                                                 |     |
| -------- | --------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sRN{SPC}DItype<ETX>`                     |     |
| CoLa A   | `<STX>sRN DItype<ETX>`                         |     |
| CoLa A   | `sRN DItype`                                               |     |
| CoLa A   | `02 73 52 4E 20 44 49 74 79 70 65 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 0A 73 52 4E 20 44 49 74 79 70 65 5A` |     |
| CoLa B   | `73 52 4E 20 44 49 74 79 70 65`                            |     |

**Telegram structure: sRA DItype**

| Telegram part      | Description                                        | Variable | Length | Additional details | Values CoLa A (ASCII)                               | Values CoLa B (Binary)                           |     |
| ------------------ | -------------------------------------------------- | -------- | ------ | ------------------ | --------------------------------------------------- | ------------------------------------------------ | --- |
| Command type       | Answer                                             | String   | 3      |                    | `sRA`                  | `73 52 41`          |     |
| Command            | Ask state                                          | String   | 6      |                    | `DItype`               | `44 49 74 79 70 65` |     |
| Length of type key | Number of digits of the following type code length | Uint_8   | 1      |                    | `0d … 255d (0h … FFh)` | `00 … FF`           |     |
| Device type        | Type code of the device                            | String   | (var.) |                    | `(Device type)`        | `(Device type)`     |     |

**sRA DItype Example for picoScan150:**

| Protocol | Example                                                                                                                           |     |
| -------- | --------------------------------------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sRA{SPC}DItype{SPC}B{SPC}picoScan150<ETX>`                                         |     |
| CoLa A   | `02 73 52 41 20 44 49 74 79 70 65 20 42 20 70 69 63 6F 53 63 61 6E 31 35 30 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 18 73 52 41 20 44 49 74 79 70 65 20 00 0B 70 69 63 6F 53 63 61 6E 31 35 30 60` |     |

### Read Operating Hours [sRN ODoprh]

Views the total number of operating hours during the lifetime of the device.

**Telegram structure: sRN ODoprh**

| Telegram part | Description          | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |     |
| ------------- | -------------------- | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ | --- |
| Command type  | Read                 | String   | 3      |                    | `sRN`    | `73 52 4E`          |     |
| Command       | Read operating hours | String   | 6      |                    | `ODoprh` | `4F 44 6F 70 72 68` |     |

**Example: sRN ODoprh**

| Protocol | Example                                                                                 |     |
| -------- | --------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sRN{SPC}ODoprh<ETX>`                     |     |
| CoLa A   | `<STX>sRN ODoprh<ETX>`                         |     |
| CoLa A   | `sRN ODoprh`                                               |     |
| CoLa A   | `02 73 52 4E 20 4F 44 6F 70 72 68 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 0A 73 52 4E 20 4F 44 6F 70 72 68 41` |     |
| CoLa B   | `73 52 4E 20 4F 44 6F 70 72 68`                            |     |

**Telegram structure: sRA ODoprh**

| Telegram part | Description               | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                  |     |
| ------------- | ------------------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------- | --- |
| Command type  | Answer                    | String   | 3      |                    | `sRA`            | `73 52 41`                 |     |
| Command       | Read operating hours      | String   | 6      |                    | `ODoprh`         | `4F 44 6F 70 72 68`        |     |
| Value         | Operating hours in 1/10 h | Uint_32  | 4      |                    | `0h … FFFFFFFFh` | `00 00 00 00 …FF FF FF FF` |     |

**Example: sRA ODoprh**

| Protocol | Example                                                                                                |     |
| -------- | ------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sRA{SPC}ODoprh{SPC}1B50B<ETX>`                          |     |
| CoLa A   | `02 73 52 41 20 4F 44 6F 70 72 68 20 31 42 35 30 42 03`                   |     |
| CoLa B   | `02 02 02 02 00 00 00 0F 73 52 41 20 4F 44 6F 70 72 68 20 00 01 B5 0B D1` |     |

Calculation of the value: 1B50B (hex) 111883 (dez) × 1/10 h = 11188.3 h

### Read Power on Counter [sRN ODpwrc]

Shows the number of power on cycles.

**Telegram structure: sRN ODpwrc**

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |     |
| ------------- | --------------------- | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ | --- |
| Command type  | Read                  | String   | 3      |                    | `sRN`    | `73 52 4E`          |     |
| Command       | Read power on counter | String   | 6      |                    | `ODpwrc` | `4F 44 70 77 72 63` |     |

**Example: sRN ODpwrc**

| Protocol | Example                                                                                 |     |
| -------- | --------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sRN{SPC}ODpwrc<ETX>`                     |     |
| CoLa A   | `<STX>sRN ODpwrc<ETX>`                         |     |
| CoLa A   | `sRN ODpwrc`                                               |     |
| CoLa A   | `02 73 52 4E 20 4F 44 70 77 72 63 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 0A 73 52 4E 20 4F 44 70 77 72 63 52` |     |
| CoLa B   | `73 52 4E 20 4F 44 70 77 72 63`                            |     |

**Telegram structure: sRA ODpwrc**

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                  |     |
| ------------- | --------------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------- | --- |
| Command type  | Answer                | String   | 3      |                    | `sRA`            | `73 52 41`                 |     |
| Command       | Read power on counter | String   | 6      |                    | `ODpwrc`         | `4F 44 70 77 72 63`        |     |
| Value         | Power on counter      | Uint_32  | 4      |                    | `0h … FFFFFFFFh` | `00 00 00 00 …FF FF FF FF` |     |

**Example: sRA ODpwrc**

| Protocol | Example                                                                                                |     |
| -------- | ------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sRA{SPC}ODpwrc{SPC}9A<ETX>`                             |     |
| CoLa A   | `02 73 52 41 20 4F 44 70 77 72 63 20 39 41 03`                            |     |
| CoLa B   | `02 02 02 02 00 00 00 0F 73 52 41 20 4F 44 70 77 72 63 20 00 00 00 9A E7` |     |

### Set Device Name [sWN LocationName]

Give the device a specific description name such as its location.

**Telegram structure: sWN LocationName**

| Telegram part | Description                                       | Variable | Length | Additional details | Values CoLa A (ASCII)                                | Values CoLa B (Binary)                                             |     |
| ------------- | ------------------------------------------------- | -------- | ------ | ------------------ | ---------------------------------------------------- | ------------------------------------------------------------------ | --- |
| Command type  | Write                                             | String   | 3      |                    | `sWN`                   | `73 57 4E`                            |     |
| Command       | Set device name                                   | String   | 12     |                    | `LocationName`          | `4C 6F 63 61 74 69 6F 6E 4E 61 6D 65` |     |
| Value         | Number of characters of the following device name | Uint_16  | 2      |                    | `0d … +16d (0h … 10h )` | `00 00 … 00 10`                       |     |
| Value         | Device name                                       | String   | 32     |                    | `[Device name]`         | `[Device name]`                       |     |

**Telegram structure: sWA LocationName**

| Telegram part | Description     | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |     |
| ------------- | --------------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ | --- |
| Command type  | Answer          | String   | 3      |                    | `sWA`          | `73 57 41`                            |     |
| Command       | Set device name | String   | 12     |                    | `LocationName` | `4C 6F 63 61 74 69 6F 6E 4E 61 6D 65` |     |

**Example: sWA LocationName**

| Protocol | Example                                                                                                      |     |
| -------- | ------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sWA{SPC}LocationName<ETX>`                                    |     |
| CoLa A   | `02 73 57 41 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 03`                         |     |
| CoLa B   | `02 02 02 02 00 00 00 11 73 57 41 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 20 7F` |     |

### Read Device Name [sRN LocationName]

Read the given name of the device (Default is the serial number of the device).

**Telegram structure: sRN LocationName**

| Telegram part | Description      | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |     |
| ------------- | ---------------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ | --- |
| Command type  | Read             | String   | 3      |                    | `sRN`          | `73 52 4E`                            |     |
| Command       | Read device name | String   | 12     |                    | `LocationName` | `4C 6F 63 61 74 69 6F 6E 4E 61 6D 65` |     |

**Example: sRN LocationName**

| Protocol | Example                                                                                                   |     |
| -------- | --------------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sRN{SPC}LocationName<ETX>`                                 |     |
| CoLa A   | `<STX>sRN LocationName<ETX>`                                     |     |
| CoLa A   | `sRN LocationName`                                                           |     |
| CoLa A   | `02 73 52 4E 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 10 73 52 4E 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 55` |     |
| CoLa B   | `73 52 4E 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65`                            |     |

**Telegram structure: sRA LocationName**

The response contains the same length-prefixed device-name value described for `sWN LocationName` above.

### Read for Motor Synchronization [sRN MotorSyncStatus]

Read for Motor synchronization.

**Access:** Authorized client user level is required.

**Request: `sRN MotorSyncStatus`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Read | String | 3 | CoLa A: sRN |
| Read motor synchronization status | String | 15 | CoLa A: MotorSyncStatus |

**Response: `sRA MotorSyncStatus`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sRA |
| Read motor synchronization status | String | 15 | CoLa A: MotorSyncStatus |
| Synchronization status | Enum_8 | 1 | Not synchronized:: 0<br>Only Time synchronized:: 1<br>Synchronized:: 2 |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sRN MotorSyncStatus<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 13 73 52 4E 20 4D 6F 74 6F 72 53 79 6E 63 53 74 61 74 75 73 17` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sRA MotorSyncStatus 0<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 15 73 52 41 20 4D 6F 74 6F 72 53 79 6E 63 53 74 61 74 75 73 20 00 38` |

## Interfaces

### Set IP Address [sWN EIIpAddr]

Save permanently to set values. Changes will be active after rebooting the device. Settings must correspond with network in which scanner is used. Else device cannot be found any more.

**Telegram structure: sWN EIIpAddr**

| Telegram part | Description    | Variable | Length | Additional details        | Values CoLa A (ASCII)                               | Values CoLa B (Binary)                                 |     |
| ------------- | -------------- | -------- | ------ | ------------------------- | --------------------------------------------------- | ------------------------------------------------------ | --- |
| Command type  | Write          | String   | 3      |                           | `sWN`                  | `73 57 4E`                |     |
| Command       | Set IP address | String   | 8      |                           | `EIIpAddr`             | `45 49 49 50 41 64 64 72` |     |
| IP address    | Set values     | Uint_8   | 1      | First part of IP address  | `0 …+255d (00 ... FF)` | `00 … FF`                 |     |
| IP address    | Set values     | Uint_8   | 1      | Second part of IP address | `0 …+255d (00 ... FF)` | `00 … FF`                 |     |
| IP address    | Set values     | Uint_8   | 1      | Third part of IP address  | `0 …+255d (00 ... FF)` | `00 … FF`                 |     |
| IP address    | Set values     | Uint_8   | 1      | Fourth part of IP address | `0 …+255d (00 ... FF)` | `00 … FF`                 |     |

**Example: sWN EIIpAddr 192.168.0.2**

| Protocol | Example                                                                                                      |     |
| -------- | ------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sWN{SPC}EIIpAddr{SPC}C0{SPC}A8{SPC}0{SPC}2<ETX>`              |     |
| CoLa A   | `<STX>sWN EIIpAddr C0 A8 0 2<ETX>`                                  |     |
| CoLa A   | `sWN EIIpAddr C0 A8 0 2`                                                        |     |
| CoLa A   | `02 73 57 4E 20 45 49 49 70 41 64 64 72 20 43 30 20 41 38 20 30 20 32 03`       |     |
| CoLa B   | `02 02 02 02 00 00 00 11 73 57 4E 20 45 49 49 70 41 64 64 72 20 C0 A8 00 02 06` |     |
| CoLa B   | `73 57 4E 20 45 49 49 70 41 64 64 72 20 C0 A8 00 02`                            |     |

**Telegram structure: sWA EIIpAddr**

| Telegram part | Description    | Variable | Length | Additional details | Values CoLa A (ASCII)                   | Values CoLa B (Binary)                                 |     |
| ------------- | -------------- | -------- | ------ | ------------------ | --------------------------------------- | ------------------------------------------------------ | --- |
| Command type  | Answer         | String   | 3      |                    | `sWA`      | `73 57 41`                |     |
| Command       | Set IP address | String   | 8      |                    | `EIIpAddr` | `45 49 49 50 41 64 64 72` |     |

**Example: sWA EIIpAddr**

| Protocol | Example                                                                                          |     |
| -------- | ------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sWA{SPC}EIIpAddr<ETX>`                            |     |
| CoLa A   | `02 73 57 41 20 45 49 49 70 41 64 64 72 03`                         |     |
| CoLa B   | `02 02 02 02 00 00 00 0D 73 57 41 20 45 49 49 70 41 64 64 72 20 63` |     |

### Read IP Address [sRN EIIpAddr]

Read the IP address of the device.

**Telegram structure: sRN EIIpAddr**

| Telegram part | Description     | Variable | Length | Additional details | Values CoLa A (ASCII)                   | Values CoLa B (Binary)                                 |     |
| ------------- | --------------- | -------- | ------ | ------------------ | --------------------------------------- | ------------------------------------------------------ | --- |
| Command type  | Read            | String   | 3      |                    | `sRN`      | `73 52 4E`                |     |
| Command       | Read IP address | String   | 8      |                    | `EIIpAddr` | `45 49 49 50 41 64 64 72` |     |

**Example: sRN EIIpAddr**

| Protocol | Example                                                                                       |     |
| -------- | --------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sRN{SPC}EIIpAddr<ETX>`                         |     |
| CoLa A   | `<STX>sRN EIIpAddr<ETX>`                             |     |
| CoLa A   | `sRN EIIpAddr`                                                   |     |
| CoLa A   | `02 73 52 4E 20 45 49 49 70 41 64 64 72 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 0C 73 52 4E 20 45 49 49 70 41 64 64 72 49` |     |
| CoLa B   | `73 52 4E 20 45 49 49 70 41 64 64 72`                            |     |

**Telegram structure: sRA EIIpAddr**

| Telegram part | Description          | Variable | Length | Additional details        | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                 |     |
| ------------- | -------------------- | -------- | ------ | ------------------------- | ------------------------------------------------- | ------------------------------------------------------ | --- |
| Command type  | Answer               | String   | 3      |                           | `sRA`                | `73 52 41`                |     |
| Command       | Read IP address      | String   | 8      |                           | `EIIpAddr`           | `45 49 49 50 41 64 64 72` |     |
| IP address    | Default: 192.168.0.1 | Uint_8   | 1      | First part of IP address  | `0 …+255d (00 … FF)` | `00 … FF`                 |     |
| IP address    | Default: 192.168.0.1 | Uint_8   | 1      | Second part of IP address | `0 …+255d (00 … FF)` | `00 … FF`                 |     |
| IP address    | Default: 192.168.0.1 | Uint_8   | 1      | Third part of IP address  | `0 …+255d (00 … FF)` | `00 … FF`                 |     |
| IP address    | Default: 192.168.0.1 | Uint_8   | 1      | Fourth part of IP address | `0 …+255d (00 … FF)` | `00 … FF`                 |     |

### Set Ethernet Gateway [sWN EIgate]

Change Ethernet gateway IP address (TCP/IP)

Save permanently to set values. Changes will be active after rebooting the device. Settings must correspond with network in which scanner is used. Else device cannot be found any more.

**Telegram structure: sWN EIgate**

| Telegram part   | Description         | Variable | Length | Additional details             | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                           |     |
| --------------- | ------------------- | -------- | ------ | ------------------------------ | ----------------------------------------------- | ------------------------------------------------ | --- |
| Command type    | Write               | String   | 3      |                                | `sWN`              | `73 57 4E`          |     |
| Command         | Set gateway address | String   | 6      |                                | `EIgate`           | `45 49 67 61 74 65` |     |
| Gateway address | Set values          | Uint_8   | 1      | First part of gateway address  | `0 …+255d (00…FF)` | `00 …FF`            |     |
| Gateway address | Set values          | Uint_8   | 1      | Second part of gateway address | `0 …+255d (00…FF)` | `00 …FF`            |     |
| Gateway address | Set values          | Uint_8   | 1      | Third part of gateway address  | `0 …+255d (00…FF)` | `00 …FF`            |     |
| Gateway address | Set values          | Uint_8   | 1      | Fourth part of gateway address | `0 …+255d (00…FF)` | `00 …FF`            |     |

**Example: sWN EIgate 192.168.0.1**

| Protocol | Example                                                                                                |     |
| -------- | ------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sWN{SPC}EIgate{SPC}C0{SPC}A8{SPC}00{SPC}01<ETX>`        |     |
| CoLa A   | `<STX>sWN EIgate C0 A8 00 01<ETX>`                            |     |
| CoLa A   | `sWN EIgate C0 A8 00 01`                                                  |     |
| CoLa A   | `02 73 57 4E 20 45 49 67 61 74 65 20 43 30 20 41 38 20 30 30 20 30 31 03` |     |
| CoLa B   | `02 02 02 02 00 00 00 0F 73 57 4E 20 45 49 67 61 74 65 20 C0 A8 00 01 18` |     |
| CoLa B   | `73 57 4E 20 45 49 67 61 74 65 20 C0 A8 00 01`                            |     |

**Telegram structure: sWA EIgate**

| Telegram part | Description         | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |     |
| ------------- | ------------------- | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ | --- |
| Command type  | Answer              | String   | 3      |                    | `sWA`    | `73 57 41`          |     |
| Command       | Set gateway address | String   | 6      |                    | `EIgate` | `45 49 67 61 74 65` |     |

**Example: sWA EIgate**

| Protocol | Example                                                                                    |     |
| -------- | ------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sWA{SPC}EIgate<ETX>`                        |     |
| CoLa A   | `02 73 57 41 20 45 49 67 61 74 65 03`                         |     |
| CoLa B   | `02 02 02 02 00 00 00 0B 73 57 41 20 45 49 67 61 74 65 20 7E` |     |

### Read Ethernet Gateway [sRN EIgate]

Read for the Ethernet gateway (TCP/IP)

**Telegram structure: sRN EIgate**

| Telegram part | Description          | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |     |
| ------------- | -------------------- | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ | --- |
| Command type  | Read                 | String   | 3      |                    | `sRN`    | `73 52 4E`          |     |
| Command       | Read gateway address | String   | 6      |                    | `EIgate` | `45 49 67 61 74 65` |     |

**Example: sRN EIgate**

| Protocol | Example                                                                                 |     |
| -------- | --------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sRN{SPC}EIgate<ETX>`                     |     |
| CoLa A   | `<STX>sRN EIgate<ETX>`                         |     |
| CoLa A   | `sRN EIgate`                                               |     |
| CoLa A   | `02 73 52 4E 20 45 49 67 61 74 65 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 0A 73 52 4E 20 45 49 67 61 74 65 54` |     |
| CoLa B   | `73 52 4E 20 45 49 67 61 74 65`                            |     |

**Telegram structure: sRA EIgate**

| Telegram part   | Description          | Variable | Length | Additional details             | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                           |     |
| --------------- | -------------------- | -------- | ------ | ------------------------------ | ----------------------------------------------- | ------------------------------------------------ | --- |
| Command type    | Answer               | String   | 3      |                                | `sRA`              | `73 52 41`          |     |
| Command         | Read gateway address | String   | 6      |                                | `EIgate`           | `45 49 67 61 74 65` |     |
| Gateway address | Default: 0.0.0.0     | Uint_8   | 1      | First part of gateway address  | `0 …+255d (00…FF)` | `00 … FF`           |     |
| Gateway address | Default: 0.0.0.0     | Uint_8   | 1      | Second part of gateway address | `0 …+255d (00…FF)` | `00 … FF`           |     |
| Gateway address | Default: 0.0.0.0     | Uint_8   | 1      | Third part of gateway address  | `0 …+255d (00…FF)` | `00 … FF`           |     |
| Gateway address | Default: 0.0.0.0     | Uint_8   | 1      | Fourth part of gateway address | `0 …+255d (00…FF)` | `00 … FF`           |     |

### Set IP Mask [sWN EImask]

Define the subnet mask of the device.

Save permanently to set values. Changes will be active after rebooting the device. Settings must correspond with network in which scanner is used. Else device cannot be found any more.

**Telegram structure: sWN EImask**

| Telegram part | Description | Variable | Length | Additional details     | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                           |     |
| ------------- | ----------- | -------- | ------ | ---------------------- | ----------------------------------------------- | ------------------------------------------------ | --- |
| Command type  | Write       | String   | 3      |                        | `sWN`              | `73 57 4E`          |     |
| Command       | Set IP mask | String   | 6      |                        | `EImask`           | `45 49 6D 61 73 6B` |     |
| IP mask       | Set values  | Uint_8   | 1      | First part of IP mask  | `0 …+255d (00…FF)` | `00 …FF`            |     |
| IP mask       | Set values  | Uint_8   | 1      | Second part of IP mask | `0 …+255d (00…FF)` | `00 …FF`            |     |
| IP mask       | Set values  | Uint_8   | 1      | Third part of IP mask  | `0 …+255d (00…FF)` | `00 …FF`            |     |
| IP mask       | Set values  | Uint_8   | 1      | Fourth part of IP mask | `0 …+255d (00…FF)` | `00 …FF`            |     |

**Example: sWN EImask 255.255.254.0**

| Protocol | Example                                                                                                |     |
| -------- | ------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sWN{SPC}EImask{SPC}FF{SPC}FF{SPC}FE{SPC}00<ETX>`        |     |
| CoLa A   | `<STX>sWN EImask FF FF FE 00<ETX>`                            |     |
| CoLa A   | `sWN EImask FF FF FE 00`                                                  |     |
| CoLa A   | `02 73 57 4E 20 45 49 6D 61 73 6B 20 46 46 20 46 46 20 46 45 20 30 30 03` |     |
| CoLa B   | `02 02 02 02 00 00 00 0F 73 57 4E 20 45 49 6D 61 73 6B 20 FF FF FE 00 8C` |     |
| CoLa B   | `73 57 4E 20 45 49 6D 61 73 6B 20 FF FF FE 00`                            |     |

**Telegram structure: sWA EImask**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |     |
| ------------- | ----------- | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ | --- |
| Command type  | Answer      | String   | 3      |                    | `sWA`    | `73 57 41`          |     |
| Command       | Set IP mask | String   | 6      |                    | `EImask` | `45 49 6D 61 73 6B` |     |

**Example: sWA EImask**

| Protocol | Example                                                                                    |     |
| -------- | ------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sWA{SPC}EImask<ETX>`                        |     |
| CoLa A   | `02 73 57 41 20 45 49 6D 61 73 6B 03`                         |     |
| CoLa B   | `02 02 02 02 00 00 00 0B 73 57 41 20 45 49 6D 61 73 6B 20 7D` |     |

### Read IP Mask [sRN EImask]

Read the subnet mask of the device.

**Telegram structure: sRN EImask**

| Telegram part | Description  | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |     |
| ------------- | ------------ | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ | --- |
| Command type  | Read         | String   | 3      |                    | `sRN`    | `73 52 4E`          |     |
| Command       | Read IP mask | String   | 6      |                    | `EImask` | `45 49 6D 61 73 6B` |     |

**Example: sRN EImask**

| Protocol | Example                                                                                 |     |
| -------- | --------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sRN{SPC}EImask<ETX>`                     |     |
| CoLa A   | `<STX>sRN EImask<ETX>`                         |     |
| CoLa A   | `sRN EImask`                                               |     |
| CoLa A   | `02 73 52 4E 20 45 49 6D 61 73 6B 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 0A 73 52 4E 20 45 49 6D 61 73 6B 57` |     |
| CoLa B   | `73 52 4E 20 45 49 6D 61 73 6B`                            |     |

**Telegram structure: sRA EImask**

| Telegram part | Description            | Variable | Length | Sensor                 | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                           |     |
| ------------- | ---------------------- | -------- | ------ | ---------------------- | ----------------------------------------------- | ------------------------------------------------ | --- |
| Command type  | Answer                 | String   | 3      |                        | `sRA`              | `73 52 41`          |     |
| Command       | Read IP mask           | String   | 6      |                        | `EImask`           | `45 49 6D 61 73 6B` |     |
| IP mask       | Default: 255.255.255.0 | Uint_8   | 1      | First part of IP mask  | `0 …+255d (00…FF)` | `00 … FF`           |     |
| IP mask       | Default: 255.255.255.0 | Uint_8   | 1      | Second part of IP mask | `0 …+255d (00…FF)` | `00 … FF`           |     |
| IP mask       | Default: 255.255.255.0 | Uint_8   | 1      | Third part of IP mask  | `0 …+255d (00…FF)` | `00 … FF`           |     |
| IP mask       | Default: 255.255.255.0 | Uint_8   | 1      | Fourth part of IP mask | `0 …+255d (00…FF)` | `00 … FF`           |     |

### Enable/ Disable CoLa Scan [sWN EnableColaScan]

Enable/ disable CoLa Scan.

**Access:** Authorized client user level is required.

**Request: `sWN EnableColaScan`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Write | String | 3 | CoLa A: sWN |
| Set CoLa Scan / AutoIP | String | 14 | CoLa A: EnableColaScan |
| Enable/ disable | Bool_1 | 1 | Disable:: 0<br>Enable:: 1 |

**Response: `sWA EnableColaScan`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sWA |
| Set CoLa Scan / AutoIP | String | 14 | CoLa A: EnableColaScan |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWN EnableColaScan 1<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 14 73 57 4E 20 45 6E 61 62 6C 65 43 6F 6C 61 53 63 61 6E 20 01 54` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWA EnableColaScan<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 12 73 57 41 20 45 6E 61 62 6C 65 43 6F 6C 61 53 63 61 6E 7A` |

### Set Webserver State [sMN SetWebserverEnabled]

This command enables/ disables the Webserver. Port 80 will not be opened after a reboot.

**Telegram structure: sMN SetWebserverEnabled**

| Telegram part | Description         | Variable | Length | Additional details  | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |     |
| ------------- | ------------------- | -------- | ------ | ------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type  | Method              | String   | 3      |                     | `sMN`                 | `73 4D 4E`                                                 |     |
| Command       | Set Webserver state | String   | 19     |                     | `SetWebserverEnabled` | `53 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64` |     |
| State         | Enable/ disable     | Bool_1   | 1      | Disable:<br>Enable: | `0<br>1`              | `00<br>01`                                                 |     |

**Telegram structure: sAN SetWebserverEnabled**

| Telegram part | Description         | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |     |
| ------------- | ------------------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type  | Answer              | String   | 3      |                    | `sAN`                 | `73 41 4E`                                                 |     |
| Command       | Set Webserver state | String   | 19     |                    | `SetWebserverEnabled` | `53 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64` |     |

### Read Webserver State [sMN GetWebserverEnabled]

Returns state if Webserver is enabled.

**Telegram structure: sMN GetWebserverEnabled**

| Telegram part | Description     | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |     |
| ------------- | --------------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type  | Method          | String   | 3      |                    | `sMN`                 | `73 4D 4E`                                                 |     |
| Command       | Webserver state | String   | 19     |                    | `GetWebserverEnabled` | `47 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64` |     |

**Example: sMN GetWebserverEnabled**

| Protocol | Example                                                                                                                        |     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sMN{SPC}GetWebserverEnabled<ETX>`                                               |     |
| CoLa A   | `<STX>sMN GetWebserverEnabled<ETX>`                                                   |     |
| CoLa A   | `sMN GetWebserverEnabled`                                                                         |     |
| CoLa A   | `02 73 4D 4E 20 47 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 17 73 4D 4E 20 47 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64 16` |     |
| CoLa B   | `73 4D 4E 20 47 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64`                            |     |

**Telegram structure: sAN GetWebserverEnabled**

| Telegram part | Description             | Variable | Length | Additional details    | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |     |
| ------------- | ----------------------- | -------- | ------ | --------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type  | Answer                  | String   | 3      |                       | `sAN`                 | `73 41 4E`                                                 |     |
| Command       | Webserver state         | String   | 19     |                       | `GetWebserverEnabled` | `47 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64` |     |
| State         | Status of the webserver | Bool_1   | 1      | Disabled:<br>Enabled: | `0<br>1`              | `00<br>01`                                                 |     |

**Example: sAN GetWebserverEnabled**

| Protocol | Example                                                                                                                              |     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sAN{SPC}GetWebserverEnabled{SPC}1<ETX>`                                               |     |
| CoLa A   | `02 73 41 4E 20 47 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64 20 31 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 19 73 41 4E 20 47 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64 20 01 3B` |     |

### Change CoLa TCP Timeout [sWN EtherColaTransmitTimeout]

Change CoLa TCP Timeout.

**Access:** Authorized client user level is required.

**Request: `sWN EtherColaTransmitTimeout`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Write | String | 3 | CoLa A: sWN |
| Adjust CoLa TCP Acknowledge timeout time | String | 24 | CoLa A: EtherColaTransmitTimeout |
| New timeout time in ms | Uint_16 | 2 | Default: 15000<br>CoLa A: +250d ... +15000d |

**Response: `sWA EtherColaTransmitTimeout`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sWA |
| Adjust CoLa TCP Acknowledge timeout time | String | 24 | CoLa A: EtherColaTransmitTimeout |

The timeout change takes effect after the sensor is restarted.

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWN EtherColaTransmitTimeout +250<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 1F 73 57 4E 20 45 74 68 65 72 43 6F 6C 61 54 72 61 6E 73 6D 69 74 54 69 6D 65 6F 75 74 20 00 FA 8E` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sWA EtherColaTransmitTimeout<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 1C 73 57 41 20 45 74 68 65 72 43 6F 6C 61 54 72 61 6E 73 6D 69 74 54 69 6D 65 6F 75 74 5B` |

## Field Application

### Set Activation of Evaluation Group [sMN ActivateEvaluationGroup]

The telegram is intended to activate or deactivate groups via telegram. The group activation needs to be changed from always to telegram in advance.

**Telegram structure: sMN ActivateEvaluationGroup**

| Telegram part                                       | Description                               | Variable | Length | Additional details                                                                                              | Values CoLa A (ASCII)                                  | Values CoLa B (Binary)                                                                              |     |
| --------------------------------------------------- | ----------------------------------------- | -------- | ------ | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------- | --- |
| Command type                                        | Method                                    | String   | 3      |                                                                                                                 | `sMN`                     | `73 4D 4E`                                                             |     |
| Command                                             | Activate / deactivate evaluation group    | String   | 23     |                                                                                                                 | `ActivateEvaluationGroup` | `41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70` |     |
| Amount of evaluation groups to activate/ deactivate | Array                                     | Uint_16  | 2      | Each array element contains two parameters:Evaluation group numberDeactivation / activation of evaluation group | `1d ... 48d (1 ... 30h)`  | `00 01 … 00 30`                                                        |     |
| Evaluation group number                             | Evaluation group 1                        | UInt_16  | 2      |                                                                                                                 | `1`                       | `00 01`                                                                |     |
| Deactivation / activation of evaluation group       | Activate / deactivate evaluation group 1  | Bool_1   | 1      | Deactivate:<br>Activate:                                                                                        | `0<br>1`                  | `00<br>01`                                                             |     |
| Evaluation group number                             | Evaluation group 2                        | UInt_16  | 2      |                                                                                                                 | `2`                       | `00 02`                                                                |     |
| Activate/ deactivate evaluation group               | Activate / deactivate evaluation group 2  | Bool_1   | 1      | Deactivate:<br>Activate:                                                                                        | `0<br>1`                  | `00<br>01`                                                             |     |
| ..                                                  |                                           |          |        |                                                                                                                 |                                                        |                                                                                                     |     |
| Evaluation group number                             | Evaluation group 48                       | UInt_16  | 2      |                                                                                                                 | `48d (30h)`               | `00 30`                                                                |     |
| Activate/ deactivate evaluation group               | Activate / deactivate evaluation group 48 | Bool_1   | 1      | Deactivate:<br>Activate:                                                                                        | `0<br>1`                  | `00<br>01`                                                             |     |

**Example1: sMN ActivateEvaluationGroup – Deactivate evaluation group 1**

| Protocol | Example                                                                                                                                                      |     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sMN{SPC}ActivateEvaluationGroup{SPC}1{SPC}1{SPC}0<ETX>`                                                       |     |
| CoLa A   | `<STX>sMN ActivateEvaluationGroup 1 1 0<ETX>`                                                                       |     |
| CoLa A   | `sMN ActivateEvaluationGroup 1 1 0`                                                                                             |     |
| CoLa A   | `02 73 4D 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 31 20 31 20 30 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 21 73 4D 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 00 01 00 01 00 20` |     |
| CoLa B   | `73 4D 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 00 01 00 01 00`                            |     |

**Telegram structure: sAN ActivateEvaluation**

| Telegram part                                     | Description                            | Variable | Length | Additional details                                                     | Values CoLa A (ASCII)                                  | Values CoLa B (Binary)                                                                              |     |
| ------------------------------------------------- | -------------------------------------- | -------- | ------ | ---------------------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------- | --- |
| Command type                                      | Answer                                 | String   | 3      |                                                                        | `sAN`                     | `73 52 41`                                                             |     |
| Command                                           | Activate / deactivate evaluation group | String   | 23     |                                                                        | `ActivateEvaluationGroup` | `41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70` |     |
| Amount of activated/deactivated evaluation groups | -                                      | UInt_16  | 2      |                                                                        | `1h... 30h`               | `00 01 … 00 30`                                                        |     |
| State of activation / deactivation                | -                                      | Bool_1   | 1      | Activation/Deactivation failed:<br>Successfully activated/deactivated: | `0<br>1`                  | `00<br>01`                                                             |     |

### Set Field Evaluation Contour [sMN SetFieldEvaluationContour]

This telegram can be used to change or reshape the contour/ polygon of an already defined field. It´s possible to add additional points.

**Telegram structure: sMN SetFieldEvaluationContour**

| Telegram part              | Description                                                  | Variable | Length    | Additional details                                      | Values CoLa A (ASCII)                                                       | Values CoLa B (Binary)                                                                                    |     |
| -------------------------- | ------------------------------------------------------------ | -------- | --------- | ------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --- |
| Command type               | Method                                                       | String   | 3         |                                                         | `sMN`                                          | `73 4D 4E`                                                                   |     |
| Command                    | Set the region of interest of an object detection evaluation | String   | 25        |                                                         | `SetFieldEvaluationContour`                    | `53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |     |
| Evaluation ID              | Specific ID of the evaluation that is to be changed          | UInt_16  | 2         |                                                         | `+1d ... +48d (1h ... 30h)`                    | `00 01 … 00 30`                                                              |     |
| Amount of polygon vertices | E. g. triangle = 3, square = 4                               | Array    | 3 ... 100 |                                                         | `+3d ... +800d (3h ... 320h)`                  | `00 03... 03 20`                                                             |     |
| Polygon vertex             | Coordinates of first polygon vertex in mm                    | Dint_32  | 4         | X coordinate:                                           | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0`                                                  |     |
| Polygon vertex             | Coordinates of first polygon vertex in mm                    | Dint_32  | 4         | Y coordinate:                                           | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0`                                                  |     |
| Polygon vertex             | Coordinates of second polygon vertex in mm                   | Dint_32  | 4         | X coordinate:                                           | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0`                                                  |     |
| Polygon vertex             | Coordinates of second polygon vertex in mm                   | Dint_32  | 4         | Y coordinate:                                           | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0`                                                  |     |
| ..                         |                                                              |          |           |                                                         |                                                                             |                                                                                                           |     |
| Polygon vertex             | Coordinates of last polygon vertex in mm                     | Dint_32  | 4         | X coordinate:                                           | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0`                                                  |     |
| Polygon vertex             | Coordinates of last polygon vertex in mm                     | Dint_32  | 4         | Y coordinate:                                           | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0`                                                  |     |
| Lower Z limit              | Lower bound of extrusion in Z direction                      | Dint_32  | 4         | Must be:<br>(Other values than 0 will lead to an error) | `0`                                            | `00 00 00 00`                                                                |     |
| Upper Z limit              | Upper bound of extrusion in Z direction                      | Dint_32  | 4         | Must be:<br>(Other values than 0 will lead to an error) | `0`                                            | `00 00 00 00`                                                                |     |

**Example: sMN SetFieldEvaluationContour**

| Protocol | Example                                                                                                                                                                                                                                                                                 |     |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sMN{SPC}SetFieldEvaluationContour{SPC}1{SPC}4{SPC}+2000{SPC}+1000{SPC}+0{SPC}+1000{SPC}+0{SPC}+0{SPC}+2000{SPC}+0{SPC}+0{SPC}+0<ETX>`                                                                                                    |     |
| CoLa A   | `<STX>sMN SetFieldEvaluationContour 1 4 +2000 +1000 +0 +1000 +0 +0 +2000 +0 +0 +0<ETX>`                                                                                                                                                        |     |
| CoLa A   | `sMN SetFieldEvaluationContour 1 4 +2000 +1000 +0 +1000 +0 +0 +2000 +0 +0 +0`                                                                                                                                                                              |     |
| CoLa A   | `02 73 4D 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 31 20 34 20 2B 32 30 30 30 20 2B 31 30 30 30 20 2B 30 20 2B 31 30 30 30 20 2B 30 20 2B 30 20 2B 32 30 30 30 20 2B 30 20 2B 30 20 2B 30 03`                   |     |
| CoLa B   | `02 02 02 02 00 00 00 4A 73 4D 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 00 04 00 00 07 D0 00 00 03 E8 00 00 00 00 00 00 03 E8 00 00 00 00 00 00 00 00 00 00 07 D0 00 00 00 00 00 00 00 00 00 00 00 00 1D` |     |
| CoLa B   | `73 4D 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 00 04 00 00 07 D0 00 00 03 E8 00 00 00 00 00 00 03 E8 00 00 00 00 00 00 00 00 00 00 07 D0 00 00 00 00 00 00 00 00 00 00 00 00`                            |     |

**Telegram structure: sAN SetFieldEvaluationContour**

| Telegram part                  | Description                                                  | Variable | Length | Additional details                                                                    | Values CoLa A (ASCII)                                    | Values CoLa B (Binary)                                                                                    |     |
| ------------------------------ | ------------------------------------------------------------ | -------- | ------ | ------------------------------------------------------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --- |
| Command type                   | Answer                                                       | String   | 3      |                                                                                       | `sAN`                       | `73 52 41`                                                                   |     |
| Command                        | Set the region of interest of an object detection evaluation | String   | 25     |                                                                                       | `SetFieldEvaluationContour` | `53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |     |
| State of evaluation conversion | -                                                            | Enum_8   | 1      | Conversion successful:<br>Invalid Evaluation:<br>Invalid Polygon:<br>Invalid Z limit: | `0<br>1<br>2<br>3`          | `00<br>01<br>02<br>03`                                                       |     |

**Example: sAN SetFieldEvaluationContour – Evaluation conversion successful**

| Protocol | Example                                                                                                                                                |     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sAN{SPC}SetFieldEvaluationContour{SPC}0<ETX>`                                                           |     |
| CoLa A   | `02 73 41 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 30 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 1F 73 41 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 14` |     |

### Get Field Evaluation Contour [sMN GetFieldEvaluationContour]

This telegram can be used to read the contour/ polygon of an already defined field.

**Telegram structure: sMN GetFieldEvaluationContour**

| Telegram part | Description                                                  | Variable | Length | Additional details | Values CoLa A (ASCII)                                    | Values CoLa B (Binary)                                                                                    |     |
| ------------- | ------------------------------------------------------------ | -------- | ------ | ------------------ | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --- |
| Command type  | Method                                                       | String   | 3      |                    | `sMN`                       | `73 4D 4E`                                                                   |     |
| Command       | Get the region of interest of an object detection evaluation | String   | 25     |                    | `GetFieldEvaluationContour` | `47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |     |
| Evaluation ID | Specific ID of the evaluation that is to be changed          | UInt_16  | 2      |                    | `+1d ... +48d (1h ... 30h)` | `00 01 … 00 30`                                                              |     |

**Example request: sMN GetFieldEvaluationContour (evaluation ID 1)**

- CoLa A: `<STX>sMN GetFieldEvaluationContour 1<ETX>`
- CoLa A hex: `02 73 4D 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 31 03`
- CoLa B: `02 02 02 02 00 00 00 20 73 4D 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 0D`

**Telegram structure: sAN GetFieldEvaluationContour**

| Telegram part              | Description                                                  | Variable | Length    | Additional details | Values CoLa A (ASCII)                                    | Values CoLa B (Binary)                                                                                    |     |
| -------------------------- | ------------------------------------------------------------ | -------- | --------- | ------------------ | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --- |
| Command type               | Answer                                                       | String   | 3         |                    | `sAN`                       | `73 52 41`                                                                   |     |
| Command                    | Get the region of interest of an object detection evaluation | String   | 25        |                    | `GetFieldEvaluationContour` | `47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |     |
| Length of array            |                                                              | Uint_8   | 1         | Always:            | `1`                         | `00 01`                                                                      |     |
| Evaluation ID              | Specific ID of the evaluation that is to be changed          | UInt_16  | 2         |                    | `1h ... 30h`                | `00 01 … 00 30`                                                              |     |
| Amount of polygon vertices | E. g. triangle = 3, square = 4                               | Array    | 3 ... 100 |                    | `3h ... 320h`               | `00 03... 03 20`                                                             |     |
| Polygon vertex             | Coordinates of first polygon vertex in mm                    | Dint_32  | 4         | X coordinate:      | `FFFE2B40h ... 1D4C0h`      | `FF FE 2B 40 … 00 01 D4 C0`                                                  |     |
| Polygon vertex             | Coordinates of first polygon vertex in mm                    | Dint_32  | 4         | Y coordinate:      | `FFFE2B40h ... 1D4C0h`      | `FF FE 2B 40 … 00 01 D4 C0`                                                  |     |
| Polygon vertex             | Coordinates of second polygon vertex in mm                   | Dint_32  | 4         | X coordinate:      | `FFFE2B40h ... 1D4C0h`      | `FF FE 2B 40 … 00 01 D4 C0`                                                  |     |
| Polygon vertex             | Coordinates of second polygon vertex in mm                   | Dint_32  | 4         | Y coordinate:      | `FFFE2B40h ... 1D4C0h`      | `FF FE 2B 40 … 00 01 D4 C0`                                                  |     |
| ..                         |                                                              |          |           |                    |                                                          |                                                                                                           |     |
| Polygon vertex             | Coordinates of last polygon vertex in mm                     | Dint_32  | 4         | X coordinate:      | `FFFE2B40h ... 1D4C0h`      | `FF FE 2B 40 … 00 01 D4 C0`                                                  |     |
| Polygon vertex             | Coordinates of last polygon vertex in mm                     | Dint_32  | 4         | Y coordinate:      | `FFFE2B40h ... 1D4C0h`      | `FF FE 2B 40 … 00 01 D4 C0`                                                  |     |
| Lower Z limit              | Lower bound of extrusion in Z direction                      | Dint_32  | 4         | Always:            | `0`                         | `00 00 00 00`                                                                |     |
| Upper Z limit              | Upper bound of extrusion in Z direction                      | Dint_32  | 4         | Always:            | `0`                         | `00 00 00 00`                                                                |     |

**Example: sAN GetFieldEvaluationContour**

| Protocol | Example                                                                                                                                                                                                                                                                                       |     |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sAN{SPC}GetFieldEvaluationContour{SPC}1{SPC}1{SPC}4{SPC}7D0{SPC}3E8{SPC}0{SPC}3E8{SPC}0{SPC}0{SPC}7D0{SPC}0{SPC}0{SPC}0<ETX>`                                                                                                                  |     |
| CoLa A   | `02 73 41 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 31 20 31 20 34 20 37 44 30 20 33 45 38 20 30 20 33 45 38 20 30 20 30 20 37 44 30 20 30 20 30 20 30 03`                                                             |     |
| CoLa B   | `02 02 02 02 00 00 00 4C 73 41 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 00 01 00 04 00 00 07 D0 00 00 03 E8 00 00 00 00 00 00 03 E8 00 00 00 00 00 00 00 00 00 00 07 D0 00 00 00 00 00 00 00 00 00 00 00 00 04` |     |

### Read the Current Field Evaluation Application State [sRN FieldEvaluationApplicationState]

Read the current field evaluation application state.

**Access:** No additional user-level requirement is specified in this telegram table.

**Request: `sRN FieldEvaluationApplicationState`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Read | String | 3 | CoLa A: sRN |
| Info on current field evaluation application state | String | 31 | CoLa A: FieldEvaluationApplicationState |

**Response: `sRA FieldEvaluationApplicationState`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| --- | --- | ---: | --- |
| Answer | String | 3 | CoLa A: sRA |
| Info on current field evaluation application state | String | 31 | CoLa A: FieldEvaluationApplicationState |
| - | Enum_8 | 1 | Deactivated:: 0<br>Active:: 1<br>Configuring:: 2<br>Error:: 3 |

**Request example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sRN FieldEvaluationApplicationState<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 23 73 52 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65 36` |

**Response example**

| Protocol | Example |
| --- | --- |
| CoLa A | `<STX>sRA FieldEvaluationApplicationState 1<ETX>` |
| CoLa B | `02 02 02 02 00 00 00 25 73 52 41 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65 20 01 18` |

### Read Field Evaluation Result [sRN FieldEvaluationResult]

This telegram returns the status information of all evaluations.

**Telegram structure: sRN FieldEvaluationResult**

| Telegram part | Description                     | Variable | Length | Additional details | Values CoLa A (ASCII)                                | Values CoLa B (Binary)                                                                        |     |
| ------------- | ------------------------------- | -------- | ------ | ------------------ | ---------------------------------------------------- | --------------------------------------------------------------------------------------------- | --- |
| Command type  | Read                            | String   | 3      |                    | `sRN`                   | `73 52 4E`                                                       |     |
| Command       | Info on field evaluation result | String   | 21     |                    | `FieldEvaluationResult` | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74` |     |

**Example: sRN FieldEvaluationResult**

| Protocol | Example                                                                                                                              |     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sRN{SPC}FieldEvaluationResult<ETX>`                                                   |     |
| CoLa A   | `<STX>sRN FieldEvaluationResult<ETX>`                                                       |     |
| CoLa A   | `sRN FieldEvaluationResult`                                                                             |     |
| CoLa A   | `02 73 52 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 19 73 52 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 12` |     |
| CoLa B   | `73 52 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74`                            |     |

**Telegram structure: sRA FieldEvaluationResult**

| Telegram part     | Description                                                                                                                                                                                      | Variable | Length | Additional details                                                                             | Values CoLa A (ASCII)                                     | Values CoLa B (Binary)                                                                        |     |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------ | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --- |
| Command type      | Answer                                                                                                                                                                                           | String   | 3      |                                                                                                | `sRA`                        | `73 52 41`                                                       |     |
| Command           | Info on field evaluation result                                                                                                                                                                  | String   | 21     |                                                                                                | `FieldEvaluationResult`      | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74` |     |
| Version           | Version number                                                                                                                                                                                   | Uint_16  | 2      |                                                                                                | `0 ... FFFFh`                | `00 ... FF FF`                                                   |     |
| Timestamp         | Time of the last field infringement. Time base is the sensor system time in milliseconds since January 1, 1970, 00:00 (UTC). If a time server is being used, the configured system time is used. | ULInt_64 | 8      |                                                                                                | `0 ... FFFFFFFFFFFFFFFFh`    | `00 00 00 00 00 00 00 00 ... FF FF FF FF FF FF FF FF`            |     |
| Evaluation Result | Evaluation state of the first field.                                                                                                                                                             | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                               |     |
| Reserved          | -                                                                                                                                                                                                | Enum_8   | 1      | Always:                                                                                        | `0`                          | `00`                                                             |     |
| Evaluation Result | Evaluation state of the second field.                                                                                                                                                            | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                               |     |
| Reserved          | -                                                                                                                                                                                                | Enum_8   | 1      | Always:                                                                                        | `0`                          | `00`                                                             |     |
| ..                |                                                                                                                                                                                                  |          |        |                                                                                                |                                                           |                                                                                               |     |
| Evaluation Result | Evaluation state of the last field. (maximum amount of evaluations = 48)                                                                                                                         | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                               |     |
| Reserved          | -                                                                                                                                                                                                | Enum_8   | 1      | Always:                                                                                        | `0`                          | `00`                                                             |     |

### Request Perpendicular Distance Once [sRN perpendicularDistanceResult]

This telegram can be used to request the perpendicular distance. The shortest and furthest measuring point in a range to a reference plane will be transmitted. A field and a reference plane must be defined in the user interface under Application > Perpendicular distance measurement.

**Telegram structure: sRN perpendicularDistanceResult**

| Telegram part | Description                   | Variable | Length | Additional details | Values CoLa A (ASCII)                                      | Values CoLa B (Binary)                                                                                          |     |
| ------------- | ----------------------------- | -------- | ------ | ------------------ | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --- |
| Command type  | Read                          | String   | 3      |                    | `sRN`                         | `73 52 4E`                                                                         |     |
| Command       | Perpendicular distance values | String   | 27     |                    | `perpendicularDistanceResult` | `70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74` |     |

**Example: sRN perpendicularDistanceResult**

| Protocol | Example                                                                                                                                                |     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sRN{SPC}perpendicularDistanceResult<ETX>`                                                               |     |
| CoLa A   | `<STX>sRN perpendicularDistanceResult<ETX>`                                                                   |     |
| CoLa A   | `sRN perpendicularDistanceResult`                                                                                         |     |
| CoLa A   | `02 73 52 4E 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 1F 73 52 4E 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 3D` |     |
| CoLa B   | `73 52 4E 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74`                            |     |

**Telegram structure: sRA perpendicularDistanceResult**

| Telegram part      | Description                                                                                                                                                                                                            | Variable | Length | Additional details | Values CoLa A (ASCII)                                                  | Values CoLa B (Binary)                                                                                          |     |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------ | ------------------ | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --- |
| Command type       | Answer                                                                                                                                                                                                                 | String   | 3      |                    | `sRA`                                     | `73 52 41`                                                                         |     |
| Command            | Perpendicular distance values                                                                                                                                                                                          | String   | 27     |                    | `perpendicularDistanceResult`             | `70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74` |     |
| Timestamp          | Time of the latest object detection in the defined fields. Time base is the sensor system time in milliseconds since January 1, 1970, 00:00 (UTC). If a time server is being used, the configured system time is used. | Uint_32  | 8      |                    | `0 ... FFFFFFFFh`                         | `00 00 00 00 00 00 00 00... FF FF FF FF FF FF FF FF`                               |     |
| Amount of channels | Amount of perpendicular distance evaluation channels/fields                                                                                                                                                            | Enum_8   | 2      |                    | `1 ... 20d (1 ... 14h)`                   | `00 01 ... 00 14`                                                                  |     |
| Evaluation ID X    | ID of perpendicular distance field                                                                                                                                                                                     | Enum_8   | 2      |                    | `1 ... 20d (1 ... 14h)`                   | `00 01 ... 00 14`                                                                  |     |
| Evaluation ID X    | Minimum distance [mm]                                                                                                                                                                                                  | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |     |
| Evaluation ID X    | Maximum distance [mm]                                                                                                                                                                                                  | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |     |
| Evaluation ID X    | X minimum distance [mm]                                                                                                                                                                                                | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |     |
| Evaluation ID X    | Y minimum distance [mm]                                                                                                                                                                                                | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |     |
| Evaluation ID X    | Reserved                                                                                                                                                                                                               | Int_32   | 4      | Always:            | `0`                                       | `00 00 00 00`                                                                      |     |
| Evaluation ID X    | X maximum distance [mm]                                                                                                                                                                                                | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |     |
| Evaluation ID X    | Y maximum distance [mm]                                                                                                                                                                                                | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |     |
| Evaluation ID X    | Reserved                                                                                                                                                                                                               | Int_32   | 4      | Always:            | `0`                                       | `00 00 00 00`                                                                      |     |
| Evaluation ID ..   | ..                                                                                                                                                                                                                     | ..       | ..     | ..                 | `..`                                      | `..`                                                                               |     |

**Example: sRA perpendicularDistanceResult - 1 configured field**

| Protocol | Example                                                                                                                                                                                                                                                                                       |     |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sRA{SPC}perpendicularDistanceResult{SPC}138D305E8{SPC}1{SPC}1{SPC}9D{SPC}7EA{SPC}9D{SPC}FFFFFC67{SPC}0{SPC}7EA{SPC}FFFFFD70{SPC}0<ETX>`                                                                                                        |     |
| CoLa A   | `02 73 52 41 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 20 31 33 38 44 33 30 35 45 38 20 31 20 31 20 39 44 20 37 45 41 20 39 44 20 46 46 46 46 46 43 36 37 20 30 20 37 45 41 20 46 46 46 46 46 44 37 30 20 30 03`       |     |
| CoLa B   | `02 02 02 02 00 00 00 4C 73 52 41 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 20 00 00 00 01 31 80 92 88 00 01 00 01 00 00 00 9F 00 00 07 EB 00 00 00 9F FF FF FC 8C 00 00 00 00 00 00 07 EB FF FF FD 70 00 00 00 00 45` |     |

### Request Perpendicular Distance Continuously on Event [sEN perpendicularDistanceResult]

This telegram can be used to request the perpendicular distance continuously on event. The shortest and furthest measuring point in a range to a reference plane will be transmitted. A field and a reference plane must be defined in the user interface under Application > Perpendicular distance measurement.

**Telegram structure: sEN perpendicularDistanceResult**

| Telegram part | Description                   | Variable | Length | Additional details | Values CoLa A (ASCII)                                      | Values CoLa B (Binary)                                                                                          |     |
| ------------- | ----------------------------- | -------- | ------ | ------------------ | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --- |
| Command type  | Event                         | String   | 3      |                    | `sEN`                         | `73 45 4E`                                                                         |     |
| Command       | Perpendicular distance values | String   | 27     |                    | `perpendicularDistanceResult` | `70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74` |     |
| Start/ Stop   | -                             | Enum_8   | 1      | Stop:<br>Start:    | `0<br>1`                      | `00<br>01`                                                                         |     |

**Example: sEN perpendicularDistanceResult**

| Protocol | Example                                                                                                                                                      |     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sEN{SPC}perpendicularDistanceResult{SPC}1<ETX>`                                                               |     |
| CoLa A   | `<STX>sEN perpendicularDistanceResult 1<ETX>`                                                                       |     |
| CoLa A   | `sEN perpendicularDistanceResult 1`                                                                                             |     |
| CoLa A   | `02 73 45 4E 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 20 31 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 21 73 45 4E 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 20 01 0B` |     |
| CoLa B   | `73 45 4E 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 20 01`                            |     |

**Telegram structure: sSN perpendicularDistanceResult**

| Telegram part      | Description                                                                                                                                                                                                            | Variable | Length | Additional details | Values CoLa A (ASCII)                                                  | Values CoLa B (Binary)                                                                                          |     |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------ | ------------------ | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --- |
| Command type       | Answer                                                                                                                                                                                                                 | String   | 3      |                    | `sSN`                                     | `73 53 4E`                                                                         |     |
| Command            | Perpendicular distance values                                                                                                                                                                                          | String   | 27     |                    | `perpendicularDistanceResult`             | `70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74` |     |
| Timestamp          | Time of the latest object detection in the defined fields. Time base is the sensor system time in milliseconds since January 1, 1970, 00:00 (UTC). If a time server is being used, the configured system time is used. | Uint_32  | 8      |                    | `0 ... FFFFFFFFh`                         | `00 00 00 00 00 00 00 00... FF FF FF FF FF FF FF FF`                               |     |
| Amount of channels | Amount of perpendicular distance evaluation channels/fields                                                                                                                                                            | Enum_8   | 2      |                    | `1 ... 20d (1 ... 14h)`                   | `00 01 ... 00 14`                                                                  |     |
| Evaluation ID X    | ID of perpendicular distance field                                                                                                                                                                                     | Enum_8   | 2      |                    | `1 ... 20d (1 ... 14h)`                   | `00 01 ... 00 14`                                                                  |     |
| Evaluation ID X    | Minimum distance [mm]                                                                                                                                                                                                  | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |     |
| Evaluation ID X    | Maximum distance [mm]                                                                                                                                                                                                  | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |     |
| Evaluation ID X    | X minimum distance [mm]                                                                                                                                                                                                | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |     |
| Evaluation ID X    | Y minimum distance [mm]                                                                                                                                                                                                | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |     |
| Evaluation ID X    | Reserved                                                                                                                                                                                                               | Int_32   | 4      | Always:            | `0`                                       | `00 00 00 00`                                                                      |     |
| Evaluation ID X    | X maximum distance [mm]                                                                                                                                                                                                | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |     |
| Evaluation ID X    | Y maximum distance [mm]                                                                                                                                                                                                | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |     |
| Evaluation ID X    | Reserved                                                                                                                                                                                                               | Int_32   | 4      | Always:            | `0`                                       | `00 00 00 00`                                                                      |     |
| Evaluation ID ..   | ..                                                                                                                                                                                                                     | ..       | ..     | ..                 | `..`                                      | `..`                                                                               |     |

**Example: sSN perpendicularDistanceResult - 1 configured field**

| Protocol | Example                                                                                                                                                                                                                                                                                       |     |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sSN{SPC}perpendicularDistanceResult{SPC}D5BD2DA8{SPC}1{SPC}1{SPC}174{SPC}7CE{SPC}174{SPC}FFFFFFFC{SPC}0{SPC}7CE{SPC}FFFFFD13{SPC}0<ETX>`                                                                                                       |     |
| CoLa A   | `02 73 53 4E 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 20 44 35 42 44 32 44 41 38 20 31 20 31 20 31 37 34 20 37 43 45 20 31 37 34 20 46 46 46 46 46 46 46 43 20 30 20 37 43 45 20 46 46 46 46 46 44 31 33 20 30 03`    |     |
| CoLa B   | `02 02 02 02 00 00 00 4C 73 53 4E 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 20 00 00 00 00 F9 B6 D5 88 00 01 00 01 00 00 00 9D 00 00 07 D0 00 00 00 9D FF FF FC D0 00 00 00 00 00 00 07 D0 FF FF FD 1F 00 00 00 00 C0` |     |

### Read Evaluation Group Type [sRN EvaluationGroupType]

Array with the type of each group, either perpendicular distance or field evaluation.

**Telegram structure: sRN EvaluationGroupType**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |     |
| ------------- | ----------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type  | Read        | String   | 3      |                    | `sRN`                 | `73 52 4E`                                                 |     |
| Command       |             | String   | 19     |                    | `EvaluationGroupType` | `45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65` |     |

**Example: sRN EvaluationGroupType**

| Protocol | Example                                                                                                                        |     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ | --- |
| CoLa A   | `<STX>sRN{SPC}EvaluationGroupType<ETX>`                                               |     |
| CoLa A   | `<STX>sRN EvaluationGroupType<ETX>`                                                   |     |
| CoLa A   | `sRN EvaluationGroupType`                                                                         |     |
| CoLa A   | `02 73 52 4E 20 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65 03`                      |     |
| CoLa B   | `02 02 02 02 00 00 00 17 73 52 4E 20 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65 1E` |     |
| CoLa B   | `73 52 4E 20 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65`                            |     |

**Telegram structure: sRA EvaluationGroupType**

| Telegram part | Description              | Variable | Length | Additional details                           | Values CoLa A (ASCII)                                | Values CoLa B (Binary)                                                                  |     |
| ------------- | ------------------------ | -------- | ------ | -------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type  | Answer                   | String   | 3      |                                              | `sRA`                   | `73 52 41`                                                 |     |
| Command       |                          | String   | 19     |                                              | `EvaluationGroupType`   | `45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65` |     |
| Data          | Type of evaluation group | Array    | 48     | Field evaluation:<br>Perpendicular distance: | `0d (00h)<br>+1d (01h)` | `00<br>01`                                                 |     |
