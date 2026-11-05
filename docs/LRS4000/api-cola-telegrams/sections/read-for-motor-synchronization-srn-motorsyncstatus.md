# Read for Motor Synchronization [sRN MotorSyncStatus]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Motor Synchronization

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-for-motor-synchronization-srn-motorsyncstatus

Read for Motor synchronization.

**Access:** Authorized client user level is required.

**Request: `sRN MotorSyncStatus`**

| Telegram part / meaning           | Variable type | Length (bytes) | Values, ranges, and notes |
| --------------------------------- | ------------- | -------------- | ------------------------- |
| Read                              | String        | 3              | CoLa A: sRN               |
| Read motor synchronization status | String        | 15             | CoLa A: MotorSyncStatus   |

**Response: `sRA MotorSyncStatus`**

| Telegram part / meaning           | Variable type | Length (bytes) | Values, ranges, and notes                                              |
| --------------------------------- | ------------- | -------------- | ---------------------------------------------------------------------- |
| Answer                            | String        | 3              | CoLa A: sRA                                                            |
| Read motor synchronization status | String        | 15             | CoLa A: MotorSyncStatus                                                |
| Synchronization status            | Enum_8        | 1              | Not synchronized:: 0<br>Only Time synchronized:: 1<br>Synchronized:: 2 |

**Request example**

**CoLa A (ASCII)**

```text
<STX>sRN MotorSyncStatus<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 4E 20 4D 6F 74 6F 72 53 79 6E 63 53 74 61 74 75 73 17
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sRA MotorSyncStatus 0<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 52 41 20 4D 6F 74 6F 72 53 79 6E 63 53 74 61 74 75 73 20 00 38
```
