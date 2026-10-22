// The window to the street (1.2 m by 1.8 m): a white casement of two leaves, three panes each, the glass clear — the
// snowy evening beyond — a little snow lodged in the panes' lower corners. Its rectangle is where the light outside
// comes in (light "window_in").
const F = '#ece6da';
g.fillStyle = 'rgba(240,242,246,0.85)';
for (const x0 of [-0.54, 0.03]) {
  for (const yb of [-0.06, -0.62, -1.18]) {
    g.beginPath();
    g.moveTo(x0, yb);
    g.lineTo(x0 + 0.13, yb);
    g.quadraticCurveTo(x0 + 0.02, yb - 0.01, x0, yb - 0.07);
    g.closePath();
    g.fill();
    g.beginPath();
    g.moveTo(x0 + 0.51, yb);
    g.lineTo(x0 + 0.4, yb);
    g.quadraticCurveTo(x0 + 0.5, yb - 0.01, x0 + 0.51, yb - 0.05);
    g.closePath();
    g.fill();
  }
}
g.fillStyle = F;
g.fillRect(-0.6, -1.8, 1.2, 0.07);
g.fillRect(-0.6, -0.07, 1.2, 0.07);
g.fillRect(-0.6, -1.8, 0.07, 1.8);
g.fillRect(0.53, -1.8, 0.07, 1.8);
g.fillRect(-0.035, -1.8, 0.07, 1.8);
for (const y of [-0.62, -1.18]) g.fillRect(-0.6, y - 0.02, 1.2, 0.04);
g.fillStyle = '#b8924a';
g.fillRect(-0.06, -0.95, 0.025, 0.08);
e.at(0, -0.9);
