# Set Device Search Mode [sWN EtherCoLaScanMode]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Cybersecurity

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#set-device-search-mode-swn-ethercolascanmode

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
