# Read Certificate Bundle Information [sRN certificateBundleInfo]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › Cybersecurity

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#read-certificate-bundle-information-srn-certificatebundleinfo

Returns information about the uploaded certificate bundle.

**Telegram structure: sRN certificateBundleInfo**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Certificate Bundle Information | String | 21 | | `certificateBundleInfo` | `63 65 72 74 69 66 69 63 61 74 65 42 75 6E 64 6C 65 49 6E 66 6F` |

**Example: sRN certificateBundleInfo**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}certificateBundleInfo<ETX>
```

```text
<STX>sRN certificateBundleInfo<ETX>
```

```text
sRN certificateBundleInfo
```

```text
02 73 52 4E 20 63 65 72 74 69 66 69 63 61 74 65 42 75 6E 64 6C 65 49 6E 66 6F 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 19 73 52 4E 20 63 65 72 74 69 66 69 63 61 74 65 42 75 6E 64 6C 65 49 6E 66 6F 20
```

```text
73 52 4E 20 63 65 72 74 69 66 69 63 61 74 65 42 75 6E 64 6C 65 49 6E 66 6F
```

**Telegram structure: sRA certificateBundleInfo**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Certificate Bundle Information | String | 21 | | `certificateBundleInfo` | `63 65 72 74 69 66 69 63 61 74 65 42 75 6E 64 6C 65 49 6E 66 6F` |
| uuidBundle length | Length of uuidBundle (max. 100) | Uint_16 | 2 | | `0 ... 64` | `00 00 ... 00 64` |
| uuidBundle | The unique ID of the certificate bundle. | String | n | | `<text>` | `<bytes>` |
| certificates length | Number of certificates elements (max. 4) | Uint_16 | 2 | | `0 ... 4` | `00 00 ... 00 04` |
| certificates[].names length | Number of names elements (max. 20) (repeated once per element) | Uint_16 | 2 | | `0 ... 14` | `00 00 ... 00 14` |
| certificates[].names[].entry length | Length of entry (max. 1000) (repeated once per element) | Uint_16 | 2 | | `0 ... 3E8` | `00 00 ... 03 E8` |
| certificates[].names[].entry | The common name or the subject alternative name. | String | n | | `<text>` | `<bytes>` |
| certificates[].issuer length | Length of issuer (max. 1000) | Uint_16 | 2 | | `0 ... 3E8` | `00 00 ... 03 E8` |
| certificates[].issuer | Return the issuer information stated in the certificate. It is coded as RFC 2253 string. | String | n | | `<text>` | `<bytes>` |
| certificates[].subject length | Length of subject (max. 1000) | Uint_16 | 2 | | `0 ... 3E8` | `00 00 ... 03 E8` |
| certificates[].subject | Return the subject information stated in the certificate. It is coded as RFC 2253 string. | String | n | | `<text>` | `<bytes>` |
| certificates[].serialNumber length | Length of serialNumber (max. 119) | Uint_16 | 2 | | `0 ... 77` | `00 00 ... 00 77` |
| certificates[].serialNumber | The serial number MUST be a positive value assigned by the CA to each certificate. It MUST be unique for each certificate issued by a given CA (i.e., the issuer name and serial number identify a unique certificate). It is coded as hex string. | String | n | | `<text>` | `<bytes>` |
| certificates[].fingerprint length | Length of fingerprint (max. 119) | Uint_16 | 2 | | `0 ... 77` | `00 00 ... 00 77` |
| certificates[].fingerprint | The SHA-256 fingerprint of the certificate. | String | n | | `<text>` | `<bytes>` |
| certificates[].validNotBefore | Naming acc. RFC 5280. Point in time when the certificate becomes valid. | String | 24 | | `<text>` | `<bytes>` |
| certificates[].validNotAfter | Naming acc. RFC 5280. Point in time when the certificate expires. | String | 24 | | `<text>` | `<bytes>` |
| error length | Length of error (max. 100) | Uint_16 | 2 | | `0 ... 64` | `00 00 ... 00 64` |
| error | Returns the cause of error in case of an error. | String | n | | `<text>` | `<bytes>` |

**Example: sRA certificateBundleInfo**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}certificateBundleInfo{SPC}1{SPC}0{SPC}0{SPC}26{SPC}NO_ACTIVE_CERTIFICATE_BUNDLE_AVAILABLE<ETX>
```

```text
02 73 52 41 20 63 65 72 74 69 66 69 63 61 74 65 42 75 6E 64 6C 65 49 6E 66 6F 20 31 20 30 20 30 20 32 36 20 4E 4F 5F 41 43 54 49 56 45 5F 43 45 52 54 49 46 49 43 41 54 45 5F 42 55 4E 44 4C 45 5F 41 56 41 49 4C 41 42 4C 45 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 47 73 52 41 20 63 65 72 74 69 66 69 63 61 74 65 42 75 6E 64 6C 65 49 6E 66 6F 20 00 01 30 00 00 00 26 4E 4F 5F 41 43 54 49 56 45 5F 43 45 52 54 49 46 49 43 41 54 45 5F 42 55 4E 44 4C 45 5F 41 56 41 49 4C 41 42 4C 45 0D
```
