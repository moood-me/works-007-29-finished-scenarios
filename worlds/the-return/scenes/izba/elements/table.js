// The table under the window, seen from above (x to the right, y toward the eye; 1.1 × 0.5 m, its middle on the eye's
// line 3.95 m ahead): scrubbed boards; a round loaf on a linen towel, the wooden salt cellar, two plates and their
// spoons — the second, at the right end, set for him — and the soot ring the lamp stands on (`lamp` at x −0.05, y 0.03;
// the jug, `table_things`, at x −0.4, y −0.03).
const L = e.lib;
L.planks(g, 101, -0.55, -0.25, 1.1, 0.5, 0.125, ["#c2ab84", "#b9a17a", "#c8b28c"], false, 0.6);
g.fillStyle = "rgba(80,62,42,0.45)";
g.fillRect(-0.55, -0.25, 1.1, 0.015);
g.fillRect(-0.55, 0.235, 1.1, 0.015);
g.fillStyle = "rgba(90,70,48,0.3)";
g.beginPath();
g.ellipse(-0.05, 0.03, 0.09, 0.09, 0, 0, Math.PI * 2);
g.fill();
// the towel and the loaf on it
g.fillStyle = "#ebe4d4";
g.fillRect(-0.36, -0.22, 0.24, 0.2);
g.fillStyle = "#a8463a";
g.fillRect(-0.36, -0.22, 0.02, 0.2);
g.fillRect(-0.14, -0.22, 0.02, 0.2);
g.fillStyle = "#8f5a2e";
g.beginPath();
g.ellipse(-0.24, -0.12, 0.09, 0.075, 0.2, 0, Math.PI * 2);
g.fill();
g.fillStyle = "#b47a40";
g.beginPath();
g.ellipse(-0.25, -0.13, 0.06, 0.05, 0.2, 0, Math.PI * 2);
g.fill();
// the salt cellar
g.fillStyle = "#9a7a52";
g.beginPath();
g.arc(0.12, -0.17, 0.03, 0, Math.PI * 2);
g.fill();
// two plates, glazed earthenware, a spoon by each
const plate = (x, y) => {
  g.fillStyle = "#ddd8ca";
  g.beginPath();
  g.arc(x, y, 0.1, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = "#c8bfac";
  g.beginPath();
  g.arc(x, y, 0.065, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = "#6f86a0";
  g.lineWidth = 0.008;
  g.beginPath();
  g.arc(x, y, 0.087, 0, Math.PI * 2);
  g.stroke();
  g.strokeStyle = "#8a8a84";
  g.lineWidth = 0.013;
  g.beginPath();
  g.moveTo(x + 0.13, y - 0.06);
  g.lineTo(x + 0.14, y + 0.07);
  g.stroke();
};
plate(0.12, 0.1);
plate(0.38, -0.08);
e.at(0.38, -0.08, "plate");
L.paper(g, -0.55, -0.25, 1.1, 0.5, 0.6, 0.4);
