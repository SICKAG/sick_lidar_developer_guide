# Mounting Simulator for multiScan100 and multiScan200

> Simulate multiScan100 and multiScan200 mounting height and tilt: field of view, shadows, and scan points on objects and standard test targets.

Source: https://sickag.github.io/sick_lidar_developer_guide/simulation/mounting-simulator/

# Mounting Simulator {#mounting-simulator}

Compatible with: multiScan100 multiScan200

<noscript>This simulator requires JavaScript.</noscript>
<div class="calculator mounting-sim" data-mounting-simulator>
<svg class="mounting-sim__view" data-sim-view role="img" aria-label="Side view of the sensor, scan layers, field of view, ground hits, objects, and shadows"></svg>
<div class="calculator__results">
<p class="calculator__heading">Simulated Result</p>
<div data-sim-results aria-live="polite"></div>
<div class="calculator__status" data-sim-status data-state="info" aria-live="polite">Loading the simulator…</div>
</div>
</div>
*Side view. Light blue: field of view. Blue: beams in range, thick: high-resolution layers; gray: out of range. Object color: remission (dark gray 10 %, white 90 %, honeycomb reflector). Hatched: shadow.*

## Test Targets {#test-targets}

Besides box and person, the simulator offers test targets from standards in a fixed size.

<p class="table-caption" markdown>**Test Targets:** model, dimensions, and source.</p>

| Model                                           | Dimensions                                                                                 | Source                                                   |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| Person test object representing a seated person | Lower cylinder: Ø 380 mm × 530 mm; upper cylinder: Ø 140 mm × 270 mm; total height: 800 mm | ISO 18497:2018; verify against the ISO 18497:2024 series |
| 1-year-old child pedestrian target              | Body height: 658 mm; shoulder width: 172 mm; head width: 109 mm                            | ISO 19206-2:2018                                         |

The simulator models the test targets with cylinders and spheres, and its results are an estimate. Always test the mounting with the real device and, for acceptance tests, the physical test target. For a detailed simulation, use [NVIDIA Isaac Sim](https://sickag.github.io/sick_lidar_developer_guide/simulation/nvidia-isaac-sim/) with the SICK models for NVIDIA Omniverse.
