// The spring dusk, seen only through the window: deep blue above going lavender, then pink and peach low over the
// roofs across the street; a few long pink clouds, the first star. Screen heights (the horizon at 0.36). By `day` (a
// year on, chapter 3) a clear spring day instead: a soft blue going milky low, a few white clouds.
const A = e.aspect;
if (e.state.day) {
  const day = g.createLinearGradient(0, -0.35, 0, 0.45);
  day.addColorStop(0, '#86aede');
  day.addColorStop(0.5, '#adc8e6');
  day.addColorStop(0.85, '#dfe6ec');
  day.addColorStop(1, '#f2ead8');
  g.fillStyle = day;
  g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
  for (let i = 0; i < 7; i++) {
    const x = -0.3 + e.rnd() * (A + 0.6),
      y = -0.1 + e.rnd() * 0.3;
    for (let k = 0; k < 6; k++) {
      g.fillStyle = 'rgba(255,253,248,0.6)';
      g.beginPath();
      g.ellipse(x + (k - 2.5) * 0.03, y - e.rnd() * 0.025, 0.04 + e.rnd() * 0.025, 0.015 + e.rnd() * 0.01, 0, 0, Math.PI * 2);
      g.fill();
    }
  }
  return;
}
const sky = g.createLinearGradient(0, -0.35, 0, 0.45);
sky.addColorStop(0, '#34407a');
sky.addColorStop(0.35, '#5b5f9e');
sky.addColorStop(0.62, '#a58bb8');
sky.addColorStop(0.82, '#e9a9a6');
sky.addColorStop(1, '#f7cf9e');
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
// long thin clouds catching the last light
for (let i = 0; i < 9; i++) {
  const x = -0.3 + e.rnd() * (A + 0.6),
    y = 0.06 + e.rnd() * 0.22,
    w = 0.12 + e.rnd() * 0.3;
  g.fillStyle = i % 2 ? 'rgba(246,186,176,0.55)' : 'rgba(226,160,170,0.45)';
  g.beginPath();
  g.ellipse(x, y, w, 0.006 + e.rnd() * 0.008, 0, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = 'rgba(255,248,230,0.9)';
g.beginPath();
g.arc(A * 0.43, 0.02, 0.0022, 0, Math.PI * 2);
g.fill();
