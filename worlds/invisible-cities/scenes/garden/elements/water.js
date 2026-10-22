// The night water from under the terrace to the horizon: a deep blue under the mirror (what it shows — the far
// lights, the lamps — is the mirror's, its glints the ripple's), and the moon's path on it: a layer of pale dabs
// along the line toward the moon (across = −0.213 × distance), sparse and long near the horizon, shimmering.
// The plane's origin is its centre at distance 1005; y toward the viewer.
g.fillStyle = '#2b3d68';
g.fillRect(-3000, -1000, 6000, 2000);
e.layer('moon_path', { shimmer: 0.5, box: [-520, -1000, 120, 990] }, (g) => {
  for (let k = 0; k < 70; k++) {
    const d = 18 * 1.07 ** k;
    if (d > 1990) break;
    const n = 2 + Math.floor(e.rnd() * 3);
    for (let i = 0; i < n; i++) {
      const spread = 0.02 + 0.03 * (1 - k / 70);
      const x = -0.213 * d + (e.rnd() - 0.5) * d * spread * 2;
      const w = d * (0.004 + e.rnd() * 0.01);
      const h = d * 0.0035;
      const y = 1005 - d + (e.rnd() - 0.5) * d * 0.02;
      g.fillStyle = `rgba(214, 224, 255, ${0.35 + e.rnd() * 0.45})`;
      g.fillRect(x - w / 2, y - h / 2, w, h);
    }
  }
});
