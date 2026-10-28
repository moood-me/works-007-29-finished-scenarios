// The chopping block — a thick stump, its cut top pale with rings — and the axe left stuck in it, its handle up.
g.fillStyle = "#7f6b52";
g.fillRect(-0.26, -0.5, 0.52, 0.5);
g.fillStyle = "#6b5a46";
for (const x of [-0.18, -0.05, 0.1, 0.2]) g.fillRect(x, -0.48, 0.025, 0.46);
g.fillStyle = "#c4a77c";
g.beginPath();
g.ellipse(0, -0.5, 0.26, 0.07, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = "#a88c64";
g.lineWidth = 0.008;
for (const r of [0.08, 0.15, 0.21]) {
  g.beginPath();
  g.ellipse(0, -0.5, r, r * 0.27, 0, 0, Math.PI * 2);
  g.stroke();
}
// the axe: its head buried in the top, the handle rising up to the right
g.strokeStyle = "#a88b5d";
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(0.0, -0.55);
g.quadraticCurveTo(0.14, -0.78, 0.3, -0.98);
g.stroke();
g.fillStyle = "#66686a";
g.beginPath();
g.moveTo(-0.11, -0.5);
g.lineTo(0.06, -0.52);
g.lineTo(0.05, -0.6);
g.lineTo(-0.08, -0.6);
g.closePath();
g.fill();
e.lib.paper(g, -0.32, -1.02, 0.66, 1.05, 0.8);
e.at(0.3, -0.95, "axe");
