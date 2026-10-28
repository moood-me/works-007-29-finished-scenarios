// The low flat stone on the bank where Eurydice sits, its top 0.36 m over the grass, a grey boulder rounded by the
// water, a little moss on its foot. Its point seat — the top where she sits.
g.fillStyle = '#7c7a80';
g.beginPath();
g.moveTo(-0.62, 0.04);
g.bezierCurveTo(-0.66, -0.2, -0.5, -0.36, -0.2, -0.37);
g.lineTo(0.3, -0.36);
g.bezierCurveTo(0.55, -0.34, 0.66, -0.18, 0.6, 0.04);
g.closePath();
g.fill();
// its rounded top a little paler, its foot darker, moss
g.fillStyle = 'rgba(160,158,168,0.5)';
g.beginPath();
g.ellipse(-0.02, -0.33, 0.48, 0.035, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = 'rgba(48,46,54,0.45)';
g.fillRect(-0.62, -0.06, 1.22, 0.1);
g.fillStyle = '#3f5a4c';
for (let i = 0; i < 6; i++) {
  g.beginPath();
  g.ellipse(-0.5 + i * 0.2, -0.02, 0.09, 0.035, 0, 0, Math.PI * 2);
  g.fill();
}
e.at(0, -0.36, 'seat');
