// The yoke the buckets were carried on, lying on the sand before them, seen from above (x across, y toward the eye): a
// curved pole of pale wood, thicker in its middle where it lay on the shoulders, a short chain and hook at either end.
const L = e.lib;
g.strokeStyle = "#9c7e54";
g.lineCap = "round";
g.lineWidth = 0.07;
g.beginPath();
g.moveTo(-0.72, 0.06);
g.quadraticCurveTo(0, -0.2, 0.72, 0.06);
g.stroke();
g.strokeStyle = "#b8996a";
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(-0.6, 0.01);
g.quadraticCurveTo(0, -0.21, 0.6, 0.01);
g.stroke();
g.strokeStyle = "#4b4740";
g.lineWidth = 0.018;
for (const s of [-1, 1]) {
  g.beginPath();
  g.moveTo(s * 0.72, 0.06);
  g.lineTo(s * 0.8, 0.16);
  g.lineTo(s * 0.76, 0.24);
  g.stroke();
}
L.paper(g, -0.85, -0.25, 1.7, 0.55, 0.7);
