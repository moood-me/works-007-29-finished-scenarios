// The garden's ground from above (80 m across, 60 m back, from the viewer's feet): long grass grown thick, dark green
// and sage with straw among it — the tall tufts and the hemlock stand on it.
g.fillStyle = '#3a4a34';
g.fillRect(-40, -30, 80, 60);
const tones = ['#40523a', '#36462f', '#46563a', '#4c583c', '#34402e', '#525a40'];
for (let i = 0; i < 6000; i++) {
  g.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
  g.beginPath();
  g.ellipse(-40 + e.rnd() * 80, -30 + e.rnd() * 60, 0.12 + e.rnd() * 0.3, 0.04 + e.rnd() * 0.08, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
