// The tower under the gallery (a form turned on a lathe): the gallery's stone slab at the top, the corbels under it,
// then the round tower of whitewashed stone gone pale, its courses of blocks, rust under the slab's drips, going down to
// the sea; the same stone as the tower seen from the rock. The painting is the tower unrolled: x round it (0 its front,
// toward the viewer), y down from the slab's top (17.47 m of profile).
const W = 8.02;
const T = -17.47;
// the body: courses of stone, joints along and staggered across
g.fillStyle = '#d5d2ca';
g.fillRect(-W, T, 2 * W, -T);
g.strokeStyle = '#c4c0b7';
g.lineWidth = 0.05;
for (let k = 0, y = -16.35; y < 0; y += 0.62, k++) {
  g.beginPath();
  g.moveTo(-W, y);
  g.lineTo(W, y);
  g.stroke();
  for (let x = -W + (k % 2) * 0.55; x < W; x += 1.1) {
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x, y + 0.62);
    g.stroke();
  }
}
for (let i = 0; i < 80; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(170,166,158,0.35)' : 'rgba(236,233,226,0.45)';
  const row = Math.floor(e.rnd() * 26);
  g.fillRect(-W + Math.floor(e.rnd() * 14) * 1.1 + (row % 2) * 0.55, -16.35 + row * 0.62, 1.1, 0.62);
}
// rust and damp streaks running down from under the slab
for (let i = 0; i < 18; i++) {
  const x = -W + e.rnd() * 2 * W;
  const r = g.createLinearGradient(0, -16.35, 0, -12 - e.rnd() * 3);
  r.addColorStop(0, 'rgba(150,112,86,0.35)');
  r.addColorStop(1, 'rgba(150,112,86,0)');
  g.fillStyle = r;
  g.fillRect(x, -16.35, 0.08 + e.rnd() * 0.14, 5);
}
// the wet foot at the sea
const foot = g.createLinearGradient(0, -3.5, 0, 0);
foot.addColorStop(0, 'rgba(120,118,112,0)');
foot.addColorStop(0.6, 'rgba(120,118,112,0.55)');
foot.addColorStop(1, 'rgba(70,72,74,0.9)');
g.fillStyle = foot;
g.fillRect(-W, -3.5, 2 * W, 3.5);
// the corbelled band under the slab, a shade darker, its foot a line
g.fillStyle = '#bdb9b0';
g.fillRect(-W, -17.17, 2 * W, 0.82);
g.fillStyle = '#a19d94';
g.fillRect(-W, -16.4, 2 * W, 0.05);
// the slab's edge, pale, a dark drip line under it
g.fillStyle = '#c9c6be';
g.fillRect(-W, T, 2 * W, 0.3);
g.fillStyle = '#9b988f';
g.fillRect(-W, -17.19, 2 * W, 0.04);
e.form(e.kit.revolve([[3.05, 17.3], [3.05, 17.0], [2.55, 16.35], [2.54, 15], [2.53, 13], [2.52, 10], [2.51, 6], [2.5, 0]]), { closed: 'u' });
