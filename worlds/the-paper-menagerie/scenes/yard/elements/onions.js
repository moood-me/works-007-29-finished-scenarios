// A row of spring onions: tufts of hollow green leaves, upright and bending, each tuft a little different — the leaves
// a layer that stirs in the wind.
e.layer('leaves', { pivot: [0, 0], wind: { strength: 0.2, gust: 0.5, scale: 1 } }, l => {
  l.lineCap = 'round';
  for (let x = -0.85; x <= 0.86; x += 0.17) {
    const n = 4 + Math.floor(e.rnd() * 3);
    for (let k = 0; k < n; k++) {
      const a = (e.rnd() - 0.5) * 0.7,
        h = 0.26 + e.rnd() * 0.14;
      l.strokeStyle = k % 2 ? '#6f9a52' : '#86ad62';
      l.lineWidth = 0.014;
      l.beginPath();
      l.moveTo(x, 0);
      l.quadraticCurveTo(x + Math.sin(a) * h * 0.4, -h * 0.6, x + Math.sin(a) * h, -h);
      l.stroke();
    }
    l.fillStyle = '#e8e2cc';
    l.beginPath();
    l.ellipse(x, -0.01, 0.022, 0.016, 0, 0, Math.PI * 2);
    l.fill();
  }
});
