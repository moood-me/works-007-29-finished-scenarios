// The left wall, seen along its length (x 0 at 1 m ahead of the eye, 4 at the back wall): the gable end — the same
// smoke-browned boards up to the roof's slope (2.8 m at either end, 3.6 m at the ridge over the middle), the sooty
// underside of the roof above it; the sand seeping through the seams and drifted against its back corner by the door;
// the wide sand baskets hung on pegs.
e.lib.boards(g, 71, -0.05, 4.05, -3.7);
// over the slope: the roof's underside, rafters and sooty boards
g.fillStyle = "#5a4636";
g.beginPath();
g.moveTo(-0.05, -3.7);
g.lineTo(-0.05, -2.8);
g.lineTo(2.0, -3.6);
g.lineTo(4.05, -2.8);
g.lineTo(4.05, -3.7);
g.closePath();
g.fill();
g.strokeStyle = "#3f3127";
g.lineWidth = 0.14;
g.beginPath();
g.moveTo(-0.05, -2.78);
g.lineTo(2.0, -3.58);
g.lineTo(4.05, -2.78);
g.stroke();

// the sand drifted in at the back corner by the door, its slope with a few ripples
g.fillStyle = "#d8b680";
g.beginPath();
g.moveTo(4.06, 0.03);
g.lineTo(4.06, -0.75);
g.bezierCurveTo(3.7, -0.6, 3.3, -0.2, 2.8, 0.03);
g.closePath();
g.fill();
g.strokeStyle = "#c39b64";
g.lineWidth = 0.02;
for (let k = 0; k < 3; k++) {
  const t = 0.25 + k * 0.22;
  g.beginPath();
  g.moveTo(4.06, -0.75 + t * 0.75);
  g.quadraticCurveTo(3.6, -0.45 + t * 0.45, 3.1 + t * 0.4, t * 0.03);
  g.stroke();
}

// two wide sand baskets hung on pegs, one over the other
for (const [bx, by] of [
  [1.6, -1.55],
  [2.35, -1.25],
]) {
  g.fillStyle = "#4a3c30";
  g.fillRect(bx - 0.02, by - 0.32, 0.04, 0.05);
  g.fillStyle = "#a88a58";
  g.beginPath();
  g.ellipse(bx, by, 0.32, 0.28, 0, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = "#7e6440";
  g.lineWidth = 0.018;
  for (let k = 1; k < 5; k++) {
    g.beginPath();
    g.ellipse(bx, by, 0.32 * (k / 5), 0.28 * (k / 5), 0, 0, Math.PI * 2);
    g.stroke();
  }
}
