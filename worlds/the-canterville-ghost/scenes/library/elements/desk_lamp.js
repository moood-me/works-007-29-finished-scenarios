// The oil lamp on Mr Otis's desk, from before (its foot on the desk top at x 0.2): a brass column, a glass font, a
// green glass shade and the chimney's flame above it (desk_lamp#flame, the light lamp). The shade lit is a layer of its
// own, shown as the lamp burns (animate, key lamp).
g.fillStyle = '#8c6a30';
g.fillRect(0.12, -0.03, 0.16, 0.03);
g.fillRect(0.185, -0.26, 0.03, 0.24);
g.fillStyle = '#a07c3c';
g.beginPath();
g.ellipse(0.2, -0.3, 0.07, 0.05, 0, 0, Math.PI * 2);
g.fill();
// the shade, unlit
g.fillStyle = '#1f3a2a';
g.beginPath();
g.moveTo(0.05, -0.36);
g.lineTo(0.35, -0.36);
g.lineTo(0.27, -0.46);
g.lineTo(0.13, -0.46);
g.closePath();
g.fill();
g.fillStyle = '#d8d4c8';
g.fillRect(0.18, -0.6, 0.04, 0.14);
e.layer('lit', {}, l => {
  l.fillStyle = '#5fa36e';
  l.beginPath();
  l.moveTo(0.05, -0.36);
  l.lineTo(0.35, -0.36);
  l.lineTo(0.27, -0.46);
  l.lineTo(0.13, -0.46);
  l.closePath();
  l.fill();
  l.fillStyle = '#fff1c8';
  l.fillRect(0.185, -0.58, 0.03, 0.11);
});
e.light(0.2, -0.5, 0.35, '#ffd08a', 0.9, 'flame');
