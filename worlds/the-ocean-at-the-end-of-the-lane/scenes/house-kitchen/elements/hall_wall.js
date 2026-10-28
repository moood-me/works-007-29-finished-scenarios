// The hall seen through the doorway (x -1.7...1.0 about its anchor at x -2.6): a deep red paper, the foot of the
// stairs on the left — the newel post, the first treads rising away to the left, the banister — a board of coat pegs
// with Ursula's pink coat on its peg, Dad's dark mackintosh beside it, and the telephone on its little shelf.
g.fillStyle = '#7b3b33';
g.fillRect(-1.7, -2.42, 2.7, 2.44);
g.fillStyle = 'rgba(150, 82, 64, 0.35)';
for (let y = -2.3, r = 0; y < 0; y += 0.22, r++) for (let x = -1.7 + (r % 2) * 0.11; x < 1.0; x += 0.22) {
  g.beginPath();
  g.ellipse(x, y, 0.035, 0.06, 0, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#e4ddc8';
g.fillRect(-1.7, -0.1, 2.7, 0.1);
// the stairs: a white string rising to the left, the treads' carpet, the banister and its spindles, the newel post
g.fillStyle = '#8c3a32';
g.beginPath();
g.moveTo(-0.45, 0);
for (let k = 0; k < 6; k++) {
  g.lineTo(-0.45 - k * 0.24, -k * 0.19);
  g.lineTo(-0.45 - k * 0.24, -(k + 1) * 0.19);
}
g.lineTo(-1.7, -1.14);
g.lineTo(-1.7, 0);
g.closePath();
g.fill();
g.fillStyle = '#ece6d4';
g.beginPath();
g.moveTo(-0.35, 0);
g.lineTo(-0.35, -0.24);
g.lineTo(-1.7, -1.82);
g.lineTo(-1.7, -1.57);
g.closePath();
g.fill();
g.strokeStyle = '#ece6d4';
g.lineWidth = 0.022;
for (let k = 0; k < 12; k++) {
  const x = -0.48 - k * 0.11;
  g.beginPath();
  g.moveTo(x, -0.28 - (k * 0.11) * 0.8);
  g.lineTo(x, -1.08 - (k * 0.11) * 0.8);
  g.stroke();
}
g.fillStyle = '#5b3a26';
g.beginPath();
g.moveTo(-0.38, -1.06);
g.lineTo(-1.7, -2.17);
g.lineTo(-1.7, -2.09);
g.lineTo(-0.38, -0.98);
g.closePath();
g.fill();
g.fillStyle = '#6a4630';
g.fillRect(-0.44, -1.06, 0.1, 1.06);
g.beginPath();
g.arc(-0.39, -1.12, 0.065, 0, Math.PI * 2);
g.fill();
// the board of pegs, Dad's mackintosh, Ursula's pink coat
g.fillStyle = '#5b3a26';
g.fillRect(-0.05, -1.78, 0.7, 0.05);
g.fillStyle = '#c9a24c';
for (const x of [0.05, 0.3, 0.55]) g.fillRect(x - 0.012, -1.74, 0.024, 0.05);
const coat = (x, top, len, w, colour, fold) => {
  g.fillStyle = colour;
  g.beginPath();
  g.moveTo(x - 0.04, top);
  g.bezierCurveTo(x - w * 0.6, top + 0.08, x - w * 0.55, top + len * 0.5, x - w * 0.62, top + len);
  g.lineTo(x + w * 0.62, top + len);
  g.bezierCurveTo(x + w * 0.55, top + len * 0.5, x + w * 0.6, top + 0.08, x + 0.04, top);
  g.closePath();
  g.fill();
  g.strokeStyle = fold;
  g.lineWidth = 0.012;
  for (const dx of [-0.3, 0, 0.3]) {
    g.beginPath();
    g.moveTo(x + dx * w * 0.3, top + 0.15);
    g.lineTo(x + dx * w * 0.9, top + len - 0.02);
    g.stroke();
  }
};
coat(0.55, -1.7, 1.05, 0.34, '#4e4a3e', 'rgba(30, 28, 22, 0.5)');
coat(0.3, -1.7, 0.95, 0.36, '#e4a0b0', 'rgba(170, 96, 116, 0.6)');
// her coat's collar and buttons
g.fillStyle = '#d58a9c';
g.beginPath();
g.moveTo(0.18, -1.66);
g.lineTo(0.3, -1.52);
g.lineTo(0.42, -1.66);
g.lineTo(0.3, -1.6);
g.closePath();
g.fill();
g.fillStyle = '#f4dbe0';
for (const y of [-1.45, -1.3, -1.15, -1.0]) {
  g.beginPath();
  g.arc(0.33, y, 0.012, 0, Math.PI * 2);
  g.fill();
}
// the telephone on its shelf: black, its dial a pale ring
g.fillStyle = '#5b3a26';
g.fillRect(0.72, -0.98, 0.26, 0.03);
g.fillStyle = '#1e1c1d';
g.beginPath();
g.moveTo(0.76, -0.98);
g.lineTo(0.79, -1.1);
g.lineTo(0.93, -1.1);
g.lineTo(0.96, -0.98);
g.closePath();
g.fill();
g.fillRect(0.76, -1.16, 0.2, 0.04);
g.fillStyle = '#d7d2c6';
g.beginPath();
g.arc(0.86, -1.04, 0.03, 0, Math.PI * 2);
g.fill();
