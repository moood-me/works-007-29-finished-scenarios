// A great cedar of Lebanon on the lawn's left: a thick trunk dividing low, its foliage in broad flat tiers, dark
// blue-green, spreading wide (metres: x across from the trunk, y up from the ground). Each tier a layer that stirs a
// little in the evening air.
g.fillStyle = '#4f4036';
g.beginPath();
g.moveTo(-0.95, 0);
g.bezierCurveTo(-0.6, -2, -0.55, -4, -0.9, -6.5);
g.lineTo(-0.3, -6.6);
g.bezierCurveTo(-0.2, -9, 0.1, -12, 0.0, -15.5);
g.lineTo(0.3, -15.5);
g.bezierCurveTo(0.5, -12, 0.55, -9, 0.6, -6.4);
g.bezierCurveTo(0.7, -4, 0.8, -2, 1.1, 0);
g.closePath();
g.fill();
// the great limbs out to the tiers
g.strokeStyle = '#4f4036';
g.lineCap = 'round';
for (const [x1, y1, x2, y2, w] of [[-0.6, -3, -7, -3.9, 0.35], [0.6, -3.4, 6, -4.2, 0.3], [-0.4, -5.8, -6.5, -6.8, 0.25], [0.4, -6.2, 6.5, -7.1, 0.25], [0, -8.5, -5, -9.4, 0.18], [0.2, -9, 4.5, -9.8, 0.18]]) {
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(x1, y1);
  g.quadraticCurveTo((x1 + x2) / 2, y1 - 0.2, x2, y2);
  g.stroke();
}
const tiers = [[-10.2, 7.2, -4.1, 1.5], [-8.6, 8.2, -6.9, 1.4], [-7.4, 6.8, -9.6, 1.3], [-5.6, 5.4, -12.1, 1.2], [-3.6, 3.8, -14.3, 1.1], [-1.8, 2.2, -16, 0.9]];
tiers.forEach(([x0, x1, y, th], k) => {
  e.layer(`tier${k}`, { pivot: [0, y], wind: { strength: 0.12, gust: 0.4 }, box: [x0 - 1, y - th - 1, x1 + 1, y + th * 0.8] }, c => {
    for (let i = 0; i < 90; i++) {
      const u = e.rnd();
      const x = x0 + u * (x1 - x0);
      const edge = 1 - Math.pow(Math.abs(u * 2 - 1), 2.2);
      const yy = y - th * 0.15 + (e.rnd() - 0.6) * th * (0.4 + 0.6 * edge);
      c.fillStyle = ['#2b4436', '#33503f', '#263c30', '#3d5c47'][Math.floor(e.rnd() * 4)];
      c.beginPath();
      c.ellipse(x, yy, 0.6 + e.rnd() * 0.9, 0.25 + e.rnd() * 0.3 * (0.5 + edge), (e.rnd() - 0.5) * 0.3, 0, Math.PI * 2);
      c.fill();
    }
  });
});
