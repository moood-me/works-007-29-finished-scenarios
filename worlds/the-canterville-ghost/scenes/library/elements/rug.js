// A worn Turkey rug from above (3.4 m by 2.6 m): a madder-red field, an indigo border with a running pattern, a
// lozenge medallion in the middle, the fringe at its ends.
g.fillStyle = '#5e1e1a';
g.fillRect(-1.7, -1.3, 3.4, 2.6);
g.fillStyle = '#26304a';
g.fillRect(-1.7, -1.3, 3.4, 0.3);
g.fillRect(-1.7, 1.0, 3.4, 0.3);
g.fillRect(-1.7, -1.3, 0.3, 2.6);
g.fillRect(1.4, -1.3, 0.3, 2.6);
g.fillStyle = '#b08a4a';
for (let x = -1.55; x < 1.6; x += 0.2) {
  for (const y of [-1.15, 1.15]) {
    g.beginPath();
    g.moveTo(x, y - 0.07);
    g.lineTo(x + 0.06, y);
    g.lineTo(x, y + 0.07);
    g.lineTo(x - 0.06, y);
    g.closePath();
    g.fill();
  }
}
for (let y = -0.95; y < 1.0; y += 0.2) {
  for (const x of [-1.55, 1.55]) {
    g.beginPath();
    g.moveTo(x, y - 0.06);
    g.lineTo(x + 0.06, y);
    g.lineTo(x, y + 0.06);
    g.lineTo(x - 0.06, y);
    g.closePath();
    g.fill();
  }
}
// the medallion: a lozenge in a lozenge
g.fillStyle = '#26304a';
g.beginPath();
g.moveTo(0, -0.75);
g.lineTo(0.95, 0);
g.lineTo(0, 0.75);
g.lineTo(-0.95, 0);
g.closePath();
g.fill();
g.fillStyle = '#a4743c';
g.beginPath();
g.moveTo(0, -0.45);
g.lineTo(0.55, 0);
g.lineTo(0, 0.45);
g.lineTo(-0.55, 0);
g.closePath();
g.fill();
g.fillStyle = '#5e1e1a';
g.beginPath();
g.moveTo(0, -0.2);
g.lineTo(0.25, 0);
g.lineTo(0, 0.2);
g.lineTo(-0.25, 0);
g.closePath();
g.fill();
// worn patches where feet have gone
g.fillStyle = 'rgba(150,110,90,0.18)';
g.beginPath();
g.ellipse(0.3, 0.6, 0.6, 0.35, 0.2, 0, Math.PI * 2);
g.fill();
