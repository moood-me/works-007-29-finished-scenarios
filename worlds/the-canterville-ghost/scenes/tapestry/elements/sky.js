// The autumn sky late in the afternoon, seen only through the window: pale gold low down, where the sun is going,
// clearing to a washed blue above, a few long thin clouds.
const sky = g.createLinearGradient(0, -0.35, 0, 1.25);
sky.addColorStop(0, '#7d97b4');
sky.addColorStop(0.35, '#b9c2c0');
sky.addColorStop(0.5, '#e9d3a0');
sky.addColorStop(0.62, '#f2c27a');
sky.addColorStop(1, '#d8a868');
g.fillStyle = sky;
g.fillRect(-0.4, -0.4, e.aspect + 0.8, 1.7);
const sun = g.createRadialGradient(e.aspect * 0.56, 0.5, 0, e.aspect * 0.56, 0.5, 0.45);
sun.addColorStop(0, 'rgba(255,236,190,0.95)');
sun.addColorStop(0.15, 'rgba(255,214,150,0.6)');
sun.addColorStop(1, 'rgba(255,200,130,0)');
g.fillStyle = sun;
g.fillRect(-0.4, -0.4, e.aspect + 0.8, 1.7);
e.at(e.aspect * 0.56, 0.5, 'sun');
g.fillStyle = 'rgba(214,170,140,0.45)';
for (const [x, y, w] of [[0.3, 0.3, 0.7], [0.9, 0.36, 0.5], [1.3, 0.25, 0.6]]) {
  g.beginPath();
  g.ellipse(x * e.aspect / 1.78, y, w / 2, 0.012, 0, 0, Math.PI * 2);
  g.fill();
}
