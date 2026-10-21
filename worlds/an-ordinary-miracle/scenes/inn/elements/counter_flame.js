// The candle's flame on the counter (glowing: not darkened by the hall), a layer pivoting at its wick, swayed a
// little by animate; its light is the scene's `candle`.
e.layer('flame', { pivot: [0, -0.345], flicker: 0.15 }, (g) => {
  g.fillStyle = '#ffb45a';
  g.beginPath();
  g.moveTo(0, -0.44);
  g.quadraticCurveTo(0.022, -0.38, 0.012, -0.355);
  g.quadraticCurveTo(0, -0.345, -0.012, -0.355);
  g.quadraticCurveTo(-0.022, -0.38, 0, -0.44);
  g.fill();
  g.fillStyle = '#fff2c8';
  g.beginPath();
  g.ellipse(0, -0.37, 0.007, 0.016, 0, 0, Math.PI * 2);
  g.fill();
});
e.light(0, -0.39, 0.14, '#ffcf8a', 0.7);
