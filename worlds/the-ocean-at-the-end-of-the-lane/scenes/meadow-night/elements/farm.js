// Hempstock Farm from the meadow (16 m off): the old red-brick farmhouse, two storeys under a slate roof (its front slope, gabled at the ends), a
// chimney at each gable end, its back door open onto the yard (x −1.5…−0.5) and a window either side of it and
// above; the lean-to dairy on the right. In daylight colours: the moon and its own
// lit door and windows (farm_lit) make the night of it.
const brick = '#9a5f48', slate = '#5d6168', mortar = 'rgba(200, 180, 160, 0.18)';
// the dairy's lean-to on the right
g.fillStyle = '#b8ab95';
g.fillRect(4.2, -2.6, 2.6, 2.6);
g.fillStyle = slate;
g.beginPath();
g.moveTo(4.0, -2.55);
g.lineTo(4.2, -3.6);
g.lineTo(7.0, -2.7);
g.lineTo(7.0, -2.55);
g.closePath();
g.fill();
g.fillStyle = '#5a4434';
g.fillRect(5.2, -1.9, 0.8, 1.9);
// the house front
g.fillStyle = brick;
g.fillRect(-4.2, -5.2, 8.4, 5.2);
g.strokeStyle = mortar;
g.lineWidth = 0.02;
for (let y = -0.08; y > -5.2; y -= 0.16) {
  g.beginPath();
  g.moveTo(-4.2, y);
  g.lineTo(4.2, y);
  g.stroke();
}
// the roof, and its chimneys
g.fillStyle = slate;
g.beginPath();
g.moveTo(-4.4, -5.1);
g.lineTo(-4.3, -7.6);
g.lineTo(4.3, -7.6);
g.lineTo(4.4, -5.1);
g.closePath();
g.fill();
g.strokeStyle = 'rgba(40, 44, 50, 0.35)';
for (let y = -5.3; y > -7.6; y -= 0.22) {
  g.beginPath();
  g.moveTo(-4.4, y);
  g.lineTo(4.4, y);
  g.stroke();
}
g.fillStyle = '#86523e';
for (const x of [-3.3, 2.7]) {
  g.fillRect(x, -8.5, 0.6, 1.1);
  g.fillStyle = '#6a4234';
  g.fillRect(x - 0.05, -8.6, 0.7, 0.12);
  g.fillStyle = '#86523e';
}
// the door's frame and the window frames, white paint, and their dark stone sills
g.fillStyle = '#e6e0d2';
g.fillRect(-1.6, -2.25, 1.2, 2.25);
for (const [x, y] of [[-3.3, -2.0], [1.0, -2.0], [-3.3, -4.6], [-1.3, -4.6], [1.0, -4.6]]) {
  g.fillRect(x - 0.06, y - 0.06, 1.12, 1.32);
  g.fillStyle = '#7b7a74';
  g.fillRect(x - 0.12, y + 1.24, 1.24, 0.08);
  g.fillStyle = '#e6e0d2';
}
// the dark panes the lit ones (farm_lit) do not cover
g.fillStyle = '#2c3038';
for (const [x, y] of [[-3.3, -4.6], [1.0, -4.6], [1.0, -2.0]]) g.fillRect(x, y, 1.0, 1.2);
g.fillStyle = '#e6e0d2';
for (const [x, y] of [[-3.3, -4.6], [1.0, -4.6], [1.0, -2.0]]) {
  g.fillRect(x + 0.47, y, 0.06, 1.2);
  g.fillRect(x, y + 0.57, 1.0, 0.06);
}
// the doorstep
g.fillStyle = '#8a877e';
g.fillRect(-1.75, -0.12, 1.5, 0.12);
