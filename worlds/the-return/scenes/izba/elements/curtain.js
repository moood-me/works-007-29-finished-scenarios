// The cotton print curtain before the bed (5.05 m ahead, from the stove's side across to −0.17): pale blue chintz with
// small red-and-white flowers, hung on a string from a pole and gathered in folds, drawn a little aside at its right
// end so that the bed's corner shows (`bed`). Thin: the light behind it comes through ("translucent").
const L = e.lib;
const top = -2.05, x0 = -0.68, x1 = 0.68, gap = 0.36;
// the pole
g.fillStyle = "#6a5642";
g.fillRect(x0, top - 0.03, x1 - x0, 0.03);
// the cloth: to the left of the gap hanging straight to the floor, its right edge drawn aside and caught up
g.fillStyle = "#a9bccb";
g.beginPath();
g.moveTo(x0, top);
g.lineTo(gap, top);
g.quadraticCurveTo(gap - 0.06, -1.0, gap - 0.16, -0.05);
g.lineTo(x0, -0.05);
g.closePath();
g.fill();
// the drawn-aside end at the right, gathered narrow
g.beginPath();
g.moveTo(gap + 0.2, top);
g.lineTo(x1, top);
g.lineTo(x1, -0.05);
g.lineTo(x1 - 0.12, -0.05);
g.quadraticCurveTo(x1 - 0.1, -1.0, gap + 0.2, top);
g.closePath();
g.fill();
// the folds and the print, laid only over the cloth: soft darker and paler bands down it, small flowers scattered
g.save();
g.globalCompositeOperation = "source-atop";
for (let i = 0; i < 16; i++) {
  g.fillStyle = i % 2 ? "rgba(120,140,160,0.45)" : "rgba(210,222,230,0.4)";
  g.fillRect(x0 + 0.04 + i * 0.085, top, 0.035, -top);
}
for (let i = 0; i < 260; i++) {
  g.fillStyle = i % 3 ? "#b0524a" : "#f2ece2";
  g.beginPath();
  g.arc(x0 + (x1 - x0) * L.rnd(i, 11), top + 0.04 + (-0.1 - top) * L.rnd(i, 12), 0.012, 0, Math.PI * 2);
  g.fill();
}
g.restore();
L.paper(g, x0, top, x1 - x0, -top, 1.0);
