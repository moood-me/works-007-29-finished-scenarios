// The town's lit windows — the same blocks as town's (lib's town), painted only where a window is lit, glowing as lit
// windows do at dusk: warm yellows and a few cool office whites; the tower's floors lit in a broken pattern, the red
// light on its mast. The near row's windows hide the far row's where they stand before them.
const lit = ([x, w, h], share, seed) => {
  for (let y = -h + 2, r = 0; y < -1; y += 3, r++)
    for (let xx = x - w / 2 + 1.2, c = 0; xx < x + w / 2 - 1.2; xx += 2.4, c++) {
      const n = seed * 1000 + r * 40 + c;
      if (e.anim.hash(n, 7) > share) continue;
      g.fillStyle = e.anim.hash(n, 8) < 0.8 ? '#ffd58e' : '#e9eef0';
      g.fillRect(xx, y, 1.1, 1.4);
    }
};
const cover = ([x, w, h]) => {
  g.save();
  g.globalCompositeOperation = 'destination-out';
  g.fillRect(x - w / 2, -h, w, h);
  g.restore();
};
e.lib.town.far.forEach((b, i) => lit(b, 0.22, i));
cover([-28, 16, 44]);
for (let y = -43, r = 0; y < -1; y += 1.1, r++) {
  for (let xx = -31.5, c = 0; xx < -20.5; xx += 1.4, c++) {
    if (e.anim.hash(r * 20 + c, 9) > 0.3) continue;
    g.fillStyle = '#eef2e8';
    g.fillRect(xx, y, 1.2, 0.5);
  }
}
e.lib.town.near.forEach(b => cover(b));
e.lib.town.near.forEach((b, i) => lit(b, 0.3, 100 + i));
g.fillStyle = '#ff5a48';
g.beginPath();
g.arc(-28, -49, 0.35, 0, Math.PI * 2);
g.fill();
e.light(-28, -49, 0.8, '#ff6a50', 0.7, 'mast');
