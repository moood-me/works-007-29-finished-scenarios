// A plain bentwood chair seen from before it (x −0.22…0.22, y −0.92 … 0), standing behind whoever sits on it: its
// bent back hoop, the seat's front edge, four legs
const INK = e.lib.INK;
g.strokeStyle = '#5a3d2c';
g.lineWidth = 0.03;
g.beginPath();
for (const x of [-0.17, 0.17]) { g.moveTo(x, 0); g.lineTo(x * 0.9, -0.45); }
g.moveTo(-0.15, -0.47);
g.lineTo(-0.17, -0.78);
g.bezierCurveTo(-0.17, -0.98, 0.17, -0.98, 0.17, -0.78);
g.lineTo(0.15, -0.47);
g.stroke();
e.lib.box(g, -0.2, -0.49, 0.4, 0.045, '#6b4a35', 0.008);
