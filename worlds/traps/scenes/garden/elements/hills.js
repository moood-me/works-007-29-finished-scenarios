// The far side of the valley: two ridges of wooded hills, the village below the near one — white houses with red
// roofs and the church with its tall spire (whose clock strikes midnight and three).
const ridge = (y0, amp, seed, color) => {
  g.fillStyle = color;
  g.beginPath();
  g.moveTo(-800, 0);
  for (let x = -800; x <= 800; x += 10) {
    const y = y0 - amp * (0.55 + 0.45 * Math.sin(x * 0.011 + seed) * Math.cos(x * 0.004 + seed * 2)) - amp * 0.15 * Math.sin(x * 0.05 + seed);
    g.lineTo(x, y);
  }
  g.lineTo(800, 0);
  g.closePath();
  g.fill();
};
ridge(-40, 34, 1.3, '#6f8397');
ridge(-22, 26, 4.1, '#5f7a5c');
// the near slope: fields in strips
g.fillStyle = '#7d9256';
g.fillRect(-800, -16, 1600, 16);
for (let i = 0; i < 46; i++) {
  g.fillStyle = i % 3 === 0 ? '#a7a865' : i % 3 === 1 ? '#86995a' : '#6f8a4d';
  const x = -800 + i * 34 + e.rnd() * 10;
  g.beginPath();
  g.moveTo(x, -16);
  g.lineTo(x + 30, -16);
  g.lineTo(x + 46, 0);
  g.lineTo(x + 12, 0);
  g.closePath();
  g.fill();
}
// woods along the slope
g.fillStyle = '#4c6844';
for (let i = 0; i < 120; i++) {
  const x = -780 + e.rnd() * 1560;
  const y = -14 - e.rnd() * 10;
  g.beginPath();
  g.ellipse(x, y, 4 + e.rnd() * 6, 3 + e.rnd() * 3, 0, 0, Math.PI * 2);
  g.fill();
}
// the village: houses about the church
for (let i = 0; i < 22; i++) {
  const x = -10 + (e.rnd() - 0.5) * 90 - 60;
  const y = -4 - e.rnd() * 8;
  const w = 6 + e.rnd() * 5;
  const h = 4 + e.rnd() * 3;
  g.fillStyle = '#ece4d4';
  g.fillRect(x - w / 2, y - h, w, h);
  g.fillStyle = '#b4583d';
  g.beginPath();
  g.moveTo(x - w / 2 - 1, y - h);
  g.lineTo(x, y - h - 3.5);
  g.lineTo(x + w / 2 + 1, y - h);
  g.closePath();
  g.fill();
}
// the church: nave, tower, spire
g.fillStyle = '#efe7d6';
g.fillRect(-56, -22, 20, 12);
g.fillRect(-63, -40, 8, 30);
g.fillStyle = '#9b5038';
g.beginPath();
g.moveTo(-57, -22);
g.lineTo(-46, -29);
g.lineTo(-35, -22);
g.closePath();
g.fill();
g.fillStyle = '#4f5a63';
g.beginPath();
g.moveTo(-64, -40);
g.lineTo(-59, -54);
g.lineTo(-54, -40);
g.closePath();
g.fill();
g.fillStyle = '#3c3a38';
g.beginPath();
g.arc(-59, -35, 1.6, 0, Math.PI * 2);
g.fill();
