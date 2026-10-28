// Niggle's thistles by the shed door: tall grey-green stalks gone to seed, prickly leaves, purple heads gone to down
// (x across from the clump's foot, 1.3 high); they sway in the wind.
e.layer('stalks', { pivot: [0, 0], wind: { strength: 0.35, gust: 0.5 } }, l => {
  for (let i = 0; i < 6; i++) {
    const x = -0.35 + e.rnd() * 0.7;
    const h = 0.8 + e.rnd() * 0.55;
    const lean = (e.rnd() - 0.5) * 0.3;
    l.strokeStyle = '#7c8a6c';
    l.lineWidth = 0.018;
    l.beginPath();
    l.moveTo(x, 0);
    l.quadraticCurveTo(x + lean * 0.4, -h * 0.5, x + lean, -h);
    l.stroke();
    for (let k = 0; k < 3; k++) {
      const t = 0.2 + k * 0.22;
      const px = x + lean * t;
      const py = -h * t;
      l.fillStyle = '#8a9878';
      l.beginPath();
      l.moveTo(px, py);
      l.lineTo(px + 0.16 * (k % 2 ? 1 : -1), py - 0.05);
      l.lineTo(px + 0.08 * (k % 2 ? 1 : -1), py - 0.02);
      l.lineTo(px + 0.12 * (k % 2 ? 1 : -1), py - 0.1);
      l.closePath();
      l.fill();
    }
    l.fillStyle = '#7d6a80';
    l.beginPath();
    l.ellipse(x + lean, -h, 0.035, 0.045, 0, 0, Math.PI * 2);
    l.fill();
    l.fillStyle = 'rgba(236,230,220,0.85)';
    l.beginPath();
    l.arc(x + lean, -h - 0.05, 0.045, 0, Math.PI * 2);
    l.fill();
  }
});
