# Motor Synchronization

Motor synchronization coordinates measurement start angles across several
LRS4000 sensors. It can increase the effective scan frequency or resolution
of a combined system. The sensor shifts its measurement start angle between
−180° and +180°; set the phase for each device individually.

LRS4000 supports two synchronization methods.

## PTP Synchronization

Synchronize the LiDAR sensors over Ethernet to a central PTP master. The
sensors then share a system time and operate synchronously. The OpenAPI
reference exposes the `SyncMode` and `SyncPhase` settings and provides the
`MotorSyncStatus` endpoint.

## Synchronization Through Inputs and Outputs

Use one LRS4000 as the reference device and configure the remaining devices
as synchronized devices.

1. On the reference device, set the motor synchronization source to **No
   source**, define its start angle, and configure an output with the index
   signal as its source.
2. On each synchronized device, set the motor synchronization source to
   **Line (index signal at IN1)** and define its start angle.
3. Connect each synchronized device's IN1 to the reference device's output
   that generates the index signal.

Combine measurement data from multiple devices in the customer application.

## Check Synchronization Status

Read the `MotorSyncStatus` endpoint in the
[LRS4000 REST API reference](./rest-api-openapi.md). The documented values
distinguish between no clock/rotation synchronization, time synchronization
only, and synchronized operation.

## Related Articles

- [LRS4000 REST API | OpenAPI](./rest-api-openapi.md)
- [Time Synchronization](../shared-features/time-synchronization.md)
- [3D scan recording with a 2D LiDAR](../integration-notes/3d-with-2d-lidars.md)
