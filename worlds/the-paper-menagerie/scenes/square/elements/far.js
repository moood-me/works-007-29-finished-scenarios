// Far beyond the town hall (80 m): the little town's other roofs and the tops of its trees, low and soft in the
// afternoon haze — tiled roofs in faded reds and greys, rounded crowns between them, a church spire far to the left.
for (let i = 0; i < 70; i++) {
  const x = -160 + i * 4.6 + e.rnd() * 2,
    w = 3 + e.rnd() * 3,
    h = 5 + e.rnd() * 5;
  if (i % 3 === 1) {
    g.fillStyle = i % 2 ? '#a9b8a2' : '#98ad97';
    g.beginPath();
    g.ellipse(x, -h * 0.75, w * 0.9, h * 0.6, 0, 0, Math.PI * 2);
    g.fill();
  } else {
    g.fillStyle = ['#d7cbb8', '#cfc4b8', '#ddd2c0'][i % 3];
    g.fillRect(x - w / 2, -h, w, h);
    g.fillStyle = i % 2 ? '#b98e7c' : '#9d9aa2';
    g.beginPath();
    g.moveTo(x - w / 2 - 0.3, -h);
    g.lineTo(x, -h - w * 0.4);
    g.lineTo(x + w / 2 + 0.3, -h);
    g.closePath();
    g.fill();
  }
}
// the spire
g.fillStyle = '#c9c1b4';
g.fillRect(-58, -16, 3, 16);
g.fillStyle = '#8f9a94';
g.beginPath();
g.moveTo(-58.4, -16);
g.lineTo(-56.5, -24);
g.lineTo(-54.6, -16);
g.closePath();
g.fill();
g.fillStyle = '#d3cabb';
g.fillRect(-160, -3, 320, 3.05);
