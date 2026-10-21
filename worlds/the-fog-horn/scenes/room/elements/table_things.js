// On the table: the brass foot of the oil lamp (its glass is table_lamp, glowing) and the two enamel mugs McDunn set
// out — his on the left (`cup`), the second one on the right (`second_cup`).
// the lamp's foot and its oil font
g.fillStyle = '#a88a4e';
g.beginPath();
g.moveTo(-0.08, 0);
g.lineTo(0.08, 0);
g.lineTo(0.035, -0.06);
g.lineTo(-0.035, -0.06);
g.closePath();
g.fill();
g.fillStyle = '#9a7e45';
g.beginPath();
g.ellipse(0, -0.09, 0.065, 0.04, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#7d6638';
g.fillRect(-0.03, -0.135, 0.06, 0.02);
// a mug: white enamel, a blue rim, its handle on the side `side`
const mug = (x, side) => {
  g.strokeStyle = '#d9d6cf';
  g.lineWidth = 0.012;
  g.beginPath();
  g.arc(x + side * 0.05, -0.05, 0.025, -Math.PI / 2, Math.PI / 2, side < 0);
  g.stroke();
  g.fillStyle = '#e4e1da';
  g.fillRect(x - 0.045, -0.095, 0.09, 0.095);
  g.fillStyle = '#3c516b';
  g.fillRect(x - 0.045, -0.095, 0.09, 0.01);
  g.fillStyle = 'rgba(160,156,148,0.5)';
  g.fillRect(x + 0.015, -0.085, 0.025, 0.085);
};
mug(-0.3, -1);
mug(0.27, 1);
e.at(-0.3, -0.05, 'cup');
e.at(0.27, -0.05, 'second_cup');
