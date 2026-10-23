// The bed's side, toward the room (facing right; its x runs away from the viewer: x 0 at distance 3.5, x −0.9 the
// foot): a pale wooden frame on short legs, the white mattress edge, the blanket hanging over it in soft folds.
g.fillStyle = '#c9b597';
g.fillRect(-0.9, -0.3, 1.8, 0.12);
g.fillRect(-0.9, -0.2, 0.07, 0.22);
g.fillRect(0.83, -0.2, 0.07, 0.22);
g.fillStyle = '#f1ede6';
g.fillRect(-0.9, -0.5, 1.8, 0.2);
// the blanket's edge hanging down, scalloped by its folds
g.fillStyle = '#b9c7d2';
g.beginPath();
g.moveTo(-0.9, -0.56);
g.lineTo(0.5, -0.56);
g.lineTo(0.5, -0.3);
for (let x = 0.5; x > -0.85; x -= 0.18) g.quadraticCurveTo(x - 0.09, -0.2, x - 0.18, -0.29);
g.closePath();
g.fill();
g.strokeStyle = 'rgba(120,138,152,0.5)';
g.lineWidth = 0.01;
g.beginPath();
for (let x = 0.4; x > -0.85; x -= 0.18) {
  g.moveTo(x, -0.52);
  g.lineTo(x - 0.02, -0.27);
}
g.stroke();
