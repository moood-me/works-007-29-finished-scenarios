// The old oak on this bank, near on the right: its trunk out of the frame's edge, its boughs reaching over the bank,
// their russet leaf hanging into the top of the view (metres: x across from the trunk, y up).
g.fillStyle = '#54493e';
g.beginPath();
g.moveTo(-0.9, 0);
g.quadraticCurveTo(-0.6, -3, -0.7, -6);
g.lineTo(0.8, -6.2);
g.quadraticCurveTo(0.7, -3, 1.1, 0);
g.closePath();
g.fill();
// the bark's furrows
g.strokeStyle = 'rgba(40,32,26,0.45)';
g.lineWidth = 0.05;
for (let i = 0; i < 14; i++) {
  const x = -0.7 + e.rnd() * 1.5;
  g.beginPath();
  g.moveTo(x, -0.1);
  g.quadraticCurveTo(x + (e.rnd() - 0.5) * 0.3, -3, x * 0.85, -6);
  g.stroke();
}
g.strokeStyle = '#54493e';
g.lineCap = 'round';
for (const [x1, y1, x2, y2, w] of [[0, -5.5, -5.5, -7.2, 0.45], [-3, -6.6, -7.5, -6.8, 0.22], [0, -6, -2.5, -9.5, 0.35], [0.3, -6, 3.5, -9, 0.35]]) {
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(x1, y1);
  g.quadraticCurveTo((x1 + x2) / 2, y2 - 0.6, x2, y2);
  g.stroke();
}
e.layer('crown', { pivot: [-1, -6], wind: { strength: 0.1, gust: 0.5 }, box: [-10, -13, 7, -4] }, c => {
  e.lib.crown(c, e.rnd, 'oak', -2.5, -8.6, 6.4, 3.6, 360, 0.5);
});
