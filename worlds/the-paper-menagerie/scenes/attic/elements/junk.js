// By the gable, what a family puts up in the attic: a standing lamp with no shade, a child's wooden sled leaning on
// the knee wall, a rolled rug lying along the floor.
g.fillStyle = '#6e5a46';
g.fillRect(-0.62, -0.03, 0.3, 0.03);
g.fillRect(-0.48, -1.5, 0.025, 1.47);
g.fillStyle = '#c9b48a';
g.fillRect(-0.51, -1.56, 0.08, 0.07);
g.fillStyle = '#a6713f';
g.save();
g.translate(0.05, 0);
g.rotate(-0.45);
g.fillRect(0, -0.9, 0.08, 0.9);
g.fillRect(0.3, -0.9, 0.08, 0.9);
for (let y = -0.85; y < -0.05; y += 0.14) g.fillRect(0, y, 0.38, 0.06);
g.fillStyle = '#5a5a60';
g.fillRect(-0.03, -0.9, 0.025, 0.9);
g.fillRect(0.38, -0.9, 0.025, 0.9);
g.restore();
g.fillStyle = '#8c4a3a';
g.fillRect(-0.3, -0.18, 1.1, 0.18);
g.fillStyle = '#c9a46a';
for (let x = -0.25; x < 0.8; x += 0.12) g.fillRect(x, -0.18, 0.03, 0.18);
g.fillStyle = '#6e3a2e';
g.beginPath();
g.ellipse(0.8, -0.09, 0.03, 0.09, 0, 0, Math.PI * 2);
g.fill();
e.lib.dust(g, -0.7, -1.6, 1.6, 1.61, 0.3);
