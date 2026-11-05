# POST /TSCTCtimezone

> picoScan120 API | REST | OpenAPI › Date and System Time

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-tsctctimezone

Returns/sets the time zone of the client.

This function requires at least user level: Authorized Client.

**Editable JSON template**

```json
{
  "header": {
    "nonce": "<nonce from authentication>",
    "opaque": "<opaque from authentication>",
    "realm": "SICK Sensor",
    "response": "<response from authentication>",
    "user": "Run"
  },
  "data": {
    "TSCTCtimezone": 36
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**
| `header` |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

 |
| --- | --- |
| `data` |

`TSCTCtimezone`

**Allowed values:**

```
[
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
  63,
  64,
  65,
  66,
  67,
  68,
  69,
  70,
  71,
  72,
  73,
  74,
  75,
  76,
  77,
  78,
  79,
  80,
  81,
  82,
  83,
  84,
  85,
  86,
  87,
  88,
  89,
  90,
  91,
  92,
  93,
  94,
  95,
  96,
  97,
  98,
  99,
  100,
  101,
  102,
  103,
  104
]
```

**Type:** integer · **Format:** uint8 · **Default:** 36

Mapping:
 * 0 - DATE_LINE_STANDARD
 * 1 - COORD_WORLD_TIME_11
 * 2 - HAWAII
 * 3 - ALASKA
 * 4 - CALIFORNIA
 * 5 - USA_CANADA
 * 6 - ARIZONA
 * 7 - LA_PAZ
 * 8 - MOUNTAIN_TIME_USA
 * 9 - CENTRAL_TIME_USA
 * 10 - MEXICO_CITY
 * 11 - MIDDLE_AMERICA
 * 12 - SASKATCHEWAN
 * 13 - BOGOTA_LIMA
 * 14 - EASTERN_TIME_USA
 * 15 - INDIANA
 * 16 - CARACAS
 * 17 - ASUNCION
 * 18 - ATLANTIC_KANADA
 * 19 - CUIABA
 * 20 - LAPAZ_SANJUAN
 * 21 - SANTIAGO
 * 22 - NEUFUNDLAND
 * 23 - BRASILIA
 * 24 - BUENOS_AIRES
 * 25 - CAYENNE_FORTALEZA
 * 26 - GROENLAND
 * 27 - MONTEVIDEO
 * 28 - SALVADOR
 * 29 - COORD_WORLD_TIME_02
 * 30 - AZOREN
 * 31 - KAP_VERDE
 * 32 - CASABLANCA
 * 33 - DUBLIN_LISSABON_LONDON
 * 34 - COORD_WORLD_TIME
 * 35 - MONROVIA_REYKJAVIK
 * 36 - AMSTERDAM_BERLIN_ROM
 * 37 - BELGRAD_BUDAPEST_PRAG
 * 38 - BRUESSEL_MADRID_PARIS
 * 39 - SARAJEVO_WARSCHAU
 * 40 - WEST_CENTRAL_AFRICA
 * 41 - WINDHUK
 * 42 - JOHANNESBURG
 * 43 - AMMAN
 * 44 - ATHEN_BUKAREST
 * 45 - BEIRUT
 * 46 - DAMASCUS
 * 47 - HARARE_PRETORIA
 * 48 - HELSINKI_KIEW_RIGA
 * 49 - ISTANBUL
 * 50 - JERUSALEM
 * 51 - KAIRO
 * 52 - KALININGRAD
 * 53 - TRIPOLIS
 * 54 - BAGDAD
 * 55 - KUWAIT_RIAD
 * 56 - MINSK
 * 57 - MOSKAU_PETERSBURG
 * 58 - NAIROBI
 * 59 - TEHERAN
 * 60 - ABU_DHABI
 * 61 - BAKU
 * 62 - ERIWAN
 * 63 - ISCHEWSK_SAMARA
 * 64 - PORT_LOUIS
 * 65 - TIFLIS
 * 66 - KABUL
 * 67 - ASCHGABET_TASCHKENT
 * 68 - ISLAMABAD_KARATSCHI
 * 69 - JEKATERINBURG
 * 70 - MUMBAI_NEUDELHI
 * 71 - SRI_JAYAWARDENEPURA
 * 72 - KATMANDU
 * 73 - ASTANA
 * 74 - DAKKA
 * 75 - NOWOSIBIRSK
 * 76 - YANGON
 * 77 - BANGKOK_HANOI_JAKARTA
 * 78 - KRASNOJARSK
 * 79 - IRKUTSK
 * 80 - KUALA_LUMPUR_SINGAPUR
 * 81 - PEKING_HONGKONG
 * 82 - PERTH
 * 83 - TAIPEH
 * 84 - ULAN_BATOR
 * 85 - JAKUTSK
 * 86 - OSAKA_TOKIO
 * 87 - SEOUL
 * 88 - ADELAIDE
 * 89 - DARWIN
 * 90 - BRISBANE
 * 91 - CANBERRA_SYDNEY
 * 92 - GUAM_PORT_MORESBY
 * 93 - HOBART
 * 94 - MAGADAN
 * 95 - WLADIWOSTOK
 * 96 - SALOMONEN_KALEDONIEN
 * 97 - TSCHOKURDACH
 * 98 - ANADYR
 * 99 - AUCKLAND_WELLINGTON
 * 100 - FIDSCHI
 * 101 - COORD_WORLD_TIME_12
 * 102 - NAKUALOFA
 * 103 - SAMOA
 * 104 - KIRITIMATI

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)
