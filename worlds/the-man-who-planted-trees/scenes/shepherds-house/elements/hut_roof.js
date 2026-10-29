// The hut's roof, its front slope from above (x along the ridge, y down toward the eave): grey stone slabs in
// overlapping rows (`hut`)
if (!e.state.hut) return;
g.fillStyle = "#5f564c";
g.fillRect(-1.95, -0.85, 3.9, 1.7);
const SLAB = ["#7b7166", "#867b6e", "#6f665c", "#8f8476", "#776c60"];
for (let y = -0.85; y < 0.85; y += 0.22) {
  let x = -1.95 - e.rnd() * 0.25;
  while (x < 1.95) {
    const wd = 0.28 + e.rnd() * 0.3;
    g.fillStyle = SLAB[Math.floor(e.rnd() * SLAB.length)];
    g.beginPath();
    g.roundRect(Math.max(x + 0.02, -1.95), y + 0.02, Math.min(wd - 0.04, 1.95 - x), 0.24 + e.rnd() * 0.04, 0.05);
    g.fill();
    x += wd;
  }
}
g.fillStyle = "#4e463e";
g.fillRect(-1.95, -0.85, 3.9, 0.08);
