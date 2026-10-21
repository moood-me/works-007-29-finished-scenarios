// The table top, seen from above (x to the right, y toward the eye; 1.2 × 0.8 m, its middle 2.85 m ahead): scrubbed
// boards; on them a round loaf on a linen towel, a wooden salt cellar, two plates and two spoons — the second plate set
// for him — and the ring the lamp stands on (`lamp` stands at x 0, y −0.15; the jug, `table_things`, at x 0.5, y 0.05).
const L = e.lib;
L.planks(g, 101, -0.6, -0.4, 1.2, 0.8, 0.2, ["#c2ab84", "#b9a17a", "#c8b28c"], false, 0.5);
g.fillStyle = "rgba(80,62,42,0.5)";
g.fillRect(-0.6, -0.4, 1.2, 0.015);
g.fillRect(-0.6, 0.385, 1.2, 0.015);
// the towel and the loaf on it
g.fillStyle = "#ebe4d4";
g.fillRect(-0.5, -0.36, 0.34, 0.24);
g.fillStyle = "#a8463a";
g.fillRect(-0.5, -0.36, 0.025, 0.24);
g.fillRect(-0.185, -0.36, 0.025, 0.24);
g.fillStyle = "#8f5a2e";
g.beginPath();
g.ellipse(-0.33, -0.24, 0.12, 0.1, 0.2, 0, Math.PI * 2);
g.fill();
g.fillStyle = "#b47a40";
g.beginPath();
g.ellipse(-0.34, -0.25, 0.08, 0.065, 0.2, 0, Math.PI * 2);
g.fill();
// the salt cellar
g.fillStyle = "#9a7a52";
g.beginPath();
g.arc(-0.08, -0.3, 0.035, 0, Math.PI * 2);
g.fill();
// two plates, glazed earthenware, and a spoon by each
const plate = (x, y) => {
  g.fillStyle = "#d9d4c6";
  g.beginPath();
  g.arc(x, y, 0.11, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = "#c4bba8";
  g.beginPath();
  g.arc(x, y, 0.07, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = "#6f86a0";
  g.lineWidth = 0.008;
  g.beginPath();
  g.arc(x, y, 0.095, 0, Math.PI * 2);
  g.stroke();
  g.strokeStyle = "#8a8a84";
  g.lineWidth = 0.014;
  g.beginPath();
  g.moveTo(x + 0.14, y - 0.06);
  g.lineTo(x + 0.15, y + 0.08);
  g.stroke();
};
plate(-0.38, 0.2);
plate(0.12, 0.22);
e.at(0.12, 0.22, "plate");
L.paper(g, -0.6, -0.4, 1.2, 0.8, 0.5);
