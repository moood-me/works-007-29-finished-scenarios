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
    // brown hair (not the Lodger's black), bare-headed: his hat is in his hands (the parts hat_held, hat_hands, hat_hand,
    // hat_low), his knotty stick in the right (cane)
    dreamer: { kind: 'shapes', style: 'litho', who: 'man', garment: 'frockcoat', hair: 'short',
      body: { height: 1.0, thick: 0.84, shoulders: 0.94, neck: 1.05 },
      colors: { skin: '#e2c0a4', hair: '#6a4a32', top: '#e8e2d6', garment: '#66765b', bottom: '#77736c', shoes: '#2a2522', hat: '#5e5249' } },
    // Nastenka, seventeen: small and quick, a pale lilac-grey dress with a dark short cape over the shoulders, a light
    // straw bonnet with a ribbon tied under the chin, dark hair parted smooth
    nastenka: { kind: 'shapes', style: 'litho', who: 'woman', garment: 'caped', hair: 'short', hat: 'bonnet',
      body: { height: 0.93, thick: 0.8, shoulders: 0.86, head: 1.03 },
      colors: { skin: '#efd2bb', hair: '#3b2a22', top: '#5a6482', garment: '#b9adc4', hat: '#e4d6b4', accent: '#8e3f4e', shoes: '#2c2628' } },
    // the Lodger, about twenty-eight: tall, upright, a well-brushed long slate-blue frock coat, black hair under a tall
    // black top hat (tophat; at his chest instead: "_wear": {"hat": "none"} and the part hat_hand)
    lodger: { kind: 'shapes', style: 'litho', who: 'man', garment: 'longcoat', hair: 'short', hat: 'tophat',
      body: { height: 1.05, thick: 0.92, shoulders: 1.02 },
      colors: { skin: '#dcb898', hair: '#2a211d', top: '#ece8e0', garment: '#4a5a78', bottom: '#4a4c55', shoes: '#211f22', hat: '#2b2b31' } },
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
    styles: { litho: { from: 'shadow', name: 'Lithograph', head: 1.55, egg: [0.94, 1.04, 0.99], neck: 0.72, legs: 1.0, limb: 1.2, feet: 'wedge', sides: 24,
      trunk: { w: [0.88, 0.94, 0.8, 0.92, 0.98], d: [0.96, 1.0, 0.92, 0.94, 0.86] }, arms: 'litho', paint: 'toned', line: 2.2, tinted: false,
      face: 'litho', ragged: 0, folds: { n: 11, depth: 0.1 }, ground: 'litho' } },
    // the arms of the style: a sleeve full at the shoulder, the forearm tapering to a real wrist, a hand with a palm as
    // wide as a hand is (its fingers the style's own) — a hand on the granite or round a hat's brim reads as a hand
    arms: { litho: [[0, 0.05], [0.5, 0.046], [1, 0.037], [1.5, 0.034], [1.9, 0.027], [2, 0.022], [2.35, 0.03], [2.75, 0.029], [3, 0.021]] },
    // the paper and the ink of the scenes' lithograph: the line is the houses' sepia (their lib's INK)
    grounds: { litho: { name: 'lithograph', bg: '#ece5d6', ink: '#4a3f3a', grid: '#dcd4c4', rim: '#e9b97c' } },
    // a face that reads at a few metres: eyes with their whites, a dark iris and the upper lid drawn in ink, brows of the
    // hair's colour, a nose, rosy lips, a little colour in the cheeks — as the person's <id>_mood has it (MOODS: the
    // same solids for every expression, only where they are changes, so one goes over into another)
    faces: { litho: { name: 'lithograph', draw: F => {
      const { axes, r: rh, on } = F.head, [, hu] = axes, x = MOODS[F.look.expression] ?? MOODS.neutral;
      const skin = F.colors.skin, brow = F.colors.hair.map(v => v * 0.7), crease = [skin[0] * 0.8, skin[1] * 0.68, skin[2] * 0.66];
      const cheek = [skin[0], skin[1] * 0.86, skin[2] * 0.86], lips = [skin[0] * 0.8, skin[1] * 0.46, skin[2] * 0.48];
      const lower = [skin[0] * 0.86, skin[1] * 0.56, skin[2] * 0.57], open = Math.min(1, x.eye), up = 1.3;
      for (const sx of [-1, 1]) {
        // (on the head's drawn surface, which stands a little out of its radius: the features a little out of it too)
        F.ball(on([sx * 0.5, -0.22, 0.83], 1.01), axes, [rh * 0.14, rh * 0.085, rh * 0.03], cheek, 10);
        // the eye: its white, the iris a little under the lid (its top hidden: a living look), a glint in it, the upper
        // lid a heavy ink line drawn out at its outer end, the lower lid a fine crease
        F.ball(on([sx * 0.34, 0.05, 0.94], 1.02), axes, [rh * 0.17, rh * 0.115 * x.eye, rh * 0.05], WHITE, 12);
        F.ball(on([sx * 0.33, 0.035, 0.955], 1.045), axes, [rh * 0.095, rh * 0.105 * open, rh * 0.045], IRIS, 10);
        F.ball(on([sx * 0.31, 0.075, 0.96], 1.07), axes, [rh * 0.026, rh * 0.026, rh * 0.02], GLINT, 6);
        F.tube([on([sx * 0.16, 0.06 + 0.1 * x.eye, 0.93], 1.07), on([sx * 0.34, 0.1 + 0.115 * x.eye, 0.945], 1.08), on([sx * 0.54, 0.07 + 0.085 * x.eye, 0.84], 1.07)],
          [[0, rh * 0.03], [1, rh * 0.05], [2, rh * 0.034]], [[0, LID]], 6, hu);
        F.tube([on([sx * 0.2, 0.05 - 0.09 * x.eye, 0.93], 1.035), on([sx * 0.34, 0.04 - 0.115 * x.eye, 0.94], 1.04), on([sx * 0.5, 0.05 - 0.07 * x.eye, 0.87], 1.035)],
          [[0, rh * 0.012], [1, rh * 0.018], [2, rh * 0.012]], [[0, crease]], 6, hu);
        // the brow, as the mood lifts or knits it
        F.tube([on([sx * 0.13, 0.33 + x.inner * up, 0.93], 1.05), on([sx * 0.32, 0.37 + ((x.inner + x.outer) * up) / 2, 0.9], 1.06), on([sx * 0.54, 0.31 + x.outer * up, 0.82], 1.05)],
          [[0, rh * 0.055], [1, rh * 0.06], [2, rh * 0.03]], [[0, brow]], 6, hu);
      }
      // the nose, the shade under it
      F.ball(on([0, -0.1, 1], 1.0), axes, [rh * 0.085, rh * 0.16, rh * 0.13], skin.map(v => v * 0.95), 10);
      F.tube([on([-0.08, -0.25, 0.96], 1.04), on([0, -0.28, 0.99], 1.06), on([0.08, -0.25, 0.96], 1.04)], [[0, rh * 0.014], [1, rh * 0.02], [2, rh * 0.014]], [[0, crease]], 6, hu);
      // (the mouth: its corners up or down, open — a dark oval within it — or closed: an open one no wider than nothing;
      // the upper lip a line of the lips' colour, the lower a fuller curve under it)
      const w = x.wide * 1.3, y = -0.44, c = x.corners * up;
      F.ball(on([0, y - x.open / 2, 0.95], 1.01), axes, [rh * w * 0.75, rh * x.open, rh * 0.03], IRIS, 10);
      F.tube([on([-w, y + c, 0.93], 1.04), on([0, y + 0.01, 0.945], 1.055), on([w, y + c, 0.93], 1.04)], [[0, rh * 0.028], [1, rh * 0.042], [2, rh * 0.028]], [[0, lips]], 6, hu);
      F.tube([on([-w * 0.7, y + c * 0.6 - 0.04, 0.93], 1.035), on([0, y - 0.075 - x.open, 0.94], 1.045), on([w * 0.7, y + c * 0.6 - 0.04, 0.93], 1.035)],
        [[0, rh * 0.02], [1, rh * 0.04], [2, rh * 0.02]], [[0, lower]], 6, hu);
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
      frock: { name: 'dress', hang: [{ to: 1.85, from: 'waist', flare: 0.38, off: 0.94, folds: false }], sleeves: 'garment', bare: true, bodice: true },
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
    },
  },
};
