// A thin mist lying over the grass at the back of the garden, under the wall: a soft band a metre high, see-through,
// drifting very slowly along.
e.layer('band', { drift: [0.12, 0] }, c => {
  for (let i = 0; i < 18; i++) {
    const x0 = -21 + i * (42 / 18) + e.rnd() * 1.2;
    // painted again a band's length to either side, so its two ends meet as it drifts round
    for (const x of [x0 - 42, x0, x0 + 42]) {
      const r = c.createRadialGradient(x, -0.4, 0, x, -0.4, 2.4);
      r.addColorStop(0, 'rgba(196,208,230,0.22)');
      r.addColorStop(1, 'rgba(196,208,230,0)');
      c.fillStyle = r;
      c.fillRect(x - 2.4, -1.2, 4.8, 1.25);
    }
  }
});
