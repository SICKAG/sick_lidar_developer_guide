# Set Layer Filter [sWN LFPlayerFilter]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Data Reduction

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#set-layer-filter-swn-lfplayerfilter

Select which of the sixteen layers are included in scan output (manual pages 146-147). This example disables filtering and enables all layers.

Requires Authorized client.

**Telegram structure: sWN LFPlayerFilter**

| Telegram part | Description                               | Variable        | Length | Additional details         | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                                   |
| ------------- | ----------------------------------------- | --------------- | ------ | -------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Write                                     | String          | 3      |                            | `sWN`                | `73 57 4E`                                  |
| Command       | LFPlayerFilter                            | String          | 14     |                            | `LFPlayerFilter`     | `4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72` |
| State         | Filter enabled                            | Bool_1          | 1      | Disabled / enabled         | `0 / 1`              | `00 / 01`                                   |
| Layers        | One enable flag per layer, in layer order | Array of Bool_1 | 16     | Sixteen flags: 0 off, 1 on | `0 / 1 (each layer)` | `00 / 01 (each layer)`                      |

**Example: sWN LFPlayerFilter**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LFPlayerFilter{SPC}0{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1<ETX>
```

```text
sWN LFPlayerFilter 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
```

```text
02 73 57 4E 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72 20 30 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 24 73 57 4E 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72 20 00 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 73
```

```text
73 57 4E 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72 20 00 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01
```

**Telegram structure: sWA LFPlayerFilter**

| Telegram part | Description    | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------- | -------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Answer         | String   | 3      |                    | `sWA`            | `73 57 41`                                  |
| Command       | LFPlayerFilter | String   | 14     |                    | `LFPlayerFilter` | `4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72` |

**Example: sWA LFPlayerFilter**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LFPlayerFilter<ETX>
```

```text
02 73 57 41 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 41 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72 20 7C
```
