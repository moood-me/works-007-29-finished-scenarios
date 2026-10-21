// On the wall by the window: the fog horn's iron lever — a heavy arm hanging from its pivot plate, a worn wooden grip
// at its end (the point `handle`), the pull-rod going up through the ceiling to the horn — and, pinned to the left of
// it, McDunn's list of the winter stores in pencil (the point `list`), a pencil on a string.
// the pull-rod up to the ceiling
g.fillStyle = '#323133';
g.fillRect(0.135, -2.92, 0.03, 1.0);
// the pivot plate, bolted
g.fillStyle = '#2b2a2c';
g.fillRect(0.06, -2.02, 0.18, 0.16);
g.fillStyle = '#4a484a';
for (const [x, y] of [[0.085, -1.995], [0.215, -1.995], [0.085, -1.885], [0.215, -1.885]]) {
  g.beginPath();
  g.arc(x, y, 0.012, 0, Math.PI * 2);
  g.fill();
}
// the arm, hanging, a little thicker at the pivot
g.fillStyle = '#29282a';
g.beginPath();
g.moveTo(0.125, -1.94);
g.lineTo(0.175, -1.94);
g.lineTo(0.165, -1.32);
g.lineTo(0.135, -1.32);
g.closePath();
g.fill();
// the wooden grip, worn pale where the hand goes
g.fillStyle = '#7a5a3c';
g.fillRect(0.118, -1.34, 0.064, 0.17);
g.fillStyle = '#9b7a56';
g.fillRect(0.13, -1.31, 0.02, 0.11);
e.at(0.15, -1.26, 'handle');
// the list: a sheet of paper on a nail, pencil lines and figures
g.save();
g.translate(-0.27, -1.56);
g.rotate(-0.04);
g.fillStyle = '#e8e0cc';
g.fillRect(-0.14, -0.19, 0.28, 0.38);
g.fillStyle = '#d6cdb6';
g.fillRect(-0.14, 0.15, 0.28, 0.04);
g.fillStyle = '#7d776c';
for (let i = 0; i < 8; i++) {
  const w = 0.08 + e.rnd() * 0.1;
  g.fillRect(-0.11, -0.14 + i * 0.038, w, 0.006);
  g.fillRect(0.06, -0.14 + i * 0.038, 0.03, 0.006);
}
g.restore();
g.fillStyle = '#3a3836';
g.beginPath();
g.arc(-0.27, -1.74, 0.01, 0, Math.PI * 2);
g.fill();
// the pencil hanging on its string
g.strokeStyle = '#8c8170';
g.lineWidth = 0.005;
g.beginPath();
g.moveTo(-0.27, -1.74);
g.quadraticCurveTo(-0.08, -1.55, -0.1, -1.3);
g.stroke();
g.fillStyle = '#8a6a3a';
g.fillRect(-0.108, -1.3, 0.016, 0.11);
e.at(-0.27, -1.56, 'list');
