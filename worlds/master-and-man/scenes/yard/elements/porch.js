// The porch's front, toward the yard: the boarded face of its landing (0.85 m up) with a snow-capped edge and short
// icicles under it, a corner post at the left holding the canopy, a railing of turned balusters along the left end
// (the door and the right are open: the steps go down at the right). Snow drifted against its foot.
// (x −1.1…1.1 m: across −2.8…−0.6; its foot at 0, the post up to 3.05)
const L = e.lib;
const C = L.C;
const FLOOR = 0.85;
const RAIL = FLOOR + 0.9;
const X0 = -1.1;
const X1 = 1.1;

// the landing's face: upright boards, the edge board over them
g.fillStyle = "#8a7b68";
g.fillRect(X0, -FLOOR, X1 - X0, FLOOR);
g.strokeStyle = "#6a5c4c";
g.lineWidth = 0.02;
for (let x = X0; x < X1; x += 0.16) {
  g.beginPath();
  g.moveTo(x, -FLOOR);
  g.lineTo(x, 0);
  g.stroke();
}
g.fillStyle = C.woodDark;
g.fillRect(X0 - 0.02, -FLOOR - 0.06, X1 - X0 + 0.04, 0.08);
L.snowCap(g, -0.35, X1, -FLOOR - 0.06, 0.05, 31);
// (short icicles under the edge board)
g.fillStyle = "#eef3fa";
for (let i = 0; i < 13; i++) {
  const x = X0 + 0.08 + i * 0.165 + e.rnd() * 0.05;
  const len = 0.04 + e.rnd() * 0.12;
  g.beginPath();
  g.moveTo(x - 0.015, -FLOOR + 0.02);
  g.lineTo(x + 0.015, -FLOOR + 0.02);
  g.lineTo(x, -FLOOR + 0.02 + len);
  g.closePath();
  g.fill();
}

// the railing: a rail on turned balusters from the corner post to x −0.35
for (let x = X0 + 0.15; x < -0.37; x += 0.13) {
  g.fillStyle = C.woodLight;
  g.beginPath();
  g.moveTo(x - 0.025, -FLOOR);
  g.quadraticCurveTo(x - 0.06, -FLOOR - 0.45, x - 0.02, -RAIL + 0.05);
  g.lineTo(x + 0.02, -RAIL + 0.05);
  g.quadraticCurveTo(x + 0.06, -FLOOR - 0.45, x + 0.025, -FLOOR);
  g.closePath();
  g.fill();
}
g.fillStyle = C.wood;
g.fillRect(X0, -RAIL - 0.02, -0.33 - X0, 0.08);
L.snowCap(g, X0 + 0.05, -0.35, -RAIL - 0.02, 0.07, 32);

// the corner post at the left: square, a turned waist, up under the canopy's beam
g.fillStyle = C.woodLight;
g.fillRect(X0 - 0.02, -3.05, 0.14, 3.05);
g.fillStyle = C.wood;
for (const [y, ry] of [[-2.0, 0.16], [-2.55, 0.12]]) {
  g.beginPath();
  g.ellipse(X0 + 0.05, y, 0.085, ry, 0, 0, Math.PI * 2);
  g.fill();
}

// the snow drifted against the landing's face: soft mounds, bluer in their hollows
for (const [x, w, h] of [[-0.9, 0.55, 0.3], [-0.3, 0.5, 0.22], [0.4, 0.6, 0.28], [0.95, 0.35, 0.2]]) {
  g.fillStyle = C.snowShade;
  g.beginPath();
  g.ellipse(x, 0.04, w, h + 0.04, 0, Math.PI, 0);
  g.fill();
  g.fillStyle = C.snow;
  g.beginPath();
  g.ellipse(x - w * 0.08, 0.04, w * 0.92, h, 0, Math.PI, 0);
  g.fill();
}
