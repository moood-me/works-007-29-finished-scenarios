// The shop's window, lit: a lamp is burning inside on this grey afternoon. Four warm panes in a dark sash, frost
// flowers creeping in at their corners, the lamp's glow and its light into the yard. It glows: the scene's light
// does not darken it.
// (x −0.38…0.38 m, y −2.5…−1.5 — on the house's front, in its white frame)
const X0 = -0.38;
const X1 = 0.38;
const Y0 = -2.5;
const Y1 = -1.5;
const warm = g.createRadialGradient(-0.05, -1.95, 0.05, -0.05, -1.95, 0.7);
warm.addColorStop(0, "#ffe2a0");
warm.addColorStop(0.5, "#f2bd68");
warm.addColorStop(1, "#c98e4a");
g.fillStyle = warm;
g.fillRect(X0, Y0, X1 - X0, Y1 - Y0);
// (frost in the corners of the panes, white and feathery — within the panes)
g.save();
g.beginPath();
g.rect(X0, Y0, X1 - X0, Y1 - Y0);
g.clip();
g.fillStyle = "rgba(250,246,240,0.55)";
for (const [cx, cy] of [[X0, Y1], [X1, Y1], [0, Y1], [X0, -2.0]]) {
  g.beginPath();
  g.ellipse(cx, cy, 0.16, 0.12, 0, 0, Math.PI * 2);
  g.fill();
}
g.restore();
// the sash and the bars
g.fillStyle = "#4a3a2c";
g.fillRect(X0, Y0, X1 - X0, 0.05);
g.fillRect(X0, Y1 - 0.05, X1 - X0, 0.05);
g.fillRect(X0, Y0, 0.05, Y1 - Y0);
g.fillRect(X1 - 0.05, Y0, 0.05, Y1 - Y0);
g.fillRect(-0.025, Y0, 0.05, Y1 - Y0);
g.fillRect(X0, -2.02, X1 - X0, 0.04);
e.light(-0.05, -1.95, 0.5, "#ffc271", 0.9, "lamp");
e.at(0, -2.0, "panes");
