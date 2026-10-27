// The old yew of the Garden of Death (about 8 m, 15 m across): a short, enormous fluted trunk of red-brown bark, two
// giant arms spreading level and low to either side, and the dark masses of its needles over them — almost black
// against the moon, stirring a very little in the wind. On its left arm sits the nightingale.
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
// the arms: long level limbs thick as a man, bending down at their ends; a few lesser boughs
const limb = (pts, w0, w1) => {
  for (let k = 0; k < 3; k++) {
    g.strokeStyle = [BARK, BARK_DARK, BARK_LIGHT][k];
    g.lineWidth = [w0, w0 * 0.35, w0 * 0.2][k];
    g.beginPath();
    g.moveTo(pts[0][0], pts[0][1] + (k - 1) * w0 * 0.15);
    g.bezierCurveTo(pts[1][0], pts[1][1], pts[2][0], pts[2][1], pts[3][0], pts[3][1]);
    g.stroke();
  }
  g.strokeStyle = BARK;
  g.lineWidth = w1;
  g.beginPath();
  g.moveTo(pts[3][0], pts[3][1]);
  g.lineTo(pts[3][0] + (pts[3][0] - pts[2][0]) * 0.3, pts[3][1] + 0.3);
  g.stroke();
};
limb([[-0.4, -2.3], [-1.8, -3.0], [-3.6, -3.2], [-6.2, -2.6]], 0.42, 0.14);
limb([[0.4, -2.4], [1.8, -3.2], [3.6, -3.5], [6.0, -3.0]], 0.4, 0.14);
limb([[-0.2, -2.4], [-0.6, -3.6], [-1.6, -4.4], [-2.6, -5.0]], 0.26, 0.1);
limb([[0.3, -2.4], [0.8, -3.8], [1.6, -4.8], [2.8, -5.6]], 0.26, 0.1);
// the needles: dark rounded masses, the far ones behind the limbs, the near ones over them
const mass = (c, n, cx, cy, rx, ry, tones) => {
  for (let i = 0; i < n; i++) {
    const a = e.rnd() * Math.PI * 2;
    const d = Math.sqrt(e.rnd());
    c.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
    c.beginPath();
    c.ellipse(cx + Math.cos(a) * d * rx, cy + Math.sin(a) * d * ry, 0.35 + e.rnd() * 0.45, 0.22 + e.rnd() * 0.25, (e.rnd() - 0.5) * 0.5, 0, Math.PI * 2);
    c.fill();
  }
};
const DARK = ['#1c2a22', '#18241e', '#22302a', '#1a2620'];
const LIT = ['#24362a', '#2a3c30', '#203026', '#2e4232'];
e.layer('far', { pivot: [0, -2.4], wind: 0.04, depth: -0.5 }, c => {
  mass(c, 90, -0.2, -5.6, 4.4, 1.6, DARK);
  mass(c, 50, -4.0, -4.0, 2.6, 0.9, DARK);
  mass(c, 50, 3.8, -4.4, 2.8, 1.0, DARK);
});
e.layer('near', { pivot: [0, -2.4], wind: 0.06, depth: 0.4 }, c => {
  mass(c, 50, -4.8, -3.0, 1.8, 0.55, LIT);
  mass(c, 50, 4.6, -3.4, 1.9, 0.6, LIT);
  mass(c, 40, 0.6, -6.6, 2.6, 0.8, LIT);
  mass(c, 26, -2.2, -4.9, 1.2, 0.5, LIT);
});
// the nightingale: a small brown bird on the left arm, its breast paler, its tail cocked — it sings
e.layer('bird', { pivot: [-3.3, -3.3], depth: 0.5 }, c => {
  c.fillStyle = '#6e5a46';
  c.beginPath();
  c.ellipse(-3.3, -3.38, 0.075, 0.05, -0.3, 0, Math.PI * 2);
  c.fill();
  c.fillStyle = '#a89478';
  c.beginPath();
  c.ellipse(-3.26, -3.36, 0.045, 0.035, -0.3, 0, Math.PI * 2);
  c.fill();
  c.fillStyle = '#6e5a46';
  c.beginPath();
  c.arc(-3.24, -3.45, 0.032, 0, Math.PI * 2);
  c.fill();
  c.fillStyle = '#3a2e24';
  c.beginPath();
  c.moveTo(-3.21, -3.46);
  c.lineTo(-3.17, -3.47);
  c.lineTo(-3.21, -3.44);
  c.fill();
  c.fillStyle = '#5a4a3a';
  c.beginPath();
  c.moveTo(-3.37, -3.4);
  c.lineTo(-3.48, -3.46);
  c.lineTo(-3.47, -3.4);
  c.closePath();
  c.fill();
});
e.at(-3.24, -3.45, 'nightingale');
