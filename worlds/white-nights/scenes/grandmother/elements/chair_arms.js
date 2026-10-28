// The armchair's arms, each from its side (x −0.28 at the front … 0.28 at the back; the right one a flipped copy):
// the upholstered side, the arm rolled over at the top with its wooden front scroll, a leg
const INK = e.lib.INK;
g.fillStyle = '#8c5e5c';
g.beginPath();
g.moveTo(-0.27, -0.12);
g.lineTo(-0.27, -0.62);
g.quadraticCurveTo(-0.27, -0.69, -0.2, -0.69);
g.lineTo(0.28, -0.69);
g.lineTo(0.28, -0.12);
g.closePath();
g.fill();
g.strokeStyle = INK;
g.lineWidth = 0.008;
g.stroke();
g.fillStyle = '#5e4130';
g.fillRect(-0.28, -0.14, 0.56, 0.04);
g.fillRect(-0.27, -0.1, 0.04, 0.1);
g.fillRect(0.23, -0.1, 0.04, 0.1);
// (the arm's side in its shade: the ink's hatching low down)
e.lib.hatch(g, -0.27, -0.4, 0.55, 0.26, 0.025, 0.22, 0.004);
