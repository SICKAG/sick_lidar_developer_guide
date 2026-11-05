# GET /ContaminationActiveSectors

> LRS4000 API | REST | OpenAPI V1.10.0 › Contamination indication

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-contaminationactivesectors

Returns the active contamination sectors. Starts with right backside of the sensor when looking to the device on topside view and continues counterclockwise.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ContaminationActiveSectors"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`ContaminationActiveSectors`

**Type:** array · **Minimum items:** 12 · **Maximum items:** 12

**Items:**

**Type:** boolean · **Default:** false

 |
