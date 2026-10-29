// The sky of a late summer afternoon: a deep clear blue overhead, paling to a warm cream over the valley, warmer on
// the right, where the sun stands behind the viewer's shoulder; a few heaped fair-weather clouds, flat-bottomed, in
// the scene's straight-edged style, drifting slowly. In the first chapter's morning (`morning` over a half) a cooler,
// paler sky, a misty cream low down
const A = e.aspect, morning = e.state.morning > 0.5;
const sky = g.createLinearGradient(0, -0.35, 0, 1.25);
const STOPS = morning
  ? [[0, "#7890b6"], [0.2, "#93a8c8"], [0.4, "#c2cad8"], [0.52, "#e6e2dc"], [0.6, "#efe6d8"], [1, "#efe6d8"]]
  : [[0, "#5f86bd"], [0.2, "#7ea0cb"], [0.4, "#adc2d9"], [0.52, "#e4dccb"], [0.6, "#f2dfbd"], [1, "#f2dfbd"]];
for (const [at, colour] of STOPS) sky.addColorStop(at, colour);
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
const warm = g.createRadialGradient(A + 0.3, 0.6, 0, A + 0.3, 0.6, 1.3);
warm.addColorStop(0, morning ? "rgba(255, 214, 172, 0.4)" : "rgba(255, 220, 170, 0.5)");
warm.addColorStop(1, "rgba(255, 220, 170, 0)");
g.fillStyle = warm;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
const W = A + 0.6;
e.layer("clouds", { drift: [0.0016, 0], box: [-0.3, -0.05, A + 0.3, 0.45] }, (g) => {
  // a heap: lobes on a flat base, sunlit cream on top, a lavender-grey belly
  const heap = (x0, y0, wide, tall) => {
    const lobes = [];
    const n = 5 + Math.floor(e.rnd() * 3);
    for (let i = 0; i < n; i++) {
      const u = i / (n - 1), r = tall * (0.45 + 0.55 * Math.sin(Math.PI * (0.15 + 0.7 * u))) * (0.8 + e.rnd() * 0.3);
      lobes.push([x0 - wide / 2 + u * wide, y0 - r * 0.6, r]);
    }
    for (const dx of [0, -W, W]) {
      g.fillStyle = "rgba(250, 246, 238, 0.92)";
      for (const [x, y, r] of lobes) {
        g.beginPath();
        for (let k = 0; k < 9; k++) {
          const a = Math.PI + (k / 8) * Math.PI;
          g.lineTo(x + dx + Math.cos(a) * r * 1.1, Math.min(y0, y + Math.sin(a) * r));
        }
        g.closePath();
        g.fill();
      }
      g.fillStyle = "rgba(214, 206, 214, 0.9)";
      g.beginPath();
      g.moveTo(x0 + dx - wide / 2 - tall * 0.3, y0);
      g.lineTo(x0 + dx + wide / 2 + tall * 0.3, y0);
      g.lineTo(x0 + dx + wide / 2, y0 - tall * 0.28);
      g.lineTo(x0 + dx - wide / 2, y0 - tall * 0.24);
      g.closePath();
      g.fill();
    }
  };
  heap(A * 0.08, 0.2, 0.26, 0.06);
  heap(A * 0.42, 0.1, 0.34, 0.07);
  heap(A * 0.74, 0.27, 0.22, 0.045);
  heap(A * 0.95, 0.06, 0.3, 0.06);
  heap(A * 0.58, 0.36, 0.14, 0.025);
});
