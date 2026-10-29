// The sky over the street, seen only through the window (screen heights, the horizon at 0.36): the spring dusk (deep
// blue going lavender, pink and peach low over the roofs, long pink clouds, the first star) — turned by `night` to a
// clear night (navy over a last blue glow, stars) and by `day` to a soft spring afternoon (pale blue, a few white
// clouds).
const A = e.aspect,
  n = e.state.night || 0,
  d = e.state.day || 0;
const hex = c => [parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16)];
const mix3 = (a, b, c) => {
  const [x, y, z] = [hex(a), hex(b), hex(c)];
  const k = i => Math.round(x[i] * (1 - n - d) + y[i] * n + z[i] * d);
  return `rgb(${k(0)},${k(1)},${k(2)})`;
};
const sky = g.createLinearGradient(0, -0.35, 0, 0.45);
sky.addColorStop(0, mix3('#34407a', '#141c3c', '#7fa7d8'));
sky.addColorStop(0.35, mix3('#5b5f9e', '#1f2b58', '#9cbde2'));
sky.addColorStop(0.62, mix3('#a58bb8', '#2f3f72', '#bcd3ea'));
sky.addColorStop(0.82, mix3('#e9a9a6', '#45578a', '#d9e6f0'));
sky.addColorStop(1, mix3('#f7cf9e', '#5a6a96', '#e9f0f2'));
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
for (let i = 0; i < 9; i++) {
  const x = -0.3 + e.rnd() * (A + 0.6),
    y = 0.06 + e.rnd() * 0.22,
    w = 0.12 + e.rnd() * 0.3,
    h = 0.006 + e.rnd() * 0.008;
  g.fillStyle = d > 0.5 ? 'rgba(255,255,255,0.75)' : n > 0.5 ? 'rgba(90,100,150,0.35)' : i % 2 ? 'rgba(246,186,176,0.55)' : 'rgba(226,160,170,0.45)';
  g.beginPath();
  g.ellipse(x, y, w, d > 0.5 ? h * 3 : h, 0, 0, Math.PI * 2);
  g.fill();
}
if (d < 0.5) {
  g.fillStyle = 'rgba(255,248,230,0.9)';
  const stars = n > 0.5 ? 40 : 1;
  for (let i = 0; i < stars; i++) {
    g.beginPath();
    g.arc(i ? -0.3 + e.rnd() * (A + 0.6) : A * 0.43, i ? -0.3 + e.rnd() * 0.5 : 0.02, 0.0022, 0, Math.PI * 2);
    g.fill();
  }
}
