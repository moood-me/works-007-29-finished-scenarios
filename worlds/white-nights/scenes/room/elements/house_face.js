// The house's own wall, outside, under the window (seen only from the window, looking down into the yard): wet ochre
// plaster, the windows of the storeys below (x runs toward the viewer, its foot on the yard)
const INK = e.lib.INK;
g.fillStyle = '#ad9f80';
g.fillRect(-2.6, -7.8, 5.2, 7.8);
for (const top of [-6.6, -3.6]) {
  for (const x of [-1.7, -0.2, 1.3]) {
    e.lib.box(g, x - 0.06, top - 0.06, 0.82, 1.42, '#c9bea2', 0.015);
    e.lib.box(g, x, top, 0.7, 1.3, '#5c656c', 0.015);
  }
}
const run = g.createLinearGradient(0, -7.8, 0, 0);
run.addColorStop(0, 'rgba(90,86,70,0.35)');
run.addColorStop(1, 'rgba(90,86,70,0.1)');
g.fillStyle = run;
g.fillRect(-2.6, -7.8, 5.2, 7.8);
