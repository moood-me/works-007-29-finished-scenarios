// His city, as Marco sees it: groups of small warm lights at the very edge of the water on the left, low on the
// horizon — not a map, his look. As many groups as `city` says (3 … 0): they go out with it.
const groups = [[-190, 9], [0, 12], [170, 8]];
const left = Math.round(e.state.city ?? 3);
g.fillStyle = '#18213d';
g.fillRect(-300, -2.5, 600, 3);
for (let k = 0; k < groups.length; k++) {
  if (k >= left) continue;
  const [cx, n] = groups[k];
  for (let i = 0; i < n; i++) {
    const x = cx + (e.rnd() - 0.5) * 46;
    const y = -1.5 - e.rnd() * e.rnd() * 9;
    g.fillStyle = '#ffd896';
    g.fillRect(x - 0.6, y - 0.6, 1.2, 1.2);
    e.light(x, y, 1.8 + e.rnd() * 1.6, '#ffcf88', 0.55 + e.rnd() * 0.4);
  }
  e.at(cx, -5, `group${k + 1}`);
}
e.at(0, -5, 'city');
