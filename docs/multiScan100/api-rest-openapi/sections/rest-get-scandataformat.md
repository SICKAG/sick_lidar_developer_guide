# GET /ScanDataFormat

> multiScan100 API | REST | OpenAPI V2.5.0 › Measurement data output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-scandataformat

Although this endpoint lists `4` (`NativeROS2`), multiScan100 does not support native ROS 2 output. To use ROS 2, run [sick_scan_xd](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/ros-integration/#sick_scan_xd) on the host.

Returns/sets the scan data format (e.g. Compact format).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ScanDataFormat"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`ScanDataFormat`

**Allowed values:**

```
[
  1,
  2,
  3,
  4
]
```

**Type:** integer · **Default:** 2

Mapping:
 * 1 - MSGPACK
 * 2 - Compact
 * 3 - LMDscandata
 * 4 - NativeROS2

 |
