// A bed of reeds at the water's edge, gone to straw with the autumn, the green still low in them, plumes of seed on
// the tallest (metres: x across, y up); they bend in the air. Copies of it stand along both shores.
e.layer('stalks', { pivot: [0, 0], wind: { strength: 0.35, gust: 0.6 }, box: [-1.6, -2.4, 1.6, 0.05] }, c => {
  for (let i = 0; i < 70; i++) {
    const x = (e.rnd() - 0.5) * 2.4 * (0.6 + e.rnd() * 0.4);
    const h = 1.0 + e.rnd() * 1.0 - Math.abs(x) * 0.25;
    e.lib.reed(c, e.rnd, x, h, e.rnd() < 0.35);
  }
});
