// The old yew of the Garden of Death (about 7 m, 14 m across): a short, enormous fluted trunk of red-brown bark, its
// giant arms spreading level and low to either side, and over them the dark needles in drooping tiers, sky showing
// between — almost black against the moon, stirring a very little in the wind. On its left arm sits the nightingale.
const BARK = '#5a3a2c';
const BARK_DARK = '#3a2620';
const BARK_LIGHT = '#74503c';
// the trunk: wide at the root, fluted, splitting into the arms at about 2.4 m
g.fillStyle = BARK;
g.beginPath();
g.moveTo(-1.1, 0.1);
g.bezierCurveTo(-0.7, -0.5, -0.6, -1.6, -0.75, -2.4);
g.lineTo(0.8, -2.5);
g.bezierCurveTo(0.6, -1.6, 0.7, -0.5, 1.2, 0.1);
g.closePath();
g.fill();
g.lineCap = 'round';
for (let i = 0; i < 9; i++) {
  const x = -0.8 + i * 0.2 + (e.rnd() - 0.5) * 0.08;
  g.strokeStyle = i % 2 ? BARK_DARK : BARK_LIGHT;
  g.lineWidth = 0.05 + e.rnd() * 0.05;
  g.beginPath();
  g.moveTo(x * 1.3, 0.05);
  g.bezierCurveTo(x * 0.85, -0.6, x * 0.8, -1.6, x * 1.0, -2.45);
  g.stroke();
}
// the arms: long level limbs thick as a man, bending down at their ends; a few lesser boughs going up
const limb = (pts, w) => {
  for (let k = 0; k < 3; k++) {
    g.strokeStyle = [BARK, BARK_DARK, BARK_LIGHT][k];
    g.lineWidth = [w, w * 0.35, w * 0.2][k];
    g.beginPath();
    g.moveTo(pts[0][0], pts[0][1] + (k - 1) * w * 0.15);
    g.bezierCurveTo(pts[1][0], pts[1][1], pts[2][0], pts[2][1], pts[3][0], pts[3][1]);
    g.stroke();
  }
};
limb([[-0.4, -2.3], [-1.8, -2.9], [-3.6, -3.0], [-6.0, -2.3]], 0.42);
limb([[0.4, -2.4], [1.8, -3.0], [3.6, -3.2], [6.0, -2.6]], 0.4);
limb([[-0.2, -2.4], [-0.6, -3.4], [-1.4, -4.0], [-2.6, -4.4]], 0.24);
limb([[0.3, -2.4], [0.8, -3.6], [1.6, -4.3], [2.8, -4.8]], 0.24);
limb([[0, -2.5], [0.1, -3.6], [-0.1, -4.6], [0.2, -5.6]], 0.22);
// a tier of needles: a long low drooping sweep along a bough, made of many small sprays, ragged at its edges
const tier = (c, cx, cy, w, h, n, tones) => {
  for (let i = 0; i < n; i++) {
    const u = e.rnd() * 2 - 1;
    const x = cx + u * w;
    // the sweep droops toward its ends
    const y = cy + u * u * h * 0.9 + (e.rnd() - 0.5) * h;
    c.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
    c.beginPath();
    c.ellipse(x, y, 0.16 + e.rnd() * 0.22, 0.08 + e.rnd() * 0.1, (e.rnd() - 0.5) * 0.4 + u * 0.25, 0, Math.PI * 2);
    c.fill();
    // its needles: short fine strokes hanging from the spray's edge
    if (e.rnd() < 0.5) {
      c.strokeStyle = c.fillStyle;
      c.lineWidth = 0.025;
      for (let k = 0; k < 5; k++) {
        const nx = x + (e.rnd() - 0.5) * 0.4;
        c.beginPath();
        c.moveTo(nx, y);
        c.lineTo(nx + (e.rnd() - 0.5) * 0.12, y + 0.05 + e.rnd() * 0.07);
        c.stroke();
      }
    }
  }
};
const DARK = ['#16221c', '#1a2620', '#1e2c24', '#14201a'];
const LIT = ['#22342a', '#28392e', '#2e4234', '#344a3a'];
e.layer('far', { pivot: [0, -2.4], wind: 0.04, depth: -0.5 }, c => {
  tier(c, -0.2, -5.4, 2.8, 1.0, 360, DARK);
  tier(c, -3.0, -3.9, 2.6, 0.8, 300, DARK);
  tier(c, 3.0, -4.2, 2.8, 0.8, 300, DARK);
  tier(c, 0.1, -4.3, 2.2, 0.9, 260, DARK);
  tier(c, 0, -6.3, 1.8, 0.6, 160, DARK);
});
e.layer('near', { pivot: [0, -2.4], wind: 0.06, depth: 0.4 }, c => {
  tier(c, -4.4, -2.9, 1.8, 0.45, 150, LIT);
  tier(c, 4.4, -3.2, 1.8, 0.45, 150, LIT);
  tier(c, -1.8, -4.5, 1.1, 0.4, 90, LIT);
  tier(c, 1.6, -4.8, 1.2, 0.4, 90, LIT);
  tier(c, 0, -6.1, 1.4, 0.35, 90, LIT);
});
// the nightingale: a small brown bird on the left arm, its breast paler, its tail cocked — it sings
e.layer('bird', { pivot: [-3.3, -3.0], depth: 0.6 }, c => {
  c.fillStyle = '#6e5a46';
  c.beginPath();
  c.ellipse(-3.3, -3.1, 0.075, 0.05, -0.3, 0, Math.PI * 2);
  c.fill();
  c.fillStyle = '#a89478';
  c.beginPath();
  c.ellipse(-3.26, -3.08, 0.045, 0.035, -0.3, 0, Math.PI * 2);
  c.fill();
  c.fillStyle = '#6e5a46';
  c.beginPath();
  c.arc(-3.24, -3.17, 0.032, 0, Math.PI * 2);
  c.fill();
  c.fillStyle = '#3a2e24';
  c.beginPath();
  c.moveTo(-3.21, -3.18);
  c.lineTo(-3.17, -3.19);
  c.lineTo(-3.21, -3.16);
  c.fill();
  c.fillStyle = '#5a4a3a';
  c.beginPath();
  c.moveTo(-3.37, -3.12);
  c.lineTo(-3.48, -3.18);
  c.lineTo(-3.47, -3.12);
  c.closePath();
  c.fill();
});
e.at(-3.24, -3.17, 'nightingale');
