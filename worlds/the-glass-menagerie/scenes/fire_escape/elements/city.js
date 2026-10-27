// The city past the building's corner (metres from the street 9 m down, across from its middle): the flat roofs
// of lower houses one beyond another, water tanks on legs, chimneys, a few windows still lit; farther, the tall
// blocks downtown as a soft violet silhouette. Seen only in the gap at the left of the frame.
g.fillStyle = '#2c2a44';
for (let i = 0; i < 6; i++) {
  const x = -10 + i * 2.4 + e.rnd() * 0.6;
  const h = 11 + e.rnd() * 3.5;
  g.fillRect(x, -h, 1.6 + e.rnd() * 1.2, h);
}
g.fillStyle = 'rgba(255,214,150,0.6)';
for (let i = 0; i < 26; i++) g.fillRect(-10 + e.rnd() * 20, -13.5 + e.rnd() * 2.5, 0.25, 0.35);
// the near roofs: dark brick, their parapets, tanks and chimneys against the glow
const roofs = [[-10, 9.4], [-6.6, 8.6], [-3.2, 9.8], [0.4, 8.2], [3.6, 9.1], [6.8, 8.7]];
for (const [x, h] of roofs) {
  g.fillStyle = '#25232f';
  g.fillRect(x, -h, 3.5, h);
  g.fillStyle = '#302d3a';
  g.fillRect(x - 0.05, -h - 0.15, 3.6, 0.2);
  for (let k = 0; k < 3; k++) {
    if (e.rnd() < 0.6) continue;
    g.fillStyle = '#e6b878';
    g.fillRect(x + 0.4 + k * 1.1, -h + 1.2 + e.rnd() * 3, 0.45, 0.7);
  }
}
// water tanks on their legs, chimney stacks
for (const [x, h] of [[-5.4, 8.6], [4.9, 9.1]]) {
  g.fillStyle = '#1e1c26';
  g.fillRect(x - 0.5, -h - 1.0, 0.06, 1.0);
  g.fillRect(x + 0.44, -h - 1.0, 0.06, 1.0);
  g.beginPath();
  g.moveTo(x - 0.6, -h - 1.0);
  g.lineTo(x + 0.6, -h - 1.0);
  g.lineTo(x + 0.55, -h - 2.3);
  g.lineTo(x, -h - 2.6);
  g.lineTo(x - 0.55, -h - 2.3);
  g.closePath();
  g.fill();
}
for (const [x, h] of [[-8.2, 9.4], [-2.1, 9.8], [1.6, 8.2], [8.2, 8.7]]) {
  g.fillStyle = '#2a2632';
  g.fillRect(x, -h - 0.8, 0.35, 0.8);
}
