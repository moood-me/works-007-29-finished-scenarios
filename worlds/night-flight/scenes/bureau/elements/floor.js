// The bureau's floor seen from above: worn boards running away from the viewer, dark oiled pine, a paler track worn
// from the door on the left to the telegraph table; a runner of faded red before the map. Its own metres: x across,
// y toward the viewer (x −3…3, y −2.9…2.9).
g.fillStyle = '#6b4c34';
g.fillRect(-3, -2.9, 6, 5.8);
for (let x = -3, k = 0; x < 3; x += 0.16, k++) {
  g.fillStyle = k % 3 === 0 ? '#664730' : k % 3 === 1 ? '#70513a' : '#694a33';
  g.fillRect(x, -2.9, 0.155, 5.8);
  // the boards' butt joints, staggered
  g.fillStyle = 'rgba(40,26,16,0.45)';
  for (let y = -2.9 + ((k * 0.83) % 1.9); y < 2.9; y += 1.9) g.fillRect(x, y, 0.155, 0.012);
}
g.fillStyle = 'rgba(35,22,14,0.5)';
for (let x = -3; x < 3; x += 0.16) g.fillRect(x + 0.152, -2.9, 0.008, 5.8);
// the worn track
g.save();
g.globalAlpha = 0.18;
g.strokeStyle = '#c4a27e';
g.lineWidth = 0.9;
g.lineCap = 'round';
g.beginPath();
g.moveTo(-2.9, 0.1);
g.bezierCurveTo(-1.5, 0.2, 0.2, -0.6, 1.8, -1.2);
g.stroke();
g.restore();
// the runner before the map
g.fillStyle = '#7a3a30';
g.fillRect(-1.7, -2.75, 2.4, 0.9);
g.strokeStyle = '#a7684f';
g.lineWidth = 0.05;
g.strokeRect(-1.62, -2.67, 2.24, 0.74);
