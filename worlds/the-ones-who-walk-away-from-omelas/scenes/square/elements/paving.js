// The square's paving seen from above: pale warm flagstones in courses, a ring of darker stones round the fountain
// (its centre at x −0.9, y 9.9 — 4.6 m ahead), a few petals fallen on it
const A = e.anim, W = 40, D = 33, fx = -0.9, fy = 9.9;
g.fillStyle = '#ddd2bd';
g.fillRect(-W / 2, -D / 2, W, D);
// the flagstones: courses across, each stone its own shade, the joints thin and darker
for (let r = 0; r < 44; r++) {
  const y = -D / 2 + r * 0.75, off = (r % 2) * 0.55;
  for (let c = 0; c < 38; c++) {
    const x = -W / 2 + c * 1.1 - off, n = r * 97 + c;
    g.fillStyle = ['#e2d8c4', '#d6cab3', '#e6dece', '#d9ceb9'][Math.floor(A.hash(n, 1) * 4)];
    g.fillRect(x + 0.03, y + 0.03, 1.04, 0.69);
  }
}
// the ring round the fountain: two courses of darker stones, set radially
for (const [r0, shade] of [[1.75, '#b9ad97'], [2.25, '#c8bca6']]) {
  for (let k = 0; k < 40; k++) {
    const a0 = (k / 40) * Math.PI * 2, a1 = ((k + 0.92) / 40) * Math.PI * 2;
    g.fillStyle = shade;
    g.beginPath();
    g.arc(fx, fy, r0 + 0.48, a0, a1);
    g.arc(fx, fy, r0, a1, a0, true);
    g.closePath();
    g.fill();
  }
}
// petals fallen on the stones
for (let i = 0; i < 160; i++) {
  g.fillStyle = ['#f1c9c6', '#f6ecd8', '#f2dc94'][i % 3];
  g.beginPath();
  g.ellipse((A.hash(i, 7) - 0.5) * W, (A.hash(i, 8) - 0.5) * D, 0.05, 0.03, A.hash(i, 9) * 3, 0, Math.PI * 2);
  g.fill();
}
