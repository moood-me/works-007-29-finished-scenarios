// The people of «The Paper Menagerie» as people in a scene (an element with "person"): who they are — figures of
// shapes in this world's style — soft rounded shapes, toned colours, tinted lines, a simple face so faces read across
// a room — and what they move by (the motions in cast.data.json). cast.md says who is who.
const { add, sub, mul, mix, unit, cross } = MooodShapes.V;
// (the kerchief's egg over the head; the suit bag's zip and hanger, its tag; the phrasebook's pages: [r, g, b, toned])
const KERCHIEF = F => F.head.egg.map(e => e * F.head.r * F.head.out * 1.1);
const ZIP = [0.62, 0.63, 0.66, 1];
const TAG = [0.93, 0.9, 0.8, 1];
// (a string bag's net, its oranges)
const NET = [0.85, 0.8, 0.62, 1];
const ORANGE = [0.95, 0.55, 0.16, 1];
// (a telephone's handset)
const HANDSET = [0.13, 0.13, 0.14, 1];
const PAGES = [0.95, 0.92, 0.84, 1];
// (the plate and the buns on it; Laohu's paper — red, its darker folds, the gold stars; the knight's plastic: silver,
// dark grey, the dead sword's grey)
const CHINA = [0.96, 0.95, 0.92, 1];
const BUN = [0.97, 0.93, 0.85, 1];
const TIGER = [[0.91, 0.31, 0.25, 1], [0.69, 0.16, 0.13, 1]];
const STAR = [0.93, 0.78, 0.35, 1];
const SILVER = [0.74, 0.76, 0.8, 1];
const VISOR = [0.25, 0.26, 0.3, 1];
const BLADE = [0.55, 0.58, 0.62, 1];
// (the letter: the wrapping's red, the old yellow tape; the flag's pole; the frog's green paper, light and dark)
const LETTER = [[0.86, 0.27, 0.22, 1]];
const TAPE = [0.93, 0.83, 0.5, 1];
const POLE = [0.82, 0.82, 0.8, 1];
// (the moving box's cardboard; the shoe box and its lid)
const CARTON = [0.78, 0.62, 0.42, 1];
const SHOEBOX = [[0.86, 0.82, 0.74, 1], [0.62, 0.32, 0.28, 1]];
const FROG = [[0.48, 0.7, 0.42, 1], [0.38, 0.58, 0.34, 1]];
// (a backpack's flap: its colour a shade darker — made once a figure)
const FLAP = F => [F.colors.accent[0] * 0.78, F.colors.accent[1] * 0.78, F.colors.accent[2] * 0.78, F.colors.accent[3]];
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
      colors: { skin: '#e8c4a2', hair: '#2b2220', top: '#6f8c63', bottom: '#3d4558', shoes: '#5a4232', accent: '#3e4458' },
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
    // Dad at fifty-six: the sandy hair gone grey, a brown cardigan; his old phrasebook
    // in his hands (part `phrasebook`, its cover his `accent`)
    dad_grey: {
      kind: 'shapes',
      style: 'paper',
      who: 'man',
      garment: 'none',
      hair: 'short',
      face: 'simple',
      parts: ['phrasebook'],
      body: { height: 1.0, thick: 1.1, shoulders: 1.06 },
      colors: {
        skin: '#e6bea0',
        hair: '#b9ae9c',
        top: '#7b6650',
        bottom: '#5c4f43',
        shoes: '#3a2c24',
        accent: '#8a3b32',
      },
    },
    // Mark, ten, from across the street: a little taller than Jack, sandy-red hair, a red windbreaker, jeans, white
    // sneakers; the plastic knight his father sent him in his hands (part `knight`, its shield
    // his `accent`)
    mark: {
      kind: 'shapes',
      style: 'paper',
      who: 'child',
      garment: 'none',
      hair: 'short',
      face: 'simple',
      parts: ['knight'],
      body: { height: 0.81, head: 1.08, thick: 0.92 },
      colors: {
        skin: '#f0cdb0',
        hair: '#b5683a',
        top: '#b8403a',
        bottom: '#3f5a7a',
        shoes: '#ebe9e2',
        accent: '#2f5fa8',
      },
    },
    // — the square (chapter 3) —
    // the translator: a woman of fifty-five from a tour group, a northerner — short permed hair, black going grey, a
    // camel trench coat, a red scarf (her `accent`), dark trousers; the letter in her hands is given by `_with`
    translator: {
      kind: 'shapes',
      style: 'paper',
      who: 'woman',
      garment: 'coat',
      hair: 'bob',
      scarf: true,
      face: 'simple',
      body: { height: 0.89, thick: 0.96, shoulders: 0.9, hips: 1.06 },
      colors: {
        skin: '#e9c3a0',
        hair: '#4a4344',
        top: '#ddd6c8',
        bottom: '#3a3640',
        garment: '#bf9a6a',
        shoes: '#3a2e2a',
        accent: '#c0443a',
      },
    },
    // the group's guide: young, a ponytail, the tour company's teal jacket and cap; her little flag held up is part
    // `flag` (its pennant her `accent`), given by `_with`
    guide: {
      kind: 'shapes',
      style: 'paper',
      who: 'woman',
      garment: 'jacket',
      hair: 'ponytail',
      hat: 'cap',
      face: 'simple',
      body: { height: 0.9, thick: 0.82, shoulders: 0.86 },
      colors: {
        skin: '#ecc7a2',
        hair: '#1d1a1c',
        top: '#f1eee6',
        bottom: '#2f3442',
        garment: '#2f8f8a',
        shoes: '#e8e6df',
        hat: '#2f8f8a',
        accent: '#f0c23e',
      },
    },
    // three of the group: an older man in a khaki jacket and a cap; a woman in a pink jacket and a sun hat; a man of
    // forty in a navy windbreaker
    tourist_cap: {
      kind: 'shapes',
      style: 'paper',
      who: 'man',
      garment: 'jacket',
      hair: 'short',
      hat: 'cap',
      face: 'simple',
      body: { height: 0.95, thick: 1.0, shoulders: 1.0 },
      colors: { skin: '#e2b994', hair: '#a9a39a', top: '#e6e2d6', bottom: '#4d4a44', garment: '#a69a72', shoes: '#3a3330', hat: '#4f5a46' },
    },
    tourist_hat: {
      kind: 'shapes',
      style: 'paper',
      who: 'woman',
      garment: 'jacket',
      hair: 'bob',
      hat: 'hat',
      face: 'simple',
      body: { height: 0.88, thick: 0.92, shoulders: 0.88, hips: 1.04 },
      colors: { skin: '#edc8a6', hair: '#231e20', top: '#f2ece2', bottom: '#5a5560', garment: '#d98a9a', shoes: '#efece6', hat: '#efe2c4' },
    },
    tourist_coat: {
      kind: 'shapes',
      style: 'paper',
      who: 'man',
      garment: 'jacket',
      hair: 'short',
      face: 'simple',
      body: { height: 0.98, thick: 0.94, shoulders: 1.02 },
      colors: { skin: '#e6bf9c', hair: '#1c1a1d', top: '#d5dbe2', bottom: '#33363e', garment: '#34456b', shoes: '#26232a' },
    },
    // — the people the game names besides (stage 5) —
    // Jack at five (the prologue): the same black-brown hair, a round small head on a little body, a mustard sweater,
    // navy corduroys, red-brown shoes
    jack_five: {
      kind: 'shapes',
      style: 'paper',
      who: 'child',
      garment: 'none',
      hair: 'short',
      face: 'simple',
      body: { height: 0.62, head: 1.24, legs: 0.9, thick: 0.92 },
      colors: { skin: '#ecc8a6', hair: '#2b2220', top: '#d9a441', bottom: '#3f5277', shoes: '#8a3b2e' },
    },
    // the nurse on the ward's corridor (2.1): a woman of forty in pale teal scrubs, a white cardigan over them, her
    // dark hair in a bun, white shoes
    nurse: {
      kind: 'shapes',
      style: 'paper',
      who: 'woman',
      garment: 'jacket',
      hair: 'bun',
      face: 'simple',
      body: { height: 0.92, thick: 0.94, shoulders: 0.88, hips: 1.04 },
      colors: {
        skin: '#e4b996',
        hair: '#3a2a22',
        top: '#8fbfc0',
        bottom: '#8fbfc0',
        garment: '#f1efe8',
        shoes: '#f2f1ec',
      },
    },
    // Mark at twenty-two (3.4, across the street by his car): grown broad, the same sandy-red hair, a red jacket again
    // over a white T-shirt, jeans, white sneakers; his bag (part `duffel`) given by `_with`
    mark_grown: {
      kind: 'shapes',
      style: 'paper',
      who: 'man',
      garment: 'jacket',
      hair: 'short',
      face: 'simple',
      body: { height: 1.02, thick: 0.96, shoulders: 1.06 },
      colors: {
        skin: '#f0cdb0',
        hair: '#b5683a',
        top: '#ece9e2',
        bottom: '#3f5a7a',
        garment: '#a8433b',
        shoes: '#ebe9e2',
        accent: '#3d4a5c',
      },
    },
    // two boys at the bus stop (1.7), ten, Mark's friends: a tall one with a blond crop, a striped blue sweatshirt and
    // a navy backpack; a stocky one with dark curls, a mustard windbreaker and a red backpack (part `backpack`, its
    // colour their `accent`)
    boy_a: {
      kind: 'shapes',
      style: 'paper',
      who: 'child',
      garment: 'none',
      hair: 'short',
      face: 'simple',
      parts: ['backpack'],
      body: { height: 0.83, head: 1.06, thick: 0.86 },
      colors: { skin: '#f1d0b4', hair: '#d8b56a', top: '#5b7fb8', bottom: '#4a4f5c', shoes: '#3b3a40', accent: '#2f3c66' },
    },
    boy_b: {
      kind: 'shapes',
      style: 'paper',
      who: 'child',
      garment: 'jacket',
      hair: 'bob',
      face: 'simple',
      parts: ['backpack'],
      body: { height: 0.78, head: 1.1, thick: 1.0 },
      colors: {
        skin: '#d9a982',
        hair: '#3a2a24',
        top: '#e9e4d8',
        bottom: '#3c4a62',
        garment: '#cf9a3a',
        shoes: '#e8e6df',
        accent: '#b53f36',
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
      // a plate of steamed buns carried level in the left hand, a little out before her: a white plate, five buns on
      // it; the point `plate` over the buns (where their steam rises)
      plate: {
        name: 'a plate of buns',
        draw: F => {
          const hand = F.P('LeftHand'),
            h = F.fit.h,
            fwd = unit([F.fwd('Hips')[0], 0, F.fwd('Hips')[2]]),
            across = cross([0, 1, 0], fwd),
            up = [0, 1, 0];
          const c = add(hand, add(mul(fwd, 0.06 * h), mul(up, 0.02 * h)));
          F.ball(c, [across, up, fwd], [0.12 * h, 0.012 * h, 0.12 * h], CHINA, 10);
          for (let i = 0; i < 5; i++) {
            const a = (i / 5) * Math.PI * 2;
            const b = add(c, add(mul(across, Math.cos(a) * 0.055 * h), add(mul(fwd, Math.sin(a) * 0.055 * h), mul(up, 0.03 * h))));
            F.ball(b, [across, up, fwd], [0.035 * h, 0.028 * h, 0.035 * h], BUN, 8);
          }
          F.point('plate', add(c, mul(up, 0.08 * h)));
        },
      },
      // the torn pieces of Laohu gathered in both hands before him: a few crumpled scraps of red wrapping paper, their
      // folds darker, a gold star on them; the point `scraps`
      scraps: {
        name: 'torn paper',
        draw: F => {
          const l = F.P('LeftHand'),
            r = F.P('RightHand'),
            c = mix(l, r, 0.5),
            h = F.fit.h,
            across = unit(sub(r, l)),
            fwd = unit(cross(across, [0, 1, 0])),
            up = cross(fwd, across);
          const bits = [
            [0, 0.02, 0, 0.05, 0.035, 0],
            [-0.03, 0.035, 0.01, 0.035, 0.03, 1],
            [0.035, 0.03, -0.005, 0.04, 0.025, 1],
            [0.005, 0.055, 0.015, 0.03, 0.03, 0],
          ];
          for (const [x, y, z, a, b, k] of bits) {
            const at = add(c, add(mul(across, x * h), add(mul(up, y * h), mul(fwd, z * h))));
            F.ball(at, [across, up, fwd], [a * h, b * h, 0.006 * h], TIGER[k], 4, 6);
          }
          F.ball(add(c, add(mul(up, 0.03 * h), mul(fwd, 0.009 * h))), [across, up, fwd], [0.008 * h, 0.008 * h, 0.002 * h], STAR, 5);
          F.point('scraps', add(c, mul(up, 0.03 * h)));
        },
      },
      // the plastic knight held to the chest in both hands: a little silver figure in a helmet, its dark visor, a blue
      // shield (the look's accent), its light-up sword gone grey; the point `knight`
      knight: {
        name: 'a toy knight',
        draw: F => {
          const l = F.P('LeftHand'),
            r = F.P('RightHand'),
            c = mix(l, r, 0.5),
            h = F.fit.h * 1.5,
            across = unit(sub(r, l)),
            fwd = unit(cross(across, [0, 1, 0])),
            up = [0, 1, 0];
          const body = add(c, add(mul(up, 0.04 * h), mul(fwd, 0.03 * h)));
          F.ball(body, [across, up, fwd], [0.035 * h, 0.06 * h, 0.03 * h], SILVER, 8);
          const head = add(body, mul(up, 0.085 * h));
          F.ball(head, [across, up, fwd], [0.028 * h, 0.03 * h, 0.028 * h], SILVER, 8);
          F.ball(add(head, mul(fwd, 0.022 * h)), [across, up, fwd], [0.018 * h, 0.008 * h, 0.006 * h], VISOR, 6);
          F.ball(add(body, add(mul(fwd, 0.035 * h), mul(across, -0.02 * h))), [across, up, fwd], [0.03 * h, 0.04 * h, 0.006 * h], F.colors.accent, 6, 6);
          const hilt = add(body, add(mul(across, 0.045 * h), mul(fwd, 0.02 * h)));
          F.bar(hilt, add(hilt, mul(up, 0.15 * h)), 0.007 * h, 0.004 * h, [[0, BLADE]], 6, fwd, 0.4);
          F.bar(add(hilt, mul(across, -0.02 * h)), add(hilt, mul(across, 0.02 * h)), 0.005 * h, 0.005 * h, [[0, VISOR]], 4, fwd, 1);
          F.point('knight', head);
        },
      },
      // — the square and the last dusk (chapter 3) —
      // the letter: Laohu unfolded — a square of red wrapping paper with gold stars, held open in both hands before
      // the chest, its outside (red, the stars, the old yellow tape across it) away from the reader — her writing on
      // its back is a close-up's (an insert), not drawn on the part; the point `letter`
      letter: {
        name: 'the letter',
        draw: F => {
          const l = F.P('LeftHand'),
            r = F.P('RightHand'),
            h = F.fit.h,
            across = unit(sub(r, l)),
            fwdH = F.fwd('Hips');
          let face = unit(cross(across, [0, 1, 0]));
          if (face[0] * fwdH[0] + face[1] * fwdH[1] + face[2] * fwdH[2] < 0) face = mul(face, -1);
          // the sheet tipped a little, its top away from whoever holds it (the back of it to their eyes): drawn as a
          // flat tube from one held edge to the other, square in section, its ends cut — a thin sheet, not a slab
          const up = unit(add(mul(unit(cross(face, across)), 0.8), mul(face, 0.6))),
            out = unit(cross(across, up)),
            c = add(mix(l, r, 0.5), mul(up, 0.06 * h)),
            ax = [across, up, out],
            edge = s => add(c, mul(across, s * 0.17 * h));
          F.tube([edge(-1), edge(1)], [[0, 0.16 * h], [1, 0.16 * h]], [[0, LETTER[0]]], 8, up, 0.012, 8, true);
          F.tube([add(edge(-1), add(mul(up, 0.03 * h), mul(out, 0.0025 * h))), add(edge(1), add(mul(up, 0.03 * h), mul(out, 0.0025 * h)))], [[0, 0.016 * h], [1, 0.016 * h]], [[0, TAPE]], 8, up, 0.1, 8, true);
          for (const [x, y] of [[-0.1, 0.09], [0.07, -0.08], [0.11, 0.1]])
            F.ball(add(c, add(mul(across, x * h), add(mul(up, y * h), mul(out, 0.0025 * h)))), ax, [0.009 * h, 0.009 * h, 0.0008 * h], STAR, 6);
          F.point('letter', c);
        },
      },
      // the guide's little flag: a short pole held up in the right hand, a pennant at its top (the look's accent);
      // the point `flag`
      flag: {
        name: 'a tour flag',
        draw: F => {
          const hand = F.P('RightHand'),
            h = F.fit.h,
            up = [0, 1, 0],
            fwd = unit([F.fwd('Hips')[0], 0, F.fwd('Hips')[2]]),
            across = cross(up, fwd);
          const top = add(hand, mul(up, 0.62 * h));
          F.bar(add(hand, mul(up, -0.06 * h)), top, 0.007 * h, 0.006 * h, [[0, POLE]], 6, fwd, 1);
          F.ball(add(top, add(mul(up, -0.07 * h), mul(across, 0.11 * h))), [across, up, fwd], [0.11 * h, 0.065 * h, 0.004 * h], F.colors.accent, 3, 6);
          F.point('flag', top);
        },
      },
      // a school backpack on the back: a rounded block between the shoulder blades, its flap a shade darker, two straps
      // over the shoulders (the look's accent)
      backpack: {
        name: 'a backpack',
        draw: F => {
          const chest = F.P('Chest'),
            h = F.fit.h,
            fwd = F.fwd('Chest'),
            side = F.side('Chest'),
            up = F.up('Chest'),
            ax = [side, up, fwd];
          const at = add(chest, add(mul(fwd, -(0.12 * F.k + 0.05 * h)), mul(up, -0.03 * h)));
          F.ball(at, ax, [0.12 * h, 0.15 * h, 0.055 * h], F.colors.accent, 8, 3);
          F.ball(add(at, add(mul(up, 0.08 * h), mul(fwd, -0.03 * h))), ax, [0.11 * h, 0.06 * h, 0.03 * h], F.keep(FLAP), 8, 3);
          for (const s of [-1, 1]) {
            const top = add(at, add(mul(side, s * 0.065 * h), mul(up, 0.13 * h)));
            F.bar(top, add(top, add(mul(fwd, 0.13 * F.k + 0.07 * h), mul(up, -0.02 * h))), 0.012 * h, 0.012 * h, [[0, F.colors.accent]], 4, side, 0.3);
          }
          F.point('backpack', at);
        },
      },
      // a sports bag carried by its handles in the right hand, hanging at the side: a soft dark cylinder lying along the
      // way he faces, a pale stripe round each end (the look's accent); the point `bag`
      duffel: {
        name: 'a sports bag',
        draw: F => {
          const hand = F.P('RightHand'),
            h = F.fit.h,
            fwd = unit([F.fwd('Hips')[0], 0, F.fwd('Hips')[2]]),
            across = cross([0, 1, 0], fwd),
            up = [0, 1, 0],
            ax = [fwd, up, across];
          const at = add(hand, mul(up, -0.13 * h));
          F.bar(hand, add(at, mul(up, 0.08 * h)), 0.008 * h, 0.008 * h, [[0, F.colors.accent]], 4, fwd, 0.4);
          F.ball(at, ax, [0.26 * h, 0.11 * h, 0.11 * h], F.colors.accent, 10);
          for (const s of [-1, 1]) F.ball(add(at, mul(fwd, s * 0.2 * h)), ax, [0.015 * h, 0.104 * h, 0.104 * h], TAG, 10);
          F.point('bag', at);
        },
      },
      // a string bag of oranges carried in the left hand, hanging at the side: six oranges in a loose net, its two
      // handles in the fist; the point `oranges`
      oranges: {
        name: 'a bag of oranges',
        draw: F => {
          const hand = F.P('LeftHand'),
            h = F.fit.h,
            fwd = unit([F.fwd('Hips')[0], 0, F.fwd('Hips')[2]]),
            across = cross([0, 1, 0], fwd),
            up = [0, 1, 0],
            ax = [across, up, fwd];
          const at = add(hand, mul(up, -0.13 * h));
          F.bar(hand, add(at, mul(up, 0.05 * h)), 0.005 * h, 0.005 * h, [[0, NET]], 4, fwd, 0.4);
          for (const [x, y, z] of [[-0.035, 0, 0.02], [0.035, 0, -0.01], [0, 0, -0.04], [-0.02, -0.06, 0], [0.025, -0.06, 0.02], [0, 0.055, 0]])
            F.ball(add(at, add(mul(across, x * h), add(mul(up, y * h), mul(fwd, z * h)))), ax, [0.038 * h, 0.036 * h, 0.038 * h], ORANGE, 8);
          F.point('oranges', at);
        },
      },
      // a telephone's black receiver held to the ear in the right hand: a bar from the ear down past the mouth, a
      // round cup at each end; the point `receiver`
      receiver: {
        name: 'a telephone receiver',
        draw: F => {
          const hand = F.P('RightHand'),
            h = F.fit.h,
            up = F.up('RightHand'),
            side = F.side('RightHand'),
            fwd = F.fwd('RightHand');
          const a = add(hand, mul(up, 0.09 * h)),
            b = add(hand, mul(up, -0.08 * h));
          F.bar(a, b, 0.018 * h, 0.018 * h, [[0, HANDSET]], 6, side, 0.7);
          for (const c of [a, b]) F.ball(c, [side, up, fwd], [0.03 * h, 0.022 * h, 0.03 * h], HANDSET, 8);
          F.point('receiver', hand);
        },
      },
      // a paper frog sitting on the open right hand: green wrapping paper, folded squat; the point `frog`
      frog: {
        name: 'a paper frog',
        draw: F => {
          const hand = F.P('RightHand'),
            h = F.fit.h,
            up = [0, 1, 0],
            fwd = unit([F.fwd('Hips')[0], 0, F.fwd('Hips')[2]]),
            across = cross(up, fwd);
          const at = add(hand, mul(up, 0.035 * h));
          F.ball(at, [across, up, fwd], [0.04 * h, 0.025 * h, 0.045 * h], FROG[0], 4, 6);
          F.ball(add(at, add(mul(up, 0.022 * h), mul(fwd, 0.02 * h))), [across, up, fwd], [0.025 * h, 0.016 * h, 0.022 * h], FROG[1], 4, 6);
          F.point('frog', at);
        },
      },
      // a cardboard moving box carried in both arms before the chest, taped shut; the point `box`
      box: {
        name: 'a moving box',
        draw: F => {
          const l = F.P('LeftHand'),
            r = F.P('RightHand'),
            h = F.fit.h,
            across = unit(sub(r, l)),
            fwd = unit(cross(across, [0, 1, 0])),
            up = cross(fwd, across);
          const c = add(mix(l, r, 0.5), add(mul(up, 0.06 * h), mul(fwd, 0.1 * h)));
          F.ball(c, [across, up, fwd], [0.2 * h, 0.14 * h, 0.16 * h], CARTON, 4, 8);
          F.ball(add(c, mul(up, 0.141 * h)), [across, up, fwd], [0.03 * h, 0.002 * h, 0.16 * h], TAPE, 4, 6);
          F.point('box', c);
        },
      },
      // the shoe box of animals held in both hands before the chest, its lid on; the point `shoebox`
      shoebox: {
        name: 'a shoe box',
        draw: F => {
          const l = F.P('LeftHand'),
            r = F.P('RightHand'),
            h = F.fit.h,
            across = unit(sub(r, l)),
            fwd = unit(cross(across, [0, 1, 0])),
            up = cross(fwd, across);
          const c = add(mix(l, r, 0.5), add(mul(up, 0.04 * h), mul(fwd, 0.06 * h)));
          F.ball(c, [across, up, fwd], [0.17 * h, 0.06 * h, 0.1 * h], SHOEBOX[0], 4, 8);
          F.ball(add(c, mul(up, 0.062 * h)), [across, up, fwd], [0.175 * h, 0.012 * h, 0.105 * h], SHOEBOX[1], 4, 8);
          F.point('shoebox', c);
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
