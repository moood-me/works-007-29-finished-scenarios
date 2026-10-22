// The chimney stacks along the ridge: tall, of old red brick with stone caps, their pots (metres: x along the house
// from its middle, y up from the roof's foot). The point `pot`: the one that smokes — the kitchen fire.
for (const x of [-14, -6, 6, 14]) {
  g.fillStyle = '#9b6a54';
  g.fillRect(x - 0.75, -5.2, 1.5, 5.2);
  g.strokeStyle = 'rgba(70,40,30,0.3)';
  g.lineWidth = 0.02;
  g.beginPath();
  for (let y = -0.2; y > -5.2; y -= 0.16) {
    g.moveTo(x - 0.75, y);
    g.lineTo(x + 0.75, y);
  }
  g.stroke();
  g.fillStyle = '#d6cbb0';
  g.fillRect(x - 0.9, -5.45, 1.8, 0.28);
  for (const dx of [-0.4, 0, 0.4]) {
    g.fillStyle = '#a7664a';
    g.fillRect(x + dx - 0.12, -6.0, 0.24, 0.56);
    g.fillRect(x + dx - 0.15, -6.06, 0.3, 0.1);
  }
}
e.at(-6, -6.05, 'pot');
