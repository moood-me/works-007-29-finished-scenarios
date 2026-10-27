// The lime near on the right: its trunk at the frame's edge, its boughs reaching over the graves, the crown gone yellow
// and thinning, hanging into the top of the view (metres: x across from the trunk, y up from the ground).
g.fillStyle = '#5e564c';
g.beginPath();
g.moveTo(-0.55, 0.3);
g.quadraticCurveTo(-0.4, -3.5, -0.35, -6.5);
g.lineTo(0.35, -6.6);
g.quadraticCurveTo(0.45, -3.5, 0.6, 0.3);
g.closePath();
g.fill();
g.strokeStyle = 'rgba(40,36,30,0.4)';
g.lineWidth = 0.04;
for (let i = 0; i < 10; i++) {
  const x = -0.45 + e.rnd() * 0.95;
  g.beginPath();
  g.moveTo(x, 0.2);
  g.quadraticCurveTo(x + (e.rnd() - 0.5) * 0.2, -3, x * 0.7, -6.4);
  g.stroke();
}
g.strokeStyle = '#5e564c';
g.lineCap = 'round';
for (const [x1, y1, x2, y2, w] of [[0, -6, -5, -8.2, 0.3], [-2.6, -7.3, -7.5, -8.0, 0.14], [0, -6.3, -2.2, -11, 0.24], [0.2, -6.3, 2.4, -10.5, 0.22]]) {
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(x1, y1);
  g.quadraticCurveTo((x1 + x2) / 2, y2 - 0.6, x2, y2);
  g.stroke();
}
e.layer('crown', { pivot: [-1, -6.5], wind: { strength: 0.12, gust: 0.5 }, box: [-10, -16, 5, -5] }, c => {
  e.lib.crown(c, e.rnd, 'lime', -3.4, -10.4, 5.6, 3.6, 260, 0.45);
  e.lib.crown(c, e.rnd, 'lime', 0.6, -12.2, 3.8, 3.0, 140, 0.45);
});
