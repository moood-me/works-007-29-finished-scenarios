// What is seen of Mr and Mrs Otis's bedroom through its door: the part of its far wall the door shows (0.8 m wide,
// 7.2 m away, facing the corridor; no wider — the windows must not see it) — flowered paper over the oak, the dark red
// curtain of the big bed.
g.fillStyle = '#6a5a4a';
g.fillRect(-0.4, -3.0, 0.8, 3.02);
g.fillStyle = '#7e6c56';
for (let x = -0.35; x < 0.4; x += 0.2) for (let y = -2.9, i = 0; y < -1.0; y += 0.24, i++) {
  g.beginPath();
  g.arc(x + (i % 2 ? 0.1 : 0), y, 0.025, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = e.lib.OAK;
g.fillRect(-0.4, -1.0, 0.8, 1.0);
g.fillStyle = '#5a2a2e';
g.fillRect(-0.4, -2.4, 0.38, 2.4);
g.fillStyle = '#4a2226';
for (const x of [-0.32, -0.2, -0.1]) g.fillRect(x, -2.4, 0.03, 2.4);
