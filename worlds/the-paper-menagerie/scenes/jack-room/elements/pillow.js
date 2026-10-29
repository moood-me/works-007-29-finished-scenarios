// The pillow at the bed's head (a form: a mound over its rounded outline, 0.62 m across by 0.38 m deep, 0.12 m high):
// a cream pillowcase with a small blue print. Its painting is the mound unrolled — round its rim left to right, from
// its top down. Gone once the room is emptied (`packed`: nothing painted, no form).
if (!e.state.packed) {
  g.fillStyle = '#f2eee2';
  g.fillRect(-0.82, -0.27, 1.64, 0.28);
  g.fillStyle = 'rgba(110,140,180,0.5)';
  for (let i = 0; i < 60; i++) g.fillRect(-0.8 + e.rnd() * 1.6, -0.26 + e.rnd() * 0.25, 0.008, 0.008);
  g.fillStyle = '#ddd6c6';
  g.fillRect(-0.82, -0.03, 1.64, 0.012);
  const rim = [];
  for (let i = 0; i < 24; i++) {
    const t = (i / 24) * Math.PI * 2,
      c = Math.cos(t),
      s = Math.sin(t);
    rim.push([0.31 * Math.sign(c) * Math.abs(c) ** 0.5, -0.19 * Math.sign(s) * Math.abs(s) ** 0.5]);
  }
  e.form(e.kit.lump(rim, 0.12, 1), { closed: 'u', ground: '#f2eee2' });
}
