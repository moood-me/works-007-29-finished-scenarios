// The izba's gable end toward the eye (facing it, x across — x 0 under the ridge, 5.0 m ahead): its logs from the far
// wall's corner (x −2.7) to the yard wall's (x 2.7), and over them the gable of upright weathered boards up to the ridge
// (4.82 m), a small dark vent in it, the barge boards along its two edges under the roof's eaves.
const L = e.lib;
L.logs(g, 7, -2.7, 2.7, 2.75);
g.fillStyle = "#7c7262";
g.fillRect(-2.7, -0.22, 5.4, 0.22);
// the gable: boards from the wall's top up to the roof's edges
g.save();
g.beginPath();
g.moveTo(-3.0, -2.65);
g.lineTo(0, -4.82);
g.lineTo(3.0, -2.65);
g.closePath();
g.clip();
for (let i = 0, x = -3.0; x < 3.0; i++, x += 0.2) {
  g.fillStyle = ["#9a9080", "#8f8676", "#a39a89"][Math.floor(L.rnd(i, 301) * 3)];
  g.fillRect(x, -4.9, 0.19, 2.3);
}
g.restore();
g.fillStyle = "#3d3832";
g.fillRect(-0.2, -3.85, 0.4, 0.3);
// the barge boards
g.strokeStyle = "#6f6a60";
g.lineWidth = 0.14;
g.beginPath();
g.moveTo(-3.1, -2.58);
g.lineTo(0, -4.86);
g.lineTo(3.1, -2.58);
g.stroke();
L.paper(g, -3.2, -4.95, 6.4, 4.95, 1.2, 0.45);
