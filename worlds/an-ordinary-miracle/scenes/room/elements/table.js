// The long table's top seen from above (2.6 × 0.9 m, 0.78 m up): scrubbed planks laid along it, a linen runner down
// the middle with red cross-stitched ends, a few crumbs and a ring left by a mug.
const L = e.lib;
for (let i = 0, y = -0.45; y < 0.45; i++, y += 0.18) {
  g.fillStyle = ['#c49260', '#b98753', '#cc9c69'][i % 5 % 3];
  g.fillRect(-1.3, y, 2.6, 0.18);
  g.fillStyle = '#7a5434';
  g.fillRect(-1.3, y, 2.6, 0.012);
}
L.dabs(g, 151, -1.3, -0.45, 2.6, 0.9, ['#d8aa78', '#a87848'], 50, 0.08, 0.4, 0.35);
g.fillStyle = '#f1ebdc';
g.fillRect(-1.18, -0.17, 2.36, 0.34);
g.fillStyle = '#b5342e';
for (const x0 of [-1.13, 0.91]) {
  for (let r = 0; r < 2; r++) {
    for (let i = 0; i < 6; i++) {
      const cx = x0 + 0.02 + r * 0.1 + 0.02, cy = -0.13 + i * 0.052;
      g.beginPath();
      g.moveTo(cx - 0.02, cy);
      g.lineTo(cx, cy - 0.02);
      g.lineTo(cx + 0.02, cy);
      g.lineTo(cx, cy + 0.02);
      g.fill();
    }
  }
}
g.strokeStyle = 'rgba(110, 70, 40, 0.35)';
g.lineWidth = 0.01;
g.beginPath();
g.arc(0.55, 0.3, 0.05, 0, Math.PI * 2);
g.stroke();
