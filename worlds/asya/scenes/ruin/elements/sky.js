// The sky over the valley at sunset, looking east, away from the sun (it is low behind the viewer, on the right): a
// deep clear blue above going violet, the rosy band of the earth's shadow's edge low over the far hills, apricot at the
// hills themselves; long streaks of cloud lit pink and gold from below; the full moon rising pale on the right. Toward
// the frame's sides it is paper and graphite (the `paper` layer, over the clouds, which drift).
const L = e.lib;
const A = e.aspect;
const sky = g.createLinearGradient(0, -0.35, 0, 1.25);
sky.addColorStop(0, "#2f4f8e");
sky.addColorStop(0.12, "#4565a2");
sky.addColorStop(0.24, "#6c83bb");
sky.addColorStop(0.3, "#958fc2");
sky.addColorStop(0.34, "#be9fc0");
sky.addColorStop(0.38, "#e4afb2");
sky.addColorStop(0.42, "#f3c2a8");
sky.addColorStop(0.46, "#f6d5b4");
sky.addColorStop(0.6, "#ecd2b8");
sky.addColorStop(1, "#dcc4b0");
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);

// the moon, full, just risen over the hills: pale, warm at its lower edge, a soft glow
const mx = A * 0.77;
const my = 0.27;
const halo = g.createRadialGradient(mx, my, 0.01, mx, my, 0.09);
halo.addColorStop(0, "rgba(255, 236, 222, 0.45)");
halo.addColorStop(1, "rgba(255, 236, 222, 0)");
g.fillStyle = halo;
g.fillRect(mx - 0.1, my - 0.1, 0.2, 0.2);
const disc = g.createLinearGradient(0, my - 0.02, 0, my + 0.02);
disc.addColorStop(0, "#fbf3ea");
disc.addColorStop(1, "#f6dccb");
g.fillStyle = disc;
g.beginPath();
g.arc(mx, my, 0.019, 0, Math.PI * 2);
g.fill();
g.fillStyle = "rgba(196, 178, 186, 0.35)";
for (const [dx, dy, r] of [[-0.006, -0.004, 0.005], [0.005, 0.003, 0.004], [-0.002, 0.008, 0.003]]) {
  g.beginPath();
  g.arc(mx + dx, my + dy, r, 0, Math.PI * 2);
  g.fill();
}
e.light(mx, my, 0.03, "#fff0e4", 0.4);
e.at(mx, my, "moon");

// the clouds: long thin streaks, their undersides lit by the sun behind the viewer — gold low, pink higher —, their
// tops a cool violet; they drift slowly to the left
const streaks = [
  [0.1, 0.24, 0.34], [0.55, 0.19, 0.42], [1.05, 0.25, 0.3], [1.5, 0.17, 0.4], [1.95, 0.22, 0.36],
  [0.3, 0.1, 0.5], [0.95, 0.07, 0.38], [1.7, 0.09, 0.46], [-0.1, 0.33, 0.24], [0.8, 0.32, 0.2], [1.4, 0.335, 0.26],
];
e.layer("clouds", { drift: [-0.0012, 0], box: [-0.3, -0.02, A + 0.3, 0.38] }, (c) => {
  c.filter = "blur(0.003px)";
  for (let s = 0; s < streaks.length; s++) {
    const [cx, cy, w] = streaks[s];
    const low = L.smooth(0.05, 0.33, cy);
    const lit = low > 0.6 ? "#f8cfa4" : low > 0.3 ? "#f2b9ae" : "#e2a9b6";
    for (let i = 0; i < 7; i++) {
      const u = (i / 6 - 0.5) * 2;
      const x = cx + u * w * 0.8 + 0.03 * L.rnd(i + s * 10, 3);
      const len = w * (0.25 + 0.3 * (1 - u * u)) * (0.7 + 0.6 * L.rnd(i + s * 10, 5));
      const th = 0.004 + 0.007 * (1 - u * u) * L.rnd(i + s * 10, 7);
      const y = cy + 0.01 * (L.rnd(i + s * 10, 9) - 0.5);
      c.fillStyle = "rgba(150, 140, 190, 0.55)";
      c.beginPath();
      c.ellipse(x, y - th * 0.6, len, th, 0, 0, Math.PI * 2);
      c.fill();
      c.fillStyle = lit;
      c.beginPath();
      c.ellipse(x + len * 0.05, y + th * 0.25, len * 0.92, th * 0.75, 0, 0, Math.PI * 2);
      c.fill();
    }
  }
});

// the paper at the sides: the sky's colour goes over to the paper toward the frame's edges, and graphite hatching on it
e.layer("paper", {}, (p) => {
  const mid = A / 2;
  for (const side of [-1, 1]) {
    const x0 = mid + side * 0.5;
    const x1 = mid + side * (A / 2 + 0.3);
    const grd = p.createLinearGradient(x0, 0, x1, 0);
    for (let i = 0; i <= 12; i++) {
      const x = x0 + ((x1 - x0) * i) / 12;
      grd.addColorStop(i / 12, L.paper(L.edge(x - mid)));
    }
    p.fillStyle = grd;
    p.fillRect(Math.min(x0, x1), -0.35, Math.abs(x1 - x0), 1.6);
  }
  L.hatch(p, [-0.3, -0.35, A + 0.3, 0.6], -A / 2, 1);
  // the hills' pencilled line carried on over the paper
  p.strokeStyle = L.graphite(0.5);
  p.lineWidth = 0.0012;
  for (const side of [-1, 1]) {
    p.beginPath();
    for (let i = 0; i <= 30; i++) {
      const sx = side * (0.6 + (0.9 * i) / 30);
      const y = 0.39 + 0.02 * e.anim.noise(sx * 6, 4);
      if (i === 0) p.moveTo(A / 2 + sx, y);
      else p.lineTo(A / 2 + sx, y);
    }
    p.stroke();
  }
});
