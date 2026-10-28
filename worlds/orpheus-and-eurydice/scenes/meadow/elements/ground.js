// The meadow from above (x across, y toward the viewer; metres from the plane's middle, 150 m ahead): dark grass, a
// cold green going grey-blue, in soft patches; near the viewer short strokes of blades, lighter and darker, so the grass
// reads close (far off the patches are enough).
const W = 600, D = 300;
g.fillStyle = '#34463f';
g.fillRect(-W / 2, -D / 2, W, D);
// patches, large and soft, over all of it
for (let i = 0; i < 160; i++) {
  const r = 6 + 30 * e.anim.hash(i, 13), x = -W / 2 + r + (W - 2 * r) * e.anim.hash(i, 11), y = -D / 2 + r + (D - 2 * r) * e.anim.hash(i, 12);
  const c = g.createRadialGradient(x, y, 0, x, y, r);
  const col = e.anim.hash(i, 14) > 0.5 ? '58,74,68' : '38,52,50';
  c.addColorStop(0, `rgba(${col},0.55)`);
  c.addColorStop(1, `rgba(${col},0)`);
  g.fillStyle = c;
  g.fillRect(x - r, y - r, 2 * r, 2 * r);
}
// blades near the viewer: the nearer 30 m, 40 m across
const Y1 = D / 2, Y0 = D / 2 - 30;
for (let i = 0; i < 4200; i++) {
  const far = e.anim.hash(i, 15), y = Y1 - (Y1 - Y0) * far ** 1.4, x = -40 + 80 * e.anim.hash(i, 16);
  const len = 0.05 + 0.1 * e.anim.hash(i, 17), lean = (e.anim.hash(i, 18) - 0.5) * 0.06;
  g.strokeStyle = e.anim.hash(i, 19) > 0.5 ? 'rgba(84,104,92,0.7)' : 'rgba(30,42,40,0.7)';
  g.lineWidth = 0.012 + 0.03 * far;
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x + lean, y - len);
  g.stroke();
}
