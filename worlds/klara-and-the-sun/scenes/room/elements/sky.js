// The sky over the field on a late afternoon, seen through the west window (screen heights): pale clear blue high up,
// going warm and golden toward the horizon, brightest to the right where the low Sun stands (off past the window's
// right edge), a few thin high streaks of cloud.
const A = e.aspect;
const sky = g.createLinearGradient(0, -0.35, 0, 0.4);
sky.addColorStop(0, '#8eb0d0');
sky.addColorStop(0.45, '#b9cdd8');
sky.addColorStop(0.8, '#e6dcc4');
sky.addColorStop(1, '#f4d9a8');
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
// the glow about the Sun, over the right of the view
const sx = A / 2 + 0.33;
const glow = g.createRadialGradient(sx, 0.02, 0, sx, 0.02, 0.6);
glow.addColorStop(0, 'rgba(255,240,205,0.95)');
glow.addColorStop(0.25, 'rgba(255,228,175,0.55)');
glow.addColorStop(1, 'rgba(255,220,170,0)');
g.fillStyle = glow;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
// thin streaks of high cloud, lit gold from below
for (let i = 0; i < 9; i++) {
  const x = -0.2 + e.rnd() * (A + 0.4);
  const y = 0.02 + e.rnd() * 0.22;
  const w = 0.12 + e.rnd() * 0.3;
  g.fillStyle = `rgba(255,236,206,${0.25 + e.rnd() * 0.25})`;
  g.beginPath();
  g.ellipse(x, y, w, 0.006 + e.rnd() * 0.006, -0.03, 0, Math.PI * 2);
  g.fill();
}
