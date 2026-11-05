# Load Application Defaults [sMN mSCloadappdef]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › General

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#load-application-defaults-smn-mscloadappdef

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
