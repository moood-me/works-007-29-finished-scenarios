// Persephone's pomegranate tree in its tub, by the right wall: a wide tub of clay, the trunk low and twisted, parting
// into crooked branches; a round crown of small narrow leaves, dark glossy green; among them a few pomegranates — dusky
// gold with a brownish blush (the world's one red is Eurydice's ribbon: nothing else is red), and two or three of its
// flowers, pale. Indoors there is no wind: it stands still.
// the tub
g.fillStyle = '#8c6a52';
g.beginPath();
g.moveTo(-0.5, -0.62);
g.lineTo(0.5, -0.62);
g.lineTo(0.4, 0.02);
g.lineTo(-0.4, 0.02);
g.closePath();
g.fill();
g.fillStyle = '#76584a';
g.fillRect(-0.53, -0.68, 1.06, 0.1);
g.fillRect(-0.45, -0.3, 0.9, 0.04);
// the trunk and branches
g.strokeStyle = '#4e3b2c';
g.lineCap = 'round';
g.lineWidth = 0.12;
g.beginPath();
g.moveTo(0, -0.62);
g.bezierCurveTo(0.1, -0.9, -0.12, -1.1, 0.02, -1.35);
g.stroke();
g.lineWidth = 0.06;
for (const [x, y] of [[-0.55, -1.9], [0.5, -1.95], [0.05, -2.2], [-0.3, -2.15], [0.35, -1.6]]) {
  g.beginPath();
  g.moveTo(0.02, -1.35);
  g.quadraticCurveTo(x * 0.3, y * 0.85, x, y);
  g.stroke();
}
// the crown: many small leaves in clusters
for (let i = 0; i < 520; i++) {
  const a = e.anim.hash(i, 1) * Math.PI * 2, r = Math.sqrt(e.anim.hash(i, 2));
  const x = Math.cos(a) * r * 0.85, y = -1.85 + Math.sin(a) * r * 0.55;
  g.fillStyle = e.anim.hash(i, 3) > 0.6 ? '#4f6a46' : e.anim.hash(i, 3) > 0.3 ? '#3f5839' : '#34492f';
  g.save();
  g.translate(x, y);
  g.rotate(e.anim.hash(i, 4) * Math.PI);
  g.beginPath();
  g.ellipse(0, 0, 0.07, 0.022, 0, 0, Math.PI * 2);
  g.fill();
  g.restore();
}
// the fruit
for (const [x, y, r] of [[-0.42, -1.62, 0.07], [0.3, -1.5, 0.08], [0.55, -1.9, 0.065], [-0.1, -1.45, 0.06], [0.1, -2.15, 0.06]]) {
  g.fillStyle = '#b7925a';
  g.beginPath();
  g.arc(x, y, r, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = 'rgba(120,80,56,0.55)';
  g.beginPath();
  g.arc(x + r * 0.25, y + r * 0.1, r * 0.7, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#7a6040';
  g.fillRect(x - r * 0.25, y - r - 0.03, r * 0.5, 0.04);
}
// a few pale flowers
g.fillStyle = '#efe6d6';
for (const [x, y] of [[-0.62, -1.95], [0.7, -1.75], [-0.2, -2.3]]) {
  g.beginPath();
  g.arc(x, y, 0.035, 0, Math.PI * 2);
  g.fill();
}
