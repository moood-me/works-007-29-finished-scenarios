// The bench under the window and on it what the Princess took off: the coachman's heavy dark-grey cloak thrown over
// it, half down to the floor, snow still melting on its shoulders, and his broad black felt hat on top.
const L = e.lib;
// the bench: a thick plank on two stout legs
g.fillStyle = '#7a5232';
g.fillRect(-0.7, -0.47, 1.4, 0.07);
g.fillStyle = '#5a3a24';
g.fillRect(-0.6, -0.4, 0.09, 0.4);
g.fillRect(0.51, -0.4, 0.09, 0.4);
// the cloak: over the plank, its folds hanging to the floor at the left
g.fillStyle = '#4a4a52';
g.beginPath();
g.moveTo(-0.62, -0.5);
g.quadraticCurveTo(-0.2, -0.62, 0.3, -0.52);
g.lineTo(0.32, -0.42);
g.quadraticCurveTo(0.0, -0.36, -0.25, -0.4);
g.quadraticCurveTo(-0.45, -0.2, -0.52, 0.0);
g.lineTo(-0.82, 0.0);
g.quadraticCurveTo(-0.8, -0.3, -0.62, -0.5);
g.closePath();
g.fill();
g.strokeStyle = '#33333a';
g.lineWidth = 0.014;
for (const [a, b] of [[-0.7, -0.38], [-0.6, -0.42], [-0.48, -0.44]]) {
  g.beginPath();
  g.moveTo(a, 0);
  g.quadraticCurveTo(a + 0.06, -0.25, b + 0.1, -0.48);
  g.stroke();
}
L.dabs(g, 321, -0.55, -0.6, 0.8, 0.12, ['#e8eef6', '#cfd8e6'], 18, 0.025, 0.6, 0.8);
// the hat: a broad brim and a low crown
g.fillStyle = '#26232a';
g.beginPath();
g.ellipse(0.12, -0.58, 0.26, 0.05, -0.05, 0, Math.PI * 2);
g.fill();
g.beginPath();
g.moveTo(0.0, -0.6);
g.quadraticCurveTo(0.0, -0.76, 0.12, -0.77);
g.quadraticCurveTo(0.24, -0.76, 0.24, -0.6);
g.closePath();
g.fill();
g.fillStyle = '#4a3a2a';
g.fillRect(0.0, -0.64, 0.24, 0.025);
L.dabs(g, 322, -0.05, -0.8, 0.32, 0.06, ['#eef2f8'], 8, 0.02, 0.6, 0.8);
