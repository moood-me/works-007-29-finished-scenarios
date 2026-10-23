// The west wall, from its foot (metres, across from the room's middle): warm white plaster with the big window cut
// through it (x −1.2…1.2, sill 0.6, head 2.25 — the window element paints its frame), a pale skirting board.
const hole = c => c.rect(-1.2, -2.25, 2.4, 1.65);
g.save();
g.beginPath();
g.rect(-2.42, -2.62, 4.84, 2.64);
hole(g);
g.clip('evenodd');
g.fillStyle = '#f1ebe1';
g.fillRect(-2.42, -2.62, 4.84, 2.64);
for (let i = 0; i < 10; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(210,198,182,0.25)' : 'rgba(246,240,230,0.3)';
  g.beginPath();
  g.ellipse(-2.2 + e.rnd() * 4.4, -2.3 + e.rnd() * 2.1, 0.3 + e.rnd() * 0.5, 0.2 + e.rnd() * 0.4, 0, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#ddd3c4';
g.fillRect(-2.42, -0.12, 4.84, 0.14);
g.restore();
