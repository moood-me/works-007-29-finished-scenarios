// A thin band of mist lying on the water before the city, drifting slowly to the right: soft, see-through, painted so
// its ends meet as it wraps
e.layer('band', { drift: [0.6, 0], box: [-240, -6, 240, 1] }, (g) => {
  for (let i = 0; i < 9; i++) {
    const cx = -240 + (i + 0.5) * (480 / 9);
    const w = 18 + e.rnd() * 8;
    const h = 1.8 + e.rnd() * 1.6;
    g.save();
    g.translate(cx, -1.4 - e.rnd() * 1.2);
    g.scale(w, h);
    const c = g.createRadialGradient(0, 0, 0, 0, 0, 1);
    c.addColorStop(0, 'rgba(176, 190, 220, 0.22)');
    c.addColorStop(1, 'rgba(176, 190, 220, 0)');
    g.fillStyle = c;
    g.beginPath();
    g.arc(0, 0, 1, 0, Math.PI * 2);
    g.fill();
    g.restore();
  }
});
