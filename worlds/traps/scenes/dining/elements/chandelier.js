// The brass chandelier over the table: a chain from the ceiling's rosette, a bowl with a drop under it, six curved
// arms with a candle on each, their flames f0…f5 trembling (animate), lit — two of them light the room.
g.strokeStyle = '#8a6a2e';
g.lineWidth = 0.02;
g.beginPath();
for (let y = -1.06; y < -0.42; y += 0.05) {
  g.moveTo(-0.012, y);
  g.lineTo(0.012, y + 0.04);
}
g.stroke();
// the arms: three each way, curling up from under the bowl to the candle cups
const arms = [-0.62, -0.42, -0.2, 0.2, 0.42, 0.62];
g.strokeStyle = '#a57f36';
g.lineWidth = 0.028;
g.lineCap = 'round';
g.beginPath();
for (const x of arms) {
  g.moveTo(0, -0.2);
  g.bezierCurveTo(x * 0.3, -0.06, x * 0.95, -0.02, x, -0.22);
}
g.stroke();
// the bowl and its drop
g.fillStyle = '#b48c3e';
g.beginPath();
g.moveTo(-0.17, -0.34);
g.quadraticCurveTo(-0.15, -0.14, 0, -0.12);
g.quadraticCurveTo(0.15, -0.14, 0.17, -0.34);
g.closePath();
g.fill();
g.fillStyle = '#d2ab55';
g.fillRect(-0.18, -0.36, 0.36, 0.035);
g.beginPath();
g.ellipse(0, -0.42, 0.05, 0.07, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#9c7832';
g.beginPath();
g.moveTo(-0.04, -0.12);
g.quadraticCurveTo(0, 0.02, 0, 0.05);
g.quadraticCurveTo(0, 0.02, 0.04, -0.12);
g.closePath();
g.fill();
// the cups and the candles in them
arms.forEach((x, k) => {
  g.fillStyle = '#c99c48';
  g.beginPath();
  g.ellipse(x, -0.22, 0.045, 0.014, 0, 0, Math.PI * 2);
  g.fill();
  g.fillRect(x - 0.02, -0.24, 0.04, 0.03);
  e.lib.candle(g, e, k, x, -0.24, 0.13, 0.09);
});
