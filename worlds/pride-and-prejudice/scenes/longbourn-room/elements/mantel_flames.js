// The two candle flames on the mantel: small bright tongues, unlit by the room, each a light of its own (they flicker)
const flame = new Path2D();
for (const x of [-0.6, 0.6]) {
  flame.moveTo(x, -0.07);
  flame.quadraticCurveTo(x + 0.015, -0.03, x, 0);
  flame.quadraticCurveTo(x - 0.015, -0.03, x, -0.07);
}
g.fillStyle = '#fff2c4';
g.fill(flame);
e.light(-0.6, -0.03, 0.08, '#ffd08a', 1.0, 'left');
e.light(0.6, -0.03, 0.08, '#ffd08a', 1.0, 'right');
