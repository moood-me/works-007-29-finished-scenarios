// The pillow at the bed's head, plump, lying across the bed (a form: a mound over its rounded outline, 0.46 m across
// by 0.66 m deep, 0.15 m high): white cotton, its seam round the rim, a crease where her back was. Its painting is
// the mound unrolled — round its rim left to right, from its top down.
g.fillStyle = '#f3f4f0';
g.fillRect(-1.02, -0.35, 2.04, 0.36);
g.fillStyle = '#dcdfdc';
g.fillRect(-1.02, -0.04, 2.04, 0.015);
g.fillStyle = 'rgba(170,182,196,0.35)';
g.fillRect(-0.3, -0.33, 0.012, 0.26);
g.fillRect(0.5, -0.3, 0.01, 0.2);
const rim = [];
for (let i = 0; i < 24; i++) {
  const t = (i / 24) * Math.PI * 2,
    c = Math.cos(t),
    s = Math.sin(t);
  rim.push([0.23 * Math.sign(c) * Math.abs(c) ** 0.5, -0.33 * Math.sign(s) * Math.abs(s) ** 0.5]);
}
e.form(e.kit.lump(rim, 0.15, 1), { closed: 'u', ground: '#f3f4f0' });
