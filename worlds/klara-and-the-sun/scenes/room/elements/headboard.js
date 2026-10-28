// The bed's headboard against the west wall (metres from the floor): a padded board in soft grey-blue linen on short
// pale wooden legs.
g.fillStyle = '#c4b49c';
g.fillRect(-0.5, -0.4, 0.06, 0.42);
g.fillRect(0.44, -0.4, 0.06, 0.42);
g.fillStyle = '#9fadba';
g.beginPath();
g.roundRect(-0.52, -1.0, 1.04, 0.66, 0.08);
g.fill();
g.strokeStyle = 'rgba(110,122,136,0.6)';
g.lineWidth = 0.01;
g.beginPath();
for (const x of [-0.26, 0, 0.26]) {
  g.moveTo(x, -0.94);
  g.lineTo(x, -0.4);
}
g.stroke();
