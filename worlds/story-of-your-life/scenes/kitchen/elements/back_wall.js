// The kitchen's back wall, from its foot (x −2.42…3.05 — the left wall stands at −2.4 —, the ceiling at 2.55 m): cream paint cut round the window
// (x −0.2…1.4, its sill at 1.0 m, its top at 2.15 m); the tiles over the counter, the sage cupboards on the left,
// the clock over the window
const CX = 0.6, CY = -2.36, R = 0.14;
g.fillStyle = '#5c544a';
g.beginPath();
g.arc(CX, CY, R, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#f6f2ea';
g.beginPath();
g.arc(CX, CY, R * 0.86, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#3b3630';
g.lineCap = 'round';
g.lineWidth = 0.007;
for (let k = 0; k < 12; k++) {
  const a = (k / 12) * Math.PI * 2;
  g.beginPath();
  g.moveTo(CX + Math.sin(a) * R * 0.7, CY - Math.cos(a) * R * 0.7);
  g.lineTo(CX + Math.sin(a) * R * 0.8, CY - Math.cos(a) * R * 0.8);
  g.stroke();
}
const hand = (a, l, w) => {
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(CX, CY);
  g.lineTo(CX + Math.sin(a) * l, CY - Math.cos(a) * l);
  g.stroke();
};
hand(((6 + 40 / 60) / 12) * Math.PI * 2, R * 0.45, 0.012);
hand((40 / 60) * Math.PI * 2, R * 0.68, 0.008);
// the coat hook right of the window and her mother's quilted jacket on it
g.fillStyle = '#9b7a52';
g.fillRect(1.72, -1.84, 0.4, 0.05);
g.fillStyle = '#5c4a38';
g.fillRect(1.91, -1.8, 0.02, 0.06);
g.fillStyle = '#8a5a3c';
g.beginPath();
g.moveTo(1.9, -1.76);
g.quadraticCurveTo(1.7, -1.7, 1.68, -1.44);
g.lineTo(1.66, -0.98);
g.lineTo(1.82, -0.95);
g.lineTo(2.02, -0.95);
g.lineTo(2.18, -0.98);
g.lineTo(2.16, -1.44);
g.quadraticCurveTo(2.14, -1.7, 1.94, -1.76);
g.closePath();
g.fill();
g.strokeStyle = 'rgba(70,44,28,0.5)';
g.lineWidth = 0.008;
for (let y = -1.58; y < -1.0; y += 0.1) {
  g.beginPath();
  g.moveTo(1.68, y);
  g.lineTo(2.16, y);
  g.stroke();
}
g.beginPath();
g.moveTo(1.92, -1.72);
g.lineTo(1.92, -0.96);
g.stroke();
g.fillStyle = '#6e452e';
g.beginPath();
g.moveTo(1.78, -1.74);
g.lineTo(1.92, -1.6);
g.lineTo(2.06, -1.74);
g.lineTo(1.92, -1.68);
g.closePath();
g.fill();
// the skirting where the wall shows
g.fillStyle = '#d9cdb6';
g.fillRect(1.82, -0.1, 1.23, 0.12);
