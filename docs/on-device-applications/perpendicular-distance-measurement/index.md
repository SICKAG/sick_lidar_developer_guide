# Perpendicular Distance Measurement on SICK LiDAR Sensors

> Review perpendicular-distance availability on LRS4000, multiScan100, and picoScan100, with a detailed picoScan100 configuration and API workflow.

Source: https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/perpendicular-distance-measurement/

# Perpendicular Distance Measurement

Compatible with: LRS4000 multiScan100 picoScan100

Perpendicular distance evaluation measures object distances relative to a
reference line in the scan plane. Define a field and reference line in the
application; the sensor evaluates the points in that field and
reports the minimum and maximum perpendicular distances and the positions of
the corresponding measuring points.

*multiScan1xx: Perpendicular distance application demonstration.*

## Configure a Measurement

1. Open **Application > Perpendicular distance measurement** in SOPASair and
   add an evaluation group.
2. Draw the zone in which objects should be measured.
3. Set **Max. blanking size** and **Detection time** under Object detection to
   balance measurement stability and response time for the target.
4. Save the configuration to the device.
5. Check the live minimum and maximum distances and their measuring-point
   coordinates in the result list.

The evaluation runs on the sensor, so the host receives measurement results
without having to detect objects from the raw scan itself. See the
[SOPASair configuration walkthrough](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/graphical-user-interface/#perpendicular-distance-measurement)
for the interface details.

<!-- SICK video: 0_rdym64bi; source: https://support.sick.com/sick-knowledgebase/article?id=11a5b8ad-4550-f011-877b-000d3a2a3508 -->
*picoScan100 example: Output a field's perpendicular distance after configuring the measurement field; use the interfaces below to read the results in your application.*

## Read Results

The REST endpoint `GET /api/perpendicularDistanceResult` returns a timestamp
and an `evaluations` array. Each result contains an evaluation ID, minimum and
maximum distance, and the 3D position of each corresponding measuring point.
The `evaluations` array is empty when no object is measured. The result is read-only; see the [picoScan100 REST API reference](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/).

CoLa clients can poll `sRN perpendicularDistanceResult` for the current
measurement or subscribe with `sEN perpendicularDistanceResult` for event
updates. The telegram reports the shortest and furthest measuring point in
the range relative to the reference plane. See the
[picoScan100 CoLa Telegram Listing](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/cola-telegram-listing/).

## Configure over the API (picoScan100)

REST and CoLa expose every variable needed to create, change, and delete a
perpendicular distance evaluation without SOPASair. The following workflow
applies to picoScan150 with firmware V2.3.3. Some of these variables are
not listed in the published OpenAPI file, but can be read and written as REST
variables (`GET` / `POST /api/<Variable>`).

A perpendicular distance evaluation has two parts, as in SOPASair:

<p class="table-caption" markdown>**Configure over the API (picoScan100):** part, variables, and content.</p>

| Part | Variables | Content |
| --- | --- | --- |
| Object detection | `EvalNNN`, `VolumeNNN` | Detection parameters (blanking mode, minimum object size, detection time) and the field in which objects are measured |
| Reference line | `perpDistNNN` | Normal vector of the line in the scan plane and its signed distance from the sensor, in mm |

To create an evaluation, log in as **Authorized client** or **Service** and
write the variables in this order, using the same slot number `NNN`
throughout:

1. Set the slot to perpendicular distance: write `EvaluationGroupType` with
   all 48 values and `1` at the slot position (`0` = field evaluation).
2. Write `EvalNNN` with `VolumeList = [NNN]`.
3. Write the field polygon directly to `VolumeNNN`. Do not use
   `SetFieldEvaluationContour` here: it returns success for perpendicular
   distance slots but is not reliable for them.
4. Write the reference line to `perpDistNNN`. The normal vector sets the
   orientation, for example `(1, 0, 0)` for a line across the forward
   direction, and the distance sets its position. Because the picoScan100 is a
   2D sensor, the `z` component is always `0`. The no-data mode sets the
   output when no object is measured: `0` zero, `1` hold the last value, or
   `2` a user-defined substitution distance.
5. Add the group to `EvaluationGroupMapping` with `EvalIds = [NNN]`. The whole
   array is replaced on every write, so include every group you want to keep.
6. Call `WriteEeprom` and wait about 1 s before reading the result.

Keep in mind:

- Perpendicular distance groups need their own slots; they cannot share a
  slot with a field evaluation group.
- If the field is missing (empty `VolumeList` or empty `VolumeNNN`) or the
  group references no evaluation, the device reports a recoverable error
  (`DeviceStatus` = `7` instead of `3`) and the result stays empty.
- Perpendicular distance results are not assigned to digital outputs; read
  them from `perpendicularDistanceResult`.
- Group activation (`ALWAYS`, `INPUTS`, `TELEGRAM`) and `ActivateEvaluationGroup`
  work as for [field evaluation](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/field-evaluation/#configure-over-the-api).

To delete the evaluation, remove the group from `EvaluationGroupMapping`,
clear `EvalNNN`, `VolumeNNN`, and `perpDistNNN`, set the slot in
`EvaluationGroupType` back to `0`, and call `WriteEeprom`.

For output and evaluation-group concepts shared with field evaluation, see
[Field Evaluation](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/field-evaluation/).
