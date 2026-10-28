// The two flames of a girandole's candles (as `sconce`'s x and y — lib: SCONCE): small bright tongues, unlit by the
// room, each a glow of its own. A copy on each girandole
const W = e.lib;
const flame = new Path2D();
for (const [x, y] of W.SCONCE) {
  const top = y - W.CANDLE - 0.08,
    foot = y - W.CANDLE - 0.005;
  flame.moveTo(x, top);
  flame.quadraticCurveTo(x + 0.02, foot - 0.025, x, foot);
  flame.quadraticCurveTo(x - 0.02, foot - 0.025, x, top);
  e.light(x, foot - 0.03, 0.06, "#ffd08a", 0.9);
}
g.fillStyle = "#fff2c4";
g.fill(flame);
