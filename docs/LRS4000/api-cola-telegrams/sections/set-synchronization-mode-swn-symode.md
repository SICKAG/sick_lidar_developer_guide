# Set Synchronization Mode [sWN SYMode]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Motor Synchronization

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#set-synchronization-mode-swn-symode

Set synchronization mode.

**Access:** Authorized client user level is required.

**Request: `sWN SYMode`**

| Telegram part / meaning   | Variable type | Length (bytes) | Values, ranges, and notes                          |
| ------------------------- | ------------- | -------------- | -------------------------------------------------- |
| Write                     | String        | 3              | CoLa A: sWN                                        |
| Set sync mode             | String        | 6              | CoLa A: SYMode                                     |
| Synchronization mode data | Bool_1        | 1              | No sync:: 0<br>Sync by wire:: 1<br>Sync by PTP:: 3 |

**Response: `sWA SYMode`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| ----------------------- | ------------- | -------------- | ------------------------- |
| Answer                  | String        | 3              | CoLa A: sWA               |
| Set sync mode           | String        | 6              | CoLa A: SYMode            |

**Request example**

**CoLa A (ASCII)**

```text
<STX>sWN SYMode 1<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0C 73 57 4E 20 53 59 4D 6F 64 65 20 01 42
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sWA SYMode<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0B 73 57 41 20 53 59 4D 6F 64 65 20 4C
```
