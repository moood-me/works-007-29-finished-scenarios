// The bed's top from above (metres; its middle at distance 4.95, y toward the viewer): the grey sheet, the pillow at
// the head (the right, under the window), the brown blanket pushed down toward the room.
g.fillStyle = '#d6d0c2';
g.fillRect(-0.95, -0.5, 1.9, 1.0);
g.strokeStyle = 'rgba(140,130,115,0.35)';
g.lineWidth = 0.015;
for (let i = 0; i < 9; i++) {
  const x = -0.8 + e.rnd() * 1.4;
  g.beginPath();
  g.moveTo(x, -0.4 + e.rnd() * 0.3);
  g.quadraticCurveTo(x + 0.15, -0.1 + e.rnd() * 0.2, x + 0.05, 0.2 + e.rnd() * 0.2);
  g.stroke();
}
g.fillStyle = '#ece6d8';
g.beginPath();
g.ellipse(0.66, -0.05, 0.2, 0.34, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = 'rgba(160,150,135,0.4)';
g.beginPath();
g.ellipse(0.62, -0.05, 0.08, 0.18, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#7a5a44';
g.beginPath();
g.moveTo(-0.2, 0.5);
g.lineTo(0.9, 0.5);
g.lineTo(0.9, 0.18);
g.quadraticCurveTo(0.4, 0.05, -0.2, 0.22);
g.closePath();
g.fill();
