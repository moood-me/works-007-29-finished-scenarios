// The boy's house by the road: a palm-board hut under a steep thatch of palm leaves, its door open (dark within, a
// lamp lit there at dusk — its glow by `dusk`, in the animate), and by the threshold the cot the boy sleeps on.
// Metres, the middle of its front's foot at the anchor; 4.2 m wide.
const W = 2.1;
// the walls: grey-brown boards standing side by side
g.fillStyle = '#a28e70';
g.fillRect(-W, -2.3, 2 * W, 2.35);
g.strokeStyle = 'rgba(80,66,52,0.45)';
g.lineWidth = 0.025;
for (let x = -W + 0.18; x < W; x += 0.18 + 0.05 * e.rnd()) {
  g.beginPath();
  g.moveTo(x, -2.3);
  g.lineTo(x, 0.05);
  g.stroke();
}
// the door, open: the dark room, the leaf thrown back
g.fillStyle = '#3a2f27';
g.fillRect(-0.95, -1.9, 0.85, 1.9);
g.fillStyle = '#8c785c';
g.fillRect(-1.3, -1.9, 0.33, 1.9);
e.light(-0.5, -1.2, 0.4, '#ffc27a', 1.6, 'lamp');
// a window with its shutter propped open
g.fillStyle = '#2f2722';
g.fillRect(0.75, -1.6, 0.7, 0.6);
g.fillStyle = '#93805f';
g.beginPath();
g.moveTo(0.7, -1.62);
g.lineTo(1.5, -1.62);
g.lineTo(1.62, -1.98);
g.lineTo(0.82, -1.98);
g.closePath();
g.fill();
// the thatch: a steep roof of palm leaves, its eave ragged
g.fillStyle = '#8a7a56';
g.beginPath();
g.moveTo(-W - 0.45, -2.15);
g.lineTo(0, -4.1);
g.lineTo(W + 0.45, -2.15);
for (let x = W + 0.45; x > -W - 0.45; x -= 0.12) g.lineTo(x, -2.12 + 0.12 * e.rnd());
g.closePath();
g.fill();
g.strokeStyle = 'rgba(96,82,56,0.7)';
g.lineWidth = 0.03;
for (let i = 0; i < 70; i++) {
  const u = e.rnd();
  const x = (u - 0.5) * 2 * (W + 0.4);
  const y0 = -4.05 + 1.9 * Math.abs(u - 0.5) * 2;
  g.beginPath();
  g.moveTo(x * 0.98, y0 + 0.1);
  g.lineTo(x, -2.15 + 0.1 * e.rnd());
  g.stroke();
}
g.fillStyle = '#6d6044';
g.fillRect(-0.15, -4.25, 0.3, 0.25);
// the cot by the door: a low frame of sticks with a sacking top
g.fillStyle = '#7d6a50';
g.fillRect(-2.3, -0.42, 1.3, 0.07);
g.fillStyle = '#c4b597';
g.fillRect(-2.3, -0.5, 1.3, 0.09);
g.fillStyle = '#5e4e3c';
for (const x of [-2.25, -1.1]) g.fillRect(x, -0.42, 0.05, 0.42);
