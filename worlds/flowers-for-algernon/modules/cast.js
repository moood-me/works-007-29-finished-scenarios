// The people of «Flowers for Algernon» as people in a scene (an element with "person"): who they are — figures of
// shapes in this world's style, soft rounded shapes in quiet colours, lit by the scene — and what they move by (the
// motions in cast.data.json). cast.md says who is who.
const { add, mul, mix } = MooodShapes.V;
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
// Charlie's shirt front and tie in the jacket's opening: a white shirt's V from the collar down the chest, a narrow
// dark tie on it from its knot under the chin (on the chest's front, kept before the jacket)
const TIE = [0.42, 0.24, 0.2, 1], SHIRT = [0.93, 0.91, 0.86, 1];
const tie = F => {
  const m = F.fit.h, k = F.k, fw = F.fwd('Chest'), up = F.up('Chest'), sd = F.side('Chest');
  const neck = add(F.P('Neck1'), mul(up, -0.035 * m)), chest = F.P('Chest');
  const before = (p, d) => F.clear(p, 1, d * k);
  const knot = before(add(neck, mul(fw, 0.05 * k)), 0.012), low = before(add(add(chest, mul(up, -0.06 * m)), mul(fw, 0.11 * k)), 0.012);
  const v0 = before(add(neck, mul(fw, 0.045 * k)), 0.003), v1 = before(add(add(chest, mul(up, 0.02 * m)), mul(fw, 0.11 * k)), 0.003);
  F.tube([v0, v1], [[0, 0.045 * k], [1, 0.004 * k]], [[0, SHIRT]], 8, sd, 0.2);
  F.bar(knot, low, 0.012 * k, 0.02 * k, [[0, TIE]], 8, sd, 0.3);
  F.ball(knot, [sd, up, fw], [0.018 * k, 0.016 * k, 0.012 * k], TIE, 8);
};
// Miss Kinnian's exercise book held to her chest in both hands: a dark blue cover, its pages' cream edge, upright
// before the chest between the hands and it
const BOOK = F => {
  const m = F.fit.h;
  return {
    pages: { w: 0.085 * m, h: 0.108 * m, d: 0.008 * m, profile: [[0, 0.085 * m], [1, 0.085 * m]], colors: [[0, [0.93, 0.9, 0.82, 1]]] },
    cover: { w: 0.09 * m, h: 0.115 * m, d: 0.004 * m, profile: [[0, 0.09 * m], [1, 0.09 * m]], colors: [[0, [0.25, 0.3, 0.42, 1]]] },
  };
};
const notebook = F => {
  const m = F.fit.h, K = F.keep(BOOK), fw = F.fwd('Chest'), up = F.up('Chest'), sd = F.side('Chest');
  const c = add(add(mix(F.P('LeftHand'), F.P('RightHand'), 0.5), mul(fw, -0.035 * m)), mul(up, 0.03 * m));
  for (const [b, at] of [[K.pages, add(c, mul(fw, -0.01 * m))], [K.cover, c]])
    F.tube([add(at, mul(up, -b.h)), add(at, mul(up, b.h))], b.profile, b.colors, 8, sd, b.d / b.w, 8, true);
};
// Charlie's crew cut: hair cropped close to the head (a shell standing a little off it), the hairline high over the
// brow, lower at the temples, down to the nape behind
const step = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const CREW = F => F.head.egg.map(e => e * F.head.r * F.head.out * 1.04);
const crewcut = F => {
  const h = F.head;
  F.shell(h.at, h.axes, F.keep(CREW), a => 0.66 - 0.4 * step(0.4, 1.3, Math.abs(a)) - 0.5 * step(2, 2.8, Math.abs(a)), 0, F.colors.hair, h.sides, h.square);
};
return {
  ...data,
  characters: {
    // Charlie Gordon, thirty-seven: a broad, soft man with a round face and sandy hair in a crew cut; a brown jacket a
    // little too big, a white shirt and a tie, dark trousers — the factory's janitor in his best for the laboratory
    charlie: {
      kind: 'shapes', style: 'lab', who: 'man', garment: 'jacket', hair: 'crewcut', parts: ['tie'],
      body: { height: 0.97, thick: 1.04, shoulders: 1.0 },
      colors: { skin: '#e8bf9c', hair: '#a8834e', top: '#ece6d8', garment: '#8f6c4c', bottom: '#3e3a37', shoes: '#2c241e' },
    },
    // Alice Kinnian, thirty-four: slight and upright, brown hair up in a low bun, a plain dress of dusty rose — the
    // evening class's teacher
    kinnian: {
      kind: 'shapes', style: 'lab', who: 'woman', garment: 'frock', hair: 'bun', parts: ['notebook'],
      body: { height: 0.92, thick: 0.8, shoulders: 0.86, hips: 1.0 },
      colors: { skin: '#f0cfb6', hair: '#5b3b2b', top: '#b9807a', garment: '#b9807a', shoes: '#3e302b' },
    },
    // Dr Strauss: tall, spare, greying, round spectacles, a white laboratory coat over a grey suit
    strauss: {
      kind: 'shapes', style: 'lab', who: 'man', garment: 'labcoat', hair: 'short', parts: ['spectacles'],
      body: { height: 1.01, thick: 0.84, shoulders: 0.98, hips: 0.88 },
      colors: { skin: '#e0b898', hair: '#8f8a84', top: '#cfd3d6', garment: '#f2f1ec', bottom: '#5a5d63', shoes: '#26221f' },
    },
  },
  shapes: {
    // the world's style: soft rounded shapes and tinted lines (soft), the head a little smaller so the grown-ups read
    // as grown-ups, a simple face (eyes, brows, nose, mouth — <id>_mood shows on it) so faces read across the room
    styles: { lab: { from: 'soft', name: 'Flowers for Algernon', head: 1.3, neck: 0.55, legs: 0.92, line: 1.8 } },
    // a laboratory coat: white, from the shoulders to above the knee, straight, its sleeves white
    garments: {
      labcoat: { name: 'laboratory coat', hang: [{ to: 0.8, from: 'shoulders', flare: 0 }], sleeves: 'garment' },
      // a plain day dress: fitted to the waist, the skirt falling straight to below the knee
      frock: { name: 'day dress', hang: [{ to: 1.35, from: 'waist', flare: 0.16, off: 0.94 }], short: true, bare: true, bodice: true },
    },
    hair: { crewcut: { name: 'crew cut', draw: crewcut } },
    parts: {
      spectacles: { name: 'spectacles', draw: spectacles }, tie: { name: 'shirt and tie', draw: tie },
      notebook: { name: 'exercise book', draw: notebook },
    },
  },
};
