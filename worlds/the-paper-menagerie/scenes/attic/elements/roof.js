// One slope of the roof seen from below (the underside, x along the attic from the near end to the far, y up the slope
// from the knee wall to the ridge, 3.35 m): the roof boards between the rafters, the rafters every 0.6 m, darker; the
// ridge board along the top; a few nails come through; cobwebs in the angles.
e.lib.boards(g, -2.62, 2.62, -3.37, 0.02, 0.6, 5);
g.fillStyle = 'rgba(120,96,74,0.35)';
g.fillRect(-2.62, -3.37, 5.24, 3.39);
for (let x = -2.4; x < 2.62; x += 0.6) {
  g.fillStyle = '#7d5f45';
  g.fillRect(x, -3.37, 0.07, 3.39);
  g.fillStyle = 'rgba(230,200,160,0.25)';
  g.fillRect(x, -3.37, 0.012, 3.39);
}
g.fillStyle = '#6e533e';
g.fillRect(-2.62, -3.37, 5.24, 0.12);
g.fillStyle = 'rgba(70,64,60,0.7)';
for (let i = 0; i < 40; i++) g.fillRect(-2.6 + e.rnd() * 5.2, -3.2 + e.rnd() * 3.1, 0.006, 0.02);
g.strokeStyle = 'rgba(235,232,224,0.35)';
g.lineWidth = 0.003;
for (const x of [-1.8, 0.6, 1.8]) {
  g.beginPath();
  for (let k = 0; k < 4; k++) {
    g.moveTo(x, -3.25);
    g.quadraticCurveTo(x + 0.08 + k * 0.03, -3.15 + k * 0.03, x + 0.2 + k * 0.05, -3.25);
  }
  g.stroke();
}
