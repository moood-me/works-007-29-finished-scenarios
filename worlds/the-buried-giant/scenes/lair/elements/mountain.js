// The mountain over the lair, far off in the haze: a broad grey-blue massif, its peak to the left, crags and gullies
// down its face, a lower shoulder before it
const r = e.lib.rnd(9);
g.fillStyle = '#6f7686';
g.beginPath();
g.moveTo(-400, 6);
g.lineTo(-400, -22);
g.bezierCurveTo(-300, -30, -200, -44, -130, -58);
g.bezierCurveTo(-100, -64, -80, -70, -60, -72);
g.bezierCurveTo(-36, -68, -10, -56, 30, -46);
g.bezierCurveTo(110, -32, 220, -30, 400, -18);
g.lineTo(400, 6);
g.closePath();
g.fill();
// gullies: darker streaks down its face
g.fillStyle = '#626979';
for (let i = 0; i < 24; i++) {
  const x = -200 + r() * 300, top = -70 + Math.abs(x + 60) * 0.28 + r() * 6, len = 10 + r() * 22, w = 1.5 + r() * 3;
  g.beginPath();
  g.moveTo(x - w, top);
  g.lineTo(x + w * 0.4, top - 1.5);
  g.lineTo(x + (r() - 0.5) * 8 + w * 0.3, top + len);
  g.lineTo(x + (r() - 0.5) * 8 - w * 0.3, top + len * 0.9);
  g.closePath();
  g.fill();
}
// a lower shoulder before it
g.fillStyle = '#7a7f8b';
g.beginPath();
g.moveTo(-400, 6);
g.lineTo(-400, -10);
g.bezierCurveTo(-260, -16, -150, -26, -80, -22);
g.bezierCurveTo(-20, -18, 60, -28, 140, -24);
g.bezierCurveTo(220, -20, 300, -12, 400, -10);
g.lineTo(400, 6);
g.closePath();
g.fill();
