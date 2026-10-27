// The storeroom's earth floor from above (x across, y toward the viewer: the back wall at y −2.5, the plane's far edge −2.7): packed earth, damp
// and mottled, a few stones and wisps of old straw; a path trodden darker from the doorway (x −1.1) to the middle,
// and the earth darker and smeared where the child sits (x 1.25, y 0)
const A = e.anim;
g.fillStyle = '#5b4939';
g.fillRect(-2.1, -2.7, 4.2, 5.4);
for (let i = 0; i < 70; i++) {
  const x = -2.1 + 4.2 * A.hash(i, 1), y = -2.7 + 5.4 * A.hash(i, 2);
  g.fillStyle = A.hash(i, 3) < 0.5 ? 'rgba(78, 62, 48, 0.35)' : 'rgba(110, 92, 72, 0.25)';
  g.beginPath();
  g.ellipse(x, y, 0.15 + 0.35 * A.hash(i, 4), 0.1 + 0.25 * A.hash(i, 5), A.hash(i, 6) * 3, 0, Math.PI * 2);
  g.fill();
}
const trod = g.createLinearGradient(-1.1, -2.5, 0, -0.3);
trod.addColorStop(0, 'rgba(60, 47, 36, 0.55)');
trod.addColorStop(1, 'rgba(60, 47, 36, 0)');
g.fillStyle = trod;
g.beginPath();
g.moveTo(-1.5, -2.7);
g.lineTo(-0.7, -2.7);
g.lineTo(0.3, -0.1);
g.lineTo(-0.7, 0.1);
g.closePath();
g.fill();
const sat = g.createRadialGradient(1.3, 0, 0.05, 1.3, 0, 0.9);
sat.addColorStop(0, 'rgba(50, 40, 30, 0.7)');
sat.addColorStop(1, 'rgba(50, 40, 30, 0)');
g.fillStyle = sat;
g.fillRect(0.4, -1, 1.7, 2);
for (let i = 0; i < 24; i++) {
  g.fillStyle = ['#7a6a58', '#6a5c4c', '#857563'][i % 3];
  g.beginPath();
  g.ellipse(-2 + 4 * A.hash(i, 7), -2.6 + 5.2 * A.hash(i, 8), 0.025 + 0.03 * A.hash(i, 9), 0.02 + 0.02 * A.hash(i, 10), A.hash(i, 11) * 3, 0, Math.PI * 2);
  g.fill();
}
g.strokeStyle = '#8f7a52';
g.lineWidth = 0.01;
for (let i = 0; i < 30; i++) {
  const x = -2 + 4 * A.hash(i, 12), y = -2.6 + 5.2 * A.hash(i, 13), a = A.hash(i, 14) * Math.PI, l = 0.08 + 0.12 * A.hash(i, 15);
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l);
  g.stroke();
}
