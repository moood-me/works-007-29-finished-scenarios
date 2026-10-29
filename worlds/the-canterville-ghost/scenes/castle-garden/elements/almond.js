// The old almond tree by the churchyard railing (about 5 m): long dead — a gnarled grey trunk leaning a little toward
// the churchyard, three crooked limbs, and above them a wide net of bare dry twigs, a broken stub here and there; the
// twigs a layer stirring very slightly in the wind. When it blossoms (key `almond`: "blossom") its twigs are thick
// with white and pink flowers. Its points: `almond#trunk`, `almond#crown`.
const BARK = '#54483f';
const BARK_DARK = '#3a312b';
const BARK_LIGHT = '#6e6258';
const blossom = e.state.almond === 'blossom';
// the tree's shape, worked out once: segments [x0, y0, x1, y1, width, depth, bend] and the twigs' tips
const segs = [];
const tips = [];
const grow = (x, y, ang, len, w, depth) => {
  const a = Math.max(-1.35, Math.min(1.35, ang));
  const x1 = x + Math.sin(a) * len;
  const y1 = y - Math.cos(a) * len;
  segs.push([x, y, x1, y1, w, depth, (e.rnd() - 0.5) * len * 0.3]);
  if (depth >= 6 || len < 0.16) {
    tips.push([x1, y1]);
    return;
  }
  const n = depth < 2 ? 3 : e.rnd() < 0.35 ? 3 : 2;
  for (let i = 0; i < n; i++) {
    const spread = depth < 2 ? 0.6 : 0.5;
    grow(x1, y1, a * 0.9 + (i - (n - 1) / 2) * spread + (e.rnd() - 0.5) * 0.4, len * (0.68 + e.rnd() * 0.14), w * 0.6, depth + 1);
  }
};
for (const [ang, len] of [[-0.8, 1.1], [-0.12, 1.0], [0.62, 1.05]]) grow(-0.18, -1.55, ang, len, 0.17, 1);
const stroke = (c, s, color, k = 1) => {
  c.strokeStyle = color;
  c.lineWidth = s[4] * k;
  c.beginPath();
  c.moveTo(s[0], s[1]);
  c.quadraticCurveTo((s[0] + s[2]) / 2 + s[6], (s[1] + s[3]) / 2, s[2], s[3]);
  c.stroke();
};
g.lineCap = 'round';
// the trunk: wide at the root, twisted, leaning
g.fillStyle = BARK;
g.beginPath();
g.moveTo(-0.42, 0.08);
g.bezierCurveTo(-0.22, -0.3, -0.05, -0.8, -0.3, -1.6);
g.lineTo(-0.02, -1.62);
g.bezierCurveTo(0.12, -0.9, 0.12, -0.35, 0.36, 0.08);
g.closePath();
g.fill();
for (let i = 0; i < 7; i++) {
  const x = -0.2 + i * 0.07;
  g.strokeStyle = i % 2 ? BARK_DARK : BARK_LIGHT;
  g.lineWidth = 0.025 + e.rnd() * 0.02;
  g.beginPath();
  g.moveTo(x * 1.4, 0.05);
  g.bezierCurveTo(x * 0.8, -0.6, x * 0.9 - 0.1, -1.1, x * 0.6 - 0.16, -1.55);
  g.stroke();
}
// a hollow in the trunk, and the limbs
g.fillStyle = BARK_DARK;
g.beginPath();
g.ellipse(-0.06, -0.85, 0.05, 0.11, 0.2, 0, Math.PI * 2);
g.fill();
for (const s of segs) if (s[5] <= 2) stroke(g, s, BARK);
for (const s of segs) if (s[5] <= 2) stroke(g, s, BARK_LIGHT, 0.25);
e.layer('twigs', { pivot: [-0.18, -1.55], wind: { strength: 0.03, gust: 0.4 } }, c => {
  c.lineCap = 'round';
  for (const s of segs) if (s[5] > 2) stroke(c, s, s[5] > 4 ? '#62564c' : BARK);
  // broken stubs
  c.strokeStyle = BARK_DARK;
  c.lineWidth = 0.04;
  for (let i = 0; i < 5; i++) {
    const s = segs[3 + Math.floor(e.rnd() * 12)];
    c.beginPath();
    c.moveTo(s[2], s[3]);
    c.lineTo(s[2] + (e.rnd() - 0.5) * 0.3, s[3] - 0.15);
    c.stroke();
  }
  if (!blossom) return;
  // the blossom: clusters of five-petalled white and pale pink flowers along the outer twigs and at their tips
  for (const s of segs) {
    if (s[5] < 3) continue;
    const n = s[5] > 4 ? 4 : 2;
    for (let i = 0; i < n; i++) {
      const u = e.rnd();
      const x = s[0] + (s[2] - s[0]) * u + (e.rnd() - 0.5) * 0.08;
      const y = s[1] + (s[3] - s[1]) * u + (e.rnd() - 0.5) * 0.08;
      c.fillStyle = e.rnd() < 0.3 ? '#f0c4cc' : '#faf6f2';
      c.beginPath();
      c.arc(x, y, 0.05 + e.rnd() * 0.04, 0, Math.PI * 2);
      c.fill();
    }
  }
  for (const [x, y] of tips) {
    for (let i = 0; i < 4; i++) {
      c.fillStyle = e.rnd() < 0.3 ? '#f0c4cc' : '#fbf8f4';
      c.beginPath();
      c.arc(x + (e.rnd() - 0.5) * 0.16, y + (e.rnd() - 0.5) * 0.16, 0.05 + e.rnd() * 0.05, 0, Math.PI * 2);
      c.fill();
    }
    c.fillStyle = '#c4707e';
    c.beginPath();
    c.arc(x, y, 0.018, 0, Math.PI * 2);
    c.fill();
  }
});
e.at(-0.1, -1.0, 'trunk');
e.at(-0.2, -3.2, 'crown');
