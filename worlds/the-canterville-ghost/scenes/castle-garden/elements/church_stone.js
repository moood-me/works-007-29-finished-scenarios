// An old headstone (0.95 m): a grey slab with a rounded top, leaning a little, weathered, yellow lichen on it, a worn
// inscription — and the grass at its foot.
g.fillStyle = '#9a968c';
g.beginPath();
g.moveTo(-0.32, 0.05);
g.lineTo(-0.32, -0.7);
g.quadraticCurveTo(-0.32, -0.95, 0, -0.97);
g.quadraticCurveTo(0.32, -0.95, 0.32, -0.7);
g.lineTo(0.32, 0.05);
g.closePath();
g.fill();
g.fillStyle = '#7e7a70';
g.fillRect(0.24, -0.72, 0.08, 0.77);
g.strokeStyle = '#6c685f';
g.lineWidth = 0.02;
for (let y = -0.7; y < -0.3; y += 0.09) {
  g.beginPath();
  g.moveTo(-0.18, y);
  g.lineTo(0.14 - e.rnd() * 0.08, y);
  g.stroke();
}
for (let i = 0; i < 14; i++) {
  g.fillStyle = e.rnd() < 0.5 ? '#b8ac62' : '#8c9a62';
  g.beginPath();
  g.arc((e.rnd() - 0.5) * 0.56, -0.9 + e.rnd() * 0.85, 0.02 + e.rnd() * 0.04, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#4e6638';
for (let i = 0; i < 18; i++) {
  g.beginPath();
  g.ellipse((e.rnd() - 0.5) * 0.8, 0, 0.03, 0.08 + e.rnd() * 0.08, (e.rnd() - 0.5) * 0.6, 0, Math.PI * 2);
  g.fill();
}
