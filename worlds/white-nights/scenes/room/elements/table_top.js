// The table's top from above (x −0.6 … 0.6, y −0.27 at the wall … 0.27 at its front): boards under worn varnish; the
// papers he copies spread over it, lines of a clerk's hand on them, an ink blot; a pen-wiper
const INK = e.lib.INK;
g.fillStyle = '#9a7c5a';
g.fillRect(-0.6, -0.27, 1.2, 0.54);
g.beginPath();
for (const y of [-0.13, 0, 0.13]) {
  g.moveTo(-0.6, y);
  g.lineTo(0.6, y);
}
g.strokeStyle = 'rgba(74,63,58,0.35)';
g.lineWidth = 0.004;
g.stroke();
for (const [x, y, r, seed] of [[-0.3, 0.02, -0.08, 61], [0.02, 0.04, 0.05, 62], [-0.12, -0.08, 0.14, 63]]) {
  g.save();
  g.translate(x, y);
  g.rotate(r);
  e.lib.box(g, -0.105, -0.15, 0.21, 0.3, '#eee6d2', 0.004);
  g.beginPath();
  for (let k = 0; k < 14; k++) {
    const yy = -0.12 + k * 0.018;
    g.moveTo(-0.08, yy);
    g.lineTo(0.08 - 0.05 * e.anim.hash(k, seed), yy);
  }
  g.strokeStyle = 'rgba(58,52,60,0.6)';
  g.lineWidth = 0.002;
  g.stroke();
  g.restore();
}
g.fillStyle = 'rgba(40,38,50,0.8)';
g.beginPath();
g.ellipse(0.0, 0.11, 0.02, 0.014, 0.3, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#5e4a52';
g.beginPath();
g.arc(0.3, 0.12, 0.04, 0, Math.PI * 2);
g.fill();
g.strokeStyle = INK;
g.lineWidth = 0.004;
g.stroke();
