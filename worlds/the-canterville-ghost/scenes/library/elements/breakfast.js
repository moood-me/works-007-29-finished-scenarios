// The breakfast table by the window, from before (1.9 m wide, 0.76 m high): the white cloth hanging over its edge, the
// turned oak legs below it.
g.fillStyle = '#3e2a1c';
for (const x of [-0.82, 0.82]) g.fillRect(x - 0.035, -0.6, 0.07, 0.6);
g.fillStyle = '#e8e2d4';
g.beginPath();
g.moveTo(-0.95, -0.77);
g.lineTo(0.95, -0.77);
g.lineTo(0.95, -0.5);
for (let x = 0.95; x > -0.94; x -= 0.19) g.quadraticCurveTo(x - 0.095, -0.46, x - 0.19, -0.5);
g.closePath();
g.fill();
g.strokeStyle = '#cfc7b6';
g.lineWidth = 0.008;
for (let x = -0.85; x < 0.9; x += 0.19) {
  g.beginPath();
  g.moveTo(x, -0.74);
  g.lineTo(x + 0.02, -0.52);
  g.stroke();
}
