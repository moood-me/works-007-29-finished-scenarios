// The wall clock beside the door: a walnut regulator with a white dial and a brass pendulum behind its glass door —
// the pendulum a layer that swings (animate).
g.fillStyle = '#4a3326';
g.beginPath();
g.moveTo(-0.2, -1.15);
g.quadraticCurveTo(0, -1.28, 0.2, -1.15);
g.lineTo(0.2, 0);
g.lineTo(-0.2, 0);
g.closePath();
g.fill();
g.fillStyle = '#f3eee2';
g.beginPath();
g.arc(0, -0.95, 0.14, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#2b2420';
g.lineWidth = 0.008;
g.beginPath();
for (let k = 0; k < 12; k++) {
  const a = (k / 12) * Math.PI * 2;
  g.moveTo(Math.sin(a) * 0.11, -0.95 - Math.cos(a) * 0.11);
  g.lineTo(Math.sin(a) * 0.125, -0.95 - Math.cos(a) * 0.125);
}
g.stroke();
// the hands at a quarter past eight
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(0, -0.95);
g.lineTo(-0.055, -0.92);
g.moveTo(0, -0.95);
g.lineTo(0.1, -0.95);
g.stroke();
g.fillStyle = '#2e2420';
g.fillRect(-0.15, -0.76, 0.3, 0.7);
e.layer('pendulum', { pivot: [0, -0.74] }, c => {
  c.strokeStyle = '#b48c3e';
  c.lineWidth = 0.012;
  c.beginPath();
  c.moveTo(0, -0.74);
  c.lineTo(0, -0.2);
  c.stroke();
  c.fillStyle = '#d2ab55';
  c.beginPath();
  c.arc(0, -0.17, 0.06, 0, Math.PI * 2);
  c.fill();
});
