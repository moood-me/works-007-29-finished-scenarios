// The courtyard's floor far below the window, from above (x across, y toward the viewer): old cobbles gone dark with
// rain, puddles in the hollows, a gutter of water along the far wall, a woodpile and a water barrel under the drainpipe
const INK = e.lib.INK;
g.fillStyle = '#6f6a60';
g.fillRect(-2.9, -12, 5.8, 24);
g.fillStyle = 'rgba(40,38,36,0.35)';
for (let i = 0; i < 260; i++) {
  const x = -2.9 + 5.8 * e.anim.hash(i, 51), y = -12 + 24 * e.anim.hash(i, 52);
  g.beginPath();
  g.ellipse(x, y, 0.12, 0.09, e.anim.hash(i, 53) * 3, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = 'rgba(150,164,176,0.55)';
for (const [x, y, rx, ry] of [[0.6, -2, 0.9, 0.5], [-1.2, 3, 0.6, 0.9], [1.4, 6.5, 0.7, 0.4], [-0.4, -7, 1.0, 0.6]]) {
  g.beginPath();
  g.ellipse(x, y, rx, ry, 0.3, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = 'rgba(120,136,150,0.6)';
g.fillRect(-2.9, -12, 0.3, 24);
// (the woodpile by the far wall, the barrel)
for (let i = 0; i < 18; i++) {
  g.fillStyle = i % 2 ? '#7a6248' : '#86704f';
  g.fillRect(-2.85, 1 + i * 0.12, 0.7, 0.1);
}
g.strokeStyle = INK;
g.lineWidth = 0.02;
g.strokeRect(-2.85, 1, 0.7, 2.16);
g.fillStyle = '#4e4034';
g.beginPath();
g.arc(-2.5, -1.6, 0.35, 0, Math.PI * 2);
g.fill();
g.stroke();
g.fillStyle = 'rgba(150,164,176,0.7)';
g.beginPath();
g.arc(-2.5, -1.6, 0.27, 0, Math.PI * 2);
g.fill();
