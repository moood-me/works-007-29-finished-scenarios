// A terracotta pot of red geraniums at the gravel's edge.
g.fillStyle = '#b4603e';
g.beginPath();
g.moveTo(-0.2, -0.38);
g.lineTo(0.2, -0.38);
g.lineTo(0.15, 0);
g.lineTo(-0.15, 0);
g.closePath();
g.fill();
g.fillStyle = '#c87252';
g.fillRect(-0.23, -0.42, 0.46, 0.07);
for (let i = 0; i < 26; i++) {
  g.fillStyle = e.rnd() < 0.5 ? '#4d6e36' : '#3e5b2d';
  g.beginPath();
  g.arc((e.rnd() - 0.5) * 0.5, -0.45 - e.rnd() * 0.2, 0.07, 0, Math.PI * 2);
  g.fill();
}
for (let i = 0; i < 6; i++) {
  const x = (e.rnd() - 0.5) * 0.4;
  const y = -0.62 - e.rnd() * 0.12;
  g.fillStyle = '#d1302d';
  for (let k = 0; k < 6; k++) {
    g.beginPath();
    g.arc(x + (e.rnd() - 0.5) * 0.07, y + (e.rnd() - 0.5) * 0.06, 0.025, 0, Math.PI * 2);
    g.fill();
  }
}
