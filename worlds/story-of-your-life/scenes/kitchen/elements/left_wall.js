// The kitchen's left wall, from its foot (x along it away from the viewer: x = distance − 2.9, the back wall at
// x 2.1): the door to the hall (x −1.95…−1.1) with the foot of the stairs beyond it; the coat hooks with her mother's
// quilted jacket; the spice shelf over the stepladder and, above it, the rolled sleeping bag.
g.save();
g.beginPath();
g.rect(-2.12, -2.57, 4.24, 2.59);
g.rect(-1.95, -2.05, 0.85, 2.07);
g.clip('evenodd');
g.fillStyle = '#e6dcc8';
g.fillRect(-2.12, -2.57, 4.24, 2.59);
g.fillStyle = '#d6cab2';
g.fillRect(-2.12, -0.1, 4.24, 0.12);
g.restore();
// the hall seen through the door: its dimmer wall, the runner, the bottom stairs and the newel post
g.fillStyle = '#c4b79e';
g.fillRect(-1.95, -2.05, 0.85, 2.07);
g.fillStyle = '#8e4f3c';
g.fillRect(-1.95, -0.06, 0.85, 0.08);
g.fillStyle = '#b39a78';
for (let k = 0; k < 4; k++) g.fillRect(-1.95, -0.2 - k * 0.19, 0.5 - k * 0.1, 0.05);
g.fillStyle = '#7a5c40';
g.fillRect(-1.5, -1.0, 0.06, 1.0);
g.fillStyle = '#efebe2';
g.fillRect(-2.02, -2.12, 0.07, 2.14);
g.fillRect(-1.1, -2.12, 0.07, 2.14);
g.fillRect(-2.02, -2.12, 0.99, 0.07);
// the coat hooks and her mother's jacket
g.fillStyle = '#9b7a52';
g.fillRect(-0.95, -1.82, 0.5, 0.06);
g.fillStyle = '#5c4a38';
for (const x of [-0.88, -0.7, -0.52]) g.fillRect(x - 0.01, -1.78, 0.02, 0.06);
g.fillStyle = '#8a5a3c';
g.beginPath();
g.moveTo(-0.72, -1.74);
g.quadraticCurveTo(-0.95, -1.66, -0.96, -1.4);
g.lineTo(-0.94, -0.98);
g.lineTo(-0.48, -0.98);
g.lineTo(-0.46, -1.4);
g.quadraticCurveTo(-0.48, -1.66, -0.68, -1.74);
g.closePath();
g.fill();
g.strokeStyle = 'rgba(70,44,28,0.5)';
g.lineWidth = 0.008;
for (let y = -1.55; y < -1.0; y += 0.1) {
  g.beginPath();
  g.moveTo(-0.95, y);
  g.lineTo(-0.47, y);
  g.stroke();
}
g.beginPath();
g.moveTo(-0.7, -1.7);
g.lineTo(-0.7, -0.99);
g.stroke();
// the spice shelf: a board on brackets, the jars, the cinnamon in its tin
g.fillStyle = '#a8865c';
g.fillRect(-0.25, -1.76, 1.05, 0.04);
g.fillRect(-0.18, -1.72, 0.03, 0.1);
g.fillRect(0.68, -1.72, 0.03, 0.1);
const jars = ['#b26a32', '#c9a54a', '#6f7a3c', '#8c3b2e', '#d8cfb4', '#5a3a2a'];
for (let i = 0; i < jars.length; i++) {
  const x = -0.2 + i * 0.15;
  g.fillStyle = 'rgba(230,236,236,0.85)';
  g.fillRect(x, -1.9, 0.09, 0.14);
  g.fillStyle = jars[i];
  g.fillRect(x + 0.01, -1.86, 0.07, 0.1);
  g.fillStyle = '#3f3a34';
  g.fillRect(x, -1.92, 0.09, 0.025);
}
g.fillStyle = '#9a5a30';
g.fillRect(0.7, -1.93, 0.08, 0.17);
// the high shelf: the rolled sleeping bag in its straps, the cookbooks
g.fillStyle = '#a8865c';
g.fillRect(-0.25, -2.18, 1.05, 0.04);
g.fillStyle = '#3e5f4a';
g.beginPath();
g.roundRect(-0.15, -2.48, 0.6, 0.3, 0.14);
g.fill();
g.fillStyle = '#2a3a30';
g.fillRect(0.0, -2.48, 0.03, 0.3);
g.fillRect(0.28, -2.48, 0.03, 0.3);
for (const [x, w, c] of [[0.52, 0.05, '#9a3a32'], [0.58, 0.04, '#d6c08a'], [0.63, 0.06, '#3a5a7a']]) {
  g.fillStyle = c;
  g.fillRect(x, -2.42, w, 0.24);
}
