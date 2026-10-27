// The river from above (metres; its middle 120 m ahead, y toward the viewer — its near edge, at the embankment, is
// y 105.5): broad, slow and brown with the rains, olive near, paling to the grey of the sky toward the far bank. Over
// it, a layer the current carries downriver to the right: lines of the current and clumps of water hyacinth.
const W = 300;
const D = 105.5;
const water = g.createLinearGradient(0, D, 0, -D);
water.addColorStop(0, '#6f6a52');
water.addColorStop(0.25, '#827d66');
water.addColorStop(0.6, '#9a9a8c');
water.addColorStop(1, '#b0b4ac');
g.fillStyle = water;
g.fillRect(-W, -D, 2 * W, 2 * D);
// broad slow swirls of silt
for (let i = 0; i < 90; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(120,104,76,0.22)' : 'rgba(92,90,70,0.2)';
  g.beginPath();
  g.ellipse(-W + e.rnd() * 2 * W, D - e.rnd() * 120, 6 + e.rnd() * 20, 1 + e.rnd() * 3, 0, 0, Math.PI * 2);
  g.fill();
}
e.layer('current', { drift: [0.35, 0], box: [-W, -D, W, D] }, c => {
  const at = (x, f) => {
    for (const dx of [-2 * W, 0, 2 * W]) f(x + dx);
  };
  // the current's lines: long thin pale streaks, denser and shorter far off
  c.lineCap = 'round';
  for (let i = 0; i < 220; i++) {
    const y = D - Math.pow(e.rnd(), 1.6) * 150;
    const len = 1.5 + e.rnd() * 7 * (y + D) / (2 * D);
    const x0 = -W + e.rnd() * 2 * W;
    c.strokeStyle = e.rnd() < 0.6 ? 'rgba(190,190,176,0.32)' : 'rgba(70,64,48,0.25)';
    c.lineWidth = 0.05 + e.rnd() * 0.08;
    const bend = 0.2 * (e.rnd() - 0.5);
    at(x0, x => {
      c.beginPath();
      c.moveTo(x, y);
      c.quadraticCurveTo(x + len / 2, y + bend, x + len, y);
      c.stroke();
    });
  }
  // the water hyacinth: rafts of glossy rosettes, a few mauve flowers, drifting down from the swamps
  for (let i = 0; i < 46; i++) {
    const cx = -W + e.rnd() * 2 * W;
    const cy = D - 2 - Math.pow(e.rnd(), 1.4) * 60;
    const n = 3 + Math.floor(e.rnd() * 9);
    const cols = ['#3f5a2c', '#4e6c34', '#5c7a3c'];
    const leaves = [];
    for (let k = 0; k < n; k++) leaves.push([(e.rnd() - 0.5) * 1.6, (e.rnd() - 0.5) * 0.7, 0.18 + e.rnd() * 0.2, cols[k % 3]]);
    const flowers = [];
    for (let k = 0; k < 2; k++) if (e.rnd() < 0.5) flowers.push([(e.rnd() - 0.5) * 1.0, (e.rnd() - 0.5) * 0.4]);
    at(cx, x => {
      c.fillStyle = 'rgba(40,46,30,0.45)';
      c.beginPath();
      c.ellipse(x, cy + 0.1, 1.0, 0.45, 0, 0, Math.PI * 2);
      c.fill();
      for (const [dx, dy, r, col] of leaves) {
        c.fillStyle = col;
        c.beginPath();
        c.ellipse(x + dx, cy + dy, r, r * 0.8, 0, 0, Math.PI * 2);
        c.fill();
      }
      c.fillStyle = '#9a86b8';
      for (const [dx, dy] of flowers) {
        c.beginPath();
        c.arc(x + dx, cy + dy, 0.08, 0, Math.PI * 2);
        c.fill();
      }
    });
  }
});
