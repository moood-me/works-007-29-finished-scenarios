// The cove's shore seen from above, laid over the relief: the plane's centre is 25 m ahead, so a place `d` metres
// ahead and `a` across is at (a, 25 - d). Grey-gold shingle, darker and wet along the water's edge with a line of
// dry weed above it; the grassy bank on the left with the path climbing it from the shingle
const r = e.lib.rnd(61), L = e.lib, P = (a, d) => [a, 25 - d];
g.fillStyle = '#a89d8b';
g.fillRect(-70, -35, 140, 70);
// broad tones in the shingle
const tones = ['#b0a592', '#9d927f', '#a59a88', '#b5ab99', '#968b7a'];
for (let i = 0; i < 160; i++) {
  const d = -8 + r() * 60, a = (r() - 0.5) * 130, [x, y] = P(a, d), s = 0.6 + r() * 2.2;
  g.fillStyle = tones[Math.floor(r() * tones.length)];
  g.beginPath();
  g.ellipse(x, y, s * 1.6, s, r() * 3, 0, Math.PI * 2);
  g.fill();
}
// the wet band along the water and the line of weed the tide left above it
const edge = [];
for (let a = -70; a <= 70; a += 1) edge.push([a, L.shoreAt(a)]);
const band = (off0, off1, color) => {
  g.fillStyle = color;
  g.beginPath();
  edge.forEach(([a, d], i) => { const [x, y] = P(a, d - off0); if (i) g.lineTo(x, y); else g.moveTo(x, y); });
  for (let i = edge.length - 1; i >= 0; i--) { const [a, d] = edge[i], [x, y] = P(a, d - off1); g.lineTo(x, y); }
  g.closePath();
  g.fill();
};
band(-1.5, 1.4, '#8a8072');
band(1.4, 2.0, '#978d7e');
g.strokeStyle = '#6e6450';
g.lineWidth = 0.09;
g.beginPath();
edge.forEach(([a, d], i) => { const [x, y] = P(a, d - 2.6 - 0.25 * Math.sin(a * 0.7)); if (i) g.lineTo(x, y); else g.moveTo(x, y); });
g.stroke();
// pebbles: many small near, fewer and larger-looking far
const peb = ['#c2b8a6', '#8f8676', '#b9ae9c', '#7c7366', '#a59b8a', '#cbc2b2'];
for (let i = 0; i < 1100; i++) {
  const d = -6 + Math.pow(r(), 1.5) * 30, a = (r() - 0.5) * (14 + d * 2.2);
  if (d > L.shoreAt(a) + 1) continue;
  const [x, y] = P(a, d), s = 0.03 + r() * 0.07;
  g.fillStyle = peb[Math.floor(r() * peb.length)];
  g.beginPath();
  g.ellipse(x, y, s * 1.3, s, r() * 3, 0, Math.PI * 2);
  g.fill();
}
// the grassy bank on the left, its edge ragged where it meets the shingle
g.fillStyle = '#7f8358';
g.beginPath();
g.moveTo(-70, -35);
for (let d = 60; d >= -10; d -= 1) {
  const [x, y] = P(-8.2 - 0.12 * d - 0.6 * Math.sin(d * 0.9) - 0.3 * Math.sin(d * 2.3), d);
  g.lineTo(x, y);
}
g.lineTo(-70, 35);
g.closePath();
g.fill();
const greens = ['#8a8c5f', '#737852', '#949465', '#6c704c'];
for (let i = 0; i < 160; i++) {
  const d = -8 + r() * 66, a = -9 - 0.12 * d - r() * 55, [x, y] = P(a, d), s = 0.5 + r() * 1.8;
  g.fillStyle = greens[Math.floor(r() * greens.length)];
  g.beginPath();
  g.ellipse(x, y, s * 1.5, s, r() * 3, 0, Math.PI * 2);
  g.fill();
}
// the path from the shingle up the bank and away along it
const way = [P(-4.5, 2), P(-8.5, 5), P(-12, 9), P(-15.5, 15), P(-19, 24), P(-24, 36), P(-30, 50)];
g.lineCap = 'round';
g.lineJoin = 'round';
for (const [w, c] of [[1.1, '#a39780'], [0.6, '#b3a78f']]) {
  g.strokeStyle = c;
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(way[0][0], way[0][1]);
  for (let i = 1; i < way.length - 1; i++) g.quadraticCurveTo(way[i][0], way[i][1], (way[i][0] + way[i + 1][0]) / 2, (way[i][1] + way[i + 1][1]) / 2);
  g.lineTo(way[way.length - 1][0], way[way.length - 1][1]);
  g.stroke();
}
