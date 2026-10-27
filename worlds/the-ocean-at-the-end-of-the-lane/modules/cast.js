// The people of «The Ocean at the End of the Lane» as people in a scene (an element with "person"): figures of shapes in
// this world's style — the engine's round, big-headed `soft` figures, lit by the scene's own light, with simple faces —
// and the motions in cast.data.json (Kimodo's, put there with put_motion). cast.md says who is who and what each motion is.
const { add, cross, mul, mix, sub, unit } = MooodShapes.V;
// (a part keeps what it would make anew each frame — its sizes, its lists — with F.keep, and builds its points of the
// figure's vectors, the frame's own)
// Dad's tie on his shirt front: a knot under the chin and the blade down the chest to the belt, a dark wine colour,
// kept before the shirt; its middle is the point "dad#tie"
const TIE = F => {
  const m = F.fit.h, k = F.k;
  // Ginnie's lantern, carried low in her right hand: a hurricane lamp hanging from its bail, swinging a little late as
// the hand moves — a tin cap and base, its glass lit (it glows); its flame is the point "ginnie#lamp" (the scene's
// light there)
const LANTERN = F => {
  const m = F.fit.h;
  return {
    drop: [0, -0.16 * m, 0], bail: 0.08 * m, wire: 0.004 * m, capUp: 0.07 * m, baseDown: -0.062 * m,
    cap: [0.045 * m, 0.022 * m, 0.045 * m], glass: [0.036 * m, 0.055 * m, 0.036 * m], base: [0.047 * m, 0.016 * m, 0.047 * m],
    tin: [0.33, 0.31, 0.28, 1], wires: [[0, [0.33, 0.31, 0.28, 1]]], light: [1, 0.8, 0.5, 2], axes: [null, null, null],
  };
};
const lantern = F => {
  const K = F.keep(LANTERN), h = F.P('RightHand');
  const mid = F.swing('lantern', add(h, K.drop), 90), up = unit(sub(h, mid)), side = unit(cross(up, F.fwd('Hips')));
  K.axes[0] = side; K.axes[1] = up; K.axes[2] = cross(side, up);
  F.bar(h, add(mid, mul(up, K.bail)), K.wire, K.wire, K.wires, 4, K.axes[2]);
  F.ball(add(mid, mul(up, K.capUp)), K.axes, K.cap, K.tin, 10);
  F.ball(mid, K.axes, K.glass, K.light, 12);
  F.ball(add(mid, mul(up, K.baseDown)), K.axes, K.base, K.tin, 10);
  F.point('lamp', mid);
};
return {
    neck: -0.03 * m, knotOut: 0.045 * k, chestOut: 0.1 * k, bellyOut: 0.1 * k, clear: 0.006 * k,
    pts: [null, null, null], profile: [[0, 0.011 * k], [1, 0.018 * k], [2, 0.022 * k]],
    colors: [[0, [0.36, 0.13, 0.15, 1]]], knot: [0.017 * k, 0.015 * k, 0.012 * k], axes: [null, null, null],
  };
};
const tie = F => {
  const K = F.keep(TIE), fw = F.fwd('Chest'), up = F.up('Chest'), sd = F.side('Chest');
  K.pts[0] = F.clear(add(add(F.P('Neck1'), mul(up, K.neck)), mul(fw, K.knotOut)), 1, K.clear);
  K.pts[1] = F.clear(add(F.P('Chest'), mul(fw, K.chestOut)), 1, K.clear);
  K.pts[2] = F.clear(add(F.P('Spine1'), mul(F.fwd('Spine1'), K.bellyOut)), 1, K.clear);
  F.tube(K.pts, K.profile, K.colors, 8, sd, 0.2, 2, true);
  K.axes[0] = sd; K.axes[1] = up; K.axes[2] = fw;
  F.ball(K.pts[0], K.axes, K.knot, K.colors[0][1], 8);
  F.point('tie', K.pts[1]);
};
// The boy's book, open in both hands before his chest, its top tipped away from him: two leaves in a shallow V, the
// spine away from him, the pages cream on a red cloth cover; its middle is the point "boy#book"
const BOOK = F => {
  const m = F.fit.h, cover = [[0, [0.62, 0.2, 0.17, 1]]], leaf = [[0, [0.95, 0.92, 0.84, 1]]];
  return {
    out: 0.05 * m, down: -0.02 * m, half: 0.06 * m, high: 0.17 * m, open: 0.035 * m, lean: 0.7,
    pts: [null, null], profile: [[0, 0.06 * m], [1, 0.06 * m]], sides: [-1, 1],
    sheets: [[cover, 0.006 * m], [leaf, 0]],
  };
};
const book = F => {
  const K = F.keep(BOOK), fw = F.fwd('Chest'), up = unit(add(F.up('Chest'), mul(fw, K.lean)));
  const spine = add(add(mix(F.P('LeftHand'), F.P('RightHand'), 0.5), mul(fw, K.out)), mul(up, K.down));
  const across = unit(sub(F.P('LeftHand'), F.P('RightHand')));
  for (const s of K.sides) {
    const dir = unit(add(mul(across, s * K.half), mul(fw, -K.open)));
    for (const [colors, back] of K.sheets) {
      const c = add(add(spine, mul(dir, K.half)), mul(fw, back));
      K.pts[0] = add(c, mul(up, -K.high / 2));
      K.pts[1] = add(c, mul(up, K.high / 2));
      F.tube(K.pts, K.profile, colors, 6, dir, 0.08, 4, true);
    }
  }
  F.point('book', spine);
};
return {
  ...data,
  characters: {
    // the boy, seven: small and slight, brown hair, a blue-grey jumper, grey shorts, long grey socks, brown sandals
    boy: { kind: 'shapes', style: 'lane', who: 'child', garment: 'none', hair: 'short', socks: true,
      body: { height: 0.68, thick: 0.84 },
      colors: { skin: '#f1d3bb', hair: '#5a3d28', top: '#7a8fb0', bottom: '#62656c', socks: '#c9c4b8', shoes: '#6b4a32' } },
    // Lettie Hempstock, "eleven — for a long time": short red-brown hair, a faded green frock to the knee, a mustard
    // cardigan over it, green wellingtons to the knee
    lettie: { kind: 'shapes', style: 'lane', who: 'child', garment: 'frock', hair: 'bob', socks: true,
      body: { height: 0.8, thick: 0.86 },
      colors: { skin: '#f0cfb4', hair: '#9a4a26', top: '#c49a45', garment: '#7d9268', socks: '#33503a', shoes: '#33503a' } },
    // old Mrs Hempstock, the grandmother: ancient and small, a white bun, a long dark plum dress, a grey shawl
    gran: { kind: 'shapes', style: 'lane', who: 'old', garment: 'dress', hair: 'bun', scarf: true,
      body: { height: 0.86, thick: 1.12 },
      colors: { skin: '#e8c9b3', hair: '#efebe3', top: '#4a3446', garment: '#4a3446', accent: '#8d8a84', shoes: '#2a2526' } },
    // Dad: a man in his thirties in shirt-sleeves after work — a white shirt, a dark wine tie, grey trousers, short
    // dark hair
    dad: { kind: 'shapes', style: 'lane', who: 'man', garment: 'none', hair: 'short', parts: ['tie'],
      body: { height: 1.0, thick: 0.98 },
      colors: { skin: '#eccab0', hair: '#3a2a20', top: '#e3e4df', bottom: '#4c4d55', shoes: '#2a2420' } },
    // Ursula Monkton, the help, as she looks among people: young and pretty, long honey hair, a grey dress below the
    // knee, a pink scarf at her throat (her pink coat hangs in the hall)
    ursula: { kind: 'shapes', style: 'lane', who: 'woman', garment: 'shift', hair: 'straight', scarf: true,
      body: { height: 0.97, thick: 0.8 },
      colors: { skin: '#f2d8c6', hair: '#c9a067', top: '#8e8c94', garment: '#8e8c94', accent: '#e39aac', shoes: '#5d4a50' } },
    // the boy's sister, five: fair hair in a ponytail, a red pinafore over a white blouse, white socks, red shoes
    sister: { kind: 'shapes', style: 'lane', who: 'child', garment: 'frock', hair: 'ponytail', socks: true,
      body: { height: 0.6, thick: 0.84 },
      colors: { skin: '#f3d8c2', hair: '#cfa866', top: '#f0eadf', garment: '#b5524a', socks: '#efeadf', shoes: '#8a2f2a' } },
    // Ginnie Hempstock, Lettie's mother: round and warm, brown hair in a bun, a long brick-brown dress to the ankle,
    // short-sleeved, black boots; her lantern (the part `lantern`) when she has it
    ginnie: { kind: 'shapes', style: 'lane', who: 'woman', garment: 'dress', hair: 'bun',
      body: { height: 0.93, thick: 1.28, hips: 1.2 },
      colors: { skin: '#eec7a8', hair: '#6b4630', top: '#93553c', garment: '#93553c', shoes: '#2a2422' } },
  },
  shapes: {
    // the world's style: the engine's soft figures, coloured and shaded by the scene's light, simple faces
    styles: { lane: { from: 'soft', name: 'The Lane', paint: 'lit', line: 1.6, face: 'simple' } },
    garments: {
      // a child's frock: from the waist to the knee, the cardigan's sleeves above it and the shins bare below
      frock: { name: 'frock', hang: [{ to: 1.05, from: 'waist', flare: 0.35, off: 0.94 }], short: true, bodice: true },
      // a woman's plain dress: fitted to the waist, a skirt falling straight to below the knee, long sleeves of its cloth,
      // stockinged legs under it
      shift: { name: 'shift dress', hang: [{ to: 1.2, from: 'waist', flare: 0.12, off: 0.94 }], sleeves: 'garment', bodice: true, bare: true },
    },
    parts: { tie: { name: 'tie', draw: tie }, book: { name: 'open book', draw: book }, lantern: { name: 'lantern', draw: lantern } },
  },
};
