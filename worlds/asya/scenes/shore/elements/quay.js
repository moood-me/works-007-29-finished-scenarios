// Z.'s quay where the viewer stands, seen from above (x across, y toward the viewer, metres; its middle 2.9 m ahead):
// worn cobbles up to the wall's coping. Toward the frame's foot and sides they are only drawn — pencil on paper.
const L = e.lib;
const AD = 2.9;
const W = 5;
const H = 0.6;
g.fillStyle = L.toPaper("#a49a88", 0.4);
g.fillRect(-W, -H, 2 * W, 2 * H);
let n = 0;
for (let y = -H; y < H; y += 0.13) {
  for (let x = -W + 0.07 * (Math.round(y / 0.13) % 2); x < W; x += 0.14, n++) {
    const distance = AD - (y + 0.065);
    const k = Math.max(L.edge(x / distance), L.foot(distance));
    g.fillStyle = L.toPaper(["#b8ad98", "#aea38d", "#c1b7a3", "#a89c86"][n % 4], k);
    g.beginPath();
    g.ellipse(x + 0.07, y + 0.065, 0.058, 0.05, 0, 0, Math.PI * 2);
    g.fill();
    if (k > 0.2) {
      g.strokeStyle = L.graphite(0.4 * k);
      g.lineWidth = 0.006;
      g.stroke();
    }
  }
}
