# IP Address Assignment and IP Change Policy

> Change the sensor IP address with SOPAS ET device search and configure the IP change policy that controls when this is possible without login.

Source: https://sickag.github.io/sick_lidar_developer_guide/shared-features/ip-address-assignment/

# IP Address Assignment

Compatible with: multiScan100 multiScan200 picoScan100

Changing the IP address through the SOPAS ET device search without login is
restricted by an **IP change policy**. With the default policy, an IP change
without login is only possible within the first **60 seconds** after boot.
After that, a user role with the required rights is needed, or the policy
blocks the change entirely.

## Background

Since firmware V2.1.0, the picoScan100 stores an IP change policy on the device
instead of allowing unauthenticated IP changes; see the
[picoScan100 release notes](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/release-notes/).

## Policy Options

<p class="table-caption" markdown>**IP change policy:** web UI option, behavior, and CoLa `EtherCoLaScanMode` value.</p>

| Option | Behavior | CoLa value |
| --- | --- | --- |
| Off | The device cannot be found with the SOPAS ET broadcast search, and the IP address cannot be changed through it. | `2` |
| Change IP address without logging in | IP change allowed without login. No time window. | `0` |
| Change IP address only when logged in | Device visible in scans. IP change only with login. | `1` |
| Change IP address up to 1 min after start without logging in | IP change allowed without login only in the first 60 s after boot. After that, login is required. Default setting on picoScan100. | `3` |

The default can differ between device families and firmware versions; for
example, device search is enabled by default on multiScan200. Read the active
setting from the device before relying on it.

## Change the Policy (via Web UI)

1. Power on the device.
2. Open the device IP address in a browser and log in.
3. Go to **Diagnostics > Cybersecurity > Services and protocols**.
4. Select one of the four options.
5. Save and restart.

The policy is also available through `EtherCoLaScanMode` in the CoLa interface.
See Set/Read Device Search Mode for
[multiScan100](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#set-device-search-mode-swn-ethercolascanmode),
[multiScan200](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#set-device-search-mode-swn-ethercolascanmode), and
[picoScan100](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/api-cola-telegrams/#set-device-search-mode-swn-ethercolascanmode),
and the `EtherCoLaScanMode` variable in the REST API references for
[multiScan100](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/),
[multiScan200](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/), and
[picoScan100](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/api-rest-openapi/).
The IP address itself is set with `EIIpAddr`, for example
[picoScan100 Set IP Address](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/api-cola-telegrams/#set-ip-address-swn-eiipaddr).

For a visual example of changing the address itself rather than the search
policy, watch the [picoScan100 example video in Getting Started](https://sickag.github.io/sick_lidar_developer_guide/getting-started/#change-the-ip-address).

## Troubleshooting

- **60 s window expired:** Reboot the device, or log in with credentials.
- **Device not in search:** The policy **Off** may be active. Connect to the
  known IP address, or find it as described in
  [Device Discovery](https://sickag.github.io/sick_lidar_developer_guide/shared-features/device-discovery/#alternative-when-sick-discovery-is-disabled-arp).

## FAQ

- **Can I extend the 60 s window?** No. After 60 s, a login is required.
- **Which user level is required?** No login is required within the 60 s
  window. Outside it, see [User Levels](https://sickag.github.io/sick_lidar_developer_guide/shared-features/user-levels/).
- **Should I downgrade the firmware?** Not recommended. It reduces security.
