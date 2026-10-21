// Ivanov's kit bag, set down on the floor by the door: the khaki sack slumped on its bottom, its neck tied with a
// cord, the shoulder loop lying over it.
const L = e.lib;
g.fillStyle = "#857b56";
g.beginPath();
g.moveTo(-0.22, 0);
g.quadraticCurveTo(-0.26, -0.22, -0.12, -0.36);
g.quadraticCurveTo(-0.05, -0.4, -0.04, -0.44);
g.lineTo(0.04, -0.44);
g.quadraticCurveTo(0.05, -0.4, 0.12, -0.36);
g.quadraticCurveTo(0.26, -0.22, 0.22, 0);
g.closePath();
g.fill();
g.fillStyle = "rgba(70,62,40,0.45)";
g.beginPath();
g.ellipse(0.06, -0.15, 0.08, 0.12, 0.3, 0, Math.PI * 2);
g.fill();
g.fillStyle = "#5b4f34";
g.fillRect(-0.05, -0.42, 0.1, 0.025);
g.strokeStyle = "#6c6142";
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(-0.03, -0.41);
g.quadraticCurveTo(-0.3, -0.3, -0.16, -0.06);
g.stroke();
L.strokes(g, 141, -0.22, -0.44, 0.44, 0.44, ["#9b9068", "#6f6545"], 20, 0.15, 0.02, 1.2, 0.4);
L.paper(g, -0.26, -0.45, 0.52, 0.46, 0.8);
e.at(0, -0.25, "sack");
