// What is seen of Mr and Mrs Otis's bedroom through its door: its far wall (1.8 m wide, 5.5 m away, facing the
// corridor) — flowered paper, the foot of the big bed with its curtains, a washstand with its jug.
g.fillStyle = '#6a5a4a';
g.fillRect(-0.9, -3.0, 1.8, 3.02);
g.fillStyle = '#7a6a54';
for (let x = -0.85; x < 0.9; x += 0.2) for (let y = -2.9; y < -1.0; y += 0.24) {
  g.beginPath();
  g.arc(x + ((y * 10) % 2 ? 0.1 : 0), y, 0.025, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = e.lib.OAK;
g.fillRect(-0.9, -1.0, 1.8, 1.0);
// the bed's curtain and footboard
g.fillStyle = '#5a2a2e';
g.fillRect(-0.9, -2.4, 0.5, 2.4);
g.fillStyle = '#3a2618';
g.fillRect(-0.4, -0.8, 0.6, 0.8);
g.fillStyle = '#e4dccb';
g.fillRect(-0.4, -0.95, 0.6, 0.15);
// the washstand and its jug
g.fillStyle = '#4a3222';
g.fillRect(0.35, -0.85, 0.45, 0.85);
g.fillStyle = '#d8d4c8';
g.beginPath();
g.ellipse(0.57, -1.0, 0.07, 0.12, 0, 0, Math.PI * 2);
g.fill();
