// Jack's door, painted from its hinge (x 0) to its free edge (0.84): white, four panels, a brass knob; turned by the
// key `door` (270 shut in the doorway, 180 wide open into the hall).
g.fillStyle = '#f5f2ea';
g.fillRect(0, -2.0, 0.84, 2.0);
g.strokeStyle = '#ddd5c6';
g.lineWidth = 0.014;
for (const [y0, h] of [[-1.9, 0.8], [-0.98, 0.84]]) {
  g.strokeRect(0.08, y0, 0.3, h);
  g.strokeRect(0.46, y0, 0.3, h);
}
g.fillStyle = '#c9a25a';
g.beginPath();
g.arc(0.76, -0.98, 0.026, 0, Math.PI * 2);
g.fill();
e.at(0.6, -1.1, 'door');
