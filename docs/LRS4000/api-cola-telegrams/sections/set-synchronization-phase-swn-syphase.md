# Set Synchronization Phase [sWN SYPhase]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Motor Synchronization

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#set-synchronization-phase-swn-syphase

Set synchronization phase.

**Access:** Authorized client user level is required.

**Request: `sWN SYPhase`**

| Telegram part / meaning    | Variable type | Length (bytes) | Values, ranges, and notes                                   |
| -------------------------- | ------------- | -------------- | ----------------------------------------------------------- |
| Write                      | String        | 3              | CoLa A: sWN                                                 |
| Set sync phase             | String        | 7              | CoLa A: SYPhase                                             |
| Synchronization phase data | Int_16        | 2              | Default:<br>CoLa A: +180d (B4h) -180d … +180d (FF4Ch … B4h) |

**Response: `sWA SYPhase`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| ----------------------- | ------------- | -------------- | ------------------------- |
| Answer                  | String        | 3              | CoLa A: sWA               |
| Set sync phase          | String        | 7              | CoLa A: SYPhase           |

**Request example**

**CoLa A (ASCII)**

```text
<STX>sWN SYPhase +90<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 57 4E 20 53 59 50 68 61 73 65 20 00 5A 75
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sWA SYPhase<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0C 73 57 41 20 53 59 50 68 61 73 65 20 20
```
