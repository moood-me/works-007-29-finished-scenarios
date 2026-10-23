// The people of «Leaf by Niggle» as people in a scene (an element with "person"): who they are — figures of shapes in
// this world's style, soft rounded shapes in a watercolour's quiet colours, lit by the scene, a simple face so a face
// reads across the shed — and what they move by (the motions in cast.data.json). cast.md says who is who and what each
// carries. A part's lengths are a man's metres times F.fit.h (the person's height as a share of a man's 1.76 m).
const V = () => MooodShapes.V;
const UP = [0, 1, 0];
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
// Parish's stick: a plain ash stick with a crook, from under his right hand to the floor beside his right foot
const STICK = F => {
  const h = F.fit.h;
  return {
    h,
    wood: [[0, [0.36, 0.26, 0.17, 1]]],
    hook: [[0, 0.016 * h], [3, 0.015 * h]],
    curl: [null, null, null, null],
  };
};
return {
  ...data,
  characters: {
    // Niggle: a little man, past his middle years, roundish, untidy greying-brown hair; a painter's smock gone the
    // colour of dust over a shirt, old brown trousers; a brush in his right hand
    niggle: {
      kind: 'shapes', style: 'niggle', who: 'man', garment: 'tunic', hair: 'short', face: 'simple', parts: ['brush'],
      body: { height: 0.93, thick: 1.0, shoulders: 0.94, hips: 1.04 },
      colors: { skin: '#e8bf9c', hair: '#6e5a48', top: '#d9cfb8', garment: '#a3aa9c', bottom: '#5c4c3e', shoes: '#3b2d24' },
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
      kind: 'shapes', style: 'niggle', who: 'woman', garment: 'dress', hair: 'bun', hood: true, face: 'simple',
      body: { height: 0.9, thick: 0.8, shoulders: 0.86, hips: 0.98 },
      colors: { skin: '#e6c0a4', hair: '#8c7666', top: '#a9838a', garment: '#a9838a', shoes: '#4a3b36' },
    },
  },
  shapes: {
    // the world's style: the engine's soft figures (rounded shapes, tinted lines) toned by the light, the head a little
    // smaller so grown-ups read as grown-ups, a simple face (eyes, brows, nose, mouth: <id>_mood shows on it)
    styles: { niggle: { from: 'soft', name: 'Leaf by Niggle', head: 1.15, neck: 0.6, line: 1.6, paint: 'toned', face: 'simple' } },
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
