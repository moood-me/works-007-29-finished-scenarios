// The school's roof, its front slope seen from above (metres, x along the ridge, y down the slope toward the eaves at
// y 1.45): old red tiles under the snow — the snow thick over it, thinning toward the eaves where the rows of tiles show
// and the snow hangs over the edge.
g.fillStyle = '#e7ebef';
g.fillRect(-6.4, -1.45, 12.8, 2.9);
// rows of tiles showing near the eaves and in a few bare streaks
for (let row = 0; row < 3; row++) {
  const y = 1.45 - 0.12 - row * 0.2;
  for (let x = -6.4; x < 6.4; x += 0.22) {
    if (e.rnd() < 0.25 + row * 0.25) continue;
    g.fillStyle = e.rnd() < 0.5 ? '#a5583e' : '#99503a';
    g.fillRect(x, y - 0.08, 0.2, 0.16);
  }
}
for (let i = 0; i < 6; i++) {
  const x = -6 + e.rnd() * 12;
  g.fillStyle = 'rgba(160,86,62,0.55)';
  g.fillRect(x, -1.2 + e.rnd() * 1.2, 0.2, 0.5 + e.rnd() * 0.8);
}
// the snow's lip along the eaves
g.fillStyle = '#f2f4f6';
g.fillRect(-6.4, 1.32, 12.8, 0.13);
