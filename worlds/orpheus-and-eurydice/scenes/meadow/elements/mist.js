// Mist lying low over the far meadow: long soft pale bands, thicker near the grass, drifting slowly to the right (a
// layer the engine moves; painted again past the box's ends so its ends meet).
const L = -420, R = 420, W = R - L;
e.layer('bands', { box: [L, -7, R, 0.5], drift: [0.35, 0] }, g => {
  for (let i = 0; i < 24; i++) {
    const x = L + W * e.anim.hash(i, 61), y = -0.4 - 4 * e.anim.hash(i, 62) ** 1.6;
    const len = 30 + 80 * e.anim.hash(i, 63), thick = 0.8 + 2 * e.anim.hash(i, 64);
    for (const k of [0, -W, W]) {
      if (x + k + len < L || x + k - len > R) continue;
      g.save();
      g.translate(x + k, y);
      g.scale(len, thick);
      const c = g.createRadialGradient(0, 0, 0, 0, 0, 1);
      c.addColorStop(0, 'rgba(196,192,228,0.3)');
      c.addColorStop(1, 'rgba(196,192,228,0)');
      g.fillStyle = c;
      g.fillRect(-1, -1, 2, 2);
      g.restore();
    }
  }
});
