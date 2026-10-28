// The lamp on the bedside table (its anchor the table's top): a round steel foot, a jointed arm, a cream pleated shade
// tipped toward the bed, the bulb under it — the scene's light "lamp" (its glow and its light).
g.fillStyle = '#8e908c';
g.beginPath();
g.ellipse(0, -0.01, 0.07, 0.018, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#7d7f7c';
g.lineWidth = 0.012;
g.lineCap = 'round';
g.beginPath();
g.moveTo(0, -0.02);
g.lineTo(0.01, -0.25);
g.lineTo(0.05, -0.33);
g.stroke();
g.fillStyle = '#efe2c4';
g.beginPath();
g.moveTo(-0.01, -0.42);
g.lineTo(0.08, -0.43);
g.lineTo(0.13, -0.29);
g.lineTo(-0.04, -0.27);
g.closePath();
g.fill();
g.strokeStyle = 'rgba(190,170,130,0.5)';
g.lineWidth = 0.003;
for (let i = 1; i < 6; i++) {
  const u = i / 6;
  g.beginPath();
  g.moveTo(-0.01 + 0.09 * u, -0.42 - 0.01 * u);
  g.lineTo(-0.04 + 0.17 * u, -0.27 - 0.02 * u);
  g.stroke();
}
g.fillStyle = '#fff3d6';
g.beginPath();
g.ellipse(0.05, -0.28, 0.035, 0.014, -0.1, 0, Math.PI * 2);
g.fill();
e.light(0.05, -0.27, 0.15, '#ffdba6', 1.2, 'bulb');
