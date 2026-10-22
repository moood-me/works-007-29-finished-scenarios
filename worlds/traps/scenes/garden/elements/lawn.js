// The lawn of the garden from the table up to the villa and the hedge: summer grass, mown, with the marks of the
// mowing in long bands and tufts near the eye.
g.fillStyle = '#6c8a44';
g.fillRect(-45, -28, 90, 56);
for (let i = 0; i < 14; i++) {
  g.fillStyle = i % 2 ? '#718f48' : '#678540';
  g.fillRect(-45 + i * 6.5, -28, 3.2, 56);
}
// patches, clover and dry spots
for (let i = 0; i < 160; i++) {
  const x = (e.rnd() - 0.5) * 80;
  const y = -26 + e.rnd() * 52;
  g.fillStyle = e.rnd() < 0.5 ? '#7c9a50' : '#5f7c3b';
  g.beginPath();
  g.ellipse(x, y, 0.6 + e.rnd() * 1.6, 0.4 + e.rnd() * 1.0, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
// tufts of grass near the table
g.strokeStyle = '#557434';
g.lineWidth = 0.02;
g.beginPath();
for (let i = 0; i < 900; i++) {
  const x = (e.rnd() - 0.5) * 16;
  const y = 18 + e.rnd() * 10;
  g.moveTo(x, y);
  g.lineTo(x + (e.rnd() - 0.5) * 0.12, y - 0.06 - e.rnd() * 0.06);
}
g.stroke();
