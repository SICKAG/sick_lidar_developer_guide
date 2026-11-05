# Read Device Search Mode [sRN EtherCoLaScanMode]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Legacy Protocols

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-device-search-mode-srn-ethercolascanmode

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
