// The lighthouse's tower: a round stone tower (a form turned on a lathe), whitewashed grey stone gone pale, its
// courses of blocks; its foot dark and wet, a band of weathering; the door at its front (x 0), narrow windows up it,
// rust streaks under them. The painting is the tower unrolled: x round it (0 its front), y down from its top.
const W = 7.4;
g.fillStyle = '#d5d2ca';
g.fillRect(-W, -17, 2 * W, 17);
// courses of stone: joints along and staggered across
g.strokeStyle = '#c4c0b7';
g.lineWidth = 0.05;
for (let k = 0, y = -16.6; y < 0; y += 0.62, k++) {
  g.beginPath();
  g.moveTo(-W, y);
  g.lineTo(W, y);
  g.stroke();
  for (let x = -W + (k % 2) * 0.55; x < W; x += 1.1) {
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x, y + 0.62);
    g.stroke();
  }
}
// a few blocks a shade off
for (let i = 0; i < 70; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(170,166,158,0.35)' : 'rgba(236,233,226,0.45)';
  const row = Math.floor(e.rnd() * 26);
  g.fillRect(-W + Math.floor(e.rnd() * 13) * 1.1 + (row % 2) * 0.55, -16.6 + row * 0.62, 1.1, 0.62);
}
// weathering low down, the wet foot
const foot = g.createLinearGradient(0, -3.5, 0, 0);
foot.addColorStop(0, 'rgba(120,118,112,0)');
foot.addColorStop(0.6, 'rgba(120,118,112,0.55)');
foot.addColorStop(1, 'rgba(70,72,74,0.9)');
g.fillStyle = foot;
g.fillRect(-W, -3.5, 2 * W, 3.5);
// the door (iron-bound boards in a round-headed opening) over the steps
g.fillStyle = '#9d9a93';
g.beginPath();
g.moveTo(-0.75, -0.55);
g.lineTo(-0.75, -2.35);
g.arc(0, -2.35, 0.75, Math.PI, 0);
g.lineTo(0.75, -0.55);
g.closePath();
g.fill();
g.fillStyle = '#3d3632';
g.beginPath();
g.moveTo(-0.6, -0.6);
g.lineTo(-0.6, -2.35);
g.arc(0, -2.35, 0.6, Math.PI, 0);
g.lineTo(0.6, -0.6);
g.closePath();
g.fill();
g.strokeStyle = '#2a2624';
g.lineWidth = 0.05;
for (const y of [-1.0, -2.0]) {
  g.beginPath();
  g.moveTo(-0.6, y);
  g.lineTo(0.6, y);
  g.stroke();
}
// narrow windows up the tower, and rust under each
const slit = (x, y) => {
  g.fillStyle = 'rgba(150,100,70,0.35)';
  g.fillRect(x - 0.12, y, 0.24, 1.8);
  g.fillStyle = '#a8a59d';
  g.fillRect(x - 0.32, y - 1.15, 0.64, 1.2);
  g.fillStyle = '#2f3438';
  g.fillRect(x - 0.22, y - 1.05, 0.44, 1.0);
};
slit(0, -6.2);
slit(0, -10.4);
slit(3.6, -8.3);
slit(-3.6, -12.2);
// the room's window frame (its glass is the glowing card before it)
g.fillStyle = '#a8a59d';
g.fillRect(-0.55, -15.05, 1.1, 1.3);
e.form(e.kit.revolve([[2.05, 17], [2.1, 16.6], [2.3, 8], [2.62, 0.4], [2.75, 0]]), { closed: 'u' });
