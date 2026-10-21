// A June sky over Derbyshire in a graded wash: a clear cerulean at the top, deepest where the page sets the scene's
// title and caption (white over it reads), paling to a soft blue-grey toward the hills (no bright band between the far crowns); soft clouds drift low over the
// woods, never up behind the title (stage heights; the horizon at 0.36)
const L = e.kit.brush, A = e.aspect, H = 0.36, r = L.rand(11);
const blue = g.createLinearGradient(0, -0.35, 0, H + 0.08);
blue.addColorStop(0, '#3d6693');
blue.addColorStop(0.36, '#527ea9');
blue.addColorStop(0.62, '#8daccb');
blue.addColorStop(0.84, '#b7cad7');
blue.addColorStop(1, '#cbd8dd');
g.fillStyle = blue;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
// (the wash laid unevenly, as a wet sky is: deeper and paler patches, kept to the sky's sides and its lower band)
for (let i = 0; i < 9; i++) {
  const side = i % 2 === 0 ? -0.3 + 0.5 * r() : A - 0.2 + 0.5 * r(), x = i < 6 ? side : -0.3 + (A + 0.6) * r(), y = i < 6 ? -0.25 + 0.4 * r() : 0.18 + 0.1 * r();
  const rad = 0.18 + 0.2 * r(), gr = g.createRadialGradient(x, y, 0, x, y, rad), c = r() < 0.5 ? '232,238,240' : '70,108,150';
  gr.addColorStop(0, `rgba(${c},0.22)`);
  gr.addColorStop(1, `rgba(${c},0)`);
  g.fillStyle = gr;
  g.fillRect(x - rad, y - rad, rad * 2, rad * 2);
}
// the clouds: one layer drifting slowly to the right, wrapping round its box (each cloud painted again a box's width
// to either side where it crosses an end) — all of them low, between the caption and the hills
const W = A + 0.6;
e.layer('clouds', { drift: [0.0015, 0], box: [-0.3, 0.1, A + 0.3, H + 0.04] }, g2 => {
  const clouds = [[0.1, 0.27, 0.32], [0.55, 0.3, 0.26], [0.95, 0.28, 0.34], [1.45, 0.26, 0.3], [1.85, 0.3, 0.24], [0.3, 0.32, 0.18], [1.25, 0.32, 0.16]];
  for (const [u, y, w] of clouds) {
    const x = -0.3 + (u * W) / 2.1;
    for (const dx of [0, -W, W]) {
      if (x + dx + w < -0.3 || x + dx - w > A + 0.3) continue;
      L.cloud(g2, x + dx, y, w, L.rand(Math.round(u * 100 + y * 1000)));
    }
  }
});
