// The pass's shoulders: two rolling hills of heather and grass on either side of the saddle, the path going over
// between them
g.fillStyle = '#69735f';
g.beginPath();
g.moveTo(-220, 6);
g.lineTo(-220, -46);
g.bezierCurveTo(-170, -52, -110, -50, -70, -34);
g.bezierCurveTo(-40, -22, -20, -10, 0, -8);
g.bezierCurveTo(24, -10, 46, -24, 80, -36);
g.bezierCurveTo(120, -50, 170, -54, 220, -50);
g.lineTo(220, 6);
g.closePath();
g.fill();
// heather on its slopes
const r = e.lib.rnd(11);
g.fillStyle = '#6f6566';
for (let i = 0; i < 40; i++) {
  const x = -210 + r() * 420, edge = x < 0 ? -46 + (x + 220) * 0.18 : -8 - x * 0.2, y = Math.min(2, edge + 6 + r() * 30);
  g.beginPath();
  g.ellipse(x, y, 6 + r() * 14, 2 + r() * 4, 0, 0, Math.PI * 2);
  g.fill();
}
