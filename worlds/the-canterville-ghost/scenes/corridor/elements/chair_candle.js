// A tall iron candlestick on the floor beside the armchair, from before (1.2 m), its candle burning: Mr Otis's light
// to read by on the last nights (the glow chair_candle#flame lights him and her door). Only when `armchair` is true;
// the candle and its glow only while `stand_candle` (Mr Otis takes it in 4С.5).
if (e.state.armchair) {
  g.fillStyle = '#2a2624';
  g.beginPath();
  g.moveTo(-0.14, 0);
  g.lineTo(0, -0.08);
  g.lineTo(0.14, 0);
  g.closePath();
  g.fill();
  g.fillRect(-0.015, -1.0, 0.03, 0.95);
  g.beginPath();
  g.ellipse(0, -1.0, 0.07, 0.015, 0, 0, Math.PI * 2);
  g.fill();
  if (e.state.stand_candle === false) return;
  g.fillStyle = '#e8e2d2';
  g.fillRect(-0.02, -1.18, 0.04, 0.18);
  g.fillStyle = '#ffe0a0';
  g.beginPath();
  g.ellipse(0, -1.22, 0.014, 0.032, 0, 0, Math.PI * 2);
  g.fill();
  e.light(0, -1.22, 1.3, '#ffcf8a', 1.2, 'flame');
}
