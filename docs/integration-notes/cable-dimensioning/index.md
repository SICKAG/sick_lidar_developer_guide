# SICK LiDAR Cable Dimensioning: Avoid Undervoltage

> Calculate the voltage drop on the supply cable of a SICK LiDAR sensor and check that the sensor still receives its minimum supply voltage.

Source: https://sickag.github.io/sick_lidar_developer_guide/integration-notes/cable-dimensioning/

# Cable Dimensioning

Compatible with: LRS4000 multiScan100 multiScan200 picoScan100

Select a device to prefill its power consumption, minimum sensor voltage, and number of supply wires. Choose a load condition to check typical, maximum, or startup consumption where specified in the operating instructions. **Custom Values** lets you adjust the device-specific inputs, for example to add digital output loads or combine sensors. Supply voltage and cable specifications remain editable for every device. Select the question-mark icon beside an input for guidance.

<div class="calculator" data-cable-calculator>
<form class="calculator__form" onsubmit="return false">
<p class="calculator__heading">Input</p>
<label>Device<select data-field="device"></select></label>
<label>Load condition<select data-field="load"></select></label>
<p class="calculator__footnote" data-cable-preset-note></p>
<div class="calculator__input-row"><span class="calculator__input-label"><label for="cable-power">Power consumption [W]</label> <details class="calculator__help"><summary aria-label="Help for Power consumption">?</summary><p id="cable-power-help">Typical or maximum power consumption from the technical data in the operating instructions. Include digital output loads and add all sensors sharing the cable.</p></details></span><input id="cable-power" data-field="power" type="number" min="0" step="0.1" value="20" inputmode="decimal" aria-describedby="cable-power-help"></div>
<div class="calculator__input-row"><span class="calculator__input-label"><label for="cable-min-voltage">Minimum sensor voltage [V]</label> <details class="calculator__help"><summary aria-label="Help for Minimum sensor voltage">?</summary><p id="cable-min-voltage-help">Lower limit of the supply voltage range in the technical data of the operating instructions.</p></details></span><input id="cable-min-voltage" data-field="min-voltage" type="number" min="0" step="0.1" value="10" inputmode="decimal" aria-describedby="cable-min-voltage-help"></div>
<div class="calculator__input-row"><span class="calculator__input-label"><label for="cable-supply">Supply voltage at the power supply [V]</label> <details class="calculator__help"><summary aria-label="Help for Supply voltage at the power supply">?</summary><p id="cable-supply-help">Output voltage of the power supply under load, minus its tolerance. Typically 24 V.</p></details></span><input id="cable-supply" data-field="supply" type="number" min="0" step="0.1" value="24" inputmode="decimal" aria-describedby="cable-supply-help"></div>
<div class="calculator__input-row"><span class="calculator__input-label"><label for="cable-length">Cable length [m]</label> <details class="calculator__help"><summary aria-label="Help for Cable length">?</summary><p id="cable-length-help">One-way length from the power supply to the sensor connector, including extension cables.</p></details></span><input id="cable-length" data-field="length" type="number" min="0" step="1" value="20" inputmode="decimal" aria-describedby="cable-length-help"></div>
<div class="calculator__input-row"><span class="calculator__input-label"><label for="cable-area">Cross-section per wire [mm²]</label> <details class="calculator__help"><summary aria-label="Help for Cross-section per wire">?</summary><p id="cable-area-help">Conductor cross-section from the cable data sheet, often given as AWG.</p></details></span><select id="cable-area" data-field="area" aria-describedby="cable-area-help"><option value="0.14" selected>0.14 (AWG 26)</option><option value="0.25">0.25 (AWG 24)</option><option value="0.34">0.34 (AWG 22)</option><option value="0.5">0.5 (AWG 20)</option><option value="0.75">0.75 (AWG 18)</option><option value="1">1.0 (AWG 17)</option><option value="1.5">1.5 (AWG 16)</option></select></div>
<div class="calculator__input-row"><span class="calculator__input-label"><label for="cable-conductors">Parallel wires per supply path</label> <details class="calculator__help"><summary aria-label="Help for Parallel wires per supply path">?</summary><p id="cable-conductors-help">Number of wires connected in parallel for supply and for ground. See the pin assignment of the sensor connector.</p></details></span><select id="cable-conductors" data-field="conductors" aria-describedby="cable-conductors-help"><option value="1">1</option><option value="2">2</option></select></div>
<div class="calculator__input-row"><span class="calculator__input-label"><label for="cable-temperature">Wire temperature [°C]</label> <details class="calculator__help"><summary aria-label="Help for Wire temperature">?</summary><p id="cable-temperature-help">Highest expected temperature of the cable in operation. Warmer copper has a higher resistance.</p></details></span><input id="cable-temperature" data-field="temperature" type="number" min="-40" max="100" step="5" value="20" inputmode="decimal" aria-describedby="cable-temperature-help"></div>
</form>
<div class="calculator__results">
<p class="calculator__heading">Result</p>
<table class="calculator__table">
<tbody>
<tr class="calculator__main"><th>Voltage at the sensor</th><td data-output="sensor-voltage">–</td></tr>
<tr><th>Minimum supply voltage</th><td data-output="min-voltage">–</td></tr>
<tr><th>Margin</th><td data-output="margin">–</td></tr>
<tr><th>Voltage drop ΔU</th><td data-output="drop">–</td></tr>
<tr><th>Current I</th><td data-output="current">–</td></tr>
<tr><th>Loop resistance R</th><td data-output="resistance">–</td></tr>
<tr class="calculator__main"><th>Maximum cable length</th><td data-output="max-length">–</td></tr>
</tbody>
</table>
<p class="calculator__status" data-cable-status data-state="info" aria-live="polite"></p>
</div>
<svg class="calculator__chart" data-cable-chart role="img" aria-label="Voltage at the sensor over the cable length, with the minimum supply voltage and the maximum cable length as lines"></svg>
</div>
*The curve shows the sensor voltage; dashed lines mark the voltage and length limits.*

General remarks:

* This estimate does not check cable ampacity, connector ratings, fusing, or electrical safety.
* Measure the voltage at the sensor connector under load to verify the installation.
* Take the supply voltage range and power consumption of your variant from its operating instructions on [sick.com](https://www.sick.com).
* Starting current and startup power consumption are important sizing factors: they can exceed the normal operating load and cause a voltage drop that prevents the sensor from starting. Check both startup and maximum operating conditions.
* Choose a supply voltage within the permitted range, account for supply tolerances, and include digital output loads in the entered power.
* Startup is modeled as a constant-power load, not a transient simulation. Check the specified starting current and duration separately against the power supply, cable, and connector ratings.
* All device presets and Custom Values start with one wire per path. This is a calculation assumption, not a wiring recommendation; the selection is editable for every device. Select the number actually connected in parallel.
* Two parallel wires per path halve the cable resistance.
* For sensors sharing a cable, enter their combined power.
* To reduce voltage drop, shorten the cable, increase its cross-section, or use a higher permitted supply voltage.
* For detailed formulas, see the operating instructions.

Device-specific remarks:

* Device presets default to maximum operating consumption, not startup consumption. Select the startup load where available, or use **Custom Values** with the startup data from the operating instructions.
* **LRS4000** presets exclude digital output loads; select **Custom Values** to add them.
* The **multiScan100** presets cover **multiScan136**, **multiScan165**, and **multiScan166**; **multiScan200** uses **multiScan270** data; **picoScan100** uses **picoScan150** data. Verify the operating instructions for your exact variant.
* **multiScan270** requires both supply and ground pin pairs: see [Electrical Connection](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/electrical-connection/).

Both supply and return wires contribute to voltage drop:

![Power supply, cable with the resistance of the supply wire and the return wire, and sensor](https://sickag.github.io/sick_lidar_developer_guide/assets/integration-notes/voltage-drop.svg){ width="70%" }
*Cable resistance reduces the voltage at the sensor by ΔU.*
