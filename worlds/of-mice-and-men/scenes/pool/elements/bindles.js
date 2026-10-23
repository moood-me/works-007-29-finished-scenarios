// Their bindles, dropped on the sand: two blanket rolls — a grey wool one and a brown — tied with rope, seen from the
// side, an end turned toward the viewer
const roll = (x, y, l, r, cloth, end) => {
  g.fillStyle = cloth;
  g.beginPath();
  g.roundRect(x - l / 2, y - 2 * r, l, 2 * r, r);
  g.fill();
  g.fillStyle = end;
  g.beginPath();
  g.ellipse(x + l / 2 - r * 0.4, y - r, r * 0.45, r * 0.95, 0, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = cloth;
  g.lineWidth = 0.012;
  g.beginPath();
  g.ellipse(x + l / 2 - r * 0.4, y - r, r * 0.25, r * 0.55, 0, 0, Math.PI * 2);
  g.stroke();
  g.strokeStyle = '#b39a6c';
  g.lineWidth = 0.022;
  for (const u of [-0.3, 0.3]) {
    g.beginPath();
    g.moveTo(x + u * l, y);
    g.lineTo(x + u * l, y - 2 * r);
    g.stroke();
  }
};
roll(-0.15, 0, 0.7, 0.1, '#787268', '#8f897d');
roll(0.22, -0.02, 0.62, 0.09, '#6e5640', '#87704f');
