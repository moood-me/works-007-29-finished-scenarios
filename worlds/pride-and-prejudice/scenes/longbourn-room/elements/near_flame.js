// The flame of the candle on the near table: a small bright tongue, unlit by the room, and its light (it flickers)
const flame = new Path2D();
flame.moveTo(0, -0.07);
flame.quadraticCurveTo(0.016, -0.03, 0, 0);
flame.quadraticCurveTo(-0.016, -0.03, 0, -0.07);
g.fillStyle = '#fff2c4';
g.fill(flame);
e.light(0, -0.03, 0.09, '#ffd08a', 1.2, 'flame');
