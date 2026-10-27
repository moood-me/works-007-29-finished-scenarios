// The kitchen table against the left wall, seen from above (x -0.35...0.35, y -0.7 far ... 0.7 near): a blue-and-white
// checked oilcloth, laid for supper — four plates, knives and forks, a bread board with a loaf, the milk bottle.
const W = 0.35, D = 0.7, s = 0.05;
for (let y = -D, r = 0; y < D; y += s, r++) {
  for (let x = -W, c = 0; x < W; x += s, c++) {
    g.fillStyle = r % 2 && c % 2 ? '#6c88b4' : r % 2 || c % 2 ? '#aebfd8' : '#f1efe8';
    g.fillRect(x, y, s, s);
  }
}
for (const [x, y] of [[0.12, -0.45], [0.12, 0.45], [0.14, -0.05], [-0.18, 0.2]]) {
  g.fillStyle = '#f4f1e8';
  g.beginPath();
  g.arc(x, y, 0.11, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = '#c9a24c';
  g.lineWidth = 0.006;
  g.beginPath();
  g.arc(x, y, 0.09, 0, Math.PI * 2);
  g.stroke();
  g.fillStyle = '#b9bcbc';
  g.fillRect(x - 0.01, y + 0.12, 0.02, 0.14);
  g.fillRect(x - 0.01, y - 0.26, 0.02, 0.14);
}
g.fillStyle = '#a57a4c';
g.beginPath();
g.roundRect(-0.25, -0.45, 0.2, 0.3, 0.03);
g.fill();
g.fillStyle = '#d2a468';
g.beginPath();
g.ellipse(-0.15, -0.3, 0.07, 0.11, 0, 0, Math.PI * 2);
g.fill();
