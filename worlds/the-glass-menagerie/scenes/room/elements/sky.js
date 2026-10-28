// The night sky over the alley, seen only through the window above the dance hall's roof: deep blue going lighter
// and warmer toward the roofs (the city's glow), a few faint stars. Screen heights.
const A = e.aspect;
const sky = g.createLinearGradient(0, -0.35, 0, 0.6);
sky.addColorStop(0, '#121a33');
sky.addColorStop(0.55, '#24305a');
sky.addColorStop(0.85, '#43477a');
sky.addColorStop(1, '#6a5584');
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
for (let i = 0; i < 70; i++) {
  g.fillStyle = `rgba(230,232,255,${0.25 + e.rnd() * 0.5})`;
  g.beginPath();
  g.arc(-0.3 + e.rnd() * (A + 0.6), -0.3 + e.rnd() * 0.75, 0.0008 + e.rnd() * 0.0012, 0, Math.PI * 2);
  g.fill();
}
