# Apply Configured Ethernet Settings [sMN mEthUpdt]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Ethernet

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#apply-configured-ethernet-settings-smn-methupdt

Applies the Ethernet settings. This needs to be executed to actually change the Ethernet settings. This telegram requires at least user level: Authorized Client.

**Telegram structure: sMN mEthUpdt**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Apply Configured Ethernet Settings | String | 8 | | `mEthUpdt` | `6D 45 74 68 55 70 64 74` |

**Example: sMN mEthUpdt**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}mEthUpdt<ETX>
```

```text
<STX>sMN mEthUpdt<ETX>
```

```text
sMN mEthUpdt
```

```text
02 73 4D 4E 20 6D 45 74 68 55 70 64 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0C 73 4D 4E 20 6D 45 74 68 55 70 64 74 51
```

```text
73 4D 4E 20 6D 45 74 68 55 70 64 74
```

**Telegram structure: sAN mEthUpdt**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Apply Configured Ethernet Settings | String | 8 | | `mEthUpdt` | `6D 45 74 68 55 70 64 74` |

**Example: sAN mEthUpdt**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}mEthUpdt<ETX>
```

```text
02 73 41 4E 20 6D 45 74 68 55 70 64 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0D 73 41 4E 20 6D 45 74 68 55 70 64 74 20 7D
```
