// What glows inside the izba, on the wall's plane (as `house_wall`: x runs away from the eye, x 0 is 7 m ahead): the
// passage through the open door, the stove's fire far in it — a dim warm glow by day, the scene's light `stove` on the
// porch and the boards of the passage.
g.fillStyle = "#93582f";
g.fillRect(-0.42, -2.35, 0.62, 1.85);
g.fillStyle = "#c27e42";
g.fillRect(-0.32, -1.75, 0.44, 1.25);
g.fillStyle = "#e8a85a";
g.fillRect(-0.24, -1.05, 0.28, 0.4);
e.light(-0.1, -1.1, 0.6, "#ffaa55", 0.6, "door");
