// The straw in the sleigh's bottom, seen from above: a pale grey-gold bed, trodden flat where the two sit, stalks lying
// every way, snow blown in over it along the far rim and at the back.
// (on the sleigh's anchor, 0.15 m up; x along the sleigh −1.05…1.05, y across it −0.475…0.475, y toward its near side)
g.fillStyle = "#9c8e68";
g.fillRect(-1.05, -0.475, 2.1, 0.95);
g.lineCap = "round";
for (let i = 0; i < 260; i++) {
  const x = -1.05 + e.rnd() * 2.1;
  const y = -0.47 + e.rnd() * 0.94;
  const a = e.rnd() * Math.PI;
  const len = 0.06 + e.rnd() * 0.12;
  g.strokeStyle = e.rnd() < 0.5 ? "rgba(196,182,138,0.8)" : "rgba(110,98,70,0.6)";
  g.lineWidth = 0.008;
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x + Math.cos(a) * len, y + Math.sin(a) * len);
  g.stroke();
}
// snow blown in along the far rim and in the back
g.fillStyle = "rgba(234,240,247,0.9)";
g.beginPath();
g.moveTo(-1.05, -0.475);
g.lineTo(1.05, -0.475);
g.lineTo(1.05, 0.2);
g.quadraticCurveTo(0.9, -0.3, 0.3, -0.38);
g.quadraticCurveTo(-0.5, -0.4, -1.05, -0.36);
g.closePath();
g.fill();
