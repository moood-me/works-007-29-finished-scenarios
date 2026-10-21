// The mountain over the lair, far off in the haze: a broad grey-blue massif, its peak to the left, crags and gullies
// down its face, a lower shoulder before it
const r = e.lib.rnd(9);
g.fillStyle = '#6f7686';
g.beginPath();
g.moveTo(-400, 4.8);
g.lineTo(-400, -17.6);
g.bezierCurveTo(-300, -24, -200, -35.2, -130, -46.4);
g.bezierCurveTo(-100, -51.2, -80, -56, -60, -57.6);
g.bezierCurveTo(-36, -54.4, -10, -44.8, 30, -36.8);
g.bezierCurveTo(110, -25.6, 220, -24, 400, -14.4);
g.lineTo(400, 4.8);
g.closePath();
g.fill();
// gullies: darker streaks down its face
g.fillStyle = '#626979';
for (let i = 0; i < 24; i++) {
  const x = -200 + r() * 300, top = -56 + Math.abs(x + 60) * 0.22 + r() * 5, len = 10 + r() * 22, w = 1.5 + r() * 3;
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
g.moveTo(-400, 4.8);
g.lineTo(-400, -8);
g.bezierCurveTo(-260, -12.8, -150, -20.8, -80, -17.6);
g.bezierCurveTo(-20, -14.4, 60, -22.4, 140, -19.2);
g.bezierCurveTo(220, -16, 300, -9.6, 400, -8);
g.lineTo(400, 4.8);
g.closePath();
g.fill();
