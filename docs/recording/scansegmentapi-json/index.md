# Record LiDAR Data as JSON with ScanSegmentAPI

> Receive LRS4000, multiScan100, or picoScan100 Compact or MSGPACK data with the Python ScanSegmentAPI for offline analysis and tests.

Source: https://sickag.github.io/sick_lidar_developer_guide/recording/scansegmentapi-json/

# ScanSegmentAPI | JSON

Compatible with: LRS4000 multiScan100 picoScan100

Compact or MSGPACK data can be received with [ScanSegmentAPI](https://github.com/SICKAG/ScanSegmentAPI) and stored as JSON.
The Python ScanSegmentAPI supports LRS4000, multiScan100, and picoScan100; MSGPACK is available where the selected device supports that format. Use this workflow to create portable recordings for analysis, testing, and replay without requiring the sensor to remain connected.

Install the project with [Poetry](https://python-poetry.org/) and run the JSON example:

```bash
git clone https://github.com/SICKAG/ScanSegmentAPI.git
cd ScanSegmentAPI
poetry install
poetry run python examples/store_segments_json_compact.py
```

Before you run it, set `IP`, `PORT`, and `TRANSPORT_PROTOCOL` at the top of the script. For UDP, `IP` is the receiving computer; for TCP, it is the sensor. The script stores 200 segments in `segments.json`. For MSGPACK, use `store_segments_json_msgpack.py`. See [Using the ScanSegmentAPI from Python](https://github.com/SICKAG/ScanSegmentAPI#using-the-scansegmentapi-from-python) in the README for the API.

*picoScan100 example: Record measurement data as JSON with ScanSegmentAPI for offline analysis and replay.*
