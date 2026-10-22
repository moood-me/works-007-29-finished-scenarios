// The ground from the table to the far side of the valley (a plane from 2 m to 330 m ahead; y = 166 − distance): the
// garden's lawn, mown in long bands, with tufts near the eye, up to 60 m; past the garden's hedges the fields of the
// valley in strips — wheat, meadow, a darker field — out to the far hills.
g.fillStyle = '#7c9254';
g.fillRect(-450, -164, 900, 328);
for (let i = 0; i < 40; i++) {
  const x = -450 + i * 22.5 + e.rnd() * 6;
  g.fillStyle = i % 3 === 0 ? '#a9a865' : i % 3 === 1 ? '#86995a' : '#6e884c';
  g.beginPath();
  g.moveTo(x, -164);
  g.lineTo(x + 20, -164);
  g.lineTo(x + 26, 100);
  g.lineTo(x + 4, 100);
  g.closePath();
  g.fill();
}
// the garden
g.fillStyle = '#6c8a44';
g.fillRect(-45, 106, 90, 58);
for (let i = 0; i < 14; i++) {
  g.fillStyle = i % 2 ? '#718f48' : '#678540';
  g.fillRect(-45 + i * 6.5, 106, 3.2, 58);
}
// patches, clover and dry spots
for (let i = 0; i < 160; i++) {
  const x = (e.rnd() - 0.5) * 80;
  const y = 108 + e.rnd() * 54;
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
  const y = 154 + e.rnd() * 10;
  g.moveTo(x, y);
  g.lineTo(x + (e.rnd() - 0.5) * 0.12, y - 0.06 - e.rnd() * 0.06);
}
g.stroke();
