// The Khan's boat, tied across the end of the landing stage: a long low hull seen from its side, its bow lifted to
// the right, two oars shipped along it — one layer that rocks on the water (animate)
e.layer('hull', { pivot: [0, 0], box: [-2.4, -1.2, 2.6, 0.3] }, (g) => {
  g.fillStyle = '#3e332c';
  g.beginPath();
  g.moveTo(-2.1, -0.62);
  g.lineTo(1.7, -0.62);
  g.quadraticCurveTo(2.2, -0.66, 2.35, -0.95);
  g.quadraticCurveTo(2.1, -0.2, 1.4, 0.05);
  g.lineTo(-1.7, 0.05);
  g.quadraticCurveTo(-2.1, -0.15, -2.1, -0.62);
  g.closePath();
  g.fill();
  g.fillStyle = '#7a6a5a';
  g.fillRect(-2.05, -0.64, 3.8, 0.06);
  g.strokeStyle = '#8b7b68';
  g.lineWidth = 0.05;
  g.beginPath();
  g.moveTo(-1.6, -0.75);
  g.lineTo(1.4, -0.69);
  g.moveTo(-1.4, -0.71);
  g.lineTo(1.6, -0.79);
  g.stroke();
});
e.at(0, -0.5, 'boat');
