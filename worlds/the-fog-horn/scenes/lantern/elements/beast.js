// Him — the last of his kind, out of the deep: a long neck rising from the sea higher than the tower, a small head
// turned to the light, two great eyes (their glows `eye_r`, `eye_l` — the lamp shining in them), the hump of his back
// like a small island at the water. Metres, the anchor at the water (the sea's face); in his own grey-green, the
// scene's light makes the night of him. Layers, moved by his animate: `back`, `neck` (its pivot under the water, where it
// sways), `head` (its pivot the top of the neck). What is under the water is hidden by the sea.
const HX = -2.2;
const HY = -24;
const SKIN = '#56625f';
const DARK = '#47524f';
const BELLY = '#78807a';
const bez = (t, p) => {
  const u = 1 - t;
  return [0, 1].map(k => u * u * u * p[0][k] + 3 * u * u * t * p[1][k] + 3 * u * t * t * p[2][k] + t * t * t * p[3][k]);
};
e.layer('back', { box: [0, -4, 15, 8] }, g => {
  // two low humps going away to the right, dark with a paler crest line
  g.fillStyle = DARK;
  g.beginPath();
  g.moveTo(1.2, 2);
  g.bezierCurveTo(2.2, -1.6, 4.6, -2.6, 6.4, -1.2);
  g.bezierCurveTo(7.6, -0.4, 8.2, -1.9, 10, -1.6);
  g.bezierCurveTo(11.8, -1.3, 12.8, 0.2, 13.6, 2);
  g.closePath();
  g.fill();
  g.strokeStyle = SKIN;
  g.lineWidth = 0.18;
  g.beginPath();
  g.moveTo(2.3, -0.9);
  g.bezierCurveTo(3.6, -2.2, 5.2, -2.1, 6.3, -1.1);
  g.moveTo(8.4, -1.6);
  g.bezierCurveTo(10, -1.8, 11.6, -1, 12.6, 0.2);
  g.stroke();
});
e.layer('neck', { pivot: [0, 1.5], box: [-6, -25, 6, 34] }, g => {
  const P = [[0, 1.5], [2.4, -9], [-2.8, -17], [HX, HY + 0.3]];
  const L = [];
  const R = [];
  const C = [];
  for (let i = 0; i <= 30; i++) {
    const t = i / 30;
    const a = bez(t, P);
    const b = bez(Math.min(1, t + 0.01), P);
    const c = bez(Math.max(0, t - 0.01), P);
    const tx = b[0] - c[0];
    const ty = b[1] - c[1];
    const n = Math.hypot(tx, ty) || 1;
    const w = 1.9 + (0.72 - 1.9) * Math.pow(t, 0.8);
    L.push([a[0] + (ty / n) * w, a[1] - (tx / n) * w]);
    R.push([a[0] - (ty / n) * w, a[1] + (tx / n) * w]);
    C.push([a, w, ty / n, -tx / n]);
  }
  g.fillStyle = SKIN;
  g.beginPath();
  g.moveTo(L[0][0], L[0][1]);
  for (const p of L) g.lineTo(p[0], p[1]);
  for (let i = R.length - 1; i >= 0; i--) g.lineTo(R[i][0], R[i][1]);
  g.closePath();
  g.fill();
  // the paler throat along its front (the left side, toward the tower)
  g.fillStyle = BELLY;
  g.beginPath();
  for (let i = 0; i < C.length; i++) {
    const [a, w, nx, ny] = C[i];
    const p = [a[0] + nx * w * 0.95, a[1] + ny * w * 0.95];
    if (i) g.lineTo(p[0], p[1]);
    else g.moveTo(p[0], p[1]);
  }
  for (let i = C.length - 1; i >= 0; i--) {
    const [a, w, nx, ny] = C[i];
    g.lineTo(a[0] + nx * w * 0.45, a[1] + ny * w * 0.45);
  }
  g.closePath();
  g.fill();
  // folds across the neck, faint
  g.strokeStyle = DARK;
  g.lineWidth = 0.08;
  for (let i = 2; i < C.length - 1; i += 2) {
    const [a, w, nx, ny] = C[i];
    g.beginPath();
    g.moveTo(a[0] + nx * w * 0.9, a[1] + ny * w * 0.9);
    g.quadraticCurveTo(a[0] - ny * 0.25, a[1] + nx * 0.25, a[0] - nx * w * 0.9, a[1] - ny * w * 0.9);
    g.stroke();
  }
});
e.layer('head', { pivot: [HX, HY], box: [-7, -27, 0, 9] }, g => {
  // the head turned to the left (to the tower) and a little to the eye: a long skull, a heavy brow, a blunt snout
  g.fillStyle = SKIN;
  g.beginPath();
  g.moveTo(-1.4, -23.8);
  g.bezierCurveTo(-1.6, -25.0, -2.4, -25.7, -3.5, -25.75);
  g.bezierCurveTo(-4.5, -25.8, -5.4, -25.5, -5.95, -24.95);
  g.bezierCurveTo(-6.15, -24.6, -5.9, -24.3, -5.3, -24.2);
  g.bezierCurveTo(-4.4, -24.0, -3.4, -23.7, -2.8, -23.1);
  g.bezierCurveTo(-2.3, -22.7, -1.6, -23.0, -1.4, -23.8);
  g.closePath();
  g.fill();
  // the jaw's line, the brow, the nostril
  g.strokeStyle = DARK;
  g.lineWidth = 0.09;
  g.beginPath();
  g.moveTo(-5.85, -24.55);
  g.bezierCurveTo(-4.9, -24.45, -3.9, -24.3, -3.0, -23.85);
  g.stroke();
  g.fillStyle = DARK;
  g.beginPath();
  g.ellipse(-3.55, -25.38, 0.62, 0.2, -0.12, 0, Math.PI * 2);
  g.fill();
  g.beginPath();
  g.ellipse(-5.6, -25.0, 0.1, 0.06, 0, 0, Math.PI * 2);
  g.fill();
  // two great eyes, pale and wet, the lamp shining in them (their glows)
  g.fillStyle = '#d9cfb0';
  g.beginPath();
  g.ellipse(-3.35, -25.08, 0.3, 0.24, 0, 0, Math.PI * 2);
  g.fill();
  g.beginPath();
  g.ellipse(-4.15, -25.3, 0.2, 0.17, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#2b2a26';
  g.beginPath();
  g.ellipse(-3.42, -25.08, 0.12, 0.17, 0, 0, Math.PI * 2);
  g.fill();
  g.beginPath();
  g.ellipse(-4.2, -25.3, 0.08, 0.12, 0, 0, Math.PI * 2);
  g.fill();
  e.light(-3.35, -25.08, 0.5, '#ffdc96', 1.3, 'eye_r');
  e.light(-4.15, -25.3, 0.38, '#ffdc96', 1.1, 'eye_l');
});
