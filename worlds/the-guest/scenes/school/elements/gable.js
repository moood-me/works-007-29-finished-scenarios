// The school's right end: the whitewashed gable (metres, x away from the front corner along the side, y up), the
// roof's slope over it to the ridge at 4.6 m, a small window, the plinth.
g.fillStyle = '#e3ddcf';
g.beginPath();
g.moveTo(0, 0);
g.lineTo(0, -3.42);
g.lineTo(2.5, -4.6);
g.lineTo(5, -3.42);
g.lineTo(5, 0);
g.closePath();
g.fill();
for (let i = 0; i < 20; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(212,204,188,0.45)' : 'rgba(243,240,233,0.5)';
  g.beginPath();
  g.ellipse(0.3 + e.rnd() * 4.4, -3.2 + e.rnd() * 3, 0.2 + e.rnd() * 0.5, 0.1 + e.rnd() * 0.25, 0, 0, Math.PI * 2);
  g.fill();
}
// the roof's edge over the gable: tiles under snow, a snow lip
g.fillStyle = '#a5583e';
g.beginPath();
g.moveTo(-0.15, -3.36);
g.lineTo(2.5, -4.66);
g.lineTo(5.15, -3.36);
g.lineTo(5.15, -3.24);
g.lineTo(2.5, -4.52);
g.lineTo(-0.15, -3.24);
g.closePath();
g.fill();
g.fillStyle = '#eef1f4';
g.beginPath();
g.moveTo(-0.15, -3.4);
g.lineTo(2.5, -4.72);
g.lineTo(5.15, -3.4);
g.lineTo(5.15, -3.34);
g.lineTo(2.5, -4.64);
g.lineTo(-0.15, -3.34);
g.closePath();
g.fill();
g.fillStyle = '#b9a785';
g.fillRect(0, -0.55, 5, 0.55);
g.fillStyle = '#cfc6b3';
g.fillRect(2.05, -2.5, 0.9, 0.9);
g.fillStyle = '#34414b';
g.fillRect(2.15, -2.4, 0.7, 0.7);
g.fillStyle = '#f1f3f5';
g.fillRect(2.0, -1.62, 1.0, 0.06);
