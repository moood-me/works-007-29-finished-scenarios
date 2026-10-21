// Cow parsley at the lawn's edge: tall stems, each with a flat lace head of cream flowers; it sways about its foot
// (copies along the foreground)
const r = e.lib.rand(79);
e.layer('stems', { wind: { strength: 0.08, gust: 0.5, scale: 2 }, pivot: [0, 0.02] }, g2 => {
  const stems = new Path2D(), lace = new Path2D(), leaves = new Path2D();
  for (let i = 0; i < 4; i++) {
    const x = (r() - 0.5) * 0.35, h = 0.55 + 0.3 * r(), lean = (r() - 0.5) * 0.12, tx = x + lean, ty = -h;
    stems.moveTo(x, 0.02);
    stems.quadraticCurveTo(x + lean * 0.3, -h * 0.5, tx, ty);
    for (let k = 0; k < 7; k++) {
      const a = Math.PI * (1.15 + 0.7 * (k / 6)), ex = tx + Math.cos(a) * 0.09, ey = ty + Math.sin(a) * 0.035 - 0.02;
      stems.moveTo(tx, ty);
      stems.lineTo(ex, ey);
      for (let j = 0; j < 5; j++) {
        const fx = ex + (r() - 0.5) * 0.04, fy = ey - r() * 0.02;
        lace.moveTo(fx + 0.008, fy);
        lace.arc(fx, fy, 0.008, 0, Math.PI * 2);
      }
    }
    leaves.moveTo(x, -h * 0.25);
    leaves.ellipse(x + 0.05, -h * 0.25, 0.07, 0.025, -0.4, 0, Math.PI * 2);
  }
  g2.strokeStyle = '#6f8650';
  g2.lineWidth = 0.005;
  g2.lineCap = 'round';
  g2.stroke(stems);
  g2.fillStyle = '#738d55';
  g2.fill(leaves);
  g2.fillStyle = '#f4eedb';
  g2.fill(lace);
});
