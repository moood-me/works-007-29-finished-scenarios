// The square from above (metres, its middle at distance 50, y toward the viewer — distance d is y 50 − d): warm grey
// paving stones in big squares, each stone a shade of its own; a ring of darker stone set in the middle of the square
// before the town hall; on the right the bus's lay-by, a strip of asphalt behind a kerb; the streets on beyond.
g.fillStyle = '#cdc4b4';
g.fillRect(-150, -60, 300, 120);
// stones near us, each its own shade
for (let i = 0; i < 900; i++) {
  const x = Math.floor(-30 + e.rnd() * 60),
    y = Math.floor(-8 + e.rnd() * 58);
  g.fillStyle = ['rgba(186,176,160,0.6)', 'rgba(214,206,192,0.6)', 'rgba(196,186,170,0.5)'][i % 3];
  g.fillRect(x * 1.2, y * 1.2, 1.2, 1.2);
}
// the joints
g.fillStyle = 'rgba(150,140,124,0.55)';
for (let x = -36; x <= 36; x += 1.2) g.fillRect(x - 0.02, -10, 0.04, 60);
for (let y = -10; y <= 50; y += 1.2) g.fillRect(-36, y - 0.02, 72, 0.04);
// the ring before the town hall
g.strokeStyle = '#a99e8c';
g.lineWidth = 0.9;
g.beginPath();
g.arc(-4, 25, 4.2, 0, Math.PI * 2);
g.stroke();
g.lineWidth = 0.25;
g.beginPath();
g.arc(-4, 25, 2.6, 0, Math.PI * 2);
g.stroke();
// the lay-by: the kerb and the asphalt
g.fillStyle = '#e6e0d4';
g.fillRect(-2.5, 34.3, 80, 0.3);
g.fillStyle = '#8e8f93';
g.fillRect(-2.5, 31.2, 80, 3.1);
g.fillStyle = 'rgba(255,255,255,0.55)';
for (let x = -2; x < 78; x += 3) g.fillRect(x, 32.6, 1.6, 0.12);
g.fillStyle = '#e6e0d4';
g.fillRect(-2.8, 31.0, 0.3, 3.6);
