// The people of «Traps» as people in a scene (an element with "person"): figures of shapes in this world's style —
// round, a little big-headed, warm, as a grotesque of the fifties is drawn — lit by the scene. cast.md says who is who.
const WINE = [0.46, 0.06, 0.1, 1];
const GLASS = [0.86, 0.88, 0.86, 1];
const WHITE = [0.95, 0.94, 0.91, 1];
// (what a part keeps from one frame to the next: the world's axes, its sizes at the person's size)
const BOW = F => ({ axes: [null, null, null], wing: [0.022 * F.k, 0.015 * F.k, 0.01 * F.k], knot: [0.008 * F.k, 0.009 * F.k, 0.012 * F.k] });
const FRINGE = F => ({ side: [F.head.r * 0.3, F.head.r * 0.36, F.head.r * 0.5], back: [F.head.r * 0.72, F.head.r * 0.36, F.head.r * 0.32] });
const TIE = F => ({ pts: [null, null, null], profile: [[0, 0.014 * F.fit.h], [1, 0.022 * F.fit.h], [2, 0.026 * F.fit.h]], colors: [[0, F.colors.accent]] });
const TASH = F => ({ r: [F.head.r * 0.17, F.head.r * 0.07, F.head.r * 0.07] });
const GLASS_SIZES = F => ({
  axes: [[1, 0, 0], [0, 1, 0], [0, 0, 1]],
  wine: [0.032 * F.fit.h, 0.036 * F.fit.h, 0.032 * F.fit.h],
  foot: [0.03 * F.fit.h, 0.004 * F.fit.h, 0.03 * F.fit.h],
  stem: [[0, GLASS]],
  low: [0, -0.03 * F.fit.h, 0],
  high: [0, 0.05 * F.fit.h, 0],
  wineAt: [0, 0.084 * F.fit.h, 0],
});
return {
  characters: {
    // Alfredo Traps, forty-five, a travelling salesman lately risen: well fed, dark hair combed back, a new cream summer
    // suit and a loud red tie, a glass of the judge's wine held at his chest
    traps: {
      kind: 'shapes', style: 'traps', who: 'man', garment: 'jacket', hair: 'short', face: 'simple', parts: ['glass', 'tie'],
      body: { height: 1, thick: 1.06, shoulders: 1, head: 1.02 },
      colors: { skin: '#e9b58f', hair: '#2f231d', top: '#f4efe3', garment: '#c8aa7c', bottom: '#b49870', shoes: '#6b4128', accent: '#a8322d' },
    },
    // the judge, the host: small, old, bald with a white fringe and a white moustache, a black suit, a dark red bow tie
    judge: {
      kind: 'shapes', style: 'traps', who: 'old', garment: 'jacket', hair: 'fringe', face: 'simple', parts: ['bowtie', 'moustache'],
      body: { height: 0.85, thick: 1.02, shoulders: 0.94, head: 1.1 },
      colors: { skin: '#f0c2a2', hair: '#f1eee7', top: '#f2eee6', garment: '#2e2a2e', bottom: '#2e2a2e', shoes: '#1c1a1a', accent: '#8e2230' },
    },
    // Zorn, the prosecutor: tall, thin, silver hair combed flat, a long black frock coat, a wine-red silk cravat
    zorn: {
      kind: 'shapes', style: 'traps', who: 'old', garment: 'frock', hair: 'short', face: 'simple', scarf: true,
      body: { height: 1.05, thick: 0.8, shoulders: 0.92, head: 0.96, neck: 1.15 },
      colors: { skin: '#e4b99c', hair: '#c9c5be', top: '#f0ece4', garment: '#25252b', bottom: '#2a2a30', shoes: '#18171a', accent: '#6e2232' },
    },
  },
  shapes: {
    // the world's style: soft round shapes and tinted lines, the head a little smaller than soft's so the old men read
    // as men, a simple face (eyes, brows, nose, mouth — <id>_mood shows on it) that reads across the garden
    styles: { traps: { from: 'soft', name: 'Traps', head: 1.32, neck: 0.5, legs: 0.9, line: 1.7 } },
    garments: {
      // a frock coat: from the shoulders to the knees, straight, no tatters
      frock: { name: 'frock coat', hang: [{ to: 0.95, from: 'shoulders', flare: 0.14, folds: false }], sleeves: 'garment' },
    },
    hair: {
      // a bald crown with a white fringe round the back and over the ears
      fringe: {
        name: 'fringe',
        draw: F => {
          const { add, mul } = MooodShapes.V;
          const { at, axes, r } = F.head, K = F.keep(FRINGE);
          const [hs, hu, hf] = axes;
          for (const sx of [-1, 1]) {
            F.ball(add(at, add(mul(hs, sx * r * 0.86), add(mul(hu, r * 0.02), mul(hf, -r * 0.18)))), axes, K.side, F.colors.hair, 12);
          }
          F.ball(add(at, add(mul(hu, -r * 0.02), mul(hf, -r * 0.8))), axes, K.back, F.colors.hair, 14);
        },
      },
    },
    parts: {
      // a stemmed glass of red wine (the bowl its wine) in the right hand, standing upright whatever the hand does
      glass: {
        name: 'glass of wine',
        draw: F => {
          const { add, mul } = MooodShapes.V;
          const K = F.keep(GLASS_SIZES), hand = F.P('RightHand');
          F.ball(add(hand, K.low), K.axes, K.foot, GLASS, 12);
          F.bar(add(hand, K.low), add(hand, K.high), 0.005 * F.fit.h, 0.005 * F.fit.h, K.stem, 6, K.axes[0]);
          F.ball(add(hand, K.wineAt), K.axes, K.wine, WINE, 14);
        },
      },
      // a tie from the collar down the shirt's front, kept before whatever is worn over it
      tie: {
        name: 'tie',
        draw: F => {
          const { add, mul } = MooodShapes.V;
          const K = F.keep(TIE), k = F.k, fw = F.fwd('Chest'), up = F.up('Chest');
          K.pts[0] = F.clear(add(F.P('Neck1'), add(mul(fw, 0.07 * k), mul(up, -0.03 * F.fit.h))), 1, 0.006 * k);
          K.pts[1] = F.clear(add(F.P('Chest'), mul(fw, 0.13 * k)), 1, 0.006 * k);
          K.pts[2] = F.clear(add(F.P('Spine1'), mul(fw, 0.13 * k)), 1, 0.006 * k);
          F.tube(K.pts, K.profile, K.colors, 8, F.side('Chest'), 0.35);
        },
      },
      // a bow tie at the collar
      bowtie: {
        name: 'bow tie',
        draw: F => {
          const { add, mul } = MooodShapes.V;
          const K = F.keep(BOW), k = F.k, fit = F.fit.h, sd = F.side('Chest'), up = F.up('Chest'), fw = F.fwd('Chest');
          const at = add(F.P('Neck1'), add(mul(fw, 0.062 * k), mul(up, -0.02 * fit)));
          K.axes[0] = sd;
          K.axes[1] = up;
          K.axes[2] = fw;
          for (const sx of [-1, 1]) F.ball(add(at, mul(sd, sx * 0.024 * k)), K.axes, K.wing, F.colors.accent, 10);
          F.ball(at, K.axes, K.knot, F.colors.accent, 8);
        },
      },
      // a white moustache under the nose
      moustache: {
        name: 'moustache',
        draw: F => {
          const { add, mul } = MooodShapes.V;
          const { axes, on } = F.head, K = F.keep(TASH);
          for (const sx of [-1, 1]) F.ball(on([sx * 0.13, -0.25, 0.95], 1.0), axes, K.r, WHITE, 10);
        },
      },
    },
  },
};
