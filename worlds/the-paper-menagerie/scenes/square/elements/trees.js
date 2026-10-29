// A linden of the square in new leaf (metres from its foot): a straight grey-brown trunk in a round iron grate, and
// the crown light yellow-green, loose and see-through still — a layer stirring in the wind.
g.fillStyle = '#6a5b50';
g.beginPath();
g.moveTo(-0.2, 0);
g.lineTo(-0.13, -3.4);
g.lineTo(0.13, -3.4);
g.lineTo(0.2, 0);
g.closePath();
g.fill();
g.strokeStyle = '#6a5b50';
g.lineCap = 'round';
for (const [x2, y2, w] of [
  [-1.3, -5.2, 0.09],
  [1.1, -5.6, 0.09],
  [0.1, -6.4, 0.08],
]) {
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(0, -3.2);
  g.lineTo(x2, y2);
  g.stroke();
}
g.fillStyle = '#4c4a4a';
g.fillRect(-0.6, -0.05, 1.2, 0.05);
e.layer('crown', { pivot: [0, -3.4], wind: { strength: 0.16, gust: 0.4, scale: 4 } }, l => {
  const tones = ['#b6cd82', '#9dbb6c', '#c7d998', '#88a75f'];
  for (let k = 0; k < 120; k++) {
    const a = e.rnd() * Math.PI * 2,
      r = Math.sqrt(e.rnd());
    l.fillStyle = tones[k % 4];
    l.beginPath();
    l.ellipse(Math.cos(a) * r * 2.4, -5.2 + Math.sin(a) * r * 1.9, 0.3 + e.rnd() * 0.35, 0.22 + e.rnd() * 0.22, e.rnd() * 3, 0, Math.PI * 2);
    l.fill();
  }
});
