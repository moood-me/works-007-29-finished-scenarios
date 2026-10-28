// The right wall, facing the room (metres from its middle, 4.25 m ahead; x runs toward the viewer): the same grey
// boards, shrunk apart over the years — the gaps between them are the sun's (the element `cracks`); a coil of rope
// and a hay knife on nails near the front, a stack of grain sacks at its foot by the posts.
e.lib.planks(g, -4.8, -4.85, 4.8, 0.02, 0.24, '#a39079', 13);
g.fillStyle = 'rgba(60,45,30,0.25)';
g.fillRect(-4.8, -0.25, 9.6, 0.27);
g.strokeStyle = '#8a6e48';
g.lineWidth = 0.035;
for (let i = 0; i < 5; i++) {
  g.beginPath();
  g.ellipse(2.4, -1.55, 0.22 - i * 0.015, 0.3 - i * 0.02, 0.1, 0, Math.PI * 2);
  g.stroke();
}
g.fillStyle = '#4e4a46';
g.beginPath();
g.moveTo(1.6, -1.9);
g.lineTo(1.66, -1.9);
g.lineTo(1.7, -1.1);
g.quadraticCurveTo(1.6, -1.0, 1.55, -1.15);
g.closePath();
g.fill();
g.fillStyle = '#6b4a2e';
g.fillRect(1.58, -2.05, 0.1, 0.18);
// sacks of barley at the foot, between the front of the wall and the post
g.fillStyle = '#c8b48e';
for (const [x, y, w] of [[0.3, 0, 0.7], [1.0, 0, 0.65], [0.65, -0.42, 0.66]]) {
  g.beginPath();
  g.moveTo(x - w / 2, y);
  g.quadraticCurveTo(x - w / 2 - 0.05, y - 0.25, x - w / 2 + 0.05, y - 0.44);
  g.lineTo(x + w / 2 - 0.05, y - 0.44);
  g.quadraticCurveTo(x + w / 2 + 0.05, y - 0.25, x + w / 2, y);
  g.closePath();
  g.fill();
  g.fillStyle = '#a8946e';
  g.fillRect(x - 0.1, y - 0.3, 0.2, 0.08);
  g.fillStyle = '#c8b48e';
}
