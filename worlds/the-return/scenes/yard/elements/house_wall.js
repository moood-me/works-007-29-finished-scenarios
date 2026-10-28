// The izba's long wall to the yard (facing right: x runs away from the eye — x 0 is 8.3 m ahead, the wall from 5.0 to
// 11.6 m): weathered grey-silver logs on a low earth-and-stone footing, the door onto the porch standing open (x −0.3:
// its sill at the porch's 0.5 m; the leaf swung in against the far jamb, the dark of the passage behind it —
// `house_lights` lays the stove's warm light in it), a window either side in carved white-blue frames, the war's paper
// strips still crosswise on their panes, the far one's lower pane boarded over. The log ends of the near corner stand
// out past the wall (x −3.3); `house_end` is the gable end beyond it.
const L = e.lib;
L.logs(g, 3, -3.3, 3.3, 2.75);
g.fillStyle = "#7c7262";
g.fillRect(-3.3, -0.22, 6.6, 0.22);
L.strokes(g, 5, -3.3, -0.22, 6.6, 0.22, ["#958a76", "#655c50"], 30, 0.35, 0.08, 0, 0.3);
// the near corner: the logs' round ends, one over another
for (let i = 0, y = -0.13; y > -2.75; i++, y -= 0.26) {
  g.fillStyle = "#6e6454";
  g.beginPath();
  g.ellipse(-3.3, y, 0.15, 0.135, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = ["#b7a98d", "#ab9d82", "#c0b296"][i % 3];
  g.beginPath();
  g.ellipse(-3.3, y, 0.12, 0.11, 0, 0, Math.PI * 2);
  g.fill();
}
// the door: its frame, the opening, the planked leaf swung in against the far jamb, a dark iron handle on it
g.fillStyle = "#6f604e";
g.fillRect(-0.8, -2.42, 1.0, 1.92);
g.fillStyle = "#4a3a2d";
g.fillRect(-0.72, -2.35, 0.84, 1.85);
g.fillStyle = "#94806a";
g.fillRect(-0.1, -2.35, 0.22, 1.85);
g.fillStyle = "#7d6b57";
g.fillRect(0.0, -2.35, 0.012, 1.85);
g.fillStyle = "#3b342e";
g.fillRect(-0.07, -1.45, 0.04, 0.14);
e.at(-0.3, -1.45, "door");
// the windows
L.windowFrame(g, -2.1, 1.0, 1.9);
L.windowFrame(g, 1.75, 1.0, 1.9, 0.78, true);
e.at(1.75, -1.45, "window");
