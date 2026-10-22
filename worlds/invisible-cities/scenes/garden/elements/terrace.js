// The terrace's floor seen from above: big worn stone slabs, each a little its own tone, in rows across; the joints
// darker. Origin at its centre, y toward the viewer (its far edge, by the balustrade, is y −4.25).
const W = 9;
const D = 4.25;
g.fillStyle = '#9a917f';
g.fillRect(-W, -D, 2 * W, 2 * D);
for (let row = 0; row < 9; row++) {
  const y0 = -D + row * 0.95;
  const shift = (row % 2) * 0.55;
  for (let x0 = -W - shift; x0 < W; x0 += 1.1) {
    const t = e.rnd();
    g.fillStyle = t < 0.33 ? '#a39a88' : t < 0.66 ? '#958c7a' : '#9e9482';
    g.fillRect(x0 + 0.02, y0 + 0.02, 1.06, 0.91);
  }
}
g.strokeStyle = 'rgba(70, 64, 56, 0.55)';
g.lineWidth = 0.025;
for (let row = 0; row <= 9; row++) {
  const y0 = -D + row * 0.95;
  g.beginPath();
  g.moveTo(-W, y0);
  g.lineTo(W, y0);
  g.stroke();
}
// a coping of long pale stones along the far edge, where the balustrade stands
g.fillStyle = '#b2a894';
g.fillRect(-W, -D, 2 * W, 0.32);
