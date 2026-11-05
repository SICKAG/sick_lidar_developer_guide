# Set Moving Averaging Filter [sWN LFPmovingAveragingFilter]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#set-moving-averaging-filter-swn-lfpmovingaveragingfilter

Enables the moving average filter

**Telegram structure: sWN LFPmovingAveragingFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | String | String | 24 | | `LFPmovingAveragingFilter` | `4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72` |
| Variable Data 1 | Moving averaging is enabled | Bool | 1 | Off:<br>On: | `0d (00h)<br>+1d (01h)` | `00<br>01` |
| Variable Data 2 | averaging depth | UInt | 2 | Minimum:<br>Maximum: | `+2d (02h)<br>+4d (0Ah)` | `00 02<br>00 04` |

Disable the moving average filter and set averaging depth to 3

**Example: sWN LFPmovingAveragingFilter +0 +3**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LFPmovingAveragingFilter{SPC}+0{SPC}+3<ETX>
```

```text
<STX>sWN LFPmovingAveragingFilter +0 +3<ETX>
```

```text
sWN LFPmovingAveragingFilter +0 +3
```

```text
02 73 57 4E 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 20 2B 30 20 2B 33 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 20 73 57 4E 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 20 00 00 03 41
```

```text
73 57 4E 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 20 00 00 03
```

**Telegram structure: sWA LFPmovingAveragingFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | String | String | 24 | | `LFPmovingAveragingFilter` | `4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72` |

**Example: sWA LFPmovingAveragingFilter**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LFPmovingAveragingFilter<ETX>
```

```text
02 73 57 41 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1D 73 57 41 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 20 4D
```
