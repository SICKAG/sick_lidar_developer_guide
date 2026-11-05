# Enable/ Disable CoLa1 Interface [sWN EIAuxEnable]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Legacy Protocols

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#enable-disable-cola1-interface-swn-eiauxenable

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
