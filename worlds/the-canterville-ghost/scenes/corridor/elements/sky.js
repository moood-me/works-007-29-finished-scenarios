// The night sky, seen only through the corridor's windows: a deep moonlit blue, paler low down and toward the moon on
// the left, a scatter of small stars. The evening's dusk (layer `dusk`) lies over it as `evening` says, a pale autumn
// morning (layer `day`) as `morning` says (its animate).
const sky = g.createLinearGradient(0, -0.35, 0, 1.25);
sky.addColorStop(0, '#0b1230');
sky.addColorStop(0.4, '#1a2a56');
sky.addColorStop(0.7, '#334c82');
sky.addColorStop(1, '#4a6294');
g.fillStyle = sky;
g.fillRect(-0.4, -0.4, e.aspect + 0.8, 1.7);
const moon = g.createRadialGradient(-0.1, 0.3, 0, -0.1, 0.3, 1.1);
moon.addColorStop(0, 'rgba(190,206,236,0.5)');
moon.addColorStop(1, 'rgba(190,206,236,0)');
g.fillStyle = moon;
g.fillRect(-0.4, -0.4, e.aspect + 0.8, 1.7);
g.fillStyle = '#dfe6f4';
for (let i = 0; i < 160; i++) {
  g.globalAlpha = 0.4 + e.rnd() * 0.6;
  g.beginPath();
  g.arc(-0.3 + e.rnd() * (e.aspect + 0.6), -0.35 + e.rnd() * 0.95, 0.0012 + e.rnd() * 0.0016, 0, Math.PI * 2);
  g.fill();
}
g.globalAlpha = 1;
e.layer('dusk', {}, l => {
  const d = l.createLinearGradient(0, -0.35, 0, 1.25);
  d.addColorStop(0, '#26284a');
  d.addColorStop(0.45, '#5a4c6e');
  d.addColorStop(0.75, '#b0786a');
  d.addColorStop(1, '#d89a6c');
  l.fillStyle = d;
  l.fillRect(-0.4, -0.4, e.aspect + 0.8, 1.7);
});
e.layer('day', {}, l => {
  const d = l.createLinearGradient(0, -0.35, 0, 1.25);
  d.addColorStop(0, '#9fb6cf');
  d.addColorStop(0.55, '#c9d5df');
  d.addColorStop(1, '#e8e2d2');
  l.fillStyle = d;
  l.fillRect(-0.4, -0.4, e.aspect + 0.8, 1.7);
});
