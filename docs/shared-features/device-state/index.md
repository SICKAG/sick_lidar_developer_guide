# Device State and Availability

> Check sensor availability with its status LEDs, a configurable digital output, or the REST and CoLa device-state interfaces.

Source: https://sickag.github.io/sick_lidar_developer_guide/shared-features/device-state/

# Device State

Compatible with: LRS4000 multiScan100 multiScan200 picoScan100

The sensors provide several ways to check whether they are available and
ready to measure. Choose the local indication that suits the installation, or
read the state through REST or CoLa from a host application.

## Status LEDs

Status LEDs indicate the device state. On devices where the LEDs can be
switched off, they do not indicate anything while disabled. See the device
operating instructions for the meanings of the individual LED states.

## Digital Output: Device Not Ready

Use a digital output when an external controller or PLC needs a hardware
signal for device availability:

1. Open the sensor web interface and log in as **Service**.
2. Open **Inputs and Outputs**.
3. Select **Device not ready** as the source for the output that should signal
   the status.
4. Configure the restart time, switching logic, and electrical connection
   logic for the installation.

If contamination is expected and should be signaled separately, select
**Contamination indication** as an output source. See
[Contamination Indication](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/contamination-indication/)
for its configuration and behavior.

## Read State over REST or CoLa

Two state values are available. `SCdevicestate` gives a simple readiness
result; `DeviceStatus` (REST) / `DevSta` (CoLa A/B) provides more detail:

<p class="table-caption" markdown>**Simple readiness (`SCdevicestate`):** value and meaning.</p>

| Value | Meaning |
| --- | --- |
| `0` | Busy or logged in |
| `1` | Ready |
| `2` | Error |

<p class="table-caption" markdown>**Detailed state (`DeviceStatus` / `DevSta`):** value and meaning.</p>

| Value | State | Meaning |
| --- | --- | --- |
| `0` | Reserved | Reserved value. |
| `1` | Startup | The device is starting. |
| `2` | Service mode | A service action is in progress, such as a software update or comprehensive parameter exchange. This state does not indicate whether the device can operate normally. |
| `3` | Normal operation | Startup is complete and no errors or warnings have occurred. |
| `4` | Suspended operation | An internal or environmental condition prevents adequate measurement. |
| `5` | Service recommended | Measurement is operating as specified, but a service technician may need to address an issue. |
| `6` | Service required | Measured values are still available, but the issue may affect them; service is required. |
| `7` | Recoverable error | The device has a malfunction and measurement service is likely disrupted; service may be able to resolve it. |
| `8` | Fatal error | A fatal error has occurred; reset and reboot the device. |

For exact request and response formats, see the REST API references and the
CoLa listing sections:

<p class="table-caption" markdown>**References:** device, REST, `DevSta`, and `SCdevicestate`.</p>

| Device | REST | `DevSta` | `SCdevicestate` |
| --- | --- | --- | --- |
| LRS4000 | [OpenAPI](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/) | – | [sRN SCdevicestate](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/cola-telegram-listing/#read-the-device-state-srn-scdevicestate) |
| multiScan100 | [OpenAPI](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/) | [sRN DevSta](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/cola-telegram-listing/#read-the-device-state-srn-devsta) | [sRN SCdevicestate](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/cola-telegram-listing/#read-the-device-state-srn-scdevicestate) |
| multiScan200 | [OpenAPI](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/rest-api-openapi/) | [sRN DevSta](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/cola-telegram-listing/#read-device-state-srn-devsta) | [sRN SCdevicestate](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/cola-telegram-listing/#read-device-ready-state-srn-scdevicestate) |
| picoScan100 | [OpenAPI](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/) | [sRN DevSta](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/cola-telegram-listing/#read-the-device-state-srn-devsta), [sEN DevSta](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/cola-telegram-listing/#receive-the-device-state-by-event-sen-devsta) | [sRN SCdevicestate](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/cola-telegram-listing/#read-the-device-state-srn-scdevicestate), [sEN SCdevicestate](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/cola-telegram-listing/#receive-the-device-state-by-event-sen-scdevicestate) |
