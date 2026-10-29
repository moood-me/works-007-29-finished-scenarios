// The sack of acorns on the floor by his stool, full and tied (`sack`: animate)
e.layer('sack', {}, (g) => {
  g.fillStyle = '#9a8460';
  g.beginPath();
  g.moveTo(-0.17, 0);
  g.quadraticCurveTo(-0.22, -0.25, -0.1, -0.4);
  g.lineTo(-0.04, -0.48);
  g.lineTo(0.04, -0.48);
  g.lineTo(0.1, -0.4);
  g.quadraticCurveTo(0.22, -0.25, 0.17, 0);
  g.closePath();
  g.fill();
  g.fillStyle = '#6a5838';
  g.fillRect(-0.05, -0.43, 0.1, 0.025);
});
