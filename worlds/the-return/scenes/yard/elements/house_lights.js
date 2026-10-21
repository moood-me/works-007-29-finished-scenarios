// What is lit inside the izba, on the wall's plane (as `house_wall`: x runs away from the eye, x 0 is 7 m ahead): the
// lower panes of the three windows, the lamp lit behind them, and the passage through the open door, the stove's light
// in it — each a glow and a source of light (the porch takes the door's).
const PANES = [-2.6, 1.9, 3.6];
for (const [i, x] of PANES.entries()) {
  g.fillStyle = "#d9a45e";
  g.fillRect(x - 0.39, -1.45, 0.78, 0.45);
  g.fillStyle = "#c9d2d2";
  g.fillRect(x - 0.025, -1.45, 0.05, 0.45);
  e.light(x, -1.25, 0.5, "#ffbf72", 0.55, `window${i + 1}`);
}
g.fillStyle = "#8a5634";
g.fillRect(-0.42, -2.35, 0.62, 1.85);
g.fillStyle = "#b9763e";
g.fillRect(-0.3, -1.6, 0.4, 1.1);
e.light(-0.1, -1.1, 0.8, "#ffb060", 0.85, "door");
