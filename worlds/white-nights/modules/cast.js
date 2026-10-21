// The people of «White Nights» as people in a scene (an element with "person"): who they are — figures of shapes in
// this world's style, `litho`: slender people of the 1840s, their heads a little larger than life, drawn round with the
// houses' sepia ink line, their clothes washed in soft colours, folded and shaded under the scene's own light, like an
// old lithograph touched with watercolour — and what they hold. cast.md says who is who and what each part is. A part's lengths are a man's
// metres times F.fit.h (the person's height as a share of a man's 1.76 m).
const V = () => MooodShapes.V;
const SILK = [0.13, 0.12, 0.13, 1], BAND = [0.22, 0.2, 0.22, 1];
// a book's: its boards (a worn brown calf) and its pages (old paper)
// a face's: the eyes' whites, the iris (and an open mouth's dark), the upper lid's ink line
const WHITE = [0.95, 0.92, 0.88, 1], IRIS = [0.24, 0.17, 0.14, 1], LID = [0.27, 0.21, 0.19, 1];
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
return {
  ...data,
  characters: {
    // the Dreamer, twenty-six: thin, a little stooped, a clerk's worn frock coat of faded bottle green, grey trousers,
    // dark brown hair; his hat is in his hands (the parts hat_hands, hat_hand)
    dreamer: { kind: 'shapes', style: 'litho', who: 'man', garment: 'frockcoat', hair: 'short',
      body: { height: 1.0, thick: 0.84, shoulders: 0.94, neck: 1.05 },
      colors: { skin: '#e2c0a4', hair: '#4a3427', top: '#e8e2d6', garment: '#4f5d4c', bottom: '#77736c', shoes: '#2a2522', hat: '#5e5249' } },
    // Nastenka, seventeen: small and quick, a pale lilac-grey dress with a dark short cape over the shoulders, a light
    // straw bonnet with a ribbon tied under the chin, dark hair parted smooth
    nastenka: { kind: 'shapes', style: 'litho', who: 'woman', garment: 'caped', hair: 'short', hat: 'bonnet',
      body: { height: 0.93, thick: 0.8, shoulders: 0.86, head: 1.03 },
      colors: { skin: '#efd2bb', hair: '#3b2a22', top: '#5a6482', garment: '#b9adc4', hat: '#e4d6b4', accent: '#8e3f4e', shoes: '#2c2628' } },
    // the Lodger, about twenty-eight: tall, upright, a well-brushed dark frock coat, his top hat at his chest
    lodger: { kind: 'shapes', style: 'litho', who: 'man', garment: 'longcoat', hair: 'short',
      body: { height: 1.05, thick: 0.92, shoulders: 1.02 },
      colors: { skin: '#dcb898', hair: '#2a211d', top: '#ece8e0', garment: '#3c475c', bottom: '#4a4c55', shoes: '#211f22', hat: '#3a3e4b' } },
    // Grandmother, past seventy and blind: small, a dark plum silk dress of long ago to the floor, a faded mustard shawl
    // over the shoulders, white hair under a white cap tied with a lilac ribbon under the chin
    babushka: { kind: 'shapes', style: 'litho', who: 'woman', garment: 'shawled', hair: 'bun', hat: 'mobcap',
      body: { height: 0.88, thick: 0.96, shoulders: 0.86, head: 1.04 },
      colors: { skin: '#e8d0bd', hair: '#ddd7cd', top: '#c4a568', garment: '#4c3f47', hat: '#f3efe6', accent: '#8a7598', shoes: '#2a2426' } },
  },
  shapes: {
    // the world's style: the slender figure of `shadow` (a small head, a long neck, hands with fingers, pointed shoes)
    // in colours under the scene's light, a fine tinted line round each colour, a face that reads
    // the world's style: a slender figure of the 1840s made from `shadow` (hands with fingers, pointed shoes), rounder in
    // its trunk than that silhouette's so it stands in the street as a body, not a cut-out; its head larger than life
    // and rounder, so a face reads across the street; washed in colours under the scene's light and shaded (`toned`),
    // drawn round with the houses' own sepia ink line (the ground `litho`); its cloth folded in long strokes as a
    // lithograph hatches it; the face `litho`
    styles: { litho: { from: 'shadow', name: 'Lithograph', head: 1.34, egg: [0.9, 1.06, 0.98], neck: 0.8, legs: 1.0, limb: 1.04, sides: 24,
      trunk: { w: [0.88, 0.94, 0.8, 0.92, 0.98], d: [0.96, 1.0, 0.92, 0.94, 0.86] }, paint: 'toned', line: 1.9, tinted: false,
      face: 'litho', ragged: 0, folds: { n: 9, depth: 0.07 }, ground: 'litho' } },
    // the paper and the ink of the scenes' lithograph: the line is the houses' sepia (their lib's INK)
    grounds: { litho: { name: 'lithograph', bg: '#ece5d6', ink: '#4a3f3a', grid: '#dcd4c4', rim: '#e9b97c' } },
    // a face that reads at a few metres: eyes with their whites, a dark iris and the upper lid drawn in ink, brows of the
    // hair's colour, a nose, rosy lips, a little colour in the cheeks — as the person's <id>_mood has it (MOODS: the
    // same solids for every expression, only where they are changes, so one goes over into another)
    faces: { litho: { name: 'lithograph', draw: F => {
      const { axes, r: rh, on } = F.head, [, hu] = axes, x = MOODS[F.look.expression] ?? MOODS.neutral;
      const skin = F.colors.skin, brow = F.colors.hair.map(v => v * 0.8), cheek = [skin[0], skin[1] * 0.86, skin[2] * 0.84];
      const lips = [skin[0] * 0.8, skin[1] * 0.5, skin[2] * 0.5], open = Math.min(1, x.eye);
      for (const sx of [-1, 1]) {
        F.ball(on([sx * 0.5, -0.2, 0.84], 0.99), axes, [rh * 0.13, rh * 0.08, rh * 0.03], cheek, 10);
        F.ball(on([sx * 0.34, 0.06, 0.94], 0.99), axes, [rh * 0.125, rh * 0.085 * x.eye, rh * 0.04], WHITE, 12);
        F.ball(on([sx * 0.32, 0.05, 0.95], 1.0), axes, [rh * 0.065, rh * 0.075 * open, rh * 0.035], IRIS, 10);
        F.tube([on([sx * 0.2, 0.08 + 0.07 * x.eye, 0.93], 1.0), on([sx * 0.34, 0.1 + 0.085 * x.eye, 0.94], 1.005), on([sx * 0.48, 0.07 + 0.06 * x.eye, 0.86], 1.0)],
          [[0, rh * 0.016], [1, rh * 0.024], [2, rh * 0.018]], [[0, LID]], 6, hu);
        F.tube([on([sx * 0.15, 0.33 + x.inner, 0.93], 0.995), on([sx * 0.31, 0.36 + (x.inner + x.outer) / 2, 0.9], 1.0), on([sx * 0.47, 0.31 + x.outer, 0.83], 0.995)],
          [[0, rh * 0.034], [1, rh * 0.038], [2, rh * 0.024]], [[0, brow]], 6, hu);
      }
      F.ball(on([0, -0.12, 1], 0.97), axes, [rh * 0.085, rh * 0.14, rh * 0.12], skin.map(v => v * 0.95), 10);
      // (the mouth: its corners up or down, open — a dark oval within it — or closed: an open one no wider than nothing)
      const w = x.wide, y = -0.4;
      F.ball(on([0, y - x.open / 2, 0.95], 0.975), axes, [rh * w * 0.75, rh * x.open, rh * 0.03], IRIS, 10);
      F.tube([on([-w, y + x.corners, 0.93], 0.995), on([0, y, 0.945], 1.0), on([w, y + x.corners, 0.93], 0.995)], [[0, rh * 0.02], [1, rh * 0.03], [2, rh * 0.02]], [[0, lips]], 6, hu);
    } } },
    garments: {
      // a frock coat: from the shoulders to the knee, long sleeves
      frockcoat: { name: 'frock coat', hang: [{ to: 1.0, from: 'shoulders', flare: 0.14 }], sleeves: 'garment' },
      // a longer, fuller frock coat to below the knee
      longcoat: { name: 'long frock coat', hang: [{ to: 1.15, from: 'shoulders', flare: 0.18 }], sleeves: 'garment' },
      // a dress to the ankles from the waist, its bodice and sleeves in its colour, a mantle over the shoulders down
      // to the hips (the top's colour)
      caped: { name: 'dress with a mantle', hang: [{ to: 1.95, from: 'waist', flare: 0.5, off: 0.94 },
        { to: 0.02, from: 'shoulders', flare: 0.28, color: 'top', folds: false }], sleeves: 'garment', bare: true, bodice: true },
      // the same dress at home, without the mantle
      frock: { name: 'dress', hang: [{ to: 1.95, from: 'waist', flare: 0.5, off: 0.94 }], sleeves: 'garment', bare: true, bodice: true },
      // an old woman's dress to the floor, fuller, a shawl over the shoulders down to the hips (the top's colour)
      shawled: { name: 'dress with a shawl', hang: [{ to: 2.0, from: 'waist', flare: 0.5, off: 0.96 },
        { to: 0.01, from: 'shoulders', flare: 0.34, color: 'top', folds: false }], sleeves: 'garment', bare: true, bodice: true },
    },
    hats: {
      // a bonnet: a deep straw cap over the crown and the back of the head, standing off it, framing the face; a
      // ribbon bow under the chin (the accent)
      bonnet: { name: 'bonnet', draw: F => {
        const { add, mul } = V(), { at, axes, egg, r, out, sides, square } = F.head, [, hu, hf] = axes;
        F.cap(at, axes, egg.map(e => e * r * out * 1.22), [0, 0.5, -0.86], -0.3, F.colors.hat, sides, square);
        F.ball(add(at, add(mul(hu, -r * 1.02), mul(hf, r * 0.32))), axes, [r * 0.2, r * 0.11, r * 0.12], F.colors.accent, 10);
      } },
      // an old woman's cap: soft white linen puffed over the crown and the back of the head, its edge round the face
      // a little back from the brow; a ribbon bow under the chin (the accent)
      mobcap: { name: 'cap', draw: F => {
        const { add, mul } = V(), { at, axes, egg, r, out, sides, square } = F.head, [, hu, hf] = axes;
        F.cap(at, axes, egg.map(e => e * r * out * 1.17), [0, 0.66, -0.75], -0.18, F.colors.hat, sides, square);
        F.ball(add(at, add(mul(hu, -r * 1.02), mul(hf, r * 0.3))), axes, [r * 0.17, r * 0.09, r * 0.1], F.colors.accent, 10);
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
    },
  },
};
