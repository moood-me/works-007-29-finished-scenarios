// The people of «Klara and the Sun» as people in a scene (an element with "person"): who they are — figures of
// shapes in this world's style, soft rounded shapes in quiet light colours, lit by the scene — and what they move by
// (the motions in cast.data.json). cast.md says who is who.
const SKETCHBOOK = F => ({ radii: [0.15 * F.fit.h, 0.01 * F.fit.h, 0.11 * F.fit.h], down: [0, -0.025 * F.fit.h, 0], up: [0, 1, 0] });
// Rick's bird: its sizes at his size, its eye's colour (a small lamp: it glows), its wings' and tail's darker metal
const BIRD = F => ({
  lift: 0.035 * F.fit.h,
  body: [0.04, 0.036, 0.075].map(v => v * F.fit.h),
  head: 0.028 * F.fit.h,
  wing: [0.075, 0.007, 0.045].map(v => v * F.fit.h),
  tail: [0.022, 0.006, 0.05].map(v => v * F.fit.h),
  eye: [1, 0.74, 0.36, 2],
  dark: [...F.colors.accent.slice(0, 3).map(v => v * 0.86), F.colors.accent[3]],
});
return {
  ...data,
  characters: {
    // Klara, an Artificial Friend: small and slight, a dark bob, porcelain-pale, a plain slate-blue dress over dark
    // tights — neat, nothing loose about her
    klara: {
      kind: 'shapes', style: 'sun', who: 'woman', garment: 'shift', hair: 'bob',
      body: { height: 0.86, thick: 0.78, shoulders: 0.84, hips: 0.94 },
      colors: { skin: '#ecdfd2', hair: '#1f1a1d', top: '#4a5a72', garment: '#4a5a72', bottom: '#3a3d48', shoes: '#2a2a30' },
    },
    // Josie, fourteen and ill: thin and pale, long honey-brown hair, a big oatmeal cardigan over a pale-blue top,
    // grey leggings, socks — at home, in bed most days; her sketchbook
    josie: {
      kind: 'shapes', style: 'sun', who: 'teen', garment: 'jacket', hair: 'straight', socks: true, parts: ['sketchbook'],
      body: { height: 0.88, thick: 0.74, shoulders: 0.86, hips: 0.96 },
      colors: {
        skin: '#f1d6c2', hair: '#8f6440', top: '#a9bfd3', garment: '#ddcbaa', bottom: '#74757e', shoes: '#e9e3d8',
        socks: '#e9e3d8', accent: '#f4efe4',
      },
    },
    // the Mother (Chrissie): tall and upright, dark hair pulled into a bun, a charcoal work jacket over a white
    // blouse, dark trousers — dressed for the office even at home
    mother: {
      kind: 'shapes', style: 'sun', who: 'woman', garment: 'blazer', hair: 'bun',
      body: { height: 0.98, thick: 0.86, shoulders: 0.9, hips: 1.0 },
      colors: { skin: '#e6c3a6', hair: '#2a1f1b', top: '#ece7df', garment: '#3b3e48', bottom: '#2f3139', shoes: '#1e1c1f' },
    },
    // Rick, the boy next door, fourteen, not lifted: tousled dark hair, an old olive canvas jacket over a pale shirt,
    // brown corduroys, work boots — always out of doors; his bird with him
    rick: {
      kind: 'shapes', style: 'sun', who: 'teen', garment: 'jacket', hair: 'short', parts: ['bird'],
      body: { height: 0.94, thick: 0.82, shoulders: 0.94, hips: 0.94 },
      colors: {
        skin: '#e6c09e', hair: '#3a2a20', top: '#d9d1bf', garment: '#5d6847', bottom: '#5b4a3b', shoes: '#3a2e26',
        accent: '#8d9aa6',
      },
    },
    // the Manager of the shop of Artificial Friends: middle-aged, kind and tired, short greying hair, a plain dress
    // of soft plum-grey to below the knee, sensible shoes
    manager: {
      kind: 'shapes', style: 'sun', who: 'woman', garment: 'frock', hair: 'short',
      body: { height: 0.95, thick: 0.96, shoulders: 0.9, hips: 1.04 },
      colors: { skin: '#e8cdb6', hair: '#8f8780', top: '#6c5d66', garment: '#6c5d66', bottom: '#6c5d66', shoes: '#3a3234' },
    },
  },
  shapes: {
    // the world's style: soft rounded shapes and tinted lines (soft), the head a little smaller so the grown-ups read
    // as grown-ups (a little larger than theirs, so faces read in a room seen whole), a simple face (eyes, brows, nose, mouth — <id>_mood shows on it) so faces read across the room
    styles: { sun: { from: 'soft', name: 'Klara and the Sun', head: 1.28, neck: 0.55, legs: 0.92, line: 1.8 } },
    garments: {
      // Klara's plain dress: a straight shift to the knee, short sleeves, over tights (the legs the bottom's colour)
      shift: { name: 'shift dress', hang: [{ to: 1.1, from: 'waist', flare: 0.2, off: 0.94 }], short: true, bodice: true },
      // the Manager's plain dress: straight from the waist to below the knee, long sleeves
      frock: { name: 'frock', hang: [{ to: 1.3, from: 'waist', flare: 0.14, off: 0.95 }], bodice: true, sleeves: 'garment' },
      // the Mother's work jacket: straight, short, to the waist
      blazer: { name: 'blazer', hang: [{ to: 0.3, from: 'shoulders', flare: 0, folds: false }], sleeves: 'garment' },
    },
    parts: {
      // Josie's sketchbook: a stiff pad lying level in her lap under her hands, its pages the look's accent
      sketchbook: {
        name: 'sketchbook',
        draw: F => {
          const { mix, add, level } = MooodShapes.V;
          const K = F.keep(SKETCHBOOK);
          const at = add(mix(F.P('LeftHand'), F.P('RightHand'), 0.4), K.down);
          F.ball(at, [level(F.side('Hips')), K.up, level(F.fwd('Hips'))], K.radii, F.colors.accent, 4, 4);
          F.point('sketchbook', at);
        },
      },
      // Rick's bird: a small grey-blue drone made like a bird — a round body, a head with one amber eye, flat wings
      // folded along its sides, a short tail — held in both hands, its head away from him
      bird: {
        name: 'bird',
        draw: F => {
          const { mix, add, mul, level, cross } = MooodShapes.V;
          const K = F.keep(BIRD);
          const f = level(F.fwd('Hips'));
          const u = [0, 1, 0];
          const sd = cross(u, f);
          const axes = [sd, u, f];
          const at = add(mix(F.P('LeftHand'), F.P('RightHand'), 0.5), mul(u, K.lift));
          const metal = F.colors.accent;
          F.ball(at, axes, K.body, metal, 12);
          const head = add(at, add(mul(f, K.body[2] * 0.95), mul(u, K.body[1] * 0.7)));
          F.ball(head, axes, [K.head, K.head, K.head], metal, 10);
          F.ball(add(head, add(mul(f, K.head * 0.8), mul(u, K.head * 0.15))), axes, [K.head * 0.3, K.head * 0.3, K.head * 0.3], K.eye, 6);
          for (const s of [-1, 1]) {
            F.ball(add(at, add(mul(sd, s * K.body[0] * 0.95), mul(u, K.body[1] * 0.3))), axes, K.wing, K.dark, 8);
          }
          F.ball(add(at, add(mul(f, -K.body[2] * 1.1), mul(u, K.body[1] * 0.25))), axes, K.tail, K.dark, 6);
          F.point('bird', at);
        },
      },
    },
  },
};
