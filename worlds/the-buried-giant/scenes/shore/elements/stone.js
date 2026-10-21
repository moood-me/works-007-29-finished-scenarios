// The flat stone at the water's edge by the boat's bow, where the candle stands: a broad low grey stone, lichened —
// a mound (kit.lump); the painting the way round its rim by its slope from top to rim
const [l, t, rr, bt] = e.area, w = rr - l, h = bt - t, r = e.lib.rnd(91);
g.fillStyle = '#8f8b84';
g.fillRect(l, t, w, h);
for (let i = 0; i < 50; i++) {
  g.fillStyle = ['#9c978f', '#7f7b75', '#a6a198', '#868279'][Math.floor(r() * 4)];
  e.lib.stone(g, l + r() * w, t + r() * h, 0.05 + r() * 0.12, 0.03 + r() * 0.06, r() * 3, r);
}
g.fillStyle = 'rgba(176,170,110,0.55)';
for (let i = 0; i < 22; i++) e.lib.stone(g, l + r() * w, t + r() * h * 0.6, 0.03 + r() * 0.05, 0.02 + r() * 0.04, r() * 3, r);
// wet and darker at its foot
g.fillStyle = 'rgba(70,64,58,0.45)';
g.fillRect(l, bt - h * 0.18, w, h * 0.18);
const rim = [];
for (let i = 0; i < 14; i++) {
  const a = (i / 14) * Math.PI * 2, k = 1 + 0.08 * Math.sin(a * 3 + 1);
  rim.push([Math.cos(a) * 0.7 * k, -Math.sin(a) * 0.48 * k]);
}
e.form(e.kit.lump(rim, 0.36, 2), { closed: 'u', ground: '#8f8b84' });
e.at(0, -0.36, 'top');
