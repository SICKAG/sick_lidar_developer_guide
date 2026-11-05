# Read the Distance Scaling for the Distance Values of the Scandata [sRN LMDscandatascalefactor]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-the-distance-scaling-for-the-distance-values-of-the-scandata-srn-lmdscandatascalefactor

Read the distance scaling for the distance values of the scandata.

**Access:** No additional user-level requirement is specified in this telegram table.

**Request: `sRN LMDscandatascalefactor`**

| Telegram part / meaning      | Variable type | Length (bytes) | Values, ranges, and notes      |
| ---------------------------- | ------------- | -------------- | ------------------------------ |
| Read                         | String        | 3              | CoLa A: sRN                    |
| Change distance scale factor | String        | 14             | CoLa A: LMDscandatascalefactor |

**Response: `sRA LMDscandatascalefactor`**

| Telegram part / meaning      | Variable type                      | Length (bytes) | Values, ranges, and notes                                                                                                                                                      |
| ---------------------------- | ---------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Answer                       | String                             | 3              | CoLa A: sRA                                                                                                                                                                    |
| Change distance scale factor | String                             | 14             | CoLa A: LMDscandatascalefactor                                                                                                                                                 |
| [mm/digit]                   | Real as float according to IEEE754 | 4              | Factor × 1: Factor × 2 (values have to be scaled by factor two): MinValue="0.1" MaxValue="16.0" Default “1.0” PhysicalUnit="mm/digit"<br>CoLa A: 3F800000h 40000000h (Default) |

**Request example**

**CoLa A (ASCII)**

```text
<STX>sRN LMDscandatascalefactor<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1A 73 52 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 73 63 61 6C 65 66 61 63 74 6F 72 70
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sRA LMDscandatascalefactor 3F800000<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 52 41 20 4C 4D 44 73 63 61 6E 64 61 74 61 73 63 61 6C 65 66 61 63 74 6F 72 20 3F 80 00 00 E0
```
