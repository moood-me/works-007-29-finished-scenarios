// The classroom's floor from above (metres; its middle at across 6, distance 7; y toward the viewer): the same red
// tiles as the room, more worn, pale paths along the rows of desks.
g.fillStyle = '#6a3c2a';
g.fillRect(-3.5, -5, 7, 10);
const T = 0.25;
for (let y = -5; y < 5; y += T) {
  for (let x = -3.5; x < 3.5; x += T) {
    const r = e.rnd();
    g.fillStyle = r < 0.35 ? '#a85e43' : r < 0.7 ? '#b06a4c' : '#9c5640';
    g.fillRect(x + 0.008, y + 0.008, T - 0.016, T - 0.016);
  }
}
g.fillStyle = 'rgba(222,178,148,0.2)';
g.fillRect(-3.5, -2.0, 7, 0.6);
g.fillRect(-3.5, -0.5, 7, 0.6);
