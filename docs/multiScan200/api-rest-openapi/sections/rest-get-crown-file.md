# GET /crown/file

> multiScan200 API | REST | OpenAPI V1.1.0 › Diagnostics

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-get-crown-file

Downloads the diagnostic file (zip file) if one exists.

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
