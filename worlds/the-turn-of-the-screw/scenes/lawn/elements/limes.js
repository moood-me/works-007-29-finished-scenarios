// A lime of the avenue: a straight grey trunk, the crown a tall oval of leaf — a solid mass of the darker green, its
// clumps over it, each shaded below and lit on its top (metres: x across from the trunk, y up from the
// ground); the crown stirs in the evening air.
g.fillStyle = '#625749';
g.beginPath();
g.moveTo(-0.32, 0);
g.lineTo(-0.2, -7);
g.lineTo(0.2, -7);
g.lineTo(0.34, 0);
g.closePath();
g.fill();
g.strokeStyle = '#625749';
g.lineCap = 'round';
for (const [x2, y2] of [[-1.6, -9.5], [1.4, -10], [-0.6, -12], [0.8, -12.5]]) {
  g.lineWidth = 0.14;
  g.beginPath();
  g.moveTo(0, -6.5);
  g.lineTo(x2, y2);
  g.stroke();
}
e.layer('crown', { pivot: [0, -6.5], wind: { strength: 0.18, gust: 0.5 }, box: [-5, -18, 5, -4.5] }, c => {
  // the mass: lobes round the oval's edge, filled as one
  c.fillStyle = '#41592c';
  c.beginPath();
  c.ellipse(0, -11.6, 3.5, 5.4, 0, 0, Math.PI * 2);
  c.fill();
  for (let i = 0; i < 26; i++) {
    const a = (i / 26) * Math.PI * 2 + e.rnd() * 0.2;
    c.beginPath();
    c.arc(Math.cos(a) * 3.3, -11.6 + Math.sin(a) * 5.2, 0.7 + e.rnd() * 0.5, 0, Math.PI * 2);
    c.fill();
  }
  // the clumps of leaf over it, back to front and top down: each a clump in its shade, its body and the light on its
  // top — the crown's lower half in its own shade, its top where most of the sky's light falls
  const clumps = [];
  for (let i = 0; i < 260; i++) {
    const a = e.rnd() * Math.PI * 2;
    const r = Math.sqrt(e.rnd());
    clumps.push([Math.cos(a) * r * 3.4, -11.6 + Math.sin(a) * r * 5.3, 0.3 + e.rnd() * 0.3, e.rnd(), r]);
  }
  clumps.sort((p, q) => q[4] - p[4] || p[1] - q[1]);
  for (const [x, y, w, t] of clumps) {
    const up = Math.max(0, Math.min(1, (-y - 7) / 10));
    const tone = Math.min(2, Math.floor(up * 2.2 + t * 0.8));
    const [shade, body, lit] = [['#2f4421', '#3d5529', '#4b6632'], ['#3a5227', '#4a6630', '#5d7c3c'], ['#43602c', '#57773a', '#6e8f47']][tone];
    c.fillStyle = shade;
    c.beginPath();
    c.ellipse(x + 0.05, y + w * 0.35, w * 1.05, w * 0.8, 0, 0, Math.PI * 2);
    c.fill();
    c.fillStyle = body;
    c.beginPath();
    c.ellipse(x, y, w, w * 0.78, 0, 0, Math.PI * 2);
    c.fill();
    c.fillStyle = lit;
    c.beginPath();
    c.ellipse(x - w * 0.1, y - w * 0.3, w * 0.62, w * 0.42, 0, 0, Math.PI * 2);
    c.fill();
  }
});
