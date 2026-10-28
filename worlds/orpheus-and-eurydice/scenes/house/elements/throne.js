// Hades's chair by the hearth: a heavy high-backed chair of dark wood, plain, its back a tall panel between two square
// posts with round knobs, its seat a deep block (a card standing behind him as he sits, turned the way he faces; x
// across it, y up negative). His mantle hides most of the seat.
g.fillStyle = '#3a2d24';
g.fillRect(-0.42, -1.55, 0.84, 1.6);
g.fillStyle = '#4a3a2e';
g.fillRect(-0.34, -1.42, 0.68, 0.9);
g.fillStyle = '#2f241d';
for (const x of [-0.48, 0.36]) {
  g.fillRect(x, -1.62, 0.12, 1.67);
  g.beginPath();
  g.arc(x + 0.06, -1.68, 0.075, 0, Math.PI * 2);
  g.fill();
}
// the seat's front, its arms
g.fillStyle = '#35291f';
g.fillRect(-0.5, -0.5, 1.0, 0.55);
g.fillRect(-0.56, -0.82, 0.14, 0.4);
g.fillRect(0.42, -0.82, 0.14, 0.4);
g.fillStyle = '#4a3a2e';
g.fillRect(-0.6, -0.86, 0.22, 0.06);
g.fillRect(0.38, -0.86, 0.22, 0.06);
