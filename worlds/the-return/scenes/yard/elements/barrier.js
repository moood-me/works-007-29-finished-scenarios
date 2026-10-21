// The crossing's barrier at the top of the rise, on the left of the road: a post striped black and white, the arm hinged
// at its top and raised, striped red and white, its counterweight on the short end — the crossing open.
const L = e.lib;
for (let i = 0; i < 6; i++) {
  g.fillStyle = i % 2 ? "#2f2c2a" : "#e6e1d6";
  g.fillRect(-0.08, -1.2 + i * 0.2, 0.16, 0.2);
}
g.fillStyle = "#4b4640";
g.fillRect(-0.12, -1.28, 0.24, 0.12);
g.save();
g.translate(0, -1.2);
g.rotate(-1.36);
for (let i = 0; i < 9; i++) {
  g.fillStyle = i % 2 ? "#a8463a" : "#e9e3d7";
  g.fillRect(0.1 + i * 0.5, -0.055, 0.5, 0.11);
}
g.fillStyle = "#4f4a44";
g.fillRect(-0.8, -0.1, 0.7, 0.2);
g.restore();
L.paper(g, -1.0, -6.0, 2.4, 6.05, 3);
