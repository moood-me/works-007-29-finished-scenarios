// Far trees and the roofs of the village beyond the lane, one dusky silhouette along the hedge-top (x -40...40).
g.fillStyle = '#3b4258';
g.beginPath();
g.moveTo(-40, 0.5);
for (let x = -40; x <= 40; x += 1.6) {
  const h = 3.5 + 3 * e.rnd();
  g.lineTo(x, -h);
  g.quadraticCurveTo(x + 0.8, -h - 1.4 * e.rnd(), x + 1.6, -h + 0.6);
}
g.lineTo(40, 0.5);
g.closePath();
g.fill();
// a few roofs and a chimney between them, one lit window far off
g.fillStyle = '#343a4e';
for (const [x, w, h] of [[-9, 6, 4.5], [4, 7, 5], [14, 5, 4]]) {
  g.beginPath();
  g.moveTo(x, 0.5);
  g.lineTo(x, -h + 1.8);
  g.lineTo(x + w / 2, -h);
  g.lineTo(x + w, -h + 1.8);
  g.lineTo(x + w, 0.5);
  g.closePath();
  g.fill();
}
g.fillRect(5.2, -5.6, 0.6, 1.5);
g.fillStyle = '#f2c27a';
g.fillRect(6.4, -2.6, 0.7, 0.6);
e.light(6.75, -2.3, 0.6, '#ffc27a', 0.5, 'far_window');
