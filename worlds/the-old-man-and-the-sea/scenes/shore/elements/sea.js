// The bay and the Gulf beyond it from above, metres, in their daylight colours (the scene's light makes the hour):
// the deep water dark blue, almost violet; over the sandy bottom near the beach it is shallow and green-blue, lighter
// toward the edge; streaks of the swell lie across it. The plane's centre is 1500 m out: distance = 1500 - y.
const { shore } = e.lib;
const D = 1500;
g.fillStyle = '#2e4277';
g.fillRect(-4000, -1500, 8000, 3000);
// the shallows: bands from the water's edge outward, each a little darker and bluer
const bands = ['#5f9fa2', '#5a96a0', '#52899c', '#4b7d98', '#457193', '#3f668e', '#3a5c88', '#355281', '#31497b'];
for (let a = -90; a < 70; a += 1) {
  const s = shore(a + 0.5);
  bands.forEach((c, k) => {
    const d0 = s + k * 2.2;
    g.fillStyle = c;
    g.fillRect(a, D - d0 - 2.3, 1.05, 2.3);
  });
}
// the swell: long streaks lying across, lighter and darker, short and dense far off, long and sparse near
for (let i = 0; i < 1100; i++) {
  const near = Math.pow(e.rnd(), 2.4);
  const d = 20 + (1 - near) * 2900;
  const x = (e.rnd() - 0.5) * (60 + d * 1.6);
  const len = 1.5 + e.rnd() * 6 + near * 14 + d * 0.01;
  g.fillStyle = e.rnd() < 0.55 ? 'rgba(170,190,220,0.22)' : 'rgba(26,34,70,0.28)';
  g.fillRect(x, D - d, len, 0.1 + e.rnd() * 0.2 + d * 0.0015);
}
