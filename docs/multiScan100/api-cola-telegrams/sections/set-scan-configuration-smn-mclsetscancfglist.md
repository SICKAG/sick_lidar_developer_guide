# Set Scan Configuration [sMN mCLsetscancfglist]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#set-scan-configuration-smn-mclsetscancfglist

Enable or disable interlaced mode. Each scan is shifted by 0.125°, and combining the shifted scans gives a finer angular resolution. The number of scans depends on the variant:

- multiScan165 (16 layers at 0.5°): 0.25° after 2 scans (10 Hz), 0.125° after 4 scans (5 Hz).
- multiScan136 and multiScan166 (14 layers at 1°; the 2 high-resolution layers stay at 0.125°): 0.25° after 4 scans (5 Hz), 0.125° after 8 scans (2.5 Hz).

Requires Authorized client.

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
