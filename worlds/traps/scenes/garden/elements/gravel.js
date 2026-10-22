// The gravel under the table and the path from it up to the villa's door: pale raked gravel, its edges ragged into
// the lawn.
g.fillStyle = '#cdbb98';
g.beginPath();
g.ellipse(0, 8, 3.6, 2, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(1.65, -10, 1.8, 18);
for (let i = 0; i < 1400; i++) {
  const inPath = e.rnd() < 0.45;
  const x = inPath ? 1.65 + e.rnd() * 1.8 : (e.rnd() - 0.5) * 7;
  const y = inPath ? -10 + e.rnd() * 18 : 8 + (e.rnd() - 0.5) * 4;
  if (!inPath && ((x / 3.6) ** 2 + ((y - 8) / 2) ** 2) > 1) continue;
  g.fillStyle = e.rnd() < 0.5 ? '#b9a682' : '#ded0b2';
  g.beginPath();
  g.arc(x, y, 0.015 + e.rnd() * 0.02, 0, Math.PI * 2);
  g.fill();
}
