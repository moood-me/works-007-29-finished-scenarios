// The people of «Traps» as people in a scene (an element with "person"): figures of shapes in this world's style —
// round, a little big-headed, warm, as a grotesque of the fifties is drawn — lit by the scene. cast.md says who is who.
const WINE = [0.46, 0.06, 0.1, 1];
const GLASS = [0.86, 0.88, 0.86, 1];
const WHITE = [0.95, 0.94, 0.91, 1];
const GOLD = [0.72, 0.58, 0.3, 1];
const STEEL = [0.78, 0.79, 0.8, 1];
const UP = [0, 1, 0], DOWN = [0, -1, 0];
// (what a part keeps from one frame to the next: the world's axes, its sizes at the person's size)
const BOW = F => ({ axes: [null, null, null], wing: [0.022 * F.k, 0.015 * F.k, 0.01 * F.k], knot: [0.008 * F.k, 0.009 * F.k, 0.012 * F.k] });
const FRINGE = F => ({ side: [F.head.r * 0.3, F.head.r * 0.36, F.head.r * 0.5], back: [F.head.r * 0.72, F.head.r * 0.36, F.head.r * 0.32] });
const TIE = F => ({ pts: [null, null, null], profile: [[0, 0.014 * F.fit.h], [1, 0.022 * F.fit.h], [2, 0.026 * F.fit.h]], colors: [[0, F.colors.accent]] });
const TASH = F => ({ r: [F.head.r * 0.17, F.head.r * 0.07, F.head.r * 0.07] });
// Kummer's cane: dark wood with a crook, from under his right hand to the floor a little before his feet
const CANE = F => ({ h: F.fit.h, wood: [[0, [0.23, 0.16, 0.12, 1]]], hook: [[0, 0.016 * F.fit.h], [3, 0.015 * F.fit.h]], curl: [null, null, null, null] });
// Kummer's pince-nez: two small round rims before the eyes and a bridge, thin gold wire (points on the head's face)
const RIM = 10;
const PINCE = F => ({
  dirs: [-1, 1].map(sx => Array.from({ length: RIM + 1 }, (_, i) => {
    const a = (i / RIM) * Math.PI * 2;
    return [sx * 0.3 + 0.16 * Math.cos(a), 0.05 + 0.14 * Math.sin(a), 0.95];
  })),
  rims: [0, 1].map(() => new Array(RIM + 1).fill(null)),
  bridge: [[-0.14, 0.07, 0.99], [0.14, 0.07, 0.99]],
  profile: [[0, F.head.r * 0.02], [RIM, F.head.r * 0.02]],
  wire: F.head.r * 0.02,
  colors: [[0, GOLD]],
});
// Pile's napkin tucked into his collar, hanging down over his chest and belly
const NAPKIN = F => ({ pts: [null, null, null, null], profile: [[0, 0.03 * F.fit.h], [1, 0.1 * F.fit.h], [2, 0.12 * F.fit.h], [3, 0.11 * F.fit.h]], colors: [[0, WHITE]] });
// Pile's knife and fork held upright in his fists on the table: steel blades and tines over dark handles
const CUTLERY = F => ({
  handle: [[0, [0.2, 0.14, 0.1, 1]]],
  steel: [[0, STEEL]],
  low: [0, -0.035 * F.fit.h, 0],
  grip: [0, 0.06 * F.fit.h, 0],
  top: [0, 0.2 * F.fit.h, 0],
  tines: [-1, 0, 1].map(k => [k * 0.008 * F.fit.h, 0, 0]),
  tineTop: [0, 0.24 * F.fit.h, 0],
  r: 0.007 * F.fit.h,
});
// the judge's chamberstick: a brass dish held in the right hand, a white candle standing upright in it, its flame (a
// colour that glows; the point "flame" for the scene's light)
const FLAME = [1.0, 0.78, 0.4, 2];
const WAX = [0.95, 0.92, 0.84, 1];
const CHAMBER = F => ({
  axes: [[1, 0, 0], [0, 1, 0], [0, 0, 1]],
  dish: [0.05 * F.fit.h, 0.008 * F.fit.h, 0.05 * F.fit.h],
  base: [0, 0.035 * F.fit.h, 0],
  top: [0, 0.15 * F.fit.h, 0],
  flame: [0, 0.172 * F.fit.h, 0],
  glow: [0.009 * F.fit.h, 0.02 * F.fit.h, 0.009 * F.fit.h],
  brass: [[0, GOLD]],
  wax: [[0, WAX]],
  r: 0.011 * F.fit.h,
});
// the verdict's draft: a few sheets held flat against the stomach in the left hand
const DRAFT = F => ({ paper: [[0, [0.93, 0.9, 0.82, 1]]], w: 0.075 * F.fit.h, h: 0.11 * F.fit.h });
const GLASS_SIZES = F => ({
  axes: [[1, 0, 0], [0, 1, 0], [0, 0, 1]],
  bowl: [0.035 * F.fit.h, 0.022 * F.fit.h, 0.035 * F.fit.h],
  wine: [0.035 * F.fit.h, 0.04 * F.fit.h, 0.035 * F.fit.h],
  foot: [0.03 * F.fit.h, 0.004 * F.fit.h, 0.03 * F.fit.h],
  stem: [[0, GLASS]],
  low: [0, -0.03 * F.fit.h, 0],
  high: [0, 0.05 * F.fit.h, 0],
  wineAt: [0, 0.084 * F.fit.h, 0],
});
return {
  ...data,
  characters: {
    // Alfredo Traps, forty-five, a travelling salesman lately risen: well fed, dark hair combed back, a new cream summer
    // suit and a loud red tie, a glass of the judge's wine held at his chest
    traps: {
      kind: 'shapes', style: 'traps', who: 'man', garment: 'suit', hair: 'short', face: 'simple', parts: ['glass', 'tie'],
      body: { height: 1, thick: 1.12, shoulders: 0.88, hips: 1.14, head: 1.02 },
      colors: { skin: '#e9b58f', hair: '#2f231d', top: '#f4efe3', garment: '#c8aa7c', bottom: '#b49870', shoes: '#6b4128', accent: '#a8322d' },
    },
    // the judge, the host: small, old, bald with a white fringe and a white moustache, a black suit, a dark red bow tie
    judge: {
      kind: 'shapes', style: 'traps', who: 'old', garment: 'suit', hair: 'fringe', face: 'simple', parts: ['bowtie', 'moustache'],
      body: { height: 0.85, thick: 1.02, shoulders: 0.86, hips: 1.08, head: 1.1 },
      colors: { skin: '#f0c2a2', hair: '#f1eee7', top: '#f2eee6', garment: '#2e2a2e', bottom: '#2e2a2e', shoes: '#1c1a1a', accent: '#8e2230' },
    },
    // Zorn, the prosecutor: tall, thin, silver hair combed flat, a long black frock coat, a wine-red silk cravat
    zorn: {
      kind: 'shapes', style: 'traps', who: 'old', garment: 'frock', hair: 'short', face: 'simple', scarf: true,
      body: { height: 1.05, thick: 0.8, shoulders: 0.92, head: 0.96, neck: 1.15 },
      colors: { skin: '#e4b99c', hair: '#c9c5be', top: '#f0ece4', garment: '#25252b', bottom: '#2a2a30', shoes: '#18171a', accent: '#6e2232' },
    },
    // Kummer, the defender: an old man, short and stout, red in the face, untidy white hair, a pince-nez, a crumpled
    // grey-brown suit and a green tie; his cane in his right hand
    kummer: {
      kind: 'shapes', style: 'traps', who: 'old', garment: 'suit', hair: 'short', face: 'simple', parts: ['cane', 'pincenez', 'tie'],
      body: { height: 0.9, thick: 1.16, shoulders: 0.88, hips: 1.12, head: 1.06 },
      colors: { skin: '#eaa58c', hair: '#ece8e0', top: '#ece6da', garment: '#6d6556', bottom: '#625b4e', shoes: '#3a2c22', accent: '#3d5a3c' },
    },
    // Pile, the executioner: huge and slow, a heavy neck, grey hair cropped close, a dark brown suit stretched over
    // him, a white napkin tucked into his collar, a knife and a fork upright in his fists
    pile: {
      kind: 'shapes', style: 'traps', who: 'man', garment: 'suit', hair: 'short', face: 'simple', parts: ['napkin', 'cutlery'],
      body: { height: 1.1, thick: 1.5, shoulders: 1.22, hips: 1.25, head: 1.0, neck: 0.7 },
      colors: { skin: '#dcae8e', hair: '#8f8a84', top: '#ebe6dc', garment: '#3e3128', bottom: '#382c24', shoes: '#1d1714', accent: '#3e3128' },
    },
  },
  shapes: {
    // the world's style: soft round shapes and tinted lines, the head a little smaller than soft's so the old men read
    // as men, a simple face (eyes, brows, nose, mouth — <id>_mood shows on it) that reads across the garden
    styles: { traps: { from: 'soft', name: 'Traps', head: 1.32, neck: 0.5, legs: 0.9, line: 1.7 } },
    garments: {
      // a frock coat: from the shoulders to the knees, straight, no tatters
      frock: { name: 'frock coat', hang: [{ to: 0.95, from: 'shoulders', flare: 0.14, folds: false }], sleeves: 'garment' },
      // a suit's jacket: close round the trunk, its hem at the top of the thighs, the trousers below it
      suit: { name: 'suit jacket', hang: [{ to: 0.28, from: 'shoulders', flare: 0.03, off: 1.05, folds: false }], sleeves: 'garment' },
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
      // a stemmed glass half full of red wine in the right hand, standing upright whatever the hand does: the wine the
      // bowl's lower half, the glass above it
      glass: {
        name: 'glass of wine',
        draw: F => {
          const { add } = MooodShapes.V;
          const K = F.keep(GLASS_SIZES), hand = F.P('RightHand'), at = add(hand, K.wineAt);
          F.ball(add(hand, K.low), K.axes, K.foot, GLASS, 12);
          F.bar(add(hand, K.low), add(hand, K.high), 0.005 * F.fit.h, 0.005 * F.fit.h, K.stem, 6, K.axes[0]);
          F.cap(at, K.axes, K.wine, DOWN, 0, WINE, 14);
          F.cap(at, K.axes, K.bowl, UP, 0.05, GLASS, 14);
        },
      },
      // a tie from the collar down the shirt's front, kept before whatever is worn over it
      tie: {
        name: 'tie',
        draw: F => {
          const { add, mul } = MooodShapes.V;
          const K = F.keep(TIE), k = F.k, fw = F.fwd('Chest'), up = F.up('Chest');
          K.pts[0] = F.clear(add(F.P('Neck1'), add(mul(fw, 0.07 * k), mul(up, -0.03 * F.fit.h))), 1, 0.006 * k);
          K.pts[1] = F.clear(add(F.P('Chest'), mul(fw, 0.1 * k)), 1, 0.006 * k);
          K.pts[2] = F.clear(add(F.P('Spine1'), mul(fw, 0.1 * k)), 1, 0.006 * k);
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
      // a cane in the right hand: from under the hand straight down to the floor a little before the foot, its crook
      // over the hand
      cane: {
        name: 'cane',
        draw: F => {
          const { add, mul, sub, unit } = MooodShapes.V;
          const K = F.keep(CANE), h = K.h, hand = F.P('RightHand'), fwd = F.fwd('Hips'), across = F.side('Hips');
          const floor = Math.min(F.P('RightFoot')[1], F.P('LeftFoot')[1]) - 0.07 * h;
          const tip = sub(add(hand, mul(fwd, 0.04 * h)), mul(UP, hand[1] - floor));
          const along = unit(sub(hand, tip));
          const top = add(hand, mul(along, 0.04 * h));
          F.bar(top, tip, 0.012 * h, 0.009 * h, K.wood, 6, across);
          const back = mul(fwd, -1);
          K.curl[0] = top;
          K.curl[1] = add(top, mul(along, 0.04 * h));
          K.curl[2] = add(K.curl[1], add(mul(along, 0.01 * h), mul(back, 0.05 * h)));
          K.curl[3] = add(top, add(mul(along, 0.015 * h), mul(back, 0.09 * h)));
          F.tube(K.curl, K.hook, K.wood, 6, across);
        },
      },
      // a pince-nez before the eyes
      pincenez: {
        name: 'pince-nez',
        draw: F => {
          const h = F.head, K = F.keep(PINCE);
          for (let k = 0; k < 2; k++) {
            const rim = K.rims[k], dirs = K.dirs[k];
            for (let i = 0; i <= RIM; i++) rim[i] = h.on(dirs[i], 1.07);
            F.tube(rim, K.profile, K.colors, 5, h.axes[1]);
          }
          F.bar(h.on(K.bridge[0], 1.08), h.on(K.bridge[1], 1.08), K.wire, K.wire, K.colors, 5, h.axes[1]);
        },
      },
      // a white napkin tucked into the collar, down the chest and over the belly, kept before the jacket
      napkin: {
        name: 'napkin',
        draw: F => {
          const { add, mul } = MooodShapes.V;
          const K = F.keep(NAPKIN), k = F.k, fw = F.fwd('Chest'), up = F.up('Chest');
          K.pts[0] = F.clear(add(F.P('Neck1'), add(mul(fw, 0.08 * k), mul(up, -0.03 * F.fit.h))), 1, 0.008 * k);
          K.pts[1] = F.clear(add(F.P('Chest'), mul(fw, 0.12 * k)), 1, 0.008 * k);
          K.pts[2] = F.clear(add(F.P('Spine1'), mul(fw, 0.14 * k)), 1, 0.008 * k);
          K.pts[3] = F.clear(add(F.P('Hips'), add(mul(fw, 0.16 * k), mul(up, 0.06 * F.fit.h))), 1, 0.008 * k);
          F.tube(K.pts, K.profile, K.colors, 8, F.side('Chest'), 0.2);
        },
      },
      // a fork upright in the left fist, a knife upright in the right, whatever the hands do
      cutlery: {
        name: 'knife and fork',
        draw: F => {
          const { add } = MooodShapes.V;
          const K = F.keep(CUTLERY);
          for (const side of ['Left', 'Right']) {
            const hand = F.P(`${side}Hand`), across = F.side('Chest');
            F.bar(add(hand, K.low), add(hand, K.grip), K.r * 1.4, K.r * 1.4, K.handle, 6, across);
            if (side === 'Right') F.bar(add(hand, K.grip), add(hand, K.top), K.r * 1.6, K.r * 0.6, K.steel, 6, across, 0.25);
            else {
              F.bar(add(hand, K.grip), add(hand, K.top), K.r * 0.8, K.r, K.steel, 6, across);
              for (const t of K.tines) {
                F.bar(add(add(hand, K.top), t), add(add(hand, K.tineTop), t), K.r * 0.35, K.r * 0.25, K.steel, 4, across);
              }
            }
          }
        },
      },
      // the judge's chamberstick in his right hand, the candle upright whatever the hand does
      chamberstick: {
        name: 'chamberstick',
        draw: F => {
          const { add } = MooodShapes.V;
          const K = F.keep(CHAMBER), hand = F.P('RightHand'), base = add(hand, K.base);
          F.ball(base, K.axes, K.dish, GOLD, 14);
          F.bar(base, add(hand, K.top), K.r, K.r, K.wax, 8, K.axes[0]);
          const flame = add(hand, K.flame);
          F.ball(flame, K.axes, K.glow, FLAME, 8);
          F.point('flame', flame);
        },
      },
      // the draft of the verdict: sheets in the left hand, held flat against the stomach
      draft: {
        name: 'draft of the verdict',
        draw: F => {
          const { add, mul } = MooodShapes.V;
          const K = F.keep(DRAFT), hand = F.P('LeftHand'), up = F.up('Chest'), fw = F.fwd('Chest');
          const at = add(hand, mul(fw, 0.02 * F.k));
          F.bar(add(at, mul(up, -K.h * 0.5)), add(at, mul(up, K.h * 0.5)), K.w, K.w, K.paper, 4, F.side('Chest'), 0.05);
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
