(() => {
  const MULTISCAN100_FILTERS = {
    Particle: "LFPparticle",
    Fog: "MCSenseLevel",
    "Moving average": "LFPmovingAveragingFilter",
    Distance: "LFPradialDistanceRangeFilter",
    Rectangular: "LFPcubicareafilter",
    "Ground (configuration-dependent)": "groundFilterEnable",
  };
  const PROFILES = {
    LRS4000: {
      label: "LRS4000",
      transport: "TCP",
      fov: 360,
      filters: {
        Particle: "ParticleFilter",
        Mean: "MeanFilter",
        Median: "LFPmedianfilter",
        Distance: "LFPradialDistanceRangeFilter",
        "Output angle range": "DataOutputRange",
      },
      configs: [
        ...[0.02, 0.04, 0.06, 0.1, 0.12].map((h) => ({ label: `12.5 Hz, ${h}°`, h, hz: 12.5 })),
        ...[0.04, 0.08, 0.12, 0.2, 0.24].map((h) => ({ label: `25 Hz, ${h}°`, h, hz: 25 })),
      ],
    },
    multiScan136: {
      label: "multiScan136",
      transport: "UDP",
      imu: true,
      fov: 360,
      filters: MULTISCAN100_FILTERS,
      elevations: [
        22.7, 17.5, 12.5, 7.4, 2.5, 0, -2.4, -7.3, -12.8, -17.3, -22, -26.8, -31.9, -34.4, -37.2,
        -42.8,
      ],
      configs: [
        { label: "20 Hz: 2 × 0.125° + 14 × 1°", h: 1, hz: 20 },
        {
          label: "20 Hz frames, 4× interlaced: 0.25° combined at 5 Hz",
          h: 1,
          hz: 20,
          interlace: 4,
        },
        {
          label: "20 Hz frames, 8× interlaced: 0.125° combined at 2.5 Hz",
          h: 1,
          hz: 20,
          interlace: 8,
        },
      ],
    },
    multiScan165: {
      label: "multiScan165",
      transport: "UDP",
      imu: true,
      fov: 360,
      filters: MULTISCAN100_FILTERS,
      elevations: [
        7.3, 2.4, 0, -2.5, -5.4, -7.4, -10, -12.5, -14.7, -17.5, -19.6, -22.7, -24.7, -27.3, -29.9,
        -35.3,
      ],
      modules: [0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1],
      configs: [
        { label: "20 Hz: 16 × 0.5°", h: 0.5, hz: 20 },
        {
          label: "20 Hz frames, 2× interlaced: 0.25° combined at 10 Hz",
          h: 0.5,
          hz: 20,
          interlace: 2,
        },
        {
          label: "20 Hz frames, 4× interlaced: 0.125° combined at 5 Hz",
          h: 0.5,
          hz: 20,
          interlace: 4,
        },
      ],
    },
    multiScan166: {
      label: "multiScan166",
      transport: "UDP",
      imu: true,
      fov: 360,
      filters: MULTISCAN100_FILTERS,
      elevations: [
        22.7, 17.5, 12.5, 7.4, 2.5, 0, -2.4, -7.3, -12.8, -17.3, -22, -26.8, -31.9, -34.4, -37.2,
        -42.8,
      ],
      configs: [
        { label: "20 Hz: 2 × 0.125° + 14 × 1°", h: 1, hz: 20 },
        {
          label: "20 Hz frames, 4× interlaced: 0.25° combined at 5 Hz",
          h: 1,
          hz: 20,
          interlace: 4,
        },
        {
          label: "20 Hz frames, 8× interlaced: 0.125° combined at 2.5 Hz",
          h: 1,
          hz: 20,
          interlace: 8,
        },
      ],
    },
    multiScan270: {
      label: "multiScan270",
      transport: "TCP",
      imu: true,
      imuType: 7,
      fov: 276,
      filters: {
        Particle: "particleFilter",
        Blooming: "bloomingFilter",
        "High precision (temporal averaging)": "enableHighPrecisionMode",
      },
      unmodeledFilters: ["Angle range focus: vertical range, focus region"],
      configs: [
        { label: "1: 276°, 0.47° × 0.47°, 20 Hz", fov: 276, h: 0.46875, columns: 592, layers: 96, hz: 20 },
        { label: "2: 276°, 0.47° × 0.94°, 20 Hz", fov: 276, h: 0.46875, layers: 48, hz: 20 },
        { label: "3: 276°, 0.47° × 0.23°, 20 Hz", fov: 276, h: 0.46875, layers: 192, hz: 20 },
        { label: "4: 360°, 0.47° × 0.47°, 10 Hz", fov: 360, h: 0.46875, layers: 96, hz: 10 },
        {
          label: "10: 276°, 0.23° × 0.47°, 20 Hz, 2× interlaced",
          fov: 276,
          h: 0.46875,
          layers: 96,
          hz: 20,
          interlace: 2,
        },
        {
          label: "11: 276°, 0.23° × 0.23°, 20 Hz, 2× interlaced",
          fov: 276,
          h: 0.46875,
          layers: 192,
          hz: 20,
          interlace: 2,
        },
        {
          label: "12: 276°, 0.12° × 0.23°, 20 Hz, 4× interlaced",
          fov: 276,
          h: 0.46875,
          layers: 192,
          hz: 20,
          interlace: 4,
        },
        { label: "20: 190°, 0.47° × 0.47°, 20 Hz", fov: 190, h: 0.46875, layers: 96, hz: 20 },
        { label: "21: 120°, 0.47° × 0.47°, 20 Hz", fov: 120, h: 0.46875, layers: 96, hz: 20 },
      ],
    },
    picoScan150: {
      label: "picoScan150",
      transport: "UDP",
      imu: true,
      encoder: true,
      fov: 276,
      filters: {
        Particle: "LFPparticle",
        Fog: "MCSenseLevel",
        "Moving average": "LFPmovingAveragingFilter",
        Distance: "LFPradialDistanceRangeFilter",
        Rectangular: "LFPcubicareafilter",
      },
      configs: [
        [15, 0.5],
        [15, 1 / 3],
        [20, 0.1],
        [20, 0.25],
        [25, 0.25],
        [30, 0.1],
        [40, 0.25],
        [50, 0.25],
        [15, 0.05],
        [40, 0.125],
        [15, 1],
      ].map(([hz, h], index) => ({
        label: `Profile ${index + 1}: ${hz} Hz, ${Number(h.toFixed(3))}°`,
        hz,
        h,
      })),
    },
  };

  const MTU = 1500;
  const COMPACT_TYPE2_BYTES = 64;
  const COMPACT_TYPE7_BYTES = 88;
  const COMPACT_TYPE4_BYTES = 88;
  const IMU_OUTPUT_HZ = 100;

  const networkSize = (bytes, transport) => {
    if (bytes === 0) return { bytes: 0, packets: 0 };
    if (transport === "TCP") {
      const mss = MTU - 40;
      const fullPackets = Math.floor(bytes / mss);
      const remainder = bytes % mss;
      return {
        bytes: fullPackets * (mss + 78) + (remainder ? Math.max(84, remainder + 78) : 0),
        packets: fullPackets + (remainder ? 1 : 0),
      };
    }
    // Fragment the UDP datagram, not each fragment as a new UDP datagram.
    const fragmentSize = Math.floor((MTU - 20) / 8) * 8;
    let remaining = bytes + 8;
    let wireBytes = 0;
    let packets = 0;
    while (remaining > 0) {
      const payload = Math.min(remaining, fragmentSize);
      wireBytes += Math.max(84, payload + 58);
      remaining -= payload;
      packets += 1;
    }
    return { bytes: wireBytes, packets };
  };

  const compactType1Size = (modules, echoes, rssi, properties, azimuth, version) =>
    36 +
    modules.reduce(
      (sum, { layers, beams }) =>
        sum +
        (version === 4 ? 44 : 40) +
        28 * layers +
        layers * beams * (echoes * (2 + (rssi ? 2 : 0)) + (properties ? 1 : 0) + (azimuth ? 2 : 0)),
      0,
    );

  const compactType6Size = (columns, layers, echoes, rssi, properties, ambientLayers) =>
    168 +
    4 * layers +
    10 * columns +
    2 * columns * layers * echoes +
    (rssi ? Math.ceil(1.5 * columns * layers * echoes) : 0) +
    (properties ? columns * layers * echoes : 0) +
    2 * columns * ambientLayers;

  const estimate = (s) => {
    const profile = PROFILES[s.device];
    if (!profile || !Number.isInteger(s.config) || !profile.configs[s.config]) {
      throw new RangeError("Select a supported device and scan configuration.");
    }
    const config = profile.configs[s.config];
    if (s.format !== undefined && s.format !== "Compact")
      throw new RangeError("Only Compact scan output is supported.");
    if (s.imu !== undefined && typeof s.imu !== "boolean")
      throw new RangeError("IMU selection must be a checkbox value.");
    if (s.encoder !== undefined && typeof s.encoder !== "boolean")
      throw new RangeError("Encoder selection must be a checkbox value.");
    if (s.imu && !profile.imu) throw new RangeError("IMU output is not supported for this device.");
    if (s.encoder && !profile.encoder)
      throw new RangeError("Encoder output is not supported for this device.");
    const integer = (key, min, max) => {
      if (!Number.isInteger(s[key]) || s[key] < min || s[key] > max) {
        throw new RangeError(`${key} must be an integer from ${min} to ${max}.`);
      }
    };
    integer("interval", 1, s.device === "LRS4000" ? 1 : 50);
    if (![3, 4].includes(s.version)) throw new RangeError("Compact version must be 3 or 4.");
    const fov = config.fov || profile.fov;
    if (
      ![s.start, s.stop].every(Number.isFinite) ||
      s.start < -fov / 2 ||
      s.stop > fov / 2 ||
      s.start >= s.stop
    ) {
      throw new RangeError(`Enter ordered horizontal angles within ±${fov / 2}°.`);
    }
    if (
      !["first", "last", "all", "strongest", "allStrongest"].includes(s.echo) ||
      (s.device !== "multiScan270" && ["strongest", "allStrongest"].includes(s.echo))
    ) {
      throw new RangeError("Select a supported echo filter.");
    }
    const echoes = s.echo.startsWith("all") ? 3 : 1;
    const warnings = [];
    const sizes = [];
    let points = 0;
    if (s.device === "multiScan270") {
      const layers = config.layers;
      const columns = config.columns ?? Math.ceil(fov / config.h);
      sizes.push(
        compactType6Size(columns, layers, echoes, s.rssi, s.properties, s.ambient ? layers : 0),
      );
      points = columns * layers;
      warnings.push(
        config.columns
          ? `Type 6: ${columns} columns verified on firmware 1.1.1; one telegram per frame.`
          : "Type 6: nominal 0.46875° grid; column count not live-verified for this profile. One telegram per frame.",
      );
    } else {
      const isMulti = Boolean(profile.elevations);
      if (
        isMulti &&
        (!Array.isArray(s.layers) ||
          s.layers.length !== 16 ||
          s.layers.some((v) => typeof v !== "boolean"))
      ) {
        throw new RangeError("Select the enabled layers using the layer checkboxes.");
      }
      const lrs = s.device === "LRS4000";
      const segmentAngle = lrs
        ? fov
        : s.device === "picoScan150"
          ? config.hz >= 30
            ? 60
            : 30
          : 30;
      const segments = Math.ceil(fov / segmentAngle);
      const rawMulti = isMulti && s.preformat === "raw";
      for (let index = 0; index < segments; index += 1) {
        const start = -fov / 2 + index * segmentAngle;
        const stop = Math.min(start + segmentAngle, fov / 2);
        if (!lrs && !rawMulti && (stop <= s.start || start >= s.stop)) continue;
        const groups = new Map();
        const elevations = profile.elevations || [0];
        elevations.forEach((_, layer) => {
          if (isMulti && !s.layers[layer]) return;
          const h = ["multiScan136", "multiScan166"].includes(s.device) && [5, 13].includes(layer) ? 0.125 : config.h;
          // Measured on picoScan150: the edge segment beyond the FOV is still sent full-width.
          const beams = Math.ceil(segmentAngle / h);
          const key = `${isMulti ? (profile.modules ? profile.modules[layer] : Math.floor(layer / 8)) : 0}:${h}`;
          const group = groups.get(key) || { layers: 0, beams };
          group.layers += 1;
          groups.set(key, group);
        });
        const modules = [...groups.values()];
        if (!modules.length) continue;
        const segmentPoints = modules.reduce((sum, m) => sum + m.layers * m.beams, 0);
        points += segmentPoints;
        // picoScan150 firmware 2.3.3 includes azimuth; its GUI has no switch for it.
        const azimuth = s.device === "picoScan150" || s.azimuth;
        sizes.push(compactType1Size(modules, echoes, s.rssi, s.properties, azimuth, s.version));
      }
      if (!lrs) warnings.push("Partially selected segments retain their full size.");
      if (rawMulti) warnings.push("Raw layer timing differs: all 12 segments are included.");
      if (isMulti && !rawMulti)
        warnings.push("Rectified segment count is approximate; layer azimuths can differ.");
    }
    if (config.interlace)
      warnings.push(
        `Interlace combines ${config.interlace} physical frames; it does not multiply the data rate.`,
      );
    const scanFrameBytes = sizes.reduce((sum, size) => sum + size, 0);
    const imuBytes = s.imu ? (profile.imuType === 7 ? COMPACT_TYPE7_BYTES : COMPACT_TYPE2_BYTES) : 0;
    const encoderBytes = s.encoder ? COMPACT_TYPE4_BYTES : 0;
    const telegramSizes = [
      ...sizes,
      ...(imuBytes ? [imuBytes] : []),
      ...(encoderBytes ? [encoderBytes] : []),
    ];
    const frameBytes = scanFrameBytes + encoderBytes;
    const hz = config.hz / s.interval;
    const scanNetwork = [...sizes, ...(encoderBytes ? [encoderBytes] : [])].map((size) =>
      networkSize(size, profile.transport),
    );
    const imuNetwork = imuBytes ? networkSize(imuBytes, profile.transport) : { bytes: 0, packets: 0 };
    const wireBytes =
      scanNetwork.reduce((sum, n) => sum + n.bytes, 0) * hz + imuNetwork.bytes * IMU_OUTPUT_HZ;
    const packets =
      scanNetwork.reduce((sum, n) => sum + n.packets, 0) * hz +
      imuNetwork.packets * IMU_OUTPUT_HZ;
    if (profile.transport === "UDP" && telegramSizes.some((size) => size + 28 > MTU)) {
      warnings.push("UDP requires IPv4 fragmentation at MTU 1500.");
    }
    if (s.ambient)
      warnings.push("Ambient light: matching mode only; full-resolution output may be larger.");
    if (imuBytes) warnings.push("IMU telegrams are estimated at 100 Hz, independently of scan frequency.");
    if (encoderBytes) warnings.push("Encoder telegrams are estimated once per output scan frame.");
    return {
      frameBytes,
      scanFrameBytes,
      imuBytes,
      imuHz: imuBytes ? IMU_OUTPUT_HZ : 0,
      encoderBytes,
      bytesPerSecond: frameBytes * hz + imuBytes * IMU_OUTPUT_HZ,
      wireBytesPerSecond: wireBytes,
      packetsPerSecond: packets,
      segments: sizes.length,
      largestTelegram: telegramSizes.length ? Math.max(...telegramSizes) : 0,
      points,
      hz,
      echoes,
      transport: profile.transport,
      warnings,
    };
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { PROFILES, networkSize, compactType1Size, compactType6Size, estimate };
    return;
  }

  const initialize = (root) => {
    if (root.dataset.initialized === "true") return;
    const form = root.querySelector("form");
    const status = root.querySelector("[data-bandwidth-status]");
    const result = root.querySelector("[data-bandwidth-results]");
    if (!form || !status || !result) {
      console.error("Bandwidth calculator is missing its form or results.");
      return;
    }
    root.dataset.initialized = "true";
    form.addEventListener("submit", (event) => event.preventDefault());
    const fields = new Map();
    const add = (parent, key, label, options) => {
      const row = document.createElement("label");
      row.append(document.createTextNode(label));
      const input = document.createElement(Array.isArray(options) ? "select" : "input");
      input.name = key;
      if (Array.isArray(options)) {
        options.forEach(([value, text]) => input.add(new Option(text, value)));
      } else {
        Object.assign(input, options);
      }
      row.append(input);
      parent.append(row);
      fields.set(key, input);
      return input;
    };
    const number = (parent, key, label, value, min, max, step = "1") =>
      add(parent, key, label, {
        type: "number",
        value: String(value),
        min: String(min),
        max: String(max),
        step,
        required: true,
      });
    const toggle = (parent, key, label, checked = false) =>
      add(parent, key, label, { type: "checkbox", checked });
    const device = add(
      form,
      "device",
      "Device",
      Object.entries(PROFILES).map(([key, p]) => [key, p.label]),
    );
    const controls = document.createElement("div");
    form.append(controls);
    const rebuild = () => {
      const profile = PROFILES[device.value];
      fields.clear();
      fields.set("device", device);
      controls.replaceChildren();
      const config = add(
        controls,
        "config",
        "Scan configuration",
        profile.configs.map((p, i) => [String(i), p.label]),
      );
      const configurable = document.createElement("div");
      controls.append(configurable);
      const configure = () => {
        for (const key of [...fields.keys()])
          if (!["device", "config"].includes(key)) fields.delete(key);
        configurable.replaceChildren();
        const p = profile.configs[Number(config.value)];
        const multi200 = device.value === "multiScan270";
        const lrs = device.value === "LRS4000";
        const multi100 = Boolean(profile.elevations);
        const fov = p.fov || profile.fov;
        const echoOptions = [
          ["first", "First echo"],
          ["last", "Last echo"],
          ["all", "All echoes (3)"],
        ];
        if (multi200)
          echoOptions.push(
            ["strongest", "Strongest echo"],
            ["allStrongest", "All, strongest first (3)"],
          );
        add(configurable, "echo", "Echo filter", echoOptions);
        toggle(configurable, "rssi", "Include RSSI", true);
        // picoScan150 2.3.3 sent beam properties in every live capture.
        toggle(
          configurable,
          "properties",
          multi200 ? "Include echo properties" : "Include beam properties",
          device.value === "picoScan150",
        );
        if (multi100 || lrs) toggle(configurable, "azimuth", "Include per-beam azimuth", multi100);
        if (multi200) toggle(configurable, "ambient", "Include ambient light (matching mode)");
        if (profile.imu)
          toggle(
            configurable,
            "imu",
            `Include IMU data${profile.imuType === 7 ? " (Compact type 7)" : ""}`,
          );
        if (profile.encoder) toggle(configurable, "encoder", "Include encoder data");
        if (!lrs) number(configurable, "interval", "Output interval (1 = off)", 1, 1, 50);
        if (!lrs) {
          number(
            configurable,
            "start",
            "Angle range: horizontal start [°]",
            -fov / 2,
            -fov / 2,
            fov / 2,
            "any",
          );
          number(
            configurable,
            "stop",
            "Angle range: horizontal stop [°]",
            fov / 2,
            -fov / 2,
            fov / 2,
            "any",
          );
        }
        if (multi100) {
          add(configurable, "preformat", "Data preformatting", [
            ["raw", "Raw (conservative estimate)"],
            ["rectified", "Rectified (approximate sectors)"],
          ]);
          const layers = document.createElement("fieldset");
          const legend = document.createElement("legend");
          legend.textContent = "Layer Filter";
          layers.append(legend);
          configurable.append(layers);
          profile.elevations.forEach((phi, i) =>
            toggle(layers, `layer${i}`, `Layer ${i + 1} (${phi}° nominal)`, true),
          );
        }
        calculate();
      };
      config.addEventListener("change", configure);
      configure();
    };
    const calculate = () => {
      result.replaceChildren();
      try {
        const s = {
          interval: 1,
          version: 4,
          start: -180,
          stop: 180,
          ambient: false,
          azimuth: false,
        };
        for (const [key, input] of fields) {
          if (!input.checkValidity())
            throw new RangeError(
              `${input.parentElement.firstChild.textContent}: enter a value in the shown range.`,
            );
          s[key] =
            input.type === "checkbox"
              ? input.checked
              : input.type === "number" || key === "config"
                ? Number(input.value)
                : input.value;
        }
        if (PROFILES[s.device].elevations)
          s.layers = Array.from({ length: 16 }, (_, i) => s[`layer${i}`]);
        const profile = PROFILES[s.device];
        const fov = profile.configs[s.config].fov || profile.fov;
        if (!fields.has("start")) s.start = -fov / 2;
        if (!fields.has("stop")) s.stop = fov / 2;
        const r = estimate(s);
        const format = (n, digits = 0) =>
          n.toLocaleString("en-US", { maximumFractionDigits: digits });
        const table = document.createElement("table");
        table.className = "calculator__table";
        const tbody = document.createElement("tbody");
        const rows = [
          [
            "Transport / format",
            `${r.transport} / Compact type ${s.device === "multiScan270" ? "6" : "1"}`,
          ],
          ["Compact data per scan frame (application bytes)", `${format(r.frameBytes)} B`],
          ["Scan telegrams", `${format(r.scanFrameBytes)} B`],
          ...(r.imuBytes ? [[`IMU telegram (${format(r.imuHz)} Hz)`, `${format(r.imuBytes)} B`]] : []),
          ...(r.encoderBytes ? [["Encoder telegram", `${format(r.encoderBytes)} B`]] : []),
          ["Output frame rate", `${format(r.hz, 2)} frames/s`],
          ["Application throughput", `${format(r.bytesPerSecond)} bytes/s`],
          [
            "Estimated Ethernet line rate (with network overhead)",
            `${format(r.wireBytesPerSecond)} bytes/s (${format((r.wireBytesPerSecond * 8) / 1e6, 2)} Mbit/s)`,
          ],
          ["Segments per frame", format(r.segments)],
          ["Largest application telegram", `${format(r.largestTelegram)} B`],
          ["Estimated IPv4 packets", `${format(r.packetsPerSecond)} packets/s`],
        ];
        rows.forEach(([label, value]) => {
          const row = document.createElement("tr");
          const th = document.createElement("th");
          th.scope = "row";
          th.textContent = label;
          const td = document.createElement("td");
          td.textContent = value;
          row.append(th, td);
          tbody.append(row);
        });
        table.append(tbody);
        result.append(table);
        const notes = document.createElement("ul");
        notes.className = "calculator__notes";
        [
          `No byte savings assumed: ${[
            ...Object.keys(profile.filters),
            ...(profile.unmodeledFilters || []),
          ].join(", ")}.`,
          ...r.warnings,
        ].forEach((warning) => {
          const item = document.createElement("li");
          item.textContent = warning;
          notes.append(item);
        });
        result.append(notes);
        status.textContent = "";
        status.hidden = true;
      } catch (error) {
        if (!(error instanceof RangeError)) throw error;
        status.hidden = false;
        status.dataset.state = "error";
        status.textContent = error.message;
      }
    };
    device.addEventListener("change", rebuild);
    form.addEventListener("input", (event) => {
      // A device selection must rebuild its controls before recalculating.
      if (event.target !== device) calculate();
    });
    form.addEventListener("change", calculate);
    device.value = "picoScan150";
    rebuild();
  };
  const initializeAll = () =>
    document.querySelectorAll("[data-bandwidth-calculator]").forEach(initialize);
  if (typeof document$ !== "undefined") document$.subscribe(initializeAll);
  else if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", initializeAll);
  else initializeAll();
})();
