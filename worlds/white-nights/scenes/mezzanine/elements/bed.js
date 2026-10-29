// The narrow bed along the right knee wall, its side to the room (x −0.95…0.95 along it, y −0.6 … 0): a plain pine
// frame, a patchwork cover of faded squares, a pillow at the gable end
const INK = e.lib.INK;
e.lib.box(g, -0.95, -0.42, 1.9, 0.42, '#9c7a58', 0.01);
const cols = ['#b07a6a', '#d9cbb0', '#7d8f9c', '#c9a76a', '#9aa28a'];
for (let i = 0; i < 10; i++) {
  g.fillStyle = cols[(i * 3) % 5];
  g.fillRect(-0.9 + i * 0.18, -0.52, 0.18, 0.2);
}
g.strokeStyle = INK;
g.lineWidth = 0.008;
g.strokeRect(-0.9, -0.52, 1.8, 0.2);
g.fillStyle = '#efe9dc';
g.beginPath();
g.ellipse(-0.7, -0.57, 0.2, 0.07, 0, 0, Math.PI * 2);
g.fill();
g.stroke();
