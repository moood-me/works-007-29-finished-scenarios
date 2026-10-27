// An old headstone with a round top: grey stone gone green-gold with lichen, its lettering worn nearly away; the edge
// of its thickness lighter on the right (metres: x across from its middle, y up from the ground).
const path = () => {
  g.beginPath();
  g.moveTo(-0.32, 0.15);
  g.lineTo(-0.32, -0.72);
  g.quadraticCurveTo(-0.32, -0.98, 0, -0.98);
  g.quadraticCurveTo(0.32, -0.98, 0.32, -0.72);
  g.lineTo(0.32, 0.15);
  g.closePath();
};
g.fillStyle = '#c2bcaa';
g.save();
g.translate(0.035, 0);
path();
g.fill();
g.restore();
g.fillStyle = '#9d988a';
path();
g.fill();
e.lib.weathered(g, e.rnd, path, 0.64, 0.98);
