// The sky over the dunes (stage heights; the eye's level at 0.42, the far dunes' crest a little above it). The day — a
// pale white-gold band low down, paling up into a thin washed blue; the evening (`evening`, a layer over it that
// animate brings in with its key) — warm peach low where the light still is, a soft blue above; long thin streaks of
// high cloud drifting (`clouds`) and a veil of fine blown sand low over the dunes (`dust`) on both; the night
// (`night`) — a deep clear blue, stars and the moon (`moon`, the point the scene's moonlight comes from); the morning
// fog (`fog`) — a milky white closing it all.
const W = e.aspect;
const day = g.createLinearGradient(0, -0.35, 0, 0.5);
day.addColorStop(0, "#8fa6c6");
day.addColorStop(0.35, "#c6d0d8");
day.addColorStop(0.7, "#efe6cf");
day.addColorStop(1, "#f6ecd4");
g.fillStyle = day;
g.fillRect(-0.3, -0.35, W + 0.6, 1.6);
e.layer("evening", { box: [-0.3, -0.35, W + 0.3, 1.25] }, (c) => {
  const ev = c.createLinearGradient(0, -0.35, 0, 0.5);
  ev.addColorStop(0, "#5f74a2");
  ev.addColorStop(0.35, "#8ea2c4");
  ev.addColorStop(0.65, "#d9c3b4");
  ev.addColorStop(0.85, "#f0cfa6");
  ev.addColorStop(1, "#f4d9b0");
  c.fillStyle = ev;
  c.fillRect(-0.3, -0.35, W + 0.6, 1.6);
});
e.layer("clouds", { drift: [0.003, 0], box: [-0.3, -0.35, W + 0.3, 0.3] }, (c) => {
  e.lib.streaks(c, 7, 10, -0.3, W + 0.3, -0.25, 0.25, "255, 236, 214", 0.6, 0.22, 0.5, 0.012);
});
e.layer("dust", { drift: [0.006, 0], box: [-0.3, 0.22, W + 0.3, 0.45] }, (c) => {
  e.lib.streaks(c, 9, 7, -0.3, W + 0.3, 0.3, 0.4, "238, 214, 174", 0.4, 0.3, 0.6, 0.03);
});
e.layer("night", { box: [-0.3, -0.35, W + 0.3, 1.25] }, (c) => {
  const n = c.createLinearGradient(0, -0.35, 0, 0.5);
  n.addColorStop(0, "#16203c");
  n.addColorStop(0.4, "#25365d");
  n.addColorStop(0.8, "#3a4c78");
  n.addColorStop(1, "#46577f");
  c.fillStyle = n;
  c.fillRect(-0.3, -0.35, W + 0.6, 1.6);
  // stars, more and brighter up high
  const r = e.lib.stream(51);
  for (let i = 0; i < 180; i++) {
    const x = -0.3 + r() * (W + 0.6);
    const y = -0.35 + Math.pow(r(), 1.4) * 0.7;
    const s = 0.0012 + r() * 0.0022;
    c.fillStyle = `rgba(236, 240, 255, ${0.35 + r() * 0.55})`;
    c.beginPath();
    c.arc(x, y, s, 0, 6.3);
    c.fill();
  }
  // the moon: a pale disc with a soft ring of light about it
  const mx = W * 0.32;
  const my = 0.1;
  const halo = c.createRadialGradient(mx, my, 0.02, mx, my, 0.14);
  halo.addColorStop(0, "rgba(220, 228, 250, 0.35)");
  halo.addColorStop(1, "rgba(220, 228, 250, 0)");
  c.fillStyle = halo;
  c.fillRect(mx - 0.14, my - 0.14, 0.28, 0.28);
  c.fillStyle = "#f3eedc";
  c.beginPath();
  c.arc(mx, my, 0.026, 0, 6.3);
  c.fill();
  c.fillStyle = "rgba(196, 192, 176, 0.5)";
  c.beginPath();
  c.arc(mx - 0.008, my + 0.004, 0.007, 0, 6.3);
  c.arc(mx + 0.009, my - 0.007, 0.005, 0, 6.3);
  c.fill();
  e.light(mx, my, 0.05, "#e6ecff", 0.6, "moonglow");
  e.at(mx, my, "moon");
});
e.layer("fog", { box: [-0.3, -0.35, W + 0.3, 1.25] }, (c) => {
  const f = c.createLinearGradient(0, -0.35, 0, 0.5);
  f.addColorStop(0, "#c9cfd6");
  f.addColorStop(0.6, "#e2e2dc");
  f.addColorStop(1, "#ecebe4");
  c.fillStyle = f;
  c.fillRect(-0.3, -0.35, W + 0.6, 1.6);
});
