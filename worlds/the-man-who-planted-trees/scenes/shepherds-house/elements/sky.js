// The dusk sky over the plateau: deep violet overhead going down through mauve and rose to apricot at the horizon; the
// sun sitting on the far mountains left of the house (its point `sun` is where the scene's `sun` light comes from); long
// thin clouds lit from below (a layer that drifts); the first stars high up
const H = 0.58, A = e.aspect, sunX = A * 0.34;
const sky = g.createLinearGradient(0, -0.35, 0, 1.25);
sky.addColorStop(0, "#28264a");
sky.addColorStop(0.2, "#3b3560");
sky.addColorStop(0.42, "#6e5479");
sky.addColorStop(0.56, "#b77d86");
sky.addColorStop(0.66, "#e9a684");
sky.addColorStop(0.72, "#f6c896");
sky.addColorStop(1, "#f1c39a");
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
// the glow round the low sun
const glow = g.createRadialGradient(sunX, H - 0.01, 0, sunX, H - 0.01, 0.55);
glow.addColorStop(0, "rgba(255, 228, 176, 0.85)");
glow.addColorStop(0.25, "rgba(255, 196, 140, 0.35)");
glow.addColorStop(1, "rgba(255, 180, 130, 0)");
g.fillStyle = glow;
g.fillRect(sunX - 0.6, H - 0.6, 1.2, 1.0);
g.fillStyle = "#fff0cf";
g.beginPath();
g.arc(sunX, H - 0.012, 0.022, 0, Math.PI * 2);
g.fill();
e.at(sunX, H - 0.012, "sun");
e.light(sunX, H - 0.012, 0.06, "#ffd9a0", 0.6);
// the first stars, high and faint
e.layer("stars", {}, (g) => {
  for (let i = 0; i < 40; i++) {
    const x = -0.3 + e.rnd() * (A + 0.6), y = -0.33 + Math.pow(e.rnd(), 1.6) * 0.32, r = 0.0012 + e.rnd() * 0.0016;
    g.fillStyle = `rgba(255, 246, 228, ${0.35 + e.rnd() * 0.45})`;
    g.beginPath();
    g.arc(x, y, r, 0, Math.PI * 2);
    g.fill();
  }
});
// long thin clouds, rose underneath, drifting slowly; painted so the ends meet
const W = A + 0.6;
e.layer("clouds", { drift: [0.0025, 0], box: [-0.3, 0.05, A + 0.3, 0.5] }, (g) => {
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
  band(0.16, A * 0.15, 0.32, 0.008, "rgba(120, 92, 128, 0.55)", "rgba(226, 150, 140, 0.55)");
  band(0.24, A * 0.62, 0.45, 0.011, "rgba(132, 96, 128, 0.5)", "rgba(240, 166, 140, 0.6)");
  band(0.31, A * 0.95, 0.28, 0.007, "rgba(150, 104, 128, 0.45)", "rgba(246, 180, 146, 0.6)");
  band(0.37, A * 0.35, 0.5, 0.009, "rgba(168, 112, 124, 0.4)", "rgba(250, 192, 150, 0.6)");
  band(0.44, A * 0.8, 0.36, 0.006, "rgba(190, 124, 124, 0.35)", "rgba(255, 206, 160, 0.55)");
});
