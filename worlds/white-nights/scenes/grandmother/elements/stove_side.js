// The stove's right side, from its front (x −0.225) back to the wall (x 0.225): the same white tiles
g.fillStyle = '#e9e3d8';
g.fillRect(-0.225, -2.35, 0.45, 2.2);
g.beginPath();
for (let y = -2.35; y <= -0.15; y += 0.2) {
  g.moveTo(-0.225, y);
  g.lineTo(0.225, y);
}
g.moveTo(0, -2.35);
g.lineTo(0, -0.15);
g.strokeStyle = 'rgba(120,130,150,0.55)';
g.lineWidth = 0.006;
g.stroke();
e.lib.box(g, -0.225, -2.5, 0.45, 0.15, '#e6dfd2', 0.01);
e.lib.box(g, -0.225, -0.15, 0.45, 0.15, '#cfc6b6', 0.01);
