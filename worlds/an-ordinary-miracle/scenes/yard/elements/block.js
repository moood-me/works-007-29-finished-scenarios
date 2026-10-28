// The chopping block: a broad stump with the axe stuck in its top, a few split logs at its foot.
g.fillStyle = '#6e4c33';
g.fillRect(-0.24, -0.46, 0.48, 0.46);
g.fillStyle = '#8a6444';
g.fillRect(-0.24, -0.46, 0.12, 0.46);
g.fillStyle = '#d9b781';
g.beginPath();
g.ellipse(0, -0.46, 0.24, 0.05, 0, 0, Math.PI * 2);
g.fill();
// the axe: its head bitten into the top, the handle slanting up to the right
g.save();
g.translate(-0.02, -0.5);
g.rotate(-0.85);
g.fillStyle = '#8b6b45';
g.fillRect(0, -0.025, 0.62, 0.05);
g.restore();
g.fillStyle = '#5d5f66';
g.beginPath();
g.moveTo(-0.12, -0.46);
g.lineTo(0.06, -0.46);
g.lineTo(0.04, -0.56);
g.lineTo(-0.1, -0.6);
g.closePath();
g.fill();
// split logs at its foot
for (const [x, a] of [[-0.42, 0.2], [0.38, -0.3], [0.5, 0.1]]) {
  g.save();
  g.translate(x, -0.05);
  g.rotate(a);
  g.fillStyle = '#d6b47c';
  g.fillRect(-0.16, -0.05, 0.32, 0.08);
  g.fillStyle = '#6e4c33';
  g.fillRect(-0.16, -0.05, 0.32, 0.025);
  g.restore();
}
