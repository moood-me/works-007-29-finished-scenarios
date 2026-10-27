// The box Slim's bitch had her pups in, by the hay (metres, its foot at the middle): an old apple box on its side,
// straw in it, three of the pups asleep in a heap, a fourth's head up over the edge.
g.fillStyle = '#a88a5e';
g.fillRect(-0.4, -0.42, 0.8, 0.42);
g.fillStyle = 'rgba(70,50,30,0.6)';
g.fillRect(-0.4, -0.29, 0.8, 0.012);
g.fillRect(-0.4, -0.15, 0.8, 0.012);
g.fillStyle = '#8f744c';
g.fillRect(-0.4, -0.42, 0.03, 0.42);
g.fillRect(0.37, -0.42, 0.03, 0.42);
g.fillStyle = '#c9ab66';
g.beginPath();
g.moveTo(-0.4, -0.4);
for (let x = -0.4; x <= 0.4; x += 0.05) g.lineTo(x, -0.43 - 0.03 * e.rnd());
g.lineTo(0.4, -0.4);
g.closePath();
g.fill();
for (const [x, y, c] of [[-0.18, -0.47, '#7a5a3c'], [0.02, -0.48, '#e2d6c2'], [0.2, -0.46, '#5b4330']]) {
  g.fillStyle = c;
  g.beginPath();
  g.ellipse(x, y, 0.11, 0.06, 0, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#8b6a48';
g.beginPath();
g.ellipse(-0.3, -0.52, 0.06, 0.055, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#5b4330';
g.beginPath();
g.ellipse(-0.34, -0.55, 0.025, 0.04, 0.5, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#1e1814';
g.beginPath();
g.arc(-0.33, -0.52, 0.009, 0, Math.PI * 2);
g.fill();
