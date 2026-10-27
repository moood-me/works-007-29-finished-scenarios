// The soft open earth under the yew, from above (1.2 m by 2.2 m): a long low heap of dark loam, freshly turned, its
// edges ragged where the grass grows over them.
const loam = g.createRadialGradient(0, 0, 0.1, 0, 0, 1.1);
loam.addColorStop(0, '#3a2a20');
loam.addColorStop(0.7, '#2e221a');
loam.addColorStop(1, 'rgba(46,34,26,0)');
g.fillStyle = loam;
g.beginPath();
g.ellipse(0, 0, 0.6, 1.1, 0, 0, Math.PI * 2);
g.fill();
for (let i = 0; i < 160; i++) {
  const a = e.rnd() * Math.PI * 2;
  const d = Math.sqrt(e.rnd()) * 0.85;
  g.fillStyle = ['#47342a', '#2a1e16', '#3c2c22'][Math.floor(e.rnd() * 3)];
  g.beginPath();
  g.arc(Math.cos(a) * d * 0.5, Math.sin(a) * d, 0.02 + e.rnd() * 0.05, 0, Math.PI * 2);
  g.fill();
}
