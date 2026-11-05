# Set Time Zone [sWN TSCTCtimezone]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › Date and System Time

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#set-time-zone-swn-tsctctimezone

**Telegram structure: sWN TSCTCtimezone**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set time zone | String | 13 | | `TSCTCtimezone` | `54 53 43 54 43 74 69 6D 65 7A 6F 6E 65` |
| Time zone data | Select the time zone of the client | Enum_8 | 1 | List of time zones | `+0d … +104d (00h … 68h)` | `00 … 68` |

**Time zone data Values CoLa (ASCII)**

| Value | Time zone | Value | Time zone | Value | Time zone |
| --- | --- | --- | --- | --- | --- |
| 0 | DATE_LINE_STANDARD | 35 | MONROVIA_REYKJAVIK | 70 | MUMBAI_NEUDELHI |
| 1 | COORD_WORLD_TIME_11 | 36 | AMSTERDAM_BERLIN_ROM | 71 | SRI_JAYAWARDENEPURA |
| 2 | HAWAII | 37 | BELGRAD_BUDAPEST_PRAG | 72 | KATMANDU |
| 3 | ALASKA | 38 | BRUESSEL_MADRID_PARIS | 73 | ASTANA |
| 4 | CALIFORNIA | 39 | SARAJEVO_WARSCHAU | 74 | DAKKA |
| 5 | USA_CANADA | 40 | WEST_CENTRAL_AFRICA | 75 | NOWOSIBIRSK |
| 6 | ARIZONA | 41 | WINDHUK | 76 | YANGON |
| 7 | LA_PAZ | 42 | AMMAN | 77 | BANGKOK_HANOI_JAKARTA |
| 8 | MOUNTAIN_TIME_USA | 43 | ATHEN_BUKAREST | 78 | KRASNOJARSK |
| 9 | CENTRAL_TIME_USA | 44 | BEIRUT | 79 | IRKUTSK |
| 10 | MEXICO_CITY | 45 | DAMASCUS | 80 | KUALA_LUMPUR_SINGAPUR |
| 11 | MIDDLE_AMERICA | 46 | HARARE_PRETORIA | 81 | PEKING_HONGKONG |
| 12 | SASKATCHEWAN | 47 | HELSINKI_KIEW_RIGA | 82 | PERTH |
| 13 | BOGOTA_LIMA | 48 | ISTANBUL | 83 | TAIPEH |
| 14 | EASTERN_TIME_USA | 49 | JERUSALEM | 84 | ULAN_BATOR |
| 15 | INDIANA | 50 | KAIRO | 85 | JAKUTSK |
| 16 | CARACAS | 51 | KALININGRAD | 86 | OSAKA_TOKIO |
| 17 | ASUNCION | 52 | EASTERN_EUROPE | 87 | SEOUL |
| 18 | ATLANTIC_KANADA | 53 | TRIPOLIS | 88 | ADELAIDE |
| 19 | CUIABA | 54 | BAGDAD | 89 | DARWIN |
| 20 | LAPAZ_SANJUAN | 55 | KUWAIT_RIAD | 90 | BRISBANE |
| 21 | SANTIAGO | 56 | MINSK | 91 | CANBERRA_SYDNEY |
| 22 | NEUFUNDLAND | 57 | MOSKAU_PETERSBURG | 92 | GUAM_PORT_MORESBY |
| 23 | BRASILIA | 58 | NAIROBI | 93 | HOBART |
| 24 | BUENOS_AIRES | 59 | TEHERAN | 94 | MAGADAN |
| 25 | CAYENNE_FORTALEZA | 60 | ABU_DHABI | 95 | WLADIWOSTOK |
| 26 | GROENLAND | 61 | BAKU | 96 | SALOMONEN_KALEDONIEN |
| 27 | MONTEVIDEO | 62 | ERIWAN | 97 | TSCHOKURDACH |
| 28 | SALVADOR | 63 | ISCHEWSK_SAMARA | 98 | ANADYR |
| 29 | COORD_WORLD_TIME_02 | 64 | PORT_LOUIS | 99 | AUCKLAND_WELLINGTON |
| 30 | AZOREN | 65 | TIFLIS | 100 | FIDSCHI |
| 31 | KAP_VERDE | 66 | KABUL | 101 | COORD_WORLD_TIME_12 |
| 32 | CASABLANCA | 67 | ASCHGABET_TASCHKENT | 102 | NAKUALOFA |
| 33 | DUBLIN_LISSABON_LONDON | 68 | ISLAMABAD_KARATSCHI | 103 | SAMOA |
| 34 | COORD_WORLD_TIME | 69 | JEKATERINBURG | 104 | KIRITIMATI |

**Example: sWN TSCTCtimezone Amsterdam, Berlin, Rom**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}TSCTCtimezone{SPC}+36<ETX>
```

```text
<STX>sWN TSCTCtimezone +36<ETX>
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
