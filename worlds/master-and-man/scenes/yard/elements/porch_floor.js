// The porch's landing, seen from above: planks running across, snow lying along the wall and drifted in at the left
// under the railing, swept and trodden grey from the door (x 0) to the steps at the right; people stand on it
// ("walk").
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
// (snow along the wall and drifted in at the left)
g.fillStyle = C.snow;
g.beginPath();
g.moveTo(-1.1, -0.75);
g.lineTo(1.1, -0.75);
g.lineTo(1.1, -0.62);
g.quadraticCurveTo(0.4, -0.66, 0.1, -0.6);
g.quadraticCurveTo(-0.55, -0.5, -0.7, -0.1);
g.quadraticCurveTo(-0.8, 0.4, -0.65, 0.75);
g.lineTo(-1.1, 0.75);
g.closePath();
g.fill();
// (the trodden way from the door to the steps)
g.fillStyle = "rgba(200,210,224,0.75)";
g.beginPath();
g.ellipse(0.4, 0.0, 0.65, 0.32, 0.35, 0, Math.PI * 2);
g.fill();
