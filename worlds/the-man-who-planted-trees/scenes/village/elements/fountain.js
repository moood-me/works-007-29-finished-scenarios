// The village fountain: a long stone trough on the square, a squat pillar at its back with an iron spout. Dry and
// cracked, dust and a few dead leaves in it until the epilogue, when its stone is clean and moss shows at the water's
// line. Its water — the jet from the spout and the trough's surface — are layers shown as much as `fountain`
// (fountain.animate.js); the splashes are the particles `splash`. Its points: `rim` (the front rim's middle — where one
// sits), `spout`, `fall` (where the jet meets the water)
const t = e.lib.T(e), clean = t === 3;
const STONE = clean ? "#bdb19a" : "#b0a38a", DARK = clean ? "#a3967e" : "#968970";
// the pillar at the back, the spout's iron pipe and the pillar's cap
g.fillStyle = DARK;
g.fillRect(-0.24, -1.62, 0.48, 1.1);
g.fillStyle = STONE;
g.fillRect(-0.3, -1.72, 0.6, 0.14);
g.fillStyle = "#c7bba2";
g.beginPath();
g.moveTo(-0.3, -1.72);
g.lineTo(0, -1.86);
g.lineTo(0.3, -1.72);
g.closePath();
g.fill();
g.fillStyle = "#3e3a36";
g.fillRect(-0.035, -1.24, 0.07, 0.05);
g.fillRect(-0.025, -1.23, 0.05, 0.14);
// the trough: its far wall's top edge, the inside (dust, or the water's surface — a layer), the front with its rim
g.fillStyle = DARK;
g.fillRect(-1.3, -0.62, 2.6, 0.08);
g.fillStyle = clean ? "#6f7a72" : "#c6b892";
g.fillRect(-1.24, -0.56, 2.48, 0.05);
g.fillStyle = STONE;
g.fillRect(-1.32, -0.52, 2.64, 0.52);
g.fillStyle = "#c9bea6";
g.fillRect(-1.36, -0.56, 2.72, 0.07);
g.fillStyle = "rgba(90, 80, 66, 0.35)";
g.fillRect(-0.45, -0.49, 0.03, 0.49);
g.fillRect(0.47, -0.49, 0.03, 0.49);
if (!clean) {
  // cracks; dry leaves on the dust
  g.strokeStyle = "#7a6e5c";
  g.lineWidth = 0.014;
  g.beginPath();
  g.moveTo(-0.9, -0.49);
  g.lineTo(-0.84, -0.33);
  g.lineTo(-0.92, -0.2);
  g.lineTo(-0.86, -0.04);
  g.moveTo(0.8, -0.49);
  g.lineTo(0.86, -0.3);
  g.stroke();
  g.fillStyle = "#8a6a44";
  for (const x of [-0.7, -0.2, 0.35, 0.9]) {
    g.beginPath();
    g.ellipse(x, -0.545, 0.04, 0.012, 0.3, 0, Math.PI * 2);
    g.fill();
  }
} else {
  g.fillStyle = "#7c8d5a";
  g.fillRect(-1.32, -0.5, 2.64, 0.025);
}
// the water: the trough's surface brimming, glinting; the jet from the spout
e.layer("pool", { shimmer: 0.25 }, (g) => {
  g.fillStyle = "#a9bccb";
  g.fillRect(-1.24, -0.6, 2.48, 0.06);
  g.fillStyle = "#e4edf2";
  for (const x of [-1.0, -0.55, 0.2, 0.7, 1.05]) g.fillRect(x, -0.585, 0.12, 0.012);
});
e.layer("jet", { shimmer: 0.4 }, (g) => {
  g.strokeStyle = "rgba(214, 228, 236, 0.9)";
  g.lineWidth = 0.035;
  g.lineCap = "round";
  g.beginPath();
  g.moveTo(0, -1.1);
  g.quadraticCurveTo(0.03, -0.85, 0.02, -0.58);
  g.stroke();
});
e.at(0, -0.56, "rim");
e.at(0, -1.2, "spout");
e.at(0.02, -0.58, "fall");
