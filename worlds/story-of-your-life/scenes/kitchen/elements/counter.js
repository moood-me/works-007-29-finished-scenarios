// The counter's cupboards, from their foot (x −2.11…2.11; the worktop at 0.92 m): sage-green doors under a row of
// drawers, brass knobs, the dark toe-kick; a tea towel hung over a door.
g.fillStyle = '#4c473f';
g.fillRect(-2.11, -0.1, 4.22, 0.12);
g.fillStyle = '#7f927b';
g.fillRect(-2.11, -0.92, 4.22, 0.82);
for (let i = 0; i < 7; i++) {
  const x = -2.11 + i * 0.6;
  g.fillStyle = '#8fa18b';
  g.fillRect(x + 0.02, -0.9, 0.565, 0.16);
  g.fillRect(x + 0.02, -0.71, 0.565, 0.6);
  g.strokeStyle = 'rgba(70,86,68,0.55)';
  g.lineWidth = 0.01;
  g.strokeRect(x + 0.07, -0.66, 0.465, 0.5);
  g.fillStyle = '#b89a5e';
  g.beginPath();
  g.arc(x + 0.3, -0.82, 0.016, 0, Math.PI * 2);
  g.fill();
  g.beginPath();
  g.arc(x + (i % 2 ? 0.08 : 0.52), -0.62, 0.016, 0, Math.PI * 2);
  g.fill();
}
// the tea towel: blue stripes on white, over the second door
e.layer('towel', { pivot: [-1.5, -0.66], wind: 0.02, box: [-1.66, -0.68, -1.34, -0.28] }, c => {
  c.fillStyle = '#f2efe8';
  c.fillRect(-1.64, -0.66, 0.28, 0.36);
  c.fillStyle = '#5873a0';
  for (const y of [-0.6, -0.56, -0.38]) c.fillRect(-1.64, y, 0.28, 0.018);
});
