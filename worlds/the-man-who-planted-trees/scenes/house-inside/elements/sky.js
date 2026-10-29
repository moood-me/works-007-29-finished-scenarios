// The sky seen through the window and the door: dusk — deep violet overhead to rose and apricot low down, a few stars;
// night — deep blue, many stars, the moon (a layer its animate keeps where the moon stands in the world: low over the
// empty slope across the stream, seen through the window from the table; its point `moon`)
const A = e.aspect, night = e.state.time === 'night';
const STOPS = night
  ? [[0, '#0e1430'], [0.25, '#16204a'], [0.45, '#22305e'], [0.56, '#34406c'], [0.64, '#4a5274'], [1, '#454c66']]
  : [[0, '#28264a'], [0.2, '#3b3560'], [0.42, '#6e5479'], [0.52, '#b77d86'], [0.6, '#e9a684'], [0.66, '#f6c896'], [1, '#f1c39a']];
const sky = g.createLinearGradient(0, -0.35, 0, 1.25);
for (const [at, c] of STOPS) sky.addColorStop(at, c);
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
const stars = night ? 160 : 30;
e.layer('stars', {}, (g) => {
  for (let i = 0; i < stars; i++) {
    const x = -0.3 + e.rnd() * (A + 0.6), y = -0.33 + Math.pow(e.rnd(), 1.5) * (night ? 0.85 : 0.35), r = 0.0012 + e.rnd() * 0.0016;
    g.fillStyle = `rgba(255, 246, 228, ${0.35 + e.rnd() * 0.45})`;
    g.beginPath();
    g.arc(x, y, r, 0, Math.PI * 2);
    g.fill();
  }
});
// the moon, painted round its own middle; moved to where it stands (animate)
e.layer('moon', { box: [-0.12, -0.12, 0.12, 0.12] }, (g) => {
  const halo = g.createRadialGradient(0, 0, 0, 0, 0, 0.11);
  halo.addColorStop(0, 'rgba(220, 228, 255, 0.4)');
  halo.addColorStop(1, 'rgba(200, 210, 255, 0)');
  g.fillStyle = halo;
  g.fillRect(-0.12, -0.12, 0.24, 0.24);
  g.fillStyle = '#f2f0e2';
  g.beginPath();
  g.arc(0, 0, 0.022, 0, Math.PI * 2);
  g.fill();
  e.light(0, 0, 0.06, '#e8ecff', 0.7, 'disc');
  e.at(0, 0, 'moon');
});
