// The yard's low paling along the line (x = across + 0.36), chest-high so that the path, the embankment and its rails are
// seen over it: two rails and grey weathered pickets with pointed tops, uneven; the gate's gap (x −0.6…0.4) between two
// taller posts; its right end at a corner post by the woodpile (x 6.8), where the road comes up past it.
const L = e.lib, TONES = ["#a39a87", "#988f7d", "#aca391", "#918878"];
g.fillStyle = "#857b6a";
g.fillRect(-5.6, -0.88, 12.4, 0.07);
g.fillRect(-5.6, -0.32, 12.4, 0.07);
for (let i = 0, x = -5.6; x < 6.7; i++, x += 0.16) {
  if (x > -0.66 && x < 0.42) continue;
  if (i === 47 || i === 61) continue;
  const h = 1.02 + 0.1 * L.rnd(i, 161), lean = (L.rnd(i, 162) - 0.5) * 0.04;
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
for (const x of [-0.72, 0.42, 6.7]) g.fillRect(x, -1.3, 0.13, 1.3);
L.strokes(g, 163, -5.6, -1.2, 12.4, 1.2, ["#c4bba8", "#7a7161"], 220, 0.25, 0.015, Math.PI / 2, 0.4);
L.paper(g, -5.6, -1.4, 12.5, 1.45, 2.2);
