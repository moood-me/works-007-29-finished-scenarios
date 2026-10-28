// The window on the yard, from inside (its opening x −0.55…0.55, 1.05…2.15 m up; the panes are not painted: the
// blizzard shows through): a frame of four small panes, hoar frost thick on them — feathers of rime grown in from the
// edges, the middle clearer (where the Princess will rub it) — a deep sill, red-checked curtains drawn back to both
// sides.
const L = e.lib, X = 0.55, Y0 = -2.15, Y1 = -1.05;
// the frost over the panes (see-through: the storm behind it)
for (const [x, y] of [[-X, Y0], [0, Y0], [-X, (Y0 + Y1) / 2], [0, (Y0 + Y1) / 2]]) {
  g.fillStyle = 'rgba(228, 236, 248, 0.22)';
  g.fillRect(x, y, X, (Y1 - Y0) / 2);
  L.frost(g, 300 + Math.round((x + y) * 10), x, y, X, (Y1 - Y0) / 2);
}
// the frame and the glazing bars
g.fillStyle = '#6e4a2c';
g.fillRect(-X - 0.08, Y0 - 0.08, 0.08, Y1 - Y0 + 0.16);
g.fillRect(X, Y0 - 0.08, 0.08, Y1 - Y0 + 0.16);
g.fillRect(-X - 0.08, Y0 - 0.08, 2 * X + 0.16, 0.08);
g.fillStyle = '#7d5634';
g.fillRect(-0.03, Y0, 0.06, Y1 - Y0);
g.fillRect(-X, (Y0 + Y1) / 2 - 0.03, 2 * X, 0.06);
// the sill
g.fillStyle = '#8a6038';
g.fillRect(-X - 0.16, Y1, 2 * X + 0.32, 0.07);
g.fillStyle = '#5a3a24';
g.fillRect(-X - 0.16, Y1 + 0.07, 2 * X + 0.32, 0.03);
// the curtains: red and cream checks, gathered back with a red tie
const curtain = (x0, x1, side) => {
  const lo = Math.min(x0, x1);
  g.save();
  g.beginPath();
  g.moveTo(x0, Y0 - 0.12);
  g.lineTo(x1, Y0 - 0.12);
  g.quadraticCurveTo(x1 - side * 0.12, -1.55, x1 - side * 0.03, Y1 + 0.05);
  g.lineTo(x0, Y1 + 0.05);
  g.closePath();
  g.clip();
  g.fillStyle = '#efe4cc';
  g.fillRect(lo - 0.1, Y0 - 0.2, 0.5, 1.3);
  g.fillStyle = 'rgba(176, 52, 44, 0.7)';
  for (let i = -2; i < 6; i++) g.fillRect(lo - 0.1 + i * 0.07, Y0 - 0.2, 0.035, 1.3);
  g.fillStyle = 'rgba(176, 52, 44, 0.5)';
  for (let j = 0; j < 20; j++) g.fillRect(lo - 0.1, Y0 - 0.2 + j * 0.07, 0.5, 0.035);
  g.restore();
  g.fillStyle = '#b5342e';
  g.fillRect(lo, -1.5, Math.abs(x1 - x0), 0.04);
};
curtain(-X - 0.24, -X + 0.06, 1);
curtain(X + 0.24, X - 0.06, -1);
g.fillStyle = '#4a3020';
g.fillRect(-X - 0.3, Y0 - 0.16, 2 * X + 0.6, 0.04);
