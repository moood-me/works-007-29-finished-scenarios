// A street maple in new leaf on the verge: a grey trunk, a round crown of fresh green clumps (a layer in the wind).
g.fillStyle = '#6d6560';
g.beginPath();
g.moveTo(-0.16, 0);
g.lineTo(-0.1, -3.2);
g.lineTo(0.1, -3.2);
g.lineTo(0.18, 0);
g.closePath();
g.fill();
e.layer('crown', { pivot: [0, -3], wind: 0.25 }, l => {
  for (let i = 0; i < 26; i++) {
    const a = e.rnd() * Math.PI * 2,
      r = Math.sqrt(e.rnd()) * 2.1,
      x = Math.cos(a) * r,
      y = -4.9 + Math.sin(a) * r * 0.85;
    l.fillStyle = i % 3 ? '#8dbb62' : '#a9cf78';
    l.beginPath();
    l.ellipse(x, y, 0.7 + e.rnd() * 0.4, 0.55 + e.rnd() * 0.3, 0, 0, Math.PI * 2);
    l.fill();
  }
});
