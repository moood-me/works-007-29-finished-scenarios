// The lawn outside, from above (60 m across, 44 m back): autumn grass, dull green and straw, strewn with fallen leaves.
g.fillStyle = '#5f6a3a';
g.fillRect(-30, -22, 60, 44);
for (let i = 0; i < 900; i++) {
  g.fillStyle = ['#6e7542', '#545f34', '#7a7a44', '#a8862e', '#c09038', '#8c6a28'][Math.floor(e.rnd() * 6)];
  g.beginPath();
  g.ellipse(-30 + e.rnd() * 60, -22 + e.rnd() * 44, 0.15 + e.rnd() * 0.5, 0.08 + e.rnd() * 0.2, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
