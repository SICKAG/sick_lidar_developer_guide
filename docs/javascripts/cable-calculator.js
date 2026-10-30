(() => {
  // Copper resistivity at 20 °C in ohm·mm²/m and its temperature coefficient.
  const COPPER_RESISTIVITY = 0.0175;
  const COPPER_TEMP_COEFFICIENT = 0.00393;
  // Within this share of the minimum voltage or of the maximum length, the margin is shown as limited.
  const LIMITED_MARGIN_RATIO = 0.1;

  const SENSORS = {
    LRS4000: {
      minVoltage: 10, maxVoltage: 30, conductors: 1,
      loads: [
        { label: "Typical, excluding digital outputs", power: 13 },
        { label: "Maximum, excluding digital outputs", power: 20 },
      ],
      note: "LRS4000: power excludes digital output loads. Select Custom Values to add these loads. Check startup separately.",
    },
    multiScan100: {
      minVoltage: 9, maxVoltage: 30, conductors: 1,
      loads: [
        { label: "Typical", power: 10 },
        { label: "Maximum, fully loaded outputs", power: 22 },
        { label: "Startup, motor start for 5 s", power: 35 },
      ],
      note: "Values for multiScan136, multiScan165, and multiScan166. Check both the operating load and the 5 s startup load.",
    },
    multiScan200: {
      minVoltage: 9, maxVoltage: 30, conductors: 1,
      loads: [
        { label: "Typical", power: 16 },
        { label: "Maximum, fully loaded outputs", power: 28 },
        { label: "Startup, motor start for 5 s", power: 45 },
      ],
      note: "Values for multiScan270. Both supply pins and both ground pins must be wired. Check both the operating load and the 5 s startup load.",
    },
    picoScan100: {
      minVoltage: 9, maxVoltage: 30, conductors: 1,
      loads: [
        { label: "Typical, no output load", power: 4.5 },
        { label: "Maximum, loaded digital outputs", power: 17 },
      ],
      note: "",
    },
  };

  const SVG_NS = "http://www.w3.org/2000/svg";

  const format = (value, digits = 2) =>
    Number.isFinite(value) ? value.toFixed(digits) : "–";

  const readNumber = (input) => {
    const text = String(input.value).trim().replace(",", ".");
    const value = text ? Number(text) : NaN;
    return Number.isFinite(value) ? value : NaN;
  };

  // Loop resistance (supply and return) of the cable in ohm.
  const loopResistance = (length, area, conductors, temperature) => {
    const resistivity =
      COPPER_RESISTIVITY * (1 + COPPER_TEMP_COEFFICIENT * (temperature - 20));
    return (2 * resistivity * length) / (area * conductors);
  };

  // The sensor draws constant power, so its current rises as its voltage falls:
  // U = Us + P/Us * R  =>  Us = (U + sqrt(U² - 4PR)) / 2.
  // Returns NaN when no stable operating point exists.
  const sensorVoltage = (supply, power, resistance) => {
    const discriminant = supply * supply - 4 * power * resistance;
    if (discriminant < 0) {
      return NaN;
    }
    return (supply + Math.sqrt(discriminant)) / 2;
  };

  // Longest cable with a stable operating point at or above the minimum voltage.
  // The stable voltage never falls below half the supply voltage; beyond that
  // resistance the operating point collapses.
  const maximumLength = (supply, power, minVoltage, area, conductors, temperature) => {
    if (supply <= minVoltage) {
      return 0;
    }
    const limitVoltage = Math.max(minVoltage, supply / 2);
    const maxResistance = ((supply - limitVoltage) * limitVoltage) / power;
    return maxResistance / loopResistance(1, area, conductors, temperature);
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { SENSORS, readNumber, loopResistance, sensorVoltage, maximumLength };
    return;
  }

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

  const drawChart = (svg, values) => {
    const { supply, power, minVoltage, area, conductors, temperature, length, maxLength } =
      values;
    const width = 640;
    const height = 328;
    const pad = { left: 52, right: 16, top: 16, bottom: 72 };
    const plotWidth = width - pad.left - pad.right;
    const plotHeight = height - pad.top - pad.bottom;

    let xMax = Math.max(length * 1.5, Number.isFinite(maxLength) ? maxLength * 1.2 : 0, 10);
    xMax = Math.min(xMax, 1000);
    const xStep = niceStep(xMax, 5);
    xMax = Math.ceil(xMax / xStep) * xStep;
    const yMin = 0;
    const yMax = Math.ceil(Math.max(supply, minVoltage) / 5) * 5;
    const yStep = niceStep(yMax - yMin, 5);

    const x = (value) => pad.left + (value / xMax) * plotWidth;
    const y = (value) => pad.top + (1 - (value - yMin) / (yMax - yMin)) * plotHeight;

    svg.replaceChildren();
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

    for (let tick = 0; tick <= xMax + 1e-9; tick += xStep) {
      svg.append(
        svgElement("line", {
          class: "calculator__grid",
          x1: x(tick),
          x2: x(tick),
          y1: pad.top,
          y2: pad.top + plotHeight,
        }),
      );
      const label = svgElement("text", {
        class: "calculator__tick",
        x: x(tick),
        y: height - pad.bottom + 18,
        "text-anchor": "middle",
      });
      label.textContent = String(Math.round(tick * 10) / 10);
      svg.append(label);
    }
    for (let tick = yMin; tick <= yMax + 1e-9; tick += yStep) {
      svg.append(
        svgElement("line", {
          class: "calculator__grid",
          x1: pad.left,
          x2: pad.left + plotWidth,
          y1: y(tick),
          y2: y(tick),
        }),
      );
      const label = svgElement("text", {
        class: "calculator__tick",
        x: pad.left - 8,
        y: y(tick) + 4,
        "text-anchor": "end",
      });
      label.textContent = String(tick);
      svg.append(label);
    }

    svg.append(
      svgElement("rect", {
        class: "calculator__frame",
        x: pad.left,
        y: pad.top,
        width: plotWidth,
        height: plotHeight,
      }),
    );

    const xTitle = svgElement("text", {
      class: "calculator__axis",
      x: pad.left + plotWidth / 2,
      y: height - 34,
      "text-anchor": "middle",
    });
    xTitle.textContent = "Cable length [m]";
    const yTitle = svgElement("text", {
      class: "calculator__axis",
      x: 14,
      y: pad.top + plotHeight / 2,
      "text-anchor": "middle",
      transform: `rotate(-90 14 ${pad.top + plotHeight / 2})`,
    });
    yTitle.textContent = "Voltage at sensor [V]";
    svg.append(xTitle, yTitle);

    svg.append(
      svgElement("line", {
        class: "calculator__limit",
        x1: pad.left,
        x2: pad.left + plotWidth,
        y1: y(minVoltage),
        y2: y(minVoltage),
      }),
    );
    const limitLabel = svgElement("text", {
      class: "calculator__limit-label",
      x: pad.left + plotWidth - 4,
      y: y(minVoltage) - 6,
      "text-anchor": "end",
    });
    limitLabel.textContent = `Minimum ${minVoltage} V`;
    svg.append(limitLabel);

    if (Number.isFinite(maxLength) && maxLength > 0 && maxLength <= xMax) {
      svg.append(
        svgElement("line", {
          class: "calculator__limit",
          x1: x(maxLength),
          x2: x(maxLength),
          y1: pad.top,
          y2: pad.top + plotHeight,
        }),
      );
      const maxLabel = svgElement("text", {
        class: "calculator__limit-label",
        x: x(maxLength) - 6,
        y: pad.top + 14,
        "text-anchor": "end",
      });
      maxLabel.textContent = `Maximum ${Math.round(maxLength)} m`;
      svg.append(maxLabel);
    }

    const points = [];
    const samples = 120;
    for (let index = 0; index <= samples; index += 1) {
      const sampleLength = (xMax * index) / samples;
      const voltage = sensorVoltage(
        supply,
        power,
        loopResistance(sampleLength, area, conductors, temperature),
      );
      if (!Number.isFinite(voltage)) {
        break;
      }
      points.push(`${x(sampleLength).toFixed(1)},${y(voltage).toFixed(1)}`);
    }
    if (points.length > 1) {
      svg.append(
        svgElement("polyline", {
          class: "calculator__curve",
          points: points.join(" "),
        }),
      );
    }

    const current = sensorVoltage(
      supply,
      power,
      loopResistance(length, area, conductors, temperature),
    );
    if (Number.isFinite(current) && length <= xMax) {
      svg.append(
        svgElement("circle", {
          class: "calculator__marker",
          cx: x(length),
          cy: y(current),
          r: 4,
        }),
      );
    }
    svg.append(svgElement("circle", {
      class: "calculator__marker",
      cx: pad.left + 4,
      cy: height - 12,
      r: 4,
    }));
    const markerLabel = svgElement("text", {
      class: "calculator__tick",
      x: pad.left + 16,
      y: height - 8,
    });
    markerLabel.textContent = "Entered cable length and calculated voltage";
    svg.append(markerLabel);
  };

  const initializeCalculator = (root) => {
    if (root.dataset.cableCalculatorInitialized === "true") {
      return;
    }

    const field = (name) => root.querySelector(`[data-field="${name}"]`);
    const output = (name) => root.querySelector(`[data-output="${name}"]`);
    const inputs = {
      device: field("device"),
      load: field("load"),
      power: field("power"),
      minVoltage: field("min-voltage"),
      supply: field("supply"),
      length: field("length"),
      area: field("area"),
      conductors: field("conductors"),
      temperature: field("temperature"),
    };
    const status = root.querySelector("[data-cable-status]");
    const chart = root.querySelector("[data-cable-chart]");
    const presetNote = root.querySelector("[data-cable-preset-note]");

    if (Object.values(inputs).some((input) => !input) || !status || !chart || !presetNote) {
      console.error("Cable calculator is missing one of its fields.");
      return;
    }
    root.dataset.cableCalculatorInitialized = "true";

    Object.keys(SENSORS).forEach((key) => inputs.device.add(new Option(key, key)));
    inputs.device.add(new Option("Custom Values", "custom"));

    const applyLoad = () => {
      const sensor = SENSORS[inputs.device.value];
      inputs.power.value = String(sensor.loads[Number(inputs.load.value)].power);
    };

    const applyDevice = () => {
      const sensor = SENSORS[inputs.device.value];
      const custom = inputs.device.value === "custom";
      inputs.power.readOnly = !custom;
      inputs.minVoltage.readOnly = !custom;
      inputs.conductors.disabled = false;
      inputs.conductors.value = "1";
      inputs.load.closest("label").hidden = custom;
      inputs.load.replaceChildren();
      if (custom) {
        inputs.supply.removeAttribute("max");
        presetNote.textContent = "Custom Values: enter power and voltage limits from your operating instructions, including startup and output loads.";
        presetNote.hidden = false;
        return;
      }
      sensor.loads.forEach(({ label }, index) =>
        inputs.load.add(new Option(label, String(index))),
      );
      inputs.load.value = "1";
      applyLoad();
      inputs.minVoltage.value = String(sensor.minVoltage);
      inputs.supply.max = String(sensor.maxVoltage);
      inputs.conductors.value = String(sensor.conductors);
      presetNote.textContent = sensor.note;
      presetNote.hidden = !sensor.note;
    };

    const setStatus = (state, text) => {
      status.dataset.state = state;
      status.textContent = text;
    };

    const calculate = () => {
      const power = readNumber(inputs.power);
      const minVoltage = readNumber(inputs.minVoltage);
      const supply = readNumber(inputs.supply);
      const length = readNumber(inputs.length);
      const area = readNumber(inputs.area);
      const conductors = readNumber(inputs.conductors);
      const temperature = readNumber(inputs.temperature);
      ["sensor-voltage", "min-voltage", "drop", "current", "resistance", "margin", "max-length"].forEach(
        (name) => {
          output(name).textContent = "–";
        },
      );
      if (!inputs.power.value.trim() || !inputs.minVoltage.value.trim()) {
        setStatus(
          "info",
          "Enter power consumption and minimum sensor voltage from your operating instructions.",
        );
        chart.replaceChildren();
        return;
      }
      if (
        ![power, minVoltage, supply, length, area, conductors, temperature].every(Number.isFinite) ||
        !(power > 0) || !(minVoltage > 0) || !(supply > 0) || !(length >= 0) || !(area > 0) ||
        ![1, 2].includes(conductors) || temperature < -40 || temperature > 100
      ) {
        setStatus("error", "Enter positive power, voltages, and wire cross-section, a nonnegative cable length, and a wire temperature from −40 to 100 °C.");
        chart.replaceChildren();
        return;
      }
      const sensor = SENSORS[inputs.device.value];
      if (sensor && supply > sensor.maxVoltage) {
        setStatus("error", `Supply voltage exceeds the ${sensor.maxVoltage} V maximum for ${inputs.device.value}.`);
        chart.replaceChildren();
        return;
      }

      output("min-voltage").textContent = `${format(minVoltage, 1)} V`;
      const resistance = loopResistance(length, area, conductors, temperature);
      const voltage = sensorVoltage(supply, power, resistance);
      const maxLength = maximumLength(
        supply,
        power,
        minVoltage,
        area,
        conductors,
        temperature,
      );
      const current = power / voltage;
      const margin = voltage - minVoltage;

      output("resistance").textContent = `${format(resistance, 2)} Ω`;
      output("max-length").textContent = `${format(maxLength, 0)} m`;

      if (!Number.isFinite(voltage)) {
        ["sensor-voltage", "drop", "current", "margin"].forEach((name) => {
          output(name).textContent = "–";
        });
        setStatus(
          "error",
          "Undervoltage: the cable resistance is too high for this power, so there is no stable operating point. Use a shorter cable, a larger cross-section, or a higher supply voltage.",
        );
      } else {
        output("sensor-voltage").textContent = `${format(voltage, 1)} V`;
        output("drop").textContent = `${format(supply - voltage, 2)} V`;
        output("current").textContent = `${format(current, 2)} A`;
        output("margin").textContent = `${format(margin, 1)} V`;

        if (margin < 0) {
          setStatus(
            "error",
            `Undervoltage: the sensor receives less than ${minVoltage} V. Use a shorter cable, a larger cross-section, or a higher supply voltage.`,
          );
        } else if (
          margin < minVoltage * LIMITED_MARGIN_RATIO ||
          length > maxLength * (1 - LIMITED_MARGIN_RATIO)
        ) {
          setStatus(
            "warning",
            "Limited margin: the cable is close to its limit. Supply tolerances or a higher load can cause undervoltage.",
          );
        } else {
          setStatus("ok", "Voltage margin available for the entered load. Check cable current rating, output loads, and startup separately.");
        }
      }

      drawChart(chart, {
        supply,
        power,
        minVoltage,
        area,
        conductors,
        temperature,
        length,
        maxLength,
      });
    };

    Object.entries(inputs).filter(([name]) => !["device", "load"].includes(name)).forEach(([, input]) => {
      input.addEventListener("input", calculate);
      input.addEventListener("change", calculate);
    });
    inputs.device.addEventListener("change", () => {
      applyDevice();
      calculate();
    });
    inputs.load.addEventListener("change", () => {
      applyLoad();
      calculate();
    });

    inputs.device.value = "LRS4000";
    applyDevice();
    calculate();
  };

  const initializeCalculators = () => {
    document.querySelectorAll("[data-cable-calculator]").forEach(initializeCalculator);
  };

  if (typeof document$ !== "undefined") {
    document$.subscribe(initializeCalculators);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeCalculators);
  } else {
    initializeCalculators();
  }
})();
