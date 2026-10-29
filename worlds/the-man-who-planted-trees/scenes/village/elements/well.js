// The village well: a round stone parapet, two posts and a beam with a wooden roller, its rope. Dry in the prologue and
// the second chapter — the bucket hangs empty high on its rope, the stones pale with dust; from the third chapter the
// bucket stands on the rim and the stones round it are dark with wet. Its points: `mouth` (over the shaft), `bucket`
const t = e.lib.T(e), dry = t < 2;
// the posts and the beam with its roller
g.fillStyle = "#6a5642";
g.fillRect(-0.62, -2.0, 0.1, 1.5);
g.fillRect(0.52, -2.0, 0.1, 1.5);
g.fillRect(-0.72, -2.08, 1.44, 0.1);
g.fillStyle = "#806a52";
g.fillRect(-0.5, -1.78, 1.0, 0.12);
g.fillStyle = "#3a332c";
g.fillRect(0.62, -1.74, 0.16, 0.04);
g.fillRect(0.74, -1.74, 0.04, 0.16);
// the rope, and the bucket hanging from it (dry), or the rope slack to the bucket on the rim
g.strokeStyle = "#a08e6c";
g.lineWidth = 0.018;
g.beginPath();
g.moveTo(0, -1.66);
g.lineTo(0, dry ? -1.25 : -0.95);
g.stroke();
const bucket = (x, y) => {
  g.fillStyle = "#7a5a3c";
  g.beginPath();
  g.moveTo(x - 0.14, y - 0.26);
  g.lineTo(x + 0.14, y - 0.26);
  g.lineTo(x + 0.11, y);
  g.lineTo(x - 0.11, y);
  g.closePath();
  g.fill();
  g.fillStyle = "#4a3c30";
  g.fillRect(x - 0.14, y - 0.21, 0.28, 0.03);
  g.fillRect(x - 0.12, y - 0.07, 0.24, 0.03);
  e.at(x, y - 0.13, "bucket");
};
if (dry) bucket(0, -0.98);
else bucket(0.32, -0.8);
// the parapet: dry-laid round stones, its top a ring of capping stones seen a little from above
g.fillStyle = "#958470";
g.fillRect(-0.62, -0.8, 1.24, 0.8);
const STONE = dry ? ["#c6b697", "#bcab8c", "#cdbd9e"] : ["#b5a385", "#aa9878", "#bdab8b"];
for (let y = 0, row = 0; y > -0.76; y -= 0.19, row++) {
  for (let x = -0.62 + (row % 2) * 0.14; x < 0.62; x += 0.3) {
    g.fillStyle = STONE[Math.floor(e.rnd() * STONE.length)];
    g.beginPath();
    g.roundRect(Math.max(x + 0.02, -0.62), y - 0.17, Math.min(0.26, 0.6 - x), 0.15, 0.03);
    g.fill();
  }
}
g.fillStyle = "#cfc2a6";
g.beginPath();
g.ellipse(0, -0.8, 0.66, 0.1, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = "#2a231f";
g.beginPath();
g.ellipse(0, -0.8, 0.48, 0.065, 0, 0, Math.PI * 2);
g.fill();
if (!dry) {
  g.fillStyle = "rgba(70, 64, 56, 0.45)";
  g.beginPath();
  g.ellipse(0.1, 0.03, 0.9, 0.09, 0, 0, Math.PI * 2);
  g.fill();
}
e.at(0, -0.84, "mouth");
