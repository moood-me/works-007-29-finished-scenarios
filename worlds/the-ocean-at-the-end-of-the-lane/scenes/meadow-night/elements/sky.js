// The moonlit night over the meadow: deep blue overhead, paler and greyer toward the land, the stars thinning toward
// it, and the moon high on the left in a soft halo (screen heights; the horizon about 0.42). Its disc is the point
// "sky#moon" the moonlight comes from.
const top = -0.35, bottom = 1.25, w = e.aspect;
const sky = g.createLinearGradient(0, top, 0, 0.46);
sky.addColorStop(0, '#141c3a');
sky.addColorStop(0.55, '#24315c');
sky.addColorStop(1, '#4d5a82');
g.fillStyle = sky;
g.fillRect(-0.3, top, w + 0.6, 0.46 - top);
g.fillStyle = '#4d5a82';
g.fillRect(-0.3, 0.46, w + 0.6, bottom - 0.46);
// the stars, fewer and fainter toward the land
g.fillStyle = '#f1eedf';
for (let k = 0; k < 320; k++) {
  const x = -0.3 + (w + 0.6) * e.rnd(), y = top + (0.42 - top) * Math.pow(e.rnd(), 1.4);
  const r = 0.0007 + 0.0017 * e.rnd() * e.rnd();
  g.globalAlpha = (0.3 + 0.7 * e.rnd()) * Math.min(1, Math.max(0, (0.4 - y) / 0.25));
  g.beginPath();
  g.arc(x, y, r, 0, Math.PI * 2);
  g.fill();
}
g.globalAlpha = 1;
// the moon: a wide pale halo, the disc, its faint seas
const mx = w * 0.24, my = 0.07, mr = 0.03;
const halo = g.createRadialGradient(mx, my, mr, mx, my, mr * 9);
halo.addColorStop(0, 'rgba(214, 220, 236, 0.45)');
halo.addColorStop(0.35, 'rgba(150, 166, 206, 0.16)');
halo.addColorStop(1, 'rgba(120, 140, 190, 0)');
g.fillStyle = halo;
g.fillRect(mx - mr * 9, my - mr * 9, mr * 18, mr * 18);
g.fillStyle = '#f4efdc';
g.beginPath();
g.arc(mx, my, mr, 0, Math.PI * 2);
g.fill();
g.fillStyle = 'rgba(190, 186, 168, 0.55)';
for (const [dx, dy, r] of [[-0.3, -0.25, 0.32], [0.25, -0.1, 0.24], [0.05, 0.35, 0.2], [-0.35, 0.3, 0.14]]) {
  g.beginPath();
  g.arc(mx + dx * mr, my + dy * mr, r * mr, 0, Math.PI * 2);
  g.fill();
}
e.at(mx, my, 'moon');
