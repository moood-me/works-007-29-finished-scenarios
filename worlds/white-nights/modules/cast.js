// The people of «White Nights» as people in a scene (an element with "person"): who they are — figures of shapes in
// this world's style, `litho`: slender people of the 1840s drawn with a fine ink line that is a darker shade of what it
// edges, their clothes washed in soft colours and lit by the scene's own light, like an old lithograph touched with
// watercolour — and what they hold. cast.md says who is who and what each part is. A part's lengths are a man's
// metres times F.fit.h (the person's height as a share of a man's 1.76 m).
const V = () => MooodShapes.V;
const SILK = [0.13, 0.12, 0.13, 1], BAND = [0.22, 0.2, 0.22, 1];
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
      colors: { skin: '#e2c0a4', hair: '#4a3427', top: '#e8e2d6', garment: '#4f5d4c', bottom: '#77736c', shoes: '#2a2522', hat: '#2b2826' } },
    // Nastenka, seventeen: small and quick, a pale lilac-grey dress with a dark short cape over the shoulders, a light
    // straw bonnet with a ribbon tied under the chin, dark hair parted smooth
    nastenka: { kind: 'shapes', style: 'litho', who: 'woman', garment: 'caped', hair: 'short', hat: 'bonnet',
      body: { height: 0.93, thick: 0.8, shoulders: 0.86, head: 1.03 },
      colors: { skin: '#efd2bb', hair: '#3b2a22', top: '#46506a', garment: '#b9adc4', hat: '#e4d6b4', accent: '#8e3f4e', shoes: '#2c2628' } },
    // the Lodger, about twenty-eight: tall, upright, a well-brushed dark frock coat, his top hat at his chest
    lodger: { kind: 'shapes', style: 'litho', who: 'man', garment: 'longcoat', hair: 'short',
      body: { height: 1.05, thick: 0.92, shoulders: 1.02 },
      colors: { skin: '#dcb898', hair: '#2a211d', top: '#ece8e0', garment: '#2a2f3a', bottom: '#33353c', shoes: '#1c1b1d', hat: '#1f1e22' } },
  },
  shapes: {
    // the world's style: the slender figure of `shadow` (a small head, a long neck, hands with fingers, pointed shoes)
    // in colours under the scene's light, a fine tinted line round each colour, a face that reads
    styles: { litho: { from: 'shadow', name: 'Lithograph', head: 1.04, neck: 1.1, paint: 'toned', line: 1.3, tinted: true,
      face: 'simple', ragged: 0, folds: { n: 6, depth: 0.05 }, ground: 'paper' } },
    garments: {
      // a frock coat: from the shoulders to the knee, long sleeves
      frockcoat: { name: 'frock coat', hang: [{ to: 1.0, from: 'shoulders', flare: 0.14 }], sleeves: 'garment' },
      // a longer, fuller frock coat to below the knee
      longcoat: { name: 'long frock coat', hang: [{ to: 1.15, from: 'shoulders', flare: 0.18 }], sleeves: 'garment' },
      // a dress to the ankles from the waist, its bodice and sleeves in its colour, a mantle over the shoulders down
      // to the hips (the top's colour)
      caped: { name: 'dress with a mantle', hang: [{ to: 1.95, from: 'waist', flare: 0.42, off: 0.94 },
        { to: 0.02, from: 'shoulders', flare: 0.28, color: 'top', folds: false }], sleeves: 'garment', bare: true, bodice: true },
    },
    hats: {
      // a bonnet: a deep straw cap over the crown and the back of the head, standing off it, framing the face; a
      // ribbon bow under the chin (the accent)
      bonnet: { name: 'bonnet', draw: F => {
        const { add, mul } = V(), { at, axes, egg, r, out, sides, square } = F.head, [, hu, hf] = axes;
        F.cap(at, axes, egg.map(e => e * r * out * 1.22), [0, 0.5, -0.86], -0.3, F.colors.hat, sides, square);
        F.ball(add(at, add(mul(hu, -r * 1.02), mul(hf, r * 0.32))), axes, [r * 0.2, r * 0.11, r * 0.12], F.colors.accent, 10);
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
    },
  },
};
