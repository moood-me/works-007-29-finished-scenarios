// A video camera on its tripod, turned to the glass: seen from behind (metres from its foot, 1.45 m to its top) — the
// three legs, the head, the camera's dark body with its viewfinder, a small red light.
g.strokeStyle = '#3a3b3d';
g.lineWidth = 0.025;
g.lineCap = 'round';
for (const [x, y] of [[-0.38, 0], [0.36, -0.02], [0.05, -0.08]]) {
  g.beginPath();
  g.moveTo(0, -1.18);
  g.lineTo(x, y);
  g.stroke();
}
g.fillStyle = '#2b2c2e';
g.fillRect(-0.04, -1.25, 0.08, 0.08);
g.beginPath();
g.roundRect(-0.12, -1.42, 0.26, 0.17, 0.03);
g.fill();
g.fillStyle = '#1c1d1f';
g.fillRect(-0.16, -1.4, 0.06, 0.08);
g.fillStyle = '#4a4c4f';
g.fillRect(0.02, -1.45, 0.08, 0.04);
e.light(0.11, -1.4, 0.03, '#ff3a2a', 0.6, 'rec');
