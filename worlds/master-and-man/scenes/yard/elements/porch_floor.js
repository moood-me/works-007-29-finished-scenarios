// The porch's landing, seen from above: planks running across, swept down the middle, snow lying at its sides and
// against the wall; people stand on it ("walk").
// (x −1.1…1.1 m across, y −0.75…0.75: the far edge at the house's wall)
const C = e.lib.C;
g.fillStyle = "#8f7f6b";
g.fillRect(-1.1, -0.75, 2.2, 1.5);
g.strokeStyle = "#6c5e4e";
g.lineWidth = 0.015;
for (let y = -0.75; y < 0.75; y += 0.15) {
  g.beginPath();
  g.moveTo(-1.1, y);
  g.lineTo(1.1, y);
  g.stroke();
}
g.fillStyle = C.snow;
g.beginPath();
g.moveTo(-1.1, -0.75);
g.lineTo(1.1, -0.75);
g.lineTo(1.1, -0.55);
g.quadraticCurveTo(0, -0.62, -0.6, -0.5);
g.quadraticCurveTo(-1.0, -0.2, -0.9, 0.75);
g.lineTo(-1.1, 0.75);
g.closePath();
g.fill();
g.fillStyle = "rgba(210,220,232,0.8)";
g.beginPath();
g.ellipse(0.75, 0.55, 0.3, 0.12, 0, 0, Math.PI * 2);
g.fill();
