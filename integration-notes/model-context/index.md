# Model Context

When developing an application for a SICK LiDAR sensor, you can clone the
relevant documentation or code repository into your project workspace. A local
copy gives your coding assistant access to the repository's examples,
configuration files, API usage, and implementation details while you work.

Clone the
[SICK LiDAR Developer Guide](https://github.com/SICKAG/sick_lidar_developer_guide)
repository alongside your application:

```sh
git clone https://github.com/SICKAG/sick_lidar_developer_guide.git
```

Keep the clone up-to-date when you need the latest context:

```sh
git -C sick_lidar_developer_guide pull
```

This repository-based approach provides source context for your development
tools. It is **not an MCP server** and does not expose an MCP tool or service.
