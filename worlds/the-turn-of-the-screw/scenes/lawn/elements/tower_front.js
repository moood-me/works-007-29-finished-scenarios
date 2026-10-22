// The old tower's face toward the lawn: square, older than the house, of grey rubble stone weathered dark under its
// string courses; narrow pointed windows one over another, two at the top; a low pointed door at its foot; ivy up its
// left side; battlements against the sky (metres: x across from its middle, y up from its foot).
const L = e.lib;
L.stone(g, e.rnd, -3.1, 3.1, -21.5);
L.battlements(g, -3.1, 3.1, -21.5);
L.lancet(g, 0, -3.6, 0.42, 1.5);
L.lancet(g, 0, -9.8, 0.42, 1.7);
L.lancet(g, -0.62, -16.2, 0.4, 1.9);
L.lancet(g, 0.62, -16.2, 0.4, 1.9);
// the door: a pointed arch of dressed stone, old boards
g.fillStyle = '#bdb6a3';
g.beginPath();
g.moveTo(-0.85, 0);
g.lineTo(-0.85, -2.0);
g.quadraticCurveTo(-0.85, -2.75, 0, -2.95);
g.quadraticCurveTo(0.85, -2.75, 0.85, -2.0);
g.lineTo(0.85, 0);
g.fill();
g.fillStyle = '#4a3b2d';
g.beginPath();
g.moveTo(-0.62, 0);
g.lineTo(-0.62, -1.95);
g.quadraticCurveTo(-0.62, -2.5, 0, -2.68);
g.quadraticCurveTo(0.62, -2.5, 0.62, -1.95);
g.lineTo(0.62, 0);
g.fill();
g.strokeStyle = 'rgba(30,22,16,0.5)';
g.lineWidth = 0.025;
g.beginPath();
for (let x = -0.42; x < 0.6; x += 0.21) {
  g.moveTo(x, 0);
  g.lineTo(x, -2.5);
}
g.stroke();
// the ivy: thick at the foot on the left, thinning as it climbs
for (let i = 0; i < 300; i++) {
  const t = Math.pow(e.rnd(), 0.8);
  const x = -3.1 + e.rnd() * (1 - t) * 3.2;
  const y = -t * 12.5;
  g.fillStyle = ['#3d5532', '#4b6639', '#33492b', '#587542'][Math.floor(e.rnd() * 4)];
  g.beginPath();
  g.ellipse(x, y, 0.2 + e.rnd() * 0.3, 0.15 + e.rnd() * 0.22, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
e.at(0, -21.5, 'top');
