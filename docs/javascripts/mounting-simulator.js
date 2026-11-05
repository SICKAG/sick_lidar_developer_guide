(() => {
  const RAD = Math.PI / 180;
  const DEVICE_KEYS = ["multiScan136", "multiScan165", "multiScan166", "multiScan270"];
  const MAX_DRAWN_HITS = 5000;
  const MAX_GROUND_POINTS = 20000;
  // Working range starts at 0.05 m for multiScan100 (operating instructions) and at 0.5 m for multiScan270
  // (near range of the SICK NVIDIA Omniverse model); specified accuracy applies from 0.1 m.
  const MIN_RANGE = 0.05;
  const MIN_RANGE_270 = 0.5;
  const minRange = (device) => (device === "multiScan270" ? MIN_RANGE_270 : MIN_RANGE);
  const ACCURACY_RANGE = 0.1;

  // Ranges at > 99 % detection probability from the operating instructions, per ambient light.
  // r10/r90: range at 10 % / 90 % remission [m]; null: not specified, the working range applies.
  const MULTISCAN165_LIGHT = [
    { label: "10 klx", r10: 25, r90: 62 },
    { label: "30 klx", r10: 22, r90: 60 },
    { label: "100 klx", r10: 20, r90: 40 },
  ];
  const RANGES = {
    multiScan136: {
      working: 60,
      light: [
        { label: "10 klx", r10: 12, r90: 30 },
        { label: "100 klx", r10: 10, r90: 15 },
      ],
    },
    multiScan165: { working: 62, light: MULTISCAN165_LIGHT },
    multiScan166: { working: 62, light: MULTISCAN165_LIGHT },
    multiScan270: {
      working: 130,
      // 10 % remission range per scan configuration, in configuration order.
      perConfig: [70, 60, 50, 60, 60, 50, 50, 60, 60],
      light: [{ label: "80 klx", r10: null, r90: null }],
    },
  };
  const REMISSIONS = { 10: "10 % remission", 90: "90 % remission", refl: "Reflector" };
  // The ground is assumed to be dark (10 % remission).
  const GROUND_REMISSION = "10";  const MULTISCAN270_VERTICAL = 45;

  const LIMITS = {
    height: [0.15, 30],
    tilt: [-90, 90],
    x: [-3, 200],
    z: [0, 30],
    d: [0.02, 20],
    w: [0.02, 20],
    h: [0.02, 30],
    r: [0.01, 10],
    H: [0.3, 2.5],
  };
  const OBJECT_TYPES = {
    box: "Box",
    person: "Person",
  };
  // Objects in a scene: added with the + button, removed with Delete.
  const MAX_OBJECTS = 5;

  // Fixed-size models in local coordinates [m]: x from the front face (0) away from the sensor,
  // y centered, z from the object bottom. Parts: box, cylinder along z ("cz"), y ("cy") or x ("cx"), sphere ("s").
  const box = (min, max) => ({ k: "box", min, max });
  const cylZ = (x, y, r, z0, z1) => ({ k: "cz", c: [x, y], r, s: [z0, z1] });
  const cylY = (x, z, r, y0, y1) => ({ k: "cy", c: [x, z], r, s: [y0, y1] });
  const cylX = (y, z, r, x0, x1) => ({ k: "cx", c: [y, z], r, s: [x0, x1] });
  const sphere = (x, y, z, r) => ({ k: "s", c: [x, y, z], r });
  // Part and its mirror image across the x–z plane (y → −y).
  const pair = (part) => {
    const m = JSON.parse(JSON.stringify(part));
    if (m.k === "box") [m.min[1], m.max[1]] = [-part.max[1], -part.min[1]];
    else if (m.k === "cz") m.c[1] = -part.c[1];
    else if (m.k === "cy") m.s = [-part.s[1], -part.s[0]];
    else if (m.k === "cx") m.c[0] = -part.c[0];
    else if (m.k === "s") m.c[1] = -part.c[1];
    return [part, m];
  };
  const MODELS = {
    iso18497: {
      label: "Seated person (agriculture)",
      note: "ISO 18497:2018 test target “seated person”: cylinder Ø 380 mm × 530 mm with a cylinder Ø 140 mm × 270 mm on top, 800 mm high. The standard specifies no reflectivity; select the remission. ISO 18497-1 to -4:2024 replace the 2018 edition.",
      parts: [cylZ(0.19, 0, 0.19, 0, 0.53), cylZ(0.19, 0, 0.07, 0.53, 0.8)],
    },
    childStanding: {
      label: "Small child, standing (ISO 19206-2)",
      note: "1-year-old child target to ISO 19206-2 (body height 658 mm, shoulder width 172 mm, head width 109 mm), simplified to cylinders and a sphere. ISO 19206-2 specifies 40–60 % near-infrared reflectivity (hair 20–60 %); 10 % and 90 % remission bracket it.",
      parts: [
        ...pair(cylZ(0.055, 0.045, 0.035, 0, 0.23)),
        cylZ(0.055, 0, [0.055, 0.086], 0.23, 0.54),
        cylZ(0.055, 0, 0.025, 0.54, 0.555),
        sphere(0.055, 0, 0.6035, 0.0545),
      ],
    },
    childLying: {
      label: "Small child, lying (ISO 19206-2)",
      directional: true,
      directions: { front: "Feet toward sensor", rear: "Head toward sensor" },
      note: "1-year-old child target to ISO 19206-2 lying on its back on the floor (body length 658 mm, shoulder width 172 mm, head width 109 mm), simplified to cylinders and a sphere. ISO 19206-2 specifies 40–60 % near-infrared reflectivity (hair 20–60 %); 10 % and 90 % remission bracket it.",
      parts: [
        ...pair(cylX(0.045, 0.035, 0.035, 0, 0.23)),
        cylX(0, 0.055, [0.086, 0.055], 0.23, 0.54),
        cylX(0, 0.025, 0.025, 0.54, 0.555),
        sphere(0.6035, 0, 0.0545, 0.0545),
      ],
    },
  };
  const radii = (r) => (Array.isArray(r) ? r : [r, r]);
  // Length of each model along x, from its parts.
  for (const model of Object.values(MODELS)) {
    model.length = Math.max(
      ...model.parts.map((p) => (p.k === "box" ? p.max[0] : p.k === "cx" ? p.s[1] : p.k === "cy" || p.k === "s" ? p.c[0] + p.r : p.c[0] + radii(p.r)[0])),
    );
  }
  for (const [key, model] of Object.entries(MODELS)) OBJECT_TYPES[key] = model.label;
  const DIRECTIONS = { front: "Front toward sensor", rear: "Rear toward sensor" };
  // Default scene: a 0.5 m box, the ISO 18497 seated person, a reflector, and a standing person.
  const DEFAULT_OBJECTS = [
    { type: "box", x: 4.68, z: 0, d: 0.5, w: 0.5, h: 0.5, r: 0.4, H: 1.75, rem: "10", dir: "front" },
    { type: "iso18497", x: 7.74, z: 0, d: 0.8, w: 0.8, h: 1.8, r: 0.4, H: 1.75, rem: "10", dir: "front" },
    { type: "box", x: 9.7, z: 2, d: 0.2, w: 0.7, h: 1, r: 0.4, H: 1.75, rem: "refl", dir: "front" },
    { type: "person", x: 11, z: 0, d: 0.8, w: 0.8, h: 1.8, r: 0.4, H: 1.75, rem: "10", dir: "front" },
  ];
  const DEFAULT_STATE = {
    device: "multiScan270",
    config: 2,
    range: 0,
    inverted: false,
    height: 2.5,
    tilt: 10,
    objects: DEFAULT_OBJECTS,
  };
  // Same scene when the site device filter shows only multiScan100.
  const MULTISCAN100_DEFAULT_STATE = { ...DEFAULT_STATE, device: "multiScan166", config: 0 };
  const defaultStateFor = (allowedDevices = DEVICE_KEYS) =>
    !allowedDevices.includes(DEFAULT_STATE.device) && allowedDevices.includes(MULTISCAN100_DEFAULT_STATE.device)
      ? MULTISCAN100_DEFAULT_STATE
      : DEFAULT_STATE;

  const clamp = (value, [min, max]) => Math.min(max, Math.max(min, value));
  // A new object: a 0.8 m × 0.8 m × 1.8 m box, 3 m in front of the sensor.
  const newObject = (x = 3) => ({ type: "box", x, z: 0, d: 0.8, w: 0.8, h: 1.8, r: 0.4, H: 1.75, rem: "10", dir: "front" });
  const cloneState = (state) => JSON.parse(JSON.stringify(state));

  // Scan layers with physical elevation (positive = upward when mounted upright).
  const scanLayers = (profiles, deviceKey, configIndex) => {
    const profile = profiles[deviceKey];
    const config = profile.configs[configIndex] || profile.configs[0];
    const interlace = config.interlace || 1;
    if (profile.elevations) {
      const hr = profile.hrLayers || [];
      return profile.elevations.map((din, index) => {
        const highRes = hr.includes(index);
        return {
          number: index + 1,
          din,
          phi: -din,
          frameStep: highRes ? 0.125 : config.h,
          step: highRes ? 0.125 : config.h / interlace,
          interlace: highRes ? 1 : interlace,
          highRes,
        };
      });
    }
    const count = config.layers;
    // Evenly spaced from +22.5° to −22.5°, outer layers included (SICK NVIDIA Omniverse model).
    const spacing = MULTISCAN270_VERTICAL / (count - 1);
    return Array.from({ length: count }, (_, index) => {
      const phi = MULTISCAN270_VERTICAL / 2 - index * spacing;
      return {
        number: index + 1,
        din: -phi,
        phi,
        frameStep: config.h,
        step: config.h / interlace,
        interlace,
      };
    });
  };

  // Range [m] for a target remission ("10", "90", "refl") at the selected ambient light.
  const rangeLimit = (state, remission = GROUND_REMISSION) => {
    const ranges = RANGES[state.device];
    if (remission === "refl") return ranges.working;
    const light = ranges.light[state.range] || ranges.light[0];
    let value = remission === "90" ? light.r90 : light.r10;
    if (remission === "10" && ranges.perConfig) value = ranges.perConfig[state.config] || ranges.perConfig[0];
    return value ?? ranges.working;
  };

  // Sensor to world: optional 180° roll (upside down), then pitch; positive tilt lowers the +x side.
  const sensorRotation = (tiltDeg, inverted) => {
    const c = Math.cos(tiltDeg * RAD);
    const s = Math.sin(tiltDeg * RAD);
    const f = inverted ? -1 : 1;
    return [
      [c, 0, s * f],
      [0, f, 0],
      [-s, 0, c * f],
    ];
  };
  const rotate = (m, v) => [
    m[0][0] * v[0] + m[0][1] * v[1] + m[0][2] * v[2],
    m[1][0] * v[0] + m[1][1] * v[1] + m[1][2] * v[2],
    m[2][0] * v[0] + m[2][1] * v[1] + m[2][2] * v[2],
  ];
  const rotateBack = (m, v) => [
    m[0][0] * v[0] + m[1][0] * v[1] + m[2][0] * v[2],
    m[0][1] * v[0] + m[1][1] * v[1] + m[2][1] * v[2],
    m[0][2] * v[0] + m[1][2] * v[1] + m[2][2] * v[2],
  ];

  // Idealized person facing the sensor, scaled from body height H.
  const PERSON = {
    legTop: 0.48,
    legRadius: 0.045,
    legOffset: 0.055,
    torsoTop: 0.82,
    torsoDepth: 0.075,
    torsoWidth: 0.13,
    neckTop: 0.885,
    neckRadius: 0.03,
    headRadius: 0.065,
  };

  // Model parts in world coordinates; "rear" mirrors the model along x.
  const modelParts = (obj) => {
    const model = MODELS[obj.type];
    const length = model.length;
    // "Front toward sensor" means facing +x in front of the sensor and −x behind it.
    const behind = obj.x + length / 2 < 0;
    const rev = model.directional && (obj.dir === "rear") !== behind;
    const X = (lx) => (rev ? obj.x + length - lx : obj.x + lx);
    const xs = (a, b) => [Math.min(X(a), X(b)), Math.max(X(a), X(b))];
    const Z = (lz) => obj.z + lz;
    return model.parts.map((p) => {
      if (p.k === "box") {
        const [x0, x1] = xs(p.min[0], p.max[0]);
        return { kind: "box", min: [x0, p.min[1], Z(p.min[2])], max: [x1, p.max[1], Z(p.max[2])] };
      }
      if (p.k === "cz") {
        const [a, b] = radii(p.r);
        return { kind: "cyl", cx: X(p.c[0]), cy: p.c[1], a, b, z0: Z(p.s[0]), z1: Z(p.s[1]) };
      }
      if (p.k === "cy") return { kind: "cyl", axis: "y", cx: X(p.c[0]), cy: Z(p.c[1]), a: p.r, b: p.r, z0: p.s[0], z1: p.s[1] };
      if (p.k === "cx") {
        const [x0, x1] = xs(p.s[0], p.s[1]);
        const [a, b] = radii(p.r);
        return { kind: "cyl", axis: "x", cx: p.c[0], cy: Z(p.c[1]), a, b, z0: x0, z1: x1 };
      }
      return { kind: "sphere", c: [X(p.c[0]), p.c[1], Z(p.c[2])], r: p.r };
    });
  };
  // Cylinders along x or y are evaluated as vertical cylinders in permuted coordinates.
  const PERM = { y: (v) => [v[0], v[2], v[1]], x: (v) => [v[1], v[2], v[0]] };
  const UNPERM = { y: (q) => [q[0], q[2], q[1]], x: (q) => [q[2], q[0], q[1]] };
  // Axis-aligned bounding box of a world part.
  const partBox = (part) => {
    if (part.kind === "box") return { min: part.min, max: part.max };
    if (part.kind === "sphere") return { min: part.c.map((c) => c - part.r), max: part.c.map((c) => c + part.r) };
    const lo = [part.cx - part.a, part.cy - part.b, part.z0];
    const hi = [part.cx + part.a, part.cy + part.b, part.z1];
    return part.axis ? { min: UNPERM[part.axis](lo), max: UNPERM[part.axis](hi) } : { min: lo, max: hi };
  };

  const objectParts = (obj) => {
    if (MODELS[obj.type]) return modelParts(obj);
    if (obj.type === "box") {
      return [{ kind: "box", min: [obj.x, -obj.w / 2, obj.z], max: [obj.x + obj.d, obj.w / 2, obj.z + obj.h] }];
    }
    if (obj.type === "person") {
      const H = obj.H;
      const cx = obj.x + PERSON.torsoDepth * H;
      const z = obj.z;
      const leg = (side) => ({
        kind: "cyl",
        cx,
        cy: side * PERSON.legOffset * H,
        a: PERSON.legRadius * H,
        b: PERSON.legRadius * H,
        z0: z,
        z1: z + PERSON.legTop * H,
      });
      return [
        leg(-1),
        leg(1),
        {
          kind: "cyl",
          cx,
          cy: 0,
          a: PERSON.torsoDepth * H,
          b: PERSON.torsoWidth * H,
          z0: z + PERSON.legTop * H,
          z1: z + PERSON.torsoTop * H,
        },
        {
          kind: "cyl",
          cx,
          cy: 0,
          a: PERSON.neckRadius * H,
          b: PERSON.neckRadius * H,
          z0: z + PERSON.torsoTop * H,
          z1: z + PERSON.neckTop * H,
        },
        { kind: "sphere", c: [cx, 0, z + (1 - PERSON.headRadius) * H], r: PERSON.headRadius * H },
      ];
    }
    return [];
  };

  const objectBounds = (obj) => {
    if (MODELS[obj.type]) {
      const boxes = modelParts(obj).map(partBox);
      const lo = [0, 1, 2].map((i) => Math.min(...boxes.map((b) => b.min[i])));
      const hi = [0, 1, 2].map((i) => Math.max(...boxes.map((b) => b.max[i])));
      return { x0: lo[0], x1: hi[0], y: Math.max(-lo[1], hi[1]), z0: lo[2], z1: hi[2] };
    }
    if (obj.type === "box") return { x0: obj.x, x1: obj.x + obj.d, y: obj.w / 2, z0: obj.z, z1: obj.z + obj.h };
    if (obj.type === "person") {
      return {
        x0: obj.x,
        x1: obj.x + 2 * PERSON.torsoDepth * obj.H,
        y: PERSON.torsoWidth * obj.H,
        z0: obj.z,
        z1: obj.z + obj.H,
      };
    }
    return null;
  };

  const EPS = 1e-9;
  const intersectPart = (part, o, d) => {
    if (part.kind === "box") {
      let t0 = -Infinity;
      let t1 = Infinity;
      for (let i = 0; i < 3; i += 1) {
        if (Math.abs(d[i]) < EPS) {
          if (o[i] < part.min[i] || o[i] > part.max[i]) return Infinity;
        } else {
          let a = (part.min[i] - o[i]) / d[i];
          let b = (part.max[i] - o[i]) / d[i];
          if (a > b) [a, b] = [b, a];
          if (a > t0) t0 = a;
          if (b < t1) t1 = b;
          if (t0 > t1) return Infinity;
        }
      }
      return t0 > EPS ? t0 : Infinity;
    }
    if (part.kind === "sphere") {
      const ox = o[0] - part.c[0];
      const oy = o[1] - part.c[1];
      const oz = o[2] - part.c[2];
      const b = ox * d[0] + oy * d[1] + oz * d[2];
      const c = ox * ox + oy * oy + oz * oz - part.r * part.r;
      const disc = b * b - c;
      if (disc < 0) return Infinity;
      const t = -b - Math.sqrt(disc);
      return t > EPS ? t : Infinity;
    }
    let best = Infinity;
    if (part.axis) {
      o = PERM[part.axis](o);
      d = PERM[part.axis](d);
    }
    const X = (o[0] - part.cx) / part.a;
    const Y = (o[1] - part.cy) / part.b;
    const DX = d[0] / part.a;
    const DY = d[1] / part.b;
    const A = DX * DX + DY * DY;
    if (A > EPS) {
      const B = 2 * (X * DX + Y * DY);
      const C = X * X + Y * Y - 1;
      const disc = B * B - 4 * A * C;
      if (disc >= 0) {
        const t = (-B - Math.sqrt(disc)) / (2 * A);
        const z = o[2] + t * d[2];
        if (t > EPS && z >= part.z0 && z <= part.z1) best = t;
      }
    }
    if (Math.abs(d[2]) > EPS) {
      for (const zc of [part.z0, part.z1]) {
        const t = (zc - o[2]) / d[2];
        if (t > EPS && t < best) {
          const u = (o[0] + t * d[0] - part.cx) / part.a;
          const v = (o[1] + t * d[1] - part.cy) / part.b;
          if (u * u + v * v <= 1) best = t;
        }
      }
    }
    return best;
  };

  // Sensor azimuth sector [deg] that can reach an object, or null for the full circle.
  const azimuthSector = (bounds, origin, rotation) => {
    const angles = [];
    for (const x of [bounds.x0, bounds.x1]) {
      for (const y of [-bounds.y, bounds.y]) {
        for (const z of [bounds.z0, bounds.z1]) {
          const p = rotateBack(rotation, [x - origin[0], y - origin[1], z - origin[2]]);
          angles.push(Math.atan2(p[1], p[0]) / RAD);
        }
      }
    }
    angles.sort((a, b) => a - b);
    let gap = 0;
    let start = 0;
    for (let i = 0; i < angles.length; i += 1) {
      const next = i + 1 < angles.length ? angles[i + 1] : angles[0] + 360;
      if (next - angles[i] > gap) {
        gap = next - angles[i];
        start = next;
      }
    }
    if (gap <= 180) return null;
    return { from: start, to: start + 360 - gap };
  };
  const inSector = (theta, sector) => {
    let t = theta;
    while (t < sector.from) t += 360;
    while (t >= sector.from + 360) t -= 360;
    return t <= sector.to;
  };

  const simulate = (input, profiles) => {
    const state = input;
    const profile = profiles[state.device];
    const config = profile.configs[state.config] || profile.configs[0];
    const fov = config.fov || profile.fov;
    const layers = scanLayers(profiles, state.device, state.config);
    const working = RANGES[state.device].working;
    const groundRange = rangeLimit(state, GROUND_REMISSION);
    const inverted = Boolean(state.inverted && state.device !== "multiScan270");
    const rotation = sensorRotation(state.tilt, inverted);
    const origin = [0, 0, state.height];
    const nearRange = minRange(state.device);
    const objects = state.objects.map((obj) => {
      const parts = objectParts(obj);
      const bounds = objectBounds(obj);
      return {
        obj,
        parts,
        bounds,
        hits: 0,
        outOfRange: 0,
        minDist: Infinity,
        frames: [],
        perLayer: new Map(),
        zMin: Infinity,
        zMax: -Infinity,
        points: [],
        rem: obj.rem || "10",
        range: rangeLimit(state, obj.rem || "10"),
      };
    });
    const active = objects.filter((o) => o.parts.length);
    const sectors = active.map((o) => {
      const sector = azimuthSector(o.bounds, origin, rotation);
      return sector && { from: sector.from - 2, to: sector.to + 2 };
    });

    let groundHits = 0;
    let rayCounter = 0;
    const groundPoints = [];
    const totalRays = layers.reduce((sum, l) => sum + Math.round(Math.min(fov, 360) / l.step), 0);
    // Subsample ground points for the 3D view only; counts use every ray.
    const groundStride = Math.max(1, Math.ceil(totalRays / MAX_GROUND_POINTS));
    const maxInterlace = Math.max(...layers.map((l) => l.interlace));
    for (const o of objects) o.frames = Array(maxInterlace).fill(0);

    const hitTest = (d) => {
      let best = Infinity;
      let target = -1;
      for (let i = 0; i < active.length; i += 1) {
        for (const part of active[i].parts) {
          const t = intersectPart(part, origin, d);
          if (t < best) {
            best = t;
            target = i;
          }
        }
      }
      return { t: best, target };
    };

    layers.forEach((layer, layerIndex) => {
      const cphi = Math.cos(layer.phi * RAD);
      const sphi = Math.sin(layer.phi * RAD);
      const step = layer.step;
      const full = fov >= 360;
      const kMin = full ? Math.ceil(-180 / step - 1e-9) : Math.ceil(-fov / 2 / step - 1e-9);
      const kMax = full ? kMin + Math.round(360 / step) - 1 : Math.floor(fov / 2 / step + 1e-9);
      for (let k = kMin; k <= kMax; k += 1) {
        const theta = k * step;
        const d = rotate(rotation, [cphi * Math.cos(theta * RAD), cphi * Math.sin(theta * RAD), sphi]);
        let candidate = false;
        for (let i = 0; i < active.length; i += 1) {
          if (!sectors[i] || inSector(theta, sectors[i])) {
            candidate = true;
            break;
          }
        }
        const hit = candidate ? hitTest(d) : { t: Infinity, target: -1 };
        const tGround = d[2] < -EPS ? -origin[2] / d[2] : Infinity;
        if (hit.target >= 0 && hit.t < tGround) {
          const o = active[hit.target];
          const inRange = hit.t >= nearRange && hit.t <= o.range;
          if (hit.t < o.minDist) o.minDist = hit.t;
          if (inRange) {
            o.hits += 1;
            const z = origin[2] + d[2] * hit.t;
            if (z < o.zMin) o.zMin = z;
            if (z > o.zMax) o.zMax = z;
            o.perLayer.set(layerIndex, (o.perLayer.get(layerIndex) || 0) + 1);
            if (layer.interlace > 1) {
              o.frames[((k % layer.interlace) + layer.interlace) % layer.interlace] += 1;
            } else {
              for (let f = 0; f < maxInterlace; f += 1) o.frames[f] += 1;
            }
          } else {
            o.outOfRange += 1;
          }
          if (o.points.length < MAX_DRAWN_HITS) {
            // Metadata for the point info: layer, angles in the sensor frame, and distance.
            o.points.push({ x: d[0] * hit.t, y: d[1] * hit.t, z: origin[2] + d[2] * hit.t, layer: layerIndex, phi: layer.phi, theta, t: hit.t, inRange });
          }
        } else if (tGround >= nearRange && tGround <= groundRange) {
          groundHits += 1;
          rayCounter += 1;
          if (rayCounter % groundStride === 0 && groundPoints.length < MAX_GROUND_POINTS) {
            groundPoints.push([d[0] * tGround, d[1] * tGround]);
          }
        }
      }
    });

    // Rays in the drawing plane toward the objects (azimuth 0°, and 180° for objects behind a 360° sensor).
    const planeRays = [];
    const behind = active.some((o) => o.bounds.x0 < 0);
    const azimuths = behind && fov >= 360 ? [0, 180] : [0];
    for (const azimuth of azimuths) {
      layers.forEach((layer, layerIndex) => {
        const sign = azimuth ? -1 : 1;
        const d = rotate(rotation, [sign * Math.cos(layer.phi * RAD), 0, Math.sin(layer.phi * RAD)]);
        const tGround = d[2] < -EPS ? -origin[2] / d[2] : Infinity;
        const hit = hitTest(d);
        // Valid: the end point is within the range for its target remission.
        let t = working;
        let end = "none";
        let valid = false;
        if (hit.target >= 0 && hit.t < tGround && hit.t <= working) {
          t = hit.t;
          end = "object";
          valid = hit.t >= nearRange && hit.t <= active[hit.target].range;
        } else if (tGround <= working) {
          t = tGround;
          end = "ground";
          valid = tGround >= nearRange && tGround <= groundRange;
        }
        planeRays.push({ layer: layerIndex, azimuth, phi: layer.phi, highRes: Boolean(layer.highRes), dx: d[0], dz: d[2], t, tGround, end, valid, target: end === "object" ? objects.indexOf(active[hit.target]) : -1 });
      });
    }

    const forward = planeRays.filter((ray) => ray.azimuth === 0 && ray.dx > EPS);
    const groundForward = forward
      .filter((ray) => ray.tGround <= groundRange)
      .map((ray) => ray.dx * ray.tGround);
    const d1 = groundForward.length ? Math.min(...groundForward) : null;
    const d2 = groundForward.length ? Math.max(...groundForward) : null;
    const groundBeyondRange = forward.some((ray) => Number.isFinite(ray.tGround) && ray.tGround > groundRange);

    const results = objects.map((o) => {
      if (!o.parts.length) return { type: "none" };
      const b = o.bounds;
      const frames = maxInterlace > 1 ? o.frames : [o.hits];
      const minDist = Math.min(o.minDist, boxDistance(b, origin));
      return {
        type: o.obj.type,
        rem: o.rem,
        range: o.range,
        hits: o.hits,
        outOfRange: o.outOfRange,
        minDist,
        tooClose: minDist < Math.max(ACCURACY_RANGE, nearRange),
        beyondRange: o.outOfRange > 0 || minDist > o.range,
        frameMin: Math.min(...frames),
        frameMax: Math.max(...frames),
        layersHit: o.perLayer.size,
        // Height range on the object between the lowest and highest counted scan point.
        coveredMin: o.hits ? o.zMin : null,
        coveredMax: o.hits ? o.zMax : null,
        coverage: o.hits ? (o.zMax - o.zMin) / Math.max(b.z1 - b.z0, EPS) : 0,
        perLayer: o.perLayer,
        points: o.points,
        bounds: b,
      };
    });

    return {
      layers,
      range: working,
      groundRange,
      fov,
      hz: config.hz,
      interlace: maxInterlace,
      inverted,
      origin,
      planeRays,
      d1,
      d2,
      groundBeyondRange,
      groundHits,
      groundPoints,
      objects: results,
    };
  };

  // Shortest distance from a point to an object's bounding box (objects are centered at y = 0).
  const boxDistance = (b, p) => {
    const dx = Math.max(b.x0 - p[0], 0, p[0] - b.x1);
    const dy = Math.max(-b.y - p[1], 0, p[1] - b.y);
    const dz = Math.max(b.z0 - p[2], 0, p[2] - b.z1);
    return Math.hypot(dx, dy, dz);
  };

  // Convex side-view (x, z) outlines of an object: one per part for models, otherwise one hull.
  const sideOutlines = (obj) => {
    if (!MODELS[obj.type]) {
      const hull = outline(obj);
      return hull.length ? [hull] : [];
    }
    return modelParts(obj).map((part) => {
      const circle = (cx, cz, r) => Array.from({ length: 16 }, (_, i) => [cx + r * Math.cos((i / 16) * 2 * Math.PI), cz + r * Math.sin((i / 16) * 2 * Math.PI)]);
      if (part.kind === "sphere") return circle(part.c[0], part.c[2], part.r);
      if (part.kind === "cyl" && part.axis === "y") return circle(part.cx, part.cy, part.a);
      const b = partBox(part);
      return [[b.min[0], b.min[2]], [b.max[0], b.min[2]], [b.max[0], b.max[2]], [b.min[0], b.max[2]]];
    });
  };

  // In-plane outline (x, z) of an object for drawing and shadows.
  const outline = (obj) => {
    const b = objectBounds(obj);
    if (!b) return [];
    if (obj.type !== "person") {
      return [
        [b.x0, b.z0],
        [b.x1, b.z0],
        [b.x1, b.z1],
        [b.x0, b.z1],
      ];
    }
    const H = obj.H;
    const cx = obj.x + PERSON.torsoDepth * H;
    const z = obj.z;
    const leg = PERSON.legRadius * H;
    const head = PERSON.headRadius * H;
    const headZ = z + (1 - PERSON.headRadius) * H;
    const points = [
      [cx - leg, z],
      [cx + leg, z],
      [cx + PERSON.torsoDepth * H, z + PERSON.legTop * H],
      [cx + PERSON.torsoDepth * H, z + PERSON.torsoTop * H],
      [cx - PERSON.torsoDepth * H, z + PERSON.torsoTop * H],
      [cx - PERSON.torsoDepth * H, z + PERSON.legTop * H],
    ];
    for (let i = 0; i < 12; i += 1) {
      const a = (i / 12) * 2 * Math.PI;
      points.push([cx + head * Math.cos(a), headZ + head * Math.sin(a)]);
    }
    return convexHull(points);
  };

  const convexHull = (points) => {
    const p = [...points].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
    const lower = [];
    for (const q of p) {
      while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], q) <= 0) lower.pop();
      lower.push(q);
    }
    const upper = [];
    for (const q of p.reverse()) {
      while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], q) <= 0) upper.pop();
      upper.push(q);
    }
    return [...lower.slice(0, -1), ...upper.slice(0, -1)];
  };

  const clipPolygon = (polygon, box) => {
    const edges = [
      (p) => p[0] - box.x0,
      (p) => box.x1 - p[0],
      (p) => p[1] - box.z0,
      (p) => box.z1 - p[1],
    ];
    let out = polygon;
    for (const inside of edges) {
      const input = out;
      out = [];
      for (let i = 0; i < input.length; i += 1) {
        const a = input[i];
        const b = input[(i + 1) % input.length];
        const da = inside(a);
        const db = inside(b);
        if (da >= 0) out.push(a);
        if (da >= 0 !== db >= 0) {
          const t = da / (da - db);
          out.push([a[0] + t * (b[0] - a[0]), a[1] + t * (b[1] - a[1])]);
        }
      }
      if (!out.length) break;
    }
    return out;
  };

  // Region behind an object (in the drawing plane) that no ray from the sensor reaches.
  const shadowPolygon = (hull, sensor, box) => {
    if (hull.length < 3) return [];
    // Angles relative to the direction of the hull center, so objects behind the sensor do not wrap at ±180°.
    const cx = hull.reduce((s, p) => s + p[0], 0) / hull.length;
    const cz = hull.reduce((s, p) => s + p[1], 0) / hull.length;
    const ref = Math.atan2(cz - sensor[1], cx - sensor[0]);
    const angle = (p) => {
      let a = Math.atan2(p[1] - sensor[1], p[0] - sensor[0]) - ref;
      while (a > Math.PI) a -= 2 * Math.PI;
      while (a <= -Math.PI) a += 2 * Math.PI;
      return a;
    };
    let a = hull[0];
    let b = hull[0];
    for (const p of hull) {
      if (angle(p) < angle(a)) a = p;
      if (angle(p) > angle(b)) b = p;
    }
    const far = (p) => {
      const dx = p[0] - sensor[0];
      const dz = p[1] - sensor[1];
      const len = Math.hypot(dx, dz) || 1;
      return [p[0] + (dx / len) * 1e4, p[1] + (dz / len) * 1e4];
    };
    return clipPolygon([a, b, far(b), far(a)], box);
  };

  const encodeState = (state) => {
    const params = new URLSearchParams();
    params.set("d", state.device);
    params.set("c", String(state.config));
    params.set("r", String(state.range));
    params.set("inv", state.inverted ? "1" : "0");
    const n = (value) => String(Math.round(value * 1000) / 1000);
    params.set("h", n(state.height));
    params.set("t", n(state.tilt));
    state.objects.forEach((obj, i) => {
      // Field order kept from earlier links: r (formerly the cylinder radius) is unused.
      params.set(`o${i + 1}`, [obj.type, ...[obj.x, obj.z, obj.d, obj.w, obj.h, obj.r, obj.H].map(n), obj.rem || "10", obj.dir === "rear" ? "rear" : "front"].join(","));
    });
    return `sim?${params.toString()}`;
  };

  const decodeState = (hash, profiles) => {
    const state = cloneState(DEFAULT_STATE);
    const text = String(hash || "").replace(/^#/, "");
    if (!text.startsWith("sim?")) return state;
    const params = new URLSearchParams(text.slice(4));
    const num = (key, fallback) => {
      const value = Number(params.get(key));
      return params.has(key) && Number.isFinite(value) ? value : fallback;
    };
    if (DEVICE_KEYS.includes(params.get("d")) && profiles[params.get("d")]) state.device = params.get("d");
    const configs = profiles[state.device].configs.length;
    state.config = Math.min(configs - 1, Math.max(0, Math.round(num("c", 0))));
    const lights = RANGES[state.device].light.length;
    const range = Math.round(num("r", 0));
    state.range = range >= 0 && range < lights ? range : 0;
    state.inverted = params.has("inv") ? params.get("inv") === "1" : state.inverted;
    state.height = clamp(num("h", state.height), LIMITS.height);
    state.tilt = clamp(num("t", state.tilt), LIMITS.tilt);
    // Objects o1 … o5; links without objects keep the default scene, unknown shapes are skipped.
    const hasObjects = Array.from({ length: MAX_OBJECTS }, (_, i) => params.has(`o${i + 1}`)).some(Boolean);
    if (hasObjects) {
      state.objects = [];
      for (let i = 0; i < MAX_OBJECTS; i += 1) {
        const raw = params.get(`o${i + 1}`);
        if (!raw) continue;
        const [type, ...values] = raw.split(",");
        if (!OBJECT_TYPES[type]) continue;
        const keys = ["x", "z", "d", "w", "h", "r", "H"];
        const next = { ...newObject(), type };
        keys.forEach((key, j) => {
          const value = Number(values[j]);
          if (Number.isFinite(value)) next[key] = clamp(value, LIMITS[key]);
        });
        if (REMISSIONS[values[keys.length]]) next.rem = values[keys.length];
        if (DIRECTIONS[values[keys.length + 1]]) next.dir = values[keys.length + 1];
        state.objects.push(next);
      }
    }
    return state;
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = {
      MIN_RANGE,
      MIN_RANGE_270,
      minRange,
      MAX_OBJECTS,
      newObject,
      ACCURACY_RANGE,
      RANGES,
      REMISSIONS,
      DEFAULT_STATE,
      MULTISCAN100_DEFAULT_STATE,
      defaultStateFor,
      scanLayers,
      rangeLimit,
      sensorRotation,
      objectParts,
      objectBounds,
      sideOutlines,
      MODELS,
      OBJECT_TYPES,
      intersectPart,
      simulate,
      outline,
      shadowPolygon,
      encodeState,
      decodeState,
    };
    return;
  }

  /* ---------------------------------------------------------------- UI */

  const HELP = {
    device: "multiScan100 variant or multiScan270. Sets the scan layers, field of view, and ranges.",
    config: "Scan configuration as selected in SOPASair. Interlaced configurations combine several frames to a finer horizontal resolution.",
    range: "Ambient light for the ranges from the operating instructions (> 99 % detection probability). The ground is assumed to have 10 % remission.",
    remission: "Reflectivity of the object surface: 10 % is dark, 90 % is bright white, a reflector reaches the working range. Sets the range and the color of this object.",
    mounting: "Upright: housing base at the bottom. Upside down mirrors the scan layers vertically.",
    height: "Height H of the measurement origin (center of the optics hood) above the ground. Drag the sensor, the pole, or the round handle in the side view.",
    tilt: "Rotation about the lateral axis. Positive values tilt the front, toward the objects, down. Drag the handle in front of the sensor.",
    shape: "Box, idealized person scaled from the body height, or a fixed-size test target from a standard.",
    dir: "Turns the model around along the viewing direction: front or rear (for the lying child: feet or head) toward the sensor.",
    x: "Horizontal position x of the object's near end (smallest x) from the sensor foot. Negative values, down to −3 m, place the object behind the sensor.",
    covered: "Height range on the object between the lowest and highest scan point, and its share of the object height. Close to the sensor, the layers cover only part of the object, so detection algorithms see it smaller than it is.",
    z: "Height z of the object bottom above the ground, for example for a hanging load.",
    d: "Size of the box along the viewing direction.",
    w: "Size of the box across the viewing direction. Counts for the points, not visible in the side view.",
    h: "Height h of the box.",
    H: "Body height h of the person. Legs, torso, and head are scaled from it.",
    points: "Scan points on the object within the range for its remission in one frame, from all azimuth angles.",
    framePoints: "Points in each single frame of the interlaced sequence (minimum–maximum).",
    layersHit: "Number of scan layers with at least one point on the object.",
    rangeObj: "Range for the remission of the object at the selected ambient light.",
  };
  const helpToggle = (label, text, id = "") =>
    `<details class="calculator__help"><summary aria-label="Help for ${label.replace(/ \[.*\]$/, "")}">?</summary><p${id ? ` id="${id}"` : ""}>${text}</p></details>`;

  const SVG_W = 960;
  // Smallest 2D zoom factor relative to the fitted view; further zooming out only squeezes the scene.
  const ZOOM_MIN = 0.6;
  const SVG_H = 540;
  const PAD = 36;
  const fmt = (value, digits = 2) =>
    value === null || value === undefined || !Number.isFinite(value) ? "–" : value.toFixed(digits);
  const esc = (text) =>
    String(text).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  // Size values printed next to an object in the 2D and 3D views.
  const sizeLabel = (obj) => {
    if (MODELS[obj.type]) {
      const b = objectBounds(obj);
      return `l × w × h = ${fmt(b.x1 - b.x0)} × ${fmt(2 * b.y)} × ${fmt(b.z1 - b.z0)} m`;
    }
    if (obj.type === "person") return `h = ${fmt(obj.H)} m`;
    return `h = ${fmt(obj.h)} m, d = ${fmt(obj.d)} m`;
  };
  const isSizable = (obj) => ["box", "person"].includes(obj.type);

  const niceStep = (span) => {
    const raw = span / 10;
    const base = 10 ** Math.floor(Math.log10(raw));
    return [1, 2, 5, 10].map((m) => m * base).find((s) => s >= raw) || base * 10;
  };

  /* -------- 3D view: lightweight canvas renderer, orbit camera, painter's algorithm -------- */
  const createView3d = (canvas, { requestRender, showWheelHint, wheelZooms, onEdit, onSelect, onInfo, activeLabel }) => {
    const ctx = canvas.getContext("2d");
    const cam = { yaw: -2.4, pitch: 0.42, dist: 20, maxDist: 50, target: [6, 0, 1.5] };
    const LIGHT = (() => {
      const v = [-0.35, -0.55, 0.76];
      const n = Math.hypot(...v);
      return v.map((c) => c / n);
    })();
    let extent = { x0: -2, x1: 20, y: 10, z1: 5 };
    let pattern = null;
    // Honeycomb texture of a retroreflector (three hexagon rows tile with a negligible seam).
    const reflectorPattern = () => {
      if (pattern) return pattern;
      const tile = document.createElement("canvas");
      tile.width = 15;
      tile.height = 26;
      const t = tile.getContext("2d");
      t.fillStyle = "#b9bec4";
      t.fillRect(0, 0, 15, 26);
      t.strokeStyle = "#f5f7f8";
      t.lineWidth = 1.3;
      for (const y of [0, 8.66, 17.32]) {
        t.beginPath();
        t.moveTo(0, y + 4.33);
        [[2.5, 0], [7.5, 0], [10, 4.33], [7.5, 8.66], [2.5, 8.66], [0, 4.33]].forEach(([x, dy]) => t.lineTo(x, y + dy));
        t.moveTo(10, y + 4.33);
        t.lineTo(15, y + 4.33);
        t.stroke();
      }
      pattern = ctx.createPattern(tile, "repeat");
      return pattern;
    };
    let drag = null;
    let lastState = null;
    // Hovered object or sensor (shows its values) and the scan points drawn last, for the point info.
    let hover = null;
    let shownHits = [];
    let sensorScreen = null;
    // Ground points drawn last ([screen x, screen y, x, y]) and the one under the pointer.
    let shownGround = [];
    let groundHover = null;

    const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
    const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
    const norm = (a) => {
      const n = Math.hypot(a[0], a[1], a[2]) || 1;
      return [a[0] / n, a[1] / n, a[2] / n];
    };
    const color = (name, fallback) => getComputedStyle(canvas).getPropertyValue(name).trim() || fallback;
    const rgb = (hex) => {
      const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
      if (!m) return [128, 128, 128];
      const v = parseInt(m[1], 16);
      return [(v >> 16) & 255, (v >> 8) & 255, v & 255];
    };
    const shade = (base, normal) => {
      const k = 0.55 + 0.45 * Math.abs(dot(norm(normal), LIGHT));
      return `rgb(${base.map((c) => Math.round(c * k)).join(",")})`;
    };

    const basis = () => {
      const cp = Math.cos(cam.pitch);
      const eye = [
        cam.target[0] + cam.dist * cp * Math.cos(cam.yaw),
        cam.target[1] + cam.dist * cp * Math.sin(cam.yaw),
        cam.target[2] + cam.dist * Math.sin(cam.pitch),
      ];
      const f = norm(sub(cam.target, eye));
      const r = norm(cross(f, [0, 0, 1]));
      const u = cross(r, f);
      return { eye, f, r, u };
    };

    const reset = (sim) => {
      if (!sim) return;
      let x0 = -2;
      let x1 = 6;
      let z1 = sim.origin[2];
      for (const o of sim.objects) {
        if (!o.bounds) continue;
        x0 = Math.min(x0, o.bounds.x0 - 1);
        x1 = Math.max(x1, o.bounds.x1 + 1);
        z1 = Math.max(z1, o.bounds.z1);
      }
      if (sim.d1 !== null) x1 = Math.max(x1, Math.min(sim.d1 + 2, sim.range));
      extent = { x0, x1, y: Math.max(4, x1 * 0.5), z1: z1 + 1 };
      cam.target = [(x0 + 2 + x1) / 2, 0, Math.min(z1, 3) / 2];
      cam.dist = Math.hypot(x1 - x0 - 2, z1) * 1.2;
      // Zooming out stops at 2 × the fitted distance, so the scene never shrinks to a dot.
      cam.maxDist = cam.dist * 2;
      cam.yaw = -2.4;
      cam.pitch = 0.42;
    };
    const clampCam = () => {
      cam.pitch = clamp(cam.pitch, [0.03, 1.5]);
      cam.dist = clamp(cam.dist, [0.5, cam.maxDist]);
      const span = Math.max(extent.x1 - extent.x0, extent.z1, 2);
      cam.target = [
        clamp(cam.target[0], [extent.x0 - span * 0.5, extent.x1 + span * 0.5]),
        clamp(cam.target[1], [-extent.y - span * 0.5, extent.y + span * 0.5]),
        clamp(cam.target[2], [0, extent.z1 + span * 0.5]),
      ];
    };

    const render = (sim, state) => {
      lastState = state;
      const W = canvas.clientWidth;
      if (!W) return;
      const dpr = window.devicePixelRatio || 1;
      const H = Math.round((W * SVG_H) / SVG_W);
      canvas.style.height = `${H}px`;
      if (canvas.width !== Math.round(W * dpr) || canvas.height !== Math.round(H * dpr)) {
        canvas.width = Math.round(W * dpr);
        canvas.height = Math.round(H * dpr);
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      clampCam();
      const { eye, f, r, u } = basis();
      const focal = H * 1.2;
      const NEAR = 0.05;
      const toCam = (p) => {
        const v = sub(p, eye);
        return [dot(v, r), dot(v, u), dot(v, f)];
      };
      const proj = (c) => [W / 2 + (focal * c[0]) / c[2], H / 2 - (focal * c[1]) / c[2]];
      const clipNear = (pts) => {
        const out = [];
        for (let i = 0; i < pts.length; i += 1) {
          const a = pts[i];
          const b = pts[(i + 1) % pts.length];
          if (a[2] >= NEAR) out.push(a);
          if ((a[2] >= NEAR) !== (b[2] >= NEAR)) {
            const t = (NEAR - a[2]) / (b[2] - a[2]);
            out.push([a[0] + t * (b[0] - a[0]), a[1] + t * (b[1] - a[1]), NEAR]);
          }
        }
        return out;
      };
      const items = [];
      const face = (pts, base, alpha = 1, cull = false, depth = null) => {
        const n = cross(sub(pts[1], pts[0]), sub(pts[2], pts[0]));
        // Back-face culling for closed, outward-oriented solids.
        if (cull && dot(n, sub(eye, pts[0])) <= 0) return;
        const c = clipNear(pts.map(toCam));
        if (c.length < 3) return;
        const item = { depth: depth ?? c.reduce((s, p) => s + p[2], 0) / c.length, kind: "face", pts: c.map(proj), alpha };
        if (base === "refl") {
          // Reflector: honeycomb texture, darkened by the light angle, with a glossy highlight.
          const k = Math.abs(dot(norm(n), LIGHT));
          item.fill = reflectorPattern();
          item.shadow = (1 - k) * 0.55;
          item.gloss = 0.35 * k ** 6;
        } else {
          item.fill = shade(base, n);
        }
        items.push(item);
      };
      const segment = (a, b, stroke, width = 1, alpha = 1) => {
        const c = clipNear([toCam(a), toCam(b)]);
        if (c.length < 2) return;
        items.push({ depth: (c[0][2] + c[1][2]) / 2, kind: "line", pts: [proj(c[0]), proj(c[1])], stroke, width, alpha });
      };

      const bg = color("--sim-bg", "#ffffff");
      const ink = color("--sim-ink", "#222222");
      const groundColor = color("--sim-ground", "#ececec");
      const gridColor = color("--sim-grid", "#d0d0d0");
      const rayColor = color("--sim-ray", "#0a7bd6");
      const hitColor = color("--sim-hit", "#007cc1");
      const invalidColor = color("--sim-invalid", "#9e9e9e");
      const remBase = {
        10: rgb(color("--sim-rem-10", "#3b3f45")),
        90: rgb(color("--sim-rem-90", "#f4f4f4")),
        refl: "refl",
      };

      // Ground plane and grid, drawn first.
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);
      const gx0 = extent.x0 - 4;
      const gx1 = Math.max(extent.x1 + 4, 10);
      const gy = Math.max(extent.y, 6);
      const groundPoly = clipNear([[gx0, -gy, 0], [gx1, -gy, 0], [gx1, gy, 0], [gx0, gy, 0]].map(toCam)).map(proj);
      if (groundPoly.length >= 3) {
        ctx.fillStyle = groundColor;
        ctx.beginPath();
        groundPoly.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
        ctx.fill();
      }
      const step = niceStep(gx1 - gx0);
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      const gridLine = (a, b) => {
        const c = clipNear([toCam(a), toCam(b)]);
        if (c.length < 2) return;
        const [p, q] = [proj(c[0]), proj(c[1])];
        ctx.moveTo(p[0], p[1]);
        ctx.lineTo(q[0], q[1]);
      };
      for (let x = Math.ceil(gx0 / step) * step; x <= gx1; x += step) gridLine([x, -gy, 0], [x, gy, 0]);
      for (let y = Math.ceil(-gy / step) * step; y <= gy; y += step) gridLine([gx0, y, 0], [gx1, y, 0]);
      ctx.stroke();

      // Screen text with a halo in the background color, so it stays readable on any surface.
      const textAt = (p, text, { dx = 0, dy = 0, align = "center", font = "11px sans-serif", fill = ink } = {}) => {
        const c = toCam(p);
        if (c[2] < NEAR) return false;
        const [sx, sy] = proj(c);
        if (sx < -80 || sx > W + 80 || sy < -20 || sy > H + 20) return false;
        ctx.font = font;
        ctx.textAlign = align;
        ctx.lineJoin = "round";
        ctx.lineWidth = 3;
        ctx.strokeStyle = bg;
        ctx.strokeText(text, sx + dx, sy + dy);
        ctx.fillStyle = fill;
        ctx.fillText(text, sx + dx, sy + dy);
        return true;
      };
      const groundLine = (a, b, stroke, width) => {
        const c = clipNear([toCam(a), toCam(b)]);
        if (c.length < 2) return;
        const [p, q] = [proj(c[0]), proj(c[1])];
        ctx.strokeStyle = stroke;
        ctx.lineWidth = width;
        ctx.beginPath();
        ctx.moveTo(p[0], p[1]);
        ctx.lineTo(q[0], q[1]);
        ctx.stroke();
      };

      // Distance grid: x and y axes on the ground with distance labels [m].
      const tickColor = color("--sim-tick", "#777777");
      groundLine([gx0, 0, 0], [gx1, 0, 0], tickColor, 1);
      groundLine([0, -gy, 0], [0, gy, 0], tickColor, 1);
      for (let x = Math.ceil(gx0 / step) * step; x <= gx1; x += step) {
        if (Math.abs(x) > EPS) textAt([x, 0, 0], `${+x.toFixed(2)}`, { dy: 13, fill: tickColor });
      }
      for (let y = Math.ceil(-gy / step) * step; y <= gy; y += step) {
        if (Math.abs(y) > EPS) textAt([0, y, 0], `${+y.toFixed(2)}`, { dy: 13, fill: tickColor });
      }
      textAt([gx1, 0, 0], "x [m]", { dy: -6, font: "bold 12px sans-serif" });
      textAt([0, gy, 0], "y [m]", { dy: -6, font: "bold 12px sans-serif" });
      // Height ruler z at the grid corner farthest from the camera, behind the scene.
      const corners = [[gx0, -gy], [gx1, -gy], [gx1, gy], [gx0, gy]];
      const [cx, cy] = corners.reduce((a, b) => (toCam([...b, 0])[2] > toCam([...a, 0])[2] ? b : a));
      const zStep = niceStep(extent.z1 * 2.5);
      const zTop = Math.ceil(extent.z1 / zStep) * zStep;
      groundLine([cx, cy, 0], [cx, cy, zTop], tickColor, 1);
      for (let z = zStep; z <= zTop + EPS; z += zStep) {
        groundLine([cx, cy, z], [cx + (cx > 0 ? -0.3 : 0.3), cy, z], tickColor, 1);
        textAt([cx, cy, z], `${+z.toFixed(2)}`, { dx: -5, dy: 4, align: "right", fill: tickColor });
      }
      textAt([cx, cy, zTop], "z [m]", { dy: -10, font: "bold 12px sans-serif" });

      // Ground hits (subsampled) lie on the ground and are drawn below everything else.
      // Valid ground hits in blue.
      ctx.fillStyle = hitColor;
      shownGround = [];
      for (const [x, y] of sim.groundPoints) {
        const c = toCam([x, y, 0]);
        if (c[2] < NEAR) continue;
        const [sx, sy] = proj(c);
        shownGround.push([sx, sy, x, y]);
        ctx.fillRect(sx - 0.7, sy - 0.7, 1.4, 1.4);
      }

      // Pole and true-to-scale sensor housing from the SICK NVIDIA Omniverse CAD models:
      // round housing Ø 100.3 mm and the system connector at the rear (block and foot).
      const h = sim.origin[2];
      const rot = sensorRotation(state.tilt, sim.inverted);
      const toWorld3 = (p) => rotate(rot, p).map((v, i) => v + sim.origin[i]);
      // Prism between local heights z0 and z1 with outlines a (bottom) and b (top); measurement origin at 0.
      // Each convex part is culled and sorted as a whole by its center, so stacked parts never interleave.
      const prism = (a, b, z0, z1, base) => {
        const cx = a.reduce((s, p) => s + p[0], 0) / a.length;
        const cy = a.reduce((s, p) => s + p[1], 0) / a.length;
        const lo = a.map(([x, y]) => toWorld3([x, y, z0]));
        const hi = b.map(([x, y]) => toWorld3([x, y, z1]));
        const depth = toCam(toWorld3([cx, cy, (z0 + z1) / 2]))[2];
        for (let i = 0; i < lo.length; i += 1) {
          const j = (i + 1) % lo.length;
          face([lo[i], lo[j], hi[j], hi[i]], base, 1, true, depth);
        }
        face([...lo].reverse(), base, 1, true, depth);
        face(hi, base, 1, true, depth);
      };
      const circle = (r, n = 32) => Array.from({ length: n }, (_, i) => [r * Math.cos((i / n) * 2 * Math.PI), r * Math.sin((i / n) * 2 * Math.PI)]);
      const rect = (x0, x1, w) => [[x0, -w / 2], [x1, -w / 2], [x1, w / 2], [x0, w / 2]];
      const HOOD = [28, 28, 28];
      const RING = state.device === "multiScan270" ? [180, 184, 188] : [47, 155, 255];
      const BASE = [48, 50, 53];
      // Heights relative to the measurement origin: multiScan200 120 mm (origin 83.6 mm above the
      // connector foot), multiScan100 98.5 mm housing (origin 69.5 mm above the base).
      const H270 = state.device === "multiScan270";
      const bottom = H270 ? -0.0637 : -0.0695;
      const top = H270 ? 0.0353 : 0.029;
      prism(circle(0.05015), circle(0.05015), bottom, -0.035, BASE);
      prism(circle(0.0484), circle(0.0484), -0.035, -0.029, RING);
      prism(circle(0.0469), circle(0.0469), -0.029, top - 0.004, HOOD);
      prism(circle(0.0469), circle(0.0413), top - 0.004, top, HOOD);
      // System connector: block behind the housing and foot below it, 55.3 mm wide.
      prism(rect(-0.0704, -0.0308, 0.0553), rect(-0.0704, -0.0308, 0.0553), bottom, bottom + 0.0191, BASE);
      prism(rect(-0.0499, -0.0308, 0.0553), rect(-0.0499, -0.0308, 0.0553), bottom - 0.0204, bottom, BASE);
      // Pole from the ground, centered below the housing.
      segment([0, 0, 0], toWorld3([0, 0, bottom]), "#777777", 4);
      // In-plane rays; high-resolution layers (multiScan100, 0.125°) are drawn thicker.
      for (const ray of sim.planeRays) {
        segment(sim.origin, [ray.dx * ray.t, 0, h + ray.dz * ray.t], ray.valid ? rayColor : invalidColor, ray.highRes ? 2.6 : 1, ray.highRes ? 0.85 : 0.55);
      }

      // Objects as flat-shaded faces.
      state.objects.forEach((obj) => {
        const objectBase = remBase[obj.rem || "10"];
        for (const part of objectParts(obj)) {
          if (part.kind === "box") {
            const [a, b] = [part.min, part.max];
            const v = (i, j, k) => [i ? b[0] : a[0], j ? b[1] : a[1], k ? b[2] : a[2]];
            [
              [v(0, 0, 0), v(1, 0, 0), v(1, 1, 0), v(0, 1, 0)],
              [v(0, 0, 1), v(1, 0, 1), v(1, 1, 1), v(0, 1, 1)],
              [v(0, 0, 0), v(1, 0, 0), v(1, 0, 1), v(0, 0, 1)],
              [v(0, 1, 0), v(1, 1, 0), v(1, 1, 1), v(0, 1, 1)],
              [v(0, 0, 0), v(0, 1, 0), v(0, 1, 1), v(0, 0, 1)],
              [v(1, 0, 0), v(1, 1, 0), v(1, 1, 1), v(1, 0, 1)],
            ].forEach((q) => face(q, objectBase));
          } else if (part.kind === "cyl") {
            const n = 20;
            const un = part.axis ? UNPERM[part.axis] : (p) => p;
            const ring = (z) => Array.from({ length: n }, (_, i) => {
              const a = (i / n) * 2 * Math.PI;
              return un([part.cx + part.a * Math.cos(a), part.cy + part.b * Math.sin(a), z]);
            });
            const lo = ring(part.z0);
            const hi = ring(part.z1);
            for (let i = 0; i < n; i += 1) face([lo[i], lo[(i + 1) % n], hi[(i + 1) % n], hi[i]], objectBase);
            face(hi, objectBase);
            face([...lo].reverse(), objectBase);
          } else {
            const nLat = 8;
            const nLon = 14;
            const pt = (i, j) => {
              const th = (i / nLat) * Math.PI;
              const ph = (j / nLon) * 2 * Math.PI;
              return [part.c[0] + part.r * Math.sin(th) * Math.cos(ph), part.c[1] + part.r * Math.sin(th) * Math.sin(ph), part.c[2] + part.r * Math.cos(th)];
            };
            for (let i = 0; i < nLat; i += 1) {
              for (let j = 0; j < nLon; j += 1) face([pt(i, j), pt(i + 1, j), pt(i + 1, j + 1), pt(i, j + 1)], objectBase);
            }
          }
        }
      });

      // Hits on objects are drawn after all faces. Each one is visible unless an object surface
      // lies between the camera and the point (exact ray test, independent of face sorting).
      const occluders = state.objects.flatMap((obj) => objectParts(obj));
      const visibleHits = [];
      sim.objects.forEach((result, objectIndex) => {
        if (!result.points) return;
        for (const p of result.points) {
          const q = [p.x, p.y, p.z];
          const v = sub(q, eye);
          const dist = Math.hypot(v[0], v[1], v[2]);
          const d = [v[0] / dist, v[1] / dist, v[2] / dist];
          const tolerance = Math.max(0.005, dist * 0.002);
          if (occluders.some((part) => intersectPart(part, eye, d) < dist - tolerance)) continue;
          const c = toCam(q);
          if (c[2] < NEAR) continue;
          visibleHits.push({ pt: proj(c), fill: p.inRange ? hitColor : invalidColor, point: p, objectIndex });
        }
      });

      items.sort((a, b) => b.depth - a.depth);
      for (const it of items) {
        if (it.kind === "face") {
          ctx.globalAlpha = it.alpha;
          ctx.fillStyle = it.fill;
          ctx.strokeStyle = it.fill;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          it.pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
          ctx.closePath();
          ctx.fill();
          if (it.shadow !== undefined) {
            ctx.fillStyle = `rgba(0,0,0,${it.shadow})`;
            ctx.fill();
            ctx.fillStyle = `rgba(255,255,255,${it.gloss})`;
            ctx.fill();
            ctx.strokeStyle = "#8a9096";
          }
          ctx.stroke();
        } else if (it.kind === "line") {
          ctx.globalAlpha = it.alpha;
          ctx.strokeStyle = it.stroke;
          ctx.lineWidth = it.width;
          ctx.beginPath();
          ctx.moveTo(it.pts[0][0], it.pts[0][1]);
          ctx.lineTo(it.pts[1][0], it.pts[1][1]);
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;

      shownHits = visibleHits;
      for (const hit of visibleHits) {
        ctx.fillStyle = hit.fill;
        ctx.beginPath();
        ctx.arc(hit.pt[0], hit.pt[1], 2.2, 0, 2 * Math.PI);
        ctx.fill();
      }

      // Hovered ground hit: guides along the ground to the x and y axes, with its position.
      if (groundHover) {
        const [gx, gy] = groundHover;
        ctx.save();
        ctx.setLineDash([5, 4]);
        const guide = (a, b) => {
          const c = clipNear([toCam(a), toCam(b)]);
          if (c.length < 2) return;
          const [p1, p2] = [proj(c[0]), proj(c[1])];
          ctx.strokeStyle = ink;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(p1[0], p1[1]);
          ctx.lineTo(p2[0], p2[1]);
          ctx.stroke();
        };
        guide([gx, gy, 0], [gx, 0, 0]);
        guide([gx, gy, 0], [0, gy, 0]);
        ctx.restore();
        const dot = toCam([gx, gy, 0]);
        if (dot[2] >= NEAR) {
          const [sx, sy] = proj(dot);
          ctx.fillStyle = "#ffab00";
          ctx.beginPath();
          ctx.arc(sx, sy, 4, 0, 2 * Math.PI);
          ctx.fill();
        }
        textAt([gx, 0, 0], `x = ${fmt(gx)} m`, { dy: 14, font: "bold 12px sans-serif" });
        textAt([0, gy, 0], `y = ${fmt(gy)} m`, { dy: 14, font: "bold 12px sans-serif" });
        textAt([gx, gy, 0], `${fmt(Math.hypot(gx, gy))} m from the sensor foot`, { dy: -10 });
      }

      // Values of the draggable items, shown while hovering or moving them (as in the side view).
      const bold = "bold 12px sans-serif";
      const so = toCam(sim.origin);
      sensorScreen = so[2] >= NEAR ? proj(so) : null;
      const active = (kind, index) => (hover && hover.kind === kind && hover.index === index) || activeLabel(kind, index);
      {
        textAt(sim.origin, `H = ${fmt(state.height)} m`, { dy: -22, font: bold });
        textAt(sim.origin, `tilt ${fmt(state.tilt, 1)}°`, { dy: -9 });
      }
      state.objects.forEach((obj, i) => {
        const result = sim.objects[i];
        const b = result.bounds;
        if (obj.type === "none" || !b) return;
        const count = result.hits;
        const flag = result.tooClose ? " – too close" : result.beyondRange ? " – beyond range" : "";
        const top = [(b.x0 + b.x1) / 2, 0, b.z1];
        textAt(top, `Object ${i + 1}: ${count} ${count === 1 ? "point" : "points"}${flag}`, { dy: -16, font: bold });
        if (active("object", i) || (drag && drag.object && drag.object.index === i)) {
          textAt(top, sizeLabel(obj), { dy: -44 });
          textAt(top, `x = ${fmt(obj.x)} m, z = ${fmt(obj.z)} m`, { dy: -30 });
        }
      });
      ctx.textAlign = "left";

      // Usage hint.
      ctx.fillStyle = ink;
      ctx.font = "12px sans-serif";
      ctx.fillText(`Drag: rotate · Drag object: move along x · Click: select or point info · Shift+drag or WASD: pan · ${wheelZooms() ? "Scroll" : "Ctrl+scroll"}: zoom · Grid: ${+step.toFixed(2)} m`, 10, H - 10);
    };

    const zoomBy = (direction) => {
      cam.dist *= direction === "in" ? 1 / 1.3 : 1.3;
      requestRender();
    };

    // Ray from the camera through a pointer position, in world coordinates.
    const pointerRay = (event) => {
      const rect = canvas.getBoundingClientRect();
      const { eye, f, r, u } = basis();
      const focal = canvas.clientHeight * 1.2;
      const cx = (event.clientX - rect.left - rect.width / 2) / focal;
      const cy = -(event.clientY - rect.top - rect.height / 2) / focal;
      return { eye, d: norm([0, 1, 2].map((i) => f[i] + r[i] * cx + u[i] * cy)) };
    };
    // Nearest object under the pointer: index and hit point, or null.
    const pickObject = (event) => {
      if (!lastState) return null;
      const { eye, d } = pointerRay(event);
      let best = { t: Infinity, index: -1 };
      lastState.objects.forEach((obj, index) => {
        for (const part of objectParts(obj)) {
          const t = intersectPart(part, eye, d);
          if (t < best.t) best = { t, index };
        }
      });
      if (best.index < 0) return null;
      return { index: best.index, point: [0, 1, 2].map((i) => eye[i] + d[i] * best.t) };
    };
    // x of the point on the line through p parallel to the x axis that is closest to the pointer ray.
    const xOnLine = (event, p) => {
      const { eye, d } = pointerRay(event);
      const w = sub(p, eye);
      const b = d[0];
      const denom = 1 - b * b;
      if (denom < 1e-4) return null;
      const s = (b * dot(d, w) - w[0]) / denom;
      return p[0] + s;
    };

    canvas.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      canvas.focus({ preventScroll: true });
      const pan = event.shiftKey || event.button === 2 || event.ctrlKey;
      const pick = !pan && event.button === 0 ? pickObject(event) : null;
      drag = { x: event.clientX, y: event.clientY, sx: event.clientX, sy: event.clientY, pan, pointer: event.pointerId };
      if (pick) {
        // Drag an object along the x axis, as in the side view.
        const obj = lastState.objects[pick.index];
        drag.object = { index: pick.index, point: pick.point, startX: obj.x, startLine: xOnLine(event, pick.point) };
      }
      canvas.setPointerCapture(event.pointerId);
      canvas.classList.add("mounting-sim__canvas--dragging");
    });
    canvas.addEventListener("pointermove", (event) => {
      if (!drag) {
        if (event.pointerType !== "mouse") return;
        const pick = pickObject(event);
        const next = pick ? { kind: "object", index: pick.index } : nearSensor(event) ? { kind: "sensor" } : null;
        canvas.classList.toggle("mounting-sim__canvas--object", Boolean(pick));
        canvas.classList.toggle("mounting-sim__canvas--pointer", !pick && (Boolean(next) || Boolean(hitAt(event))));
        const ground = !next && !hitAt(event) ? groundAt(event) : null;
        canvas.classList.toggle("mounting-sim__canvas--pointer", !pick && (Boolean(next) || Boolean(hitAt(event))));
        if (JSON.stringify(next) !== JSON.stringify(hover) || JSON.stringify(ground) !== JSON.stringify(groundHover)) {
          hover = next;
          groundHover = ground;
          requestRender();
        }
        return;
      }
      if (event.pointerId !== drag.pointer) return;
      if (drag.object) {
        const { index, point, startX, startLine } = drag.object;
        const x = xOnLine(event, point);
        if (x === null || startLine === null) return;
        const obj = lastState.objects[index];
        obj.x = clamp(Math.round((startX + x - startLine) / 0.01) * 0.01, LIMITS.x);
        onEdit();
        return;
      }
      const dx = event.clientX - drag.x;
      const dy = event.clientY - drag.y;
      drag.x = event.clientX;
      drag.y = event.clientY;
      if (drag.pan) {
        const { r, f } = basis();
        const k = cam.dist / (canvas.clientHeight * 1.2);
        const fh = norm([f[0], f[1], 0]);
        cam.target = [
          cam.target[0] - dx * k * r[0] + dy * k * fh[0],
          cam.target[1] - dx * k * r[1] + dy * k * fh[1],
          cam.target[2],
        ];
      } else {
        cam.yaw -= dx * 0.008;
        cam.pitch += dy * 0.008;
      }
      requestRender();
    });
    const end = (event) => {
      if (!drag || event.pointerId !== drag.pointer) return;
      const click = event.type === "pointerup" && Math.hypot(event.clientX - drag.sx, event.clientY - drag.sy) < 4;
      drag = null;
      canvas.classList.remove("mounting-sim__canvas--dragging");
      if (!click) {
        requestRender();
        return;
      }
      // A click without movement opens the point info, or the settings of an object or the sensor.
      const hit = hitAt(event);
      if (hit) {
        onInfo({ point: hit.point, objectIndex: hit.objectIndex }, event.clientX, event.clientY);
        return;
      }
      const pick = pickObject(event);
      if (pick) onSelect({ kind: "object", index: pick.index }, event.clientX, event.clientY);
      else if (nearSensor(event)) onSelect({ kind: "device" }, event.clientX, event.clientY);
      else onSelect(null);
    };
    // Scan point drawn within 6 px of the pointer, nearest first.
    const hitAt = (event) => {
      const rect = canvas.getBoundingClientRect();
      const mx = event.clientX - rect.left;
      const my = event.clientY - rect.top;
      let best = null;
      let bestD = 6;
      for (const hit of shownHits) {
        const dd = Math.hypot(hit.pt[0] - mx, hit.pt[1] - my);
        if (dd < bestD) {
          bestD = dd;
          best = hit;
        }
      }
      return best;
    };
    // Ground point drawn within 5 px of the pointer: [x, y] in metres.
    const groundAt = (event) => {
      const rect = canvas.getBoundingClientRect();
      const mx = event.clientX - rect.left;
      const my = event.clientY - rect.top;
      let best = null;
      let bestD = 5;
      for (const g of shownGround) {
        const dd = Math.hypot(g[0] - mx, g[1] - my);
        if (dd < bestD) {
          bestD = dd;
          best = [g[2], g[3]];
        }
      }
      return best;
    };
    const nearSensor = (event) => {
      if (!sensorScreen) return false;
      const rect = canvas.getBoundingClientRect();
      return Math.hypot(sensorScreen[0] - (event.clientX - rect.left), sensorScreen[1] - (event.clientY - rect.top)) < 14;
    };
    // WASD: move the camera target in the ground plane (W forward, A left).
    const move = (key) => {
      const { r, f } = basis();
      const fh = norm([f[0], f[1], 0]);
      const k = cam.dist * 0.05;
      const dir = { w: [fh, 1], s: [fh, -1], a: [r, -1], d: [r, 1] }[key];
      if (!dir) return false;
      cam.target = [cam.target[0] + dir[0][0] * k * dir[1], cam.target[1] + dir[0][1] * k * dir[1], cam.target[2]];
      requestRender();
      return true;
    };
    canvas.addEventListener("pointerleave", () => {
      if ((hover || groundHover) && !drag) {
        hover = null;
        groundHover = null;
        requestRender();
      }
    });
    canvas.addEventListener("pointerup", end);
    canvas.addEventListener("pointercancel", end);
    canvas.addEventListener("contextmenu", (event) => event.preventDefault());
    canvas.addEventListener(
      "wheel",
      (event) => {
        // Plain wheel scrolls the page, except in full screen; Ctrl/Cmd + wheel and trackpad pinch zoom.
        if (!(event.ctrlKey || event.metaKey || wheelZooms())) {
          showWheelHint();
          return;
        }
        event.preventDefault();
        cam.dist = clamp(cam.dist * Math.exp(clamp(event.deltaY, [-100, 100]) * 0.004), [0.5, cam.maxDist]);
        requestRender();
      },
      { passive: false },
    );
    canvas.addEventListener("keydown", (event) => {
      const keys = {
        ArrowLeft: () => (cam.yaw += 0.08),
        ArrowRight: () => (cam.yaw -= 0.08),
        ArrowUp: () => (cam.pitch += 0.06),
        ArrowDown: () => (cam.pitch -= 0.06),
        "+": () => (cam.dist /= 1.3),
        "=": () => (cam.dist /= 1.3),
        "-": () => (cam.dist *= 1.3),
      };
      if (!keys[event.key]) return;
      event.preventDefault();
      keys[event.key]();
      requestRender();
    });

    return { render, reset, zoom: zoomBy, move };
  };

  const initialize = (root) => {
    if (root.dataset.initialized === "true") return;
    const profiles = window.SickLidarProfiles;
    const svg = root.querySelector("[data-sim-view]");
    const results = root.querySelector("[data-sim-results]");
    const status = root.querySelector("[data-sim-status]");
    if (!svg || !results || !status) return;
    if (!profiles) {
      status.dataset.state = "error";
      status.textContent = "The simulator could not load its device data.";
      return;
    }
    root.dataset.initialized = "true";

    let state = decodeState(window.location.hash, profiles);
    let view = null;
    let drag = null;
    let frame = 0;
    let hashTimer = 0;
    let zoom = 1;
    let mode3d = false;
    let last = null;
    let pan = { x: 0, z: 0 };
    let touched = window.location.hash.startsWith("#sim?");
    // Selected object or device (settings popover, Delete key) and the item whose values are shown.
    let selected = null;
    let labelFocus = null;
    // Ground hit under the pointer in the side view: its position is marked on the x axis.
    let groundHover = null;
    let stageActive = false;
    const uid = `sim${Math.random().toString(36).slice(2, 8)}`;

    /* -------- device filter of the site header -------- */
    // The site-wide device filter (multiScan100, multiScan200, …) narrows the device list.
    const FAMILIES = { multiScan100: ["multiScan136", "multiScan165", "multiScan166"], multiScan200: ["multiScan270"] };
    const readFilter = () => {
      if (Array.isArray(window.SICK_DEVICE_FILTER)) return window.SICK_DEVICE_FILTER;
      try {
        const saved = JSON.parse(window.localStorage.getItem("sick-lidar-device-filter-v4") || "[]");
        return Array.isArray(saved) ? saved : [];
      } catch {
        return [];
      }
    };
    const allowedDevices = () => {
      const all = DEVICE_KEYS.filter((key) => profiles[key]);
      const families = readFilter().filter((family) => FAMILIES[family]);
      if (!families.length) return all;
      const keys = families.flatMap((family) => FAMILIES[family]);
      return all.filter((key) => keys.includes(key));
    };
    const applyFilter = () => {
      const allowed = allowedDevices();
      if (!allowed.includes(state.device)) {
        const preferred = defaultStateFor(allowed).device;
        state.device = allowed.includes(preferred) ? preferred : allowed[0];
        state.config = 0;
        state.range = 0;
      }
    };
    // Without a shared link, start from the default scene of the filtered device family.
    if (!touched) state = cloneState(defaultStateFor(allowedDevices()));
    applyFilter();

    /* -------- ribbon: Home, Sensor, and the contextual Object tab (PowerPoint-like) -------- */
    let fieldCount = 0;
    const fid = () => `${uid}-f${(fieldCount += 1)}`;
    const number = (key, step, label) => {
      const id = fid();
      return `<label class="mounting-sim__field" for="${id}"><span>${label}</span><input id="${id}" data-field="${key}" type="number" step="${step}" min="${LIMITS[key][0]}" max="${LIMITS[key][1]}" inputmode="decimal"></label>`;
    };
    const select = (key, label, optionsHtml) => {
      const id = fid();
      return `<label class="mounting-sim__field" for="${id}"><span>${label}</span><select id="${id}" data-field="${key}">${optionsHtml}</select></label>`;
    };
    const options = (entries) => entries.map(([key, label]) => `<option value="${key}">${esc(label)}</option>`).join("");
    const group = (caption, content, attrs = "") =>
      `<div class="mounting-sim__group"${attrs}><div class="mounting-sim__group-body">${content}</div><div class="mounting-sim__group-caption">${caption}</div></div>`;
    const bigButton = (attrs, icon, label, title = label) =>
      `<button type="button" class="mounting-sim__rbtn" ${attrs} title="${esc(title)}"><span class="mounting-sim__icon" aria-hidden="true">${icon}</span><span>${label}</span></button>`;

    /* Icons (24 × 24 SVG). */
    const svgIcon = (body) => `<svg viewBox="0 0 24 24" width="24" height="24">${body}</svg>`;
    const deviceIcon = (key) => {
      const ring = key === "multiScan270" ? "#b4b8bc" : "#2f9bff";
      return svgIcon(
        `<rect x="6" y="4" width="12" height="10" rx="2" fill="#1c1c1c"/>` +
          `<rect x="5.5" y="14" width="13" height="2" fill="${ring}"/>` +
          `<rect x="5.5" y="16" width="13" height="5" rx="1" fill="#30323a"/>`,
      );
    };
    const TYPE_ICONS = {
      box: svgIcon('<rect x="5" y="5" width="14" height="15" fill="currentColor" opacity="0.85"/>'),
      person: svgIcon('<circle cx="12" cy="4.5" r="2.5" fill="currentColor"/><rect x="8.5" y="8" width="7" height="7" rx="2.5" fill="currentColor"/><rect x="9" y="14" width="2.5" height="8" fill="currentColor"/><rect x="12.5" y="14" width="2.5" height="8" fill="currentColor"/>'),
      iso18497: svgIcon('<rect x="10" y="3" width="4" height="7" rx="1" fill="currentColor"/><rect x="6" y="10" width="12" height="11" rx="2" fill="currentColor"/>'),
      childStanding: svgIcon('<circle cx="12" cy="9" r="2.2" fill="currentColor"/><rect x="9.5" y="11.5" width="5" height="5" rx="2" fill="currentColor"/><rect x="9.8" y="16" width="1.8" height="5" fill="currentColor"/><rect x="12.4" y="16" width="1.8" height="5" fill="currentColor"/>'),
      childLying: svgIcon('<circle cx="19" cy="17" r="2.2" fill="currentColor"/><rect x="10" y="15" width="7" height="4.5" rx="2" fill="currentColor"/><rect x="3" y="15.5" width="7.5" height="1.6" fill="currentColor"/><rect x="3" y="17.6" width="7.5" height="1.6" fill="currentColor"/>'),
    };
    const REM_ICONS = {
      10: svgIcon('<rect x="4" y="4" width="16" height="16" fill="#3b3f45" stroke="#888"/>'),
      90: svgIcon('<rect x="4" y="4" width="16" height="16" fill="#f4f4f4" stroke="#888"/>'),
      refl: svgIcon('<rect x="4" y="4" width="16" height="16" fill="#b9bec4" stroke="#888"/><path d="M4,8 L8,4 M4,14 L14,4 M4,20 L20,4 M10,20 L20,10 M16,20 L20,16" stroke="#f5f7f8" stroke-width="1.2"/>'),
    };
    const VIEW_ICONS = {
      "2d": svgIcon('<rect x="3" y="5" width="18" height="14" rx="1" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="12" y="15.5" font-size="8" font-weight="700" text-anchor="middle" fill="currentColor">2D</text>'),
      "3d": svgIcon('<path d="M12 3 L20 7.5 V16.5 L12 21 L4 16.5 V7.5 Z M4 7.5 L12 12 L20 7.5 M12 12 V21" fill="none" stroke="currentColor" stroke-width="1.6"/>'),
    };
    const ACTION_ICONS = {
      add: svgIcon('<rect x="4" y="7" width="12" height="13" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M18 2 V10 M14 6 H22" stroke="currentColor" stroke-width="2"/>'),
      delete: svgIcon('<path d="M5 7 H19 M9 7 V4 H15 V7 M7 7 L8 21 H16 L17 7" fill="none" stroke="currentColor" stroke-width="1.6"/>'),
      reset: svgIcon('<path d="M5 12 A7 7 0 1 0 8 6.3 M5 3 V8 H10" fill="none" stroke="currentColor" stroke-width="1.8"/>'),
      copy: svgIcon('<path d="M10 14 L14 10 M8 12 L5.5 14.5 A3 3 0 0 0 9.5 18.5 L12 16 M16 12 L18.5 9.5 A3 3 0 0 0 14.5 5.5 L12 8" fill="none" stroke="currentColor" stroke-width="1.8"/>'),
      fullscreen: svgIcon('<path d="M4 9 V4 H9 M15 4 H20 V9 M20 15 V20 H15 M9 20 H4 V15" fill="none" stroke="currentColor" stroke-width="1.8"/>'),
    };
    const deviceButtons = () =>
      allowedDevices()
        .map((key) => bigButton(`data-device="${key}" aria-pressed="${state.device === key}"`, deviceIcon(key), key.replace("multiScan", ""), profiles[key].label))
        .join("");

    const ribbonHtml = () => `
      <div class="mounting-sim__tabs" role="tablist">
        <button type="button" role="tab" data-tab="home">Home</button>
        <button type="button" role="tab" data-tab="sensor">Sensor</button>
        <span class="mounting-sim__object-tabs" data-object-tabs></span>
      </div>
      <div class="mounting-sim__panel" data-panel="home" role="tabpanel">
        ${group('<button type="button" class="mounting-sim__caption-link" data-tab="sensor">Sensor</button>', `<div class="mounting-sim__row" data-devices></div>`)}
        ${group("View", bigButton('data-mode="2d" aria-pressed="true"', VIEW_ICONS["2d"], "2D", "2D side view") + bigButton('data-mode="3d" aria-pressed="false"', VIEW_ICONS["3d"], "3D", "3D view"))}
        ${group("Objects", bigButton('data-action="add"', ACTION_ICONS.add, "Add", "Add a box (at most 5 objects)") + bigButton('data-action="delete"', ACTION_ICONS.delete, "Delete", "Delete the selected object (Delete key)"))}
        ${group("Scene", bigButton('data-action="reset"', ACTION_ICONS.reset, "Reset", "Reset all settings") + bigButton('data-action="copy"', ACTION_ICONS.copy, "Share", "Copy a link with the current settings") + bigButton('data-action="fullscreen" aria-pressed="false"', ACTION_ICONS.fullscreen, "Full screen"))}
      </div>
      <div class="mounting-sim__panel" data-panel="sensor" role="tabpanel" hidden>
        ${group("Sensor", `<div class="mounting-sim__row" data-devices></div>`)}
        ${group("Height", number("height", 0.05, "H [m]"))}
        ${group("Tilt", number("tilt", 0.5, "[°]"))}
        ${group("Scan configuration", `${select("config", "Configuration", "")}<span data-mount-field>${select("inverted", "Mounting", '<option value="0">Upright</option><option value="1">Upside down</option>')}</span>`)}
      </div>
      <div class="mounting-sim__panel" data-panel="object" role="tabpanel" hidden>
        ${group("Object type", `<div class="mounting-sim__row">${Object.entries(OBJECT_TYPES).map(([key, label]) => `${key === "iso18497" ? '<span class="mounting-sim__sep" title="Test targets from standards" aria-hidden="true"></span>' : ""}${bigButton(`data-type="${key}" aria-pressed="false"`, TYPE_ICONS[key] || "", key === "iso18497" ? "Seated" : key === "childStanding" ? "Child" : key === "childLying" ? "Lying" : label, label)}`).join("")}</div>`)}
        ${group("Size l × w × h", `<span data-size="box">${number("d", 0.05, "l [m]")}${number("w", 0.05, "w [m]")}${number("h", 0.05, "h [m]")}</span><span data-size="person">${number("H", 0.01, "Body height [m]")}</span><span data-size="fixed" class="mounting-sim__fixed"></span><span data-size="dir"><button type="button" class="mounting-sim__dir" data-flip></button></span>`)}
        ${group("Remission", `<div class="mounting-sim__row">${Object.entries(REMISSIONS).map(([key, label]) => bigButton(`data-rem="${key}" aria-pressed="false"`, REM_ICONS[key], key === "refl" ? "Reflector" : `${key} %`, label)).join("")}</div>`)}
        ${group("Ambient light", select("range", "Range at", ""))}
        ${group("Position", number("x", 0.05, "x [m]") + number("z", 0.05, "z [m]"))}
        ${group("Delete", bigButton('data-action="delete"', ACTION_ICONS.delete, "Delete", "Delete this object (Delete key)"), " data-group-end")}
      </div>`;

    /* -------- stage, zoom toolbar, and point-info card -------- */
    const ribbon = document.createElement("div");
    ribbon.className = "mounting-sim__ribbon";
    ribbon.setAttribute("role", "toolbar");
    ribbon.setAttribute("aria-label", "Simulator settings");
    ribbon.innerHTML = ribbonHtml();
    svg.before(ribbon);
    const stage = document.createElement("div");
    stage.className = "mounting-sim__stage";
    svg.before(stage);
    stage.appendChild(svg);
    stage.insertAdjacentHTML(
      "beforeend",
      `<canvas class="mounting-sim__canvas" tabindex="0" hidden role="img" aria-label="3D view of the scene. Drag to rotate, drag an object to move it along x, Shift+drag, right-drag, or W A S D to pan, Ctrl+scroll to zoom. Click an object or the sensor to select it, or a scan point for its data."></canvas>
      <div class="mounting-sim__hint" hidden>Use Ctrl + scroll to zoom (⌘ + scroll on Mac)</div>
      <div class="mounting-sim__toolbar">
        <button type="button" data-zoom="in" aria-label="Zoom in" title="Zoom in">+</button>
        <button type="button" data-zoom="out" aria-label="Zoom out" title="Zoom out">−</button>
      </div>
      <div class="mounting-sim__popover" role="dialog" aria-modal="false" hidden>
        <div class="mounting-sim__popover-head"><p class="mounting-sim__popover-title"></p><button type="button" class="mounting-sim__popover-close" data-action="close" aria-label="Close">×</button></div>
        <div class="mounting-sim__popover-body"></div>
      </div>`,
    );
    const canvas = stage.querySelector("canvas");
    const hint = stage.querySelector(".mounting-sim__hint");
    const popover = stage.querySelector(".mounting-sim__popover");
    const popTitle = popover.querySelector(".mounting-sim__popover-title");
    const popBody = popover.querySelector(".mounting-sim__popover-body");
    let hintTimer = 0;
    const showWheelHint = () => {
      hint.hidden = false;
      window.clearTimeout(hintTimer);
      hintTimer = window.setTimeout(() => (hint.hidden = true), 1400);
    };

    const panel = (name) => ribbon.querySelector(`[data-panel="${name}"]`);
    const field = (name, scope = ribbon) => scope.querySelector(`[data-field="${name}"]`);
    const setValue = (input, value) => {
      if (input && document.activeElement !== input) input.value = String(Math.round(value * 1000) / 1000);
    };
    let activeTab = "home";
    const showTab = (name) => {
      activeTab = name;
      for (const tab of ribbon.querySelectorAll("[role=tab]")) {
        const isObject = tab.dataset.tab === "object";
        const on = tab.dataset.tab === name && (!isObject || Number(tab.dataset.index) === selected?.index);
        tab.setAttribute("aria-selected", String(on));
      }
      for (const p of ribbon.querySelectorAll("[data-panel]")) p.hidden = p.dataset.panel !== name;
    };
    // One tab per object; the selected object's tab is highlighted.
    const renderObjectTabs = () => {
      ribbon.querySelector("[data-object-tabs]").innerHTML = state.objects
        .map((o, i) => {
          const isSelected = selected?.kind === "object" && selected.index === i;
          return `<span class="mounting-sim__otab${isSelected ? " mounting-sim__otab--selected" : ""}"><button type="button" role="tab" data-tab="object" data-index="${i}" title="${esc(OBJECT_TYPES[o.type])}">Object ${i + 1}</button></span>`;
        })
        .join("");
    };
    // Current state into the ribbon: device buttons, lists, values, and the selected object.
    const syncRibbon = () => {
      for (const holder of ribbon.querySelectorAll("[data-devices]")) holder.innerHTML = deviceButtons();
      const config = field("config");
      config.innerHTML = options(profiles[state.device].configs.map((c, i) => [i, c.label]));
      config.value = String(state.config);
      ribbon.querySelector("[data-mount-field]").hidden = state.device === "multiScan270";
      field("inverted").value = state.inverted ? "1" : "0";
      setValue(field("height"), state.height);
      setValue(field("tilt"), state.tilt);
      const range = field("range");
      range.innerHTML = options(RANGES[state.device].light.map((l, i) => [i, l.label]));
      range.value = String(state.range);
      for (const b of ribbon.querySelectorAll("[data-mode]")) b.setAttribute("aria-pressed", String((b.dataset.mode === "3d") === mode3d));
      const obj = selected?.kind === "object" ? state.objects[selected.index] : null;
      renderObjectTabs();
      showTab(obj || activeTab !== "object" ? activeTab : "home");
      for (const button of ribbon.querySelectorAll('[data-action="delete"]')) button.disabled = !obj;
      ribbon.querySelector('[data-action="add"]').disabled = state.objects.length >= MAX_OBJECTS;
      if (!obj) {
        if (activeTab === "object") showTab("home");
        return;
      }
      const op = panel("object");
      for (const b of op.querySelectorAll("[data-type]")) b.setAttribute("aria-pressed", String(b.dataset.type === obj.type));
      for (const b of op.querySelectorAll("[data-rem]")) b.setAttribute("aria-pressed", String(b.dataset.rem === (obj.rem || "10")));
      const model = MODELS[obj.type];
      op.querySelector('[data-size="box"]').hidden = obj.type !== "box";
      op.querySelector('[data-size="person"]').hidden = obj.type !== "person";
      const fixed = op.querySelector('[data-size="fixed"]');
      fixed.hidden = !model;
      if (model) {
        const b = objectBounds(obj);
        fixed.textContent = `${fmt(b.x1 - b.x0)} × ${fmt(2 * b.y)} × ${fmt(b.z1 - b.z0)} m (fixed)`;
        fixed.title = model.note;
      }
      const dir = op.querySelector('[data-size="dir"]');
      dir.hidden = !model?.directional;
      if (model?.directional) {
        const dirLabel = (model.directions || DIRECTIONS)[obj.dir === "rear" ? "rear" : "front"];
        dir.firstElementChild.textContent = `${dirLabel} ⇄`;
      }
      for (const key of ["x", "z", "d", "w", "h", "H"]) setValue(field(key, op), obj[key]);
    };
    const syncPopover = syncRibbon;
    // Selecting the sensor or an object switches to its ribbon tab.
    const openSettings = (target) => {
      popover.hidden = true;
      selected = target.kind === "object" ? target : { kind: "device" };
      syncRibbon();
      showTab(target.kind === "object" ? "object" : "sensor");
      update(false, true);
    };
    const closePopover = () => {
      popover.hidden = true;
      selected = null;
      syncRibbon();
      update(false, true);
    };

    // Read-only card with the data of one scan point or in-plane beam.
    const placeCard = (clientX, clientY) => {
      const rect = stage.getBoundingClientRect();
      popover.style.left = "0px";
      popover.style.top = "0px";
      const w = popover.offsetWidth;
      const h = popover.offsetHeight;
      popover.style.left = `${Math.max(6, Math.min(clientX - rect.left + 12, rect.width - w - 6))}px`;
      popover.style.top = `${Math.max(6, Math.min(clientY - rect.top + 12, rect.height - h - 6))}px`;
    };
    const openInfo = (rows, title, clientX, clientY) => {
      popTitle.textContent = title;
      popBody.innerHTML = `<dl class="mounting-sim__info">${rows.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}</dl>`;
      popover.hidden = false;
      placeCard(clientX, clientY);
    };
    const layerText = (sim, index) => {
      const layer = sim.layers[index];
      return `${layer.number} of ${sim.layers.length}${layer.highRes ? " (high resolution 0.125°)" : ""}`;
    };
    const pointInfo = (sim, point, objectIndex, clientX, clientY) => {
      const obj = state.objects[objectIndex];
      const result = sim.objects[objectIndex];
      openInfo([
        ["Object", `${objectIndex + 1}: ${OBJECT_TYPES[obj.type]}, ${REMISSIONS[obj.rem || "10"]}`],
        ["Layer", layerText(sim, point.layer)],
        ["Elevation (sensor, up positive)", `${fmt(point.phi, 2)}°`],
        ["Azimuth (sensor)", `${fmt(point.theta, 3)}°`],
        ["Distance", `${fmt(point.t, 3)} m`],
        ["Position x, y, z", `${fmt(point.x)} m, ${fmt(point.y)} m, ${fmt(point.z)} m`],
        ["Counted", point.inRange ? `yes, within ${fmt(result.range, 0)} m range` : `no, outside the range (${fmt(minRange(state.device))}–${fmt(result.range, 0)} m)`],
      ], "Scan point", clientX, clientY);
    };
    const rayInfo = (sim, ray, clientX, clientY) => {
      const obj = state.objects[ray.target];
      openInfo([
        ["Object", `${ray.target + 1}: ${OBJECT_TYPES[obj.type]}, ${REMISSIONS[obj.rem || "10"]}`],
        ["Layer", layerText(sim, ray.layer)],
        ["Elevation (sensor, up positive)", `${fmt(ray.phi, 2)}°`],
        ["Azimuth (sensor)", `${ray.azimuth}°`],
        ["Distance to the object", `${fmt(ray.t, 3)} m`],
        ["Hit at x, z", `${fmt(ray.dx * ray.t)} m, ${fmt(sim.origin[2] + ray.dz * ray.t)} m`],
        ["Counted", ray.valid ? "yes" : "no, outside the range"],
      ], "Beam in the side view", clientX, clientY);
    };

    /* -------- objects: add, delete -------- */
    const syncActions = () => syncRibbon();
    const addObject = () => {
      if (state.objects.length >= MAX_OBJECTS) return;
      // Place the new box behind the farthest object, so it does not cover another one.
      const far = Math.max(2, ...state.objects.map((o) => objectBounds(o).x1 + 1));
      state.objects.push(newObject(Math.round(far * 100) / 100));
      update(true);
      openSettings({ kind: "object", index: state.objects.length - 1 });
    };
    const deleteObject = (index) => {
      if (!state.objects[index]) return;
      state.objects.splice(index, 1);
      popover.hidden = true;
      selected = null;
      labelFocus = null;
      syncRibbon();
      update(true);
    };

    // Ribbon inputs: numbers and lists of the sensor and the selected object.
    const ownerOf = (input) => (input.closest('[data-panel="object"]') ? (selected?.kind === "object" ? state.objects[selected.index] : null) : state);
    ribbon.addEventListener("change", (event) => {
      const target = event.target;
      const name = target.dataset.field;
      if (!name) return;
      if (name === "config" || name === "range") state[name] = Number(target.value);
      else if (name === "inverted") state.inverted = target.value === "1";
      else {
        const owner = ownerOf(target);
        const value = Number(String(target.value).replace(",", "."));
        if (owner && Number.isFinite(value)) owner[name] = clamp(value, LIMITS[name]);
      }
      syncRibbon();
      update(true);
    });
    ribbon.addEventListener("input", (event) => {
      if (event.target.type !== "number") return;
      const value = Number(String(event.target.value).replace(",", "."));
      if (!Number.isFinite(value) || event.target.value === "") return;
      const name = event.target.dataset.field;
      const owner = ownerOf(event.target);
      const [min, max] = LIMITS[name];
      if (!owner || value < min || value > max) return;
      owner[name] = value;
      update(false);
    });

    /* -------- full screen -------- */
    const fullscreenButton = ribbon.querySelector('[data-action="fullscreen"]');
    const isFullscreen = () => document.fullscreenElement === root || root.classList.contains("mounting-sim--fullscreen");
    const syncFullscreen = () => {
      const on = isFullscreen();
      fullscreenButton.lastElementChild.textContent = on ? "Exit full screen" : "Full screen";
      fullscreenButton.setAttribute("aria-pressed", String(on));
      update(true, true);
    };
    const toggleFullscreen = async () => {
      if (document.fullscreenElement === root) {
        await document.exitFullscreen();
        return;
      }
      if (root.requestFullscreen && document.fullscreenEnabled && !root.classList.contains("mounting-sim--fullscreen")) {
        try {
          await root.requestFullscreen();
          return;
        } catch {
          // Fall back to the CSS full-screen layout below.
        }
      }
      // Fallback without the Fullscreen API (for example iPhone Safari): cover the viewport with CSS.
      root.classList.toggle("mounting-sim--fullscreen");
      document.documentElement.classList.toggle("mounting-sim-noscroll", root.classList.contains("mounting-sim--fullscreen"));
      syncFullscreen();
    };
    document.addEventListener("fullscreenchange", () => root.isConnected && syncFullscreen());
    window.addEventListener("resize", () => {
      if (mode3d && root.isConnected) update(false, true);
    });
    window.addEventListener("sick-device-filter", () => {
      if (!root.isConnected) return;
      // An unchanged default scene follows the filter; edited scenes only swap the device if needed.
      const untouched = !touched;
      if (untouched) state = cloneState(defaultStateFor(allowedDevices()));
      applyFilter();
      syncRibbon();
      update(true, untouched);
    });

    // Keyboard: Escape deselects, Delete removes the selected object, W A S D move the view.
    // Listens on window in the capture phase, ahead of the theme's keyboard shortcuts: on this page,
    // S, F, and / do not open the site search, so W A S D can move the view.
    const SEARCH_KEYS = ["s", "f", "/"];
    window.addEventListener("keydown", (event) => {
      if (!root.isConnected) return;
      if (event.key === "Escape") {
        if (!popover.hidden || selected) closePopover();
        else if (root.classList.contains("mounting-sim--fullscreen")) toggleFullscreen();
        return;
      }
      const typing = event.target.closest?.("input, select, textarea, [contenteditable]");
      if (typing || event.ctrlKey || event.metaKey || event.altKey) return;
      const key = event.key.toLowerCase();
      if (SEARCH_KEYS.includes(key)) event.stopPropagation();
      if ((event.key === "Delete" || event.key === "Backspace") && selected?.kind === "object" && (stageActive || root.contains(event.target))) {
        event.preventDefault();
        deleteObject(selected.index);
        return;
      }
      if (!["w", "a", "s", "d"].includes(key) || !(stageActive || stage.contains(event.target))) return;
      event.preventDefault();
      if (mode3d) {
        view3d.move(key);
        return;
      }
      // 2D: move the view by 40 px.
      const k = 40 / view.scale;
      pan = { x: pan.x + (key === "d" ? k : key === "a" ? -k : 0), z: pan.z + (key === "w" ? k : key === "s" ? -k : 0) };
      update(true, true);
    }, true);
    stage.addEventListener("pointerenter", () => (stageActive = true));
    stage.addEventListener("pointerleave", () => (stageActive = false));

    const setMode = (to3d) => {
      if (mode3d === to3d) return;
      mode3d = to3d;
      // SVG elements have no hidden property; toggle the attribute.
      svg.toggleAttribute("hidden", mode3d);
      canvas.hidden = !mode3d;
      if (mode3d) view3d.reset(last);
      syncRibbon();
      update(false, true);
    };
    root.addEventListener("click", async (event) => {
      const tab = event.target.closest("[data-tab]");
      if (tab) {
        if (tab.dataset.tab === "sensor") selected = { kind: "device" };
        else if (tab.dataset.tab === "object") selected = { kind: "object", index: Number(tab.dataset.index) };
        else if (tab.dataset.tab === "home" && selected?.kind === "device") selected = null;
        syncRibbon();
        showTab(tab.dataset.tab);
        update(false, true);
        return;
      }
      const device = event.target.closest("[data-device]");
      if (device) {
        if (device.dataset.device !== state.device) {
          state.device = device.dataset.device;
          state.config = 0;
          state.range = 0;
        }
        selected = { kind: "device" };
        syncRibbon();
        showTab("sensor");
        update(true);
        return;
      }
      const mode = event.target.closest("[data-mode]");
      if (mode) {
        setMode(mode.dataset.mode === "3d");
        return;
      }
      const obj = selected?.kind === "object" ? state.objects[selected.index] : null;
      const type = event.target.closest("[data-type]");
      if (type && obj) {
        obj.type = type.dataset.type;
        syncRibbon();
        update(true);
        return;
      }
      const rem = event.target.closest("[data-rem]");
      if (rem && obj) {
        obj.rem = rem.dataset.rem;
        syncRibbon();
        update(true);
        return;
      }
      if (event.target.closest("[data-flip]") && obj) {
        obj.dir = obj.dir === "rear" ? "front" : "rear";
        syncRibbon();
        update(true);
        return;
      }
      const button = event.target.closest("[data-action]");
      const action = button?.dataset.action;
      if (action === "close") popover.hidden = true;
      else if (action === "delete" && obj) deleteObject(selected.index);
      else if (action === "add") addObject();
      else if (action === "reset") {
        state = cloneState(defaultStateFor(allowedDevices()));
        applyFilter();
        zoom = 1;
        pan = { x: 0, z: 0 };
        popover.hidden = true;
        selected = null;
        syncRibbon();
        showTab("home");
        update(true);
      } else if (action === "copy") {
        const url = `${window.location.href.split("#")[0]}#${encodeState(state)}`;
        const label = button.lastElementChild;
        try {
          await navigator.clipboard.writeText(url);
          label.textContent = "Link copied";
        } catch {
          window.prompt("Copy this link:", url);
        }
        window.setTimeout(() => (label.textContent = "Share"), 1500);
      } else if (action === "fullscreen") {
        toggleFullscreen();
      }
    });
    showTab("home");

    /* -------- 3D view -------- */
    const view3d = createView3d(canvas, {
      requestRender: () => update(false, true),
      showWheelHint,
      wheelZooms: () => isFullscreen(),
      onEdit: () => {
        syncPopover();
        update(false);
      },
      onSelect: (target, clientX, clientY) => (target ? openSettings(target, clientX, clientY) : closePopover()),
      onInfo: ({ point, objectIndex }, clientX, clientY) => last && pointInfo(last, point, objectIndex, clientX, clientY),
      activeLabel: (kind, index) =>
        (labelFocus && labelFocus.kind === kind && labelFocus.index === index) ||
        (selected && ((kind === "sensor" && selected.kind === "device") || (selected.kind === kind && selected.index === index))),
    });

    /* -------- 2D view -------- */
    const fitView = (sim) => {
      let xMax = 5;
      let zMax = state.height + 0.8;
      for (const result of sim.objects) {
        if (!result.bounds) continue;
        xMax = Math.max(xMax, result.bounds.x1 + 1.5);
        zMax = Math.max(zMax, result.bounds.z1 + 0.8);
      }
      if (sim.d1 !== null) xMax = Math.max(xMax, sim.d1 + 1.5);
      if (sim.d2 !== null && sim.d2 < xMax * 1.6) xMax = Math.max(xMax, sim.d2 + 1);
      xMax = Math.min(xMax, Math.max(sim.range * 1.05, 5));
      // Objects behind the sensor (negative x) widen the view to the left.
      const xBehind = Math.min(0, ...sim.objects.filter((r) => r.bounds).map((r) => r.bounds.x0 - 0.8));
      const xAuto = Math.min(-Math.max(0.8, 0.12 * xMax), xBehind);
      const zAuto = -0.06 * Math.max(xMax - xAuto, zMax);
      const scaleW = (SVG_W - 2 * PAD) / (xMax - xAuto);
      const scaleH = (SVG_H - 2 * PAD) / (zMax - zAuto);
      const scale = zoom * Math.min(scaleW, scaleH);
      // Panning never shows more than the default margin left of the device or below the ground,
      // and at least half of the view keeps showing the scene.
      const xSpan = xMax - xAuto;
      const zSpan = zMax - zAuto;
      const wView = SVG_W / scale;
      const hView = SVG_H / scale;
      pan = {
        x: clamp(pan.x, [0, Math.max(0, xSpan - 0.5 * wView)]),
        z: clamp(pan.z, [0, Math.max(0, zSpan - 0.5 * hView)]),
      };
      // The drawing fills the whole frame; the fit keeps a margin of PAD around the scene.
      const xMin = xAuto + pan.x - PAD / scale;
      const zMin = zAuto + pan.z - PAD / scale;
      // Equal scales keep angles true to size.
      return { xMin, xMax: xMin + SVG_W / scale, zMin, zMax: zMin + SVG_H / scale, scale };
    };
    const px = (x) => (x - view.xMin) * view.scale;
    const pz = (z) => SVG_H - (z - view.zMin) * view.scale;
    const svgPoint = (event) => {
      const point = svg.createSVGPoint();
      point.x = event.clientX;
      point.y = event.clientY;
      return point.matrixTransform(svg.getScreenCTM().inverse());
    };
    const toWorld = (event) => {
      const local = svgPoint(event);
      return { x: view.xMin + local.x / view.scale, z: view.zMin + (SVG_H - local.y) / view.scale };
    };
    const pathOf = (points, close = true) =>
      points.length
        ? `M${points.map((p) => `${px(p[0]).toFixed(1)},${pz(p[1]).toFixed(1)}`).join("L")}${close ? "Z" : ""}`
        : "";

    svg.setAttribute("viewBox", `0 0 ${SVG_W} ${SVG_H}`);
    svg.innerHTML = `
      <defs>
        <pattern id="mounting-sim-reflector" width="15" height="8.66" patternUnits="userSpaceOnUse">
          <rect width="15" height="8.66" class="mounting-sim__refl-base"/>
          <path d="M0,4.33 L2.5,0 L7.5,0 L10,4.33 L7.5,8.66 L2.5,8.66 Z M10,4.33 L15,4.33" class="mounting-sim__refl-cells"/>
        </pattern>
        <linearGradient id="mounting-sim-sheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#fff" stop-opacity="0.65"/>
          <stop offset="0.3" stop-color="#fff" stop-opacity="0"/>
          <stop offset="0.5" stop-color="#fff" stop-opacity="0.35"/>
          <stop offset="0.62" stop-color="#fff" stop-opacity="0"/>
          <stop offset="1" stop-color="#000" stop-opacity="0.15"/>
        </linearGradient>
        <pattern id="${uid}-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="8" class="mounting-sim__hatch"/>
        </pattern>
        <clipPath id="${uid}-above"><rect data-clip-above/></clipPath>
      </defs>
      <g data-layer="scene"></g>
      <g data-layer="handles"></g>`;
    // Ctrl/Cmd + wheel (or trackpad pinch) zooms at the cursor; plain wheel keeps scrolling the page.
    svg.addEventListener(
      "wheel",
      (event) => {
        if (!(event.ctrlKey || event.metaKey || isFullscreen()) || !last) {
          showWheelHint();
          return;
        }
        event.preventDefault();
        const local = svgPoint(event);
        const before = { x: view.xMin + local.x / view.scale, z: view.zMin + (SVG_H - local.y) / view.scale };
        zoom = clamp(zoom * Math.exp(-clamp(event.deltaY, [-100, 100]) * 0.004), [ZOOM_MIN, 20]);
        const next = fitView(last);
        pan = {
          x: pan.x + before.x - (next.xMin + local.x / next.scale),
          z: pan.z + before.z - (next.zMin + (SVG_H - local.y) / next.scale),
        };
        update(true);
      },
      { passive: false },
    );
    const scene = svg.querySelector('[data-layer="scene"]');
    const handleLayer = svg.querySelector('[data-layer="handles"]');

    const SENSOR_HANDLES = ["pole", "sensor", "height", "tilt"];
    const HANDLES = [
      { id: "pole", label: "Installation height", shape: "rect" },
      { id: "sensor", label: "Sensor: drag for the installation height, click for the settings", shape: "rect" },
      { id: "height", label: "Installation height", shape: "circle" },
      { id: "tilt", label: "Tilt angle", shape: "circle" },
      ...Array.from({ length: MAX_OBJECTS }, (_, i) => [
        { id: `move${i}`, label: `Object ${i + 1}: drag to move, click for the settings`, shape: "rect", object: i },
        { id: `width${i}`, label: `Object ${i + 1} depth`, shape: "circle", object: i },
        { id: `top${i}`, label: `Object ${i + 1} height`, shape: "circle", object: i },
      ]).flat(),
    ];
    for (const handle of HANDLES) {
      const el = document.createElementNS("http://www.w3.org/2000/svg", handle.shape);
      el.setAttribute("class", `mounting-sim__handle mounting-sim__handle--${handle.id.replace(/\d$/, "")}`);
      el.setAttribute("tabindex", "0");
      el.setAttribute("role", "slider");
      el.setAttribute("aria-label", handle.label);
      el.dataset.handle = handle.id;
      handleLayer.appendChild(el);
      handle.el = el;
    }
    // Labels of a handle group: the sensor (height, tilt) or one object.
    const focusOf = (id) => (SENSOR_HANDLES.includes(id) ? { kind: "sensor" } : { kind: "object", index: Number(id.slice(-1)) });
    const isFocused = (kind, index) =>
      (labelFocus && labelFocus.kind === kind && labelFocus.index === index) ||
      (drag && drag.id !== "pan" && JSON.stringify(focusOf(drag.id)) === JSON.stringify(kind === "sensor" ? { kind } : { kind, index }));
    handleLayer.addEventListener("pointerover", (event) => {
      const id = event.target.dataset?.handle;
      if (!id || drag) return;
      labelFocus = focusOf(id);
      update(false, true);
    });
    handleLayer.addEventListener("pointerout", (event) => {
      if (!event.target.dataset?.handle || drag) return;
      labelFocus = null;
      update(false, true);
    });
    handleLayer.addEventListener("focusin", (event) => {
      const id = event.target.dataset?.handle;
      if (!id) return;
      labelFocus = focusOf(id);
      update(false, true);
    });
    handleLayer.addEventListener("focusout", () => {
      labelFocus = null;
      update(false, true);
    });

    const placeHandles = () => {
      const sensorX = px(0);
      const sensorZ = pz(state.height);
      const set = (handle, attrs, hidden, valueText, valueNow) => {
        for (const [key, value] of Object.entries(attrs)) handle.el.setAttribute(key, String(value));
        handle.el.style.display = hidden ? "none" : "";
        handle.el.setAttribute("aria-valuetext", valueText);
        if (Number.isFinite(valueNow)) handle.el.setAttribute("aria-valuenow", String(Math.round(valueNow * 100) / 100));
      };
      const tiltDir = rotate(sensorRotation(state.tilt, false), [1, 0, 0]);
      for (const handle of HANDLES) {
        if (handle.id === "pole") {
          set(handle, { x: sensorX - 8, y: sensorZ, width: 16, height: Math.max(0, pz(0) - sensorZ), tabindex: -1 }, false, `${fmt(state.height)} m`, state.height);
        } else if (handle.id === "height") {
          set(handle, { cx: sensorX - 50, cy: sensorZ, r: 8 }, false, `${fmt(state.height)} m`, state.height);
        } else if (handle.id === "sensor") {
          set(handle, { x: sensorX - 16, y: sensorZ - 16, width: 32, height: 32, rx: 4 }, false, `${fmt(state.height)} m`, state.height);
        } else if (handle.id === "tilt") {
          set(handle, { cx: sensorX + 60 * tiltDir[0], cy: sensorZ - 60 * tiltDir[2], r: 8 }, false, `${fmt(state.tilt, 1)}°`, state.tilt);
        } else {
          const obj = state.objects[handle.object];
          const b = obj && objectBounds(obj);
          if (!b) {
            set(handle, {}, true, "");
            continue;
          }
          const x0 = px(b.x0);
          const x1 = px(b.x1);
          const z0 = pz(b.z0);
          const z1 = pz(b.z1);
          if (handle.id.startsWith("move")) {
            set(handle, { x: x0, y: z1, width: Math.max(4, x1 - x0), height: Math.max(4, z0 - z1) }, false,
              `${fmt(obj.x)} m distance, ${fmt(obj.z)} m above ground`, obj.x);
          } else if (handle.id.startsWith("width")) {
            set(handle, { cx: x1, cy: (z0 + z1) / 2, r: 7 }, obj.type !== "box", `depth ${fmt(obj.d)} m`, obj.d);
          } else {
            set(handle, { cx: (x0 + x1) / 2, cy: z1, r: 7 }, !isSizable(obj),
              `${fmt(obj.type === "person" ? obj.H : obj.h)} m`, obj.type === "person" ? obj.H : obj.h);
          }
        }
      }
    };

    const render = (sim) => {
      const o = sim.origin;
      const sensor = [0, o[2]];
      const box = { x0: view.xMin, x1: view.xMax, z0: 0, z1: view.zMax };
      const clipAbove = svg.querySelector("[data-clip-above]");
      clipAbove.setAttribute("x", px(view.xMin));
      clipAbove.setAttribute("y", pz(view.zMax));
      clipAbove.setAttribute("width", px(view.xMax) - px(view.xMin));
      clipAbove.setAttribute("height", Math.max(0, pz(0) - pz(view.zMax)));
      const parts = [];

      parts.push(`<rect class="mounting-sim__ground" x="0" y="${pz(0)}" width="${SVG_W}" height="${Math.max(0, SVG_H - pz(0))}"/>`);
      // Grid and axes.
      const step = niceStep(Math.max(view.xMax - view.xMin, view.zMax - view.zMin));
      for (let x = Math.ceil(view.xMin / step) * step; x <= view.xMax; x += step) {
        parts.push(`<line class="mounting-sim__grid" x1="${px(x)}" y1="${pz(view.zMax)}" x2="${px(x)}" y2="${pz(0)}"/>`);
        parts.push(`<text class="mounting-sim__tick" x="${px(x)}" y="${pz(0) + 14}" text-anchor="middle">${+x.toFixed(2)}</text>`);
      }
      for (let z = step; z <= view.zMax; z += step) {
        parts.push(`<line class="mounting-sim__grid" x1="${px(view.xMin)}" y1="${pz(z)}" x2="${px(view.xMax)}" y2="${pz(z)}"/>`);
        parts.push(`<text class="mounting-sim__tick" x="${px(view.xMin) + 4}" y="${pz(z) - 3}">${+z.toFixed(2)}</text>`);
      }
      parts.push(`<line class="mounting-sim__ground-line" x1="0" y1="${pz(0)}" x2="${SVG_W}" y2="${pz(0)}"/>`);
      parts.push(`<text class="mounting-sim__axis" x="${SVG_W - 10}" y="${SVG_H - 8}" text-anchor="end">Distance x [m]</text>`);
      parts.push(`<text class="mounting-sim__axis" x="10" y="18">Height z [m]</text>`);

      // FoV wedges (in-plane), clipped to above-ground.
      const wedge = [];
      for (const azimuth of [...new Set(sim.planeRays.map((r) => r.azimuth))]) {
        const rays = sim.planeRays.filter((r) => r.azimuth === azimuth);
        // Angles measured from the ray direction (+x or −x), so the wedge never wraps around ±180°.
        const sx = azimuth ? -1 : 1;
        const angles = rays.map((r) => Math.atan2(r.dz, sx * r.dx));
        const lo = Math.min(...angles);
        const hi = Math.max(...angles);
        const pts = [sensor];
        for (let i = 0; i <= 24; i += 1) {
          const a = lo + ((hi - lo) * i) / 24;
          pts.push([sx * sim.range * Math.cos(a), o[2] + sim.range * Math.sin(a)]);
        }
        wedge.push(`<path class="mounting-sim__fov" d="${pathOf(pts)}"/>`);
      }
      parts.push(`<g clip-path="url(#${uid}-above)">${wedge.join("")}`);

      // Shadows.
      state.objects.forEach((obj) => {
        for (const hull of sideOutlines(obj)) {
          const shadow = shadowPolygon(hull, sensor, box);
          if (shadow.length) parts.push(`<path class="mounting-sim__shadow" fill="url(#${uid}-hatch)" d="${pathOf(shadow)}"/>`);
        }
      });

      // In-plane rays; high-resolution layers (multiScan100, 0.125°) are drawn thicker.
      for (const ray of sim.planeRays) {
        const end = [ray.dx * ray.t, o[2] + ray.dz * ray.t];
        const validity = ray.valid ? "valid" : "invalid";
        parts.push(`<line class="mounting-sim__ray mounting-sim__ray--${validity}${ray.highRes ? " mounting-sim__ray--hr" : ""}" x1="${px(0)}" y1="${pz(o[2])}" x2="${px(end[0])}" y2="${pz(end[1])}"/>`);
        if (ray.end !== "none") {
          parts.push(`<circle class="mounting-sim__end mounting-sim__end--${validity}" cx="${px(end[0])}" cy="${pz(end[1])}" r="${ray.highRes ? 3.5 : 2.5}"/>`);
        }
      }
      parts.push("</g>");

      // Objects.
      state.objects.forEach((obj, i) => {
        const b = objectBounds(obj);
        let shapes;
        if (MODELS[obj.type]) {
          // Side view of each part; round parts last, so they are in front.
          const world = objectParts(obj);
          const round = (p) => p.kind === "sphere" || p.axis === "y";
          shapes = [...world.filter((p) => !round(p)), ...world.filter(round)]
            .map((p) => {
              if (p.kind === "sphere") return `<circle cx="${px(p.c[0])}" cy="${pz(p.c[2])}" r="${p.r * view.scale}"/>`;
              if (p.axis === "y") return `<circle cx="${px(p.cx)}" cy="${pz(p.cy)}" r="${p.a * view.scale}"/>`;
              const pb = partBox(p);
              return `<rect x="${px(pb.min[0])}" y="${pz(pb.max[2])}" width="${(pb.max[0] - pb.min[0]) * view.scale}" height="${(pb.max[2] - pb.min[2]) * view.scale}"/>`;
            })
            .join("");
        } else if (obj.type === "person") {
          const H = obj.H;
          const cx = obj.x + PERSON.torsoDepth * H;
          const leg = PERSON.legRadius * H;
          shapes =
            `<rect x="${px(cx - leg)}" y="${pz(obj.z + PERSON.legTop * H)}" width="${2 * leg * view.scale}" height="${PERSON.legTop * H * view.scale}" rx="${leg * view.scale * 0.6}"/>` +
            `<rect x="${px(cx - PERSON.torsoDepth * H)}" y="${pz(obj.z + PERSON.torsoTop * H)}" width="${2 * PERSON.torsoDepth * H * view.scale}" height="${(PERSON.torsoTop - PERSON.legTop) * H * view.scale}" rx="${PERSON.torsoDepth * H * view.scale * 0.5}"/>` +
            `<rect x="${px(cx - PERSON.neckRadius * H)}" y="${pz(obj.z + PERSON.neckTop * H)}" width="${2 * PERSON.neckRadius * H * view.scale}" height="${(PERSON.neckTop - PERSON.torsoTop) * H * view.scale}"/>` +
            `<circle cx="${px(cx)}" cy="${pz(obj.z + (1 - PERSON.headRadius) * H)}" r="${PERSON.headRadius * H * view.scale}"/>`;
        } else {
          shapes = `<rect x="${px(b.x0)}" y="${pz(b.z1)}" width="${(b.x1 - b.x0) * view.scale}" height="${(b.z1 - b.z0) * view.scale}"/>`;
        }
        const isSelected = selected?.kind === "object" && selected.index === i;
        parts.push(`<g class="mounting-sim__object mounting-sim__object--rem-${obj.rem || "10"}${isSelected ? " mounting-sim__object--selected" : ""}">${shapes}</g>`);
        // Reflectors get a glossy sheen over the honeycomb structure.
        if (obj.rem === "refl") parts.push(`<g class="mounting-sim__sheen">${shapes}</g>`);
        const result = sim.objects[i];
        const count = result.hits;
        const flag = result.tooClose ? " – too close" : result.beyondRange ? " – beyond range" : "";
        const labelX = px((b.x0 + b.x1) / 2);
        const midY = (pz(b.z0) + pz(b.z1)) / 2;
        parts.push(`<text class="mounting-sim__label" x="${labelX}" y="${pz(b.z1) - 21}" text-anchor="middle">Object ${i + 1}: ${count} ${count === 1 ? "point" : "points"}${flag}</text>`);
        // Values of the draggable handles only while hovering or dragging them.
        if (isFocused("object", i) || isSelected) {
          parts.push(`<text class="mounting-sim__dims" x="${labelX}" y="${pz(b.z1) - 36}" text-anchor="middle">${isSizable(obj) ? `h = ${fmt(obj.type === "person" ? obj.H : obj.h)} m` : sizeLabel(obj)}</text>`);
          if (obj.type === "box") parts.push(`<text class="mounting-sim__dims" x="${px(b.x1) + 11}" y="${midY + 4}">d = ${fmt(obj.d)} m</text>`);
          parts.push(`<text class="mounting-sim__dims" x="${px(b.x0) - 10}" y="${midY - 2}" text-anchor="end">x = ${fmt(obj.x)} m</text>`);
          parts.push(`<text class="mounting-sim__dims" x="${px(b.x0) - 10}" y="${midY + 11}" text-anchor="end">z = ${fmt(obj.z)} m</text>`);
        }
      });

      // Hits (projected onto the side view).
      sim.objects.forEach((result) => {
        if (!result.points) return;
        for (const p of result.points) {
          const cls = p.inRange ? "" : " mounting-sim__hit--out";
          parts.push(`<circle class="mounting-sim__hit${cls}" cx="${px(p.x).toFixed(1)}" cy="${pz(p.z).toFixed(1)}" r="2"/>`);
        }
      });

      // Pole centered below the sensor, then the housing (schematic, not to scale).
      parts.push(`<line class="mounting-sim__pole" x1="${px(0)}" y1="${pz(0)}" x2="${px(0)}" y2="${pz(o[2])}"/>`);
      const flip = sim.inverted ? -1 : 1;
      parts.push(
        `<g class="mounting-sim__housing${selected?.kind === "device" ? " mounting-sim__housing--selected" : ""}" transform="translate(${px(0)} ${pz(o[2])}) rotate(${state.tilt}) scale(1 ${flip})">` +
          `<rect class="mounting-sim__housing-base" x="-16" y="9" width="32" height="10" rx="2"/>` +
          `<rect class="mounting-sim__housing-ring${state.device === "multiScan270" ? " mounting-sim__housing-ring--grey" : ""}" x="-16" y="6" width="32" height="3.5"/>` +
          `<path class="mounting-sim__housing-hood" d="M-15,6 L-15,-9 Q-15,-13 -11,-13 L11,-13 Q15,-13 15,-9 L15,6 Z"/>` +
          `<line class="mounting-sim__housing-shine" x1="-12" y1="-11" x2="12" y2="-11"/>` +
          `<text class="mounting-sim__housing-logo" x="0" y="16" text-anchor="middle">SICK</text>` +
          `</g>`,
      );
      const tiltDir = rotate(sensorRotation(state.tilt, false), [1, 0, 0]);
      parts.push(`<line class="mounting-sim__lever" x1="${px(0)}" y1="${pz(o[2])}" x2="${px(0) + 60 * tiltDir[0]}" y2="${pz(o[2]) - 60 * tiltDir[2]}"/>`);
      parts.push(`<circle class="mounting-sim__origin" cx="${px(0)}" cy="${pz(o[2])}" r="2.5"/>`);

      // Dimensions: height and tilt, always labelled.
      const dimX = px(0) - 50;
      const sensorFocus = true;
      parts.push(`<line class="mounting-sim__dim" x1="${dimX}" y1="${pz(0)}" x2="${dimX}" y2="${pz(o[2])}"/>`);
      if (sensorFocus) parts.push(`<text class="mounting-sim__dim-label" x="${dimX}" y="${pz(o[2]) - 12}" text-anchor="middle">H = ${fmt(state.height)} m</text>`);
      if (Math.abs(state.tilt) > 0.05) {
        const r = 44;
        const a2 = -state.tilt * RAD;
        const sweep = state.tilt > 0 ? 1 : 0;
        parts.push(`<line class="mounting-sim__dim" x1="${px(0)}" y1="${pz(o[2])}" x2="${px(0) + r + 10}" y2="${pz(o[2])}"/>`);
        parts.push(`<path class="mounting-sim__dim" d="M${px(0) + r},${pz(o[2])} A${r},${r} 0 0 ${sweep} ${px(0) + r * Math.cos(a2)},${pz(o[2]) - r * Math.sin(a2)}"/>`);
      }
      if (sensorFocus) parts.push(`<text class="mounting-sim__dim-label" x="${px(0) + 60 * tiltDir[0] + 11}" y="${pz(o[2]) - 60 * tiltDir[2] - 9}">tilt ${fmt(state.tilt, 1)}°</text>`);
      // Hovered ground hit: guide to the x axis with its position, distance, and layer.
      const g = groundHover && sim.planeRays.find((r) => r.layer === groundHover.layer && r.azimuth === groundHover.azimuth && r.end === "ground");
      if (g) {
        const gx = g.dx * g.t;
        parts.push(`<line class="mounting-sim__guide" x1="${px(gx)}" y1="${pz(0)}" x2="${px(gx)}" y2="${pz(0) + 20}"/>`);
        parts.push(`<circle class="mounting-sim__guide-dot" cx="${px(gx)}" cy="${pz(0)}" r="4"/>`);
        parts.push(`<text class="mounting-sim__guide-label" x="${px(gx)}" y="${pz(0) + 32}" text-anchor="middle">x = ${fmt(gx)} m</text>`);
        parts.push(`<text class="mounting-sim__dims" x="${px(gx)}" y="${pz(0) + 45}" text-anchor="middle">${fmt(g.t)} m from the sensor, layer ${sim.layers[g.layer].number}${g.valid ? "" : ", out of range"}</text>`);
      }
      scene.innerHTML = parts.join("");
      placeHandles();
    };

    // Ground hit of an in-plane beam within 7 px of the pointer.
    const pickGround2d = (event) => {
      if (!last || !view) return null;
      const local = svgPoint(event);
      const scaleCss = svg.getScreenCTM().a || 1;
      let best = null;
      let bestD = 7 / scaleCss;
      for (const ray of last.planeRays) {
        if (ray.end !== "ground") continue;
        const dd = Math.hypot(px(ray.dx * ray.t) - local.x, pz(0) - local.y);
        if (dd < bestD) {
          bestD = dd;
          best = ray;
        }
      }
      return best;
    };
    svg.addEventListener("pointerleave", () => {
      if (!groundHover) return;
      groundHover = null;
      update(false, true);
    });

    // Scan point or beam to an object under a click in the side view (within 6 px or 4 px).
    const pickInfo2d = (event) => {
      if (!last || !view) return null;
      const local = svgPoint(event);
      const scaleCss = svg.getScreenCTM().a || 1;
      let best = null;
      let bestD = 6 / scaleCss;
      last.objects.forEach((result, objectIndex) => {
        for (const p of result.points || []) {
          const dd = Math.hypot(px(p.x) - local.x, pz(p.z) - local.y);
          if (dd < bestD) {
            bestD = dd;
            best = { kind: "point", point: p, objectIndex };
          }
        }
      });
      if (best) return best;
      bestD = 4 / scaleCss;
      const o = [px(0), pz(last.origin[2])];
      // Every beam starts at the sensor: near it, a click means the sensor itself.
      if (Math.hypot(local.x - o[0], local.y - o[1]) < 24 / scaleCss) return null;
      for (const ray of last.planeRays) {
        if (ray.end !== "object") continue;
        const e = [px(ray.dx * ray.t), pz(last.origin[2] + ray.dz * ray.t)];
        const vx = e[0] - o[0];
        const vy = e[1] - o[1];
        const len2 = vx * vx + vy * vy || 1;
        const s = clamp(((local.x - o[0]) * vx + (local.y - o[1]) * vy) / len2, [0, 1]);
        const dd = Math.hypot(o[0] + s * vx - local.x, o[1] + s * vy - local.y);
        if (dd < bestD) {
          bestD = dd;
          best = { kind: "ray", ray };
        }
      }
      return best;
    };

    /* -------- results -------- */
    const renderResults = (sim) => {
      if (!sim.objects.length) {
        results.innerHTML = '<p class="mounting-sim__empty">No objects. Add one with Add object below the view.</p>';
      } else {
        const objectCols = sim.objects.map((r, i) => `<th scope="col">Object ${i + 1} (${OBJECT_TYPES[r.type]})</th>`).join("");
        const row = (label, cells, cls = "", help = "") =>
          `<tr${cls ? ` class="${cls}"` : ""}><th scope="row">${label}${help ? ` ${helpToggle(label, help)}` : ""}</th>${cells.map((c) => `<td>${c}</td>`).join("")}</tr>`;
        const per = (fn) => sim.objects.map((r) => fn(r));
        const interlaced = sim.interlace > 1;
        const rows = [
          row(interlaced ? `Points, combined (${fmt(sim.hz / sim.interlace, 1)} Hz)` : `Points per frame (${fmt(sim.hz, 0)} Hz)`, per((r) => r.hits), "calculator__main", HELP.points),
        ];
        if (interlaced) rows.push(row(`Points per ${fmt(sim.hz, 0)} Hz frame`, per((r) => (r.frameMin === r.frameMax ? r.frameMin : `${r.frameMin}–${r.frameMax}`)), "", HELP.framePoints));
        rows.push(
          row("Layers with hits", per((r) => r.layersHit), "", HELP.layersHit),
          row("Covered height [m]", per((r) => (r.hits ? `${fmt(r.coveredMin)}–${fmt(r.coveredMax)} (${Math.round(r.coverage * 100)} %)` : "–")), "", HELP.covered),
          row("Range for remission [m]", per((r) => fmt(r.range, 0)), "", HELP.rangeObj),
        );
        results.innerHTML = `
        <table class="calculator__table">
          <thead><tr><th scope="col">Objects</th>${objectCols}</tr></thead>
          <tbody>${rows.join("")}</tbody>
        </table>
`;
      }
      const notes = [];
      sim.objects.forEach((r, i) => {
        if (r.beyondRange) notes.push(`Object ${i + 1} is beyond the range of ${fmt(r.range, 0)} m.`);
        if (r.tooClose) notes.push(`Object ${i + 1} is too close. The working range starts at ${minRange(state.device)} m.`);
      });
      status.dataset.state = "info";
      status.innerHTML = notes.length ? `<ul class="calculator__notes">${notes.map((n) => `<li>${esc(n)}</li>`).join("")}</ul>` : "";
    };

    /* -------- update loop -------- */
    const update = (refit, initial = false) => {
      if (!initial) touched = true;
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const sim = simulate(state, profiles);
        last = sim;
        if (refit || !view) view = fitView(sim);
        if (mode3d) view3d.render(sim, state);
        else render(sim);
        renderResults(sim);
        if (!touched) return;
        window.clearTimeout(hashTimer);
        hashTimer = window.setTimeout(() => {
          window.history.replaceState(window.history.state, "", `#${encodeState(state)}`);
        }, 300);
      });
    };

    /* -------- dragging, clicking, and keyboard in the side view -------- */
    const applyHandle = (id, world, start) => {
      const round = (v, s = 0.01) => Math.round(v / s) * s;
      if (["pole", "sensor", "height"].includes(id)) {
        state.height = clamp(round(start.h + world.z - start.wz), LIMITS.height);
      } else if (id === "tilt") {
        const angle = Math.atan2(world.z - state.height, world.x) / RAD;
        state.tilt = clamp(round(-angle, 0.5), LIMITS.tilt);
      } else {
        const obj = state.objects[Number(id.slice(-1))];
        if (!obj) return;
        if (id.startsWith("move")) {
          obj.x = clamp(round(start.x + world.x - start.wx), LIMITS.x);
          const z = start.z + world.z - start.wz;
          obj.z = clamp(round(z < 6 / view.scale ? 0 : z), LIMITS.z);
        } else if (id.startsWith("width")) {
          obj.d = clamp(round(world.x - obj.x), LIMITS.d);
        } else if (obj.type === "person") {
          obj.H = clamp(round(world.z - obj.z), LIMITS.H);
        } else {
          obj.h = clamp(round(world.z - obj.z), LIMITS.h);
        }
      }
    };

    svg.addEventListener("pointerdown", (event) => {
      if (event.button > 0) return;
      const id = event.target.dataset?.handle;
      event.preventDefault();
      const start = { cx: event.clientX, cy: event.clientY };
      if (!id) {
        // Drag on the background pans the scene.
        drag = { id: "pan", start: { ...start, x: pan.x, z: pan.z }, pointer: event.pointerId, moved: false };
      } else {
        const world = toWorld(event);
        const obj = /\d$/.test(id) ? state.objects[Number(id.slice(-1))] : null;
        drag = { id, start: { ...start, wx: world.x, wz: world.z, h: state.height, x: obj?.x, z: obj?.z }, pointer: event.pointerId, moved: false };
      }
      svg.setPointerCapture(event.pointerId);
      svg.classList.add("mounting-sim__view--dragging");
    });
    svg.addEventListener("pointermove", (event) => {
      if (!drag) {
        svg.classList.toggle("mounting-sim__view--info", Boolean(pickInfo2d(event)));
        const next = pickGround2d(event);
        if (next !== groundHover) {
          groundHover = next;
          update(false, true);
        }
        return;
      }
      if (event.pointerId !== drag.pointer) return;
      if (!drag.moved && Math.hypot(event.clientX - drag.start.cx, event.clientY - drag.start.cy) < 4) return;
      drag.moved = true;
      if (drag.id === "pan") {
        const k = svg.getScreenCTM().a * view.scale;
        pan = { x: drag.start.x - (event.clientX - drag.start.cx) / k, z: drag.start.z + (event.clientY - drag.start.cy) / k };
        update(true);
        return;
      }
      applyHandle(drag.id, toWorld(event), drag.start);
      syncPopover();
      update(false);
    });
    const endDrag = (event) => {
      if (!drag || event.pointerId !== drag.pointer) return;
      const { id, moved } = drag;
      drag = null;
      svg.classList.remove("mounting-sim__view--dragging");
      if (!moved && event.type === "pointerup") {
        // A click: the sensor settings, or scan point or beam info, then the settings of the clicked object.
        const info = id && SENSOR_HANDLES.includes(id) ? null : pickInfo2d(event);
        if (info?.kind === "point") pointInfo(last, info.point, info.objectIndex, event.clientX, event.clientY);
        else if (info?.kind === "ray") rayInfo(last, info.ray, event.clientX, event.clientY);
        else if (id && id !== "pan") {
          const focus = focusOf(id);
          openSettings(focus.kind === "sensor" ? { kind: "device" } : focus, event.clientX, event.clientY);
        } else if (!popover.hidden || selected) closePopover();
        return;
      }
      update(true);
    };
    svg.addEventListener("pointerup", endDrag);
    svg.addEventListener("pointercancel", endDrag);

    const applyZoom = (direction) => {
      if (mode3d) {
        view3d.zoom(direction);
        return;
      }
      zoom = clamp(zoom * (direction === "in" ? 1.5 : 1 / 1.5), [ZOOM_MIN, 20]);
      update(true);
    };
    stage.querySelector(".mounting-sim__toolbar").addEventListener("click", (event) => {
      const button = event.target.closest("[data-zoom]");
      if (button) applyZoom(button.dataset.zoom);
    });
    svg.addEventListener("keydown", (event) => {
      const id = event.target.dataset?.handle;
      if (!id) return;
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const focus = focusOf(id);
        const rect = event.target.getBoundingClientRect();
        openSettings(focus.kind === "sensor" ? { kind: "device" } : focus, rect.right, rect.top);
        return;
      }
      const dirs = { ArrowUp: [0, 1], ArrowDown: [0, -1], ArrowRight: [1, 0], ArrowLeft: [-1, 0] };
      const dir = dirs[event.key];
      if (!dir) return;
      event.preventDefault();
      const big = event.shiftKey ? 10 : 1;
      if (["pole", "sensor", "height"].includes(id)) state.height = clamp(state.height + dir[1] * 0.05 * big, LIMITS.height);
      else if (id === "tilt") state.tilt = clamp(state.tilt - (dir[1] || -dir[0]) * 0.5 * big, LIMITS.tilt);
      else {
        const obj = state.objects[Number(id.slice(-1))];
        if (!obj) return;
        const delta = 0.05 * big;
        if (id.startsWith("move")) {
          obj.x = clamp(obj.x + dir[0] * delta, LIMITS.x);
          obj.z = clamp(obj.z + dir[1] * delta, LIMITS.z);
        } else if (id.startsWith("width")) obj.d = clamp(obj.d + (dir[0] || dir[1]) * delta, LIMITS.d);
        else if (obj.type === "person") obj.H = clamp(obj.H + (dir[1] || dir[0]) * delta, LIMITS.H);
        else obj.h = clamp(obj.h + (dir[1] || dir[0]) * delta, LIMITS.h);
      }
      syncPopover();
      update(false);
    });

    syncActions();
    update(true, true);
  };

  const initializeAll = () => document.querySelectorAll("[data-mounting-simulator]").forEach(initialize);
  if (typeof document$ !== "undefined") document$.subscribe(initializeAll);
  else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initializeAll);
  else initializeAll();
})();
