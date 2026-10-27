// The long grass at the near edge of the view (2.4 m off, along the whole width): tufts of seed heads and blades in
// clumps, swaying in the night air (layers in the wind).
for (let c = 0; c < 14; c++) {
  const cx = -4.6 + 9.2 * (c + e.rnd() * 0.7) / 14;
  e.layer('tuft' + c, { pivot: [cx, 0], wind: { strength: 0.3, gust: 0.5 }, box: [cx - 0.5, -0.6, cx + 0.5, 0.05] }, g => {
    for (let k = 0; k < 16; k++) {
      const x = cx + (e.rnd() - 0.5) * 0.6, h = 0.16 + 0.34 * e.rnd(), lean = (e.rnd() - 0.5) * 0.18;
      g.strokeStyle = k % 3 ? '#6f8752' : '#97985f';
      g.lineWidth = 0.008;
      g.beginPath();
      g.moveTo(x, 0.02);
      g.quadraticCurveTo(x + lean * 0.4, -h * 0.5, x + lean, -h);
      g.stroke();
      if (k % 4 === 0) {
        g.fillStyle = '#a7a26a';
        g.beginPath();
        g.ellipse(x + lean, -h, 0.008, 0.03, lean * 2, 0, Math.PI * 2);
        g.fill();
      }
    }
  });
}
