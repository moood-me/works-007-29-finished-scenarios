// The garden's old wall at the back (16 m off, 1.6 m high, 44 m long): rough grey stone in courses, its coping fallen
// in places, ivy hanging over it in dark clumps.
g.fillStyle = '#5d5e5c';
g.beginPath();
g.moveTo(-22, 0.1);
let x = -22;
g.lineTo(x, -1.5);
while (x < 22) {
  const step = 1 + e.rnd() * 2.5;
  const drop = e.rnd() < 0.2 ? 0.4 + e.rnd() * 0.4 : e.rnd() * 0.12;
  g.lineTo(x + step * 0.3, -1.55 + drop);
  g.lineTo(x + step, -1.5 + drop * 0.5);
  x += step;
}
g.lineTo(22, 0.1);
g.closePath();
g.fill();
g.save();
g.clip();
g.strokeStyle = '#3f403f';
g.lineWidth = 0.025;
for (let y = -1.5; y < 0; y += 0.22) {
  g.beginPath();
  g.moveTo(-22, y);
  g.lineTo(22, y);
  g.stroke();
  for (let xx = -22 + e.rnd() * 0.5; xx < 22; xx += 0.35 + e.rnd() * 0.35) {
    g.beginPath();
    g.moveTo(xx, y);
    g.lineTo(xx, y + 0.22);
    g.stroke();
  }
}
for (let i = 0; i < 260; i++) {
  g.fillStyle = ['#6c6d68', '#545551', '#4a4f48'][Math.floor(e.rnd() * 3)];
  g.fillRect(-22 + e.rnd() * 44, -1.5 + e.rnd() * 1.5, 0.12 + e.rnd() * 0.25, 0.08 + e.rnd() * 0.1);
}
g.restore();
// ivy: dark rounded clumps over the top, hanging down in tongues
for (let xx = -21; xx < 22; xx += 1.2 + e.rnd() * 3) {
  if (e.rnd() < 0.35) continue;
  const w = 0.8 + e.rnd() * 1.8;
  const hang = 0.4 + e.rnd() * 1.0;
  g.fillStyle = e.rnd() < 0.5 ? '#26341f' : '#2e3d25';
  for (let k = 0; k < 30; k++) {
    const u = e.rnd();
    const y = -1.6 + e.rnd() * hang * (1 - Math.abs(u - 0.5) * 1.4);
    g.beginPath();
    g.arc(xx + u * w, y, 0.07 + e.rnd() * 0.1, 0, Math.PI * 2);
    g.fill();
  }
}
