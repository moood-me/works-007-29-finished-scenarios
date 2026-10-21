// The back window's frame, over the opening cut in the wall (x −0.43…0.43, 0.85…1.95 m up): a cream architrave, two
// casement leaves of three panes each, a curtain rod and two muslin curtains drawn aside (see-through)
const INK = e.lib.INK, cream = '#efe7d6';
g.fillStyle = cream;
g.beginPath();
g.rect(-0.53, -2.05, 1.06, 1.24);
g.rect(-0.43, -1.95, 0.86, 1.1);
g.fill('evenodd');
g.strokeStyle = INK;
g.lineWidth = 0.01;
g.strokeRect(-0.53, -2.05, 1.06, 1.24);
g.strokeRect(-0.43, -1.95, 0.86, 1.1);
// (the leaves: their frames, the glazing bars)
g.fillStyle = cream;
for (const x of [-0.43, 0]) {
  g.beginPath();
  g.rect(x, -1.95, 0.43, 1.1);
  g.rect(x + 0.035, -1.915, 0.36, 1.03);
  g.fill('evenodd');
  g.fillRect(x + 0.035, -1.58, 0.36, 0.025);
  g.fillRect(x + 0.035, -1.235, 0.36, 0.025);
}
g.beginPath();
for (const x of [-0.43, 0]) {
  g.rect(x, -1.95, 0.43, 1.1);
  g.rect(x + 0.035, -1.915, 0.36, 1.03);
}
g.lineWidth = 0.006;
g.stroke();
// (the rod and the muslin)
g.fillStyle = '#8a6a4c';
g.fillRect(-0.62, -2.11, 1.24, 0.022);
g.fillStyle = 'rgba(250,247,240,0.62)';
for (const s of [-1, 1]) {
  g.beginPath();
  g.moveTo(s * 0.6, -2.09);
  g.lineTo(s * 0.3, -2.09);
  g.quadraticCurveTo(s * 0.36, -1.5, s * 0.47, -1.25);
  g.lineTo(s * 0.5, -0.82);
  g.lineTo(s * 0.6, -0.82);
  g.closePath();
  g.fill();
}
g.beginPath();
for (const s of [-1, 1]) for (const k of [0.38, 0.45, 0.52]) {
  g.moveTo(s * k, -2.08);
  g.quadraticCurveTo(s * (k + 0.03), -1.5, s * (k + 0.05), -0.84);
}
g.strokeStyle = 'rgba(160,150,140,0.35)';
g.lineWidth = 0.006;
g.stroke();
