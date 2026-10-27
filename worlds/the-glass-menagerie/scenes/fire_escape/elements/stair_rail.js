// The stair's outer stringer and its handrail, side on (metres from a point 2.2 m under the landing, at the
// landing's left edge; the stair drops 0.22 for each 0.24 to the left): a channel of black iron under the treads'
// nosings, the handrail running down from the top of the landing's rail, a baluster at every other tread.
const top = -2.0;
const slope = 0.22 / 0.24;
const y = x => top - x * slope; // the nosings' line at x (x ≤ 0)
const end = -top / slope; // where it meets the painting's foot
g.fillStyle = '#1f1d21';
g.beginPath();
g.moveTo(0.06, y(0.06));
g.lineTo(-end, 0);
g.lineTo(-end + 0.2, 0);
g.lineTo(0.06, y(0.06) + 0.2);
g.closePath();
g.fill();
g.strokeStyle = '#1f1d21';
g.lineWidth = 0.045;
g.beginPath();
g.moveTo(0.03, -3.12);
g.lineTo(-end - 0.4, -3.12 + (end + 0.4) * slope);
g.stroke();
g.lineWidth = 0.02;
for (let i = 0; i < 9; i += 2) {
  const x = -0.13 - 0.24 * i;
  g.beginPath();
  g.moveTo(x, y(x));
  g.lineTo(x, -3.12 - x * slope);
  g.stroke();
}
// the newel at the head of the stair
g.fillRect(0.0, -3.14, 0.05, 3.14 + y(0));
