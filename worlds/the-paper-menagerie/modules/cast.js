// The people of «The Paper Menagerie» as people in a scene (an element with "person"): who they are — figures of
// shapes in this world's style — soft rounded shapes, toned colours, tinted lines, a simple face so faces read across
// a room — and what they move by (the motions in cast.data.json). cast.md says who is who.
const { add, sub, mul, mix, unit, cross } = MooodShapes.V;
// (the kerchief's egg over the head; the suit bag's zip and hanger, its tag; the phrasebook's pages: [r, g, b, toned])
const KERCHIEF = F => F.head.egg.map(e => e * F.head.r * F.head.out * 1.1);
const ZIP = [0.62, 0.63, 0.66, 1];
const TAG = [0.93, 0.9, 0.8, 1];
const PAGES = [0.95, 0.92, 0.84, 1];
return {
  ...data,
  characters: {
    // Jack at ten: slight, black-brown hair, a green sweater, jeans
    jack: {
      kind: 'shapes',
      style: 'paper',
      who: 'child',
      garment: 'none',
      hair: 'short',
      face: 'simple',
      body: { height: 0.79, head: 1.1, thick: 0.84 },
      colors: { skin: '#e8c4a2', hair: '#2b2220', top: '#6f8c63', bottom: '#4b5670', shoes: '#6a4a37' },
    },
    // Mom, thirty-four: small, black hair in a low bun, a blue-grey blouse, dark trousers, a cream apron; the sheet
    // she folds in her hands (part `sheet`)
    mom: {
      kind: 'shapes',
      style: 'paper',
      who: 'woman',
      garment: 'apron',
      hair: 'bun',
      parts: ['sheet'],
      face: 'simple',
      body: { height: 0.9, thick: 0.8, shoulders: 0.84, hips: 1.0 },
      colors: {
        skin: '#ecc9a4',
        hair: '#16131a',
        top: '#7a8fa6',
        bottom: '#3b3a45',
        garment: '#eadcc2',
        shoes: '#2c2628',
        accent: '#e9c24c',
      },
    },
    // Dad, forty-five: broad, sandy thinning hair, a pale blue work shirt, brown trousers
    dad: {
      kind: 'shapes',
      style: 'paper',
      who: 'man',
      garment: 'none',
      hair: 'short',
      face: 'simple',
      body: { height: 1.0, thick: 1.08, shoulders: 1.06 },
      colors: { skin: '#eac3a3', hair: '#9b7a55', top: '#a9bacb', bottom: '#5c4f43', shoes: '#3a2c24' },
    },
    // Jack at twenty-one: grown tall and slight, the same black-brown hair, a green sweater again (a man's now), dark
    // jeans; the bag with his first suit in it (part `suit_bag`, its colour his `accent`)
    jack_grown: {
      kind: 'shapes',
      style: 'paper',
      who: 'man',
      garment: 'none',
      hair: 'short',
      face: 'simple',
      parts: ['suit_bag'],
      body: { height: 1.0, thick: 0.84, shoulders: 0.94 },
      colors: { skin: '#e8c4a2', hair: '#2b2220', top: '#6f8c63', bottom: '#3d4558', shoes: '#5a4232', accent: '#33384a' },
    },
    // Mom in hospital, forty-five: thin, an ochre kerchief over her head, a pale hospital gown and trousers, her
    // own blue-grey cardigan over them, slippers
    mom_ill: {
      kind: 'shapes',
      style: 'paper',
      who: 'woman',
      garment: 'jacket',
      hair: 'none',
      hat: 'kerchief',
      face: 'simple',
      body: { height: 0.9, thick: 0.68, shoulders: 0.8, hips: 0.9 },
      colors: {
        skin: '#e6c6aa',
        top: '#dfe4e6',
        bottom: '#cdd5da',
        garment: '#7a8fa6',
        shoes: '#b8aa98',
        hat: '#d8a35a',
      },
    },
    // Dad at fifty-six: the sandy hair gone grey, the pale blue work shirt under a brown cardigan; his old phrasebook
    // in his hands (part `phrasebook`, its cover his `accent`)
    dad_grey: {
      kind: 'shapes',
      style: 'paper',
      who: 'man',
      garment: 'jacket',
      hair: 'short',
      face: 'simple',
      parts: ['phrasebook'],
      body: { height: 1.0, thick: 1.1, shoulders: 1.06 },
      colors: {
        skin: '#e6bea0',
        hair: '#b9ae9c',
        top: '#a9bacb',
        bottom: '#5c4f43',
        garment: '#7b6650',
        shoes: '#3a2c24',
        accent: '#8a3b32',
      },
    },
  },
  shapes: {
    // the world's style: made from soft (round, toned, tinted lines) with a smaller head, so the grown-ups read as
    // grown-ups beside the boy, and a simple face (eyes, brows, nose, mouth — <id>_mood shows on it)
    styles: {
      paper: {
        from: 'soft',
        name: 'The Paper Menagerie',
        head: 1.2,
        neck: 0.5,
        legs: 0.9,
        sides: 14,
        line: 1.8,
        face: 'simple',
      },
    },
    hats: {
      // a kerchief: a cloth cap over the whole head from the brow to below the nape, tied in a small knot behind, its
      // two ends hanging (its colour the look's `hat`)
      kerchief: {
        name: 'a kerchief',
        draw: F => {
          const { at: head, axes, egg, r: rh, out, sides, square } = F.head;
          const [hs, hu, hf] = axes;
          F.cap(head, axes, F.keep(KERCHIEF), [0, 0.35, -0.94], -0.55, F.colors.hat, sides, square);
          const knot = add(head, add(mul(hu, -rh * 0.55), mul(hf, -rh * 1.05)));
          F.ball(knot, axes, [rh * 0.28, rh * 0.2, rh * 0.2], F.colors.hat, sides);
          for (const s of [-1, 1]) {
            const end = add(knot, add(mul(hs, s * rh * 0.14), mul(hu, -rh * 0.36)));
            F.bar(knot, end, rh * 0.1, rh * 0.06, [[0, F.colors.hat]], 6, hf, 0.3);
          }
        },
      },
    },
    parts: {
      // the bag with the suit in it, held up by its hanger's hook in the right hand to be seen: a long dark zipped bag
      // hanging straight down, its face to whoever he faces, the zip down its middle, the shop's tag at its shoulder;
      // its middle the point `bag` (the look's accent colour)
      suit_bag: {
        name: 'a suit bag',
        draw: F => {
          const hand = F.P('RightHand'),
            down = [0, -1, 0],
            fwd = unit([F.fwd('Hips')[0], 0, F.fwd('Hips')[2]]),
            across = cross([0, 1, 0], fwd),
            h = F.fit.h;
          const hook = add(hand, mul(down, 0.07 * h));
          F.bar(hand, hook, 0.006 * h, 0.006 * h, [[0, ZIP]], 6, fwd, 1);
          const top = add(hook, mul(down, 0.06 * h));
          F.ball(top, [across, [0, 1, 0], fwd], [0.17 * h, 0.06 * h, 0.03 * h], F.colors.accent, 4, 6);
          const mid = add(hook, mul(down, 0.52 * h));
          F.ball(mid, [across, [0, 1, 0], fwd], [0.21 * h, 0.42 * h, 0.035 * h], F.colors.accent, 4, 8);
          F.bar(add(top, mul(fwd, 0.036 * h)), add(mid, add(mul(down, 0.4 * h), mul(fwd, 0.036 * h))), 0.004 * h, 0.004 * h, [[0, ZIP]], 4, fwd, 0.3);
          F.ball(add(top, add(mul(across, 0.1 * h), add(mul(down, 0.1 * h), mul(fwd, 0.04 * h)))), [across, [0, 1, 0], fwd], [0.025 * h, 0.035 * h, 0.003 * h], TAG, 4, 6);
          F.point('bag', mid);
        },
      },
      // his old phrasebook held open in both hands before him: two cream pages in a red-brown cover (the look's
      // accent), the point `book`
      phrasebook: {
        name: 'a phrasebook',
        draw: F => {
          const l = F.P('LeftHand'),
            r = F.P('RightHand'),
            c = mix(l, r, 0.5),
            h = F.fit.h;
          const across = unit(sub(r, l)),
            face = unit(cross(across, [0, 1, 0])),
            up = cross(face, across);
          const at = add(c, mul(up, 0.04 * h));
          F.ball(at, [across, up, face], [0.075 * h, 0.055 * h, 0.006 * h], F.colors.accent, 4, 8);
          F.ball(add(at, mul(up, 0.005 * h)), [across, up, face], [0.068 * h, 0.05 * h, 0.009 * h], PAGES, 4, 8);
          F.point('book', at);
        },
      },
      // a square of paper held up between the hands, its face to whoever she faces, being folded: its colour the
      // look's accent
      sheet: {
        name: 'a sheet of paper',
        draw: F => {
          const l = F.P('LeftHand'),
            r = F.P('RightHand'),
            c = mix(l, r, 0.5);
          const across = unit(sub(r, l)),
            fwd = unit(cross(across, F.up('Chest'))),
            flat = cross(fwd, across);
          const half = 0.08 * F.fit.h;
          F.ball(add(c, mul(fwd, 0.02 * F.fit.h)), [across, flat, fwd], [half, half, 0.004], F.colors.accent, 4, 8);
        },
      },
    },
  },
};
