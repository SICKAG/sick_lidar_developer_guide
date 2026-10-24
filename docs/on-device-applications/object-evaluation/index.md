# LiDAR Object Evaluation with multiScan100

> Learn how multiScan100 Object Evaluation provides object size, speed, and direction for decisions based on predefined object criteria.

Source: https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/object-evaluation/

# Object Evaluation

Compatible with: multiScan100

**Object Evaluation** turns raw LiDAR measurements into directly usable object
information. The sensor provides properties such as object size, speed, and
direction, enabling decisions based on predefined object criteria rather than
simple field infringements. This supports more targeted applications, for
example reacting only to objects approaching an access gate while ignoring
objects moving past it.

Object Evaluation was introduced in multiScan100 firmware 2.5.0. Check your
device variant and installed software package before using the feature.
See the [firmware release notes](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/release-notes/#firmware-250).

<p class="table-caption">Object Evaluation: input, sensor-side processing, and application output.</p>

| Stage | Information |
| --- | --- |
| Input | LiDAR measurements and configured object criteria. |
| Processing | Evaluate detected objects against predefined criteria. |
| Output | Object information, including size, speed, and direction, for application decisions. |

*multiScan100 Object Evaluation example: use the largest object after merging.*
