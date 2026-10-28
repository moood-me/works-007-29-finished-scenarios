// A dining chair of dark walnut seen from before: a tall back with a wine-red leather panel and brass nails, a
// carved crest rail; its seat and legs are behind the table. Copies stand behind each place on the far side.
g.fillStyle = '#3e2a20';
g.fillRect(-0.24, -1.18, 0.06, 0.72);
g.fillRect(0.18, -1.18, 0.06, 0.72);
g.beginPath();
g.moveTo(-0.26, -1.12);
g.quadraticCurveTo(0, -1.26, 0.26, -1.12);
g.lineTo(0.26, -1.05);
g.lineTo(-0.26, -1.05);
g.closePath();
g.fill();
g.fillStyle = '#6e2630';
g.beginPath();
g.roundRect(-0.18, -1.02, 0.36, 0.46, 0.04);
g.fill();
g.fillStyle = '#c9a050';
for (let k = 0; k <= 8; k++) {
  const x = -0.17 + (0.34 * k) / 8;
  for (const y of [-1.01, -0.57]) {
    g.beginPath();
    g.arc(x, y, 0.007, 0, Math.PI * 2);
    g.fill();
  }
}
g.fillStyle = '#3e2a20';
g.fillRect(-0.26, -0.5, 0.52, 0.05);
g.fillRect(-0.24, -0.45, 0.05, 0.45);
g.fillRect(0.19, -0.45, 0.05, 0.45);
