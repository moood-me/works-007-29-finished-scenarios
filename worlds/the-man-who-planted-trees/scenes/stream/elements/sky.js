// The morning sky over the slope: a clear cool blue overhead, paling to a warm cream low down and warmer on the left,
// where the sun has just come up behind the viewer's shoulder; a few long thin clouds drifting slowly
const A = e.aspect;
const sky = g.createLinearGradient(0, -0.35, 0, 1.25);
sky.addColorStop(0, "#6f8ab4");
sky.addColorStop(0.22, "#8fa6c8");
sky.addColorStop(0.42, "#bcc6d8");
sky.addColorStop(0.53, "#e2ddd8");
sky.addColorStop(0.6, "#f1e4d2");
sky.addColorStop(1, "#f1e4d2");
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
const warm = g.createRadialGradient(-0.2, 0.62, 0, -0.2, 0.62, 1.1);
warm.addColorStop(0, "rgba(255, 214, 172, 0.55)");
warm.addColorStop(1, "rgba(255, 214, 172, 0)");
g.fillStyle = warm;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
const W = A + 0.6;
e.layer("clouds", { drift: [0.002, 0], box: [-0.3, -0.1, A + 0.3, 0.4] }, (g) => {
  const band = (y, x0, len, thick, top, under) => {
    for (const dx of [0, -W, W]) {
      g.fillStyle = top;
      g.beginPath();
      g.ellipse(x0 + dx, y, len, thick, 0, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = under;
      g.beginPath();
      g.ellipse(x0 + dx - len * 0.06, y + thick * 0.4, len * 0.8, thick * 0.55, 0, 0, Math.PI * 2);
      g.fill();
    }
  };
  band(0.02, A * 0.2, 0.36, 0.01, "rgba(246, 240, 236, 0.55)", "rgba(214, 196, 204, 0.45)");
  band(0.12, A * 0.7, 0.48, 0.012, "rgba(250, 244, 238, 0.6)", "rgba(222, 202, 204, 0.5)");
  band(0.21, A * 0.05, 0.3, 0.008, "rgba(252, 246, 238, 0.55)", "rgba(232, 208, 200, 0.5)");
  band(0.28, A * 0.52, 0.42, 0.009, "rgba(252, 244, 234, 0.5)", "rgba(238, 214, 200, 0.5)");
});
