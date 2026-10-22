// The night water from under the terrace to the horizon: a deep blue under the mirror (what it shows — the moon, the
// far lights, the lamps — is the mirror's, its glints the ripple's), and the moon's path on it: pale dabs along the
// line toward the moon (across = −0.409 × distance), each as deep as it must be to be seen at its distance.
// The plane's origin is its centre at distance 1005; y toward the viewer.
g.fillStyle = '#2b3d68';
g.fillRect(-3000, -1000, 6000, 2000);
for (let k = 0; k < 70; k++) {
  const d = 18 * 1.07 ** k;
  if (d > 1990) break;
  const n = 2 + Math.floor(e.rnd() * 3);
  for (let i = 0; i < n; i++) {
    const spread = 0.02 + 0.03 * (1 - k / 70);
    const x = -0.409 * d + (e.rnd() - 0.5) * d * spread * 2;
    const w = d * (0.004 + e.rnd() * 0.01);
    const h = Math.min(d * 0.25, Math.max(0.1, d * d * 0.0005));
    const y = 1005 - d + (e.rnd() - 0.5) * d * 0.02;
    g.fillStyle = `rgba(214, 224, 255, ${0.55 + e.rnd() * 0.45})`;
    g.fillRect(x - w / 2, y - h / 2, w, h);
  }
}
