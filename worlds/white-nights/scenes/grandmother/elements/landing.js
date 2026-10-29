// The landing outside the door, from above (x −0.95…0.95 across — the doorway's side at 0.95 —, y −1.0 at the head
// of the steps … 1.0 by the viewer's end): broad boards painted a dull red-brown, worn pale where feet go
const { hash } = e.anim;
for (let i = 0; i < 9; i++) {
  const x = -0.95 + i * 0.211, k = hash(i, 41);
  g.fillStyle = `rgb(${Math.round(150 + 14 * k)},${Math.round(104 + 10 * k)},${Math.round(80 + 8 * k)})`;
  g.fillRect(x, -1.0, 0.211, 2.0);
}
g.fillStyle = 'rgba(214,190,160,0.35)';
g.fillRect(-0.6, -1.0, 1.4, 2.0);
g.beginPath();
for (let i = 0; i <= 9; i++) { g.moveTo(-0.95 + i * 0.211, -1.0); g.lineTo(-0.95 + i * 0.211, 1.0); }
g.strokeStyle = 'rgba(74,63,58,0.4)';
g.lineWidth = 0.008;
g.stroke();
