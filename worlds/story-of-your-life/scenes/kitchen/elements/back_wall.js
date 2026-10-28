// The kitchen's back wall, from its foot (x −2.42…3.05 — the left wall stands at −2.4 —, the ceiling at 2.55 m):
// cream paint cut round the window (x −0.2…1.4, its sill at 1.0 m, its top at 2.15 m); the tiles over the counter,
// the sage cupboards on the left, the clock over the window (twenty to seven); right of the window, on its hook,
// her mother's quilted jacket.
g.save();
g.beginPath();
g.rect(-2.42, -2.57, 5.47, 2.59);
g.rect(-0.2, -2.15, 1.6, 1.15);
g.clip('evenodd');
g.fillStyle = '#e9dfcb';
g.fillRect(-2.42, -2.57, 5.47, 2.59);
// the tiles behind the counter
g.fillStyle = '#f1ece1';
g.fillRect(-2.42, -1.55, 4.24, 0.63);
g.strokeStyle = '#cfc5b2';
g.lineWidth = 0.008;
for (let x = -2.42; x < 1.82; x += 0.15) {
  g.beginPath();
  g.moveTo(x, -1.55);
  g.lineTo(x, -0.92);
  g.stroke();
}
for (let y = -1.55; y < -0.9; y += 0.15) {
  g.beginPath();
  g.moveTo(-2.42, y);
  g.lineTo(1.82, y);
  g.stroke();
}
g.restore();
// the cupboards: two doors, their knobs, the shadow under them
g.fillStyle = 'rgba(80,70,50,0.18)';
g.fillRect(-2.4, -1.6, 1.95, 0.06);
for (let i = 0; i < 2; i++) {
  const x = -2.4 + i * 0.975;
  g.fillStyle = '#8fa18b';
  g.fillRect(x + 0.02, -2.38, 0.935, 0.78);
  g.strokeStyle = 'rgba(70,86,68,0.6)';
  g.lineWidth = 0.012;
  g.strokeRect(x + 0.09, -2.31, 0.795, 0.64);
  g.fillStyle = '#b89a5e';
  g.beginPath();
  g.arc(x + (i ? 0.12 : 0.855), -1.72, 0.018, 0, Math.PI * 2);
  g.fill();
}
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
// the coat hook right of the window and her mother's quilted jacket hung on it by its loop: the body falling from
// the shoulders, the sleeves hanging at its sides, the collar, the zip, the quilting
g.fillStyle = '#9b7a52';
g.fillRect(1.72, -1.84, 0.4, 0.05);
g.fillStyle = '#5c4a38';
g.fillRect(1.91, -1.8, 0.02, 0.06);
const JX = 1.92, coat = '#8a5a3c', seam = 'rgba(70,44,28,0.5)';
g.fillStyle = coat;
g.beginPath();
g.moveTo(JX - 0.05, -1.75);
g.quadraticCurveTo(JX - 0.19, -1.72, JX - 0.21, -1.6);
g.lineTo(JX - 0.22, -1.0);
g.lineTo(JX + 0.22, -1.0);
g.lineTo(JX + 0.21, -1.6);
g.quadraticCurveTo(JX + 0.19, -1.72, JX + 0.05, -1.75);
g.closePath();
g.fill();
for (const s of [-1, 1]) {
  g.fillStyle = '#7c4f34';
  g.beginPath();
  g.moveTo(JX + s * 0.19, -1.66);
  g.quadraticCurveTo(JX + s * 0.27, -1.6, JX + s * 0.27, -1.4);
  g.lineTo(JX + s * 0.25, -1.08);
  g.lineTo(JX + s * 0.18, -1.08);
  g.lineTo(JX + s * 0.18, -1.5);
  g.closePath();
  g.fill();
}
g.strokeStyle = seam;
g.lineWidth = 0.008;
for (let y = -1.55; y < -1.0; y += 0.09) {
  g.beginPath();
  g.moveTo(JX - 0.21, y);
  g.lineTo(JX + 0.21, y);
  g.stroke();
}
g.strokeStyle = '#4e3322';
g.lineWidth = 0.01;
g.beginPath();
g.moveTo(JX, -1.7);
g.lineTo(JX, -1.0);
g.stroke();
g.fillStyle = '#6e452e';
g.beginPath();
g.moveTo(JX - 0.12, -1.74);
g.lineTo(JX, -1.62);
g.lineTo(JX + 0.12, -1.74);
g.lineTo(JX, -1.69);
g.closePath();
g.fill();
// the skirting where the wall shows
g.fillStyle = '#d9cdb6';
g.fillRect(1.82, -0.1, 1.23, 0.12);
