# User Levels and Passwords on SICK LiDAR Sensors

> Service, Maintenance, and Authorized Client user levels on SICK LiDAR sensors: authentication, level management, and password reset.

Source: https://sickag.github.io/sick_lidar_developer_guide/shared-features/user-levels/

# User Levels

Compatible with: LRS4000 multiScan100 multiScan200 picoScan100

User levels control who can change the sensor configuration. Reading live data and status does not require a login, but configuration changes, methods, and protected API requests do.

<p class="table-caption" markdown>**User Levels:** user level and factory state on multiScan200 and picoScan100.</p>

| User level | Factory state on multiScan200 and picoScan100 |
| --- | --- |
| Service | Enabled |
| Maintenance | Disabled |
| Authorized Client | Disabled |

For multiScan200 and picoScan100, only Service is enabled in the documented
factory state. Check the product documentation for the multiScan100 or
LRS4000 variant to confirm its factory state. On devices where the other
levels are disabled, a Service-level user must enable them before they can be
selected. Activate only the levels required by the deployment, then assign
and protect their passwords before handing the system over.

## Log In

Select an enabled user level in SOPASair and authenticate with its configured
password. For the first connection and commissioning sequence, see
[Getting Started](https://sickag.github.io/sick_lidar_developer_guide/getting-started/#log-in).

<!-- SICK video: 0_mu0oam45; source: https://support.sick.com/sick-knowledgebase/article?id=196b5b2c-374c-f011-877a-7c1e5229e0a5 -->
*picoScan100 example: Log in to SOPASair before enabling or changing user levels. Use your deployment credentials; do not retain default passwords.*

## Enabling a User Level

Log in to SOPASair with the Service user level, open the user-level management settings, enable the required level, and set its password. Save the configuration permanently with Write EEPROM so the setting persists after a power cycle.

![User levels and access data tile](https://sickag.github.io/sick_lidar_developer_guide/assets/picoScan100/img/sopasair-diagnosis-cyber-security-access-data-tile.png)
*Access this tile in SOPASair via **Diagnostic → Cybersecurity**.*

<!-- SICK video: 0_wygs0uy5; source: https://support.sick.com/sick-knowledgebase/article?id=ec5dfcbd-374c-f011-877a-7c1e5229e0a5 -->
*picoScan100 example: Enable the user levels needed for protected interfaces, then save the configuration and set secure passwords as described above.*

REST API clients enable or disable REST user levels with `EnableUserLevel`. In the challenge-response `header.user` field, write the levels as `Service`, `Maintenance`, and `AuthorizedClient`. CoLa A/B clients use `EnableLegacyUserLevel` for their respective user levels. Authenticate these changes as Service, and use a fresh [challenge-response](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication) value for each protected REST request.

For device-specific commands, see the [multiScan100](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/), [multiScan200](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/rest-api-openapi/), and [picoScan100](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/) REST API references; CoLa user-level telegrams are listed for [multiScan100](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/cola-telegram-listing/), [multiScan200](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/cola-telegram-listing/), and [picoScan100](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/cola-telegram-listing/). For the request flow, see [Challenge Response Authentication](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

### picoScan100 CoLa A/B Access

On picoScan100, **Maintenance** and **Authorized Client** are disabled by
default to enforce authorization. A Service-level user can enable them in the
GUI or over CoLa A/B. In the GUI, log in as **Service** and enable the
required levels in the user-level settings. Over CoLa, first log in as
**Service**, then use `EnableLegacyUserLevel` with level `2` for Maintenance
or `3` for Authorized Client and value `1` to enable it. See the
[picoScan100 CoLa telegram listing](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/cola-telegram-listing/#enable-disable-cola-user-levels-smn-enablelegacyuserlevel)
for the command structure. After enabling the required levels, run `sMN Run`
to apply the change. Use the password configured on the device; the default
passwords are documented in the product operating instructions, and should
not be assumed unchanged.

When upgrading from firmware earlier than V2.1.0 to V2.1.0, previously
enabled user levels remain enabled. A factory reset restores the defaults:
Service enabled, Maintenance and Authorized Client disabled.

A driver configured to log in as a disabled Maintenance or Authorized Client
user may receive `SetAccessMode 0` (login rejected); a subsequent protected
write may return `sFA A` (write not permitted, for example because login is
missing). Enable the user level in the device or configure the client to use
Service. For example, `sick_scan_xd` supports selecting the user level with
its `user_level` parameter from version V3.7 (`3` for Client or `4` for
Service); consult its
[picoScan launch configuration](https://github.com/SICKAG/sick_scan_xd/blob/673d7d8cc117a706cb2b244849364aa438cc7749/launch/sick_picoscan.launch#L79)
for the supported settings.

## Resetting the Password

1. Establish a connection to the product in the web browser.
2. Select **Log In**.
3. Select **Password forgotten?**.
4. Send the device key, serial number, and part number by email to the responsible SICK sales company or the responsible SICK service partner, see [sick.com/worldwide](https://www.sick.com/worldwide).
5. Click **Next** to confirm.
   - The window for entering a code appears. You can get the code from the responsible SICK sales company or the responsible SICK service partner. The code is only valid once for the reset process. You can close the window by clicking on the x without interrupting the reset process. If you select **Cancel** or enter an incorrect code several times, the current reset process is terminated. The requested code is no longer valid. The process must be restarted.
6. Optional: close the window. At a later time, open the window for entering the code via **Settings** and **Password forgotten?**.
7. Enter the code.
8. Click **Reset** to confirm.
   - The password is reset to the default password. Parameters are not changed.
