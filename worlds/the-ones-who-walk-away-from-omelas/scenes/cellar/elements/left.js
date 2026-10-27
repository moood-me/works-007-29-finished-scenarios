// The storeroom's left wall (x 0 at the viewer … 5.2 m at the back): rough stone; an empty plank shelf on two
// brackets, a cracked pot and a dusty jug left on it
e.lib.stones(g, [[0, -2.36, 5.22, 0.02]], 21);
g.fillStyle = '#4a3a2c';
for (const y of [-1.42, -0.86]) {
  g.fillRect(1.3, y, 1.7, 0.05);
  g.fillStyle = '#5b4836';
  g.fillRect(1.3, y, 1.7, 0.015);
  g.fillStyle = '#4a3a2c';
}
g.fillStyle = '#3a2e24';
for (const x of [1.45, 2.85]) {
  g.beginPath();
  g.moveTo(x - 0.03, -1.37);
  g.lineTo(x + 0.03, -1.37);
  g.lineTo(x + 0.03, -0.9);
  g.lineTo(x - 0.03, -1.1);
  g.closePath();
  g.fill();
}
// the pot, cracked, and the jug
g.fillStyle = '#7d5a40';
g.beginPath();
g.ellipse(1.75, -1.55, 0.12, 0.13, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(1.66, -1.7, 0.18, 0.04);
g.strokeStyle = '#4a3527';
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(1.7, -1.66);
g.lineTo(1.74, -1.56);
g.lineTo(1.71, -1.47);
g.stroke();
g.fillStyle = '#8a7a62';
g.beginPath();
g.moveTo(2.5, -0.87);
g.quadraticCurveTo(2.38, -1.0, 2.46, -1.12);
g.lineTo(2.46, -1.2);
g.lineTo(2.54, -1.2);
g.lineTo(2.54, -1.12);
g.quadraticCurveTo(2.62, -1.0, 2.5, -0.87);
g.fill();
