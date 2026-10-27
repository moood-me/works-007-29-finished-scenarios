// The lower city seen from above, going down from the yard's wall to the shore: gardens and orchards, ochre lanes,
// the pale stone of little squares — the ground the houses (copies) stand on
const A = e.anim, w = 800, d = 800;
g.fillStyle = '#8ea36a';
g.fillRect(-w / 2, -d / 2, w, d);
for (let i = 0; i < 200; i++) {
  const x = (A.hash(i, 1) - 0.5) * w, y = (A.hash(i, 2) - 0.5) * d, r = 5 + 18 * A.hash(i, 3);
  g.fillStyle = ['#7a9459', '#a3b277', '#c9b98d', '#6f8a52'][i % 4];
  g.beginPath();
  g.ellipse(x, y, r * 1.6, r, A.hash(i, 4) * 3, 0, Math.PI * 2);
  g.fill();
}
// lanes winding down toward the sea
g.strokeStyle = '#d9c6a0';
g.lineCap = 'round';
for (let k = 0; k < 7; k++) {
  g.lineWidth = 2.5 + 2 * A.hash(k, 6);
  g.beginPath();
  const y0 = (k - 3) * 110;
  g.moveTo(w / 2, y0);
  for (let x = w / 2; x >= -w / 2; x -= 20) g.lineTo(x, y0 - (w / 2 - x) * 0.4 + 18 * Math.sin(x / 40 + k));
  g.stroke();
}
