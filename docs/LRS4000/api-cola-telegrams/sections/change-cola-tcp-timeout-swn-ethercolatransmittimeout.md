# Change CoLa TCP Timeout [sWN EtherColaTransmitTimeout]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Ethernet

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#change-cola-tcp-timeout-swn-ethercolatransmittimeout

Change CoLa TCP Timeout.

**Access:** Authorized client user level is required.

**Request: `sWN EtherColaTransmitTimeout`**

| Telegram part / meaning                  | Variable type | Length (bytes) | Values, ranges, and notes                   |
| ---------------------------------------- | ------------- | -------------- | ------------------------------------------- |
| Write                                    | String        | 3              | CoLa A: sWN                                 |
| Adjust CoLa TCP Acknowledge timeout time | String        | 24             | CoLa A: EtherColaTransmitTimeout            |
| New timeout time in ms                   | Uint_16       | 2              | Default: 15000<br>CoLa A: +250d ... +15000d |

**Response: `sWA EtherColaTransmitTimeout`**

| Telegram part / meaning                  | Variable type | Length (bytes) | Values, ranges, and notes        |
| ---------------------------------------- | ------------- | -------------- | -------------------------------- |
| Answer                                   | String        | 3              | CoLa A: sWA                      |
| Adjust CoLa TCP Acknowledge timeout time | String        | 24             | CoLa A: EtherColaTransmitTimeout |

The timeout change takes effect after the sensor is restarted.

**Request example**

**CoLa A (ASCII)**

```text
<STX>sWN EtherColaTransmitTimeout +250<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 57 4E 20 45 74 68 65 72 43 6F 6C 61 54 72 61 6E 73 6D 69 74 54 69 6D 65 6F 75 74 20 00 FA 8E
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sWA EtherColaTransmitTimeout<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1D 73 57 41 20 45 74 68 65 72 43 6F 6C 61 54 72 61 6E 73 6D 69 74 54 69 6D 65 6F 75 74 20 7B
```
