// The bed's head against the back wall: a taller maple headboard, a curve along its top, two posts.
g.fillStyle = '#c99a62';
g.beginPath();
g.moveTo(-0.44, 0);
g.lineTo(-0.44, -0.86);
g.quadraticCurveTo(0, -1.0, 0.44, -0.86);
g.lineTo(0.44, 0);
g.closePath();
g.fill();
g.fillStyle = 'rgba(120,80,40,0.2)';
g.fillRect(-0.36, -0.8, 0.72, 0.012);
g.fillStyle = '#b8895a';
for (const x of [-0.48, 0.44]) {
  g.fillRect(x, -0.96, 0.04, 0.96);
  g.beginPath();
  g.arc(x + 0.02, -0.97, 0.03, 0, Math.PI * 2);
  g.fill();
}
