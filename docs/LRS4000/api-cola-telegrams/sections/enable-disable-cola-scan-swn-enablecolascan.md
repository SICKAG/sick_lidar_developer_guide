# Enable/ Disable CoLa Scan [sWN EnableColaScan]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Legacy Protocols

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#enable-disable-cola-scan-swn-enablecolascan

Enable/ disable CoLa Scan.

**Access:** Authorized client user level is required.

**Request: `sWN EnableColaScan`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| ----------------------- | ------------- | -------------- | ------------------------- |
| Write                   | String        | 3              | CoLa A: sWN               |
| Set CoLa Scan / AutoIP  | String        | 14             | CoLa A: EnableColaScan    |
| Enable/ disable         | Bool_1        | 1              | Disable:: 0<br>Enable:: 1 |

**Response: `sWA EnableColaScan`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| ----------------------- | ------------- | -------------- | ------------------------- |
| Answer                  | String        | 3              | CoLa A: sWA               |
| Set CoLa Scan / AutoIP  | String        | 14             | CoLa A: EnableColaScan    |

**Request example**

**CoLa A (ASCII)**

```text
<STX>sWN EnableColaScan 1<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 57 4E 20 45 6E 61 62 6C 65 43 6F 6C 61 53 63 61 6E 20 01 54
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sWA EnableColaScan<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 41 20 45 6E 61 62 6C 65 43 6F 6C 61 53 63 61 6E 20 5A
```
