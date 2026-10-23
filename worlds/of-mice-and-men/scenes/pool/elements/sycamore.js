// The sycamore at the water's edge, leaning out over the pool: a pale mottled trunk — white, grey, olive patches of
// bark — growing up and to the left, three limbs; its crown of big leaves (layer `crown`) sways in the wind about where
// the limbs part. Metres from its foot, up negative.
const A = e.anim;
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
// the crown: clusters of big leaves round the limbs' ends and along them — dark beneath, lighter on top
const clusters = [[-8.2, -12.6, 2.6], [-6.4, -11.6, 2.2], [-5, -13.8, 2.4], [-2.8, -15, 2.6], [-1, -13.4, 2.2], [0.8, -12.6, 2.1],
  [-3.6, -12.2, 2.4], [-7, -14.3, 1.8], [-1.5, -16.2, 1.6], [-9.6, -11.5, 1.4], [2, -11.4, 1.4], [-4.8, -10.6, 1.6]];
e.layer('crown', { pivot: [-3.8, -9], wind: { strength: 0.18, gust: 0.4, scale: 1 } }, g => {
  for (const [shade, lift] of [['#4f5e37', 0.35], ['#677a43', 0], ['#82954f', -0.35], ['#a0aa5e', -0.7]]) {
    g.fillStyle = shade;
    clusters.forEach(([cx, cy, r], j) => {
      for (let i = 0; i < 20; i++) {
        const a = A.hash(i + j * 31, 7) * 6.28, d = r * Math.sqrt(A.hash(i + j * 31, 8)) * (shade === '#a0aa5e' ? 0.6 : 1);
        const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d * 0.7 + lift * r * 0.5, s = 0.32 + 0.3 * A.hash(i + j * 31, 9);
        g.beginPath();
        g.ellipse(x, y, s * 1.1, s * 0.8, A.hash(i + j * 31, 10) * 3, 0, Math.PI * 2);
        g.fill();
      }
    });
  }
});
