// The low ceiling seen from below (laid down from the back wall's top toward the viewer: y 0 at the back … −4.6 at
// the front): dark planks across, joists running from the back to the front, a cobweb in the far right corner
g.fillStyle = '#4c3d30';
g.fillRect(-2.12, -4.62, 4.14, 4.62);
g.strokeStyle = '#3b2f25';
g.lineWidth = 0.015;
for (let y = -0.2; y > -4.62; y -= 0.22) {
  g.beginPath();
  g.moveTo(-2.12, y);
  g.lineTo(2.02, y);
  g.stroke();
}
for (let x = -1.8; x < 2; x += 0.62) {
  g.fillStyle = '#33281f';
  g.fillRect(x - 0.08, -4.62, 0.16, 4.62);
  g.fillStyle = '#463729';
  g.fillRect(x - 0.08, -4.62, 0.03, 4.62);
}
g.strokeStyle = 'rgba(200, 192, 176, 0.35)';
g.lineWidth = 0.006;
for (let i = 0; i < 7; i++) {
  const a = (i / 6) * Math.PI * 0.5;
  g.beginPath();
  g.moveTo(2.02, 0);
  g.lineTo(2.02 - Math.cos(a) * 0.5, -Math.sin(a) * 0.5);
  g.stroke();
}
for (const r of [0.18, 0.3, 0.42]) {
  g.beginPath();
  g.arc(2.02, 0, r, Math.PI * 0.5, Math.PI);
  g.stroke();
}
