# LiDAR License Management

Some device functions require a license. Use the device's license manager to
transfer an issued license code to the device. The exact screens and available
options can vary by device and firmware.

## Before You Begin

- Obtain a valid license code for the device. The code is formatted as five
  groups separated by hyphens.
- Connect to the device and open its web interface.

## Activate a License

1. In a browser, connect to the device at
   `http://<device-IP-address>/`. On the device overview, choose **View licenses**.

   ![Device overview with the View licenses link highlighted.](../assets/shared-features/license-manager-device-overview.png)
   *Open the license overview from the device home page.*

2. In the license overview, choose **Activate license**.

   ![License overview showing available licenses and the Activate license and Deactivate license actions.](../assets/shared-features/license-manager-license-list.png)
   *The license overview also provides the action to deactivate returnable licenses.*

3. Select whether the device has an internet connection for the transfer, then
   choose **Next**.

   ![License Manager asks whether an internet connection is available for license activation.](../assets/shared-features/license-manager-transfer-connection.png)
   *Choose the transfer route that matches the device's network access.*

4. Enter or copy the license code. If the license ticket contains several
   entries, select the license entries to transfer, then continue.

   ![License ticket selection screen with selectable entries and group licenses option.](../assets/shared-features/license-manager-select-licenses.png)
   *Select the entries that should be transferred to the device.*

5. When the transfer succeeds, close the confirmation and check the updated
   license overview.

6. Reboot the device.

## Deactivate or Return a License

In the license overview, choose **Deactivate license**. During license
selection, enter the license code for the license to deactivate,
choose a license marked as returnable, then continue and confirm.
