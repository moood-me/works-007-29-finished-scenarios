// The cupboards under the counter (their front, metres from the foot at its middle): mint-painted doors with round
// wooden knobs, a toe-kick in shadow, the counter's steel edge on top; under the sink, a curtain instead of doors.
g.fillStyle = '#9fc4b2';
g.fillRect(-1.25, -0.88, 2.5, 0.8);
g.fillStyle = '#5d6b64';
g.fillRect(-1.25, -0.08, 2.5, 0.09);
g.fillStyle = '#c2c3c0';
g.fillRect(-1.27, -0.92, 2.54, 0.05);
const doors = [[-1.2, -0.66], [-0.62, -0.06]];
for (const [x0, x1] of doors) {
  g.fillStyle = '#b1d2c1';
  g.fillRect(x0, -0.82, x1 - x0, 0.7);
  g.strokeStyle = '#8bb19e';
  g.lineWidth = 0.012;
  g.strokeRect(x0 + 0.04, -0.78, x1 - x0 - 0.08, 0.62);
  g.fillStyle = '#9a7552';
  g.beginPath();
  g.arc(x1 - 0.07, -0.68, 0.018, 0, Math.PI * 2);
  g.fill();
}
// the curtain under the sink: a red check, gathered
for (let x = 0.0; x < 0.58; x += 0.04) {
  g.fillStyle = Math.round(x / 0.04) % 2 ? '#d2675a' : '#f1dfd6';
  g.fillRect(x, -0.84, 0.04, 0.74);
}
g.fillStyle = 'rgba(90,60,50,0.12)';
for (let x = 0.0; x < 0.58; x += 0.08) g.fillRect(x, -0.84, 0.012, 0.74);
// the right-hand cupboard to the stove
g.fillStyle = '#b1d2c1';
g.fillRect(0.64, -0.82, 0.56, 0.7);
g.strokeStyle = '#8bb19e';
g.strokeRect(0.68, -0.78, 0.48, 0.62);
g.fillStyle = '#9a7552';
g.beginPath();
g.arc(0.72, -0.68, 0.018, 0, Math.PI * 2);
g.fill();
