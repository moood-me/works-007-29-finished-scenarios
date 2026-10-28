// An old headstone with shoulders and a raised middle, the way they were cut a hundred years before: darker stone,
// lichen, its lettering worn; the edge of its thickness lighter on the right (metres: x across, y up).
const path = () => {
  g.beginPath();
  g.moveTo(-0.38, 0.15);
  g.lineTo(-0.38, -0.86);
  g.quadraticCurveTo(-0.3, -0.84, -0.24, -0.94);
  g.quadraticCurveTo(-0.2, -1.1, 0, -1.12);
  g.quadraticCurveTo(0.2, -1.1, 0.24, -0.94);
  g.quadraticCurveTo(0.3, -0.84, 0.38, -0.86);
  g.lineTo(0.38, 0.15);
  g.closePath();
};
g.fillStyle = '#aaa494';
g.save();
g.translate(0.04, 0);
path();
g.fill();
g.restore();
g.fillStyle = '#7f7a70';
path();
g.fill();
e.lib.weathered(g, e.rnd, path, 0.76, 1.12);
