# Poll One Telegram [sRN LMDscandata]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#poll-one-telegram-srn-lmdscandata

Asking the device for the measurement values of the last valid scan. The device will respond, even if currently no measurement data is created (e.g. due to standby or log in).

Data is transmitted only via LMDscandata when LMDscandata is selected as data output format.

During the boot-up phase of the device, there will be no data telegram or answer from the device.

**Telegram structure: sRN LMDscandata**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Only one telegram | String | 11 | | `LMDscandata` | `4C 4D 44 73 63 61 6E 64 61 74 61` |

**Example: sRN LMDscandata**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LMDscandata<ETX>
```

```text
<STX>sRN LMDscandata<ETX>
```

```text
sRN LMDscandata
```

```text
02 73 52 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 05
```

```text
73 52 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61
```

**Telegram structure: sRA LMDscandata**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Find complete telegram structure of the answer in . | | | | | | |
