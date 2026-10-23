// The plain bench along the far side of the table (x running away from the viewer): a thick seat plank on two slab
// ends.
g.fillStyle = '#7d6044';
g.fillRect(-1.3, -0.46, 2.6, 0.05);
g.fillStyle = '#6a5038';
for (const x of [-1.1, 1.04]) {
  g.beginPath();
  g.moveTo(x, -0.41);
  g.lineTo(x + 0.06, -0.41);
  g.lineTo(x + 0.08, 0);
  g.lineTo(x - 0.02, 0);
  g.closePath();
  g.fill();
}
