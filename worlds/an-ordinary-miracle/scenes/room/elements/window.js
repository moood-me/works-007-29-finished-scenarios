// The window on the mountains, from inside (its opening x −0.65…0.65, 1.15…2.35 m up, left open — the panes are not
// painted, the storm shows through): a frame of six small panes, a deep sill, a white embroidered towel draped over
// the frame's top with red-stitched ends hanging, a red geranium in a clay pot on the sill. (The cool light coming in
// is the scene's light `window`.)
const L = e.lib, X = 0.65, Y0 = -2.35, Y1 = -1.15;
g.fillStyle = '#8a6038';
g.fillRect(-X - 0.1, Y0 - 0.1, 0.1, Y1 - Y0 + 0.2);
g.fillRect(X, Y0 - 0.1, 0.1, Y1 - Y0 + 0.2);
g.fillRect(-X - 0.1, Y0 - 0.1, 2 * X + 0.2, 0.1);
// the glazing bars: two uprights, one cross-bar
g.fillStyle = '#9a6e44';
for (const x of [-X / 3, X / 3]) g.fillRect(x - 0.025, Y0, 0.05, Y1 - Y0);
g.fillRect(-X, (Y0 + Y1) / 2 - 0.025, 2 * X, 0.05);
// the sill
g.fillStyle = '#a77a4c';
g.fillRect(-X - 0.18, Y1, 2 * X + 0.36, 0.07);
g.fillStyle = '#7a5434';
g.fillRect(-X - 0.18, Y1 + 0.07, 2 * X + 0.36, 0.03);
// the towel over the top: a white band with a red stitched border, its ends hanging down both sides
const towel = (x, len) => {
  g.fillStyle = '#f1ebdc';
  g.fillRect(x - 0.12, Y0 - 0.14, 0.24, len);
  g.fillStyle = '#b5342e';
  for (let r = 0; r < 3; r++) {
    const y = Y0 - 0.14 + len - 0.22 + r * 0.06;
    for (let i = 0; i < 5; i++) {
      g.beginPath();
      g.moveTo(x - 0.1 + i * 0.05, y);
      g.lineTo(x - 0.075 + i * 0.05, y - 0.025);
      g.lineTo(x - 0.05 + i * 0.05, y);
      g.lineTo(x - 0.075 + i * 0.05, y + 0.025);
      g.fill();
    }
  }
  g.fillStyle = '#e2d8c4';
  for (let i = 0; i < 9; i++) g.fillRect(x - 0.11 + i * 0.027, Y0 - 0.14 + len, 0.012, 0.05);
};
g.fillStyle = '#f1ebdc';
g.beginPath();
g.moveTo(-X - 0.2, Y0 - 0.14);
g.quadraticCurveTo(0, Y0 + 0.02, X + 0.2, Y0 - 0.14);
g.lineTo(X + 0.2, Y0 - 0.06);
g.quadraticCurveTo(0, Y0 + 0.1, -X - 0.2, Y0 - 0.06);
g.closePath();
g.fill();
g.strokeStyle = '#b5342e';
g.lineWidth = 0.014;
g.beginPath();
g.moveTo(-X - 0.2, Y0 - 0.08);
g.quadraticCurveTo(0, Y0 + 0.07, X + 0.2, Y0 - 0.08);
g.stroke();
towel(-X - 0.08, 0.72);
towel(X + 0.08, 0.6);
// the geranium on the sill, left
g.fillStyle = '#a5532e';
g.beginPath();
g.moveTo(-0.5, Y1);
g.lineTo(-0.54, Y1 - 0.15);
g.lineTo(-0.3, Y1 - 0.15);
g.lineTo(-0.34, Y1);
g.closePath();
g.fill();
L.dabs(g, 141, -0.6, Y1 - 0.38, 0.36, 0.24, ['#4f7a3e', '#3e6633', '#6a8f4c'], 26, 0.045, 0.8, 0.95, true);
L.dabs(g, 142, -0.56, Y1 - 0.44, 0.26, 0.14, ['#d83a34', '#e8564a', '#b5282a'], 16, 0.03, 0.9, 0.95, true);
