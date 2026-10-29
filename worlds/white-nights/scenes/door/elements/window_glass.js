// The stair window's day (x −0.36…0.36, y −1.8 at its top … 0 at the sill): a pale pearl sky over the yard, the roof
// of the wing across with two chimneys low in it
const sky = g.createLinearGradient(0, -1.8, 0, 0);
sky.addColorStop(0, '#e6e8ee');
sky.addColorStop(1, '#f4f1ea');
g.fillStyle = sky;
g.fillRect(-0.36, -1.8, 0.72, 1.8);
g.fillStyle = '#b9b2a6';
g.beginPath();
g.moveTo(-0.36, -0.42);
g.lineTo(0.36, -0.5);
g.lineTo(0.36, 0);
g.lineTo(-0.36, 0);
g.closePath();
g.fill();
g.fillStyle = '#a49c90';
g.fillRect(-0.2, -0.62, 0.06, 0.2);
g.fillRect(0.14, -0.66, 0.05, 0.18);
