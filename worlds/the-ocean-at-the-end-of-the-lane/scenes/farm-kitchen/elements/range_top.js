// The range's hotplate, seen from above: black iron, two round lids, the steel edge rubbed bright.
g.fillStyle = '#2a292b';
g.fillRect(-0.65, -0.225, 1.3, 0.45);
g.strokeStyle = '#77756f';
g.lineWidth = 0.02;
g.strokeRect(-0.64, -0.215, 1.28, 0.43);
for (const x of [-0.32, 0.32]) {
  g.strokeStyle = '#4a494b';
  g.lineWidth = 0.02;
  g.beginPath();
  g.arc(x, 0, 0.17, 0, Math.PI * 2);
  g.stroke();
  g.beginPath();
  g.arc(x, 0, 0.1, 0, Math.PI * 2);
  g.stroke();
}
