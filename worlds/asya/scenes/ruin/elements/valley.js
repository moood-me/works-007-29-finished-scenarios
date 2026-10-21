// The valley's floor 110 m below the cliff, seen from above (a plane: x across, y toward the viewer, metres; its middle
// 150 m right and 310 m ahead): meadows and stubble, strips of vineyard, an orchard or two, the road along the cliff's
// foot to the chapel and on along the river, the shingle of the bank at its far edge. Toward the frame's sides it goes
// over to the paper.
const L = e.lib;
const AX = 150;
const AD = 310;
const W = 350;
const H = 120;
g.fillStyle = "#9db46c";
g.fillRect(-W, -H, 2 * W, 2 * H);
// fields: patches of meadow, stubble and hay
const fields = ["#a8bd72", "#c9c27e", "#93ad66", "#d4c98e", "#b4c47a"];
for (let i = 0; i < 46; i++) {
  const x = -W + 2 * W * L.rnd(i, 71);
  const y = -H + 2 * H * L.rnd(i, 73);
  g.fillStyle = fields[i % fields.length];
  g.fillRect(x, y, 30 + 60 * L.rnd(i, 75), 12 + 26 * L.rnd(i, 77));
}
// vineyards: strips of rows running toward the river
for (let i = 0; i < 14; i++) {
  const x = -W + 2 * W * L.rnd(i, 79);
  const y = -H + 2 * H * L.rnd(i, 81);
  const w = 24 + 30 * L.rnd(i, 83);
  const h = 20 + 30 * L.rnd(i, 85);
  g.fillStyle = "#b7c487";
  g.fillRect(x, y, w, h);
  g.fillStyle = "rgba(96, 118, 70, 0.6)";
  for (let k = 1.5; k < w; k += 3) g.fillRect(x + k, y, 1, h);
}
// orchards: round crowns in rows
g.fillStyle = "#6f8c56";
for (let i = 0; i < 5; i++) {
  const ox = -W + 2 * W * L.rnd(i, 87);
  const oy = -H + 2 * H * L.rnd(i, 89);
  for (let r = 0; r < 4; r++)
    for (let c = 0; c < 6; c++) {
      g.beginPath();
      g.arc(ox + c * 6, oy + r * 6, 2.4, 0, Math.PI * 2);
      g.fill();
    }
}
// the road: along the cliff's foot, past the chapel, then bending away along the river
const road = [[-W, 100], [-120, 104], [-40, 98], [-25, 42], [40, 30], [130, 22], [W, 10]];
g.strokeStyle = "#ddd2b4";
g.lineWidth = 4;
g.lineJoin = "round";
g.beginPath();
for (let i = 0; i < road.length; i++) {
  if (i === 0) g.moveTo(road[i][0], road[i][1]);
  else g.lineTo(road[i][0], road[i][1]);
}
g.stroke();
// the bank's shingle at the far edge, where the river begins
g.fillStyle = "#d8cfb8";
g.fillRect(-W, -H, 2 * W, 6);
// toward the sides of the frame: paper (by where each band is seen: across over its distance)
for (let y = -H; y < H; y += 20) {
  const d = AD - (y + 10);
  const grd = g.createLinearGradient(-W, 0, W, 0);
  for (let i = 0; i <= 28; i++) {
    const x = -W + (2 * W * i) / 28;
    grd.addColorStop(i / 28, L.paper(L.edge((AX + x) / d)));
  }
  g.fillStyle = grd;
  g.fillRect(-W, y, 2 * W, 20.5);
}
