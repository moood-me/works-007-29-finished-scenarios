// What is seen through the passage's mouth (1.5 m across, wider than the mouth): the narrow stair in the wall going up steeply into the dark,
// toward the Tapestry Chamber — worn stone treads, lighter at the foot, lost in the dark above.
g.fillStyle = '#1c1a18';
g.fillRect(-0.75, -2.2, 1.5, 2.22);
for (let i = 0; i < 9; i++) {
  const y = -0.2 - i * 0.2;
  const k = 1 - i / 9;
  g.fillStyle = `rgba(118,108,96,${(0.75 * k).toFixed(2)})`;
  g.fillRect(-0.75, y, 1.5, 0.05);
  g.fillStyle = `rgba(80,74,66,${(0.7 * k).toFixed(2)})`;
  g.fillRect(-0.75, y + 0.05, 1.5, 0.15);
}
e.at(0, -1.0, 'stair');
