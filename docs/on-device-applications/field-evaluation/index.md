# LiDAR Field Evaluation: Polygons, Teach-In, and REST API

> Configure on-device field evaluation on LRS4000, multiScan100, multiScan200, and picoScan100: evaluation groups, polygons via GUI, REST, or CoLa, and teach-in.

Source: https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/field-evaluation/

# Field Evaluation

Compatible with: LRS4000 multiScan100 multiScan200 picoScan100

The sensor evaluates detection zones on the device. Field evaluation checks whether scan points enter a configured polygon and reports whether the field is free or infringed. The result can drive a digital output and can be read through REST, CoLa, or WebSocket events. In SOPASair, field evaluation is the **Object Detection** application; both names mean the same function.

<p class="table-caption" markdown>**Field Evaluation:** term and meaning.</p>

| Term | Meaning |
| --- | --- |
| Evaluation | One field (polygon) with its detection parameters, stored in an evaluation slot |
| Evaluation slot | Numbered storage place for one evaluation, for example `Eval001` |
| Group | One or more evaluations that are activated together |
| Activation type | When a group is evaluated: always, by digital inputs, or by telegram |
| Result | Per evaluation: free or infringed; per group: active, inactive, or not configured |

*picoScan100: How to draw fields and detect objects?*

## Configure in the Web GUI

Open the **Object Detection** application in SOPASair to create and edit polygon points directly. This is the quickest method for commissioning and manual adjustments. The field editor also supports teach-in.

![Field evaluation teach-in tile](https://sickag.github.io/sick_lidar_developer_guide/assets/picoScan100/img/sopasair-application-field-evaluation-teach-in-tile.png)
*Field evaluation teach-in tile in SOPASair.*

For bulk coordinate changes, open the Field settings dialog and select JSON in its footer toolbar. The editor switches from the coordinate table to a JSON text field. Paste the prepared polygon to replace all points at once:

```json
{
  "points": [
    { "x": -5, "y": 531 },
    { "x": 837, "y": 565 },
    { "x": 907, "y": -637 },
    { "x": 12, "y": -590 }
  ]
}
```

### Copy to Other Devices

Use the top-right SOPASair menu to download the complete configuration from a commissioned sensor. It includes field geometries and can be imported into another compatible device, making it suitable for repeatable commissioning and replacement devices. Keep a versioned, validated backup for each deployed configuration.

## Teach In

Teach-in captures the current environment and uses the measured contour as a field for object detection. Use it during commissioning when the surrounding geometry should define the detection field instead of drawing a polygon manually.

Open the **Object Detection** application in SOPASair and select **Teach-in** in the field configuration. Set the distances in front of and behind the object, choose the minimum teach-in time, and click **Start**. Stop the teach-in when the environment has been captured, then save the field evaluation configuration.

*Teach-in configuration in SOPASair.*

The configured distances take effect during the next teach-in. Keep the intended environment stable while the contour is captured.

Teach-in uses the same evaluation group and output mechanism as a manually configured field. After the contour has been captured, monitor the evaluation result through the configured output, REST, CoLa, or WebSocket events.

## Minimum Object Size

The farther an object is, the wider apart the beams are, so small objects can fall between them.
Select a device family, scan configuration, target, and object size to estimate up to which range the object is still detected.
Device presets fill in the model-specific values from the operating instructions. Select **Custom Values** to adjust angular resolution, beam divergence, minimum spot size, and scanning range.

<div class="calculator" data-object-size-calculator>
<form class="calculator__form" onsubmit="return false">
<p class="calculator__heading">Input</p>
<div class="calculator__input-row"><span class="calculator__input-label"><label for="object-device">Device</label> <details class="calculator__help"><summary aria-label="Help for Device">?</summary><p id="object-device-help">Select the device family, or Custom Values to enter your own geometry and scanning range.</p></details></span><select id="object-device" data-field="device" aria-describedby="object-device-help"></select></div>
<div class="calculator__input-row"><span class="calculator__input-label"><label for="object-config">Scan configuration</label> <details class="calculator__help"><summary aria-label="Help for Scan configuration">?</summary><p id="object-config-help">Select the model and scan mode. Presets fill in the operating-instruction values. Interlaced modes combine several frames and require a stationary scene.</p></details></span><select id="object-config" data-field="config" aria-describedby="object-config-help"></select></div>
<div class="calculator__input-row"><span class="calculator__input-label"><label for="object-target">Target</label> <details class="calculator__help"><summary aria-label="Help for Target">?</summary><p id="object-target-help">Target reflectance limits the scanning range: 10% is dark, 90% is bright. Reflector ranges assume a suitable reflector. Preset conditions must match your application.</p></details></span><select id="object-target" data-field="target" aria-describedby="object-target-help"></select></div>
<div class="calculator__input-row"><span class="calculator__input-label"><label for="object-horizontal">Angular resolution, horizontal [°]</label> <details class="calculator__help"><summary aria-label="Help for Angular resolution, horizontal">?</summary><p id="object-horizontal-help">Horizontal angle between measurement directions. A smaller step generally allows smaller objects at the same distance. Editable in Custom Values.</p></details></span><input id="object-horizontal" data-field="horizontal" type="number" min="0.01" max="5" step="any" inputmode="decimal" readonly aria-describedby="object-horizontal-help"></div>
<div class="calculator__input-row" data-vertical-only><span class="calculator__input-label"><label for="object-vertical">Angular resolution, vertical [°]</label> <details class="calculator__help"><summary aria-label="Help for Angular resolution, vertical">?</summary><p id="object-vertical-help">Angle between scan layers used for the height calculation. Real layer gaps can vary; the multiScan165 preset uses 2.5°, while outer gaps can reach 5°.</p></details></span><input id="object-vertical" data-field="vertical" type="number" min="0.01" max="5" step="any" inputmode="decimal" readonly aria-describedby="object-vertical-help"></div>
<div class="calculator__input-row"><span class="calculator__input-label"><label for="object-divergence-h">Beam divergence, horizontal [mrad]</label> <details class="calculator__help"><summary aria-label="Help for Beam divergence, horizontal">?</summary><p id="object-divergence-h-help">Horizontal beam spread in milliradians, used to display spot width. A preset may include the scan-mode contribution. Blank means no verified value for this mode.</p></details></span><input id="object-divergence-h" data-field="divergence-h" type="number" min="0" step="any" readonly placeholder="Not available" aria-describedby="object-divergence-h-help"></div>
<div class="calculator__input-row"><span class="calculator__input-label"><label for="object-divergence-v">Beam divergence, vertical [mrad]</label> <details class="calculator__help"><summary aria-label="Help for Beam divergence, vertical">?</summary><p id="object-divergence-v-help">Vertical beam spread in milliradians, used to display spot height. For LRS4000, the vertical spot also determines the height check.</p></details></span><input id="object-divergence-v" data-field="divergence-v" type="number" min="0" step="any" readonly placeholder="Not applicable" aria-describedby="object-divergence-v-help"></div>
<div class="calculator__input-row" data-custom-only hidden><span class="calculator__input-label"><label for="object-minimum-spot">Minimum spot size [mm]</label> <details class="calculator__help"><summary aria-label="Help for Minimum spot size">?</summary><p id="object-minimum-spot-help">Initial beam diameter used by the custom model for both axes. It sets the minimum object-size floor and the starting spot size.</p></details></span><input id="object-minimum-spot" data-field="minimum-spot" type="number" min="0" step="any" value="7" inputmode="decimal" aria-describedby="object-minimum-spot-help"></div>
<div class="calculator__input-row" data-custom-only hidden><span class="calculator__input-label"><label for="object-custom-range">Scanning range [m]</label> <details class="calculator__help"><summary aria-label="Help for Scanning range">?</summary><p id="object-custom-range-help">Maximum usable range for your target and operating conditions. This caps the geometric result in Custom Values.</p></details></span><input id="object-custom-range" data-field="custom-range" type="number" min="0.1" step="any" value="60" inputmode="decimal" aria-describedby="object-custom-range-help"></div>
<div class="calculator__input-row"><span class="calculator__input-label"><label for="object-width">Object width [mm]</label> <details class="calculator__help"><summary aria-label="Help for Object width">?</summary><p id="object-width-help">Width presented to the sensor across the scan direction. Use the smallest relevant width, accounting for the object's orientation.</p></details></span><input id="object-width" data-field="width" type="number" min="1" step="1" value="100" inputmode="decimal" aria-describedby="object-width-help"></div>
<div class="calculator__input-row" data-height-only><span class="calculator__input-label"><label for="object-height">Object height [mm]</label> <details class="calculator__help"><summary aria-label="Help for Object height">?</summary><p id="object-height-help">Height presented to the sensor. The height check uses layer spacing, or the vertical spot for LRS4000. Enter 0 to disable this check. picoScan presets are width-only.</p></details></span><input id="object-height" data-field="height" type="number" min="0" step="1" value="100" inputmode="decimal" aria-describedby="object-height-help"></div>
<div class="calculator__input-row"><span class="calculator__input-label"><label for="object-beams">Required beam spacings across the object</label> <details class="calculator__help"><summary aria-label="Help for Required beam spacings across the object">?</summary><p id="object-beams-help">One spacing uses the operating-instruction minimum-size model. Larger values add a planning margin and reduce range; they are not a guaranteed number of detected returns.</p></details></span><select id="object-beams" data-field="beams" aria-describedby="object-beams-help"><option value="1" selected>1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div>
</form>
<div class="calculator__results">
<p class="calculator__heading">Result</p>
<table class="calculator__table">
<tbody>
<tr class="calculator__main"><th scope="row">Maximum range <details class="calculator__help"><summary aria-label="Help for Maximum range">?</summary><p id="object-max-range-help">Smallest of the width limit, enabled height limit and target scanning range. This is a geometric planning estimate, not a detection guarantee.</p></details></th><td data-output="max-range" aria-describedby="object-max-range-help">–</td></tr>
<tr data-range-breakdown><th scope="row">Range limit from the width <details class="calculator__help"><summary aria-label="Help for Range limit from the width">?</summary><p id="object-h-range-help">Geometric range supported by the entered width, before applying the height check or target scanning-range cap.</p></details></th><td data-output="h-range" aria-describedby="object-h-range-help">–</td></tr>
<tr data-height-only data-range-breakdown><th scope="row">Range limit from the height <details class="calculator__help"><summary aria-label="Help for Range limit from the height">?</summary><p id="object-v-range-help">Geometric range supported by the entered height, before applying the width check or target scanning-range cap. Height 0 disables this check.</p></details></th><td data-output="v-range" aria-describedby="object-v-range-help">–</td></tr>
<tr><th scope="row">Scanning range for the target <details class="calculator__help"><summary aria-label="Help for Scanning range for the target">?</summary><p id="object-scan-range-help">Preset range cap for the selected target. picoScan diffuse-target values are typical at 10 klx; multiScan100 values use 10 klx. Footnote 1 marks a working-range fallback, not a specified target range.</p></details></th><td data-output="scan-range" aria-describedby="object-scan-range-help">–</td></tr>
<tr><th scope="row">Minimum object width at maximum range <details class="calculator__help"><summary aria-label="Help for Minimum object width at maximum range">?</summary><p id="object-size-h-help">Minimum width from the selected model at the calculated maximum range. If no positive range exists, it is shown at the scanning-range cap instead.</p></details></th><td data-output="size-h" aria-describedby="object-size-h-help">–</td></tr>
<tr data-height-only><th scope="row">Minimum object height at maximum range <details class="calculator__help"><summary aria-label="Help for Minimum object height at maximum range">?</summary><p id="object-size-v-help">Minimum height at the calculated range, using layer gaps or the LRS4000 vertical spot. Shown only when the height check is enabled. The multiScan model follows the published size table.</p></details></th><td data-output="size-v" aria-describedby="object-size-v-help">–</td></tr>
<tr><th scope="row">Spot width at maximum range <details class="calculator__help"><summary aria-label="Help for Spot width at maximum range">?</summary><p id="object-spot-h-help">Horizontal beam footprint at the calculated range: initial spot plus divergence times distance. This is separate from the minimum object width. Blank means the preset has no verified divergence for this mode.</p></details></th><td data-output="spot-h" aria-describedby="object-spot-h-help">–</td></tr>
<tr><th scope="row">Spot height at maximum range <details class="calculator__help"><summary aria-label="Help for Spot height at maximum range">?</summary><p id="object-spot-v-help">Vertical beam footprint at the calculated range: initial spot plus vertical divergence times distance. A 2D scanner still has a vertical beam footprint.</p></details></th><td data-output="spot-v" aria-describedby="object-spot-v-help">–</td></tr>
</tbody>
</table>
<p class="calculator__footnote" data-object-footnote hidden>1) Not specified for this target; the working range is shown.</p>
<p class="calculator__status" data-object-status data-state="info" aria-live="polite"></p>
</div>
<svg class="calculator__chart" data-object-chart role="img" aria-label="Minimum object size over the range, with the object size and the scanning range as lines"></svg>
</div>
*Minimum object size over the range. The maximum range is where the curve reaches the object size, capped by the scanning range for the selected target.*

These results are estimates only. Testing the individual object in its actual position and operating conditions is necessary; the calculator does not guarantee detection. The LRS4000, multiScan100, and picoScan100 presets use the corresponding model-specific operating-instruction data and formulas.

## Activate and Monitor a Group

<p class="table-caption" markdown>**Activate and Monitor a Group:** REST resource and purpose.</p>

| REST resource | Purpose |
| --- | --- |
| `ActivateEvaluationGroup` | Activates or deactivates a `TELEGRAM`-controlled group |
| `FieldEvaluationGroupState` | Group state: not configured, active, or inactive |
| `FieldEvaluationResult` | Current result: `FREE`, `INFRINGED`, or a transitional state; also available as a [WebSocket event](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/websocket-events/) |

A typical application creates the groups once, persists the configuration, and at runtime reads the group state and result, updates contours when necessary, and switches telegram-controlled groups.

For full payloads, see the [LRS4000](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/), [multiScan100](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/), [multiScan200](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/), and [picoScan100](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/api-rest-openapi/) REST API references and the CoLa telegram listings for [LRS4000](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/), [multiScan100](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/), [multiScan200](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/), and [picoScan100](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/api-cola-telegrams/).

Activation types (`Activation.Type` of a group). `ActivateEvaluationGroup` only switches `TELEGRAM` groups:

<p class="table-caption" markdown>**Activate and Monitor a Group:** value, type, and behavior.</p>

| Value | Type | Behavior |
| --- | --- | --- |
| `0` | Deactivated | The group is never evaluated. |
| `1` | Always | The group is active as soon as it is stored. `ActivateEvaluationGroup` returns `false` for it and cannot switch it off. |
| `2` | Inputs | Digital inputs activate the group. |
| `3` | Telegram | The group starts in the state set by `InitialActivationStateTelegram` and is switched with `ActivateEvaluationGroup`. |

`FieldEvaluationGroupState` returns one value per group: `0` not configured, `1` active, `2` inactive. `FieldEvaluationResult` returns one state per evaluation: `0` not configured, `1` inactive, `2` free, `3` detecting infringed, `4` infringed, `5` detecting free.

## Configure over the API

On all devices, create the evaluations in SOPASair or restore them from a [configuration file](https://sickag.github.io/sick_lidar_developer_guide/configuration/configuration-backup-and-restore/); REST and CoLa can then change them. On the picoScan100, REST and CoLa can also build complete evaluations from scratch. The following workflow applies to picoScan150 with firmware V2.3.3. Some of these variables, such as `Eval001`–`Eval048` and `EvaluationGroupMapping`, are not listed in the published OpenAPI file, but can be read and written as REST variables (`GET` / `POST /api/<Variable>`).

<p class="table-caption" markdown>**Configure over the API:** variable or method, purpose, and devices.</p>

| Variable or method | Purpose | Devices |
| --- | --- | --- |
| `Eval001`–`Eval048` | Detection parameters of one evaluation slot: mode, minimum object size, timing, and the referenced volume (`VolumeList`) | picoScan100 |
| `SetFieldEvaluationContour` / `GetFieldEvaluationContour` | Writes or reads the polygon of an evaluation | LRS4000, multiScan100, multiScan200, picoScan100 |
| `SetFieldEvaluationConfiguration` / `GetFieldEvaluationConfiguration` | Writes or reads evaluation parameters | multiScan200 |
| `EvaluationGroupMapping` | Groups evaluations and sets the activation type of each group | picoScan100 |
| `EvaluationGroupType` | Selects field evaluation or perpendicular-distance mode | LRS4000, picoScan100 |
| `PortConfiguration` | Assigns an evaluation result to a digital output | LRS4000, multiScan100, multiScan200, picoScan100 |
| `WriteEeprom` (REST) / `mEEwriteall` (CoLa) | Stores the configuration permanently | LRS4000, multiScan100, multiScan200, picoScan100 |

To create an evaluation on the picoScan100, log in as **Authorized client** or **Service** and write the variables in this order:

1. Write `EvalNNN` with the detection mode, the minimum object size, and `VolumeList = [NNN]`.
2. Write the polygon with `SetFieldEvaluationContour`. It returns error `1` (invalid evaluation) if `VolumeList` of the slot is empty, so write the slot first.
3. Write `EvaluationGroupMapping`. The whole array is replaced on every write: read the current mapping first and include every group you want to keep.
4. Optional: write `PortConfiguration` to switch a digital output when the evaluation is infringed. Outputs refer to evaluations (sources `EG01`–`EG48`), not to groups, and the whole port array must be written.
5. Call `WriteEeprom`. The device re-initializes; wait about 1 s before reading the state.
6. For a `TELEGRAM` group, switch it on with `ActivateEvaluationGroup`.

To delete an evaluation, remove its group from `EvaluationGroupMapping`, clear `VolumeList` and the name of the slot, and call `WriteEeprom`. The group state returns to not configured.

The coordinates are in millimeters in the sensor coordinate system: `x` points forward (depth) and `y` to the side.

**Detection modes** (`EvaluationParamsCommon.Mode` of the evaluation slot):

<p class="table-caption" markdown>**Configure over the API:** value, mode, and the field is infringed when.</p>

| Value | Mode | The field is infringed when |
| --- | --- | --- |
| `0` | Blanking | An object at least as large as the minimum object size is inside the field. This is the most common mode. |
| `1` | Reflector only | A highly reflective object such as a retroreflector is inside the field. |
| `2` | Contour | The scan deviates from the taught-in contour by more than the tolerance. Requires a valid [teach-in](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/field-evaluation/#teach-in-over-the-api). |

### Change a Polygon

The REST API exposes `SetFieldEvaluationContour` to update a polygon. The evaluation must already exist. Use `GetFieldEvaluationContour` to confirm the stored geometry and persist the change with `WriteEeprom`. See the [REST client example](https://github.com/SICKAG/sick_scan_rest_client/blob/public/examples/sick_scan_rest_client_object_detection_example.py).

CoLa provides the same `SetFieldEvaluationContour` function through its telegram interface. Use it when the integration already uses CoLa, such as a PLC or legacy client; see [CoLa](https://sickag.github.io/sick_lidar_developer_guide/configuration/cola-interface/).

The `sick_perception_sdk` uses the REST interface and provides an application-level option for changing contours. See the [object-detection example](https://github.com/SICKAG/sick_perception_sdk/blob/main/examples/shared/object_detection.cpp).

## Teach in over the API

A teach-in evaluation is an evaluation slot with mode `2` (contour). The polygon written with `SetFieldEvaluationContour` is not the detection field: it is the region of interest in which teach-in learns the reference contour. `GetFieldEvaluationContour` therefore returns this region, not the learned contour.

Teach-in is global; it is not bound to an evaluation slot. Set the parameters, then start and stop the teach-in:

<p class="table-caption" markdown>**Teach in over the API:** variable or method and purpose.</p>

| Variable or method | Purpose |
| --- | --- |
| `TeachInToleranceFront` / `TeachInToleranceBack` | Tolerance in front of and behind the taught contour, in mm (default 250) |
| `TeachInMinimumTimeMs` | Minimum teach-in time, 100 to 60000 ms (default 250) |
| `TeachInActivationInput` | Digital input that starts the teach-in; `0` = software only |
| `StartTeachIn` / `StopTeachIn` | Starts and stops the teach-in |
| `TeachInActive` | `1` while the teach-in runs |
| `TeachInContourValid` | `1` after a teach-in produced a valid contour |

Keep the scene stable for at least the minimum teach-in time, stop the teach-in, check `TeachInContourValid`, and call `WriteEeprom`. To change the field later, repeat the teach-in, for example with a larger tolerance; the region of interest stays the same.

## Distance-Dependent

The **Distance-dependent** parameter determines whether two detected objects are evaluated separately or merged into one object based on their axial separation. It works with the configured **Blanking** width to avoid triggering a field evaluation when separate small objects would otherwise appear as one large object.

*picoScan100: 2D Object Detection Parameter Distance-dependent.*

The video uses two objects: a foreground object approximately 60 mm wide, a background object approximately 250 mm wide, and about 450 mm of axial separation. The standard blanking width is 300 mm.

<p class="table-caption" markdown>**Example:** configuration, result, and explanation.</p>

| Configuration | Result | Explanation |
| --- | --- | --- |
| Distance-dependent off | Field infringed | Both objects merge into one contiguous object wider than 300 mm. |
| Distance-dependent on; threshold 300 mm | Field not infringed | The objects are at least 300 mm apart and are evaluated separately; neither is wider than 300 mm. |
| Distance-dependent on; threshold 500 mm | Field infringed | The objects are less than 500 mm apart, so they merge and exceed the blanking width. |

Set the separation threshold to the distance at which nearby objects should be merged for your application.

## Ground Filter (multiScan100)

The ground filter uses upper and lower ground thresholds to reduce false
field-evaluation triggers caused by the ground. When configured correctly, it
retains small objects such as forklift tines and can be used indoors and
outdoors. The filter also affects perpendicular-distance evaluations. See
[Ground Filter](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/#ground-filter) for
availability and API settings.

*multiScan1xx: Ground-filter behavior in a field application.*
