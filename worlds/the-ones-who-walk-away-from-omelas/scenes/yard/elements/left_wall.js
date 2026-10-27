// The yard's low wall on the left (x 0 by the viewer … 8.2 m ahead, 1.15 m high): rough stones under the limewash, a
// coping of old tiles, pots of geraniums and basil along its top (their leaves in the wind, layer `leaves`) — and over
// it the lower city going down to the bay
const A = e.anim;
e.lib.plaster(g, [[0, -1.05, 8.2, 0]], 41, '#ece3d2');
g.fillStyle = 'rgba(150, 135, 115, 0.25)';
for (let i = 0; i < 40; i++) {
  g.beginPath();
  g.ellipse(8.2 * A.hash(i, 1), -1.0 * A.hash(i, 2), 0.18, 0.1, 0, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#b25d40';
g.fillRect(0, -1.15, 8.2, 0.11);
g.fillStyle = '#c46d4e';
g.fillRect(0, -1.15, 8.2, 0.03);
const pots = [[1.6, 0.34, 0], [2.2, 0.26, 1], [4.6, 0.36, 0], [6.4, 0.3, 1], [6.9, 0.24, 0]];
g.save();
g.translate(0, -1.15);
for (const [x, s, k] of pots) e.lib.potBody(g, x, s, k);
g.restore();
e.layer('leaves', { pivot: [4.5, -1.15], wind: { strength: 0.05, gust: 0.5 }, box: [0.8, -2.0, 7.6, -1.1] }, g => {
  g.translate(0, -1.15);
  pots.forEach(([x, s, k], i) => e.lib.potLeaves(g, x, s, k, 50 + i * 7));
});
