// The deck's front, from the lawn (metres; x −3.0…3.0, the deck's top at 0.5 m): the rim board, the white lattice
// under it.
g.fillStyle = '#8a6c4e';
g.fillRect(-3.0, -0.5, 6.0, 0.18);
g.save();
g.beginPath();
g.rect(-3.0, -0.32, 6.0, 0.32);
g.clip();
g.fillStyle = '#2a2a30';
g.fillRect(-3.0, -0.32, 6.0, 0.32);
g.strokeStyle = '#dedbd2';
g.lineWidth = 0.025;
for (let x = -3.4; x < 3.4; x += 0.12) {
  g.beginPath();
  g.moveTo(x, 0);
  g.lineTo(x + 0.32, -0.32);
  g.moveTo(x + 0.32, 0);
  g.lineTo(x, -0.32);
  g.stroke();
}
g.restore();
