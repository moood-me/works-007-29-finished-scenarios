// What glows inside the izba, on the wall's plane (as `house_wall`: x runs away from the eye, x 0 is 8.3 m ahead, the
// door at x −0.3): the passage through the open door, the stove's fire far in it — a warm glow even by day, the scene's
// light `stove` on the porch and the boards of the passage.
g.fillStyle = "#9a5a2c";
g.fillRect(-0.72, -2.35, 0.62, 1.85);
g.fillStyle = "#cf8540";
g.fillRect(-0.62, -1.75, 0.44, 1.25);
g.fillStyle = "#f2b45e";
g.fillRect(-0.54, -1.08, 0.28, 0.45);
e.light(-0.4, -1.1, 0.7, "#ffaa55", 0.9, "door");
