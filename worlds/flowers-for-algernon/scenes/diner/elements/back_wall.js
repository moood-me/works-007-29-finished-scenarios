// The diner's back wall — its front onto the street, seen from inside (metres from its foot, across from the room's
// middle): the green tiles and the cream paint, the big window cut through it (x −2.2…−0.4, sill 0.9, head 2.6) in
// a plain steel casing, a cast-iron radiator under it.
g.save();
g.beginPath();
g.rect(-3.2, -3.02, 6.4, 3.04);
g.rect(-2.2, -2.6, 1.8, 1.7);
g.clip('evenodd');
e.lib.wallPaint(g, -3.2, 3.2);
g.strokeStyle = '#8f938f';
g.lineWidth = 0.06;
g.strokeRect(-2.23, -2.63, 1.86, 1.76);
g.restore();
// the radiator
g.fillStyle = '#d9cfb8';
g.fillRect(-1.95, -0.72, 1.3, 0.56);
g.fillStyle = '#b9ae98';
for (let x = -1.92; x < -0.68; x += 0.08) g.fillRect(x, -0.7, 0.02, 0.52);
g.fillStyle = '#a99e88';
g.fillRect(-1.95, -0.18, 1.3, 0.03);
