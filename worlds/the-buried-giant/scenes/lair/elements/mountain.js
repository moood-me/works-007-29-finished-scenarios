// The mountain over the lair, far off in the haze: a broken grey-blue ridge, its highest peak to the left, crags and
// gullies down its face, a lower shoulder before it
const r = e.lib.rnd(9);
const RIDGE = [[-400, -12], [-300, -20], [-230, -34], [-190, -29], [-140, -47], [-112, -41], [-70, -58], [-44, -49], [-14, -54], [28, -37], [76, -42], [128, -27], [220, -23], [300, -15], [400, -11]];
g.fillStyle = '#6f7686';
g.beginPath();
g.moveTo(-400, 5);
for (const [x, y] of RIDGE) g.lineTo(x, y);
g.lineTo(400, 5);
g.closePath();
g.fill();
// the faces turned from the sun a shade darker: from each peak down to the left
g.fillStyle = '#666d7c';
for (let i = 1; i < RIDGE.length - 1; i++) {
  const [x, y] = RIDGE[i], [px, py] = RIDGE[i - 1];
  if (y > py) continue;
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(px, py);
  g.lineTo(px + (x - px) * 0.3, 5);
  g.lineTo(x + 6, 5);
  g.closePath();
  g.fill();
}
// gullies: darker streaks down its face
g.fillStyle = '#5e6574';
for (let i = 0; i < 24; i++) {
  const x = -220 + r() * 320, top = -50 + Math.abs(x + 60) * 0.2 + r() * 5, len = 8 + r() * 18, w = 1.5 + r() * 3;
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
g.moveTo(-400, 5);
g.lineTo(-400, -8);
g.lineTo(-250, -13);
g.lineTo(-160, -20);
g.lineTo(-80, -17);
g.lineTo(-10, -14);
g.lineTo(60, -21);
g.lineTo(140, -18);
g.lineTo(240, -12);
g.lineTo(400, -8);
g.lineTo(400, 5);
g.closePath();
g.fill();
