// Reeds and rushes along the near edge of the pond, swaying in the breeze (metres, 18.6 m off), in a few clumps.
for (let c = 0; c < 6; c++) {
  const cx = -5 + 10 * (c + e.rnd() * 0.6) / 6;
  e.layer('clump' + c, { pivot: [cx, 0], wind: { strength: 0.35, gust: 0.4 }, box: [cx - 0.8, -1.4, cx + 0.8, 0.05] }, g => {
    for (let k = 0; k < 14; k++) {
      const x = cx + (e.rnd() - 0.5) * 1.2, h = 0.6 + 0.7 * e.rnd(), lean = (e.rnd() - 0.5) * 0.25;
      g.strokeStyle = k % 3 ? '#7f8f55' : '#a39a5c';
      g.lineWidth = 0.035;
      g.beginPath();
      g.moveTo(x, 0.02);
      g.quadraticCurveTo(x + lean * 0.4, -h * 0.5, x + lean, -h);
      g.stroke();
      if (k % 5 === 0) {
        g.fillStyle = '#6b4a2e';
        g.beginPath();
        g.ellipse(x + lean * 0.9, -h + 0.08, 0.025, 0.09, lean, 0, Math.PI * 2);
        g.fill();
      }
    }
  });
}
