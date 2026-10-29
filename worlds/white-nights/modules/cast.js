// The people of «White Nights» as people in a scene (an element with "person"): who they are — figures of shapes in
// this world's style, `litho`: slender people of the 1840s, their heads a little larger than life, drawn round with the
// houses' sepia ink line, their clothes washed in soft colours, folded and shaded under the scene's own light, like an
// old lithograph touched with watercolour — and what they hold. cast.md says who is who and what each part is. A part's lengths are a man's
// metres times F.fit.h (the person's height as a share of a man's 1.76 m).
const V = () => MooodShapes.V;
const SILK = [0.13, 0.12, 0.13, 1], BAND = [0.22, 0.2, 0.22, 1];
// a book's: its boards (a worn brown calf) and its pages (old paper)
// a face's: the eyes' whites, the iris (and an open mouth's dark), the upper lid's ink line
const WHITE = [0.95, 0.92, 0.88, 1], IRIS = [0.24, 0.17, 0.14, 1], LID = [0.22, 0.17, 0.15, 1];
// the glint in an eye: its own white whatever the light (a colour that glows)
const GLINT = [1, 0.98, 0.95, 2];
// a stick's: its wood (a dark knotty hazel) and its worn knob
const WOOD = [0.33, 0.24, 0.17, 1], KNOB = [0.42, 0.31, 0.22, 1];
// the expressions a face takes (<id>_mood), as the engine's simple face has them: the brows' inner and outer ends
// raised, how open the eyes are, how wide the mouth, its corners up, how open
const MOODS = {
  neutral: { inner: 0, outer: 0, eye: 1, wide: 0.13, corners: 0, open: 0 },
  smile: { inner: 0.01, outer: 0.01, eye: 0.85, wide: 0.16, corners: 0.05, open: 0 },
  laugh: { inner: 0.03, outer: 0.02, eye: 0.5, wide: 0.17, corners: 0.055, open: 0.07 },
  sad: { inner: 0.07, outer: -0.05, eye: 0.85, wide: 0.12, corners: -0.04, open: 0 },
  angry: { inner: -0.08, outer: 0.03, eye: 0.8, wide: 0.11, corners: -0.025, open: 0 },
  surprised: { inner: 0.08, outer: 0.08, eye: 1.3, wide: 0.08, corners: 0, open: 0.08 },
  afraid: { inner: 0.09, outer: 0.01, eye: 1.25, wide: 0.12, corners: -0.025, open: 0.04 },
  disgusted: { inner: -0.05, outer: -0.01, eye: 0.75, wide: 0.12, corners: -0.035, open: 0 },
  thinking: { inner: 0.04, outer: -0.01, eye: 0.85, wide: 0.1, corners: -0.008, open: 0 },
  tired: { inner: 0.02, outer: -0.05, eye: 0.55, wide: 0.12, corners: -0.015, open: 0 },
};
const BOARDS = [0.42, 0.27, 0.2, 1], PAGES = [0.93, 0.9, 0.81, 1];
// a letter's: its paper (folded, a little grey) and its red wax seal
const PAPER = [0.94, 0.92, 0.86, 1], SEAL = [0.62, 0.12, 0.1, 1];
// a top hat held by its brim: the opening at `c` turned to the holder, the crown out along `out` (unit); a little
// wider at the top, as hats of the time were; `colour` its felt
function topHat(F, c, out, colour) {
  const { add, mul, cross, unit } = V(), m = F.fit.h;
  const side = unit(cross(out, [0, 1, 0])), up = cross(side, out), axes = [side, up, out];
  F.ball(c, axes, [0.165 * m, 0.14 * m, 0.009 * m], colour, 18);
  const top = add(c, mul(out, 0.16 * m));
  F.bar(add(c, mul(out, 0.004 * m)), top, 0.082 * m, 0.09 * m, [[0, colour]], 18, side);
  F.bar(add(c, mul(out, 0.01 * m)), add(c, mul(out, 0.035 * m)), 0.085 * m, 0.086 * m, [[0, BAND]], 18, side);
  F.ball(top, axes, [0.09 * m, 0.09 * m, 0.006 * m], colour, 18);
}
// a man's coat's front over the chest: a waistcoat between the lapels in the lapels' deeper shade of the coat, the shirt's white only
// a little at the throat under a dark stock wound round the neck, the lapels turned back, a row of buttons down to the waist — on the coat's surface (the trunk's
// sections a little out of the coat's own, which stands off them by 1.12)
const STOCK = [0.14, 0.13, 0.14, 1], BUTTON = [0.2, 0.18, 0.17, 1];
const FRONT = F => ({ axes: [null, null, null], vest: [0.055 * F.k, 0.075 * F.fit.h, 0.011 * F.k], shirt: [0.03 * F.k, 0.022 * F.fit.h, 0.012 * F.k], stock: [0.062 * F.k, 0.026 * F.fit.h, 0.06 * F.k],
  button: [0.012 * F.k, 0.012 * F.k, 0.006 * F.k], lapel: [[0, 0.016 * F.k], [1, 0.02 * F.k], [2, 0.008 * F.k]] });
function coatFront(F) {
  const { add, mul, mix } = V(), K = F.keep(FRONT), secs = F.trunk(1.16), waist = secs[2], chest = secs[3], shoulders = secs[4];
  const front = (s, x = 0) => add(add(s[0], mul(s[2], s[4])), mul(s[1], x * s[3]));
  const sd = chest[1], uc = F.up('Chest'), fw = chest[2], axes = K.axes, shade = F.colors.garment.map((v, i) => (i < 3 ? v * 0.72 : v));
  axes[0] = sd; axes[1] = uc; axes[2] = fw;
  F.ball(mix(front(shoulders), front(chest), 0.55), axes, K.vest, shade, 12);
  // (the stock wound round the neck's foot, the shirt's white showing under it at the front)
  const neck = F.P('Neck1');
  F.ball(add(neck, mul(uc, 0.012 * F.fit.h)), axes, K.stock, STOCK, 12);
  F.ball(add(add(neck, mul(fw, 0.052 * F.k)), mul(uc, -0.022 * F.fit.h)), axes, K.shirt, F.colors.top, 10);
  for (const sx of [-1, 1]) F.tube([front(shoulders, sx * 0.38), front(chest, sx * 0.3), front(waist, sx * 0.04)], K.lapel, [[0, shade]], 6, fw);
  for (const u of [0.25, 0.6, 0.95]) F.ball(mix(front(chest, 0.12), front(waist, 0.1), u), axes, K.button, BUTTON, 6);
}
// (eased 0…1 as x goes from a to b)
const smooth = (a, b, x) => {
  const u = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return u * u * (3 - 2 * u);
};
// her bands: how low the hair comes round the head (a: 0 before, ±π behind; the height on it, 1 its top): high at the
// brow, down over the temples and the ears, low at the nape
const BANDS_EDGE = a => {
  const t = Math.abs(a);
  return 0.56 - 0.08 * smooth(0, 0.7, t) - 0.78 * smooth(0.8, 1.35, t) - 0.2 * smooth(1.6, 2.2, t);
};
const BANDS = F => {
  const r = F.head.r, skin = F.colors.skin;
  return { radii: F.head.egg.map(e => e * r * F.head.out * 1.02), part: [[0, r * 0.028], [2, r * 0.018]],
    skin: [[0, [skin[0] * 0.95, skin[1] * 0.9, skin[2] * 0.88, skin[3]]]], knot: [r * 0.38, r * 0.32, r * 0.3] };
};
// a man's hair, standing off the head by `swell`: brushed up from a high brow, down the temples to the sideburns before
// the ears, behind the ears down to `nape`; a soft wave over the brow
function mane(swell, nape) {
  const edge = a => {
    const t = Math.abs(a);
    return 0.62 - 0.1 * smooth(0.35, 0.8, t) - 0.72 * smooth(1.0, 1.45, t) - (-0.2 - nape) * smooth(1.6, 2.2, t);
  };
  const KEEP = F => {
    const r = F.head.r;
    return { radii: F.head.egg.map(e => e * r * F.head.out * swell), colors: [[0, F.colors.hair]], wave: [[0, r * 0.05], [1, r * 0.13], [2, r * 0.04]] };
  };
  return F => {
    const h = F.head, K = F.keep(KEEP), o = h.out * swell;
    F.shell(h.at, h.axes, K.radii, edge, 0.1, F.colors.hair, h.sides, h.square);
    F.tube([h.on([-0.44, 0.6, 0.66], o * 1.01), h.on([0.02, 0.74, 0.67], o * 1.03), h.on([0.42, 0.62, 0.66], o * 1.01)], K.wave, K.colors, 8, h.axes[1], 0.5);
  };
}
// a folded letter held out in the right hand, upright between the fingers: its long side along the forearm, beyond
// the hand, its face turned to the side the arm passes (so held out across the body it shows its face, not its edge),
// a red wax seal on it — `stained`: a brown blot dried on its face; its point `letter`
const BLOT = [0.52, 0.4, 0.27, 1];
function heldLetter(F, stained) {
  const { add, sub, mul, cross, unit } = V(), m = F.fit.h, hand = F.P('RightHand');
  const fore = unit(sub(hand, F.P('RightForeArm'))), face = unit(cross(fore, [0, 1, 0])), up = cross(face, fore);
  const c = add(add(hand, mul(fore, 0.08 * m)), mul(up, 0.03 * m)), axes = [fore, up, face];
  F.ball(c, axes, [0.1 * m, 0.07 * m, 0.004 * m], PAPER, 10, 6);
  for (const s of [-1, 1]) F.ball(add(c, mul(face, s * 0.005 * m)), axes, [0.013 * m, 0.013 * m, 0.004 * m], SEAL, 8);
  if (stained) for (const s of [-1, 1]) F.ball(add(add(c, mul(fore, 0.045 * m)), add(mul(up, -0.02 * m), mul(face, s * 0.006 * m))), axes, [0.035 * m, 0.026 * m, 0.003 * m], BLOT, 10);
  F.point('letter', c);
}
// a bundle's kerchief (a washed blue cotton) and its knot a shade deeper
const CLOTH = [0.55, 0.62, 0.72, 1], CLOTH_KNOT = [0.45, 0.52, 0.63, 1];
// a maid's apron (unbleached linen) and her keys (old iron) on a ring at the belt
const LINEN = [0.93, 0.91, 0.85, 1], IRON = [0.3, 0.28, 0.27, 1];
// a working girl's dress to the ankles with an apron over it from the waist to below the knee (two rows of cloth held
// at the waist, the rest hanging and swinging as she goes), a ring of keys at her right hip
function apron(F) {
  const { add, mul } = V(), m = F.fit.h, secs = F.trunk(1.16), waist = secs[2], hips = secs[0];
  const front = (s, x, out = 1) => add(add(s[0], mul(s[2], s[4] * out)), mul(s[1], x * s[3]));
  const xs = [-0.75, -0.4, 0, 0.4, 0.75], dn = [0, -1, 0], fw = waist[2];
  const rows = [xs.map(x => front(waist, x * 0.9, 1.02)), xs.map(x => front(hips, x * 0.95, 1.06))];
  for (let k = 1; k <= 4; k++) rows.push(xs.map(x => add(add(front(hips, x * (0.97 + k * 0.03), 1.06), mul(dn, k * 0.1 * m)), mul(fw, k * 0.016 * m))));
  F.cloth(rows, LINEN, 2);
  const ring = add(front(waist, 0.95, 1.0), mul(dn, 0.05 * m));
  const axes = [waist[1], [0, 1, 0], fw];
  F.ball(ring, axes, [0.025 * m, 0.025 * m, 0.006 * m], IRON, 8);
  for (const [dx, dy] of [[-0.012, -0.05], [0.006, -0.058], [0.018, -0.045]]) F.bar(ring, add(ring, add(mul(waist[1], dx * m), [0, dy * m, 0])), 0.005 * m, 0.004 * m, [[0, IRON]], 6, waist[1]);
}
return {
  ...data,
  characters: {
    // the Dreamer, twenty-six: thin, a little stooped, a clerk's worn frock coat of faded bottle green, grey trousers,
    // brown hair (not the Lodger's black), bare-headed: his hat is in his hands (the parts hat_held, hat_hands, hat_hand,
    // hat_low), his knotty stick in the right (cane)
    dreamer: { kind: 'shapes', style: 'litho', who: 'man', garment: 'frockcoat', hair: 'swept',
      body: { height: 1.0, thick: 0.84, shoulders: 0.94, neck: 1.05 },
      colors: { skin: '#e2c0a4', hair: '#54392a', top: '#e8e2d6', garment: '#66765b', bottom: '#77736c', shoes: '#2a2522', hat: '#3a3431' } },
    // Nastenka, seventeen: small and quick, a pale lilac-grey dress with a dark short cape over the shoulders, a light
    // bare-headed, her dark hair parted in the middle and smoothed in bands over the temples and the ears, gathered in a
    // knot low at the nape
    nastenka: { kind: 'shapes', style: 'litho', who: 'woman', garment: 'caped', hair: 'bands', hat: 'none',
      body: { height: 0.93, thick: 0.8, shoulders: 0.86, head: 1.03 },
      colors: { skin: '#efd2bb', hair: '#2a1e19', top: '#5a6482', garment: '#b9adc4', hat: '#e4d6b4', accent: '#8e3f4e', shoes: '#4a3b38' } },
    // the Lodger, about twenty-eight: tall, upright, a well-brushed long slate-blue frock coat, black hair under a tall
    // black top hat (tophat; at his chest instead: "_wear": {"hat": "none"} and the part hat_hand)
    lodger: { kind: 'shapes', style: 'litho', who: 'man', garment: 'longcoat', hair: 'neat', hat: 'tophat',
      body: { height: 1.05, thick: 0.92, shoulders: 1.02 },
      colors: { skin: '#dcb898', hair: '#2a211d', top: '#ece8e0', garment: '#4a5a78', bottom: '#4a4c55', shoes: '#211f22', hat: '#2b2b31' } },
    // Grandmother, past seventy and blind: small, a dark plum silk dress of long ago to the floor, a faded mustard shawl
    // over the shoulders, white hair under a white cap tied with a lilac ribbon under the chin
    babushka: { kind: 'shapes', style: 'litho', who: 'woman', garment: 'shawled', hair: 'bun', hat: 'mobcap',
      body: { height: 0.88, thick: 0.96, shoulders: 0.86, head: 1.04 },
      colors: { skin: '#e8d0bd', hair: '#ddd7cd', top: '#c4a568', garment: '#4c3f47', hat: '#f3efe6', accent: '#8a7598', shoes: '#2a2426' } },
    // Matryona, the Dreamer's servant, past sixty: short and broad, a brown homespun dress to the floor, a faded brick-red
    // shawl over the shoulders, a washed linen kerchief tied under the chin over grey hair
    matryona: { kind: 'shapes', style: 'litho', who: 'woman', garment: 'shawled', hair: 'short', hat: 'kerchief',
      body: { height: 0.9, thick: 1.06, shoulders: 0.94, head: 1.03 },
      colors: { skin: '#e0bea0', hair: '#8f877c', top: '#a3593f', garment: '#5f5247', hat: '#ddd4bf', accent: '#cfc4ab', shoes: '#2a2522' } },
    // Glasha, the maid of the acquaintances' flat, about twenty: quick and plump-cheeked, a madder-red cotton dress, a
    // linen apron over it, her keys at the hip, sleeves pushed up; bare-headed, her light brown hair parted and knotted
    // at the nape
    glasha: { kind: 'shapes', style: 'litho', who: 'woman', garment: 'aproned', hair: 'bands', hat: 'none',
      body: { height: 0.92, thick: 0.92, shoulders: 0.9, head: 1.03 },
      colors: { skin: '#f0cdb0', hair: '#7a5236', top: '#b4574a', garment: '#b4574a', hat: '#e9e2d0', accent: '#b4574a', shoes: '#3a2f2a' } },
    // Fyokla, Grandmother's deaf old servant: thin and bent, a faded grey-blue dress to the floor, a dark moss-green
    // shawl, a white kerchief tied under the chin over grey hair
    fyokla: { kind: 'shapes', style: 'litho', who: 'woman', garment: 'shawled', hair: 'short', hat: 'kerchief',
      body: { height: 0.86, thick: 0.86, shoulders: 0.86, head: 1.03 },
      colors: { skin: '#e3c3a8', hair: '#a29a90', top: '#58644a', garment: '#6f7a86', hat: '#efebe1', accent: '#efebe1', shoes: '#2a2522' } },
  },
  shapes: {
    // the world's style: the slender figure of `shadow` (a small head, a long neck, hands with fingers, pointed shoes)
    // in colours under the scene's light, a fine tinted line round each colour, a face that reads
    // the world's style: a slender figure of the 1840s made from `shadow` (hands with fingers, pointed shoes), rounder in
    // its trunk than that silhouette's so it stands in the street as a body, not a cut-out; its head larger than life
    // and rounder, so a face reads across the street; washed in colours under the scene's light and shaded (`toned`),
    // drawn round with the houses' own sepia ink line (the ground `litho`); its cloth folded in long strokes as a
    // lithograph hatches it; the face `litho`
    styles: { litho: { from: 'shadow', name: 'Lithograph', head: 1.32, egg: [0.88, 1.08, 0.98], neck: 0.85, legs: 1.0, limb: 1.2, feet: 'litho', sides: 24,
      trunk: { w: [0.88, 0.94, 0.8, 0.92, 0.98], d: [0.96, 1.0, 0.92, 0.94, 0.86] }, arms: 'litho', paint: 'toned', line: 1.6, tinted: false,
      face: 'litho', ragged: 0, folds: { n: 6, depth: 0.035 }, ground: 'litho', fingers: false } },
    // the arms of the style: a sleeve full at the shoulder, the forearm tapering to a real wrist, a hand with a palm as
    // wide as a hand is, its fingers closed in it (the style has no separate fingers: a quiet hand, never splayed) — a
    // hand on the granite or round a hat's brim reads as a hand
    arms: { litho: [[0, 0.058], [0.5, 0.054], [1, 0.046], [1.5, 0.042], [1.9, 0.034], [2, 0.026], [2.3, 0.034], [2.62, 0.033], [2.88, 0.024], [3, 0.01]] },
    // the legs of the style: full to the knee, the trouser (or the stocking under a dress) straight down to a real ankle,
    // a low shoe of the time with a rounded toe — never a pointed dark stroke under a hem
    legs: { litho: [[0, 0.085], [1, 0.06], [1.5, 0.055], [2, 0.042], [2.3, 0.045], [2.75, 0.04], [3, 0.016]] },
    // the paper and the ink of the scenes' lithograph: the line is the houses' sepia (their lib's INK)
    grounds: { litho: { name: 'lithograph', bg: '#ece5d6', ink: '#4a3f3a', grid: '#dcd4c4', rim: '#e9b97c' } },
    // a face that reads at a few metres: eyes with their whites, a dark iris and the upper lid drawn in ink, brows of the
    // hair's colour, a nose, soft lips (no painted cheeks: the light rounds the face) — as the person's <id>_mood has it (MOODS: the
    // same solids for every expression, only where they are changes, so one goes over into another)
    faces: { litho: { name: 'lithograph', draw: F => {
      const { axes, r: rh, on } = F.head, [, hu] = axes, x = MOODS[F.look.expression] ?? MOODS.neutral;
      const skin = F.colors.skin, brow = F.colors.hair.map(v => v * 0.62), crease = [skin[0] * 0.78, skin[1] * 0.64, skin[2] * 0.62];
      const lips = [skin[0] * 0.86, skin[1] * 0.64, skin[2] * 0.62];
      const lower = [skin[0] * 0.9, skin[1] * 0.66, skin[2] * 0.65], open = Math.min(1, x.eye), up = 1.8;
      for (const sx of [-1, 1]) {
        // (on the head's drawn surface, which stands a little out of its radius: the features a little out of it too)
        // the eye, large enough to read across the street: its white, the iris a little under the lid (its top hidden:
        // a living look), a glint in it, the upper lid a heavy ink line drawn out at its outer end, the lower lid's crease
        F.ball(on([sx * 0.34, 0.06, 0.94], 1.02), axes, [rh * 0.165, rh * 0.112 * x.eye, rh * 0.045], WHITE, 14);
        F.ball(on([sx * 0.33, 0.045, 0.955], 1.045), axes, [rh * 0.095, rh * 0.1 * open, rh * 0.04], IRIS, 12);
        F.ball(on([sx * 0.305, 0.08, 0.96], 1.07), axes, [rh * 0.024, rh * 0.024, rh * 0.016], GLINT, 6);
        F.tube([on([sx * 0.16, 0.07 + 0.09 * x.eye, 0.93], 1.07), on([sx * 0.34, 0.1 + 0.11 * x.eye, 0.945], 1.08), on([sx * 0.53, 0.07 + 0.08 * x.eye, 0.83], 1.07)],
          [[0, rh * 0.025], [1, rh * 0.045], [2, rh * 0.03]], [[0, LID]], 6, hu);
        F.tube([on([sx * 0.2, 0.05 - 0.09 * x.eye, 0.93], 1.035), on([sx * 0.34, 0.04 - 0.11 * x.eye, 0.94], 1.04), on([sx * 0.49, 0.05 - 0.07 * x.eye, 0.87], 1.035)],
          [[0, rh * 0.014], [1, rh * 0.022], [2, rh * 0.014]], [[0, crease]], 6, hu);
        // the brow, as the mood lifts or knits it
        F.tube([on([sx * 0.1, 0.36 + x.inner * up, 0.93], 1.05), on([sx * 0.33, 0.41 + ((x.inner + x.outer) * up) / 2, 0.9], 1.06), on([sx * 0.58, 0.34 + x.outer * up, 0.8], 1.05)],
          [[0, rh * 0.036], [1, rh * 0.04], [2, rh * 0.022]], [[0, brow]], 6, hu);
      }
      // the nose, the shade under it
      F.ball(on([0, -0.1, 1], 1.0), axes, [rh * 0.085, rh * 0.15, rh * 0.1], skin.map(v => v * 0.94), 10);
      F.tube([on([-0.09, -0.26, 0.96], 1.04), on([0, -0.29, 0.99], 1.06), on([0.09, -0.26, 0.96], 1.04)], [[0, rh * 0.016], [1, rh * 0.024], [2, rh * 0.016]], [[0, crease]], 6, hu);
      // (the mouth: its corners up or down, open — a dark oval within it — or closed: an open one no wider than nothing;
      // the upper lip a line of the lips' colour, the lower a fuller curve under it)
      const w = x.wide * 1.6, y = -0.46, c = x.corners * up;
      F.ball(on([0, y - x.open / 2, 0.95], 1.01), axes, [rh * w * 0.75, rh * x.open, rh * 0.03], IRIS, 10);
      F.tube([on([-w, y + c, 0.92], 1.03), on([0, y + 0.01, 0.945], 1.04), on([w, y + c, 0.92], 1.03)], [[0, rh * 0.026], [1, rh * 0.04], [2, rh * 0.026]], [[0, lips]], 6, hu);
      F.tube([on([-w * 0.7, y + c * 0.6 - 0.045, 0.93], 1.03), on([0, y - 0.085 - x.open, 0.94], 1.035), on([w * 0.7, y + c * 0.6 - 0.045, 0.93], 1.03)],
        [[0, rh * 0.022], [1, rh * 0.04], [2, rh * 0.022]], [[0, lower]], 6, hu);
    } } },
    garments: {
      // a frock coat: from the shoulders to the knee, straight (a man's coat, not a skirt), long sleeves; its front over the
      // chest (coatFront)
      frockcoat: { name: 'frock coat', hang: [{ to: 0.98, from: 'shoulders', flare: 0.04, folds: false }], sleeves: 'garment', draw: coatFront },
      // a longer frock coat, to just below the knee, as straight
      longcoat: { name: 'long frock coat', hang: [{ to: 1.05, from: 'shoulders', flare: 0.05, folds: false }], sleeves: 'garment', draw: coatFront },
      // a dress to the ankles from the waist, its bodice and sleeves in its colour, a mantle over the shoulders down
      // to the hips (the top's colour)
      caped: { name: 'dress with a mantle', hang: [{ to: 1.95, from: 'waist', flare: 0.5, off: 0.94 },
        { to: 0.02, from: 'shoulders', flare: 0.13, color: 'top' }], sleeves: 'garment', bare: true, bodice: true },
      // the same dress at home, without the mantle
      frock: { name: 'dress', hang: [{ to: 1.85, from: 'waist', flare: 0.38, off: 0.94, folds: false }], sleeves: 'garment', bare: true, bodice: true },
      // an old woman's dress to the floor, fuller, a shawl over the shoulders down to the hips (the top's colour)
      // a working girl's dress to the ankles with a linen apron over it and her keys at the hip (apron)
      aproned: { name: 'dress with an apron', hang: [{ to: 1.85, from: 'waist', flare: 0.42, off: 0.94 }], sleeves: 'garment', bare: true, bodice: true, draw: apron },
      shawled: { name: 'dress with a shawl', hang: [{ to: 2.0, from: 'waist', flare: 0.5, off: 0.96 },
        { to: 0.01, from: 'shoulders', flare: 0.34, color: 'top', folds: false }], sleeves: 'garment', bare: true, bodice: true },
    },
    // hair: hers parted and smoothed in bands down over the temples and the ears to a knot at the nape; the men's brushed
    // up from the brow in a soft wave, down the temples to the sideburns, behind the ears to the nape (the Dreamer's
    // fuller and longer at the collar, the Lodger's close and neat) — so a head reads as a head of hair, never a bare ball or a cap
    hair: {
      bands: { name: 'smooth bands', draw: F => {
        const { add, mul } = V(), h = F.head, K = F.keep(BANDS), o = h.out * 1.03;
        F.shell(h.at, h.axes, K.radii, BANDS_EDGE, 0.06, F.colors.hair, h.sides, h.square);
        // the parting, a fine line of the skin from the brow back over the crown
        F.tube([h.on([0, 0.6, 0.8], o), h.on([0, 0.88, 0.47], o), h.on([0, 1, 0.02], o)], K.part, K.skin, 6, h.axes[0]);
        // the knot of hair low at the nape
        F.ball(add(h.at, add(mul(h.axes[1], -h.r * 0.22), mul(h.axes[2], -h.r * 1.05))), h.axes, K.knot, F.colors.hair, h.sides);
      } },
      swept: { name: 'swept, full', draw: mane(1.08, -0.62) },
      neat: { name: 'swept, neat', draw: mane(1.035, -0.42) },
    },
    hats: {
      // a tall top hat worn a little back on the head: a narrow brim at the brow, the crown a little wider at the top,
      // a silk band round its foot
      tophat: { name: 'top hat', draw: F => {
        const { add, mul, cross, unit } = V(), { at, axes: [hs, hu, hf], r } = F.head, tilt = unit(add(hu, mul(hf, -0.06))), ax = [hs, tilt, cross(hs, tilt)];
        const foot = add(at, mul(hu, r * 0.5)), top = add(foot, mul(tilt, r * 1.0));
        F.ball(add(foot, mul(tilt, r * 0.04)), ax, [r * 1.05, r * 0.045, r * 0.98], F.colors.hat, F.sides * 2);
        F.bar(foot, top, r * 0.68, r * 0.74, [[0, F.colors.hat]], F.sides, hs);
        F.bar(add(foot, mul(tilt, r * 0.06)), add(foot, mul(tilt, r * 0.3)), r * 0.69, r * 0.7, [[0, BAND]], F.sides, hs);
        F.ball(top, ax, [r * 0.74, r * 0.035, r * 0.74], F.colors.hat, F.sides);
      } },
      // an old woman's cap: soft white linen puffed over the crown and the back of the head, its edge round the face
      // a little back from the brow; a ribbon bow under the chin (the accent)
      mobcap: { name: 'cap', draw: F => {
        const { add, mul } = V(), { at, axes, egg, r, out, sides, square } = F.head, [, hu, hf] = axes;
        F.cap(at, axes, egg.map(e => e * r * out * 1.17), [0, 0.66, -0.75], -0.18, F.colors.hat, sides, square);
        F.ball(add(at, add(mul(hu, -r * 1.02), mul(hf, r * 0.3))), axes, [r * 0.17, r * 0.09, r * 0.1], F.colors.accent, 10);
      } },
      // a working woman's kerchief: linen drawn close over the hair and the brow, framing the face, its ends tied in a
      // knot under the chin (the accent), its corner hanging at the nape
      kerchief: { name: 'kerchief', draw: F => {
        const { add, mul } = V(), { at, axes, egg, r, out, sides, square } = F.head, [, hu, hf] = axes;
        F.cap(at, axes, egg.map(e => e * r * out * 1.1), [0, 0.42, -0.91], -0.16, F.colors.hat, sides, square);
        F.ball(add(at, add(mul(hu, -r * 1.0), mul(hf, r * 0.34))), axes, [r * 0.16, r * 0.1, r * 0.1], F.colors.accent, 10);
        F.ball(add(at, add(mul(hu, -r * 0.62), mul(hf, -r * 0.98))), axes, [r * 0.3, r * 0.26, r * 0.1], F.colors.hat, 10);
      } },
    },
    parts: {
      // a top hat held before the chest in both hands, between them, its crown out from the chest
      hat_hands: { name: 'hat in both hands', draw: F => {
        const { mix } = V();
        topHat(F, mix(F.P('LeftHand'), F.P('RightHand'), 0.5), F.fwd('Chest'), F.colors.hat);
      } },
      // a top hat held at the chest in the right hand, its crown out from the chest
      hat_hand: { name: 'hat in the right hand', draw: F => {
        const { add, mul } = V(), m = F.fit.h;
        topHat(F, add(F.P('RightHand'), mul(F.fwd('Chest'), 0.02 * m)), F.fwd('Chest'), F.colors.hat ?? SILK);
      } },
      // the Dreamer's knotty stick in the right hand, its point on the ground a little before the foot, its worn knob
      // over the hand; two knots along it
      cane: { name: 'stick', draw: F => {
        const { add, sub, unit, mix } = V(), m = F.fit.h, hand = F.P('RightHand'), f = F.fwd('Hips'), ahead = unit([f[0], 0, f[2]]);
        const floor = Math.min(F.P('RightFoot')[1], F.P('LeftFoot')[1]) - 0.075 * m, top = add(hand, [0, 0.07 * m, 0]);
        const tip = [hand[0] + ahead[0] * 0.1 * m, floor, hand[2] + ahead[2] * 0.1 * m], along = unit(sub(top, tip)), side = F.side('Hips');
        const axes = [side, along, ahead];
        F.bar(top, tip, 0.014 * m, 0.011 * m, [[0, WOOD]], 8, side);
        F.ball(top, axes, [0.024 * m, 0.022 * m, 0.024 * m], KNOB, 10);
        for (const u of [0.33, 0.6]) F.ball(mix(tip, top, u), axes, [0.019 * m, 0.024 * m, 0.019 * m], WOOD, 8);
      } },
      // a top hat held low before him by its brim in the left hand, shyly: hanging under the hand, its opening to his
      // coat, its crown out before him and a little down
      hat_held: { name: 'hat held before him', draw: F => {
        const { add, unit } = V(), m = F.fit.h, f = F.fwd('Chest');
        topHat(F, add(F.P('LeftHand'), [0, -0.1 * m, 0]), unit(add([f[0], 0, f[2]], [0, -0.3, 0])), F.colors.hat ?? SILK);
      } },
      // a top hat held low at the side by its brim in the left hand, the crown out away from the body and a little
      // down, so it stands clear of him as a hat
      hat_low: { name: 'hat held low', draw: F => {
        const { add, sub, mul, unit } = V(), m = F.fit.h, hand = F.P('LeftHand'), d = sub(hand, F.P('Hips'));
        const out = unit(add(unit([d[0], 0, d[2]]), [0, -0.45, 0]));
        topHat(F, add(hand, [0, -0.11 * m, 0]), out, F.colors.hat ?? SILK);
      } },
      // an open book held in both hands, between them, its pages turned to the reader's face; its point `book`
      book: { name: 'open book', draw: F => {
        const { add, sub, mul, dot, cross, unit, mix } = V(), m = F.fit.h;
        const c = mix(F.P('LeftHand'), F.P('RightHand'), 0.5), s = unit(sub(F.P('RightHand'), F.P('LeftHand')));
        const toFace = unit(sub(F.P('Head'), c)), n = unit(sub(toFace, mul(s, dot(toFace, s)))), axes = [s, n, cross(s, n)];
        F.ball(add(c, mul(n, -0.008 * m)), axes, [0.125 * m, 0.006 * m, 0.09 * m], BOARDS, 10, 6);
        F.ball(add(c, mul(s, -0.059 * m)), axes, [0.06 * m, 0.008 * m, 0.085 * m], PAGES, 10, 6);
        F.ball(add(c, mul(s, 0.059 * m)), axes, [0.06 * m, 0.008 * m, 0.085 * m], PAGES, 10, 6);
        F.point('book', add(c, mul(n, 0.01 * m)));
      } },
      // a folded letter held out in the right hand, upright between the fingers: its long side along the forearm, beyond
      // the hand, its face turned to the side the arm passes (so held out across the body it shows its face, not its
      // edge), a red wax seal on it; its point `letter`
      letter: { name: 'letter', draw: F => heldLetter(F, false) },
      // the same letter after the puddle (Пятно): a brown blot dried on its face
      letter_stained: { name: 'stained letter', draw: F => heldLetter(F, true) },
      // a bundle of her things tied in a kerchief, held before her in both hands (the night she came to him): a soft
      // lump of washed blue cloth, its knot on top between the hands
      bundle: { name: 'bundle', draw: F => {
        const { add, mul, mix } = V(), m = F.fit.h, c = mix(F.P('LeftHand'), F.P('RightHand'), 0.5), f = F.fwd('Chest');
        const axes = [F.side('Chest'), [0, 1, 0], f], at = add(add(c, mul(f, 0.07 * m)), [0, -0.07 * m, 0]);
        F.ball(at, axes, [0.16 * m, 0.12 * m, 0.11 * m], CLOTH, 14);
        F.ball(add(at, [0, 0.12 * m, 0]), axes, [0.05 * m, 0.04 * m, 0.04 * m], CLOTH_KNOT, 10);
        for (const s of [-1, 1]) F.ball(add(at, add(mul(axes[0], s * 0.045 * m), [0, 0.15 * m, 0])), axes, [0.035 * m, 0.022 * m, 0.02 * m], CLOTH_KNOT, 8);
        F.point('bundle', at);
      } },
      // a stack of three books carried in both hands before the waist (the Lodger's, going up to the mezzanine)
      books: { name: 'books', draw: F => {
        const { add, mul, mix } = V(), m = F.fit.h, c = mix(F.P('LeftHand'), F.P('RightHand'), 0.5), f = F.fwd('Chest');
        const axes = [F.side('Chest'), [0, 1, 0], f], at = add(c, mul(f, 0.08 * m));
        const cols = [BOARDS, [0.3, 0.33, 0.42, 1], [0.45, 0.2, 0.18, 1]];
        cols.forEach((col, i) => F.ball(add(at, [0, (0.02 + i * 0.05) * m, 0]), axes, [(0.13 - i * 0.01) * m, 0.024 * m, 0.1 * m], col, 4, 3));
        F.point('books', at);
      } },
    },
  },
};
