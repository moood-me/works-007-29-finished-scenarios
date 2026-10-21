// The courtyard beyond the window: the wall of the house across it, a few metres off, seen through the rain (x runs
// away along it; its foot far below, out of sight): ochre plaster gone grey with wet and soot, darker where the water
// runs, rows of small windows, a drainpipe, a cornice
const INK = e.lib.INK;
g.fillStyle = '#b9ab8c';
g.fillRect(-3.6, -9, 7.2, 9);
for (let i = 0; i < 14; i++) {
  const x = -3.5 + 7 * e.anim.hash(i, 31), len = 2 + 5 * e.anim.hash(i, 32);
  const run = g.createLinearGradient(0, -9, 0, -9 + len);
  run.addColorStop(0, 'rgba(96,92,76,0.35)');
  run.addColorStop(1, 'rgba(96,92,76,0)');
  g.fillStyle = run;
  g.fillRect(x, -9, 0.2 + 0.3 * e.anim.hash(i, 33), len);
}
// (the windows, three storeys)
for (const top of [-8.2, -5.2, -2.2]) {
  for (let x = -3.2; x < 3.4; x += 1.5) {
    e.lib.box(g, x - 0.08, top - 0.08, 0.96, 1.56, '#cfc4a8', 0.02);
    e.lib.box(g, x, top, 0.8, 1.4, '#5f6870', 0.02);
    g.fillStyle = '#cfc4a8';
    g.fillRect(x + 0.38, top, 0.04, 1.4);
    g.fillRect(x, top + 0.6, 0.8, 0.04);
  }
}
// (the cornice, the drainpipe)
e.lib.box(g, -3.6, -9, 7.2, 0.25, '#a99a7c', 0.02);
e.lib.box(g, 1.62, -9, 0.1, 9, '#6a6862', 0.015);
