// The avenue's gravel walk from above (3 m wide, 44 m back), its edges thick with yellow leaves.
g.fillStyle = '#b8a07a';
g.fillRect(-1.5, -22, 3, 44);
for (let i = 0; i < 400; i++) {
  const side = e.rnd() < 0.5 ? -1 : 1;
  g.fillStyle = ['#c89a36', '#d8aa44', '#a87428'][Math.floor(e.rnd() * 3)];
  g.beginPath();
  g.ellipse(side * (1.5 - e.rnd() * e.rnd() * 1.2), -22 + e.rnd() * 44, 0.08, 0.05, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
