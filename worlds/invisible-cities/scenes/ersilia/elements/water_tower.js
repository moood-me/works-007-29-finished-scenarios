// The station's water tower across the line: a round brick base with an arched door, a wooden tank above it with
// its iron hoops, a low cone of a roof — seen from one side, flat
g.fillStyle = '#9a6b54';
g.fillRect(-2.4, -5.1, 4.8, 5.1);
g.strokeStyle = 'rgba(70, 44, 34, 0.35)';
g.lineWidth = 0.04;
for (let y = -0.4; y > -5.1; y -= 0.45) {
  g.beginPath();
  g.moveTo(-2.4, y);
  g.lineTo(2.4, y);
  g.stroke();
}
g.fillStyle = '#3a2f2c';
g.beginPath();
g.moveTo(-0.55, 0);
g.lineTo(-0.55, -1.6);
g.arc(0, -1.6, 0.55, Math.PI, 0);
g.lineTo(0.55, 0);
g.closePath();
g.fill();
g.fillStyle = '#6e5a46';
g.fillRect(-2.9, -8.6, 5.8, 3.5);
g.fillStyle = '#4b4038';
for (const y of [-5.5, -6.6, -7.7]) g.fillRect(-2.9, y, 5.8, 0.1);
g.fillStyle = '#5a4c44';
g.beginPath();
g.moveTo(-3.15, -8.55);
g.lineTo(0, -10.4);
g.lineTo(3.15, -8.55);
g.closePath();
g.fill();
