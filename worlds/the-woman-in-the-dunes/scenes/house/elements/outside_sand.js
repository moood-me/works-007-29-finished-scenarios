// The pit's floor outside the door, from above (x −5…5 about across −3, y toward the eye; its middle 9 m ahead): the
// warm dry sand of the pit as «The Pit» paints it, wind ripples, her trodden way out from the door and the shovel's
// scoops where she digs.
const r = e.lib.stream(101);
g.fillStyle = "#d9b882";
g.fillRect(-5, -4, 10, 8);
const ripples = new Path2D();
for (let y = -4; y < 4; y += 0.26 + r() * 0.1) {
  let x = -5 + r();
  while (x < 5) {
    const len = 0.5 + r() * 1.6;
    ripples.moveTo(x, y);
    ripples.quadraticCurveTo(x + len * 0.5, y + (r() - 0.5) * 0.16, x + len, y + (r() - 0.5) * 0.06);
    x += len + 0.2 + r() * 0.8;
  }
}
g.lineCap = "round";
g.strokeStyle = "#c29a62";
g.lineWidth = 0.035;
g.stroke(ripples);
// the trodden way from the door (its foot at x 1.35, y 4) out into the pit
const way = g.createLinearGradient(1.35, 4, 0.5, -2);
way.addColorStop(0, "rgba(186, 146, 96, 0.5)");
way.addColorStop(1, "rgba(186, 146, 96, 0)");
g.fillStyle = way;
g.beginPath();
g.moveTo(0.85, 4);
g.quadraticCurveTo(0.6, 1, 0.1, -2);
g.lineTo(1.1, -2);
g.quadraticCurveTo(1.5, 1, 1.85, 4);
g.closePath();
g.fill();
// the shovel's scoops
g.strokeStyle = "#bd935a";
g.lineWidth = 0.05;
for (let k = 0; k < 10; k++) {
  const sx = -2.5 + r() * 3;
  const sy = -1 + r() * 2.5;
  const rad = 0.16 + r() * 0.14;
  const turn = -0.4 + r() * 0.8;
  g.beginPath();
  g.arc(sx, sy, rad, Math.PI * 0.15 + turn, Math.PI * 0.85 + turn);
  g.stroke();
}
