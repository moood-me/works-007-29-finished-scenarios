// The daybed against the back wall — Laura's bed at night: a dark wooden frame with rolled ends, a faded chintz cover,
// two cushions and a folded afghan of many colours at its foot.
g.fillStyle = '#4c3324';
g.fillRect(-1.0, -0.42, 2.0, 0.3);
for (const x of [-0.96, 0.9]) g.fillRect(x, -0.14, 0.06, 0.14);
// the back
g.fillStyle = '#7d6a62';
g.beginPath();
g.moveTo(-0.95, -0.42);
g.lineTo(-0.95, -0.8);
g.quadraticCurveTo(0, -0.88, 0.95, -0.8);
g.lineTo(0.95, -0.42);
g.closePath();
g.fill();
// the seat, its chintz: small faded flowers
g.fillStyle = '#8f7a72';
g.fillRect(-0.98, -0.5, 1.96, 0.12);
for (let i = 0; i < 60; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(170,120,120,0.45)' : 'rgba(120,140,110,0.4)';
  g.beginPath();
  g.arc(-0.94 + e.rnd() * 1.88, -0.82 + e.rnd() * 0.42, 0.012, 0, Math.PI * 2);
  g.fill();
}
// the rolled ends
g.fillStyle = '#5a3d2b';
for (const s of [-1, 1]) {
  g.beginPath();
  g.ellipse(s * 0.97, -0.62, 0.07, 0.22, 0, 0, Math.PI * 2);
  g.fill();
}
// the cushions, propped against the back, and the afghan
const cushion = (x, w, col) => {
  g.fillStyle = col;
  g.beginPath();
  g.moveTo(x - w, -0.47);
  g.quadraticCurveTo(x - w - 0.03, -0.62, x - w + 0.02, -0.74);
  g.quadraticCurveTo(x, -0.79, x + w - 0.02, -0.74);
  g.quadraticCurveTo(x + w + 0.03, -0.62, x + w, -0.47);
  g.closePath();
  g.fill();
  g.strokeStyle = 'rgba(60,40,30,0.35)';
  g.lineWidth = 0.01;
  g.stroke();
};
cushion(-0.62, 0.2, '#b9a586');
cushion(-0.25, 0.17, '#8e7e93');
const stripes = ['#b0573f', '#d0a54c', '#5e7f6a', '#6a6a9a', '#b0573f'];
stripes.forEach((c, i) => {
  g.fillStyle = c;
  g.fillRect(0.45, -0.52 + i * 0.03, 0.45, 0.03);
});
