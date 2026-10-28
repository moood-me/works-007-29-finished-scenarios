// The portieres across the arch to the dining room: a brass rod, and two panels of old wine-red velvet drawn back to
// either side and caught with a tasselled cord, the dining room's lamp seen between them.
g.fillStyle = '#9a7a44';
g.fillRect(-0.85, -2.36, 1.7, 0.035);
g.beginPath();
g.arc(-0.86, -2.343, 0.03, 0, Math.PI * 2);
g.arc(0.86, -2.343, 0.03, 0, Math.PI * 2);
g.fill();
for (const s of [-1, 1]) {
  g.save();
  g.scale(s, 1);
  // the panel: full at the rod, gathered in at the tie-back, falling in folds to the floor
  g.fillStyle = '#6c2c36';
  g.beginPath();
  g.moveTo(-0.82, -2.33);
  g.lineTo(-0.28, -2.33);
  g.bezierCurveTo(-0.34, -1.75, -0.6, -1.25, -0.66, -1.05);
  g.bezierCurveTo(-0.6, -0.7, -0.52, -0.3, -0.5, 0.0);
  g.lineTo(-0.82, 0.0);
  g.closePath();
  g.fill();
  // folds: darker and lighter streaks following the cloth
  for (let i = 0; i < 6; i++) {
    const t = i / 6;
    g.strokeStyle = i % 2 ? 'rgba(40,12,18,0.45)' : 'rgba(150,72,82,0.35)';
    g.lineWidth = 0.025;
    g.beginPath();
    g.moveTo(-0.8 + t * 0.5, -2.32);
    g.bezierCurveTo(-0.78 + t * 0.4, -1.7, -0.72 + t * 0.07, -1.25, -0.72 + t * 0.07, -1.05);
    g.bezierCurveTo(-0.74 + t * 0.06, -0.7, -0.79 + t * 0.28, -0.3, -0.8 + t * 0.3, 0.0);
    g.stroke();
  }
  // the cord and its tassel
  g.fillStyle = '#c29a52';
  g.fillRect(-0.74, -1.08, 0.1, 0.025);
  g.beginPath();
  g.moveTo(-0.66, -1.06);
  g.lineTo(-0.69, -0.9);
  g.lineTo(-0.63, -0.9);
  g.closePath();
  g.fill();
  g.restore();
}
