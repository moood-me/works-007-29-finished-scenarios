// The left wall (facing into the room; its x runs away from the viewer, x 0 at distance 3.6): the pale paint, and a
// tall bookcase of plain oak — journals, grey binders, boxes of record cards — with a framed chart of the brain beside it.
e.lib.wallPaint(g, e, -1.8, 1.8);
g.fillStyle = '#8a6a48';
g.fillRect(-1.5, -2.3, 1.4, 2.3);
g.fillStyle = '#6f5338';
g.fillRect(-1.44, -2.24, 1.28, 2.2);
const book = ['#55606a', '#8d8f88', '#6a4f3c', '#a99f86', '#4d5a4c', '#7d3f36', '#c9c3b4'];
for (const y of [-0.06, -0.6, -1.14, -1.68]) {
  g.fillStyle = '#8a6a48';
  g.fillRect(-1.46, y, 1.32, 0.04);
  let x = -1.42;
  while (x < -0.22) {
    const w = 0.03 + e.rnd() * 0.06, h = 0.32 + e.rnd() * 0.14;
    if (e.rnd() < 0.08) {
      x += 0.12;
      continue;
    }
    g.fillStyle = book[Math.floor(e.rnd() * book.length)];
    g.fillRect(x, y - h, w, h);
    x += w + 0.004;
  }
}
// the chart: a brain in profile, its lobes in soft colours, on cream paper in a thin black frame
g.fillStyle = '#2b2b2a';
g.fillRect(0.25, -2.05, 0.8, 0.62);
g.fillStyle = '#efe9da';
g.fillRect(0.28, -2.02, 0.74, 0.56);
const lobes = [['#d6a3a0', -0.08, -0.02, 0.17, 0.12], ['#b9c7a0', 0.1, -0.05, 0.13, 0.1], ['#a9bed4', 0.1, 0.07, 0.13, 0.06], ['#e1c991', -0.05, 0.08, 0.12, 0.06]];
for (const [c, x, y, rx, ry] of lobes) {
  g.fillStyle = c;
  g.beginPath();
  g.ellipse(0.65 + x, -1.76 + y, rx, ry, 0, 0, Math.PI * 2);
  g.fill();
}
g.strokeStyle = 'rgba(80,60,50,0.55)';
g.lineWidth = 0.006;
for (let i = 0; i < 9; i++) {
  g.beginPath();
  g.arc(0.55 + e.rnd() * 0.25, -1.82 + e.rnd() * 0.14, 0.03 + e.rnd() * 0.04, e.rnd() * 3, e.rnd() * 3 + 2);
  g.stroke();
}
