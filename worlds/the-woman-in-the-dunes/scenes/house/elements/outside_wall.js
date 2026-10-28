// The pit's steep wall seen out of the door (12.5 m ahead, x −4…4 about across −3.5, up to 6 m): the sand running
// down it in long tongues, paler and darker, its foot softening into the floor; a basket left at its foot.
const r = e.lib.stream(111);
g.fillStyle = "#d6b47e";
g.fillRect(-4, -6, 8, 6.05);
const runDark = new Path2D();
const runPale = new Path2D();
for (let k = 0; k < 160; k++) {
  const sx = -4 + r() * 8;
  const top = -6 + r() * 4.5;
  const len = 0.5 + r() * 2;
  const p = r() < 0.55 ? runDark : runPale;
  p.moveTo(sx, top);
  p.lineTo(sx + (r() - 0.5) * 0.15, Math.min(-0.4, top + len));
}
g.lineCap = "round";
g.strokeStyle = "#c79e66";
g.lineWidth = 0.06;
g.stroke(runDark);
g.strokeStyle = "#ead09f";
g.lineWidth = 0.05;
g.stroke(runPale);
// the foot of the wall easing into the floor: paler, smooth
const foot = g.createLinearGradient(0, -0.9, 0, 0);
foot.addColorStop(0, "rgba(217, 184, 130, 0)");
foot.addColorStop(1, "rgba(217, 184, 130, 1)");
g.fillStyle = foot;
g.fillRect(-4, -0.9, 8, 0.95);
// a sand basket left at its foot
g.fillStyle = "#a88a58";
g.beginPath();
g.ellipse(1.2, -0.22, 0.34, 0.22, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = "#7e6440";
g.lineWidth = 0.02;
for (let k = 1; k < 4; k++) {
  g.beginPath();
  g.ellipse(1.2, -0.22, 0.34 * (k / 4), 0.22, 0, 0, Math.PI * 2);
  g.stroke();
}
