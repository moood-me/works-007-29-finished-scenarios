// The saplings waiting on the grass, from above (1.9 m across, 1.1 deep; y toward us): three young trees laid side
// by side, their roots balled in sacking, thin stems, a few leaves.
const lay = (x0, y0, len, a) => {
  const c = Math.cos(a);
  const s = Math.sin(a);
  // the root ball in sacking
  g.fillStyle = '#a99a78';
  g.beginPath();
  g.ellipse(x0, y0, 0.16, 0.14, a, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = 'rgba(120,104,76,0.8)';
  g.lineWidth = 0.012;
  g.beginPath();
  g.ellipse(x0, y0, 0.16, 0.05, a + 1.2, 0, Math.PI * 2);
  g.stroke();
  // the stem
  g.strokeStyle = '#6d5c48';
  g.lineWidth = 0.025;
  g.beginPath();
  g.moveTo(x0 + c * 0.14, y0 + s * 0.14);
  g.lineTo(x0 + c * len, y0 + s * len);
  g.stroke();
  // twigs and leaves along its top half
  for (let i = 0; i < 6; i++) {
    const u = 0.5 + i * 0.09;
    const x = x0 + c * len * u;
    const y = y0 + s * len * u;
    const side = i % 2 ? 1 : -1;
    const tx = x + (c * 0.5 - s * side) * 0.18;
    const ty = y + (s * 0.5 + c * side) * 0.18;
    g.lineWidth = 0.012;
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(tx, ty);
    g.stroke();
    g.fillStyle = i % 3 ? '#7f9b56' : '#93a862';
    g.beginPath();
    e.lib.leafPath(g, tx, ty, 0.1, a + side * 0.9);
    e.lib.leafPath(g, tx, ty, 0.09, a + side * 0.3);
    g.fill();
  }
};
lay(-0.75, -0.25, 1.4, 0.12);
lay(-0.7, 0.05, 1.3, 0.02);
lay(-0.6, 0.32, 1.25, -0.1);
