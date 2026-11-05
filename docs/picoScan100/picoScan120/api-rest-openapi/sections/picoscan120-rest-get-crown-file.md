# GET /crown/file

> picoScan120 API | REST | OpenAPI › Diagnostics

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-crown-file

Download files (e.g. OpenAPI description or diagnostic files) if one exists.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/crown/file?filePath=diagnosisDump.zip"
```

**Parameters**

**`filePath`**

**Location:** query

**Required:** true

path

**Type:** string · **Example:** diagnosisDump.zip

**Responses**

**Status `200`**

**Media type: `application/zip`**

**Type:** string · **Format:** binary

**Status `400`**

bad operation

**Status `404`**

file not found

**Status `500`**

Server not found
