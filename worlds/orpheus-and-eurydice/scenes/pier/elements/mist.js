// Mist lying on the water along the far shore: long soft bands, thicker low down, drifting slowly to the right (a
// layer the engine moves; painted again past the box's ends so its ends meet).
const L = -640, R = 640, W = R - L;
e.layer('bands', { box: [L, -9, R, 0.5], drift: [0.6, 0] }, g => {
  for (let i = 0; i < 26; i++) {
    const x = L + W * e.anim.hash(i, 61), y = -0.5 - 5 * e.anim.hash(i, 62) ** 1.6;
    const len = 50 + 120 * e.anim.hash(i, 63), thick = 1.2 + 2.4 * e.anim.hash(i, 64);
    for (const k of [0, -W, W]) {
      if (x + k + len < L || x + k - len > R) continue;
      g.save();
      g.translate(x + k, y);
      g.scale(len, thick);
      const c = g.createRadialGradient(0, 0, 0, 0, 0, 1);
      c.addColorStop(0, 'rgba(176,190,224,0.28)');
      c.addColorStop(1, 'rgba(176,190,224,0)');
      g.fillStyle = c;
      g.fillRect(-1, -1, 2, 2);
      g.restore();
    }
  }
});
