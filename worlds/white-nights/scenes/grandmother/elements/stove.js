// The tiled stove in the back left corner, its front (x −0.425…0.425, 2.5 m tall): white glazed tiles with a blue
// flower in each, a moulded cornice at the top, a plinth, a small cast-iron door low down
const INK = e.lib.INK;
g.fillStyle = '#efeae0';
g.fillRect(-0.425, -2.35, 0.85, 2.2);
g.beginPath();
for (let y = -2.35; y <= -0.15; y += 0.2) {
  g.moveTo(-0.425, y);
  g.lineTo(0.425, y);
}
for (let x = -0.425; x <= 0.43; x += 0.2125) {
  g.moveTo(x, -2.35);
  g.lineTo(x, -0.15);
}
g.strokeStyle = 'rgba(120,130,150,0.55)';
g.lineWidth = 0.006;
g.stroke();
g.beginPath();
for (let y = -2.25; y < -0.15; y += 0.2) {
  for (let x = -0.32; x < 0.43; x += 0.2125) {
    g.moveTo(x + 0.025, y);
    g.arc(x, y, 0.025, 0, Math.PI * 2);
  }
}
g.fillStyle = 'rgba(96,118,168,0.55)';
g.fill();
e.lib.box(g, -0.47, -2.5, 0.94, 0.15, '#e6dfd2', 0.01);
e.lib.box(g, -0.45, -0.15, 0.9, 0.15, '#cfc6b6', 0.01);
e.lib.box(g, -0.12, -0.62, 0.24, 0.2, '#3f3d3b', 0.008);
g.strokeStyle = INK;
g.lineWidth = 0.012;
g.strokeRect(-0.425, -2.35, 0.85, 2.2);
