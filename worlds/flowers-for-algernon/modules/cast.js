// The people of «Flowers for Algernon» as people in a scene (an element with "person"): who they are — figures of
// shapes in this world's style, soft rounded shapes in quiet colours, lit by the scene — and what they move by (the
// motions in cast.data.json). cast.md says who is who.
const { add, mul, mix } = MooodShapes.V;
// (each part keeps what it would make anew each frame — its lists, its sizes, its points: F.keep — and builds its
// points of the figure's vectors, the frame's own; nothing made per frame)
// Strauss's spectacles: two round rims before the eyes and a bridge between them (points on the head's face, a
// little out of it), thin dark wire
const RIM = 10, WIRE = [0.16, 0.14, 0.13];
const SPECS = F => ({
  dirs: [-1, 1].map(sx => Array.from({ length: RIM + 1 }, (_, i) => {
    const a = (i / RIM) * Math.PI * 2;
    return [sx * 0.33 + 0.2 * Math.cos(a), 0.06 + 0.17 * Math.sin(a), 0.94];
  })),
  rims: [0, 1].map(() => new Array(RIM + 1).fill(null)),
  bridge: [[-0.13, 0.08, 0.99], [0.13, 0.08, 0.99]],
  profile: [[0, F.head.r * 0.022], [RIM, F.head.r * 0.022]],
  wire: F.head.r * 0.02,
  colors: [[0, WIRE]],
});
const spectacles = F => {
  const h = F.head, K = F.keep(SPECS);
  for (let k = 0; k < 2; k++) {
    const rim = K.rims[k], dirs = K.dirs[k];
    for (let i = 0; i <= RIM; i++) rim[i] = h.on(dirs[i], 1.07);
    F.tube(rim, K.profile, K.colors, 5, h.axes[1]);
  }
  F.bar(h.on(K.bridge[0], 1.08), h.on(K.bridge[1], 1.08), K.wire, K.wire, K.colors, 5, h.axes[1]);
  F.point('spectacles', add(h.at, mul(h.axes[2], h.r)));
};
// Charlie's shirt front and tie in the jacket's opening: a white shirt's V from the collar down the chest, a narrow
// dark tie on it from its knot under the chin (on the chest's front, kept before the jacket)
const TIE_SIZES = F => {
  const m = F.fit.h, k = F.k;
  return {
    neck: -0.035 * m, low: -0.06 * m, top: 0.02 * m, knotOut: 0.05 * k, vOut: 0.045 * k, chestOut: 0.11 * k,
    clearKnot: 0.012 * k, clearV: 0.003 * k, knotR: 0.012 * k, lowR: 0.02 * k,
    knot: [0.018 * k, 0.016 * k, 0.012 * k], axes: [null, null, null], pts: [null, null],
    shirtProfile: [[0, 0.045 * k], [1, 0.004 * k]], shirt: [[0, [0.93, 0.91, 0.86, 1]]], tie: [[0, [0.42, 0.24, 0.2, 1]]],
  };
};
const tie = F => {
  const K = F.keep(TIE_SIZES), fw = F.fwd('Chest'), up = F.up('Chest'), sd = F.side('Chest');
  const neck = add(F.P('Neck1'), mul(up, K.neck)), chest = F.P('Chest');
  const knot = F.clear(add(neck, mul(fw, K.knotOut)), 1, K.clearKnot), low = F.clear(add(add(chest, mul(up, K.low)), mul(fw, K.chestOut)), 1, K.clearKnot);
  K.pts[0] = F.clear(add(neck, mul(fw, K.vOut)), 1, K.clearV);
  K.pts[1] = F.clear(add(add(chest, mul(up, K.top)), mul(fw, K.chestOut)), 1, K.clearV);
  F.tube(K.pts, K.shirtProfile, K.shirt, 8, sd, 0.2);
  F.bar(knot, low, K.knotR, K.lowR, K.tie, 8, sd, 0.3);
  K.axes[0] = sd; K.axes[1] = up; K.axes[2] = fw;
  F.ball(knot, K.axes, K.knot, K.tie[0][1], 8);
};
// Miss Kinnian's exercise book held to her chest in both hands: a dark blue cover, its pages' cream edge, upright
// before the chest between the hands and it
const BOOK = F => {
  const m = F.fit.h, board = (w, h, d, back, colour) => ({ h, back, flat: d / w, pts: [null, null], profile: [[0, w], [1, w]], colors: [[0, colour]] });
  return {
    back: -0.035 * m, down: -0.05 * m,
    boards: [board(0.085 * m, 0.108 * m, 0.008 * m, -0.01 * m, [0.93, 0.9, 0.82, 1]), board(0.09 * m, 0.115 * m, 0.004 * m, 0, [0.25, 0.3, 0.42, 1])],
  };
};
const notebook = F => {
  const K = F.keep(BOOK), fw = F.fwd('Chest'), up = F.up('Chest'), sd = F.side('Chest');
  const c = add(add(mix(F.P('LeftHand'), F.P('RightHand'), 0.5), mul(fw, K.back)), mul(up, K.down));
  for (const b of K.boards) {
    const at = add(c, mul(fw, b.back));
    b.pts[0] = add(at, mul(up, -b.h)); b.pts[1] = add(at, mul(up, b.h));
    F.tube(b.pts, b.profile, b.colors, 8, sd, b.flat, 8, true);
  }
};
// Charlie's crew cut: hair cropped close to the head (a shell standing a little off it), the hairline high over the
// brow, lower at the temples, down to the nape behind
const step = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const hairline = a => 0.66 - 0.4 * step(0.4, 1.3, Math.abs(a)) - 0.5 * step(2, 2.8, Math.abs(a));
const CREW = F => F.head.egg.map(e => e * F.head.r * F.head.out * 1.04);
const crewcut = F => {
  const h = F.head;
  F.shell(h.at, h.axes, F.keep(CREW), hairline, 0, F.colors.hair, h.sides, h.square);
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
    // a laboratory coat: white, its skirt straight from the waist to above the knee (hung from the shoulders, it
    // would flare into a bell over arms held before the chest), the body and sleeves white over it
    garments: {
      labcoat: { name: 'laboratory coat', hang: [{ to: 0.8, from: 'waist', flare: 0.04, off: 1.02, folds: false }, { to: 0.3, from: 'shoulders', flare: 0, folds: false }], sleeves: 'garment' },
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
