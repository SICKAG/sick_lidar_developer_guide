# LiDAR Configuration Backup and Restore via GUI and REST

> Back up and restore a complete multiScan100, multiScan200, or picoScan100 configuration file through SOPASair or the REST API, with optional passphrase encryption.

Source: https://sickag.github.io/sick_lidar_developer_guide/configuration/configuration-backup-and-restore/

# Backup & Restore

Compatible with: multiScan100 multiScan200 picoScan100

A configuration file contains the complete device configuration. Use it to roll back to a known-good state, replace a device, or copy a validated configuration to identical sensors. Encryption with a passphrase is optional.

## In the Web GUI

Open the **Device** menu at the top right and select **Download configuration file**. The same menu imports a file.

![Device menu with Download configuration file selected](https://sickag.github.io/sick_lidar_developer_guide/assets/configuration/device-configuration-menu.png)
*Access the configuration backup from the Device menu.*

## REST Endpoints

See the device-specific [multiScan100](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/),
[multiScan200](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/), and
[picoScan100](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/api-rest-openapi/) REST API references.

<p class="table-caption" markdown>**REST Endpoints:** action, method and path, device families, and authentication.</p>

| Action | Method and path | Device families | Authentication |
| --- | --- | --- | --- |
| Create a session token | `POST /api/CreateSessionToken` | multiScan200, picoScan100 | [Challenge-response](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication), Service |
| Create the backup file | `POST /api/CreateParameterBackup` | multiScan100, multiScan200, picoScan100 | Challenge-response, Service |
| Check the create result | `GET /api/CreateParameterBackupResult` | multiScan200, picoScan100 | None |
| Download the file | `GET /api/parameterbackup` | multiScan100, multiScan200, picoScan100 | `X-Session-Token` header where required by firmware |
| Upload a file | `PUT /api/parameterbackup` | multiScan100, multiScan200, picoScan100 | `X-Session-Token` header where required by firmware |
| Apply the uploaded file | `POST /api/RestoreParameterBackup` | multiScan100, multiScan200, picoScan100 | Challenge-response, Service |
| Check the restore result | `GET /api/RestoreParameterBackupResult` | multiScan200, picoScan100 | None |

The session token protects binary transfers where the firmware exposes that
mechanism. `CreateParameterBackup` and `RestoreParameterBackup` accept an
optional `Passphrase` (up to 256 characters). It is independent of the login
password. A file created with a passphrase can only be restored with the same
passphrase.

```json
{ "header": { "...": "challenge-response fields" }, "data": { "Passphrase": "your-passphrase" } }
```

Every `POST` below needs a fresh [challenge-response](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication) at Service level.

## Download a Configuration

=== "multiScan200 / picoScan100"

    1. `POST /api/CreateSessionToken` and store `data.token`.
    2. `POST /api/CreateParameterBackup`, optionally with a passphrase.
    3. Poll `GET /api/CreateParameterBackupResult` until `data.Status` is `1`
       (Finished), and check that `data.Result` is `true`.
    4. Download the file with the token:

        ```http
        GET /api/parameterbackup HTTP/1.1
        Host: 192.168.0.1
        X-Session-Token: dKVwNYUkHsHS...
        ```

        The response is `HTTP 200` with the binary file (about 86 KB). Without
        the token header, the device returns `HTTP 403`.

=== "multiScan100"

    1. `POST /api/CreateParameterBackup`, optionally with a passphrase, and
       wait for the request to finish.
    2. `GET /api/parameterbackup` with the file-transfer authentication
       described in the multiScan100 OpenAPI file.

## Restore a Configuration

=== "multiScan200 / picoScan100"

    1. `POST /api/CreateSessionToken` and store `data.token`.
    2. Upload the file with the token:

        ```http
        PUT /api/parameterbackup HTTP/1.1
        Host: 192.168.0.1
        X-Session-Token: dKVwNYUkHsHS...
        Content-Type: application/octet-stream

        <binary backup content>
        ```

    3. `POST /api/RestoreParameterBackup` with the passphrase used to create the file.
    4. Poll `GET /api/RestoreParameterBackupResult` until the restore is
       finished, and check the result.

=== "multiScan100"

    1. `PUT /api/parameterbackup` with the file-transfer authentication
       described in the multiScan100 OpenAPI file.
    2. `POST /api/RestoreParameterBackup` with the passphrase used to create the file.

On all devices, persist the result with `POST /api/WriteEeprom`, then confirm the
[checksums](https://sickag.github.io/sick_lidar_developer_guide/shared-features/checksums/) and key parameters.

## Error Handling

<p class="table-caption" markdown>**Error Handling:** symptom, cause, and fix.</p>

| Symptom | Cause | Fix |
| --- | --- | --- |
| HTTP 403 on `GET`/`PUT parameterbackup` | Missing or expired session token | Create a new token; send the `X-Session-Token` header |
| Download returns an empty or partial file | File read before creation finished | Poll `CreateParameterBackupResult` before downloading |
| Restore rejected | Wrong passphrase, or a file from a different device type | Use the same passphrase; restore only onto a matching device type |
| `header.status` 4 or 10 on `Create*` or `Restore*` | Wrong password, user level not enabled, or the challenge was invalidated | Fetch a new [challenge](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication) per request; use Service |

## Roll Out a Configuration to Many Sensors

Configure and validate one "golden" device, download its configuration file, and restore it on every identical sensor. This also transfers [field evaluation](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/field-evaluation/) groups, which you can then modify over REST. Use the [`LFTchecksum`](https://sickag.github.io/sick_lidar_developer_guide/shared-features/checksums/) to confirm that a restore changed only what you expected. [Firmware Update](https://sickag.github.io/sick_lidar_developer_guide/shared-features/firmware-update/) uses the same session-token pattern.

## Related Articles

*How to create a device configuration offline and import it.*
*How to import and export configuration with SOPAS ET.*
