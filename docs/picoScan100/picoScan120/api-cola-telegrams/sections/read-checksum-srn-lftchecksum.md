# Read Checksum [sRN LFTchecksum]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › General

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#read-checksum-srn-lftchecksum

This command includes the MD5 checksum of multiple software parts to verify their integrity. The checksums help to ensure files have not been corrupted or altered. They are also important for cybersecurity because they detect unauthorized modifications.

**Telegram structure: sRN LFTchecksum**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | MD5 checksum | String | 11 | | `LFTchecksum` | `4C 46 54 63 68 65 63 6B 73 75 6D` |

**Example: sRN LFTchecksum**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LFTchecksum<ETX>
```

```text
<STX>sRN LFTchecksum<ETX>
```

```text
sRN LFTchecksum
```

```text
02 73 52 4E 20 4C 46 54 63 68 65 63 6B 73 75 6D 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 4E 20 4C 46 54 63 68 65 63 6B 73 75 6D 1C
```

```text
73 52 4E 20 4C 46 54 63 68 65 63 6B 73 75 6D
```

**Telegram structure: sRA LFTchecksum**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | MD5 checksum | String | 11 | | `LFTchecksum` | `4C 46 54 63 68 65 63 6B 73 75 6D` |
| Variable Data 1 | Checksum validity | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| Variable Data 2 | Length | Uint_16 | 2 | | `20` | `32 20` |
| Variable Data 2 | Checksum Linux part | FlexString | | | `<hash>` | `<hash>` |
| Variable Data 3 | Length | Uint_16 | 2 | | `20` | `32 20` |
| Variable Data 3 | Checksum app part | FlexString | | | `<hash>` | `<hash>` |
| Variable Data 4 | Length | Uint_16 | 2 | | `20` | `32 20` |
| Variable Data 4 | Checksum calibration part | FlexString | | | `<hash>` | `<hash>` |
| Variable Data 5 | Length | Uint_16 | 2 | | `20` | `32 20` |
| Variable Data 5 | Checksum parameters part | FlexString | | | `<hash>` | `<hash>` |

**Example: sRA LFTchecksum**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LFTchecksum{SPC}1{SPC}20{SPC}92b7b9720c40e8b99268229283617dd5{SPC}20{SPC}e002a1c8022b30589ce0e357c87f5a1c{SPC}20{SPC}901736df3fbc807121c46f9eaed8ff28{SPC}20{SPC}588e8386c7cd011d1a8369c4377e2a4c<ETX>
```

```text
02 73 52 41 20 4C 46 54 63 68 65 63 6B 73 75 6D 20 31 20 32 30 20 39 32 62 37 62 39 37 32 30 63 34 30 65 38 62 39 39 32 36 38 32 32 39 32 38 33 36 31 37 64 64 35 20 32 30 20 65 30 30 32 61 31 63 38 30 32 32 62 33 30 35 38 39 63 65 30 65 33 35 37 63 38 37 66 35 61 31 63 20 32 30 20 39 30 31 37 33 36 64 66 33 66 62 63 38 30 37 31 32 31 63 34 36 66 39 65 61 65 64 38 66 66 32 38 20 32 30 20 35 38 38 65 38 33 38 36 63 37 63 64 30 31 31 64 31 61 38 33 36 39 63 34 33 37 37 65 32 61 34 63 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 99 73 52 41 20 4C 46 54 63 68 65 63 6B 73 75 6D 20 01 00 20 39 32 62 37 62 39 37 32 30 63 34 30 65 38 62 39 39 32 36 38 32 32 39 32 38 33 36 31 37 64 64 35 00 20 65 30 30 32 61 31 63 38 30 32 32 62 33 30 35 38 39 63 65 30 65 33 35 37 63 38 37 66 35 61 31 63 00 20 39 30 31 37 33 36 64 66 33 66 62 63 38 30 37 31 32 31 63 34 36 66 39 65 61 65 64 38 66 66 32 38 00 20 35 38 38 65 38 33 38 36 63 37 63 64 30 31 31 64 31 61 38 33 36 39 63 34 33 37 37 65 32 61 34 63 6F
```
