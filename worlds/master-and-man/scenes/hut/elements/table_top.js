// The table's top, seen from above: a linen cloth over it, a red-woven border along its edges, saucers on it (what
// stands on it is the element `table_things`, and the samovar).
// (x −0.95…0.95 across, y −0.45 at the wall … 0.45 toward the eye)
const L = e.lib;
const C = L.C;
g.fillStyle = C.linen;
g.fillRect(-0.95, -0.45, 1.9, 0.9);
g.fillStyle = "rgba(200,188,166,0.35)";
for (let x = -0.95 + 0.38; x < 0.95; x += 0.38) g.fillRect(x, -0.45, 0.01, 0.9);
L.border(g, -0.95, 0.95, 0.33, 0.07);
L.border(g, -0.95, 0.95, -0.4, 0.07);
// saucers: white with a blue rim
for (const [x, y] of [[-0.42, 0.12], [0.25, 0.1], [0.55, -0.05]]) {
  g.fillStyle = "#5a6a9a";
  g.beginPath();
  g.arc(x, y, 0.075, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = "#f4f2ec";
  g.beginPath();
  g.arc(x, y, 0.062, 0, Math.PI * 2);
  g.fill();
}
