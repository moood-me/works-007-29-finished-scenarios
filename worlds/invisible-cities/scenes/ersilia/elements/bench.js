// The bench where two neighbours sat for thirty years: a seat of two planks, a back of two, four legs
g.fillStyle = '#4e4034';
for (const x of [-0.68, 0.6]) {
  g.fillRect(x, -0.45, 0.08, 0.45);
  g.fillRect(x, -0.9, 0.07, 0.45);
}
g.fillStyle = '#7d6a55';
g.fillRect(-0.76, -0.49, 1.52, 0.07);
g.fillStyle = '#86735d';
g.fillRect(-0.76, -0.88, 1.52, 0.09);
g.fillRect(-0.76, -0.72, 1.52, 0.08);
e.at(0, -0.6, 'bench');
