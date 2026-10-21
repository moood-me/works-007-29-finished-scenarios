// The yoke the buckets were carried on, lying on the sand before them, seen from above (x across, y toward the eye): a
// curved pole of pale wood, thicker in its middle where it lay on the shoulders, a short chain and hook at either end.
const L = e.lib;
g.lineCap = "round";
g.strokeStyle = "#8a6c45";
g.lineWidth = 0.11;
g.beginPath();
g.moveTo(-0.66, 0.12);
g.quadraticCurveTo(0, -0.34, 0.66, 0.12);
g.stroke();
g.strokeStyle = "#c2a374";
g.lineWidth = 0.045;
g.beginPath();
g.moveTo(-0.56, 0.04);
g.quadraticCurveTo(0, -0.36, 0.56, 0.04);
g.stroke();
// (the chains and hooks at its ends, lying on the sand)
g.strokeStyle = "#45413a";
g.lineWidth = 0.03;
for (const s of [-1, 1]) {
  g.beginPath();
  g.moveTo(s * 0.66, 0.12);
  g.lineTo(s * 0.74, 0.26);
  g.arc(s * 0.71, 0.3, 0.045, -0.5, Math.PI + 0.5);
  g.stroke();
}
L.paper(g, -0.85, -0.3, 1.7, 0.7, 0.7);
