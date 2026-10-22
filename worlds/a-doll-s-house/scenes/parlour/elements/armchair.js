// The armchair by the stove: a deep wing chair in dark red plush, buttoned back, a fringe along the seat's skirt, short
// turned legs; a knitted shawl over one arm.
g.fillStyle = '#5a1f1e';
g.beginPath();
g.moveTo(-0.36, -0.42);
g.lineTo(-0.36, -1.0);
g.quadraticCurveTo(-0.36, -1.12, -0.22, -1.12);
g.lineTo(0.22, -1.12);
g.quadraticCurveTo(0.36, -1.12, 0.36, -1.0);
g.lineTo(0.36, -0.42);
g.closePath();
g.fill();
// the buttoned back
g.fillStyle = '#4a1918';
for (const [x, y] of [[-0.15, -0.95], [0.15, -0.95], [0, -0.82], [-0.15, -0.7], [0.15, -0.7]]) {
  g.beginPath();
  g.arc(x, y, 0.014, 0, Math.PI * 2);
  g.fill();
}
// the wings and the arms
g.fillStyle = '#6b2523';
g.fillRect(-0.48, -0.9, 0.14, 0.5);
g.fillRect(0.34, -0.9, 0.14, 0.5);
for (const x of [-0.41, 0.41]) {
  g.beginPath();
  g.ellipse(x, -0.62, 0.08, 0.05, 0, 0, Math.PI * 2);
  g.fill();
}
// the seat, its skirt and fringe
g.fillStyle = '#742a27';
g.fillRect(-0.46, -0.44, 0.92, 0.12);
g.fillStyle = '#c49a52';
for (let x = -0.45; x < 0.46; x += 0.025) g.fillRect(x, -0.32, 0.01, 0.06);
// the legs
g.fillStyle = '#3a2118';
for (const x of [-0.42, 0.36]) g.fillRect(x, -0.26, 0.06, 0.26);
// the shawl over the left arm: soft grey-blue wool
g.fillStyle = '#7d8aa0';
g.beginPath();
g.moveTo(-0.5, -0.68);
g.quadraticCurveTo(-0.36, -0.72, -0.3, -0.6);
g.lineTo(-0.34, -0.3);
g.lineTo(-0.5, -0.34);
g.closePath();
g.fill();
