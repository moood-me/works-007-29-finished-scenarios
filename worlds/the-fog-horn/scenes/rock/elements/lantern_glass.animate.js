// lit by `lamp`; the glow flares as the beam comes round toward the viewer (beam.animate.js: the same turn)
const lamp = e.state.lamp;
const s = Math.sin((e.t * Math.PI * 2) / 14);
e.layer('lit').alpha = lamp;
e.glow('lamp', lamp * (0.7 + 1.6 * Math.pow(Math.max(0, -s), 10)));
