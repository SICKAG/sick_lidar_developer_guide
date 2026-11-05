# GET /certificateBundleInfo

> multiScan100 API | REST | OpenAPI V2.5.0 › Cybersecurity

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-certificatebundleinfo

Returns information about the uploaded certificate bundle.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/certificateBundleInfo"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `uuidBundle` |

**Type:** string · **Default:**   · **Maximum length:** 100

 |
| `certificates` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 4

**Items:**
| `names` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 20

**Items:**

`entry`

**Type:** string · **Default:**   · **Maximum length:** 1000

 |
| `issuer` |

**Type:** string · **Default:**   · **Maximum length:** 1000

 |
| `subject` |

**Type:** string · **Default:**   · **Maximum length:** 1000

 |
| `serialNumber` |

**Type:** string · **Default:**   · **Maximum length:** 119

 |
| `fingerprint` |

**Type:** string · **Default:**   · **Maximum length:** 119

 |
| `validNotBefore` |

**Type:** string · **Default:**                          · **Minimum length:** 24 · **Maximum length:** 24

 |
| `validNotAfter` |

**Type:** string · **Default:**                          · **Minimum length:** 24 · **Maximum length:** 24

 |

 |
| `errorCode` |

**Fields:** [httpsError_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-httpserror-t)

 |
| --- | --- |

 |
