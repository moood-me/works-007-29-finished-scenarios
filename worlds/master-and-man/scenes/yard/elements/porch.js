// The porch's front, toward the yard: the boarded face of its landing (0.85 m up), two carved posts holding a little
// gable roof with a white bargeboard, a railing of turned balusters on the left half; the right half open to the
// steps. Snow on the railing, the landing's edge and the roof.
// (x −1.25…1.25 m: across −4.75…−2.25; posts at x ±1.05; its foot at 0)
const L = e.lib;
const C = L.C;
const FLOOR = 0.85;
const TOP = 2.95;
const PEAK = 3.7;
const RAIL = FLOOR + 0.9;

// the landing's face: upright boards
g.fillStyle = "#8a7b68";
g.fillRect(-1.2, -FLOOR, 2.4, FLOOR);
g.strokeStyle = "#6a5c4c";
g.lineWidth = 0.02;
for (let x = -1.2; x < 1.2; x += 0.16) {
  g.beginPath();
  g.moveTo(x, -FLOOR);
  g.lineTo(x, 0);
  g.stroke();
}
g.fillStyle = C.woodDark;
g.fillRect(-1.22, -FLOOR - 0.06, 2.44, 0.08);
L.snowCap(g, 0.0, 1.2, -FLOOR - 0.06, 0.06, 31);

// the railing: a rail on turned balusters from the left post to the middle
for (let x = -0.95; x < -0.15; x += 0.13) {
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
g.fillRect(-1.05, -RAIL - 0.02, 0.98, 0.08);
L.snowCap(g, -1.0, -0.08, -RAIL - 0.02, 0.07, 32);

// the posts: square, with a turned waist and a cap
for (const x of [-1.05, 1.05]) {
  g.fillStyle = C.woodLight;
  g.fillRect(x - 0.07, -TOP, 0.14, TOP);
  g.fillStyle = C.wood;
  g.beginPath();
  g.ellipse(x, -1.95, 0.085, 0.16, 0, 0, Math.PI * 2);
  g.ellipse(x, -2.5, 0.085, 0.12, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = C.woodDark;
  g.fillRect(x - 0.075, -TOP, 0.15, 0.1);
}
// the beam over them and the carved valance under it
g.fillStyle = C.wood;
g.fillRect(-1.25, -TOP - 0.1, 2.5, 0.14);
g.fillStyle = C.trim;
g.beginPath();
for (let x = -0.98; x < 0.98; x += 0.14) {
  g.moveTo(x, -TOP + 0.04);
  g.quadraticCurveTo(x + 0.07, -TOP + 0.2, x + 0.14, -TOP + 0.04);
}
g.lineTo(0.98, -TOP + 0.04);
g.lineTo(-0.98, -TOP + 0.04);
g.fill();
// the gable: boards, the white bargeboard with its round-cut teeth, the snow on it
g.fillStyle = "#857560";
g.beginPath();
g.moveTo(-1.25, -TOP - 0.1);
g.lineTo(0, -PEAK);
g.lineTo(1.25, -TOP - 0.1);
g.closePath();
g.fill();
g.fillStyle = C.trim;
g.beginPath();
g.moveTo(-1.4, -TOP);
g.lineTo(0, -PEAK - 0.08);
g.lineTo(1.4, -TOP);
g.lineTo(1.4, -TOP - 0.14);
g.lineTo(0, -PEAK - 0.22);
g.lineTo(-1.4, -TOP - 0.14);
g.closePath();
g.fill();
g.fillStyle = C.snow;
g.beginPath();
g.moveTo(-1.48, -TOP - 0.1);
g.quadraticCurveTo(-0.7, -PEAK + 0.2, 0, -PEAK - 0.42);
g.quadraticCurveTo(0.7, -PEAK + 0.2, 1.48, -TOP - 0.1);
g.lineTo(1.4, -TOP - 0.16);
g.lineTo(0, -PEAK - 0.2);
g.lineTo(-1.4, -TOP - 0.16);
g.closePath();
g.fill();
