// lit by `lamp`; its glow flares as a beam comes round toward the viewer (bearing 155 from the lamp)
const lamp = e.state.lamp;
const off = x => ((((x - 155) % 360) + 540) % 360) - 180;
const flare = Math.max(Math.exp(-((off(e.state.beam) / 12) ** 2)), Math.exp(-((off(e.state.beam_b) / 12) ** 2)));
e.layer('lit').alpha = lamp;
e.glow('lamp', lamp * (0.8 + 1.4 * flare));
