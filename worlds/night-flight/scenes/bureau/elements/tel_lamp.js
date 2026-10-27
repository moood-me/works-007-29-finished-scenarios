// The telegraph table's lamp: a brass stand and its green glass shade, the bulb under it (`bulb`, by `lamps`).
g.fillStyle = '#9c7e3e';
g.fillRect(-0.09, -0.03, 0.18, 0.03);
g.fillRect(-0.012, -0.36, 0.024, 0.34);
g.fillStyle = '#2f6a48';
g.beginPath();
g.moveTo(-0.18, -0.34);
g.quadraticCurveTo(0, -0.5, 0.18, -0.34);
g.lineTo(0.17, -0.31);
g.lineTo(-0.17, -0.31);
g.closePath();
g.fill();
g.fillStyle = '#4f9a6e';
g.fillRect(-0.15, -0.4, 0.3, 0.015);
if (e.state.lamps) {
  g.fillStyle = '#fff1cf';
  g.fillRect(-0.12, -0.315, 0.24, 0.02);
  e.light(0, -0.3, 0.25, '#ffdba0', 0.7, 'bulb');
}
