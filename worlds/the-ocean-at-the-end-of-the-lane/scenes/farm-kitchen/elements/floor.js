// The flagstone floor, seen from above (x -2.9...2.9, y -2.75 at the back wall ... 2.75 at the front): rows of worn
// stones of uneven sizes in greys and buffs, dark joints between, a little paler in the middle where feet go.
const W = 2.9, D = 2.75;
g.fillStyle = '#4c443c';
g.fillRect(-W, -D, 2 * W, 2 * D);
const tones = ['#a39a8c', '#ab9f8c', '#988f83', '#b0a794', '#9e9180', '#938c80'];
for (let y = -D; y < D;) {
  const h = 0.45 + 0.3 * e.rnd();
  for (let x = -W - 0.3 * e.rnd(); x < W;) {
    const w = 0.5 + 0.5 * e.rnd();
    g.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
    g.beginPath();
    g.roundRect(x + 0.012, y + 0.012, w - 0.024, h - 0.024, 0.04);
    g.fill();
    const p = g.createRadialGradient(x + w / 2, y + h / 2, 0, x + w / 2, y + h / 2, Math.max(w, h) * 0.5);
    p.addColorStop(0, 'rgba(206, 198, 182, 0.25)');
    p.addColorStop(1, 'rgba(206, 198, 182, 0)');
    g.fillStyle = p;
    g.fillRect(x, y, w, h);
    x += w;
  }
  y += h;
}
