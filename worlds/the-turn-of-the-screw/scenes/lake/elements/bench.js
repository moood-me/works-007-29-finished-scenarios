// The bench on the near shore, where the governess sat with her sewing in July: weathered oak, a plain back, set on
// the path facing the water (metres: x across, y up).
g.fillStyle = '#6e5a46';
g.fillRect(-0.9, -0.48, 1.8, 0.08);
g.fillRect(-0.9, -0.92, 1.8, 0.14);
for (const x of [-0.8, 0.72]) {
  g.fillRect(x, -0.92, 0.08, 0.92);
}
g.fillStyle = '#5a4a3a';
for (const x of [-0.8, 0.72]) g.fillRect(x, -0.4, 0.08, 0.4);
e.at(0, -0.5, 'seat');
