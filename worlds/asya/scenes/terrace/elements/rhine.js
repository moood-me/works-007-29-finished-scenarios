// The Rhine, seen from above (a plane: x across, y toward the viewer, metres): from this bank's foot under the slope
// to Z.'s embankment. Its own colour under the mirror — a clear evening blue, lighter where the current runs in long
// streaks, greener in the shallows along the banks; toward the frame's sides it goes over to the paper.
const L = e.lib;
const W = 4600;
const H = 455;
const D = 1015;
g.fillStyle = "#86a8bf";
g.fillRect(-W, -H, 2 * W, 2 * H);
// the shallows along both banks
const near = g.createLinearGradient(0, H - 60, 0, H);
near.addColorStop(0, "rgba(124, 154, 150, 0)");
near.addColorStop(1, "rgba(124, 154, 150, 0.8)");
g.fillStyle = near;
g.fillRect(-W, H - 60, 2 * W, 60);
const far = g.createLinearGradient(0, -H, 0, -H + 40);
far.addColorStop(0, "rgba(130, 150, 130, 0.8)");
far.addColorStop(1, "rgba(130, 150, 130, 0)");
g.fillStyle = far;
g.fillRect(-W, -H, 2 * W, 40);
// the current: long light streaks along the river
for (let i = 0; i < 70; i++) {
  const y = -H + 2 * H * L.rnd(i, 61);
  const x = -W + 2 * W * L.rnd(i, 63);
  g.fillStyle = i % 2 ? "rgba(178, 202, 216, 0.55)" : "rgba(108, 140, 166, 0.45)";
  g.fillRect(x, y, 300 + 900 * L.rnd(i, 65), 2 + 5 * L.rnd(i, 67));
}
// toward the sides of the frame: paper (by where each patch is seen: across over its distance)
for (let y = -H; y < H; y += 35) {
  const d = D - (y + 17.5);
  const grd = g.createLinearGradient(-W, 0, W, 0);
  for (let i = 0; i <= 40; i++) {
    const x = -W + (2 * W * i) / 40;
    grd.addColorStop(i / 40, L.paper(L.edge(x / d)));
  }
  g.fillStyle = grd;
  g.fillRect(-W, y, 2 * W, 35.5);
}
