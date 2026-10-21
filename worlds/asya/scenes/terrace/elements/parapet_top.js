// The low wall's coping seen from above (x across, y toward the viewer): long flat stones, warm, worn smooth — where
// Asya sits.
const L = e.lib;
const AX = 2.7;
const D = 4.275;
const grd = g.createLinearGradient(-5.3, 0, 5.3, 0);
for (let i = 0; i <= 24; i++) {
  const x = -5.3 + (10.6 * i) / 24;
  grd.addColorStop(i / 24, L.toPaper("#e0d5bd", L.edge((AX + x) / D)));
}
g.fillStyle = grd;
g.fillRect(-5.3, -0.175, 10.6, 0.35);
g.strokeStyle = "rgba(150, 132, 104, 0.6)";
g.lineWidth = 0.012;
for (let x = -5.3; x < 5.3; x += 0.7 + 0.3 * L.rnd(Math.round(x * 10), 95)) {
  g.beginPath();
  g.moveTo(x, -0.175);
  g.lineTo(x, 0.175);
  g.stroke();
}
