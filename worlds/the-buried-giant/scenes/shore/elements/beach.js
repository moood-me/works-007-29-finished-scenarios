// The cove's shore seen from above, laid over the relief: the plane's centre is 25 m ahead, so a place `d` metres
// ahead and `a` across is at (a, 25 - d). Grey-gold shingle, darker and wet along the water's edge, clumps of dry weed
// the tide left above it; the grassy bank on the left with the path climbing it from the shingle
const r = e.lib.rnd(61), L = e.lib, P = (a, d) => [a, 25 - d];
g.fillStyle = '#a69b89';
g.fillRect(-70, -35, 140, 70);
// soft broad tones in the shingle
const tones = ['#ab9f8c', '#a09584', '#a89c8a', '#9c9180'];
for (let i = 0; i < 140; i++) {
  const d = -8 + r() * 60, a = (r() - 0.5) * 130, [x, y] = P(a, d), s = 0.8 + r() * 2.6;
  g.fillStyle = tones[Math.floor(r() * tones.length)];
  g.beginPath();
  g.ellipse(x, y, s * 1.7, s, r() * 3, 0, Math.PI * 2);
  g.fill();
}
// the wet band along the water, from the bank's foot round to the right
const edge = [];
for (let a = -9; a <= 70; a += 1) edge.push([a, L.shoreAt(a)]);
g.fillStyle = '#8c8274';
g.beginPath();
edge.forEach(([a, d], i) => { const [x, y] = P(a, d + 1.5); if (i) g.lineTo(x, y); else g.moveTo(x, y); });
for (let i = edge.length - 1; i >= 0; i--) { const [a, d] = edge[i], [x, y] = P(a, d - 1.1 - 0.3 * Math.sin(a * 0.6)); g.lineTo(x, y); }
g.closePath();
g.fill();
// clumps of dry weed in a broken line above the wet
for (let i = 0; i < 90; i++) {
  const a = -8 + r() * 60, d = L.shoreAt(a) - 1.9 - r() * 0.9, [x, y] = P(a, d);
  g.fillStyle = r() < 0.5 ? '#6f6551' : '#5d5646';
  g.beginPath();
  g.ellipse(x, y, 0.12 + r() * 0.35, 0.05 + r() * 0.08, (r() - 0.5) * 0.6, 0, Math.PI * 2);
  g.fill();
}
// pebbles: many small near the viewer and along the way to the water
const peb = ['#c2b8a6', '#8f8676', '#b9ae9c', '#7c7366', '#a59b8a', '#cbc2b2', '#958b7a'];
for (let i = 0; i < 1500; i++) {
  const d = -4 + Math.pow(r(), 1.3) * 18, a = (r() - 0.5) * (12 + d * 2.4);
  if (d > L.shoreAt(a) + 0.8) continue;
  const [x, y] = P(a, d), s = 0.025 + r() * r() * 0.09;
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
