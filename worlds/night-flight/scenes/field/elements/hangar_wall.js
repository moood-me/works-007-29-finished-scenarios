// The hangar's far side wall, seen inside through the gates: boards under a row of high small windows (dark at
// night), a long bench along its foot with a vice and oil cans, a drawer chest.
g.fillStyle = '#8f806a';
g.fillRect(-7, -7.6, 14, 7.6);
g.fillStyle = 'rgba(112,98,80,0.6)';
for (let x = -6.8; x < 7; x += 0.6) g.fillRect(x, -7.6, 0.05, 7.6);
// high windows
for (let x = -5.5; x < 6; x += 2.6) {
  g.fillStyle = '#c9c2b2';
  g.fillRect(x - 0.06, -6.6, 1.32, 0.92);
  g.fillStyle = '#35405a';
  g.fillRect(x, -6.54, 1.2, 0.8);
}
// the bench
g.fillStyle = '#5c4a38';
g.fillRect(-6, -0.95, 9, 0.12);
g.fillRect(-5.9, -0.85, 0.12, 0.85);
g.fillRect(2.8, -0.85, 0.12, 0.85);
g.fillStyle = '#4b4e52';
g.fillRect(-4, -1.15, 0.35, 0.2);
for (let i = 0; i < 4; i++) {
  g.fillStyle = i % 2 ? '#8a4f3c' : '#6a6f66';
  g.fillRect(-1 + i * 0.5, -1.35, 0.3, 0.4);
}
// the drawer chest
g.fillStyle = '#6b5a46';
g.fillRect(4, -1.3, 1.2, 1.3);
g.strokeStyle = '#4a3d30';
g.lineWidth = 0.04;
for (const y of [-1, -0.65, -0.3]) {
  g.beginPath();
  g.moveTo(4, y);
  g.lineTo(5.2, y);
  g.stroke();
}
