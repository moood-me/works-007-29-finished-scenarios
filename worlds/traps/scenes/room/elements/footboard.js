// The bed's foot: a low walnut board between two turned posts with brass knobs.
const W = 0.47;
g.fillStyle = '#4a3226';
g.fillRect(-W, -0.72, W * 2, 0.5);
g.fillRect(-W, -0.78, 0.07, 0.78);
g.fillRect(W - 0.07, -0.78, 0.07, 0.78);
g.strokeStyle = '#3a271d';
g.lineWidth = 0.02;
g.strokeRect(-W + 0.12, -0.66, W * 2 - 0.24, 0.36);
g.fillStyle = '#c9a050';
for (const x of [-W + 0.035, W - 0.035]) {
  g.beginPath();
  g.arc(x, -0.81, 0.04, 0, Math.PI * 2);
  g.fill();
}
