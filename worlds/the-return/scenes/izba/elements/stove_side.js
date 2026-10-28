// The stove's long side, turned to the room (across −1.15, facing right: x runs away from the eye, x 0 is 3.575 m
// ahead — its near corner at x −0.825, 2.75 ahead; the back wall at x 0.825): whitewash; the wooden step-box at its
// near end (the way up onto the stove, where Petrushka sleeps); a little niche; the chimney's breast rising from the
// stove's top to the ceiling at the far end, its iron damper; and across the gap between the stove's top and the ceiling
// a curtain of blue cotton print on a string, hiding the sleeping place up there. No shadow of its own (the fire's light
// leaves through the mouth on the other face).
const L = e.lib;
L.whitewash(g, 93, -0.825, -1.95, 1.65, 1.95);
g.fillStyle = "#c9bea8";
g.fillRect(-0.825, -0.12, 1.65, 0.12);
// the cornice along the top
g.fillStyle = "#e2d9c4";
g.fillRect(-0.825, -1.95, 1.65, 0.08);
g.fillStyle = "rgba(120,104,82,0.3)";
g.fillRect(-0.825, -1.87, 1.65, 0.02);
// the chimney's breast up to the ceiling, its damper's round iron lid
L.whitewash(g, 95, 0.3, -2.25, 0.525, 0.32);
g.fillStyle = "rgba(120,104,82,0.3)";
g.fillRect(0.3, -2.25, 0.03, 0.32);
g.fillStyle = "#4e4943";
g.beginPath();
g.arc(0.56, -2.1, 0.05, 0, Math.PI * 2);
g.fill();
// the curtain on its string between the stove's top and the ceiling, from the near corner to the chimney
g.fillStyle = "#4f6c9a";
g.fillRect(-0.825, -2.25, 1.125, 0.31);
for (let i = 0; i < 60; i++) {
  g.fillStyle = i % 3 ? "#e8e2d2" : "#c9573f";
  g.beginPath();
  g.arc(-0.8 + 1.08 * L.rnd(i, 97), -2.22 + 0.26 * L.rnd(i, 98), 0.011, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = "rgba(30,40,64,0.35)";
for (let x = -0.78; x < 0.3; x += 0.09) g.fillRect(x, -2.25, 0.025, 0.31);
// the step-box at the near end: boards, its top a step, a little door in its side
L.planks(g, 99, -0.825, -0.9, 0.48, 0.9, 0.16, ["#9a7f5c", "#8f7553", "#a3896a"], false, 0.6);
g.fillStyle = "rgba(60,46,32,0.5)";
g.fillRect(-0.825, -0.9, 0.48, 0.025);
g.fillRect(-0.36, -0.9, 0.015, 0.9);
g.fillStyle = "#7a6248";
g.fillRect(-0.73, -0.7, 0.28, 0.5);
g.fillStyle = "#3d3833";
g.fillRect(-0.5, -0.47, 0.025, 0.05);
// a little niche halfway along, a tin box in it
L.arch(g, 0.0, 0.2, -1.25, 0.12, 0.07);
g.fillStyle = "#9c8f7a";
g.fill();
g.fillStyle = "#7f8582";
g.fillRect(0.05, -1.36, 0.1, 0.11);
