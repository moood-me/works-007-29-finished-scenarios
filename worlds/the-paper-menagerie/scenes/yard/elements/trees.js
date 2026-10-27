// Behind the house (17 m off): the neighbours' tall trees in new leaf, a light yellow-green, their crowns rising over
// our roof, a dark trunk here and there — the crowns a layer stirring in the wind.
g.fillStyle = '#5a4a40';
for (const x of [-15, -8.5, -2, 5, 11.5, 18]) g.fillRect(x - 0.18, -3.6, 0.36, 3.6);
e.layer('crowns', { pivot: [0, -2], wind: { strength: 0.12, gust: 0.3, scale: 6 } }, l => {
  const tones = ['#a9c27a', '#93b06a', '#bcd08c', '#7f9c5e'];
  for (const [cx, cy, r] of [
    [-16, -6.2, 3.6],
    [-9, -7.4, 4.0],
    [-2.5, -6.6, 3.8],
    [4.5, -7.8, 4.2],
    [11, -6.8, 3.7],
    [17.5, -6.0, 3.4],
  ]) {
    for (let k = 0; k < 26; k++) {
      const a = e.rnd() * Math.PI * 2,
        d = Math.sqrt(e.rnd()) * r;
      l.fillStyle = tones[k % 4];
      l.beginPath();
      l.ellipse(cx + Math.cos(a) * d, cy + Math.sin(a) * d * 0.75, 0.9 + e.rnd() * 0.9, 0.7 + e.rnd() * 0.6, e.rnd() * 3, 0, Math.PI * 2);
      l.fill();
    }
  }
});
