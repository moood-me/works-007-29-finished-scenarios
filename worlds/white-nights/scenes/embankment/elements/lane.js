// The side street from above (x across it, from the embankment's houses at −11.95 to its end at 11.95; y toward the
// viewer, 5 m wide): setts in their courses, its gutters — the corner the two come round and go round
const W = 23.9, D = 5;
g.fillStyle = '#b0a89e';
g.fillRect(-W / 2, -D / 2, W, D);
g.beginPath();
for (let x = -W / 2; x < W / 2; x += 0.17) {
  g.moveTo(x, -D / 2 + 0.3);
  g.lineTo(x, D / 2 - 0.3);
}
g.strokeStyle = 'rgba(96,86,80,0.28)';
g.lineWidth = 0.02;
g.stroke();
g.fillStyle = 'rgba(110,100,96,0.3)';
g.fillRect(-W / 2, -D / 2, W, 0.3);
g.fillRect(-W / 2, D / 2 - 0.3, W, 0.3);
e.lib.wash(g, -W / 2, -D / 2, W, D, [176, 168, 160], 9, 2, 0.1);
