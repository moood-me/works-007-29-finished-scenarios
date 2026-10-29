// The tea on the table (x −0.4…0.4, y −0.22 … 0): two cups on their saucers — his at the left end, hers at the
// right —, a little brown teapot between, a sugar bowl; points `his`, `hers` (the cups' tops)
const INK = e.lib.INK;
function cup(x) {
  g.fillStyle = '#f4f1ea';
  g.beginPath();
  g.ellipse(x, -0.005, 0.07, 0.012, 0, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = INK;
  g.lineWidth = 0.004;
  g.stroke();
  g.beginPath();
  g.moveTo(x - 0.04, -0.07);
  g.lineTo(x + 0.04, -0.07);
  g.lineTo(x + 0.03, -0.012);
  g.lineTo(x - 0.03, -0.012);
  g.closePath();
  g.fillStyle = '#f4f1ea';
  g.fill();
  g.stroke();
  g.fillStyle = '#5c7a9a';
  g.fillRect(x - 0.037, -0.058, 0.074, 0.01);
  g.beginPath();
  g.arc(x + 0.048, -0.045, 0.014, -1.4, 1.4);
  g.stroke();
}
cup(-0.27);
cup(0.27);
g.fillStyle = '#7a4a32';
g.beginPath();
g.ellipse(0, -0.07, 0.07, 0.065, 0, 0, Math.PI * 2);
g.fill();
g.stroke();
g.fillRect(-0.02, -0.15, 0.04, 0.02);
g.beginPath();
g.moveTo(0.06, -0.08);
g.quadraticCurveTo(0.11, -0.1, 0.12, -0.13);
g.lineWidth = 0.012;
g.strokeStyle = '#7a4a32';
g.stroke();
e.at(-0.27, -0.07, 'his');
e.at(0.27, -0.07, 'hers');
