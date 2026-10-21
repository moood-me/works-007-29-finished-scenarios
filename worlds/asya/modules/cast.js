// The people of «Asya» as people in a scene (an element with "person": {"cast": "cast", "who": …}): who they are —
// figures of shapes in the world's style `etude`, plain colours lit by the scene's own light, faces drawn simply
// (eyes, brows, a nose, a mouth) so they read — and how they move: the motions in cast.data.json (put there with
// put_motion). cast.md says who is who, what each carries and what each motion is. A part's lengths are a man's metres
// times F.fit.h (the person's height as a share of a man's 1.76 m).
const V = () => MooodShapes.V;
const WOOD = [0.47, 0.35, 0.24, 1], BRISTLE = [0.36, 0.27, 0.2, 1], OCHRE = [0.78, 0.6, 0.3, 1];
const BRIAR = [0.32, 0.2, 0.13, 1], EMBER = [1, 0.55, 0.22, 2];
// the hand's axes: across the palm, up the hand, out of the fist
const axesOf = (F, h) => [F.side(h), F.up(h), F.fwd(h)];
return {
  ...data,
  characters: {
    // Asya (Anna), seventeen: small and slight, a swarthy round face, black hair cut short like a boy's, falling in
    // curls to the neck; a plain white summer dress with a pale blue sash's colour in it — her own dress, no role
    asya: { kind: 'shapes', style: 'etude', who: 'woman', garment: 'dress', hair: 'bob',
      body: { height: 0.9, thick: 0.78, shoulders: 0.84, head: 1.04 },
      colors: { skin: '#d9a982', hair: '#1d1613', top: '#eeebe3', garment: '#e6e8e6', shoes: '#5b4a3c' } },
    // Gagin, about thirty: soft, a little heavy, kind; a painter's loose olive-brown linen jacket over a white shirt,
    // grey trousers, bare-headed, his brown hair
    gagin: { kind: 'shapes', style: 'etude', who: 'man', garment: 'jacket', hair: 'short',
      body: { height: 1.0, thick: 1.08, shoulders: 1.02 },
      colors: { skin: '#e0b896', hair: '#6e4a2e', top: '#f4f0e6', garment: '#8e7d58', bottom: '#77746c', shoes: '#4a3a2c' } },
    // N. N., twenty-five: slim, upright, a young gentleman abroad — a dark green-blue frock coat, a white shirt, a
    // dark cravat, light trousers, bare-headed
    nn: { kind: 'shapes', style: 'etude', who: 'man', garment: 'frockcoat', hair: 'short', scarf: true,
      body: { height: 1.02, thick: 0.88, shoulders: 0.98 },
      colors: { skin: '#e7c3a4', hair: '#4e3626', top: '#f3efe6', garment: '#2e4b52', bottom: '#a99f8a', shoes: '#2b2421', accent: '#26303a' } },
    // the ferryman at Z., an old Rhinelander: broad, a little bent, a weathered face, a short grey beard, a dark
    // boatman's cap, a brown wool jacket, a faded neckerchief, a short pipe always in his teeth
    ferryman: { kind: 'shapes', style: 'etude', who: 'grandpa', garment: 'jacket', hair: 'none', hat: 'cap', scarf: true,
      parts: ['beard', 'pipe'],
      body: { height: 0.95, thick: 1.08, shoulders: 1.02 },
      colors: { skin: '#c99878', hair: '#cfcac0', top: '#d9d2c2', garment: '#5d4a38', bottom: '#46403a', shoes: '#2a221d',
        hat: '#2c3038', accent: '#7d8a8e' } },
  },
  shapes: {
    // the world's style: a light watercolour figure — the flat geometry's clean shapes, softened (no bars: limbs taper
    // as they are), lit by the scene, a fine line, a face that reads
    styles: { etude: { from: 'flat', name: 'Etude', head: 1.14, rigid: false, straight: false, arms: 'palm', line: 0.8,
      folds: { n: 5, depth: 0.03 }, face: 'simple' } },
    garments: {
      // a frock coat: from the shoulders to above the knee, long sleeves
      frockcoat: { name: 'frock coat', hang: [{ to: 0.95, from: 'shoulders', flare: 0.12 }], sleeves: 'garment' },
    },
    parts: {
      // Gagin's brush in the right hand, dry: the handle along the fist, the tip a touch of ochre
      brush: { name: 'brush', draw: F => {
        const { add, mul } = V(), m = F.fit.h, h = F.P('RightHand'), [s, , f] = axesOf(F, 'RightHand');
        const a = add(h, mul(f, -0.03 * m)), b = add(h, mul(f, 0.2 * m));
        F.bar(a, b, 0.006 * m, 0.005 * m, [[0, WOOD]], 5, s);
        F.bar(b, add(b, mul(f, 0.03 * m)), 0.007 * m, 0.002 * m, [[0, BRISTLE], [1, OCHRE]], 5, s);
      } },
      // a short grey beard over the chin and the jaw, the mouth under it (the hair's colour)
      beard: { name: 'beard', draw: F => {
        const h = F.head;
        F.cap(h.at, h.axes, h.egg.map(e => e * h.r * h.out * 1.03), [0, -0.86, 0.5], 0.68, F.colors.hair, h.sides, h.square);
      } },
      // a short briar pipe in the teeth at one corner of the mouth, its bowl ahead and low, a coal glowing in it; its
      // point `pipe` (the bowl's mouth) is where its smoke rises
      pipe: { name: 'pipe', draw: F => {
        const { add, mul } = V(), h = F.head, [hs, hu, hf] = h.axes, rh = h.r;
        const lip = h.on([0.2, -0.38, 0.95], 1.04);
        const bowl = add(lip, add(mul(hf, rh * 0.4), add(mul(hu, -rh * 0.14), mul(hs, rh * 0.06))));
        F.bar(lip, bowl, rh * 0.03, rh * 0.035, [[0, BRIAR]], 6, hu);
        const top = add(bowl, mul(hu, rh * 0.2));
        F.bar(add(bowl, mul(hu, -rh * 0.03)), top, rh * 0.07, rh * 0.085, [[0, BRIAR]], 8, hf);
        F.ball(add(top, mul(hu, -rh * 0.015)), [hs, hu, hf], [rh * 0.065, rh * 0.02, rh * 0.065], EMBER, 8);
        F.point('pipe', top);
      } },
    },
  },
};
