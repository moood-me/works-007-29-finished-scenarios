// The flagstone floor, seen from above (x −3.4…3.4, y −3.4 at the back wall … 3.4 at the front): rows of worn
// stones of uneven sizes in greys and buffs, dark joints between, a little smoother where feet go.
g.fillStyle = '#4c443c';
g.fillRect(-3.4, -3.4, 6.8, 6.8);
const tones = ['#9a9184', '#a39886', '#8f897e', '#a8a08f', '#958a79', '#8a8478'];
for (let y = -3.4; y < 3.4;) {
  const h = 0.45 + 0.3 * e.rnd();
  for (let x = -3.4 - 0.3 * e.rnd(); x < 3.4;) {
    const w = 0.5 + 0.5 * e.rnd();
    g.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
    g.beginPath();
    g.roundRect(x + 0.012, y + 0.012, w - 0.024, h - 0.024, 0.04);
    g.fill();
    // wear: a paler hollow in the middle of the stone
    const p = g.createRadialGradient(x + w / 2, y + h / 2, 0, x + w / 2, y + h / 2, Math.max(w, h) * 0.5);
    p.addColorStop(0, 'rgba(200, 192, 176, 0.25)');
    p.addColorStop(1, 'rgba(200, 192, 176, 0)');
    g.fillStyle = p;
    g.fillRect(x, y, w, h);
    x += w;
  }
  y += h;
}
