// Z.'s quay wall, 3.5 m ahead, its face toward the river and us: a coping of long sandstone blocks, then rough courses
// down to the water 0.8 m below, dark and wet at the waterline, a little moss. Only its top shows, at the frame's foot.
const L = e.lib;
const ACROSS = 0;
const D = 3.5;
const box = [-4.6, -0.12, 4.6, 0.85];
g.fillStyle = "#9d9381";
g.fillRect(box[0], 0, box[2] - box[0], 0.85);
let n = 0;
for (let row = 0, y = 0.02; row < 4; row++, y += 0.2) {
  for (let x = box[0] + (row % 2) * 0.2; x < box[2]; n++) {
    const w = 0.35 + 0.3 * L.rnd(n, 111);
    g.fillStyle = ["#b0a690", "#a69b85", "#b8ae99", "#9f947e"][n % 4];
    g.fillRect(x + 0.012, y + 0.012, Math.min(w, box[2] - x) - 0.024, 0.176);
    x += w;
  }
}
g.fillStyle = "rgba(48, 62, 58, 0.55)";
g.fillRect(box[0], 0.62, box[2] - box[0], 0.23);
g.fillStyle = "rgba(92, 116, 78, 0.5)";
for (let i = 0; i < 30; i++) g.fillRect(box[0] + (box[2] - box[0]) * L.rnd(i, 113), 0.55 + 0.06 * L.rnd(i, 115), 0.2, 0.05);
// the coping
for (let x = box[0], i = 0; x < box[2]; i++) {
  const w = 0.7 + 0.4 * L.rnd(i, 117);
  g.fillStyle = ["#d2c7b0", "#c9bda5", "#d8ceb9"][i % 3];
  g.fillRect(x + 0.01, -0.12, Math.min(w, box[2] - x) - 0.02, 0.12);
  x += w;
}
L.unfinish(g, box, ACROSS, D);
