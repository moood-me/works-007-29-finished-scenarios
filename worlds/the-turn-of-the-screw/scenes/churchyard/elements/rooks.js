// The rooks over the elms: black birds, each a layer its animate wheels round and flaps (metres: x across from the
// flock's middle, y up from it).
e.lib.ROOKS.forEach(([x, y], k) => {
  e.layer(`r${k}`, { pivot: [x, y] }, c => {
    c.fillStyle = '#1c1a1c';
    c.beginPath();
    c.moveTo(x - 0.45, y - 0.08);
    c.quadraticCurveTo(x - 0.2, y - 0.16, x, y + 0.03);
    c.quadraticCurveTo(x + 0.2, y - 0.16, x + 0.45, y - 0.08);
    c.quadraticCurveTo(x + 0.2, y - 0.03, x, y + 0.1);
    c.quadraticCurveTo(x - 0.2, y - 0.03, x - 0.45, y - 0.08);
    c.fill();
  });
});
