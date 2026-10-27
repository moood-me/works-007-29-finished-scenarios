// The grass at the near edge of the view (1.85 m off, its foot at the frame's bottom edge, along the whole width): low dense tufts of blades and a few seed
// heads, swaying in the night air (layers in the wind).
for (let c = 0; c < 18; c++) {
  const cx = -4.6 + 9.2 * (c + e.rnd() * 0.7) / 18;
  e.layer('tuft' + c, { pivot: [cx, 0], wind: { strength: 0.3, gust: 0.5 }, box: [cx - 0.45, -0.4, cx + 0.45, 0.05] }, g => {
    for (let k = 0; k < 40; k++) {
      const x = cx + (e.rnd() - 0.5) * 0.7, h = 0.07 + 0.2 * e.rnd() * e.rnd() + (k % 9 === 0 ? 0.12 : 0), lean = (e.rnd() - 0.5) * 0.14;
      g.strokeStyle = k % 3 ? '#6f8752' : (k % 2 ? '#5b7446' : '#97985f');
      g.lineWidth = 0.009;
      g.beginPath();
      g.moveTo(x, 0.02);
      g.quadraticCurveTo(x + lean * 0.3, -h * 0.5, x + lean, -h);
      g.stroke();
      if (k % 9 === 0) {
        g.fillStyle = '#a7a26a';
        g.beginPath();
        g.ellipse(x + lean, -h, 0.008, 0.028, lean * 2, 0, Math.PI * 2);
        g.fill();
      }
    }
  });
}
