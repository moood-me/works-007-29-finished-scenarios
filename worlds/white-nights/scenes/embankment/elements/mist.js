// A low veil of mist on the water far down the canal: soft level banks, pale, drifting slowly across (a layer the
// engine moves; its ends meet), x −10…10, y −3…0 over the water
e.layer('veil', { box: [-10, -3, 10, 0.2], drift: [0.25, 0] }, (g) => {
  for (let i = 0; i < 9; i++) {
    const x = -10 + 20 * e.anim.hash(i, 41), y = -0.4 - 1.8 * e.anim.hash(i, 42);
    const len = 3 + 4 * e.anim.hash(i, 43), tall = 0.3 + 0.5 * e.anim.hash(i, 44);
    for (const k of [0, -20, 20]) {
      if (x + k + len < -10 || x + k - len > 10) continue;
      g.save();
      g.translate(x + k, y);
      g.scale(len, tall);
      const c = g.createRadialGradient(0, 0, 0, 0, 0, 1);
      c.addColorStop(0, 'rgba(242,236,240,0.5)');
      c.addColorStop(1, 'rgba(242,236,240,0)');
      g.fillStyle = c;
      g.fillRect(-1, -1, 2, 2);
      g.restore();
    }
  }
});
