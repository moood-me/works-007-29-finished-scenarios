// Z.'s quay where the viewer stands, seen from above (x across, y toward the viewer, metres; its middle 2.9 m ahead):
// worn grey stone, small cobbles hinted in rows, up to the wall's coping. Toward the frame's foot and sides it is only
// drawn — pencil on paper.
const L = e.lib;
const AD = 2.9;
const W = 5;
const H = 0.6;
// the ground, band by band toward the viewer: its colour going over to the paper near the frame's foot
for (let y = -H; y < H; y += 0.04) {
  const distance = AD - (y + 0.02);
  const grd = g.createLinearGradient(-W, 0, W, 0);
  for (let i = 0; i <= 20; i++) {
    const x = -W + (2 * W * i) / 20;
    grd.addColorStop(i / 20, L.toPaper("#9b927f", Math.max(L.edge(x / distance), L.foot(distance))));
  }
  g.fillStyle = grd;
  g.fillRect(-W, y, 2 * W, 0.045);
}
// the cobbles: small worn arcs, darker in their joints; where the ground is paper, a light pencil
let n = 0;
for (let y = -H + 0.05; y < H; y += 0.09) {
  for (let x = -W + 0.05 * (Math.round(y / 0.09) % 2) + 0.03 * L.rnd(n, 131); x < W; x += 0.1, n++) {
    const distance = AD - y;
    const k = Math.max(L.edge(x / distance), L.foot(distance));
    g.strokeStyle = k > 0.5 ? L.graphite(0.25 * k) : `rgba(70, 64, 56, ${0.35 * (1 - k)})`;
    g.lineWidth = 0.006;
    g.beginPath();
    g.arc(x, y, 0.04 + 0.01 * L.rnd(n, 133), Math.PI * 0.1, Math.PI * 0.9);
    g.stroke();
  }
}
