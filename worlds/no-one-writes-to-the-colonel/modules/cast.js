// The people of «No One Writes to the Colonel» as people in a scene (an element with "person"): who they are — figures
// of shapes in this world's style, matte figurines in sun-faded colours lit by the scene, a simple face so a face
// reads across the room — and what they move by (the motions in cast.data.json). cast.md says who is who and what each
// carries. A part's lengths are a man's metres times F.fit.h (the person's height as a share of a man's 1.76 m).
const V = () => MooodShapes.V;
const UMBRELLA = [0.09, 0.085, 0.09, 1];
const HANDLE = [0.3, 0.2, 0.13, 1];
const UP = [0, 1, 0];
// what the umbrella keeps from frame to frame (F.keep: once a figure) — its colours, its profiles at the figure's
// size, the lists its points are put in
const KEPT = F => {
  const h = F.fit.h;
  return {
    h,
    rod: [[0, UMBRELLA]],
    crook: [[0, HANDLE]],
    cloth: [[0, 0.018 * h], [1, 0.03 * h], [2, 0.01 * h]],
    hook: [[0, 0.011 * h], [3, 0.01 * h]],
    spindle: [null, null, null],
    curl: [null, null, null, null],
  };
};
// an open umbrella held by its handle in `hand`, its canopy over the head: the shaft from the hand to above the
// head, the canopy a dome round it (F.shell) whose rim `edge` gives — the colonel's torn back between two ribs, the
// bare ribs showing there (`bare`: the ways round they stand at); `inner` the rim of its underside. Its frame is the hips' turned so that their up runs
// along the shaft (a turn keeps the frame's hand, so the canopy's outside faces out).
const RIM = 0.1;
const SCALLOP = a => RIM + 0.12 * Math.abs(Math.sin(4 * a));
const TORN = a => (a > 0.45 && a < 1.2 ? 0.66 : a > -2.5 && a < -2.15 ? 0.38 : SCALLOP(a));
const TORN_IN = a => TORN(-a);
const BARE = [Math.PI / 4, -3 * Math.PI / 4];
const NONE = [];
const turned = (x, u, along) => {
  const { add, mul, dot, cross } = V();
  const v = cross(u, along);
  const c = dot(u, along);
  return add(add(mul(x, c), cross(v, x)), mul(v, dot(v, x) / (1 + c)));
};
const open = (F, K, hand, edge, inner, bare, cloth) => {
  const { add, mul, sub, unit } = V();
  const h = K.h;
  const top = add(F.head.at, mul(UP, 0.62 * h));
  const along = unit(sub(top, hand));
  const u = F.up('Hips');
  const side = turned(F.side('Hips'), u, along);
  const fwd = turned(F.fwd('Hips'), u, along);
  const R = 0.52 * h;
  const H = 0.3 * h;
  const c = sub(top, mul(along, H));
  K.axes[0] = side;
  K.axes[1] = along;
  K.axes[2] = fwd;
  K.radii[0] = R;
  K.radii[1] = H;
  K.radii[2] = R;
  F.bar(sub(hand, mul(along, 0.02 * h)), add(top, mul(along, 0.07 * h)), 0.008 * h, 0.006 * h, K.rod, 6, side);
  F.shell(c, K.axes, K.radii, edge, 0, cloth, 16);
  // its underside: the same dome a hair smaller, in a mirrored frame — turned inside out, it shows from below
  K.under[0] = mul(side, -1);
  K.under[1] = along;
  K.under[2] = fwd;
  K.inner[0] = R * 0.985;
  K.inner[1] = H * 0.97;
  K.inner[2] = R * 0.985;
  F.shell(sub(c, mul(along, 0.004 * h)), K.under, K.inner, inner, 0, cloth, 16);
  const th = Math.acos(RIM);
  for (const a of bare) {
    const out = add(mul(side, Math.sin(a) * Math.sin(th) * R), mul(fwd, Math.cos(a) * Math.sin(th) * R));
    F.bar(top, add(c, add(out, mul(along, Math.cos(th) * H))), 0.004 * h, 0.003 * h, K.rod, 4, along);
  }
  return along;
};
const OPEN = F => {
  const h = F.fit.h;
  return {
    h,
    rod: [[0, UMBRELLA]],
    crook: [[0, HANDLE]],
    hook: [[0, 0.011 * h], [3, 0.01 * h]],
    curl: [null, null, null, null],
    axes: [null, null, null],
    radii: [0, 0, 0],
    under: [null, null, null],
    inner: [0, 0, 0],
  };
};
const OPEN_WHOLE = F => OPEN(F);
const GOLD = [0.78, 0.6, 0.24, 1];
const CHAIN = F => ({ pts: [null, null, null], r: [[0, 0.006 * F.fit.h], [2, 0.006 * F.fit.h]], gold: [[0, GOLD]] });
const CLOTH_OLD = [0.1, 0.1, 0.105, 1];
const CLOTH_NEW = [0.05, 0.05, 0.06, 1];
const NEWSPRINT = [0.86, 0.83, 0.74, 1];
const STOCK = [0.36, 0.22, 0.12, 1];
const STEEL = [0.16, 0.16, 0.17, 1];
const SACKING = [0.78, 0.72, 0.6, 1];
const KNOT = [0.66, 0.6, 0.48, 1];
const TAPE = [0.78, 0.66, 0.25, 1];
const BUNDLE = F => {
  const h = F.fit.h;
  return {
    h, sack: [[0, SACKING]], knot: [[0, KNOT]], tape: [[0, TAPE]],
    axes: [null, UP, null], radii: [0.17 * h, 0.25 * h, 0.08 * h], ear: [0.035 * h, 0.05 * h, 0.03 * h],
    neck: [[0, 0.03 * h], [1, 0.045 * h]],
    pts: [null, null, null, null, null], r: [[0, 0.007 * h], [4, 0.007 * h]],
  };
};
const PAPERS = F => ({ h: F.fit.h, paper: [[0, NEWSPRINT]] });
const RIFLE = F => ({ h: F.fit.h, wood: [[0, STOCK]], steel: [[0, STEEL]] });
return {
  ...data,
  characters: {
    // the colonel, seventy-five: tall, all bone and sinew, grey hair cut short, a grey moustache; his one black suit of
    // wool cloth, a white collarless shirt buttoned to the throat, polished black shoes
    colonel: {
      kind: 'shapes', style: 'macondo', who: 'old', garment: 'jacket', hair: 'short', face: 'simple', parts: ['moustache'],
      body: { height: 1.0, thick: 0.78, shoulders: 0.98, neck: 0.85 },
      colors: { skin: '#b9845f', hair: '#cfc9bf', top: '#ece6d8', garment: '#2b2a31', bottom: '#2b2a31', shoes: '#141215' },
    },
    // his wife, about seventy: small and bony, grey hair drawn back in a knot, a faded dark-blue house dress gone grey
    // with washing, bare feet in slippers
    wife: {
      kind: 'shapes', style: 'macondo', who: 'woman', garment: 'dress', hair: 'bun', face: 'simple',
      body: { height: 0.9, thick: 0.74, shoulders: 0.84, hips: 0.96 },
      colors: { skin: '#c4916c', hair: '#bdb6ac', top: '#46506a', garment: '#46506a', shoes: '#3a2f2a' },
    },
    // the doctor: young, slim, a short black beard, his white suit of drill gone soft in the damp, brown shoes
    doctor: {
      kind: 'shapes', style: 'macondo', who: 'man', garment: 'jacket', hair: 'short', face: 'simple', parts: ['beard'],
      body: { height: 1.02, thick: 0.84, shoulders: 0.96 },
      colors: { skin: '#c99a74', hair: '#221c1a', top: '#f1eee4', garment: '#e9e6da', bottom: '#e9e6da', shoes: '#6a4a32' },
    },
    // Don Sabas: short and heavy, his hair black and oiled, a cream shirt, a jacket and trousers of fawn linen, a gold
    // watch chain across his belly, two-tone shoes
    sabas: {
      kind: 'shapes', style: 'macondo', who: 'man', garment: 'jacket', hair: 'short', face: 'simple', parts: ['moustache', 'chain'],
      body: { height: 0.93, thick: 1.4, shoulders: 1.06, hips: 1.2, neck: 0.8 },
      colors: { skin: '#c08a62', hair: '#211c1a', top: '#ebe2cc', garment: '#c6b28a', bottom: '#c6b28a', shoes: '#4a3424', accent: '#c8a040' },
    },
    // the postmaster: middle-aged, in his shirtsleeves, a grey shirt and dark trousers, thinning hair
    postmaster: {
      kind: 'shapes', style: 'macondo', who: 'man', garment: 'none', hair: 'short', face: 'simple',
      body: { height: 0.97, thick: 1.0 },
      colors: { skin: '#b98a66', hair: '#5a4c44', top: '#b9c0bc', bottom: '#3a3a40', shoes: '#2a2422' },
    },
    // Germán, the tailor, Agustín's friend, in his twenties: slight, black hair, a white shirt with the sleeves rolled,
    // dark trousers, a tape measure round his neck
    herman: {
      kind: 'shapes', style: 'macondo', who: 'man', garment: 'none', hair: 'short', face: 'simple', parts: ['tape'],
      body: { height: 0.99, thick: 0.78, shoulders: 0.92 },
      colors: { skin: '#b07a52', hair: '#1c1816', top: '#ece8de', bottom: '#34302c', shoes: '#2a221c' },
    },
    // Alfonso, the tailor at the next machine: thickset, forty, a pale blue shirt, brown trousers
    alfonso: {
      kind: 'shapes', style: 'macondo', who: 'man', garment: 'none', hair: 'short', face: 'simple',
      body: { height: 0.95, thick: 1.15, shoulders: 1.02 },
      colors: { skin: '#a8714a', hair: '#2a2420', top: '#9fb4c2', bottom: '#5a4a3c', shoes: '#2a221c' },
    },
    // Álvaro, the oldest of them: long and thin, his hair going grey, a cream shirt buttoned to the neck, grey trousers
    alvaro: {
      kind: 'shapes', style: 'macondo', who: 'man', garment: 'none', hair: 'short', face: 'simple', parts: ['moustache'],
      body: { height: 1.01, thick: 0.82, neck: 1.05 },
      colors: { skin: '#c08c64', hair: '#6e665e', top: '#ddd3bc', bottom: '#4a4a50', shoes: '#1e1a18' },
    },
    // the policeman on the barracks' balcony: young, in a khaki uniform and a peaked cap, his rifle across his chest
    policeman: {
      kind: 'shapes', style: 'macondo', who: 'man', garment: 'jacket', hair: 'short', hat: 'cap', face: 'simple', parts: ['rifle'],
      body: { height: 1.0, thick: 0.9 },
      colors: { skin: '#a8754e', hair: '#1e1a18', top: '#8c8660', garment: '#8c8660', bottom: '#7e7854', shoes: '#1a1816', hat: '#5e5a3c' },
    },
  },
  shapes: {
    // the world's style: the engine's toy figurines — soft matte volumes lit by the room's light, quiet and upright —
    // with a simple face (eyes, brows, nose, mouth: <id>_mood shows on it)
    styles: { macondo: { from: 'toy', name: 'No One Writes to the Colonel', face: 'simple' } },
    parts: {
      // a grey moustache under the nose, drooping a little at its ends (the colour of the hair)
      moustache: {
        name: 'moustache',
        draw: F => {
          const { axes, r: rh, on } = F.head;
          F.tube(
            [on([-0.32, -0.36, 0.86], 1.0), on([-0.14, -0.24, 0.97], 1.04), on([0, -0.26, 1], 1.05), on([0.14, -0.24, 0.97], 1.04), on([0.32, -0.36, 0.86], 1.0)],
            [[0, rh * 0.03], [1, rh * 0.07], [2, rh * 0.075], [3, rh * 0.07], [4, rh * 0.03]],
            [[0, F.colors.hair]],
            8,
            axes[1],
          );
        },
      },
      // the colonel's umbrella opened over him in the rain: the old black cloth torn back between two ribs, the bare
      // ribs showing, the crook under his hand
      umbrella_torn: {
        name: 'umbrella, open and torn',
        draw: F => {
          const { add, mul, sub } = V();
          const K = F.keep(OPEN);
          const h = K.h;
          const hand = F.P('RightHand');
          const along = open(F, K, hand, TORN, TORN_IN, BARE, CLOTH_OLD);
          const back = F.fwd('Hips');
          K.curl[0] = sub(hand, mul(along, 0.02 * h));
          K.curl[1] = sub(hand, mul(along, 0.08 * h));
          K.curl[2] = add(K.curl[1], add(mul(along, -0.02 * h), mul(back, 0.05 * h)));
          K.curl[3] = add(K.curl[1], add(mul(along, 0.01 * h), mul(back, 0.08 * h)));
          F.tube(K.curl, K.hook, K.crook, 6, F.side('Hips'));
        },
      },
      // Don Sabas's umbrella, new and whole, held in his left hand by its straight handle
      umbrella_whole: {
        name: 'umbrella, open',
        draw: F => {
          const { mul, sub } = V();
          const K = F.keep(OPEN_WHOLE);
          const h = K.h;
          const hand = F.P('LeftHand');
          const along = open(F, K, hand, SCALLOP, SCALLOP, NONE, CLOTH_NEW);
          F.bar(sub(hand, mul(along, 0.1 * h)), sub(hand, mul(along, 0.01 * h)), 0.016 * h, 0.014 * h, K.crook, 6, F.side('Hips'));
        },
      },
      // the wall clock wrapped in a piece of sacking, carried by its knot in the colonel's right hand: the bundle hangs
      // under the hand, the two ears of the knot over it
      bundle: {
        name: 'the clock in its sacking',
        draw: F => {
          const { add, mul, unit, cross, level } = V();
          const K = F.keep(BUNDLE);
          const h = K.h;
          const hand = F.P('RightHand');
          const fwd = unit(level(F.fwd('Hips')));
          K.axes[0] = cross(UP, fwd);
          K.axes[2] = fwd;
          const top = add(hand, mul(UP, -0.05 * h));
          F.bar(add(hand, mul(UP, 0.02 * h)), add(top, mul(UP, -0.06 * h)), 0.03 * h, 0.05 * h, K.knot, 6, fwd);
          F.ball(add(top, mul(UP, -0.3 * h)), K.axes, K.radii, SACKING, 14, 3);
          F.ball(add(hand, add(mul(K.axes[0], 0.04 * h), mul(UP, 0.03 * h))), K.axes, K.ear, KNOT, 8);
          F.ball(add(hand, add(mul(K.axes[0], -0.04 * h), mul(UP, 0.03 * h))), K.axes, K.ear, KNOT, 8);
        },
      },
      // Germán's tape measure round his neck, its two ends hanging down his chest
      tape: {
        name: 'tape measure',
        draw: F => {
          const { add, mul, mix } = V();
          const K = F.keep(BUNDLE);
          const h = K.h;
          const neck = F.P('Neck1');
          const fwd = F.fwd('Chest');
          const up = F.up('Chest');
          const l = mix(neck, F.P('LeftArm'), 0.4);
          const r = mix(neck, F.P('RightArm'), 0.4);
          K.pts[0] = add(add(l, mul(fwd, 0.1 * h)), mul(up, -0.3 * h));
          K.pts[1] = add(l, mul(fwd, 0.05 * h));
          K.pts[2] = add(neck, mul(fwd, -0.05 * h));
          K.pts[3] = add(r, mul(fwd, 0.05 * h));
          K.pts[4] = add(add(r, mul(fwd, 0.1 * h)), mul(up, -0.26 * h));
          F.tube(K.pts, K.r, K.tape, 6, fwd, 0.25);
        },
      },
      // the doctor's newspapers, folded, held along his left forearm against his chest
      newspapers: {
        name: 'newspapers',
        draw: F => {
          const { add, mul, sub, unit } = V();
          const K = F.keep(PAPERS);
          const h = K.h;
          const hand = F.P('LeftHand');
          const dir = unit(sub(F.P('LeftForeArm'), hand));
          F.bar(add(hand, mul(dir, -0.04 * h)), add(hand, mul(dir, 0.26 * h)), 0.05 * h, 0.05 * h, K.paper, 6, F.fwd('Chest'), 0.3, 3);
        },
      },
      // the policeman's rifle across his chest: the butt by his right hand, the barrel up past his left shoulder
      rifle: {
        name: 'rifle',
        draw: F => {
          const { add, mul, sub, unit } = V();
          const K = F.keep(RIFLE);
          const h = K.h;
          const r = F.P('RightHand');
          const l = F.P('LeftHand');
          const axis = unit(sub(l, r));
          const hint = F.fwd('Chest');
          F.bar(add(r, mul(axis, -0.32 * h)), add(l, mul(axis, 0.06 * h)), 0.024 * h, 0.018 * h, K.wood, 6, hint, 0.5);
          F.bar(add(l, mul(axis, -0.1 * h)), add(l, mul(axis, 0.42 * h)), 0.009 * h, 0.008 * h, K.steel, 6, hint);
        },
      },
      // the doctor's short black beard round the jaw
      beard: {
        name: 'beard',
        draw: F => {
          const { axes, r: rh, on } = F.head;
          F.tube(
            [on([-0.8, -0.35, 0.5], 1.0), on([-0.5, -0.75, 0.6], 1.02), on([0, -0.92, 0.55], 1.04), on([0.5, -0.75, 0.6], 1.02), on([0.8, -0.35, 0.5], 1.0)],
            [[0, rh * 0.05], [1, rh * 0.12], [2, rh * 0.15], [3, rh * 0.12], [4, rh * 0.05]],
            [[0, F.colors.hair]],
            8,
            axes[2],
          );
        },
      },
      // Don Sabas's watch chain, gold, from a waistcoat button across his belly to the pocket
      chain: {
        name: 'watch chain',
        draw: F => {
          const { add, mul } = V();
          const K = F.keep(CHAIN);
          const c = F.trunk(1)[2];
          const out = mul(c[2], c[4] * 1.2);
          K.pts[0] = add(c[0], add(out, mul(c[1], -c[3] * 0.5)));
          K.pts[1] = add(c[0], add(mul(out, 1.03), mul(F.up('Spine1'), -0.04 * F.fit.h)));
          K.pts[2] = add(c[0], add(out, mul(c[1], c[3] * 0.5)));
          F.tube(K.pts, K.r, K.gold, 5, c[1]);
        },
      },
      // his old black umbrella, furled, held like a cane: the crook in the right hand, the ferrule on the floor. Drawn
      // each frame (it goes with the hand and the feet): what it needs is kept (F.keep), the vectors are the frame's own
      umbrella: {
        name: 'umbrella',
        draw: F => {
          const { add, mul, sub, unit } = V();
          const K = F.keep(KEPT);
          const h = K.h;
          const hand = F.P('RightHand');
          const fwd = F.fwd('Hips');
          const across = F.side('Hips');
          const floor = Math.min(F.P('RightFoot')[1], F.P('LeftFoot')[1]) - 0.07 * h;
          const tip = sub(add(hand, mul(fwd, 0.06)), mul(UP, hand[1] - floor));
          const along = unit(sub(hand, tip));
          const top = add(hand, mul(along, 0.06 * h));
          const shaft = sub(top, mul(along, 0.3 * h));
          F.bar(top, tip, 0.008 * h, 0.006 * h, K.rod, 6, across);
          // the furled cloth: a long spindle from under the hand to above the ferrule
          K.spindle[0] = shaft;
          K.spindle[1] = mul(add(shaft, tip), 0.5);
          K.spindle[2] = add(tip, mul(along, 0.1 * h));
          F.tube(K.spindle, K.cloth, K.rod, 8, across);
          // the crook over the hand
          const back = mul(fwd, -1);
          K.curl[0] = top;
          K.curl[1] = add(top, mul(along, 0.05 * h));
          K.curl[2] = add(K.curl[1], add(mul(along, 0.01 * h), mul(back, 0.05 * h)));
          K.curl[3] = add(top, add(mul(along, 0.02 * h), mul(back, 0.08 * h)));
          F.tube(K.curl, K.hook, K.crook, 6, across);
        },
      },
    },
  },
};
