// The woodpile along the yard's right side, its face of log ends to the yard (x −1.2 the far end … 1.2 the near): split
// birch and pine stacked to 1.6 m — pale cut faces in their bark rings, a few darker — two old boards over the top.
const L = e.lib, FACES = ["#d2b88e", "#c9ad80", "#dcc59c", "#b89b70"];
g.fillStyle = "#5e5142";
g.fillRect(-1.2, -1.62, 2.4, 1.62);
for (let row = 0, y = -0.09; y > -1.55; row++, y -= 0.155) {
  for (let i = 0, x = -1.12 + (row % 2) * 0.08; x < 1.15; i++, x += 0.165) {
    const r = 0.068 + 0.018 * L.rnd(i + row * 40, 171), dx = (L.rnd(i + row * 40, 172) - 0.5) * 0.03;
    g.fillStyle = "#6f5f4c";
    g.beginPath();
    g.arc(x + dx, y, r + 0.012, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = FACES[Math.floor(L.rnd(i + row * 40, 173) * FACES.length)];
    g.beginPath();
    g.arc(x + dx, y, r, 0, Math.PI * 2);
    g.fill();
  }
}
g.fillStyle = "#7f786c";
g.save();
g.translate(-1.25, -1.62);
g.rotate(-0.04);
g.fillRect(0, -0.05, 2.5, 0.06);
g.restore();
g.fillStyle = "#726b60";
g.fillRect(-1.3, -1.7, 2.6, 0.05);
