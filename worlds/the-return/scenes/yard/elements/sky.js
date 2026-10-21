// The high pale sky of late August: a milky white down at the line, a cool grey-blue up high, dry brush over it; high
// thin cirrus drifting slowly (a layer, its ends meeting), a soft bank of cloud low over the fields drifting slower.
const A = e.aspect, L = e.lib, W = A + 0.6;
const sky = g.createLinearGradient(0, -0.35, 0, 1.25);
sky.addColorStop(0, "#b3c1cb");
sky.addColorStop(0.3, "#ccd4d7");
sky.addColorStop(0.58, "#e8e5db");
sky.addColorStop(0.68, "#efe9da");
sky.addColorStop(1, "#e7dfcc");
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, W, 1.6);
L.strokes(g, 11, -0.3, -0.35, W, 1.0, ["#dfe3e0", "#c4cdd1", "#e9e6dc"], 700, 0.07, 0.006, 0, 0.16);
// (a streak of cloud at x, y: a long thin oval and a few strokes along it — drawn again one width to the left, so the
// layer's ends meet as it drifts round)
const streak = (g, x, y, len, thick, color, alpha, seed) => {
  for (const dx of [0, -W]) {
    g.globalAlpha = alpha;
    g.fillStyle = color;
    g.beginPath();
    g.ellipse(x + dx, y, len / 2, thick, -0.05, 0, Math.PI * 2);
    g.fill();
    L.strokes(g, seed, x + dx - len / 2, y - thick, len, thick * 2, [color, "#ffffff"], 6, len * 0.3, thick * 0.5, 0, alpha * 0.8);
  }
  g.globalAlpha = 1;
};
e.layer("cirrus", { drift: [0.0025, 0], box: [-0.3, -0.35, A + 0.3, 0.45] }, (g) => {
  for (let i = 0; i < 24; i++) {
    const x = -0.3 + W * L.rnd(i, 21), y = -0.25 + 0.6 * L.rnd(i, 22) ** 1.4, len = 0.12 + 0.34 * L.rnd(i, 23);
    streak(g, x, y, len, 0.004 + 0.008 * L.rnd(i, 24), "#f6f4ee", 0.4, 100 + i);
  }
});
e.layer("bank", { drift: [0.0008, 0], box: [-0.3, 0.4, A + 0.3, 0.58] }, (g) => {
  for (let i = 0; i < 12; i++) {
    const x = -0.3 + W * L.rnd(i, 31), y = 0.5 + 0.045 * L.rnd(i, 32), len = 0.3 + 0.5 * L.rnd(i, 33);
    streak(g, x, y, len, 0.012 + 0.012 * L.rnd(i, 34), "#f2ede2", 0.32, 200 + i);
  }
});
