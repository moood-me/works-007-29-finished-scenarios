// The ferry's landing stage, seen from above (x across, y toward the viewer, metres; its middle 6.5 m ahead, 0.2 m
// left): grey weathered planks laid across on two stringers, gaps between them, a worn path down the middle; it runs
// from the quay 6 m out over the water. Near the frame's foot it is only drawn.
const L = e.lib;
const AX = -0.2;
const AD = 6.5;
const W = 0.9;
const H = 3;
let n = 0;
for (let y = -H; y < H; y += 0.24, n++) {
  const distance = AD - (y + 0.12);
  const k = L.foot(distance);
  const tone = ["#a39a8a", "#9a9080", "#aca393", "#958b7a"][n % 4];
  g.fillStyle = L.toPaper(tone, k);
  const l = -W + 0.03 * L.rnd(n, 121);
  const r = W - 0.03 * L.rnd(n, 123);
  g.fillRect(l, y + 0.01, r - l, 0.21);
  g.fillStyle = L.toPaper("#b3ab9c", k);
  g.fillRect(-0.32, y + 0.01, 0.64, 0.21);
  if (k > 0.2) {
    g.strokeStyle = L.graphite(0.5 * k);
    g.lineWidth = 0.008;
    g.strokeRect(l, y + 0.01, r - l, 0.21);
  } else {
    g.fillStyle = "rgba(70, 64, 56, 0.6)";
    g.beginPath();
    g.arc(-0.7, y + 0.11, 0.012, 0, Math.PI * 2);
    g.arc(0.7, y + 0.11, 0.012, 0, Math.PI * 2);
    g.fill();
  }
}
