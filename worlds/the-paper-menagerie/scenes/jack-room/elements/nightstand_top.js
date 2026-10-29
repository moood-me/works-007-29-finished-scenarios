// The cupboard's top from above: cream paint, a library book lying on it (blue cloth), a glass ring.
g.fillStyle = '#efe8d6';
g.fillRect(-0.22, -0.15, 0.44, 0.3);
if (!e.state.packed) {
  g.fillStyle = '#3f5d8c';
  g.save();
  g.translate(0.06, 0.04);
  g.rotate(0.2);
  g.fillRect(-0.08, -0.06, 0.16, 0.12);
  g.restore();
  g.strokeStyle = 'rgba(160,150,130,0.4)';
  g.lineWidth = 0.004;
  g.beginPath();
  g.arc(-0.12, 0.06, 0.03, 0, Math.PI * 2);
  g.stroke();
}
