// The Rhine at night, seen from above (a plane: x across, y toward the viewer, metres): from under Z.'s quay wall to
// L.'s embankment, 443 m. Its own colour under the mirror is a deep green-blue, the current in long faint streaks, small
// ripples near — the moon's path, the lantern's and L.'s lights lie on it as the mirror gives them. Toward the frame's
// sides it goes over to the paper.
const L = e.lib;
const W = 3500;
const H = 221.5;
const D = 224.5;
g.fillStyle = "#4d6a80";
g.fillRect(-W, -H, 2 * W, 2 * H);
// the current: long streaks along the river, finer and denser far off
for (let i = 0; i < 160; i++) {
  const t = L.rnd(i, 91);
  const y = -H + 2 * H * t * t;
  const x = -W + 2 * W * L.rnd(i, 93);
  const far = (D - y) / 60;
  g.fillStyle = i % 2 ? "rgba(120, 150, 170, 0.4)" : "rgba(52, 76, 96, 0.4)";
  g.fillRect(x, y, (8 + 30 * L.rnd(i, 95)) * Math.min(far, 12), 0.05 + 0.04 * far);
}
// near: small ripples, short dark and light dashes
for (let i = 0; i < 260; i++) {
  const y = H - 1 - 16 * L.rnd(i, 97);
  const x = -12 + 24 * L.rnd(i, 99);
  g.fillStyle = i % 2 ? "rgba(140, 168, 188, 0.4)" : "rgba(40, 62, 82, 0.4)";
  g.fillRect(x, y, 0.25 + 0.5 * L.rnd(i, 101), 0.03);
}
// toward the sides of the frame: paper (by where each band is seen: across over its distance — the bands finer near)
for (let y = H; y > -H; ) {
  const d = D - y;
  const step = Math.max(0.2, d * 0.04);
  const span = 1.2 * d + 2;
  const grd = g.createLinearGradient(-span, 0, span, 0);
  for (let i = 0; i <= 32; i++) {
    const x = -span + (2 * span * i) / 32;
    grd.addColorStop(i / 32, L.paper(L.edge(x / d)));
  }
  g.fillStyle = grd;
  g.fillRect(-span, y - step - 0.02, 2 * span, step + 0.04);
  g.fillStyle = L.paper(1);
  g.fillRect(-W, y - step - 0.02, W - span, step + 0.04);
  g.fillRect(span, y - step - 0.02, W - span, step + 0.04);
  y -= step;
}
