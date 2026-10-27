// The right wall, from its foot (facing the room: x runs toward the viewer, distance 6.2 at x −2.45, 1.3 at 2.45):
// the blue wash with a window onto the side alley cut through it (x −0.75…0.45, sill 1.15, head 2.35); a shelf of
// thread on spools above the machines' end, the big shears and a tape on nails, a slate of measurements in chalk.
g.save();
g.beginPath();
g.rect(-2.45, -3.32, 4.9, 3.34);
g.rect(-0.75, -2.35, 1.2, 1.2);
g.clip('evenodd');
e.lib.wash(g, e, -2.45, 2.45, 3.3);
g.fillStyle = '#9fb0b2';
g.fillRect(-0.8, -2.41, 1.3, 0.06);
g.fillRect(-0.8, -1.16, 1.3, 0.05);
g.restore();
// the shelf of spools
g.fillStyle = '#4e3c2c';
g.fillRect(-2.3, -2.0, 1.2, 0.035);
const thread = ['#2a2a2e', '#e8e4d8', '#6a6a70', '#9a3a30', '#3a4a6a', '#c8b48a', '#2a2a2e', '#e8e4d8'];
for (let i = 0; i < 14; i++) {
  const x = -2.25 + i * 0.08;
  g.fillStyle = '#c8a878';
  g.fillRect(x, -2.12, 0.05, 0.012);
  g.fillRect(x, -2.012, 0.05, 0.012);
  g.fillStyle = thread[i % thread.length];
  g.fillRect(x + 0.005, -2.11, 0.04, 0.1);
}
// the shears and a tape on nails
g.strokeStyle = '#3a3a3e';
g.lineWidth = 0.022;
g.beginPath();
g.moveTo(1.1, -1.9);
g.lineTo(1.18, -1.5);
g.moveTo(1.16, -1.9);
g.lineTo(1.12, -1.5);
g.stroke();
g.beginPath();
g.ellipse(1.08, -1.95, 0.035, 0.05, 0.3, 0, Math.PI * 2);
g.ellipse(1.2, -1.95, 0.035, 0.05, -0.3, 0, Math.PI * 2);
g.stroke();
g.strokeStyle = '#c8a840';
g.lineWidth = 0.018;
g.beginPath();
g.moveTo(1.4, -1.95);
g.quadraticCurveTo(1.36, -1.5, 1.42, -1.3);
g.moveTo(1.4, -1.95);
g.quadraticCurveTo(1.5, -1.55, 1.46, -1.38);
g.stroke();
// a slate of a customer's measurements in chalk
g.fillStyle = '#3a3e3c';
g.fillRect(1.65, -1.95, 0.45, 0.34);
g.strokeStyle = '#6a5440';
g.lineWidth = 0.02;
g.strokeRect(1.65, -1.95, 0.45, 0.34);
g.strokeStyle = 'rgba(220,220,210,0.7)';
g.lineWidth = 0.008;
for (let r = 0; r < 5; r++) {
  g.beginPath();
  g.moveTo(1.7, -1.88 + r * 0.055);
  for (let x = 1.7; x < 2.0; x += 0.03) g.lineTo(x + 0.015, -1.88 + r * 0.055 + (e.rnd() - 0.5) * 0.02);
  g.stroke();
}
