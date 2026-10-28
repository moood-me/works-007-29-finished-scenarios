// A potted palm (two of them, `copies`): a blue-and-white porcelain jardinière on a low stand, fronds arching out of
// it. Metres, the foot at the floor.
g.fillStyle = '#3d2a1e';
g.fillRect(-0.24, -0.3, 0.48, 0.05);
for (const x of [-0.2, 0.17]) g.fillRect(x, -0.25, 0.03, 0.25);
g.fillStyle = '#e9e8e2';
g.beginPath();
g.moveTo(-0.26, -0.75);
g.lineTo(0.26, -0.75);
g.quadraticCurveTo(0.3, -0.45, 0.17, -0.3);
g.lineTo(-0.17, -0.3);
g.quadraticCurveTo(-0.3, -0.45, -0.26, -0.75);
g.closePath();
g.fill();
g.fillStyle = '#3d5d93';
g.fillRect(-0.27, -0.75, 0.54, 0.05);
g.fillRect(-0.2, -0.36, 0.4, 0.03);
for (let i = 0; i < 4; i++) {
  g.beginPath();
  g.arc(-0.15 + i * 0.1, -0.55, 0.035, 0, Math.PI * 2);
  g.fill();
}
// the fronds: a stalk arching out, leaflets down both sides
const fronds = [[-0.85, -1.15], [-0.6, -1.75], [-0.2, -2.2], [0.25, -2.25], [0.65, -1.8], [0.88, -1.2], [0.1, -1.6]];
for (const [tx, ty] of fronds) {
  const cx = tx * 0.35;
  const cy = ty - 0.35;
  g.strokeStyle = '#4f6a36';
  g.lineWidth = 0.02;
  g.beginPath();
  g.moveTo(0, -0.75);
  g.quadraticCurveTo(cx, cy, tx, ty);
  g.stroke();
  for (let k = 2; k < 10; k++) {
    const u = k / 10;
    const px = 2 * (1 - u) * u * cx + u * u * tx;
    const py = (1 - u) * (1 - u) * -0.75 + 2 * (1 - u) * u * cy + u * u * ty;
    const len = 0.22 * (1 - u * 0.6);
    g.fillStyle = k % 2 ? '#5c7d3c' : '#4c6b32';
    for (const s of [-1, 1]) {
      g.beginPath();
      g.ellipse(px + s * len * 0.4, py + len * 0.35, len * 0.5, 0.02, s * 0.9, 0, Math.PI * 2);
      g.fill();
    }
  }
}
