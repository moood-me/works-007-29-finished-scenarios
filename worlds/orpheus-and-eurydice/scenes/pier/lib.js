// What the pier's paintings share: a clump of reeds (the near ones by the shore and the thin ones out in the water are
// the same plant, painted by this), each blade and stem a wind layer of its own about its foot.
const reeds = (g, e, opts) => {
  const { n, tall, heads, seed } = opts;
  for (let i = 0; i < n; i++) {
    const x = (anim.hash(i, seed) - 0.5) * 0.7, h = tall * (0.6 + 0.4 * anim.hash(i, seed + 1));
    const lean = (anim.hash(i, seed + 2) - 0.5) * 0.25, leaf = anim.hash(i, seed + 3) > 0.45;
    e.layer(`r${i}`, { pivot: [x, 0], wind: { strength: 0.35 + 0.3 * anim.hash(i, seed + 4), gust: 0.4 }, box: [-0.5, -tall - 0.1, 0.5, 0.1] }, g => {
      g.strokeStyle = leaf ? '#56663f' : '#4c5a38';
      g.lineCap = 'round';
      if (leaf) {
        // a long blade, curving over at its tip
        g.fillStyle = '#5b6b42';
        g.beginPath();
        g.moveTo(x - 0.012, 0);
        g.quadraticCurveTo(x + lean * h * 0.6, -h * 0.75, x + lean * h * 1.6 + 0.05, -h * 0.92);
        g.quadraticCurveTo(x + lean * h * 0.6 + 0.012, -h * 0.72, x + 0.014, 0);
        g.closePath();
        g.fill();
      } else {
        g.lineWidth = 0.014;
        g.beginPath();
        g.moveTo(x, 0);
        g.quadraticCurveTo(x + lean * h * 0.4, -h * 0.5, x + lean * h, -h);
        g.stroke();
        if (heads && anim.hash(i, seed + 5) > 0.3) {
          // a cattail's brown head on its stem, the thin spike over it
          const hx = x + lean * h * 0.92, hy = -h * 0.9;
          g.save();
          g.translate(hx, hy);
          g.rotate(Math.atan2(lean, 1) * 0.9);
          g.fillStyle = '#5e3f28';
          g.beginPath();
          g.ellipse(0, 0, 0.028, 0.11, 0, 0, Math.PI * 2);
          g.fill();
          g.restore();
        }
      }
    });
  }
};

return { reeds };
