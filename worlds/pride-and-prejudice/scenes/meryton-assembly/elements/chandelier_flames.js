// The flames of a chandelier's fourteen candles (as `chandelier`'s x and y — lib: candles): small bright tongues, unlit
// by the room, each a glow of its own; the chandelier's light on the room is the scene's `chandelier_near` / `_far`.
// A copy for each chandelier
const W = e.lib;
const flame = new Path2D();
for (const [x, y] of W.candles()) {
  const top = y - W.CANDLE - 0.075, foot = y - W.CANDLE - 0.005;
  flame.moveTo(x, top);
  flame.quadraticCurveTo(x + 0.02, foot - 0.025, x, foot);
  flame.quadraticCurveTo(x - 0.02, foot - 0.025, x, top);
  e.light(x, foot - 0.03, 0.06, '#ffd08a', 0.9);
}
g.fillStyle = '#fff2c4';
g.fill(flame);
