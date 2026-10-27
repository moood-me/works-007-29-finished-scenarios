// The bed's near side, along the back wall (facing the room; x −1.08…1.08 from the head, left, to the foot): the white
// sheet tucked over the mattress's edge and hanging a little, the white-enamelled side rail, the legs at the corners
// with their castors, the crank at the foot.
g.fillStyle = '#e9ece8';
g.fillRect(-1.08, -0.58, 2.16, 0.16);
g.fillStyle = 'rgba(160,170,175,0.35)';
for (let x = -1.0; x < 1.05; x += 0.23) g.fillRect(x, -0.5, 0.004, 0.09);
g.fillStyle = '#f2f2ee';
g.fillRect(-1.08, -0.42, 2.16, 0.045);
g.fillStyle = '#d8dad6';
g.fillRect(-1.08, -0.38, 2.16, 0.012);
for (const x of [-1.05, 1.0]) {
  g.fillStyle = '#ebece8';
  g.fillRect(x, -0.42, 0.05, 0.34);
  g.fillStyle = '#3d3d40';
  g.beginPath();
  g.arc(x + 0.025, -0.05, 0.05, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#8c8c8c';
  g.fillRect(x + 0.01, -0.1, 0.03, 0.03);
}
g.fillStyle = '#b4b6b2';
g.fillRect(0.88, -0.3, 0.1, 0.02);
g.fillRect(0.96, -0.3, 0.02, 0.09);
