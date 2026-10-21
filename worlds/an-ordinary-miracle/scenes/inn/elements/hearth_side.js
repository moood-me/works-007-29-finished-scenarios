// The hearth's right side, from its front (5.0 m) back to the wall (6.2 m): the same rounded stones, a little
// darker, up to the ceiling.
const L = e.lib;
g.beginPath();
g.rect(-0.6, -4.5, 1.2, 4.52);
g.clip();
g.fillStyle = '#857c72';
g.fillRect(-0.6, -4.5, 1.2, 4.5);
for (let row = 0, y = 0; y > -4.5; row++) {
  const h = 0.16 + 0.08 * L.rnd(row, 221);
  for (let x = -0.6 - 0.2 * L.rnd(row, 222); x < 0.6; ) {
    const w = 0.22 + 0.2 * L.rnd(row * 31 + Math.round(x * 10), 223);
    g.fillStyle = ['#938a7e', '#7e766c', '#a0968a', '#8a8176'][Math.floor(L.rnd(row * 17 + Math.round(x * 13), 224) * 4)];
    g.beginPath();
    g.ellipse(x + w / 2, y - h / 2, w / 2 - 0.012, h / 2 - 0.012, 0, 0, Math.PI * 2);
    g.fill();
    x += w;
  }
  y -= h;
}
g.fillStyle = '#6e665e';
g.fillRect(-0.6, -0.3, 1.2, 0.3);
