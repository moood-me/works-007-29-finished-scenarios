// The door's leaf, hinged at its right edge (x 0) and swung open into the shed: ledged boards, a Z brace, an iron
// latch, painted from the hinge leftward (x −1.6…0).
g.save();
g.beginPath();
g.rect(-1.58, -2.28, 1.56, 2.26);
g.clip();
e.lib.planks(g, e, -1.58, -2.28, -0.02, -0.02, true, ['#7b6a56', '#736250', '#84725d']);
g.restore();
g.fillStyle = '#5c4a39';
g.fillRect(-1.58, -2.0, 1.56, 0.13);
g.fillRect(-1.58, -0.45, 1.56, 0.13);
g.save();
g.beginPath();
g.moveTo(-1.5, -0.45);
g.lineTo(-1.36, -0.45);
g.lineTo(-0.12, -1.87);
g.lineTo(-0.26, -1.87);
g.closePath();
g.fill();
g.restore();
g.fillStyle = '#2f2a26';
g.fillRect(-1.5, -1.12, 0.16, 0.035);
g.beginPath();
g.arc(-1.42, -1.1, 0.03, 0, Math.PI * 2);
g.fill();
