// The courtyard beyond the window: the wall of the house across it, six metres off, its foot on the yard far below
// (x runs away along it): ochre plaster gone grey with wet and soot, darker where the water runs, four storeys of small
// windows, drainpipes, a cornice at the roof — over the window's top
const INK = e.lib.INK;
g.fillStyle = '#b9ab8c';
g.fillRect(-12, -11.5, 24, 11.5);
for (let i = 0; i < 30; i++) {
  const x = -12 + 24 * e.anim.hash(i, 31), len = 2 + 6 * e.anim.hash(i, 32);
  const run = g.createLinearGradient(0, -11.5, 0, -11.5 + len);
  run.addColorStop(0, 'rgba(96,92,76,0.35)');
  run.addColorStop(1, 'rgba(96,92,76,0)');
  g.fillStyle = run;
  g.fillRect(x, -11.5, 0.2 + 0.3 * e.anim.hash(i, 33), len);
}
// (the foot gone dark with the splashing rain)
const foot = g.createLinearGradient(0, -1.2, 0, 0);
foot.addColorStop(0, 'rgba(70,66,56,0)');
foot.addColorStop(1, 'rgba(70,66,56,0.5)');
g.fillStyle = foot;
g.fillRect(-12, -1.2, 24, 1.2);
// (the windows, four storeys; a low door to a cellar)
for (const top of [-10.6, -7.6, -4.6]) {
  for (let x = -11.2; x < 11.4; x += 1.5) {
    e.lib.box(g, x - 0.08, top - 0.08, 0.96, 1.56, '#cfc4a8', 0.02);
    e.lib.box(g, x, top, 0.8, 1.4, '#5f6870', 0.02);
    g.fillStyle = '#cfc4a8';
    g.fillRect(x + 0.38, top, 0.04, 1.4);
    g.fillRect(x, top + 0.6, 0.8, 0.04);
  }
}
for (let x = -10.4; x < 11; x += 3) e.lib.box(g, x, -1.7, 0.8, 1.2, '#5f6870', 0.02);
e.lib.box(g, 1.0, -2.0, 1.0, 2.0, '#5b4a3c', 0.02);
// (the cornice, the drainpipes)
e.lib.box(g, -12, -11.5, 24, 0.25, '#a99a7c', 0.02);
for (const x of [-6.4, 1.62, 8.2]) e.lib.box(g, x, -11.5, 0.1, 11.5, '#6a6862', 0.015);
