# Read IP Address [sRN EIIpAddr]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Ethernet

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-ip-address-srn-eiipaddr

Read the IP address of the device.

**Telegram structure: sRN EIIpAddr**

| Telegram part | Description     | Variable | Length | Additional details | Values CoLa A (ASCII)                   | Values CoLa B (Binary)                                 |
| ------------- | --------------- | -------- | ------ | ------------------ | --------------------------------------- | ------------------------------------------------------ |
| Command type  | Read            | String   | 3      |                    | `sRN`      | `73 52 4E`                |
| Command       | Read IP address | String   | 8      |                    | `EIIpAddr` | `45 49 49 70 41 64 64 72` |

**Example: sRN EIIpAddr**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EIIpAddr<ETX>
```

```text
<STX>sRN EIIpAddr<ETX>
```

```text
sRN EIIpAddr
```

```text
02 73 52 4E 20 45 49 49 70 41 64 64 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0C 73 52 4E 20 45 49 49 70 41 64 64 72 49
```

```text
73 52 4E 20 45 49 49 70 41 64 64 72
```

**Telegram structure: sRA EIIpAddr**

| Telegram part | Description          | Variable | Length | Additional details        | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                 |
| ------------- | -------------------- | -------- | ------ | ------------------------- | ------------------------------------------------- | ------------------------------------------------------ |
| Command type  | Answer               | String   | 3      |                           | `sRA`                | `73 52 41`                |
| Command       | Read IP address      | String   | 8      |                           | `EIIpAddr`           | `45 49 49 70 41 64 64 72` |
| IP address    | Default: 192.168.0.1 | Uint_8   | 1      | First part of IP address  | `0 …+255d (00 … FF)` | `00 … FF`                 |
| IP address    | Default: 192.168.0.1 | Uint_8   | 1      | Second part of IP address | `0 …+255d (00 … FF)` | `00 … FF`                 |
| IP address    | Default: 192.168.0.1 | Uint_8   | 1      | Third part of IP address  | `0 …+255d (00 … FF)` | `00 … FF`                 |
| IP address    | Default: 192.168.0.1 | Uint_8   | 1      | Fourth part of IP address | `0 …+255d (00 … FF)` | `00 … FF`                 |

**Example: sRA EIIpAddr**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EIIpAddr{SPC}C0{SPC}A8{SPC}0{SPC}1<ETX>
```

```text
02 73 52 41 20 45 49 49 70 41 64 64 72 20 43 30 20 41 38 20 30 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 52 41 20 45 49 49 70 41 64 64 72 20 C0 A8 00 01 0F
```
