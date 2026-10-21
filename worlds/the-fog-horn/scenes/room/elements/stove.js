// McDunn's stove against the wall: a squat cast-iron box on short legs, its fire door (the fire itself is the glowing
// card before it, stove_fire), a black kettle on the top plate — its spout the point `spout`, where the steam rises —
// and the pipe going up through the ceiling.
const IRON = '#2f2c2b';
// the pipe, from the back of the top plate up into the ceiling, with a damper ring and a collar
g.fillStyle = '#2a2827';
g.fillRect(-0.26, -2.92, 0.13, 2.14);
g.fillStyle = '#3b3836';
g.fillRect(-0.28, -1.62, 0.17, 0.05);
g.fillRect(-0.28, -2.6, 0.17, 0.05);
// legs
g.fillStyle = IRON;
for (const x of [-0.29, 0.25]) {
  g.beginPath();
  g.moveTo(x - 0.02, -0.14);
  g.lineTo(x + 0.06, -0.14);
  g.lineTo(x + 0.05, 0);
  g.lineTo(x - 0.01, 0);
  g.closePath();
  g.fill();
}
// the body and the top plate
g.fillStyle = IRON;
g.fillRect(-0.32, -0.76, 0.64, 0.63);
g.fillStyle = '#3a3735';
g.fillRect(-0.36, -0.8, 0.72, 0.06);
g.fillRect(-0.34, -0.17, 0.68, 0.04);
// cast ribs on its front
g.fillStyle = '#383533';
g.fillRect(-0.3, -0.7, 0.6, 0.025);
g.fillRect(-0.3, -0.62, 0.6, 0.015);
// the fire door's frame (the fire card shows through its opening)
g.fillStyle = '#242221';
g.fillRect(-0.17, -0.55, 0.34, 0.33);
// the ash door below it
g.fillStyle = '#353230';
g.fillRect(-0.12, -0.2, 0.24, 0.03);
// the kettle on the plate, its spout to the left
g.fillStyle = '#3c3936';
g.beginPath();
g.moveTo(0.0, -0.8);
g.lineTo(0.28, -0.8);
g.quadraticCurveTo(0.3, -1.02, 0.14, -1.04);
g.quadraticCurveTo(-0.02, -1.02, 0.0, -0.8);
g.closePath();
g.fill();
g.beginPath();
g.moveTo(0.03, -0.88);
g.lineTo(-0.1, -1.0);
g.lineTo(-0.08, -1.02);
g.lineTo(0.05, -0.94);
g.closePath();
g.fill();
g.strokeStyle = '#3c3936';
g.lineWidth = 0.02;
g.beginPath();
g.arc(0.14, -1.04, 0.09, Math.PI, 0);
g.stroke();
e.at(-0.09, -1.01, 'spout');
