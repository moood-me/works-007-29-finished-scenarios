// The ferryman's boat, its near side (on the boat's anchor, toward us): a broad Rhine skiff, clinker-built, tarred dark
// below and its upper strakes a worn blue-grey, a pale rubbing strake under the gunwale; the bow (right) rising and
// pointed, the stern (left) square. The waterline is the anchor (0); below it the hull is under the water.
const L = e.lib;
const sheer = (x) => -0.52 - 0.3 * Math.abs(x / 2.1) ** 2.4 - 0.12 * Math.max(0, x / 2.1) ** 3;
const keel = (x) => 0.28 - 0.18 * Math.max(0, x / 2.1) ** 4;
const outline = new Path2D();
outline.moveTo(-2, sheer(-2));
for (let x = -2; x <= 2.1; x += 0.05) outline.lineTo(x, sheer(x));
outline.quadraticCurveTo(2.2, -0.2, 1.95, keel(1.95));
for (let x = 1.95; x >= -2; x -= 0.05) outline.lineTo(x, keel(x));
outline.closePath();
g.save();
g.clip(outline);
g.fillStyle = "#3d3a38";
g.fillRect(-2.3, -1, 4.6, 1.4);
// the strakes, each overlapping the one below
const tones = ["#6c7b86", "#62717c", "#74838d", "#5c6a75"];
for (let i = 0; i < 4; i++) {
  g.fillStyle = tones[i];
  g.beginPath();
  for (let x = -2.1; x <= 2.3; x += 0.05) {
    const y = sheer(Math.min(x, 2.1)) + 0.11 * i;
    if (x === -2.1) g.moveTo(x, y);
    else g.lineTo(x, y);
  }
  for (let x = 2.3; x >= -2.1; x -= 0.05) g.lineTo(x, sheer(Math.min(x, 2.1)) + 0.11 * (i + 1) - 0.012);
  g.closePath();
  g.fill();
}
g.fillStyle = "#3a3633";
g.beginPath();
for (let x = -2.1; x <= 2.3; x += 0.05) {
  const y = sheer(Math.min(x, 2.1)) + 0.44;
  if (x === -2.1) g.moveTo(x, y);
  else g.lineTo(x, y);
}
g.lineTo(2.3, 0.5);
g.lineTo(-2.1, 0.5);
g.fill();
// the rubbing strake and the gunwale
g.strokeStyle = "#b9ad96";
g.lineWidth = 0.035;
g.beginPath();
for (let x = -2; x <= 2.1; x += 0.05) {
  const y = sheer(x) + 0.05;
  if (x === -2) g.moveTo(x, y);
  else g.lineTo(x, y);
}
g.stroke();
g.restore();
g.strokeStyle = "#8a7b66";
g.lineWidth = 0.03;
g.beginPath();
for (let x = -2; x <= 2.1; x += 0.05) {
  if (x === -2) g.moveTo(x, sheer(x));
  else g.lineTo(x, sheer(x));
}
g.stroke();
// the stern's square end, the stem post at the bow
g.fillStyle = "#4b4642";
g.fillRect(-2.03, sheer(-2) - 0.02, 0.06, 0.5);
g.strokeStyle = "#6b5c4a";
g.lineWidth = 0.04;
g.beginPath();
g.moveTo(2.1, sheer(2.1) - 0.04);
g.quadraticCurveTo(2.2, -0.2, 1.95, keel(1.95));
g.stroke();
// the painter: a rope from the stern to the landing's pile
g.strokeStyle = "#8c7f68";
g.lineWidth = 0.018;
g.beginPath();
g.moveTo(-1.95, sheer(-1.95) + 0.06);
g.quadraticCurveTo(-2.25, -0.2, -2.4, -0.5);
g.stroke();
L.unfinish(g, [-2.5, -1, 2.4, 0.4], 2.75, 6.1);
