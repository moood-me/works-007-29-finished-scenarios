// The deck's front, from the lawn (metres; x −3.9…3.9, the deck's top at 0.5 m): the rim board, the white lattice
// under it, and the two steps down to the grass in the railing's gap (x −0.6…0.6).
g.fillStyle = '#8a6c4e';
g.fillRect(-3.9, -0.5, 7.8, 0.18);
g.save();
g.beginPath();
g.rect(-3.9, -0.32, 7.8, 0.32);
g.clip();
g.fillStyle = '#2a2a30';
g.fillRect(-3.9, -0.32, 7.8, 0.32);
g.strokeStyle = '#dedbd2';
g.lineWidth = 0.025;
for (let x = -4.3; x < 4.3; x += 0.12) {
  g.beginPath();
  g.moveTo(x, 0);
  g.lineTo(x + 0.32, -0.32);
  g.moveTo(x + 0.32, 0);
  g.lineTo(x, -0.32);
  g.stroke();
}
g.restore();
