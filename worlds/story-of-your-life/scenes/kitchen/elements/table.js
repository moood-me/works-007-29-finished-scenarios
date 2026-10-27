// The kitchen table from the front, from its foot (x −0.65…0.65, its top at 0.75 m): the oilcloth's hem over the
// apron, two turned legs, the stretcher between them; painted wood, worn at the corners.
g.fillStyle = '#b48f66';
g.fillRect(-0.6, -0.66, 1.2, 0.08);
for (const x of [-0.6, 0.54]) {
  g.fillStyle = '#c29d72';
  g.beginPath();
  g.moveTo(x, -0.66);
  g.lineTo(x + 0.06, -0.66);
  g.lineTo(x + 0.055, -0.4);
  g.quadraticCurveTo(x + 0.07, -0.35, x + 0.05, -0.3);
  g.lineTo(x + 0.045, 0);
  g.lineTo(x + 0.015, 0);
  g.lineTo(x + 0.01, -0.3);
  g.quadraticCurveTo(x - 0.01, -0.35, x + 0.005, -0.4);
  g.closePath();
  g.fill();
}
g.fillStyle = '#a8845c';
g.fillRect(-0.56, -0.18, 1.12, 0.03);
// the oilcloth's hem, hanging over the edge
g.fillStyle = '#f0ead9';
g.beginPath();
g.moveTo(-0.67, -0.76);
g.lineTo(0.67, -0.76);
g.lineTo(0.66, -0.62);
for (let x = 0.66; x > -0.66; x -= 0.12) g.quadraticCurveTo(x - 0.03, -0.6, x - 0.06, -0.625);
g.lineTo(-0.67, -0.62);
g.closePath();
g.fill();
g.fillStyle = 'rgba(74,108,150,0.5)';
for (let x = -0.62; x < 0.64; x += 0.1) g.fillRect(x, -0.74, 0.05, 0.1);
