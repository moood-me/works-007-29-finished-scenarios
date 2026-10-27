// A barn lantern hanging from a nail on the post, unlit (metres, its foot at the middle): the tin top and its ring,
// the guard wires round the glass, the fount below.
g.strokeStyle = '#3a3633';
g.lineWidth = 0.008;
g.beginPath();
g.arc(0, -0.37, 0.04, Math.PI, 0);
g.stroke();
g.fillStyle = '#4b4743';
g.beginPath();
g.moveTo(-0.06, -0.3);
g.lineTo(0.06, -0.3);
g.lineTo(0.035, -0.36);
g.lineTo(-0.035, -0.36);
g.closePath();
g.fill();
g.fillStyle = 'rgba(200,190,160,0.55)';
g.beginPath();
g.ellipse(0, -0.19, 0.055, 0.1, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#4b4743';
g.lineWidth = 0.01;
for (const x of [-0.06, 0, 0.06]) {
  g.beginPath();
  g.moveTo(x * 0.6, -0.3);
  g.quadraticCurveTo(x * 1.4, -0.19, x * 0.8, -0.08);
  g.stroke();
}
g.fillStyle = '#4b4743';
g.fillRect(-0.07, -0.08, 0.14, 0.08);
