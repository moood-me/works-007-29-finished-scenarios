// The range's hotplate, seen from above: black iron, two round lids, the steel edge rubbed bright.
g.fillStyle = '#2a292b';
g.fillRect(-0.29, -0.78, 0.58, 1.56);
g.strokeStyle = '#77756f';
g.lineWidth = 0.02;
g.strokeRect(-0.28, -0.77, 0.56, 1.54);
for (const y of [-0.35, 0.3]) {
  g.strokeStyle = '#4a494b';
  g.lineWidth = 0.02;
  g.beginPath();
  g.arc(0, y, 0.17, 0, Math.PI * 2);
  g.stroke();
  g.beginPath();
  g.arc(0, y, 0.1, 0, Math.PI * 2);
  g.stroke();
}
