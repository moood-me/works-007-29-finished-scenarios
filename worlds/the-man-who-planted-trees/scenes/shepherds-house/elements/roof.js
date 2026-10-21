// The roof's front slope from above (x along the ridge, y down the slope toward the eave): heavy grey-brown stone
// slabs laid in overlapping rows, ragged at the eave
g.fillStyle = "#5f564c";
g.fillRect(-3.3, -1.45, 6.6, 2.9);
const SLAB = ["#7b7166", "#867b6e", "#6f665c", "#8f8476", "#776c60"];
for (let y = -1.45; y < 1.45; y += 0.24) {
  let x = -3.3 - e.rnd() * 0.25;
  while (x < 3.3) {
    const w = 0.3 + e.rnd() * 0.35;
    g.fillStyle = SLAB[Math.floor(e.rnd() * SLAB.length)];
    g.beginPath();
    g.roundRect(Math.max(x + 0.02, -3.3), y + 0.02, Math.min(w - 0.04, 3.3 - x), 0.26 + e.rnd() * 0.05, 0.05);
    g.fill();
    x += w;
  }
}
// the ridge: a line of capping stones
g.fillStyle = "#4e463e";
g.fillRect(-3.3, -1.45, 6.6, 0.1);
