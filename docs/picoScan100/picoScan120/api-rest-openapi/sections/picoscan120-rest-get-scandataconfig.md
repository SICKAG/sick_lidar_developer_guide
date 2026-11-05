# GET /ScanDataConfig

> picoScan120 API | REST | OpenAPI › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-scandataconfig

Returns/sets the configuration of LMDscandata such as the content of the scan data (e.g., whether to include the RSSI values).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ScanDataConfig"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |
| `reserved` |

**Type:** integer · **Format:** uint16

 |
| `RemDataConfig` |
| `bEnable` |

**Type:** boolean · **Default:** true

 |
| `reserved1` |

**Type:** integer · **Format:** uint8 · **Default:** 0

 |
| `reserved2` |

**Type:** integer · **Format:** uint8 · **Default:** 0

 |

 |
| `EnableEncoderBlock` |

**Type:** boolean · **Default:** false

 |
| --- | --- |
| `reserved1` |

**Type:** boolean · **Default:** false

 |
| `bEnableDeviceName` |

**Type:** boolean · **Default:** false

 |
| `reserved2` |

**Type:** boolean · **Default:** false

 |
| `bEnableTimeBlock` |

**Type:** boolean · **Default:** false

 |
| `reserved3` |

**Type:** integer · **Format:** uint16 · **Default:** 1

 |

 |
