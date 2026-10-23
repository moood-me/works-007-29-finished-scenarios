// The fountain's column in the middle of the basin: a stone shaft, a broad shallow bowl at shoulder height, a little
// knob on top the jet springs from. A form turned on a lathe.
const prof = [[0, 2.32], [0.1, 2.28], [0.12, 2.12], [0.72, 1.78], [0.76, 1.7], [0.14, 1.6], [0.13, 0.8], [0.22, 0.5], [0.26, 0.44]];
let len = 0;
for (let i = 1; i < prof.length; i++) len += Math.hypot(prof[i][0] - prof[i - 1][0], prof[i][1] - prof[i - 1][1]);
const round = 2 * Math.PI * 0.76;
g.fillStyle = '#ddd4c2';
g.fillRect(-round / 2, 0, round, len);
g.fillStyle = '#c8bea9';
for (let k = 0; k < 12; k++) g.fillRect(-round / 2 + (k / 12) * round, 0, 0.02, len);
e.form(e.kit.revolve(prof), { closed: 'u', ground: '#ddd4c2' });
