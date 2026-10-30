// The windsock on its pole: a white-and-faded-orange cone hanging out to the left on the night wind; the sock is a
// layer swaying about its ring (`wind`).
g.fillStyle = '#7d8187';
g.fillRect(-0.05, -6.6, 0.1, 6.6);
e.layer('sock', { pivot: [0, -6.4], wind: { strength: 0.5, gust: 0.6, scale: 1 } }, c => {
  const bands = 5;
  for (let i = 0; i < bands; i++) {
    const x0 = -0.1 - (2.8 * i) / bands;
    const x1 = -0.1 - (2.8 * (i + 1)) / bands;
    const h0 = 0.34 - (0.18 * i) / bands;
    const h1 = 0.34 - (0.18 * (i + 1)) / bands;
    const sag0 = 0.22 * (i / bands) ** 2;
    const sag1 = 0.22 * ((i + 1) / bands) ** 2;
    c.fillStyle = i % 2 ? '#e8e4dc' : '#c9774a';
    c.beginPath();
    c.moveTo(x0, -6.4 - h0 + sag0);
    c.lineTo(x1, -6.4 - h1 + sag1);
    c.lineTo(x1, -6.4 + h1 + sag1);
    c.lineTo(x0, -6.4 + h0 + sag0);
    c.closePath();
    c.fill();
  }
  c.strokeStyle = '#6b6f75';
  c.lineWidth = 0.04;
  c.beginPath();
  c.ellipse(-0.1, -6.4, 0.06, 0.34, 0, 0, Math.PI * 2);
  c.stroke();
});
