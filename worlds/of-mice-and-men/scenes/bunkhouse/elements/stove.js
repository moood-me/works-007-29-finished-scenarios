// The black iron stove near the left wall (metres, its foot at the middle): a box stove on bowed legs, its door with
// the draft, the rail a dish towel hangs from, the enamel coffee pot on its top; the stovepipe straight up through the
// ceiling, 3 m, with its damper.
g.fillStyle = '#2a2827';
g.fillRect(-0.04, -3.0, 0.16, 2.2);
g.fillStyle = '#3a3836';
g.fillRect(-0.04, -2.2, 0.16, 0.03);
g.fillRect(-0.04, -1.45, 0.16, 0.025);
g.fillStyle = '#252322';
g.fillRect(-0.36, -0.86, 0.72, 0.6);
g.fillStyle = '#323030';
g.fillRect(-0.4, -0.9, 0.8, 0.07);
g.fillRect(-0.38, -0.3, 0.76, 0.05);
g.fillStyle = '#1d1c1b';
for (const x of [-0.33, 0.27]) {
  g.beginPath();
  g.moveTo(x, -0.26);
  g.quadraticCurveTo(x - 0.04, -0.1, x - 0.02, 0);
  g.lineTo(x + 0.06, 0);
  g.quadraticCurveTo(x + 0.04, -0.1, x + 0.06, -0.26);
  g.closePath();
  g.fill();
}
g.fillStyle = '#3b3937';
g.fillRect(-0.24, -0.72, 0.3, 0.32);
g.fillStyle = '#5a5552';
g.fillRect(-0.2, -0.5, 0.12, 0.04);
g.fillStyle = '#6a6460';
g.fillRect(-0.42, -0.66, 0.84, 0.02);
g.fillStyle = '#d9d0bb';
g.beginPath();
g.moveTo(0.18, -0.66);
g.lineTo(0.34, -0.66);
g.lineTo(0.36, -0.4);
g.lineTo(0.16, -0.42);
g.closePath();
g.fill();
// the coffee pot: blue speckled enamel
g.fillStyle = '#41577a';
g.beginPath();
g.moveTo(-0.24, -0.9);
g.lineTo(-0.06, -0.9);
g.lineTo(-0.09, -1.12);
g.lineTo(-0.21, -1.12);
g.closePath();
g.fill();
g.fillRect(-0.18, -1.17, 0.06, 0.05);
g.strokeStyle = '#41577a';
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(-0.24, -0.98);
g.lineTo(-0.31, -1.08);
g.stroke();
