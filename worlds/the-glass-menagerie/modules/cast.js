// The people of «The Glass Menagerie» as people in a scene (an element with "person"): who they are — figures of
// shapes in this world's style, soft rounded shapes in quiet colours, lit by the scene — and what they move by (the
// motions in cast.data.json). cast.md says who is who.
return {
  ...data,
  characters: {
    // Tom Wingfield, twenty-three: lean, dark hair, in his shirtsleeves — a white shirt, dark trousers (his overcoat
    // hangs by the door) — the warehouse clerk who writes poems at night
    tom: {
      kind: 'shapes', style: 'memory', who: 'man', garment: 'none', hair: 'short',
      body: { height: 0.99, thick: 0.86, shoulders: 0.98 },
      colors: { skin: '#e2b896', hair: '#2b211c', top: '#ebe5d6', bottom: '#3b3a44', shoes: '#25201d' },
    },
    // Laura Wingfield, twenty-four: slight, a dark bob, a plain pale-blue dress (blue roses), dark shoes
    laura: {
      kind: 'shapes', style: 'memory', who: 'woman', garment: 'dress', hair: 'bob',
      body: { height: 0.91, thick: 0.78, shoulders: 0.84, hips: 0.98 },
      colors: { skin: '#efcdb2', hair: '#46302a', top: '#8eaee6', garment: '#8eaee6', shoes: '#4a3b36' },
    },
    // Amanda Wingfield, past fifty: upright, fuller, greying hair in a bun, a faded plum house dress
    amanda: {
      kind: 'shapes', style: 'memory', who: 'woman', garment: 'dress', hair: 'bun',
      body: { height: 0.9, thick: 0.98, shoulders: 0.92, hips: 1.1 },
      colors: { skin: '#e3b99a', hair: '#6b615b', top: '#6a4b5e', garment: '#6a4b5e', shoes: '#2e2523' },
    },
  },
  shapes: {
    // what they hold: Laura's little glass deer, cupped in both hands — clear glass that keeps its own light (it glows,
    // whatever lights it); its point `deer` ("laura#deer")
    parts: {
      deer: { name: 'glass deer', draw: F => {
        const { add, mul, mix } = MooodShapes.V, m = F.fit.h, GLASS = [0.86, 0.94, 1, 2];
        const c = add(mix(F.P('RightHand'), F.P('LeftHand'), 0.5), [0, 0.035 * m, 0]), axes = [F.side('Hips'), [0, 1, 0], F.fwd('Hips')];
        F.ball(c, axes, [0.038 * m, 0.02 * m, 0.018 * m], GLASS, 10);
        F.ball(add(c, add(mul(axes[0], 0.032 * m), [0, 0.034 * m, 0])), axes, [0.011 * m, 0.013 * m, 0.011 * m], GLASS, 8);
        F.point('deer', c);
      } },
    },
    // the world's style: soft rounded shapes and tinted lines (soft), the head a shade smaller so the grown-ups read
    // as grown-ups yet big enough that a simple face (eyes, brows, nose, mouth — <id>_mood shows on it) reads across
    // the room
    styles: { memory: { from: 'soft', name: 'The Glass Menagerie', head: 1.3, neck: 0.5, legs: 0.92, line: 1.8 } },
  },
};
