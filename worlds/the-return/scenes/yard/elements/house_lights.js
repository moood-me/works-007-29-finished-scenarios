// What is lit inside the izba, on the wall's plane (as `house_wall`: x runs away from the eye, x 0 is 7 m ahead): the
// lower panes of the three windows, the lamp lit behind them, and the passage through the open door, the stove's fire
// in it — each a glow; the door's is the scene's warm light on the porch and on those standing before it (`stove`).
const PANES = [-2.6, 1.9, 3.6];
for (const [i, x] of PANES.entries()) {
  g.fillStyle = "#e0a85c";
  g.fillRect(x - 0.39, -1.45, 0.78, 0.45);
  g.fillStyle = "#c9d2d2";
  g.fillRect(x - 0.025, -1.45, 0.05, 0.45);
  e.light(x, -1.25, 0.5, "#ffbf72", 0.6, `window${i + 1}`);
}
g.fillStyle = "#93582f";
g.fillRect(-0.42, -2.35, 0.62, 1.85);
g.fillStyle = "#cf8540";
g.fillRect(-0.32, -1.75, 0.44, 1.25);
g.fillStyle = "#f2b45c";
g.fillRect(-0.24, -1.05, 0.28, 0.4);
e.light(-0.1, -1.1, 0.9, "#ffaa55", 1.0, "door");
