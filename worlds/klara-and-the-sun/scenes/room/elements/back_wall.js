// The west wall, from its foot (metres, across from the room's middle): warm white plaster with the big window cut
// through it (x −1.2…1.2, sill 0.6, head 2.25 — the window element paints its frame), a pale skirting board.
const hole = c => c.rect(-1.2, -2.25, 2.4, 1.65);
g.save();
g.beginPath();
g.rect(-2.42, -2.62, 4.84, 2.64);
hole(g);
g.clip('evenodd');
g.fillStyle = '#f4e9d8';
g.fillRect(-2.42, -2.62, 4.84, 2.64);
g.fillStyle = '#ddd3c4';
g.fillRect(-2.42, -0.12, 4.84, 0.14);
g.restore();
