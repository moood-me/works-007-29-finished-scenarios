// Rick's house, across the field to the right: a small white clapboard house, a grey shingled roof, a porch with two
// posts, two windows, a chimney (metres from its foot; 10 m wide).
g.fillStyle = '#e4ddd0';
g.fillRect(-5, -4.6, 10, 4.6);
g.strokeStyle = 'rgba(150,140,128,0.5)';
g.lineWidth = 0.05;
g.beginPath();
for (let y = -4.4; y < 0; y += 0.3) {
  g.moveTo(-5, y);
  g.lineTo(5, y);
}
g.stroke();
// the roof
g.fillStyle = '#6d6c6e';
g.beginPath();
g.moveTo(-5.6, -4.5);
g.lineTo(-3.2, -7.6);
g.lineTo(3.4, -7.6);
g.lineTo(5.6, -4.5);
g.closePath();
g.fill();
g.fillStyle = '#7d5a4a';
g.fillRect(2.0, -8.4, 0.8, 1.6);
// windows and the door
g.fillStyle = '#4b5560';
for (const x of [-3.6, 1.6]) g.fillRect(x, -3.4, 1.2, 1.4);
g.fillStyle = '#f2ece2';
for (const x of [-3.6, 1.6]) {
  g.fillRect(x + 0.56, -3.4, 0.08, 1.4);
  g.fillRect(x, -2.74, 1.2, 0.08);
}
g.fillStyle = '#5a4a40';
g.fillRect(-0.8, -2.6, 1.0, 2.6);
// the porch roof and its posts
g.fillStyle = '#8a8888';
g.fillRect(-1.8, -3.0, 3.2, 0.25);
g.fillStyle = '#efe9df';
g.fillRect(-1.7, -2.8, 0.15, 2.8);
g.fillRect(1.25, -2.8, 0.15, 2.8);
e.at(0, -4, 'house');
