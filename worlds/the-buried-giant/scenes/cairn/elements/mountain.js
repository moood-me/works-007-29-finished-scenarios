// The mountain beyond the pass, where the mist comes down from: a broad dark-grey peak with crags, far off in the haze
const r = e.lib.rnd(7);
g.fillStyle = '#5f6a69';
g.beginPath();
g.moveTo(-300, 6);
g.lineTo(-300, -40);
g.bezierCurveTo(-220, -52, -150, -70, -95, -104);
g.bezierCurveTo(-60, -128, -30, -146, 4, -152);
g.bezierCurveTo(30, -148, 52, -128, 84, -110);
g.bezierCurveTo(130, -84, 190, -66, 300, -48);
g.lineTo(300, 6);
g.closePath();
g.fill();
// crags and gullies: darker streaks down its face
g.fillStyle = '#525c5c';
for (let i = 0; i < 26; i++) {
  const x = -140 + r() * 260, top = -150 + Math.abs(x) * 0.62 + r() * 10, len = 18 + r() * 40, w = 2 + r() * 4;
  g.beginPath();
  g.moveTo(x - w, top);
  g.lineTo(x + w * 0.4, top - 2);
  g.lineTo(x + (r() - 0.5) * 12 + w * 0.3, top + len);
  g.lineTo(x + (r() - 0.5) * 12 - w * 0.3, top + len * 0.9);
  g.closePath();
  g.fill();
}
// a lighter shoulder before it
g.fillStyle = '#6b7572';
g.beginPath();
g.moveTo(-300, 6);
g.lineTo(-300, -22);
g.bezierCurveTo(-200, -30, -120, -44, -60, -40);
g.bezierCurveTo(-20, -36, 20, -52, 70, -50);
g.bezierCurveTo(140, -46, 220, -30, 300, -26);
g.lineTo(300, 6);
g.closePath();
g.fill();
