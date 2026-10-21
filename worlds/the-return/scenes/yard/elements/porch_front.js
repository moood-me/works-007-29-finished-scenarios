// The porch's front toward the eye: its planked face (x −0.65…0.65, 0.5 m high) and, to the right, the two steps' ends
// down to the yard (x 0.65…1.25), the dark under them.
const L = e.lib, TONES = ["#8e7f68", "#857660", "#988871"];
L.boards(g, 141, -0.65, -0.5, 1.3, 0.5, 0.125, TONES);
L.boards(g, 143, 0.65, -0.33, 0.3, 0.33, 0.11, TONES);
L.boards(g, 145, 0.95, -0.17, 0.3, 0.17, 0.085, TONES);
g.fillStyle = "#5b5144";
g.fillRect(-0.65, -0.04, 1.9, 0.04);
