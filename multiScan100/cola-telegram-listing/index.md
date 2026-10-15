# CoLa Telegram Listing

This reference lists the CoLa telegrams supported by the multiScan100. Use the
command details to build or troubleshoot PLC and other low-level
integrations without guessing the telegram structure. For connection
setup, framing, and log in, see
[CoLa Interface](../configuration/cola-interface.md).

Each telegram lists its request and response structure, examples, variable types, lengths, and CoLa A and CoLa B byte values.

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

A log in to the device is necessary to change parameters. In most cases, the user level 'Authorized client' is needed. Changed parameters will be reset to the previous state via a reboot unless the are saved. To save parameter changes the command "sMN mEEwriteall" must be send before log out.

**Telegram structure: sMN SetAccessMode**

| Telegram part | Description                            | Variable | Length | Additional details                             | Values CoLa A (ASCII)                                           | Values CoLa B (Binary)                                                   |     |
| ------------- | -------------------------------------- | -------- | ------ | ---------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------ | --- |
| Command type  | Method                                 | String   | 3      |                                                | `sMN`                              | `73 4D 4E`                                  |     |
| Command       | User level                             | String   | 13     |                                                | `SetAccessMode`                    | `53 65 74 41 63 63 65 73 73 4D 6F 64 65`    |     |
| User level    | Select user level                      | Int_8    | 1      | Maintenance:<br>Authorized client:<br>Service: | `2<br>3<br>4`                      | `02<br>03<br>04`                            |     |
| Password      | Hash value for the selected user level | Uint_32  | 4      | Maintenance:<br>Authorized client:<br>Service: | `B21ACE26<br>F4724744<br>81BE23AA` | `B2 1A CE 26<br>F4 72 47 44<br>81 BE 23 AA` |     |

**Example: sMN SetAccessMode**

| Protocol | Example                                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sMN{SPC}SetAccessMode{SPC}4{SPC}81BE23AA<ETX>`                                  |
| CoLa A   | `sMN SetAccessMode 4 81BE23AA`                                                                    |
| CoLa A   | `02 73 4D 4E 20 53 65 74 41 63 63 65 73 73 4D 6F 64 65 20 34 20 38 31 42 45 32 33 41 41 03`       |
| CoLa B   | `02 02 02 02 00 00 00 17 73 4D 4E 20 53 65 74 41 63 63 65 73 73 4D 6F 64 65 20 04 81 BE 23 AA 87` |
| CoLa B   | `73 4D 4E 20 53 65 74 41 63 63 65 73 73 4D 6F 64 65 20 04 81 BE 23 AA`                            |

**Telegram structure: sAN SetAccessMode**

| Telegram part     | Description   | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |     |
| ----------------- | ------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- | --- |
| Command type      | Answer        | String   | 3      |                    | `sAN`           | `73 41 4E`                               |     |
| Command           | User level    | String   | 13     |                    | `SetAccessMode` | `53 65 74 41 63 63 65 73 73 4D 6F 64 65` |     |
| Change user level | Changed level | Bool_1   | 1      | Error:<br>Success: | `0<br>1`        | `00<br>01`                               |     |

**Example: sAN SetAccessMode**

| Protocol | Example                                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sAN{SPC}SetAccessMode{SPC}1<ETX>`                                   |
| CoLa A   | `02 73 41 4E 20 53 65 74 41 63 63 65 73 73 4D 6F 64 65 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 13 73 41 4E 20 53 65 74 41 63 63 65 73 73 4D 6F 64 65 20 01 38` |

### Enable/ Disable CoLa User Levels [sMN EnableLegacyUserLevel]

This command enables and disables a specific CoLa user level (Maintenance, Authorized Client).

**Telegram structure: sMN EnableLegacyUserLevel**

| Telegram part | Description                     | Variable | Length | Additional details                 | Values CoLa A (ASCII)                                | Values CoLa B (Binary)                                                                        |     |
| ------------- | ------------------------------- | -------- | ------ | ---------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------- | --- |
| Command type  | Method                          | String   | 3      |                                    | `sMN`                   | `73 4D 4E`                                                       |     |
| Command       | Enable/ disable CoLa user level | String   | 21     |                                    | `EnableLegacyUserLevel` | `45 6E 61 62 6C 65 4C 65 67 61 63 79 55 73 65 72 4C 65 76 65 6C` |     |
| User level    | -                               | Uint_8   | 1      | Maintenance:<br>Authorized Client: | `2<br>3`                | `02<br>03`                                                       |     |
| Status        | Enable/ disable                 | Bool_1   | 1      | Disable:<br>Enable:                | `0<br>1`                | `00<br>01`                                                       |     |

**Example: sMN EnableLegacyUserLevel**

| Protocol | Example                                                                                                                                          |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sMN{SPC}EnableLegacyUserLevel{SPC}3{SPC}1<ETX>`                                                   |
| CoLa A   | `sMN EnableLegacyUserLevel 3 1`                                                                                     |
| CoLa A   | `02 73 4D 4E 20 45 6E 61 62 6C 65 4C 65 67 61 63 79 55 73 65 72 4C 65 76 65 6C 20 33 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 1D 73 4D 4E 20 45 6E 61 62 6C 65 4C 65 67 61 63 79 55 73 65 72 4C 65 76 65 6C 20 03 20 01 21` |
| CoLa B   | `73 4D 4E 20 45 6E 61 62 6C 65 4C 65 67 61 63 79 55 73 65 72 4C 65 76 65 6C 20 03 20 01`                            |

**Telegram structure: sAN EnableLegacyUserLevel**

| Telegram part | Description                     | Variable | Length | Additional details           | Values CoLa A (ASCII)                                | Values CoLa B (Binary)                                                                        |     |
| ------------- | ------------------------------- | -------- | ------ | ---------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------- | --- |
| Command type  | Answer                          | String   | 3      |                              | `sAN`                   | `73 41 4E`                                                       |     |
| Command       | Enable/ disable CoLa user level | String   | 21     |                              | `EnableLegacyUserLevel` | `45 6E 61 62 6C 65 4C 65 67 61 63 79 55 73 65 72 4C 65 76 65 6C` |     |
| Status code   | Confirmation                    | Bool_1   | 1      | unsuccessful:<br>successful: | `0<br>1`                | `00<br>01`                                                       |     |

**Example: sAN EnableLegacyUserLevel**

| Protocol | Example                                                                                                                                    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sAN{SPC}EnableLegacyUserLevel{SPC}1<ETX>`                                                   |
| CoLa A   | `02 73 41 4E 20 45 6E 61 62 6C 65 4C 65 67 61 63 79 55 73 65 72 4C 65 76 65 6C 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 1B 73 41 4E 20 45 6E 61 62 6C 65 4C 65 67 61 63 79 55 73 65 72 4C 65 76 65 6C 20 01 0E` |

### Read for Frequency and Angular Resolution [sRN LMPscancfg]

Read the scanning frequency, angular resolution and aperture angle of the device. Values show the information of the values before any filters are applied. Therefore aperture angle is always showing the maximum, scanning frequency and angular resolution may also be static depending on device family.

**Telegram structure: sRN LMPscancfg**

| Telegram part | Description                                   | Variable | Length | Additional details | Values CoLa A (ASCII)                     | Values CoLa B (Binary)                                       |     |
| ------------- | --------------------------------------------- | -------- | ------ | ------------------ | ----------------------------------------- | ------------------------------------------------------------ | --- |
| Command type  | Read                                          | String   | 3      |                    | `sRN`        | `73 52 4E`                      |     |
| Command       | Info of scan frequency and angular resolution | String   | 10     |                    | `LMPscancfg` | `4C 4D 50 73 63 61 6E 63 66 67` |     |

**Example: sRN LMPscancfg**

| Protocol | Example                                                                                             |
| -------- | --------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}LMPscancfg<ETX>`                             |
| CoLa A   | `<STX>sRN LMPscancfg<ETX>`                                 |
| CoLa A   | `sRN LMPscancfg`                                                       |
| CoLa A   | `02 73 52 4E 20 4C 4D 50 73 63 61 6E 63 66 67 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0E 73 52 4E 20 4C 4D 50 73 63 61 6E 63 66 67 63` |
| CoLa B   | `73 52 4E 20 4C 4D 50 73 63 61 6E 63 66 67`                            |

**Telegram structure: sRA LMPscancfg**

| Telegram part      | Description                                   | Variable | Length | Additional details                                        | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                       |     |
| ------------------ | --------------------------------------------- | -------- | ------ | --------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------ | --- |
| Command type       | Answer                                        | String   | 3      |                                                           | `sRA`                 | `73 52 41`                      |     |
| Command            | Info of scan frequency and angular resolution | String   | 10     |                                                           | `LMPscancfg`          | `4C 4D 50 73 63 61 6E 63 66 67` |     |
| Scan frequency     | [1/100 Hz]                                    | Uint_32  | 4      | 15 Hz ... 50 Hz:<br>(depends on Dynamic Sensing Profile ) | `5DCh ... 1388h`      | `05 DC ... 13 88`               |     |
| Reserved           | -                                             | Int_16   | 2      | Always:                                                   | `1`                   | `00 01`                         |     |
| Angular resolution | [1/10000°]                                    | Uint_32  | 4      | 0.1° ... 1°:<br>(depends on Dynamic Sensing Profile )     | `3E8h … 2710h`        | `03 E8 ... 27 10`               |     |
| Start angle        | [1/10000°]                                    | Int_32   | 4      | Variant-dependent; example: -180 to +180 degrees          | `FFE488C0 ... 1B7740` | `FF E4 88 C0 ... 00 1B 77 40`   |     |
| Stop angle         | [1/10000°]                                    | Int_32   | 4      | Variant-dependent; example: -180 to +180 degrees          | `FFE488C0 ... 1B7740` | `FF E4 88 C0 ... 00 1B 77 40`   |     |

**Example: sRA LMPscancfg**

| Protocol | Example                                                                                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}LMPscancfg{SPC}7D0{SPC}1{SPC}1388{SPC}FFE488C0{SPC}1B7740<ETX>`                                          |
| CoLa A   | `02 73 52 41 20 4C 4D 50 73 63 61 6E 63 66 67 20 37 44 30 20 31 20 31 33 38 38 20 46 46 45 34 38 38 43 30 20 31 42 37 37 34 30 03` |
| CoLa B   | `02 02 02 02 00 00 00 21 73 52 41 20 4C 4D 50 73 63 61 6E 63 66 67 20 00 00 07 D0 00 01 00 00 13 88 FF E4 88 C0 00 1B 77 40 7E`    |

### Start Measurement [sMN LMCstartmeas]

Start the laser and (unless in Standby mode) the motor of the device

**Telegram structure: sMN LMCstartmeas**

| Telegram part | Description       | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |     |
| ------------- | ----------------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ | --- |
| Command type  | Method            | String   | 3      |                    | `sMN`          | `73 4D 4E`                            |     |
| Command       | Start measurement | String   | 12     |                    | `LMCstartmeas` | `4C 4D 43 73 74 61 72 74 6D 65 61 73` |     |

**Example: sMN LMCstartmeas**

| Protocol | Example                                                                                                   |
| -------- | --------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sMN{SPC}LMCstartmeas<ETX>`                                 |
| CoLa A   | `sMN LMCstartmeas`                                                           |
| CoLa A   | `02 73 4D 4E 20 4C 4D 43 73 74 61 72 74 6D 65 61 73 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 10 73 4D 4E 20 4C 4D 43 73 74 61 72 74 6D 65 61 73 68` |
| CoLa B   | `73 4D 4E 20 4C 4D 43 73 74 61 72 74 6D 65 61 73`                            |

**Telegram structure: sAN LMCstartmeas**

| Telegram part | Description              | Variable | Length | Additional details       | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |     |
| ------------- | ------------------------ | -------- | ------ | ------------------------ | ------------------------------------------- | ------------------------------------------------------------------ | --- |
| Command type  | Answer                   | String   | 3      |                          | `sAN`          | `73 41 4E`                            |     |
| Command       | Start measurement        | String   | 12     |                          | `LMCstartmeas` | `4C 4D 43 73 74 61 72 74 6D 65 61 73` |     |
| Status code   | Accepted when value is 0 | Enum_8   | 1      | Success:<br>Not allowed: | `0<br>1`       | `00<br>01`                            |     |

**Example: sAN LMCstartmeas**

| Protocol | Example                                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sAN{SPC}LMCstartmeas{SPC}0<ETX>`                                 |
| CoLa A   | `02 73 41 4E 20 4C 4D 43 73 74 61 72 74 6D 65 61 73 20 30 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 12 73 41 4E 20 4C 4D 43 73 74 61 72 74 6D 65 61 73 20 00 44` |

### Stop Measurement [sMN LMCstopmeas]

Shut off the laser and the motor is running at the set up frequency.

**Telegram structure: sMN LMCstopmeas**

| Telegram part | Description      | Variable | Length | Additional details | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |     |
| ------------- | ---------------- | -------- | ------ | ------------------ | ------------------------------------------ | --------------------------------------------------------------- | --- |
| Command type  | Method           | String   | 3      |                    | `sMN`         | `73 4D 4E`                         |     |
| Command       | Stop measurement | String   | 11     |                    | `LMCstopmeas` | `4C 4D 43 73 74 6F 70 6D 65 61 73` |     |

**Example: sMN LMCstopmeas**

| Protocol | Example                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sMN{SPC}LMCstopmeas<ETX>`                               |
| CoLa A   | `sMN LMCstopmeas`                                                         |
| CoLa A   | `02 73 4D 4E 20 4C 4D 43 73 74 6F 70 6D 65 61 73 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0F 73 4D 4E 20 4C 4D 43 73 74 6F 70 6D 65 61 73 10` |
| CoLa B   | `73 4D 4E 20 4C 4D 43 73 74 6F 70 6D 65 61 73`                            |

**Telegram structure: sAN LMCstopmeas**

| Telegram part | Description              | Variable | Length | Additional details        | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |     |
| ------------- | ------------------------ | -------- | ------ | ------------------------- | ------------------------------------------ | --------------------------------------------------------------- | --- |
| Command type  | Answer                   | String   | 3      |                           | `sAN`         | `73 41 4E`                         |     |
| Command       | Stop measurement         | String   | 11     |                           | `LMCstopmeas` | `4C 4D 43 73 74 6F 70 6D 65 61 73` |     |
| Status code   | Accepted when value is 0 | Enum_8   | 1      | No error:<br>Not allowed: | `0<br>1`      | `00<br>01`                         |     |

**Example: sAN LMCstopmeas**

| Protocol | Example                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sAN{SPC}LMCstopmeas{SPC}0<ETX>`                               |
| CoLa A   | `02 73 41 4E 20 4C 4D 43 73 74 6F 70 6D 65 61 73 20 30 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 11 73 41 4E 20 4C 4D 43 73 74 6F 70 6D 65 61 73 20 00 3C` |

### Autostart Measurement [sWN LMPautostartmeas]

This parameter defines whether the scanner will start to rotate directly and measure when powering up or remain in idle mode. Save the changed setting with `sMN mEEwriteall`; it takes effect at the next power-up cycle.

In case autostart is deactivated, the sensor will remain in idle mode with the laser switched off and a motor speed depending on the Dynamic Sensing Profile .

**Telegram structure: sWN LMPautostartmeas**

| Telegram part | Description                     | Variable | Length | Additional details              | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                                                         |     |
| ------------- | ------------------------------- | -------- | ------ | ------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------ | --- |
| Command type  | Write                           | String   | 3      |                                 | `sWN`              | `73 57 4E`                                        |     |
| Command       | Autostart measurement           | String   | 16     |                                 | `LMPautostartmeas` | `4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73` |     |
| Status code   | Activate / Deactivate Autostart | Bool_1   | 1      | Autostart off:<br>Autostart on: | `0<br>1`           | `00<br>01`                                        |     |

**Example: sWN LMPautostartmeas**

| Protocol | Example                                                                                                                     |
| -------- | --------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sWN{SPC}LMPautostartmeas{SPC}1<ETX>`                                         |
| CoLa A   | `sWN LMPautostartmeas 1`                                                                       |
| CoLa A   | `02 73 57 4E 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 16 73 57 4E 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 20 01 4F` |
| CoLa B   | `73 57 4E 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 20 01`                            |

**Telegram structure: sWA LMDautostartmeas**

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                                                         |     |
| ------------- | --------------------- | -------- | ------ | ------------------ | ----------------------------------------------- | ------------------------------------------------------------------------------ | --- |
| Command type  | Answer                | String   | 3      |                    | `sWA`              | `73 57 41`                                        |     |
| Command       | Autostart measurement | String   | 16     |                    | `LMPautostartmeas` | `4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73` |     |

**Telegram structure: sWA LMPautostartmeas**

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                                                         |
| ------------- | --------------------- | -------- | ------ | ------------------ | ----------------------------------------------- | ------------------------------------------------------------------------------ |
| Command type  | Answer                | String   | 3      |                    | `sWA`              | `73 57 41`                                        |
| Command       | Autostart measurement | String   | 16     |                    | `LMPautostartmeas` | `4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73` |

**Example: sWA LMPautostartmeas**

| Protocol | Example                                                                                                                  |
| -------- | ------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWA{SPC}LMPautostartmeas<ETX>`                                            |
| CoLa A   | `02 73 57 41 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 15 73 57 41 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 20 41` |

### Load Factory Defaults [sMN mSCloadfacdef]

The Factory-Reset (Load factory defaults) deletes the entire parametrization of the device. All parameters, settings and system applications will be set to default.

**Telegram structure: sMN mSCloadfacdef**

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |     |
| ------------- | --------------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- | --- |
| Command type  | Method                | String   | 3      |                    | `sMN`           | `73 4D 4E`                               |     |
| Command       | Load factory defaults | String   | 13     |                    | `mSCloadfacdef` | `6D 53 43 6C 6F 61 64 66 61 63 64 65 66` |     |

**Example: sMN mSCloadfacdef**

| Protocol | Example                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sMN{SPC}mSCloadfacdef<ETX>`                                   |
| CoLa A   | `sMN mSCloadfacdef`                                                             |
| CoLa A   | `02 73 4D 4E 20 6D 53 43 6C 6F 61 64 66 61 63 64 65 66 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 11 73 4D 4E 20 6D 53 43 6C 6F 61 64 66 61 63 64 65 66 28` |
| CoLa B   | `73 4D 4E 20 6D 53 43 6C 6F 61 64 66 61 63 64 65 66`                            |

**Telegram structure: sAN mSCloadfacdef**

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |     |
| ------------- | --------------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- | --- |
| Command type  | Answer                | String   | 3      |                    | `sAN`           | `73 41 4E`                               |     |
| Command       | Load factory defaults | String   | 13     |                    | `mSCloadfacdef` | `6D 53 43 6C 6F 61 64 66 61 63 64 65 66` |     |

**Example: sAN mSCloadfacdef**

| Protocol | Example                                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sAN{SPC}mSCloadfacdef<ETX>`                                      |
| CoLa A   | `02 73 41 4E 20 6D 53 43 6C 6F 61 64 66 61 63 64 65 66 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 12 73 41 4E 20 6D 53 43 6C 6F 61 64 66 61 63 64 65 66 20 04` |

### Load Application Defaults [sMN mSCloadappdef]

The Application-Reset (Load application defaults) deletes only the user parametrization of the Fields, Evaluation cases (EVC) and parameters under the header “Application”. Other parameters like Interface settings, Echo Filter, etc. remain unaffected.

**Telegram structure: sMN mSCloadappdef**

| Telegram part | Description               | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |     |
| ------------- | ------------------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- | --- |
| Command type  | Method                    | String   | 3      |                    | `sMN`           | `73 4D 4E`                               |     |
| Command       | Load application defaults | String   | 13     |                    | `mSCloadappdef` | `6D 53 43 6C 6F 61 64 61 70 70 64 65 66` |     |

**Example: sMN mSCloadappdef**

| Protocol | Example                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sMN{SPC}mSCloadappdef<ETX>`                                   |
| CoLa A   | `sMN mSCloadappdef`                                                             |
| CoLa A   | `02 73 4D 4E 20 6D 53 43 6C 6F 61 64 61 70 70 64 65 66 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 11 73 4D 4E 20 6D 53 43 6C 6F 61 64 61 70 70 64 65 66 2D` |
| CoLa B   | `73 4D 4E 20 6D 53 43 6C 6F 61 64 61 70 70 64 65 66`                            |

**Telegram structure: sAN mSCloadappdef**

| Telegram part | Description               | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |     |
| ------------- | ------------------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- | --- |
| Command type  | Answer                    | String   | 3      |                    | `sAN`           | `73 41 4E`                               |     |
| Command       | Load application defaults | String   | 13     |                    | `mSCloadappdef` | `6D 53 43 6C 6F 61 64 61 70 70 64 65 66` |     |

**Example: sAN mSCloadappdef**

| Protocol | Example                                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sAN{SPC}mSCloadappdef<ETX>`                                      |
| CoLa A   | `02 73 41 4E 20 6D 53 43 6C 6F 61 64 61 70 70 64 65 66 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 12 73 41 4E 20 6D 53 43 6C 6F 61 64 61 70 70 64 65 66 20 01` |

### Change Password [sMN SetPassword]

Changing the log in password for a specific user level.

If logged in with a higher user level you may set the password for lower user levels as well.

**Telegram structure: sMN SetPassword**

| Telegram part | Description                                     | Variable | Length | Additional details                             | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                          |     |
| ------------- | ----------------------------------------------- | -------- | ------ | ---------------------------------------------- | ------------------------------------------------- | --------------------------------------------------------------- | --- |
| Command type  | Method                                          | String   | 3      |                                                | `sMN`                | `73 4D 4E`                         |     |
| Command       | Set password request                            | String   | 11     |                                                | `SetPassword`        | `53 65 74 50 61 73 73 77 6F 72 64` |     |
| User level    | User level that the password will be applied to | Int_8    | 1      | Maintenance:<br>Authorized client:<br>Service: | `2<br>3<br>4`        | `02<br>03<br>04`                   |     |
| Password      | Hash value of the new password                  | Uint_32  | 4      |                                                | `<Hash value>` |                                                                 |     |

Set password for 'Authorized client' to “testtest” (hash value = 1920E4C9).

**Example: sMN SetPassword**

| Protocol | Example                                                                                                                  |
| -------- | ------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sMN{SPC}SetPassword{SPC}3{SPC}1920E4C9<ETX>`                              |
| CoLa A   | `sMN SetPassword 3 1920E4C9`                                                                |
| CoLa A   | `02 73 4D 4E 20 53 65 74 50 61 73 73 77 6F 72 64 20 33 20 31 39 32 30 45 34 43 39 03`       |
| CoLa B   | `02 02 02 02 00 00 00 15 73 4D 4E 20 53 65 74 50 61 73 73 77 6F 72 64 20 03 19 20 E4 C9 1A` |
| CoLa B   | `73 4D 4E 20 53 65 74 50 61 73 73 77 6F 72 64 20 03 19 20 E4 C9`                            |

**Telegram structure: sAN SetPassword**

| Telegram part | Description            | Variable | Length | Additional details  | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |     |
| ------------- | ---------------------- | -------- | ------ | ------------------- | ------------------------------------------ | --------------------------------------------------------------- | --- |
| Command type  | Answer                 | String   | 3      |                     | `sAN`         | `73 41 4E`                         |     |
| Command       | Set password requested | String   | 11     |                     | `SetPassword` | `53 65 74 50 61 73 73 77 6F 72 64` |     |
| Success       | Confirmation           | Int_8    | 1      | Failed:<br>Success: | `0<br>1`      | `00<br>01`                         |     |

**Example: sAN SetPassword**

| Protocol | Example                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sAN{SPC}SetPassword{SPC}1<ETX>`                               |
| CoLa A   | `02 73 41 4E 20 53 65 74 50 61 73 73 77 6F 72 64 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 11 73 41 4E 20 53 65 74 50 61 73 73 77 6F 72 64 20 01 00` |

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

| Protocol | Example                                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sMN{SPC}CheckPassword{SPC}3{SPC}1920E4C9<ETX>`                                  |
| CoLa A   | `sMN CheckPassword 3 1920E4C9`                                                                    |
| CoLa A   | `02 73 4D 4E 20 43 68 65 63 6B 50 61 73 73 77 6F 72 64 20 33 20 31 39 32 30 45 34 43 39 03`       |
| CoLa B   | `02 02 02 02 00 00 00 17 73 4D 4E 20 43 68 65 63 6B 50 61 73 73 77 6F 72 64 20 03 19 20 E4 C9 1E` |
| CoLa B   | `73 4D 4E 20 43 68 65 63 6B 50 61 73 73 77 6F 72 64 20 03 19 20 E4 C9`                            |

**Telegram structure: sAN CheckPassword**

| Telegram part | Description            | Variable | Length | Additional details  | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |     |
| ------------- | ---------------------- | -------- | ------ | ------------------- | -------------------------------------------- | --------------------------------------------------------------------- | --- |
| Command type  | Answer                 | String   | 3      |                     | `sAN`           | `73 41 4E`                               |     |
| Command       | Check password request | String   | 13     |                     | `CheckPassword` | `43 68 65 63 6B 50 61 73 73 77 6F 72 64` |     |
| Success       | Confirmation           | Int_8    | 1      | Failed:<br>Success: | `0<br>1`        | `00<br>01`                               |     |

**Example: sAN CheckPassword**

| Protocol | Example                                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sAN{SPC}CheckPassword{SPC}1<ETX>`                                   |
| CoLa A   | `02 73 41 4E 20 43 68 65 63 6B 50 61 73 73 77 6F 72 64 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 13 73 41 4E 20 43 68 65 63 6B 50 61 73 73 77 6F 72 64 20 01 04` |

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

**Example: sWN ContaminationConfig**

| Protocol | Example                                                                                                                                                                                                                     |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sWN{SPC}ContaminationConfig{SPC}0{SPC}3{SPC}0{SPC}0{SPC}C{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1<ETX>`                          |
| CoLa A   | `sWN ContaminationConfig 0 3 0 0 C 1 1 1 1 1 1 1 1 1 1 1 1 1 1`                                                                                                                                |
| CoLa A   | `02 73 57 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 20 30 20 33 20 30 20 30 20 43 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 03` |
| CoLa B   | `02 02 02 02 00 00 00 2D 73 57 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 20 00 00 03 00 00 00 0C 01 01 01 01 01 01 01 01 01 01 01 01 01 01 0F`                            |
| CoLa B   | `73 57 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 20 00 00 03 00 00 00 0C 01 01 01 01 01 01 01 01 01 01 01 01 01 01`                                                       |

**Telegram structure: sWA ContaminationConfig**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |     |
| ------------- | ----------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type  | Answer      | String   | 3      |                    | `sWA`                 | `73 57 41`                                                 |     |
| Command       |             | String   | 19     |                    | `ContaminationConfig` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67` |     |

**Example: sWA ContaminationConfig**

| Protocol | Example                                                                                                                           |
| -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sWA{SPC}ContaminationConfig<ETX>`                                                  |
| CoLa A   | `02 73 57 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 18 73 57 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 20 0F` |

### Read Contamination Indication Settings [sRN ContaminationConfig]

Reads the current contamination settings that define how and under which conditions the device indicates a potential contamination of the optics cover to enable preventive cleaning.

**Telegram structure: sRN ContaminationConfig**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |     |
| ------------- | ----------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type  | Read        | String   | 3      |                    | `sRN`                 | `73 52 4E`                                                 |     |
| Command       |             | String   | 19     |                    | `ContaminationConfig` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67` |     |

**Example: sRN ContaminationConfig**

| Protocol | Example                                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRN{SPC}ContaminationConfig<ETX>`                                               |
| CoLa A   | `<STX>sRN ContaminationConfig<ETX>`                                                   |
| CoLa A   | `sRN ContaminationConfig`                                                                         |
| CoLa A   | `02 73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 17 73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 25` |
| CoLa B   | `73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67`                            |

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

**Example: sRA ContaminationConfig**

| Protocol | Example                                                                                                                                                                                                                     |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}ContaminationConfig{SPC}0{SPC}3{SPC}0{SPC}0{SPC}C{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1<ETX>`                          |
| CoLa A   | `02 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 20 30 20 33 20 30 20 30 20 43 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 03` |
| CoLa B   | `02 02 02 02 00 00 00 2D 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 20 00 00 03 00 00 00 0C 01 01 01 01 01 01 01 01 01 01 01 01 01 01 05`                            |

### Send Contamination Indication Data Permanently [sEN ContaminationData]

Provides continuous contamination indication data for the individual sectors of the optical cover. When a change in contamination is detected in any sector, the current contamination status of all sectors will be transmitted

**Telegram structure: sEN ContaminationData**

| Telegram part | Description                                        | Variable | Length | Additional details | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                            |     |
| ------------- | -------------------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------- | --- |
| Command type  | Read                                               | String   | 3      |                    | `sEN`               | `73 45 4E`                                           |     |
| Command       | Get the contamination indication data continuously | String   | 17     |                    | `ContaminationData` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61` |     |
| Data          | Start/ Stop                                        | Bool_1   | 1      | Stop:<br>Start:    | `0<br>1`            | `00<br>01`                                           |     |

**Example: sEN ContaminationData**

| Protocol | Example                                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sEN{SPC}ContaminationData{SPC}1<ETX>`                                           |
| CoLa A   | `sEN ContaminationData 1`                                                                         |
| CoLa A   | `02 73 45 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 17 73 45 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 20 01 09` |
| CoLa B   | `73 45 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 20 01`                            |

**Example: sEA ContaminationData**

| Protocol | Example                                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sEA{SPC}ContaminationData{SPC}1<ETX>`                                           |
| CoLa A   | `02 73 45 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 17 73 45 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 20 01 06` |

**Telegram structure: sSN ContaminationData**

| Telegram part                   | Description                                        | Variable        | Length | Additional details                       | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                            |     |
| ------------------------------- | -------------------------------------------------- | --------------- | ------ | ---------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------- | --- |
| Command type                    | Answer                                             | String          | 3      |                                          | `sSN`               | `73 53 4E`                                           |     |
| Command                         | Get the contamination indication data continuously | String          | 17     |                                          | `ContaminationData` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61` |     |
| Number of contamination sectors |                                                    | Uint_16         | 2      | Always:                                  | `7`                 | `00 07`                                              |     |
| Contamination data              | Status of contamination of each sector             | Array of Enum_8 | 7      | Blocked:<br>Clean:<br>Warning:<br>Error: | `0<br>1<br>2<br>3`  | `00<br>01<br>02<br>03`                               |     |

### Read Contamination Indication Result [sRN ContaminationResult]

This telegram is intended to read the contamination result. The telegram returns two Boolean. One for warning and one for error. Depending on the strategy of the contamination indication the state changes if one or all sectors are in the specific status (warning or error).

**Telegram structure: sRN ContaminationResult**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |     |
| ------------- | ----------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type  | Read        | String   | 3      |                    | `sRN`                 | `73 52 4E`                                                 |     |
| Command       |             | String   | 19     |                    | `ContaminationResult` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74` |     |

**Example: sRN ContaminationResult**

| Protocol | Example                                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRN{SPC}ContaminationResult<ETX>`                                               |
| CoLa A   | `<STX>sRN ContaminationResult<ETX>`                                                   |
| CoLa A   | `sRN ContaminationResult`                                                                         |
| CoLa A   | `02 73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 17 73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 26` |
| CoLa B   | `73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74`                            |

**Telegram structure: sRA ContaminationResult**

| Telegram part        | Description | Variable | Length | Additional details     | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |     |
| -------------------- | ----------- | -------- | ------ | ---------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type         | Answer      | String   | 3      |                        | `sRA`                 | `73 52 41`                                                 |     |
| Command              |             | String   | 19     |                        | `ContaminationResult` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74` |     |
| Contamination Result | Warning     | Bool_1   | 1      | Not active:<br>Active: | `0<br>1`              | `00<br>01`                                                 |     |
| Contamination Result | Error       | Bool_1   | 1      | Not active:<br>Active: | `0<br>1`              | `00<br>01`                                                 |     |

**Example: sRA ContaminationResult**

| Protocol | Example                                                                                                                                 |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}ContaminationResult{SPC}0{SPC}0<ETX>`                                            |
| CoLa A   | `02 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 30 20 30 03`                   |
| CoLa B   | `02 02 02 02 00 00 00 1A 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 00 00 09` |

### Send Contamination Indication Result Permanently [sEN ContaminationResult]

This telegram is intended to activate the event for read the contamination result permanently. The telegram returns two Boolean. One for warning and one for error. Depending on the strategy of the contamination indication the state changes if one or all sectors are in the specific status (warning or error).

**Telegram structure: sEN ContaminationResult**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |     |
| ------------- | ----------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type  | Read        | String   | 3      |                    | `sEN`                 | `73 45 4E`                                                 |     |
| Command       |             | String   | 19     |                    | `ContaminationResult` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74` |     |
| Data          | Start/ Stop | Bool_1   | 1      | Stop:<br>Start:    | `0<br>1`              | `00<br>01`                                                 |     |

**Example: sEN ContaminationResult**

| Protocol | Example                                                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sEN{SPC}ContaminationResult{SPC}1<ETX>`                                               |
| CoLa A   | `sEN ContaminationResult 1`                                                                             |
| CoLa A   | `02 73 45 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 19 73 45 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 01 10` |
| CoLa B   | `73 45 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 01`                            |

**Example: sEA ContaminationResult**

| Protocol | Example                                                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sEA{SPC}ContaminationResult{SPC}1<ETX>`                                               |
| CoLa A   | `02 73 45 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 19 73 45 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 01 1F` |

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

| Protocol | Example                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sMN{SPC}mEEwriteall<ETX>`                               |
| CoLa A   | `sMN mEEwriteall`                                                         |
| CoLa A   | `02 73 4D 4E 20 6D 45 45 77 72 69 74 65 61 6C 6C 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0F 73 4D 4E 20 6D 45 45 77 72 69 74 65 61 6C 6C 21` |
| CoLa B   | `73 4D 4E 20 6D 45 45 77 72 69 74 65 61 6C 6C`                            |

**Telegram structure: sAN mEEwriteall**

| Telegram part | Description                  | Variable | Length | Additional details | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |     |
| ------------- | ---------------------------- | -------- | ------ | ------------------ | ------------------------------------------ | --------------------------------------------------------------- | --- |
| Command type  | Answer                       | String   | 3      |                    | `sAN`         | `73 41 4E`                         |     |
| Command       | Store parameters permanently | String   | 11     |                    | `mEEwriteall` | `6D 45 45 77 72 69 74 65 61 6C 6C` |     |
| Status code   | Accepted when value is 1     | Bool_1   | 1      | Error:<br>Success: | `0<br>1`      | `00<br>01`                         |     |

**Example: sAN mEEwriteall**

| Protocol | Example                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sAN{SPC}mEEwriteall{SPC}1<ETX>`                               |
| CoLa A   | `02 73 41 4E 20 6D 45 45 77 72 69 74 65 61 6C 6C 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 11 73 41 4E 20 6D 45 45 77 72 69 74 65 61 6C 6C 20 01 0C` |

### Set to Run [sMN Run]

Log out from device and activate all parameter changes.

**Telegram structure: sMN Run**

| Telegram part | Description      | Variable | Length | Additional details | Values CoLa A (ASCII)              | Values CoLa B (Binary)                  |     |
| ------------- | ---------------- | -------- | ------ | ------------------ | ---------------------------------- | --------------------------------------- | --- |
| Command type  | Method           | String   | 3      |                    | `sMN` | `73 4D 4E` |     |
| Command       | Start the device | String   | 3      |                    | `Run` | `52 75 6E` |     |

**Example: sMN Run**

| Protocol | Example                                                                        |
| -------- | ------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sMN{SPC}Run<ETX>`               |
| CoLa A   | `sMN Run`                                         |
| CoLa A   | `02 73 4D 4E 20 52 75 6E 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 07 73 4D 4E 20 52 75 6E 19` |
| CoLa B   | `73 4D 4E 20 52 75 6E`                            |

**Telegram structure: sAN Run**

| Telegram part | Description              | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                  |     |
| ------------- | ------------------------ | -------- | ------ | ------------------ | ------------------------------------- | --------------------------------------- | --- |
| Command type  | Answer                   | String   | 3      |                    | `sAN`    | `73 41 4E` |     |
| Command       | Start the device         | String   | 3      |                    | `Run`    | `52 75 6E` |     |
| Status code   | Accepted when value is 1 | Bool_1   | 1      | Error:<br>Success: | `0<br>1` | `00<br>01` |     |

**Example: sAN Run**

| Protocol | Example                                                                              |
| -------- | ------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sAN{SPC}Run{SPC}1<ETX>`               |
| CoLa A   | `02 73 41 4E 20 52 75 6E 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 09 73 41 4E 20 52 75 6E 20 01 34` |

### Reboot Device [sMN mSCreboot]

This command includes saving all parameters.

**Telegram structure: sMN mSCreboot**

| Telegram part | Description   | Variable | Length | Additional details | Values CoLa A (ASCII)                    | Values CoLa B (Binary)                                    |     |
| ------------- | ------------- | -------- | ------ | ------------------ | ---------------------------------------- | --------------------------------------------------------- | --- |
| Command type  | Method        | String   | 3      |                    | `sMN`       | `73 4D 4E`                   |     |
| Command       | Reboot device | String   | 9      |                    | `mSCreboot` | `6D 53 43 72 65 62 6F 6F 74` |     |

**Example: sMN mSCreboot**

| Protocol | Example                                                                                          |
| -------- | ------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sMN{SPC}mSCreboot<ETX>`                           |
| CoLa A   | `sMN mSCreboot`                                                     |
| CoLa A   | `02 73 4D 4E 20 6D 53 43 72 65 62 6F 6F 74 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0D 73 4D 4E 20 6D 53 43 72 65 62 6F 6F 74 2C` |
| CoLa B   | `73 4D 4E 20 6D 53 43 72 65 62 6F 6F 74`                            |

**Telegram structure: sAN mSCreboot**

| Telegram part | Description   | Variable | Length | Additional details | Values CoLa A (ASCII)                    | Values CoLa B (Binary)                                    |     |
| ------------- | ------------- | -------- | ------ | ------------------ | ---------------------------------------- | --------------------------------------------------------- | --- |
| Command type  | Answer        | String   | 3      |                    | `sAN`       | `73 41 4E`                   |     |
| Command       | Reboot device | String   | 9      |                    | `mSCreboot` | `6D 53 43 72 65 62 6F 6F 74` |     |

**Example: sAN mSCreboot**

| Protocol | Example                                                                                             |
| -------- | --------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sAN{SPC}mSCreboot<ETX>`                              |
| CoLa A   | `02 73 41 4E 20 6D 53 43 72 65 62 6F 6F 74 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 0E 73 41 4E 20 6D 53 43 72 65 62 6F 6F 74 20 00` |

### Read Parameter [sRN EIAddrMode]

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN EIAddrMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                     | Values CoLa B (Binary)                                       |
| ------------- | ----------- | -------- | ------ | ------------------ | ----------------------------------------- | ------------------------------------------------------------ |
| Command type  | Read        | String   | 3      |                    | `sRN`        | `73 52 4E`                      |
| Command       | EIAddrMode  | String   | 10     |                    | `EIAddrMode` | `45 49 41 64 64 72 4D 6F 64 65` |

**Example: sRN EIAddrMode**

| Protocol | Example                                                                                             |
| -------- | --------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}EIAddrMode<ETX>`                             |
| CoLa A   | `<STX>sRN EIAddrMode<ETX>`                                 |
| CoLa A   | `sRN EIAddrMode`                                                       |
| CoLa A   | `02 73 52 4E 20 45 49 41 64 64 72 4D 6F 64 65 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0E 73 52 4E 20 45 49 41 64 64 72 4D 6F 64 65 53` |
| CoLa B   | `73 52 4E 20 45 49 41 64 64 72 4D 6F 64 65`                            |

**Example: sRA EIAddrMode**

| Protocol | Example                                                                                                   |
| -------- | --------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}EIAddrMode{SPC}0<ETX>`                             |
| CoLa A   | `02 73 52 41 20 45 49 41 64 64 72 4D 6F 64 65 20 30 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 10 73 52 41 20 45 49 41 64 64 72 4D 6F 64 65 20 00 7C` |

### Read Parameter [sRN EIAuxEnable]

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN EIAuxEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |
| ------------- | ----------- | -------- | ------ | ------------------ | ------------------------------------------ | --------------------------------------------------------------- |
| Command type  | Read        | String   | 3      |                    | `sRN`         | `73 52 4E`                         |
| Command       | EIAuxEnable | String   | 11     |                    | `EIAuxEnable` | `45 49 41 75 78 45 6E 61 62 6C 65` |

**Example: sRN EIAuxEnable**

| Protocol | Example                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRN{SPC}EIAuxEnable<ETX>`                               |
| CoLa A   | `<STX>sRN EIAuxEnable<ETX>`                                   |
| CoLa A   | `sRN EIAuxEnable`                                                         |
| CoLa A   | `02 73 52 4E 20 45 49 41 75 78 45 6E 61 62 6C 65 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0F 73 52 4E 20 45 49 41 75 78 45 6E 61 62 6C 65 2E` |
| CoLa B   | `73 52 4E 20 45 49 41 75 78 45 6E 61 62 6C 65`                            |

**Example: sRA EIAuxEnable**

| Protocol | Example                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}EIAuxEnable{SPC}1<ETX>`                               |
| CoLa A   | `02 73 52 41 20 45 49 41 75 78 45 6E 61 62 6C 65 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 11 73 52 41 20 45 49 41 75 78 45 6E 61 62 6C 65 20 01 00` |

### Read Parameter [sRN EIDHCPFallback]

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN EIDHCPFallback**

| Telegram part | Description    | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------- | -------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Read           | String   | 3      |                    | `sRN`            | `73 52 4E`                                  |
| Command       | EIDHCPFallback | String   | 14     |                    | `EIDHCPFallback` | `45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B` |

**Example: sRN EIDHCPFallback**

| Protocol | Example                                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}EIDHCPFallback<ETX>`                                     |
| CoLa A   | `<STX>sRN EIDHCPFallback<ETX>`                                         |
| CoLa A   | `sRN EIDHCPFallback`                                                               |
| CoLa A   | `02 73 52 4E 20 45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 12 73 52 4E 20 45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B 70` |
| CoLa B   | `73 52 4E 20 45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B`                            |

**Example: sRA EIDHCPFallback**

| Protocol | Example                                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}EIDHCPFallback{SPC}0<ETX>`                                     |
| CoLa A   | `02 73 52 41 20 45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B 20 30 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 14 73 52 41 20 45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B 20 00 5F` |

### Read Parameter [sRN ImuDataEnable]

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN ImuDataEnable**

| Telegram part | Description   | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |
| ------------- | ------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- |
| Command type  | Read          | String   | 3      |                    | `sRN`           | `73 52 4E`                               |
| Command       | ImuDataEnable | String   | 13     |                    | `ImuDataEnable` | `49 6D 75 44 61 74 61 45 6E 61 62 6C 65` |

**Example: sRN ImuDataEnable**

| Protocol | Example                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRN{SPC}ImuDataEnable<ETX>`                                   |
| CoLa A   | `<STX>sRN ImuDataEnable<ETX>`                                       |
| CoLa A   | `sRN ImuDataEnable`                                                             |
| CoLa A   | `02 73 52 4E 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 11 73 52 4E 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 0F` |
| CoLa B   | `73 52 4E 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65`                            |

**Example: sRA ImuDataEnable**

| Protocol | Example                                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}ImuDataEnable{SPC}0<ETX>`                                   |
| CoLa A   | `02 73 52 41 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 20 30 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 13 73 52 41 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 20 00 20` |

### Read Parameter [sRN LMPautostartmeas]

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN LMPautostartmeas**

| Telegram part | Description      | Variable | Length | Additional details | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                                                         |
| ------------- | ---------------- | -------- | ------ | ------------------ | ----------------------------------------------- | ------------------------------------------------------------------------------ |
| Command type  | Read             | String   | 3      |                    | `sRN`              | `73 52 4E`                                        |
| Command       | LMPautostartmeas | String   | 16     |                    | `LMPautostartmeas` | `4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73` |

**Example: sRN LMPautostartmeas**

| Protocol | Example                                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}LMPautostartmeas<ETX>`                                         |
| CoLa A   | `<STX>sRN LMPautostartmeas<ETX>`                                             |
| CoLa A   | `sRN LMPautostartmeas`                                                                   |
| CoLa A   | `02 73 52 4E 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 14 73 52 4E 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 6B` |
| CoLa B   | `73 52 4E 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73`                            |

**Example: sRA LMPautostartmeas**

| Protocol | Example                                                                                                                     |
| -------- | --------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}LMPautostartmeas{SPC}1<ETX>`                                         |
| CoLa A   | `02 73 52 41 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 16 73 52 41 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 20 01 45` |

### Read Parameter [sRN MCSenseLevel]

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN MCSenseLevel**

| Telegram part | Description  | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |
| ------------- | ------------ | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ |
| Command type  | Read         | String   | 3      |                    | `sRN`          | `73 52 4E`                            |
| Command       | MCSenseLevel | String   | 12     |                    | `MCSenseLevel` | `4D 43 53 65 6E 73 65 4C 65 76 65 6C` |

**Example: sRN MCSenseLevel**

| Protocol | Example                                                                                                   |
| -------- | --------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}MCSenseLevel<ETX>`                                 |
| CoLa A   | `<STX>sRN MCSenseLevel<ETX>`                                     |
| CoLa A   | `sRN MCSenseLevel`                                                           |
| CoLa A   | `02 73 52 4E 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 10 73 52 4E 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 59` |
| CoLa B   | `73 52 4E 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C`                            |

**Example: sRA MCSenseLevel**

| Protocol | Example                                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}MCSenseLevel{SPC}0<ETX>`                                 |
| CoLa A   | `02 73 52 41 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 20 30 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 12 73 52 41 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 20 00 76` |

## Measurement Output Telegram

### Configure Scan Output Angles [sWN LMPoutputRange]

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

| Protocol | Example                                                                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWN{SPC}LMPoutputRange{SPC}1{SPC}1388{SPC}FFF24460{SPC}DBBA0<ETX>`                                            |
| CoLa A   | `sWN LMPoutputRange 1 1388 FFF24460 DBBA0`                                                                                      |
| CoLa A   | `02 73 57 4E 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 20 31 20 31 33 38 38 20 46 46 46 32 34 34 36 30 20 44 42 42 41 30 03` |
| CoLa B   | `02 02 02 02 00 00 00 21 73 57 4E 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 20 00 01 00 00 13 88 FF F2 44 60 00 0D BB A0 DE` |
| CoLa B   | `73 57 4E 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 20 00 01 00 00 13 88 FF F2 44 60 00 0D BB A0`                            |

**Telegram structure: sWA LMPoutputRange**

| Telegram part | Description    | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------- | -------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Answer         | String   | 3      |                    | `sWA`            | `73 57 41`                                  |
| Command       | LMPoutputRange | String   | 14     |                    | `LMPoutputRange` | `4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65` |

**Example: sWA LMPoutputRange**

| Protocol | Example                                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWA{SPC}LMPoutputRange<ETX>`                                        |
| CoLa A   | `02 73 57 41 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 13 73 57 41 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 20 74` |

### Read Scan Output Angles [sRN LMPoutputRange]

Read the active output range. The example shows 0.5 degree angular resolution and an output range of -180 to +180 degrees.

**Telegram structure: sRN LMPoutputRange**

| Telegram part | Description    | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------- | -------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Read           | String   | 3      |                    | `sRN`            | `73 52 4E`                                  |
| Command       | LMPoutputRange | String   | 14     |                    | `LMPoutputRange` | `4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65` |

**Example: sRN LMPoutputRange**

| Protocol | Example                                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}LMPoutputRange<ETX>`                                     |
| CoLa A   | `<STX>sRN LMPoutputRange<ETX>`                                         |
| CoLa A   | `sRN LMPoutputRange`                                                               |
| CoLa A   | `02 73 52 4E 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 12 73 52 4E 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 5E` |
| CoLa B   | `73 52 4E 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65`                            |

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

| Protocol | Example                                                                                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}LMPoutputRange{SPC}1{SPC}1388{SPC}FFE488C0{SPC}1B7740<ETX>`                                              |
| CoLa A   | `02 73 52 41 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 20 31 20 31 33 38 38 20 46 46 45 34 38 38 43 30 20 31 42 37 37 34 30 03` |
| CoLa B   | `02 02 02 02 00 00 00 21 73 52 41 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 20 00 01 00 00 13 88 FF E4 88 C0 00 1B 77 40 94`    |

### Set Scan Data Enable [sWN ScanDataEnable]

Enables/ Disables streaming data output

**Telegram structure: sWN ScanDataEnable**

| Telegram part | Description                              | Variable | Length | Additional details | Values CoLa A (ASCII)                                | Values CoLa B (Binary)                                                   |     |
| ------------- | ---------------------------------------- | -------- | ------ | ------------------ | ---------------------------------------------------- | ------------------------------------------------------------------------ | --- |
| Command type  | Write                                    | String   | 3      |                    | `sWN`                   | `73 57 4E`                                  |     |
| Command       | Enables/ Disables streaming data output. | String   | 14     |                    | `ScanDataEnable`        | `53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65` |     |
| Data          |                                          | Bool     | 1      | Off:<br>On:        | `0d (00h)<br>+1d (01h)` | `00 ... 01`                                 |     |

**Example: sWN ScanDataEnable**

| Protocol | Example                                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sWN{SPC}ScanDataEnable{SPC}0<ETX>`                                     |
| CoLa A   | `sWN ScanDataEnable 0`                                                                   |
| CoLa A   | `02 73 57 4E 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65 20 30 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 14 73 57 4E 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65 20 00 44` |
| CoLa B   | `73 57 4E 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65 20 00`                            |

**Telegram structure: sWA ScanDataEnable**

| Telegram part | Description                              | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |     |
| ------------- | ---------------------------------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ | --- |
| Command type  | Answer                                   | String   | 3      |                    | `sWA`            | `73 57 41`                                  |     |
| Command       | Enables/ Disables streaming data output. | String   | 14     |                    | `ScanDataEnable` | `53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65` |     |

**Example: sWA ScanDataEnable**

| Protocol | Example                                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWA{SPC}ScanDataEnable<ETX>`                                        |
| CoLa A   | `02 73 57 41 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 13 73 57 41 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65 20 4B` |

### Set Streaming Ethernet Settings [sWN ScanDataEthSettings]

Ethernet settings for the scan data streaming functionality of the device

**Telegram structure: sWN ScanDataEthSettings**

| Telegram part | Description                                     | Variable | Length | Additional details | Values CoLa A (ASCII)                                                                                        | Values CoLa B (Binary)                                                                  |     |
| ------------- | ----------------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- | --- |
| Command type  | Write                                           | String   | 3      |                    | `sWN`                                                                           | `73 57 4E`                                                 |     |
| Command       | String                                          | String   | 19     |                    | `ScanDataEthSettings`                                                           | `53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |     |
| Protocol      | Transport protocol for streaming data           | Enum_8   | 1      | UDP (fix):         | `+1d (01h)`                                                                     | `01`                                                       |     |
| IPAddress     | IP address of the destination for data receiver | Array    | 4      |                    | `0 …+255d (00…FF)<br>0 …+255d (00..FF)<br>0 …+255d (00…FF)<br>0 …+255d (00…FF)` | `00 … FF<br>00 … FF<br>00 … FF<br>00 … FF`                 |     |
| Port          | Port destination of the data reseiver           | Uint_16  | 2      |                    | `0 .. +65535d(00 00…FF FF)`                                                     | `00 00 … FF FF`                                            |     |

Example: sWN ScanDataEthSettings +1 +192 +168 +0 +100 +2115

Protocol is set to UDP (1), IPAddress (192.168.0.100), Port (2115)

**Example: sWN ScanDataEthSettings**

| Protocol | Example                                                                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWN{SPC}ScanDataEthSettings{SPC}1{SPC}C0{SPC}A8{SPC}0{SPC}64{SPC}843<ETX>`                                    |
| CoLa A   | `sWN ScanDataEthSettings 1 C0 A8 0 64 843`                                                                                      |
| CoLa A   | `02 73 57 4E 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 31 20 43 30 20 41 38 20 30 20 36 34 20 38 34 33 03` |
| CoLa B   | `02 02 02 02 00 00 00 1F 73 57 4E 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 01 C0 A8 00 64 08 43 5F`       |
| CoLa B   | `73 57 4E 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 01 C0 A8 00 64 08 43`                                  |

**Telegram structure: sWA ScanDataEthSettings**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |     |
| ------------- | ----------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type  | Answer      | String   | 3      |                    | `sWA`                 | `73 57 41`                                                 |     |
| Command       | String      | String   | 19     |                    | `ScanDataEthSettings` | `53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |     |

**Example: sWA ScanDataEthSettings**

| Protocol | Example                                                                                                                           |
| -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sWA{SPC}ScanDataEthSettings<ETX>`                                                  |
| CoLa A   | `02 73 57 41 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 18 73 57 41 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 16` |

### Read Streaming Ethernet Settings [sRN ScanDataEthSettings]

Read ethernet settings for the scan data streaming functionality of the device.

**Telegram structure: sRN ScanDataEthSettings**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |     |
| ------------- | ----------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type  | Read        | String   | 3      |                    | `sRN`                 | `73 52 4E`                                                 |     |
| Command       | String      | String   | 19     |                    | `ScanDataEthSettings` | `53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |     |

**Example: sRN ScanDataEthSettings**

| Protocol | Example                                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRN{SPC}ScanDataEthSettings<ETX>`                                               |
| CoLa A   | `<STX>sRN ScanDataEthSettings<ETX>`                                                   |
| CoLa A   | `sRN ScanDataEthSettings`                                                                         |
| CoLa A   | `02 73 52 4E 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 17 73 52 4E 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 3C` |
| CoLa B   | `73 52 4E 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73`                            |

**Telegram structure: sRA ScanDataEthSettings**

| Telegram part | Description                                     | Variable | Length | Additional details | Values CoLa A (ASCII)                                                                                        | Values CoLa B (Binary)                                                                  |     |
| ------------- | ----------------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- | --- |
| Command type  | Answer                                          | String   | 3      |                    | `sRA`                                                                           | `73 52 41`                                                 |     |
| Command       | String                                          | String   | 19     |                    | `ScanDataEthSettings`                                                           | `53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |     |
| Protocol      | Transport protocol for streaming data           | Enum_8   | 1      | UDP:<br>TCP:       | `+1d (01h)<br>+2d (02h)`                                                        | `01<br>02`                                                 |     |
| IPAddress     | IP address of the destination for data receiver | Array    | 4      |                    | `0 …+255d (00…FF)<br>0 …+255d (00..FF)<br>0 …+255d (00…FF)<br>0 …+255d (00…FF)` | `00 … FF<br>00 … FF<br>00 … FF<br>00 … FF`                 |     |
| Port          | Port destination of the data receiver           | Uint_16  | 2      |                    | `0 .. +65535d(00 00…FF FF)`                                                     | `00 00 … FF FF`                                            |     |

Protocol is set to UDP (1), IPAddress (192.168.0.100), Port (2115)

**Example: sRA ScanDataEthSettings**

| Protocol | Example                                                                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}ScanDataEthSettings{SPC}1{SPC}C0{SPC}A8{SPC}0{SPC}64{SPC}843<ETX>`                                    |
| CoLa A   | `02 73 52 41 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 31 20 43 30 20 41 38 20 30 20 36 34 20 38 34 33 03` |
| CoLa B   | `02 02 02 02 00 00 00 1F 73 52 41 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 01 C0 A8 00 64 08 43 55`       |

### Set IMU Data Enable [sWN ImuDataEnable]

Enables/ Disables streaming IMU data output.

**Telegram structure: sWN ImuDataEnable**

| Telegram part   | Description                    | Variable | Length | Additional details  | Values CoLa A (ASCII)                                | Values CoLa B (Binary)                                                |     |
| --------------- | ------------------------------ | -------- | ------ | ------------------- | ---------------------------------------------------- | --------------------------------------------------------------------- | --- |
| Command type    | Write                          | String   | 3      |                     | `sWN`                   | `73 57 4E`                               |     |
| Command         | Set streaming IMU data output. | String   | 13     |                     | `ImuDataEnable`         | `49 6D 75 44 61 74 61 45 6E 61 62 6C 65` |     |
| IMU data stream | Enable/ disable                | Bool     | 1      | Disable:<br>Enable: | `0d (00h)<br>+1d (01h)` | `00 ... 01`                              |     |

**Example: sWN ImuDataEnable**

| Protocol | Example                                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWN{SPC}ImuDataEnable{SPC}0<ETX>`                                   |
| CoLa A   | `sWN ImuDataEnable 0`                                                                 |
| CoLa A   | `02 73 57 4E 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 20 30 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 13 73 57 4E 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 20 00 2A` |
| CoLa B   | `73 57 4E 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 20 00`                            |

**Telegram structure: sWA ImuDataEnable**

| Telegram part | Description                    | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |     |
| ------------- | ------------------------------ | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- | --- |
| Command type  | Answer                         | String   | 3      |                    | `sWA`           | `73 57 41`                               |     |
| Command       | Set streaming IMU data output. | String   | 13     |                    | `ImuDataEnable` | `49 6D 75 44 61 74 61 45 6E 61 62 6C 65` |     |

**Example: sWA ImuDataEnable**

| Protocol | Example                                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sWA{SPC}ImuDataEnable<ETX>`                                      |
| CoLa A   | `02 73 57 41 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 12 73 57 41 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 20 25` |

### Set IMU Data Streaming Ethernet Settings [sWN ImuDataEthSettings]

Ethernet settings for the IMU data streaming functionality of the device

**Telegram structure: sWN ImuDataEthSettings**

| Telegram part | Description                                         | Variable | Length | Additional details | Values CoLa A (ASCII)                                                                                        | Values CoLa B (Binary)                                                               |     |
| ------------- | --------------------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | --- |
| Command type  | Write                                               | String   | 3      |                    | `sWN`                                                                           | `73 57 4E`                                              |     |
| Command       | Set IMU data streaming ethernet settings            | String   | 18     |                    | `ImuDataEthSettings`                                                            | `49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |     |
| Protocol      | Transport protocol for streaming IMU data           | Enum_8   | 1      | UDP:               | `+1d (01h)`                                                                     | `01`                                                    |     |
| IP address    | IP address of the destination for IMU data receiver | Array    | 4      |                    | `0 …+255d (00…FF)<br>0 …+255d (00..FF)<br>0 …+255d (00…FF)<br>0 …+255d (00…FF)` | `00 … FF<br>00 … FF<br>00 … FF<br>00 … FF`              |     |
| Port          | Port destination of the IMU data reseiver           | Uint_16  | 2      |                    | `0 .. +65535d(00 00…FF FF)`                                                     | `00 00 … FF FF`                                         |     |

Example: sWN ImuDataEthSettings +1 +192 +168 +0 +100 +7503

Protocol is set to UPD (1), IPAddress (192.168.0.100), Port (7503)

**Example: sWN ImuDataEthSettings**

| Protocol | Example                                                                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWN{SPC}ImuDataEthSettings{SPC}1{SPC}C0{SPC}A8{SPC}0{SPC}64{SPC}1D4F<ETX>`                                    |
| CoLa A   | `sWN ImuDataEthSettings 1 C0 A8 0 64 1D4F`                                                                                      |
| CoLa A   | `02 73 57 4E 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 31 20 43 30 20 41 38 20 30 20 36 34 20 31 44 34 46 03` |
| CoLa B   | `02 02 02 02 00 00 00 1E 73 57 4E 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 01 C0 A8 00 64 1D 4F 28`          |
| CoLa B   | `73 57 4E 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 01 C0 A8 00 64 1D 4F`                                     |

**Telegram structure: sWA ImuDataEthSettings**

| Telegram part | Description                              | Variable | Length | Additional details | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                                               |     |
| ------------- | ---------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------ | --- |
| Command type  | Answer                                   | String   | 3      |                    | `sWA`                | `73 57 41`                                              |     |
| Command       | Set IMU data streaming ethernet settings | String   | 18     |                    | `ImuDataEthSettings` | `49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |     |

**Example: sWA ImuDataEthSettings**

| Protocol | Example                                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWA{SPC}ImuDataEthSettings<ETX>`                                                |
| CoLa A   | `02 73 57 41 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 17 73 57 41 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 78` |

### Read Scan Data Format [sRN ScanDataFormat]

Return of the scan data format

**Telegram structure: sRN ScanDataFormat**

| Telegram part | Description               | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |     |
| ------------- | ------------------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ | --- |
| Command type  | Read                      | String   | 3      |                    | `sRN`            | `73 52 4E`                                  |     |
| Command       | Data serialization format | String   | 14     |                    | `ScanDataFormat` | `53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74` |     |

Example: sRN ScanDataFormat

Read of the data serialization format

**Example: sRN ScanDataFormat**

| Protocol | Example                                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}ScanDataFormat<ETX>`                                     |
| CoLa A   | `<STX>sRN ScanDataFormat<ETX>`                                         |
| CoLa A   | `sRN ScanDataFormat`                                                               |
| CoLa A   | `02 73 52 4E 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 12 73 52 4E 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 63` |
| CoLa B   | `73 52 4E 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74`                            |

**Telegram structure: sRA ScanDataFormat**

| Telegram part | Description               | Variable | Length | Additional details                                   | Values CoLa A (ASCII)                               | Values CoLa B (Binary)                                                   |     |
| ------------- | ------------------------- | -------- | ------ | ---------------------------------------------------- | --------------------------------------------------- | ------------------------------------------------------------------------ | --- |
| Command type  | Answer                    | String   | 3      |                                                      | `sRA`                  | `73 52 41`                                  |     |
| Command       | Data serialization format | String   | 14     |                                                      | `ScanDataFormat`       | `53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74` |     |
| Data          |                           | Enum_8   | 1      | MSGPACK:<br>Compact:<br>LMDscandata:<br>Native ROS2: | `1h<br>2h<br>3h<br>4h` | `01<br>02<br>03<br>04`                      |     |

Scan data format is set to Compact = 2

**Example: sRA ScanDataFormat**

| Protocol | Example                                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}ScanDataFormat{SPC}2<ETX>`                                     |
| CoLa A   | `02 73 52 41 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 20 32 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 14 73 52 41 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 20 02 4E` |

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

**Example: sWN ScanDataFormat**

| Protocol | Example                                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sWN{SPC}ScanDataFormat{SPC}2<ETX>`                                     |
| CoLa A   | `sWN ScanDataFormat 2`                                                                   |
| CoLa A   | `02 73 57 4E 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 20 32 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 14 73 57 4E 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 20 02 44` |
| CoLa B   | `73 57 4E 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 20 02`                            |

**Telegram structure: sWA ScanDataFormat**

| Telegram part | Description               | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |     |
| ------------- | ------------------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ | --- |
| Command type  | Answer                    | String   | 3      |                    | `sWA`            | `73 57 41`                                  |     |
| Command       | Data serialization format | String   | 14     |                    | `ScanDataFormat` | `53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74` |     |

**Example: sWA ScanDataFormat**

| Protocol | Example                                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWA{SPC}ScanDataFormat<ETX>`                                        |
| CoLa A   | `02 73 57 41 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 13 73 57 41 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 20 49` |

### Read Parameter [sRN ScanDataEnable]

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN ScanDataEnable**

| Telegram part | Description    | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------- | -------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Read           | String   | 3      |                    | `sRN`            | `73 52 4E`                                  |
| Command       | ScanDataEnable | String   | 14     |                    | `ScanDataEnable` | `53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65` |

**Example: sRN ScanDataEnable**

| Protocol | Example                                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}ScanDataEnable<ETX>`                                     |
| CoLa A   | `<STX>sRN ScanDataEnable<ETX>`                                         |
| CoLa A   | `sRN ScanDataEnable`                                                               |
| CoLa A   | `02 73 52 4E 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 12 73 52 4E 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65 61` |
| CoLa B   | `73 52 4E 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65`                            |

**Example: sRA ScanDataEnable**

| Protocol | Example                                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}ScanDataEnable{SPC}0<ETX>`                                     |
| CoLa A   | `02 73 52 41 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65 20 30 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 14 73 52 41 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65 20 00 4E` |

## Time Stamp

### Set Scan Configuration [sMN mCLsetscancfglist]

Enable or disable interlacing. Four shifted scans can be combined to obtain finer angular sampling. See manual pages 108-109. Requires Authorized client.

**Telegram structure: sMN mCLsetscancfglist**

| Telegram part | Description       | Variable | Length | Additional details | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                            |
| ------------- | ----------------- | -------- | ------ | ------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------- |
| Command type  | Method            | String   | 3      |                    | `sMN`               | `73 4D 4E`                                           |
| Command       | mCLsetscancfglist | String   | 17     |                    | `mCLsetscancfglist` | `6D 43 4C 73 65 74 73 63 61 6E 63 66 67 6C 69 73 74` |
| Mode          | Interlacing       | Enum_8   | 1      | Off / on           | `0 / 1`             | `00 / 01`                                            |

**Example: sMN mCLsetscancfglist**

| Protocol | Example                                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sMN{SPC}mCLsetscancfglist{SPC}1<ETX>`                                           |
| CoLa A   | `sMN mCLsetscancfglist 1`                                                                         |
| CoLa A   | `02 73 4D 4E 20 6D 43 4C 73 65 74 73 63 61 6E 63 66 67 6C 69 73 74 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 17 73 4D 4E 20 6D 43 4C 73 65 74 73 63 61 6E 63 66 67 6C 69 73 74 20 01 0E` |
| CoLa B   | `73 4D 4E 20 6D 43 4C 73 65 74 73 63 61 6E 63 66 67 6C 69 73 74 20 01`                            |

**Telegram structure: sAN mCLsetscancfglist**

| Telegram part | Description               | Variable | Length | Additional details                                                                 | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                            |
| ------------- | ------------------------- | -------- | ------ | ---------------------------------------------------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------- |
| Command type  | Answer                    | String   | 3      |                                                                                    | `sAN`               | `73 41 4E`                                           |
| Command       | mCLsetscancfglist         | String   | 17     |                                                                                    | `mCLsetscancfglist` | `6D 43 4C 73 65 74 73 63 61 6E 63 66 67 6C 69 73 74` |
| Status        | Scan configuration result | Enum_8   | 1      | 0 OK; 1 frequency; 2 resolution; 3 frequency and resolution; 4 scan field; 5 error | `0 ... 5`           | `00 ... 05`                                          |

**Example: sAN mCLsetscancfglist**

| Protocol | Example                                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sAN{SPC}mCLsetscancfglist{SPC}0<ETX>`                                           |
| CoLa A   | `02 73 41 4E 20 6D 43 4C 73 65 74 73 63 61 6E 63 66 67 6C 69 73 74 20 30 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 17 73 41 4E 20 6D 43 4C 73 65 74 73 63 61 6E 63 66 67 6C 69 73 74 20 00 03` |

### Set Time Synchronization [sWN TSCRole]

Set the device synchronization mode.

**Telegram structure: sWN TSCRole**

| Telegram part | Description        | Variable | Length | Additional details   | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                              |     |
| ------------- | ------------------ | -------- | ------ | -------------------- | ------------------------------------------ | --------------------------------------------------- | --- |
| Command type  | Write              | String   | 3      |                      | `sWN`         | `73 57 4E`             |     |
| Command       | Set timestamp role | String   | 7      |                      | `TSCRole`     | `54 53 43 52 6F 6C 65` |     |
| Status        | Timestamp role     | Uint_8   | 1      | Off:<br>NTP:<br>PTP: | `0<br>1<br>3` | `00<br>01<br>03`       |     |

**Example: sWN TSCRole**

| Protocol | Example                                                                                          |
| -------- | ------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWN{SPC}TSCRole{SPC}1<ETX>`                       |
| CoLa A   | `sWN TSCRole 1`                                                     |
| CoLa A   | `02 73 57 4E 20 54 53 43 52 6F 6C 65 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0D 73 57 4E 20 54 53 43 52 6F 6C 65 20 01 1B` |
| CoLa B   | `73 57 4E 20 54 53 43 52 6F 6C 65 20 01`                            |

**Telegram structure: sWA TSCRole**

| Telegram part | Description        | Variable | Length | Additional details | Values CoLa A (ASCII)                  | Values CoLa B (Binary)                              |     |
| ------------- | ------------------ | -------- | ------ | ------------------ | -------------------------------------- | --------------------------------------------------- | --- |
| Command type  | Answer             | String   | 3      |                    | `sWA`     | `73 57 41`             |     |
| Command       | Set timestamp role | String   | 7      |                    | `TSCRole` | `54 53 43 52 6F 6C 65` |     |

**Example: sWA TSCRole**

| Protocol | Example                                                                                       |
| -------- | --------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sWA{SPC}TSCRole<ETX>`                          |
| CoLa A   | `02 73 57 41 20 54 53 43 52 6F 6C 65 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 0C 73 57 41 20 54 53 43 52 6F 6C 65 20 15` |

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

**Example: sMN LSPsetdatetime**

| Protocol | Example                                                                                                                                                                     |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sMN{SPC}LSPsetdatetime{SPC}+2026{SPC}+10{SPC}+6{SPC}+9{SPC}+25{SPC}+28{SPC}+0<ETX>`                                          |
| CoLa A   | `sMN LSPsetdatetime +2026 +10 +6 +9 +25 +28 +0`                                                                                                |
| CoLa A   | `02 73 4D 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 2B 32 30 32 36 20 2B 31 30 20 2B 36 20 2B 39 20 2B 32 35 20 2B 32 38 20 2B 30 03` |
| CoLa B   | `02 02 02 02 00 00 00 1E 73 4D 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 07 EA 0A 06 09 19 1C 00 00 00 00 B1`                         |
| CoLa B   | `73 4D 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 07 EA 0A 06 09 19 1C 00 00 00 00`                                                    |

**Telegram structure: sAN LSPsetdatetime**

| Telegram part | Description    | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |     |
| ------------- | -------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ | --- |
| Command type  | Answer         | String   | 3      |                    | `sAN`            | `73 41 4E`                                  |     |
| Command       | Set time stamp | String   | 14     |                    | `LSPsetdatetime` | `4C 53 50 73 65 74 64 61 74 65 74 69 6D 65` |     |
| Status code   | Code number    | Enum_8   | 1      | Success:           | `0`              | `00`                                        |     |

**Example: sAN LSPsetdatetime**

| Protocol | Example                                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sAN{SPC}LSPsetdatetime{SPC}0<ETX>`                                     |
| CoLa A   | `02 73 41 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 30 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 14 73 41 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 00 50` |

### Read Device Time [sRN DeviceTime]

Read sensor system time in milliseconds. Firmware 2.4.4.0R returns an 8-byte value. Values are time-dependent.

**Telegram structure: sRN DeviceTime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                     | Values CoLa B (Binary)                                       |
| ------------- | ----------- | -------- | ------ | ------------------ | ----------------------------------------- | ------------------------------------------------------------ |
| Command type  | Read        | String   | 3      |                    | `sRN`        | `73 52 4E`                      |
| Command       | DeviceTime  | String   | 10     |                    | `DeviceTime` | `44 65 76 69 63 65 54 69 6D 65` |

**Example: sRN DeviceTime**

| Protocol | Example                                                                                             |
| -------- | --------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}DeviceTime<ETX>`                             |
| CoLa A   | `<STX>sRN DeviceTime<ETX>`                                 |
| CoLa A   | `sRN DeviceTime`                                                       |
| CoLa A   | `02 73 52 4E 20 44 65 76 69 63 65 54 69 6D 65 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0E 73 52 4E 20 44 65 76 69 63 65 54 69 6D 65 42` |
| CoLa B   | `73 52 4E 20 44 65 76 69 63 65 54 69 6D 65`                            |

**Telegram structure: sRA DeviceTime**

| Telegram part | Description                        | Variable | Length | Additional details | Values CoLa A (ASCII)                                 | Values CoLa B (Binary)                                                             |
| ------------- | ---------------------------------- | -------- | ------ | ------------------ | ----------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Command type  | Answer                             | String   | 3      |                    | `sRA`                    | `73 52 41`                                            |
| Command       | DeviceTime                         | String   | 10     |                    | `DeviceTime`             | `44 65 76 69 63 65 54 69 6D 65`                       |
| Device time   | Sensor system time in milliseconds | Uint_64  | 8      | Firmware 2.4.4.0R  | `0 ... FFFFFFFFFFFFFFFF` | `00 00 00 00 00 00 00 00 ... FF FF FF FF FF FF FF FF` |

**Example: sRA DeviceTime**

| Protocol | Example                                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}DeviceTime{SPC}77F7B<ETX>`                                              |
| CoLa A   | `02 73 52 41 20 44 65 76 69 63 65 54 69 6D 65 20 37 37 46 37 42 03`                               |
| CoLa B   | `02 02 02 02 00 00 00 17 73 52 41 20 44 65 76 69 63 65 54 69 6D 65 20 00 00 00 00 00 07 7F 7B 6E` |

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

**Example: sWN TSCTCSrvAddr**

| Protocol | Example                                                                                                                  |
| -------- | ------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWN{SPC}TSCTCSrvAddr{SPC}C0{SPC}A8{SPC}00{SPC}0B<ETX>`                    |
| CoLa A   | `sWN TSCTCSrvAddr C0 A8 00 0B`                                                              |
| CoLa A   | `02 73 57 4E 20 54 53 43 54 43 53 72 76 41 64 64 72 20 43 30 20 41 38 20 30 30 20 30 42 03` |
| CoLa B   | `02 02 02 02 00 00 00 15 73 57 4E 20 54 53 43 54 43 53 72 76 41 64 64 72 20 C0 A8 00 0B 3E` |
| CoLa B   | `73 57 4E 20 54 53 43 54 43 53 72 76 41 64 64 72 20 C0 A8 00 0B`                            |

**Telegram structure: sWA TSCTCSrvAddr**

| Telegram part | Description                | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |     |
| ------------- | -------------------------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ | --- |
| Command type  | Answer                     | String   | 3      |                    | `sWA`          | `73 57 41`                            |     |
| Command       | Set time server IP address | String   | 12     |                    | `TSCTCSrvAddr` | `54 53 43 54 43 53 72 76 41 64 64 72` |     |

**Example: sWA TSCTCSrvAddr**

| Protocol | Example                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWA{SPC}TSCTCSrvAddr<ETX>`                                    |
| CoLa A   | `02 73 57 41 20 54 53 43 54 43 53 72 76 41 64 64 72 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 11 73 57 41 20 54 53 43 54 43 53 72 76 41 64 64 72 20 52` |

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

**Example: sWN TSCTCtimezone**

| Protocol | Example                                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWN{SPC}TSCTCtimezone{SPC}24<ETX>`                                  |
| CoLa A   | `sWN TSCTCtimezone 24`                                                                |
| CoLa A   | `02 73 57 4E 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 20 32 34 03`                   |
| CoLa B   | `02 02 02 02 00 00 00 13 73 57 4E 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 20 24 16` |
| CoLa B   | `73 57 4E 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 20 24`                            |

**Telegram structure: sWA TSCTCtimezone**

| Telegram part | Description   | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |     |
| ------------- | ------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- | --- |
| Command type  | Answer        | String   | 3      |                    | `sWA`           | `73 57 41`                               |     |
| Command       | Set time zone | String   | 13     |                    | `TSCTCtimezone` | `54 53 43 54 43 74 69 6D 65 7A 6F 6E 65` |     |

**Example: sWA TSCTCtimezone**

| Protocol | Example                                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sWA{SPC}TSCTCtimezone<ETX>`                                      |
| CoLa A   | `02 73 57 41 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 12 73 57 41 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 20 3D` |

### Set Update Time [sWN TSCTCupdatetime]

Define the time period after which the sensor will attempt to get the current system time for the TSC server.

**Telegram structure: sWN TSCTCupdatetime**

| Telegram part                  | Description                        | Variable | Length | Additional details | Values CoLa A (ASCII)                                    | Values CoLa B (Binary)                                                      |     |
| ------------------------------ | ---------------------------------- | -------- | ------ | ------------------ | -------------------------------------------------------- | --------------------------------------------------------------------------- | --- |
| Command type                   | Write                              | String   | 3      |                    | `sWN`                       | `73 57 4E`                                     |     |
| Command                        | Set update time of synchronization | String   | 15     |                    | `TSCTCupdatetime`           | `54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65` |     |
| Update time of synchronization | Set values in seconds              | Uint_32  | 4      |                    | `+1d … +3600d(01h … 0E10h)` | `00 00 00 00 … 00 00 0E 10`                    |     |

**Example: sWN TSCTCupdatetime**

| Protocol | Example                                                                                                                           |
| -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sWN{SPC}TSCTCupdatetime{SPC}+600<ETX>`                                             |
| CoLa A   | `sWN TSCTCupdatetime +600`                                                                           |
| CoLa A   | `02 73 57 4E 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 20 2B 36 30 30 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 18 73 57 4E 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 20 00 00 02 58 67` |
| CoLa B   | `73 57 4E 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 20 00 00 02 58`                            |

**Telegram structure: sWA TSCTCupdatetime**

| Telegram part | Description                        | Variable | Length | Additional details | Values CoLa A (ASCII)                          | Values CoLa B (Binary)                                                      |     |
| ------------- | ---------------------------------- | -------- | ------ | ------------------ | ---------------------------------------------- | --------------------------------------------------------------------------- | --- |
| Command type  | Answer                             | String   | 3      |                    | `sWA`             | `73 57 41`                                     |     |
| Command       | Set update time of synchronization | String   | 15     |                    | `TSCTCupdatetime` | `54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65` |     |

**Example: sWA TSCTCupdatetime**

| Protocol | Example                                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sWA{SPC}TSCTCupdatetime<ETX>`                                          |
| CoLa A   | `02 73 57 41 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 14 73 57 41 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 20 32` |

### Read Parameter [sRN TSCRole]

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN TSCRole**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                  | Values CoLa B (Binary)                              |
| ------------- | ----------- | -------- | ------ | ------------------ | -------------------------------------- | --------------------------------------------------- |
| Command type  | Read        | String   | 3      |                    | `sRN`     | `73 52 4E`             |
| Command       | TSCRole     | String   | 7      |                    | `TSCRole` | `54 53 43 52 6F 6C 65` |

**Example: sRN TSCRole**

| Protocol | Example                                                                                    |
| -------- | ------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRN{SPC}TSCRole<ETX>`                       |
| CoLa A   | `<STX>sRN TSCRole<ETX>`                           |
| CoLa A   | `sRN TSCRole`                                                 |
| CoLa A   | `02 73 52 4E 20 54 53 43 52 6F 6C 65 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0B 73 52 4E 20 54 53 43 52 6F 6C 65 3F` |
| CoLa B   | `73 52 4E 20 54 53 43 52 6F 6C 65`                            |

**Example: sRA TSCRole**

| Protocol | Example                                                                                          |
| -------- | ------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}TSCRole{SPC}0<ETX>`                       |
| CoLa A   | `02 73 52 41 20 54 53 43 52 6F 6C 65 20 30 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0D 73 52 41 20 54 53 43 52 6F 6C 65 20 00 10` |

### Read Parameter [sRN TSCTCSrvAddr]

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN TSCTCSrvAddr**

| Telegram part | Description  | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |
| ------------- | ------------ | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ |
| Command type  | Read         | String   | 3      |                    | `sRN`          | `73 52 4E`                            |
| Command       | TSCTCSrvAddr | String   | 12     |                    | `TSCTCSrvAddr` | `54 53 43 54 43 53 72 76 41 64 64 72` |

**Example: sRN TSCTCSrvAddr**

| Protocol | Example                                                                                                   |
| -------- | --------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}TSCTCSrvAddr<ETX>`                                 |
| CoLa A   | `<STX>sRN TSCTCSrvAddr<ETX>`                                     |
| CoLa A   | `sRN TSCTCSrvAddr`                                                           |
| CoLa A   | `02 73 52 4E 20 54 53 43 54 43 53 72 76 41 64 64 72 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 10 73 52 4E 20 54 53 43 54 43 53 72 76 41 64 64 72 78` |
| CoLa B   | `73 52 4E 20 54 53 43 54 43 53 72 76 41 64 64 72`                            |

**Example: sRA TSCTCSrvAddr**

| Protocol | Example                                                                                                                  |
| -------- | ------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}TSCTCSrvAddr{SPC}C0{SPC}A8{SPC}0{SPC}B<ETX>`                      |
| CoLa A   | `02 73 52 41 20 54 53 43 54 43 53 72 76 41 64 64 72 20 43 30 20 41 38 20 30 20 42 03`       |
| CoLa B   | `02 02 02 02 00 00 00 15 73 52 41 20 54 53 43 54 43 53 72 76 41 64 64 72 20 C0 A8 00 0B 34` |

### Read Parameter [sRN TSCTCtimezone]

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN TSCTCtimezone**

| Telegram part | Description   | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |
| ------------- | ------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- |
| Command type  | Read          | String   | 3      |                    | `sRN`           | `73 52 4E`                               |
| Command       | TSCTCtimezone | String   | 13     |                    | `TSCTCtimezone` | `54 53 43 54 43 74 69 6D 65 7A 6F 6E 65` |

**Example: sRN TSCTCtimezone**

| Protocol | Example                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRN{SPC}TSCTCtimezone<ETX>`                                   |
| CoLa A   | `<STX>sRN TSCTCtimezone<ETX>`                                       |
| CoLa A   | `sRN TSCTCtimezone`                                                             |
| CoLa A   | `02 73 52 4E 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 11 73 52 4E 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 17` |
| CoLa B   | `73 52 4E 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65`                            |

**Example: sRA TSCTCtimezone**

| Protocol | Example                                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}TSCTCtimezone{SPC}24<ETX>`                                  |
| CoLa A   | `02 73 52 41 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 20 32 34 03`                   |
| CoLa B   | `02 02 02 02 00 00 00 13 73 52 41 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 20 24 1C` |

### Read Parameter [sRN TSCTCupdatetime]

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN TSCTCupdatetime**

| Telegram part | Description     | Variable | Length | Additional details | Values CoLa A (ASCII)                          | Values CoLa B (Binary)                                                      |
| ------------- | --------------- | -------- | ------ | ------------------ | ---------------------------------------------- | --------------------------------------------------------------------------- |
| Command type  | Read            | String   | 3      |                    | `sRN`             | `73 52 4E`                                     |
| Command       | TSCTCupdatetime | String   | 15     |                    | `TSCTCupdatetime` | `54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65` |

**Example: sRN TSCTCupdatetime**

| Protocol | Example                                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRN{SPC}TSCTCupdatetime<ETX>`                                       |
| CoLa A   | `<STX>sRN TSCTCupdatetime<ETX>`                                           |
| CoLa A   | `sRN TSCTCupdatetime`                                                                 |
| CoLa A   | `02 73 52 4E 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 13 73 52 4E 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 18` |
| CoLa B   | `73 52 4E 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65`                            |

**Example: sRA TSCTCupdatetime**

| Protocol | Example                                                                                                                           |
| -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}TSCTCupdatetime{SPC}258<ETX>`                                              |
| CoLa A   | `02 73 52 41 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 20 32 35 38 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 18 73 52 41 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 20 00 00 02 58 6D` |

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

| Protocol | Example                                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWN{SPC}LFPparticle{SPC}1{SPC}+500<ETX>`                            |
| CoLa A   | `sWN LFPparticle 1 +500`                                                              |
| CoLa A   | `02 73 57 4E 20 4C 46 50 70 61 72 74 69 63 6C 65 20 31 20 2B 35 30 30 03`             |
| CoLa B   | `02 02 02 02 00 00 00 13 73 57 4E 20 4C 46 50 70 61 72 74 69 63 6C 65 20 01 01 F4 D0` |
| CoLa B   | `73 57 4E 20 4C 46 50 70 61 72 74 69 63 6C 65 20 01 01 F4`                            |

**Telegram structure: sWA LFPparticle**

| Telegram part | Description         | Variable | Length | Sensor | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |     |
| ------------- | ------------------- | -------- | ------ | ------ | ------------------------------------------ | --------------------------------------------------------------- | --- |
| Command type  | Answer              | String   | 3      |        | `sWA`         | `73 57 41`                         |     |
| Command       | Set particle filter | String   | 11     |        | `LFPparticle` | `4C 46 50 70 61 72 74 69 63 6C 65` |     |

**Example: sWA LFPparticle**

| Protocol | Example                                                                                                   |
| -------- | --------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sWA{SPC}LFPparticle<ETX>`                                  |
| CoLa A   | `02 73 57 41 20 4C 46 50 70 61 72 74 69 63 6C 65 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 10 73 57 41 20 4C 46 50 70 61 72 74 69 63 6C 65 20 2B` |

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

| Protocol | Example                                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sWN{SPC}FREchoFilter{SPC}1<ETX>`                                 |
| CoLa A   | `sWN FREchoFilter 1`                                                               |
| CoLa A   | `02 73 57 4E 20 46 52 45 63 68 6F 46 69 6C 74 65 72 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 12 73 57 4E 20 46 52 45 63 68 6F 46 69 6C 74 65 72 20 01 7E` |
| CoLa B   | `73 57 4E 20 46 52 45 63 68 6F 46 69 6C 74 65 72 20 01`                            |

**Telegram structure: sWA FREchoFilter**

| Telegram part | Description     | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |     |
| ------------- | --------------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ | --- |
| Command type  | Answer          | String   | 3      |                    | `sWA`          | `73 57 41`                            |     |
| Command       | Set echo filter | String   | 12     |                    | `FREchoFilter` | `46 52 45 63 68 6F 46 69 6C 74 65 72` |     |

**Example: sWA FREchoFilter**

| Protocol | Example                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWA{SPC}FREchoFilter<ETX>`                                    |
| CoLa A   | `02 73 57 41 20 46 52 45 63 68 6F 46 69 6C 74 65 72 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 11 73 57 41 20 46 52 45 63 68 6F 46 69 6C 74 65 72 20 70` |

### Set Sensitivity Fog Filter [sWN MCSenseLevel]

Filter out disturbances in the meausurement data caused by fog or steam.

**Telegram structure: sWN MCSenseLevel**

| Telegram part     | Description                                  | Variable | Length | Additional details              | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |     |
| ----------------- | -------------------------------------------- | -------- | ------ | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------ | --- |
| Command type      | Write                                        | String   | 3      |                                 | `sWN`          | `73 57 4E`                            |     |
| Command           | Sense level                                  | String   | 12     |                                 | `MCSenseLevel` | `4D 43 53 65 6E 73 65 4C 65 76 65 6C` |     |
| Sensitivity level | Enable or disable fog filter and Sense Level | Uint_8   | 1      | Fog Filter off<br>Fog Filter on | `0<br>1`       | `00<br>01`                            |     |

**Example: sWN MCSenseLevel**

| Protocol | Example                                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sWN{SPC}MCSenseLevel{SPC}0<ETX>`                                 |
| CoLa A   | `sWN MCSenseLevel 0`                                                               |
| CoLa A   | `02 73 57 4E 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 20 30 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 12 73 57 4E 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 20 00 7C` |
| CoLa B   | `73 57 4E 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 20 00`                            |

**Telegram structure: sWA MCSenseLevel**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |     |
| ------------- | ----------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ | --- |
| Command type  | Answer      | String   | 3      |                    | `sWA`          | `73 57 41`                            |     |
| Command       | Sense level | String   | 12     |                    | `MCSenseLevel` | `4D 43 53 65 6E 73 65 4C 65 76 65 6C` |     |

**Example: sWA MCSenseLevel**

| Protocol | Example                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWA{SPC}MCSenseLevel<ETX>`                                    |
| CoLa A   | `02 73 57 41 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 11 73 57 41 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 20 73` |

### Set Rectangular Filter [sWN LFPcubicareafilter]

**Telegram structure: sWN LFPcubicareafilter**

| Telegram part   | Description                                                | Variable | Length | Additional details                  | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                                               |     |
| --------------- | ---------------------------------------------------------- | -------- | ------ | ----------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------ | --- |
| Command type    | Write                                                      | String   | 3      |                                     | `sWN`                | `73 57 4E`                                              |     |
| Command         | CubicAreaFilter limits a polar scan to a axisparallel cube | String   | 18     |                                     | `LFPcubicareafilter` | `4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72` |     |
| Variable data 1 | Enables/Disables the filter.                               | Bool     | 1      | Off:<br>On:                         | `0d<br>1d`           | `00<br>01`                                              |     |
| Variable Data 2 | X min<br>1/10 mm                                           | Int_32   | 4      |                                     | `-200000d…+200000d`  | `FF FF B1 E0 … 00 00 4E 20`                             |     |
| Variable Data 3 | X max<br>1/10 mm                                           | Int_32   | 4      |                                     | `-200000d…+200000d`  | `FF FF B1 E0 … 00 00 4E 20`                             |     |
| Variable Data 4 | Y min<br>1/10 mm                                           | Int_32   | 4      |                                     | `-200000d…+200000d`  | `FF FF B1 E0 … 00 00 4E 20`                             |     |
| Variable Data 5 | Y max<br>1/10 mm                                           | Int_32   | 4      |                                     | `-200000d…+200000d`  | `FF FF B1 E0 … 00 00 4E 20`                             |     |
| Variable Data 6 | Z min<br>1/10 mm                                           | Int_32   | 4      | Other values than 0 will be ignored | `0`                  | `00 00 00 00`                                           |     |
| Variable Data 7 | Z max<br>1/10 mm                                           | Int_32   | 4      | Other values than 0 will be ignored | `0`                  | `00 00 00 00`                                           |     |

**Example: sWN LFPcubicareafilter**

| Protocol | Example                                                                                                                                                                                                                                    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWN{SPC}LFPcubicareafilter{SPC}0{SPC}FFFFB1E0{SPC}4E20{SPC}FFFFB1E0{SPC}4E20{SPC}FFFFB1E0{SPC}4E20<ETX>`                                                                                    |
| CoLa A   | `sWN LFPcubicareafilter 0 FFFFB1E0 4E20 FFFFB1E0 4E20 FFFFB1E0 4E20`                                                                                                                                          |
| CoLa A   | `02 73 57 4E 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72 20 30 20 46 46 46 46 42 31 45 30 20 34 45 32 30 20 46 46 46 46 42 31 45 30 20 34 45 32 30 20 46 46 46 46 42 31 45 30 20 34 45 32 30 03` |
| CoLa B   | `02 02 02 02 00 00 00 30 73 57 4E 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72 20 00 FF FF B1 E0 00 00 4E 20 FF FF B1 E0 00 00 4E 20 FF FF B1 E0 00 00 4E 20 66`                                  |
| CoLa B   | `73 57 4E 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72 20 00 FF FF B1 E0 00 00 4E 20 FF FF B1 E0 00 00 4E 20 FF FF B1 E0 00 00 4E 20`                                                             |

**Telegram structure: sWA LFPcubicareafilter**

| Telegram part | Description                                                | Variable | Length | Additional details | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                                               |     |
| ------------- | ---------------------------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------ | --- |
| Command type  | Answer                                                     | String   | 3      |                    | `sWA`                | `73 57 41`                                              |     |
| Command       | CubicAreaFilter limits a polar scan to a axisparallel cube | String   | 18     |                    | `LFPcubicareafilter` | `4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72` |     |

**Example: sWA LFPcubicareafilter**

| Protocol | Example                                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWA{SPC}LFPcubicareafilter<ETX>`                                                |
| CoLa A   | `02 73 57 41 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 17 73 57 41 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72 20 56` |

### Set Angle Range Filter [sWN LFPangleRangeFilter]

The angle range Horizontal (theta) and vertical (phi) limits in units of 1/10000 degree.

BeamIncrement = the 'beamIncrement' which is used to subsample the beams within the selected angle range. With a 'beamIncrement' of n only every nth beam from the selected angle range is copied to the output scan, i.e. the angle resolution is reduced by factor n. If the beamIncrement is zero it is set to one.

**Telegram structure: sWN LFPangleRangeFilter**

| Telegram part   | Description                                                                          | Variable | Length | Additional details                                               | Values CoLa A (ASCII)                                                               | Values CoLa B (Binary)                                                                  |     |
| --------------- | ------------------------------------------------------------------------------------ | -------- | ------ | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type    | Write                                                                                | String   | 3      |                                                                  | `sWN`                                                  | `73 57 4E`                                                 |     |
| Command         | Horizontal (theta) and vertical (phi) limits in units of 1/10000 degree              | String   | 19     |                                                                  | `LFPangleRangeFilter`                                  | `4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72` |     |
| Variable Data 1 | Enables/Disables the filter                                                          | Bool_1   | 1      | Off:<br>On:                                                      | `+0d<br>+1d`                                           | `00<br>01`                                                 |     |
| Variable Data 2 | ThetaStart                                                                           | Int_32   | 4      | No impact on sensor setting but needs to be filled (see example) | `-1,800,000d ... +1,800,000d (FFE488C0 ... 001B7740h)` | `FF E4 88 C0 … 00 1B 77 40`                                |     |
| Variable Data 3 | ThetaStop                                                                            | Int_32   | 4      | No impact on sensor setting but needs to be filled (see example) | `-1,800,000d ... +1,800,000d (FFE488C0 ... 001B7740h)` | `FF E4 88 C0 … 00 1B 77 40`                                |     |
| Variable Data 4 | PhiStart                                                                             | Int_32   | 4      | No impact on sensor setting but needs to be filled (see example) | `-900,000d ... +900,000d (FFF24460 ... 000DBBA0h)`     | `FF F2 44 60 … 00 0D BB A0`                                |     |
| Variable Data 5 | PhiStop                                                                              | Int_32   | 4      | No impact on sensor setting but needs to be filled (see example) | `-900,000d ... +900,000d (FFF24460 ... 000DBBA0h)`     | `FF F2 44 60 … 00 0D BB A0`                                |     |
| Variable Data 6 | BeamIncrement                                                                        | UInt_16  | 2      | No impact on sensor setting but needs to be filled (see example) | `1d…+20d`                                              | `00 01 … 00 14`                                            |     |

Explanation: Enable the angle range filter and set up theta (horizontal) start -90°, theta stop +90°, phi (vertical) start -90°, phi stop +90°, beam increment 1

**Example: sWN LFPangleRangeFilter**

| Protocol | Example                                                                                                                                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sWN{SPC}LFPangleRangeFilter{SPC}0{SPC}FFF24460{SPC}DBBA0{SPC}FFF24460{SPC}DBBA0{SPC}1<ETX>`                                                                      |
| CoLa A   | `sWN LFPangleRangeFilter 0 FFF24460 DBBA0 FFF24460 DBBA0 1`                                                                                                                        |
| CoLa A   | `02 73 57 4E 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 20 30 20 46 46 46 32 34 34 36 30 20 44 42 42 41 30 20 46 46 46 32 34 34 36 30 20 44 42 42 41 30 20 31 03` |
| CoLa B   | `02 02 02 02 00 00 00 2B 73 57 4E 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 20 00 FF F2 44 60 00 0D BB A0 FF F2 44 60 00 0D BB A0 00 01 2F`                      |
| CoLa B   | `73 57 4E 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 20 00 FF F2 44 60 00 0D BB A0 FF F2 44 60 00 0D BB A0 00 01`                                                 |

**Telegram structure: sWA LFP AngleRangeFilter**

| Telegram part | Description                                                                          | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |     |
| ------------- | ------------------------------------------------------------------------------------ | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type  | Answer                                                                               | String   | 3      |                    | `sWA`                 | `73 57 41`                                                 |     |
| Command       | Horizontal (theta) and vertical (phi) limits in units of 1/10000 degree              | String   | 19     |                    | `LFPangleRangeFilter` | `4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72` |     |

**Example: sWA LFPangleRangeFilter**

| Protocol | Example                                                                                                                           |     |
| -------- | --------------------------------------------------------------------------------------------------------------------------------- | --- |
| CoLa A   | `<STX>sWA{SPC}LFPangleRangeFilter<ETX>`                                                  |     |
| CoLa A   | `02 73 57 41 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 03`                         |     |
| CoLa B   | `02 02 02 02 00 00 00 18 73 57 41 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 20 21` |     |

**Telegram structure: sWA LFPangleRangeFilter**

| Telegram part | Description        | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |
| ------------- | ------------------ | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Command type  | Answer             | String   | 3      |                    | `sWA`                 | `73 57 41`                                                 |
| Command       | Angle range filter | String   | 19     |                    | `LFPangleRangeFilter` | `4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72` |

**Example: sWA LFPangleRangeFilter**

| Protocol | Example                                                                                                                           |
| -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sWA{SPC}LFPangleRangeFilter<ETX>`                                                  |
| CoLa A   | `02 73 57 41 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 18 73 57 41 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 20 21` |

### Read Angle Range Filter [sRN LFPangleRangeFilter]

The angle range Horizontal (theta) and vertical (phi) limits in units of 1/10000 degree.

BeamIncrement = the 'beamIncrement' which is used to subsample the beams within the selected angle range. With a 'beamIncrement' of n only every nth beam from the selected angle range is copied to the output scan, i.e. the angle resolution is reduced by factor n. If the beamIncrement is zero it is set to one.

**Telegram structure: sRN LFPangleRangeFilter**

| Telegram part | Description                                                                          | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |     |
| ------------- | ------------------------------------------------------------------------------------ | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type  | Read                                                                                 | String   | 3      |                    | `sRN`                 | `73 52 4E`                                                 |     |
| Command       | Horizontal (theta) and vertical (phi) limits in units of 1/10000 degree              | String   | 19     |                    | `LFPangleRangeFilter` | `4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72` |     |

**Example: sRN LFPangleRangeFilter**

| Protocol | Example                                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRN{SPC}LFPangleRangeFilter<ETX>`                                               |
| CoLa A   | `<STX>sRN LFPangleRangeFilter<ETX>`                                                   |
| CoLa A   | `sRN LFPangleRangeFilter`                                                                         |
| CoLa A   | `02 73 52 4E 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 17 73 52 4E 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 0B` |
| CoLa B   | `73 52 4E 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72`                            |

**Telegram structure: sRA LFPangleRangeFilter**

| Telegram part   | Description                                                                          | Variable | Length | Additional details          | Values CoLa A (ASCII)                                                               | Values CoLa B (Binary)                                                                  |     |
| --------------- | ------------------------------------------------------------------------------------ | -------- | ------ | --------------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type    | Answer                                                                               | String   | 3      |                             | `sRA`                                                  | `73 52 41`                                                 |     |
| Command         | Horizontal (theta) and vertical (phi) limits in units of 1/10000 degree              | String   | 19     |                             | `LFPangleRangeFilter`                                  | `4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72` |     |
| Variable Data 1 | Enables/Disables the filter                                                          | Bool_1   | 1      | Off:<br>On:                 | `+0d<br>+1d`                                           | `00<br>01`                                                 |     |
| Variable Data 2 | ThetaStart                                                                           | Int_32   | 4      | No impact on sensor setting | `-1,800,000d ... +1,800,000d (FFE488C0 ... 001B7740h)` | `FF E4 88 C0 … 00 1B 77 40`                                |     |
| Variable Data 3 | ThetaStop                                                                            | Int_32   | 4      | No impact on sensor setting | `-1,800,000d ... +1,800,000d (FFE488C0 ... 001B7740h)` | `FF E4 88 C0 … 00 1B 77 40`                                |     |
| Variable Data 4 | PhiStart                                                                             | Int_32   | 4      | No impact on sensor setting | `-900,000d ... +900,000d (FFF24460 ... 000DBBA0h)`     | `FF F2 44 60 … 00 0D BB A0`                                |     |
| Variable Data 5 | PhiStop                                                                              | Int_32   | 4      | No impact on sensor setting | `-900,000d ... +900,000d (FFF24460 ... 000DBBA0h)`     | `FF F2 44 60 … 00 0D BB A0`                                |     |
| Variable Data 6 | BeamIncrement                                                                        | UInt_16  | 2      | No impact on sensor setting | `1d…+20d`                                              | `00 01 … 00 14`                                            |     |

The example response has the filter disabled, theta and phi limits of -90° to +90°, and beam increment 1.

**Example: sRA LFPangleRangeFilter**

| Protocol | Example                                                                                                                                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}LFPangleRangeFilter{SPC}0{SPC}FFF24460{SPC}DBBA0{SPC}FFF24460{SPC}DBBA0{SPC}1<ETX>`                                                                      |
| CoLa A   | `02 73 52 41 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 20 30 20 46 46 46 32 34 34 36 30 20 44 42 42 41 30 20 46 46 46 32 34 34 36 30 20 44 42 42 41 30 20 31 03` |
| CoLa B   | `02 02 02 02 00 00 00 2B 73 52 41 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 20 00 FF F2 44 60 00 0D BB A0 FF F2 44 60 00 0D BB A0 00 01 25`                      |

### Set Interval Filter [sWN LFPintervalFilter]

Enables and set up the interval filter. The interval filter reduce the scan output rate by a given factor.

**Telegram structure: sWN LFPintervalFilter**

| Telegram part   | Description                                                                          | Variable | Length | Additional details | Values CoLa A (ASCII)                                                   | Values CoLa B (Binary)                                                            |     |
| --------------- | ------------------------------------------------------------------------------------ | -------- | ------ | ------------------ | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --- |
| Command type    | Write                                                                                | String   | 3      |                    | `sWN`                                      | `73 57 4E`                                           |     |
| Command         | Reduce the scan output rate by a given factor                                        | String   | 17     |                    | `LFPintervalFilter`                        | `4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72` |     |
| Variable data 1 | Enables/Disables the filter.                                                         | Bool     | 1      | Off:<br>On:        | `0d (00h)<br>+1d (01h)`                    | `00<br>01`                                           |     |
| Variable Data 2 | Only every nth scan is output where n is given by<br>the value of uiReductionFactor. | Uint_32  | 4      |                    | `1d…+50d<br>(00 00 00 01h … 00 00 00 32h)` | `00 00 00 01 … 00 00 00 32`                          |     |

Enables the interval filter an set up to the 3rd scan

**Example: sWN LFPintervalFilter**

| Protocol | Example                                                                                                                                    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWN{SPC}LFPintervalFilter{SPC}0{SPC}2<ETX>`                                                 |
| CoLa A   | `sWN LFPintervalFilter 0 2`                                                                                   |
| CoLa A   | `02 73 57 4E 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 20 30 20 32 03`                            |
| CoLa B   | `02 02 02 02 00 00 00 1B 73 57 4E 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 20 00 00 00 00 02 0D` |
| CoLa B   | `73 57 4E 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 20 00 00 00 00 02`                            |

**Telegram structure: sWA LFPintervalFilter**

| Telegram part | Description                                   | Variable | Length | Additional details | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                            |     |
| ------------- | --------------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------- | --- |
| Command type  | Answer                                        | String   | 3      |                    | `sWA`               | `73 57 41`                                           |     |
| Command       | Reduce the scan output rate by a given factor | String   | 17     |                    | `LFPintervalFilter` | `4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72` |     |

**Example: sWA LFPintervalFilter**

| Protocol | Example                                                                                                                     |
| -------- | --------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sWA{SPC}LFPintervalFilter<ETX>`                                              |
| CoLa A   | `02 73 57 41 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 16 73 57 41 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 20 00` |

### Set Layer Filter [sWN LFPlayerFilter]

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

| Protocol | Example                                                                                                                                                                                          |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWN{SPC}LFPlayerFilter{SPC}0{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1<ETX>`                |
| CoLa A   | `sWN LFPlayerFilter 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1`                                                                                                              |
| CoLa A   | `02 73 57 4E 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72 20 30 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 03` |
| CoLa B   | `02 02 02 02 00 00 00 24 73 57 4E 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72 20 00 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 73`                            |
| CoLa B   | `73 57 4E 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72 20 00 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01`                                                       |

**Telegram structure: sWA LFPlayerFilter**

| Telegram part | Description    | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------- | -------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Answer         | String   | 3      |                    | `sWA`            | `73 57 41`                                  |
| Command       | LFPlayerFilter | String   | 14     |                    | `LFPlayerFilter` | `4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72` |

**Example: sWA LFPlayerFilter**

| Protocol | Example                                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWA{SPC}LFPlayerFilter<ETX>`                                        |
| CoLa A   | `02 73 57 41 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 13 73 57 41 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72 20 7C` |

### Set Moving Averaging Filter [sWN LFPmovingAveragingFilter]

Enables the moving average filter

**Telegram structure: sWN LFPmovingAveragingFilter**

| Telegram part   | Description                 | Variable | Length | Additional details   | Values CoLa A (ASCII)                                   | Values CoLa B (Binary)                                                                                 |     |
| --------------- | --------------------------- | -------- | ------ | -------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | --- |
| Command type    | Write                       | String   | 3      |                      | `sWN`                      | `73 57 4E`                                                                |     |
| Command         | String                      | String   | 24     |                      | `LFPmovingAveragingFilter` | `4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72` |     |
| Variable Data 1 | Moving averaging is enabled | Bool     | 1      | Off:<br>On:          | `0d (00h)<br>+1d (01h)`    | `00<br>01`                                                                |     |
| Variable Data 2 | averaging depth             | UInt     | 2      | Minimum:<br>Maximum: | `+2d (02h)<br>+4d (0Ah)`   | `00 02<br>00 04`                                                          |     |

Disable the moving average filter and set averaging depth to 3

**Example: sWN LFPmovingAveragingFilter**

| Protocol | Example                                                                                                                                                   |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sWN{SPC}LFPmovingAveragingFilter{SPC}0{SPC}3<ETX>`                                                         |
| CoLa A   | `sWN LFPmovingAveragingFilter 0 3`                                                                                           |
| CoLa A   | `02 73 57 4E 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 20 30 20 33 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 20 73 57 4E 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 20 00 00 03 41` |
| CoLa B   | `73 57 4E 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 20 00 00 03`                            |

**Telegram structure: sWA LFPmovingAveragingFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                                   | Values CoLa B (Binary)                                                                                 |     |
| ------------- | ----------- | -------- | ------ | ------------------ | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | --- |
| Command type  | Answer      | String   | 3      |                    | `sWA`                      | `73 57 41`                                                                |     |
| Command       | String      | String   | 24     |                    | `LFPmovingAveragingFilter` | `4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72` |     |

**Example: sWA LFPmovingAveragingFilter**

| Protocol | Example                                                                                                                                          |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWA{SPC}LFPmovingAveragingFilter<ETX>`                                                            |
| CoLa A   | `02 73 57 41 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 1D 73 57 41 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 20 4D` |

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

**Example: sWN LFPradialDistanceRangeFilter**

| Protocol | Example                                                                                                                                                                                 |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sWN{SPC}LFPradialDistanceRangeFilter{SPC}0{SPC}0{SPC}4E20<ETX>`                                                                          |
| CoLa A   | `sWN LFPradialDistanceRangeFilter 0 0 4E20`                                                                                                                |
| CoLa A   | `02 73 57 4E 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 20 30 20 30 20 34 45 32 30 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 2A 73 57 4E 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 20 00 00 00 00 00 00 00 4E 20 11` |
| CoLa B   | `73 57 4E 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 20 00 00 00 00 00 00 00 4E 20`                            |

**Telegram structure: sWA LFPradialDistanceRangeFilter**

| Telegram part | Description                                               | Variable | Length | Additional details | Values CoLa A (ASCII)                                       | Values CoLa B (Binary)                                                                                             |     |
| ------------- | --------------------------------------------------------- | -------- | ------ | ------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | --- |
| Command type  | Answer                                                    | String   | 3      |                    | `sWA`                          | `73 57 41`                                                                            |     |
| Command       | Restriction of the scan(s) to a specified distance range. | String   | 28     |                    | `LFPradialDistanceRangeFilter` | `4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72` |     |

**Example: sWA LFPradialDistanceRangeFilter**

| Protocol | Example                                                                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWA{SPC}LFPradialDistanceRangeFilter<ETX>`                                                                    |
| CoLa A   | `02 73 57 41 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 21 73 57 41 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 20 70` |

### Set Ground Filter [sWN groundFilterEnable]

Enable ground-point exclusion for field evaluation and perpendicular-distance measurement (manual pages 149-151).

Requires Authorized client.

**Telegram structure: sWN groundFilterEnable**

| Telegram part | Description        | Variable | Length | Additional details | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                                               |
| ------------- | ------------------ | -------- | ------ | ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Command type  | Write              | String   | 3      |                    | `sWN`                | `73 57 4E`                                              |
| Command       | groundFilterEnable | String   | 18     |                    | `groundFilterEnable` | `67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65` |
| State         | Filter enabled     | Bool_1   | 1      | Disabled / enabled | `0 / 1`              | `00 / 01`                                               |

**Example: sWN groundFilterEnable**

| Protocol | Example                                                                                                                           |
| -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sWN{SPC}groundFilterEnable{SPC}1<ETX>`                                             |
| CoLa A   | `sWN groundFilterEnable 1`                                                                           |
| CoLa A   | `02 73 57 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 18 73 57 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65 20 01 6F` |
| CoLa B   | `73 57 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65 20 01`                            |

**Telegram structure: sWA groundFilterEnable**

| Telegram part | Description        | Variable | Length | Additional details | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                                               |
| ------------- | ------------------ | -------- | ------ | ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Command type  | Answer             | String   | 3      |                    | `sWA`                | `73 57 41`                                              |
| Command       | groundFilterEnable | String   | 18     |                    | `groundFilterEnable` | `67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65` |

**Example: sWA groundFilterEnable**

| Protocol | Example                                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWA{SPC}groundFilterEnable<ETX>`                                                |
| CoLa A   | `02 73 57 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 17 73 57 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65 20 61` |

### Read Ground Filter State [sRN groundFilterEnable]

Read whether the ground filter is enabled.

**Telegram structure: sRN groundFilterEnable**

| Telegram part | Description        | Variable | Length | Additional details | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                                               |
| ------------- | ------------------ | -------- | ------ | ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Command type  | Read               | String   | 3      |                    | `sRN`                | `73 52 4E`                                              |
| Command       | groundFilterEnable | String   | 18     |                    | `groundFilterEnable` | `67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65` |

**Example: sRN groundFilterEnable**

| Protocol | Example                                                                                                                     |
| -------- | --------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}groundFilterEnable<ETX>`                                             |
| CoLa A   | `<STX>sRN groundFilterEnable<ETX>`                                                 |
| CoLa A   | `sRN groundFilterEnable`                                                                       |
| CoLa A   | `02 73 52 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 16 73 52 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65 4B` |
| CoLa B   | `73 52 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65`                            |

**Telegram structure: sRA groundFilterEnable**

| Telegram part | Description        | Variable | Length | Additional details | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                                               |
| ------------- | ------------------ | -------- | ------ | ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Command type  | Answer             | String   | 3      |                    | `sRA`                | `73 52 41`                                              |
| Command       | groundFilterEnable | String   | 18     |                    | `groundFilterEnable` | `67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65` |
| State         | Filter enabled     | Bool_1   | 1      | Disabled / enabled | `0 / 1`              | `00 / 01`                                               |

**Example: sRA groundFilterEnable**

| Protocol | Example                                                                                                                           |
| -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}groundFilterEnable{SPC}0<ETX>`                                             |
| CoLa A   | `02 73 52 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65 20 30 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 18 73 52 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65 20 00 64` |

### Read Ground Filter Type [sRN groundFilterType]

Read the ground-plane source (manual pages 151-152).

**Telegram structure: sRN groundFilterType**

| Telegram part | Description      | Variable | Length | Additional details | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                                                         |
| ------------- | ---------------- | -------- | ------ | ------------------ | ----------------------------------------------- | ------------------------------------------------------------------------------ |
| Command type  | Read             | String   | 3      |                    | `sRN`              | `73 52 4E`                                        |
| Command       | groundFilterType | String   | 16     |                    | `groundFilterType` | `67 72 6F 75 6E 64 46 69 6C 74 65 72 54 79 70 65` |

**Example: sRN groundFilterType**

| Protocol | Example                                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}groundFilterType<ETX>`                                         |
| CoLa A   | `<STX>sRN groundFilterType<ETX>`                                             |
| CoLa A   | `sRN groundFilterType`                                                                   |
| CoLa A   | `02 73 52 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 79 70 65 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 14 73 52 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 79 70 65 52` |
| CoLa B   | `73 52 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 79 70 65`                            |

**Telegram structure: sRA groundFilterType**

| Telegram part | Description         | Variable | Length | Additional details | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                                                         |
| ------------- | ------------------- | -------- | ------ | ------------------ | ----------------------------------------------- | ------------------------------------------------------------------------------ |
| Command type  | Answer              | String   | 3      |                    | `sRA`              | `73 52 41`                                        |
| Command       | groundFilterType    | String   | 16     |                    | `groundFilterType` | `67 72 6F 75 6E 64 46 69 6C 74 65 72 54 79 70 65` |
| Type          | Ground-plane source | Enum_8   | 1      | P3D / IMU          | `0 / 1`            | `00 / 01`                                         |

**Example: sRA groundFilterType**

| Protocol | Example                                                                                                                     |
| -------- | --------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}groundFilterType{SPC}0<ETX>`                                         |
| CoLa A   | `02 73 52 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 79 70 65 20 30 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 16 73 52 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 79 70 65 20 00 7D` |

### Set Ground Filter Thresholds [sWN groundFilterThresholds]

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

| Protocol | Example                                                                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWN{SPC}groundFilterThresholds{SPC}-50{SPC}+50<ETX>`                                                    |
| CoLa A   | `sWN groundFilterThresholds -50 +50`                                                                                      |
| CoLa A   | `02 73 57 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73 20 2D 35 30 20 2B 35 30 03`             |
| CoLa B   | `02 02 02 02 00 00 00 1F 73 57 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73 20 FF CE 00 32 68` |
| CoLa B   | `73 57 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73 20 FF CE 00 32`                            |

**Telegram structure: sWA groundFilterThresholds**

| Telegram part | Description            | Variable | Length | Additional details | Values CoLa A (ASCII)                                 | Values CoLa B (Binary)                                                                           |
| ------------- | ---------------------- | -------- | ------ | ------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Command type  | Answer                 | String   | 3      |                    | `sWA`                    | `73 57 41`                                                          |
| Command       | groundFilterThresholds | String   | 22     |                    | `groundFilterThresholds` | `67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73` |

**Example: sWA groundFilterThresholds**

| Protocol | Example                                                                                                                                    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWA{SPC}groundFilterThresholds<ETX>`                                                        |
| CoLa A   | `02 73 57 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 1B 73 57 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73 20 64` |

### Read Ground Filter Thresholds [sRN groundFilterThresholds]

Read the signed ground-point distance limits in mm (manual pages 154-155).

**Telegram structure: sRN groundFilterThresholds**

| Telegram part | Description            | Variable | Length | Additional details | Values CoLa A (ASCII)                                 | Values CoLa B (Binary)                                                                           |
| ------------- | ---------------------- | -------- | ------ | ------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Command type  | Read                   | String   | 3      |                    | `sRN`                    | `73 52 4E`                                                          |
| Command       | groundFilterThresholds | String   | 22     |                    | `groundFilterThresholds` | `67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73` |

**Example: sRN groundFilterThresholds**

| Protocol | Example                                                                                                                                 |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}groundFilterThresholds<ETX>`                                                     |
| CoLa A   | `<STX>sRN groundFilterThresholds<ETX>`                                                         |
| CoLa A   | `sRN groundFilterThresholds`                                                                               |
| CoLa A   | `02 73 52 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 1A 73 52 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73 4E` |
| CoLa B   | `73 52 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73`                            |

**Telegram structure: sRA groundFilterThresholds**

| Telegram part    | Description                             | Variable | Length | Additional details           | Values CoLa A (ASCII)                                 | Values CoLa B (Binary)                                                                           |
| ---------------- | --------------------------------------- | -------- | ------ | ---------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Command type     | Answer                                  | String   | 3      |                              | `sRA`                    | `73 52 41`                                                          |
| Command          | groundFilterThresholds                  | String   | 22     |                              | `groundFilterThresholds` | `67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73` |
| Minimum distance | Signed distance from ground plane in mm | Int_16   | 2      | -1000 to +1000; default -100 | `-100`                   | `FF 9C`                                                             |
| Maximum distance | Signed distance from ground plane in mm | Int_16   | 2      | -1000 to +1000; default +100 | `+100`                   | `00 64`                                                             |

**Example: sRA groundFilterThresholds**

| Protocol | Example                                                                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}groundFilterThresholds{SPC}FF9C{SPC}64<ETX>`                                                    |
| CoLa A   | `02 73 52 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73 20 46 46 39 43 20 36 34 03`             |
| CoLa B   | `02 02 02 02 00 00 00 1F 73 52 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73 20 FF 9C 00 64 66` |

### Read Parameter [sRN FREchoFilter]

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN FREchoFilter**

| Telegram part | Description  | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |
| ------------- | ------------ | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ |
| Command type  | Read         | String   | 3      |                    | `sRN`          | `73 52 4E`                            |
| Command       | FREchoFilter | String   | 12     |                    | `FREchoFilter` | `46 52 45 63 68 6F 46 69 6C 74 65 72` |

**Example: sRN FREchoFilter**

| Protocol | Example                                                                                                   |
| -------- | --------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}FREchoFilter<ETX>`                                 |
| CoLa A   | `<STX>sRN FREchoFilter<ETX>`                                     |
| CoLa A   | `sRN FREchoFilter`                                                           |
| CoLa A   | `02 73 52 4E 20 46 52 45 63 68 6F 46 69 6C 74 65 72 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 10 73 52 4E 20 46 52 45 63 68 6F 46 69 6C 74 65 72 5A` |
| CoLa B   | `73 52 4E 20 46 52 45 63 68 6F 46 69 6C 74 65 72`                            |

**Example: sRA FREchoFilter**

| Protocol | Example                                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}FREchoFilter{SPC}1<ETX>`                                 |
| CoLa A   | `02 73 52 41 20 46 52 45 63 68 6F 46 69 6C 74 65 72 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 12 73 52 41 20 46 52 45 63 68 6F 46 69 6C 74 65 72 20 01 74` |

### Read Parameter [sRN LFPcubicareafilter]

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN LFPcubicareafilter**

| Telegram part | Description        | Variable | Length | Additional details | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                                               |
| ------------- | ------------------ | -------- | ------ | ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Command type  | Read               | String   | 3      |                    | `sRN`                | `73 52 4E`                                              |
| Command       | LFPcubicareafilter | String   | 18     |                    | `LFPcubicareafilter` | `4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72` |

**Example: sRN LFPcubicareafilter**

| Protocol | Example                                                                                                                     |
| -------- | --------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}LFPcubicareafilter<ETX>`                                             |
| CoLa A   | `<STX>sRN LFPcubicareafilter<ETX>`                                                 |
| CoLa A   | `sRN LFPcubicareafilter`                                                                       |
| CoLa A   | `02 73 52 4E 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 16 73 52 4E 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72 7C` |
| CoLa B   | `73 52 4E 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72`                            |

**Example: sRA LFPcubicareafilter**

| Protocol | Example                                                                                                                                                                                                                                    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}LFPcubicareafilter{SPC}0{SPC}FFFFB1E0{SPC}4E20{SPC}FFFFB1E0{SPC}4E20{SPC}FFFFB1E0{SPC}4E20<ETX>`                                                                                    |
| CoLa A   | `02 73 52 41 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72 20 30 20 46 46 46 46 42 31 45 30 20 34 45 32 30 20 46 46 46 46 42 31 45 30 20 34 45 32 30 20 46 46 46 46 42 31 45 30 20 34 45 32 30 03` |
| CoLa B   | `02 02 02 02 00 00 00 30 73 52 41 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72 20 00 FF FF B1 E0 00 00 4E 20 FF FF B1 E0 00 00 4E 20 FF FF B1 E0 00 00 4E 20 6C`                                  |

### Read Parameter [sRN LFPintervalFilter]

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN LFPintervalFilter**

| Telegram part | Description       | Variable | Length | Additional details | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                            |
| ------------- | ----------------- | -------- | ------ | ------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------- |
| Command type  | Read              | String   | 3      |                    | `sRN`               | `73 52 4E`                                           |
| Command       | LFPintervalFilter | String   | 17     |                    | `LFPintervalFilter` | `4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72` |

**Example: sRN LFPintervalFilter**

| Protocol | Example                                                                                                                  |
| -------- | ------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRN{SPC}LFPintervalFilter<ETX>`                                           |
| CoLa A   | `<STX>sRN LFPintervalFilter<ETX>`                                               |
| CoLa A   | `sRN LFPintervalFilter`                                                                     |
| CoLa A   | `02 73 52 4E 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 15 73 52 4E 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 2A` |
| CoLa B   | `73 52 4E 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72`                            |

**Example: sRA LFPintervalFilter**

| Protocol | Example                                                                                                                                    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}LFPintervalFilter{SPC}0{SPC}2<ETX>`                                                 |
| CoLa A   | `02 73 52 41 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 20 30 20 32 03`                            |
| CoLa B   | `02 02 02 02 00 00 00 1B 73 52 41 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 20 00 00 00 00 02 07` |

### Read Parameter [sRN LFPlayerFilter]

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN LFPlayerFilter**

| Telegram part | Description    | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------- | -------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Read           | String   | 3      |                    | `sRN`            | `73 52 4E`                                  |
| Command       | LFPlayerFilter | String   | 14     |                    | `LFPlayerFilter` | `4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72` |

**Example: sRN LFPlayerFilter**

| Protocol | Example                                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}LFPlayerFilter<ETX>`                                     |
| CoLa A   | `<STX>sRN LFPlayerFilter<ETX>`                                         |
| CoLa A   | `sRN LFPlayerFilter`                                                               |
| CoLa A   | `02 73 52 4E 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 12 73 52 4E 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72 56` |
| CoLa B   | `73 52 4E 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72`                            |

**Example: sRA LFPlayerFilter**

| Protocol | Example                                                                                                                                                                                          |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}LFPlayerFilter{SPC}0{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1<ETX>`                |
| CoLa A   | `02 73 52 41 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72 20 30 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 03` |
| CoLa B   | `02 02 02 02 00 00 00 24 73 52 41 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72 20 00 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 79`                            |

### Read Parameter [sRN LFPmovingAveragingFilter]

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN LFPmovingAveragingFilter**

| Telegram part | Description              | Variable | Length | Additional details | Values CoLa A (ASCII)                                   | Values CoLa B (Binary)                                                                                 |
| ------------- | ------------------------ | -------- | ------ | ------------------ | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Command type  | Read                     | String   | 3      |                    | `sRN`                      | `73 52 4E`                                                                |
| Command       | LFPmovingAveragingFilter | String   | 24     |                    | `LFPmovingAveragingFilter` | `4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72` |

**Example: sRN LFPmovingAveragingFilter**

| Protocol | Example                                                                                                                                       |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}LFPmovingAveragingFilter<ETX>`                                                         |
| CoLa A   | `<STX>sRN LFPmovingAveragingFilter<ETX>`                                                             |
| CoLa A   | `sRN LFPmovingAveragingFilter`                                                                                   |
| CoLa A   | `02 73 52 4E 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 1C 73 52 4E 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 67` |
| CoLa B   | `73 52 4E 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72`                            |

**Example: sRA LFPmovingAveragingFilter**

| Protocol | Example                                                                                                                                                   |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}LFPmovingAveragingFilter{SPC}0{SPC}3<ETX>`                                                         |
| CoLa A   | `02 73 52 41 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 20 30 20 33 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 20 73 52 41 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 20 00 00 03 4B` |

### Read Parameter [sRN LFPparticle]

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN LFPparticle**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |
| ------------- | ----------- | -------- | ------ | ------------------ | ------------------------------------------ | --------------------------------------------------------------- |
| Command type  | Read        | String   | 3      |                    | `sRN`         | `73 52 4E`                         |
| Command       | LFPparticle | String   | 11     |                    | `LFPparticle` | `4C 46 50 70 61 72 74 69 63 6C 65` |

**Example: sRN LFPparticle**

| Protocol | Example                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRN{SPC}LFPparticle<ETX>`                               |
| CoLa A   | `<STX>sRN LFPparticle<ETX>`                                   |
| CoLa A   | `sRN LFPparticle`                                                         |
| CoLa A   | `02 73 52 4E 20 4C 46 50 70 61 72 74 69 63 6C 65 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0F 73 52 4E 20 4C 46 50 70 61 72 74 69 63 6C 65 01` |
| CoLa B   | `73 52 4E 20 4C 46 50 70 61 72 74 69 63 6C 65`                            |

**Example: sRA LFPparticle**

| Protocol | Example                                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}LFPparticle{SPC}0{SPC}1F4<ETX>`                             |
| CoLa A   | `02 73 52 41 20 4C 46 50 70 61 72 74 69 63 6C 65 20 30 20 31 46 34 03`                |
| CoLa B   | `02 02 02 02 00 00 00 13 73 52 41 20 4C 46 50 70 61 72 74 69 63 6C 65 20 00 01 F4 DB` |

### Read Parameter [sRN LFPradialDistanceRangeFilter]

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN LFPradialDistanceRangeFilter**

| Telegram part | Description                  | Variable | Length | Additional details | Values CoLa A (ASCII)                                       | Values CoLa B (Binary)                                                                                             |
| ------------- | ---------------------------- | -------- | ------ | ------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Command type  | Read                         | String   | 3      |                    | `sRN`                          | `73 52 4E`                                                                            |
| Command       | LFPradialDistanceRangeFilter | String   | 28     |                    | `LFPradialDistanceRangeFilter` | `4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72` |

**Example: sRN LFPradialDistanceRangeFilter**

| Protocol | Example                                                                                                                                                   |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}LFPradialDistanceRangeFilter<ETX>`                                                                 |
| CoLa A   | `<STX>sRN LFPradialDistanceRangeFilter<ETX>`                                                                     |
| CoLa A   | `sRN LFPradialDistanceRangeFilter`                                                                                           |
| CoLa A   | `02 73 52 4E 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 20 73 52 4E 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 5A` |
| CoLa B   | `73 52 4E 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72`                            |

**Example: sRA LFPradialDistanceRangeFilter**

| Protocol | Example                                                                                                                                                                                 |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}LFPradialDistanceRangeFilter{SPC}0{SPC}0{SPC}4E20<ETX>`                                                                          |
| CoLa A   | `02 73 52 41 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 20 30 20 30 20 34 45 32 30 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 2A 73 52 41 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 20 00 00 00 00 00 00 00 4E 20 1B` |

## Inputs and Outputs

### Read State of the Ports [sRN LIDportstate]

LIDportstate has to be available additionally or as successor of the LIDoutputstate telegram.

Valid for all sensors with Ethernet and ports (inputs / outputs).

**Telegram structure: sRN LIDportstate**

| Telegram part | Description                | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |     |
| ------------- | -------------------------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ | --- |
| Command type  | Read                       | String   | 3      |                    | `sRN`          | `73 52 4E`                            |     |
| Command       | Ask for port configuration | String   | 12     |                    | `LIDportstate` | `4C 49 44 70 6F 72 74 73 74 61 74 65` |     |

**Example: sRN LIDportstate**

| Protocol | Example                                                                                                   |
| -------- | --------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}LIDportstate<ETX>`                                 |
| CoLa A   | `<STX>sRN LIDportstate<ETX>`                                     |
| CoLa A   | `sRN LIDportstate`                                                           |
| CoLa A   | `02 73 52 4E 20 4C 49 44 70 6F 72 74 73 74 61 74 65 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 10 73 52 4E 20 4C 49 44 70 6F 72 74 73 74 61 74 65 60` |
| CoLa B   | `73 52 4E 20 4C 49 44 70 6F 72 74 73 74 61 74 65`                            |

**Telegram structure: sRA LIDportstate**

| Telegram part                                                            | Description                                                                      | Variable | Length | Additional details                                                                                                                                                                                                      | Values CoLa A (ASCII)                                          | Values CoLa B (Binary)                                             |     |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | -------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------ | --- |
| Command type                                                             | Answer                                                                           | String   | 3      |                                                                                                                                                                                                                         | `sRA`                             | `73 52 41`                            |     |
| Command                                                                  | Port state                                                                       | String   | 12     |                                                                                                                                                                                                                         | `LIDportstate`                    | `4C 49 44 70 6F 72 74 73 74 61 74 65` |     |
| Status code                                                              | Version number                                                                   | Uint_16  | 2      | Current version:                                                                                                                                                                                                        | `0 … FFFFh<br>0`                  | `00 01 … FF FF`                       |     |
| Status code                                                              | System counter (time in µs since power up max. 71min then starting from 0 again) | Uint_32  | 4      |                                                                                                                                                                                                                         | `0 … FFFFFFFFh`                   | `00 00 00 00 … FF FF FF FF`           |     |
| ARRAY which defines the number of internal ports*                        | 0...n                                                                            | Uint_16  | 2      | Hex:<br>Not available:<br>Number of ports:                                                                                                                                                                              | `0000 - FFFF<br>00<br>01 ... n`   | `00 00 - FF FF`                       |     |
| State of the ports and count value in hex                                | Internal port state                                                              | Enum_8   | 1      | Output voltage low:(Relays open)<br>Output voltage high:(Relays closed)<br>Tri-state:<br>Input voltage high (level):Input voltage from low to high (edge)<br>Input voltage low (level):Input voltage high to low (edge) | `00<br>01<br>02<br>03<br>04`      | `00<br>01<br>02<br>03<br>04`          |     |
| State of the ports and count value in hex                                | Internal port counter                                                            | Uint_32  | 4      |                                                                                                                                                                                                                         | `0 … FFFFFFFFh`                   | `00 00 00 00 … FF FF FF FF`           |     |
|                                                                          | ….                                                                               |          |        |                                                                                                                                                                                                                         |                                                                |                                                                    |     |
| ARRAY which defines the number of external or virtual ports*             | 0...n                                                                            | Uint_16  | 1      | Hex:<br>Not available:<br>Number of ports:                                                                                                                                                                              | `00 00 - FF FF<br>00<br>01 ... n` | `00 00 - FF FF`                       |     |
| State of the ports and count value in hex                                | External port state                                                              | Enum_8   | 1      | Output voltage low:(Relays open)<br>Output voltage high:(Relays closed)<br>Tri-state:<br>Input voltage high (level):Input voltage from low to high (edge)<br>Input voltage low (level):Input voltage high to low (edge) | `00<br>01<br>02<br>03<br>04`      | `00<br>01<br>02<br>03<br>04`          |     |
| State of the ports and count value in hex                                | External port counter                                                            | Uint_32  | 4      |                                                                                                                                                                                                                         | `0 … FFFFFFFFh`                   | `00 00 00 00 … FF FF FF FF`           |     |
| Time                                                                     | States code                                                                      | Enum_16  | 1      | No time data:<br>Time data:                                                                                                                                                                                             | `00 00<br>00 01`                  | `00 00<br>00 01`                      |     |
| Time Block (sensor time from the last change of min. one of the outputs) | Year                                                                             | Array    | 2      | E.g.                                                                                                                                                                                                                    | `1970`                            | `07 B2`                               |     |
| Time Block (sensor time from the last change of min. one of the outputs) | Month                                                                            | Array    | 1      |                                                                                                                                                                                                                         | `1 … 12`                          | `01 … 0C`                             |     |
| Time Block (sensor time from the last change of min. one of the outputs) | Day                                                                              | Array    | 1      |                                                                                                                                                                                                                         | `1 … 31`                          | `01 … 1F`                             |     |
| Time Block (sensor time from the last change of min. one of the outputs) | Hour                                                                             | Array    | 1      |                                                                                                                                                                                                                         | `0 … 23`                          | `00 … 17`                             |     |
| Time Block (sensor time from the last change of min. one of the outputs) | Minute                                                                           | Array    | 1      |                                                                                                                                                                                                                         | `0 … 59`                          | `00 … 3B`                             |     |
| Time Block (sensor time from the last change of min. one of the outputs) | Second                                                                           | Array    | 1      |                                                                                                                                                                                                                         | `0 … 59`                          | `00 … 3B`                             |     |
| Time Block (sensor time from the last change of min. one of the outputs) | Microsecond                                                                      | Array    | 4      |                                                                                                                                                                                                                         | `0 … 999999`                      | `00 00 00 00 … 00 0F 42 3F`           |     |

Inputs/outputs: If the device has separate inputs and outputs (instead of general purpose ports) the ARRAY shall start with inputs followed by the outputs.

Virtual ports are ports that can be used to expand the number of ports but are not physically available. They just show up in the corresponding ethernet telegrams (like LIDportstate).

Tri-State: Port is neither input nor output; the port is set inactive in SOPAS

**Example: sRA LIDportstate**

| Protocol | Example                                                                                                                                                                                                                                                                                                                                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}LIDportstate{SPC}0{SPC}A56D1F0{SPC}1{SPC}0{SPC}1{SPC}1{SPC}4{SPC}0{SPC}4{SPC}0{SPC}3{SPC}0{SPC}4{SPC}0{SPC}1{SPC}1{SPC}1{SPC}1{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}1{SPC}7B2{SPC}1{SPC}1{SPC}0{SPC}2{SPC}35{SPC}70CB0<ETX>`                                                                    |
| CoLa A   | `02 73 52 41 20 4C 49 44 70 6F 72 74 73 74 61 74 65 20 30 20 41 35 36 44 31 46 30 20 31 20 30 20 31 20 31 20 34 20 30 20 34 20 30 20 33 20 30 20 34 20 30 20 31 20 31 20 31 20 31 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 31 20 37 42 32 20 31 20 31 20 30 20 32 20 33 35 20 37 30 43 42 30 03`                               |
| CoLa B   | `02 02 02 02 00 00 00 74 73 52 41 20 4C 49 44 70 6F 72 74 73 74 61 74 65 20 00 00 0A 56 D1 F0 01 00 00 00 00 01 00 00 00 01 04 00 00 00 00 04 00 00 00 00 03 00 00 00 00 04 00 00 00 00 01 00 00 00 01 01 00 00 00 01 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 00 01 07 B2 01 01 00 02 35 00 07 0C B0 0C` |

### Read Port Configuration of All I/Os [sRN PortConfiguration]

Read the configuration of the digital inputs and outputs.

**Telegram structure: sRN PortConfiguration**

| Telegram part | Description                | Variable | Length | Additional details | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                            |     |
| ------------- | -------------------------- | -------- | ------ | ------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------- | --- |
| Command type  | Read                       | String   | 3      |                    | `sRN`               | `73 52 4E`                                           |     |
| Command       | Ask for port configuration | String   | 17     |                    | `PortConfiguration` | `50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |     |

**Example: sRN PortConfiguration**

| Protocol | Example                                                                                                                  |
| -------- | ------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRN{SPC}PortConfiguration<ETX>`                                           |
| CoLa A   | `<STX>sRN PortConfiguration<ETX>`                                               |
| CoLa A   | `sRN PortConfiguration`                                                                     |
| CoLa A   | `02 73 52 4E 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 15 73 52 4E 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 26` |
| CoLa B   | `73 52 4E 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E`                            |

**Telegram structure: sRA PortConfiguration**

| Telegram part                                                                                         | Description                                                                | Variable | Length                             | Additional details                                                                                                                                | Values CoLa A (ASCII)                                                           | Values CoLa B (Binary)                                                            |     |
| ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --- |
| Command type                                                                                          | Answer                                                                     | String   | 3                                  |                                                                                                                                                   | `sRA`                                              | `73 52 41`                                           |     |
| Command                                                                                               | Configuration of all I/Os                                                  | String   | 17                                 |                                                                                                                                                   | `PortConfiguration`                                | `50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |     |
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

**Example: sRA PortConfiguration**

| Protocol | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}PortConfiguration{SPC}1{SPC}6{SPC}InOut1{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}2{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}FE01{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}6{SPC}InOut2{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}1{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut3{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut4{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut5{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut6{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}6{SPC}InOut7{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}1{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}6{SPC}InOut8{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}1{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>`                                                                                                                                                    |
| CoLa A   | `02 73 52 41 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 31 20 36 20 49 6E 4F 75 74 31 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 32 20 44 52 44 59 20 30 20 30 20 30 20 46 45 30 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 31 20 36 20 49 6E 4F 75 74 32 20 30 20 41 20 31 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 31 20 44 52 44 59 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 36 20 49 6E 4F 75 74 33 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 36 20 49 6E 4F 75 74 34 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 36 20 49 6E 4F 75 74 35 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 36 20 49 6E 4F 75 74 36 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 31 20 36 20 49 6E 4F 75 74 37 20 30 20 41 20 31 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 31 20 44 52 44 59 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 31 20 36 20 49 6E 4F 75 74 38 20 30 20 41 20 31 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 31 20 44 52 44 59 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03` |
| CoLa B   | `02 02 02 02 00 00 01 81 73 52 41 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 01 00 06 49 6E 4F 75 74 31 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 02 44 52 44 59 00 00 00 46 45 30 31 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 32 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 33 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 34 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 35 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 36 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 37 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 38 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 01`                                                                                                                                                                                                             |

### Set Port Configuration [sWN PortConfiguration]

Configuration of the given ports. Telegram structure represents the configuration of 1 port.

If the device has multiple ports, use the same structure.

**Telegram structure: sWN PortConfiguration**

| Telegram part   | Description                                                          | Variable   | Length       | Additional details                                     | Values CoLa A (ASCII)                                           | Values CoLa B (Binary)                                                                  |     |
| --------------- | -------------------------------------------------------------------- | ---------- | ------------ | ------------------------------------------------------ | --------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type    | Write                                                                | String     | 3            |                                                        | `sWN`                              | `73 57 4E`                                                 |     |
| Command         | Configuration of the given ports                                     | String     | 17           |                                                        | `PortConfiguration`                | `50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E`       |     |
| Port Type       | Input or Output                                                      | Enum_8     | 1            | Input:<br>Output:                                      | `+0d (0h)<br>+1d (1h)`             | `00<br>01`                                                 |     |
| Name            | Name of the port                                                     | FlexString | 9<br>(0..32) | Default:                                               | `InOut1`                           | `00 06 49 6E 4F 75 74 31 00`                               |     |
| Input Settings  |                                                                      |            |              |                                                        |                                                                 |                                                                                         |     |
| Logic           | Logic of the input                                                   | Enum_8     | 1            | Active high:<br>Active low:                            | `+0d (0h)<br>+1d (1h)`             | `00<br>01`                                                 |     |
| Debounce        | Select debouncing time in ms                                         | Uint_16    | 2            | 0 to 10000 ms                                          | `0 ... 2710`                       | `00 00 ... 27 10`                                          |     |
| Sensitivity     | Input sensitivity                                                    | Enum_8     | 1            |                                                        | `1`                                | `01`                                                       |     |
| Reserved1       |                                                                      | Uint_16    | 2            |                                                        | `+0d (0h)`                         | `00 00`                                                    |     |
| Reserved2       |                                                                      | Uint_16    | 2            |                                                        | `+0d (0h)`                         | `00 00`                                                    |     |
| Output Settings |                                                                      |            |              |                                                        |                                                                 |                                                                                         |     |
| Logic           | Definition of the output logic                                       | Enum_8     | 1            | Active high:<br>Active low:                            | `+0d (0h)<br>+1d (1h)`             | `00<br>01`                                                 |     |
| Output Mode     | Set kind of mode for output pin                                      | Enum_8     | 1            | PNP:<br>NPN:<br>Push-Pull:                             | `0<br>1<br>2`                      | `00<br>01<br>02`                                           |     |
| Restart Type    | Defines type of restart to be used                                   | Enum_8     | 1            | Immediately:<br>Time:                                  | `+0d (0h)<br>+1d (1h)`             | `00<br>01`                                                 |     |
| Restart Time    | [Only with restart type = Time], time in ms                          | Uint_32    | 4            | (20 ms … 600,000 ms)                                   | `+20d … +600000d (C8h ... 927C0h)` | `00 00 00 00 … 00 09 27 C0`                                |     |
| Restart Input   | [Only with restart type = Input], input for restart                  | Uint_16    | 2            |                                                        | `+1d ... +8d (1h ... 8h)`          | `00 00 … 00 08`                                            |     |
| Combination     | Combining multiple Events and/or Inputs                              | Enum_8     | 1            | AND:<br>OR:<br>XOR:                                    | `+0d (0h)<br>+1d (1h)<br>+2d (2h)` |                                                                                         |     |
| Reserved        | Reserved value 3                                                     | Uint_16    | 2            |                                                        | `+0d (0h)`                         | `00 00`                                                    |     |
| Reserved        | Reserved value 4                                                     | Uint_16    | 2            |                                                        | `+0d (0h)`                         | `00 00`                                                    |     |
|                 | Source                                                               |            |              |                                                        |                                                                 |                                                                                         |     |
| Source          | The source parameter are only existing if the port is set to OUTPUT! |            | 2            |                                                        | `+1d (1h)`                         | `00 01`                                                    |     |
| Source Name     | Name of the source option                                            | String     | 4            | DeviceNotReady:<br>Input1:<br>Input2:<br>SopasCommand: | `DRDY<br>IN01<br>IN02<br>SC01`     | `44 52 44 59<br>49 4E 30 31<br>49 4E 30 32<br>53 43 30 31` |     |
| Invert          | Invert the source signal                                             | Bool_1     | 1            | Not inverted:<br>Inverted:                             | `+0d (0h)<br>+1d (1h)`             | `00<br>01`                                                 |     |
| Reserved        | Reserved value 5                                                     | Uint_8     | 1            |                                                        | `+0d (0h)`                         | `00`                                                       |     |
| Reserved        | Reserved value 6                                                     | Uint_8     | 1            |                                                        | `+0d (0h)`                         | `00`                                                       |     |
| Reserved        |                                                                      |            |              |                                                        |                                                                 |                                                                                         |     |
| Reserved        | Reserved value 7                                                     | Uint_16    | 2            |                                                        | `+0d (0h)`                         | `00 00`                                                    |     |
| Reserved        | Reserved value 8                                                     | Uint_16    | 2            |                                                        | `+0d (0h)`                         | `00 00`                                                    |     |
| Reserved        | Reserved value 9                                                     | Uint_16    | 2            |                                                        | `+0d (0h)`                         | `00 00`                                                    |     |
| Reserved        | Reserved value 10                                                    | Uint_16    | 2            |                                                        | `+0d (0h)`                         | `00 00`                                                    |     |

**Example: sWN PortConfiguration**

| Protocol | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWN{SPC}PortConfiguration{SPC}1{SPC}6{SPC}InOut1{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}2{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}FE01{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}6{SPC}InOut2{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}1{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut3{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut4{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut5{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}6{SPC}InOut6{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}6{SPC}InOut7{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}1{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}6{SPC}InOut8{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}1{SPC}DRDY{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>`                                                                                                                                                    |
| CoLa A   | `sWN PortConfiguration 1 6 InOut1 0 A 1 0 0 0 0 0 C8 1 1 0 0 2 DRDY 0 0 0 FE01 0 0 0 0 0 0 0 1 6 InOut2 0 A 1 0 0 1 0 0 C8 1 1 0 0 1 DRDY 0 0 0 0 0 0 0 0 6 InOut3 0 A 1 0 0 0 0 0 C8 1 1 0 0 0 0 0 0 0 0 6 InOut4 0 A 1 0 0 0 0 0 C8 1 1 0 0 0 0 0 0 0 0 6 InOut5 0 A 1 0 0 0 0 0 C8 1 1 0 0 0 0 0 0 0 0 6 InOut6 0 A 1 0 0 0 0 0 C8 1 1 0 0 0 0 0 0 0 1 6 InOut7 0 A 1 0 0 1 0 0 C8 1 1 0 0 1 DRDY 0 0 0 0 0 0 0 1 6 InOut8 0 A 1 0 0 1 0 0 C8 1 1 0 0 1 DRDY 0 0 0 0 0 0 0`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| CoLa A   | `02 73 57 4E 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 31 20 36 20 49 6E 4F 75 74 31 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 32 20 44 52 44 59 20 30 20 30 20 30 20 46 45 30 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 31 20 36 20 49 6E 4F 75 74 32 20 30 20 41 20 31 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 31 20 44 52 44 59 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 36 20 49 6E 4F 75 74 33 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 36 20 49 6E 4F 75 74 34 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 36 20 49 6E 4F 75 74 35 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 36 20 49 6E 4F 75 74 36 20 30 20 41 20 31 20 30 20 30 20 30 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 31 20 36 20 49 6E 4F 75 74 37 20 30 20 41 20 31 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 31 20 44 52 44 59 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 31 20 36 20 49 6E 4F 75 74 38 20 30 20 41 20 31 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 31 20 44 52 44 59 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03` |
| CoLa B   | `02 02 02 02 00 00 01 81 73 57 4E 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 01 00 06 49 6E 4F 75 74 31 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 02 44 52 44 59 00 00 00 46 45 30 31 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 32 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 33 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 34 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 35 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 36 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 37 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 38 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 0B`                                                                                                                                                                                                             |
| CoLa B   | `73 57 4E 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 01 00 06 49 6E 4F 75 74 31 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 02 44 52 44 59 00 00 00 46 45 30 31 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 32 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 33 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 34 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 35 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 06 49 6E 4F 75 74 36 00 00 0A 01 00 00 00 00 00 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 37 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 38 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 01 44 52 44 59 00 00 00 00 00 00 00 00 00 00 00`                                                                                                                                                                                                                                        |

**Telegram structure: sWA PortConfiguration**

| Telegram part | Description                      | Variable | Length | Additional details | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                            |     |
| ------------- | -------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------- | --- |
| Command type  | Answer                           | String   | 3      |                    | `sWA`               | `73 57 41`                                           |     |
| Command       | Configuration of the given ports | String   | 17     |                    | `PortConfiguration` | `50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |     |

**Example: sWA PortConfiguration**

| Protocol | Example                                                                                                                     |
| -------- | --------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sWA{SPC}PortConfiguration<ETX>`                                              |
| CoLa A   | `02 73 57 41 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 16 73 57 41 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 0C` |

### Read State of the Inputs [sRN LIDinputstate]

Use sEN LIDinputstate 1 to receive a telegram each time an input signal (e.g. by trigger) changes.

**Telegram structure: sRN LIDinputstate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |     |
| ------------- | ----------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- | --- |
| Command type  | Read        | String   | 3      |                    | `sRN`           | `73 52 4E`                               |     |
| Command       | Input state | String   | 13     |                    | `LIDinputstate` | `4C 49 44 69 6E 70 75 74 73 74 61 74 65` |     |

**Example: sRN LIDinputstate**

| Protocol | Example                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRN{SPC}LIDinputstate<ETX>`                                   |
| CoLa A   | `<STX>sRN LIDinputstate<ETX>`                                       |
| CoLa A   | `sRN LIDinputstate`                                                             |
| CoLa A   | `02 73 52 4E 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 11 73 52 4E 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 0F` |
| CoLa B   | `73 52 4E 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65`                            |

**Telegram structure: sRA LIDinputstate**

| Telegram part                                                               | Description                                                                         | Variable | Length | Additional details                        | Values CoLa A (ASCII)                          | Values CoLa B (Binary)                                                |     |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------- | ------ | ----------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------- | --- |
| Command type                                                                | Answer                                                                              | String   | 3      |                                           | `sRA`             | `73 52 41`                               |     |
| Command                                                                     | Output state                                                                        | String   | 13     |                                           | `LIDinputstate`   | `4C 49 44 69 6E 70 75 74 73 74 61 74 65` |     |
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

**Example: sRA LIDinputstate**

| Protocol | Example                                                                                                                                                                                                                                    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}LIDinputstate{SPC}1{SPC}A56CE08{SPC}2{SPC}2{SPC}0{SPC}0{SPC}1{SPC}0{SPC}2{SPC}2{SPC}1{SPC}7B2{SPC}1{SPC}1{SPC}0{SPC}2{SPC}35{SPC}708C8<ETX>`                                        |
| CoLa A   | `02 73 52 41 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 31 20 41 35 36 43 45 30 38 20 32 20 32 20 30 20 30 20 31 20 30 20 32 20 32 20 31 20 37 42 32 20 31 20 31 20 30 20 32 20 33 35 20 37 30 38 43 38 03` |
| CoLa B   | `02 02 02 02 00 00 00 2D 73 52 41 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 00 01 0A 56 CE 08 02 02 00 00 01 00 02 02 00 01 07 B2 01 01 00 02 35 00 07 08 C8 FE`                                           |

### Receive Input State by Event [sEN LIDinputstate]

Receive an event when an input state changes. Use `0` to disable the subscription.

**Telegram structure: sEN LIDinputstate**

| Telegram part | Description        | Variable | Length | Additional details  | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |
| ------------- | ------------------ | -------- | ------ | ------------------- | -------------------------------------------- | --------------------------------------------------------------------- |
| Command type  | Event subscription | String   | 3      |                     | `sEN`           | `73 45 4E`                               |
| Command       | Input state        | String   | 13     |                     | `LIDinputstate` | `4C 49 44 69 6E 70 75 74 73 74 61 74 65` |
| State         | Subscription state | Bool_1   | 1      | Disable:<br>Enable: | `0<br>1`        | `00<br>01`                               |

**Example: sEN LIDinputstate**

| Protocol | Example                                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sEN{SPC}LIDinputstate{SPC}1<ETX>`                                   |
| CoLa A   | `sEN LIDinputstate 1`                                                                 |
| CoLa A   | `02 73 45 4E 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 13 73 45 4E 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 01 39` |
| CoLa B   | `73 45 4E 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 01`                            |

**Example: sEA LIDinputstate**

| Protocol | Example                                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sEA{SPC}LIDinputstate{SPC}1<ETX>`                                   |
| CoLa A   | `02 73 45 41 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 13 73 45 41 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 01 36` |

### Read State of the Outputs [sRN LIDoutputstate]

Status of all outputs

**Telegram structure: sRN LIDoutputstate**

| Telegram part | Description  | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |     |
| ------------- | ------------ | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ | --- |
| Command type  | Read         | String   | 3      |                    | `sRN`            | `73 52 4E`                                  |     |
| Command       | Output state | String   | 14     |                    | `LIDoutputstate` | `4C 49 44 6F 75 74 70 75 74 73 74 61 74 65` |     |

**Example: sRN LIDoutputstate**

| Protocol | Example                                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}LIDoutputstate<ETX>`                                     |
| CoLa A   | `<STX>sRN LIDoutputstate<ETX>`                                         |
| CoLa A   | `sRN LIDoutputstate`                                                               |
| CoLa A   | `02 73 52 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 12 73 52 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 66` |
| CoLa B   | `73 52 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65`                            |

**Telegram structure: sRA LIDoutputstate**

| Telegram part                               | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |     |
| ------------------------------------------- | ----------- | -------- | ------ | ------------------ | --------------------- | ---------------------- | --- |
| Complete telegram structure of the answer . |             |          |        |                    |                       |                        |     |

**Example: sRA LIDoutputstate**

| Protocol | Example                                                                                                                                                                                                                                                                                             |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}LIDoutputstate{SPC}1{SPC}A56D1F0{SPC}1{SPC}0{SPC}1{SPC}1{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}7B2{SPC}1{SPC}1{SPC}0{SPC}2{SPC}35{SPC}70CB0<ETX>`                                                |
| CoLa A   | `02 73 52 41 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 31 20 41 35 36 44 31 46 30 20 31 20 30 20 31 20 31 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 31 20 31 20 31 20 31 20 31 20 37 42 32 20 31 20 31 20 30 20 32 20 33 35 20 37 30 43 42 30 03`       |
| CoLa B   | `02 02 02 02 00 00 00 4E 73 52 41 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 00 01 0A 56 D1 F0 01 00 00 00 00 01 00 00 00 01 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 01 00 00 00 01 01 00 00 00 01 00 01 07 B2 01 01 00 02 35 00 07 0C B0 0C` |

### Receive Outputstate by Event [sEN LIDoutputstate]

Output telegram is sent every time an output state changes.

**Telegram structure: sEN LIDoutputstate**

| Telegram part | Description  | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |     |
| ------------- | ------------ | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ | --- |
| Command type  | Event        | String   | 3      |                    | `sEN`            | `73 45 4E`                                  |     |
| Command       | Output state | String   | 14     |                    | `LIDoutputstate` | `4C 49 44 6F 75 74 70 75 74 73 74 61 74 65` |     |
|               | Start/stop   | Enum_8   | 1      | Start:<br>Stop:    | `1<br>0`         | `01<br>00`                                  |     |

**Example: sEN LIDoutputstate**

| Protocol | Example                                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sEN{SPC}LIDoutputstate{SPC}1<ETX>`                                     |
| CoLa A   | `sEN LIDoutputstate 1`                                                                   |
| CoLa A   | `02 73 45 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 14 73 45 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 01 50` |
| CoLa B   | `73 45 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 01`                            |

**Example: sEA LIDoutputstate**

| Protocol | Example                                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sEA{SPC}LIDoutputstate{SPC}1<ETX>`                                     |
| CoLa A   | `02 73 45 41 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 14 73 45 41 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 01 5F` |

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

**Example: sSN LIDoutputstate**

| Protocol | Example                                                                                                                                                                                                                                                                                             |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sSN{SPC}LIDoutputstate{SPC}1{SPC}70D6F68{SPC}0{SPC}1{SPC}1{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}1{SPC}0{SPC}1{SPC}0{SPC}1{SPC}7EA{SPC}A{SPC}6{SPC}9{SPC}1A{SPC}2{SPC}1CCF0<ETX>`                                                |
| CoLa A   | `02 73 53 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 31 20 37 30 44 36 46 36 38 20 30 20 31 20 31 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 31 20 30 20 31 20 30 20 31 20 37 45 41 20 41 20 36 20 39 20 31 41 20 32 20 31 43 43 46 30 03`       |
| CoLa B   | `02 02 02 02 00 00 00 4E 73 53 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 00 01 07 14 F5 30 00 00 00 00 02 01 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 01 00 00 00 00 01 00 00 00 00 00 01 07 EA 0A 06 09 1A 02 00 09 52 B8 81` |

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

| Protocol | Example                                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sMN{SPC}mDOSetOutput{SPC}1{SPC}1<ETX>`                              |
| CoLa A   | `sMN mDOSetOutput 1 1`                                                                |
| CoLa A   | `02 73 4D 4E 20 6D 44 4F 53 65 74 4F 75 74 70 75 74 20 31 20 31 03`                   |
| CoLa B   | `02 02 02 02 00 00 00 13 73 4D 4E 20 6D 44 4F 53 65 74 4F 75 74 70 75 74 20 01 01 6B` |
| CoLa B   | `73 4D 4E 20 6D 44 4F 53 65 74 4F 75 74 70 75 74 20 01 01`                            |

**Telegram structure: sAN mDOSetOutput**

| Telegram part | Description      | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |     |
| ------------- | ---------------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ | --- |
| Command type  | Answer           | String   | 3      |                    | `sAN`          | `73 41 4E`                            |     |
| Command       | Set output state | String   | 12     |                    | `mDOSetOutput` | `6D 44 4F 53 65 74 4F 75 74 70 75 74` |     |
| Status Code   | Status code      | Bool_1   | 1      | Error:<br>Success: | `0<br>1`       | `00<br>01`                            |     |

**Example: sAN mDOSetOutput**

| Protocol | Example                                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sAN{SPC}mDOSetOutput{SPC}1<ETX>`                                 |
| CoLa A   | `02 73 41 4E 20 6D 44 4F 53 65 74 4F 75 74 70 75 74 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 12 73 41 4E 20 6D 44 4F 53 65 74 4F 75 74 70 75 74 20 01 66` |

### Read Parameter [sRN LEDEnable]

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN LEDEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                    | Values CoLa B (Binary)                                    |
| ------------- | ----------- | -------- | ------ | ------------------ | ---------------------------------------- | --------------------------------------------------------- |
| Command type  | Read        | String   | 3      |                    | `sRN`       | `73 52 4E`                   |
| Command       | LEDEnable   | String   | 9      |                    | `LEDEnable` | `4C 45 44 45 6E 61 62 6C 65` |

**Example: sRN LEDEnable**

| Protocol | Example                                                                                          |
| -------- | ------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRN{SPC}LEDEnable<ETX>`                           |
| CoLa A   | `<STX>sRN LEDEnable<ETX>`                               |
| CoLa A   | `sRN LEDEnable`                                                     |
| CoLa A   | `02 73 52 4E 20 4C 45 44 45 6E 61 62 6C 65 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0D 73 52 4E 20 4C 45 44 45 6E 61 62 6C 65 23` |
| CoLa B   | `73 52 4E 20 4C 45 44 45 6E 61 62 6C 65`                            |

**Example: sRA LEDEnable**

| Protocol | Example                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}LEDEnable{SPC}1<ETX>`                           |
| CoLa A   | `02 73 52 41 20 4C 45 44 45 6E 61 62 6C 65 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0F 73 52 41 20 4C 45 44 45 6E 61 62 6C 65 20 01 0D` |

## Status

### Reset Output Counter [sMN LIDrstoutpcnt]

Reset the counter which keeps track of how often an digital output has been active (and not active). Information from the counter is included in LIDoutputstate.

**Telegram structure: sMN LIDrstoutpcnt**

| Telegram part | Description          | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |     |
| ------------- | -------------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- | --- |
| Command type  | Method               | String   | 3      |                    | `sMN`           | `73 4D 4E`                               |     |
| Command       | Reset output counter | String   | 13     |                    | `LIDrstoutpcnt` | `4C 49 44 72 73 74 6F 75 74 70 63 6E 74` |     |

**Example: sMN LIDrstoutpcnt**

| Protocol | Example                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sMN{SPC}LIDrstoutpcnt<ETX>`                                   |
| CoLa A   | `sMN LIDrstoutpcnt`                                                             |
| CoLa A   | `02 73 4D 4E 20 4C 49 44 72 73 74 6F 75 74 70 63 6E 74 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 11 73 4D 4E 20 4C 49 44 72 73 74 6F 75 74 70 63 6E 74 03` |
| CoLa B   | `73 4D 4E 20 4C 49 44 72 73 74 6F 75 74 70 63 6E 74`                            |

**Telegram structure: sAN LIDrstoutpcnt**

| Telegram part | Description          | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |     |
| ------------- | -------------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- | --- |
| Command type  | Answer               | String   | 3      |                    | `sAN`           | `73 41 4E`                               |     |
| Command       | Reset output counter | String   | 13     |                    | `LIDrstoutpcnt` | `4C 49 44 72 73 74 6F 75 74 70 63 6E 74` |     |
| Status code   | Code number          | Bool_1   | 1      | Success:<br>Error: | `0<br>1`        | `00<br>01`                               |     |

**Example: sAN LIDrstoutpcnt**

| Protocol | Example                                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sAN{SPC}LIDrstoutpcnt{SPC}0<ETX>`                                   |
| CoLa A   | `02 73 41 4E 20 4C 49 44 72 73 74 6F 75 74 70 63 6E 74 20 30 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 13 73 41 4E 20 4C 49 44 72 73 74 6F 75 74 70 63 6E 74 20 00 2F` |

### Read Firmware Version [sRN DeviceIdent]

**Telegram structure: sRN DeviceIdent**

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |     |
| ------------- | --------------------- | -------- | ------ | ------------------ | ------------------------------------------ | --------------------------------------------------------------- | --- |
| Command type  | Read                  | String   | 3      |                    | `sRN`         | `73 52 4E`                         |     |
| Command       | Read firmware version | String   | 11     |                    | `DeviceIdent` | `44 65 76 69 63 65 49 64 65 6E 74` |     |

**Example: sRN DeviceIdent**

| Protocol | Example                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRN{SPC}DeviceIdent<ETX>`                               |
| CoLa A   | `<STX>sRN DeviceIdent<ETX>`                                   |
| CoLa A   | `sRN DeviceIdent`                                                         |
| CoLa A   | `02 73 52 4E 20 44 65 76 69 63 65 49 64 65 6E 74 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0F 73 52 4E 20 44 65 76 69 63 65 49 64 65 6E 74 25` |
| CoLa B   | `73 52 4E 20 44 65 76 69 63 65 49 64 65 6E 74`                            |

**Telegram structure: sRA DeviceIdent**

| Telegram part | Description                            | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                          |     |
| ------------- | -------------------------------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------- | --- |
| Command type  | Answer                                 | String   | 3      |                    | `sRA`           | `73 52 41`                         |     |
| Command       |                                        | String   | 11     |                    | `DeviceIdent`   | `44 65 76 69 63 65 49 64 65 6E 74` |     |
| Value         | Length of firmware designation         | Enum_16  | 2      |                    | `0 ... 22h`     | `0 ... 22h`                        |     |
| Value         | Firmware designation for device family | String   |        |                    | `(See example)` | `(See example)`                    |     |
| Value         | Length of firmware version             | Enum_16  | 2      |                    | `0 ... 22h`     | `0 ... 22h`                        |     |
| Value         | Firmware version                       | String   |        |                    | `(See example)` | `(See example)`                    |     |

**Example: sRA DeviceIdent**

| Protocol | Example                                                                                                                                                                  |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}DeviceIdent{SPC}9{SPC}multiScan{SPC}8{SPC}2.4.4.0R<ETX>`                                                          |
| CoLa A   | `02 73 52 41 20 44 65 76 69 63 65 49 64 65 6E 74 20 39 20 6D 75 6C 74 69 53 63 61 6E 20 38 20 32 2E 34 2E 34 2E 30 52 03`                   |
| CoLa B   | `02 02 02 02 00 00 00 25 73 52 41 20 44 65 76 69 63 65 49 64 65 6E 74 20 00 09 6D 75 6C 74 69 53 63 61 6E 00 08 32 2E 34 2E 34 2E 30 52 23` |

### Read Version of the Application Software [sRN FirmwareVersion]

**Telegram structure: sRN FirmwareVersion**

| Telegram part | Description                              | Variable | Length | Additional details | Values CoLa A (ASCII)                          | Values CoLa B (Binary)                                                      |     |
| ------------- | ---------------------------------------- | -------- | ------ | ------------------ | ---------------------------------------------- | --------------------------------------------------------------------------- | --- |
| Command type  | Read                                     | String   | 3      |                    | `sRN`             | `73 52 4E`                                     |     |
| Command       | Read version of the application software | String   | 15     |                    | `FirmwareVersion` | `46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E` |     |

**Example: sRN FirmwareVersion**

| Protocol | Example                                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRN{SPC}FirmwareVersion<ETX>`                                       |
| CoLa A   | `<STX>sRN FirmwareVersion<ETX>`                                           |
| CoLa A   | `sRN FirmwareVersion`                                                                 |
| CoLa A   | `02 73 52 4E 20 46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 13 73 52 4E 20 46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E 24` |
| CoLa B   | `73 52 4E 20 46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E`                            |

**Telegram structure: sRA FirmwareVersion**

| Telegram part | Description                              | Variable | Length   | Additional details                       | Values CoLa A (ASCII)                          | Values CoLa B (Binary)                                                      |     |
| ------------- | ---------------------------------------- | -------- | -------- | ---------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------------- | --- |
| Command type  | Answer                                   | String   | 3        |                                          | `sRA`             | `73 52 41`                                     |     |
| Command       | Read version of the application software | String   | 15       |                                          | `FirmwareVersion` | `46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E` |     |
| Value         | Length of version                        | Uint_16  | 2        |                                          | `0 ... 28h`       | `0 ... 28h`                                    |     |
| Value         | Version                                  | String   | variable | Length is given by the preceding Uint_16 | `(See example)`   | `(See example)`                                |     |

**Example: sRA FirmwareVersion**

| Protocol | Example                                                                                                                                    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}FirmwareVersion{SPC}5{SPC}2.4.4<ETX>`                                               |
| CoLa A   | `02 73 52 41 20 46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E 20 35 20 32 2E 34 2E 34 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 1B 73 52 41 20 46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E 20 00 05 32 2E 34 2E 34 3C` |

### Read the Device State [sRN DevSta]

This telegram reads the device state.

**Telegram structure: sRN DevSta**

| Telegram part | Description                   | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |     |
| ------------- | ----------------------------- | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ | --- |
| Command type  | Read                          | String   | 3      |                    | `sRN`    | `73 52 4E`          |     |
| Command       | Read the current device state | String   | 6      |                    | `DevSta` | `44 65 76 53 74 61` |     |

**Example: sRN DevSta**

| Protocol | Example                                                                                 |
| -------- | --------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}DevSta<ETX>`                     |
| CoLa A   | `<STX>sRN DevSta<ETX>`                         |
| CoLa A   | `sRN DevSta`                                               |
| CoLa A   | `02 73 52 4E 20 44 65 76 53 74 61 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0A 73 52 4E 20 44 65 76 53 74 61 5E` |
| CoLa B   | `73 52 4E 20 44 65 76 53 74 61`                            |

**Telegram structure: sRA DevSta**

| Telegram part | Description                   | Variable | Length | Additional details                                                                                                                                                     | Values CoLa A (ASCII)                                                    | Values CoLa B (Binary)                                                            |     |
| ------------- | ----------------------------- | -------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------- | --- |
| Command type  | Answer                        | String   | 3      |                                                                                                                                                                        | `sRA`                                       | `73 52 41`                                           |     |
| Command       | Read the current device state | String   | 6      |                                                                                                                                                                        | `DevSta`                                    | `44 65 76 53 74 61`                                  |     |
| Status code   | Code number                   | Enum_8   | 1      | Reserved:<br>Startup:<br>Service mode:<br>Normal operation:<br>Suspended operation:<br>Service recommended:<br>Service required:<br>Recoverable error:<br>Fatal error: | `0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8` | `00<br>01<br>02<br>03<br>04<br>05<br>06<br>07<br>08` |     |

**Example: sRA DevSta**

| Protocol | Example                                                                                       |
| -------- | --------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}DevSta{SPC}3<ETX>`                     |
| CoLa A   | `02 73 52 41 20 44 65 76 53 74 61 20 33 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0C 73 52 41 20 44 65 76 53 74 61 20 03 72` |

### Read the Device State [sRN SCdevicestate]

This telegram reads the general device state.

**Telegram structure: sRN SCdevicestate**

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |     |
| ------------- | --------------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- | --- |
| Command type  | Read                  | String   | 3      |                    | `sRN`           | `73 52 4E`                               |     |
| Command       | Read the device state | String   | 13     |                    | `SCdevicestate` | `53 43 64 65 76 69 63 65 73 74 61 74 65` |     |

**Example: sRN SCdevicestate**

| Protocol | Example                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRN{SPC}SCdevicestate<ETX>`                                   |
| CoLa A   | `<STX>sRN SCdevicestate<ETX>`                                       |
| CoLa A   | `sRN SCdevicestate`                                                             |
| CoLa A   | `02 73 52 4E 20 53 43 64 65 76 69 63 65 73 74 61 74 65 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 11 73 52 4E 20 53 43 64 65 76 69 63 65 73 74 61 74 65 30` |
| CoLa B   | `73 52 4E 20 53 43 64 65 76 69 63 65 73 74 61 74 65`                            |

**Telegram structure: sRA SCdevicestate**

| Telegram part | Description           | Variable | Length | Additional details                    | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |     |
| ------------- | --------------------- | -------- | ------ | ------------------------------------- | -------------------------------------------- | --------------------------------------------------------------------- | --- |
| Command type  | Answer                | String   | 3      |                                       | `sRA`           | `73 52 41`                               |     |
| Command       | Read the device state | String   | 13     |                                       | `SCdevicestate` | `53 43 64 65 76 69 63 65 73 74 61 74 65` |     |
| Status code   | Code number           | Enum_8   | 1      | Busy / logged-in:<br>Ready:<br>Error: | `0<br>1<br>2`   | `00<br>01<br>02`                         |     |

**Example: sRA SCdevicestate**

| Protocol | Example                                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}SCdevicestate{SPC}1<ETX>`                                   |
| CoLa A   | `02 73 52 41 20 53 43 64 65 76 69 63 65 73 74 61 74 65 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 13 73 52 41 20 53 43 64 65 76 69 63 65 73 74 61 74 65 20 01 1E` |

### Read Device Order Number [sRN OrdNum]

This telegram reads the device order number which corresponds to the SICK part number of the device.

**Telegram structure: sRN OrdNum**

| Telegram part | Description              | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |     |
| ------------- | ------------------------ | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ | --- |
| Command type  | Read                     | String   | 3      |                    | `sRN`    | `73 52 4E`          |     |
| Command       | Read device order number | String   | 6      |                    | `OrdNum` | `4F 72 64 4E 75 6D` |     |

**Example: sRN OrdNum**

| Protocol | Example                                                                                 |
| -------- | --------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}OrdNum<ETX>`                     |
| CoLa A   | `<STX>sRN OrdNum<ETX>`                         |
| CoLa A   | `sRN OrdNum`                                               |
| CoLa A   | `02 73 52 4E 20 4F 72 64 4E 75 6D 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0A 73 52 4E 20 4F 72 64 4E 75 6D 40` |
| CoLa B   | `73 52 4E 20 4F 72 64 4E 75 6D`                            |

**Telegram structure: sRA OrdNum**

| Telegram part | Description                                        | Variable | Length | Additional details | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                     |     |
| ------------- | -------------------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------ | -------------------------------------------------------------------------- | --- |
| Command type  | Answer                                             | String   | 3      |                    | `sRA`               | `73 52 41`                                    |     |
| Command       | Read device order number                           | String   | 6      |                    | `OrdNum`            | `4F 72 64 4E 75 6D`                           |     |
| Length        | Number of characters of the following order number | Uint_16  | 2      |                    | `0h ... 20h`        | `00 00 ... 00 20`                             |     |
| Order number  | Order number in 7 digits                           | String   | 7      |                    | `0000000 … 9999999` | `00 00 00 00 00 00 00 … FF FF FF FF FF FF FF` |     |

**Example: sRA OrdNum**

| Protocol | Example                                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}OrdNum{SPC}7{SPC}1137723<ETX>`                                 |
| CoLa A   | `02 73 52 41 20 4F 72 64 4E 75 6D 20 37 20 31 31 33 37 37 32 33 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 14 73 52 41 20 4F 72 64 4E 75 6D 20 00 07 31 31 33 37 37 32 33 5A` |

### Read Serial Number [sRN SerialNumber]

Read the serial number of the device.

**Telegram structure: sRN SerialNumber**

| Telegram part | Description                      | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |     |
| ------------- | -------------------------------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ | --- |
| Command type  | Read                             | String   | 3      |                    | `sRN`          | `73 52 4E`                            |     |
| Command       | Read serial number of the device | String   | 12     |                    | `SerialNumber` | `53 65 72 69 61 6C 4E 75 6D 62 65 72` |     |

**Example: sRN SerialNumber**

| Protocol | Example                                                                                                   |
| -------- | --------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}SerialNumber<ETX>`                                 |
| CoLa A   | `<STX>sRN SerialNumber<ETX>`                                     |
| CoLa A   | `sRN SerialNumber`                                                           |
| CoLa A   | `02 73 52 4E 20 53 65 72 69 61 6C 4E 75 6D 62 65 72 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 10 73 52 4E 20 53 65 72 69 61 6C 4E 75 6D 62 65 72 4C` |
| CoLa B   | `73 52 4E 20 53 65 72 69 61 6C 4E 75 6D 62 65 72`                            |

**Telegram structure: sRA SerialNumber**

| Telegram part           | Description                                               | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                             |     |
| ----------------------- | --------------------------------------------------------- | -------- | ------ | ------------------ | -------------------------------------------- | ------------------------------------------------------------------ | --- |
| Command type            | Answer                                                    | String   | 3      |                    | `sRA`           | `73 52 41`                            |     |
| Command                 | Read serial number of the device                          | String   | 12     |                    | `SerialNumber`  | `53 65 72 69 61 6C 4E 75 6D 62 65 72` |     |
| Length of serial number | Number of characters of the serial number                 | Uint_16  | 2      |                    | `0 ... 8h`      | `00 00 ... 00 08h`                    |     |
| Serial number           | Production period (year, calendar week, number): YYWWxxxx | String   | 8      |                    | `(See example)` | `(See example)`                       |     |

**Example: sRA SerialNumber**

| Protocol | Example                                                                                                                                    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}SerialNumber{SPC}8{SPC}24480041<ETX>`                                               |
| CoLa A   | `02 73 52 41 20 53 65 72 69 61 6C 4E 75 6D 62 65 72 20 38 20 32 34 34 38 30 30 34 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 1B 73 52 41 20 53 65 72 69 61 6C 4E 75 6D 62 65 72 20 00 08 32 34 34 38 30 30 34 31 64` |

### Read Device Type [sRN DItype]

This telegram asks for the device type of the product family.

**Telegram structure: sRN DItype**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |     |
| ------------- | ----------- | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ | --- |
| Command type  | Read        | String   | 3      |                    | `sRN`    | `73 52 4E`          |     |
| Command       | Ask state   | String   | 6      |                    | `DItype` | `44 49 74 79 70 65` |     |

**Example: sRN DItype**

| Protocol | Example                                                                                 |
| -------- | --------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}DItype<ETX>`                     |
| CoLa A   | `<STX>sRN DItype<ETX>`                         |
| CoLa A   | `sRN DItype`                                               |
| CoLa A   | `02 73 52 4E 20 44 49 74 79 70 65 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0A 73 52 4E 20 44 49 74 79 70 65 5A` |
| CoLa B   | `73 52 4E 20 44 49 74 79 70 65`                            |

**Telegram structure: sRA DItype**

| Telegram part      | Description                                        | Variable | Length | Additional details     | Values CoLa A (ASCII)                               | Values CoLa B (Binary)                           |     |
| ------------------ | -------------------------------------------------- | -------- | ------ | ---------------------- | --------------------------------------------------- | ------------------------------------------------ | --- |
| Command type       | Answer                                             | String   | 3      |                        | `sRA`                  | `73 52 41`          |     |
| Command            | Ask state                                          | String   | 6      |                        | `DItype`               | `44 49 74 79 70 65` |     |
| Length of type key | Number of digits of the following type code length | Uint_16  | 2      | String length in bytes | `0 ... FFFF`           | `00 00 ... FF FF`   |     |
| Device type        | Type code of the device                            | String   | (var.) |                        | `(Device type)`        | `(Device type)`     |     |

**Example: sRA DItype**

| Protocol | Example                                                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}DItype{SPC}C{SPC}multiScan165<ETX>`                                           |
| CoLa A   | `02 73 52 41 20 44 49 74 79 70 65 20 43 20 6D 75 6C 74 69 53 63 61 6E 31 36 35 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 19 73 52 41 20 44 49 74 79 70 65 20 00 0C 6D 75 6C 74 69 53 63 61 6E 31 36 35 1D` |

### Read Operating Hours [sRN ODoprh]

Views the total number of operating hours during the lifetime of the device.

**Telegram structure: sRN ODoprh**

| Telegram part | Description          | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |     |
| ------------- | -------------------- | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ | --- |
| Command type  | Read                 | String   | 3      |                    | `sRN`    | `73 52 4E`          |     |
| Command       | Read operating hours | String   | 6      |                    | `ODoprh` | `4F 44 6F 70 72 68` |     |

**Example: sRN ODoprh**

| Protocol | Example                                                                                 |
| -------- | --------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}ODoprh<ETX>`                     |
| CoLa A   | `<STX>sRN ODoprh<ETX>`                         |
| CoLa A   | `sRN ODoprh`                                               |
| CoLa A   | `02 73 52 4E 20 4F 44 6F 70 72 68 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0A 73 52 4E 20 4F 44 6F 70 72 68 41` |
| CoLa B   | `73 52 4E 20 4F 44 6F 70 72 68`                            |

**Telegram structure: sRA ODoprh**

| Telegram part | Description               | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                  |     |
| ------------- | ------------------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------- | --- |
| Command type  | Answer                    | String   | 3      |                    | `sRA`            | `73 52 41`                 |     |
| Command       | Read operating hours      | String   | 6      |                    | `ODoprh`         | `4F 44 6F 70 72 68`        |     |
| Value         | Operating hours in 1/10 h | Uint_32  | 4      |                    | `0h … FFFFFFFFh` | `00 00 00 00 …FF FF FF FF` |     |

Calculation of the value: 1B50B (hex) 111883 (dez) × 1/10 h = 11188.3 h

**Example: sRA ODoprh**

| Protocol | Example                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}ODoprh{SPC}413<ETX>`                            |
| CoLa A   | `02 73 52 41 20 4F 44 6F 70 72 68 20 34 31 33 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 0F 73 52 41 20 4F 44 6F 70 72 68 20 00 00 04 13 79` |

### Read Operating Hours Since Last Power On [sRN ODopdaily]

Shows the runtime duration since the last power on of the device.

**Telegram structure: sRN ODopdaily**

| Telegram part | Description          | Variable | Length | Additional details | Values CoLa A (ASCII)                    | Values CoLa B (Binary)                                    |     |
| ------------- | -------------------- | -------- | ------ | ------------------ | ---------------------------------------- | --------------------------------------------------------- | --- |
| Command type  | Read                 | String   | 3      |                    | `sRN`       | `73 52 4E`                   |     |
| Command       | Read operating hours | String   | 9      |                    | `ODopdaily` | `4F 44 6F 70 64 61 69 6C 79` |     |

**Example: sRN ODopdaily**

| Protocol | Example                                                                                          |
| -------- | ------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRN{SPC}ODopdaily<ETX>`                           |
| CoLa A   | `<STX>sRN ODopdaily<ETX>`                               |
| CoLa A   | `sRN ODopdaily`                                                     |
| CoLa A   | `02 73 52 4E 20 4F 44 6F 70 64 61 69 6C 79 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0D 73 52 4E 20 4F 44 6F 70 64 61 69 6C 79 22` |
| CoLa B   | `73 52 4E 20 4F 44 6F 70 64 61 69 6C 79`                            |

**Telegram structure: sRA ODopdaily**

| Telegram part | Description                              | Variable                           | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                    |     |
| ------------- | ---------------------------------------- | ---------------------------------- | ------ | ------------------ | --------------------------------------------- | --------------------------------------------------------- | --- |
| Command type  | Answer                                   | String                             | 3      |                    | `sRA`            | `73 52 41`                   |     |
| Command       | Read operating hours since last power on | String                             | 9      |                    | `ODopdaily`      | `4F 44 6F 70 64 61 69 6C 79` |     |
| Value         | Operating hours in 1/10 h                | Real as float according to IEEE754 | 4      |                    | `0h … FFFFFFFFh` | `00 00 00 00 …FF FF FF FF`   |     |

**Example: sRA ODopdaily**

| Protocol | Example                                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}ODopdaily{SPC}3E088B3B<ETX>`                             |
| CoLa A   | `02 73 52 41 20 4F 44 6F 70 64 61 69 6C 79 20 33 45 30 38 38 42 33 42 03`          |
| CoLa B   | `02 02 02 02 00 00 00 12 73 52 41 20 4F 44 6F 70 64 61 69 6C 79 20 3E 08 8B 3B 8B` |

### Read Power on Counter [sRN ODpwrc]

Shows the number of power on cycles.

**Telegram structure: sRN ODpwrc**

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |     |
| ------------- | --------------------- | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ | --- |
| Command type  | Read                  | String   | 3      |                    | `sRN`    | `73 52 4E`          |     |
| Command       | Read power on counter | String   | 6      |                    | `ODpwrc` | `4F 44 70 77 72 63` |     |

**Example: sRN ODpwrc**

| Protocol | Example                                                                                 |
| -------- | --------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}ODpwrc<ETX>`                     |
| CoLa A   | `<STX>sRN ODpwrc<ETX>`                         |
| CoLa A   | `sRN ODpwrc`                                               |
| CoLa A   | `02 73 52 4E 20 4F 44 70 77 72 63 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0A 73 52 4E 20 4F 44 70 77 72 63 52` |
| CoLa B   | `73 52 4E 20 4F 44 70 77 72 63`                            |

**Telegram structure: sRA ODpwrc**

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                  |     |
| ------------- | --------------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------- | --- |
| Command type  | Answer                | String   | 3      |                    | `sRA`            | `73 52 41`                 |     |
| Command       | Read power on counter | String   | 6      |                    | `ODpwrc`         | `4F 44 70 77 72 63`        |     |
| Value         | Power on counter      | Uint_32  | 4      |                    | `0h … FFFFFFFFh` | `00 00 00 00 …FF FF FF FF` |     |

**Example: sRA ODpwrc**

| Protocol | Example                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}ODpwrc{SPC}6E<ETX>`                             |
| CoLa A   | `02 73 52 41 20 4F 44 70 77 72 63 20 36 45 03`                            |
| CoLa B   | `02 02 02 02 00 00 00 0F 73 52 41 20 4F 44 70 77 72 63 20 00 00 00 6E 13` |

### Read Temperature [sRN OPcurtmpdev]

With this command the internal temperature of the device can be identified. Please note that it does not give an indication of the current ambient temperature.

**Telegram structure: sRN OPcurtmpdev**

| Telegram part | Description                    | Variable | Length | Additional details | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |     |
| ------------- | ------------------------------ | -------- | ------ | ------------------ | ------------------------------------------ | --------------------------------------------------------------- | --- |
| Command type  | Read                           | String   | 3      |                    | `sRN`         | `73 52 4E`                         |     |
| Command       | Read temperature of the device | String   | 11     |                    | `OPcurtmpdev` | `4F 50 63 75 72 74 6D 70 64 65 76` |     |

**Example: sRN OPcurtmpdev**

| Protocol | Example                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRN{SPC}OPcurtmpdev<ETX>`                               |
| CoLa A   | `<STX>sRN OPcurtmpdev<ETX>`                                   |
| CoLa A   | `sRN OPcurtmpdev`                                                         |
| CoLa A   | `02 73 52 4E 20 4F 50 63 75 72 74 6D 70 64 65 76 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0F 73 52 4E 20 4F 50 63 75 72 74 6D 70 64 65 76 2A` |
| CoLa B   | `73 52 4E 20 4F 50 63 75 72 74 6D 70 64 65 76`                            |

**Telegram structure: sRA OPcurtmpdev**

| Telegram part    | Description                    | Variable                           | Length | Additional details | Values CoLa A (ASCII)                                | Values CoLa B (Binary)                                          |     |
| ---------------- | ------------------------------ | ---------------------------------- | ------ | ------------------ | ---------------------------------------------------- | --------------------------------------------------------------- | --- |
| Command type     | Answer                         | String                             | 3      |                    | `sRA`                   | `73 52 41`                         |     |
| Command          | Read temperature of the device | String                             | 11     |                    | `OPcurtmpdev`           | `4F 50 63 75 72 74 6D 70 64 65 76` |     |
| Temperature data | [°C]                           | Real as float according to IEEE754 | 4      | (-50°C … +100°C)   | `C2480000h … 42C80000h` | `C2 48 00 00 … 42 C8 00 00`        |     |

**Example: sRA OPcurtmpdev**

| Protocol | Example                                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}OPcurtmpdev{SPC}422BDE83<ETX>`                                 |
| CoLa A   | `02 73 52 41 20 4F 50 63 75 72 74 6D 70 64 65 76 20 34 32 32 42 44 45 38 33 03`          |
| CoLa B   | `02 02 02 02 00 00 00 14 73 52 41 20 4F 50 63 75 72 74 6D 70 64 65 76 20 42 2B DE 83 31` |

### Set Device Name [sWN LocationName]

Give the device a specific description name such as its location.

**Telegram structure: sWN LocationName**

| Telegram part | Description                                       | Variable | Length | Additional details | Values CoLa A (ASCII)                                | Values CoLa B (Binary)                                             |     |
| ------------- | ------------------------------------------------- | -------- | ------ | ------------------ | ---------------------------------------------------- | ------------------------------------------------------------------ | --- |
| Command type  | Write                                             | String   | 3      |                    | `sWN`                   | `73 57 4E`                            |     |
| Command       | Set device name                                   | String   | 12     |                    | `LocationName`          | `4C 6F 63 61 74 69 6F 6E 4E 61 6D 65` |     |
| Value         | Number of characters of the following device name | Uint_16  | 2      |                    | `0d … +16d (0h … 10h )` | `00 00 … 00 10`                       |     |
| Value         | Device name                                       | String   | 32     |                    | `[Device name]`         | `[Device name]`                       |     |

**Example: sWN LocationName**

| Protocol | Example                                                                                                                                       |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sWN{SPC}LocationName{SPC}9{SPC}BenchTest<ETX>`                                                 |
| CoLa A   | `sWN LocationName 9 BenchTest`                                                                                   |
| CoLa A   | `02 73 57 4E 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 20 39 20 42 65 6E 63 68 54 65 73 74 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 1C 73 57 4E 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 20 00 09 42 65 6E 63 68 54 65 73 74 0D` |
| CoLa B   | `73 57 4E 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 20 00 09 42 65 6E 63 68 54 65 73 74`                            |

**Telegram structure: sWA LocationName**

| Telegram part | Description     | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |     |
| ------------- | --------------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ | --- |
| Command type  | Answer          | String   | 3      |                    | `sWA`          | `73 57 41`                            |     |
| Command       | Set device name | String   | 12     |                    | `LocationName` | `4C 6F 63 61 74 69 6F 6E 4E 61 6D 65` |     |

**Example: sWA LocationName**

| Protocol | Example                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWA{SPC}LocationName<ETX>`                                    |
| CoLa A   | `02 73 57 41 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 11 73 57 41 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 20 7F` |

### Read Device Name [sRN LocationName]

Read the given name of the device (Default is the serial number of the device).

**Telegram structure: sRN LocationName**

| Telegram part | Description      | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |     |
| ------------- | ---------------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ | --- |
| Command type  | Read             | String   | 3      |                    | `sRN`          | `73 52 4E`                            |     |
| Command       | Read device name | String   | 12     |                    | `LocationName` | `4C 6F 63 61 74 69 6F 6E 4E 61 6D 65` |     |

**Example: sRN LocationName**

| Protocol | Example                                                                                                   |
| -------- | --------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}LocationName<ETX>`                                 |
| CoLa A   | `<STX>sRN LocationName<ETX>`                                     |
| CoLa A   | `sRN LocationName`                                                           |
| CoLa A   | `02 73 52 4E 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 10 73 52 4E 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 55` |
| CoLa B   | `73 52 4E 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65`                            |

**Telegram structure: sRA LocationName**

| Telegram part                                     | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |     |
| ------------------------------------------------- | ----------- | -------- | ------ | ------------------ | --------------------- | ---------------------- | --- |
| Find complete telegram structure of the answer in |             |          |        |                    |                       |                        |     |

**Example: sRA LocationName**

| Protocol | Example                                                                                                                                                                           |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}LocationName{SPC}15{SPC}multiScan165{SPC}24480041<ETX>`                                                                    |
| CoLa A   | `02 73 52 41 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 20 31 35 20 6D 75 6C 74 69 53 63 61 6E 31 36 35 20 32 34 34 38 30 30 34 31 03`                   |
| CoLa B   | `02 02 02 02 00 00 00 28 73 52 41 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 20 00 15 6D 75 6C 74 69 53 63 61 6E 31 36 35 20 32 34 34 38 30 30 34 31 24` |

### Initiate an Acoustic or Visual Signal for a Defined Period of Time [sMN FindMe]

This command can be used to make the device easier to find.

**Telegram structure: sMN FindMe**

| Telegram part  | Description                           | Variable | Length | Additional details | Values CoLa A (ASCII)                                    | Values CoLa B (Binary)                           |     |
| -------------- | ------------------------------------- | -------- | ------ | ------------------ | -------------------------------------------------------- | ------------------------------------------------ | --- |
| Command type   | Method                                | String   | 3      |                    | `sMN`                       | `73 4D 4E`          |     |
| Command        | Initiate an acoustic or visual signal | String   | 6      |                    | `FindMe`                    | `46 69 6E 64 4D 65` |     |
| Period of time | Duration in seconds                   | Uint_16  | 2      |                    | `0d … 65535d (0h .. FF FF)` | `00 ... FF FF`      |     |

**Example: sMN FindMe**

| Protocol | Example                                                                                          |
| -------- | ------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sMN{SPC}FindMe{SPC}1<ETX>`                        |
| CoLa A   | `sMN FindMe 1`                                                      |
| CoLa A   | `02 73 4D 4E 20 46 69 6E 64 4D 65 20 31 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 0D 73 4D 4E 20 46 69 6E 64 4D 65 20 00 01 7C` |
| CoLa B   | `73 4D 4E 20 46 69 6E 64 4D 65 20 00 01`                            |

**Telegram structure: sAN FindMe**

| Telegram part | Description                           | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |     |
| ------------- | ------------------------------------- | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ | --- |
| Command type  | Answer                                | String   | 3      |                    | `sAN`    | `73 41 4E`          |     |
| Command       | Initiate an acoustic or visual signal | String   | 6      |                    | `FindMe` | `46 69 6E 64 4D 65` |     |

**Example: sAN FindMe**

| Protocol | Example                                                                                    |
| -------- | ------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sAN{SPC}FindMe<ETX>`                        |
| CoLa A   | `02 73 41 4E 20 46 69 6E 64 4D 65 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 0B 73 41 4E 20 46 69 6E 64 4D 65 20 71` |

### Read Date of Last Permanent Save [sRN DIpara]

This command reads the date at which the last permanent save was executed.

**Telegram structure: sRN DIpara**

| Telegram part | Description                      | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |     |
| ------------- | -------------------------------- | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ | --- |
| Command type  | Read                             | String   | 3      |                    | `sRN`    | `73 52 4E`          |     |
| Command       | Read date of last permanent save | String   | 6      |                    | `DIpara` | `44 49 70 61 72 61` |     |

**Example: sRN DIpara**

| Protocol | Example                                                                                 |
| -------- | --------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}DIpara<ETX>`                     |
| CoLa A   | `<STX>sRN DIpara<ETX>`                         |
| CoLa A   | `sRN DIpara`                                               |
| CoLa A   | `02 73 52 4E 20 44 49 70 61 72 61 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0A 73 52 4E 20 44 49 70 61 72 61 40` |
| CoLa B   | `73 52 4E 20 44 49 70 61 72 61`                            |

**Telegram structure: sRA DIpara**

| Telegram part               | Description                                       | Variable   | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                           |     |
| --------------------------- | ------------------------------------------------- | ---------- | ------ | ------------------ | -------------------------------------------- | ------------------------------------------------ | --- |
| Command type                | Answer                                            | String     | 3      |                    | `sRA`           | `73 52 41`          |     |
| Command                     | Read date of last permanent save                  | String     | 6      |                    | `DIpara`        | `44 49 70 61 72 61` |     |
| String length               | Number of bytes in the following date/time string | Uint_16    | 2      | Always:            | `Ah`            | `00 0A`             |     |
| Date of last permanent save | DD.MM.YYYY                                        | FlexString | 10     |                    | `(see example)` | `(see example)`     |     |

**Example: sRA DIpara**

| Protocol | Example                                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}DIpara{SPC}A{SPC}06.10.2026<ETX>`                                       |
| CoLa A   | `02 73 52 41 20 44 49 70 61 72 61 20 41 20 30 36 2E 31 30 2E 32 30 32 36 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 17 73 52 41 20 44 49 70 61 72 61 20 00 0A 30 36 2E 31 30 2E 32 30 32 36 64` |

### Read Time of Last Permanent Save [sRN DIparatm]

This command reads the time at which the last permanent save was executed.

**Telegram structure: sRN DIparatm**

| Telegram part | Description                      | Variable | Length | Additional details | Values CoLa A (ASCII)                   | Values CoLa B (Binary)                                 |     |
| ------------- | -------------------------------- | -------- | ------ | ------------------ | --------------------------------------- | ------------------------------------------------------ | --- |
| Command type  | Read                             | String   | 3      |                    | `sRN`      | `73 52 4E`                |     |
| Command       | Read time of last permanent save | String   | 8      |                    | `DIparatm` | `44 49 70 61 72 61 74 6D` |     |

**Example: sRN DIparatm**

| Protocol | Example                                                                                       |
| -------- | --------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}DIparatm<ETX>`                         |
| CoLa A   | `<STX>sRN DIparatm<ETX>`                             |
| CoLa A   | `sRN DIparatm`                                                   |
| CoLa A   | `02 73 52 4E 20 44 49 70 61 72 61 74 6D 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0C 73 52 4E 20 44 49 70 61 72 61 74 6D 59` |
| CoLa B   | `73 52 4E 20 44 49 70 61 72 61 74 6D`                            |

**Telegram structure: sRA DIparatm**

| Telegram part               | Description                                       | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                 |     |
| --------------------------- | ------------------------------------------------- | -------- | ------ | ------------------ | -------------------------------------------- | ------------------------------------------------------ | --- |
| Command type                | Answer                                            | String   | 3      |                    | `sRA`           | `73 52 41`                |     |
| Command                     | Read time of last permanent save                  | String   | 8      |                    | `DIparatm`      | `44 49 70 61 72 61 74 6D` |     |
| String length               | Number of bytes in the following date/time string | Uint_16  | 2      | Always:            | `5h`            | `00 05`                   |     |
| Time of last permanent save | HH:MM                                             | String   | 5      |                    | `(see example)` | `(see example)`           |     |

**Example: sRA DIparatm**

| Protocol | Example                                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}DIparatm{SPC}5{SPC}10:30<ETX>`                                 |
| CoLa A   | `02 73 52 41 20 44 49 70 61 72 61 74 6D 20 35 20 31 30 3A 33 30 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 14 73 52 41 20 44 49 70 61 72 61 74 6D 20 00 05 31 30 3A 33 30 4B` |

### Read the Current Device Temperature Alarm Status [sRN temperatureAlarmStatus]

Current device temperature alarm status. If true, the configured temperature alarm is active.

**Telegram structure: sRN temperatureAlarmStatus**

| Telegram part | Description                     | Variable | Length | Additional details | Values CoLa A (ASCII)                                 | Values CoLa B (Binary)                                                                           |     |
| ------------- | ------------------------------- | -------- | ------ | ------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ | --- |
| Command type  | Read                            | String   | 3      |                    | `sRN`                    | `73 52 4E`                                                          |     |
| Command       | Device temperature alarm status | String   | 22     |                    | `temperatureAlarmStatus` | `74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 53 74 61 74 75 73` |     |

**Example: sRN temperatureAlarmStatus**

| Protocol | Example                                                                                                                                 |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}temperatureAlarmStatus<ETX>`                                                     |
| CoLa A   | `<STX>sRN temperatureAlarmStatus<ETX>`                                                         |
| CoLa A   | `sRN temperatureAlarmStatus`                                                                               |
| CoLa A   | `02 73 52 4E 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 53 74 61 74 75 73 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 1A 73 52 4E 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 53 74 61 74 75 73 44` |
| CoLa B   | `73 52 4E 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 53 74 61 74 75 73`                            |

**Telegram structure: sRA temperatureAlarmStatus**

| Telegram part | Description                     | Variable | Length | Additional details    | Values CoLa A (ASCII)                                 | Values CoLa B (Binary)                                                                           |     |
| ------------- | ------------------------------- | -------- | ------ | --------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ | --- |
| Command type  | Answer                          | String   | 3      |                       | `sRA`                    | `73 52 41`                                                          |     |
| Command       | Device temperature alarm status | String   | 22     |                       | `temperatureAlarmStatus` | `74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 53 74 61 74 75 73` |     |
| Data          | Alarm state                     | Bool_1   | 1      | Disabled:<br>Enabled: | `0d (00h)<br>+1d (01h)`  | `00 ... 01`                                                         |     |

**Example: sRA temperatureAlarmStatus**

| Protocol | Example                                                                                                                                       |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}temperatureAlarmStatus{SPC}0<ETX>`                                                     |
| CoLa A   | `02 73 52 41 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 53 74 61 74 75 73 20 30 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 1C 73 52 41 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 53 74 61 74 75 73 20 00 6B` |

### Set Device Temperature Alarm Configuration [sWN temperatureAlarmConfiguration]

Sets the upper and lower threshold for the temperature alarm status.

**Telegram structure: sWN temperatureAlarmConfiguration**

| Telegram part | Description                            | Variable | Length | Additional details | Values CoLa A (ASCII)                                        | Values CoLa B (Binary)                                                                                                |     |
| ------------- | -------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | --- |
| Command type  | Write                                  | String   | 3      |                    | `sWN`                           | `73 57 4E`                                                                               |     |
| Command       | Device temperature alarm configuration | String   | 29     |                    | `temperatureAlarmConfiguration` | `74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |     |
| Data 1        | Upper threshold [°C]                   | Int_8    | 1      | Default: 55        | `-128d ... +127d (80h ... 7Fh)` | `80 ... 7F`                                                                              |     |
| Data 2        | Lower threshold [°C]                   | Int_8    | 1      | Default: 50        | `-128d ... +127d (80h ... 7Fh)` | `80 ... 7F`                                                                              |     |

**Example: sWN temperatureAlarmConfiguration**

| Protocol | Example                                                                                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sWN{SPC}temperatureAlarmConfiguration{SPC}37{SPC}32<ETX>`                                                              |
| CoLa A   | `sWN temperatureAlarmConfiguration 37 32`                                                                                                |
| CoLa A   | `02 73 57 4E 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 33 37 20 33 32 03`             |
| CoLa B   | `02 02 02 02 00 00 00 24 73 57 4E 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 37 32 00` |
| CoLa B   | `73 57 4E 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 37 32`                            |

**Telegram structure: sWA temperatureAlarmConfiguration**

| Telegram part | Description                            | Variable | Length | Additional details | Values CoLa A (ASCII)                                        | Values CoLa B (Binary)                                                                                                |     |
| ------------- | -------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | --- |
| Command type  | Answer                                 | String   | 3      |                    | `sWA`                           | `73 57 41`                                                                               |     |
| Command       | Device temperature alarm configuration | String   | 29     |                    | `temperatureAlarmConfiguration` | `74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |     |

**Example: sWA temperatureAlarmConfiguration**

| Protocol | Example                                                                                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sWA{SPC}temperatureAlarmConfiguration<ETX>`                                                                      |
| CoLa A   | `02 73 57 41 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 22 73 57 41 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 0A` |

### Read Device Temperature Alarm Configuration [sRN temperatureAlarmConfiguration]

Returns the upper and lower threshold for the temperature alarm status.

**Telegram structure: sRN temperatureAlarmConfiguration**

| Telegram part | Description                            | Variable | Length | Additional details | Values CoLa A (ASCII)                                        | Values CoLa B (Binary)                                                                                                |     |
| ------------- | -------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | --- |
| Command type  | Read                                   | String   | 3      |                    | `sRN`                           | `73 52 4E`                                                                               |     |
| Command       | Device temperature alarm configuration | String   | 29     |                    | `temperatureAlarmConfiguration` | `74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |     |

**Example: sRN temperatureAlarmConfiguration**

| Protocol | Example                                                                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRN{SPC}temperatureAlarmConfiguration<ETX>`                                                                   |
| CoLa A   | `<STX>sRN temperatureAlarmConfiguration<ETX>`                                                                       |
| CoLa A   | `sRN temperatureAlarmConfiguration`                                                                                             |
| CoLa A   | `02 73 52 4E 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 21 73 52 4E 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20` |
| CoLa B   | `73 52 4E 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E`                            |

**Telegram structure: sRA temperatureAlarmConfiguration**

| Telegram part | Description                            | Variable | Length | Additional details | Values CoLa A (ASCII)                                        | Values CoLa B (Binary)                                                                                                |     |
| ------------- | -------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | --- |
| Command type  | Answer                                 | String   | 3      |                    | `sRA`                           | `73 52 41`                                                                               |     |
| Command       | Device temperature alarm configuration | String   | 29     |                    | `temperatureAlarmConfiguration` | `74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |     |
| Data 1        | Upper threshold [°C]                   | Int_8    | 1      | Default: 55        | `-128d ... +127d (80h ... 7Fh)` | `80 ... 7F`                                                                              |     |
| Data 2        | Lower threshold [°C]                   | Int_8    | 1      | Default: 50        | `-128d ... +127d (80h ... 7Fh)` | `80 ... 7F`                                                                              |     |

**Example: sRA temperatureAlarmConfiguration**

| Protocol | Example                                                                                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}temperatureAlarmConfiguration{SPC}37{SPC}32<ETX>`                                                              |
| CoLa A   | `02 73 52 41 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 33 37 20 33 32 03`             |
| CoLa B   | `02 02 02 02 00 00 00 24 73 52 41 20 74 65 6D 70 65 72 61 74 75 72 65 41 6C 61 72 6D 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 37 32 0A` |

## Interfaces

### Set IP Address [sWN EIIpAddr]

Save permanently to set values. Changes will be active after rebooting the device. Settings must correspond with network in which scanner is used. Else device cannot be found any more.

**Telegram structure: sWN EIIpAddr**

| Telegram part | Description    | Variable | Length | Additional details        | Values CoLa A (ASCII)                               | Values CoLa B (Binary)                                 |     |
| ------------- | -------------- | -------- | ------ | ------------------------- | --------------------------------------------------- | ------------------------------------------------------ | --- |
| Command type  | Write          | String   | 3      |                           | `sWN`                  | `73 57 4E`                |     |
| Command       | Set IP address | String   | 8      |                           | `EIIpAddr`             | `45 49 49 70 41 64 64 72` |     |
| IP address    | Set values     | Uint_8   | 1      | First part of IP address  | `0 …+255d (00 ... FF)` | `00 … FF`                 |     |
| IP address    | Set values     | Uint_8   | 1      | Second part of IP address | `0 …+255d (00 ... FF)` | `00 … FF`                 |     |
| IP address    | Set values     | Uint_8   | 1      | Third part of IP address  | `0 …+255d (00 ... FF)` | `00 … FF`                 |     |
| IP address    | Set values     | Uint_8   | 1      | Fourth part of IP address | `0 …+255d (00 ... FF)` | `00 … FF`                 |     |

**Example: sWN EIIpAddr**

| Protocol | Example                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWN{SPC}EIIpAddr{SPC}C0{SPC}A8{SPC}0{SPC}1<ETX>`              |
| CoLa A   | `sWN EIIpAddr C0 A8 0 1`                                                        |
| CoLa A   | `02 73 57 4E 20 45 49 49 70 41 64 64 72 20 43 30 20 41 38 20 30 20 31 03`       |
| CoLa B   | `02 02 02 02 00 00 00 11 73 57 4E 20 45 49 49 70 41 64 64 72 20 C0 A8 00 01 05` |
| CoLa B   | `73 57 4E 20 45 49 49 70 41 64 64 72 20 C0 A8 00 01`                            |

**Telegram structure: sWA EIIpAddr**

| Telegram part | Description    | Variable | Length | Additional details | Values CoLa A (ASCII)                   | Values CoLa B (Binary)                                 |     |
| ------------- | -------------- | -------- | ------ | ------------------ | --------------------------------------- | ------------------------------------------------------ | --- |
| Command type  | Answer         | String   | 3      |                    | `sWA`      | `73 57 41`                |     |
| Command       | Set IP address | String   | 8      |                    | `EIIpAddr` | `45 49 49 70 41 64 64 72` |     |

**Example: sWA EIIpAddr**

| Protocol | Example                                                                                          |
| -------- | ------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWA{SPC}EIIpAddr<ETX>`                            |
| CoLa A   | `02 73 57 41 20 45 49 49 70 41 64 64 72 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 0D 73 57 41 20 45 49 49 70 41 64 64 72 20 63` |

### Read IP Address [sRN EIIpAddr]

Read the IP address of the device.

**Telegram structure: sRN EIIpAddr**

| Telegram part | Description     | Variable | Length | Additional details | Values CoLa A (ASCII)                   | Values CoLa B (Binary)                                 |     |
| ------------- | --------------- | -------- | ------ | ------------------ | --------------------------------------- | ------------------------------------------------------ | --- |
| Command type  | Read            | String   | 3      |                    | `sRN`      | `73 52 4E`                |     |
| Command       | Read IP address | String   | 8      |                    | `EIIpAddr` | `45 49 49 70 41 64 64 72` |     |

**Example: sRN EIIpAddr**

| Protocol | Example                                                                                       |
| -------- | --------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}EIIpAddr<ETX>`                         |
| CoLa A   | `<STX>sRN EIIpAddr<ETX>`                             |
| CoLa A   | `sRN EIIpAddr`                                                   |
| CoLa A   | `02 73 52 4E 20 45 49 49 70 41 64 64 72 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0C 73 52 4E 20 45 49 49 70 41 64 64 72 49` |
| CoLa B   | `73 52 4E 20 45 49 49 70 41 64 64 72`                            |

**Telegram structure: sRA EIIpAddr**

| Telegram part | Description          | Variable | Length | Additional details        | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                 |     |
| ------------- | -------------------- | -------- | ------ | ------------------------- | ------------------------------------------------- | ------------------------------------------------------ | --- |
| Command type  | Answer               | String   | 3      |                           | `sRA`                | `73 52 41`                |     |
| Command       | Read IP address      | String   | 8      |                           | `EIIpAddr`           | `45 49 49 70 41 64 64 72` |     |
| IP address    | Default: 192.168.0.1 | Uint_8   | 1      | First part of IP address  | `0 …+255d (00 … FF)` | `00 … FF`                 |     |
| IP address    | Default: 192.168.0.1 | Uint_8   | 1      | Second part of IP address | `0 …+255d (00 … FF)` | `00 … FF`                 |     |
| IP address    | Default: 192.168.0.1 | Uint_8   | 1      | Third part of IP address  | `0 …+255d (00 … FF)` | `00 … FF`                 |     |
| IP address    | Default: 192.168.0.1 | Uint_8   | 1      | Fourth part of IP address | `0 …+255d (00 … FF)` | `00 … FF`                 |     |

**Example: sRA EIIpAddr**

| Protocol | Example                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}EIIpAddr{SPC}C0{SPC}A8{SPC}0{SPC}1<ETX>`              |
| CoLa A   | `02 73 52 41 20 45 49 49 70 41 64 64 72 20 43 30 20 41 38 20 30 20 31 03`       |
| CoLa B   | `02 02 02 02 00 00 00 11 73 52 41 20 45 49 49 70 41 64 64 72 20 C0 A8 00 01 0F` |

### Read IP Address Assigned by DHCP [sRN EIIpAddrDHCP]

DHCP needs to be set as mode for ethernet assignment.

**Telegram structure: sRN EIIpAddrDHCP**

| Telegram part | Description                      | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |     |
| ------------- | -------------------------------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ | --- |
| Command type  | Read                             | String   | 3      |                    | `sRN`          | `73 52 4E`                            |     |
| Command       | Read IP address assigned by DHCP | String   | 12     |                    | `EIIpAddrDHCP` | `45 49 49 70 41 64 64 72 44 48 43 50` |     |

**Example: sRN EIIpAddrDHCP**

| Protocol | Example                                                                                                   |
| -------- | --------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}EIIpAddrDHCP<ETX>`                                 |
| CoLa A   | `<STX>sRN EIIpAddrDHCP<ETX>`                                     |
| CoLa A   | `sRN EIIpAddrDHCP`                                                           |
| CoLa A   | `02 73 52 4E 20 45 49 49 70 41 64 64 72 44 48 43 50 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 10 73 52 4E 20 45 49 49 70 41 64 64 72 44 48 43 50 56` |
| CoLa B   | `73 52 4E 20 45 49 49 70 41 64 64 72 44 48 43 50`                            |

**Telegram structure: sRA EIIpAddrDHCP**

| Telegram part | Description                      | Variable | Length | Additional details        | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                             |     |
| ------------- | -------------------------------- | -------- | ------ | ------------------------- | ------------------------------------------------- | ------------------------------------------------------------------ | --- |
| Command type  | Answer                           | String   | 3      |                           | `sRA`                | `73 52 41`                            |     |
| Command       | Read IP address assigned by DHCP | String   | 12     |                           | `EIIpAddrDHCP`       | `45 49 49 70 41 64 64 72 44 48 43 50` |     |
| IP address    | Default: 192.168.0.1             | Uint_8   | 1      | First part of IP address  | `0 …+255d (00 … FF)` | `00 … FF`                             |     |
| IP address    | Default: 192.168.0.1             | Uint_8   | 1      | Second part of IP address | `0 …+255d (00 … FF)` | `00 … FF`                             |     |
| IP address    | Default: 192.168.0.1             | Uint_8   | 1      | Third part of IP address  | `0 …+255d (00 … FF)` | `00 … FF`                             |     |
| IP address    | Default: 192.168.0.1             | Uint_8   | 1      | Fourth part of IP address | `0 …+255d (00 … FF)` | `00 … FF`                             |     |

**Example: sRA EIIpAddrDHCP**

| Protocol | Example                                                                                                                  |
| -------- | ------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}EIIpAddrDHCP{SPC}C0{SPC}A8{SPC}0{SPC}1<ETX>`                      |
| CoLa A   | `02 73 52 41 20 45 49 49 70 41 64 64 72 44 48 43 50 20 43 30 20 41 38 20 30 20 31 03`       |
| CoLa B   | `02 02 02 02 00 00 00 15 73 52 41 20 45 49 49 70 41 64 64 72 44 48 43 50 20 C0 A8 00 01 10` |

### Set Mode for Ethernet Address Assignment [sWN EIAddrMode]

This Command determines the mode for the ethernet address assignment.

**Telegram structure: sWN EIAddrMode**

| Telegram part               | Description                              | Variable | Length | Additional details | Values CoLa A (ASCII)                     | Values CoLa B (Binary)                                       |     |
| --------------------------- | ---------------------------------------- | -------- | ------ | ------------------ | ----------------------------------------- | ------------------------------------------------------------ | --- |
| Command type                | Write                                    | String   | 3      |                    | `sWN`        | `73 57 4E`                      |     |
| Command                     | Set mode for ethernet address assignment | String   | 10     |                    | `EIAddrMode` | `45 49 41 64 64 72 4D 6F 64 65` |     |
| Ethernet address assignment | Static IP address / DHCP                 | Enum_8   | 1      | Static:<br>DHCP:   | `0<br>1`     | `00<br>01`                      |     |

**Example: sWN EIAddrMode**

| Protocol | Example                                                                                                   |
| -------- | --------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sWN{SPC}EIAddrMode{SPC}0<ETX>`                             |
| CoLa A   | `sWN EIAddrMode 0`                                                           |
| CoLa A   | `02 73 57 4E 20 45 49 41 64 64 72 4D 6F 64 65 20 30 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 10 73 57 4E 20 45 49 41 64 64 72 4D 6F 64 65 20 00 76` |
| CoLa B   | `73 57 4E 20 45 49 41 64 64 72 4D 6F 64 65 20 00`                            |

**Telegram structure: sWA EIAddrMode**

| Telegram part | Description                              | Variable | Length | Additional details | Values CoLa A (ASCII)                     | Values CoLa B (Binary)                                       |     |
| ------------- | ---------------------------------------- | -------- | ------ | ------------------ | ----------------------------------------- | ------------------------------------------------------------ | --- |
| Command type  | Answer                                   | String   | 3      |                    | `sWA`        | `73 57 41`                      |     |
| Command       | Set mode for ethernet address assignment | String   | 10     |                    | `EIAddrMode` | `45 49 41 64 64 72 4D 6F 64 65` |     |

**Example: sWA EIAddrMode**

| Protocol | Example                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWA{SPC}EIAddrMode<ETX>`                                |
| CoLa A   | `02 73 57 41 20 45 49 41 64 64 72 4D 6F 64 65 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 0F 73 57 41 20 45 49 41 64 64 72 4D 6F 64 65 20 79` |

### Set Fallback for DHCP [sWN EIDHCPFallback]

This Command determines the fallback when DHCP is not successful.

**Telegram structure: sWN EIDHCPFallback**

| Telegram part                        | Description                        | Variable | Length | Additional details                | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |     |
| ------------------------------------ | ---------------------------------- | -------- | ------ | --------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------ | --- |
| Command type                         | Write                              | String   | 3      |                                   | `sWN`            | `73 57 4E`                                  |     |
| Command                              | Set fallback for DHCP              | String   | 14     |                                   | `EIDHCPFallback` | `45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B` |     |
| Fallback ethernet address assignment | Use Static IP address / Retry DHCP | Enum_8   | 1      | Static IP address:<br>DHCP retry: | `0<br>1`         | `00<br>01`                                  |     |

**Example: sWN EIDHCPFallback**

| Protocol | Example                                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sWN{SPC}EIDHCPFallback{SPC}0<ETX>`                                     |
| CoLa A   | `sWN EIDHCPFallback 0`                                                                   |
| CoLa A   | `02 73 57 4E 20 45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B 20 30 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 14 73 57 4E 20 45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B 20 00 55` |
| CoLa B   | `73 57 4E 20 45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B 20 00`                            |

**Telegram structure: sWA EIDHCPFallback**

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |     |
| ------------- | --------------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ | --- |
| Command type  | Answer                | String   | 3      |                    | `sWA`            | `73 57 41`                                  |     |
| Command       | Set fallback for DHCP | String   | 14     |                    | `EIDHCPFallback` | `45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B` |     |

**Example: sWA EIDHCPFallback**

| Protocol | Example                                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWA{SPC}EIDHCPFallback<ETX>`                                        |
| CoLa A   | `02 73 57 41 20 45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 13 73 57 41 20 45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B 20 5A` |

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

**Example: sWN EIgate**

| Protocol | Example                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWN{SPC}EIgate{SPC}0{SPC}0{SPC}0{SPC}0<ETX>`            |
| CoLa A   | `sWN EIgate 0 0 0 0`                                                      |
| CoLa A   | `02 73 57 4E 20 45 49 67 61 74 65 20 30 20 30 20 30 20 30 03`             |
| CoLa B   | `02 02 02 02 00 00 00 0F 73 57 4E 20 45 49 67 61 74 65 20 00 00 00 00 71` |
| CoLa B   | `73 57 4E 20 45 49 67 61 74 65 20 00 00 00 00`                            |

**Telegram structure: sWA EIgate**

| Telegram part | Description         | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |     |
| ------------- | ------------------- | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ | --- |
| Command type  | Answer              | String   | 3      |                    | `sWA`    | `73 57 41`          |     |
| Command       | Set gateway address | String   | 6      |                    | `EIgate` | `45 49 67 61 74 65` |     |

**Example: sWA EIgate**

| Protocol | Example                                                                                    |
| -------- | ------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWA{SPC}EIgate<ETX>`                        |
| CoLa A   | `02 73 57 41 20 45 49 67 61 74 65 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 0B 73 57 41 20 45 49 67 61 74 65 20 7E` |

### Read Ethernet Gateway [sRN EIgate]

Read for the Ethernet gateway (TCP/IP)

**Telegram structure: sRN EIgate**

| Telegram part | Description          | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |     |
| ------------- | -------------------- | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ | --- |
| Command type  | Read                 | String   | 3      |                    | `sRN`    | `73 52 4E`          |     |
| Command       | Read gateway address | String   | 6      |                    | `EIgate` | `45 49 67 61 74 65` |     |

**Example: sRN EIgate**

| Protocol | Example                                                                                 |
| -------- | --------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}EIgate<ETX>`                     |
| CoLa A   | `<STX>sRN EIgate<ETX>`                         |
| CoLa A   | `sRN EIgate`                                               |
| CoLa A   | `02 73 52 4E 20 45 49 67 61 74 65 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0A 73 52 4E 20 45 49 67 61 74 65 54` |
| CoLa B   | `73 52 4E 20 45 49 67 61 74 65`                            |

**Telegram structure: sRA EIgate**

| Telegram part   | Description          | Variable | Length | Additional details             | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                           |     |
| --------------- | -------------------- | -------- | ------ | ------------------------------ | ----------------------------------------------- | ------------------------------------------------ | --- |
| Command type    | Answer               | String   | 3      |                                | `sRA`              | `73 52 41`          |     |
| Command         | Read gateway address | String   | 6      |                                | `EIgate`           | `45 49 67 61 74 65` |     |
| Gateway address | Default: 0.0.0.0     | Uint_8   | 1      | First part of gateway address  | `0 …+255d (00…FF)` | `00 … FF`           |     |
| Gateway address | Default: 0.0.0.0     | Uint_8   | 1      | Second part of gateway address | `0 …+255d (00…FF)` | `00 … FF`           |     |
| Gateway address | Default: 0.0.0.0     | Uint_8   | 1      | Third part of gateway address  | `0 …+255d (00…FF)` | `00 … FF`           |     |
| Gateway address | Default: 0.0.0.0     | Uint_8   | 1      | Fourth part of gateway address | `0 …+255d (00…FF)` | `00 … FF`           |     |

**Example: sRA EIgate**

| Protocol | Example                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}EIgate{SPC}0{SPC}0{SPC}0{SPC}0<ETX>`            |
| CoLa A   | `02 73 52 41 20 45 49 67 61 74 65 20 30 20 30 20 30 20 30 03`             |
| CoLa B   | `02 02 02 02 00 00 00 0F 73 52 41 20 45 49 67 61 74 65 20 00 00 00 00 7B` |

### Read Ethernet Gateway IP Address Assigned by DHCP [sRN EIgateDHCP]

DHCP needs to be set as mode for ethernet assignment.

Read for the ethernet gateway IP address which was assigned by DHCP.

**Telegram structure: sRN EIgateDHCP**

| Telegram part | Description                                       | Variable | Length | Additional details | Values CoLa A (ASCII)                     | Values CoLa B (Binary)                                       |     |
| ------------- | ------------------------------------------------- | -------- | ------ | ------------------ | ----------------------------------------- | ------------------------------------------------------------ | --- |
| Command type  | Read                                              | String   | 3      |                    | `sRN`        | `73 52 4E`                      |     |
| Command       | Read ethernet gateway IP address assigned by DHCP | String   | 10     |                    | `EIgateDHCP` | `45 49 67 61 74 65 44 48 43 50` |     |

**Example: sRN EIgateDHCP**

| Protocol | Example                                                                                             |
| -------- | --------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}EIgateDHCP<ETX>`                             |
| CoLa A   | `<STX>sRN EIgateDHCP<ETX>`                                 |
| CoLa A   | `sRN EIgateDHCP`                                                       |
| CoLa A   | `02 73 52 4E 20 45 49 67 61 74 65 44 48 43 50 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0E 73 52 4E 20 45 49 67 61 74 65 44 48 43 50 4B` |
| CoLa B   | `73 52 4E 20 45 49 67 61 74 65 44 48 43 50`                            |

**Telegram structure: sRA EIgateDHCP**

| Telegram part      | Description                                       | Variable | Length | Additional details                | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                                       |     |
| ------------------ | ------------------------------------------------- | -------- | ------ | --------------------------------- | ----------------------------------------------- | ------------------------------------------------------------ | --- |
| Command type       | Answer                                            | String   | 3      |                                   | `sRA`              | `73 52 41`                      |     |
| Command            | Read ethernet gateway IP address assigned by DHCP | String   | 10     |                                   | `EIgateDHCP`       | `45 49 67 61 74 65 44 48 43 50` |     |
| Gateway IP address | Default: 0.0.0.0                                  | Uint_8   | 1      | First part of gateway IP address  | `0 …+255d (00…FF)` | `00 … FF`                       |     |
| Gateway IP address | Default: 0.0.0.0                                  | Uint_8   | 1      | Second part of gateway IP address | `0 …+255d (00…FF)` | `00 … FF`                       |     |
| Gateway IP address | Default: 0.0.0.0                                  | Uint_8   | 1      | Third part of gateway IP address  | `0 …+255d (00…FF)` | `00 … FF`                       |     |
| Gateway IP address | Default: 0.0.0.0                                  | Uint_8   | 1      | Fourth part of gateway IP address | `0 …+255d (00…FF)` | `00 … FF`                       |     |

**Example: sRA EIgateDHCP**

| Protocol | Example                                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}EIgateDHCP{SPC}0{SPC}0{SPC}0{SPC}0<ETX>`                    |
| CoLa A   | `02 73 52 41 20 45 49 67 61 74 65 44 48 43 50 20 30 20 30 20 30 20 30 03`             |
| CoLa B   | `02 02 02 02 00 00 00 13 73 52 41 20 45 49 67 61 74 65 44 48 43 50 20 00 00 00 00 64` |

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

**Example: sWN EImask**

| Protocol | Example                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWN{SPC}EImask{SPC}FF{SPC}FF{SPC}FF{SPC}0<ETX>`         |
| CoLa A   | `sWN EImask FF FF FF 0`                                                   |
| CoLa A   | `02 73 57 4E 20 45 49 6D 61 73 6B 20 46 46 20 46 46 20 46 46 20 30 03`    |
| CoLa B   | `02 02 02 02 00 00 00 0F 73 57 4E 20 45 49 6D 61 73 6B 20 FF FF FF 00 8D` |
| CoLa B   | `73 57 4E 20 45 49 6D 61 73 6B 20 FF FF FF 00`                            |

**Telegram structure: sWA EImask**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |     |
| ------------- | ----------- | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ | --- |
| Command type  | Answer      | String   | 3      |                    | `sWA`    | `73 57 41`          |     |
| Command       | Set IP mask | String   | 6      |                    | `EImask` | `45 49 6D 61 73 6B` |     |

**Example: sWA EImask**

| Protocol | Example                                                                                    |
| -------- | ------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWA{SPC}EImask<ETX>`                        |
| CoLa A   | `02 73 57 41 20 45 49 6D 61 73 6B 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 0B 73 57 41 20 45 49 6D 61 73 6B 20 7D` |

### Read IP Mask [sRN EImask]

Read the subnet mask of the device.

**Telegram structure: sRN EImask**

| Telegram part | Description  | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |     |
| ------------- | ------------ | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ | --- |
| Command type  | Read         | String   | 3      |                    | `sRN`    | `73 52 4E`          |     |
| Command       | Read IP mask | String   | 6      |                    | `EImask` | `45 49 6D 61 73 6B` |     |

**Example: sRN EImask**

| Protocol | Example                                                                                 |
| -------- | --------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}EImask<ETX>`                     |
| CoLa A   | `<STX>sRN EImask<ETX>`                         |
| CoLa A   | `sRN EImask`                                               |
| CoLa A   | `02 73 52 4E 20 45 49 6D 61 73 6B 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0A 73 52 4E 20 45 49 6D 61 73 6B 57` |
| CoLa B   | `73 52 4E 20 45 49 6D 61 73 6B`                            |

**Telegram structure: sRA EImask**

| Telegram part | Description            | Variable | Length | Sensor                 | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                           |     |
| ------------- | ---------------------- | -------- | ------ | ---------------------- | ----------------------------------------------- | ------------------------------------------------ | --- |
| Command type  | Answer                 | String   | 3      |                        | `sRA`              | `73 52 41`          |     |
| Command       | Read IP mask           | String   | 6      |                        | `EImask`           | `45 49 6D 61 73 6B` |     |
| IP mask       | Default: 255.255.255.0 | Uint_8   | 1      | First part of IP mask  | `0 …+255d (00…FF)` | `00 … FF`           |     |
| IP mask       | Default: 255.255.255.0 | Uint_8   | 1      | Second part of IP mask | `0 …+255d (00…FF)` | `00 … FF`           |     |
| IP mask       | Default: 255.255.255.0 | Uint_8   | 1      | Third part of IP mask  | `0 …+255d (00…FF)` | `00 … FF`           |     |
| IP mask       | Default: 255.255.255.0 | Uint_8   | 1      | Fourth part of IP mask | `0 …+255d (00…FF)` | `00 … FF`           |     |

**Example: sRA EImask**

| Protocol | Example                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}EImask{SPC}FF{SPC}FF{SPC}FF{SPC}0<ETX>`         |
| CoLa A   | `02 73 52 41 20 45 49 6D 61 73 6B 20 46 46 20 46 46 20 46 46 20 30 03`    |
| CoLa B   | `02 02 02 02 00 00 00 0F 73 52 41 20 45 49 6D 61 73 6B 20 FF FF FF 00 87` |

### Read IP Mask Assigned by DHCP [sRN EImaskDHCP]

DHCP needs to be set as mode for ethernet assignment.

Read for the IP mask which was assigned by DHCP.

**Telegram structure: sRN EImaskDHCP**

| Telegram part | Description                   | Variable | Length | Additional details | Values CoLa A (ASCII)                     | Values CoLa B (Binary)                                       |     |
| ------------- | ----------------------------- | -------- | ------ | ------------------ | ----------------------------------------- | ------------------------------------------------------------ | --- |
| Command type  | Read                          | String   | 3      |                    | `sRN`        | `73 52 4E`                      |     |
| Command       | Read IP mask assigned by DHCP | String   | 10     |                    | `EImaskDHCP` | `45 49 6D 61 73 6B 44 48 43 50` |     |

**Example: sRN EImaskDHCP**

| Protocol | Example                                                                                             |
| -------- | --------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}EImaskDHCP<ETX>`                             |
| CoLa A   | `<STX>sRN EImaskDHCP<ETX>`                                 |
| CoLa A   | `sRN EImaskDHCP`                                                       |
| CoLa A   | `02 73 52 4E 20 45 49 6D 61 73 6B 44 48 43 50 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0E 73 52 4E 20 45 49 6D 61 73 6B 44 48 43 50 48` |
| CoLa B   | `73 52 4E 20 45 49 6D 61 73 6B 44 48 43 50`                            |

**Telegram structure: sRA EImaskDHCP**

| Telegram part | Description                   | Variable | Length | Additional details     | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                                       |     |
| ------------- | ----------------------------- | -------- | ------ | ---------------------- | ----------------------------------------------- | ------------------------------------------------------------ | --- |
| Command type  | Answer                        | String   | 3      |                        | `sRA`              | `73 52 41`                      |     |
| Command       | Read IP mask assigned by DHCP | String   | 10     |                        | `EImaskDHCP`       | `45 49 6D 61 73 6B 44 48 43 50` |     |
| IP mask       | Default: 255.255.255.0        | Uint_8   | 1      | First part of IP mask  | `0 …+255d (00…FF)` | `00 … FF`                       |     |
| IP mask       | Default: 255.255.255.0        | Uint_8   | 1      | Second part of IP mask | `0 …+255d (00…FF)` | `00 … FF`                       |     |
| IP mask       | Default: 255.255.255.0        | Uint_8   | 1      | Third part of IP mask  | `0 …+255d (00…FF)` | `00 … FF`                       |     |
| IP mask       | Default: 255.255.255.0        | Uint_8   | 1      | Fourth part of IP mask | `0 …+255d (00…FF)` | `00 … FF`                       |     |

**Example: sRA EImaskDHCP**

| Protocol | Example                                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}EImaskDHCP{SPC}FF{SPC}FF{SPC}FF{SPC}0<ETX>`                 |
| CoLa A   | `02 73 52 41 20 45 49 6D 61 73 6B 44 48 43 50 20 46 46 20 46 46 20 46 46 20 30 03`    |
| CoLa B   | `02 02 02 02 00 00 00 13 73 52 41 20 45 49 6D 61 73 6B 44 48 43 50 20 FF FF FF 00 98` |

### Read MAC Address [sRN EIMacAdr]

Read the MAC address of the device.

**Telegram structure: sRN EIMacAdr**

| Telegram part | Description                    | Variable | Length | Additional details | Values CoLa A (ASCII)                   | Values CoLa B (Binary)                                 |     |
| ------------- | ------------------------------ | -------- | ------ | ------------------ | --------------------------------------- | ------------------------------------------------------ | --- |
| Command type  | Read                           | String   | 3      |                    | `sRN`      | `73 52 4E`                |     |
| Command       | Read MAC address of the device | String   | 8      |                    | `EIMacAdr` | `45 49 4D 61 63 41 64 72` |     |

**Example: sRN EIMacAdr**

| Protocol | Example                                                                                       |
| -------- | --------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}EIMacAdr<ETX>`                         |
| CoLa A   | `<STX>sRN EIMacAdr<ETX>`                             |
| CoLa A   | `sRN EIMacAdr`                                                   |
| CoLa A   | `02 73 52 4E 20 45 49 4D 61 63 41 64 72 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0C 73 52 4E 20 45 49 4D 61 63 41 64 72 5B` |
| CoLa B   | `73 52 4E 20 45 49 4D 61 63 41 64 72`                            |

**Telegram structure: sRA EIMacAdr**

| Telegram part | Description                    | Variable | Length | Additional details         | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                                 |     |
| ------------- | ------------------------------ | -------- | ------ | -------------------------- | ----------------------------------------------- | ------------------------------------------------------ | --- |
| Command type  | Answer                         | String   | 3      |                            | `sRA`              | `73 52 41`                |     |
| Command       | Read MAC address of the device | String   | 8      |                            | `EIMacAdr`         | `45 49 4D 61 63 41 64 72` |     |
| MAC address   | Values                         | Uint_8   | 1      | First part of MAC address  | `0 …+255d (00…FF)` | `00 … FF`                 |     |
| MAC address   | Values                         | Uint_8   | 1      | Second part of MAC address | `0 …+255d (00…FF)` | `00 … FF`                 |     |
| MAC address   | Values                         | Uint_8   | 1      | Third part of MAC address  | `0 …+255d (00…FF)` | `00 … FF`                 |     |
| MAC address   | Values                         | Uint_8   | 1      | Fourth part of MAC address | `0 …+255d (00…FF)` | `00 … FF`                 |     |
| MAC address   | Values                         | Uint_8   | 1      | Fifth part of MAC address  | `0 …+255d (00…FF)` | `00 … FF`                 |     |
| MAC address   | Values                         | Uint_8   | 1      | Sixth part of MAC address  | `0 …+255d (00…FF)` | `00 … FF`                 |     |

**Example: sRA EIMacAdr**

| Protocol | Example                                                                                                                  |
| -------- | ------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}EIMacAdr{SPC}0{SPC}6{SPC}77{SPC}5A{SPC}CF{SPC}E2<ETX>`            |
| CoLa A   | `02 73 52 41 20 45 49 4D 61 63 41 64 72 20 30 20 36 20 37 37 20 35 41 20 43 46 20 45 32 03` |
| CoLa B   | `02 02 02 02 00 00 00 13 73 52 41 20 45 49 4D 61 63 41 64 72 20 00 06 77 5A CF E2 72`       |

### Set Device Search Mode [sWN EtherColaScanMode]

This command configures the Auto IP functionalities (Device search by SICK Enginnering Tools) and the changeability of the IP address. The functionality can reduces the number of open ports to a minimum.

**Telegram structure: sWN EtherCoLaScanMode**

| Telegram part                      | Description                            | Variable | Length | Additional details                                                                                                                                                                     | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                            |     |
| ---------------------------------- | -------------------------------------- | -------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------- | --- |
| Command type                       | Write                                  | String   | 3      |                                                                                                                                                                                        | `sWN`               | `73 57 4E`                                           |     |
| Command                            | Set CoLa Scan / AutoIP search settings | String   | 17     |                                                                                                                                                                                        | `EtherCoLaScanMode` | `45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65` |     |
| CoLa Scan / AutoIP search settings | Choose setting                         | Uint_8   | 1      | IP address can be found/changed without login:<br>IP address can be found/ changed with login:<br>Disable the Auto IP search/ IP change:<br>IP address can be found/changed for 1 min: | `0<br>1<br>2<br>3`  | `00<br>01<br>02<br>03`                               |     |

**Example: sWN EtherCoLaScanMode**

| Protocol | Example                                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWN{SPC}EtherCoLaScanMode{SPC}3<ETX>`                                           |
| CoLa A   | `sWN EtherCoLaScanMode 3`                                                                         |
| CoLa A   | `02 73 57 4E 20 45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65 20 33 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 17 73 57 4E 20 45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65 20 03 3A` |
| CoLa B   | `73 57 4E 20 45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65 20 03`                            |

**Telegram structure: sWA EtherCoLaScanMode**

| Telegram part | Description                            | Variable | Length | Additional details | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                            |     |
| ------------- | -------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------- | --- |
| Command type  | Answer                                 | String   | 3      |                    | `sWA`               | `73 57 41`                                           |     |
| Command       | Set CoLa Scan / AutoIP search settings | String   | 17     |                    | `EtherCoLaScanMode` | `45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65` |     |

**Example: sWA EtherCoLaScanMode**

| Protocol | Example                                                                                                                     |
| -------- | --------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sWA{SPC}EtherCoLaScanMode<ETX>`                                              |
| CoLa A   | `02 73 57 41 20 45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 16 73 57 41 20 45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65 20 36` |

### Read Device Search Mode [sRN EtherCoLaScanMode]

This command polls the Auto IP functionalities (Device search by SICK Enginnering Tools) and the IP address changeability settings.

**Telegram structure: sRN EtherCoLaScanMode**

| Telegram part | Description                             | Variable | Length | Additional details | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                            |     |
| ------------- | --------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------- | --- |
| Command type  | Write                                   | String   | 3      |                    | `sRN`               | `73 52 4E`                                           |     |
| Command       | Read CoLa Scan / AutoIP search settings | String   | 17     |                    | `EtherCoLaScanMode` | `45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65` |     |

**Example: sRN EtherCoLaScanMode**

| Protocol | Example                                                                                                                  |
| -------- | ------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRN{SPC}EtherCoLaScanMode<ETX>`                                           |
| CoLa A   | `<STX>sRN EtherCoLaScanMode<ETX>`                                               |
| CoLa A   | `sRN EtherCoLaScanMode`                                                                     |
| CoLa A   | `02 73 52 4E 20 45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 15 73 52 4E 20 45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65 1C` |
| CoLa B   | `73 52 4E 20 45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65`                            |

**Telegram structure: sRA EtherCoLaScanMode**

| Telegram part                      | Description                             | Variable | Length | Additional details                                                                                                                                                                     | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                            |     |
| ---------------------------------- | --------------------------------------- | -------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------- | --- |
| Command type                       | Answer                                  | String   | 3      |                                                                                                                                                                                        | `sRA`               | `73 52 41`                                           |     |
| Command                            | Read CoLa Scan / AutoIP search settings | String   | 17     |                                                                                                                                                                                        | `EtherCoLaScanMode` | `45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65` |     |
| CoLa Scan / AutoIP search settings | Poll setting                            | Uint_8   | 1      | IP address can be found/changed without login:<br>IP address can be found/ changed with login:<br>Auto IP search/ IP change is disabled:<br>IP address can be found/changed for 1 min: | `0<br>1<br>2<br>3`  | `00<br>01<br>02<br>03`                               |     |

**Example: sRA EtherCoLaScanMode**

| Protocol | Example                                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}EtherCoLaScanMode{SPC}3<ETX>`                                           |
| CoLa A   | `02 73 52 41 20 45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65 20 33 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 17 73 52 41 20 45 74 68 65 72 43 6F 4C 61 53 63 61 6E 4D 6F 64 65 20 03 30` |

### Enable/ Disable CoLa1 Interface [sWN EIAuxEnable]

After enabling the CoLa1 interface, use port 2111 for CoLa A and port 2112 for CoLa B.

**Telegram structure: sWN EIAuxEnable**

| Telegram part   | Description         | Variable | Length | Additional details  | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |     |
| --------------- | ------------------- | -------- | ------ | ------------------- | ------------------------------------------ | --------------------------------------------------------------- | --- |
| Command type    | Write               | String   | 3      |                     | `sWN`         | `73 57 4E`                         |     |
| Command         | Set CoLa1 interface | String   | 11     |                     | `EIAuxEnable` | `45 49 41 75 78 45 6E 61 62 6C 65` |     |
| CoLa1 interface | Enable/ disable     | Bool_1   | 1      | Disable:<br>Enable: | `0<br>1`      | `00<br>01`                         |     |

**Example: sWN EIAuxEnable**

| Protocol | Example                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWN{SPC}EIAuxEnable{SPC}1<ETX>`                               |
| CoLa A   | `sWN EIAuxEnable 1`                                                             |
| CoLa A   | `02 73 57 4E 20 45 49 41 75 78 45 6E 61 62 6C 65 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 11 73 57 4E 20 45 49 41 75 78 45 6E 61 62 6C 65 20 01 0A` |
| CoLa B   | `73 57 4E 20 45 49 41 75 78 45 6E 61 62 6C 65 20 01`                            |

**Telegram structure: sWA EIAuxEnable**

| Telegram part | Description         | Variable | Length | Additional details | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |     |
| ------------- | ------------------- | -------- | ------ | ------------------ | ------------------------------------------ | --------------------------------------------------------------- | --- |
| Command type  | Answer              | String   | 3      |                    | `sWA`         | `73 57 41`                         |     |
| Command       | Set CoLa1 interface | String   | 11     |                    | `EIAuxEnable` | `45 49 41 75 78 45 6E 61 62 6C 65` |     |

**Example: sWA EIAuxEnable**

| Protocol | Example                                                                                                   |
| -------- | --------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sWA{SPC}EIAuxEnable<ETX>`                                  |
| CoLa A   | `02 73 57 41 20 45 49 41 75 78 45 6E 61 62 6C 65 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 10 73 57 41 20 45 49 41 75 78 45 6E 61 62 6C 65 20 04` |

### Set Webserver State [sMN SetWebserverEnabled]

This command enables/ disables the Webserver. Port 80 will not be opened after a reboot.

**Telegram structure: sMN SetWebserverEnabled**

| Telegram part | Description         | Variable | Length | Additional details  | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |     |
| ------------- | ------------------- | -------- | ------ | ------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type  | Method              | String   | 3      |                     | `sMN`                 | `73 4D 4E`                                                 |     |
| Command       | Set Webserver state | String   | 19     |                     | `SetWebserverEnabled` | `53 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64` |     |
| State         | Enable/ disable     | Bool_1   | 1      | Disable:<br>Enable: | `0<br>1`              | `00<br>01`                                                 |     |

**Example: sMN SetWebserverEnabled**

| Protocol | Example                                                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sMN{SPC}SetWebserverEnabled{SPC}1<ETX>`                                               |
| CoLa A   | `sMN SetWebserverEnabled 1`                                                                             |
| CoLa A   | `02 73 4D 4E 20 53 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 19 73 4D 4E 20 53 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64 20 01 23` |
| CoLa B   | `73 4D 4E 20 53 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64 20 01`                            |

**Telegram structure: sAN SetWebserverEnabled**

| Telegram part | Description         | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |     |
| ------------- | ------------------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type  | Answer              | String   | 3      |                    | `sAN`                 | `73 41 4E`                                                 |     |
| Command       | Set Webserver state | String   | 19     |                    | `SetWebserverEnabled` | `53 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64` |     |

**Example: sAN SetWebserverEnabled**

| Protocol | Example                                                                                                                           |
| -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sAN{SPC}SetWebserverEnabled<ETX>`                                                  |
| CoLa A   | `02 73 41 4E 20 53 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 18 73 41 4E 20 53 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64 20 2E` |

### Read Webserver State [sMN GetWebserverEnabled]

Returns state if Webserver is enabled.

**Telegram structure: sMN GetWebserverEnabled**

| Telegram part | Description     | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |     |
| ------------- | --------------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type  | Method          | String   | 3      |                    | `sMN`                 | `73 4D 4E`                                                 |     |
| Command       | Webserver state | String   | 19     |                    | `GetWebserverEnabled` | `47 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64` |     |

**Example: sMN GetWebserverEnabled**

| Protocol | Example                                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sMN{SPC}GetWebserverEnabled<ETX>`                                               |
| CoLa A   | `sMN GetWebserverEnabled`                                                                         |
| CoLa A   | `02 73 4D 4E 20 47 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 17 73 4D 4E 20 47 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64 16` |
| CoLa B   | `73 4D 4E 20 47 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64`                            |

**Telegram structure: sAN GetWebserverEnabled**

| Telegram part | Description             | Variable | Length | Additional details    | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |     |
| ------------- | ----------------------- | -------- | ------ | --------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type  | Answer                  | String   | 3      |                       | `sAN`                 | `73 41 4E`                                                 |     |
| Command       | Webserver state         | String   | 19     |                       | `GetWebserverEnabled` | `47 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64` |     |
| State         | Status of the webserver | Bool_1   | 1      | Disabled:<br>Enabled: | `0<br>1`              | `00<br>01`                                                 |     |

**Example: sAN GetWebserverEnabled**

| Protocol | Example                                                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sAN{SPC}GetWebserverEnabled{SPC}1<ETX>`                                               |
| CoLa A   | `02 73 41 4E 20 47 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 19 73 41 4E 20 47 65 74 57 65 62 73 65 72 76 65 72 45 6E 61 62 6C 65 64 20 01 3B` |

### Enable/ Disable LEDs [sWN LEDEnable]

This command enables/ disables the LEDs of the device.

**Telegram structure: sWN LEDEnable**

| Telegram part | Description     | Variable | Length | Additional details | Values CoLa A (ASCII)                    | Values CoLa B (Binary)                                    |     |
| ------------- | --------------- | -------- | ------ | ------------------ | ---------------------------------------- | --------------------------------------------------------- | --- |
| Command type  | Method          | String   | 3      |                    | `sWN`       | `73 57 4E`                   |     |
| Command       | Set LEDs        | String   | 9      |                    | `LEDEnable` | `4C 45 44 45 6E 61 62 6C 65` |     |
| Status        | Enable/ disable | Bool_1   | 1      | Off:<br>On:        | `0<br>1`    | `00<br>01`                   |     |

**Example: sWN LEDEnable**

| Protocol | Example                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sWN{SPC}LEDEnable{SPC}1<ETX>`                           |
| CoLa A   | `sWN LEDEnable 1`                                                         |
| CoLa A   | `02 73 57 4E 20 4C 45 44 45 6E 61 62 6C 65 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0F 73 57 4E 20 4C 45 44 45 6E 61 62 6C 65 20 01 07` |
| CoLa B   | `73 57 4E 20 4C 45 44 45 6E 61 62 6C 65 20 01`                            |

**Telegram structure: sWA LEDEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                    | Values CoLa B (Binary)                                    |     |
| ------------- | ----------- | -------- | ------ | ------------------ | ---------------------------------------- | --------------------------------------------------------- | --- |
| Command type  | Answer      | String   | 3      |                    | `sWA`       | `73 57 41`                   |     |
| Command       | Set LEDs    | String   | 9      |                    | `LEDEnable` | `4C 45 44 45 6E 61 62 6C 65` |     |

**Example: sWA LEDEnable**

| Protocol | Example                                                                                             |
| -------- | --------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sWA{SPC}LEDEnable<ETX>`                              |
| CoLa A   | `02 73 57 41 20 4C 45 44 45 6E 61 62 6C 65 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 0E 73 57 41 20 4C 45 44 45 6E 61 62 6C 65 20 09` |

### Read State of LEDs [sRN LEDState]

Read the current state of the LEDs.

**Telegram structure: sRN LEDState**

| Telegram part | Description        | Variable | Length | Additional details | Values CoLa A (ASCII)                   | Values CoLa B (Binary)                                 |     |
| ------------- | ------------------ | -------- | ------ | ------------------ | --------------------------------------- | ------------------------------------------------------ | --- |
| Command type  | Method             | String   | 3      |                    | `sRN`      | `73 52 4E`                |     |
| Command       | Read state of LEDs | String   | 8      |                    | `LEDState` | `4C 45 44 53 74 61 74 65` |     |

**Example: sRN LEDState**

| Protocol | Example                                                                                       |
| -------- | --------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}LEDState<ETX>`                         |
| CoLa A   | `<STX>sRN LEDState<ETX>`                             |
| CoLa A   | `sRN LEDState`                                                   |
| CoLa A   | `02 73 52 4E 20 4C 45 44 53 74 61 74 65 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 0C 73 52 4E 20 4C 45 44 53 74 61 74 65 55` |
| CoLa B   | `73 52 4E 20 4C 45 44 53 74 61 74 65`                            |

**Telegram structure: sRA LEDState**

| Telegram part | Description     | Variable | Length | Additional details                                                                 | Values CoLa A (ASCII)                                     | Values CoLa B (Binary)                                          |     |
| ------------- | --------------- | -------- | ------ | ---------------------------------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------------- | --- |
| Command type  | Answer          | String   | 3      |                                                                                    | `sRA`                        | `73 52 41`                         |     |
| Command       | State of LEDs   | String   | 8      |                                                                                    | `LEDState`                   | `4C 45 44 53 74 61 74 65`          |     |
| LED Color     | -               | Enum_8   | 1      | Green:<br>Yellow:<br>Red:                                                          | `0<br>1<br>2`                | `00<br>01<br>02`                   |     |
| LED behavior  | -               | Enum_8   | 1      | On:<br>Off:<br>Blinking:<br>Blinking fast:<br>Blinking delayed:<br>Find me active: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05` |     |
| LED ID        | Name of the LED | String   | 8      |                                                                                    | `LED1<br>LED2`               | `4C 45 44 31<br>4C 45 44 32`       |     |

**Example: sRA LEDState**

| Protocol | Example                                                                                                                                                                                                                                    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `02 73 52 41 20 4C 45 44 53 74 61 74 65 20 34 20 30 20 30 20 4C 45 44 34 00 00 00 00 20 30 20 30 20 4C 45 44 32 00 00 00 00 20 31 20 30 20 4C 45 44 31 00 00 00 00 20 31 20 30 20 4C 45 44 33 00 00 00 00 03` |
| CoLa B   | `02 02 02 02 00 00 00 37 73 52 41 20 4C 45 44 53 74 61 74 65 20 00 04 00 00 4C 45 44 34 00 00 00 00 00 00 4C 45 44 32 00 00 00 00 01 00 4C 45 44 31 00 00 00 00 01 00 4C 45 44 33 00 00 00 00 7A`             |

### Read Parameter [sRN ImuDataEthSettings]

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN ImuDataEthSettings**

| Telegram part | Description        | Variable | Length | Additional details | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                                               |
| ------------- | ------------------ | -------- | ------ | ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Command type  | Read               | String   | 3      |                    | `sRN`                | `73 52 4E`                                              |
| Command       | ImuDataEthSettings | String   | 18     |                    | `ImuDataEthSettings` | `49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |

**Example: sRN ImuDataEthSettings**

| Protocol | Example                                                                                                                     |
| -------- | --------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRN{SPC}ImuDataEthSettings<ETX>`                                             |
| CoLa A   | `<STX>sRN ImuDataEthSettings<ETX>`                                                 |
| CoLa A   | `sRN ImuDataEthSettings`                                                                       |
| CoLa A   | `02 73 52 4E 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 16 73 52 4E 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 52` |
| CoLa B   | `73 52 4E 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73`                            |

**Example: sRA ImuDataEthSettings**

| Protocol | Example                                                                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRA{SPC}ImuDataEthSettings{SPC}1{SPC}C0{SPC}A8{SPC}0{SPC}64{SPC}1D4F<ETX>`                                    |
| CoLa A   | `02 73 52 41 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 31 20 43 30 20 41 38 20 30 20 36 34 20 31 44 34 46 03` |
| CoLa B   | `02 02 02 02 00 00 00 1E 73 52 41 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 01 C0 A8 00 64 1D 4F 22`          |

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

**Example: sMN ActivateEvaluationGroup**

| Protocol | Example                                                                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sMN{SPC}ActivateEvaluationGroup{SPC}1{SPC}1{SPC}0<ETX>`                                                       |
| CoLa A   | `sMN ActivateEvaluationGroup 1 1 0`                                                                                             |
| CoLa A   | `02 73 4D 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 31 20 31 20 30 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 21 73 4D 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 00 01 00 01 00 20` |
| CoLa B   | `73 4D 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 00 01 00 01 00`                            |

**Telegram structure: sAN ActivateEvaluationGroup**

| Telegram part                                     | Description                            | Variable | Length | Additional details                                                     | Values CoLa A (ASCII)                                  | Values CoLa B (Binary)                                                                              |     |
| ------------------------------------------------- | -------------------------------------- | -------- | ------ | ---------------------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------- | --- |
| Command type                                      | Answer                                 | String   | 3      |                                                                        | `sAN`                     | `73 41 4E`                                                             |     |
| Command                                           | Activate / deactivate evaluation group | String   | 23     |                                                                        | `ActivateEvaluationGroup` | `41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70` |     |
| Amount of activated/deactivated evaluation groups | -                                      | UInt_16  | 2      |                                                                        | `1h... 30h`               | `00 01 … 00 30`                                                        |     |
| State of activation / deactivation                | -                                      | Bool_1   | 1      | Activation/Deactivation failed:<br>Successfully activated/deactivated: | `0<br>1`                  | `00<br>01`                                                             |     |

**Example: sAN ActivateEvaluationGroup**

| Protocol | Example                                                                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sAN{SPC}ActivateEvaluationGroup{SPC}1{SPC}0<ETX>`                                                       |
| CoLa A   | `02 73 41 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 31 20 30 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 1F 73 41 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 00 01 00 2D` |

### Read Evaluation Group Type [sRN EvaluationGroupType]

Array with the type of each group, either perpendicular distance or field evaluation.

**Telegram structure: sRN EvaluationGroupType**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |     |
| ------------- | ----------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type  | Read        | String   | 3      |                    | `sRN`                 | `73 52 4E`                                                 |     |
| Command       |             | String   | 19     |                    | `EvaluationGroupType` | `45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65` |     |

**Example: sRN EvaluationGroupType**

| Protocol | Example                                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRN{SPC}EvaluationGroupType<ETX>`                                               |
| CoLa A   | `<STX>sRN EvaluationGroupType<ETX>`                                                   |
| CoLa A   | `sRN EvaluationGroupType`                                                                         |
| CoLa A   | `02 73 52 4E 20 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 17 73 52 4E 20 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65 1E` |
| CoLa B   | `73 52 4E 20 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65`                            |

**Telegram structure: sRA EvaluationGroupType**

| Telegram part | Description              | Variable | Length | Additional details                           | Values CoLa A (ASCII)                                | Values CoLa B (Binary)                                                                  |     |
| ------------- | ------------------------ | -------- | ------ | -------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type  | Answer                   | String   | 3      |                                              | `sRA`                   | `73 52 41`                                                 |     |
| Command       |                          | String   | 19     |                                              | `EvaluationGroupType`   | `45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65` |     |
| Data          | Type of evaluation group | Array    | 48     | Field evaluation:<br>Perpendicular distance: | `0d (00h)<br>+1d (01h)` | `00<br>01`                                                 |     |

**Example: sRA EvaluationGroupType**

| Protocol | Example                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}EvaluationGroupType{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>`                          |
| CoLa A   | `02 73 52 41 20 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03` |
| CoLa B   | `02 02 02 02 00 00 00 48 73 52 41 20 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65 20 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 31`                                                                                                                         |

### Set Field Evaluation Contour [sMN SetFieldEvaluationContour]

This telegram can be used to change or reshape the contour/ polygon of an already defined field. It´s possible to add additional points.

**Telegram structure: sMN SetFieldEvaluationContour**

| Telegram part              | Description                                                  | Variable | Length    | Additional details                                      | Values CoLa A (ASCII)                                                       | Values CoLa B (Binary)                                                                                    |     |
| -------------------------- | ------------------------------------------------------------ | -------- | --------- | ------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --- |
| Command type               | Method                                                       | String   | 3         |                                                         | `sMN`                                          | `73 4D 4E`                                                                   |     |
| Command                    | Set the region of interest of an object detection evaluation | String   | 25        |                                                         | `SetFieldEvaluationContour`                    | `53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |     |
| Evaluation ID              | Specific ID of the evaluation that is to be changed          | UInt_16  | 2         |                                                         | `+1d ... +48d (1h ... 30h)`                    | `00 01 … 00 30`                                                              |     |
| Amount of polygon vertices | E. g. triangle = 3, square = 4                               | Uint_16  | 2         |                                                         | `+3d ... +800d (3h ... 320h)`                  | `00 03... 03 20`                                                             |     |
| Polygon vertex             | Coordinates of first polygon vertex in mm                    | Dint_32  | 4         | X coordinate:                                           | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0`                                                  |     |
| Polygon vertex             | Coordinates of first polygon vertex in mm                    | Dint_32  | 4         | Y coordinate:                                           | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0`                                                  |     |
| Polygon vertex             | Coordinates of second polygon vertex in mm                   | Dint_32  | 4         | X coordinate:                                           | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0`                                                  |     |
| Polygon vertex             | Coordinates of second polygon vertex in mm                   | Dint_32  | 4         | Y coordinate:                                           | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0`                                                  |     |
| ..                         |                                                              |          |           |                                                         |                                                                             |                                                                                                           |     |
| Polygon vertex             | Coordinates of last polygon vertex in mm                     | Dint_32  | 4         | X coordinate:                                           | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0`                                                  |     |
| Polygon vertex             | Coordinates of last polygon vertex in mm                     | Dint_32  | 4         | Y coordinate:                                           | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0`                                                  |     |
| Lower Z limit              | Lower bound of extrusion in Z direction                      | Dint_32  | 4         | Lower limit must be less than upper limit               | `-100000 ... +100000`                          | `FF FE 79 60 ... 00 01 86 A0`                                                |     |
| Upper Z limit              | Upper bound of extrusion in Z direction                      | Dint_32  | 4         | Lower limit must be less than upper limit               | `-100000 ... +100000`                          | `FF FE 79 60 ... 00 01 86 A0`                                                |     |

**Example: sMN SetFieldEvaluationContour**

| Protocol | Example                                                                                                                                                                                                                                                                                 |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sMN{SPC}SetFieldEvaluationContour{SPC}1{SPC}4{SPC}+2000{SPC}+1000{SPC}+0{SPC}+1000{SPC}+0{SPC}+0{SPC}+2000{SPC}+0{SPC}+0{SPC}+1000<ETX>`                                                                                                 |
| CoLa A   | `sMN SetFieldEvaluationContour 1 4 +2000 +1000 +0 +1000 +0 +0 +2000 +0 +0 +1000`                                                                                                                                                                           |
| CoLa A   | `02 73 4D 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 31 20 34 20 2B 32 30 30 30 20 2B 31 30 30 30 20 2B 30 20 2B 31 30 30 30 20 2B 30 20 2B 30 20 2B 32 30 30 30 20 2B 30 20 2B 30 20 2B 31 30 30 30 03`          |
| CoLa B   | `02 02 02 02 00 00 00 4A 73 4D 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 00 04 00 00 07 D0 00 00 03 E8 00 00 00 00 00 00 03 E8 00 00 00 00 00 00 00 00 00 00 07 D0 00 00 00 00 00 00 00 00 00 00 03 E8 F6` |
| CoLa B   | `73 4D 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 00 04 00 00 07 D0 00 00 03 E8 00 00 00 00 00 00 03 E8 00 00 00 00 00 00 00 00 00 00 07 D0 00 00 00 00 00 00 00 00 00 00 03 E8`                            |

**Telegram structure: sAN SetFieldEvaluationContour**

| Telegram part                  | Description                                                  | Variable | Length | Additional details                                                                    | Values CoLa A (ASCII)                                    | Values CoLa B (Binary)                                                                                    |     |
| ------------------------------ | ------------------------------------------------------------ | -------- | ------ | ------------------------------------------------------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --- |
| Command type                   | Answer                                                       | String   | 3      |                                                                                       | `sAN`                       | `73 41 4E`                                                                   |     |
| Command                        | Set the region of interest of an object detection evaluation | String   | 25     |                                                                                       | `SetFieldEvaluationContour` | `53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |     |
| State of evaluation conversion | -                                                            | Enum_8   | 1      | Conversion successful:<br>Invalid Evaluation:<br>Invalid Polygon:<br>Invalid Z limit: | `0<br>1<br>2<br>3`          | `00<br>01<br>02<br>03`                                                       |     |

**Example: sAN SetFieldEvaluationContour**

| Protocol | Example                                                                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sAN{SPC}SetFieldEvaluationContour{SPC}0<ETX>`                                                           |
| CoLa A   | `02 73 41 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 30 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 1F 73 41 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 14` |

### Read Evaluation Configuration State [sRN EvaluationConfigState]

Read beam-limit and evaluation-limit status. On firmware 2.4.4.0R, the response contains two status bytes followed by 49 two-byte words. Retain the final word when parsing the response; its meaning is unspecified.

**Telegram structure: sRN EvaluationConfigState**

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                                | Values CoLa B (Binary)                                                                        |
| ------------- | --------------------- | -------- | ------ | ------------------ | ---------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Command type  | Read                  | String   | 3      |                    | `sRN`                   | `73 52 4E`                                                       |
| Command       | EvaluationConfigState | String   | 21     |                    | `EvaluationConfigState` | `45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65` |

**Example: sRN EvaluationConfigState**

| Protocol | Example                                                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRN{SPC}EvaluationConfigState<ETX>`                                                   |
| CoLa A   | `<STX>sRN EvaluationConfigState<ETX>`                                                       |
| CoLa A   | `sRN EvaluationConfigState`                                                                             |
| CoLa A   | `02 73 52 4E 20 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 19 73 52 4E 20 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65 04` |
| CoLa B   | `73 52 4E 20 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65`                            |

**Telegram structure: sRA EvaluationConfigState**

| Telegram part            | Description                   | Variable         | Length                 | Additional details            | Values CoLa A (ASCII)                                 | Values CoLa B (Binary)                                                                        |
| ------------------------ | ----------------------------- | ---------------- | ---------------------- | ----------------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Command type             | Answer                        | String           | 3                      |                               | `sRA`                    | `73 52 41`                                                       |
| Command                  | EvaluationConfigState         | String           | 21                     |                               | `EvaluationConfigState`  | `45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65` |
| Active beams limit       | Limit status                  | Enum_8           | 1                      | OK / warning / error          | `0 / 1 / 2`              | `00 / 01 / 02`                                                   |
| Active evaluations limit | Limit status                  | Enum_8           | 1                      | OK / warning / error          | `0 / 1 / 2`              | `00 / 01 / 02`                                                   |
| Beam counts              | Raw returned beam-count words | Array of Uint_16 | 98 (firmware 2.4.4.0R) | 49 words on firmware 2.4.4.0R | `0 ... FFFF (each word)` | `00 00 ... FF FF (each word)`                                    |

**Example: sRA EvaluationConfigState**

| Protocol | Example                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}EvaluationConfigState{SPC}0{SPC}0{SPC}F1F{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>`                                              |
| CoLa A   | `02 73 52 41 20 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65 20 30 20 30 20 46 31 46 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03`             |
| CoLa B   | `02 02 02 02 00 00 00 7E 73 52 41 20 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65 20 00 00 0F 1F 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 3B` |

### Read Field Evaluation Result [sRN FieldEvaluationResult]

This telegram returns the status information of all evaluations.

**Telegram structure: sRN FieldEvaluationResult**

| Telegram part | Description                     | Variable | Length | Additional details | Values CoLa A (ASCII)                                | Values CoLa B (Binary)                                                                        |     |
| ------------- | ------------------------------- | -------- | ------ | ------------------ | ---------------------------------------------------- | --------------------------------------------------------------------------------------------- | --- |
| Command type  | Read                            | String   | 3      |                    | `sRN`                   | `73 52 4E`                                                       |     |
| Command       | Info on field evaluation result | String   | 21     |                    | `FieldEvaluationResult` | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74` |     |

**Example: sRN FieldEvaluationResult**

| Protocol | Example                                                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRN{SPC}FieldEvaluationResult<ETX>`                                                   |
| CoLa A   | `<STX>sRN FieldEvaluationResult<ETX>`                                                       |
| CoLa A   | `sRN FieldEvaluationResult`                                                                             |
| CoLa A   | `02 73 52 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 19 73 52 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 12` |
| CoLa B   | `73 52 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74`                            |

**Telegram structure: sRA FieldEvaluationResult**

| Telegram part     | Description                                                                                                                                                                                      | Variable | Length | Additional details                                                                             | Values CoLa A (ASCII)                                     | Values CoLa B (Binary)                                                                        |     |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------ | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --- |
| Command type      | Answer                                                                                                                                                                                           | String   | 3      |                                                                                                | `sRA`                        | `73 52 41`                                                       |     |
| Command           | Info on field evaluation result                                                                                                                                                                  | String   | 21     |                                                                                                | `FieldEvaluationResult`      | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74` |     |
| Version           | Version number                                                                                                                                                                                   | Uint_16  | 2      |                                                                                                | `0 ... FFFFh`                | `00 ... FF FF`                                                   |     |
| Timestamp         | Time of the last field infringement. Time base is the sensor system time in milliseconds since January 1, 1970, 00:00 (UTC). If a time server is being used, the configured system time is used. | ULInt_64 | 8      |                                                                                                | `0 ... FFFFFFFFFFFFFFFFh`    | `00 00 00 00 00 00 00 00 ... FF FF FF FF FF FF FF FF`            |     |
| Evaluation Result | Evaluation state of the first field.                                                                                                                                                             | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                               |     |
| Evaluation Result | Evaluation state of the second field.                                                                                                                                                            | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                               |     |

| ..                |                                                                                                                                                                                                  |          |        |                                                                                                |                                                           |                                                                                               |     |
| Evaluation Result | Evaluation state of the last field. (maximum amount of evaluations = 48)                                                                                                                         | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                               |     |

On firmware 2.4.4.0R, the parameter block is a 2-byte version,
an 8-byte timestamp, and 48 one-byte result codes (58 bytes total).
Each result occupies one byte, with no additional reserved byte.

**Example: sRA FieldEvaluationResult**

| Protocol | Example                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}FieldEvaluationResult{SPC}1{SPC}A07E2E8{SPC}4{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>`                                          |
| CoLa A   | `02 73 52 41 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 20 41 30 37 45 32 45 38 20 34 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03` |
| CoLa B   | `02 02 02 02 00 00 00 54 73 52 41 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 00 01 00 00 00 00 0A 07 E2 E8 04 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 3F`                                                                                                                         |

### Receive Field Evaluation Result by Event [sEN FieldEvaluationResult]

This telegram returns the status information of all evaluations.

**Telegram structure: sEN FieldEvaluationResult**

| Telegram part | Description                     | Variable | Length | Additional details | Values CoLa A (ASCII)                                | Values CoLa B (Binary)                                                                        |     |
| ------------- | ------------------------------- | -------- | ------ | ------------------ | ---------------------------------------------------- | --------------------------------------------------------------------------------------------- | --- |
| Command type  | Event                           | String   | 3      |                    | `sEN`                   | `73 45 4E`                                                       |     |
| Command       | Info on field evaluation result | String   | 21     |                    | `FieldEvaluationResult` | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74` |     |
| Reporting     | Start/ stop                     | Enum_8   | 1      | Stop:<br>Start:    | `0<br>1`                | `00<br>01`                                                       |     |

**Example: sEN FieldEvaluationResult**

| Protocol | Example                                                                                                                                    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sEN{SPC}FieldEvaluationResult{SPC}1<ETX>`                                                   |
| CoLa A   | `sEN FieldEvaluationResult 1`                                                                                 |
| CoLa A   | `02 73 45 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 1B 73 45 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 01 24` |
| CoLa B   | `73 45 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 01`                            |

**Example: sEA FieldEvaluationResult**

| Protocol | Example                                                                                                                                    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sEA{SPC}FieldEvaluationResult{SPC}1<ETX>`                                                   |
| CoLa A   | `02 73 45 41 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 1B 73 45 41 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 01 2B` |

**Telegram structure: sSN FieldEvaluationResult**

| Telegram part     | Description                                                                                                                                                                                        | Variable | Length | Additional details                                                                             | Values CoLa A (ASCII)                                     | Values CoLa B (Binary)                                                                        |     |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------ | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --- |
| Command type      | Answer                                                                                                                                                                                             | String   | 3      |                                                                                                | `sSN`                        | `73 53 4E`                                                       |     |
| Command           | Info on field evaluation result                                                                                                                                                                    | String   | 21     |                                                                                                | `FieldEvaluationResult`      | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74` |     |
| Version           | Version number                                                                                                                                                                                     | Uint_16  | 2      |                                                                                                | `0 ... FFFFh`                | `00 ... FF FF`                                                   |     |
| Timestamp         | Time of the latest field infringement. Time base is the sensor system time in milliseconds since January 1, 1970, 00:00 (UTC). If a time server is being used, the configured system time is used. | ULInt_64 | 8      |                                                                                                | `0 ... FFFFFFFFFFFFFFFFh`    | `00 00 00 00 00 00 00 00 ... FF FF FF FF FF FF FF FF`            |     |
| Evaluation Result | Evaluation state of the first field.                                                                                                                                                               | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                               |     |
| Evaluation Result | Evaluation state of the second field.                                                                                                                                                              | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                               |     |
| ..                |                                                                                                                                                                                                    |          |        |                                                                                                |                                                           |                                                                                               |     |
| Evaluation Result | Evaluation state of the last field.<br>(maximum amount of evaluations = 48)                                                                                                                        | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                               |     |

**Example: sSN FieldEvaluationResult**

| Protocol | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sSN{SPC}FieldEvaluationResult{SPC}1{SPC}65D2897B50D60{SPC}4{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>`                                                      |
| CoLa A   | `02 73 53 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 20 36 35 44 32 38 39 37 42 35 30 44 36 30 20 34 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03` |
| CoLa B   | `02 02 02 02 00 00 00 54 73 53 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 00 01 00 06 5D 28 97 CE F6 30 04 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 DA`                                                                                                                                           |

### Request Perpendicular Distance Once [sRN perpendicularDistanceResult]

This telegram can be used to request the perpendicular distance. The shortest and furthest measuring point in a range to a reference plane will be transmitted. A field and a reference plane must be defined in the user interface under Application > Perpendicular distance measurement.

**Telegram structure: sRN perpendicularDistanceResult**

| Telegram part | Description                   | Variable | Length | Additional details | Values CoLa A (ASCII)                                      | Values CoLa B (Binary)                                                                                          |     |
| ------------- | ----------------------------- | -------- | ------ | ------------------ | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --- |
| Command type  | Read                          | String   | 3      |                    | `sRN`                         | `73 52 4E`                                                                         |     |
| Command       | Perpendicular distance values | String   | 27     |                    | `perpendicularDistanceResult` | `70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74` |     |

**Example: sRN perpendicularDistanceResult**

| Protocol | Example                                                                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sRN{SPC}perpendicularDistanceResult<ETX>`                                                               |
| CoLa A   | `<STX>sRN perpendicularDistanceResult<ETX>`                                                                   |
| CoLa A   | `sRN perpendicularDistanceResult`                                                                                         |
| CoLa A   | `02 73 52 4E 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 1F 73 52 4E 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 3D` |
| CoLa B   | `73 52 4E 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74`                            |

**Telegram structure: sRA perpendicularDistanceResult**

| Telegram part      | Description                                                                                                                                                                                                            | Variable | Length | Additional details | Values CoLa A (ASCII)                                                  | Values CoLa B (Binary)                                                                                          |     |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------ | ------------------ | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --- |
| Command type       | Answer                                                                                                                                                                                                                 | String   | 3      |                    | `sRA`                                     | `73 52 41`                                                                         |     |
| Command            | Perpendicular distance values                                                                                                                                                                                          | String   | 27     |                    | `perpendicularDistanceResult`             | `70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74` |     |
| Timestamp          | Time of the latest object detection in the defined fields. Time base is the sensor system time in milliseconds since January 1, 1970, 00:00 (UTC). If a time server is being used, the configured system time is used. | Uint_64  | 8      |                    | `0 ... FFFFFFFFFFFFFFFF`                  | `00 00 00 00 00 00 00 00... FF FF FF FF FF FF FF FF`                               |     |
| Amount of channels | Amount of perpendicular distance evaluation channels/fields                                                                                                                                                            | Uint_16  | 2      |                    | `0 ... +20`                               | `00 00 ... 00 14`                                                                  |     |
| Evaluation ID X    | ID of perpendicular distance field                                                                                                                                                                                     | Uint_16  | 2      |                    | `1 ... 20d (1 ... 14h)`                   | `00 01 ... 00 14`                                                                  |     |
| Evaluation ID X    | Minimum distance [mm]                                                                                                                                                                                                  | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |     |
| Evaluation ID X    | Maximum distance [mm]                                                                                                                                                                                                  | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |     |
| Evaluation ID X    | X minimum distance [mm]                                                                                                                                                                                                | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |     |
| Evaluation ID X    | Y minimum distance [mm]                                                                                                                                                                                                | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |     |
| Evaluation ID X    | Reserved                                                                                                                                                                                                               | Int_32   | 4      | Always:            | `0`                                       | `00 00 00 00`                                                                      |     |
| Evaluation ID X    | X maximum distance [mm]                                                                                                                                                                                                | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |     |
| Evaluation ID X    | Y maximum distance [mm]                                                                                                                                                                                                | Int_32   | 4      |                    | `-120000d … +120000d (FFFE2B3F … 1D4C0h)` | `FF FE 2B 3F … 00 01 D4 C0`                                                        |     |
| Evaluation ID X    | Reserved                                                                                                                                                                                                               | Int_32   | 4      | Always:            | `0`                                       | `00 00 00 00`                                                                      |     |
| Evaluation ID ..   | ..                                                                                                                                                                                                                     | ..       | ..     | ..                 | `..`                                      | `..`                                                                               |     |

**Example: sRA perpendicularDistanceResult**

| Protocol | Example                                                                                                                                                                                 |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CoLa A   | `<STX>sRA{SPC}perpendicularDistanceResult{SPC}A065478{SPC}0<ETX>`                                                                              |
| CoLa A   | `02 73 52 41 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 20 41 30 36 35 34 37 38 20 30 03`                         |
| CoLa B   | `02 02 02 02 00 00 00 2A 73 52 41 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 20 00 00 00 00 0A 06 54 78 00 00 32` |

### Request Perpendicular Distance Continuously on Event [sEN perpendicularDistanceResult]

This telegram can be used to request the perpendicular distance continuously on event. The shortest and furthest measuring point in a range to a reference plane will be transmitted. A field and a reference plane must be defined in the user interface under Application > Perpendicular distance measurement.

**Telegram structure: sEN perpendicularDistanceResult**

| Telegram part | Description                   | Variable | Length | Additional details | Values CoLa A (ASCII)                                      | Values CoLa B (Binary)                                                                                          |     |
| ------------- | ----------------------------- | -------- | ------ | ------------------ | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --- |
| Command type  | Event                         | String   | 3      |                    | `sEN`                         | `73 45 4E`                                                                         |     |
| Command       | Perpendicular distance values | String   | 27     |                    | `perpendicularDistanceResult` | `70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74` |     |
| Start/ Stop   | -                             | Enum_8   | 1      | Stop:<br>Start:    | `0<br>1`                      | `00<br>01`                                                                         |     |

**Example: sEN perpendicularDistanceResult**

| Protocol | Example                                                                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sEN{SPC}perpendicularDistanceResult{SPC}1<ETX>`                                                               |
| CoLa A   | `sEN perpendicularDistanceResult 1`                                                                                             |
| CoLa A   | `02 73 45 4E 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 21 73 45 4E 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 20 01 0B` |
| CoLa B   | `73 45 4E 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 20 01`                            |

**Example: sEA perpendicularDistanceResult**

| Protocol | Example                                                                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CoLa A   | `<STX>sEA{SPC}perpendicularDistanceResult{SPC}1<ETX>`                                                               |
| CoLa A   | `02 73 45 41 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 20 31 03`                      |
| CoLa B   | `02 02 02 02 00 00 00 21 73 45 41 20 70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74 20 01 04` |

**Telegram structure: sSN perpendicularDistanceResult**

| Telegram part      | Description                                                                                                                                                                                                            | Variable | Length | Additional details | Values CoLa A (ASCII)                                                  | Values CoLa B (Binary)                                                                                          |     |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------ | ------------------ | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --- |
| Command type       | Answer                                                                                                                                                                                                                 | String   | 3      |                    | `sSN`                                     | `73 53 4E`                                                                         |     |
| Command            | Perpendicular distance values                                                                                                                                                                                          | String   | 27     |                    | `perpendicularDistanceResult`             | `70 65 72 70 65 6E 64 69 63 75 6C 61 72 44 69 73 74 61 6E 63 65 52 65 73 75 6C 74` |     |
| Timestamp          | Time of the latest object detection in the defined fields. Time base is the sensor system time in milliseconds since January 1, 1970, 00:00 (UTC). If a time server is being used, the configured system time is used. | Uint_64  | 8      |                    | `0 ... FFFFFFFFFFFFFFFF`                  | `00 00 00 00 00 00 00 00... FF FF FF FF FF FF FF FF`                               |     |
| Amount of channels | Amount of perpendicular distance evaluation channels/fields                                                                                                                                                            | Uint_16  | 2      |                    | `0 ... +20`                               | `00 00 ... 00 14`                                                                  |     |
| Evaluation ID X    | ID of perpendicular distance field                                                                                                                                                                                     | Uint_16  | 2      |                    | `1 ... 20d (1 ... 14h)`                   | `00 01 ... 00 14`                                                                  |     |
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

**Additional Parameter Read Commands**
