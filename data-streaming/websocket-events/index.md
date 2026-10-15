# WebSocket Events

Instead of polling the REST API for state, you can open one persistent WebSocket connection, register the events you care about, and the device pushes a JSON frame every time a value changes. Use it for low-latency notifications: field-evaluation results, I/O switching, temperature alarms, firmware-update progress.

## Endpoint and Connection

```txt
ws://<device-ip>/apievents
```

Port 80 is used, and no authentication is required to open the connection.
No periodic ping/keep-alive is needed.
Every event has a matching REST endpoint of the same name; the `data` payload is identical to `GET /api/<EventName>`. Use REST for one-shot reads/writes, WebSocket for change notifications.

The device sends compressed frames (`RSV1 = 1`). Your WebSocket library must negotiate the `permessage-deflate` extension during the handshake, or the device closes the connection with protocol error 1002. Libraries that auto-negotiate (e.g. C++ `httplib::WebSocketClient`) work out of the box; Python's `websocket-client` does not do this by default, so use a library that negotiates it, or enable compression explicitly.

## Message Format

All messages are JSON text frames. Five types are used.

Register (client → device): one message per event, where `clientId` is a caller-chosen integer echoed back for that registration.

```json
{ "type": "register", "event": "temperatureAlarmStatus", "clientId": 1 }
```

Registration confirmation (device → client): on success (`status: 0`) the device immediately sends the current value. Dispatch it exactly like a live event; it is your first data point.

```json
{ "type": "register", "event": "temperatureAlarmStatus", "clientId": 1,
  "status": 0, "data": { "AlarmState": "NoAlarm" } }
```

Event push (device → client): sent whenever the value changes.

```json
{ "type": "event", "event": "temperatureAlarmStatus", "clientId": 1,
  "status": 0, "data": { "AlarmState": "OverTemp" } }
```

Error (device → client): sent for an unknown or unavailable event. The connection stays open and other registrations are unaffected.

```json
{ "type": "register", "event": "nonExistentEvent", "clientId": 2,
  "status": 1, "error": "Failed to register event ... Does the event exist?" }
```

Deregister (client → device): no response is sent.

```json
{ "type": "deregister", "event": "temperatureAlarmStatus", "clientId": 1 }
```

## Step by Step

Send registration messages one at a time with at least 200 ms between consecutive frames. If several `register` frames arrive in a tight burst the device resets the connection. The delay is only needed during the initial registration sequence.

1. Open the WebSocket to `ws://<device-ip>/apievents` (with `permessage-deflate`).
2. Register your events, one `register` per event, unique `clientId`, at least 200 ms apart.
3. Receive initial values: each successful registration replies with `type: "register"`, `status: 0`, and the current value in `data`. Dispatch it like a live event.
4. Handle events: keep reading; on change the device pushes `type: "event"`.
5. Handle errors and reconnect: log any `status != 0`; other registrations still work.

## Dispatch Pattern

Dispatch on both `type` and `status` so you also catch the initial value. The snippets are language-neutral pseudocode:

```python
connection = websocket_connect(
    "ws://<device-ip>/apievents",
    compression="permessage-deflate",
)
```

```python
for client_id, event_name in enumerate(events):
    connection.send({
        "type": "register",
        "event": event_name,
        "clientId": client_id,
    })
    sleep(milliseconds=200)
```

```python
while connection.is_open():
    obj = json_parse(connection.receive())

    if obj["type"] == "event" or (
        obj["type"] == "register" and obj["status"] == 0
    ):
        dispatch(obj["event"], obj["data"])
    elif obj["type"] == "register" and obj["status"] != 0:
        log_error(obj["event"], obj["error"])
```

## Advanced: Throttle and Queue

Pass an optional `options` object when registering.

Throttle caps delivery frequency; excess events are dropped before queuing:

```json
{ "type": "register", "event": "LSPdatetime", "clientId": 7,
  "options": { "throttle": { "minOutputIntervalMs": 5000 } } }
```

Queue means each event has its own per-event queue on the shared connection:

```json
"options": { "queue": { "priority": "HIGH", "maxSize": 10, "discardIfFull": "OLDEST" } }
```

<p class="table-caption" markdown>**Advanced: Throttle and Queue:** field, values, default, and meaning.</p>

| Field | Values | Default | Meaning |
| --- | --- | --- | --- |
| `priority` | `HIGH`, `MID`, `LOW` | `MID` | Processing priority among events on this connection |
| `maxSize` | integer | 1 | Maximum buffered events |
| `discardIfFull` | `OLDEST`, `NEWEST` | `OLDEST` | Which event to drop when full |

## Subscribable Events

Event names are case-sensitive. Full data schemas are in the OpenAPI spec under the matching `GET` endpoint.

<p class="table-caption" markdown>**Subscribable Events:** event and typical trigger.</p>

| Event | Typical trigger |
| --- | --- |
| `DeviceStatus` | Device operational state changes |
| `SCdevicestate` | Safety controller state |
| `FieldEvaluationResult` | Object enters/leaves a detection field |
| `perpendicularDistanceResult` | Perpendicular-distance result changes |
| `InputState` / `OutputState` / `PortState` | Digital I/O state changes (`PortState` preferred) |
| `ContaminationData` / `ContaminationResult` | Lens contamination per sector / global result |
| `InertialMeasurementUnit` | Live IMU data |
| `CurrentTempDev` / `temperatureAlarmStatus` | Temperature (°C) / alarm threshold crossed |
| `UpdateState` | Firmware-update progress |
| `LSPdatetime` | Device clock tick (every second) |

## Test with Insomnia

Before wiring subscriptions into your app, verify them interactively. The video below shows how to open the connection, register an event, and receive WebSocket frames in [Insomnia](https://insomnia.rest/).

## Reliability and Reconnect

The device may close the connection on network interruption or firmware restart, and no subscription state is preserved across connections. On a close event, wait, reconnect, and re-register every subscription.

## Troubleshooting

<p class="table-caption" markdown>**Troubleshooting:** symptom, likely cause, and fix.</p>

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Connection refused | Wrong IP / not reachable | Ping the device; check firewall |
| Resets after first registration | Register frames sent too fast | ≥ 200 ms between `register` messages |
| Closes immediately (error 1002) | `permessage-deflate` not negotiated | Use a library that negotiates it, or enable compression |
| "Event not found" | Wrong name (case-sensitive) or absent on this firmware | Check the exact name; confirm firmware |
| No events after registration | Value hasn't changed; events are change-driven | Expected; the initial value is still sent on registration |
| Stale app state at startup | Dispatch filter only accepts `type == "event"` | Also dispatch `type == "register"` with `status == 0` |
| Frequent drops | Read timeout too short | Set read timeout ≥ 300 s; events can be infrequent |

Test subscriptions from a plain browser (Chrome/Edge) or from Insomnia/Postman before wiring them into your app. Wireshark on the sensor interface shows the raw WebSocket traffic.
