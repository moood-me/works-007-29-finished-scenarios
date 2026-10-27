// The washstand by the door: a walnut stand with a grey marble top, on it the white basin with the jug standing in it,
// a folded towel, and a brass chamberstick with its candle burning (its flame f0, trembling in animate, lit). Traps's
// case of samples leans against its side.
const lib = e.lib;
g.fillStyle = '#4a3226';
g.fillRect(-0.36, -0.78, 0.72, 0.7);
g.fillRect(-0.36, -0.08, 0.06, 0.08);
g.fillRect(0.3, -0.08, 0.06, 0.08);
g.strokeStyle = '#3a271d';
g.lineWidth = 0.02;
g.strokeRect(-0.3, -0.68, 0.28, 0.5);
g.strokeRect(0.02, -0.68, 0.28, 0.5);
g.fillStyle = '#c9a050';
for (const x of [-0.06, 0.06]) {
  g.beginPath();
  g.arc(x, -0.43, 0.015, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#b8b6b0';
g.fillRect(-0.4, -0.82, 0.8, 0.04);
// the basin and the jug
g.fillStyle = '#efece6';
g.beginPath();
g.ellipse(-0.1, -0.86, 0.17, 0.05, 0, 0, Math.PI);
g.fill();
g.beginPath();
g.moveTo(-0.17, -0.86);
g.quadraticCurveTo(-0.2, -0.98, -0.15, -1.08);
g.lineTo(-0.11, -1.14);
g.lineTo(-0.05, -1.1);
g.quadraticCurveTo(0.0, -0.98, -0.03, -0.86);
g.closePath();
g.fill();
g.strokeStyle = '#4c6a8c';
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(-0.18, -0.95);
g.lineTo(-0.02, -0.95);
g.stroke();
// the towel
g.fillStyle = '#e4dccb';
g.fillRect(0.12, -0.86, 0.2, 0.04);
g.fillRect(0.3, -0.86, 0.06, 0.24);
// the chamberstick and its candle
g.fillStyle = '#b48c3e';
g.beginPath();
g.ellipse(0.2, -0.875, 0.06, 0.012, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(0.185, -0.91, 0.03, 0.035);
lib.candle(g, e, 0, 0.2, -0.905, 0.1, 0.07);
// the case of samples against the stand
g.fillStyle = '#6b4128';
g.beginPath();
g.roundRect(-0.62, -0.42, 0.3, 0.42, 0.02);
g.fill();
g.fillStyle = '#4a2c1a';
g.fillRect(-0.62, -0.32, 0.3, 0.025);
g.strokeStyle = '#4a2c1a';
g.lineWidth = 0.015;
g.beginPath();
g.arc(-0.47, -0.43, 0.05, Math.PI, 0);
g.stroke();
