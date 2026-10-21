// A laurel by the walk at the right, near: a round bush of glossy leaves with a few cream wild roses; it stirs in the
// wind about its foot
const L = e.lib, r = L.rand(97);
e.layer('bush', { wind: { strength: 0.05, gust: 0.4, scale: 4 }, pivot: [0, 0.1] }, g2 => {
  L.foliage(g2, [[0, -1.0, 0.95], [-0.8, -0.6, 0.7], [0.9, -0.7, 0.8], [0.2, -1.7, 0.7], [-0.5, -1.5, 0.6], [1.3, -1.4, 0.55], [-1.2, -0.25, 0.45], [1.6, -0.3, 0.5]],
    ['#4e6b4a', '#67855a', '#8ca777'], r, 0.045);
  const roses = new Path2D();
  for (const [x, y] of [[-0.4, -1.6], [0.6, -1.2], [1.1, -1.7], [-0.9, -0.9], [0.2, -0.5], [1.4, -0.8]]) {
    roses.moveTo(x + 0.045, y);
    roses.arc(x, y, 0.045, 0, Math.PI * 2);
  }
  g2.fillStyle = '#f3ead2';
  g2.fill(roses);
});
