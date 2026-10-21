// The high whitish sky of a late August day after the war: a pale grey-blue high up thinning to a whitish haze over the
// fields, dry brush over it and the paper's tooth through it; high thin cirrus drifting slowly (a layer, its ends
// meeting), a low soft bank of cloud over the fields drifting slower. The horizon is at 0.27 of the frame.
const A = e.aspect, L = e.lib, W = A + 0.6;
const sky = g.createLinearGradient(0, -0.35, 0, 1.25);
// (the stops are shares of the gradient's run from y −0.35 to 1.25: 0.39 is the horizon)
sky.addColorStop(0, "#bcc6cc");
sky.addColorStop(0.2, "#c6cfd3");
sky.addColorStop(0.3, "#d6dbda");
sky.addColorStop(0.36, "#e6e6df");
sky.addColorStop(0.39, "#ece9df");
sky.addColorStop(1, "#e6e1d3");
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, W, 1.6);
L.strokes(g, 11, -0.3, -0.35, W, 0.75, ["#eceae2", "#c9d0d2", "#e7e4da"], 600, 0.08, 0.008, 0, 0.22);
L.paper(g, -0.3, -0.35, W, 1.6, 0.12, 0.3);
// (a streak of cloud at x, y: a long thin oval and a few strokes along it — drawn again one width to the left, so the
// layer's ends meet as it drifts round)
const streak = (g, x, y, len, thick, color, alpha, seed) => {
  for (const dx of [0, -W]) {
    g.globalAlpha = alpha;
    g.fillStyle = color;
    g.beginPath();
    g.ellipse(x + dx, y, len / 2, thick, -0.05, 0, Math.PI * 2);
    g.fill();
    L.strokes(g, seed, x + dx - len / 2, y - thick, len, thick * 2, [color, "#fbf9f3"], 6, len * 0.3, thick * 0.5, 0, alpha * 0.8);
  }
  g.globalAlpha = 1;
};
e.layer("cirrus", { drift: [0.0025, 0], box: [-0.3, -0.35, A + 0.3, 0.3] }, (g) => {
  for (let i = 0; i < 24; i++) {
    const x = -0.3 + W * L.rnd(i, 21), y = -0.25 + 0.48 * L.rnd(i, 22) ** 1.4, len = 0.12 + 0.34 * L.rnd(i, 23);
    streak(g, x, y, len, 0.004 + 0.008 * L.rnd(i, 24), "#f6f3ec", 0.5, 100 + i);
  }
});
e.layer("bank", { drift: [0.0008, 0], box: [-0.3, 0.16, A + 0.3, 0.29] }, (g) => {
  for (let i = 0; i < 12; i++) {
    const x = -0.3 + W * L.rnd(i, 31), y = 0.215 + 0.035 * L.rnd(i, 32), len = 0.3 + 0.5 * L.rnd(i, 33);
    streak(g, x, y, len, 0.01 + 0.01 * L.rnd(i, 34), "#ece6d8", 0.4, 200 + i);
  }
});
