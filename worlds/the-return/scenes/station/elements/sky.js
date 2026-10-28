// The high whitish sky of a misty late-August morning, the fog not yet lifted off the fields: a denser grey-blue high
// up where the mist thins (so that the sky is not the sand's tone), a pearly white lower, the whitest band at the horizon (0.36 of the frame) where the fog lies on
// the land, dry brush over it and the paper's tooth through it; a high thin veil of cloud drifting slowly (a layer, its
// ends meeting) and the fog's soft upper edge over the fields drifting slower.
const A = e.aspect, L = e.lib, W = A + 0.6;
const sky = g.createLinearGradient(0, -0.35, 0, 1.25);
sky.addColorStop(0, "#9caebb");
sky.addColorStop(0.12, "#b3c1c9");
sky.addColorStop(0.26, "#d0d6d5");
sky.addColorStop(0.34, "#e6e5dc");
sky.addColorStop(0.37, "#eeebe0");
sky.addColorStop(1, "#e9e3d4");
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, W, 1.6);
L.strokes(g, 11, -0.3, -0.35, W, 0.7, ["#dfe3e2", "#a9b8c1", "#eeebe2"], 500, 0.09, 0.01, 0, 0.2);
L.paper(g, -0.3, -0.35, W, 1.6, 0.05, 0.35);
// (a soft streak at x, y: a long thin oval and a few strokes along it — drawn again one width to the left, so the
// layer's ends meet as it drifts round)
const streak = (g, x, y, len, thick, color, alpha, seed) => {
  for (const dx of [0, -W]) {
    g.globalAlpha = alpha;
    g.fillStyle = color;
    g.beginPath();
    g.ellipse(x + dx, y, len / 2, thick, -0.02, 0, Math.PI * 2);
    g.fill();
    L.strokes(g, seed, x + dx - len / 2, y - thick, len, thick * 2, [color, "#ffffff"], 5, len * 0.3, thick * 0.6, 0, alpha * 0.7);
  }
  g.globalAlpha = 1;
};
e.layer("veil", { drift: [0.002, 0], box: [-0.3, -0.35, A + 0.3, 0.22] }, (g) => {
  for (let i = 0; i < 18; i++) {
    const x = -0.3 + W * L.rnd(i, 21), y = -0.3 + 0.48 * L.rnd(i, 22) ** 1.3, len = 0.2 + 0.4 * L.rnd(i, 23);
    streak(g, x, y, len, 0.008 + 0.012 * L.rnd(i, 24), "#f4f3ee", 0.35, 100 + i);
  }
});
e.layer("fogtop", { drift: [0.0007, 0], box: [-0.3, 0.26, A + 0.3, 0.4] }, (g) => {
  for (let i = 0; i < 14; i++) {
    const x = -0.3 + W * L.rnd(i, 31), y = 0.315 + 0.035 * L.rnd(i, 32), len = 0.35 + 0.5 * L.rnd(i, 33);
    streak(g, x, y, len, 0.012 + 0.014 * L.rnd(i, 34), "#f6f4ee", 0.5, 200 + i);
  }
});
