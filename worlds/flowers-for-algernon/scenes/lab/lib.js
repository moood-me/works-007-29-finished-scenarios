// What the laboratory's walls share: the paint — a pale green-white gloss above a darker sage dado to waist height,
// a thin rail between them, a dark rubber skirting — over x0…x1 of a wall 3 m high (metres from the wall's foot, y
// up negative). The caller clips holes (a window) itself.
function wallPaint(g, e, x0, x1) {
  const w = x1 - x0;
  g.fillStyle = '#e3e7de';
  g.fillRect(x0, -3.02, w, 3.04);
  // the paint's few marks of use: paler and greyer patches, faint
  for (let i = 0; i < 7; i++) {
    g.fillStyle = e.rnd() < 0.5 ? 'rgba(170,178,168,0.12)' : 'rgba(250,252,246,0.3)';
    g.beginPath();
    g.ellipse(x0 + e.rnd() * w, -2.6 + e.rnd() * 1.6, 0.2 + e.rnd() * 0.5, 0.15 + e.rnd() * 0.3, 0, 0, Math.PI * 2);
    g.fill();
  }
  g.fillStyle = '#b7c3b2';
  g.fillRect(x0, -1.05, w, 1.05);
  g.fillStyle = '#9fae9b';
  g.fillRect(x0, -1.08, w, 0.035);
  g.fillStyle = '#d6dccf';
  g.fillRect(x0, -3.02, w, 0.08);
  g.fillStyle = '#3d4140';
  g.fillRect(x0, -0.1, w, 0.12);
}
return { wallPaint };
