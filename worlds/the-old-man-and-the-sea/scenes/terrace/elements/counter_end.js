// The counter's end, toward the viewer: the same grey-blue boards, the plinth and the top's edge. Metres, the middle of
// its foot at the anchor.
g.fillStyle = '#76817f';
g.fillRect(-0.3, -1.0, 0.6, 1.0);
g.strokeStyle = 'rgba(60,60,58,0.45)';
g.lineWidth = 0.015;
for (const x of [-0.16, -0.02, 0.12]) {
  g.beginPath();
  g.moveTo(x, -1.0);
  g.lineTo(x, 0);
  g.stroke();
}
g.fillStyle = '#4a3f34';
g.fillRect(-0.3, -0.12, 0.6, 0.13);
g.fillStyle = '#6c5843';
g.fillRect(-0.34, -1.07, 0.68, 0.07);
