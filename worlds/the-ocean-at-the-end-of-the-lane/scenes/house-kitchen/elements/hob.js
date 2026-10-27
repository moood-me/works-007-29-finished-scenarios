// The hob seen from above (x -0.32...0.32, y -0.3 at the wall ... 0.3 at the front): four black rings, a saucepan
// on one, the chrome trim.
g.fillStyle = '#ece4cf';
g.fillRect(-0.32, -0.3, 0.64, 0.6);
g.strokeStyle = '#2b2a2a';
g.lineWidth = 0.012;
for (const [x, y, r] of [[-0.15, -0.14, 0.08], [0.15, -0.14, 0.09], [-0.15, 0.14, 0.09], [0.15, 0.14, 0.08]]) {
  for (let k = 0; k < 3; k++) {
    g.beginPath();
    g.arc(x, y, r - k * 0.025, 0, Math.PI * 2);
    g.stroke();
  }
}
g.fillStyle = '#9fa3a5';
g.beginPath();
g.arc(0.15, 0.14, 0.11, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#7f8486';
g.beginPath();
g.arc(0.15, 0.14, 0.09, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#2b2a2a';
g.fillRect(0.24, 0.13, 0.12, 0.02);
