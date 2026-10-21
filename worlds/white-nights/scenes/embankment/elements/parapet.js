// The near parapet's face, the side toward the street: granite blocks 1.05 m high, x 0…319 along the canal from a
// metre before the viewer away into the distance; a light chamfer under its top, the plinth's line at its foot, and,
// as the lithograph shades a stone, fine diagonal hatching over its lower half, denser toward the foot (one path)
e.lib.granite(g, 319, 1.05, { block: 2.2, colour: '#a89a95' });
g.fillStyle = 'rgba(240,232,226,0.4)';
g.fillRect(0, -1.05, 319, 0.07);
g.beginPath();
g.moveTo(0, -0.12);
g.lineTo(319, -0.12);
g.strokeStyle = 'rgba(74,63,58,0.5)';
g.lineWidth = 0.02;
g.stroke();
g.beginPath();
for (let x = 0; x < 319; x += 0.15) {
  const top = -0.5 - 0.25 * e.anim.hash(Math.round(x * 100), 51);
  g.moveTo(x, -0.13);
  g.lineTo(x + 0.18, top);
}
g.strokeStyle = 'rgba(74,63,58,0.2)';
g.lineWidth = 0.008;
g.stroke();
