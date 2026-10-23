// The right wall (its x runs toward the viewer: −3.4 at the back wall, 3.4 at the front): limewash, and the chimney
// breast round the range (x −2.95…−1.15): a sooty alcove of old brick behind it, a mantel shelf over it with
// candlesticks, a tea tin and a row of brass; a calendar and a coat on a peg nearer the viewer.
g.fillStyle = '#e4dac4';
g.fillRect(-3.4, -2.72, 6.8, 2.74);
for (let k = 0; k < 50; k++) {
  const x = -3.4 + 6.8 * e.rnd(), y = -2.7 + 2.6 * e.rnd(), r = 0.15 + 0.4 * e.rnd();
  const p = g.createRadialGradient(x, y, 0, x, y, r);
  p.addColorStop(0, 'rgba(206, 190, 156, 0.35)');
  p.addColorStop(1, 'rgba(206, 190, 156, 0)');
  g.fillStyle = p;
  g.fillRect(x - r, y - r, 2 * r, 2 * r);
}
g.fillStyle = '#4a4038';
g.fillRect(-3.4, -0.14, 6.8, 0.16);
// the alcove: brick, darkening with soot toward its top
const a0 = -2.95, a1 = -1.15;
g.fillStyle = '#7a4c38';
g.fillRect(a0, -1.55, a1 - a0, 1.57);
g.strokeStyle = 'rgba(60, 40, 30, 0.55)';
g.lineWidth = 0.01;
for (let r = 0, y = -0.02; y > -1.55; r++, y -= 0.075) {
  g.beginPath();
  g.moveTo(a0, y);
  g.lineTo(a1, y);
  g.stroke();
  for (let x = a0 + (r % 2) * 0.11; x < a1; x += 0.22) {
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x, y - 0.075);
    g.stroke();
  }
}
const soot = g.createLinearGradient(0, -1.55, 0, -0.6);
soot.addColorStop(0, 'rgba(30, 22, 18, 0.85)');
soot.addColorStop(1, 'rgba(30, 22, 18, 0)');
g.fillStyle = soot;
g.fillRect(a0, -1.55, a1 - a0, 0.95);
// the mantel beam
g.fillStyle = '#4b321f';
g.fillRect(a0 - 0.12, -1.7, a1 - a0 + 0.24, 0.16);
g.fillStyle = '#5e4129';
g.fillRect(a0 - 0.16, -1.74, a1 - a0 + 0.32, 0.05);
// on the mantel: two brass candlesticks with white candles, a tin, brass weights
for (const x of [a0 + 0.12, a1 - 0.12]) {
  g.fillStyle = '#b8913e';
  g.fillRect(x - 0.05, -1.75, 0.1, 0.02);
  g.fillRect(x - 0.015, -1.95, 0.03, 0.2);
  g.fillStyle = '#efe9da';
  g.fillRect(x - 0.012, -2.12, 0.024, 0.17);
}
g.fillStyle = '#2f5a4a';
g.fillRect(-2.2, -1.95, 0.16, 0.2);
g.fillStyle = '#c9a24c';
for (const [x, s] of [[-1.85, 0.05], [-1.74, 0.04], [-1.65, 0.03]]) g.fillRect(x - s / 2, -1.74 - s * 1.4, s, s * 1.4);
// a calendar on a nail, and a coat on a peg
g.fillStyle = '#f1ecdf';
g.fillRect(-0.4, -1.9, 0.3, 0.42);
g.fillStyle = '#7a8c5a';
g.fillRect(-0.4, -1.9, 0.3, 0.18);
g.fillStyle = '#b8b0a0';
for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) g.fillRect(-0.385 + c * 0.047, -1.68 + r * 0.045, 0.03, 0.025);
g.fillStyle = '#5c5442';
g.beginPath();
g.moveTo(0.55, -1.85);
g.quadraticCurveTo(0.35, -1.8, 0.32, -1.2);
g.lineTo(0.3, -0.72);
g.lineTo(0.8, -0.72);
g.lineTo(0.78, -1.2);
g.quadraticCurveTo(0.75, -1.8, 0.55, -1.85);
g.fill();
