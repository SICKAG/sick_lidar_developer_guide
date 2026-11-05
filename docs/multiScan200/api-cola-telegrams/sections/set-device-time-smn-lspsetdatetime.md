# Set Device Time [sMN LSPsetdatetime]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Date and System Time

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#set-device-time-smn-lspsetdatetime

Set the device time: year, month, day, hour, minute, second, and microsecond. In CoLa A, write decimal values with a leading `+`; values without a sign are hexadecimal.

The device has no real-time clock. After a power cycle, the time must be set again, or use NTP or PTP.

Required user level: Authorized client.

**Telegram structure: sMN LSPsetdatetime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Set time stamp | String | 14 | | `LSPsetdatetime` | `4C 53 50 73 65 74 64 61 74 65 74 69 6D 65` |
| Year | | Uint_16 | 2 | | `+1970d …+2099d (07B2h… 0833h)` | `07 B2 … 08 33` |
| Month | | Uint_8 | 1 | | `+1d … +12d(01h … 0Ch)` | `01 … 0C` |
| Day | | Uint_8 | 1 | | `+1d … +31d(01h … 1Fh)` | `00 … 1F` |
| Hour | | Uint_8 | 1 | | `+0d … +23d(00h … 17h)` | `00 … 17` |
| Minute | | Uint_8 | 1 | | `+0d … +59d(00h … 3Bh)` | `00 … 3B` |
| Second | | Uint_8 | 1 | | `+0d … +59d(00h … 3Bh)` | `00 … 3B` |
| Microsecond | | Uint_32 | 4 | | `+0d …+999999d(00000000h …000F423Fh)` | `00 00 00 00 … 00 0F 42 3F` |

**Example: sMN LSPsetdatetime**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}LSPsetdatetime{SPC}+2026{SPC}+10{SPC}+1{SPC}+16{SPC}+52{SPC}+1{SPC}0<ETX>
```

```text
sMN LSPsetdatetime +2026 +10 +1 +16 +52 +1 0
```

```text
02 73 4D 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 2B 32 30 32 36 20 2B 31 30 20 2B 31 20 2B 31 36 20 2B 35 32 20 2B 31 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1E 73 4D 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 07 EA 0A 01 10 34 01 00 00 00 00 9F
```

```text
73 4D 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 07 EA 0A 01 10 34 01 00 00 00 00
```

**Telegram structure: sAN LSPsetdatetime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Set time stamp | String | 14 | | `LSPsetdatetime` | `4C 53 50 73 65 74 64 61 74 65 74 69 6D 65` |
| Status code | Code number | Enum_8 | 1 | Success: | `0` | `00` |

**Example: sAN LSPsetdatetime**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}LSPsetdatetime{SPC}0<ETX>
```

```text
02 73 41 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 41 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 00 50
```
