# Soft Reset the Device [sMN mSCsoftreset]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › General

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#soft-reset-the-device-smn-mscsoftreset

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
