// The right wall (its x runs toward the viewer: -2.75 at the back wall, 2.75 at the front): limewash, a dark
// skirting, a calendar on a nail and a coat on a peg; nearer, the door to the passage.
g.fillStyle = '#e8dec8';
g.fillRect(-2.75, -2.52, 5.5, 2.54);
g.save();
g.beginPath();
g.rect(-2.75, -2.52, 5.5, 2.54);
g.clip();
for (let k = 0; k < 40; k++) {
  const x = -2.7 + 5.4 * e.rnd(), y = -2.5 + 2.4 * e.rnd(), r = 0.15 + 0.4 * e.rnd();
  const p = g.createRadialGradient(x, y, 0, x, y, r);
  p.addColorStop(0, 'rgba(210, 194, 160, 0.35)');
  p.addColorStop(1, 'rgba(210, 194, 160, 0)');
  g.fillStyle = p;
  g.fillRect(x - r, y - r, 2 * r, 2 * r);
}
g.restore();
g.fillStyle = '#4a4038';
g.fillRect(-2.75, -0.14, 5.5, 0.16);
// the calendar
g.fillStyle = '#f1ecdf';
g.fillRect(-2.25, -1.85, 0.3, 0.42);
g.fillStyle = '#7a8c5a';
g.fillRect(-2.25, -1.85, 0.3, 0.18);
g.fillStyle = '#b8b0a0';
for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) g.fillRect(-2.235 + c * 0.047, -1.63 + r * 0.045, 0.03, 0.025);
// the coat on its peg
g.fillStyle = '#5c5442';
g.beginPath();
g.moveTo(-1.45, -1.8);
g.quadraticCurveTo(-1.65, -1.75, -1.68, -1.15);
g.lineTo(-1.7, -0.67);
g.lineTo(-1.2, -0.67);
g.lineTo(-1.22, -1.15);
g.quadraticCurveTo(-1.25, -1.75, -1.45, -1.8);
g.fill();
// the door to the passage: old planks, a latch
g.fillStyle = '#6b4a2f';
g.fillRect(-0.6, -2.0, 0.85, 2.0);
g.strokeStyle = '#4b321f';
g.lineWidth = 0.012;
for (let x = -0.6 + 0.17; x < 0.25; x += 0.17) {
  g.beginPath();
  g.moveTo(x, -2.0);
  g.lineTo(x, 0);
  g.stroke();
}
g.fillStyle = '#4b321f';
g.fillRect(-0.6, -1.7, 0.85, 0.06);
g.fillRect(-0.6, -0.4, 0.85, 0.06);
g.fillStyle = '#2b2520';
g.fillRect(0.08, -1.05, 0.1, 0.025);
