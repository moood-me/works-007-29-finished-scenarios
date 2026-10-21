// The four candle flames on the music stands in the gallery (in `gallery`'s x and y): small bright tongues, unlit by
// the room, each a glow of its own (they flicker)
const flame = new Path2D();
for (const x of [-0.09, 0.41, 0.59, 1.09]) {
  flame.moveTo(x, -4.6);
  flame.quadraticCurveTo(x + 0.02, -4.55, x, -4.5);
  flame.quadraticCurveTo(x - 0.02, -4.55, x, -4.6);
  e.light(x, -4.55, 0.07, '#ffd08a', 0.9);
}
g.fillStyle = '#fff2c4';
g.fill(flame);
