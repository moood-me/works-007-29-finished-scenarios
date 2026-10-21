// The low wall at the terrace's edge, 4.1 m ahead (its face toward us, from the house's corner to the right; 0.6 m high): sandstone
// blocks, a coping, tufts of grass and a creeping vine — the valley beyond it.
const L = e.lib;
const ACROSS = 2.7;
const D = 4.1;
const box = [-5.3, -0.8, 5.3, 0.02];
g.fillStyle = "#c4b495";
g.fillRect(box[0], -0.6, box[2] - box[0], 0.62);
let n = 0;
for (let row = 0, y = -0.52; row < 2; row++, y += 0.26) {
  for (let x = box[0] + (row ? 0.25 : 0); x < box[2]; n++) {
    const w = 0.42 + 0.3 * L.rnd(n, 81);
    g.fillStyle = ["#d8cbaf", "#d0c1a2", "#ddd1b8", "#cbbb9b"][n % 4];
    g.fillRect(x + 0.012, y + 0.012, w - 0.024, 0.236);
    x += w;
  }
}
// the coping
g.fillStyle = "#e2d8c1";
g.fillRect(box[0], -0.62, box[2] - box[0], 0.1);
// grass at its foot, and a vine creeping along it
g.fillStyle = "#7f9c58";
for (let i = 0; i < 40; i++) {
  const x = box[0] + 0.15 + (box[2] - box[0] - 0.3) * L.rnd(i, 83);
  g.beginPath();
  g.ellipse(x, -0.02, 0.06 + 0.06 * L.rnd(i, 85), 0.03 + 0.03 * L.rnd(i, 87), 0, Math.PI, 0);
  g.fill();
}
g.fillStyle = "#6e9248";
for (let i = 0; i < 26; i++) {
  const x = -1.6 + 2.4 * (i / 26) + 0.1 * L.rnd(i, 89);
  L.leaf(g, x, -0.55 + 0.12 * Math.sin(i * 1.7), 0.11 + 0.05 * L.rnd(i, 91), -0.4 + 0.8 * L.rnd(i, 93));
  g.fill();
}
L.unfinish(g, box, ACROSS, D);
