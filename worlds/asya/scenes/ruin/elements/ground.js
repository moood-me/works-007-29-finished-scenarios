// The crest and the spur, seen from above (a plane: x across, y toward the viewer, metres; its middle 3 m left and
// 9.55 m ahead): the summer turf of the hilltop the ruin stands on, a trodden path across it to the low wall's broken
// end; its right edge is the cliff's — 0.9 m right of the line of sight up to the wall, then the spur's edge going back
// from the wall's right end to 16.4 m; beyond it nothing (the drop). Toward the frame's foot and its left it is only drawn —
// pencil on paper.
const L = e.lib;
const N = e.anim.noise;
const AX = -3;
const AD = 9.55;
const W = 9;
const H = 6.95;
// where the turf ends on the right, at a distance (the cliff's edge, a little ragged)
const edgeAt = (d) => (d < 5 ? 0.9 : d < 6.4 ? 1.55 : 1.55 - 0.05 * (d - 6.4)) + 0.05 * N(d * 3, 17);
const kOf = (across, d) => Math.max(L.edge(across / d), L.foot(d));
// the turf, band by band toward the viewer, going over to the paper toward the frame's foot and its left
for (let y = -H; y < H; y += 0.1) {
  const d = AD - (y + 0.05);
  if (d > 16.4) continue;
  const right = edgeAt(d) - AX;
  const grd = g.createLinearGradient(-W, 0, right, 0);
  for (let i = 0; i <= 16; i++) {
    const x = -W + ((right + W) * i) / 16;
    grd.addColorStop(i / 16, L.toPaper("#8fa75e", kOf(AX + x, d)));
  }
  g.fillStyle = grd;
  g.fillRect(-W, y, right + W, 0.105);
}
// the path: a trodden band of earth from the frame's foot to the wall's broken end
g.save();
g.lineCap = "round";
const path = [[-0.7 - AX, AD - 2.6], [-1.1 - AX, AD - 3.6], [-2.1 - AX, AD - 4.85]];
for (const [w, tone] of [[0.6, "rgba(196, 178, 140, 0.55)"], [0.32, "rgba(206, 190, 154, 0.6)"]]) {
  g.strokeStyle = tone;
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(path[0][0], path[0][1]);
  g.quadraticCurveTo(path[1][0], path[1][1], path[2][0], path[2][1]);
  g.stroke();
}
g.restore();
// the grass: short strokes, darker and lighter; a pencil's where the turf is paper (not where nothing sees it: behind
// the low wall, or far to the left where it is all paper)
let n = 0;
for (let y = -H + 0.05; y < H; y += 0.12) {
  const d = AD - y;
  if (d > 16.4) continue;
  const right = edgeAt(d) - AX;
  for (let x = -5 - AX + 0.1 * L.rnd(n, 281); x < right - 0.05; x += 0.16 + 0.1 * L.rnd(n, 283), n++) {
    if (d > 5 && AX + x > -2.3) continue;
    const k = kOf(AX + x, d);
    if (k > 0.95) continue;
    g.strokeStyle = k > 0.5 ? L.graphite(0.25 * k) : n % 2 ? `rgba(104, 128, 70, ${0.55 * (1 - k)})` : `rgba(176, 192, 120, ${0.5 * (1 - k)})`;
    g.lineWidth = 0.018;
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x + 0.03, y - 0.07);
    g.stroke();
  }
}
// wild flowers, few: white yarrow, yellow hawkweed, blue chicory
for (let i = 0; i < 70; i++) {
  const across = -4 + 5 * L.rnd(i, 285);
  const d = 3.3 + 8 * L.rnd(i, 287);
  if (across > edgeAt(d) - 0.1) continue;
  const k = kOf(across, d);
  if (k > 0.6) continue;
  g.fillStyle = ["#f4f1e6", "#e9c94c", "#7c96d0"][i % 3];
  g.beginPath();
  g.arc(across - AX, AD - d, 0.025 + 0.015 * L.rnd(i, 289), 0, Math.PI * 2);
  g.fill();
}
// the cliff's lip: earth and stones along the edge, the turf curling over it
g.strokeStyle = "#8a7a62";
g.lineWidth = 0.08;
g.beginPath();
for (let d = 2.6; d <= 16.4; d += 0.2) {
  const x = edgeAt(d) - AX;
  const y = AD - d;
  if (d === 2.6) g.moveTo(x, y);
  else g.lineTo(x, y);
}
g.stroke();
g.fillStyle = "#b8a88c";
for (let i = 0; i < 40; i++) {
  const d = 2.8 + 13.4 * L.rnd(i, 291);
  const x = edgeAt(d) - AX - 0.05;
  g.beginPath();
  g.ellipse(x, AD - d, 0.06 + 0.06 * L.rnd(i, 293), 0.05, 0, 0, Math.PI * 2);
  g.fill();
}
