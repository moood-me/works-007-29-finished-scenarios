// The hospital blanket thrown back in a heap at the bed's foot (a form: a low mound, 0.7 m across by 0.8 m deep,
// 0.16 m high): pale blue-grey wool, a darker band along its edge, its folds. Its painting is the mound unrolled — round
// its rim left to right, from its top down.
g.fillStyle = '#7090c0';
g.fillRect(-1.5, -0.5, 3.0, 0.51);
g.fillStyle = '#4f6c9c';
g.fillRect(-1.5, -0.14, 3.0, 0.05);
g.fillStyle = 'rgba(70,86,110,0.3)';
for (let i = 0; i < 9; i++) {
  const x = -1.4 + e.rnd() * 2.8;
  g.fillRect(x, -0.48, 0.015, 0.2 + e.rnd() * 0.25);
}
const rim = [];
for (let i = 0; i < 24; i++) {
  const t = (i / 24) * Math.PI * 2,
    c = Math.cos(t),
    s = Math.sin(t);
  rim.push([0.36 * Math.sign(c) * Math.abs(c) ** 0.25, -0.42 * Math.sign(s) * Math.abs(s) ** 0.6]);
}
e.form(e.kit.lump(rim, 0.08, 3), { closed: 'u', ground: '#7090c0' });
