// A plane tree along the right side of the square: a pale mottled trunk, a broad light-green crown that sways in the
// wind (layer `crown`), sun through its leaves
const A = e.anim;
g.fillStyle = '#b9b19c';
g.beginPath();
g.moveTo(-0.35, 0);
g.lineTo(-0.25, -4.2);
g.lineTo(0.25, -4.2);
g.lineTo(0.38, 0);
g.closePath();
g.fill();
g.fillStyle = '#9d9580';
for (let i = 0; i < 9; i++) {
  g.beginPath();
  g.ellipse(-0.15 + 0.3 * A.hash(i, 1), -0.4 - 3.6 * A.hash(i, 2), 0.1, 0.18, 0, 0, Math.PI * 2);
  g.fill();
}
g.strokeStyle = '#a69e88';
g.lineWidth = 0.16;
g.lineCap = 'round';
for (const [x, y] of [[-1.8, -6], [1.6, -6.4], [0.2, -7.4]]) {
  g.beginPath();
  g.moveTo(0, -4);
  g.quadraticCurveTo(x * 0.3, -5, x, y);
  g.stroke();
}
e.layer('crown', { pivot: [0, -4], wind: { strength: 0.18, gust: 0.5 } }, g => {
  for (const [shade, k] of [['#5f7d3f', 0], ['#76944b', 1], ['#93ae5e', 2], ['#b2c77a', 3]]) {
    g.fillStyle = shade;
    for (let i = 0; i < 46; i++) {
      const n = i + k * 71, a = A.hash(n, 3) * Math.PI * 2, r = Math.sqrt(A.hash(n, 4)) * (3.6 - 0.4 * k);
      const x = Math.cos(a) * r * 1.1 - 0.25 * k, y = -7.2 + Math.sin(a) * r * 0.62 - 0.25 * k;
      g.beginPath();
      g.ellipse(x, y, 0.55 + 0.4 * A.hash(n, 5), 0.42 + 0.3 * A.hash(n, 6), A.hash(n, 7) * 3, 0, Math.PI * 2);
      g.fill();
    }
  }
});
