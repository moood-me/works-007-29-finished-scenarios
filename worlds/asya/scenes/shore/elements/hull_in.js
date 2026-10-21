// The boat's far side seen from within, over the near gunwale: the inside of its strakes, a paler worn wood, the ribs
// across them; it ends short of the bow, where the sides close to the stem.
const L = e.lib;
const sheer = (x) => -0.52 - 0.3 * Math.abs(x / 2.1) ** 2.4 - 0.12 * Math.max(0, x / 2.1) ** 3;
const outline = new Path2D();
outline.moveTo(-1.98, sheer(-1.98));
for (let x = -1.98; x <= 1.7; x += 0.05) outline.lineTo(x, sheer(x));
outline.quadraticCurveTo(1.85, -0.4, 1.8, -0.05);
outline.lineTo(-1.98, -0.05);
outline.closePath();
g.save();
g.clip(outline);
g.fillStyle = "#8e7a60";
g.fillRect(-2.1, -1, 4, 1);
for (let i = 0; i < 5; i++) {
  g.fillStyle = i % 2 ? "rgba(70, 56, 42, 0.35)" : "rgba(160, 140, 112, 0.3)";
  g.beginPath();
  for (let x = -2; x <= 1.9; x += 0.05) {
    const y = sheer(Math.min(x, 1.7)) + 0.1 * i + 0.05;
    if (x === -2) g.moveTo(x, y);
    else g.lineTo(x, y);
  }
  g.lineTo(1.9, sheer(1.7) + 0.1 * i + 0.065);
  g.lineTo(-2, sheer(-2) + 0.1 * i + 0.065);
  g.fill();
}
g.fillStyle = "#6a5844";
for (let x = -1.7; x < 1.7; x += 0.42) g.fillRect(x, -1, 0.045, 1);
g.restore();
g.strokeStyle = "#a8957a";
g.lineWidth = 0.03;
g.beginPath();
for (let x = -1.98; x <= 1.7; x += 0.05) {
  if (x === -1.98) g.moveTo(x, sheer(x));
  else g.lineTo(x, sheer(x));
}
g.stroke();
// a rowlock on the gunwale
g.fillStyle = "#45403a";
g.fillRect(0.05, sheer(0.05) - 0.07, 0.03, 0.08);
g.fillRect(0.17, sheer(0.17) - 0.07, 0.03, 0.08);
L.unfinish(g, [-2.1, -1, 2, 0], 2.75, 6.7);
