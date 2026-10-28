// The little low bench at the armchair's side where Nastenka sits: a plain painted seat on four splayed legs
const INK = e.lib.INK;
g.fillStyle = '#7f6650';
g.beginPath();
for (const s of [-1, 1]) {
  g.moveTo(s * 0.16, -0.3);
  g.lineTo(s * 0.21, 0);
  g.lineTo(s * 0.175, 0);
  g.lineTo(s * 0.13, -0.3);
}
g.fill();
g.strokeStyle = INK;
g.lineWidth = 0.006;
g.stroke();
e.lib.box(g, -0.23, -0.345, 0.46, 0.05, '#93785e', 0.008);
