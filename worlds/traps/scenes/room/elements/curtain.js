// The heavy curtain of the window: dark green wool on a wooden pole, drawn aside to the right of the window and
// hanging straight in deep folds to the floor; its fellow, a narrow strip, on the left.
const fold = (x0, x1, n) => {
  g.fillStyle = '#4c6a54';
  g.fillRect(x0, -2.38, x1 - x0, 2.38);
  for (let k = 0; k < n; k++) {
    const x = x0 + ((x1 - x0) * (k + 0.5)) / n;
    const w = (x1 - x0) / n;
    g.fillStyle = 'rgba(20, 30, 24, 0.45)';
    g.fillRect(x + w * 0.18, -2.38, w * 0.22, 2.38);
    g.fillStyle = 'rgba(110, 140, 112, 0.25)';
    g.fillRect(x - w * 0.3, -2.38, w * 0.14, 2.38);
  }
  g.fillStyle = '#3a5040';
  g.fillRect(x0, -0.05, x1 - x0, 0.05);
};
fold(-0.72, -0.5, 2);
fold(0.45, 0.85, 4);
g.fillStyle = '#5e4630';
g.fillRect(-0.8, -2.46, 1.7, 0.05);
for (const x of [-0.8, 0.9]) {
  g.beginPath();
  g.arc(x, -2.435, 0.035, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#c9a050';
for (let x = -0.7; x < 0.85; x += 0.08) {
  g.beginPath();
  g.arc(x, -2.4, 0.012, 0, Math.PI * 2);
  g.fill();
}
