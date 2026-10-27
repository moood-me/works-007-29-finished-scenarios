// The sconces' candle flames (over sconce, the same `copies`): small flames flickering, shown as much as `candles` by
// the animate; each copy's glow `glow` lights the wall round it.
e.layer('flames', { flicker: 0.35 }, c => {
  for (const [x, y] of e.lib.sconceCandles) {
    c.fillStyle = '#ffcf7a';
    c.beginPath();
    c.ellipse(x, y - 0.03, 0.012, 0.026, 0, 0, Math.PI * 2);
    c.fill();
    c.fillStyle = '#fff6dc';
    c.beginPath();
    c.ellipse(x, y - 0.026, 0.005, 0.012, 0, 0, Math.PI * 2);
    c.fill();
  }
});
e.light(0, -0.25, 0.25, '#ffcf86', 0.5, 'glow');
