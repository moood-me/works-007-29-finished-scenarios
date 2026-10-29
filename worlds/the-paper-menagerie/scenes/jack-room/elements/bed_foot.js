// The bed's foot: a low maple footboard with rounded top corners and two turned posts.
g.fillStyle = '#c99a62';
g.beginPath();
g.moveTo(-0.44, 0);
g.lineTo(-0.44, -0.5);
g.quadraticCurveTo(-0.44, -0.56, -0.36, -0.56);
g.lineTo(0.36, -0.56);
g.quadraticCurveTo(0.44, -0.56, 0.44, -0.5);
g.lineTo(0.44, 0);
g.closePath();
g.fill();
g.fillStyle = 'rgba(255,230,190,0.18)';
g.fillRect(-0.38, -0.5, 0.76, 0.04);
g.fillStyle = '#b8895a';
for (const x of [-0.48, 0.44]) {
  g.fillRect(x, -0.6, 0.04, 0.6);
  g.beginPath();
  g.arc(x + 0.02, -0.61, 0.03, 0, Math.PI * 2);
  g.fill();
}
