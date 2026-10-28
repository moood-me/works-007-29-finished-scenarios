// The church's west end, its gable toward the left of the view: rubble stone, quoins, three lancets in a group; the
// gable coped, and on its point the bellcote — a stone pier with one pointed opening, the bell hanging in it against
// the sky, a small cross on its top (metres: x across the end, +3 its south corner by the porch; y up from its foot).
const L = e.lib;
L.rubble(g, e.rnd, -3, 3, -5.2);
// the gable: the wall carried up to its point
g.save();
g.beginPath();
g.moveTo(-3.3, -5.0);
g.lineTo(0, -8.75);
g.lineTo(3.3, -5.0);
g.closePath();
g.clip();
L.rubble(g, e.rnd, -3, 3, -8.5);
g.restore();
L.quoins(g, -3, 1, -5.2);
L.quoins(g, 3, -1, -5.2);
g.fillStyle = '#b3ab96';
g.fillRect(-3, -0.42, 6, 0.12);
// the coping along the gable's slopes, its kneelers at the feet
g.fillStyle = '#c0b8a2';
g.beginPath();
g.moveTo(-3.3, -5.0);
g.lineTo(0, -8.62);
g.lineTo(3.3, -5.0);
g.lineTo(3.3, -5.28);
g.lineTo(0, -8.88);
g.lineTo(-3.3, -5.28);
g.closePath();
g.fill();
g.fillRect(-3.3, -5.4, 0.45, 0.45);
g.fillRect(2.85, -5.4, 0.45, 0.45);
// three lancets in a group under one hood
function lancet(x, bottom, w, h) {
  g.beginPath();
  g.moveTo(x - w / 2, bottom);
  g.lineTo(x - w / 2, bottom - h + w * 0.9);
  g.quadraticCurveTo(x - w / 2, bottom - h + w * 0.1, x, bottom - h);
  g.quadraticCurveTo(x + w / 2, bottom - h + w * 0.1, x + w / 2, bottom - h + w * 0.9);
  g.lineTo(x + w / 2, bottom);
  g.closePath();
}
for (const [x, h] of [[-0.62, 2.3], [0, 2.85], [0.62, 2.3]]) {
  g.fillStyle = '#c6bfaa';
  lancet(x, -1.7, 0.58, h + 0.12);
  g.fill();
  g.fillStyle = '#2e3236';
  lancet(x, -1.75, 0.38, h);
  g.fill();
}
g.fillStyle = '#b7af99';
g.fillRect(-1.0, -1.75, 2.0, 0.1);
// the bellcote: its pier on the gable's point, gabled and crossed
g.fillStyle = '#b8b09b';
g.fillRect(-0.75, -10.5, 1.5, 2.4);
g.beginPath();
g.moveTo(-0.9, -10.45);
g.lineTo(0, -11.05);
g.lineTo(0.9, -10.45);
g.closePath();
g.fill();
g.fillStyle = 'rgba(84,78,64,0.3)';
for (let y = -8.45; y > -10.4; y -= 0.32) g.fillRect(-0.75, y, 1.5, 0.02);
g.fillStyle = '#c4bca6';
g.fillRect(-0.06, -11.6, 0.12, 0.6);
g.fillRect(-0.2, -11.42, 0.4, 0.1);
g.fillStyle = '#c0b8a2';
g.fillRect(-0.85, -10.52, 1.7, 0.1);
// its opening, through to the sky
g.save();
g.globalCompositeOperation = 'destination-out';
g.beginPath();
g.moveTo(-0.42, -8.75);
g.lineTo(-0.42, -9.62);
g.quadraticCurveTo(-0.42, -10.0, 0, -10.08);
g.quadraticCurveTo(0.42, -10.0, 0.42, -9.62);
g.lineTo(0.42, -8.75);
g.closePath();
g.fill();
g.restore();
// the headstock the bell swings from
g.fillStyle = '#3a2c22';
g.fillRect(-0.45, -9.95, 0.9, 0.09);
// the bell and its clapper, each swung by the animate about the headstock
e.layer('clapper', { pivot: [0, -9.86], box: [-0.5, -10, 0.5, -8.9] }, c => {
  c.strokeStyle = '#3a3026';
  c.lineWidth = 0.035;
  c.beginPath();
  c.moveTo(0, -9.8);
  c.lineTo(0, -9.25);
  c.stroke();
  c.fillStyle = '#3a3026';
  c.beginPath();
  c.arc(0, -9.22, 0.055, 0, Math.PI * 2);
  c.fill();
});
e.layer('bell', { pivot: [0, -9.86], box: [-0.5, -10, 0.5, -8.9] }, c => {
  c.fillStyle = '#76603e';
  c.beginPath();
  c.moveTo(-0.13, -9.84);
  c.quadraticCurveTo(-0.17, -9.6, -0.2, -9.42);
  c.quadraticCurveTo(-0.24, -9.3, -0.3, -9.27);
  c.lineTo(0.3, -9.27);
  c.quadraticCurveTo(0.24, -9.3, 0.2, -9.42);
  c.quadraticCurveTo(0.17, -9.6, 0.13, -9.84);
  c.closePath();
  c.fill();
  c.fillStyle = '#9c8352';
  c.fillRect(-0.14, -9.8, 0.05, 0.4);
  c.fillStyle = '#5e4c32';
  c.fillRect(-0.3, -9.3, 0.6, 0.04);
  c.fillRect(-0.06, -9.92, 0.12, 0.08);
});
e.at(0, -9.5, 'bell');
