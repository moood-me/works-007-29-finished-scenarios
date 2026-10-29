// The breakfast table's top from above (1.84 m by 0.94 m, y toward the viewer): a white cloth, the breakfast on it —
// plates, cups and saucers at each place, the teapot, the toast rack, the marmalade.
g.fillStyle = '#ece6da';
g.fillRect(-0.92, -0.47, 1.84, 0.94);
g.strokeStyle = '#d2cab8';
g.lineWidth = 0.01;
g.strokeRect(-0.86, -0.41, 1.72, 0.82);
const plate = (x, y) => {
  g.fillStyle = '#f8f6f0';
  g.beginPath();
  g.arc(x, y, 0.1, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = '#3c5a8a';
  g.lineWidth = 0.008;
  g.beginPath();
  g.arc(x, y, 0.085, 0, Math.PI * 2);
  g.stroke();
  g.fillStyle = '#f2efe6';
  g.beginPath();
  g.arc(x + 0.14, y, 0.045, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#6a3a1a';
  g.beginPath();
  g.arc(x + 0.14, y, 0.03, 0, Math.PI * 2);
  g.fill();
};
// the far side's four places, the two ends'
for (const x of [-0.65, -0.15, 0.35, 0.85]) plate(x - 0.06, -0.3);
plate(-0.72, 0.05);
plate(0.62, 0.05);
// the teapot, the toast rack, the marmalade
g.fillStyle = '#c0c4c8';
g.beginPath();
g.ellipse(0.0, 0.12, 0.09, 0.07, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#b07a3a';
g.fillRect(-0.32, 0.08, 0.16, 0.08);
g.fillStyle = '#d0802a';
g.beginPath();
g.arc(0.28, 0.16, 0.04, 0, Math.PI * 2);
g.fill();
