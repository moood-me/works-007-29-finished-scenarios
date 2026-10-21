// The high whitish sky of a late August evening: a warm apricot low over the fields, a pale cream above it, a whitish
// grey high up, dry brush over it and the paper's tooth through it; high thin cirrus warmed by the low sun drifting
// slowly (a layer, its ends meeting), a soft bank of cloud low over the fields drifting slower. The horizon is at 0.32
// of the frame.
const A = e.aspect, L = e.lib, W = A + 0.6;
const sky = g.createLinearGradient(0, -0.35, 0, 1.25);
sky.addColorStop(0, "#c6ced2");
sky.addColorStop(0.22, "#dfe1dc");
sky.addColorStop(0.33, "#eee7d8");
sky.addColorStop(0.4, "#f4dcb6");
sky.addColorStop(0.44, "#f0cf9f");
sky.addColorStop(1, "#e9c592");
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, W, 1.6);
L.strokes(g, 11, -0.3, -0.35, W, 0.75, ["#eceae2", "#c9d0d2", "#f1e4cc"], 600, 0.08, 0.008, 0, 0.22);
L.paper(g, -0.3, -0.35, W, 1.6, 0.17, 0.8);
// (a streak of cloud at x, y: a long thin oval and a few strokes along it — drawn again one width to the left, so the
// layer's ends meet as it drifts round)
const streak = (g, x, y, len, thick, color, alpha, seed) => {
  for (const dx of [0, -W]) {
    g.globalAlpha = alpha;
    g.fillStyle = color;
    g.beginPath();
    g.ellipse(x + dx, y, len / 2, thick, -0.05, 0, Math.PI * 2);
    g.fill();
    L.strokes(g, seed, x + dx - len / 2, y - thick, len, thick * 2, [color, "#fff6ea"], 6, len * 0.3, thick * 0.5, 0, alpha * 0.8);
  }
  g.globalAlpha = 1;
};
e.layer("cirrus", { drift: [0.0025, 0], box: [-0.3, -0.35, A + 0.3, 0.3] }, (g) => {
  for (let i = 0; i < 24; i++) {
    const x = -0.3 + W * L.rnd(i, 21), y = -0.25 + 0.48 * L.rnd(i, 22) ** 1.4, len = 0.12 + 0.34 * L.rnd(i, 23);
    streak(g, x, y, len, 0.004 + 0.008 * L.rnd(i, 24), "#fbe6cf", 0.45, 100 + i);
  }
});
e.layer("bank", { drift: [0.0008, 0], box: [-0.3, 0.2, A + 0.3, 0.34] }, (g) => {
  for (let i = 0; i < 12; i++) {
    const x = -0.3 + W * L.rnd(i, 31), y = 0.26 + 0.035 * L.rnd(i, 32), len = 0.3 + 0.5 * L.rnd(i, 33);
    streak(g, x, y, len, 0.01 + 0.01 * L.rnd(i, 34), "#f5d9b4", 0.38, 200 + i);
  }
});
