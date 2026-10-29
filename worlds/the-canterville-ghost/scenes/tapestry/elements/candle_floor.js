// A candle in its brass stick set on the floor before the tapestry (`candle_floor`): its small flame and its light low
// on the wall and on whoever sits by it. Nothing is painted (and no light) while `candle_floor` is false.
if (e.state.candle_floor) {
  g.fillStyle = '#a8803c';
  g.beginPath();
  g.ellipse(0, -0.01, 0.06, 0.015, 0, 0, Math.PI * 2);
  g.fill();
  g.fillRect(-0.012, -0.08, 0.024, 0.07);
  g.fillStyle = '#ede6d2';
  g.fillRect(-0.013, -0.24, 0.026, 0.16);
  g.fillStyle = '#ffd890';
  g.beginPath();
  g.ellipse(0, -0.265, 0.01, 0.022, 0, 0, Math.PI * 2);
  g.fill();
  e.light(0, -0.27, 1.5, '#ffcf8a', 1.3, 'flame');
}
e.at(0, -0.27, 'flame');
