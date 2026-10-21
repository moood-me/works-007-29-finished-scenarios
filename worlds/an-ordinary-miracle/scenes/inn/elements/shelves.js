// The shelves on the wall behind the counter: two oak planks on carved brackets with painted plates standing on
// edge, jugs, a row of bottles, a small keg with its tap on the lower one; at the right, Emil's fiddle and its bow
// hanging on a peg.
const L = e.lib;
for (const y of [-1.45, -2.05]) {
  g.fillStyle = '#7a5232';
  g.fillRect(-0.95, y, 1.7, 0.05);
  g.fillStyle = '#5a3a24';
  for (const x of [-0.85, 0.65]) {
    g.beginPath();
    g.moveTo(x, y + 0.05);
    g.lineTo(x + 0.06, y + 0.05);
    g.quadraticCurveTo(x + 0.06, y + 0.16, x, y + 0.2);
    g.closePath();
    g.fill();
  }
}
// the plates on the upper shelf
for (const [x, c] of [[-0.75, '#3f5f9c'], [-0.48, '#a8382c'], [-0.21, '#3f5f9c']]) {
  g.fillStyle = '#efe4cc';
  g.beginPath();
  g.arc(x, -2.17, 0.12, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = c;
  g.lineWidth = 0.02;
  g.beginPath();
  g.arc(x, -2.17, 0.09, 0, Math.PI * 2);
  g.stroke();
  g.fillStyle = c;
  for (let p = 0; p < 5; p++) {
    const a = (p / 5) * Math.PI * 2;
    g.beginPath();
    g.arc(x + Math.cos(a) * 0.03, -2.17 + Math.sin(a) * 0.03, 0.022, 0, Math.PI * 2);
    g.fill();
  }
}
// jugs on the upper shelf
for (const [x, h, c] of [[0.08, 0.22, '#a5683e'], [0.3, 0.16, '#5e6a3a'], [0.5, 0.2, '#8a4a2a']]) {
  g.fillStyle = c;
  g.beginPath();
  g.moveTo(x - 0.05, -2.05);
  g.quadraticCurveTo(x - 0.1, -2.05 - h * 0.6, x - 0.04, -2.05 - h);
  g.lineTo(x + 0.04, -2.05 - h);
  g.quadraticCurveTo(x + 0.1, -2.05 - h * 0.6, x + 0.05, -2.05);
  g.closePath();
  g.fill();
}
// bottles and the keg on the lower shelf
for (let i = 0; i < 6; i++) {
  const x = -0.85 + i * 0.09;
  g.fillStyle = ['#3f5a3a', '#6a3a2a', '#3a4a5a'][i % 3];
  g.fillRect(x - 0.03, -1.67, 0.06, 0.22);
  g.fillRect(x - 0.012, -1.74, 0.024, 0.08);
}
g.fillStyle = '#8a6038';
g.beginPath();
g.ellipse(0.1, -1.6, 0.2, 0.15, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#4a4440';
for (const x of [-0.02, 0.22]) g.fillRect(x - 0.012, -1.75, 0.024, 0.3);
g.fillStyle = '#b08a3a';
g.fillRect(0.06, -1.5, 0.08, 0.04);
// the fiddle on its peg: a warm brown body, the neck up, the bow beside it
g.save();
g.translate(0.68, -1.0);
g.rotate(-0.12);
g.fillStyle = '#9a4a1e';
g.beginPath();
g.ellipse(0, -0.12, 0.1, 0.11, 0, 0, Math.PI * 2);
g.ellipse(0, -0.3, 0.08, 0.09, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(-0.06, -0.24, 0.12, 0.08);
g.fillStyle = '#2a1a12';
g.fillRect(-0.015, -0.6, 0.03, 0.3);
g.beginPath();
g.arc(0, -0.62, 0.025, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#1e1410';
g.fillRect(-0.035, -0.12, 0.07, 0.015);
g.strokeStyle = '#e6d6b0';
g.lineWidth = 0.004;
for (const x of [-0.01, 0.01]) {
  g.beginPath();
  g.moveTo(x, -0.6);
  g.lineTo(x, -0.1);
  g.stroke();
}
g.fillStyle = '#1e1410';
for (const s of [-1, 1]) {
  g.beginPath();
  g.ellipse(s * 0.04, -0.2, 0.006, 0.025, 0, 0, Math.PI * 2);
  g.fill();
}
g.restore();
g.strokeStyle = '#5a3a24';
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(0.84, -1.72);
g.lineTo(0.9, -1.0);
g.stroke();
g.fillStyle = '#3a2a20';
g.beginPath();
g.arc(0.66, -1.66, 0.02, 0, Math.PI * 2);
g.fill();
