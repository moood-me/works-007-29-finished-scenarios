// The table close, under the lamp (an insert, `close`): the old planks, the lamp's warm pool from the upper right,
// acorns as big as a finger end. For МИ1 (`acorns` heap): the heap, ten cracked ones among the good, each put aside
// to the little pile on the right as its bit of `cracked_out` is set; for the count (`acorns` counting): nine heaps of
// ten along the top and the last ten in a loose line, each going into the tenth heap as `counted` reaches it. The
// Traveller's notebook and the letter at the left edge when they are on the table. Each acorn that moves is a layer
// (animate moves them): nothing is painted again as the player taps. Points (animate): `cracked_0`…`cracked_9` (each
// cracked acorn where it lies), `acorn_0`…`acorn_9` (the last ten), `next` (the next of them to count), `heap`
const A = e.aspect, M = A / 2, L = M - 7 / 6, W = 7 / 3, I = e.lib.INSERT, r = I.r;
// the planks and the lamp's pool
g.fillStyle = '#6e5236';
g.fillRect(L - 0.1, -0.05, W + 0.2, 1.1);
const tones = ['#9c7a52', '#94744e', '#a28058', '#8e6e4a'];
for (let i = 0; i < 5; i++) {
  g.fillStyle = tones[i % 4];
  g.fillRect(L - 0.1, -0.05 + i * 0.22 + 0.006, W + 0.2, 0.208);
}
g.strokeStyle = 'rgba(80, 56, 34, 0.3)';
g.lineWidth = 0.003;
for (let i = 0; i < 40; i++) {
  const y = e.rnd() * 1.05, x = L + e.rnd() * W;
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x + 0.2 + e.rnd() * 0.4, y + (e.rnd() - 0.5) * 0.01);
  g.stroke();
}
const pool = g.createRadialGradient(M + 0.8, 0.05, 0.05, M + 0.6, 0.2, 1.4);
pool.addColorStop(0, 'rgba(255, 214, 150, 0.45)');
pool.addColorStop(0.5, 'rgba(255, 190, 120, 0.12)');
pool.addColorStop(1, 'rgba(30, 20, 10, 0.35)');
g.fillStyle = pool;
g.fillRect(L - 0.1, -0.05, W + 0.2, 1.1);
// the lamp's brass foot at the top right corner
g.fillStyle = '#a8843e';
g.beginPath();
g.ellipse(M + 0.95, 0.02, 0.17, 0.06, 0, 0, Math.PI * 2);
g.fill();
// МИ1: the good heap
e.layer('good', {}, (g) => {
  const [dx, y, rx, ry] = I.heap;
  for (const [x, yy, a] of e.lib.heap(34, M + dx, y, rx, ry, 21)) e.lib.acorn(g, x, yy, r, a, false);
});
for (let k = 0; k < 10; k++) {
  const [dx, y] = I.cracked[k];
  e.layer(`cracked_${k}`, {}, (g) => e.lib.acorn(g, M + dx, y, r, 0.6 * k, true));
}
// the count: nine heaps of ten, and the last ten
e.layer('tens', {}, (g) => {
  for (let k = 0; k < 9; k++) {
    const [dx, y] = I.tens(k);
    for (const [x, yy, a] of e.lib.heap(10, M + dx, y, 0.05, 0.04, 40 + k)) e.lib.acorn(g, x, yy, r * 0.85, a, false);
  }
});
for (let k = 0; k < 10; k++) {
  const [dx, y] = I.loose(k);
  e.layer(`loose_${k}`, {}, (g) => e.lib.acorn(g, M + dx, y, r, 0.4 + 0.5 * k, false));
}
// the notebook and the letter at the left, within the safe frame
e.layer('notebook_open', {}, (g) => {
  g.fillStyle = '#3a3028';
  g.fillRect(M - 0.66, 0.74, 0.3, 0.24);
  g.fillStyle = '#e8e0cc';
  g.fillRect(M - 0.648, 0.752, 0.132, 0.216);
  g.fillRect(M - 0.504, 0.752, 0.132, 0.216);
  g.fillStyle = 'rgba(60, 50, 40, 0.5)';
  for (let i = 0; i < 8; i++) g.fillRect(M - 0.636, 0.775 + i * 0.024, 0.1 - (i % 3) * 0.02, 0.005);
});
e.layer('notebook_shut', {}, (g) => {
  g.fillStyle = '#3a3028';
  g.fillRect(M - 0.64, 0.74, 0.15, 0.22);
});
e.layer('letter', {}, (g) => {
  g.save();
  g.translate(M - 0.52, 0.16);
  g.rotate(0.15);
  g.fillStyle = '#efe9da';
  g.fillRect(-0.13, -0.09, 0.26, 0.18);
  g.fillStyle = 'rgba(40, 40, 60, 0.45)';
  for (let i = 0; i < 7; i++) g.fillRect(-0.11, -0.065 + i * 0.02, 0.2 - (i % 2) * 0.05, 0.004);
  g.restore();
});
