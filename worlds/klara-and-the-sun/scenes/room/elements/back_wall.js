// The west wall, from its foot (metres, across from the room's middle): warm white plaster with the big window cut
// through it (x −1.44…1.24, sill 0.6, head 2.3 — the window element paints its frame), a pale skirting board.
const hole = c => c.rect(-1.44, -2.3, 2.68, 1.7);
g.save();
g.beginPath();
g.rect(-2.62, -2.72, 5.24, 2.74);
hole(g);
g.clip('evenodd');
g.fillStyle = '#e8e0d3';
g.fillRect(-2.62, -2.72, 5.24, 2.74);
for (let i = 0; i < 10; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(210,198,182,0.25)' : 'rgba(246,240,230,0.3)';
  g.beginPath();
  g.ellipse(-2.4 + e.rnd() * 4.8, -2.4 + e.rnd() * 2.2, 0.3 + e.rnd() * 0.5, 0.2 + e.rnd() * 0.4, 0, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#ddd3c4';
g.fillRect(-2.62, -0.12, 5.24, 0.14);
g.restore();
