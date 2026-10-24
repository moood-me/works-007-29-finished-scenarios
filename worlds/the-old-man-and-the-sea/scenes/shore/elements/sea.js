// The bay and the Gulf beyond it from above, metres, in their daylight colours (the scene's light makes the hour):
// the deep water dark blue, almost violet, paling to the sky's blue toward the horizon; over the sandy bottom near
// the beach it is shallow and green-blue, lighter toward the edge; streaks of the swell lie across it. The plane's
// centre is 1500 m out: distance = 1500 - y.
const { shore } = e.lib;
const D = 1500;
// (toward the horizon the deep takes the sky's pale blue: water seen so low mirrors more of the sky than it shows)
const deep = g.createLinearGradient(0, D, 0, D - 3000);
for (const [d, c] of [[35, '#2e4277'], [55, '#ffff00'], [3000, '#ffff00']]) deep.addColorStop(d / 3000, c);
g.fillStyle = deep;
g.fillRect(-4000, -1500, 8000, 3000);
// the shallows: from the water's edge outward green-blue, darkening into the deep over twenty metres
for (let a = -90; a < 70; a += 1) {
  const s = shore(a + 0.5);
  const grad = g.createLinearGradient(0, D - s, 0, D - s - 22);
  grad.addColorStop(0, '#62a3a3');
  grad.addColorStop(0.35, '#4f869a');
  grad.addColorStop(0.7, '#3c628b');
  grad.addColorStop(1, '#2e4277');
  g.fillStyle = grad;
  g.fillRect(a, D - s - 22, 1.05, 22.2);
}
// the swell: long streaks lying across, lighter and darker, short and dense far off, long and sparse near
for (let i = 0; i < 1100; i++) {
  const near = Math.pow(e.rnd(), 2.4);
  const d = 20 + (1 - near) * 2900;
  const x = (e.rnd() - 0.5) * (60 + d * 1.6);
  const len = 1.5 + e.rnd() * 6 + near * 14 + d * 0.01;
  // (far off, where they crowd into one band, mostly light: the swell's faces catching the sky)
  g.fillStyle = e.rnd() < 0.55 + 0.3 * (1 - near) ? 'rgba(196,206,228,0.22)' : 'rgba(30,40,80,0.22)';
  g.fillRect(x, D - d, len, 0.1 + e.rnd() * 0.2 + d * 0.0015);
}
