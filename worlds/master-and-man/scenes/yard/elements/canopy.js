// The porch's canopy, its front toward the yard (held by the corner post at the left and by the consoles on the wall):
// the beam, the carved white valance under it with icicles, the little gable with its white bargeboard and the snow
// lying thick on it. Mostly above the frame — it frames the master from above.
// (x −1.3…1.3 m: across −3.0…−0.4; y −3.95…−2.9 over the ground)
const L = e.lib;
const C = L.C;
const BEAM = 3.05;
const TOP = 3.2;
const PEAK = 3.8;
const X0 = -1.3;
const X1 = 1.3;

// the beam
g.fillStyle = C.wood;
g.fillRect(X0, -TOP, X1 - X0, TOP - BEAM);
// the valance: white, cut into round tongues
g.fillStyle = C.trim;
g.beginPath();
g.moveTo(X0, -BEAM);
for (let x = X0; x < X1 - 0.01; x += 0.13) {
  g.quadraticCurveTo(x + 0.065, -BEAM + 0.16, x + 0.13, -BEAM);
}
g.closePath();
g.fill();
// (icicles from it)
g.fillStyle = "#eef3fa";
for (let i = 0; i < 14; i++) {
  const x = X0 + 0.12 + i * 0.18 + e.rnd() * 0.05;
  const len = 0.05 + e.rnd() * 0.14;
  g.beginPath();
  g.moveTo(x - 0.013, -BEAM + 0.1);
  g.lineTo(x + 0.013, -BEAM + 0.1);
  g.lineTo(x, -BEAM + 0.1 + len);
  g.closePath();
  g.fill();
}
// the gable: boards, the white bargeboard with its teeth, the snow on it
g.fillStyle = "#857560";
g.beginPath();
g.moveTo(X0, -TOP);
g.lineTo(0, -PEAK);
g.lineTo(X1, -TOP);
g.closePath();
g.fill();
g.fillStyle = C.trim;
g.beginPath();
g.moveTo(X0 - 0.12, -TOP + 0.08);
g.lineTo(0, -PEAK - 0.04);
g.lineTo(X1 + 0.12, -TOP + 0.08);
g.lineTo(X1 + 0.12, -TOP - 0.06);
g.lineTo(0, -PEAK - 0.18);
g.lineTo(X0 - 0.12, -TOP - 0.06);
g.closePath();
g.fill();
g.fillStyle = C.snow;
g.beginPath();
g.moveTo(X0 - 0.18, -TOP - 0.02);
g.quadraticCurveTo(-0.65, -PEAK + 0.12, 0, -PEAK - 0.36);
g.quadraticCurveTo(0.65, -PEAK + 0.12, X1 + 0.18, -TOP - 0.02);
g.lineTo(X1 + 0.12, -TOP - 0.08);
g.lineTo(0, -PEAK - 0.16);
g.lineTo(X0 - 0.12, -TOP - 0.08);
g.closePath();
g.fill();
