(() => {
  const RAD = Math.PI / 180;

  // picoScan150 Dynamic Sensing Profiles and their typical scanning ranges at
  // 10 klx: [10 % remission, 90 % remission, reflector] in m.
  const pico = (profiles, ranges) =>
    profiles.map((index) => ({ ...PICO_PROFILES[index - 1], range: ranges[index - 1] }));
  const PICO_PROFILES = [
    { label: "Profile 1: 15 Hz, 0.5°", h: 0.5 },
    { label: "Profile 2: 15 Hz, 0.333°", h: 1 / 3 },
    { label: "Profile 3: 20 Hz, 0.1°", h: 0.1 },
    { label: "Profile 4: 20 Hz, 0.25°", h: 0.25 },
    { label: "Profile 5: 25 Hz, 0.25°", h: 0.25 },
    { label: "Profile 6: 30 Hz, 0.1°", h: 0.1 },
    { label: "Profile 7: 40 Hz, 0.25°", h: 0.25 },
    { label: "Profile 8: 50 Hz, 0.25°", h: 0.25 },
    { label: "Profile 9: 15 Hz, 0.05°", h: 0.05 },
    { label: "Profile 10: 40 Hz, 0.125°", h: 0.125 },
    { label: "Profile 11: 15 Hz, 1°", h: 1 },
  ];
  const PICO_PRIME = [
    [34, 51, 60], [34, 51, 60], [23, 38, 45], [29, 51, 60], [28, 51, 60], [21, 26, 30],
    [25, 47, 60], [23, 44, 55], [21, 21, 25], [21, 26, 30], [34, 51, 60],
  ];
  const PICO_PRO = [
    [40, 75, 60], [40, 75, 60], [27, 45, 45], [34, 65, 60], [33, 62, 60], [25, 30, 30],
    [29, 55, 60], [27, 52, 55], [25, 25, 25], [24, 30, 30], [40, 75, 60],
  ];
  const PICO_CORE = Array(11).fill([12, 25, 25]);

  // Use each OI's convention: multiScan tables use tan, picoScan prints arctan,
  // and LRS4000 uses a linear angular-size relation.
  const MULTISCAN100_SIZE = { h: { offset: 0.425, min: 13 }, v: { offset: 0.425, min: 13 } };
  const multiScan100Configs = (vertical) => [
    { label: "0.125°, 2 high-resolution layers", h: 0.125, v: vertical },
    { label: "1°, 14 layers", h: 1, v: vertical },
    { label: "0.25°, 14 layers, interlaced, 5 Hz combined", h: 0.25, v: vertical, interlace: true },
    { label: "0.125°, 14 layers, interlaced, 2.5 Hz combined", h: 0.125, v: vertical, interlace: true },
  ];

  const DEVICES = {
    LRS4000: {
      label: "LRS4000",
      // Single spot 0.4 mrad × 2.6 mrad; HDDM+ adds the angular resolution.
      divergence: { h: 0.4, v: 2.6, addResolution: true, exit: 7 },
      size: { h: { linear: true, offset: 0, min: 0 }, v: { spotMrad: 2.6, exit: 7 } },
      workingRange: 300,
      configs: [
        ...[0.02, 0.04, 0.06, 0.1, 0.12].map((h) => ({ label: `Normal, 12.5 Hz, ${h}°`, h, range: [55, 130, null] })),
        ...[0.04, 0.08, 0.12, 0.2, 0.24].map((h) => ({ label: `Normal, 25 Hz, ${h}°`, h, range: [55, 130, null] })),
        ...[0.04, 0.08, 0.12, 0.24].map((h) => ({ label: `Extended range, 12.5 Hz, ${h}°`, h, range: [100, 250, null] })),
        ...[0.08, 0.16, 0.24, 0.48].map((h) => ({ label: `Extended range, 25 Hz, ${h}°`, h, range: [100, 250, null] })),
      ],
    },
    multiScan136: {
      label: "multiScan136",
      divergence: { h: 7.5, v: 5.3, addResolution: false, exit: 13 },
      size: MULTISCAN100_SIZE,
      workingRange: 60,
      range: [12, 30, null],
      configs: multiScan100Configs(5),
    },
    multiScan165: {
      label: "multiScan165",
      divergence: { h: 7.5, v: 5.3, addResolution: false, exit: 13 },
      size: MULTISCAN100_SIZE,
      workingRange: 62,
      range: [25, 62, null],
      configs: [
        { label: "0.5°, 20 Hz", h: 0.5, v: 2.5 },
        { label: "0.25°, interlaced, 10 Hz combined", h: 0.25, v: 2.5, interlace: true },
        { label: "0.125°, interlaced, 5 Hz combined", h: 0.125, v: 2.5, interlace: true },
      ],
    },
    multiScan166: {
      label: "multiScan166",
      divergence: { h: 7.5, v: 5.3, addResolution: false, exit: 13 },
      size: MULTISCAN100_SIZE,
      workingRange: 62,
      range: [25, 62, null],
      configs: multiScan100Configs(5),
    },
    picoScan150Core: {
      label: "picoScan150 Core",
      divergence: { h: 4.8, v: 4.8, addResolution: false, exit: 8 },
      size: { h: { arctan: true, offset: 0.27, min: 2 }, v: null },
      workingRange: 25,
      configs: pico([2, 5, 11], PICO_CORE),
    },
    picoScan150Prime: {
      label: "picoScan150 Prime",
      divergence: { h: 4.8, v: 4.8, addResolution: false, exit: 8 },
      size: { h: { arctan: true, offset: 0.27, min: 2 }, v: null },
      workingRange: 60,
      configs: pico([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], PICO_PRIME),
    },
    picoScan150Pro: {
      label: "picoScan150 Pro",
      divergence: { h: 4.8, v: 4.8, addResolution: false, exit: 8 },
      size: { h: { arctan: true, offset: 0.27, min: 2 }, v: null },
      workingRange: 120,
      configs: pico([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], PICO_PRO),
    },
  };

  const DEVICE_FAMILIES = [
    { key: "LRS4000", label: "LRS4000", models: ["LRS4000"] },
    { key: "multiScan100", label: "multiScan100", models: ["multiScan136", "multiScan165", "multiScan166"] },
    { key: "picoScan100", label: "picoScan100", models: ["picoScan150Core", "picoScan150Prime", "picoScan150Pro"] },
    { key: "custom", label: "Custom Values", models: [] },
  ];

  const TARGETS = ["10 % remission", "90 % remission", "Retroreflector"];

  const SVG_NS = "http://www.w3.org/2000/svg";

  const readNumber = (input) => {
    const text = String(input.value).trim().replace(",", ".");
    const value = text ? Number(text) : NaN;
    return Number.isFinite(value) ? value : NaN;
  };

  // Minimum object size [mm] at a range [m] for one axis.
  const minimumSize = (model, rangeM, resolutionDeg, steps = 1) => {
    if (model.spotMrad) {
      return model.exit + model.spotMrad * rangeM;
    }
    const angle = (steps * resolutionDeg + model.offset) * RAD;
    const slope = model.linear ? angle : model.arctan ? Math.atan(angle) : Math.tan(angle);
    return Math.max(model.min, 1000 * rangeM * slope);
  };

  const customSizeModel = (spotMm, divergenceHMrad, divergenceVMrad) => {
    const axis = (divergenceMrad) => ({
      offset: divergenceMrad * 180 / (Math.PI * 1000),
      min: spotMm,
    });
    return { h: axis(divergenceHMrad), v: axis(divergenceVMrad) };
  };

  // Longest range [m] at which the object still reaches the minimum object size.
  const geometricRange = (model, sizeMm, resolutionDeg, steps = 1) => {
    if (model.spotMrad) {
      return sizeMm > model.exit ? (sizeMm - model.exit) / model.spotMrad : 0;
    }
    if (sizeMm < model.min) {
      return 0;
    }
    const angle = (steps * resolutionDeg + model.offset) * RAD;
    const slope = model.linear ? angle : model.arctan ? Math.atan(angle) : Math.tan(angle);
    return sizeMm / 1000 / slope;
  };

  // Typical scanning range [m] for the target, or the working range if not specified.
  const scanningRange = (deviceKey, config, target) => {
    const device = DEVICES[deviceKey];
    const specified = ((config && config.range) || device.range || [])[target];
    return Number.isFinite(specified)
      ? { range: specified, specified: true }
      : { range: device.workingRange, specified: false };
  };

  // Overlapping LRS4000 modes use the minimum object size of the next coarser step.
  const effectiveResolution = (deviceKey, config, resolution) =>
    deviceKey === "LRS4000" && config && config.label.startsWith("Normal")
      ? Math.max(resolution, config.label.includes("12.5 Hz") ? 0.04 : 0.08)
      : resolution;

  const horizontalDivergence = (deviceKey, config, resolution) => {
    const divergence = DEVICES[deviceKey].divergence;
    if (deviceKey === "LRS4000" && (!config || config.label.startsWith("Extended"))) {
      return NaN;
    }
    const spotResolution = effectiveResolution(deviceKey, config, resolution);
    return divergence.h + (divergence.addResolution ? spotResolution * Math.PI * 1000 / 180 : 0);
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = {
      DEVICES, DEVICE_FAMILIES, TARGETS, readNumber, minimumSize, customSizeModel, geometricRange, scanningRange,
      effectiveResolution, horizontalDivergence,
    };
    return;
  }

  const twoDecimals = (value) => String(Math.round(value * 100) / 100);

  const formatRange = (meters) => {
    if (!Number.isFinite(meters)) {
      return "–";
    }
    return meters >= 10 ? `${meters.toFixed(0)} m` : `${meters.toFixed(1)} m`;
  };

  const svgElement = (name, attributes) => {
    const element = document.createElementNS(SVG_NS, name);
    Object.entries(attributes).forEach(([key, value]) =>
      element.setAttribute(key, String(value)),
    );
    return element;
  };

  const niceStep = (range, targetSteps) => {
    const raw = range / targetSteps;
    const magnitude = 10 ** Math.floor(Math.log10(raw));
    const residual = raw / magnitude;
    const factor = residual > 5 ? 10 : residual > 2 ? 5 : residual > 1 ? 2 : 1;
    return factor * magnitude;
  };

  const addText = (svg, attributes, text) => {
    const element = svgElement("text", attributes);
    element.textContent = text;
    svg.append(element);
  };

  // Minimum object size over the range, with the object size and range limits.
  const drawChart = (svg, { sizeAt, objectSize, maxRange, geometric, scanning }) => {
    const width = 640;
    const height = 300;
    const pad = { left: 60, right: 16, top: 16, bottom: 44 };
    const plotWidth = width - pad.left - pad.right;
    const plotHeight = height - pad.top - pad.bottom;

    let xMax = Math.max(Math.min(Math.max(geometric, maxRange), scanning * 1.2) * 1.25, 1);
    const xStep = niceStep(xMax, 5);
    xMax = Math.ceil(xMax / xStep) * xStep;
    let yMax = Math.max(sizeAt(xMax), objectSize * 1.2);
    const yStep = niceStep(yMax, 5);
    yMax = Math.ceil(yMax / yStep) * yStep;

    const x = (value) => pad.left + (value / xMax) * plotWidth;
    const y = (value) => pad.top + (1 - value / yMax) * plotHeight;

    svg.replaceChildren();
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.append(
      svgElement("rect", { class: "calculator__frame", x: pad.left, y: pad.top, width: plotWidth, height: plotHeight }),
    );

    for (let tick = 0; tick <= xMax + 1e-9; tick += xStep) {
      svg.append(svgElement("line", { class: "calculator__grid", x1: x(tick), x2: x(tick), y1: pad.top, y2: pad.top + plotHeight }));
      addText(svg, { class: "calculator__tick", x: x(tick), y: height - pad.bottom + 18, "text-anchor": "middle" }, String(Math.round(tick * 100) / 100));
    }
    for (let tick = 0; tick <= yMax + 1e-9; tick += yStep) {
      svg.append(svgElement("line", { class: "calculator__grid", x1: pad.left, x2: pad.left + plotWidth, y1: y(tick), y2: y(tick) }));
      addText(svg, { class: "calculator__tick", x: pad.left - 8, y: y(tick) + 4, "text-anchor": "end" }, String(Math.round(tick * 100) / 100));
    }

    addText(svg, { class: "calculator__axis", x: pad.left + plotWidth / 2, y: height - 6, "text-anchor": "middle" }, "Range [m]");
    addText(
      svg,
      {
        class: "calculator__axis",
        x: 14,
        y: pad.top + plotHeight / 2,
        "text-anchor": "middle",
        transform: `rotate(-90 14 ${pad.top + plotHeight / 2})`,
      },
      "Minimum object size [mm]",
    );

    svg.append(svgElement("line", { class: "calculator__limit", x1: pad.left, x2: pad.left + plotWidth, y1: y(objectSize), y2: y(objectSize) }));
    addText(svg, { class: "calculator__limit-label", x: pad.left + 6, y: y(objectSize) - 6, "text-anchor": "start" }, `Object size ${objectSize.toFixed(0)} mm`);

    if (scanning <= xMax) {
      svg.append(svgElement("line", { class: "calculator__limit", x1: x(scanning), x2: x(scanning), y1: pad.top, y2: pad.top + plotHeight }));
      addText(svg, { class: "calculator__limit-label", x: x(scanning) - 6, y: pad.top + 14, "text-anchor": "end" }, `Scanning range ${formatRange(scanning)}`);
    }

    const points = [];
    for (let i = 0; i <= 100; i += 1) {
      const range = (xMax * i) / 100;
      points.push(`${x(range).toFixed(1)},${y(Math.min(sizeAt(range), yMax)).toFixed(1)}`);
    }
    svg.append(svgElement("polyline", { class: "calculator__curve", points: points.join(" ") }));
    if (maxRange > 0) {
      svg.append(svgElement("circle", { class: "calculator__marker", cx: x(maxRange), cy: y(Math.min(sizeAt(maxRange), yMax)), r: 4 }));
    }
  };

  const initializeCalculator = (root) => {
    if (root.dataset.objectSizeInitialized === "true") {
      return;
    }

    const field = (name) => root.querySelector(`[data-field="${name}"]`);
    const output = (name) => root.querySelector(`[data-output="${name}"]`);
    const inputs = {
      device: field("device"),
      config: field("config"),
      target: field("target"),
      horizontal: field("horizontal"),
      vertical: field("vertical"),
      width: field("width"),
      height: field("height"),
      beams: field("beams"),
      divergenceH: field("divergence-h"),
      divergenceV: field("divergence-v"),
      minimumSpot: field("minimum-spot"),
      customRange: field("custom-range"),
    };
    const heightOnly = root.querySelectorAll("[data-height-only]");
    const verticalOnly = root.querySelectorAll("[data-vertical-only]");
    const customOnly = root.querySelectorAll("[data-custom-only]");
    const configRow = inputs.config.closest(".calculator__input-row");
    const targetRow = inputs.target.closest(".calculator__input-row");
    const status = root.querySelector("[data-object-status]");
    const chart = root.querySelector("[data-object-chart]");
    const footnote = root.querySelector("[data-object-footnote]");
    let lastPresetDeviceKey = "LRS4000";
    let customInitialized = false;

    if (Object.values(inputs).some((input) => !input) || !status || !chart) {
      console.error("Object size calculator is missing one of its fields.");
      return;
    }
    root.dataset.objectSizeInitialized = "true";

    DEVICE_FAMILIES.forEach(({ key, label }) =>
      inputs.device.add(new Option(label, key)),
    );
    TARGETS.forEach((label, index) => inputs.target.add(new Option(label, String(index))));
    inputs.target.value = "0";

    const family = () => DEVICE_FAMILIES.find(({ key }) => key === inputs.device.value);
    const presets = () => family().models.flatMap((modelKey) =>
      DEVICES[modelKey].configs.map((config, index) => ({
        modelKey,
        config,
        label: family().models.length > 1 ? `${DEVICES[modelKey].label} | ${config.label}` : config.label,
        index,
      })),
    );
    const currentPreset = () => presets()[Number(inputs.config.value)];
    const isCustom = () => inputs.device.value === "custom";
    const currentDevice = () => isCustom() ? null : DEVICES[currentPreset().modelKey];
    const currentConfig = () => isCustom() ? null : currentPreset().config;
    const hasHeight = () => isCustom() || Boolean(currentDevice().size.v);
    const hasVerticalResolution = () =>
      isCustom() || (hasHeight() && !currentDevice().size.v.spotMrad);

    const updateHelp = () => {
      const custom = isCustom();
      const key = custom ? "custom" : currentPreset().modelKey;
      const lrs = key === "LRS4000";
      const multi = Boolean(currentDevice()?.size.v) && !lrs;
      const interlaced = currentConfig()?.interlace;
      const heightCheck = lrs
        ? "The height check uses the vertical beam footprint."
        : custom
          ? "The height check uses your vertical angular resolution and beam divergence."
          : multi
            ? "The height check uses the spacing between scan layers."
            : "This preset calculates object width only.";
      const help = {
        "config": `Select the model and scan mode. Presets fill in the operating-instruction values.${interlaced ? " This interlaced mode combines several frames and requires a stationary scene." : ""}`,
        "vertical": key === "multiScan165"
          ? "Angle between scan layers used for the height calculation. This preset uses 2.5 degrees; outer layer gaps can reach 5 degrees."
          : custom
            ? "Vertical angle between measurement directions used by your custom height model."
            : "Angle between scan layers used for the height calculation. Real layer gaps can vary; use the actual layer angles for your application.",
        "divergence-h": custom
          ? "Horizontal beam spread in milliradians. Used for the custom minimum-size model and the displayed spot width."
          : lrs
            ? "Horizontal beam spread used to display spot width, including the normal scan-mode contribution. No verified value is provided for extended-range modes."
            : "Horizontal beam spread in milliradians, used to display spot width. The preset value comes from the operating instructions.",
        "divergence-v": `Vertical beam spread in milliradians, used to display spot height.${lrs ? " The vertical spot also determines the height check." : custom ? " It also contributes to the custom height model." : ""}`,
        "height": `Height presented to the sensor. ${heightCheck} Enter 0 to disable this check.`,
        "max-range": `${hasHeight() ? "Smallest of the width limit, enabled height limit and scanning range." : "Smaller of the width limit and target scanning range."} This is a geometric planning estimate, not a detection guarantee.`,
        "scan-range": custom
          ? "Your entered scanning-range cap for the target and operating conditions."
          : lrs
            ? "Preset range cap for the selected target and scan mode. Footnote 1 marks a working-range fallback, not a specified target range."
            : multi
              ? "Preset range cap at 10 klx for the selected diffuse target. Footnote 1 marks a working-range fallback, not a specified reflector range."
              : "Typical diffuse-target range at 10 klx, or the non-extended range for a suitable reflector. Typical values are not guaranteed minimum ranges.",
        "size-v": `${heightCheck} This is the minimum height at the calculated range, shown only when the height check is enabled.${multi ? " The model follows the published size table." : ""}`,
        "beams": custom
          ? "Number of angular spacings required across the object in the custom geometry model. Larger values reduce range; they do not guarantee a number of detected returns."
          : "One spacing uses the operating-instruction minimum-size model. Larger values add a planning margin and reduce range; they are not a guaranteed number of detected returns.",
      };
      for (const [name, text] of Object.entries(help)) {
        root.querySelector(`#object-${name}-help`).textContent = text;
      }
    };

    const applyDivergence = () => {
      const model = currentDevice();
      const horizontal = horizontalDivergence(currentPreset().modelKey, currentConfig(), currentConfig().h);
      inputs.divergenceH.value = Number.isFinite(horizontal) ? twoDecimals(horizontal) : "";
      inputs.divergenceV.value = model.divergence.v === null ? "" : twoDecimals(model.divergence.v);
    };

    const applyConfig = () => {
      const config = currentConfig();
      if (!config) {
        return;
      }
      inputs.horizontal.value = twoDecimals(config.h);
      if (config.v) {
        inputs.vertical.value = twoDecimals(config.v);
      }
      applyDivergence();
    };

    const fillConfigs = () => {
      inputs.config.replaceChildren();
      const available = presets();
      available.forEach(({ label }, index) =>
        inputs.config.add(new Option(label, String(index))),
      );
      inputs.config.disabled = available.length === 0;
      if (available.length > 0) {
        inputs.config.value = "0";
        applyConfig();
        lastPresetDeviceKey = currentPreset().modelKey;
      } else if (isCustom()) {
        if (!customInitialized) {
          const preset = DEVICES[lastPresetDeviceKey];
          inputs.minimumSpot.value = String(preset.divergence.exit);
          inputs.customRange.value = String(preset.workingRange);
          if (!inputs.vertical.value) {
            inputs.vertical.value = inputs.horizontal.value || "0.1";
          }
          if (!inputs.divergenceH.value) {
            inputs.divergenceH.value = twoDecimals(preset.divergence.h);
          }
          if (!inputs.divergenceV.value) {
            inputs.divergenceV.value = twoDecimals(preset.divergence.v || 0);
          }
          customInitialized = true;
        }
      }
      const custom = isCustom();
      configRow.hidden = custom;
      targetRow.hidden = custom;
      customOnly.forEach((element) => {
        element.hidden = !custom;
      });
      [inputs.horizontal, inputs.vertical, inputs.divergenceH, inputs.divergenceV]
        .forEach((input) => { input.readOnly = !custom; });
      heightOnly.forEach((element) => {
        element.hidden = !hasHeight();
      });
      verticalOnly.forEach((element) => {
        element.hidden = !hasVerticalResolution();
      });
      root.querySelectorAll("[data-range-breakdown]").forEach((element) => {
        element.hidden = ["LRS4000", "picoScan100"].includes(inputs.device.value);
      });
    };

    const setStatus = (state, text) => {
      status.dataset.state = state;
      status.textContent = text;
    };

    const outputs = ["max-range", "h-range", "v-range", "scan-range", "size-h", "size-v", "spot-h", "spot-v"];

    const calculate = () => {
      updateHelp();
      const custom = isCustom();
      const key = custom ? "custom" : currentPreset().modelKey;
      const device = currentDevice();
      const config = currentConfig();
      const horizontal = custom ? readNumber(inputs.horizontal) : effectiveResolution(key, config, config.h);
      const vertical = readNumber(inputs.vertical);
      const width = readNumber(inputs.width);
      const height = readNumber(inputs.height);
      const steps = readNumber(inputs.beams);
      const target = Number(inputs.target.value);
      const divergenceH = custom ? readNumber(inputs.divergenceH) : horizontalDivergence(key, config, config.h);
      const divergenceV = custom ? readNumber(inputs.divergenceV) : device.divergence.v;
      const exitSpot = custom ? readNumber(inputs.minimumSpot) : device.divergence.exit;
      const model = custom
        ? customSizeModel(exitSpot, divergenceH, divergenceV)
        : device.size;
      const useHeight = hasHeight() && height > 0;

      outputs.forEach((name) => {
        output(name).textContent = "–";
      });
      footnote.hidden = true;

      if (
        ![horizontal, width, steps].every(Number.isFinite) ||
        !(horizontal >= 0.01 && horizontal <= 5) || !(width > 0) ||
        !Number.isInteger(steps) || steps < 1 || steps > 5 ||
        (custom && (
          ![divergenceH, divergenceV, exitSpot, readNumber(inputs.customRange)].every(Number.isFinite) ||
          divergenceH < 0 || divergenceV < 0 || exitSpot < 0 || readNumber(inputs.customRange) <= 0
        )) ||
        (hasHeight() && (!Number.isFinite(height) || height < 0)) ||
        (hasVerticalResolution() && height > 0 && (!Number.isFinite(vertical) || vertical < 0.01 || vertical > 5))
      ) {
        setStatus("error", "Enter valid positive dimensions and angular resolutions from 0.01° to 5°. Height 0 disables the vertical check.");
        chart.replaceChildren();
        return;
      }

      const sizeH = (range) => minimumSize(model.h, range, horizontal, steps);
      const sizeV = (range) => minimumSize(model.v, range, vertical, steps);
      const horizontalRange = geometricRange(model.h, width, horizontal, steps);
      const verticalRange = useHeight ? geometricRange(model.v, height, vertical, steps) : Infinity;
      const geometric = Math.min(horizontalRange, verticalRange);
      const scan = custom
        ? { range: readNumber(inputs.customRange), specified: true }
        : scanningRange(key, config, target);
      const maxRange = Math.min(geometric, scan.range);
      const limitedByVertical = verticalRange < horizontalRange;
      const mm = (value) => `${value.toFixed(0)} mm`;
      const reference = maxRange > 0 ? maxRange : scan.range;

      output("max-range").textContent = formatRange(maxRange);
      output("h-range").textContent = formatRange(horizontalRange);
      output("scan-range").textContent = scan.specified
        ? formatRange(scan.range)
        : `${formatRange(scan.range)} 1)`;
      footnote.hidden = scan.specified;
      output("size-h").textContent = mm(sizeH(reference));
      if (useHeight) {
        output("v-range").textContent = formatRange(verticalRange);
        output("size-v").textContent = mm(sizeV(reference));
      }
      if (divergenceH > 0) {
        output("spot-h").textContent = mm(exitSpot + reference * divergenceH);
      }
      if (divergenceV > 0) {
        output("spot-v").textContent = mm(exitSpot + reference * divergenceV);
      }

      let limit;
      if (maxRange <= 0) {
        limit = "The object is smaller than the minimum object size at any range.";
      } else if (scan.range < geometric) {
        limit = `Limited by the scanning range for ${TARGETS[target].toLowerCase()}.`;
      } else {
        limit = limitedByVertical ? "Limited by the object height." : "Limited by the object width.";
      }
      const interlace = config && config.interlace ? " Interlaced resolutions require multiple frames and a stationary scene." : "";
      setStatus("warning", `${limit}${interlace} Not a detection guarantee.`);

      drawChart(chart, {
        sizeAt: limitedByVertical && useHeight ? sizeV : sizeH,
        objectSize: limitedByVertical && useHeight ? height : width,
        maxRange,
        geometric,
        scanning: scan.range,
      });
    };

    inputs.device.addEventListener("change", () => {
      fillConfigs();
      calculate();
    });
    inputs.config.addEventListener("change", () => {
      applyConfig();
      calculate();
    });
    ["width", "height", "beams", "target", "horizontal", "vertical", "divergenceH", "divergenceV", "minimumSpot", "customRange"].forEach((name) => {
      inputs[name].addEventListener("input", calculate);
      inputs[name].addEventListener("change", calculate);
    });

    inputs.device.value = "LRS4000";
    fillConfigs();
    calculate();
  };

  const initializeCalculators = () => {
    document.querySelectorAll("[data-object-size-calculator]").forEach(initializeCalculator);
  };

  if (typeof document$ !== "undefined") {
    document$.subscribe(initializeCalculators);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeCalculators);
  } else {
    initializeCalculators();
  }
})();
