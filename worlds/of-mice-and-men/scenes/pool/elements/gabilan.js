// The Gabilan mountains, four kilometres off across the valley: a long ridge of tawny grass, dark with chaparral in its
// folds — painted in day colours; the low sun behind the viewer lays the evening gold on them, the haze the distance
const A = e.anim;
const ridge = x => 600 + 260 * Math.sin(x / 1300 + 0.4) + 160 * Math.sin(x / 560 + 1.3) + 60 * Math.sin(x / 210 + 2.1);
const body = new Path2D();
body.moveTo(-9000, 20);
for (let x = -9000; x <= 9000; x += 60) body.lineTo(x, -ridge(x));
body.lineTo(9000, 20);
body.closePath();
g.fillStyle = '#b58260';
g.fill(body);
// the folds: ravines running down from near the ridge, chaparral dark in them
g.save();
g.clip(body);
g.fillStyle = '#6d6047';
for (let i = 0; i < 70; i++) {
  const x = -8800 + i * 255 + A.hash(i, 3) * 120, top = -ridge(x) * (0.7 + 0.2 * A.hash(i, 4)), w = 50 + 90 * A.hash(i, 5);
  g.beginPath();
  g.moveTo(x, top);
  g.quadraticCurveTo(x + w * 0.5, top * 0.5, x + w, 20);
  g.lineTo(x - w, 20);
  g.quadraticCurveTo(x - w * 0.5, top * 0.5, x, top);
  g.fill();
}
g.restore();
