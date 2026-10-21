// The izba's long wall to the yard (facing right: x runs away from the eye — x 0 is 7 m ahead): weathered grey-silver
// logs on a low earth-and-stone footing, the door onto the porch standing open (its sill at the porch's 0.5 m; the leaf
// swung in against the far jamb, the dark of the passage behind it — `house_lights` lays the stove's warm light in it),
// three windows in carved white-blue frames.
const L = e.lib;
L.logs(g, 3, -4.5, 4.5, 2.75);
g.fillStyle = "#7c7262";
g.fillRect(-4.5, -0.22, 9, 0.22);
L.strokes(g, 5, -4.5, -0.22, 9, 0.22, ["#958a76", "#655c50"], 60, 0.25, 0.04, 0, 0.4);
// the door: its frame, the opening, the planked leaf swung in against the far jamb, a dark iron handle on it
g.fillStyle = "#6f604e";
g.fillRect(-0.5, -2.42, 1.0, 1.92);
g.fillStyle = "#4a3a2d";
g.fillRect(-0.42, -2.35, 0.84, 1.85);
g.fillStyle = "#94806a";
g.fillRect(0.2, -2.35, 0.22, 1.85);
g.fillStyle = "#7d6b57";
g.fillRect(0.3, -2.35, 0.012, 1.85);
g.fillStyle = "#3b342e";
g.fillRect(0.23, -1.45, 0.04, 0.14);
e.at(0, -1.45, "door");
// the windows
L.windowFrame(g, -2.6, 1.0, 1.9);
L.windowFrame(g, 1.9, 1.0, 1.9);
L.windowFrame(g, 3.6, 1.0, 1.9);
e.at(1.9, -1.45, "window");
