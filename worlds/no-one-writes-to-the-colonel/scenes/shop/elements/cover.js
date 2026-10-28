// Agustín's machine under its cover (metres from the table top): a cover of grey-white drill sewn to the machine's
// shape, its seams and a darn, hanging over the bed and a little down the table's back; a dust line where it is
// lifted every Friday.
g.fillStyle = '#cfc9ba';
g.beginPath();
g.moveTo(-0.36, 0.05);
g.lineTo(-0.35, -0.3);
g.quadraticCurveTo(-0.34, -0.43, -0.2, -0.43);
g.lineTo(0.2, -0.42);
g.quadraticCurveTo(0.33, -0.41, 0.33, -0.3);
g.lineTo(0.34, -0.17);
g.lineTo(0.37, 0.05);
g.closePath();
g.fill();
// the folds hanging
g.strokeStyle = 'rgba(120,112,98,0.45)';
g.lineWidth = 0.012;
for (const [x0, x1] of [[-0.22, -0.26], [-0.05, -0.07], [0.12, 0.15], [0.26, 0.3]]) {
  g.beginPath();
  g.moveTo(x0, -0.36);
  g.quadraticCurveTo((x0 + x1) / 2 + 0.02, -0.15, x1, 0.04);
  g.stroke();
}
g.fillStyle = 'rgba(255,255,255,0.22)';
g.beginPath();
g.ellipse(-0.1, -0.38, 0.18, 0.03, -0.05, 0, Math.PI * 2);
g.fill();
// the seam over the top and a darn
g.strokeStyle = 'rgba(100,92,80,0.6)';
g.lineWidth = 0.004;
g.setLineDash([0.012, 0.008]);
g.beginPath();
g.moveTo(-0.34, -0.31);
g.quadraticCurveTo(-0.33, -0.42, -0.2, -0.42);
g.lineTo(0.2, -0.41);
g.stroke();
g.setLineDash([]);
g.strokeStyle = 'rgba(80,72,62,0.6)';
for (let i = 0; i < 6; i++) {
  g.beginPath();
  g.moveTo(0.05 + i * 0.012, -0.25);
  g.lineTo(0.05 + i * 0.012, -0.2);
  g.stroke();
}
e.at(0, -0.3, 'cover');
