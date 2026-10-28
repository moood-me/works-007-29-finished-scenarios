// The well's log frame, its side toward the eye (its other side is `well_side`): short logs crossing at the corners.
const L = e.lib;
L.logs(g, 191, -0.55, 0.55, 0.9, 0.15, 2);
g.fillStyle = "#7a6c58";
for (let y = -0.075; y > -0.9; y -= 0.15) {
  for (const x of [-0.55, 0.55]) {
    g.beginPath();
    g.arc(x, y, 0.07, 0, Math.PI * 2);
    g.fill();
  }
}
