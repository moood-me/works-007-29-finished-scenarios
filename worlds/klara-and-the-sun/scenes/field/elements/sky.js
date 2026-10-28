// The sky at sunset over the field (screen heights; the horizon at 0.46): a deep clear blue high up going mauve, then
// orange and gold down to the horizon, warmest a little left of the middle where the Sun stands over the barn; long
// thin streaks of cloud lit from below. The Sun itself is a layer of its own (`disc`, its point `sky#disc` — the scene's
// light comes from it): animate lowers it toward the barn's ridge as `sun_low` goes to 1.
const A = e.aspect;
// where the Sun stands at the start: 2° left of straight ahead, 7.5° up
const sx = A / 2 - Math.tan((2 * Math.PI) / 180);
const sy = 0.46 - Math.tan((7.5 * Math.PI) / 180);
const sky = g.createLinearGradient(0, -0.35, 0, 0.5);
sky.addColorStop(0, '#4e6a9e');
sky.addColorStop(0.32, '#7f8db4');
sky.addColorStop(0.55, '#c49cab');
sky.addColorStop(0.74, '#ebab84');
sky.addColorStop(0.88, '#ffc98e');
sky.addColorStop(1, '#ffd9a0');
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
// the warm glow about the Sun, wide along the horizon
g.save();
g.translate(sx, sy);
g.scale(2.4, 1);
const glow = g.createRadialGradient(0, 0, 0, 0, 0, 0.32);
glow.addColorStop(0, 'rgba(255,236,190,0.9)');
glow.addColorStop(0.3, 'rgba(255,200,130,0.4)');
glow.addColorStop(1, 'rgba(255,190,120,0)');
g.fillStyle = glow;
g.fillRect(-0.9, -0.7, 1.8, 1.4);
g.restore();
// long thin streaks of cloud, lit pink and gold from below
for (let i = 0; i < 11; i++) {
  const x = -0.2 + e.rnd() * (A + 0.4);
  const y = 0.04 + e.rnd() * 0.3;
  const w = 0.15 + e.rnd() * 0.35;
  g.fillStyle = `rgba(255,${190 + Math.round(e.rnd() * 40)},${150 + Math.round(e.rnd() * 30)},${0.3 + e.rnd() * 0.3})`;
  g.beginPath();
  g.ellipse(x, y, w, 0.005 + e.rnd() * 0.007, -0.02, 0, Math.PI * 2);
  g.fill();
}
// the Sun: a bright disc, its glow the engine's
e.layer('disc', { box: [sx - 0.08, sy - 0.08, sx + 0.08, sy + 0.12] }, g => {
  const d = g.createRadialGradient(sx, sy, 0, sx, sy, 0.017);
  d.addColorStop(0, '#fff6dc');
  d.addColorStop(0.7, '#ffe2a8');
  d.addColorStop(1, '#ffc87a');
  g.fillStyle = d;
  g.beginPath();
  g.arc(sx, sy, 0.016, 0, Math.PI * 2);
  g.fill();
  e.light(sx, sy, 0.05, '#ffe0a8', 1.6);
  e.at(sx, sy, 'disc');
});
