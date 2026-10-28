// The fountain's column in the middle of the basin: a slender stone baluster, a little urn on top the jet springs
// from, its water falling back all round into the basin. A form turned on a lathe.
const prof = [[0, 1.78], [0.05, 1.77], [0.07, 1.72], [0.16, 1.68], [0.2, 1.62], [0.16, 1.56], [0.09, 1.5], [0.08, 1.3], [0.12, 1.1], [0.15, 0.95], [0.12, 0.8], [0.1, 0.72], [0.14, 0.62], [0.2, 0.56], [0.22, 0.44]];
let len = 0;
for (let i = 1; i < prof.length; i++) len += Math.hypot(prof[i][0] - prof[i - 1][0], prof[i][1] - prof[i - 1][1]);
const round = 2 * Math.PI * 0.22;
g.fillStyle = '#ddd4c2';
g.fillRect(-round / 2, 0, round, len);
g.fillStyle = '#c8bea9';
for (let k = 0; k < 12; k++) g.fillRect(-round / 2 + (k / 12) * round, 0, 0.012, len);
e.form(e.kit.revolve(prof), { closed: 'u', ground: '#ddd4c2' });
