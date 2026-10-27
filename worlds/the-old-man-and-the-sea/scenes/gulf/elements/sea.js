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
for (let i = 0; i < 1600; i++) {
  const d = 1 + Math.pow(e.rnd(), 1.6) * 40;
  const x = (e.rnd() - 0.5) * (8 + d * 2.2);
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(150,170,230,0.45)' : 'rgba(190,150,200,0.35)';
  g.fillRect(x, D - d, 0.03 + e.rnd() * 0.04, 0.03 + e.rnd() * 0.04);
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
const weed = (x, d, w, h) => {
  for (let j = 0; j < 14; j++) {
    const cx = x + (e.rnd() - 0.5) * w;
    const cy = D - d + (e.rnd() - 0.5) * h;
    const r = (0.15 + e.rnd() * 0.35) * Math.min(w, h * 3);
    g.fillStyle = e.rnd() < 0.6 ? 'rgba(196,164,72,0.9)' : 'rgba(160,128,58,0.9)';
    g.beginPath();
    g.ellipse(cx, cy, r, r * (0.4 + e.rnd() * 0.4), e.rnd() * 3, 0, Math.PI * 2);
    g.fill();
  }
};
for (const [x, d, w, h] of [[-9, 16, 3, 1.2], [6.5, 21, 2.2, 0.8], [-3, 34, 7, 1], [14, 48, 9, 1.6], [-22, 60, 12, 2], [30, 95, 16, 2.5], [-45, 140, 30, 4], [10, 220, 40, 5]]) weed(x, d, w, h);
