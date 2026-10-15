# Field Evaluation

The sensor evaluates detection zones on the device. Field evaluation checks whether scan points enter a configured polygon and reports a `FREE` or `INFRINGED` result. The result can drive a digital output and can be read through REST or CoLa where the product exposes those interfaces.

*picoScan100: How to draw fields and detect objects?*

## Configure an Evaluation

Create evaluation groups in SOPASair, or restore them from a [configuration file](../configuration/configuration-backup-and-restore.md). The REST API and CoLa can then change existing evaluations or, on the picoScan100, build complete evaluations from scratch (see [Configure Over The API](#configure-over-the-api)). Call `WriteEeprom` after changes to store them permanently.

<p class="table-caption" markdown>**Configure an Evaluation:** REST resource, purpose, and devices.</p>

| REST resource | Purpose | Devices |
| --- | --- | --- |
| `SetFieldEvaluationContour` | Writes the polygon of an evaluation | LRS4000, multiScan100, multiScan200, picoScan100 |
| `GetFieldEvaluationContour` | Reads the polygon of an evaluation | LRS4000, multiScan100, multiScan200, picoScan100 |
| `SetFieldEvaluationConfiguration` / `GetFieldEvaluationConfiguration` | Writes or reads evaluation parameters | multiScan200 |
| `EvaluationGroupType` | Selects field evaluation or perpendicular-distance mode | LRS4000, picoScan100 |
| `PortConfiguration` | Configures I/O ports, including outputs used by evaluations | LRS4000, multiScan100, multiScan200, picoScan100 |

## Activate and Monitor a Group

A group can be active continuously (`ALWAYS`), controlled by inputs (`INPUTS`), or controlled by a telegram (`TELEGRAM`). `ActivateEvaluationGroup` only affects groups configured with `TELEGRAM`; it cannot switch an `ALWAYS` group.

<p class="table-caption" markdown>**Activate and Monitor a Group:** REST resource and purpose.</p>

| REST resource | Purpose |
| --- | --- |
| `ActivateEvaluationGroup` | Activates or deactivates a `TELEGRAM`-controlled group |
| `FieldEvaluationGroupState` | Group state: not configured, active, or inactive |
| `FieldEvaluationResult` | Current result: `FREE`, `INFRINGED`, or a transitional state; also available as a [WebSocket event](../data-streaming/websocket-events.md) |

A typical application creates the groups once, persists the configuration, and at runtime reads the group state and result, updates contours when necessary, and switches telegram-controlled groups.

For full payloads, see the [LRS4000](../LRS4000/rest-api-openapi.md), [multiScan100](../multiScan100/rest-api-openapi.md), [multiScan200](../multiScan200/rest-api-openapi.md), and [picoScan100](../picoScan100/rest-api-openapi.md) REST API references and the device-specific CoLa telegram listings.

## Configure over the API

On the picoScan100, REST and CoLa expose every variable needed to create, change, and delete a field evaluation without SOPASair. The following workflow applies to picoScan150 with firmware V2.3.3. Some of these variables, such as `Eval001`–`Eval048` and `EvaluationGroupMapping`, are not listed in the published OpenAPI file, but can be read and written as REST variables (`GET` / `POST /api/<Variable>`).

<p class="table-caption" markdown>**Configure over the API:** variable or method and purpose.</p>

| Variable or method | Purpose |
| --- | --- |
| `Eval001`–`Eval048` | Detection parameters of one evaluation slot: mode, minimum object size, timing, and the referenced volume (`VolumeList`) |
| `SetFieldEvaluationContour` / `GetFieldEvaluationContour` | Writes or reads the polygon of an evaluation |
| `EvaluationGroupMapping` | Groups evaluations and sets the activation type of each group |
| `PortConfiguration` | Assigns an evaluation result to a digital output |
| `ActivateEvaluationGroup` | Switches a `TELEGRAM` group on or off; needs no login |
| `FieldEvaluationGroupState` / `FieldEvaluationResult` | Read-only group state and evaluation result |
| `WriteEeprom` (REST) / `mEEwriteall` (CoLa) | Stores the configuration permanently |

To create an evaluation, log in as **Authorized client** or **Service** and write the variables in this order:

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
| `2` | Contour | The scan deviates from the taught-in contour by more than the tolerance. Requires a valid [teach-in](#teach-in-over-the-api). |

**Activation types** (`Activation.Type` of a group):

<p class="table-caption" markdown>**Configure over the API:** value, type, and behavior.</p>

| Value | Type | Behavior |
| --- | --- | --- |
| `0` | Deactivated | The group is never evaluated. |
| `1` | Always | The group is active as soon as it is stored. `ActivateEvaluationGroup` returns `false` for it and cannot switch it off. |
| `2` | Inputs | Digital inputs activate the group. |
| `3` | Telegram | The group starts in the state set by `InitialActivationStateTelegram` and is switched with `ActivateEvaluationGroup`. |

`FieldEvaluationGroupState` returns one value per group: `0` not configured, `1` active, `2` inactive. `FieldEvaluationResult` returns one state per evaluation: `0` not configured, `1` inactive, `2` free, `3` detecting infringed, `4` infringed, `5` detecting free.

For complete REST and CoLa payloads of every step, see the knowledge base article [picoScan150: Field Evaluation and Perpendicular Distance API Possibilities](https://support.sick.com/sick-knowledgebase/article/?code=KA-10798).

## Editing Field Polygons

Field polygons can be changed through the web GUI, configuration import, REST, CoLa, or the SDK. Select the method that fits whether the change is an interactive adjustment, a repeatable deployment, or an application-driven update.

### Web GUI Configuration

Open the Object Detection application in SOPASair to create and edit polygon points directly. This is the quickest method for commissioning and manual adjustments. The field editor also supports teach-in.

![Field evaluation teach-in tile](../assets/picoScan100/img/application_field_eval_teach_in_tile_20260826_153331.png)
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

### Configuration File Import

Use the top-right SOPASair menu to download the complete configuration from a commissioned sensor. It includes field geometries and can be imported into another compatible device, making it suitable for repeatable commissioning and replacement devices. Keep a versioned, validated backup for each deployed configuration.

### Programmatic Updates

The REST API exposes `SetFieldEvaluationContour` to update a polygon. The evaluation must already exist. Use `GetFieldEvaluationContour` to confirm the stored geometry and persist the change with `WriteEeprom`. See [Configure An Evaluation](#configure-an-evaluation) and the [REST client example](https://github.com/SICKAG/sick_scan_rest_client/blob/public/examples/sick_scan_rest_client_object_detection_example.py).

CoLa provides the same `SetFieldEvaluationContour` function through its telegram interface. Use it when the integration already uses CoLa, such as a PLC or legacy client; see [CoLa](../configuration/cola-interface.md).

The `sick_perception_sdk` uses the REST interface and provides an application-level option for changing contours. See the [object-detection example](https://github.com/SICKAG/sick_perception_sdk/blob/main/examples/shared/object_detection.cpp).

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

Set the separation threshold to the distance at which nearby objects should be merged for your application. See [Configure An Evaluation](#configure-an-evaluation) for the evaluation and polygon.

## Teach In

Teach-in captures the current environment and uses the measured contour as a field for object detection. Use it during commissioning when the surrounding geometry should define the detection field instead of drawing a polygon manually.

### Web GUI Teach In

Open the **Object Detection** application in SOPASair and select **Teach-in** in the field configuration. Set the distances in front of and behind the object, choose the minimum teach-in time, and click **Start**. Stop the teach-in when the environment has been captured, then save the field evaluation configuration.

*Teach-in configuration in SOPASair.*

The configured distances take effect during the next teach-in. Keep the intended environment stable while the contour is captured.

Teach-in uses the same evaluation group and output mechanism as a manually configured field. After the contour has been captured, monitor the evaluation result through the configured output, REST, CoLa, or WebSocket events.

### Teach in over the API

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

## Ground Filter (multiScan100)

The ground filter uses upper and lower ground thresholds to reduce false
field-evaluation triggers caused by the ground. When configured correctly, it
retains small objects such as forklift tines and can be used indoors and
outdoors. The filter also affects perpendicular-distance evaluations. See
[Ground Filter](../data-streaming/filter-details.md#ground-filter) for
availability and API settings.

*multiScan1xx: Ground-filter behavior in a field application.*

## Related Articles

- [picoScan150: Field Evaluation and Perpendicular Distance API Possibilities](https://support.sick.com/sick-knowledgebase/article/?code=KA-10798)
