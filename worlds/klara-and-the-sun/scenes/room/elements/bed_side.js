// The bed's side, toward the room (facing right; its x runs away from the viewer: x 0 at distance 4.15, x −1 the
// foot): a pale wooden frame on short legs, the white mattress edge, the blanket hanging over it in soft folds.
g.fillStyle = '#c9b597';
g.fillRect(-1.0, -0.3, 2.0, 0.12);
g.fillRect(-1.0, -0.2, 0.07, 0.22);
g.fillRect(0.93, -0.2, 0.07, 0.22);
g.fillStyle = '#f1ede6';
g.fillRect(-1.0, -0.5, 2.0, 0.2);
// the blanket's edge hanging down, scalloped by its folds
g.fillStyle = '#b9c7d2';
g.beginPath();
g.moveTo(-1.0, -0.56);
g.lineTo(0.55, -0.56);
g.lineTo(0.55, -0.3);
for (let x = 0.55; x > -1.0; x -= 0.18) g.quadraticCurveTo(x - 0.09, -0.2, x - 0.18, -0.29);
g.closePath();
g.fill();
g.strokeStyle = 'rgba(120,138,152,0.5)';
g.lineWidth = 0.01;
g.beginPath();
for (let x = 0.45; x > -0.95; x -= 0.18) {
  g.moveTo(x, -0.52);
  g.lineTo(x - 0.02, -0.27);
}
g.stroke();
