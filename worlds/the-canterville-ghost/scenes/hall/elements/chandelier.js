// The great iron candle-ring hanging in the middle of the hall on its chain (the ring 3.3 m up, the chain to the
// beams at 5.6 m): six candles on it, each flame a glow (f0…f5, put out by day by its animate), and the ring's own
// light `chandelier#ring` (the hall's main light: the light "chandelier", on by `candles`). It sways a hair on its
// chain (one layer, its flames with it).
e.layer('hang', { pivot: [0, -2.3], box: [-0.75, -2.32, 0.75, 0.3] }, c => {
  c.fillStyle = '#2a2622';
  for (let y = -2.3; y < -0.25; y += 0.09) {
    c.beginPath();
    c.ellipse(0, y, 0.018, 0.04, 0, 0, Math.PI * 2);
    c.fill();
  }
  // the four arms from the chain's foot down to the ring
  c.strokeStyle = '#2a2622';
  c.lineWidth = 0.02;
  for (const x of [-0.6, -0.2, 0.2, 0.6]) {
    c.beginPath();
    c.moveTo(0, -0.28);
    c.lineTo(x, 0);
    c.stroke();
  }
  // the ring, a little seen from below, its drip pans and candles
  c.lineWidth = 0.045;
  c.beginPath();
  c.ellipse(0, 0.02, 0.62, 0.09, 0, 0, Math.PI * 2);
  c.stroke();
  for (let i = 0; i < 6; i++) {
    const a = Math.PI * (0.08 + (i / 5) * 0.84);
    const x = -Math.cos(a) * 0.62;
    const y = 0.02 + Math.sin(a) * 0.09 * (i % 2 ? -1 : 1) * 0.6;
    c.fillStyle = '#2a2622';
    c.fillRect(x - 0.05, y - 0.02, 0.1, 0.025);
    c.fillStyle = '#ece4d0';
    c.fillRect(x - 0.022, y - 0.2, 0.044, 0.18);
    c.fillStyle = '#ffd890';
    c.beginPath();
    c.ellipse(x, y - 0.235, 0.014, 0.035, 0, 0, Math.PI * 2);
    c.fill();
    e.light(x, y - 0.24, 0.12, '#ffcf8a', 0.8, `f${i}`);
  }
  e.light(0, -0.12, 0.45, '#ffcf8a', 0.25, 'ring');
});
