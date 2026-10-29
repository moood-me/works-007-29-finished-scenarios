// The white night's sky, in stage heights: lilac-grey above, paling to pearl, a warm rose-peach band low over the
// horizon where the evening glow lingers into the dawn (the north-west, over the far bank, to the left: a soft warm
// glow there, the point sky#afterglow); below the horizon the same pale air. High thin streaks of cloud drift slowly across (a layer the engine moves).
const A = e.aspect, H = 0.47; // (H: the horizon on the stage, as the scene's "horizon" says)
const air = g.createLinearGradient(0, -0.35, 0, 1.25), at = y => (y + 0.35) / 1.6; // (a stop at the stage height y)
air.addColorStop(0, '#a7a5c3');
air.addColorStop(at(H - 0.24), '#c6c0d7');
air.addColorStop(at(H - 0.05), '#e2d8df');
air.addColorStop(at(H - 0.005), '#f1e1d6');
air.addColorStop(at(H + 0.015), '#f3e8df');
air.addColorStop(at(H + 0.12), '#e8e2e1');
air.addColorStop(1, '#dbd8df');
g.fillStyle = air;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
// (the watercolour's own unevenness over the sky: broad soft blotches of lilac, lighter and deeper, as a wash dries on
// the paper)
e.lib.wash(g, -0.3, -0.35, A + 0.6, H + 0.3, [196, 190, 214], 21, 0.025, 0.35, 0);
// (the glow over the north-west, low and wide)
g.save();
g.translate(A * 0.28, H + 0.01);
g.scale(1.1, 0.22);
const glow = g.createRadialGradient(0, 0, 0, 0, 0, 1);
glow.addColorStop(0, 'rgba(250,214,192,0.55)');
glow.addColorStop(1, 'rgba(250,214,192,0)');
g.fillStyle = glow;
g.fillRect(-1, -1, 2, 2);
g.restore();
// (the sun below the horizon there, its light lingering: a soft warm glow just over the far roofs — the engine's, so the
// canal's mirror draws it out into a long warm path on the water)
e.light(A * 0.28, H - 0.02, 0.05, '#ffd2b4', 0.55, 'afterglow');
// The other nights' skies, each a layer over the white night's, shown as much as its key (sky.animate.js): `dusk` —
// the prologue's evening, golden-peach low down; `lilac` — the second night, cooler; `rose` — the third, its afterglow
// rosier; `overcast` — the fourth, a soft pearl-grey cloud over all of it; `day` — a pale blue day sky
const looks = {
  dusk: [['#b4a4bc', 0], ['#d9c2c4', H - 0.24], ['#f0d4bc', H - 0.06], ['#f8dcb6', H - 0.005], ['#f2e2d2', H + 0.12], ['#e2d8d6', 1.25]],
  lilac: [['#9a97c6', 0], ['#bbb5dc', H - 0.24], ['#d8d0e8', H - 0.05], ['#e8dde8', H - 0.005], ['#e2dde8', H + 0.12], ['#d6d3e2', 1.25]],
  rose: [['#ad9fc0', 0], ['#d4bccf', H - 0.24], ['#ecccd0', H - 0.05], ['#f8d4c6', H - 0.005], ['#f2e0da', H + 0.12], ['#e2d8dc', 1.25]],
  overcast: [['#c2c3cb', 0], ['#ccced5', H - 0.24], ['#d8d9de', H - 0.05], ['#dfe0e3', H - 0.005], ['#dddee1', H + 0.12], ['#d6d7db', 1.25]],
  day: [['#93b1d2', 0], ['#b4cbe0', H - 0.24], ['#d6e0e8', H - 0.05], ['#ebe9e4', H - 0.005], ['#e6e4e0', H + 0.12], ['#dcdcdc', 1.25]],
};
for (const [name, stops] of Object.entries(looks)) {
  e.layer(name, { box: [-0.3, -0.35, A + 0.3, 1.25] }, (g) => {
    const sky = g.createLinearGradient(0, -0.35, 0, 1.25);
    for (const [c, y] of stops) sky.addColorStop(Math.max(0, Math.min(1, at(y))), c);
    g.fillStyle = sky;
    g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
    if (name === 'overcast') {
      // the cloud's soft masses, a little darker and lighter, low and heavy toward the horizon
      for (let i = 0; i < 26; i++) {
        const x = -0.3 + (A + 0.6) * e.anim.hash(i, 31), y = -0.3 + (H + 0.25) * e.anim.hash(i, 32) ** 0.7;
        const rx = 0.25 + 0.45 * e.anim.hash(i, 33), ry = rx * (0.18 + 0.15 * e.anim.hash(i, 34)), dark = e.anim.hash(i, 35) > 0.4;
        g.save();
        g.translate(x, y);
        g.scale(rx, ry);
        const c = g.createRadialGradient(0, 0, 0, 0, 0, 1);
        c.addColorStop(0, dark ? 'rgba(168,170,182,0.45)' : 'rgba(232,232,236,0.5)');
        c.addColorStop(1, dark ? 'rgba(168,170,182,0)' : 'rgba(232,232,236,0)');
        g.fillStyle = c;
        g.fillRect(-1, -1, 2, 2);
        g.restore();
      }
    } else if (name !== 'day') {
      // its own glow over the north-west
      g.save();
      g.translate(A * 0.28, H + 0.01);
      g.scale(1.1, 0.22);
      const glow = g.createRadialGradient(0, 0, 0, 0, 0, 1);
      const c = name === 'dusk' ? '252,206,160' : name === 'rose' ? '252,200,186' : '236,214,226';
      glow.addColorStop(0, `rgba(${c},0.6)`);
      glow.addColorStop(1, `rgba(${c},0)`);
      g.fillStyle = glow;
      g.fillRect(-1, -1, 2, 2);
      g.restore();
    }
  });
}
// the streaks of cloud: soft long ellipses, lilac-grey with a warm underside low down; each painted twice where it
// runs past the box's end, so the drifting layer's ends meet
const x0 = -0.3, W = A + 0.6;
e.layer('clouds', { box: [x0, -0.02, x0 + W, H - 0.02], drift: [0.003, 0] }, (g) => {
  for (let i = 0; i < 14; i++) {
    const y = 0.02 + (H - 0.08) * e.anim.hash(i, 1) ** 1.3, len = 0.25 + 0.6 * e.anim.hash(i, 2), thick = 0.008 + 0.022 * e.anim.hash(i, 3);
    const x = x0 + W * e.anim.hash(i, 4), low = y > H - 0.22;
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
