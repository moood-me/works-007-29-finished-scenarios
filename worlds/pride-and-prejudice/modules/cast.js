// The people of «Pride and Prejudice» as people in a scene (an element with "person"): who they are — figures of
// shapes in this world's style, slender Regency figures in soft washes of colour drawn round with a fine sepia pen, as
// Hugh Thomson drew them — and how they move: the engine's stand and walk, and the motions in cast.data.json (Kimodo's).
// cast.md says who is who and what each motion is. A part's lengths are a man's metres times F.fit.h (the person's
// height as a share of a man's 1.76 m), its thicknesses times F.k.
const V = () => MooodShapes.V;
const LINEN = [0.96, 0.95, 0.91, 1];
const SCARLET = [0.74, 0.12, 0.13, 1];
// the whites of the eyes (a little warm, never paper-white)
const WHITES = [0.95, 0.93, 0.89, 1];
// (the sash's two rings round the gown, kept from frame to frame)
const SASH = F => ({ rows: [new Array(F.worn[1].length), new Array(F.worn[1].length)] });
// (a cap of hair's sizes: the head's egg a little out)
const CROWN = F => ({ radii: F.head.egg.map(e => e * F.head.r * F.head.out) });
// (the ribbon's band round the head and its two ends: their points, profiles, colour)
const BAND = 14;
const RIBBON = F => ({ band: new Array(BAND + 1), ends: [[null, null, null], [null, null, null]],
  profile: [[0, 0.16 * F.head.r], [BAND, 0.16 * F.head.r]], end: [[0, 0.15 * F.head.r], [2, 0.12 * F.head.r]], colors: [[0, SCARLET]] });
// (the waistcoat's panel: three rows of five points across the chest, kept from frame to frame)
const VEST_ACROSS = [-1, -0.5, 0, 0.5, 1];
const VEST = F => ({ rows: [new Array(5), new Array(5), new Array(5)], low: new Array(F.worn[1].length) });
// (the cravat's stock: four rings round the neck and the first again, and the fall's sizes)
const STOCK_N = 16;
const STOCK = F => ({ rings: [new Array(STOCK_N), new Array(STOCK_N), new Array(STOCK_N), new Array(STOCK_N), null],
  fall: [0.045 * F.k, 0.05 * F.fit.h, 0.022 * F.k] });
// a colour of the look a shade darker or redder, its way of being painted (its fourth) kept
const shade = (c, kr, kg, kb) => [c[0] * kr, c[1] * kg, c[2] * kb, c[3]];
// the face's expressions (the engine's names — a person's <id>_mood): its brows' inner and outer ends up (+) or down,
// its eyes opened (1 at rest) or narrowed, its mouth's half-width, its corners up (+) or down, how open it is. A laugh
// narrows the eyes only a little: they must still read
const EXPR = {
  neutral: { inner: 0, outer: 0, eye: 1, wide: 0.14, corners: 0, open: 0 },
  // (a smile that knows something: the corners well up, the eyes a little narrowed, the brows' outer ends lifted)
  smile: { inner: 0.0, outer: 0.035, eye: 0.86, wide: 0.17, corners: 0.08, open: 0 },
  laugh: { inner: 0.03, outer: 0.03, eye: 0.74, wide: 0.19, corners: 0.09, open: 0.07 },
  sad: { inner: 0.07, outer: -0.05, eye: 0.88, wide: 0.12, corners: -0.04, open: 0 },
  angry: { inner: -0.08, outer: 0.03, eye: 0.85, wide: 0.11, corners: -0.025, open: 0 },
  surprised: { inner: 0.08, outer: 0.08, eye: 1.25, wide: 0.08, corners: 0, open: 0.07 },
  afraid: { inner: 0.09, outer: 0.01, eye: 1.2, wide: 0.12, corners: -0.025, open: 0.04 },
  disgusted: { inner: -0.05, outer: -0.01, eye: 0.8, wide: 0.12, corners: -0.035, open: 0 },
  // (grave and intent: the brows drawn down and together, the mouth closed and level)
  thinking: { inner: -0.07, outer: 0.02, eye: 0.94, wide: 0.12, corners: -0.012, open: 0 },
  tired: { inner: 0.02, outer: -0.05, eye: 0.62, wide: 0.12, corners: -0.015, open: 0 },
};
const INK = [0.2, 0.13, 0.09];
// a parasol's silk (a pale sage) and its cane
const PARASOL = [0.69, 0.75, 0.6, 1];
const CANE = [0.48, 0.36, 0.23, 1];
// the tan turned-down tops of a gentleman's top boots
const BOOT_TOP = [0.72, 0.53, 0.32, 1];
// (the coat's standing collar: two open rows round the back of the neck, from one front to the other)
const COLLAR_N = 13;
const COLLAR = () => ({ rows: [new Array(COLLAR_N), new Array(COLLAR_N), new Array(COLLAR_N)] });
// (the parasol's sizes, kept)
const SHADE = F => ({ silk: [[0, 0.01 * F.k], [1, 0.05 * F.k], [2, 0.014 * F.k]], cols: [[0, PARASOL]], pts: [null, null, null] });

// a face as the drawings give it: almond eyes — their warm whites, a dark iris, a pen-dark upper lid and a fine lower
// one —, brows of the hair's colour a shade darker, a straight nose, lips a shade rosier than the skin parted by a fine
// pen line; big enough on the head to read at the size people stand in a scene, the style's pen round each (where its
// colours meet). At rest, or as the person's <id>_mood has it (EXPR), and as the person's own cast of face is (T: a
// heavier lid — lid under 1 —, brows set lower or one raised — browL, browR —, brows heavier — brow —, a mouth's
// corners each its own way — cornerL, cornerR). The same solids for every expression (the engine goes from one to
// another on the GPU)
const faceOf = (T = {}) => F => {
  const { axes, r: rh, on } = F.head, [, hu] = axes, x = EXPR[F.look.expression] ?? EXPR.neutral, sk = F.colors.skin;
  const brow = shade(F.colors.hair, 0.55, 0.55, 0.55), lips = shade(sk, 0.8, 0.5, 0.48), bw = T.brow ?? 1;
  const open = x.eye * (T.lid ?? 1), lid = 0.05 * (open - 1);
  for (const sx of [-1, 1]) {
    const up = sx < 0 ? (T.browL ?? 0) : (T.browR ?? 0);
    F.ball(on([sx * 0.36, 0.07, 0.9], 0.975), axes, [rh * 0.21, rh * 0.115 * open, rh * 0.045], WHITES, 12);
    F.ball(on([sx * 0.35, 0.07, 0.935], 0.995), axes, [rh * 0.09, rh * 0.108 * open, rh * 0.045], INK, 12);
    F.tube([on([sx * 0.12, 0.155 + lid, 0.96], 1.0), on([sx * 0.36, 0.22 + lid * 1.3, 0.93], 1.012), on([sx * 0.61, 0.13 + lid, 0.81], 1.0)],
      [[0, rh * 0.028], [1, rh * 0.05], [2, rh * 0.026]], [[0, INK]], 6, hu);
    F.tube([on([sx * 0.18, -0.02, 0.95], 0.985), on([sx * 0.36, -0.05, 0.93], 0.99), on([sx * 0.55, -0.015, 0.84], 0.985)],
      [[0, rh * 0.008], [1, rh * 0.014], [2, rh * 0.008]], [[0, INK]], 6, hu);
    F.tube([on([sx * 0.12, 0.39 + x.inner + up * 0.6, 0.93], 0.995), on([sx * 0.35, 0.44 + (x.inner + x.outer) / 2 + up, 0.89], 1.0),
      on([sx * 0.59, 0.36 + x.outer + up * 0.8, 0.79], 0.995)], [[0, rh * 0.062 * bw], [1, rh * 0.06 * bw], [2, rh * 0.032 * bw]], [[0, brow]], 6, hu);
  }
  // (the nose the skin's own colour: the light gives its form, no pen round it)
  F.ball(on([0, -0.1, 1], 0.97), axes, [rh * 0.07, rh * 0.15, rh * 0.11], sk, 10);
  const w = x.wide * 1.35, y = -0.42, cl = x.corners * 1.3 + (T.cornerL ?? 0), cr = x.corners * 1.3 + (T.cornerR ?? 0);
  F.ball(on([0, y - x.open / 2, 0.95], 0.975), axes, [rh * w * 0.75, rh * x.open, rh * 0.03], INK, 10);
  F.ball(on([0, y - 0.07, 0.95], 0.975), axes, [rh * w * 0.62, rh * 0.065, rh * 0.035], lips, 10);
  F.tube([on([-w, y + cl, 0.92], 0.995), on([0, y + 0.02, 0.95], 1.0), on([w, y + cr, 0.92], 0.995)],
    [[0, rh * 0.028], [1, rh * 0.052], [2, rh * 0.028]], [[0, lips]], 6, hu);
  F.tube([on([-w * 1.06, y + cl * 1.08, 0.92], 1.0), on([0, y - 0.015, 0.95], 1.008), on([w * 1.06, y + cr * 1.08, 0.92], 1.0)],
    [[0, rh * 0.014], [1, rh * 0.022], [2, rh * 0.014]], [[0, INK]], 6, hu);
};

// the trunk's depth behind (along bk, from the hips) at a height y: its sections', between them
const trunkBack = (F, secs, bk, y) => {
  const { sub, dot, mix } = V(), hips = F.P('Hips');
  for (let i = 0; i + 1 < secs.length; i++) {
    const a = secs[i][0], b = secs[i + 1][0];
    if (y < a[1] || y > b[1]) continue;
    const u = (y - a[1]) / (b[1] - a[1] || 1);
    return dot(sub(mix(a, b, u), hips), bk) + secs[i][4] + (secs[i + 1][4] - secs[i][4]) * u;
  }
  return 0;
};

return {
  ...data,
  characters: {
    // Elizabeth Bennet, twenty: not tall, light and quick; dark hair, curls at the temples; a white high-waisted
    // muslin gown, short puffed sleeves over long ones, a sage sash under the bust. Indoors (at Longbourn, at a ball):
    // bareheaded, her hair up in a knot; out walking (`elizabeth_walking`): a straw bonnet with a sage ribbon tied under
    // the chin, a closed parasol of pale sage silk in her left hand
    elizabeth_walking: { kind: 'shapes', style: 'austen', who: 'woman', garment: 'gown', hair: 'short', hat: 'bonnet', face: 'austen_wry',
      parts: ['curls', 'sash', 'puffs', 'parasol'],
      body: { height: 0.92, thick: 0.92, shoulders: 0.9, hips: 1.0, neck: 1.0, head: 1.0 },
      colors: { skin: '#eccaa9', hair: '#4a2c1c', top: '#f1e8d6', garment: '#f1e8d6', bottom: '#e9dfca', accent: '#6f8c5e', shoes: '#6e5a46', hat: '#dcc690' } },
    // Elizabeth indoors: bareheaded, her hair up in a knot, no parasol
    elizabeth: { kind: 'shapes', style: 'austen', who: 'woman', garment: 'gown', hair: 'bun', face: 'austen_wry', parts: ['curls', 'sash', 'puffs'],
      body: { height: 0.92, thick: 0.92, shoulders: 0.9, hips: 1.0, neck: 1.0, head: 1.0 },
      colors: { skin: '#eccaa9', hair: '#4a2c1c', top: '#f1e8d6', garment: '#f1e8d6', bottom: '#e9dfca', accent: '#6f8c5e', shoes: '#6e5a46' } },
    // Jane Bennet, twenty-two: the beauty of the family, a little taller than Elizabeth, fair hair up, a primrose
    // gown with a dusty-rose sash
    jane: { kind: 'shapes', style: 'austen', who: 'woman', garment: 'gown', hair: 'bun', parts: ['curls', 'sash', 'puffs'],
      body: { height: 0.94, thick: 0.9, shoulders: 0.88, hips: 1.0, neck: 1.06, head: 1.0 },
      colors: { skin: '#f0d2b6', hair: '#b48a52', top: '#f3ebcf', garment: '#f3ebcf', bottom: '#ebe2c8', accent: '#c4948f', shoes: '#e9dcc0' } },
    // Lydia Bennet, fifteen: the youngest, round-faced, dark-blonde; a bright coral-pink gown — the liveliest colour of
    // the sisters, warm, never grey (the grey gown is Charlotte's) — and her scarlet ribbon round her hair (the world's
    // rare scarlet: hers alone)
    lydia: { kind: 'shapes', style: 'austen', who: 'woman', garment: 'gown', hair: 'bun', parts: ['curls', 'ribbon', 'puffs'],
      body: { height: 0.88, thick: 0.95, shoulders: 0.88, hips: 1.0, head: 1.04 },
      colors: { skin: '#f1cfb0', hair: '#8a6238', top: '#f4b9aa', garment: '#f4b9aa', bottom: '#f0c9bd', accent: '#c0282d', shoes: '#efd9c6' } },
    // Fitzwilliam Darcy, twenty-eight: tall, straight, dark-haired, his hair brushed forward; a dark blue tailcoat of
    // the 1810s — its fronts ending at the waist and curving back into tails that hang to the backs of the knees, a
    // high standing collar behind the neck —, a pale waistcoat, a white cravat high at the throat, doeskin breeches,
    // black top boots with tan turned-down tops
    darcy: { kind: 'shapes', style: 'austen_man', who: 'man', garment: 'tailcoat', hair: 'brutus', face: 'austen_proud',
      parts: ['waistcoat', 'cravat', 'collar', 'tails', 'boot_tops'], socks: true,
      body: { height: 1.05, thick: 1.0, shoulders: 0.95, head: 0.98 },
      colors: { skin: '#e6c2a2', hair: '#2b1d15', top: '#e4d6b2', garment: '#2a3650', bottom: '#c2ab82', shoes: '#2e2520', socks: '#2e2520' } },
    // Charles Bingley: a little shorter than Darcy, open-faced, sandy hair brushed forward; dressed for a ball — a warm
    // brown tailcoat, a white waistcoat and cravat, cream knee breeches, white stockings, black pumps
    bingley: { kind: 'shapes', style: 'austen_man', who: 'man', garment: 'tailcoat', hair: 'brutus', parts: ['waistcoat', 'cravat', 'collar', 'tails'], socks: true,
      body: { height: 1.0, thick: 1.02, shoulders: 0.98, head: 1.0 },
      colors: { skin: '#efcfb0', hair: '#a5733f', top: '#efe9da', garment: '#6a4a32', bottom: '#e6dcc4', shoes: '#262020', socks: '#ece6d8' } },
    // Charlotte Lucas, twenty-seven: plain and sensible, sitting straight; brown hair up without curls; her grey gown
    // (the world's rare grey: hers alone) with a darker grey sash
    charlotte: { kind: 'shapes', style: 'austen', who: 'woman', garment: 'gown', hair: 'bun', parts: ['sash', 'puffs'],
      body: { height: 0.95, thick: 0.97, shoulders: 0.92, hips: 1.02, neck: 1.0, head: 1.0 },
      colors: { skin: '#e8c8aa', hair: '#6a4a31', top: '#a7a59d', garment: '#a7a59d', bottom: '#9e9c94', accent: '#77756f', shoes: '#857f75' } },
    // the neighbours at a ball, nobody in particular: a lady in a gown and a gentleman in a tailcoat — a scene gives each
    // its own colours (the look's `colors`, whole) from the world's greens, creams, buffs and soft blues; never the rare
    // three (scarlet, Charlotte's grey, the seal's blue)
    guest_lady: { kind: 'shapes', style: 'austen', who: 'woman', garment: 'gown', hair: 'bun', parts: ['curls', 'sash', 'puffs'],
      body: { height: 0.93, thick: 0.95, shoulders: 0.9, hips: 1.0 },
      colors: { skin: '#eccbad', hair: '#5a3d26', top: '#c9d3dc', garment: '#c9d3dc', bottom: '#c0cad3', accent: '#8d9b7c', shoes: '#e4dccb' } },
    guest_gent: { kind: 'shapes', style: 'austen_man', who: 'man', garment: 'tailcoat', hair: 'brutus', parts: ['waistcoat', 'cravat', 'collar', 'tails'], socks: true,
      body: { height: 1.0, thick: 1.04, shoulders: 1.0 },
      colors: { skin: '#e4c09f', hair: '#3c2a1c', top: '#ece5d4', garment: '#4f4436', bottom: '#d9cdb1', shoes: '#262020', socks: '#ece6d8' } },
  },
  shapes: {
    // the world's style: Hugh Thomson's people — slender and long-limbed (from `shadow`), a small head on a neck of
    // natural length, the face a few strokes (the face `austen`); colours with their shade (a wash, lit by the scene),
    // the sepia pen round them and where their colours meet — a fine nib's line, as thin as the places' finer strokes,
    // so that people and places are of one hand; cloth falling in long soft folds (the light lays their shade)
    styles: {
      austen: { from: 'shadow', name: 'Pride and Prejudice', head: 1.14, egg: [0.84, 1.08, 0.95], neck: 0.8, legs: 1.06, limb: 0.86,
        sides: 20, square: 2, trunk: { w: [0.8, 0.84, 0.68, 0.84, 0.92], d: [0.8, 0.82, 0.72, 0.78, 0.7] }, arms: 'regency', feet: 'regency',
        fingers: false, paint: 'toned', line: 1.1, tinted: false, folds: { n: 11, depth: 0.1 }, ragged: 0, face: 'austen', ground: 'sepia', drape: true },
      // the gentlemen's: the same hand, a man's build — sleeves close from a natural shoulder (no puff at its head),
      // thighs with flesh to them in close breeches, a chest a little deeper
      austen_man: { from: 'austen', name: 'Pride and Prejudice, gentlemen', arms: 'gent', feet: 'gent',
        trunk: { w: [0.82, 0.84, 0.73, 0.86, 0.88], d: [0.82, 0.84, 0.78, 0.85, 0.76] } },
    },
    // the pen's colour: a sepia ink, as the scenes' own pen line
    grounds: { sepia: { name: 'sepia ink on paper', bg: '#efe7d6', ink: '#3d2c1f', grid: '#ddd3c0', rim: '#e9b97c' } },
    // arms with a little flesh to them, a slender wrist and a small hand; legs that taper to a slim ankle and a pointed
    // slipper or boot
    arms: { regency: [[0, 0.058], [0.55, 0.053], [1, 0.043], [1.45, 0.041], [2, 0.03], [2.35, 0.037], [2.7, 0.034], [3, 0.019]],
      gent: [[0, 0.05], [0.55, 0.05], [1, 0.044], [1.45, 0.042], [2, 0.032], [2.35, 0.039], [2.7, 0.036], [3, 0.02]] },
    legs: { regency: [[0, 0.088], [0.45, 0.072], [1, 0.048], [1.35, 0.056], [2, 0.03], [2.4, 0.033], [2.8, 0.027], [3, 0.014]],
      gent: [[0, 0.1], [0.45, 0.084], [1, 0.054], [1.35, 0.062], [2, 0.036], [2.4, 0.038], [2.8, 0.03], [3, 0.016]] },
    hair: {
      // a man's hair cut short and brushed forward over the brow (the Brutus of the day): a cap off the brow, locks
      // over the forehead and the temples, side-whiskers down to the ear's lobe
      brutus: { name: 'brushed forward', draw: F => {
        const h = F.head, r = h.r, K = F.keep(CROWN);
        F.cap(h.at, h.axes, K.radii, [0, 0.74, -0.67], -0.08, F.colors.hair, h.sides, h.square);
        for (const [x, y, z, s] of [[-0.42, 0.74, 0.52, 0.24], [0.06, 0.84, 0.5, 0.26], [0.48, 0.72, 0.5, 0.22], [-0.78, 0.5, 0.28, 0.22], [0.8, 0.48, 0.26, 0.21]]) {
          F.ball(h.on([x, y, z], 1.01), h.axes, [r * s, r * s * 0.75, r * s], F.colors.hair, 10);
        }
        for (const sx of [-1, 1]) F.ball(h.on([sx * 0.95, -0.1, 0.12], 0.99), h.axes, [r * 0.09, r * 0.28, r * 0.15], F.colors.hair, 10);
      } },
    },
    faces: {
      // the world's face (faceOf): the sisters'
      austen: { name: 'Regency', draw: faceOf() },
      // Elizabeth's: the same face with a lively cast of its own — one brow a little raised, one corner of the mouth
      // higher than the other (with a smile, a knowing one)
      austen_wry: { name: 'Regency, wry', draw: faceOf({ browL: 0.045, cornerR: 0.04, cornerL: -0.004 }) },
      // Darcy's: heavier lids (he looks down a little, from his height), brows heavier and set low, the mouth firm, its
      // corners a little down
      austen_proud: { name: 'Regency, proud', draw: faceOf({ lid: 0.86, brow: 1.25, browL: -0.025, browR: -0.025, cornerL: -0.012, cornerR: -0.012 }) },
    },
    garments: {
      // a high-waisted gown: hung from the shoulders, the skirt falling from under the bust in an A-line to the
      // instep, in soft folds; long sleeves (the short puffs over them: the part `puffs`)
      gown: { name: 'high-waisted gown', hang: [{ to: 1.97, from: 'shoulders', flare: 0.42 }], sleeves: 'garment', bodice: true },
      // a gentleman's tailcoat: close over the chest, its fronts ending at the waist (no skirt before: its tails, the
      // part `tails`, curve back from there round the hips), long sleeves
      tailcoat: { name: 'tailcoat', hang: [{ to: 0.03, from: 'shoulders', flare: 0, folds: false }], sleeves: 'garment' },
    },
    hats: {
      // a straw bonnet: a deep cap over the crown and the back of the head, standing off it, its brim framing the face;
      // its ribbon (the look's accent) tied in a bow under the chin
      bonnet: { name: 'straw bonnet', draw: F => {
        const { add, mul } = V(), { at, axes, egg, r, out, sides, square } = F.head, [, hu, hf] = axes;
        F.cap(at, axes, egg.map(e => e * r * out * 1.22), [0, 0.5, -0.86], -0.3, F.colors.hat, sides, square);
        F.ball(add(at, add(mul(hu, -r * 1.02), mul(hf, r * 0.32))), axes, [r * 0.2, r * 0.11, r * 0.12], F.colors.accent, 10);
      } },
    },
    parts: {
      // a sash round the gown just under the bust (the look's accent colour): a band between the gown's chest ring and
      // the top of its skirt, a little off it
      sash: { name: 'sash', draw: F => {
        const on = F.worn;
        if (!on) return;
        const { add, sub, mul, mix, unit, mean } = V(), K = F.keep(SASH), off = 0.006 * F.k, m1 = mean(on[1]), m2 = mean(on[2]);
        for (let r = 0; r < 2; r++) {
          const u = r === 0 ? 0.12 : 0.34, c = mix(m1, m2, u), row = K.rows[r];
          for (let q = 0; q < row.length; q++) {
            const p = mix(on[1][q], on[2][q], u);
            row[q] = add(p, mul(unit(sub(p, c)), off));
          }
        }
        F.rings(K.rows, F.colors.accent, null, null);
      } },
      // short puffed sleeves at the shoulders, over the long ones (the gown's colour)
      puffs: { name: 'puffed sleeves', draw: F => {
        const { sub, mix, unit, cross } = V(), k = F.k, m = F.fit.h;
        for (const s of ['Left', 'Right']) {
          const a = F.P(`${s}Arm`), b = F.P(`${s}ForeArm`), u = unit(sub(b, a)), e1 = unit(cross(u, F.fwd('Chest'))), e2 = cross(e1, u);
          F.ball(mix(a, b, 0.15), [e1, u, e2], [0.052 * k, 0.068 * m, 0.052 * k], F.colors.garment, 14);
        }
      } },
      // curls at the temples, under the knot of hair (the hair's colour)
      curls: { name: 'curls', draw: F => {
        const h = F.head, r = h.r;
        for (const sx of [-1, 1]) {
          F.ball(h.on([sx * 0.86, 0.3, 0.2], 1.02), h.axes, [r * 0.17, r * 0.22, r * 0.15], F.colors.hair, 10);
          F.ball(h.on([sx * 0.9, 0.02, 0.05], 1.01), h.axes, [r * 0.13, r * 0.2, r * 0.13], F.colors.hair, 10);
        }
      } },
      // Lydia's scarlet ribbon: a band round her hair above the brow, tied at the left with two short ends that swing
      ribbon: { name: 'scarlet ribbon', draw: F => {
        const { add, mul } = V(), h = F.head, K = F.keep(RIBBON), [, hu, hf] = h.axes;
        for (let i = 0; i <= BAND; i++) {
          const a = (i / BAND) * Math.PI * 2;
          K.band[i] = h.on([Math.sin(a), 0.5 + 0.18 * Math.cos(a), Math.cos(a)], 1.1);
        }
        F.tube(K.band, K.profile, K.colors, 6, hu, 0.35);
        const knot = h.on([-0.9, 0.42, -0.25], 1.13), side = h.axes[0];
        F.ball(knot, h.axes, [h.r * 0.17, h.r * 0.22, h.r * 0.13], SCARLET, 10);
        for (let e = 0; e < 2; e++) {
          const p = K.ends[e], s = e === 0 ? -1 : 1;
          p[0] = knot;
          p[1] = F.swing(`ribbon${e}a`, add(knot, add(mul(hu, -0.07 * F.fit.h), mul(hf, s * 0.02 * F.fit.h))), 140);
          p[2] = F.swing(`ribbon${e}b`, add(p[1], add(mul(hu, -0.07 * F.fit.h), mul(side, -0.01 * F.fit.h))), 80);
          F.tube(p, K.end, K.colors, 6, side, 0.3);
        }
      } },
      // the pale waistcoat seen between the coat's open fronts: a V on the chest, wide under the cravat, closing to a
      // point at the bottom of the breastbone — a panel a little off the coat's rings (the shoulders', the chest's, and
      // a third down toward the waist), at its front
      waistcoat: { name: 'waistcoat', draw: F => {
        const on = F.worn;
        if (!on) return;
        const { add, sub, mul, dot, mix, unit, mean } = V(), fw = F.fwd('Chest'), K = F.keep(VEST), off = 0.007 * F.k;
        // (a ring's point at a fractional index, round)
        const at = (ring, f) => {
          const n = ring.length, i0 = ((Math.floor(f) % n) + n) % n;
          return mix(ring[i0], ring[(i0 + 1) % n], f - Math.floor(f));
        };
        const rowOf = (ring, span, row) => {
          const c = mean(ring);
          let best = 0, most = -Infinity;
          for (let q = 0; q < ring.length; q++) {
            const d = dot(sub(ring[q], c), fw);
            if (d > most) { most = d; best = q; }
          }
          for (let q = 0; q < VEST_ACROSS.length; q++) {
            const p = at(ring, best + VEST_ACROSS[q] * span * ring.length);
            row[q] = add(p, mul(unit(sub(p, c)), off));
          }
        };
        for (let q = 0; q < K.low.length; q++) K.low[q] = mix(on[1][q], on[2][q], 0.38);
        rowOf(on[0], 0.06, K.rows[0]);
        rowOf(on[1], 0.035, K.rows[1]);
        rowOf(K.low, 0.006, K.rows[2]);
        F.rings(K.rows, F.colors.top, null, null);
      } },
      // a white cravat: a high stock wound round the neck where it meets the shoulders, and its fall — the linen
      // folded softly over the top of the chest under the chin, into the waistcoat's V
      cravat: { name: 'cravat', draw: F => {
        const { add, mul } = V(), k = F.k, m = F.fit.h, uc = F.up('Chest'), fc = F.fwd('Chest'), sd = F.side('Chest'), K = F.keep(STOCK);
        const c = add(F.P('Neck1'), mul(uc, 0.035 * m)), hh = 0.032 * m, outer = 0.062 * k, inner = 0.046 * k;
        for (let r = 0; r < 4; r++) {
          const dy = r < 2 ? -hh : hh, w = r === 0 || r === 3 ? inner : outer, ring = K.rings[r];
          for (let q = 0; q < STOCK_N; q++) {
            const a = (q / STOCK_N) * Math.PI * 2;
            ring[q] = add(c, add(mul(uc, dy), add(mul(sd, Math.cos(a) * w), mul(fc, Math.sin(a) * w * 0.95))));
          }
        }
        K.rings[4] = K.rings[0];
        F.rings(K.rings, LINEN, null, null);
        const fall = add(c, add(mul(fc, outer * 0.95), mul(uc, -hh * 2.1)));
        F.ball(fall, [sd, uc, fc], K.fall, LINEN, 12);
      } },
      // the coat's tails: from the waist, where the fronts end, they curve back round the hips — at the waist from the
      // sides, lower ever further back — down to the backs of the knees: the cut-away line of a tailcoat, seen from the
      // side as well as from behind; a sheet hanging as cloth (it swings as he goes, lies over the chair as he sits),
      // clear of the thighs at the sides and behind
      tails: { name: 'coat tails', draw: F => {
        const { add, sub, mul, dot, mix, level } = V(), P = F.P, k = F.k, hips = P('Hips');
        const bk = mul(level(F.fwd('Hips')), -1), sd = level(F.side('Hips')), secs = F.trunk(1.14);
        const top = P('Spine1')[1], knees = mix(P('LeftShin'), P('RightShin'), 0.5), bottom = knees[1] + 0.03 * F.fit.h;
        const thigh = 0.1 * k * F.style.limb, n = 11, held = 2, rowsN = 9, rows = [];
        for (let r = 0; r < rowsN; r++) {
          const u = r / (rowsN - 1), y = top + (bottom - top) * u;
          let depth = trunkBack(F, secs, bk, y), half = secs[1][3] * (1.02 + 0.08 * u);
          for (const s of ['Left', 'Right']) for (let w = 0; w <= 1; w += 0.25) {
            const p = mix(P(`${s}Leg`), P(`${s}Shin`), w);
            if (Math.abs(p[1] - y) >= 0.08 * F.fit.h) continue;
            depth = Math.max(depth, dot(sub(p, hips), bk) + thigh);
            half = Math.max(half, Math.abs(dot(sub(p, hips), sd)) + thigh);
          }
          depth += 0.012 * k;
          half += 0.012 * k;
          // (how far round from the back it reaches: past the side at the waist, the back half at the knees)
          const reach = 1.62 - 0.6 * u ** 0.8, c = [hips[0], y, hips[2]];
          rows.push(Array.from({ length: n }, (_, q) => {
            const a = ((q / (n - 1)) * 2 - 1) * reach, back = Math.cos(a);
            return add(c, add(mul(sd, Math.sin(a) * half), mul(bk, back * (back > 0 ? depth : half * 0.7))));
          }));
        }
        F.cloth(rows, F.colors.garment, held);
      } },
      // the tailcoat's standing collar: a band of the coat's colour round the back and the sides of the neck, high
      // behind (over the stock's top), lower toward the front where it turns down onto the coat, open before the cravat
      collar: { name: 'standing collar', draw: F => {
        const { add, mul } = V(), m = F.fit.h, k = F.k, uc = F.up('Chest'), fc = F.fwd('Chest'), sd = F.side('Chest'), K = F.keep(COLLAR);
        const c = F.P('Neck1');
        for (let q = 0; q < COLLAR_N; q++) {
          // (round from one front, by the back, to the other: a = π/2 is before, its ends 0.75 rad short of it)
          const a = Math.PI / 2 + 0.75 + ((Math.PI * 2 - 1.5) * q) / (COLLAR_N - 1), cs = Math.cos(a), sn = Math.sin(a);
          const behind = Math.max(0, -sn), rise = (0.02 + 0.055 * behind ** 0.7) * m;
          const ring = (dy, w) => add(c, add(mul(uc, dy), add(mul(sd, cs * w), mul(fc, sn * w * 0.92))));
          K.rows[0][q] = ring(-0.03 * m, 0.074 * k);
          K.rows[1][q] = ring(rise * 0.55, 0.078 * k);
          K.rows[2][q] = ring(rise, 0.085 * k);
        }
        F.rings(K.rows, F.colors.garment, null, null);
      } },
      // the tan turned-down tops of his top boots: a band round each leg below the knee
      boot_tops: { name: 'boot tops', draw: F => {
        const { mix } = V(), k = F.k * F.style.limb;
        for (const s of ['Left', 'Right']) {
          const knee = F.P(`${s}Shin`), ankle = F.P(`${s}Foot`);
          F.bar(mix(knee, ankle, 0.1), mix(knee, ankle, 0.27), 0.07 * k, 0.069 * k, [[0, BOOT_TOP]], 14, F.fwd(`${s}Shin`));
        }
      } },
      // Elizabeth's parasol, closed, in her left hand: its cane from the hand down to its tip on the ground a little
      // before her foot, the furled silk round its lower half, its crook over the hand
      parasol: { name: 'parasol', draw: F => {
        const { add, sub, mul, unit, mix, level } = V(), m = F.fit.h, hand = F.P('LeftHand'), f = level(F.fwd('Hips')), K = F.keep(SHADE);
        // (out from her side, clear of the skirt's hem)
        const out = level(sub(hand, F.P('Hips')));
        const floor = Math.min(F.P('RightFoot')[1], F.P('LeftFoot')[1]) - 0.07 * m;
        const tip = [hand[0] + f[0] * 0.14 * m + out[0] * 0.12 * m, floor, hand[2] + f[2] * 0.14 * m + out[2] * 0.12 * m], along = unit(sub(hand, tip)), top = add(hand, mul(along, 0.06 * m));
        F.bar(tip, top, 0.007 * m, 0.008 * m, [[0, CANE]], 6, f);
        K.pts[0] = mix(tip, hand, 0.1);
        K.pts[1] = mix(tip, hand, 0.42);
        K.pts[2] = mix(tip, hand, 0.66);
        F.tube(K.pts, K.silk, K.cols, 12, f);
      } },
    },
  },
};
