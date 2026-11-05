# Read Device Name [sRN LocationName]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Device

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-device-name-srn-locationname

Read the given name of the device (Default is the serial number of the device).

**Telegram structure: sRN LocationName**

| Telegram part | Description      | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |
| ------------- | ---------------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ |
| Command type  | Read             | String   | 3      |                    | `sRN`          | `73 52 4E`                            |
| Command       | Read device name | String   | 12     |                    | `LocationName` | `4C 6F 63 61 74 69 6F 6E 4E 61 6D 65` |

**Example: sRN LocationName**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LocationName<ETX>
```

```text
<STX>sRN LocationName<ETX>
```

```text
sRN LocationName
```

```text
02 73 52 4E 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 52 4E 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 55
```

```text
73 52 4E 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65
```

**Telegram structure: sRA LocationName**

The response contains the same length-prefixed device-name value described for [`sWN LocationName`](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#set-device-name-swn-locationname).
