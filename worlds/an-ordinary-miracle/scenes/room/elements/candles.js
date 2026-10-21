// A brass candlestick on the table with two branches and two tallow candles, wax run down them (their flames are
// `flames`).
g.fillStyle = '#b08a3a';
g.beginPath();
g.ellipse(0, -0.02, 0.1, 0.025, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(-0.015, -0.24, 0.03, 0.22);
g.strokeStyle = '#b08a3a';
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(-0.1, -0.3);
g.quadraticCurveTo(-0.1, -0.2, 0, -0.2);
g.quadraticCurveTo(0.1, -0.2, 0.1, -0.3);
g.stroke();
g.fillStyle = '#d4b060';
g.fillRect(-0.005, -0.24, 0.008, 0.22);
for (const x of [-0.1, 0.1]) {
  g.fillStyle = '#b08a3a';
  g.fillRect(x - 0.035, -0.31, 0.07, 0.015);
  g.fillStyle = '#efe4c8';
  g.fillRect(x - 0.02, -0.46, 0.04, 0.15);
  g.fillStyle = '#f7efdc';
  g.fillRect(x - 0.02, -0.46, 0.012, 0.15);
  g.fillStyle = '#e6d8b8';
  g.beginPath();
  g.ellipse(x + 0.014, -0.42, 0.008, 0.03, 0, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = '#2a2018';
  g.lineWidth = 0.004;
  g.beginPath();
  g.moveTo(x, -0.46);
  g.lineTo(x, -0.475);
  g.stroke();
}
