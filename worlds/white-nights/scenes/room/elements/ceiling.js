// The low ceiling from above, as it lies (x −1.75 … 1.75, y −2.4 at the back wall … 2.4 at the viewer): whitewash
// gone grey, the candle's smoke black over the table, cracks, one beam across, cobweb threads in the far corners;
// nearer the viewer, away from the window, a grey shade
const INK = e.lib.INK;
g.fillStyle = '#d7d3c6';
g.fillRect(-1.75, -2.4, 3.5, 4.8);
const smoke = g.createRadialGradient(0.65, -2.15, 0.05, 0.65, -2.15, 0.7);
smoke.addColorStop(0, 'rgba(70,64,54,0.45)');
smoke.addColorStop(1, 'rgba(70,64,54,0)');
g.fillStyle = smoke;
g.fillRect(-0.1, -2.4, 1.5, 1.2);
const shade = g.createLinearGradient(0, -1, 0, 2.4);
shade.addColorStop(0, 'rgba(96,98,88,0)');
shade.addColorStop(1, 'rgba(96,98,88,0.45)');
g.fillStyle = shade;
g.fillRect(-1.75, -2.4, 3.5, 4.8);
g.beginPath();
for (let i = 0; i < 5; i++) {
  let x = -1.4 + 2.8 * e.anim.hash(i, 51), y = -2.2 + 3.6 * e.anim.hash(i, 52);
  g.moveTo(x, y);
  for (let k = 0; k < 5; k++) {
    x += 0.12 + 0.1 * e.anim.hash(i * 9 + k, 53);
    y += (e.anim.hash(i * 9 + k, 54) - 0.5) * 0.18;
    g.lineTo(x, y);
  }
}
g.strokeStyle = 'rgba(74,63,58,0.4)';
g.lineWidth = 0.006;
g.stroke();
e.lib.box(g, -1.75, -0.3, 3.5, 0.2, '#8f8068', 0.01);
// (cobweb threads in the far corners)
g.beginPath();
for (const [cx, sx, seed] of [[1.75, -1, 55], [-1.75, 1, 56]]) {
  for (let k = 0; k < 6; k++) {
    g.moveTo(cx, -2.4);
    g.lineTo(cx + sx * (0.15 + 0.3 * e.anim.hash(k, seed)), -2.3 + 0.35 * e.anim.hash(k, 57));
  }
}
g.strokeStyle = 'rgba(232,230,222,0.7)';
g.lineWidth = 0.005;
g.stroke();
