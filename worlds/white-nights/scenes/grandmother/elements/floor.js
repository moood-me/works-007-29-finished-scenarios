// The floor from above (x −2.7…2.7 across, y −3 at the back wall … 3 at the room's front): wide painted planks running
// from the back toward the viewer, each a little its own tone, their joints; a homespun striped runner from the door
// toward the armchair (x −2.65…−0.85, 3.75…4.35 m into the room)
const INK = e.lib.INK;
for (let i = 0; i < 25; i++) {
  const x = -2.7 + i * 0.22, k = e.anim.hash(i, 7);
  g.fillStyle = `rgb(${Math.round(172 + 14 * k)},${Math.round(136 + 10 * k)},${Math.round(98 + 8 * k)})`;
  g.fillRect(x, -3, 0.22, 6);
}
// (the paint worn unevenly: the lithograph's wash over the planks)
e.lib.wash(g, -2.7, -3, 5.4, 6, [176, 140, 101], 4, 0.45, 0.8, 0);
g.beginPath();
for (let i = 0; i <= 25; i++) {
  g.moveTo(-2.7 + i * 0.22, -3);
  g.lineTo(-2.7 + i * 0.22, 3);
}
for (let i = 0; i < 25; i++) {
  const y = -3 + 6 * e.anim.hash(i, 8);
  g.moveTo(-2.7 + i * 0.22, y);
  g.lineTo(-2.48 + i * 0.22, y);
}
g.strokeStyle = 'rgba(74,63,58,0.4)';
g.lineWidth = 0.008;
g.stroke();
// (the runner: bands across it, a fringe at its end)
const bands = ['#a4564b', '#e0d3b6', '#5d6f8d', '#e0d3b6', '#b98c4c', '#e0d3b6'];
for (let x = -2.65, i = 0; x < -0.85; x += 0.12, i++) {
  g.fillStyle = bands[i % bands.length];
  g.fillRect(x, -1.35, Math.min(0.12, -0.85 - x), 0.6);
}
g.strokeStyle = INK;
g.lineWidth = 0.008;
g.strokeRect(-2.65, -1.35, 1.8, 0.6);
g.beginPath();
for (let y = -1.33; y < -0.75; y += 0.03) {
  g.moveTo(-0.85, y);
  g.lineTo(-0.8, y);
}
g.strokeStyle = 'rgba(200,184,150,0.9)';
g.stroke();
