// What stands up on the table at its right: a clay milk jug, glazed dark at its top, and a tin mug beside it.
const L = e.lib;
g.fillStyle = "#a8683e";
g.beginPath();
g.moveTo(-0.07, 0);
g.quadraticCurveTo(-0.11, -0.1, -0.07, -0.18);
g.lineTo(-0.05, -0.24);
g.lineTo(0.05, -0.24);
g.lineTo(0.07, -0.18);
g.quadraticCurveTo(0.11, -0.1, 0.07, 0);
g.closePath();
g.fill();
g.fillStyle = "#6a4a32";
g.fillRect(-0.06, -0.25, 0.12, 0.06);
g.fillStyle = "#c58a5a";
g.fillRect(-0.04, -0.15, 0.025, 0.12);
// the mug
g.fillStyle = "#8f9290";
g.fillRect(0.12, -0.1, 0.08, 0.1);
g.strokeStyle = "#7b7e7c";
g.lineWidth = 0.012;
g.beginPath();
g.arc(0.2, -0.05, 0.03, -Math.PI / 2, Math.PI / 2);
g.stroke();
L.paper(g, -0.12, -0.26, 0.36, 0.27, 0.5);
