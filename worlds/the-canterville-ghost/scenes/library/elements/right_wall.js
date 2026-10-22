// The library's right wall (7.1 m along the room, +x running toward the viewer): the great stone fireplace in its
// middle (x −1…1) — a Tudor arch over the hearth, andirons and logs in it (the fire is the flames' and the embers'),
// a mantel with two candlesticks (their flames' lights right_wall#candle_far and #candle_near), the Canterville arms carved
// above — and bookcases either side.
e.lib.oak(g, -3.45, 3.65);
e.lib.bookcase(g, e, -3.35, -1.3, 3.05);
e.lib.bookcase(g, e, 1.3, 3.5, 3.05);
// the surround: dressed stone to the mantel
g.fillStyle = '#857c70';
g.fillRect(-1.0, -1.5, 2.0, 1.5);
g.strokeStyle = '#6a6258';
g.lineWidth = 0.015;
for (let y = -1.5; y < 0; y += 0.25) {
  g.beginPath();
  g.moveTo(-1.0, y);
  g.lineTo(-0.72, y);
  g.moveTo(0.72, y);
  g.lineTo(1.0, y);
  g.stroke();
}
// the opening under its four-centred arch: soot-black inside, the firebrick back
g.fillStyle = '#5b2f22';
g.beginPath();
g.moveTo(-0.65, 0);
g.lineTo(-0.65, -0.82);
g.quadraticCurveTo(-0.62, -1.05, -0.2, -1.1);
g.lineTo(0.2, -1.1);
g.quadraticCurveTo(0.62, -1.05, 0.65, -0.82);
g.lineTo(0.65, 0);
g.closePath();
g.fill();
g.fillStyle = '#191210';
g.beginPath();
g.moveTo(-0.55, 0);
g.lineTo(-0.55, -0.78);
g.quadraticCurveTo(-0.52, -0.98, -0.18, -1.02);
g.lineTo(0.18, -1.02);
g.quadraticCurveTo(0.52, -0.98, 0.55, -0.78);
g.lineTo(0.55, 0);
g.closePath();
g.fill();
// the andirons and the logs
g.fillStyle = '#2a2420';
for (const x of [-0.38, 0.38]) {
  g.fillRect(x - 0.02, -0.28, 0.04, 0.28);
  g.beginPath();
  g.arc(x, -0.3, 0.04, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#3a2618';
g.fillRect(-0.42, -0.2, 0.84, 0.09);
g.fillStyle = '#4a3020';
g.save();
g.translate(0, -0.22);
g.rotate(-0.08);
g.fillRect(-0.36, -0.05, 0.72, 0.09);
g.restore();
// the mantel shelf
g.fillStyle = '#6d6458';
g.fillRect(-1.15, -1.6, 2.3, 0.11);
g.fillStyle = '#958c7f';
g.fillRect(-1.15, -1.6, 2.3, 0.025);
// the overmantel: a carved oak panel, the arms in it
g.fillStyle = e.lib.OAK_DARK;
g.fillRect(-0.95, -3.12, 1.9, 1.5);
g.fillStyle = e.lib.OAK;
g.fillRect(-0.85, -3.02, 1.7, 1.3);
g.fillStyle = '#6e2a26';
g.beginPath();
g.moveTo(-0.32, -2.75);
g.lineTo(0.32, -2.75);
g.lineTo(0.32, -2.4);
g.quadraticCurveTo(0.32, -2.12, 0, -2.0);
g.quadraticCurveTo(-0.32, -2.12, -0.32, -2.4);
g.closePath();
g.fill();
g.strokeStyle = '#cfc6b2';
g.lineWidth = 0.045;
g.beginPath();
g.moveTo(-0.26, -2.25);
g.lineTo(0, -2.52);
g.lineTo(0.26, -2.25);
g.stroke();
g.fillStyle = '#b8923e';
for (const [x, y] of [[-0.17, -2.63], [0.17, -2.63], [0, -2.14]]) {
  g.beginPath();
  g.arc(x, y, 0.05, 0, Math.PI * 2);
  g.fill();
}
// two brass candlesticks on the mantel, their candles lit
for (const x of [-0.75, 0.75]) {
  g.fillStyle = '#9a7a3c';
  g.fillRect(x - 0.06, -1.63, 0.12, 0.03);
  g.fillRect(x - 0.015, -1.86, 0.03, 0.25);
  g.fillStyle = '#e8e0cc';
  g.fillRect(x - 0.02, -2.06, 0.04, 0.2);
  g.fillStyle = '#ffd890';
  g.beginPath();
  g.ellipse(x, -2.1, 0.012, 0.03, 0, 0, Math.PI * 2);
  g.fill();
  e.light(x, -2.1, 0.9, '#ffcf8a', 0.6, x < 0 ? 'candle_far' : 'candle_near');
}
