// The water barrel by the house's corner: staves of dark wood, two iron hoops, a board lid with a dipper on it, sand
// drifted round its foot. (Paint it flat: the scene's light rounds it.)
g.fillStyle = "#6e5641";
g.beginPath();
g.moveTo(-0.3, -0.86);
g.quadraticCurveTo(-0.36, -0.43, -0.3, 0);
g.lineTo(0.3, 0);
g.quadraticCurveTo(0.36, -0.43, 0.3, -0.86);
g.closePath();
g.fill();
g.fillStyle = "rgba(44, 34, 26, 0.5)";
for (let k = -2; k <= 2; k++) g.fillRect(k * 0.12 - 0.008, -0.86, 0.016, 0.86);
g.fillStyle = "#3e3a35";
g.fillRect(-0.34, -0.72, 0.68, 0.05);
g.fillRect(-0.34, -0.2, 0.68, 0.05);
// the lid and the dipper
g.fillStyle = "#8a7258";
g.fillRect(-0.33, -0.9, 0.66, 0.05);
g.fillStyle = "#5d5a55";
g.beginPath();
g.ellipse(0.05, -0.95, 0.09, 0.04, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = "#7a6248";
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(0.12, -0.95);
g.lineTo(0.42, -1.02);
g.stroke();
// sand round its foot
g.fillStyle = "#d8b680";
g.beginPath();
g.ellipse(0, 0.02, 0.5, 0.12, 0, Math.PI, 0);
g.fill();
