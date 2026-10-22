// A jam jar of water on the bench with three daffodils in it, brought in from the lawn — the one warm yellow of the
// room. Metres from its foot.
g.fillStyle = 'rgba(205,225,230,0.55)';
g.fillRect(-0.045, -0.12, 0.09, 0.12);
g.fillStyle = 'rgba(170,200,205,0.5)';
g.fillRect(-0.045, -0.08, 0.09, 0.08);
g.strokeStyle = '#6f9a4a';
g.lineWidth = 0.007;
const heads = [[-0.08, -0.34], [0.02, -0.4], [0.09, -0.3]];
g.beginPath();
for (const [x, y] of heads) {
  g.moveTo(x * 0.3, -0.02);
  g.quadraticCurveTo(x * 0.6, -0.2, x, y);
}
g.stroke();
g.fillStyle = '#5f8c40';
g.beginPath();
g.ellipse(-0.05, -0.2, 0.008, 0.07, -0.3, 0, Math.PI * 2);
g.ellipse(0.05, -0.18, 0.008, 0.06, 0.3, 0, Math.PI * 2);
g.fill();
for (const [x, y] of heads) {
  g.fillStyle = '#f4d65a';
  for (let k = 0; k < 6; k++) {
    const a = (k / 6) * Math.PI * 2;
    g.beginPath();
    g.ellipse(x + Math.cos(a) * 0.02, y + Math.sin(a) * 0.02, 0.018, 0.01, a, 0, Math.PI * 2);
    g.fill();
  }
  g.fillStyle = '#eba23a';
  g.beginPath();
  g.arc(x, y, 0.013, 0, Math.PI * 2);
  g.fill();
}
e.at(0, -0.34, 'flowers');
