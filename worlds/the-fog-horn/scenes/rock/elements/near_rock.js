// The big rock at the left edge of the near stone, holding the corner of the picture: slabs of grey stone, a pale
// dry top with lichen, wet and dark toward its foot.
// (drawn smaller than the shape below is written: its top stays under the horizon)
g.scale(0.68, 0.68);
g.fillStyle = '#5a5d61';
g.beginPath();
g.moveTo(-1.9, 0.3);
g.lineTo(-1.85, -0.9);
g.lineTo(-1.5, -1.7);
g.lineTo(-0.7, -2.05);
g.lineTo(0.3, -1.95);
g.lineTo(1.1, -1.5);
g.lineTo(1.6, -0.8);
g.lineTo(1.85, 0.3);
g.closePath();
g.fill();
g.fillStyle = '#76797b';
g.beginPath();
g.moveTo(-1.8, -1.0);
g.lineTo(-1.45, -1.65);
g.lineTo(-0.7, -1.98);
g.lineTo(0.3, -1.88);
g.lineTo(1.05, -1.45);
g.lineTo(0.4, -1.4);
g.lineTo(-0.5, -1.25);
g.closePath();
g.fill();
g.fillStyle = '#4b4f53';
g.beginPath();
g.moveTo(-1.88, -0.35);
g.lineTo(1.7, -0.45);
g.lineTo(1.85, 0.3);
g.lineTo(-1.9, 0.3);
g.closePath();
g.fill();
g.strokeStyle = '#46494d';
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(-0.9, -1.4);
g.lineTo(-0.7, -0.9);
g.lineTo(-0.9, -0.4);
g.moveTo(0.5, -1.35);
g.lineTo(0.75, -0.7);
g.moveTo(-1.5, -0.95);
g.lineTo(1.3, -1.05);
g.stroke();
for (let i = 0; i < 25; i++) {
  g.fillStyle = e.rnd() < 0.6 ? '#87877a' : '#8f8676';
  g.beginPath();
  g.ellipse(-1.4 + e.rnd() * 2.6, -1.85 + e.rnd() * 0.6, 0.02 + e.rnd() * 0.03, 0.015 + e.rnd() * 0.02, 0, 0, Math.PI * 2);
  g.fill();
}
