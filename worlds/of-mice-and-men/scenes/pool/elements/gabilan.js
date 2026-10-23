// The Gabilan mountains, five kilometres off across the valley: a long ridge of tawny grass, dark with chaparral in its
// folds — painted in day colours; the low sun behind the viewer lays the evening gold on them, the haze the distance
const A = e.anim;
const ridge = x => 380 + 170 * Math.sin(x / 1300 + 0.4) + 110 * Math.sin(x / 560 + 1.3) + 45 * Math.sin(x / 210 + 2.1);
g.fillStyle = '#bf946a';
g.beginPath();
g.moveTo(-9000, 20);
for (let x = -9000; x <= 9000; x += 60) g.lineTo(x, -ridge(x));
g.lineTo(9000, 20);
g.closePath();
g.fill();
// the folds: ravines running down from the ridge, chaparral dark in them
g.fillStyle = '#7f7553';
for (let i = 0; i < 70; i++) {
  const x = -8800 + i * 255 + A.hash(i, 3) * 120, top = -ridge(x) * (0.75 + 0.2 * A.hash(i, 4)), w = 40 + 70 * A.hash(i, 5);
  g.beginPath();
  g.moveTo(x - w * 0.2, top);
  g.quadraticCurveTo(x + w * 0.6, top * 0.5, x + w, 20);
  g.lineTo(x - w, 20);
  g.quadraticCurveTo(x - w * 0.5, top * 0.5, x - w * 0.2, top);
  g.fill();
}
