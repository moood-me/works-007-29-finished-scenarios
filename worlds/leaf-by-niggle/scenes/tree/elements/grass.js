// A clump of long meadow grass near the viewer (3.2 m along, 0.6 high, about its foot): blades and seed heads in
// greens and straw, a few white and blue flowers among them; it bends in the wind.
e.layer('blades', { pivot: [0, 0], wind: { strength: 0.3, gust: 0.6 } }, l => {
  const tones = ['#7c9654', '#8ca460', '#6e8a4c', '#a8ae72'];
  for (let i = 0; i < 70; i++) {
    const x = -1.5 + e.rnd() * 3;
    const h = 0.2 + e.rnd() * 0.42;
    const lean = (e.rnd() - 0.5) * 0.22;
    l.strokeStyle = tones[Math.floor(e.rnd() * tones.length)];
    l.lineWidth = 0.012;
    l.beginPath();
    l.moveTo(x, 0);
    l.quadraticCurveTo(x + lean * 0.3, -h * 0.6, x + lean, -h);
    l.stroke();
    if (e.rnd() < 0.18) {
      l.fillStyle = e.rnd() < 0.6 ? '#f2efe4' : '#c2cfe6';
      l.beginPath();
      l.arc(x + lean, -h, 0.018, 0, Math.PI * 2);
      l.fill();
    } else if (e.rnd() < 0.25) {
      l.fillStyle = '#b9b07a';
      l.beginPath();
      l.ellipse(x + lean, -h - 0.02, 0.01, 0.03, lean, 0, Math.PI * 2);
      l.fill();
    }
  }
});
