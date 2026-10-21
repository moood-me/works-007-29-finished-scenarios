// The giant's cairn: a round mound of piled grey stones, 2.4 m high — a form (kit.lump), its painting the mound
// unrolled: the way round (16.3 m) across, the slope from its top (y −3.9) down to the rim (y 0). Stones smaller and
// lighter toward the top, where travellers lay theirs; dark gaps between; lichen on the old ones low down
const r = e.lib.rnd(5), [L, T, R] = e.area;
g.fillStyle = '#57544e';
g.fillRect(L, T, R - L, -T);
const greys = ['#9a978c', '#85827a', '#a7a397', '#76736b', '#8e8b82', '#b0ada2'];
for (let row = 0; row < 15; row++) {
  const v = row / 14, y = T + (v * 0.96 + 0.02) * -T, size = 0.12 + 0.24 * v, n = Math.ceil((R - L) / (size * 1.6));
  for (let i = 0; i < n; i++) {
    const x = L + (i + 0.5 + (r() - 0.5) * 0.5 + (row % 2) * 0.5) * ((R - L) / n);
    g.fillStyle = greys[Math.floor(r() * greys.length)];
    e.lib.stone(g, x, y + (r() - 0.5) * size * 0.4, size * (0.75 + r() * 0.5), size * (0.5 + r() * 0.3), (r() - 0.5) * 0.8, r);
  }
}
// lichen, low down on the old stones
g.fillStyle = 'rgba(170,168,118,0.55)';
for (let i = 0; i < 90; i++) {
  const x = L + r() * (R - L), y = T * (0.05 + r() * 0.45);
  g.beginPath();
  g.ellipse(x, y, 0.05 + r() * 0.1, 0.03 + r() * 0.05, r() * 3, 0, Math.PI * 2);
  g.fill();
}
const rim = [];
for (let i = 0; i < 24; i++) {
  const a = (i / 24) * Math.PI * 2;
  rim.push([Math.cos(a) * 2.6, -Math.sin(a) * 2.6]);
}
e.form(e.kit.lump(rim, 2.4, 3), { closed: 'u', ground: '#57544e' });
e.at(0, T + 0.05, 'top');
