# Ask for Device Measurement State [sRN LMCmeasstate]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Status

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#ask-for-device-measurement-state-srn-lmcmeasstate

Ask for Device Measurement State.

**Access:** No additional user-level requirement is specified in this telegram table.

**Request: `sRN LMCmeasstate`**

| Telegram part / meaning   | Variable type | Length (bytes) | Values, ranges, and notes |
| ------------------------- | ------------- | -------------- | ------------------------- |
| Read                      | String        | 3              | CoLa A: sRN               |
| Ask for measurement state | String        | 12             | CoLa A: LMCmeasstate      |

**Response: `sRA LMCmeasstate`**

| Telegram part / meaning   | Variable type | Length (bytes) | Values, ranges, and notes                                                                                                                |
| ------------------------- | ------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Answer                    | String        | 3              | CoLa A: sRA                                                                                                                              |
| Ask for measurement state | String        | 12             | CoLa A: LMCmeasstate                                                                                                                     |
| Current measurement state | Enum_16       | 2              | Idle: Ready 2D: Measure 2D: Other state codes may show up during booting, firmware update or transition between states.<br>CoLa A: 3 6 7 |

**Request example**

**CoLa A (ASCII)**

```text
<STX>sRN LMCmeasstate<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 52 4E 20 4C 4D 43 6D 65 61 73 73 74 61 74 65 60
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sRA LMCmeasstate 7<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 41 20 4C 4D 43 6D 65 61 73 73 74 61 74 65 20 00 07 48
```
