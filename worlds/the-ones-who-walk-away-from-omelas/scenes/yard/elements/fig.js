// The fig tree in the yard's far left corner: a smooth grey trunk forking low, its broad lobed leaves in a heavy crown
// that moves in the morning air (layer `crown`), a few figs ripening among them
const A = e.anim;
g.strokeStyle = '#8f8a80';
g.lineCap = 'round';
g.lineWidth = 0.3;
g.beginPath();
g.moveTo(0, 0);
g.quadraticCurveTo(-0.1, -1.0, 0.05, -1.5);
g.stroke();
g.lineWidth = 0.16;
for (const [x, y] of [[-1.6, -3.4], [1.4, -3.6], [0.2, -4.2], [-0.6, -2.8]]) {
  g.beginPath();
  g.moveTo(0.05, -1.5);
  g.quadraticCurveTo(x * 0.4, -2.2, x, y);
  g.stroke();
}
e.layer('crown', { pivot: [0, -1.6], wind: { strength: 0.1, gust: 0.5 }, box: [-3.2, -5.8, 3.2, -1.6] }, g => {
  for (const [shade, k] of [['#405f30', 0], ['#4f7339', 1], ['#628845', 2], ['#78a052', 3]]) {
    for (let i = 0; i < 40; i++) {
      const n = i + k * 53, a = A.hash(n, 3) * Math.PI * 2, r = Math.sqrt(A.hash(n, 4)) * (2.7 - 0.3 * k);
      const x = Math.cos(a) * r * 1.05 - 0.18 * k, y = -3.6 + Math.sin(a) * r * 0.62 - 0.2 * k;
      const s = 0.3 + 0.16 * A.hash(n, 5), t = A.hash(n, 6) * Math.PI * 2;
      g.fillStyle = shade;
      // a fig leaf: three lobes about its stem
      for (const l of [-0.9, 0, 0.9]) {
        g.beginPath();
        g.ellipse(x + Math.cos(t + l) * s * 0.5, y + Math.sin(t + l) * s * 0.5, s * 0.42, s * 0.24, t + l, 0, Math.PI * 2);
        g.fill();
      }
    }
  }
  g.fillStyle = '#7b6a4a';
  for (let i = 0; i < 9; i++) {
    g.beginPath();
    g.ellipse(-1.8 + 3.6 * A.hash(i, 8), -2.4 - 2 * A.hash(i, 9), 0.06, 0.075, 0, 0, Math.PI * 2);
    g.fill();
  }
});
