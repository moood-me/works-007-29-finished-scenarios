// The Gabilan mountains, four kilometres off across the valley: a long ridge of tawny grass, dark with chaparral in
// patches — painted in day colours; the low sun behind the viewer lays the evening gold on them, the haze the distance
const A = e.anim;
const ridge = x => 600 + 260 * Math.sin(x / 1300 + 0.4) + 160 * Math.sin(x / 560 + 1.3) + 60 * Math.sin(x / 210 + 2.1);
const body = new Path2D();
body.moveTo(-9000, 20);
for (let x = -9000; x <= 9000; x += 60) body.lineTo(x, -ridge(x));
body.lineTo(9000, 20);
body.closePath();
g.fillStyle = '#b58260';
g.fill(body);
// the chaparral: dark patches down the slopes, thicker in the folds
g.save();
g.clip(body);
g.fillStyle = '#7a6a4c';
for (let i = 0; i < 260; i++) {
  const x = -8900 + A.hash(i, 3) * 17800, top = -ridge(x), y = top * (0.15 + 0.7 * A.hash(i, 4)), w = 60 + 160 * A.hash(i, 5);
  g.beginPath();
  g.ellipse(x, y, w, w * (0.25 + 0.3 * A.hash(i, 6)), (A.hash(i, 7) - 0.5) * 0.6, 0, Math.PI * 2);
  g.fill();
}
g.restore();
