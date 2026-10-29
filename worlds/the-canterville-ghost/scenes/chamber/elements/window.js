// The little window at the outer face of the wall (0.7 m by 0.6 m, from 1.1 m to 1.7 m), facing into the room: no
// glass, three iron bars upright and one across, rusted — the garden and the night sky beyond it. Its box is the
// opening: the moon comes in through it.
g.strokeStyle = '#2c2622';
g.lineWidth = 0.025;
for (const x of [-0.18, 0, 0.18]) {
  g.beginPath();
  g.moveTo(x, -1.7);
  g.lineTo(x, -1.1);
  g.stroke();
}
g.beginPath();
g.moveTo(-0.35, -1.42);
g.lineTo(0.35, -1.42);
g.stroke();
e.at(0, -1.4, 'window');
