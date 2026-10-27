// The fridge's front (x -0.3...0.3, 1.45 m high): a rounded cream one with a long chrome handle and its maker's badge,
// a child's drawing and a shopping list held on it by magnets.
g.fillStyle = '#ece6d2';
g.beginPath();
g.roundRect(-0.3, -1.45, 0.6, 1.45, [0.08, 0.08, 0.01, 0.01]);
g.fill();
g.strokeStyle = '#cfc7b0';
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(-0.28, -0.42);
g.lineTo(0.28, -0.42);
g.stroke();
g.fillStyle = '#c9cccc';
g.beginPath();
g.roundRect(0.2, -1.05, 0.035, 0.45, 0.015);
g.fill();
g.fillStyle = '#b8913e';
g.fillRect(-0.08, -1.32, 0.16, 0.025);
g.fillStyle = '#2f2c2a';
g.fillRect(-0.3, -0.06, 0.6, 0.06);
// the drawing: a house, a sun, three figures; the list
g.fillStyle = '#f6f3ea';
g.fillRect(-0.22, -1.12, 0.22, 0.17);
g.strokeStyle = '#4a6da0';
g.lineWidth = 0.006;
g.strokeRect(-0.17, -1.05, 0.08, 0.07);
g.beginPath();
g.moveTo(-0.18, -1.05);
g.lineTo(-0.13, -1.09);
g.lineTo(-0.08, -1.05);
g.stroke();
g.strokeStyle = '#d6a030';
g.beginPath();
g.arc(-0.04, -1.08, 0.02, 0, Math.PI * 2);
g.stroke();
g.strokeStyle = '#b5443a';
for (const x of [-0.06, -0.035, -0.015]) {
  g.beginPath();
  g.moveTo(x, -0.99);
  g.lineTo(x, -0.965);
  g.stroke();
}
g.fillStyle = '#f2ecd8';
g.fillRect(0.02, -0.92, 0.14, 0.2);
g.fillStyle = 'rgba(70, 70, 80, 0.5)';
for (let y = -0.89; y < -0.74; y += 0.025) g.fillRect(0.035, y, 0.08 + 0.03 * e.rnd(), 0.004);
g.fillStyle = '#c94a3c';
for (const [x, y] of [[-0.11, -1.12], [0.09, -0.92]]) {
  g.beginPath();
  g.arc(x, y, 0.012, 0, Math.PI * 2);
  g.fill();
}
