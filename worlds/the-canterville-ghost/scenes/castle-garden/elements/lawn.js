// The lawn from above (400 m across, 302 m back, from just behind the viewer far past the park wall): mown turf in broad
// stripes running away toward the gates — fresh green in summer, duller and strewn with fallen leaves in autumn (key
// `autumn`). The churchyard, the avenue and the path lie over it.
const fall = (e.state.autumn ?? 0) > 0.5;
g.fillStyle = fall ? '#6c7a46' : '#79a050';
g.fillRect(-200, -151, 400, 302);
g.fillStyle = fall ? '#76824a' : '#86ac5a';
for (let x = -40; x < 40; x += 3.2) g.fillRect(x, 89, 1.6, 62);
const tones = fall ? ['#62703e', '#7a8450', '#5c6a3a', '#a8862e', '#c09038', '#8c6a28'] : ['#6e9446', '#8ab060', '#729a4a', '#94b866', '#68903f'];
for (let i = 0; i < 2800; i++) {
  g.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
  g.beginPath();
  g.ellipse(-30 + e.rnd() * 60, 89 + e.rnd() * 62, 0.1 + e.rnd() * 0.3, 0.05 + e.rnd() * 0.12, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
// daisies in the summer grass
if (!fall) {
  g.fillStyle = '#f4f2e6';
  for (let i = 0; i < 600; i++) {
    g.beginPath();
    g.arc(-20 + e.rnd() * 40, 121 + e.rnd() * 30, 0.025, 0, Math.PI * 2);
    g.fill();
  }
}
