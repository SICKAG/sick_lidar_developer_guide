# REST API | OpenAPI

![OpenAPI](../assets/openapi-logo.png)

This page provides the downloadable OpenAPI description and interactive
endpoint reference for the multiScan100 family. For REST concepts,
authentication, and request patterns, see
[REST API / OpenAPI](../configuration/rest-interface.md).

## OpenAPI File

- [multiScan100 firmware 2.4.4 - OpenAPI (YAML)](../assets/multiScan100/openapi/multiScan100_V2.4.4_OpenApi.yaml)

Always match the file to your device's actual firmware version. Function
availability can vary by variant and installed software package.

The `ScanDataFormat` schema lists the value `4` (`NativeROS2`). The
multiScan100 does not support native ROS 2. To use the multiScan100 with
ROS 2, run the [sick_scan_xd](../integration-notes/ros-integration.md#sick_scan_xd)
driver on the host.

## Interactive Endpoint Reference

The full endpoint reference below is rendered directly from the OpenAPI file
above. Expand an endpoint to see its parameters, request body, and response
schema, or use **Try it out** against a reachable device. Writes still require
[challenge-response authentication](../configuration/rest-interface.md#challenge-response-authentication).

For the general REST API explanation and authentication details, return to
[REST API / OpenAPI](../configuration/rest-interface.md).

## Related Articles

<!-- SICK video: 0_dtzhjazd; source: https://support.sick.com/sick-knowledgebase/article?id=f27c99cc-1a57-f011-877b-000d3a48f570 -->
*How to use the OpenAPI file with Insomnia.*
