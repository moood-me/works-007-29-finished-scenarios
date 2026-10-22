// His city, as Marco sees it: groups of small warm lights at the very edge of the water on the left, climbing a
// little up the low shore — not a map, his look. As many groups as `city` says (3 … 0): they go out with it.
const groups = [[-110, 14], [0, 18], [105, 12]];
const left = Math.round(e.state.city ?? 3);
g.fillStyle = '#1a2340';
g.beginPath();
g.moveTo(-220, 1);
g.bezierCurveTo(-120, -6, -40, -16, 20, -15);
g.bezierCurveTo(80, -14, 140, -6, 220, 1);
g.closePath();
g.fill();
for (let k = 0; k < groups.length; k++) {
  if (k >= left) continue;
  const [cx, n] = groups[k];
  for (let i = 0; i < n; i++) {
    const x = cx + (e.rnd() - 0.5) * 40;
    const top = 13 * (1 - Math.min(1, Math.abs(x - 10) / 210));
    const y = -1 - e.rnd() * top;
    g.fillStyle = '#ffd896';
    g.fillRect(x - 0.8, y - 0.8, 1.6, 1.6);
    e.light(x, y, 3 + e.rnd() * 2.5, '#ffcf88', 0.8 + e.rnd() * 0.5);
  }
  e.at(cx, -6, `group${k + 1}`);
}
e.at(0, -6, 'city');
