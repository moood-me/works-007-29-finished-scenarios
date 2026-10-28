// The steep stair to the mezzanine from above, as it slopes (x −0.3…0.3 across it, y −1.72 at the top under the
// hatch … 1.72 at its foot): twelve treads of worn pine, each with its nosing's shadow-line
const INK = e.lib.INK, n = 12, step = 3.44 / n;
g.fillStyle = '#a98260';
g.fillRect(-0.3, -1.72, 0.6, 3.44);
for (let i = 0; i < n; i++) {
  const y = -1.72 + i * step;
  g.fillStyle = '#c29d72';
  g.fillRect(-0.3, y + step * 0.45, 0.6, step * 0.55);
}
g.beginPath();
for (let i = 0; i <= n; i++) {
  const y = -1.72 + i * step;
  g.moveTo(-0.3, y + step * 0.45);
  g.lineTo(0.3, y + step * 0.45);
}
g.strokeStyle = INK;
g.lineWidth = 0.01;
g.stroke();
g.strokeRect(-0.3, -1.72, 0.6, 3.44);
