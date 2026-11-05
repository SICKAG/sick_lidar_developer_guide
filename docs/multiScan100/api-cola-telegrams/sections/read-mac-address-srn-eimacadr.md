# Read MAC Address [sRN EIMacAdr]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Ethernet

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-mac-address-srn-eimacadr

Read the MAC address of the device.

**Telegram structure: sRN EIMacAdr**

| Telegram part | Description                    | Variable | Length | Additional details | Values CoLa A (ASCII)                   | Values CoLa B (Binary)                                 |
| ------------- | ------------------------------ | -------- | ------ | ------------------ | --------------------------------------- | ------------------------------------------------------ |
| Command type  | Read                           | String   | 3      |                    | `sRN`      | `73 52 4E`                |
| Command       | Read MAC address of the device | String   | 8      |                    | `EIMacAdr` | `45 49 4D 61 63 41 64 72` |

**Example: sRN EIMacAdr**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EIMacAdr<ETX>
```

```text
<STX>sRN EIMacAdr<ETX>
```

```text
sRN EIMacAdr
```

```text
02 73 52 4E 20 45 49 4D 61 63 41 64 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0C 73 52 4E 20 45 49 4D 61 63 41 64 72 5B
```

```text
73 52 4E 20 45 49 4D 61 63 41 64 72
```

**Telegram structure: sRA EIMacAdr**

| Telegram part | Description                    | Variable | Length | Additional details         | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                                 |
| ------------- | ------------------------------ | -------- | ------ | -------------------------- | ----------------------------------------------- | ------------------------------------------------------ |
| Command type  | Answer                         | String   | 3      |                            | `sRA`              | `73 52 41`                |
| Command       | Read MAC address of the device | String   | 8      |                            | `EIMacAdr`         | `45 49 4D 61 63 41 64 72` |
| MAC address   | Values                         | Uint_8   | 1      | First part of MAC address  | `0 …+255d (00…FF)` | `00 … FF`                 |
| MAC address   | Values                         | Uint_8   | 1      | Second part of MAC address | `0 …+255d (00…FF)` | `00 … FF`                 |
| MAC address   | Values                         | Uint_8   | 1      | Third part of MAC address  | `0 …+255d (00…FF)` | `00 … FF`                 |
| MAC address   | Values                         | Uint_8   | 1      | Fourth part of MAC address | `0 …+255d (00…FF)` | `00 … FF`                 |
| MAC address   | Values                         | Uint_8   | 1      | Fifth part of MAC address  | `0 …+255d (00…FF)` | `00 … FF`                 |
| MAC address   | Values                         | Uint_8   | 1      | Sixth part of MAC address  | `0 …+255d (00…FF)` | `00 … FF`                 |

**Example: sRA EIMacAdr**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EIMacAdr{SPC}0{SPC}6{SPC}77{SPC}5A{SPC}CF{SPC}E2<ETX>
```

```text
02 73 52 41 20 45 49 4D 61 63 41 64 72 20 30 20 36 20 37 37 20 35 41 20 43 46 20 45 32 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 41 20 45 49 4D 61 63 41 64 72 20 00 06 77 5A CF E2 72
```
