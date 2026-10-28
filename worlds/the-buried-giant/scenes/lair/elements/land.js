// The land round the lair, seen from above, laid over the relief: the plane's centre is 140 m ahead, so a place `d`
// metres ahead and `a` across is at (a, 140 - d). Heath and scree on the slopes, the path along the pit's left and up
// the slope, the pit: a worn lip, steep walls streaked down their fall, an ash-pale floor strewn with stones
const r = e.lib.rnd(3), P = (a, d) => [a, 140 - d], pit = e.lib.PIT;
g.fillStyle = '#80806a';
g.fillRect(-150, -170, 300, 340);
// broad patches: heather, pale dry grass, dark turf, grey scree — small near, big far
const colors = ['#86757a', '#9b9576', '#76805f', '#8e8a74', '#8a8882', '#7f7470'];
for (let i = 0; i < 520; i++) {
  const d = -6 + Math.pow(r(), 1.6) * 310, a = (r() - 0.5) * (30 + d * 1.7), s = 0.3 + d * 0.045;
  if (e.lib.pitQ(a, d) < 1.1) continue;
  const [x, y] = P(a, d);
  g.fillStyle = colors[Math.floor(r() * colors.length)];
  g.beginPath();
  g.ellipse(x, y, s * (1 + r() * 2), s * (0.6 + r()), r() * 3, 0, Math.PI * 2);
  g.fill();
}
// scree fans down the far slope, pale grey
g.fillStyle = 'rgba(150,148,142,0.7)';
for (let i = 0; i < 26; i++) {
  const d = 45 + r() * 220, a = (r() - 0.5) * (60 + d * 1.2), [x, y] = P(a, d), w = 2 + d * 0.04;
  g.beginPath();
  g.moveTo(x, y - w * 3);
  g.lineTo(x + w, y + w * 1.5);
  g.lineTo(x - w, y + w * 1.5);
  g.closePath();
  g.fill();
}
// the pit: the worn lip, then the walls in rings (streaked down their fall), then the floor
const [cx, cy] = P(pit.across, pit.distance), R = pit.radius;
g.fillStyle = '#8c877c';
g.beginPath();
g.arc(cx, cy, R * 1.08, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#6c6963';
g.beginPath();
g.arc(cx, cy, R * 0.97, 0, Math.PI * 2);
g.fill();
for (let i = 0; i < 260; i++) {
  const t = r() * Math.PI * 2, from = R * (0.6 + 0.35 * r()), to = from - R * (0.08 + 0.2 * r());
  g.strokeStyle = r() < 0.6 ? 'rgba(84,81,77,0.7)' : 'rgba(128,124,116,0.45)';
  g.lineWidth = 0.08 + r() * 0.2;
  g.beginPath();
  g.moveTo(cx + Math.cos(t) * from, cy + Math.sin(t) * from);
  g.lineTo(cx + Math.cos(t + (r() - 0.5) * 0.05) * to, cy + Math.sin(t) * to);
  g.stroke();
}
// strata: a few rings round the walls
for (const k of [0.68, 0.79, 0.88]) {
  g.strokeStyle = 'rgba(100,96,90,0.5)';
  g.lineWidth = 0.18;
  g.beginPath();
  g.arc(cx, cy, R * k, 0, Math.PI * 2);
  g.stroke();
}
g.fillStyle = '#a19b8d';
g.beginPath();
g.arc(cx, cy, R * (pit.floor + 0.03), 0, Math.PI * 2);
g.fill();
g.fillStyle = 'rgba(176,170,156,0.7)';
for (let i = 0; i < 30; i++) {
  const t = r() * Math.PI * 2, d = r() * R * 0.5;
  g.beginPath();
  g.ellipse(cx + Math.cos(t) * d, cy + Math.sin(t) * d, 0.6 + r() * 1.4, 0.4 + r() * 0.8, r() * 3, 0, Math.PI * 2);
  g.fill();
}
// stones fallen to the floor and lying on the walls
for (let i = 0; i < 90; i++) {
  const t = r() * Math.PI * 2, d = R * Math.sqrt(r()) * 0.9;
  g.fillStyle = r() < 0.5 ? '#6d6a63' : '#888379';
  e.lib.stone(g, cx + Math.cos(t) * d, cy + Math.sin(t) * d, 0.1 + r() * 0.3, 0.08 + r() * 0.2, r() * 3, r);
}
// the path: worn earth from under the viewer's feet along the pit's left, climbing the slope
const way = [P(0.3, -8), P(0, 2), P(-0.7, 5.5), P(-1.7, 8.5), P(-3.4, 13), P(-5.6, 19), P(-8, 27), P(-10, 38), P(-9, 55), P(-12, 80)];
const trace = (wide, color) => {
  g.strokeStyle = color;
  g.lineWidth = wide;
  g.lineCap = 'round';
  g.lineJoin = 'round';
  g.beginPath();
  g.moveTo(way[0][0], way[0][1]);
  for (let i = 1; i < way.length - 1; i++) g.quadraticCurveTo(way[i][0], way[i][1], (way[i][0] + way[i + 1][0]) / 2, (way[i][1] + way[i + 1][1]) / 2);
  g.lineTo(way[way.length - 1][0], way[way.length - 1][1]);
  g.stroke();
};
trace(1.6, '#938873');
trace(1.0, '#a69a82');
// stones: pebbles about the path and the near ground, more toward the pit's lip
for (let i = 0; i < 200; i++) {
  const d = 0.5 + r() * 26, a = -8 + r() * 22;
  if (e.lib.pitQ(a, d) < 0.98) continue;
  const [x, y] = P(a, d);
  g.fillStyle = r() < 0.5 ? '#8f8b82' : '#78746c';
  e.lib.stone(g, x, y, 0.05 + r() * 0.13, 0.04 + r() * 0.09, r() * 3, r);
}
