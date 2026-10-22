// The rug from above (3.6 m by 2.4 m): a deep red field, a dark blue border with a gold line, a medallion in the
// middle and small motifs round it, a fringe at the two short ends.
g.fillStyle = '#efe4cc';
for (let y = -1.18; y < 1.2; y += 0.035) {
  g.fillRect(-1.86, y, 0.07, 0.012);
  g.fillRect(1.79, y, 0.07, 0.012);
}
g.fillStyle = '#26324a';
g.fillRect(-1.8, -1.2, 3.6, 2.4);
g.fillStyle = '#c49a52';
g.fillRect(-1.6, -1.0, 3.2, 2.0);
g.fillStyle = '#8e2a26';
g.fillRect(-1.56, -0.96, 3.12, 1.92);
// the border's motifs
g.fillStyle = '#b38a4a';
for (let x = -1.65; x < 1.7; x += 0.2) {
  g.fillRect(x, -1.12, 0.08, 0.06);
  g.fillRect(x, 1.06, 0.08, 0.06);
}
for (let y = -0.9; y < 0.95; y += 0.2) {
  g.fillRect(-1.72, y, 0.06, 0.08);
  g.fillRect(1.66, y, 0.06, 0.08);
}
// the medallion
g.fillStyle = '#26324a';
g.beginPath();
g.moveTo(0, -0.62);
g.lineTo(0.9, 0);
g.lineTo(0, 0.62);
g.lineTo(-0.9, 0);
g.closePath();
g.fill();
g.fillStyle = '#c49a52';
g.beginPath();
g.moveTo(0, -0.34);
g.lineTo(0.48, 0);
g.lineTo(0, 0.34);
g.lineTo(-0.48, 0);
g.closePath();
g.fill();
g.fillStyle = '#8e2a26';
g.beginPath();
g.arc(0, 0, 0.14, 0, Math.PI * 2);
g.fill();
// small motifs scattered over the field
g.fillStyle = 'rgba(214,180,110,0.55)';
for (const [x, y] of [[-1.2, -0.6], [1.2, -0.6], [-1.2, 0.6], [1.2, 0.6], [-1.3, 0], [1.3, 0], [0, -0.8], [0, 0.8]]) {
  g.beginPath();
  g.arc(x, y, 0.06, 0, Math.PI * 2);
  g.fill();
}
