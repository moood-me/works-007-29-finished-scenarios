// On the counter: a brass candlestick with a fat tallow candle at the left (its flame is `counter_flame`), a big
// glazed jug, three clay mugs in a row, a round loaf on a board with a knife, a dish of honeycomb.
const L = e.lib;
// the candlestick
g.fillStyle = '#b08a3a';
g.beginPath();
g.ellipse(-0.6, -0.02, 0.08, 0.02, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(-0.615, -0.14, 0.03, 0.12);
g.fillRect(-0.65, -0.16, 0.1, 0.02);
g.fillStyle = '#efe4c8';
g.fillRect(-0.63, -0.33, 0.06, 0.17);
g.fillStyle = '#f7efdc';
g.fillRect(-0.63, -0.33, 0.018, 0.17);
g.strokeStyle = '#2a2018';
g.lineWidth = 0.004;
g.beginPath();
g.moveTo(-0.6, -0.33);
g.lineTo(-0.6, -0.345);
g.stroke();
// the jug: glazed green-brown, a white band
g.fillStyle = '#5e6a3a';
g.beginPath();
g.moveTo(0.48, 0);
g.quadraticCurveTo(0.4, -0.16, 0.47, -0.27);
g.lineTo(0.46, -0.32);
g.lineTo(0.58, -0.32);
g.lineTo(0.57, -0.27);
g.quadraticCurveTo(0.64, -0.16, 0.56, 0);
g.closePath();
g.fill();
g.fillStyle = '#efe4cc';
g.fillRect(0.43, -0.18, 0.18, 0.025);
g.strokeStyle = '#5e6a3a';
g.lineWidth = 0.02;
g.beginPath();
g.arc(0.62, -0.18, 0.06, -1.3, 1.3);
g.stroke();
// three mugs
for (const x of [-0.32, -0.2, -0.08]) {
  g.fillStyle = '#a5683e';
  g.fillRect(x - 0.04, -0.12, 0.08, 0.12);
  g.fillStyle = '#c4884e';
  g.fillRect(x - 0.04, -0.12, 0.08, 0.02);
  g.strokeStyle = '#a5683e';
  g.lineWidth = 0.014;
  g.beginPath();
  g.arc(x + 0.045, -0.06, 0.03, -1.4, 1.4);
  g.stroke();
}
// the loaf on its board, the knife
g.fillStyle = '#7a5232';
g.fillRect(0.05, -0.025, 0.3, 0.025);
g.fillStyle = '#c08040';
g.beginPath();
g.ellipse(0.2, -0.07, 0.12, 0.06, 0, Math.PI, 0);
g.fill();
L.dabs(g, 421, 0.1, -0.12, 0.2, 0.06, ['#d9a060', '#a86a30'], 8, 0.02, 0.5, 0.6);
g.fillStyle = '#9a9ea4';
g.fillRect(0.26, -0.035, 0.12, 0.01);
// the honeycomb on a dish
g.fillStyle = '#d8cfbd';
g.beginPath();
g.ellipse(0.75, -0.015, 0.09, 0.02, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#e2a53a';
g.fillRect(0.69, -0.07, 0.12, 0.05);
L.dabs(g, 422, 0.69, -0.07, 0.12, 0.05, ['#f2c25a', '#c4842a'], 10, 0.012, 1, 0.8);
