// What is seen through the passage's mouth (0.7 m wide): the narrow stair in the wall going up steeply into the dark,
// toward the Tapestry Chamber — worn stone treads, lighter at the foot, lost in the dark above.
g.fillStyle = '#1c1a18';
g.fillRect(-0.45, -2.2, 0.9, 2.22);
for (let i = 0; i < 9; i++) {
  const y = -0.2 - i * 0.2;
  const k = 1 - i / 9;
  g.fillStyle = `rgba(118,108,96,${(0.75 * k).toFixed(2)})`;
  g.fillRect(-0.45, y, 0.9, 0.05);
  g.fillStyle = `rgba(80,74,66,${(0.7 * k).toFixed(2)})`;
  g.fillRect(-0.45, y + 0.05, 0.9, 0.15);
}
e.at(0, -1.0, 'stair');
