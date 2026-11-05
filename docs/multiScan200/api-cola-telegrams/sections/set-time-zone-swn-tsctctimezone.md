# Set Time Zone [sWN TSCTCtimezone]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Date and System Time

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#set-time-zone-swn-tsctctimezone

Required user level: Authorized client.

**Telegram structure: sWN TSCTCtimezone**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set time zone | String | 13 | | `TSCTCtimezone` | `54 53 43 54 43 74 69 6D 65 7A 6F 6E 65` |
| Time zone data | Select the time zone of the client | Enum_8 | 1 | List of time zones see table 228, page 127 | `+0d … +104d(00h … 68h)` | `00 … 68` |

**Time zones**

| Value | Time zone | Value | Time zone | Value | Time zone |
| --- | --- | --- | --- | --- | --- |
| +0d (0h) | DATE LINE STANDARD | +35d (23h) | MONROVIA REYKJAVIK | +70d (46h) | MUMBAI NEUDELHI |
| +1d (1h) | COORDWORLDTIME 11 | +36d (24h) | AMSTERDAM BERLIN ROM | +71d (47h) | SRI JAYAWARDENEPURA |
| +2d (2h) | HAWAII | +37d (25h) | BELGRAD BUDAPEST PRAG | +72d (48h) | KATMANDU |
| +3d (3h) | ALASKA | +38d (26h) | BRUESSEL MADRID PARIS | +73d (49h) | ASTANA |
| +4d (4h) | CALIFORNIA | +39d (27h) | SARAJEVO WARSCHAU | +74d (4Ah) | DAKKA |
| +5d (5h) | USA CANADA | +40d (28h) | WEST CENTRAL AFRICA | +75d (4Bh) | NOWOSIBIRSK |
| +6d (6h) | ARIZONA | +41d (29h) | WINDHUK | +76d (4Ch) | YANGON |
| +7d (7h) | LA PAZ | +42d (2Ah) | AMMAN | +77d (4Dh) | BANGKOK HANOI JAKARTA |
| +8d (8h) | MOUNTAIN TIME USA | +43d (2Bh) | ATHEN BUKAREST | +78d (4Eh) | KRASNOJARSK |
| +9d (9h) | CENTRAL TIME USA | +44d (2Ch) | BEIRUT | +79d (4Fh) | IRKUTSK |
| +10d (Ah) | MEXICO CITY | +45d (2Dh) | DAMASCUS | +80d (50h) | KUALA LUMPUR SINGAPUR |
| +11d (Bh) | MIDDLE AMERICA | +46d (2Eh) | HARARE PRETORIA | +81d (51h) | PEKING HONGKONG |
| +12d (Ch) | SASKATCHEWAN | +47d (2Fh) | HELSINKI KIEW RIGA | +82d (52h) | PERTH |
| +13d (Dh) | BOGOTA LIMA | +48d (30h) | ISTANBUL | +83d (53h) | TAIPEH |
| +14d (Eh) | EASTERN TIME USA | +49d (31h) | JERUSALEM | +84d (54h) | ULAN BATOR |
| +15d (Fh) | INDIANA | +50d (32h) | KAIRO | +85d (55h) | JAKUTSK |
| +16d (10h) | CARACAS | +51d (33h) | KALININGRAD | +86d (56h) | OSAKA TOKIO |
| +17d (11h) | ASUNCION | +52d (34h) | EASTERN EUROPE | +87d (57h) | SEOUL |
| +18d (12h) | ATLANTIC KANADA | +53d (35h) | TRIPOLIS | +88d (58h) | ADELAIDE |
| +19d (13h) | CUIABA | +54d (36h) | BAGDAD | +89d (59h) | DARWIN |
| +20d (14h) | LA PAZ SAN JUAN | +55d (37h) | KUWAIT RIAD | +90d (5Ah) | BRISBANE |
| +21d (15h) | SANTIAGO | +56d (38h) | MINSK | +91d (5Bh) | CANBERRA SYDNEY |
| +22d (16h) | NEUFUNDLAND | +57d (39h) | MOSKAU PETERSBURG | +92d (5Ch) | GUAM PORT MORESBY |
| +23d (17h) | BRASILIA | +58d (3Ah) | NAIROBI | +93d (5Dh) | HOBART |
| +24d (18h) | BUENOS AIRES | +59d (3Bh) | TEHERAN | +94d (5Eh) | MAGADAN |
| +25d (19h) | CAYENNE FORTALEZA | +60d (3Ch) | ABU DHABI | +95d (5Fh) | WLADIWOSTOK |
| +26d (1Ah) | GROENLAND | +61d (3Dh) | BAKU | +96d (60h) | SALOMONEN KALEDONIEN |
| +27d (1Bh) | MONTEVIDEO | +62d (3Eh) | ERIWAN | +97d (61h) | TSCHOKURDACH |
| +28d (1Ch) | SALVADOR | +63d (3Fh) | ISCHEWSK SAMARA | +98d (62h) | ANADYR |
| +29d (1Dh) | COORDWORLDTIME 02 | +64d (40h) | PORT LOUIS | +99d (63h) | AUCKLAND WELLINGTON |
| +30d (1Eh) | AZOREN | +65d (41h) | TIFLIS | +100d (64h) | FIDSCHI |
| +31d (1Fh) | KAPVERDE | +66d (42h) | KABUL | +101d (65h) | COORDWORLDTIME 12 |
| +32d (20h) | CASABLANCA | +67d (43h) | ASCHGABAT TASCHKENT | +102d (66h) | NAKUALOFA |
| +33d (21h) | DUBLIN LISSABON LONDON | +68d (44h) | ISLAMABAD KARATSCHI | +103d (67h) | SAMOA |
| +34d (22h) | COORDWORLDTIME | +69d (45h) | JEKATERINBURG | +104d (68h) | KIRITIMATI |

**Example: sWN TSCTCtimezone - Amsterdam, Berlin, Rome**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}TSCTCtimezone{SPC}+36<ETX>
```

```text
sWN TSCTCtimezone +36
```

```text
02 73 57 4E 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 20 2B 33 36 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 4E 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 20 24 16
```

```text
73 57 4E 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 20 24
```

**Telegram structure: sWA TSCTCtimezone**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set time zone | String | 13 | | `TSCTCtimezone` | `54 53 43 54 43 74 69 6D 65 7A 6F 6E 65` |

**Example: sWA TSCTCtimezone**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}TSCTCtimezone<ETX>
```

```text
02 73 57 41 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 57 41 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 20 3D
```
