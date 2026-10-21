// The yard's paling along the line (x = across − 2): two rails and grey weathered pickets with pointed tops, uneven,
// the gaps between them open to the path and the embankment; the gate's gap (x −0.6…0.4) between two taller posts.
const L = e.lib, TONES = ["#a39a87", "#988f7d", "#aca391", "#918878"];
g.fillStyle = "#857b6a";
g.fillRect(-5.6, -1.08, 11.2, 0.08);
g.fillRect(-5.6, -0.4, 11.2, 0.08);
for (let i = 0, x = -5.6; x < 5.6; i++, x += 0.16) {
  if (x > -0.66 && x < 0.42) continue;
  if (i === 47) continue;
  const h = 1.28 + 0.12 * L.rnd(i, 161), lean = (L.rnd(i, 162) - 0.5) * 0.04;
  g.fillStyle = TONES[i % TONES.length];
  g.beginPath();
  g.moveTo(x, 0);
  g.lineTo(x + lean, -h);
  g.lineTo(x + 0.055 + lean, -h - 0.07);
  g.lineTo(x + 0.11 + lean, -h);
  g.lineTo(x + 0.11, 0);
  g.closePath();
  g.fill();
  g.fillStyle = "rgba(70,62,52,0.35)";
  g.fillRect(x + 0.07, -h + 0.05, 0.02, h - 0.1);
}
g.fillStyle = "#7d7363";
for (const x of [-0.72, 0.42]) g.fillRect(x, -1.62, 0.13, 1.62);
L.strokes(g, 163, -5.6, -1.5, 11.2, 1.5, ["#bdb4a1", "#7d7464"], 200, 0.25, 0.012, Math.PI / 2, 0.3);
