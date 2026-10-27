// On the table by the lamp (metres from the table top): the pewter teapot of mint tea, and the three small glasses it
// was poured into — two drunk, one still with tea in it, amber.
// the teapot
g.fillStyle = '#9a9a96';
g.beginPath();
g.moveTo(-0.13, 0);
g.quadraticCurveTo(-0.18, -0.08, -0.12, -0.12);
g.lineTo(-0.06, -0.12);
g.quadraticCurveTo(0.0, -0.08, -0.05, 0);
g.closePath();
g.fill();
g.fillStyle = '#7e7e7a';
g.fillRect(-0.11, -0.16, 0.04, 0.04);
g.beginPath();
g.arc(-0.09, -0.17, 0.012, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#8a8a86';
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(-0.04, -0.06);
g.quadraticCurveTo(0.0, -0.08, 0.02, -0.14);
g.stroke();
g.beginPath();
g.moveTo(-0.16, -0.1);
g.quadraticCurveTo(-0.21, -0.06, -0.15, -0.03);
g.stroke();
// the glasses
for (const [x, full] of [[0.06, 0.6], [0.13, 0.0], [0.2, 0.0]]) {
  g.fillStyle = 'rgba(230,236,230,0.35)';
  g.beginPath();
  g.moveTo(x - 0.022, -0.085);
  g.lineTo(x + 0.022, -0.085);
  g.lineTo(x + 0.017, 0);
  g.lineTo(x - 0.017, 0);
  g.closePath();
  g.fill();
  if (full) {
    g.fillStyle = 'rgba(170,110,40,0.75)';
    g.beginPath();
    g.moveTo(x - 0.02, -0.085 * full);
    g.lineTo(x + 0.02, -0.085 * full);
    g.lineTo(x + 0.017, -0.004);
    g.lineTo(x - 0.017, -0.004);
    g.closePath();
    g.fill();
  }
  g.fillStyle = 'rgba(80,110,90,0.5)';
  g.fillRect(x - 0.018, -0.005, 0.036, 0.005);
}
