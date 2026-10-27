// The garden beyond the window at dusk: the far hills dark against the afterglow, the lawn, the clipped hedge, the
// chestnut's crown black over it and the paper lanterns still burning on their cord under it.
const lib = e.lib;
// the far hills
g.fillStyle = '#5a5672';
g.beginPath();
g.moveTo(-3.6, -1.6);
for (let x = -3.6; x <= 3.6; x += 0.3) g.lineTo(x, -1.75 - Math.sin(x * 0.9 + 1) * 0.25 - Math.sin(x * 2.3) * 0.08);
g.lineTo(3.6, 0.1);
g.lineTo(-3.6, 0.1);
g.closePath();
g.fill();
// the lawn
g.fillStyle = '#4c5a3c';
g.fillRect(-3.6, -0.9, 7.2, 1.0);
// the hedge
g.fillStyle = '#34452c';
g.beginPath();
g.moveTo(-3.6, -0.6);
for (let x = -3.6; x <= 3.6; x += 0.2) g.lineTo(x, -1.25 - e.rnd() * 0.05);
g.lineTo(3.6, -0.6);
g.closePath();
g.fill();
// the chestnut: its trunk and its dark crown
g.fillStyle = '#2c2a26';
g.fillRect(0.9, -2.6, 0.32, 2.0);
lib.crown(g, e.rnd, { cx: 0.6, cy: -3.6, rx: 2.6, ry: 1.5, n: 260, leaf: 0.32, mass: '#262f22', colors: ['#2a3524', '#34422c', '#3e4f33'] });
// the lanterns on their cord under the crown
g.strokeStyle = '#2a2622';
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(-2.4, -2.7);
g.quadraticCurveTo(0, -2.3, 2.6, -2.75);
g.stroke();
const papers = ['#f0a040', '#e0553c', '#f3cf68', '#f4ecdc', '#ec8a48'];
for (let i = 0; i < 5; i++) {
  const x = -1.9 + i * 1.0;
  const t = (x + 2.4) / 5.0;
  const y = (1 - t) * (1 - t) * -2.7 + 2 * t * (1 - t) * -2.3 + t * t * -2.75 + 0.18;
  g.fillStyle = papers[i];
  g.beginPath();
  g.ellipse(x, y, 0.1, 0.13, 0, 0, Math.PI * 2);
  g.fill();
  e.light(x, y, 0.16, papers[i], 0.9, `l${i}`);
}
