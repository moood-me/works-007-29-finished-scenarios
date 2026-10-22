// The people of «Flowers for Algernon» as people in a scene (an element with "person"): who they are — figures of
// shapes in this world's style, soft rounded shapes in quiet colours, lit by the scene — and what they move by (the
// motions in cast.data.json). cast.md says who is who.
const { add, mul } = MooodShapes.V;
// Strauss's spectacles: two round rims before the eyes and a bridge between them (points on the head's face, a
// little out of it), thin dark wire
const RIM = 10;
const SPECS = F => ({
  rims: [0, 1].map(() => new Array(RIM + 1).fill(null)),
  profile: [[0, F.head.r * 0.022], [RIM, F.head.r * 0.022]],
  colors: [[0, [0.16, 0.14, 0.13]]],
});
const spectacles = F => {
  const h = F.head, K = F.keep(SPECS);
  for (const [k, sx] of [[0, -1], [1, 1]]) {
    const rim = K.rims[k];
    for (let i = 0; i <= RIM; i++) {
      const a = (i / RIM) * Math.PI * 2;
      rim[i] = h.on([sx * 0.33 + 0.2 * Math.cos(a), 0.06 + 0.17 * Math.sin(a), 0.94], 1.07);
    }
    F.tube(rim, K.profile, K.colors, 5, h.axes[1]);
  }
  F.bar(h.on([-0.13, 0.08, 0.99], 1.08), h.on([0.13, 0.08, 0.99], 1.08), h.r * 0.02, h.r * 0.02, [[0, [0.16, 0.14, 0.13]]], 5, h.axes[1]);
  F.point('spectacles', add(h.at, mul(h.axes[2], h.r)));
};
return {
  ...data,
  characters: {
    // Charlie Gordon, thirty-seven: a broad, soft man with a round face and sandy hair cut short; a brown work jacket
    // a little too big over a white shirt, dark trousers — the bakery's janitor in his best for the laboratory
    charlie: {
      kind: 'shapes', style: 'lab', who: 'man', garment: 'jacket', hair: 'short',
      body: { height: 0.97, thick: 1.04, shoulders: 1.0 },
      colors: { skin: '#e8bf9c', hair: '#b48a55', top: '#ece6d8', garment: '#7a5a3c', bottom: '#3e3a37', shoes: '#2c241e' },
    },
    // Alice Kinnian, thirty-four: slight and upright, brown hair up in a low bun, a plain dress of dusty rose — the
    // evening class's teacher
    kinnian: {
      kind: 'shapes', style: 'lab', who: 'woman', garment: 'dress', hair: 'bun',
      body: { height: 0.92, thick: 0.8, shoulders: 0.86, hips: 1.0 },
      colors: { skin: '#f0cfb6', hair: '#5b3b2b', top: '#b9807a', garment: '#b9807a', shoes: '#3e302b' },
    },
    // Dr Strauss: tall, spare, greying, round spectacles, a white laboratory coat over a grey suit
    strauss: {
      kind: 'shapes', style: 'lab', who: 'man', garment: 'labcoat', hair: 'short', parts: ['spectacles'],
      body: { height: 1.01, thick: 0.88, shoulders: 0.98 },
      colors: { skin: '#e0b898', hair: '#8f8a84', top: '#cfd3d6', garment: '#f2f1ec', bottom: '#5a5d63', shoes: '#26221f' },
    },
  },
  shapes: {
    // the world's style: soft rounded shapes and tinted lines (soft), the head a little smaller so the grown-ups read
    // as grown-ups, a simple face (eyes, brows, nose, mouth — <id>_mood shows on it) so faces read across the room
    styles: { lab: { from: 'soft', name: 'Flowers for Algernon', head: 1.18, neck: 0.55, legs: 0.92, line: 1.8 } },
    // a laboratory coat: white, from the shoulders to above the knee, straight, its sleeves white
    garments: { labcoat: { name: 'laboratory coat', hang: [{ to: 0.75, from: 'shoulders', flare: 0.1 }], sleeves: 'garment' } },
    parts: { spectacles: { name: 'spectacles', draw: spectacles } },
  },
};
