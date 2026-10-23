// A clump of willows: thin stems, long narrow leaves in hanging masses; the masses (layer `leaves`) bend in the wind
// from the ground up
const A = e.anim;
g.strokeStyle = '#6a6146';
g.lineCap = 'round';
g.lineWidth = 0.06;
for (let i = 0; i < 7; i++) {
  const x = -1.6 + i * 0.5 + (A.hash(i, 1) - 0.5) * 0.3;
  g.beginPath();
  g.moveTo(x * 0.4, 0);
  g.quadraticCurveTo(x * 0.7, -1.6, x, -2.8 - A.hash(i, 2));
  g.stroke();
}
e.layer('leaves', { pivot: [0, 0], wind: { strength: 0.3, gust: 0.5 } }, g => {
  for (const [shade, k] of [['#566338', 0], ['#6f7c43', 1], ['#8a9752', 2], ['#a4ad66', 3]]) {
    g.fillStyle = shade;
    for (let i = 0; i < 70; i++) {
      const n = i + k * 97, x = (A.hash(n, 3) - 0.5) * 4.6 * (1 - 0.15 * k), y = -0.5 - A.hash(n, 4) * (3.3 - 0.25 * k) - 0.2 * k;
      g.beginPath();
      g.ellipse(x, y, 0.08 + 0.05 * A.hash(n, 5), 0.32 + 0.2 * A.hash(n, 6), (A.hash(n, 7) - 0.5) * 0.6, 0, Math.PI * 2);
      g.fill();
    }
  }
});
