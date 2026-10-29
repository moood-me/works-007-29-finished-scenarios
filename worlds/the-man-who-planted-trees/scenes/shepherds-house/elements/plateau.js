// The plateau, from above (x across, y toward the viewer; its centre 1500 m ahead, so a point `d` metres ahead is at
// y = 1500 − d): dry olive-ochre ground, broad pale and dark sweeps far off, scrub and bare dust near, small stones, and
// the trodden path from the viewer to the shepherd's door (wide and bare while `trodden`)
const Y = (d) => 1500 - d, R = () => e.rnd();
g.fillStyle = "#9b8963";
g.fillRect(-3000, -1500, 6000, 3000);
// far: broad sweeps of paler dust and darker scrub, long across the view
for (let i = 0; i < 70; i++) {
  const d = 60 + Math.pow(R(), 1.4) * 2900, x = -2800 + R() * 5600, w = 40 + d * (0.1 + R() * 0.25), h = w * (0.05 + R() * 0.08);
  g.fillStyle = R() < 0.5 ? "rgba(176, 156, 116, 0.55)" : "rgba(120, 106, 76, 0.5)";
  g.beginPath();
  g.ellipse(x, Y(d), w, h, 0, 0, Math.PI * 2);
  g.fill();
}
// near: patches of low scrub and bare dust
for (let i = 0; i < 260; i++) {
  const d = 1 + Math.pow(R(), 1.3) * 70, x = (R() - 0.5) * (12 + d * 2.2), r = 0.25 + R() * (0.4 + d * 0.04);
  g.fillStyle = R() < 0.55 ? "rgba(128, 112, 78, 0.6)" : "rgba(182, 162, 120, 0.55)";
  g.beginPath();
  g.ellipse(x, Y(d), r * (1.2 + R()), r * (0.6 + R() * 0.5), R() * 3, 0, Math.PI * 2);
  g.fill();
}
// dry grass marks
g.lineCap = "round";
for (let i = 0; i < 420; i++) {
  const d = 0.5 + Math.pow(R(), 1.5) * 40, x = (R() - 0.5) * (10 + d * 2), l = 0.08 + R() * 0.16, a = R() * 3;
  g.strokeStyle = R() < 0.5 ? "#c4ad7a" : "#7d6d4c";
  g.lineWidth = 0.018 + R() * 0.02;
  g.beginPath();
  g.moveTo(x, Y(d));
  g.lineTo(x + Math.cos(a) * l, Y(d) + Math.sin(a) * l);
  g.stroke();
}
// small stones
for (let i = 0; i < 120; i++) {
  const d = 0.5 + Math.pow(R(), 1.4) * 30, x = (R() - 0.5) * (10 + d * 2), r = 0.03 + R() * 0.08;
  g.fillStyle = R() < 0.5 ? "#bdb2a0" : "#8f8676";
  g.beginPath();
  g.ellipse(x, Y(d), r * 1.4, r, R() * 3, 0, Math.PI * 2);
  g.fill();
}
// the path to the door: trodden pale earth, its edges softer
const path = (w, colour) => {
  g.strokeStyle = colour;
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(-0.9, Y(-1));
  g.bezierCurveTo(-0.6, Y(3), 1.4, Y(5.5), 2.4, Y(8.1));
  g.stroke();
};
path(1.5, "rgba(184, 164, 124, 0.5)");
path(0.85, "#bba783");
// trodden wide and bare by the people who come to look (`trodden`: 3.5 on the Name), the scrub broken along it
if (e.state.trodden) {
  path(3.2, "rgba(196, 178, 140, 0.55)");
  path(2.0, "#c3b08c");
  for (let i = 0; i < 90; i++) {
    const t = R(), x = -0.9 + t * 3.3 + (R() - 0.5) * 1.6, d = -1 + t * 9.1;
    g.fillStyle = "rgba(150, 132, 100, 0.5)";
    g.beginPath();
    g.ellipse(x, Y(d), 0.06, 0.12, R() * 0.6 - 0.3, 0, Math.PI * 2);
    g.fill();
  }
}
// and on past the pen, toward the slope and the village below
g.strokeStyle = "rgba(184, 164, 124, 0.55)";
g.lineWidth = 0.7;
g.beginPath();
g.moveTo(-0.8, Y(2.5));
g.bezierCurveTo(-3, Y(10), -9, Y(14), -16, Y(26));
g.stroke();
