// The window lit from within: a warm pane, a little brighter in the middle, with its wooden cross; its light (`pane`)
// is the scene's window_light. With the lamp out, a dark pane
const lit = e.state.lamp > 0.5;
if (lit) {
  const pane = g.createRadialGradient(0, -0.38, 0.02, 0, -0.38, 0.45);
  pane.addColorStop(0, "#ffe2a8");
  pane.addColorStop(1, "#f2a95e");
  g.fillStyle = pane;
} else {
  g.fillStyle = "#2f2a2a";
}
g.fillRect(-0.35, -0.725, 0.7, 0.7);
g.fillStyle = "#4f3e30";
g.fillRect(-0.02, -0.725, 0.04, 0.7);
g.fillRect(-0.35, -0.395, 0.7, 0.04);
e.light(0, -0.38, 0.3, "#ffcf8a", 0.9, "pane");
