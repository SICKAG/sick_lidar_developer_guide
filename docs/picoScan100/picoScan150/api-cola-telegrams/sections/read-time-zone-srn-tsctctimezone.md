# Read Time Zone [sRN TSCTCtimezone]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Date and System Time

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-time-zone-srn-tsctctimezone

Returns the time zone of the client.

**Telegram structure: sRN TSCTCtimezone**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Time Zone | String | 13 | | `TSCTCtimezone` | `54 53 43 54 43 74 69 6D 65 7A 6F 6E 65` |

**Example: sRN TSCTCtimezone**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}TSCTCtimezone<ETX>
```

```text
<STX>sRN TSCTCtimezone<ETX>
```

```text
sRN TSCTCtimezone
```

```text
02 73 52 4E 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 52 4E 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 17
```

```text
73 52 4E 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65
```

**Telegram structure: sRA TSCTCtimezone**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Time Zone | String | 13 | | `TSCTCtimezone` | `54 53 43 54 43 74 69 6D 65 7A 6F 6E 65` |
| TSCTCtimezone | Select the time zone of the client | Enum_8 | 1 | DATE_LINE_STANDARD:<br>COORD_WORLD_TIME_11:<br>HAWAII:<br>ALASKA:<br>CALIFORNIA:<br>USA_CANADA:<br>ARIZONA:<br>LA_PAZ:<br>MOUNTAIN_TIME_USA:<br>CENTRAL_TIME_USA:<br>MEXICO_CITY:<br>MIDDLE_AMERICA:<br>SASKATCHEWAN:<br>BOGOTA_LIMA:<br>EASTERN_TIME_USA:<br>INDIANA:<br>CARACAS:<br>ASUNCION:<br>ATLANTIC_KANADA:<br>CUIABA:<br>LAPAZ_SANJUAN:<br>SANTIAGO:<br>NEUFUNDLAND:<br>BRASILIA:<br>BUENOS_AIRES:<br>CAYENNE_FORTALEZA:<br>GROENLAND:<br>MONTEVIDEO:<br>SALVADOR:<br>COORD_WORLD_TIME_02:<br>AZOREN:<br>KAP_VERDE:<br>CASABLANCA:<br>DUBLIN_LISSABON_LONDON:<br>COORD_WORLD_TIME:<br>MONROVIA_REYKJAVIK:<br>AMSTERDAM_BERLIN_ROM:<br>BELGRAD_BUDAPEST_PRAG:<br>BRUESSEL_MADRID_PARIS:<br>SARAJEVO_WARSCHAU:<br>WEST_CENTRAL_AFRICA:<br>WINDHUK:<br>JOHANNESBURG:<br>AMMAN:<br>ATHEN_BUKAREST:<br>BEIRUT:<br>DAMASCUS:<br>HARARE_PRETORIA:<br>HELSINKI_KIEW_RIGA:<br>ISTANBUL:<br>JERUSALEM:<br>KAIRO:<br>KALININGRAD:<br>TRIPOLIS:<br>BAGDAD:<br>KUWAIT_RIAD:<br>MINSK:<br>MOSKAU_PETERSBURG:<br>NAIROBI:<br>TEHERAN:<br>ABU_DHABI:<br>BAKU:<br>ERIWAN:<br>ISCHEWSK_SAMARA:<br>PORT_LOUIS:<br>TIFLIS:<br>KABUL:<br>ASCHGABET_TASCHKENT:<br>ISLAMABAD_KARATSCHI:<br>JEKATERINBURG:<br>MUMBAI_NEUDELHI:<br>SRI_JAYAWARDENEPURA:<br>KATMANDU:<br>ASTANA:<br>DAKKA:<br>NOWOSIBIRSK:<br>YANGON:<br>BANGKOK_HANOI_JAKARTA:<br>KRASNOJARSK:<br>IRKUTSK:<br>KUALA_LUMPUR_SINGAPUR:<br>PEKING_HONGKONG:<br>PERTH:<br>TAIPEH:<br>ULAN_BATOR:<br>JAKUTSK:<br>OSAKA_TOKIO:<br>SEOUL:<br>ADELAIDE:<br>DARWIN:<br>BRISBANE:<br>CANBERRA_SYDNEY:<br>GUAM_PORT_MORESBY:<br>HOBART:<br>MAGADAN:<br>WLADIWOSTOK:<br>SALOMONEN_KALEDONIEN:<br>TSCHOKURDACH:<br>ANADYR:<br>AUCKLAND_WELLINGTON:<br>FIDSCHI:<br>COORD_WORLD_TIME_12:<br>NAKUALOFA:<br>SAMOA:<br>KIRITIMATI: | `0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>A<br>B<br>C<br>D<br>E<br>F<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>1A<br>1B<br>1C<br>1D<br>1E<br>1F<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>2A<br>2B<br>2C<br>2D<br>2E<br>2F<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>3A<br>3B<br>3C<br>3D<br>3E<br>3F<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>4A<br>4B<br>4C<br>4D<br>4E<br>4F<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59<br>5A<br>5B<br>5C<br>5D<br>5E<br>5F<br>60<br>61<br>62<br>63<br>64<br>65<br>66<br>67<br>68` | `00<br>01<br>02<br>03<br>04<br>05<br>06<br>07<br>08<br>09<br>0A<br>0B<br>0C<br>0D<br>0E<br>0F<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>1A<br>1B<br>1C<br>1D<br>1E<br>1F<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>2A<br>2B<br>2C<br>2D<br>2E<br>2F<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>3A<br>3B<br>3C<br>3D<br>3E<br>3F<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>4A<br>4B<br>4C<br>4D<br>4E<br>4F<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59<br>5A<br>5B<br>5C<br>5D<br>5E<br>5F<br>60<br>61<br>62<br>63<br>64<br>65<br>66<br>67<br>68` |

**Example: sRA TSCTCtimezone**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}TSCTCtimezone{SPC}24<ETX>
```

```text
02 73 52 41 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 20 32 34 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 41 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 20 24 1C
```
