// The left wall (its x runs away from the viewer: −3.4 at the front, 3.4 at the back wall): limewash, a dark skirting
// and the old oak dresser — a cupboard below, three rails of blue-and-white plates, jugs and a tea caddy above.
g.fillStyle = '#e2d8c2';
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
// the dresser, x 0.1…2.0
const x0 = 0.1, x1 = 2.0, oak = '#6b4a2f', dark = '#4b321f';
g.fillStyle = oak;
g.fillRect(x0, -0.92, x1 - x0, 0.92);
g.fillStyle = dark;
g.fillRect(x0, -0.06, x1 - x0, 0.06);
g.fillRect(x0 - 0.04, -0.96, x1 - x0 + 0.08, 0.05);
// its two cupboard doors and two drawers, brass knobs
g.strokeStyle = dark;
g.lineWidth = 0.02;
for (const [a, b] of [[x0 + 0.08, (x0 + x1) / 2 - 0.03], [(x0 + x1) / 2 + 0.03, x1 - 0.08]]) {
  g.strokeRect(a, -0.86, b - a, 0.18);
  g.strokeRect(a, -0.6, b - a, 0.48);
  g.fillStyle = '#c9a24c';
  g.beginPath();
  g.arc((a + b) / 2, -0.77, 0.018, 0, Math.PI * 2);
  g.fill();
}
// the rack above: two sides, a cornice, three shelves
g.fillStyle = oak;
g.fillRect(x0 + 0.04, -2.25, 0.05, 1.29);
g.fillRect(x1 - 0.09, -2.25, 0.05, 1.29);
g.fillStyle = dark;
g.fillRect(x0 - 0.02, -2.32, x1 - x0 + 0.04, 0.08);
g.fillStyle = '#5a3d26';
g.fillRect(x0 + 0.09, -2.24, x1 - x0 - 0.18, 1.28);
const shelves = [-1.32, -1.7, -2.06];
for (const y of shelves) {
  g.fillStyle = oak;
  g.fillRect(x0 + 0.09, y, x1 - x0 - 0.18, 0.03);
}
// plates leaning on the rails: white with a blue rim and a blue middle, alternating sizes
for (const y of shelves) {
  for (let x = x0 + 0.22; x < x1 - 0.15; x += 0.21) {
    const r = 0.085 + 0.015 * ((Math.round(x * 10) % 2));
    g.fillStyle = '#ecebe4';
    g.beginPath();
    g.arc(x, y - r, r, 0, Math.PI * 2);
    g.fill();
    g.strokeStyle = '#4a6aa2';
    g.lineWidth = 0.012;
    g.beginPath();
    g.arc(x, y - r, r * 0.82, 0, Math.PI * 2);
    g.stroke();
    g.fillStyle = '#6f88b8';
    g.beginPath();
    g.arc(x, y - r, r * 0.35, 0, Math.PI * 2);
    g.fill();
  }
}
// jugs and a red tea caddy on the dresser's top
for (const [x, h, c] of [[0.35, 0.22, '#e6dfcf'], [0.6, 0.16, '#3d5d93'], [1.55, 0.2, '#b2463a'], [1.8, 0.26, '#d9cfb6']]) {
  g.fillStyle = c;
  g.beginPath();
  g.moveTo(x - 0.07, -0.96);
  g.quadraticCurveTo(x - 0.1, -0.96 - h * 0.6, x - 0.05, -0.96 - h);
  g.lineTo(x + 0.05, -0.96 - h);
  g.quadraticCurveTo(x + 0.1, -0.96 - h * 0.6, x + 0.07, -0.96);
  g.closePath();
  g.fill();
}
