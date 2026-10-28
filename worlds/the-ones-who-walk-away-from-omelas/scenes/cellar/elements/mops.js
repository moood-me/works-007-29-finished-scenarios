// In the far right corner, what the child is afraid of: two mops leaning against the wall, their heads stiff and
// clotted on the floor, and a wooden bucket with iron hoops beside them (the point — the mops' heads: what the child
// looks at)
g.lineCap = 'round';
for (const [x0, x1, c] of [[0.05, 0.42, '#6e5a44'], [0.25, 0.48, '#5e4c3a']]) {
  g.strokeStyle = c;
  g.lineWidth = 0.035;
  g.beginPath();
  g.moveTo(x0, -0.22);
  g.lineTo(x1, -1.5);
  g.stroke();
}
for (const [x, c] of [[0.02, '#6b6355'], [0.24, '#5f574b']]) {
  g.fillStyle = c;
  g.beginPath();
  g.moveTo(x - 0.16, 0);
  g.quadraticCurveTo(x - 0.2, -0.16, x - 0.04, -0.26);
  g.lineTo(x + 0.06, -0.26);
  g.quadraticCurveTo(x + 0.2, -0.14, x + 0.18, 0);
  g.closePath();
  g.fill();
  g.strokeStyle = '#4a4339';
  g.lineWidth = 0.012;
  for (let i = 0; i < 6; i++) {
    const u = -0.14 + i * 0.06;
    g.beginPath();
    g.moveTo(x + u * 0.4, -0.22);
    g.lineTo(x + u, -0.01);
    g.stroke();
  }
}
// the bucket
g.fillStyle = '#6a5440';
g.beginPath();
g.moveTo(-0.5, -0.42);
g.lineTo(-0.16, -0.42);
g.lineTo(-0.2, 0);
g.lineTo(-0.46, 0);
g.closePath();
g.fill();
g.fillStyle = '#3a3430';
for (const y of [-0.36, -0.08]) g.fillRect(-0.5 + (0.42 + y) * 0.1, y, 0.34 - (0.42 + y) * 0.2, 0.03);
g.strokeStyle = '#3a3430';
g.lineWidth = 0.01;
g.beginPath();
g.arc(-0.33, -0.42, 0.17, Math.PI, 0);
g.stroke();
e.at(0.12, -0.2);
