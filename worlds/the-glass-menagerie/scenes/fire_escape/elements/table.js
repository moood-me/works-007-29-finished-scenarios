// The table laid for the gentleman caller, seen past the sill: the best white cloth falling to the floor, two
// candlesticks (not yet lit), the good plates, a little bowl of paper jonquils.
g.fillStyle = '#efe9dc';
g.beginPath();
g.moveTo(-0.85, -0.8);
g.lineTo(0.85, -0.8);
g.lineTo(0.92, -0.04);
g.lineTo(-0.92, -0.04);
g.closePath();
g.fill();
g.fillStyle = 'rgba(160,150,135,0.35)';
for (const x of [-0.62, -0.22, 0.24, 0.64]) g.fillRect(x, -0.76, 0.02, 0.7);
g.fillStyle = '#d9cfbe';
g.fillRect(-0.85, -0.8, 1.7, 0.03);
// plates, rims up
g.fillStyle = '#f6f3ec';
for (const x of [-0.5, 0.5]) {
  g.beginPath();
  g.ellipse(x, -0.81, 0.13, 0.02, 0, 0, Math.PI * 2);
  g.fill();
}
// the candlesticks: brass, white candles
for (const x of [-0.22, 0.22]) {
  g.fillStyle = '#b08a46';
  g.fillRect(x - 0.035, -0.82, 0.07, 0.02);
  g.fillRect(x - 0.012, -0.98, 0.024, 0.16);
  g.fillRect(x - 0.025, -0.99, 0.05, 0.015);
  g.fillStyle = '#f2ecdc';
  g.fillRect(x - 0.01, -1.19, 0.02, 0.2);
}
// the jonquils
g.fillStyle = '#7c8fa0';
g.fillRect(-0.035, -0.92, 0.07, 0.11);
for (let i = 0; i < 5; i++) {
  const a = -0.5 + i * 0.25;
  g.strokeStyle = '#6b7b44';
  g.lineWidth = 0.008;
  g.beginPath();
  g.moveTo(0, -0.9);
  g.lineTo(Math.sin(a) * 0.1, -0.9 - Math.cos(a) * 0.13);
  g.stroke();
  g.fillStyle = '#e8c74a';
  g.beginPath();
  g.arc(Math.sin(a) * 0.1, -0.9 - Math.cos(a) * 0.13, 0.02, 0, Math.PI * 2);
  g.fill();
}
