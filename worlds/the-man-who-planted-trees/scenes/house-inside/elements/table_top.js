// The table top from above (1.7 m by 0.8 m, y toward the viewer): thick old planks scrubbed pale, their joints dark
g.fillStyle = '#8a6a4a';
g.fillRect(-0.85, -0.4, 1.7, 0.8);
const tones = ['#a8865e', '#a07e58', '#ae8c64', '#9c7a54'];
for (let i = 0; i < 4; i++) {
  g.fillStyle = tones[i];
  g.fillRect(-0.85, -0.4 + i * 0.2 + 0.006, 1.7, 0.188);
}
g.strokeStyle = 'rgba(90, 64, 40, 0.35)';
g.lineWidth = 0.004;
for (let i = 0; i < 30; i++) {
  const y = -0.39 + e.rnd() * 0.78, x = -0.84 + e.rnd() * 1.2;
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x + 0.2 + e.rnd() * 0.3, y + (e.rnd() - 0.5) * 0.01);
  g.stroke();
}
