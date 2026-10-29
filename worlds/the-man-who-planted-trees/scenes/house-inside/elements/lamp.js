// The oil lamp on the table: a brass foot and font, the glass chimney with the flame in it — its light `flame` (the
// scene's `lamp`, as much as `lamp`: animate)
g.fillStyle = '#9a7a3a';
g.beginPath();
g.ellipse(0, -0.012, 0.075, 0.014, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(-0.018, -0.12, 0.036, 0.11);
g.beginPath();
g.ellipse(0, -0.15, 0.065, 0.045, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#7a5e2a';
g.fillRect(-0.04, -0.2, 0.08, 0.03);
e.layer('glass', {}, (g) => {
  const glass = g.createLinearGradient(0, -0.42, 0, -0.2);
  glass.addColorStop(0, 'rgba(255, 236, 190, 0.55)');
  glass.addColorStop(1, 'rgba(255, 214, 150, 0.85)');
  g.fillStyle = glass;
  g.beginPath();
  g.moveTo(-0.032, -0.2);
  g.quadraticCurveTo(-0.055, -0.26, -0.026, -0.3);
  g.lineTo(-0.022, -0.42);
  g.lineTo(0.022, -0.42);
  g.lineTo(0.026, -0.3);
  g.quadraticCurveTo(0.055, -0.26, 0.032, -0.2);
  g.closePath();
  g.fill();
  g.fillStyle = '#fff4d8';
  g.beginPath();
  g.ellipse(0, -0.25, 0.012, 0.03, 0, 0, Math.PI * 2);
  g.fill();
  e.light(0, -0.26, 0.09, '#ffd58e', 1.0, 'flame');
});
