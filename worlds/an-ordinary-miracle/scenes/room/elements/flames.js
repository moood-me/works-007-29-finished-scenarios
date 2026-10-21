// The two candle flames (glowing: not darkened by the room), each a layer of its own pivoting at its wick, stretched
// and swayed a little by animate; their light is the scene's `candles`.
for (const [name, x] of [['left', -0.1], ['right', 0.1]]) {
  e.layer(name, { pivot: [x, -0.47], flicker: 0.15 }, (g) => {
    g.fillStyle = '#ffb45a';
    g.beginPath();
    g.moveTo(x, -0.56);
    g.quadraticCurveTo(x + 0.022, -0.5, x + 0.012, -0.475);
    g.quadraticCurveTo(x, -0.465, x - 0.012, -0.475);
    g.quadraticCurveTo(x - 0.022, -0.5, x, -0.56);
    g.fill();
    g.fillStyle = '#fff2c8';
    g.beginPath();
    g.ellipse(x, -0.49, 0.007, 0.016, 0, 0, Math.PI * 2);
    g.fill();
  });
}
e.light(0, -0.51, 0.16, '#ffcf8a', 0.7);
