// The people of «The Glass Menagerie» as people in a scene (an element with "person"): who they are — figures of
// shapes in this world's style, soft rounded shapes in quiet colours, lit by the scene — and what they move by (the
// motions in cast.data.json). cast.md says who is who.
return {
  ...data,
  characters: {
    // Tom Wingfield, twenty-three: lean, dark hair, a worn dark jacket over a white shirt — the warehouse clerk who
    // writes poems at night
    tom: {
      kind: 'shapes', style: 'memory', who: 'man', garment: 'jacket', hair: 'short',
      body: { height: 0.99, thick: 0.86, shoulders: 0.98 },
      colors: { skin: '#e2b896', hair: '#2b211c', top: '#e6e0d2', garment: '#3e4150', bottom: '#38363a', shoes: '#25201d' },
    },
    // Laura Wingfield, twenty-four: slight, a dark bob, a plain pale-blue dress (blue roses), dark shoes
    laura: {
      kind: 'shapes', style: 'memory', who: 'woman', garment: 'dress', hair: 'bob',
      body: { height: 0.91, thick: 0.78, shoulders: 0.84, hips: 0.98 },
      colors: { skin: '#efcdb2', hair: '#46302a', top: '#a9bcd6', garment: '#a9bcd6', shoes: '#4a3b36' },
    },
    // Amanda Wingfield, past fifty: upright, fuller, greying hair in a bun, a faded plum house dress
    amanda: {
      kind: 'shapes', style: 'memory', who: 'woman', garment: 'dress', hair: 'bun',
      body: { height: 0.9, thick: 0.98, shoulders: 0.92, hips: 1.1 },
      colors: { skin: '#e3b99a', hair: '#8a786a', top: '#6a4b5e', garment: '#6a4b5e', shoes: '#2e2523' },
    },
  },
  shapes: {
    // the world's style: soft rounded shapes and tinted lines (soft), the head a little smaller so the grown-ups read
    // as grown-ups, a simple face (eyes, brows, nose, mouth — <id>_mood shows on it) so faces read across the room
    styles: { memory: { from: 'soft', name: 'The Glass Menagerie', head: 1.18, neck: 0.55, legs: 0.92, line: 1.8 } },
  },
};
