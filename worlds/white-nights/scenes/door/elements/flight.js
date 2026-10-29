// The flight going down from the landing (seen from above as it slopes: x −0.65…0.65 across, y −2.3 at its top by the
// back wall … 2.3 at its foot on the landing below): fifteen stone steps, each tread hollowed pale in its middle, its
// nosing an ink line with the riser's shade under it
const INK = e.lib.INK, n = 15, step = 4.6 / n;
g.fillStyle = '#a49c88';
g.fillRect(-0.65, -2.3, 1.3, 4.6);
for (let i = 0; i < n; i++) {
  const y = -2.3 + i * step;
  g.fillStyle = '#cfc6ae';
  g.fillRect(-0.65, y + step * 0.42, 1.3, step * 0.58);
  g.fillStyle = 'rgba(240,234,218,0.5)';
  g.fillRect(-0.3, y + step * 0.5, 0.6, step * 0.4);
}
g.beginPath();
for (let i = 0; i <= n; i++) {
  const y = -2.3 + i * step;
  g.moveTo(-0.65, y + step * 0.42);
  g.lineTo(0.65, y + step * 0.42);
}
g.strokeStyle = INK;
g.lineWidth = 0.012;
g.stroke();
g.strokeRect(-0.65, -2.3, 1.3, 4.6);
