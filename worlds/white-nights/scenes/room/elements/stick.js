// His knotty stick "against the dogs", leaning in the corner behind the table: dark hazel, its foot on the floor, its
// top against the wall, two knots along it and a worn knob
const INK = e.lib.INK;
g.beginPath();
g.moveTo(-0.07, 0);
g.quadraticCurveTo(0.0, -0.45, 0.09, -0.9);
g.strokeStyle = '#54402e';
g.lineWidth = 0.026;
g.lineCap = 'round';
g.stroke();
g.strokeStyle = INK;
g.lineWidth = 0.004;
g.stroke();
g.fillStyle = '#5c4632';
for (const [x, y] of [[-0.035, -0.3], [0.03, -0.6]]) {
  g.beginPath();
  g.ellipse(x, y, 0.02, 0.016, -0.3, 0, Math.PI * 2);
  g.fill();
  g.stroke();
}
g.fillStyle = '#6b5340';
g.beginPath();
g.ellipse(0.095, -0.915, 0.026, 0.022, -0.2, 0, Math.PI * 2);
g.fill();
g.stroke();
