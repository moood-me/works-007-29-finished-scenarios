// The gate's leaf, hinged on its left post (x 0 the hinge → 1 m), standing open into the yard: six pickets on two
// rails and a brace.
const TONES = ["#a39a87", "#988f7d", "#aca391"];
g.fillStyle = "#857b6a";
g.fillRect(0, -1.08, 0.98, 0.08);
g.fillRect(0, -0.4, 0.98, 0.08);
g.save();
g.translate(0.05, -0.36);
g.rotate(-0.72);
g.fillRect(0, -0.04, 1.08, 0.08);
g.restore();
for (let i = 0; i < 6; i++) {
  const x = 0.04 + i * 0.16, h = 1.3;
  g.fillStyle = TONES[i % TONES.length];
  g.beginPath();
  g.moveTo(x, -0.05);
  g.lineTo(x, -h);
  g.lineTo(x + 0.055, -h - 0.07);
  g.lineTo(x + 0.11, -h);
  g.lineTo(x + 0.11, -0.05);
  g.closePath();
  g.fill();
}
