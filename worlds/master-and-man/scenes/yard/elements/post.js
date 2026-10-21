// The hitching post by the gate: a round grey post with a cap of snow, an iron ring at its middle where the rein is
// tied (the point `ring`).
// (x −0.15…0.15 m, its foot at 0, 1.4 m tall)
const L = e.lib;
const C = L.C;
g.fillStyle = "#857c71";
g.beginPath();
g.moveTo(-0.11, 0);
g.lineTo(-0.1, -1.38);
g.quadraticCurveTo(0, -1.44, 0.1, -1.38);
g.lineTo(0.11, 0);
g.closePath();
g.fill();
g.fillStyle = "rgba(70,62,54,0.5)";
g.fillRect(0.05, -1.36, 0.05, 1.36);
g.strokeStyle = "#5b544c";
g.lineWidth = 0.012;
for (let i = 0; i < 5; i++) {
  g.beginPath();
  g.moveTo(-0.06 + i * 0.03, -0.1);
  g.lineTo(-0.05 + i * 0.03, -1.3);
  g.stroke();
}
L.snowCap(g, -0.12, 0.12, -1.4, 0.07, 51);
g.strokeStyle = C.iron;
g.lineWidth = 0.025;
g.beginPath();
g.ellipse(-0.12, -1.0, 0.05, 0.065, 0, 0, Math.PI * 2);
g.stroke();
g.fillStyle = C.snow;
g.beginPath();
g.ellipse(0, 0.02, 0.28, 0.12, 0, Math.PI, 0);
g.fill();
e.at(-0.12, -1.0, "ring");
