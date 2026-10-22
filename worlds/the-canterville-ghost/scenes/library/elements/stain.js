// The bloodstain, from above: a dark red blot soaked into the boards, a splash at its edge — whatever Pinkerton's
// Champion does, it is back every morning.
g.fillStyle = '#6e0f12';
g.beginPath();
g.moveTo(-0.3, -0.12);
g.bezierCurveTo(-0.28, -0.3, 0.02, -0.32, 0.12, -0.2);
g.bezierCurveTo(0.24, -0.26, 0.4, -0.1, 0.3, 0.04);
g.bezierCurveTo(0.36, 0.2, 0.12, 0.3, -0.02, 0.2);
g.bezierCurveTo(-0.16, 0.3, -0.38, 0.18, -0.3, -0.12);
g.closePath();
g.fill();
g.fillStyle = '#8a1518';
g.beginPath();
g.ellipse(-0.02, -0.04, 0.17, 0.12, 0.3, 0, Math.PI * 2);
g.fill();
for (const [x, y, r] of [[0.38, -0.2, 0.035], [0.42, 0.12, 0.025], [-0.38, 0.22, 0.03], [0.2, 0.3, 0.02]]) {
  g.fillStyle = '#6e0f12';
  g.beginPath();
  g.arc(x, y, r, 0, Math.PI * 2);
  g.fill();
}
