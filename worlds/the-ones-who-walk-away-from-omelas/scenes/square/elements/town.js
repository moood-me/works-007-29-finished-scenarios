// The lower city seen from above, going down from the square to the shore: gardens and orchards, ochre lanes, the
// pale stone of little squares — the ground the houses (copies) stand on; the shore's sand at its far edge
const A = e.anim, w = 1600, d = 610;
g.fillStyle = '#8ea36a';
g.fillRect(-w / 2, -d / 2, w, d);
for (let i = 0; i < 260; i++) {
  const x = (A.hash(i, 1) - 0.5) * w, y = (A.hash(i, 2) - 0.5) * d, r = 6 + 22 * A.hash(i, 3);
  g.fillStyle = ['#7a9459', '#a3b277', '#c9b98d', '#6f8a52'][i % 4];
  g.beginPath();
  g.ellipse(x, y, r * 1.6, r, A.hash(i, 4) * 3, 0, Math.PI * 2);
  g.fill();
}
// lanes winding down toward the sea
g.strokeStyle = '#d9c6a0';
g.lineCap = 'round';
for (let k = 0; k < 9; k++) {
  g.lineWidth = 3 + 2 * A.hash(k, 6);
  g.beginPath();
  const x0 = (k - 4) * 150;
  g.moveTo(x0 * 0.3, d / 2);
  for (let y = d / 2; y >= -d / 2; y -= 20) g.lineTo(x0 * (0.3 + 0.7 * (d / 2 - y) / d) + 20 * Math.sin(y / 40 + k), y);
  g.stroke();
}
// the shore: a strip of pale sand along the far edge
g.fillStyle = '#e3d6b4';
g.fillRect(-w / 2, -d / 2, w, 14);
