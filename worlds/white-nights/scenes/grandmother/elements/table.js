// The table by the back wall, its front: the top's edge, a lace cloth hanging over it in scallops, an apron, turned
// legs (the back two a little darker, inset)
const INK = e.lib.INK, wood = '#7d5a40';
g.fillStyle = '#6a4b35';
for (const x of [-0.46, 0.43]) g.fillRect(x, -0.7, 0.03, 0.7);
g.fillStyle = wood;
for (const x of [-0.53, 0.49]) {
  g.fillRect(x, -0.72, 0.045, 0.72);
  g.strokeStyle = INK;
  g.lineWidth = 0.008;
  g.strokeRect(x, -0.72, 0.045, 0.72);
  g.fillRect(x - 0.008, -0.34, 0.061, 0.05);
}
e.lib.box(g, -0.55, -0.74, 1.1, 0.12, wood, 0.01);
e.lib.box(g, -0.56, -0.765, 1.12, 0.03, '#8a6648', 0.01);
// (the lace cloth's border hanging over the edge)
g.fillStyle = '#f4efe4';
g.beginPath();
g.moveTo(-0.32, -0.74);
g.lineTo(0.32, -0.74);
for (let x = 0.32; x > -0.33; x -= 0.08) g.quadraticCurveTo(x - 0.04, -0.6, x - 0.08, -0.68);
g.closePath();
g.fill();
g.strokeStyle = 'rgba(74,63,58,0.5)';
g.lineWidth = 0.006;
g.stroke();
