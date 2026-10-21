// The armchair's front: the seat's front rail with a short fringe, the two arms' wooden scrolls going down into
// short turned legs
const INK = e.lib.INK;
e.lib.box(g, -0.36, -0.44, 0.72, 0.13, '#8c5e5c', 0.008);
g.beginPath();
for (let x = -0.34; x < 0.35; x += 0.02) {
  g.moveTo(x, -0.31);
  g.lineTo(x, -0.27);
}
g.strokeStyle = '#b48a56';
g.lineWidth = 0.006;
g.stroke();
for (const s of [-1, 1]) {
  const x = s * 0.4;
  g.fillStyle = '#6b4a36';
  g.fillRect(x - 0.04, -0.66, 0.08, 0.54);
  g.beginPath();
  g.arc(x, -0.66, 0.05, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = INK;
  g.lineWidth = 0.008;
  g.stroke();
  g.strokeRect(x - 0.04, -0.66, 0.08, 0.54);
  g.fillRect(x - 0.025, -0.12, 0.05, 0.12);
}
// (the shade under the seat's rail, hatched)
e.lib.hatch(g, -0.36, -0.27, 0.72, 0.15, 0.025, 0.25, 0.004);
