// The kitchen's right wall, from its foot (x along it toward the viewer: x = 2.9 − distance, the back wall at
// x −2.1): the beige wall telephone with its curly cord, and a calendar, its picture a rock face in the sun.
g.fillStyle = '#e6dcc8';
g.fillRect(-2.12, -2.57, 4.24, 2.59);
g.fillStyle = '#d6cab2';
g.fillRect(-2.12, -0.1, 4.24, 0.12);
// the telephone
g.fillStyle = '#d8ccb2';
g.beginPath();
g.roundRect(-0.12, -1.7, 0.2, 0.28, 0.03);
g.fill();
g.fillStyle = '#c9bc9e';
g.beginPath();
g.roundRect(-0.15, -1.74, 0.07, 0.34, 0.03);
g.fill();
g.strokeStyle = '#b8aa8c';
g.lineWidth = 0.008;
g.beginPath();
for (let k = 0; k <= 40; k++) {
  const y = -1.4 + k * 0.012, x = -0.12 + Math.sin(k * 1.6) * 0.012 + k * 0.001;
  if (k) g.lineTo(x, y);
  else g.moveTo(x, y);
}
g.stroke();
for (let r = 0; r < 3; r++) {
  for (let c = 0; c < 3; c++) {
    g.fillStyle = '#efe7d6';
    g.fillRect(-0.03 + c * 0.04, -1.62 + r * 0.05, 0.025, 0.025);
  }
}
// the calendar
g.fillStyle = '#f6f2ea';
g.fillRect(0.7, -1.95, 0.42, 0.6);
g.fillStyle = '#c9a070';
g.fillRect(0.73, -1.92, 0.36, 0.24);
g.fillStyle = '#9a7656';
g.beginPath();
g.moveTo(0.73, -1.68);
g.lineTo(0.8, -1.86);
g.lineTo(0.9, -1.8);
g.lineTo(0.98, -1.92);
g.lineTo(1.09, -1.84);
g.lineTo(1.09, -1.68);
g.closePath();
g.fill();
g.fillStyle = '#b8c9d6';
g.fillRect(0.73, -1.92, 0.36, 0.04);
g.strokeStyle = 'rgba(80,70,60,0.4)';
g.lineWidth = 0.004;
for (let r = 0; r < 5; r++) {
  for (let c = 0; c < 7; c++) g.strokeRect(0.74 + c * 0.05, -1.64 + r * 0.052, 0.045, 0.045);
}
g.fillStyle = '#5c544a';
g.beginPath();
g.arc(0.91, -1.96, 0.01, 0, Math.PI * 2);
g.fill();
