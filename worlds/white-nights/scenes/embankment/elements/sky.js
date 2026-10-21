// The white night's sky, in stage heights: lilac-grey above, paling to pearl, a warm rose-peach band low over the
// horizon where the evening glow lingers into the dawn (the north-west, over the far bank, to the left); below the
// horizon the same pale air. High thin streaks of cloud drift slowly across (a layer the engine moves).
const A = e.aspect;
const air = g.createLinearGradient(0, -0.35, 0, 1.25);
air.addColorStop(0, '#a7a5c3');
air.addColorStop(0.28, '#c6c0d7');
air.addColorStop(0.47, '#e2d8df');
air.addColorStop(0.555, '#f1e1d6');
air.addColorStop(0.575, '#f3e8df');
air.addColorStop(0.68, '#e8e2e1');
air.addColorStop(1, '#dbd8df');
g.fillStyle = air;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
// (the glow over the north-west, low and wide)
g.save();
g.translate(A * 0.28, 0.57);
g.scale(1.1, 0.22);
const glow = g.createRadialGradient(0, 0, 0, 0, 0, 1);
glow.addColorStop(0, 'rgba(250,214,192,0.55)');
glow.addColorStop(1, 'rgba(250,214,192,0)');
g.fillStyle = glow;
g.fillRect(-1, -1, 2, 2);
g.restore();
// the streaks of cloud: soft long ellipses, lilac-grey with a warm underside low down; each painted twice where it
// runs past the box's end, so the drifting layer's ends meet
const x0 = -0.3, W = A + 0.6;
e.layer('clouds', { box: [x0, -0.02, x0 + W, 0.5], drift: [0.003, 0] }, (g) => {
  for (let i = 0; i < 14; i++) {
    const y = 0.02 + 0.44 * e.anim.hash(i, 1) ** 1.3, len = 0.25 + 0.6 * e.anim.hash(i, 2), thick = 0.008 + 0.022 * e.anim.hash(i, 3);
    const x = x0 + W * e.anim.hash(i, 4), low = y > 0.3;
    for (const k of [0, -W, W]) {
      if (x + k + len < x0 || x + k - len > x0 + W) continue;
      g.save();
      g.translate(x + k, y);
      g.scale(len, thick);
      const c = g.createRadialGradient(0, 0, 0, 0, 0, 1);
      c.addColorStop(0, low ? 'rgba(232,196,190,0.5)' : 'rgba(150,146,178,0.45)');
      c.addColorStop(1, low ? 'rgba(232,196,190,0)' : 'rgba(150,146,178,0)');
      g.fillStyle = c;
      g.fillRect(-1, -1, 2, 2);
      g.restore();
    }
  }
});
