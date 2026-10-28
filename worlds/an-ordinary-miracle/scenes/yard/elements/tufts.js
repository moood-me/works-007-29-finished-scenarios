// A tuft of tall meadow grass with a few flowers at its top (white, yellow, blue), bending in the wind about its foot,
// gusting — the frame's plainest sign of the wind; the copies stand at the yard's near edges and along the fence.
const L = e.lib, BLADES = ['#6f9a45', '#87ab52', '#5d8a3e', '#9cb95c'], HEADS = ['#f7f3ea', '#f4d34a', '#6a86d6'];
e.layer('blades', { pivot: [0, 0], wind: { strength: 0.7, gust: 0.7, scale: 6 }, box: [-0.36, -0.62, 0.36, 0.02] }, (g) => {
  for (let i = 0; i < 20; i++) {
    const a = (L.rnd(i, 211) - 0.5) * 0.9, h = 0.22 + 0.32 * L.rnd(i, 212), x0 = (L.rnd(i, 213) - 0.5) * 0.14;
    const tx = x0 + Math.sin(a) * h, ty = -Math.cos(a) * h;
    g.fillStyle = BLADES[i % BLADES.length];
    g.beginPath();
    g.moveTo(x0 - 0.014, 0);
    g.quadraticCurveTo(x0 + (tx - x0) * 0.4, ty * 0.6, tx, ty);
    g.quadraticCurveTo(x0 + (tx - x0) * 0.5, ty * 0.5, x0 + 0.014, 0);
    g.closePath();
    g.fill();
    if (i % 5 === 0) {
      g.fillStyle = HEADS[(i / 5) % HEADS.length];
      g.beginPath();
      g.arc(tx, ty, 0.03, 0, Math.PI * 2);
      g.fill();
    }
  }
});
