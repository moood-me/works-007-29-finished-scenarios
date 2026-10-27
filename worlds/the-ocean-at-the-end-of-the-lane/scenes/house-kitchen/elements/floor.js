// The kitchen's floor seen from above (x -2.7...2.7, y -2.7 at the back wall ... 2.7 at the front): linoleum tiles in a
// chequer of cream and dull red, worn paler before the sink and the cooker.
const W = 2.7, D = 2.7, s = 0.3;
for (let y = -D, r = 0; y < D; y += s, r++) {
  for (let x = -W, c = 0; x < W; x += s, c++) {
    g.fillStyle = (r + c) % 2 ? '#9a5a4c' : '#ddd2b8';
    g.fillRect(x, y, s, s);
  }
}
const worn = g.createRadialGradient(0.7, -2.3, 0, 0.7, -2.3, 1.4);
worn.addColorStop(0, 'rgba(236, 228, 210, 0.3)');
worn.addColorStop(1, 'rgba(236, 228, 210, 0)');
g.fillStyle = worn;
g.fillRect(-0.7, -2.7, 2.8, 1.6);
g.strokeStyle = 'rgba(60, 40, 30, 0.25)';
g.lineWidth = 0.005;
for (let x = -W; x <= W; x += s) {
  g.beginPath();
  g.moveTo(x, -D);
  g.lineTo(x, D);
  g.stroke();
}
for (let y = -D; y <= D; y += s) {
  g.beginPath();
  g.moveTo(-W, y);
  g.lineTo(W, y);
  g.stroke();
}
