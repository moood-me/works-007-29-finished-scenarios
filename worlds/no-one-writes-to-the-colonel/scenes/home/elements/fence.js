// The fence at the back of the yard (metres from its foot): uneven stakes of cut wood and cane wired together, grey
// with rain, leaning this way and that, a creeper over part of it.
for (let x = -7.0; x < 7.0; x += 0.09 + e.rnd() * 0.05) {
  const h = 1.45 + e.rnd() * 0.35;
  const lean = (e.rnd() - 0.5) * 0.08;
  g.fillStyle = e.rnd() < 0.5 ? '#6b6258' : '#7d7266';
  g.beginPath();
  g.moveTo(x - 0.035, 0.02);
  g.lineTo(x - 0.03 + lean, -h);
  g.lineTo(x + 0.03 + lean, -h - 0.04);
  g.lineTo(x + 0.035, 0.02);
  g.closePath();
  g.fill();
}
g.strokeStyle = '#4a4440';
g.lineWidth = 0.012;
for (const y of [-0.4, -1.2]) {
  g.beginPath();
  g.moveTo(-7, y);
  g.lineTo(7, y + 0.03);
  g.stroke();
}
for (let i = 0; i < 160; i++) {
  const x = -1.0 + e.rnd() * 4.0;
  const y = -1.7 + e.rnd() * 1.2 + Math.abs(x - 1) * 0.2;
  g.fillStyle = e.rnd() < 0.5 ? '#3e5a2c' : '#557236';
  g.beginPath();
  g.ellipse(x, y, 0.07, 0.045, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
