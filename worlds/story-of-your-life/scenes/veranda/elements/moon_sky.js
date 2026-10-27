// A clear summer night over the back yard (screen heights; the horizon at 0.42): deep blue above, paler and greyer
// low down; stars, fewer toward the moon; the full moon high on the left (its point `disc`, the moonlight's source),
// a soft halo round it; one thin cloud below it drifting slowly (the layer `cloud`).
const A = e.aspect, MX = 0.3, MY = 0.13;
const sky = g.createLinearGradient(0, -0.35, 0, 0.7);
sky.addColorStop(0, '#141d3a');
sky.addColorStop(0.4, '#25335c');
sky.addColorStop(0.72, '#3d4c76');
sky.addColorStop(1, '#4a5779');
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
for (let i = 0; i < 260; i++) {
  const x = -0.3 + e.rnd() * (A + 0.6), y = -0.35 + e.rnd() * 0.75, d = Math.hypot(x - MX, y - MY);
  if (d < 0.14 || e.rnd() > 0.35 + d) continue;
  g.fillStyle = `rgba(236,240,255,${0.35 + e.rnd() * 0.55})`;
  g.beginPath();
  g.arc(x, y, 0.0009 + e.rnd() * 0.0018, 0, Math.PI * 2);
  g.fill();
}
const halo = g.createRadialGradient(MX, MY, 0.03, MX, MY, 0.2);
halo.addColorStop(0, 'rgba(214,224,255,0.38)');
halo.addColorStop(1, 'rgba(214,224,255,0)');
g.fillStyle = halo;
g.fillRect(MX - 0.2, MY - 0.2, 0.4, 0.4);
g.fillStyle = '#f4f1e4';
g.beginPath();
g.arc(MX, MY, 0.036, 0, Math.PI * 2);
g.fill();
g.fillStyle = 'rgba(176,180,186,0.45)';
for (const [dx, dy, r] of [[-0.011, -0.008, 0.011], [0.009, -0.012, 0.007], [0.006, 0.008, 0.012], [-0.014, 0.012, 0.006]]) {
  g.beginPath();
  g.arc(MX + dx, MY + dy, r, 0, Math.PI * 2);
  g.fill();
}
e.at(MX, MY, 'disc');
e.light(MX, MY, 0.05, '#dfe6ff', 0.5, 'disc');
e.layer('cloud', { drift: [0.003, 0], box: [-0.3, 0.12, A + 0.3, 0.3] }, c => {
  for (const [x, y, w] of [[0.1, 0.2, 0.34], [0.95, 0.17, 0.26], [1.5, 0.23, 0.3]]) {
    for (let k = 0; k < 7; k++) {
      c.fillStyle = 'rgba(150,164,200,0.12)';
      c.beginPath();
      c.ellipse(x + (k - 3) * w * 0.13, y + Math.sin(k * 1.7) * 0.006, w * 0.2, 0.011, 0, 0, Math.PI * 2);
      c.fill();
    }
  }
});
