// The shop's left wall (facing into the shop; its x runs away from the viewer: x 0 at distance 9.3): pale plaster,
// the skirting, a long shelf with a few small boxed things on it.
g.fillStyle = '#e6dccb';
g.fillRect(-3.26, -3.22, 6.58, 3.24);
g.fillStyle = '#d6cbb7';
g.fillRect(-3.32, -0.14, 6.64, 0.16);
g.fillStyle = '#efe7d9';
g.fillRect(-2.6, -1.62, 4.8, 0.05);
const colors = ['#9fb0b8', '#d9c7a6', '#b8a99a', '#e9e2d4'];
let x = -2.4;
while (x < 2.0) {
  const w = 0.18 + e.rnd() * 0.22;
  const h = 0.15 + e.rnd() * 0.18;
  g.fillStyle = colors[Math.floor(e.rnd() * colors.length)];
  g.fillRect(x, -1.62 - h, w, h);
  x += w + 0.15 + e.rnd() * 0.3;
}
