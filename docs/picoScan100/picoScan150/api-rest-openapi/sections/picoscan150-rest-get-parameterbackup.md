# GET /parameterbackup

> picoScan150 API | REST | OpenAPI › General

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-rest-get-parameterbackup

Reads/transfers the backup file (json) from/to the device.

See [Configuration Backup and Restore](https://sickag.github.io/sick_lidar_developer_guide/configuration/configuration-backup-and-restore/) for the parameter backup workflow.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/parameterbackup"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `version` |

**Type:** string

 |
| --- | --- |
| `device identification` |

**Type:** string

 |
| `checksum` |

**Type:** string

 |
| `parameters` |

**Type:** array

**Items:**
| `userlevel` |

**Fields:** [E_USER_LEVEL_TYPE](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-e-user-level-type)

 |
| `parameters` |

**Type:** array

**Items:**
| `name` |

**Type:** string

 |
| `id` |

**Type:** string

 |
| `value` |

**oneOf**

**Type:** integer

**Type:** boolean

**Type:** string

**Type:** object

**Type:** number

 |

 |

 |
