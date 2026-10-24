// The people of «Leaf by Niggle» as people in a scene (an element with "person"): who they are — figures of shapes in
// this world's style, soft rounded shapes in a watercolour's quiet colours, lit by the scene, a simple face so a face
// reads across the shed — and what they move by (the motions in cast.data.json). cast.md says who is who and what each
// carries. A part's lengths are a man's metres times F.fit.h (the person's height as a share of a man's 1.76 m).
const V = () => MooodShapes.V;
const UP = [0, 1, 0];
// Niggle's tufts: directions from the head's centre (side, up, forward) — over the ears, behind them, at the crown's back
const TUFTS = [[0.95, 0.15, -0.1], [-0.95, 0.15, -0.1], [0.8, 0.3, -0.5], [-0.8, 0.3, -0.5], [0.15, 0.55, -0.85], [-0.25, 0.8, -0.4]];
const UNTIDY = F => ({
  radii: F.head.egg.map(e => e * F.head.r * F.head.out),
  pts: TUFTS.map(() => [null, null, null]),
  profile: [[0, F.head.r * 0.3], [1, F.head.r * 0.2], [2, F.head.r * 0.03]],
  colors: [[0, F.colors.hair]],
});
// Niggle's brush: a long pale handle out of the right fist along the forearm, a ferrule, a green-tipped head
const BRUSH = F => {
  const h = F.fit.h;
  return {
    h,
    handle: [[0, [0.78, 0.66, 0.46, 1]]],
    ferrule: [[0, [0.62, 0.6, 0.56, 1]]],
    tip: [[0, [0.32, 0.45, 0.27, 1]]],
  };
};
// Parish's stick: a plain pale ash stick with a crook, from under his right hand to the floor beside his right foot
const STICK = F => {
  const h = F.fit.h;
  return {
    h,
    wood: [[0, [0.52, 0.4, 0.28, 1]]],
    hook: [[0, 0.016 * h], [3, 0.015 * h]],
    curl: [null, null, null, null],
  };
};
return {
  ...data,
  characters: {
    // Niggle: a little man, past his middle years, roundish, untidy greying-brown hair; a painter's smock of faded
    // blue linen to the thigh, old brown trousers; a brush in his right hand
    niggle: {
      kind: 'shapes', style: 'niggle', who: 'man', garment: 'smock', hair: 'untidy', face: 'simple', parts: ['brush'],
      body: { height: 0.93, thick: 1.0, shoulders: 0.94, hips: 1.04 },
      colors: { skin: '#e8bf9c', hair: '#7d6d5c', top: '#b9ae98', garment: '#4f6c96', bottom: '#5a4636', shoes: '#3b2d24' },
    },
    // Parish: lean and weathered, a lame leg; a cloth cap, a worn green-brown jacket, a collarless shirt, patched
    // trousers; his ash stick in his right hand
    parish: {
      kind: 'shapes', style: 'niggle', who: 'man', garment: 'jacket', hair: 'short', hat: 'cap', face: 'simple',
      parts: ['stick'],
      body: { height: 1.0, thick: 0.82, shoulders: 0.98 },
      colors: { skin: '#d5a47f', hair: '#8a7a68', top: '#cdbfa5', garment: '#5f6447', bottom: '#4d4236', shoes: '#2e241d', hat: '#4a4134' },
    },
    // Mrs Parish: small, ill since summer; a kerchief over her hair, a faded rose house dress
    mrs_parish: {
      kind: 'shapes', style: 'niggle', who: 'woman', garment: 'dress', hair: 'bun', hat: 'kerchief', face: 'simple',
      body: { height: 0.9, thick: 0.8, shoulders: 0.86, hips: 0.98 },
      colors: { skin: '#e6c0a4', hair: '#8c7666', top: '#a9838a', garment: '#a9838a', shoes: '#4a3b36', hat: '#d8cfbd' },
    },
  },
  shapes: {
    // the world's style: the engine's soft figures (rounded shapes, tinted lines) toned by the light, the head a little
    // big, so a face reads across the shed, a simple face (eyes, brows, nose, mouth: <id>_mood shows on it)
    styles: { niggle: { from: 'soft', name: 'Leaf by Niggle', head: 1.35, neck: 0.6, line: 1.6, paint: 'toned', face: 'simple' } },
    garments: {
      // a painter's smock: loose from the shoulders to the thigh, long sleeves
      smock: { name: 'smock', hang: [{ to: 0.72, from: 'shoulders', flare: 0.2 }], sleeves: 'garment' },
    },
    hair: {
      // untidy: thin on the crown, tufts sticking out over the ears and at the back
      untidy: { name: 'untidy', draw: F => {
        const { add, mul, unit, cross } = V(), h = F.head, [hs, hu, hf] = h.axes, rh = h.r, K = F.keep(UNTIDY);
        F.cap(h.at, h.axes, K.radii, [0, 0.62, -0.78], -0.12, F.colors.hair, h.sides, h.square);
        TUFTS.forEach((d, i) => {
          const v = unit(add(add(mul(hs, d[0]), mul(hu, d[1])), mul(hf, d[2]))), base = add(h.at, mul(v, rh * 0.85)), p = K.pts[i];
          p[0] = base;
          p[1] = add(base, mul(v, rh * 0.3));
          p[2] = add(base, add(mul(v, rh * 0.45), mul(hu, -rh * 0.12)));
          F.tube(p, K.profile, K.colors, 8, unit(cross(v, hf)), 0.5);
        });
      } },
    },
    hats: {
      // a kerchief over the hair, tied at the nape
      kerchief: { name: 'kerchief', draw: F => {
        const { add, mul } = V(), { at, axes, egg, r, out, sides, square } = F.head, [, hu, hf] = axes;
        F.cap(at, axes, egg.map(e => e * r * out * 1.08), [0, 0.7, -0.72], -0.05, F.colors.hat, sides, square);
        F.ball(add(at, add(mul(hu, -r * 0.45), mul(hf, -r * 1.02))), axes, [r * 0.22, r * 0.16, r * 0.14], F.colors.hat, 10);
      } },
    },
    parts: {
      brush: {
        name: 'brush',
        draw: F => {
          const { add, mul, sub, unit } = V();
          const K = F.keep(BRUSH);
          const h = K.h;
          const hand = F.P('RightHand');
          const along = unit(sub(hand, F.P('RightForeArm')));
          const side = F.side('RightHand');
          const back = sub(hand, mul(along, 0.06 * h));
          const neck = add(hand, mul(along, 0.17 * h));
          const head = add(neck, mul(along, 0.035 * h));
          const end = add(head, mul(along, 0.045 * h));
          F.bar(back, neck, 0.007 * h, 0.006 * h, K.handle, 6, side);
          F.bar(neck, head, 0.0065 * h, 0.0065 * h, K.ferrule, 6, side);
          F.bar(head, end, 0.008 * h, 0.002 * h, K.tip, 6, side);
        },
      },
      stick: {
        name: 'stick',
        draw: F => {
          const { add, mul, sub, unit } = V();
          const K = F.keep(STICK);
          const h = K.h;
          const hand = F.P('RightHand');
          const fwd = F.fwd('Hips');
          const across = F.side('Hips');
          const floor = Math.min(F.P('RightFoot')[1], F.P('LeftFoot')[1]) - 0.07 * h;
          const tip = sub(add(hand, mul(fwd, 0.05 * h)), mul(UP, hand[1] - floor));
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
    },
  },
};
