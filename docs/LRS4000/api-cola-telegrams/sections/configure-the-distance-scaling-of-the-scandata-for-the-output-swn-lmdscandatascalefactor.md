# Configure the Distance Scaling of the Scandata for the Output [sWN LMDscandatascalefactor]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#configure-the-distance-scaling-of-the-scandata-for-the-output-swn-lmdscandatascalefactor

Configure the distance scaling of the scandata for the output.

**Access:** Authorized client user level is required.

**Request: `sWN LMDscandatascalefactor`**

| Telegram part / meaning      | Variable type                      | Length (bytes) | Values, ranges, and notes                                                                                                                                                      |
| ---------------------------- | ---------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Write                        | String                             | 3              | CoLa A: sWN                                                                                                                                                                    |
| Change distance scale factor | String                             | 14             | CoLa A: LMDscandatascalefactor                                                                                                                                                 |
| [mm/digit]                   | Real as float according to IEEE754 | 4              | Factor × 1: Factor × 2 (values have to be scaled by factor two): MinValue="0.1" MaxValue="16.0" Default “2.0” PhysicalUnit="mm/digit"<br>CoLa A: 3F800000h 40000000h (Default) |

**Response: `sWA LMDscandatascalefactor`**

| Telegram part / meaning      | Variable type | Length (bytes) | Values, ranges, and notes      |
| ---------------------------- | ------------- | -------------- | ------------------------------ |
| Answer                       | String        | 3              | CoLa A: sWA                    |
| Change distance scale factor | String        | 14             | CoLa A: LMDscandatascalefactor |

**Request example**

**CoLa A (ASCII)**

```text
<STX>sWN LMDscandatascalefactor 3F800000<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 57 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 73 63 61 6C 65 66 61 63 74 6F 72 20 3F 80 00 00 EA
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sWA LMDscandatascalefactor<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 57 41 20 4C 4D 44 73 63 61 6E 64 61 74 61 73 63 61 6C 65 66 61 63 74 6F 72 20 5A
```
