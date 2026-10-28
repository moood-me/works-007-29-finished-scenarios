// The ground Parish has begun to dig, from above (2.8 m across, 1.7 deep; y toward us): turned dark earth in clods,
// ragged at its edges where the turf was cut, a hole for the next sapling.
g.fillStyle = '#6a5640';
g.beginPath();
for (let i = 0; i < 24; i++) {
  const a = (i / 24) * Math.PI * 2;
  const r = 1 + (e.rnd() - 0.5) * 0.12;
  const x = Math.cos(a) * 1.35 * r;
  const y = Math.sin(a) * 0.8 * r;
  if (i === 0) g.moveTo(x, y);
  else g.lineTo(x, y);
}
g.closePath();
g.fill();
// clods: lighter tops, darker sides
for (let i = 0; i < 90; i++) {
  const x = (e.rnd() - 0.5) * 2.4;
  const y = (e.rnd() - 0.5) * 1.4;
  if ((x / 1.25) ** 2 + (y / 0.72) ** 2 > 1) continue;
  const r = 0.05 + e.rnd() * 0.09;
  g.fillStyle = '#54432f';
  g.beginPath();
  g.ellipse(x, y + r * 0.3, r, r * 0.75, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = e.rnd() < 0.5 ? '#806a4e' : '#76614a';
  g.beginPath();
  g.ellipse(x, y, r * 0.85, r * 0.6, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
// the hole, dug and waiting
g.fillStyle = '#3e3124';
g.beginPath();
g.ellipse(-0.55, 0.15, 0.28, 0.2, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#4c3c2b';
g.beginPath();
g.ellipse(-0.55, 0.1, 0.22, 0.13, 0, 0, Math.PI * 2);
g.fill();
