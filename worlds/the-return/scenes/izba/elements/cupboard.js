// The little cupboard hung on the back wall to the right (its foot 1.2 m up): plank sides painted a faded blue-grey,
// its door with an iron hasp and a small padlock — the sugar is kept in it, and the boy keeps the key.
const L = e.lib;
g.fillStyle = "#7f8c92";
g.fillRect(-0.32, -0.64, 0.64, 0.64);
g.fillStyle = "#94a1a5";
g.fillRect(-0.27, -0.58, 0.54, 0.53);
g.fillStyle = "rgba(60,64,66,0.5)";
g.fillRect(-0.005, -0.58, 0.01, 0.53);
g.fillStyle = "#6f7b80";
g.fillRect(-0.34, -0.68, 0.68, 0.05);
g.fillRect(-0.34, -0.03, 0.68, 0.04);
// the hasp and the padlock
g.fillStyle = "#3e3b38";
g.fillRect(0.0, -0.36, 0.08, 0.025);
g.strokeStyle = "#4a4643";
g.lineWidth = 0.008;
g.beginPath();
g.arc(0.05, -0.32, 0.018, Math.PI, 0);
g.stroke();
g.fillStyle = "#5b5650";
g.fillRect(0.026, -0.32, 0.048, 0.045);
L.strokes(g, 131, -0.32, -0.64, 0.64, 0.64, ["#a9b4b6", "#6c777b"], 30, 0.2, 0.015, Math.PI / 2, 0.4);
L.paper(g, -0.34, -0.68, 0.68, 0.69, 1.0);
e.at(0.05, -0.3, "lock");
