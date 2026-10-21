// The shaft Nikita has taken out and stood upright in the snow at the sleigh's front, tied to it: a long pole of pale
// ash, its thick end sunk in the drift, rime along its windward side; and at its top his red sash, tied round it so that
// they will be found — its two ends streaming out on the wind to the left, rippling and snapping (layers bent by the
// wind about the knot). The sash is the brightest thing in the night.
// (on the sleigh's anchor, its front; x along the sleigh; the pole from the snow to 2.6 m, the knot at 2.52)
const L = e.lib;
const C = L.C;
const RED = "#c0342a";
const RED_DARK = "#8c231d";
const KNOT = [0.05, -2.52];

// the pole: thick at the foot, narrowing to the top, a little crooked
g.fillStyle = "#8a7458";
g.beginPath();
g.moveTo(-0.04, 0.12);
g.quadraticCurveTo(-0.01, -1.3, 0.025, -2.6);
g.lineTo(0.07, -2.6);
g.quadraticCurveTo(0.05, -1.3, 0.045, 0.12);
g.closePath();
g.fill();
g.fillStyle = "rgba(60,48,36,0.45)";
g.beginPath();
g.moveTo(0.02, 0.12);
g.quadraticCurveTo(0.035, -1.3, 0.055, -2.6);
g.lineTo(0.07, -2.6);
g.quadraticCurveTo(0.05, -1.3, 0.045, 0.12);
g.closePath();
g.fill();
// (rime along its windward side, the right)
g.fillStyle = "rgba(240,244,250,0.9)";
for (let i = 0; i < 40; i++) {
  const u = e.rnd();
  const y = 0.05 - u * 2.6;
  const x = 0.045 + (0.025 - 0.045) * u + 0.01;
  g.fillRect(x - 0.005, y, 0.012, 0.02 + e.rnd() * 0.05);
}
// the snow heaped round its foot
g.fillStyle = C.snow;
g.beginPath();
g.moveTo(-0.3, 0.12);
g.quadraticCurveTo(0.0, -0.16, 0.32, 0.12);
g.closePath();
g.fill();
// the sash wound round the pole under the knot
g.fillStyle = RED;
g.fillRect(0.0, -2.55, 0.1, 0.09);
g.fillStyle = RED_DARK;
g.fillRect(0.0, -2.5, 0.1, 0.015);
e.at(KNOT[0], KNOT[1], "sash");
e.at(0.05, -1.4);

// one end of the sash, streaming out from the knot: a ribbon that ripples along its length, its fringed end
function ribbon(c, len, width, droop, waves, phase) {
  const n = 24;
  const top = [];
  const bot = [];
  for (let i = 0; i <= n; i++) {
    const u = i / n;
    const x = KNOT[0] - u * len;
    const y = KNOT[1] + droop * u * u + 0.07 * u * Math.sin(u * waves * Math.PI * 2 + phase);
    const w = width * (1 - 0.25 * u) * (0.75 + 0.25 * Math.cos(u * waves * Math.PI * 2 + phase));
    top.push([x, y - w / 2]);
    bot.push([x, y + w / 2]);
  }
  c.fillStyle = RED;
  c.beginPath();
  c.moveTo(top[0][0], top[0][1]);
  for (const p of top) c.lineTo(p[0], p[1]);
  for (let i = bot.length - 1; i >= 0; i--) c.lineTo(bot[i][0], bot[i][1]);
  c.closePath();
  c.fill();
  // (its folds: darker where the ribbon turns away)
  c.fillStyle = RED_DARK;
  for (let i = 0; i < n; i++) {
    const u = i / n;
    if (Math.cos(u * waves * Math.PI * 2 + phase) > -0.3) continue;
    c.beginPath();
    c.moveTo(top[i][0], top[i][1]);
    c.lineTo(top[i + 1][0], top[i + 1][1]);
    c.lineTo(bot[i + 1][0], bot[i + 1][1]);
    c.lineTo(bot[i][0], bot[i][1]);
    c.closePath();
    c.fill();
  }
  // (the fringe at its end)
  const end = top[n];
  const endB = bot[n];
  c.strokeStyle = RED;
  c.lineWidth = 0.006;
  for (let k = 0; k < 6; k++) {
    const v = k / 5;
    const y = end[1] + (endB[1] - end[1]) * v;
    c.beginPath();
    c.moveTo(end[0], y);
    c.lineTo(end[0] - 0.07, y + 0.01 * (k - 2.5));
    c.stroke();
  }
}
e.layer("sash_long", { pivot: KNOT, wind: { strength: 0.85, gust: 1.0, scale: 0.35 }, box: [-1.0, -2.75, 0.2, -2.1] }, c => {
  ribbon(c, 0.8, 0.085, 0.22, 1.8, 0.3);
});
e.layer("sash_short", { pivot: KNOT, wind: { strength: 1.0, gust: 1.0, scale: 0.3 }, box: [-0.75, -2.75, 0.2, -2.1] }, c => {
  ribbon(c, 0.55, 0.075, 0.3, 1.5, 2.1);
});
