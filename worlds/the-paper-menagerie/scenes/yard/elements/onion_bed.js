// The onion bed from above: dark turned earth edged with old bricks set on end.
g.fillStyle = '#6a5442';
g.fillRect(-0.95, -0.375, 1.9, 0.75);
for (let i = 0; i < 120; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(90,70,54,0.7)' : 'rgba(130,106,84,0.6)';
  g.fillRect(-0.9 + e.rnd() * 1.8, -0.35 + e.rnd() * 0.7, 0.03, 0.02);
}
g.strokeStyle = '#a3604c';
g.lineWidth = 0.06;
g.strokeRect(-0.92, -0.35, 1.84, 0.7);
