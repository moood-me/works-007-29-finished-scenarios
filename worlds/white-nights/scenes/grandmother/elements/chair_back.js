// Grandmother's armchair, its back: a high wing chair of the old days, upholstered in a faded claret cloth with brass
// nails along its edge, a dark wooden frame; the wings at the head; its back legs below
const INK = e.lib.INK;
g.fillStyle = '#5e4130';
for (const x of [-0.36, 0.32]) g.fillRect(x, -0.14, 0.04, 0.14);
g.beginPath();
g.moveTo(-0.34, -0.12);
g.lineTo(-0.36, -0.8);
g.quadraticCurveTo(-0.46, -0.86, -0.44, -1.02);
g.quadraticCurveTo(-0.4, -1.2, 0, -1.2);
g.quadraticCurveTo(0.4, -1.2, 0.44, -1.02);
g.quadraticCurveTo(0.46, -0.86, 0.36, -0.8);
g.lineTo(0.34, -0.12);
g.closePath();
g.fillStyle = '#8c5e5c';
g.fill();
g.strokeStyle = '#5e4130';
g.lineWidth = 0.03;
g.stroke();
g.strokeStyle = INK;
g.lineWidth = 0.008;
g.stroke();
g.save();
g.clip();
e.lib.wash(g, -0.46, -1.2, 0.92, 1.1, [140, 94, 92], 6, 0.03, 0.25, 0.2);
e.lib.hatch(g, -0.46, -0.42, 0.92, 0.3, 0.025, 0.25, 0.004);
g.restore();
// (the seams of the cushioned back, the nails)
g.beginPath();
g.moveTo(-0.27, -0.2);
g.quadraticCurveTo(-0.3, -0.75, -0.25, -1.1);
g.moveTo(0.27, -0.2);
g.quadraticCurveTo(0.3, -0.75, 0.25, -1.1);
g.strokeStyle = 'rgba(74,40,40,0.4)';
g.lineWidth = 0.01;
g.stroke();
g.beginPath();
for (let t = 0.05; t < 1; t += 0.06) {
  const a = Math.PI * t, x = -0.4 * Math.cos(a), y = -1.0 - 0.17 * Math.sin(a);
  g.moveTo(x + 0.008, y);
  g.arc(x, y, 0.008, 0, Math.PI * 2);
}
g.fillStyle = '#c8a24e';
g.fill();
