// A June sky over Derbyshire in a pale wash: blue at the top, warm cream toward the hills; soft clouds drift
// (stage heights; the horizon at 0.42)
const L = e.lib, A = e.aspect, H = 0.42, r = L.rand(11);
const blue = g.createLinearGradient(0, -0.35, 0, H + 0.1);
blue.addColorStop(0, '#93b0c8');
blue.addColorStop(0.4, '#b4c8d6');
blue.addColorStop(0.78, '#dfe3dc');
blue.addColorStop(1, '#f0e9d6');
g.fillStyle = blue;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
// (the wash laid unevenly: paler and bluer patches)
for (let i = 0; i < 8; i++) {
  const x = -0.3 + (A + 0.6) * r(), y = -0.3 + 0.5 * r(), rad = 0.2 + 0.25 * r();
  const gr = g.createRadialGradient(x, y, 0, x, y, rad), c = r() < 0.5 ? '238,241,240' : '140,170,196';
  gr.addColorStop(0, `rgba(${c},0.22)`);
  gr.addColorStop(1, `rgba(${c},0)`);
  g.fillStyle = gr;
  g.fillRect(x - rad, y - rad, rad * 2, rad * 2);
}
// the clouds: one layer drifting slowly to the right, wrapping round its box (each cloud painted again a box's width
// to either side where it crosses an end)
const W = A + 0.6;
e.layer('clouds', { drift: [0.0015, 0], box: [-0.3, -0.35, A + 0.3, H] }, g2 => {
  const clouds = [[0.15, 0.02, 0.42], [0.62, -0.1, 0.36], [1.05, 0.08, 0.5], [1.5, -0.04, 0.34], [1.9, 0.12, 0.3], [0.4, 0.22, 0.26], [1.3, 0.25, 0.22]];
  for (const [u, y, w] of clouds) {
    const x = -0.3 + u * W / 2.1;
    for (const dx of [0, -W, W]) {
      if (x + dx + w < -0.3 || x + dx - w > A + 0.3) continue;
      L.cloud(g2, x + dx, y, w, L.rand(Math.round(u * 100 + y * 1000)));
    }
  }
});
