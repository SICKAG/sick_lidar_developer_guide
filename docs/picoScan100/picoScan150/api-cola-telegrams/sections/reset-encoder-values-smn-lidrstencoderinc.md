# Reset Encoder Values [sMN LIDrstencoderinc]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Encoder Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#reset-encoder-values-smn-lidrstencoderinc

Reset current encoder tick value to 0.

**Telegram structure: sMN LIDrstencoderinc**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Reset Encoder values | String | 16 | | `LIDrstencoderinc` | `4C 49 44 72 73 74 65 6E 63 6F 64 65 72 69 6E 63` |

**Example: sMN LIDrstencoderinc**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}LIDrstencoderinc<ETX>
```

```text
<STX>sMN LIDrstencoderinc<ETX>
```

```text
sMN LIDrstencoderinc
```

```text
02 73 4D 4E 20 4C 49 44 72 73 74 65 6E 63 6F 64 65 72 69 6E 63 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 4D 4E 20 4C 49 44 72 73 74 65 6E 63 6F 64 65 72 69 6E 63 74
```

```text
73 4D 4E 20 4C 49 44 72 73 74 65 6E 63 6F 64 65 72 69 6E 63
```

**Telegram structure: sAN LIDrstencoderinc**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Reset Encoder values | String | 16 | | `LIDrstencoderinc` | `4C 49 44 72 73 74 65 6E 63 6F 64 65 72 69 6E 63` |
| Reset status | | Bool_1 | 1 | Successful<br>Failure/ Insufficient user level | `0<br>1` | `00<br>01` |

**Example: sAN LIDrstencoderinc**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}LIDrstencoderinc{SPC}0<ETX>
```

```text
02 73 41 4E 20 4C 49 44 72 73 74 65 6E 63 6F 64 65 72 69 6E 63 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 41 4E 20 4C 49 44 72 73 74 65 6E 63 6F 64 65 72 69 6E 63 20 00 58
```
