// The jackdaws round the top of the old tower: small black birds, each a layer its animate wheels round and flaps
// (metres: x across from the tower's middle, y up from the parapet's top).
const birds = e.lib.JACKDAWS;
birds.forEach(([x, y], k) => {
  e.layer(`b${k}`, { pivot: [x, y] }, c => {
    c.fillStyle = '#1e1c1e';
    c.beginPath();
    c.moveTo(x - 0.32, y - 0.06);
    c.quadraticCurveTo(x - 0.15, y - 0.12, x, y + 0.02);
    c.quadraticCurveTo(x + 0.15, y - 0.12, x + 0.32, y - 0.06);
    c.quadraticCurveTo(x + 0.15, y - 0.02, x, y + 0.07);
    c.quadraticCurveTo(x - 0.15, y - 0.02, x - 0.32, y - 0.06);
    c.fill();
  });
});
