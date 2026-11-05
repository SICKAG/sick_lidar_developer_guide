# GET /MergeSaving

> picoScan150 API | REST | OpenAPI › 3D scan recording

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-rest-get-mergesaving

Returns/sets the status for saving the merged scans. As soon as a scan merge is completed, the point cloud is available for download on port 80 (192.168.0.1/cloud.pcd). Curl: http:///cloud.pcd -o cloud.pcd. Only the most recently created point cloud is available for download. The point cloud is ready for download when MergeSaving changes from 1 (Saving in progress) to 0 (Saving not active).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/MergeSaving"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-responseheader)

 |
| --- | --- |
| `data` |

`MergeSaving`

**Type:** boolean · **Default:** false

 |
