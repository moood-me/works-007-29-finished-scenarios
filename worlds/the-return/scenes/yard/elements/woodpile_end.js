// The woodpile's near end toward the eye: the logs' sides, bark brown and grey, ends sticking out unevenly.
const L = e.lib, BARK = ["#7a6a55", "#8c7c66", "#6c5e4c", "#9c8f7a"];
for (let row = 0, y = -0.09; y > -1.55; row++, y -= 0.155) {
  const sx = (L.rnd(row, 181) - 0.5) * 0.08;
  g.fillStyle = BARK[row % BARK.length];
  g.fillRect(-0.27 + sx, y - 0.075, 0.54, 0.15);
  g.fillStyle = "rgba(40,34,26,0.4)";
  g.fillRect(-0.27 + sx, y + 0.06, 0.54, 0.015);
}
g.fillStyle = "#7f786c";
g.fillRect(-0.32, -1.7, 0.64, 0.08);
