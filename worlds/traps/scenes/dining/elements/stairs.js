// The foot of the staircase in the hall: the turned newel post with its ball, the first steps of dark oak rising to
// the right with their white risers, the banister going up with them.
g.fillStyle = '#4a3326';
for (let k = 0; k < 9; k++) {
  const x = -0.25 + k * 0.28;
  const y = -k * 0.18;
  g.fillRect(x, y - 0.18, 2.6 - k * 0.28, 0.04);
}
g.fillStyle = '#ede5d4';
for (let k = 0; k < 9; k++) {
  const x = -0.25 + k * 0.28;
  const y = -k * 0.18;
  g.fillRect(x, y - 0.14, 2.6 - k * 0.28, 0.14);
}
// the string under the steps
g.fillStyle = '#3e2a20';
g.beginPath();
g.moveTo(-0.25, 0);
g.lineTo(2.3, -1.62);
g.lineTo(2.3, -1.4);
g.lineTo(0.0, 0);
g.closePath();
g.fill();
// the balusters and the rail
g.strokeStyle = '#3e2a20';
g.lineWidth = 0.025;
g.beginPath();
for (let k = 0; k < 9; k++) {
  const x = -0.1 + k * 0.28;
  g.moveTo(x, -k * 0.18 - 0.18);
  g.lineTo(x, -k * 0.18 - 1.05);
}
g.stroke();
g.lineWidth = 0.06;
g.beginPath();
g.moveTo(-0.15, -1.0);
g.lineTo(2.3, -2.62);
g.stroke();
// the newel post
g.fillStyle = '#3a271d';
g.fillRect(-0.24, -1.1, 0.12, 1.1);
g.beginPath();
g.arc(-0.18, -1.17, 0.08, 0, Math.PI * 2);
g.fill();
