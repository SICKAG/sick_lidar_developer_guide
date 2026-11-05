# Set IP Address [sWN EIIpAddr]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Ethernet

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#set-ip-address-swn-eiipaddr

Save permanently to set values. Changes will be active after rebooting the device. Settings must correspond with network in which scanner is used. Else device cannot be found any more.

**Telegram structure: sWN EIIpAddr**

| Telegram part | Description    | Variable | Length | Additional details        | Values CoLa A (ASCII)                               | Values CoLa B (Binary)                                 |
| ------------- | -------------- | -------- | ------ | ------------------------- | --------------------------------------------------- | ------------------------------------------------------ |
| Command type  | Write          | String   | 3      |                           | `sWN`                  | `73 57 4E`                |
| Command       | Set IP address | String   | 8      |                           | `EIIpAddr`             | `45 49 49 70 41 64 64 72` |
| IP address    | Set values     | Uint_8   | 1      | First part of IP address  | `0 …+255d (00 ... FF)` | `00 … FF`                 |
| IP address    | Set values     | Uint_8   | 1      | Second part of IP address | `0 …+255d (00 ... FF)` | `00 … FF`                 |
| IP address    | Set values     | Uint_8   | 1      | Third part of IP address  | `0 …+255d (00 ... FF)` | `00 … FF`                 |
| IP address    | Set values     | Uint_8   | 1      | Fourth part of IP address | `0 …+255d (00 ... FF)` | `00 … FF`                 |

**Example: sWN EIIpAddr**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EIIpAddr{SPC}C0{SPC}A8{SPC}0{SPC}1<ETX>
```

```text
sWN EIIpAddr C0 A8 0 1
```

```text
02 73 57 4E 20 45 49 49 70 41 64 64 72 20 43 30 20 41 38 20 30 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 57 4E 20 45 49 49 70 41 64 64 72 20 C0 A8 00 01 05
```

```text
73 57 4E 20 45 49 49 70 41 64 64 72 20 C0 A8 00 01
```

**Telegram structure: sWA EIIpAddr**

| Telegram part | Description    | Variable | Length | Additional details | Values CoLa A (ASCII)                   | Values CoLa B (Binary)                                 |
| ------------- | -------------- | -------- | ------ | ------------------ | --------------------------------------- | ------------------------------------------------------ |
| Command type  | Answer         | String   | 3      |                    | `sWA`      | `73 57 41`                |
| Command       | Set IP address | String   | 8      |                    | `EIIpAddr` | `45 49 49 70 41 64 64 72` |

**Example: sWA EIIpAddr**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}EIIpAddr<ETX>
```

```text
02 73 57 41 20 45 49 49 70 41 64 64 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0D 73 57 41 20 45 49 49 70 41 64 64 72 20 63
```
