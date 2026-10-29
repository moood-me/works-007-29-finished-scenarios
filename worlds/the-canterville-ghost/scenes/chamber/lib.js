// What the secret chamber's walls share: old rough stone, courses of uneven blocks laid in grey mortar, some darker
// with damp, here and there a stain running down. Metres, y down, from the foot of a wall. Painted in its own colour
// (a cool grey-brown): the moon and the candles make the night.
const STONE = ['#7a7166', '#6f675d', '#837a6d', '#6a6258', '#77705f'];
const MORTAR = '#4e4943';

// a stretch of wall from x0 to x1, `top` metres high; `seed` keeps each wall its own
function stone(g, x0, x1, top, seed) {
  let s = seed * 7919 + 13;
  const r = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  g.fillStyle = MORTAR;
  g.fillRect(x0, -top - 0.02, x1 - x0, top + 0.04);
  let row = 0;
  for (let y = 0; y > -top - 0.3; row++) {
    const h = 0.24 + r() * 0.12;
    let x = x0 - r() * 0.4;
    while (x < x1) {
      const w = 0.32 + r() * 0.42;
      g.fillStyle = STONE[Math.floor(r() * STONE.length)];
      g.fillRect(x + 0.015, y - h + 0.015, w - 0.03, h - 0.03);
      // a darker face where the damp has got in, low down
      if (r() < 0.25 + 0.3 * (row < 2)) {
        g.fillStyle = 'rgba(52,56,50,0.35)';
        g.fillRect(x + 0.015, y - h + 0.015, w - 0.03, h - 0.03);
      }
      x += w;
    }
    y -= h;
  }
  // stains running down from the top
  for (let i = 0; i < (x1 - x0) * 0.8; i++) {
    const x = x0 + r() * (x1 - x0);
    const len = 0.5 + r() * 1.4;
    const grd = g.createLinearGradient(0, -top, 0, -top + len);
    grd.addColorStop(0, 'rgba(46,48,42,0.45)');
    grd.addColorStop(1, 'rgba(46,48,42,0)');
    g.fillStyle = grd;
    g.fillRect(x, -top, 0.06 + r() * 0.12, len);
  }
}

// a low round-headed arch from x0 to x1, its springing at y1 (negative) and its foot at 0: the path, for a cut or a fill
function arch(g, x0, x1, y1) {
  const m = (x0 + x1) / 2;
  const rx = (x1 - x0) / 2;
  g.beginPath();
  g.moveTo(x0, 0.02);
  g.lineTo(x0, y1);
  g.ellipse(m, y1, rx, rx * 0.8, 0, Math.PI, 0);
  g.lineTo(x1, 0.02);
  g.closePath();
}

return { stone, arch, MORTAR };
