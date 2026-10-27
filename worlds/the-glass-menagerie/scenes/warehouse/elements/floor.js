// The storeroom's floor seen from above (metres, y toward the viewer): long boards of old pine running away from the
// viewer, worn pale down the middle where the trucks go, darker by the shelves; a few scraps of tissue paper, a
// box lid, a length of string.
g.fillStyle = '#a38763';
g.fillRect(-3.6, -2.7, 7.2, 5.4);
for (let x = -3.6, i = 0; x < 3.6; x += 0.16, i++) {
  g.fillStyle = i % 3 === 0 ? 'rgba(90,64,42,0.18)' : i % 3 === 1 ? 'rgba(255,240,210,0.07)' : 'rgba(120,90,60,0.1)';
  g.fillRect(x, -2.7, 0.16, 5.4);
  g.fillStyle = 'rgba(60,42,30,0.5)';
  g.fillRect(x, -2.7, 0.008, 5.4);
  for (let y = -2.7 + e.rnd() * 1.5; y < 2.7; y += 1.2 + e.rnd() * 1.6) g.fillRect(x, y, 0.16, 0.008);
}
// worn down the middle, darker toward the walls
const wear = g.createLinearGradient(-3.6, 0, 3.6, 0);
wear.addColorStop(0, 'rgba(70,50,36,0.4)');
wear.addColorStop(0.3, 'rgba(255,240,215,0.1)');
wear.addColorStop(0.7, 'rgba(255,240,215,0.1)');
wear.addColorStop(1, 'rgba(70,50,36,0.4)');
g.fillStyle = wear;
g.fillRect(-3.6, -2.7, 7.2, 5.4);
// tissue paper, a lid, string
g.fillStyle = 'rgba(245,240,228,0.85)';
for (const [x, y, a] of [[-1.3, 0.2, 0.3], [0.4, 1.1, -0.5], [1.9, -0.7, 0.9], [-0.2, -0.9, 1.4]]) {
  g.save();
  g.translate(x, y);
  g.rotate(a);
  g.beginPath();
  g.moveTo(-0.12, -0.06);
  g.lineTo(0.1, -0.09);
  g.lineTo(0.13, 0.05);
  g.lineTo(-0.08, 0.08);
  g.closePath();
  g.fill();
  g.restore();
}
g.save();
g.translate(-0.15, 0.55);
g.rotate(0.25);
g.fillStyle = '#c4ad86';
g.fillRect(-0.17, -0.1, 0.34, 0.2);
g.fillStyle = 'rgba(80,60,40,0.4)';
g.fillRect(-0.17, 0.08, 0.34, 0.02);
g.restore();
g.strokeStyle = '#d9c9a4';
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(0.9, 0.3);
g.bezierCurveTo(1.2, 0.1, 1.1, 0.6, 1.5, 0.5);
g.stroke();
