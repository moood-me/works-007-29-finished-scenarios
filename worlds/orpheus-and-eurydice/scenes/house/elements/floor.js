// The hall's floor from above (x across −4.7 … 4.7, y toward the viewer; it runs from 2 m ahead to 13.5, under the
// doorway and out onto the threshold of the meadow): big flags of grey stone, worn smooth, their joints dark, each its
// own shade.
const W = 9.4, D = 11.5;
g.fillStyle = '#3c3530';
g.fillRect(-W / 2, -D / 2, W, D);
for (let r = 0, y = -D / 2; y < D / 2; r++) {
  const h = 0.7 + 0.35 * e.anim.hash(r, 31);
  for (let b = 0, x = -W / 2 - e.anim.hash(r, 32) * 0.6; x < W / 2; b++) {
    const w = 0.8 + 0.6 * e.anim.hash(r * 17 + b, 33), t = e.anim.hash(r * 17 + b, 34);
    g.fillStyle = t > 0.66 ? '#7d746a' : t > 0.33 ? '#756c62' : '#6c645b';
    g.fillRect(x + 0.02, y + 0.02, w - 0.04, h - 0.04);
    x += w;
  }
  y += h;
}
