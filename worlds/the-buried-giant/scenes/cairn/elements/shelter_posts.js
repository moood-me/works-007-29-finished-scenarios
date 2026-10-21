// The shelter's front: two rough posts and the beam the turf roof rests on
g.fillStyle = '#5a4a3b';
for (const x of [-2.2, 2.2]) {
  g.beginPath();
  g.moveTo(x - 0.09, 0);
  g.lineTo(x - 0.07, -1.56);
  g.lineTo(x + 0.08, -1.58);
  g.lineTo(x + 0.1, 0);
  g.closePath();
  g.fill();
}
g.fillStyle = '#4f4134';
g.beginPath();
g.moveTo(-2.6, -1.5);
g.lineTo(-2.55, -1.64);
g.lineTo(2.6, -1.66);
g.lineTo(2.62, -1.52);
g.closePath();
g.fill();
