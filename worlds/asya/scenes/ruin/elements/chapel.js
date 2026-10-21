// The chapel by the road below the cliff, 270 m off and 110 m down: a small whitewashed stone chapel, its slate roof
// and a bell-cote on the gable, a round apse; its churchyard's low wall, two walnuts and a row of poplars along the
// road. Small in the frame, low on the right.
const L = e.lib;
// poplars along the road, behind
g.fillStyle = "#6b8b52";
for (let i = 0; i < 6; i++) {
  const x = -40 + 15 * i + 4 * L.rnd(i, 101);
  const h = 18 + 7 * L.rnd(i, 103);
  g.beginPath();
  g.ellipse(x, -h * 0.5, 2.3, h * 0.5, 0, 0, Math.PI * 2);
  g.fill();
}
// two walnuts, round and dark
g.fillStyle = "#5f7d4c";
for (const [x, r] of [[-17, 6], [19, 7]]) {
  g.beginPath();
  g.arc(x, -r - 1.5, r, 0, Math.PI * 2);
  g.fill();
  g.fillRect(x - 0.4, -2, 0.8, 2);
}
// the churchyard's low wall
g.fillStyle = "#d6ccb6";
g.fillRect(-13, -1.2, 28, 1.2);
// the chapel: the nave's gable end toward us, the apse behind it on the right, the bell-cote over the gable
g.fillStyle = "#efe9de";
g.fillRect(-5, -7, 10, 7);
g.fillStyle = "#e6dfd2";
g.beginPath();
g.ellipse(6.4, -2.6, 2.4, 2.6, 0, Math.PI, 0);
g.fillRect(4.6, -2.6, 3.6, 2.6);
g.fill();
g.fillStyle = "#6c7480";
g.beginPath();
g.moveTo(-5.6, -7);
g.lineTo(0, -11.5);
g.lineTo(5.6, -7);
g.fill();
g.fillStyle = "#efe9de";
g.fillRect(-0.9, -14, 1.8, 3);
g.fillStyle = "#6c7480";
g.beginPath();
g.moveTo(-1.3, -14);
g.lineTo(0, -15.8);
g.lineTo(1.3, -14);
g.fill();
// its door and a small round window
g.fillStyle = "#6d5544";
g.fillRect(-1, -3, 2, 3);
g.fillStyle = "#5d6470";
g.beginPath();
g.arc(0, -5.3, 0.7, 0, Math.PI * 2);
g.fill();
e.at(0, -8, "chapel");
L.unfinish(g, [-42, -30, 42, 1], 125, 268);
