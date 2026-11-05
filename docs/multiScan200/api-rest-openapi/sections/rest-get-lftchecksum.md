# GET /LFTchecksum

> multiScan200 API | REST | OpenAPI V1.1.0 › General

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-get-lftchecksum

Returns a checksum over all software parts and configurations.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LFTchecksum"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `MD5SumOK` |

**Type:** boolean · **Default:** false

 |
| `MD5LinuxRoot` |

**Type:** string · **Default:**   · **Maximum length:** 32

 |
| `MD5App` |

**Type:** string · **Default:**   · **Maximum length:** 32

 |
| `MD5Calibration` |

**Type:** string · **Default:**   · **Maximum length:** 32

 |
| `MD5Parameters` |

**Type:** string · **Default:**   · **Maximum length:** 32

 |

 |
