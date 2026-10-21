// A laurel by the walk at the right edge, a step farther than the people and low (its top under the eye, so the
// bridge and the water stand clear above it): a round bush of glossy leaves with a few cream wild roses; it stirs in
// the wind about its foot. In 4:3 only its left side is seen
const L = e.kit.brush, px = L.px(e), r = L.rand(97);
e.layer('bush', { wind: { strength: 0.05, gust: 0.4, scale: 4 }, pivot: [0, 0.1] }, g2 => {
  L.foliage(g2, [[0, -0.75, 0.6], [-0.6, -0.45, 0.45], [0.6, -0.55, 0.5], [0.15, -1.15, 0.42], [-0.35, -1.0, 0.38], [0.9, -1.0, 0.36], [-0.95, -0.2, 0.32], [1.1, -0.2, 0.34]],
    ['#4e6b4a', '#67855a', '#8ca777'], r, 0.04, 1.6 * px);
  const roses = new Path2D();
  for (const [x, y] of [[-0.3, -1.1], [0.4, -0.85], [0.75, -1.15], [-0.65, -0.6], [0.15, -0.35], [1.0, -0.55]]) {
    roses.moveTo(x + 0.04, y);
    roses.arc(x, y, 0.04, 0, Math.PI * 2);
  }
  g2.fillStyle = '#f3ead2';
  g2.fill(roses);
});
