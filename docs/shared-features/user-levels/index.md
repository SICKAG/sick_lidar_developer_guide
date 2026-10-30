# User Levels and Passwords on SICK LiDAR Sensors

> Service, Maintenance, and Authorized Client user levels on SICK LiDAR sensors: authentication, level management, and password reset.

Source: https://sickag.github.io/sick_lidar_developer_guide/shared-features/user-levels/

# User Levels

Compatible with: LRS4000 multiScan100 multiScan200 picoScan100

User levels control who can change the sensor configuration. Reading live data and status does not require a login, but configuration changes, methods, and protected API requests do.

<p class="table-caption" markdown>**User Levels:** user level and factory state for all supported devices.</p>

| User level | Factory state |
| --- | --- |
| Service | Enabled |
| Maintenance | Disabled |
| Authorized Client | Disabled |

Only Service is enabled in the factory state on all supported devices.
A Service-level user must enable the other levels before they can be
selected. Activate only the levels required by the deployment, then assign
and protect their passwords before handing the system over.

## Log In

Select an enabled user level in SOPASair and authenticate with its configured
password. For the first connection and commissioning sequence, see
[Getting Started](https://sickag.github.io/sick_lidar_developer_guide/getting-started/#log-in).

*picoScan100 example: Log in to SOPASair before enabling or changing user levels. Use your deployment credentials; do not retain default passwords.*

## Enabling a User Level

Log in to SOPASair with the Service user level, open the user-level management settings, enable the required level, and set its password. Save the configuration permanently with Write EEPROM so the setting persists after a power cycle.

![User levels and access data tile](https://sickag.github.io/sick_lidar_developer_guide/assets/picoScan100/img/sopasair-diagnosis-cyber-security-access-data-tile.png)
*Access this tile in SOPASair via **Diagnostic → Cybersecurity**.*

*picoScan100 example: Enable the user levels needed for protected interfaces, then save the configuration and set secure passwords as described above.*

REST API clients enable or disable REST user levels with `EnableUserLevel`. In the challenge-response `header.user` field, write the levels as `Service`, `Maintenance`, and `AuthorizedClient`. CoLa A/B clients use `EnableLegacyUserLevel` for their respective user levels. Authenticate these changes as Service with [challenge-response](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

For device-specific commands, see the [multiScan100](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/), [multiScan200](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/), and [picoScan100](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/api-rest-openapi/) REST API references; CoLa user-level telegrams are listed for [multiScan100](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/), [multiScan200](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/), and [picoScan100](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/api-cola-telegrams/).

### picoScan100 CoLa A/B Access

On picoScan100, **Maintenance** and **Authorized Client** are disabled by
default to enforce authorization. A Service-level user can enable them in the
GUI or over CoLa A/B. In the GUI, log in as **Service** and enable the
required levels in the user-level settings. Over CoLa, first log in as
**Service**, then use `EnableLegacyUserLevel` with level `2` for Maintenance
or `3` for Authorized Client and value `1` to enable it. See the
[picoScan100 CoLa telegram listing](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/api-cola-telegrams/#enable-disable-cola-user-levels-smn-enablelegacyuserlevel)
for the command structure. After enabling the required levels, run `sMN Run`
to apply the change. The default passwords are documented in the operating
instructions of your device. Do not pass them on, and change them during
commissioning.

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

1. Open the device's web interface and select **Log In → Password forgotten?**.
2. Email the device key, serial number, and part number to your
   [SICK sales company or service partner](https://www.sick.com/worldwide)
   to obtain a one-time reset code.
3. Click **Next** to open the code-entry window. You may close it with **x**
   and reopen it later via **Settings → Password forgotten?** without
   interrupting the reset. Selecting **Cancel** or repeatedly entering an
   incorrect code terminates the process and invalidates the code; restart
   the reset process.
4. Enter the code and click **Reset**. The password returns to its default;
   device parameters remain unchanged.
