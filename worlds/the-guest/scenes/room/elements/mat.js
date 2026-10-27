// The mat before the stove from above (metres): woven esparto, the colour of straw, with bands of rust red and brown,
// its ends frayed.
g.fillStyle = '#c7ad7a';
g.fillRect(-0.65, -0.4, 1.3, 0.8);
for (let y = -0.4; y < 0.4; y += 0.02) {
  g.fillStyle = 'rgba(140,110,70,0.25)';
  g.fillRect(-0.65, y, 1.3, 0.008);
}
for (const [x, w, c] of [[-0.5, 0.06, '#8c3e2a'], [-0.42, 0.02, '#5a3a26'], [0.42, 0.02, '#5a3a26'], [0.44, 0.06, '#8c3e2a']]) {
  g.fillStyle = c;
  g.fillRect(x, -0.4, w, 0.8);
}
g.strokeStyle = '#b39868';
g.lineWidth = 0.008;
for (let y = -0.38; y < 0.4; y += 0.04) {
  for (const s of [-1, 1]) {
    g.beginPath();
    g.moveTo(s * 0.65, y);
    g.lineTo(s * (0.69 + e.rnd() * 0.02), y + (e.rnd() - 0.5) * 0.02);
    g.stroke();
  }
}
