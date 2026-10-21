// The gate's leaf, open into the yard: planks with a Z-brace, hinged on its right (on the post at the gap's right
// end), its free edge turned toward the viewer; a post on either side of the gap is the fence's last stake.
const W = 1.55, H = 1.35;
for (let i = 0; i < 6; i++) {
  const x = -W + (i * W) / 6;
  g.fillStyle = ['#9c7a52', '#8f6f4a', '#a7845a'][i % 3];
  g.fillRect(x + 0.01, -H + 0.04 * (i % 2), W / 6 - 0.02, H - 0.08 - 0.04 * (i % 2));
}
g.fillStyle = '#6e5236';
g.fillRect(-W, -H * 0.82, W, 0.1);
g.fillRect(-W, -H * 0.24, W, 0.1);
g.save();
g.translate(-W, -H * 0.24);
g.rotate(-Math.atan2(H * 0.58, W));
g.fillRect(0, -0.05, Math.hypot(W, H * 0.58), 0.1);
g.restore();
