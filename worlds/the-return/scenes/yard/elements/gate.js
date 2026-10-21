// The gate's leaf, as low as the paling, hinged on its left post (x 0 the hinge → 1 m), standing open into the yard: six
// pickets on two rails and a brace.
const TONES = ["#a39a87", "#988f7d", "#aca391"];
g.fillStyle = "#857b6a";
g.fillRect(0, -0.88, 0.98, 0.07);
g.fillRect(0, -0.32, 0.98, 0.07);
g.save();
g.translate(0.05, -0.3);
g.rotate(-0.6);
g.fillRect(0, -0.035, 1.08, 0.07);
g.restore();
for (let i = 0; i < 6; i++) {
  const x = 0.04 + i * 0.16, h = 1.04;
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
e.lib.paper(g, -0.02, -1.12, 1.02, 1.17, 2.2);
