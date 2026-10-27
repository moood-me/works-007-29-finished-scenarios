// On the railing's top by the steps, from the rail (metres): a candle in a glass jar (its flame the layer `flame`,
// its light `flame`) and the two wine glasses, a little red left in each.
const glass = (x, wine) => {
  g.strokeStyle = 'rgba(236,240,248,0.85)';
  g.lineWidth = 0.004;
  g.beginPath();
  g.ellipse(x, -0.002, 0.03, 0.006, 0, 0, Math.PI * 2);
  g.moveTo(x, -0.004);
  g.lineTo(x, -0.085);
  g.stroke();
  g.fillStyle = 'rgba(214,224,240,0.28)';
  g.beginPath();
  g.moveTo(x - 0.035, -0.18);
  g.quadraticCurveTo(x - 0.04, -0.1, x, -0.085);
  g.quadraticCurveTo(x + 0.04, -0.1, x + 0.035, -0.18);
  g.closePath();
  g.fill();
  g.stroke();
  g.fillStyle = '#6e1a26';
  g.beginPath();
  g.moveTo(x - 0.036, -0.1 - wine);
  g.quadraticCurveTo(x - 0.03, -0.09, x, -0.088);
  g.quadraticCurveTo(x + 0.03, -0.09, x + 0.036, -0.1 - wine);
  g.closePath();
  g.fill();
  g.fillStyle = 'rgba(255,255,255,0.7)';
  g.fillRect(x - 0.024, -0.165, 0.005, 0.04);
};
glass(0.02, 0.025);
glass(0.13, 0.012);
// the jar and its candle
g.fillStyle = '#efe7d2';
g.fillRect(-0.24, -0.075, 0.06, 0.075);
g.fillStyle = 'rgba(220,228,236,0.25)';
g.fillRect(-0.265, -0.14, 0.11, 0.14);
g.strokeStyle = 'rgba(236,240,248,0.7)';
g.lineWidth = 0.004;
g.strokeRect(-0.265, -0.14, 0.11, 0.14);
e.layer('flame', { pivot: [-0.21, -0.075], flicker: 0.3 }, c => {
  c.fillStyle = '#ffd88a';
  c.beginPath();
  c.moveTo(-0.21, -0.075);
  c.quadraticCurveTo(-0.226, -0.09, -0.21, -0.118);
  c.quadraticCurveTo(-0.194, -0.09, -0.21, -0.075);
  c.closePath();
  c.fill();
  e.light(-0.21, -0.092, 0.06, '#ffb868', 0.9, 'flame');
});
