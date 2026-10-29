// The travelling carriage brought to the porch, seen side on (its body's door at the anchor, the horses to the right):
// the black lacquered body on its springs with a crimson line, its door with a window and the arms in gold, a lamp at
// each corner, trunks strapped on the roof, the coachman on his box in a dark cape and top hat, the big rear wheel and
// the smaller front one, a pair of bays in harness. There while `carriage` is.
if (!e.state.carriage) return;
const BODY = '#1e1e24';
const TRIM = '#7a2228';
const WHEEL = '#2a231e';
// the horses: two bays, the near one before the far, heads up
for (const [dx, tone] of [[0.25, '#4a3020'], [0, '#6a4428']]) {
  g.fillStyle = tone;
  g.beginPath();
  g.ellipse(3.15 + dx, -1.35, 0.9, 0.36, 0, 0, Math.PI * 2);
  g.fill();
  for (const x of [2.45, 2.65, 3.6, 3.8]) g.fillRect(x + dx, -1.15, 0.09, 1.15);
  g.beginPath();
  g.moveTo(3.8 + dx, -1.5);
  g.lineTo(4.25 + dx, -2.2);
  g.lineTo(4.55 + dx, -2.05);
  g.lineTo(4.15 + dx, -1.25);
  g.closePath();
  g.fill();
  g.beginPath();
  g.ellipse(4.5 + dx, -2.0, 0.22, 0.12, 0.6, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#241812';
  g.beginPath();
  g.ellipse(2.25 + dx, -1.15, 0.08, 0.32, 0.3, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#1a1410';
  g.fillRect(2.6 + dx, -1.62, 1.3, 0.06);
}
// the pole and the traces from the carriage to the collars
g.fillStyle = WHEEL;
g.fillRect(1.0, -1.05, 1.6, 0.06);
// the undercarriage and springs
g.fillRect(-1.6, -0.82, 2.6, 0.08);
// the body: rounded below, a crimson line round it, the door with its window and the arms
g.fillStyle = BODY;
g.beginPath();
g.moveTo(-1.2, -2.3);
g.lineTo(1.0, -2.3);
g.quadraticCurveTo(1.15, -1.5, 0.9, -0.95);
g.lineTo(-1.1, -0.95);
g.quadraticCurveTo(-1.35, -1.5, -1.2, -2.3);
g.closePath();
g.fill();
g.strokeStyle = TRIM;
g.lineWidth = 0.035;
g.strokeRect(-1.0, -2.18, 1.85, 1.1);
g.strokeRect(-0.35, -2.18, 0.7, 1.15);
g.fillStyle = '#5a6476';
g.fillRect(-0.27, -2.1, 0.54, 0.42);
g.fillStyle = '#c8a24a';
g.beginPath();
g.arc(0, -1.35, 0.1, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#8e2328';
g.beginPath();
g.arc(0, -1.35, 0.065, 0, Math.PI * 2);
g.fill();
// the lamps
g.fillStyle = '#c8a24a';
for (const x of [-1.15, 0.95]) g.fillRect(x - 0.05, -2.35, 0.1, 0.18);
// the trunks on the roof
g.fillStyle = '#6a4a30';
g.fillRect(-1.1, -2.62, 1.0, 0.32);
g.fillStyle = '#7e5a3a';
g.fillRect(-0.05, -2.56, 0.7, 0.26);
// the coachman on his box at the front
g.fillStyle = '#2a2a30';
g.fillRect(0.95, -2.2, 0.4, 0.2);
g.beginPath();
g.ellipse(1.2, -2.42, 0.2, 0.26, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#e6c0a0';
g.beginPath();
g.arc(1.22, -2.78, 0.1, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#16161a';
g.fillRect(1.1, -3.04, 0.24, 0.2);
g.fillRect(1.04, -2.86, 0.36, 0.03);
// the wheels: spokes, rims, hubs
for (const [x, r] of [[-0.95, 0.75], [0.8, 0.52]]) {
  g.strokeStyle = WHEEL;
  g.lineWidth = 0.06;
  g.beginPath();
  g.arc(x, -r, r - 0.03, 0, Math.PI * 2);
  g.stroke();
  g.lineWidth = 0.025;
  for (let k = 0; k < 12; k++) {
    const a = (k / 12) * Math.PI * 2;
    g.beginPath();
    g.moveTo(x, -r);
    g.lineTo(x + Math.cos(a) * r, -r + Math.sin(a) * r);
    g.stroke();
  }
  g.fillStyle = '#8a6a2a';
  g.beginPath();
  g.arc(x, -r, 0.07, 0, Math.PI * 2);
  g.fill();
}
e.at(0, -1.6, 'door');
