// The evening seen through the slit under the ceiling: the festival street's deep blue air, a lantern's warm points
const sky = g.createLinearGradient(0, -0.35, 0, 0);
sky.addColorStop(0, '#6d7fb6');
sky.addColorStop(1, '#2f3a62');
g.fillStyle = sky;
g.fillRect(-0.7, -0.35, 1.4, 0.35);
g.fillStyle = '#ffd08a';
for (const [x, y] of [[-0.3, -0.12], [0.05, -0.1], [0.32, -0.14]]) {
  g.beginPath();
  g.arc(x, y, 0.012, 0, Math.PI * 2);
  g.fill();
}
