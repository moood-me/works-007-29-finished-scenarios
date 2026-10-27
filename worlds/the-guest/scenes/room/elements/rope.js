// The nail on the left wall by the door, and on it the rope Balducci led the Arab up by, coiled and hung (metres; the
// nail at y −0.78, 1.78 m over the floor): loose loops of brown hemp, the end with its knot hanging below.
const R = '#9a8560';
const D = '#6e5c40';
// the nail
g.fillStyle = '#2a2826';
g.fillRect(-0.012, -0.8, 0.024, 0.03);
// the loops, hanging from the nail
g.lineCap = 'round';
for (let i = 0; i < 6; i++) {
  const w = 0.11 + i * 0.012 + e.rnd() * 0.02;
  const h = 0.36 + i * 0.015 + e.rnd() * 0.03;
  const sx = (e.rnd() - 0.5) * 0.03;
  g.strokeStyle = i % 2 ? D : R;
  g.lineWidth = 0.022;
  g.beginPath();
  g.moveTo(-0.01, -0.78);
  g.bezierCurveTo(-w + sx, -0.74, -w + sx, -0.78 + h, sx, -0.78 + h);
  g.bezierCurveTo(w + sx, -0.78 + h, w + sx, -0.74, 0.01, -0.78);
  g.stroke();
}
// the end hanging down, its knot
g.strokeStyle = R;
g.lineWidth = 0.022;
g.beginPath();
g.moveTo(0.04, -0.5);
g.quadraticCurveTo(0.08, -0.25, 0.05, -0.08);
g.stroke();
g.fillStyle = D;
g.beginPath();
g.ellipse(0.05, -0.07, 0.025, 0.03, 0, 0, Math.PI * 2);
g.fill();
e.at(0, -0.5, 'coil');
