# Set Port Configuration [sWN PortConfiguration]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Inputs and Outputs

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#set-port-configuration-swn-portconfiguration

Sets the port configuration of all I/Os. This telegram requires at least user level: Authorized Client.

**Telegram structure: sWN PortConfiguration**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set Port Configuration | String | 17 | | `PortConfiguration` | `50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |
| PortConfiguration[].PortType | PortType (repeated 6 times) | Enum_8 | 1 | INPUT:<br>OUTPUT: | `0<br>1` | `00<br>01` |
| PortConfiguration[].Name length | Length of Name (max. 20) | Uint_16 | 2 | | `0 ... 14` | `00 00 ... 00 14` |
| PortConfiguration[].Name | Name | String | n | | `<text>` | `<bytes>` |
| PortConfiguration[].Logic | Logic | Enum_8 | 1 | ACTIVE_HIGH:<br>ACTIVE_LOW: | `0<br>1` | `00<br>01` |
| PortConfiguration[].Debounce | Debounce | Uint_16 | 2 | 5 ... 10000 ms | `5 ... 2710` | `00 05 ... 27 10` |
| PortConfiguration[].Sensitivity | Sensitivity | Enum_8 | 1 | EDGE:<br>LEVEL: | `0<br>1` | `00<br>01` |
| PortConfiguration[].Reserved1 | Reserved1 | Uint_16 | 2 | 0 ... 65535 | `0 ... FFFF` | `00 00 ... FF FF` |
| PortConfiguration[].Reserved2 | Reserved2 | Uint_16 | 2 | 0 ... 65535 | `0 ... FFFF` | `00 00 ... FF FF` |
| PortConfiguration[].Logic | Logic | Enum_8 | 1 | ACTIVE_HIGH:<br>ACTIVE_LOW: | `0<br>1` | `00<br>01` |
| PortConfiguration[].OutputMode | Set kind of mode for output pin | Enum_8 | 1 | PNP:<br>NPN:<br>PUSH_PULL: | `0<br>1<br>2` | `00<br>01<br>02` |
| PortConfiguration[].RestartType | Defines type of restart to be used | Enum_8 | 1 | RESTART_IMMEDATE:<br>RESTART_TIME:<br>RESTART_INPUT: | `0<br>1<br>2` | `00<br>01<br>02` |
| PortConfiguration[].RestartTime | restart time in case RESTART_TIME selected | Uint_32 | 4 | 20 ... 600000 | `14 ... 927C0` | `00 00 00 14 ... 00 09 27 C0` |
| PortConfiguration[].RestartInput | restart input number in case RESTART_INPUT selected | Uint_16 | 2 | 1 ... 8 | `1 ... 8` | `00 01 ... 00 08` |
| PortConfiguration[].Combination | Combination | Enum_8 | 1 | AND:<br>OR:<br>XOR: | `0<br>1<br>2` | `00<br>01<br>02` |
| PortConfiguration[].Reserved3 | Reserved3 | Uint_16 | 2 | 0 ... 65535 | `0 ... FFFF` | `00 00 ... FF FF` |
| PortConfiguration[].Reserved4 | Reserved4 | Uint_16 | 2 | 0 ... 65535 | `0 ... FFFF` | `00 00 ... FF FF` |
| PortConfiguration[].Sources length | Number of Sources elements (max. 20) | Uint_16 | 2 | | `0 ... 14` | `00 00 ... 00 14` |
| PortConfiguration[].Sources[].Name | Name (repeated once per element) | String | 4 | | `<text>` | `<bytes>` |
| PortConfiguration[].Sources[].Invert | Invert | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| PortConfiguration[].Sources[].Reserved5 | Reserved5 | Uint_8 | 1 | 0 ... 255 | `0 ... FF` | `00 ... FF` |
| PortConfiguration[].Sources[].Reserved6 | Reserved6 | Uint_8 | 1 | 0 ... 255 | `0 ... FF` | `00 ... FF` |
| PortConfiguration[].Reserved7 | Reserved7 | Uint_16 | 2 | 0 ... 65535 | `0 ... FFFF` | `00 00 ... FF FF` |
| PortConfiguration[].Reserved8 | Reserved8 | Uint_16 | 2 | 0 ... 65535 | `0 ... FFFF` | `00 00 ... FF FF` |
| PortConfiguration[].Reserved9 | Reserved9 | Uint_16 | 2 | 0 ... 65535 | `0 ... FFFF` | `00 00 ... FF FF` |
| PortConfiguration[].Reserved10 | Reserved10 | Uint_16 | 2 | 0 ... 65535 | `0 ... FFFF` | `00 00 ... FF FF` |

**Example: sWN PortConfiguration**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}PortConfiguration{SPC}1{SPC}6{SPC}InOut3{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}6{SPC}InOut4{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}6{SPC}InOut5{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}6{SPC}InOut6{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}5{SPC}Power{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1{SPC}6{SPC}InOut8{SPC}0{SPC}A{SPC}1{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}C8{SPC}1{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
<STX>sWN PortConfiguration 1 6 InOut3 0 A 1 0 0 1 0 0 C8 1 1 0 0 0 0 0 0 0 1 6 InOut4 0 A 1 0 0 1 0 0 C8 1 1 0 0 0 0 0 0 0 1 6 InOut5 0 A 1 0 0 1 0 0 C8 1 1 0 0 0 0 0 0 0 1 6 InOut6 0 A 1 0 0 1 0 0 C8 1 1 0 0 0 0 0 0 0 1 5 Power 0 A 1 0 0 1 0 0 C8 1 1 0 0 0 0 0 0 0 1 6 InOut8 0 A 1 0 0 1 0 0 C8 1 1 0 0 0 0 0 0 0<ETX>
```

```text
sWN PortConfiguration 1 6 InOut3 0 A 1 0 0 1 0 0 C8 1 1 0 0 0 0 0 0 0 1 6 InOut4 0 A 1 0 0 1 0 0 C8 1 1 0 0 0 0 0 0 0 1 6 InOut5 0 A 1 0 0 1 0 0 C8 1 1 0 0 0 0 0 0 0 1 6 InOut6 0 A 1 0 0 1 0 0 C8 1 1 0 0 0 0 0 0 0 1 5 Power 0 A 1 0 0 1 0 0 C8 1 1 0 0 0 0 0 0 0 1 6 InOut8 0 A 1 0 0 1 0 0 C8 1 1 0 0 0 0 0 0 0
```

```text
02 73 57 4E 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 31 20 36 20 49 6E 4F 75 74 33 20 30 20 41 20 31 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 31 20 36 20 49 6E 4F 75 74 34 20 30 20 41 20 31 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 31 20 36 20 49 6E 4F 75 74 35 20 30 20 41 20 31 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 31 20 36 20 49 6E 4F 75 74 36 20 30 20 41 20 31 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 31 20 35 20 50 6F 77 65 72 20 30 20 41 20 31 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 31 20 36 20 49 6E 4F 75 74 38 20 30 20 41 20 31 20 30 20 30 20 31 20 30 20 30 20 43 38 20 31 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 01 0B 73 57 4E 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 01 00 06 49 6E 4F 75 74 33 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 34 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 35 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 36 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 05 50 6F 77 65 72 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 38 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 0A
```

```text
73 57 4E 20 50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 01 00 06 49 6E 4F 75 74 33 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 34 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 35 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 36 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 05 50 6F 77 65 72 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 06 49 6E 4F 75 74 38 00 00 0A 01 00 00 00 00 01 00 00 00 00 00 C8 00 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00
```

**Telegram structure: sWA PortConfiguration**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set Port Configuration | String | 17 | | `PortConfiguration` | `50 6F 72 74 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |

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
