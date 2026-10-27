// A wall sconce (six of them, `copies`, on the walls at 2 m): a gilt back plate, three curved arms, three white
// candles in their cups (their flames are sconce_flames, at e.lib.sconceCandles).
const GILT = '#c9a75c';
g.fillStyle = GILT;
g.beginPath();
g.ellipse(0, 0.02, 0.05, 0.12, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = GILT;
g.lineWidth = 0.018;
for (const [x, y] of e.lib.sconceCandles) {
  g.beginPath();
  g.moveTo(0, 0.06);
  g.quadraticCurveTo(x, 0.08, x, y + 0.1);
  g.stroke();
  g.fillStyle = GILT;
  g.beginPath();
  g.ellipse(x, y + 0.1, 0.03, 0.01, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#f4efe2';
  g.fillRect(x - 0.01, y, 0.02, 0.1);
}
