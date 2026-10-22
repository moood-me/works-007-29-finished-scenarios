// The low table's top seen from above (1 × 0.7 m; y toward the viewer): dark wood, the chessboard on it — its
// squares, the pieces' round tops where the game stands — and the reports beside it, rolled and flat, by the Khan's
// hand on the right
g.fillStyle = '#5a4434';
g.fillRect(-0.5, -0.35, 1, 0.7);
g.strokeStyle = '#3e2e23';
g.lineWidth = 0.02;
g.strokeRect(-0.49, -0.34, 0.98, 0.68);
const B = 0.46;
const s = B / 8;
const x0 = -0.42;
const y0 = -B / 2;
g.fillStyle = '#2f241d';
g.fillRect(x0 - 0.02, y0 - 0.02, B + 0.04, B + 0.04);
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    g.fillStyle = (i + j) % 2 ? '#3d2f25' : '#d6c7a8';
    g.fillRect(x0 + i * s, y0 + j * s, s, s);
  }
}
e.at(x0 + B / 2, 0, 'board');
// the reports: two rolls and a flat sheet with its lines, a weight on it
g.fillStyle = '#e4d8bd';
g.fillRect(0.12, -0.26, 0.3, 0.2);
g.strokeStyle = 'rgba(80, 60, 40, 0.5)';
g.lineWidth = 0.006;
for (let y = -0.23; y < -0.08; y += 0.025) {
  g.beginPath();
  g.moveTo(0.15, y);
  g.lineTo(0.39, y);
  g.stroke();
}
g.fillStyle = '#d9cba9';
g.fillRect(0.1, 0.02, 0.34, 0.06);
g.fillRect(0.14, 0.12, 0.3, 0.055);
g.fillStyle = '#b8a888';
g.fillRect(0.1, 0.02, 0.025, 0.06);
g.fillRect(0.14, 0.12, 0.025, 0.055);
g.fillStyle = '#5c5a58';
g.beginPath();
g.arc(0.3, -0.17, 0.03, 0, Math.PI * 2);
g.fill();
e.at(0.27, 0.0, 'reports');
