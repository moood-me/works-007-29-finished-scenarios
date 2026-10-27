// The old oak at the corner of the yard, left of the farmhouse (19 m off, 11 m high): a thick trunk, a broad crown of
// round masses of leaves stirring in the night air (layers in the wind).
g.fillStyle = '#4a3f33';
g.beginPath();
g.moveTo(-0.6, 0.05);
g.quadraticCurveTo(-0.35, -2.5, -0.5, -4.5);
g.lineTo(0.45, -4.5);
g.quadraticCurveTo(0.3, -2.5, 0.7, 0.05);
g.closePath();
g.fill();
g.strokeStyle = '#4a3f33';
g.lineWidth = 0.28;
g.beginPath();
g.moveTo(-0.2, -4.2);
g.quadraticCurveTo(-1.8, -5.5, -3, -6.4);
g.moveTo(0.2, -4.2);
g.quadraticCurveTo(1.6, -5.8, 2.8, -6.8);
g.stroke();
for (let k = 0; k < 5; k++) {
  const cx = -3.4 + 1.7 * k + (e.rnd() - 0.5) * 0.6, cy = -7.4 - 1.6 * Math.sin((k / 4) * Math.PI) + (e.rnd() - 0.5) * 0.6;
  e.layer('crown' + k, { pivot: [cx, cy + 2.2], wind: { strength: 0.06, gust: 0.3 }, box: [cx - 3.2, cy - 3.0, cx + 3.2, cy + 2.6] }, g => {
    for (let j = 0; j < 9; j++) {
      const x = cx + (e.rnd() - 0.5) * 3.2, y = cy + (e.rnd() - 0.5) * 2.4, r = 1.0 + 0.9 * e.rnd();
      g.fillStyle = j % 3 ? '#4f6a46' : '#5d7a50';
      g.beginPath();
      g.ellipse(x, y, r * 1.15, r, 0, 0, Math.PI * 2);
      g.fill();
    }
  });
}
