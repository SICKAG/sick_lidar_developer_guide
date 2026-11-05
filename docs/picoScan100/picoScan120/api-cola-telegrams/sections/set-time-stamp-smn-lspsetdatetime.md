# Set Time Stamp [sMN LSPsetdatetime]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › Date and System Time

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#set-time-stamp-smn-lspsetdatetime

The data format in the telegram is: +2009{SPC}+7{SPC}+22{SPC}+12{SPC}+0{SPC}+0{SPC}+0.The numbers represent year, month, day, hour, minute, second, microsecond.

If plus is used up-front the data it is interpreted as an integer decimal number, without the plus it's the scanner reads the data as hex format.

The answer is always in ASCII format.

Does only work if NTP- respectively PTP-Client is not active.

There is no real time clock inside the device. When the scanner is switched off and after a reboot, the time has to be set again. Therefore, it is recommended to use a NTP or a PTP setting.

**Telegram structure: sMN LSPsetdatetime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Set time stamp | String | 14 | | `LSPsetdatetime` | `4C 53 50 73 65 74 64 61 74 65 74 69 6D 65` |
| Year | | Uint_16 | 2 | | `+1970d … +2099d (07B2h … 0833h)` | `07 B2 … 08 33` |
| Month | | Uint_8 | 1 | | `+1d … +12d(01h … 0Ch)` | `01 … 0C` |
| Day | | Uint_8 | 1 | | `+1d … +31d(01h … 1Fh)` | `00 … 1F` |
| Hour | | Uint_8 | 1 | | `+0d … +23d(00h … 17h)` | `00 … 17` |
| Minute | | Uint_8 | 1 | | `+0d … +59d(00h … 3Bh)` | `00 … 3B` |
| Second | | Uint_8 | 1 | | `+0d … +59d(00h … 3Bh)` | `00 … 3B` |
| Microsecond | | Uint_32 | 4 | | `+0d … +999999d(00000000h … 000F423Fh)` | `00 00 00 00 … 00 0F 42 3F` |

**Example 1: sMN LSPsetdatetime Date: 17.02.2009; Time: 16:34**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}LSPsetdatetime{SPC}7D9{SPC}2{SPC}11{SPC}10{SPC}22{SPC}0{SPC}0<ETX>
```

```text
<STX>sMN LSPsetdatetime 7D9 2 11 10 22 0 0<ETX>
```

```text
sMN LSPsetdatetime 7D9 2 11 10 22 0 0
```

```text
02 73 4D 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 37 44 39 20 32 20 31 31 20 31 30 20 32 32 20 30 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1E 73 4D 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 07 D9 02 11 10 22 00 00 00 00 00 A3
```

```text
73 4D 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 07 D9 02 11 10 22 00 00 00 00 00
```

**Example 2: sMN LSPsetdatetime Date: 26.01.2010; Time: 10:35**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}LSPsetdatetime{SPC}+2010{SPC}+01{SPC}+26{SPC}+10{SPC}+35{SPC}0{SPC}0<ETX>
```

```text
<STX>sMN LSPsetdatetime +2010 +01 +26 +10 +35 0 0<ETX>
```

```text
sMN LSPsetdatetime +2010 +01 +26 +10 +35 0 0
```

```text
02 73 4D 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 2B 32 30 31 30 20 2B 30 31 20 2B 32 36 20 2B 31 30 20 2B 33 35 20 2B 30 30 20 2B 30 30 30 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1E 73 4D 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 07 DA 01 1A 0A 23 00 00 00 00 00 B3
```

```text
73 4D 4E 20 4C 53 50 73 65 74 64 61 74 65 74 69 6D 65 20 07 DA 01 1A 0A 23 00 00 00 00 00
```

**Telegram structure: sAN LSPsetdatetime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Set time stamp | String | 14 | | `LSPsetdatetime` | `4C 53 50 73 65 74 64 61 74 65 74 69 6D 65` |
| Status code | Code number | Enum_8 | 1 | Success: | `0` | `00` |

**Example 1, 2: sAN LSPsetdatetime**

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

Activate time stamp in the output string format or on SOPAS page “data processing”.

**Set NTP (Network Time Protocol) Parameters**
