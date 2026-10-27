// What the room's paintings share: a candle's flame — a layer of its own about its wick, so the animate of its holder
// can make it tremble (as in the dining room).
function candle(g, e, k, x, y, h, glow) {
  g.fillStyle = '#f3ecdc';
  g.fillRect(x - 0.012, y - h, 0.024, h);
  g.fillStyle = '#e2d6bd';
  g.fillRect(x - 0.012, y - h, 0.006, h);
  g.strokeStyle = '#2b2420';
  g.lineWidth = 0.003;
  g.beginPath();
  g.moveTo(x, y - h);
  g.lineTo(x, y - h - 0.012);
  g.stroke();
  const wick = y - h - 0.008;
  e.layer(`f${k}`, { pivot: [x, wick], blend: 'add', box: [x - 0.03, wick - 0.08, x + 0.03, wick + 0.01] }, c => {
    c.fillStyle = '#ffb347';
    c.beginPath();
    c.moveTo(x, wick - 0.055);
    c.quadraticCurveTo(x + 0.016, wick - 0.016, x, wick);
    c.quadraticCurveTo(x - 0.016, wick - 0.016, x, wick - 0.055);
    c.fill();
    c.fillStyle = '#fff1c9';
    c.beginPath();
    c.ellipse(x, wick - 0.016, 0.006, 0.013, 0, 0, Math.PI * 2);
    c.fill();
    e.light(x, wick - 0.022, glow, '#ffc477', 0.8, `f${k}`);
  });
}
// how a flame trembles: a slow stretch and lean of its own
function flicker(e, n, seed) {
  for (let k = 0; k < n; k++) {
    const f = e.layer(`f${k}`);
    const s = seed * 7.3 + k * 3.1;
    f.scaleY = 1 + 0.12 * anim.noise(e.t * 2.3, s);
    f.scaleX = 1 - 0.05 * anim.noise(e.t * 2.1, s + 1.7);
    f.rotate = 0.08 * anim.noise(e.t * 1.4, s + 4.2);
  }
}
return { candle, flicker };
