// The bay and the Gulf beyond it from above, metres, in their daylight colours (the scene's light makes the hour): by
// the Terrace's piles the water is green-blue over the sandy bottom, then the deep dark blue, almost violet, paling to
// the sky's blue toward the horizon; streaks of the swell lie across it. The plane's centre is 1500 m out:
// distance = 1500 - y.
const D = 1500;
const deep = g.createLinearGradient(0, D, 0, D - 3000);
for (const [d, c] of [[0, '#4f8f98'], [30, '#3f6f90'], [70, '#2e4277'], [140, '#4a64a0'], [300, '#7d96c8'], [800, '#a3b5dc'], [3000, '#c8cce6']]) deep.addColorStop(d / 3000, c);
g.fillStyle = deep;
g.fillRect(-4000, -1500, 8000, 3000);
// the swell: long streaks lying across, lighter and darker, short and dense far off, long and sparse near
for (let i = 0; i < 1100; i++) {
  const near = Math.pow(e.rnd(), 2.4);
  const d = 20 + (1 - near) * 2900;
  const x = (e.rnd() - 0.5) * (60 + d * 1.6);
  const len = 1.5 + e.rnd() * 6 + near * 14 + d * 0.01;
  g.fillStyle = e.rnd() < 0.55 + 0.3 * (1 - near) ? 'rgba(206,206,228,0.22)' : 'rgba(30,40,80,0.22)';
  g.fillRect(x, D - d, len, 0.1 + e.rnd() * 0.2 + d * 0.0015);
}
