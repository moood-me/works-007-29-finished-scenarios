// The puddles on the square from above (metres; middle 6.5 m ahead, y toward the viewer): grey water in the hollows
// and the ruts, a muddy rim round each. Painted only where there is water: the mirror is only there.
const pools = [
  [-5.6, 2.6, 1.6, 0.7, -0.2], [-1.2, 3.6, 0.9, 0.45, 0.3], [1.6, 1.2, 2.2, 0.8, 0.5], [3.2, -2.4, 1.2, 0.5, 0.9],
  [-3.2, -1.4, 1.4, 0.5, -0.1], [6.5, 0.6, 1.8, 0.6, 0.2], [-8.4, -3.2, 1.5, 0.6, 0.1], [0.2, -5.2, 1.1, 0.4, 0.7],
  [-2.4, 5.8, 1.2, 0.5, -0.3], [4.6, 4.8, 1.0, 0.4, 0.1], [8.8, -4.2, 1.3, 0.5, -0.4], [-6.6, -5.6, 0.9, 0.35, 0.2],
];
for (const [x, y, rx, ry, a] of pools) {
  g.fillStyle = 'rgba(78,64,50,0.9)';
  g.beginPath();
  g.ellipse(x, y, rx + 0.12, ry + 0.1, a, 0, Math.PI * 2);
  g.fill();
}
for (const [x, y, rx, ry, a] of pools) {
  g.fillStyle = '#8a9294';
  g.beginPath();
  g.ellipse(x, y, rx, ry, a, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#7c8486';
  g.beginPath();
  g.ellipse(x + rx * 0.3, y + ry * 0.1, rx * 0.5, ry * 0.5, a, 0, Math.PI * 2);
  g.fill();
}
