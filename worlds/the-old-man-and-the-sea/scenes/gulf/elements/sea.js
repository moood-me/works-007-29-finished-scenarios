// The Gulf Stream far out, from above, metres, in its daylight colours (the scene's light makes the hour): the water
// so deep a blue it is almost violet near the skiff, the sifted plankton specks in it catching the light; paling to the
// sky's blue toward the horizon; patches and long rows of yellow Sargasso weed drifting on it; long streaks of the
// swell lying across. The plane's centre is 1500 m out: distance = 1500 - y.
const D = 1500;
const deep = g.createLinearGradient(0, D, 0, D - 3000);
for (const [d, c] of [[0, '#232a6a'], [20, '#262f72'], [60, '#33438a'], [150, '#4f68a8'], [400, '#7f97c8'], [1200, '#a6b6da'], [3000, '#c4cde4']]) deep.addColorStop(d / 3000, c);
g.fillStyle = deep;
g.fillRect(-4000, -1500, 8000, 3000);
// the plankton: fine specks of light down in the near water
for (let i = 0; i < 900; i++) {
  const d = 2 + Math.pow(e.rnd(), 1.4) * 30;
  const x = (e.rnd() - 0.5) * (8 + d * 2.2);
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(150,170,230,0.22)' : 'rgba(196,150,196,0.18)';
  g.beginPath();
  g.arc(x, D - d, 0.008 + e.rnd() * 0.012, 0, Math.PI * 2);
  g.fill();
}
// the swell: long streaks lying across, lighter and darker, short and dense far off, long and sparse near
for (let i = 0; i < 1100; i++) {
  const near = Math.pow(e.rnd(), 2.4);
  const d = 12 + (1 - near) * 2900;
  const x = (e.rnd() - 0.5) * (60 + d * 1.6);
  const len = 1.5 + e.rnd() * 6 + near * 14 + d * 0.01;
  g.fillStyle = e.rnd() < 0.5 + 0.3 * (1 - near) ? 'rgba(186,196,232,0.2)' : 'rgba(20,24,70,0.25)';
  g.fillRect(x, D - d, len, 0.1 + e.rnd() * 0.2 + d * 0.0015);
}
// the weed: ragged yellow patches, some strung out in rows along the current
// (each a loose cluster of small clumps, thinning toward its ends, the clumps' sprigs darker at their hearts)
const weed = (x, d, w, h, n) => {
  for (let j = 0; j < n; j++) {
    const u = e.rnd() - 0.5;
    const cx = x + u * w;
    const cy = D - d + (e.rnd() - 0.5) * h * (1 - Math.abs(u));
    const r = (0.06 + e.rnd() * 0.16) * (1 + d / 60);
    g.fillStyle = e.rnd() < 0.6 ? 'rgba(186,152,64,0.85)' : 'rgba(150,118,52,0.85)';
    g.beginPath();
    for (let k = 0; k < 7; k++) {
      const a = (k / 7) * Math.PI * 2;
      const rr = r * (0.55 + 0.45 * e.rnd());
      g.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr * 0.7);
    }
    g.closePath();
    g.fill();
    g.fillStyle = 'rgba(110,84,40,0.6)';
    g.beginPath();
    g.arc(cx, cy, r * 0.3, 0, Math.PI * 2);
    g.fill();
  }
};
for (const [x, d, w, h, n] of [[-6, 12, 1.6, 0.5, 30], [5.5, 17, 1.1, 0.35, 18], [-3, 30, 6, 0.6, 60], [14, 44, 9, 1, 70], [-22, 60, 12, 1.4, 80], [30, 95, 18, 2, 90], [-45, 140, 30, 3, 110], [10, 220, 40, 4, 120]]) weed(x, d, w, h, n);
