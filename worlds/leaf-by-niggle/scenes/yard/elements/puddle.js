// The puddle on the path before the shed, from above (1.4 × 0.8 m): still water in a few run-together blots,
// mirroring the sky and the shed; its muddy rim is the yard's.
g.fillStyle = '#6c6a62';
const blots = [[-0.25, 0.02, 0.36, 0.17], [0.18, -0.05, 0.3, 0.14], [0.42, 0.06, 0.16, 0.09], [-0.5, -0.06, 0.14, 0.08]];
for (const [x, y, rx, ry] of blots) {
  g.beginPath();
  g.ellipse(x, y, rx, ry, 0.45, 0, Math.PI * 2);
  g.fill();
}
