// The far end of the corridor (4.1 m across, 14 m away): the door of the Tapestry Chamber, Sir Simon's — shut, old
// oak under a carved Tudor arch, a step of worn stone before it —, and over it the Canterville arms, faded.
e.lib.wall(g, -2.05, 2.05, 3.6);
g.fillStyle = e.lib.STONE;
e.lib.arch(g, -0.72, 0.72, -2.52, 0, 0.36);
g.fill();
g.strokeStyle = e.lib.STONE_DARK;
g.lineWidth = 0.02;
e.lib.arch(g, -0.64, 0.64, -2.44, 0, 0.33);
g.stroke();
e.lib.leaf(g, -0.56, 0.56, 0.42);
e.at(0, -1.2, 'door');
// the step
g.fillStyle = '#6f665a';
g.fillRect(-0.7, -0.05, 1.4, 0.05);
// the arms: a red shield, a white chevron, three black martlets, in a carved wreath
g.fillStyle = '#5a4424';
g.beginPath();
g.ellipse(0, -2.95, 0.34, 0.3, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#7a2420';
g.beginPath();
g.moveTo(-0.18, -3.15);
g.lineTo(0.18, -3.15);
g.lineTo(0.18, -2.9);
g.quadraticCurveTo(0.16, -2.74, 0, -2.68);
g.quadraticCurveTo(-0.16, -2.74, -0.18, -2.9);
g.closePath();
g.fill();
g.strokeStyle = '#d8d0bc';
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(-0.15, -2.8);
g.lineTo(0, -2.98);
g.lineTo(0.15, -2.8);
g.stroke();
g.fillStyle = '#1e1a18';
for (const [x, y] of [[-0.09, -3.07], [0.09, -3.07], [0, -2.76]]) {
  g.beginPath();
  g.arc(x, y, 0.022, 0, Math.PI * 2);
  g.fill();
}
