// The hall's far wall (its face toward the room; x runs from the back, −1.05, to the front, +1.05): the hall's paint,
// a row of coat pegs with Dad's work jacket (gone once the house is emptied).
e.lib.hall(g, -1.07, 1.07);
g.fillStyle = '#8a6a4e';
g.fillRect(-0.2, -1.72, 0.9, 0.05);
for (const x of [-0.1, 0.2, 0.5]) {
  g.fillStyle = '#6a5040';
  g.fillRect(x - 0.012, -1.7, 0.024, 0.07);
}
if (!e.state.packed) {
  g.fillStyle = '#4d5d74';
  g.beginPath();
  g.moveTo(0.08, -1.66);
  g.lineTo(0.32, -1.66);
  g.lineTo(0.36, -1.0);
  g.lineTo(0.04, -1.0);
  g.closePath();
  g.fill();
  g.fillStyle = '#3e4c60';
  g.fillRect(0.19, -1.6, 0.02, 0.58);
}
