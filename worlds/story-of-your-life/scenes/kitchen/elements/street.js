// The ground beyond the window, seen from above (metres, y toward the viewer; the plane's centre 15 m off — a
// distance d is y = 15 − d): the house's front yard, the pavement, the road with its worn centre line, the far
// pavement and the lawns before the houses across.
const band = (d0, d1, color) => {
  g.fillStyle = color;
  g.fillRect(-20, 15 - d1, 40, d1 - d0);
};
band(5, 7.6, '#8c9f62');
band(7.6, 8.8, '#bdb6a8');
band(8.8, 15.5, '#77756f');
band(15.5, 16.8, '#bdb6a8');
band(16.8, 25, '#8fa266');
g.fillStyle = 'rgba(0,0,0,0.12)';
g.fillRect(-20, 15 - 8.85, 40, 0.06);
g.fillRect(-20, 15 - 15.5, 40, 0.06);
g.fillStyle = 'rgba(214,190,120,0.7)';
for (let x = -20; x < 20; x += 3) g.fillRect(x, 15 - 12.2, 1.6, 0.12);
for (let i = 0; i < 60; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(96,94,88,0.35)' : 'rgba(140,138,130,0.3)';
  g.beginPath();
  g.ellipse(-20 + e.rnd() * 40, 15 - (9 + e.rnd() * 6.4), 0.3 + e.rnd() * 1.2, 0.1 + e.rnd() * 0.3, 0, 0, Math.PI * 2);
  g.fill();
}
g.strokeStyle = 'rgba(150,142,128,0.6)';
g.lineWidth = 0.02;
for (let x = -20; x < 20; x += 1.2) {
  g.beginPath();
  g.moveTo(x, 15 - 7.6);
  g.lineTo(x, 15 - 8.8);
  g.moveTo(x, 15 - 15.5);
  g.lineTo(x, 15 - 16.8);
  g.stroke();
}
