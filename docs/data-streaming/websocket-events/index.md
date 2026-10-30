# WebSocket Event API for multiScan200 and picoScan100

> Subscribe to multiScan200 and picoScan100 change events over ws://<ip>/apievents: permessage-deflate, register messages, throttling, queues, and event list.

Source: https://sickag.github.io/sick_lidar_developer_guide/data-streaming/websocket-events/

# WebSocket Events

Compatible with: multiScan200 picoScan100

Instead of polling the REST API for state, you can open one persistent WebSocket connection, register the events you care about, and the device pushes a JSON frame every time a value changes. Use it for low-latency notifications: field-evaluation results, I/O switching, temperature alarms, firmware-update progress.

## Endpoint and Connection

```txt
ws://<device-ip>/apievents
```

Port 80 is used, and no authentication is required to open the connection.
No periodic ping/keep-alive is needed.
Every event has a matching REST endpoint of the same name; the `data` payload is identical to `GET /api/<EventName>`. Use REST for one-shot reads/writes, WebSocket for change notifications.
See the [multiScan200](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/) and [picoScan100](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/api-rest-openapi/) REST API references for the corresponding endpoint definitions. An event is available only where the device has the matching endpoint.

Compression depends on the device firmware. multiScan200 (firmware >1.1.0) and picoScan150 (firmware >2.3.3), the handshake does not negotiate `permessage-deflate`, and event registrations works with compression both enabled and disabled.

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

1. Open the WebSocket to `ws://<device-ip>/apievents`; let the client negotiate any supported extensions.
2. Register your events, one `register` per event, unique `clientId`, at least 200 ms apart.
3. Receive initial values: each successful registration replies with `type: "register"`, `status: 0`, and the current value in `data`. Dispatch it like a live event.
4. Handle events: keep reading; on change the device pushes `type: "event"`.
5. Handle errors and reconnect: log any `status != 0`; other registrations still work.

## Python Example

This script uses the [`websockets`](https://pypi.org/project/websockets/)
library (`pip install websockets`), which negotiates supported extensions
automatically. It registers two events 200 ms apart and dispatches the initial
values and all later changes:

```python
import asyncio
import json

import websockets

DEVICE_IP = "192.168.0.1"
EVENTS = ["CurrentTempDev", "DeviceStatus"]


async def main():
    async with websockets.connect(f"ws://{DEVICE_IP}/apievents", ping_interval=None) as ws:
        for client_id, event in enumerate(EVENTS, start=1):
            await ws.send(json.dumps({"type": "register", "event": event, "clientId": client_id}))
            await asyncio.sleep(0.2)
        async for message in ws:
            msg = json.loads(message)
            if msg.get("status", 0) != 0:
                print("Error:", msg["event"], msg.get("error"))
            elif msg["type"] in ("register", "event"):
                print(msg["event"], msg["data"])


asyncio.run(main())
```

Example code: [MIT License](https://opensource.org/license/mit), © 2026 SICK AG. Provided as is, without warranty. Test it before you use it with a machine or in production.

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

<p class="table-caption" markdown>**Subscribable Events:** event, typical trigger, and devices.</p>

| Event | Typical trigger | Devices |
| --- | --- | --- |
| `DeviceStatus` | Device operational state changes | multiScan200, picoScan100 |
| `SCdevicestate` | Safety controller state | multiScan200, picoScan100 |
| `FieldEvaluationResult` | Object enters/leaves a detection field | multiScan200, picoScan150 |
| `perpendicularDistanceResult` | Perpendicular-distance result changes | picoScan150 |
| `OutputState` / `PortState` | Digital I/O state changes (`PortState` preferred) | multiScan200, picoScan100 |
| `InputState` | Digital input state changes | multiScan200, picoScan150 |
| `ContaminationData` / `ContaminationResult` | Lens contamination per sector / global result | multiScan200, picoScan150 |
| `InertialMeasurementUnit` | Live IMU data | multiScan200, picoScan150 |
| `CurrentTempDev` | Device temperature (°C) | multiScan200, picoScan100 |
| `temperatureAlarmStatus` | Temperature alarm threshold crossed | multiScan200 |
| `UpdateState` | Firmware-update progress | multiScan200, picoScan100 |
| `LSPdatetime` | Device clock tick (every second) | multiScan200, picoScan100 |

"picoScan100" means both the picoScan120 and the picoScan150. The message examples above use `temperatureAlarmStatus`; on the picoScan100, use `CurrentTempDev` instead.

## Test with Insomnia

Before wiring subscriptions into your app, verify them interactively in [Insomnia](https://insomnia.rest/):

1. Create a WebSocket request to `ws://<device-ip>/apievents` and click **Connect**.
2. Send one register message, for example `{ "type": "register", "event": "CurrentTempDev", "clientId": 1 }`.
3. Check the received messages: the registration reply with the current value comes first, then one `event` message per change.

## Reliability and Reconnect

The device may close the connection on network interruption or firmware restart, and no subscription state is preserved across connections. On a close event, wait, reconnect, and re-register every subscription.

## Troubleshooting

<p class="table-caption" markdown>**Troubleshooting:** symptom, likely cause, and fix.</p>

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Connection refused | Wrong IP / not reachable | Ping the device; check firewall |
| Resets after first registration | Register frames sent too fast | ≥ 200 ms between `register` messages |
| Closes immediately (error 1002) | Frame or extension negotiation mismatch | Check `Sec-WebSocket-Extensions` and firmware; use a client compatible with the negotiated extensions |
| "Event not found" | Wrong name (case-sensitive) or absent on this firmware | Check the exact name; confirm firmware |
| No events after registration | Value hasn't changed; events are change-driven | Expected; the initial value is still sent on registration |
| Stale app state at startup | Dispatch filter only accepts `type == "event"` | Also dispatch `type == "register"` with `status == 0` |
| Frequent drops | Read timeout too short | Set read timeout ≥ 300 s; events can be infrequent |

Test subscriptions from a plain browser (Chrome/Edge) or from Insomnia/Postman before wiring them into your app. Wireshark on the sensor interface shows the raw WebSocket traffic.
