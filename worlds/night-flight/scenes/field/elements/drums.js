// Two fuel drums and one lying on its side by the hangar's corner: steel painted dull red, their hoops.
const drum = (x) => {
  g.fillStyle = '#7d3b30';
  g.fillRect(x - 0.3, -0.9, 0.6, 0.9);
  g.fillStyle = '#5e2c25';
  for (const y of [-0.62, -0.3]) g.fillRect(x - 0.3, y, 0.6, 0.04);
  g.fillStyle = '#8e4a3c';
  g.fillRect(x - 0.3, -0.9, 0.6, 0.04);
};
drum(-0.75);
drum(-0.1);
g.fillStyle = '#7a3a30';
g.beginPath();
g.ellipse(0.75, -0.3, 0.45, 0.3, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#5e2c25';
g.beginPath();
g.ellipse(0.42, -0.3, 0.1, 0.3, 0, 0, Math.PI * 2);
g.fill();
