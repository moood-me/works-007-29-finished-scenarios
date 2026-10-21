// The chimney stack's front, from the stove's top (1.6 m) up through the ceiling (3 m), set back half a metre from the
// stove's front: whitewash, the painted band of blue flowers again, smoke-stained toward the ceiling.
const L = e.lib;
g.fillStyle = '#ece3d0';
g.fillRect(-0.57, -1.42, 1.14, 1.42);
L.dabs(g, 103, -0.57, -1.42, 1.14, 1.42, ['#f6efe0', '#d8ccb6', '#e4d9c4'], 60, 0.08, 0.6, 0.6);
const smoke = g.createLinearGradient(0, -1.42, 0, -0.7);
smoke.addColorStop(0, 'rgba(90, 70, 55, 0.4)');
smoke.addColorStop(1, 'rgba(90, 70, 55, 0)');
g.fillStyle = smoke;
g.fillRect(-0.57, -1.42, 1.14, 0.72);
g.fillStyle = '#d9cfb9';
g.fillRect(-0.57, -0.62, 1.14, 0.18);
for (let x = -0.45; x < 0.5; x += 0.2) {
  g.fillStyle = '#3f62a8';
  for (let p = 0; p < 5; p++) {
    const a = (p / 5) * Math.PI * 2;
    g.beginPath();
    g.arc(x + Math.cos(a) * 0.025, -0.53 + Math.sin(a) * 0.025, 0.02, 0, Math.PI * 2);
    g.fill();
  }
  g.fillStyle = '#e9c24e';
  g.beginPath();
  g.arc(x, -0.53, 0.014, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#b5342e';
  g.beginPath();
  g.arc(x + 0.1, -0.49, 0.016, 0, Math.PI * 2);
  g.fill();
}
