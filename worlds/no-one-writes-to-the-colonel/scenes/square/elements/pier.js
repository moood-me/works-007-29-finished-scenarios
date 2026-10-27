// The landing stage's deck from above (metres; 2.4 across, 8 out into the river, y toward the viewer): planks laid
// across, grey and soaked, gaps between them, the nails rusting, a coil of rope and a bollard at the far end.
g.fillStyle = '#5a5046';
g.fillRect(-1.2, -4, 2.4, 8);
for (let y = -4; y < 4; y += 0.25) {
  g.fillStyle = e.rnd() < 0.5 ? '#7a6e60' : '#857868';
  g.fillRect(-1.2, y + 0.015, 2.4, 0.22);
  g.fillStyle = 'rgba(52,44,36,0.35)';
  for (let k = 0; k < 3; k++) g.fillRect(-1.2 + e.rnd() * 2.2, y + 0.05 + e.rnd() * 0.12, 0.3 + e.rnd() * 0.6, 0.012);
  g.fillStyle = '#4e3a2c';
  g.fillRect(-1.1, y + 0.11, 0.025, 0.025);
  g.fillRect(1.08, y + 0.11, 0.025, 0.025);
}
// the bollard and the rope coiled by it
g.fillStyle = '#3e342c';
g.beginPath();
g.arc(0.85, -3.6, 0.14, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#b8a47e';
g.lineWidth = 0.035;
for (let r = 0.1; r < 0.3; r += 0.05) {
  g.beginPath();
  g.arc(0.3, -3.3, r, 0, Math.PI * 2);
  g.stroke();
}
