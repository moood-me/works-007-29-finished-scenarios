// The old horse chestnut by the table: a thick trunk forking into three limbs, its crown spreading over the table
// (to the right) — three layers of leaves, the far ones darker, each stirring in the evening air about the fork.
const bark = '#5b4a3d';
g.fillStyle = bark;
g.beginPath();
g.moveTo(-0.55, 0.05);
g.bezierCurveTo(-0.35, -1.2, -0.42, -2.4, -0.3, -3.3);
g.lineTo(0.32, -3.3);
g.bezierCurveTo(0.38, -2.2, 0.3, -1.1, 0.6, 0.05);
g.closePath();
g.fill();
// the roots' flare, the bark's furrows
g.fillStyle = '#4d3e33';
g.beginPath();
g.ellipse(0, 0, 0.8, 0.12, 0, Math.PI, 0);
g.fill();
g.strokeStyle = '#46382e';
g.lineWidth = 0.035;
for (let i = 0; i < 7; i++) {
  const x = -0.3 + i * 0.1;
  g.beginPath();
  g.moveTo(x + (e.rnd() - 0.5) * 0.05, -0.1);
  g.bezierCurveTo(x + 0.04, -1, x - 0.05, -2, x + 0.02, -3.2);
  g.stroke();
}
// the limbs
g.strokeStyle = bark;
g.lineCap = 'round';
const limb = (w, pts) => {
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(0, -3.1);
  g.bezierCurveTo(...pts);
  g.stroke();
};
limb(0.34, [-0.6, -4, -1.6, -4.6, -2.8, -5.4]);
limb(0.3, [0.4, -4.2, 1.6, -4.8, 3.6, -5.2]);
limb(0.26, [0.1, -4.4, 0.2, -5.6, 0.6, -6.8]);
limb(0.16, [1.8, -4.9, 3.6, -4.6, 5.4, -4.9]);
const crown = e.lib.crown;
const rnd = e.rnd;
e.layer('crown_back', { pivot: [0, -3.4], wind: { strength: 0.04, gust: 0.4 } }, c => {
  crown(c, rnd, { cx: 0.9, cy: -6.4, rx: 5.6, ry: 2.6, n: 300, leaf: 0.5, mass: '#2f4426', colors: ['#2f4527', '#3a5530', '#466338'] });
});
e.layer('crown_mid', { pivot: [0, -3.4], wind: { strength: 0.06, gust: 0.5 } }, c => {
  crown(c, rnd, { cx: 1.4, cy: -5.6, rx: 5.2, ry: 2.2, n: 300, leaf: 0.46, colors: ['#3d5a31', '#4d6c3a', '#5f7f44'] });
});
e.layer('crown_front', { pivot: [0, -3.4], wind: { strength: 0.08, gust: 0.6 }, depth: 0.4 }, c => {
  crown(c, rnd, { cx: 1.6, cy: -4.9, rx: 4.8, ry: 1.3, n: 220, leaf: 0.42, colors: ['#4a6a37', '#5d7e43', '#749450'] });
});
