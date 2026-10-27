// The window onto the side alley (metres from its sill; the opening x −0.6…0.6, 1.2 high): no glass, a frame of
// boards, five turned wooden bars; the alley's grey light comes in here.
g.fillStyle = '#4e3e30';
g.fillRect(-0.66, -1.22, 0.07, 1.22);
g.fillRect(0.59, -1.22, 0.07, 1.22);
g.fillRect(-0.66, -1.24, 1.32, 0.07);
g.fillRect(-0.68, -0.04, 1.36, 0.07);
for (const x of [-0.4, -0.2, 0, 0.2, 0.4]) {
  g.fillStyle = '#5e4a3a';
  g.fillRect(x - 0.016, -1.18, 0.032, 1.15);
  g.fillStyle = '#6e5644';
  for (let y = -1.05; y < -0.08; y += 0.2) {
    g.beginPath();
    g.ellipse(x, y, 0.025, 0.03, 0, 0, Math.PI * 2);
    g.fill();
  }
}
e.at(0, -0.6, 'window');
