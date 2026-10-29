// One of Elzéard's hives at the edge's foot, across the stream (`hives` "hives"): a box of weathered pale boards on a
// flat stone, a stone slab for its lid, the dark slot of its entrance near the foot — or (`hives` "stands") only the
// flat stone it stood on, the hive taken away; or nothing ("none"). Its point (unnamed) is the hive's middle, or the
// stone's
const h = e.state.hives;
if (h === "none") return;
g.fillStyle = "#8f8676";
g.beginPath();
g.moveTo(-0.36, 0);
g.lineTo(-0.32, -0.1);
g.lineTo(0.33, -0.1);
g.lineTo(0.37, 0);
g.closePath();
g.fill();
if (h !== "hives") {
  g.fillStyle = "#a59c8b";
  g.fillRect(-0.3, -0.105, 0.6, 0.02);
  e.at(0, -0.1);
  return;
}
g.fillStyle = "#d3ccbb";
g.fillRect(-0.24, -0.62, 0.48, 0.52);
g.fillStyle = "#bdb5a3";
for (let i = 0; i < 3; i++) g.fillRect(-0.24, -0.6 + i * 0.17, 0.48, 0.012);
g.fillStyle = "#3a3229";
g.fillRect(-0.12, -0.16, 0.24, 0.025);
g.fillStyle = "#7c7466";
g.beginPath();
g.moveTo(-0.32, -0.62);
g.lineTo(-0.28, -0.7);
g.lineTo(0.3, -0.69);
g.lineTo(0.33, -0.61);
g.closePath();
g.fill();
e.at(0, -0.4);
