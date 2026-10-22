// The living room's back wall, from its foot (metres, across from the room's middle): the old wallpaper with two
// openings cut through it — the window onto the fire escape (x −2.05…−0.95, sill 0.75, head 2.25) and the arch into
// the dining room (x 1.05…2.45, 2.3 high at its crown) — each in a plain painted casing.
const W0 = -3.15;
const W1 = 3.15;
const holes = c => {
  c.rect(-2.05, -2.25, 1.1, 1.5);
  c.moveTo(1.05, 0.02);
  c.lineTo(1.05, -2.0);
  c.quadraticCurveTo(1.05, -2.3, 1.75, -2.3);
  c.quadraticCurveTo(2.45, -2.3, 2.45, -2.0);
  c.lineTo(2.45, 0.02);
  c.closePath();
};
g.save();
g.beginPath();
g.rect(W0, -2.82, W1 - W0, 2.84);
holes(g);
g.clip('evenodd');
e.lib.wallpaper(g, e, W0, W1, false);
// the casings: cream-painted boards round each opening, a darker edge where they meet the paper
g.lineJoin = 'round';
g.strokeStyle = '#8a6c58';
g.lineWidth = 0.17;
g.beginPath();
holes(g);
g.stroke();
g.strokeStyle = '#d9cbb4';
g.lineWidth = 0.13;
g.beginPath();
holes(g);
g.stroke();
g.restore();
// the window's sill board, a little proud of the casing
g.fillStyle = '#cdbca2';
g.fillRect(-2.17, -0.78, 1.34, 0.05);
g.fillStyle = '#9c8268';
g.fillRect(-2.17, -0.735, 1.34, 0.015);
