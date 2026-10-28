// Short gingham curtains drawn back either side of the window, on a wire across its top (x -0.75...0.75, from 2.0 m
// down to the sill): orange-and-cream check, gathered; the air from the open top light stirs them.
const drape = (g, x0, x1) => {
  const w = x1 - x0;
  g.fillStyle = '#ead9b8';
  g.beginPath();
  g.moveTo(x0, -1.02);
  g.bezierCurveTo(x0 + w * 0.2, -1.05, x0 + w * 0.8, -1.0, x1, -1.03);
  g.lineTo(x1, 0.0);
  g.lineTo(x0, 0.0);
  g.closePath();
  g.fill();
  g.save();
  g.clip();
  g.fillStyle = 'rgba(214, 120, 52, 0.5)';
  for (let x = x0; x < x1; x += 0.05) g.fillRect(x, -1.05, 0.025, 1.1);
  for (let y = -1.05; y < 0; y += 0.05) g.fillRect(x0, y, w, 0.025);
  g.fillStyle = 'rgba(120, 70, 40, 0.18)';
  for (let x = x0 + 0.03; x < x1; x += 0.07) g.fillRect(x, -1.05, 0.012, 1.1);
  g.restore();
};
g.fillStyle = '#c8c4bc';
g.fillRect(-0.76, -1.02, 1.52, 0.012);
e.layer('left', { pivot: [-0.6, -1.0], wind: { strength: 0.06, gust: 0.4 } }, l => drape(l, -0.76, -0.46));
e.layer('right', { pivot: [0.6, -1.0], wind: { strength: 0.06, gust: 0.4 } }, l => drape(l, 0.46, 0.76));
