// The boat's bottom boards seen from above (x along the boat, bow at +x; y toward its near side): planks along it
// between the sides, narrowing to the bow; two oars lying along them, shipped, their blades toward the bow.
g.fillStyle = "#7d6a52";
g.beginPath();
g.moveTo(-1.95, -0.55);
g.lineTo(1.0, -0.5);
g.quadraticCurveTo(1.9, -0.2, 1.95, 0);
g.quadraticCurveTo(1.9, 0.2, 1.0, 0.5);
g.lineTo(-1.95, 0.55);
g.closePath();
g.fill();
g.strokeStyle = "rgba(60, 48, 36, 0.6)";
g.lineWidth = 0.012;
for (let y = -0.45; y <= 0.45; y += 0.15) {
  g.beginPath();
  g.moveTo(-1.95, y);
  g.lineTo(1.2, y * 0.85);
  g.stroke();
}
// the oars
for (const y of [-0.3, -0.18]) {
  g.strokeStyle = "#b8a684";
  g.lineWidth = 0.045;
  g.beginPath();
  g.moveTo(-1.7, y);
  g.lineTo(0.8, y + 0.02);
  g.stroke();
  g.fillStyle = "#b2a07e";
  g.beginPath();
  g.ellipse(1.15, y + 0.03, 0.38, 0.07, 0.02, 0, Math.PI * 2);
  g.fill();
}
