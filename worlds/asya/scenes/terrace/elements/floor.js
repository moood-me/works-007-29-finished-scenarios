// The terrace's floor, seen from above (x across, y toward the viewer, metres; its middle 1 m right, 2.3 m ahead):
// worn sandstone flags in rows, a little moss in the joints. Where it is seen toward the frame's sides and its foot,
// the flags are only drawn — pencil outlines on paper.
const L = e.lib;
const AX = 1;
const AD = 2.3;
const W = 9;
const H = 1.8;
const tones = ["#dcc9a3", "#d3bd94", "#e0cfac", "#cdb48a", "#d8c49d"];
g.fillStyle = L.toPaper("#b9a27e", 0);
g.fillRect(-W, -H, 2 * W, 2 * H);
let n = 0;
for (let y = -H; y < H; ) {
  const depth = 0.5 + 0.18 * L.rnd(n, 71);
  for (let x = -W + 0.6 * L.rnd(n, 73); x < W; n++) {
    const w = 0.55 + 0.45 * L.rnd(n, 75);
    const across = AX + x + w / 2;
    const distance = AD - (y + depth / 2);
    const k = Math.max(L.edge(across / distance), L.foot(distance));
    g.fillStyle = L.toPaper(tones[n % tones.length], k);
    g.fillRect(x + 0.012, y + 0.012, w - 0.024, depth - 0.024);
    if (k > 0.15) {
      g.strokeStyle = L.graphite(0.55 * k);
      g.lineWidth = 0.008;
      g.strokeRect(x + 0.02, y + 0.02, w - 0.04, depth - 0.04);
    } else if (L.rnd(n, 77) > 0.8) {
      g.fillStyle = "rgba(120, 140, 90, 0.35)";
      g.fillRect(x, y + depth - 0.03, w * 0.6, 0.03);
    }
    x += w;
  }
  y += depth;
}
