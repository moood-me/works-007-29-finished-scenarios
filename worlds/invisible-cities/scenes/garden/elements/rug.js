// The rug under the table and the Khan's seat, seen from above (2.6 × 1.8 m): a worn indigo field, a muted red border
// between thin pale bands, a medallion of plain shapes in the middle — no emblem, no writing
g.fillStyle = '#7a3a34';
g.fillRect(-1.3, -0.9, 2.6, 1.8);
g.fillStyle = '#d2c3a4';
g.fillRect(-1.2, -0.8, 2.4, 1.6);
g.fillStyle = '#7a3a34';
g.fillRect(-1.17, -0.77, 2.34, 1.54);
g.fillStyle = '#d2c3a4';
g.fillRect(-1.0, -0.6, 2.0, 1.2);
g.fillStyle = '#2f3656';
g.fillRect(-0.97, -0.57, 1.94, 1.14);
g.fillStyle = '#7a3a34';
for (let i = -5; i <= 5; i++) {
  g.beginPath();
  g.moveTo(i * 0.21, -0.82);
  g.lineTo(i * 0.21 + 0.06, -0.72);
  g.lineTo(i * 0.21 - 0.06, -0.72);
  g.closePath();
  g.fill();
}
g.fillStyle = '#9b4a3e';
g.beginPath();
g.moveTo(-0.55, 0);
g.lineTo(0, -0.38);
g.lineTo(0.55, 0);
g.lineTo(0, 0.38);
g.closePath();
g.fill();
g.fillStyle = '#d2c3a4';
g.beginPath();
g.moveTo(-0.28, 0);
g.lineTo(0, -0.19);
g.lineTo(0.28, 0);
g.lineTo(0, 0.19);
g.closePath();
g.fill();
g.fillStyle = '#2f3656';
g.fillRect(-0.06, -0.06, 0.12, 0.12);
