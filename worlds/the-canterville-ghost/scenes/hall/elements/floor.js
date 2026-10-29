// The hall's floor from above (11.2 m by 8 m, y toward the viewer; the far wall at y −4): great old flagstones, worn,
// in warm greys; a long Turkey rug from the front door into the hall.
g.fillStyle = '#4e4840';
g.fillRect(-5.62, -4.0, 11.24, 8.0);
const tones = ['#8a8274', '#7e766a', '#938a7a', '#857c6e', '#7a7266'];
const S = 0.8;
for (let y = -4.0; y < 4.0; y += S) {
  const off = Math.round((y + 4) / S) % 2 ? S / 2 : 0;
  for (let x = -5.62 - off; x < 5.62; x += S) {
    g.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
    g.fillRect(x + 0.012, y + 0.012, S - 0.024, S - 0.024);
  }
}
// the rug: crimson, a dark blue border, a row of lozenges down its middle
const x0 = 1.95;
const x1 = 3.85;
const y0 = -3.85;
const y1 = 0.6;
g.fillStyle = '#25304a';
g.fillRect(x0, y0, x1 - x0, y1 - y0);
g.fillStyle = '#8e2a2a';
g.fillRect(x0 + 0.16, y0 + 0.16, x1 - x0 - 0.32, y1 - y0 - 0.32);
g.fillStyle = '#d8b25a';
for (let y = y0 + 0.08; y < y1 - 0.04; y += 0.16) {
  g.fillRect(x0 + 0.06, y, 0.04, 0.04);
  g.fillRect(x1 - 0.1, y, 0.04, 0.04);
}
const cx = (x0 + x1) / 2;
for (let y = y0 + 0.55; y < y1 - 0.3; y += 0.85) {
  g.fillStyle = '#25304a';
  g.beginPath();
  g.moveTo(cx, y - 0.3);
  g.lineTo(cx + 0.45, y);
  g.lineTo(cx, y + 0.3);
  g.lineTo(cx - 0.45, y);
  g.closePath();
  g.fill();
  g.fillStyle = '#d8b25a';
  g.beginPath();
  g.moveTo(cx, y - 0.14);
  g.lineTo(cx + 0.2, y);
  g.lineTo(cx, y + 0.14);
  g.lineTo(cx - 0.2, y);
  g.closePath();
  g.fill();
}
