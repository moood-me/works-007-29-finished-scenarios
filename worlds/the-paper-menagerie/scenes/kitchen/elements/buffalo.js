// A water buffalo folded from brown kraft paper, standing in a flower pot on the sill as in a field: the terracotta
// pot, its dark soil, the buffalo on it — broad facets, swept-back horns. It breathes: its body is a layer animate
// swells a little.
g.fillStyle = '#b8653f';
g.beginPath();
g.moveTo(-0.09, -0.11);
g.lineTo(0.09, -0.11);
g.lineTo(0.07, 0);
g.lineTo(-0.07, 0);
g.closePath();
g.fill();
g.fillStyle = '#c9774d';
g.fillRect(-0.1, -0.125, 0.2, 0.025);
g.fillStyle = '#4c3a2e';
g.fillRect(-0.088, -0.13, 0.176, 0.008);
e.layer('body', { pivot: [0, -0.13] }, l => {
  const poly = (pts, fill) => {
    l.fillStyle = fill;
    l.beginPath();
    l.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) l.lineTo(pts[i][0], pts[i][1]);
    l.closePath();
    l.fill();
  };
  for (const [x, c] of [[-0.05, '#7d5d3f'], [-0.035, '#9a7752'], [0.035, '#7d5d3f'], [0.05, '#9a7752']]) poly([[x - 0.008, -0.17], [x + 0.008, -0.17], [x, -0.13]], c);
  poly([[-0.075, -0.205], [0.055, -0.215], [0.065, -0.165], [-0.07, -0.16]], '#a9845c');
  poly([[-0.075, -0.205], [0.055, -0.215], [0.03, -0.185], [-0.05, -0.183]], '#8e6c48');
  poly([[0.05, -0.215], [0.095, -0.2], [0.09, -0.17], [0.06, -0.168]], '#8e6c48');
  poly([[0.07, -0.21], [0.05, -0.245], [0.1, -0.232], [0.08, -0.212]], '#ccb791');
  l.fillStyle = '#2a2624';
  l.fillRect(0.082, -0.196, 0.005, 0.005);
  l.strokeStyle = 'rgba(70,50,30,0.6)';
  l.lineWidth = 0.002;
  l.beginPath();
  l.moveTo(-0.075, -0.205);
  l.lineTo(0.055, -0.215);
  l.stroke();
});
e.at(0, -0.19, 'buffalo');
