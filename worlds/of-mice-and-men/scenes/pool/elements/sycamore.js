// The sycamore at the water's edge, leaning out over the pool: a pale mottled trunk — white, grey, olive patches of
// bark — growing up and to the left, three limbs; its crown of big leaves (layer `crown`) sways in the wind about where
// the limbs part. Metres from its foot, up negative.
const A = e.anim;
// (drawn at 0.72 of the numbers below: the tree 12.5 m tall)
g.scale(0.72, 0.72);
const trunk = new Path2D();
trunk.moveTo(-0.65, 0.3);
trunk.bezierCurveTo(-0.9, -3.5, -2.6, -6.2, -4.3, -8.6);
trunk.lineTo(-3.3, -9.1);
trunk.bezierCurveTo(-2.1, -6.4, -0.4, -3.6, 0.6, 0.3);
trunk.closePath();
const limb = (pts, w) => {
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(pts[0], pts[1]);
  g.bezierCurveTo(pts[2], pts[3], pts[4], pts[5], pts[6], pts[7]);
  g.stroke();
};
g.lineCap = 'round';
g.strokeStyle = '#d6d1c0';
limb([-3.9, -8.7, -5.2, -10.2, -6.6, -11.4, -8.4, -12.3], 0.55);
limb([-3.7, -8.9, -3.4, -11, -2.9, -12.8, -2.6, -14.6], 0.6);
limb([-3.6, -8.8, -2.3, -9.6, -0.6, -10.6, 1, -12.2], 0.42);
g.fillStyle = '#d9d4c4';
g.fill(trunk);
// the bark's patches, kept within the trunk
g.save();
g.clip(trunk);
for (let i = 0; i < 160; i++) {
  const u = A.hash(i, 1), x = 0 - 4 * u + (A.hash(i, 2) - 0.5) * 1.3, y = 0.2 - 9.2 * u, k = A.hash(i, 3);
  g.fillStyle = k < 0.35 ? '#a8a58c' : k < 0.6 ? '#8c8c74' : k < 0.8 ? '#c2b99e' : '#eeeadf';
  g.beginPath();
  g.ellipse(x, y, 0.12 + 0.22 * A.hash(i, 4), 0.08 + 0.14 * A.hash(i, 5), A.hash(i, 6) * 3, 0, Math.PI * 2);
  g.fill();
}
// its shaded right side
g.fillStyle = '#9d9a86';
g.globalAlpha = 0.45;
g.beginPath();
g.moveTo(0.2, 0.3);
g.bezierCurveTo(-0.8, -3.6, -2.4, -6.4, -3.6, -9);
g.lineTo(-3.3, -9.1);
g.bezierCurveTo(-2.1, -6.4, -0.4, -3.6, 0.6, 0.3);
g.fill();
g.globalAlpha = 1;
g.restore();
// the crown: open, ragged — clumps of big leaves at the ends of twigs off the three limbs, the evening sky between
// them; each clump dark beneath, lit on top, a leaf here and there gone yellow. The twigs and the clumps sway together
// (layer `crown`)
const twigs = [
  // [from x, y on a limb, to x, y — the clump's middle, its radius]
  [-6.6, -11.4, -9.4, -11.6, 1.1], [-7.4, -11.9, -8.6, -13.6, 1.2], [-8.4, -12.3, -10.2, -12.9, 0.9], [-5.6, -10.7, -6.4, -12.8, 1.1],
  [-5, -10.2, -5.2, -9, 0.8], [-6.2, -11.1, -7.2, -9.9, 0.8], [-3, -12.4, -4.6, -13.9, 1.2], [-2.6, -14.6, -3.4, -16.2, 1.1],
  [-2.6, -14.6, -1.6, -15.9, 1], [-2.8, -13.5, -1.2, -13.7, 0.9], [-3.3, -11, -4.3, -11.9, 0.9], [-0.6, -10.6, -0.2, -12.4, 1.1],
  [1, -12.2, 1.9, -13.1, 0.9], [1, -12.2, 2.2, -11.4, 0.8], [0.2, -11.3, 0.9, -10.1, 0.7], [-1.8, -10, -1.9, -8.6, 0.7],
  [-3.1, -7.6, -2.1, -6.8, 0.6], [-3.6, -8.4, -4.6, -8.1, 0.6]];
const LEAF = ['#4e5c35', '#66763d', '#83924a', '#a3aa58'], YELLOW = '#c3a64f';
e.layer('crown', { pivot: [-2.74, -6.48], wind: { strength: 0.18, gust: 0.4, scale: 1 } }, g => {
  g.scale(0.72, 0.72);
  g.strokeStyle = '#cfc9b6';
  g.lineCap = 'round';
  for (const [x0, y0, x1, y1, r] of twigs) {
    g.lineWidth = 0.07 + 0.05 * r;
    g.beginPath();
    g.moveTo(x0, y0);
    g.quadraticCurveTo((x0 + x1) / 2, Math.min(y0, y1) - 0.3, x1, y1);
    g.stroke();
  }
  // the leaves, shade by shade from beneath: broad, a little pointed, each turned its own way
  LEAF.forEach((shade, k) => {
    twigs.forEach(([, , cx, cy, r], j) => {
      for (let i = 0; i < 16; i++) {
        const n = i + j * 61 + k * 977, a = A.hash(n, 7) * 6.28, d = r * Math.sqrt(A.hash(n, 8)) * (1 - 0.18 * k);
        const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d * 0.75 + (0.3 - 0.22 * k) * r, s = 0.2 + 0.14 * A.hash(n, 9);
        g.fillStyle = k > 0 && A.hash(n, 11) < 0.08 ? YELLOW : shade;
        g.save();
        g.translate(x, y);
        g.rotate(A.hash(n, 10) * 6.28);
        g.beginPath();
        g.moveTo(0, -s);
        g.quadraticCurveTo(s * 1.1, -s * 0.3, 0, s * 0.8);
        g.quadraticCurveTo(-s * 1.1, -s * 0.3, 0, -s);
        g.fill();
        g.restore();
      }
    });
  });
});
