// The people of «Klara and the Sun» as people in a scene (an element with "person"): who they are — figures of
// shapes in this world's style, soft rounded shapes in quiet light colours, lit by the scene — and what they move by
// (the motions in cast.data.json). cast.md says who is who.
const SKETCHBOOK = F => ({ radii: [0.15 * F.fit.h, 0.01 * F.fit.h, 0.11 * F.fit.h], down: [0, -0.025 * F.fit.h, 0], up: [0, 1, 0] });
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
  },
  shapes: {
    // the world's style: soft rounded shapes and tinted lines (soft), the head a little smaller so the grown-ups read
    // as grown-ups (a little larger than theirs, so faces read in a room seen whole), a simple face (eyes, brows, nose, mouth — <id>_mood shows on it) so faces read across the room
    styles: { sun: { from: 'soft', name: 'Klara and the Sun', head: 1.28, neck: 0.55, legs: 0.92, line: 1.8 } },
    garments: {
      // Klara's plain dress: a straight shift to the knee, short sleeves, over tights (the legs the bottom's colour)
      shift: { name: 'shift dress', hang: [{ to: 1.1, from: 'waist', flare: 0.2, off: 0.94 }], short: true, bodice: true },
      // the Mother's work jacket: fitted, straight, to the hip
      blazer: { name: 'blazer', hang: [{ to: 0.38, from: 'shoulders', flare: 0, off: 1.0, folds: false }], sleeves: 'garment' },
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
    },
  },
};
