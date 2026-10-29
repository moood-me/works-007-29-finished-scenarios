// The sky over the plateau: a dry, dusty blue overhead paling to a warm whitish haze over the lowlands; a few long thin
// clouds drifting; and over it, as much as `dawn` (sky.animate.js), the dawn — rose and gold low down, a cool violet
// overhead
const A = e.aspect;
const day = g.createLinearGradient(0, -0.35, 0, 1.25);
day.addColorStop(0, "#6f90bd");
day.addColorStop(0.22, "#8eaacb");
day.addColorStop(0.42, "#bccbd6");
day.addColorStop(0.52, "#e2dccb");
day.addColorStop(0.62, "#eee0c3");
day.addColorStop(1, "#eee0c3");
g.fillStyle = day;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
const W = A + 0.6;
e.layer("clouds", { drift: [0.0014, 0], box: [-0.3, -0.1, A + 0.3, 0.42] }, (g) => {
  const band = (y, x0, len, thick, top, under) => {
    for (const dx of [0, -W, W]) {
      g.fillStyle = top;
      g.beginPath();
      g.ellipse(x0 + dx, y, len, thick, 0, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = under;
      g.beginPath();
      g.ellipse(x0 + dx + len * 0.08, y + thick * 0.45, len * 0.82, thick * 0.55, 0, 0, Math.PI * 2);
      g.fill();
    }
  };
  band(0.05, A * 0.2, 0.36, 0.012, "rgba(246, 242, 234, 0.75)", "rgba(214, 208, 212, 0.7)");
  band(0.16, A * 0.66, 0.5, 0.014, "rgba(246, 242, 234, 0.7)", "rgba(214, 208, 212, 0.65)");
  band(0.27, A * 0.95, 0.3, 0.008, "rgba(248, 240, 228, 0.65)", "rgba(220, 210, 206, 0.6)");
  band(0.34, A * 0.4, 0.42, 0.008, "rgba(250, 242, 228, 0.6)", "rgba(226, 214, 204, 0.55)");
});
e.layer("dawn", {}, (g) => {
  const sky = g.createLinearGradient(0, -0.35, 0, 1.25);
  sky.addColorStop(0, "#4f5a8c");
  sky.addColorStop(0.22, "#7a7aa6");
  sky.addColorStop(0.4, "#c09cb0");
  sky.addColorStop(0.5, "#eab79e");
  sky.addColorStop(0.58, "#f6cf9e");
  sky.addColorStop(1, "#f6d6aa");
  g.fillStyle = sky;
  g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
  // the glow where the sun is coming up, behind the viewer's left: warmer on that side
  const warm = g.createRadialGradient(-0.3, 0.55, 0, -0.3, 0.55, 1.4);
  warm.addColorStop(0, "rgba(255, 196, 150, 0.55)");
  warm.addColorStop(1, "rgba(255, 196, 150, 0)");
  g.fillStyle = warm;
  g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
});
