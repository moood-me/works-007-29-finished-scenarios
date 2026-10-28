// A June sky over Derbyshire in a graded wash: a clear cerulean at the top, deepest where the page sets the scene's
// title (white over it reads), paling to a soft blue toward the woods — still blue enough that the far
// crowns stand against it. A few clouds drift high, from the right-hand corner, whole, clear of the title
// and above the woods' line (nothing of them peeks between the crowns); the beech's crown holds the left corner
// (stage heights; the horizon at 0.36)
const L = e.kit.brush, A = e.aspect, H = 0.36, r = L.rand(11);
const blue = g.createLinearGradient(0, -0.35, 0, H + 0.08);
blue.addColorStop(0, '#3d6693');
blue.addColorStop(0.36, '#527ea9');
blue.addColorStop(0.62, '#86a8c9');
blue.addColorStop(0.84, '#a9c1d4');
blue.addColorStop(1, '#bccfd9');
g.fillStyle = blue;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
// (the wash laid unevenly, as a wet sky is: deeper and paler patches, kept to the sky's sides and its lower band)
for (let i = 0; i < 9; i++) {
  const side = i % 2 === 0 ? -0.3 + 0.5 * r() : A - 0.2 + 0.5 * r(), x = i < 6 ? side : -0.3 + (A + 0.6) * r(), y = i < 6 ? -0.25 + 0.4 * r() : 0.18 + 0.1 * r();
  const rad = 0.18 + 0.2 * r(), gr = g.createRadialGradient(x, y, 0, x, y, rad), c = r() < 0.5 ? '232,238,240' : '70,108,150';
  gr.addColorStop(0, `rgba(${c},0.18)`);
  gr.addColorStop(1, `rgba(${c},0)`);
  g.fillStyle = gr;
  g.fillRect(x - rad, y - rad, rad * 2, rad * 2);
}
// the clouds: one layer, three clouds starting in the right-hand corner (right of the title; y 0.03…0.12, above the
// woods), drifting very slowly to the right and wrapping round the whole sky's width (each painted again a box's
// width to the left where it crosses the right end) — so slowly that one comes round to the title only after some
// twenty minutes
const X0 = -0.3, X1 = A + 0.3, W = X1 - X0;
e.layer('clouds', { drift: [0.0008, 0], box: [X0, -0.06, X1, 0.16] }, g2 => {
  for (const [x, y, w] of [[1.34, 0.075, 0.2], [1.62, 0.05, 0.24], [1.9, 0.09, 0.17]]) {
    for (const dx of [0, -W]) {
      if (x + dx + w < X0 || x + dx - w > X1) continue;
      L.cloud(g2, x + dx, y, w, L.rand(Math.round(x * 100 + y * 1000)));
    }
  }
});
