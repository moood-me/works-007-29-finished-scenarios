// The floor from above (metres, its middle at distance 3.9; y toward the viewer, its far edge y −1.3 at the window):
// pale oak boards running toward the window, a soft off-white rug before the bed.
g.fillStyle = '#b8936a';
g.fillRect(-2.6, -1.3, 5.2, 2.6);
const tones = ['#c39d72', '#bd966c', '#c8a479', '#b48e64'];
const B = 0.16;
for (let x = -2.6; x < 2.6; x += B) {
  let y = -1.3 - e.rnd() * 1.5;
  while (y < 1.3) {
    const len = 1.2 + e.rnd() * 1.6;
    g.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
    g.fillRect(x + 0.005, y + 0.005, B - 0.01, len - 0.01);
    y += len;
  }
}
// the rug: a soft wool rug, a pale border, beside the bed where Josie's feet come down
g.fillStyle = '#e6dfd2';
g.fillRect(-1.55, -0.6, 1.5, 1.6);
g.strokeStyle = '#c9bfae';
g.lineWidth = 0.04;
g.strokeRect(-1.47, -0.52, 1.34, 1.44);
