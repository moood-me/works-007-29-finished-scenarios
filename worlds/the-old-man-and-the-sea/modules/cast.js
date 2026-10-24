// The people of «The Old Man and the Sea» as people in a scene (an element with "person"): who they are — figures of
// shapes in this world's style, plain flat shapes in warm sun-faded colours lit by the scene's own light, with a simple
// face so faces read — and what they move by (the motions in cast.data.json). cast.md says who is who.
const V = () => MooodShapes.V;
const smooth = (e0, e1, v) => { const u = Math.max(0, Math.min(1, (v - e0) / (e1 - e0))); return u * u * (3 - 2 * u); };
return {
  ...data,
  characters: {
    // Santiago: old, thin and gaunt, the skin burnt dark brown by the sun, grey hair cropped close, a faded blue shirt
    // patched many times, old trousers rolled up, barefoot
    santiago: {
      kind: 'shapes', style: 'gulf', who: 'old', garment: 'none', hair: 'cropped', barefoot: 'both', parts: ['patches'],
      body: { height: 0.97, thick: 0.8, shoulders: 1.02, arms: 1.03 },
      colors: { skin: '#8f5f43', hair: '#9d9890', top: '#8ea3ae', bottom: '#8d7f68', accent: '#a9b9bf' },
    },
    // Manolin, the boy: slight and quick, black hair, a white undershirt, dark shorts, barefoot
    manolin: {
      kind: 'shapes', style: 'gulf', who: 'teen', garment: 'none', hair: 'short', barefoot: 'both',
      body: { height: 0.84, thick: 0.78, shoulders: 0.9 },
      colors: { skin: '#b07c58', hair: '#1f1a18', top: '#e7e2d6', bottom: '#3f4c62' },
    },
    // the boy's father, a fisherman of the lucky boat: thickset, a cap, a work shirt with the sleeves, dark trousers
    father: {
      kind: 'shapes', style: 'gulf', who: 'man', garment: 'none', hair: 'short', hat: 'cap',
      body: { height: 0.99, thick: 1.12, shoulders: 1.08 },
      colors: { skin: '#9c6a4b', hair: '#221c19', top: '#b9a582', bottom: '#4a4538', hat: '#4c463d', shoes: '#2b241f' },
    },
  },
  shapes: {
    // the world's style: the engine's flat geometry — straight edges, plain colours, the scene's light and shadows —
    // with a simple face (eyes, brows, nose, mouth) so the faces read
    styles: { gulf: { from: 'flat', name: 'The Gulf', line: 0.8, face: 'simple' } },
    hair: {
      // an old man's hair cropped close, grey: thin, the brow high, down over the temples and the nape
      cropped: { name: 'cropped', draw: F => {
        const h = F.head;
        F.shell(h.at, h.axes, h.egg.map(e => e * h.r * h.out * 1.03), a => 0.5 - 0.7 * smooth(0.4, 1.4, Math.abs(a)) - 0.25 * smooth(2, 2.8, Math.abs(a)), 0,
          F.colors.hair, h.sides, h.square);
      } },
    },
    parts: {
      // the shirt patched so many times: squares of paler, less faded cloth sewn on the chest, the side and the back
      patches: { name: 'patches', draw: F => {
        const { add, sub, mul, mix, unit, cross } = V(), tr = F.trunk(1.01), e = 2 / F.style.square, k = F.k;
        // (a spot on the trunk between its sections i and i + 1, `a` round it — 0 its left, π/2 before, −π/2 behind)
        for (const [i, u, a, w, h] of [[3, 0.3, 1.2, 0.05, 0.06], [2, 0.2, 2.0, 0.045, 0.05], [3, 0.1, -1.9, 0.06, 0.07]]) {
          const s0 = tr[i], s1 = tr[i + 1], c = mix(s0[0], s1[0], u), sd = s0[1], fw = s0[2], wd = s0[3] + (s1[3] - s0[3]) * u, dp = s0[4] + (s1[4] - s0[4]) * u;
          const cs = Math.cos(a), sn = Math.sin(a), x = wd * Math.sign(cs) * Math.abs(cs) ** e, y = dp * Math.sign(sn) * Math.abs(sn) ** e;
          const out = unit(add(mul(sd, x / wd / wd), mul(fw, y / dp / dp))), up = unit(sub(s1[0], s0[0])), across = unit(cross(up, out));
          F.ball(add(add(c, add(mul(sd, x), mul(fw, y))), mul(out, 0.003 * k)), [across, up, out], [w * k, h * F.fit.h, 0.006 * k], F.colors.accent, 4, 6);
        }
      } },
    },
  },
};
