# Set Interval Filter [sWN LFPintervalFilter]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Data Reduction

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#set-interval-filter-swn-lfpintervalfilter

Enables and set up the interval filter. The interval filter reduce the scan output rate by a given factor.

**Telegram structure: sWN LFPintervalFilter**

| Telegram part   | Description                                                                          | Variable | Length | Additional details | Values CoLa A (ASCII)                                                   | Values CoLa B (Binary)                                                            |
| --------------- | ------------------------------------------------------------------------------------ | -------- | ------ | ------------------ | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Command type    | Write                                                                                | String   | 3      |                    | `sWN`                                      | `73 57 4E`                                           |
| Command         | Reduce the scan output rate by a given factor                                        | String   | 17     |                    | `LFPintervalFilter`                        | `4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72` |
| Variable data 1 | Enables/Disables the filter.                                                         | Bool     | 1      | Off:<br>On:        | `0d (00h)<br>+1d (01h)`                    | `00<br>01`                                           |
| Variable Data 2 | Only every nth scan is output where n is given by<br>the value of uiReductionFactor. | Uint_32  | 4      |                    | `1d…+50d<br>(00 00 00 01h … 00 00 00 32h)` | `00 00 00 01 … 00 00 00 32`                          |

Enables the interval filter an set up to the 3rd scan

**Example: sWN LFPintervalFilter**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LFPintervalFilter{SPC}0{SPC}2<ETX>
```

```text
sWN LFPintervalFilter 0 2
```

```text
02 73 57 4E 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 20 30 20 32 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 57 4E 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 20 00 00 00 00 02 0D
```

```text
73 57 4E 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 20 00 00 00 00 02
```

**Telegram structure: sWA LFPintervalFilter**

| Telegram part | Description                                   | Variable | Length | Additional details | Values CoLa A (ASCII)                            | Values CoLa B (Binary)                                                            |
| ------------- | --------------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------- |
| Command type  | Answer                                        | String   | 3      |                    | `sWA`               | `73 57 41`                                           |
| Command       | Reduce the scan output rate by a given factor | String   | 17     |                    | `LFPintervalFilter` | `4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72` |

**Example: sWA LFPintervalFilter**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LFPintervalFilter<ETX>
```

```text
02 73 57 41 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 57 41 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 20 00
```
