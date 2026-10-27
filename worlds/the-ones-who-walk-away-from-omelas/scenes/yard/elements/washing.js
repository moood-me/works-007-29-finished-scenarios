// The washing on its line across the yard's right corner (x −1.6 at its pole … 1.6 at the wall): a sheet, a boy's blue
// shirt and a striped towel pegged out in the morning, each stirring in the air on its own (layers `sheet`, `shirt`,
// `towel`)
g.fillStyle = '#8a6a48';
g.fillRect(-1.64, -2.3, 0.07, 2.3);
g.strokeStyle = '#d9d2c4';
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(-1.6, -2.2);
g.quadraticCurveTo(0, -2.08, 1.6, -2.2);
g.stroke();
const line = x => -2.2 + 0.12 * (1 - (x / 1.6) * (x / 1.6));
e.layer('sheet', { pivot: [-0.75, line(-0.75)], wind: { strength: 0.12, gust: 0.6 }, box: [-1.35, -2.2, -0.15, -0.85] }, g => {
  g.fillStyle = '#f4f0e6';
  g.beginPath();
  g.moveTo(-1.3, line(-1.3));
  g.lineTo(-0.2, line(-0.2));
  g.lineTo(-0.22, -0.95);
  g.quadraticCurveTo(-0.75, -0.88, -1.28, -0.97);
  g.closePath();
  g.fill();
  g.fillStyle = 'rgba(205, 198, 185, 0.6)';
  for (const x of [-1.0, -0.6]) g.fillRect(x, line(x), 0.04, 1.1);
});
e.layer('shirt', { pivot: [0.32, line(0.32)], wind: { strength: 0.16, gust: 0.6 }, box: [-0.05, -2.2, 0.7, -1.4] }, g => {
  const t = line(0.32);
  g.fillStyle = '#b4cde0';
  g.beginPath();
  g.moveTo(0.0, t + 0.02);
  g.lineTo(0.64, t + 0.02);
  g.lineTo(0.6, t + 0.22);
  g.lineTo(0.5, t + 0.2);
  g.lineTo(0.5, t + 0.62);
  g.lineTo(0.14, t + 0.62);
  g.lineTo(0.14, t + 0.2);
  g.lineTo(0.04, t + 0.22);
  g.closePath();
  g.fill();
});
e.layer('towel', { pivot: [1.1, line(1.1)], wind: { strength: 0.14, gust: 0.6 }, box: [0.8, -2.2, 1.4, -1.45] }, g => {
  const t = line(1.1);
  g.fillStyle = '#efe6d4';
  g.fillRect(0.86, t, 0.48, 0.62);
  g.fillStyle = '#c86a4c';
  for (const y of [0.1, 0.2, 0.46, 0.56]) g.fillRect(0.86, t + y, 0.48, 0.04);
});
g.fillStyle = '#9a7a58';
for (const x of [-1.28, -0.22, 0.04, 0.6, 0.9, 1.3]) g.fillRect(x - 0.012, line(x) - 0.03, 0.024, 0.07);
