// The icon corner: a small icon on a shelf, set across the corner — the Mother of God on a gold ground in a dark
// frame — an embroidered towel draped over it, and before it on three chains the lampada, a cup of red glass with its
// little flame (point icon#flame: the scene's light "lampada" and the glow the engine draws)
const INK = e.lib.INK;
e.lib.box(g, -0.15, -2.45, 0.3, 0.36, '#4c3528', 0.01);
e.lib.box(g, -0.125, -2.425, 0.25, 0.31, '#cfa955', 0.008);
g.fillStyle = '#7a2f2a';
g.beginPath();
g.moveTo(-0.08, -2.12);
g.quadraticCurveTo(-0.085, -2.36, 0, -2.37);
g.quadraticCurveTo(0.085, -2.36, 0.08, -2.12);
g.closePath();
g.fill();
g.fillStyle = '#d9b48f';
g.beginPath();
g.ellipse(0, -2.3, 0.025, 0.032, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#2f4a5a';
g.beginPath();
g.ellipse(0.03, -2.18, 0.022, 0.03, 0, 0, Math.PI * 2);
g.fill();
// (the towel: white linen with red embroidered ends hanging down either side)
g.fillStyle = '#f3eee4';
g.beginPath();
g.moveTo(-0.2, -2.47);
g.quadraticCurveTo(0, -2.53, 0.2, -2.47);
g.lineTo(0.22, -2.0);
g.lineTo(0.15, -2.0);
g.lineTo(0.15, -2.42);
g.quadraticCurveTo(0, -2.46, -0.15, -2.42);
g.lineTo(-0.15, -2.0);
g.lineTo(-0.22, -2.0);
g.closePath();
g.fill();
g.strokeStyle = 'rgba(74,63,58,0.6)';
g.lineWidth = 0.006;
g.stroke();
g.fillStyle = '#b8403a';
for (const x of [-0.22, 0.15]) {
  g.fillRect(x, -2.1, 0.07, 0.025);
  g.fillRect(x, -2.06, 0.07, 0.012);
}
e.lib.box(g, -0.2, -2.09, 0.4, 0.025, '#5b4232', 0.006);
// (the lampada: three chains down to a cup of red glass)
g.beginPath();
for (const x of [-0.035, 0, 0.035]) {
  g.moveTo(0, -2.07);
  g.lineTo(x, -1.9);
}
g.strokeStyle = '#a28a52';
g.lineWidth = 0.004;
g.stroke();
g.fillStyle = '#b8323a';
g.beginPath();
g.moveTo(-0.04, -1.9);
g.lineTo(0.04, -1.9);
g.quadraticCurveTo(0.04, -1.83, 0, -1.82);
g.quadraticCurveTo(-0.04, -1.83, -0.04, -1.9);
g.fill();
g.strokeStyle = INK;
g.stroke();
e.light(0, -1.9, 0.05, '#ff8a52', 1, 'flame');
e.at(0, -1.9, 'flame');
