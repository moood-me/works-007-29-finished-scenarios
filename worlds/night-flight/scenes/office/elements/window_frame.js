// The big window's frame (round the opening x −1.4…1.4, y −2.6…−0.85): white-painted wood, three tall casements
// under a row of fanlights, a deep sill with its edge catching the lamp.
const W = 1.4;
g.fillStyle = '#d9d3bf';
g.beginPath();
g.rect(-W - 0.12, -2.72, 2 * W + 0.24, 1.9);
g.rect(-W + 0.04, -2.56, 2 * W - 0.08, 1.67);
g.fill('evenodd');
for (const x of [-W / 3, W / 3]) g.fillRect(x - 0.035, -2.56, 0.07, 1.67);
g.fillRect(-W + 0.04, -2.2, 2 * W - 0.08, 0.06);
// the glazing bars of the casements
g.fillStyle = '#cfc8b3';
for (const c of [-2 * W / 3, 0, 2 * W / 3]) g.fillRect(c - 0.015, -2.14, 0.03, 1.25);
for (const c of [-2 * W / 3, 0, 2 * W / 3]) g.fillRect(c - W / 3 + 0.04, -1.55, 2 * W / 3 - 0.08, 0.025);
// the sill
g.fillStyle = '#d2cbb5';
g.fillRect(-W - 0.18, -0.88, 2 * W + 0.36, 0.08);
g.fillStyle = '#9d957f';
g.fillRect(-W - 0.18, -0.8, 2 * W + 0.36, 0.03);
// the catches
g.fillStyle = '#7a6a48';
for (const x of [-W / 3, W / 3]) g.fillRect(x - 0.05, -1.75, 0.1, 0.03);
