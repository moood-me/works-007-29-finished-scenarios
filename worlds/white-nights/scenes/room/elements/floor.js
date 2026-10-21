// The floor from above (x −1.75 at the left wall … 1.75 at the right, y −2.75 beyond the door … 2.75 at the viewer;
// the back wall at y −2.05): bare unpainted boards gone grey-brown, running from the back toward the viewer, their
// joints and nails; a path worn paler from the door to the table and the chair
const INK = e.lib.INK;
for (let i = 0; i < 18; i++) {
  const x = -1.75 + i * 0.2, k = e.anim.hash(i, 41);
  g.fillStyle = `rgb(${Math.round(160 + 16 * k)},${Math.round(142 + 12 * k)},${Math.round(116 + 10 * k)})`;
  g.fillRect(x, -2.75, 0.2, 5.5);
}
const worn = g.createRadialGradient(-0.2, -0.9, 0.1, -0.2, -0.9, 1.3);
worn.addColorStop(0, 'rgba(214,200,170,0.4)');
worn.addColorStop(1, 'rgba(214,200,170,0)');
g.fillStyle = worn;
g.fillRect(-1.75, -2.75, 3.5, 3.5);
g.beginPath();
for (let i = 0; i <= 18; i++) {
  g.moveTo(-1.75 + i * 0.2, -2.75);
  g.lineTo(-1.75 + i * 0.2, 2.75);
}
for (let i = 0; i < 18; i++) {
  const y = -2.75 + 5.5 * e.anim.hash(i, 42);
  g.moveTo(-1.75 + i * 0.2, y);
  g.lineTo(-1.55 + i * 0.2, y);
}
g.strokeStyle = 'rgba(74,63,58,0.4)';
g.lineWidth = 0.008;
g.stroke();
g.fillStyle = 'rgba(60,52,46,0.6)';
for (let i = 0; i < 40; i++) {
  g.beginPath();
  g.arc(-1.75 + (i % 18) * 0.2 + 0.05 + 0.1 * (i % 2), -2.6 + 5.2 * e.anim.hash(i, 43), 0.008, 0, Math.PI * 2);
  g.fill();
}
// (an old ink stain by the table)
g.fillStyle = 'rgba(46,44,52,0.5)';
g.beginPath();
g.ellipse(0.95, -1.5, 0.07, 0.045, 0.4, 0, Math.PI * 2);
g.fill();
g.strokeStyle = INK;
g.lineWidth = 0.004;
g.stroke();
