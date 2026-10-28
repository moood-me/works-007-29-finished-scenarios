// The hall's floor from above: the same pale oak, a shade darker out of the sun.
g.fillStyle = '#a88660';
g.fillRect(-0.55, -1.65, 1.1, 3.3);
g.strokeStyle = 'rgba(120,95,70,0.4)';
g.lineWidth = 0.008;
g.beginPath();
for (let x = -0.55; x < 0.55; x += 0.16) {
  g.moveTo(x, -1.65);
  g.lineTo(x, 1.65);
}
g.stroke();
