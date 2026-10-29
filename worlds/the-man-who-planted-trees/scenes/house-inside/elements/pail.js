// His wooden pail of water on the floor by his stool: the acorns go into it to soak for tomorrow (its acorns shown
// while `acorns` is pail: animate). He pushes it along the floor to the Traveller (`pail_push`: the layer slides left).
// Its point `pail`, on its rim
e.layer('pail', {}, (g) => {
  g.fillStyle = '#7a5a3c';
  g.beginPath();
  g.moveTo(-0.2, -0.36);
  g.lineTo(0.2, -0.36);
  g.lineTo(0.16, 0);
  g.lineTo(-0.16, 0);
  g.closePath();
  g.fill();
  g.fillStyle = '#4a4440';
  g.fillRect(-0.2, -0.3, 0.4, 0.03);
  g.fillRect(-0.18, -0.09, 0.36, 0.03);
  g.fillStyle = '#3e4a52';
  g.beginPath();
  g.ellipse(0, -0.36, 0.2, 0.035, 0, 0, Math.PI * 2);
  g.fill();
  e.at(0, -0.37, 'pail');
});
e.layer('full', {}, (g) => {
  for (let i = 0; i < 12; i++) e.lib.acorn(g, -0.15 + (i % 6) * 0.06, -0.37 - Math.floor(i / 6) * 0.02 + Math.sin(i) * 0.008, 0.022, i * 0.7, false);
});
