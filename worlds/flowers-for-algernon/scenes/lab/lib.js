// What the laboratory's walls share: the paint — a pale green-white gloss above a darker sage dado to waist height,
// a thin rail between them, a dark rubber skirting — over x0…x1 of a wall 3 m high (metres from the wall's foot, y
// up negative). The caller clips holes (a window) itself.
function wallPaint(g, x0, x1) {
  const w = x1 - x0;
  g.save();
  g.beginPath();
  g.rect(x0, -3.02, w, 3.04);
  g.clip();
  g.fillStyle = '#eef0ea';
  g.fillRect(x0, -3.02, w, 3.04);
  g.fillStyle = '#c3cfbf';
  g.fillRect(x0, -1.05, w, 1.05);
  g.fillStyle = '#a9b8a5';
  g.fillRect(x0, -1.08, w, 0.035);
  g.fillStyle = '#e2e6dc';
  g.fillRect(x0, -3.02, w, 0.08);
  g.fillStyle = '#3d4140';
  g.fillRect(x0, -0.1, w, 0.12);
  g.restore();
}
return { wallPaint };
