// The Rhine 110 m below, seen from above (a plane: x across, y toward the viewer, metres; its middle 600 m right and
// 860 m ahead): from this bank's road to Z.'s embankment. Its own colour under the mirror — a clear blue, lighter
// where the current runs in long streaks, greener in the shallows along the banks; the ferry halfway over, its wake
// spreading behind it. Toward the frame's sides it goes over to the paper.
const L = e.lib;
const AX = 600;
const AD = 860;
const W = 3500;
const H = 440;
g.fillStyle = "#83a5be";
g.fillRect(-W, -H, 2 * W, 2 * H);
// the shallows along both banks
const near = g.createLinearGradient(0, H - 50, 0, H);
near.addColorStop(0, "rgba(124, 154, 150, 0)");
near.addColorStop(1, "rgba(124, 154, 150, 0.8)");
g.fillStyle = near;
g.fillRect(-W, H - 50, 2 * W, 50);
const far = g.createLinearGradient(0, -H, 0, -H + 40);
far.addColorStop(0, "rgba(130, 150, 130, 0.8)");
far.addColorStop(1, "rgba(130, 150, 130, 0)");
g.fillStyle = far;
g.fillRect(-W, -H, 2 * W, 40);
// the current: long light streaks along the river
for (let i = 0; i < 80; i++) {
  const y = -H + 2 * H * L.rnd(i, 61);
  const x = -W + 2 * W * L.rnd(i, 63);
  g.fillStyle = i % 2 ? "rgba(178, 202, 216, 0.55)" : "rgba(104, 136, 164, 0.45)";
  g.fillRect(x, y, 250 + 800 * L.rnd(i, 65), 2 + 5 * L.rnd(i, 67));
}
// the ferry: a dark boat, its wake a widening V behind it toward Z.
const fx = 330 - AX;
const fy = AD - 760;
g.strokeStyle = "rgba(214, 228, 236, 0.7)";
g.lineWidth = 1.6;
g.beginPath();
g.moveTo(fx - 70, fy - 46);
g.lineTo(fx, fy);
g.lineTo(fx + 62, fy - 52);
g.stroke();
g.fillStyle = "#4a3d33";
g.beginPath();
g.ellipse(fx, fy, 4.5, 1.6, -0.5, 0, Math.PI * 2);
g.fill();
// toward the sides of the frame: paper (by where each patch is seen: across over its distance)
for (let y = -H; y < H; y += 40) {
  const d = AD - (y + 20);
  const grd = g.createLinearGradient(-W, 0, W, 0);
  for (let i = 0; i <= 40; i++) {
    const x = -W + (2 * W * i) / 40;
    grd.addColorStop(i / 40, L.paper(L.edge((AX + x) / d)));
  }
  g.fillStyle = grd;
  g.fillRect(-W, y, 2 * W, 40.5);
}
