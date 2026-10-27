// The old fridge in the corner, from its foot (x −0.4…0.4, 1.72 m): rounded cream enamel, the freezer's line, a long
// chrome handle; held to its door by magnets, a child's crayon drawing (a house, two people, a ladder) and a photo.
g.fillStyle = '#ebe3d0';
g.beginPath();
g.roundRect(-0.4, -1.72, 0.8, 1.68, [0.12, 0.12, 0.02, 0.02]);
g.fill();
g.fillStyle = '#5a554c';
g.fillRect(-0.36, -0.06, 0.72, 0.06);
g.strokeStyle = 'rgba(120,110,90,0.5)';
g.lineWidth = 0.01;
g.beginPath();
g.moveTo(-0.4, -1.24);
g.lineTo(0.4, -1.24);
g.stroke();
g.fillStyle = '#c6c9cb';
g.fillRect(0.3, -1.5, 0.035, 0.2);
g.fillRect(0.3, -1.12, 0.035, 0.42);
// the drawing
g.save();
g.translate(-0.08, -1.05);
g.rotate(-0.04);
g.fillStyle = '#f6f2e6';
g.fillRect(-0.16, 0, 0.32, 0.24);
g.strokeStyle = '#d0503c';
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(-0.12, 0.2);
g.lineTo(-0.12, 0.11);
g.lineTo(-0.07, 0.06);
g.lineTo(-0.02, 0.11);
g.lineTo(-0.02, 0.2);
g.stroke();
g.strokeStyle = '#3a6bb0';
g.beginPath();
g.moveTo(0.04, 0.2);
g.lineTo(0.07, 0.08);
g.moveTo(0.1, 0.2);
g.lineTo(0.07, 0.08);
for (const y of [0.17, 0.13, 0.1]) {
  g.moveTo(0.05, y);
  g.lineTo(0.09, y);
}
g.stroke();
g.strokeStyle = '#2f7a45';
g.beginPath();
g.arc(0.07, 0.05, 0.014, 0, Math.PI * 2);
g.moveTo(0.07, 0.065);
g.lineTo(0.07, 0.08);
g.stroke();
g.fillStyle = '#e8b830';
g.beginPath();
g.arc(0.12, 0.035, 0.02, 0, Math.PI * 2);
g.fill();
g.restore();
// the photo
g.save();
g.translate(0.1, -1.5);
g.rotate(0.06);
g.fillStyle = '#f5f2ea';
g.fillRect(-0.07, 0, 0.14, 0.18);
g.fillStyle = '#8a9a8c';
g.fillRect(-0.06, 0.01, 0.12, 0.13);
g.fillStyle = '#c9a383';
g.beginPath();
g.arc(-0.02, 0.07, 0.015, 0, Math.PI * 2);
g.arc(0.025, 0.08, 0.012, 0, Math.PI * 2);
g.fill();
g.restore();
for (const [x, y, c] of [[-0.08, -1.05, '#d64a3a'], [0.1, -1.49, '#3a6bb0'], [-0.2, -0.6, '#e8b830']]) {
  g.fillStyle = c;
  g.beginPath();
  g.arc(x, y, 0.016, 0, Math.PI * 2);
  g.fill();
}
