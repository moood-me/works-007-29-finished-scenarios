// The garden's ground from above (80 m across, 60 m back, from the viewer's feet): long grass grown thick, dark green
// and sage with straw among it — the tall tufts and the hemlock stand on it.
g.fillStyle = '#3a4a34';
g.fillRect(-40, -30, 80, 60);
const tones = ['#44563a', '#33422e', '#4e5a3c', '#5a6040', '#2e3a2a', '#66684a'];
for (let i = 0; i < 2600; i++) {
  g.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
  g.beginPath();
  g.ellipse(-40 + e.rnd() * 80, -30 + e.rnd() * 60, 0.2 + e.rnd() * 0.7, 0.1 + e.rnd() * 0.3, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
