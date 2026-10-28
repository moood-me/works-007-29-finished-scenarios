// Under the round top: its apron and four turned legs, a stretcher between them low down.
g.fillStyle = '#5d4532';
g.fillRect(-0.44, -0.75, 0.88, 0.09);
for (const x of [-0.38, 0.34]) {
  g.beginPath();
  g.moveTo(x, -0.66);
  g.lineTo(x + 0.05, -0.66);
  g.lineTo(x + 0.04, 0);
  g.lineTo(x + 0.01, 0);
  g.closePath();
  g.fill();
}
g.fillStyle = '#4e3a2a';
for (const x of [-0.22, 0.18]) g.fillRect(x, -0.66, 0.035, 0.66);
g.fillRect(-0.36, -0.18, 0.74, 0.025);
