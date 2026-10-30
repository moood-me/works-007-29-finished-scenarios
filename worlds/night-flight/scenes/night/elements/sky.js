// The night over the great field, as from Rivière's window upstairs (the play's map: its background, painted once):
// deep blue overhead, lighter toward the horizon — the night is blue here, not black —, thick stars and the faint
// river of the Milky Way across them, the moon high on the right; low on the horizon, to the left — the south — the
// storm's bank of cloud where silent lightning flickers (the layer `flash`), ahead — the west — long banks of cloud
// lying low, their tops white under the moon, the stars over them (the layer `clouds`, drifting a little), on the right
// — the north — the town's glow. The three lines' lamps (layers `south`, `west`, `north`; lib.js): a mail plane's lamp
// coming in from each way now and then, slowly, down toward the field (sky.animate.js). Screen heights; the horizon at H.
const A = e.aspect;
const H = 0.62;
const X0 = -0.5;
const X1 = A + 0.5;
const Y0 = -0.5;
const Y1 = 1.3;
// a soft round glow, stretched (sx, sy: its half-widths), falling off smoothly — no edge to its disc
function glow(c, x, y, sx, sy, color, alpha) {
  c.save();
  c.translate(x, y);
  c.scale(sx, sy);
  const [cr, cg, cb] = [1, 3, 5].map(i => parseInt(color.slice(i, i + 2), 16));
  const r = c.createRadialGradient(0, 0, 0, 0, 0, 1);
  for (const u of [0, 0.2, 0.4, 0.6, 0.8, 1]) r.addColorStop(u, `rgba(${cr},${cg},${cb},${(1 - u * u) ** 2})`);
  c.globalAlpha = alpha;
  c.fillStyle = r;
  c.beginPath();
  c.arc(0, 0, 1, 0, Math.PI * 2);
  c.fill();
  c.restore();
}
// the night
const sky = g.createLinearGradient(0, Y0, 0, H);
sky.addColorStop(0, '#0f1832');
sky.addColorStop(0.45, '#1c2b50');
sky.addColorStop(0.82, '#32477a');
sky.addColorStop(1, '#506797');
g.fillStyle = sky;
g.fillRect(X0, Y0, X1 - X0, H - Y0);
// below the horizon, where the field's far edge ends: the dark land
g.fillStyle = '#1b2236';
g.fillRect(X0, H, X1 - X0, Y1 - H);
// the Milky Way: a faint broad band from high on the left down toward the right, its stars thicker in it
const way = (x) => 0.02 + 0.32 * ((x - X0) / (X1 - X0));
for (let i = 0; i < 40; i++) {
  const x = X0 + (X1 - X0) * (i / 39);
  glow(g, x, way(x), 0.16, 0.07, '#9fb0d8', 0.08);
}
// the town's glow low on the right, the north
glow(g, A * 0.93, H, 0.6, 0.08, '#8a86a0', 0.5);
// the stars, thinning toward the horizon; more in the Milky Way
for (let i = 0; i < 1400; i++) {
  const inWay = i < 400;
  const x = X0 + (X1 - X0) * e.rnd();
  const y = inWay ? way(x) + 0.09 * (e.rnd() + e.rnd() - 1) : Y0 + (H - 0.05 - Y0) * e.rnd() ** 1.3;
  const b = e.rnd();
  g.globalAlpha = (0.35 + 0.6 * b) * Math.max(0, 1 - 0.75 * ((y - Y0) / (H - Y0)));
  g.fillStyle = b > 0.86 ? '#fff3dc' : '#e8eeff';
  g.beginPath();
  g.arc(x, y, 0.0007 + 0.0018 * b * b, 0, Math.PI * 2);
  g.fill();
}
g.globalAlpha = 1;
// the moon high on the right in its haze; its point lights the scene (the light `moon`, from sky#moon)
const M = { x: A * 0.86, y: 0.1, r: 0.026 };
glow(g, M.x, M.y, M.r * 7, M.r * 7, '#c8d4f4', 0.35);
g.fillStyle = '#f2f1e6';
g.beginPath();
g.arc(M.x, M.y, M.r, 0, Math.PI * 2);
g.fill();
g.fillStyle = 'rgba(160,165,175,0.25)';
for (const [dx, dy, r] of [[-0.007, -0.005, 0.007], [0.008, 0.006, 0.005], [0.002, 0.012, 0.004]]) {
  g.beginPath();
  g.arc(M.x + dx, M.y + dy, r, 0, Math.PI * 2);
  g.fill();
}
e.at(M.x, M.y, 'moon');
// the clouds lying low in the west: long banks, dark beneath, their tops white under the moon (they drift a little)
e.layer('clouds', { box: [X0, H - 0.12, X1, H + 0.01] }, c => {
  for (let i = 0; i < 14; i++) {
    const x = A * 0.3 + (A * 0.62) * (i / 13) + 0.05 * (e.rnd() - 0.5);
    const w = 0.12 + 0.12 * e.rnd();
    const h = 0.012 + 0.012 * e.rnd();
    const y = H - 0.025 - 0.035 * e.rnd();
    glow(c, x, y + h * 0.6, w, h * 1.4, '#2c3a62', 0.9);
    glow(c, x - w * 0.1, y - h * 0.3, w * 0.8, h * 0.6, '#c9d4ee', 0.55);
  }
});
// the storm far to the south: dark lumps along the horizon, their tops a little lighter
e.layer('storm', { box: [X0, H - 0.22, A * 0.5, H + 0.02] }, c => {
  for (let i = 0; i < 26; i++) {
    const x = X0 + (A * 0.44 - X0) * (i / 25) + 0.03 * (e.rnd() - 0.5);
    const big = 1 - Math.abs(x - A * 0.08) / (A * 0.5);
    const r = 0.03 + 0.055 * Math.max(0, big) * (0.6 + 0.4 * e.rnd());
    glow(c, x, H - r * 0.4, r * 1.6, r, '#2a2948', 0.95);
  }
  // its foot along the horizon, thinning out toward the west
  glow(c, X0 + 0.2, H - 0.01, A * 0.62, 0.035, '#20213a', 0.9);
});
// the light inside the storm's bank when lightning goes off in it
e.layer('flash', { blend: 'add', box: [X0, H - 0.22, A * 0.5, H + 0.02] }, c => {
  glow(c, A * 0.08, H - 0.05, 0.3, 0.09, '#c9c4f0', 0.5);
  glow(c, A * 0.08, H - 0.06, 0.1, 0.05, '#f0eaff', 0.4);
});
// the three lines' lamps (lib.js LINES): each a plane's landing lamp and its red light, painted where its way begins;
// its layer's box covers all its way (animate carries it toward the field and fades it)
for (const [name, { from, way }] of Object.entries(e.lib.LINES)) {
  const x = from[0] * A;
  const y = from[1];
  const x2 = x + way[0] * A;
  const y2 = y + way[1];
  e.layer(name, { blend: 'add', box: [Math.min(x, x2) - 0.03, Math.min(y, y2) - 0.03, Math.max(x, x2) + 0.03, Math.max(y, y2) + 0.03] }, c => {
    glow(c, x, y, 0.012, 0.012, '#fff2d8', 0.9);
    glow(c, x, y, 0.004, 0.004, '#ffffff', 1);
    glow(c, x + 0.006, y + 0.002, 0.003, 0.003, '#ff5a48', 0.9);
  });
}
