// The wash at the water's edge, from above (a plane just over the water): two lines of foam lace lying along the
// shore, each a layer its animate runs up the sand and draws back. Metres; centre across -3, distance 18:
// across = x - 3, distance = 18 - y.
const { shore } = e.lib;
const lace = (name, off, alpha) => {
  e.layer(name, { box: [-23, -14, 23, 12] }, g => {
    g.fillStyle = `rgba(250,248,240,${alpha})`;
    for (let a = -24; a < 21; a += 0.25) {
      const d = shore(a) + off + 0.12 * Math.sin(a * 1.7) + 0.08 * Math.sin(a * 4.3);
      const gap = Math.sin(a * 2.3 + off * 5) + Math.sin(a * 0.9);
      if (gap < -0.9) continue;
      g.fillRect(a + 3, 18 - d - 0.08, 0.26, 0.14 + 0.1 * (gap + 1));
    }
    // the thin film behind the line, fading out over the wet sand
    g.fillStyle = `rgba(235,240,236,${alpha * 0.3})`;
    for (let a = -24; a < 21; a += 0.5) g.fillRect(a + 3, 18 - shore(a) - off, 0.52, 0.9);
  });
};
lace('lace_a', -0.1, 0.85);
lace('lace_b', 1.4, 0.5);
